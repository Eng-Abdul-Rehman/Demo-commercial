import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Link from "next/link";
import { FC } from "react";

const CheckoutPage: FC = () => {
  return (
    <>
      <Link href="/">
        <Typography sx={{ textDecoration: "none", color: "black", p: 2 }}>
         {"<"} Go back
        </Typography>
      </Link>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "90vh",
        }}
      >
        <Typography variant="h1">
          Thanks you for buying
          <br /> over product
        </Typography>
      </Box>
    </>
  );
};
export default CheckoutPage;
