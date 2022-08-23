import axios from "axios"
const REACT_APP_API_URL = "https://pacific-brushlands-27461.herokuapp.com/v1"

export const getEstablishment = async () => {
	return new Promise((resolve, reject) => {
		axios({
			method: "get",
			url: `${REACT_APP_API_URL}/establishment/web`,
		})
			.then((res) => resolve(res))
			.catch((err) => {
				reject(err)
			})
	})
}
