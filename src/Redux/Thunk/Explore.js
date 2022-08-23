import axios from "axios";
import { getEstablishment } from "../Actions/Explore";
import Notification from "../../components/Notification";

export const getEstablishmentThunk = () => {
  return (dispatch) => {
    axios
      .get(`https://pacific-brushlands-27461.herokuapp.com/v1/establishment`)
      .then((res) => {
        console.log(" establishment response", res);
        dispatch(getEstablishment(res.data));
      })
      .catch((error) => {
        console.log(" errorr response", error.message);
        dispatch(getEstablishment("error"));
        Notification("error", "Unable to load Establishment Data");
      });
  };
};
