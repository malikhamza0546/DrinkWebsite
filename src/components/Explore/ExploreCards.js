import { Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import ProductCard from "../Product/ProductCard";
import { CARDS } from "../../services/slider";
import { getExploreCardData } from "../../services/API";
import { useSelector } from "react-redux";

const styles = makeStyles((theme) => ({
  card: {},
  cardsWrapper: {
    paddingLeft: "10%",
    paddingRight: "10%",
  },
  btn: {
    [theme.breakpoints.down("sm")]: {
      marginLeft: "50px",
      margin: "30px 0",
    },
  },
}));

const ExploreCards = ({ catagory }) => {
  console.log("catagory in ExploreCards", catagory);
  const classes = styles();
  const User = useSelector((state) => state?.Auth?.user);
  console.log(User, "User");
  const [cardResponse, setCardResponse] = useState([]);
  const [loadMoreNum, setLoadMoreNum] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [limit, setLimit] = useState(9);
  const cardDetailShow = async (maxNum, PageNumber) => {
    try {
      let response = await getExploreCardData(maxNum, PageNumber, catagory);
      console.log("response cardDetailShow", response?.data);
      setCardResponse(response?.data?.results);
      setCurrentPage(response?.data?.page);
      setTotalPage(response?.data?.totalPages);
    } catch (e) {
      console.log("error in  cardDetailShow", e);
    }
  };

  useEffect(() => {
    cardDetailShow(limit, currentPage);
  }, [catagory]);

  useEffect(() => {
    console.log(currentPage, totalPage);
    if (currentPage > totalPage) {
      return;
    }
    cardDetailShow(limit, currentPage);
  }, [currentPage]);
  return (
    <Grid container spacing={5} className={`${classes.cardsWrapper}`}>
      {cardResponse.map((obj, index) => {
        return (
          <Grid
            className="md:p-0 sm:p-2 pb-6 md:pb-0"
            item
            xs={12}
            sm={6}
            md={4}
            xl={3}
            key={index}
          >
            <ProductCard
              name={obj?.name}
              pic={obj?.image}
              Location={obj?.address?.city}
              ID={obj?.id}
              FavouriteBy={obj?.favouriteBy}
            />
          </Grid>
        );
      })}

      <Grid
        item
        xs={12}
        className="text-center mb-4"
        style={{ marginBottom: 20, marginTop: 20 }}
      >
        <button
          className="bg-black text-whiteColor font-bold py-2 px-4 rounded"
          onClick={() => {
            setCurrentPage((previousValue) => {
              return previousValue + 1;
            });
          }}
        >
          Load more
        </button>
      </Grid>
    </Grid>
  );
};

export default ExploreCards;
