"use client";
import {
  getAddedtoCart,
  removeItemFromCart,
  setAddtoCart,
} from "@/redux/AddtoCartSclice";
import { palette } from "@/theme/Palette";
import { Add, Remove } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Link from "next/link";
import { FC, useState } from "react";
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

const AddtoCart: FC = () => {
  const cartItems = useSelector(getAddedtoCart);
  const dispatch = useDispatch();

  const handleRemove = (item: data) => {
    dispatch(removeItemFromCart(item));
  };

  const [counts, setCounts] = useState(Array(cartItems.length).fill(1));

  const increaseCount = (index: number) => {
    const newCounts = [...counts];
    newCounts[index] += 1;
    setCounts(newCounts);
  };

  const decreaseCount = (index: number) => {
    if (counts[index] > 1) {
      const newCounts = [...counts];
      newCounts[index] -= 1;
      setCounts(newCounts);
    }
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 4,
          pt: 10,
          width: 600,
          margin: "auto",
        }}
      >
        <Link href="/">
          <Typography
            sx={{ textDecoration: "none", color: "black", p: 2, mt: 1, ml: -2 }}
          >
            {"<"} Go back
          </Typography>
        </Link>
        <Box sx={{ maxHeight: 400, overflow: "auto" }}>
          {cartItems.length === 0 ? (
            <Typography sx={{ textAlign: "center" }}>
              No items in the cart
            </Typography>
          ) : (
            cartItems.map((item: data, index: number) => (
              <Box
                //   key={index}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  borderBottom: "1px solid black",
                  mt: 2,
                  height: 70,
                  width: "100%",
                  bgcolor: palette.storm[15],
                  p: 2,
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <img width={60} height={60} src={item.image} alt="" />
                  <Typography
                    sx={{
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                      textOverflow: "ellipsis",
                      maxWidth: 150,
                    }}
                  >
                    {item.title}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    border: "1px solid black",
                    width: 100,
                    height: 40,
                    display: "flex",
                    justifyContent: "space-between",
                    textAlign: "center",
                    alignItems: "center",
                    px: 1,
                  }}
                >
                  <Add
                    onClick={() => increaseCount(index)}
                    sx={{ color: palette.storm[50] }}
                    className="cursor"
                  />
                  <Typography>{counts[index]}</Typography>
                  <Remove
                    onClick={() => decreaseCount(index)}
                    sx={{ color: palette.storm[50] }}
                    className="cursor"
                  />
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography>Price: </Typography>
                  <Typography
                    sx={{
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                      textOverflow: "ellipsis",
                      maxWidth: 60,
                    }}
                  >
                    {counts[index] * item.price}
                  </Typography>
                  $
                  <Remove
                    onClick={() => handleRemove(item)}
                    sx={{ color: palette.storm[50], ml: 2 }}
                    className="cursor"
                  />
                </Box>
              </Box>
            ))
          )}
        </Box>
        <Box>
          <Link href={cartItems.length === 0 ? "/cart" : "/cart/checkout"}>
            <Button variant="contained" sx={{ width: "100%" }}>
              Checkout
            </Button>
          </Link>
        </Box>
      </Box>
    </>
  );
};
export default AddtoCart;
