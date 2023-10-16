"use client";
import { useAllProducts } from "@/ApiHooks/CardsDataApi";
import { getAddedtoCart, setAddtoCart } from "@/redux/AddtoCartSclice";
import { getCatagories } from "@/redux/Catagoriessclice";
import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { InformationCard } from "../InformationCard";
interface rating {
  rate: number;
  count: number;
}
interface data {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: rating;
  title: string;
}

const CardComponet: FC = () => {
  // const { data: allproducts } = useAllProducts();
  const Catagorie = useSelector(getCatagories);
  const { data: Catagories, isFetching, refetch } = useAllProducts(Catagorie);
  useEffect(() => {
    refetch();
  }, [Catagorie]);
  const dispatch = useDispatch();
  const cartItems = useSelector(getAddedtoCart);
  const handleAddToCart = (item: data) => {
    console.log(item, "item");
    if (cartItems.includes(item)) {
    } else {
      dispatch(setAddtoCart([...cartItems, item]));
    }
  };

  const [open, setOpen] = useState(false);
  const [SeletedData, setSeletedData] = useState<data | undefined>(undefined);
  const handleOpen = (item: data) => {
    setOpen(true);
    setSeletedData(item);
  };
  const handleCloses = () => {
    setOpen(false);
  };
  console.log(cartItems, "cartItems");

  return (
    <>
      <Box sx={{ p: 4, width: "100%", height: "91.8vh", overflow: "auto" }}>
        <Box></Box>
        <Grid container gap={4}>
          {isFetching ? (
            <Box>Fetching</Box>
          ) : (
            Catagories?.map((item: data) => (
              <Box
                sx={{
                  width: 200,
                  boxShadow: 2,
                  border: "1px solid transparent",
                  ":hover": {
                    border: "1px solid black",
                  },
                  zIndex: 1,
                }}
                className="cursor"
              >
                <img
                  onClick={() => handleOpen(item)}
                  width="100%"
                  height={200}
                  src={item.image}
                  alt=""
                />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 1,
                    textAlign: "center",
                    justifyContent: "end",
                    alignItems: "center",
                    minHeight: "100px",
                  }}
                >
                  <Typography
                    onClick={() => handleOpen(item)}
                    mt={2}
                    fontWeight={"bold"}
                  >
                    {item.title}
                  </Typography>
                  <Typography>Price: {item.price}$</Typography>
                  <Button
                    sx={{
                      color: "white",
                      bgcolor: "black",
                      width: "100%",
                      border: "1px solid transparent",
                      ":hover": {
                        color: "black",
                        bgcolor: "white",
                        border: "1px solid black",
                      },
                      zIndex: 3,
                    }}
                    onClick={() => handleAddToCart(item)}
                  >
                    {cartItems.includes(item) ? "Added" : "Add to Cart"}
                  </Button>
                </Box>
              </Box>
            ))
          )}
        </Grid>
      </Box>
      <InformationCard
        handleClose={handleCloses}
        open={open}
        data={SeletedData}
      />
    </>
  );
};
export default CardComponet;
