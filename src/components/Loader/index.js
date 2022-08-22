import React from "react";
import { connect } from "react-redux";
import "./loader.css";
import Logo from "../../assets/images/blackLogo.png";

const AppLoader = ({ loadingMessage, loader }) => {
  return (
    <div hidden={!loader} className="loader-container">
      <div className="loader-content">
        <img src={Logo} alt="logo" />
        <div>
          <i
            style={{ color: "white" }}
            className="fa fa-spinner fa-spin fa-1x fa-fw"
          ></i>
          {loadingMessage && (
            <p
              className="loading-text"
              style={{ color: "white", fontSize: "16px", marginTop: "20px" }}
            >
              {loadingMessage}
            </p>
          )}
        </div>
      </div>
      {/* <div class="loader"></div> */}
    </div>
  );
};

const mapStateToProps = (state) => {
  const { loading } = state.loaderReducer;
  const { loadingMessage } = state.loaderReducer;
  console.log("loader/////", loading);
  console.log("loader/////", state);

  return {
    loader: loading,
    loadingMessage,
  };
};

export default connect(mapStateToProps, null)(AppLoader);
