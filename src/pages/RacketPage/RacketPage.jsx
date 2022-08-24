import React from "react"
import { Grid } from "@mui/material"
import Racket from "../../components/Racket/Racket"
import OrderCard from "../../components/OrderCard/OrderCard"
import { useLocation } from "react-router-dom"

const RacketPage = (props) => {
	const location = useLocation()
	const EstablishmentID = location?.state
	const { address } = location?.state
	const { phoneNumber } = location?.state
	console.log("phoneNumber", phoneNumber)
	return (
		<Grid container>
			<Racket
				EstablishmentID={EstablishmentID}
				address={address}
				phoneNumber={phoneNumber}
			/>
		</Grid>
	)
}

export default RacketPage
