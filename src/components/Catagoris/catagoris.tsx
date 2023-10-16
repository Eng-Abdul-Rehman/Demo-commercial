"use client";
import { getCatagories, setDefaultId } from "@/redux/Catagoriessclice";
import { palette } from "@/theme/Palette";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";

const Catagories: FC = () => {
  const dispatch = useDispatch();
  const Catagorie = useSelector(getCatagories);
  return (
    <>
      <Box sx={{ width: 320, height: "91.8vh", bgcolor: palette.storm[15] }}>
        <Button
          variant="text"
          sx={{
            width: "90%",
            mx: 2,
            mb: 2,
            color: Catagorie === "products" ? "white" : "black",
            borderBottom: "1px solid black",
            borderRadius: 0,
            bgcolor: Catagorie === "products" ? "black" : "transparent",
          }}
          onClick={() => dispatch(setDefaultId("products"))}
        >
          All{" "}
        </Button>
        <Button
          variant="text"
          sx={{
            width: "90%",
            mx: 2,
            mb: 2,
            color:
              Catagorie === "products/category/electronics" ? "white" : "black",
            borderBottom: "1px solid black",
            borderRadius: 0,
            bgcolor:
              Catagorie === "products/category/electronics"
                ? "black"
                : "transparent",
          }}
          onClick={() =>
            dispatch(setDefaultId("products/category/electronics"))
          }
        >
          electronics
        </Button>
        <Button
          variant="text"
          sx={{
            width: "90%",
            mx: 2,
            mb: 2,
            color:
              Catagorie === "products/category/jewelery" ? "white" : "black",
            borderBottom: "1px solid black",
            borderRadius: 0,
            bgcolor:
              Catagorie === "products/category/jewelery"
                ? "black"
                : "transparent",
          }}
          onClick={() => dispatch(setDefaultId("products/category/jewelery"))}
        >
          jewelery
        </Button>
        <Button
          variant="text"
          sx={{
            width: "90%",
            mx: 2,
            mb: 2,
            color:
              Catagorie === "products/category/men's clothing"
                ? "white"
                : "black",
            borderBottom: "1px solid black",
            borderRadius: 0,
            bgcolor:
              Catagorie === "products/category/men's clothing"
                ? "black"
                : "transparent",
          }}
          onClick={() =>
            dispatch(setDefaultId("products/category/men's clothing"))
          }
        >
          men's clothing
        </Button>
        <Button
          variant="text"
          sx={{
            width: "90%",
            mx: 2,
            mb: 2,
            color:
              Catagorie === "products/category/women's clothing"
                ? "white"
                : "black",
            borderBottom: "1px solid black",
            borderRadius: 0,
            bgcolor:
              Catagorie === "products/category/women's clothing"
                ? "black"
                : "transparent",
          }}
          onClick={() =>
            dispatch(setDefaultId("products/category/women's clothing"))
          }
        >
          women's clothing
        </Button>
      </Box>
    </>
  );
};
export default Catagories;
