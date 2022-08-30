import React from "react"
import { Grid } from "@mui/material"
import Cart from "../../components/Cart/Cart"
import { useLocation } from "react-router-dom"

const CartPage = (props) => {
	const location = useLocation()
	const { ID, productName, price, EstablishmentID } = location?.state
	console.log("ID in CartPage", ID, location?.state)
	return (
		<Grid container>
			<Cart ID={ID}
				productName={productName}
				price={price}
				EstablishmentID={EstablishmentID}
			/>
		</Grid>
	)
}

export default CartPage
