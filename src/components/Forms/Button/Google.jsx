import React from "react"
import { BsGoogle } from "react-icons/bs"
const Google = ({ onClick }) => {
	return (
		<button
			onClick={onClick}
			style={{ fontSize: 13 }}
			className="flex bg-black w-auto rounded-full text-whiteColor font-bold py-4 px-4  items-center"
		>
			<BsGoogle />
		</button>
	)
}

export default Google
