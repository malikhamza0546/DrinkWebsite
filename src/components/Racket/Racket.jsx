import React, { useState } from "react"
import { Grid, Button, useMediaQuery, useTheme, Box } from "@mui/material"
import img from "../../assets/images/img.png"
import headerImage1 from "../../assets/images/headerImage1.png"
import { makeStyles } from "@mui/styles"
import colors from "../../assets/colors"
import { RACKET } from "../../services/slider"
import assets from "../../assets/assets"
import appetizer from "../../assets/images/appetizer.png"
import { useNavigate } from "react-router-dom"

import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { CalendarPicker } from "@mui/x-date-pickers/CalendarPicker"
import { MonthPicker } from "@mui/x-date-pickers/MonthPicker"
import { YearPicker } from "@mui/x-date-pickers/YearPicker"
import ButtonOne from "../../components/Forms/Button/AuthButton"
import { getProducts, getTimeSlot, postReservation } from "../../services/API"
import { useParams } from "react-router"
import { FaUser } from "react-icons/fa"
import { useEffect } from "react"
import moment from "moment"
import Notification from "../../components/Notification"
import { useDispatch } from "react-redux"

import Typography from "@mui/material/Typography"
import Modal from "@mui/material/Modal"

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 600,
	bgcolor: "background.paper",
	// border: "2px solid #000",
	borderRadius: 4,
	boxShadow: 24,
	p: 4,
}

const minDate = new Date("2020-01-01T00:00:00.000")
const maxDate = new Date("2034-01-01T00:00:00.000")

const Racket = ({ EstablishmentID, phoneNumber, address }) => {
	const classes = useStyles()
	const navigate = useNavigate()

	const theme = useTheme()
	const isXS = useMediaQuery(theme.breakpoints.down("sm"))
	const isMD = useMediaQuery(theme.breakpoints.down("md"))
	const dispatch = useDispatch()

	const [active, setActive] = useState(true)
	const [tab, setTab] = useState("Food Menu")
	const [mainTab, setMainTab] = useState("Menu")
	const [confirm, setConfirm] = useState(true)
	const [date, setDate] = useState(new Date())
	const [data, setAPIData] = useState([])
	const [changeDate, setChangeDate] = useState()
	const [timeSlotData, getTimeSlotData] = useState([])
	const [quantity, setQuantity] = useState(1)
	const [selected, setSelected] = useState(false)
	const [slot, setSlot] = useState("")
	const [reservationAPI, setReservationApi] = useState("")

	//mui modal
	const [open, setOpen] = React.useState(false)
	const handleOpen = () => setOpen(true)
	const handleClose = () => setOpen(false)

	const setSlotFunc = (item) => {
		console.log("item", item)
		const convertedTIme = moment
			.duration(moment(item, "HH:mm").format("HH:mm"))
			.asSeconds()
		setSlot(convertedTIme)
	}

	// const currentDate = moment().format("YYYY-MM-DD");

	const dateFinal = moment(date).format("YYYY-MM-DD")
	console.log("date final....", data)

	const obj = {}

	obj["slot"] = slot
	obj["partySize"] = quantity
	obj["date"] = dateFinal && dateFinal
	console.log("obj", obj)

	const EstablishID = EstablishmentID?.EstablishmentID

	const check = (date) => {
		const alpha = date.map((item) => moment.utc(item * 1000).format("HH:mm"))
		setChangeDate(alpha)
	}
	const handleQuantity = (type) => {
		if (type === "dec") {
			quantity > 1 && setQuantity(quantity - 1)
		} else {
			setQuantity(quantity + 1)
		}
	}

	const ProductGetter = async () => {
		try {
			const response = await getProducts(EstablishID, "food")
			setAPIData(response?.data)
			console.log("response in ProductGetter", response?.data)
		} catch (e) {
			console.log(e, " else Body Error")
		}
	}

	const TimeSlotGetter = async () => {
		try {
			const response = await getTimeSlot(EstablishID, dateFinal)
			check(response?.data)
			getTimeSlotData(changeDate)
			console.log("response in time slot getter", response?.data)
		} catch (e) {
			console.log(e, " else Body Error")
		}
	}

	const TimeSlotGetterOnClick = async (EstablishID, currentDate) => {
		setDate(currentDate)
		const dateOnClick = moment(currentDate).format("YYYY-MM-DD")
		console.log("isisisisisisisis", dateOnClick)

		try {
			const response = await getTimeSlot(EstablishID, dateOnClick)
			check(response?.data)
			getTimeSlotData(changeDate)
			console.log("response in time slot onclicccckk", response?.data)
		} catch (e) {
			console.log(e, " else Body Error")
		}
	}

	const ProductGetterOnClick = async (EstablishmentID, catagory) => {
		try {
			const response = await getProducts(EstablishmentID, catagory)
			setAPIData(response?.data)
		} catch (e) {
			console.log(e, " else Body Error")
		}
	}

	const PostReservationOnClick = async (EstablishmentID, obj) => {
		dispatch({ type: "START_LOADER", payload: "Making Reservation..." })

		try {
			const response = await postReservation(EstablishmentID, obj)
			setReservationApi(response?.data)
			handleOpen()
			Notification("success", "Reservation Done")
			dispatch({ type: "STOP_LOADER" })
		} catch (e) {
			console.log(e.response.data.message, " else Body Error")
			Notification("error", "Time Slot not available")
			dispatch({ type: "STOP_LOADER" })

			// <Notification type="success" notify="Reservation Done" />;
		}
	}

	useEffect(() => {
		ProductGetter()
		TimeSlotGetter()
	}, [])
	return (
		<Grid
			container
			direction="row"
			justifyContent="center"
			alignItems="center"
			className={classes.container}
		>
			<Grid>
				<Grid xs={12} lg={24} className="sm:mt-32  mt-0">
					{isXS && <img src={headerImage1} className="w-full" />}
					<img src={img} className={classes.image} />
				</Grid>
				<Grid xs={24} className="sm:mt-12 mt-6 px-8 sm:px-0">
					<p className={`mb-2 ${classes.title}`}>Racket</p>
					<div className={`flex  ${classes.address}`}>
						<p className={classes.detail}>
							{" "}
							{address?.streetName} | {address?.city} {address?.state}
						</p>
						<p className={`ml-8 ${classes.detail}`}>{phoneNumber} </p>
					</div>
				</Grid>
				<Grid
					xs={12}
					className="w-full flex jusitfy-center sm:gap-12 gap-0 mt-8"
				>
					<Button
						className={
							mainTab == "Menu" ? classes.buttonActive : classes.buttonDisabled
						}
						variant="contained"
						sx={
							mainTab == "Menu"
								? {
										borderRadius: ["0px", "8px"],
										color: "white",
								  }
								: { borderRadius: ["0px", "8px"], backgroundColor: "#EDEEF2" }
						}
						onClick={() => {
							setMainTab("Menu")
						}}
					>
						Menu
					</Button>
					<Button
						className={
							mainTab == "Reservation"
								? classes.buttonActive
								: classes.buttonDisabled
						}
						variant="contained"
						sx={
							mainTab == "Reservation"
								? {
										borderRadius: ["0px", "8px"],
										color: "white",
								  }
								: { borderRadius: ["0px", "8px"], backgroundColor: "#EDEEF2" }
						}
						onClick={() => {
							setMainTab("Reservation")
						}}
					>
						Reservations
					</Button>
				</Grid>
				{mainTab == "Menu" && (
					<>
						<Grid
							xs={24}
							className="flex justify-between xl:px-32 lg-16 md:px-8 px-8 pt-16"
						>
							{RACKET.map((item, i) => (
								<div
									className={`flex justify-center items-center flex-col  ${classes.item}`}
									onClick={() => {
										setTab(item.name)
										ProductGetterOnClick(EstablishID, item?.APIProductName)
									}}
								>
									<div
										className={
											tab == item.name
												? ` w-14 h-14 rounded-full text-center items-center relative sm:mt-2 mt-0 bg-[#FF9901] flex justify-center`
												: ` w-14 h-14 rounded-full text-center items-center relative sm:mt-2 mt-0 bg-[#EDEEF2] flex justify-center`
										}
									>
										{tab == item.name ? (
											<img
												src={item.picwhite}
												style={{
													width:
														item.name == "Bottles"
															? 15
															: item.name == "Desserts"
															? 15
															: 20,
													height:
														item.name == "Bottles"
															? 25
															: item.name == "Desserts"
															? 25
															: 20,
												}}
											/>
										) : (
											<img
												src={item.pic}
												style={{
													width:
														item.name == "Bottles"
															? 15
															: item.name == "Desserts"
															? 15
															: 20,
													height:
														item.name == "Bottles"
															? 25
															: item.name == "Desserts"
															? 25
															: 20,
												}}
											/>
										)}
									</div>
									<div
										className={`md:text-base text-sm hidden md:block flex ${classes.info}`}
									>
										{item.name}
									</div>
								</div>
							))}
						</Grid>
						{data.length > 0 ? (
							data.map((item, i) => (
								<Grid
									xs={24}
									lg={24}
									md={24}
									className={`px-8 sm:px-0 ${classes.top}`}
								>
									{item?.products.length > 0 && (
										<p className={`mt-8  ${classes.appetizer}`}>{item?.name}</p>
									)}
									<Grid className="flex flex-wrap sm:gap-4 gap-0 ">
										{item?.products?.map((obj) => (
											<div
												className={`mb-6  ${classes.appetizerOuter}`}
												onClick={() => {
													console.log(" Data to be in Reducer", obj)
													// dispatch({ type: "Products", payload: obj })
													navigate("/cart", {
														state: {
															ID: obj?.id,
															productName: obj?.name,
															productDescripion: obj?.description,
															EstablishmentID: EstablishID,
															payload: obj,
														},
													})
												}}
											>
												<div className="flex sm:p-4 sm:ml-2 ml-0 sm:pl-0 p-4">
													<img
														src={obj?.image}
														className={classes.InnerImage}
													/>

													<div className="w-full">
														<div className="flex flex-row justify-between w-full ">
															<p
																className={`text-base font-bold text-black ml-3 mr-16 ${classes.font}`}
															>
																{obj?.name}
															</p>
															<p
																className={`text-base font-bold text-black ${classes.font}`}
															>
																{obj?.price}
															</p>
														</div>
														<p
															className={`text-xs mt-3 font-normal text-black ml-3 ${classes.font}`}
														>
															{obj?.description}
														</p>
													</div>
												</div>
											</div>
										))}
									</Grid>
								</Grid>
							))
						) : (
							<div className="flex items-center justify-center mt-4">
								<div
									className={`${classes.notFoundContainer} flex items-center justify-center `}
								>
									<div className="prodNotFound">Product Not Found</div>
								</div>
							</div>
						)}
					</>
				)}

				{mainTab == "Reservation" && (
					<Grid xs={24} className="px-8">
						<Grid
							container
							direction="row"
							justifyContent="space-between"
							alignItems="center"
							className="py-8"
						>
							<Grid item>
								<div className="font-nunito font-bold text-lg">Party Size</div>
							</Grid>
							<Grid item>
								<div className="flex align-center justify-center ">
									<div
										className={classes.removeCart}
										onClick={() => handleQuantity("dec")}
									>
										-
									</div>
									<div className={classes.number}>{quantity}</div>
									<div
										className={classes.addCart}
										onClick={() => handleQuantity("inc")}
									>
										+
									</div>
								</div>
							</Grid>
						</Grid>

						<Grid
							container
							direction="column"
							alignItems="center"
							justifyContent="center"
							className="h-80"
						>
							<Grid item>
								<LocalizationProvider dateAdapter={AdapterDateFns}>
									<CalendarPicker
										date={date}
										onChange={(newDate) =>
											TimeSlotGetterOnClick(EstablishID, newDate)
										}
									/>
								</LocalizationProvider>
							</Grid>

							{/* <Grid item className="h-full overflow-y-auto">
                {time.map((item) => (
                  <div className="w-24 flex items-center justify-center h-9 rounded-lg border-slate-600 bg-[#FF9901] mb-4 ">
                    <p>{item.time}</p>
                  </div>
                ))}
              </Grid> */}
						</Grid>

						<Grid
							container
							direction="column"
							alignItems="center"
							justifyContent="center"
						>
							<div className=" flex w-80 pt-12 flex-row overflow-x-auto">
								{changeDate && changeDate.length > 0 ? (
									changeDate.map((item) => (
										<div
											// className="w-28 p-2 mr-4 flex items-center justify-center h-9 rounded-lg border-slate-600 bg-[#FF9901] mb-4 "
											className={
												item == moment.utc(slot * 1000).format("HH:mm")
													? "w-28 p-2 mr-4 flex items-center justify-center h-9 rounded-lg border-slate-600 bg-[#FF9901] mb-4 cursor-pointer "
													: "w-28 p-2 mr-4 flex items-center justify-center h-9 rounded-lg border-slate-600 bg-[#DADADA] mb-4 cursor-pointer"
											}
											onClick={() => setSlotFunc(item)}
										>
											<p>{item}</p>
										</div>
									))
								) : (
									<div className={classes.detail}>No Slots Avaiable</div>
								)}
								{/* {time.map((item) => (
                  <div
                    className={
                      selected == true
                        ? "w-28 p-2 mr-4 flex items-center justify-center h-9 rounded-lg border-slate-600 bg-[#FF9901] mb-4 "
                        : "w-28 p-2 mr-4 flex items-center justify-center h-9 rounded-lg border-slate-600 bg-[#FFFF] mb-4 "
                    }
                  >
                    <p onClick={() => setSelected(true)}>{item.time}</p>
                  </div>
                ))} */}
							</div>
						</Grid>

						<Grid container className="mt-16">
							<button
								style={{ fontSize: 13, height: 45 }}
								className="flex bg-black w-full text-whiteColor font-bold py-2 px-4 rounded items-center"
								onClick={() => PostReservationOnClick(EstablishmentID, obj)}
							>
								<span className="text-center m-auto">{"Reservation"}</span>
							</button>
						</Grid>
					</Grid>
				)}

				<Modal
					open={open}
					onClose={handleClose}
					aria-labelledby="modal-modal-title"
					aria-describedby="modal-modal-description"
				>
					<Box sx={style}>
						{confirm && (
							<Grid>
								<Box>
									<Grid
										container
										direction="column"
										justifyContent="center"
										alignItems="center"
									>
										<div>
											<div className="font-nunito font-bold text-lg mb-8">
												Reservation Confirmed
											</div>

											<div className="mb-8 flex flex-col items-center">
												<div>
													<img
														className="rounded-full border-2 border-[#FF5F00] w-20 h-20"
														src={reservationAPI?.establishment?.image}
													/>
												</div>
												<div className="font-bold font-nunito text-lg text-[#FF5F00]">
													Racket
												</div>
											</div>
										</div>
									</Grid>

									<Grid className=" lg:px-14 md:px-4 px-4">
										<div className="flex flex-col md:flex-row justify-between items-center mb-8">
											<div className="flex flex-col md:items-start md:justify-start items-center justify-center mb-4 md:mb-0">
												<div className="font-nunito md:font-medium font-normal text-lg  text-[#2B2B43] mb-2 md:mb-0">
													{reservationAPI?.establishment?.address?.streetName}
												</div>
												<div className="font-nunito font-bold md:text-lg text-sm text-[#2B2B43]">
													{moment(reservationAPI?.date).format("MMMM Do YYYY")}
												</div>
											</div>

											<div className="flex flex-row md:flex-col">
												<div className="flex ">
													<div className="md:pt-1 pt-0 mr-2">
														<FaUser />
													</div>
													<div className="font-nunito font-bold md:text-lg text-sm text-[#2B2B43] mr-4 md:mr-0">
														{reservationAPI?.partySize} people
													</div>
												</div>
												<div className="font-nunito font-bold md:text-lg text-sm text-[#2B2B43]">
													{moment
														.utc(reservationAPI?.slot * 1000)
														.format("HH:mm")}{" "}
													pm
												</div>
											</div>
										</div>

										<div className=" mb-8 flex flex-col md:flex-row justify-between items-center ">
											<div className="flex flex-col items-center justify-center md:items-start md:justify-start  md:mb-0 mb-4">
												<div className="font-medium font-nunito md:text-lg text-sm text-[#FF5F00] mb-2 md:mb-0">
													Confirmation #: 02122
												</div>
												<div className="font-nunito font-medium md:text-lg text-sm text-[#2B2B43]">
													{reservationAPI?.establishment?.phoneNumber}
												</div>
											</div>

											<div>
												<img src={assets.QrCode} className="w-16 h-16" />
											</div>
										</div>

										<div className="flex  items-center justify-center mt-4">
											<div className="flex mr-4" onClick={handleClose}>
												<img
													className="mr-2 mt-1 h-4 w-4"
													src={assets.modify}
												/>
												<div className="font-nunito font-bold text-lg text-[#000000]">
													Modify
												</div>
											</div>
											<div className="flex ml-4" onClick={handleClose}>
												<img
													className="mr-2 w-4 mt-1 h-4 w-4"
													src={assets.cancel}
												/>
												<div className="font-nunito font-bold text-lg text-[#000000]">
													Cancel
												</div>
											</div>
										</div>
									</Grid>
								</Box>
							</Grid>
						)}
					</Box>
				</Modal>
			</Grid>
		</Grid>
	)
}

export default Racket

const useStyles = makeStyles((theme) => ({
	image: {
		height: "400px",
		width: "767",
		[theme.breakpoints.down("sm")]: {
			display: "none",
		},
	},
	title: {
		fontFamily: "Nunito",
		fontSize: "24px",
		fontWeight: "700",
	},

	prodNotFound: {
		fontFamily: "Nunito",
		fontSize: "24px",
		fontWeight: "700",
	},
	notFoundContainer: {
		paddingTop: 20,
		paddingBottom: 20,
		backgroundColor: "#EDEEF2",
		width: "50%",
	},
	detail: {
		fontFamily: "Nunito",
		fontSize: "16px",
		color: "#2B2B43",
	},
	address: {
		[theme.breakpoints.down("sm")]: {
			display: "none",
		},
	},
	container: {
		display: "flex",
		alignItems: "center",
		paddingLeft: "22%",
		paddingRight: "22%",
		background: "#ffff",
		paddingBottom: "60px",
		[theme.breakpoints.down("sm")]: {
			paddingTop: "0px",
			paddingLeft: "0px",
			paddingRight: "0px",
		},
		[theme.breakpoints.between("sm", "md")]: {
			paddingTop: "90px",
		},
	},
	top: {
		[theme.breakpoints.down("sm")]: {
			maxWidth: "100%",
		},
	},
	buttonActive: {
		width: "100%",
		height: "40px",
		fontFamily: "Nunito",
		fontWeight: 900,
		fontSize: "13px",
		[theme.breakpoints.down("sm")]: {
			borderRadius: "0px",
		},
	},
	buttonDisabled: {
		width: "100%",
		fontFamily: "Nunito",
		fontWeight: 900,
		fontSize: "13px",
		backgroundColor: "#EDEEF2",
	},
	disable: {
		backgroundColor: "red",
	},
	info: {
		fontFamily: "Nunito",
		color: "#2B2B43",
		marginTop: "4px",
	},
	appetizer: {
		fontFamily: "Nunito",
		fontSize: "24px",
		fontWeight: "700",
		color: "#2B2B43",
		marginBottom: "16px",
	},
	appetizerOuter: {
		border: "1px solid #DADADA",
		borderRadius: "8px",
		width: "48%",
		[theme.breakpoints.down("lg")]: {
			width: "100%",
		},
		[theme.breakpoints.down("sm")]: {
			border: "none",
		},
	},
	font: {
		fontFamily: "Nunito",
	},
	item: {
		minWidth: "100px",
		[theme.breakpoints.down("sm")]: {
			minWidth: "20px",
		},
	},
	removeCart: {
		border: "1px solid #000000",
		borderRadius: "6px 0px 0px 6px",
		width: "40px",
		height: "40px",

		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		cursor: "pointer",
	},
	addCart: {
		border: "1px solid #000000",
		borderRadius: "0px 6px 6px 0px",
		width: "40px",
		height: "40px",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		cursor: "pointer",
	},
	number: {
		border: "1px solid #000000",
		width: "40px",
		height: "40px",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		marginLeft: "10px",
		marginRight: "10px",
	},
	InnerImage: {
		height: 60,
		width: 60,
	},
}))
