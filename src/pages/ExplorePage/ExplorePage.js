import { Grid } from "@mui/material"
import React, { useState } from "react"
import ExploreCards from "../../components/Explore/ExploreCards"
import Explore from "../../components/Explore/Explore"
// import Events from "../../components/CalanderEvents/Events";
const ExplorePage = () => {
	const [catagory, setcatagory] = useState("")
	return (
		<Grid container>
			<Explore setcatagory={setcatagory} />
			<ExploreCards catagory={catagory} />
		</Grid>
	)
}

export default ExplorePage
