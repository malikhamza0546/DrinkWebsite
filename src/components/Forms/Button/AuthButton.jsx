import React from "react"

const AuthButton = ({ label, icon, onClick }) => {
	return (
		<button
			onClick={onClick}
			style={{ fontSize: 13, height: 45 }}
			className="flex bg-black w-full text-whiteColor font-bold py-2 px-4 rounded items-center"
		>
			{icon && icon}
			<span className="text-center m-auto">{label}</span>
		</button>
	)
}

export default AuthButton
