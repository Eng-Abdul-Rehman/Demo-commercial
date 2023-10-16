"use client";
import { getAddedtoCart } from "@/redux/AddtoCartSclice";
import { palette } from "@/theme/Palette";
import { ShoppingCart } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Link from "next/link";
import { FC } from "react";
import { useSelector } from "react-redux";

const NavigationBar: FC = () => {
  const cartItems = useSelector(getAddedtoCart);
  return (
    <>
      <Box
        sx={{
          bgcolor: palette.storm[30],
          width: "100%",
          px: 10,
          py: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link href="/" style={{ textDecoration: "none", color: "black" }}>
          <Typography variant="h4" className="cursor">
            Demo Comercial
          </Typography>
        </Link>
        <Link href="/cart" style={{ display: "flex", position: "relative" }}>
          <Typography
            sx={{
              bgcolor: palette.storm[100],
              color: palette.storm[6],
              borderRadius: "100%",
              fontSize: 10,
              textAlign: "center",
              width: 15,
              height: 15,
              fontWeight: "bold",
              position: "absolute",
              right: -4,
              bottom: -1
            }}
          >
            {cartItems.length}
          </Typography>
          <ShoppingCart sx={{ color: palette.storm[80], cursor: "pointer" }} />
        </Link>
      </Box>
    </>
  );
};
export default NavigationBar;
