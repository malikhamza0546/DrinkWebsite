import { makeStyles } from "@mui/styles"
import React, { useState } from "react"
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"
import { GrLocation } from "react-icons/gr"
import { useNavigate, useLocation } from "react-router-dom"
import assets from "../../assets/assets"
import { Grid, Button, useMediaQuery, useTheme } from "@mui/material"
import { postFavourite } from "../../services/API"
import { useDispatch } from "react-redux"
import { EstablishmentID } from "../../Redux/Actions/EstablishmentID"
import Notification from "../Notification"
import { useSelector } from "react-redux"
const styles = makeStyles((theme) => ({
	cardContainer: {
		height: 290,

		[theme.breakpoints.down("sm")]: {
			width: "auto",
			marginLeft: "50px",
			marginRight: "50px",
			minHeight: 200,
			maxHeight: 240,
			height: 220,
		},
	},
	imgWrapper: {
		height: 170,
		[theme.breakpoints.down("sm")]: {
			height: 120,
		},
	},
	mobileCard: {
		[theme.breakpoints.down("sm")]: {
			borderRadius: "16px",
			border: "1px solid #EDEEF2",
		},
	},
	detail: {
		height: 60,
		[theme.breakpoints.down("sm")]: {
			height: 40,
		},
	},
}))

const ProductCard = ({
	name,
	pic,
	Location,
	ID,
	address,
	phoneNumber,
	FavouriteBy,
}) => {
	const token = localStorage.getItem("access")
	let idd = null
	idd = useSelector((state) => state?.Auth?.user?.user?.id)

	const [heart, setHeart] = useState(
		idd === null ? false : FavouriteBy.includes(idd)
	)

	const classes = styles()
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const theme = useTheme()
	const location = useLocation()
	dispatch(() => {
		EstablishmentID(ID)
	})
	const isXS = useMediaQuery(theme.breakpoints.down("sm"))

	const postFavourites = async (EstablishmentID) => {
		try {
			const response = await postFavourite(EstablishmentID)
			console.log("response of fav", response)
			Notification("success", response.data)
			setHeart(!heart)
		} catch (e) {
			Notification("error", e.response.data)
			console.log(e, " else Body Error")
		}
	}

	return (
		<Grid
			className={`${classes.mobileCard} rounded-3xl overflow-hidden h-44 sm:h- ${classes.cardContainer}`}
			item
			xs={12}
			sm={12}
			md={12}
			lg={12}
			style={{ background: "white" }}
		>
			<div className="relative">
				{isXS && location.pathname !== "/explore" && (
					<div className="flex flex-row-reverse">
						{!heart ? (
							<AiOutlineHeart
								className="absolute top-2 right-2 text-primary text-3xl"
								//   onClick={() => setHeart(false)}
								onClick={() => {
									postFavourites(ID)
								}}
							/>
						) : (
							<AiFillHeart
								className="absolute top-2 right-2 text-primary text-3xl"
								//   onClick={() => setHeart(false)}
								onClick={() => {
									postFavourites(ID)
								}}
							/>
						)}
					</div>
				)}

				<Grid
					item
					xs={12}
					className={` overflow-hidden  sm:h- ${classes.imgWrapper}`}
				>
					<img
						alt=""
						src={pic}
						className="w-full h-full "
						onClick={() =>
							navigate("/racket", {
								state: {
									EstablishmentID: ID,
									address: address,
									phoneNumber: phoneNumber,
								},
							})
						}
					/>
				</Grid>
			</div>
			<Grid
				className={`${classes.detail} flex pt-4 justify-between items-center px-2`}
				item
				xs={12}
			>
				<p
					className="w-11/12 font-nunito sm:text-lg text-sm font-bold"
					onClick={() =>
						navigate("/racket", {
							state: {
								EstablishmentID: ID,
								address: address,
								phoneNumber: phoneNumber,
							},
						})
					}
				>
					{name}
				</p>
				{isXS && location.pathname !== "/explore" ? (
					""
				) : !heart ? (
					<AiOutlineHeart
						className="text-xl"
						onClick={() => {
							if (token !== null) postFavourites(ID)
							else {
								console.log(" Not Signed in ")
							}
						}}
					/>
				) : (
					<AiFillHeart
						className="text-primary text-xl"
						onClick={() => {
							if (token !== null) postFavourites(ID)
							else {
								console.log(" Not Signed in ")
							}
						}}
					/>
				)}
			</Grid>
			<Grid
				className={`${classes.detail} flex justify-start gap-1 items-center px-2`}
				item
				xs={12}
				onClick={() =>
					navigate("/racket", {
						state: {
							EstablishmentID: ID,
							address: address,
							phoneNumber: phoneNumber,
						},
					})
				}
			>
				<GrLocation />
				<p className="font-nunito text-xs">{Location}</p>
				<span className="text-primary text-lg">.</span>
				<span className="text-xs">
					<img src={assets.Star} className="h-4 w-4" />
				</span>
				<span>
					<p className="font-nunito text-xs">(5 Stars)</p>
				</span>
			</Grid>
		</Grid>
	)
}

export default ProductCard
