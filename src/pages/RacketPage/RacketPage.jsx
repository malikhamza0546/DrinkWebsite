import React from "react"
import { Grid } from "@mui/material"
import Racket from "../../components/Racket/Racket"
import OrderCard from "../../components/OrderCard/OrderCard"
import { useLocation } from "react-router-dom"

const RacketPage = (props) => {
	console.log("route.params in Racket Page", props?.route?.params)
	const { state } = useLocation
	console.log("State in Racket page", state)
	return (
		<Grid container>
			<Racket />
		</Grid>
	)
}

export default RacketPage
