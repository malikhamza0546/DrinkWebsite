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
import { getProducts } from "../../services/API"
import { useParams } from "react-router"
import { FaUser } from "react-icons/fa"
import { useEffect } from "react"

const minDate = new Date("2020-01-01T00:00:00.000")
const maxDate = new Date("2034-01-01T00:00:00.000")

const Racket = ({ EstablishmentID, phoneNumber, address }) => {
	const EstablishID = EstablishmentID?.EstablishmentID
	const classes = useStyles()
	const [active, setActive] = useState(true)
	const theme = useTheme()
	const isXS = useMediaQuery(theme.breakpoints.down("sm"))
	const isMD = useMediaQuery(theme.breakpoints.down("md"))

	const navigate = useNavigate()

	const [tab, setTab] = useState("Food Menu")
	const [mainTab, setMainTab] = useState("Menu")
	const [confirm, setConfirm] = useState(true)

	const [date, setDate] = useState(new Date())
	const [data, setAPIData] = useState([])
	console.log("address", address)
	const time = [
		{ time: "12:30pm" },
		{ time: "3:00pm" },
		{ time: "3:30pm" },
		{ time: "7:30pm" },
		{ time: "10:00pm" },
		{ time: "10:30pm" },
		{ time: "11:00pm" },
		{ time: "11:30pm" },
		{ time: "12:00am" },
	]
	const ProductGetter = async () => {
		try {
			const response = await getProducts(EstablishID, "cocktail")
			//
			console.log("response", response)
			setAPIData(response?.data)
		} catch (e) {
			console.log(e, " else Body Error")
		}
	}

	useEffect(() => {
		console.log("commercial componoent api")
		// getEstablishmentThunk();
		ProductGetter()
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
							`{address.streetName} | {address.city} {address.state}`
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
						{data.map((item, i) => (
							<Grid
								xs={24}
								lg={24}
								md={24}
								className={`px-8 sm:px-0 ${classes.top}`}
							>
								<p className={`mt-8  ${classes.appetizer}`}>{item?.name}</p>
								<Grid className="flex flex-wrap sm:gap-4 gap-0 ">
									{item?.products?.map((obj) => (
										<div
											className={`mb-6  ${classes.appetizerOuter}`}
											onClick={() => navigate("/cart")}
										>
											<div className="flex sm:p-4 sm:ml-2 ml-0 sm:pl-0 p-4">
												<img src={obj?.image} />

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
						))}
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
									<div className={classes.removeCart}>-</div>
									<div className={classes.number}>0</div>
									<div className={classes.addCart}>+</div>
								</div>
							</Grid>
						</Grid>

						<Grid
							container
							direction="row"
							alignItems="center"
							justifyContent="space-between"
							className="h-80"
						>
							<Grid item>
								<LocalizationProvider dateAdapter={AdapterDateFns}>
									<CalendarPicker
										date={date}
										onChange={(newDate) => setDate(newDate)}
									/>
								</LocalizationProvider>
							</Grid>

							{!isMD && (
								<Grid item className="h-full overflow-y-auto">
									{time.map((item) => (
										<div className="w-24 flex items-center justify-center h-9 rounded-lg border-slate-600 bg-[#FF9901] mb-4 ">
											<p>{item.time}</p>
										</div>
									))}
								</Grid>
							)}
						</Grid>

						{isMD && (
							<div className=" flex w-80 pt-12 flex-row overflow-x-auto">
								{time.map((item) => (
									<div className="w-28 p-2 mr-4 flex items-center justify-center h-9 rounded-lg border-slate-600 bg-[#FF9901] mb-4 ">
										<p>{item.time}</p>
									</div>
								))}
							</div>
						)}
						<Grid container className="mt-16">
							<ButtonOne label="Reserve" />
						</Grid>
					</Grid>
				)}

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
												className="rounded-full border-2 border-[#FF5F00] "
												src={assets.Reservation}
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
											150 NW 24 Street | Miami, FL 33127
										</div>
										<div className="font-nunito font-bold md:text-lg text-sm text-[#2B2B43]">
											Saturday, March 12, 2022
										</div>
									</div>

									<div className="flex flex-row md:flex-col">
										<div className="flex ">
											<div className="md:pt-1 pt-0 mr-2">
												<FaUser />
											</div>
											<div className="font-nunito font-bold md:text-lg text-sm text-[#2B2B43] mr-4 md:mr-0">
												4 people
											</div>
										</div>
										<div className="font-nunito font-bold md:text-lg text-sm text-[#2B2B43]">
											9:30 pm
										</div>
									</div>
								</div>

								<div className=" mb-8 flex flex-col md:flex-row justify-between items-center ">
									<div className="flex flex-col items-center justify-center md:items-start md:justify-start  md:mb-0 mb-4">
										<div className="font-medium font-nunito md:text-lg text-sm text-[#FF5F00] mb-2 md:mb-0">
											Confirmation #: 02122
										</div>
										<div className="font-nunito font-medium md:text-lg text-sm text-[#2B2B43]">
											(786) 637-2987
										</div>
									</div>

									<div>
										<img src={assets.QrCode} className="w-16 h-16" />
									</div>
								</div>

								<div className="flex  items-center justify-center mt-4">
									<div className="flex mr-4">
										<img className="mr-2 mt-1 h-4 w-4" src={assets.modify} />
										<div className="font-nunito font-bold text-lg text-[#000000]">
											Modify
										</div>
									</div>
									<div className="flex ml-4">
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
	},
	addCart: {
		border: "1px solid #000000",
		borderRadius: "0px 6px 6px 0px",
		width: "40px",
		height: "40px",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
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
}))
