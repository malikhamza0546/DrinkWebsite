import React from "react"
import { Grid } from "@mui/material"
import Cart from "../../components/Cart/Cart"
import { useLocation } from "react-router-dom"

const CartPage = (props) => {
	const location = useLocation()
	const { ID } = location?.state
	console.log("ID in CartPage", ID)
	return (
		<Grid container>
			<Cart ID={ID} />
		</Grid>
	)
}

export default CartPage
