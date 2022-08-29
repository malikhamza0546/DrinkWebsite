import React from "react"
import { BsApple } from "react-icons/bs"
const Google = ({ onClick }) => {
	return (
		<button
			onClick={onClick}
			style={{ fontSize: 13 }}
			className="flex bg-black w-auto rounded-full text-whiteColor font-bold py-4 px-4  items-center"
		>
			<BsApple />
		</button>
	)
}

export default Google
