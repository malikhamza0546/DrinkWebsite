import React from "react"
import { BsFacebook } from "react-icons/bs"
const Facebook = ({ onClick }) => {
	return (
		<button
			onClick={onClick}
			style={{ fontSize: 13 }}
			className="flex bg-black w-auto rounded-full text-whiteColor font-bold py-4 px-4  items-center"
		>
			<BsFacebook />
		</button>
	)
}

export default Facebook
