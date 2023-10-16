import { AddtoCart } from "@/components/AddtoCart";
import { NavigationBar } from "@/components/Navigationbar";
import { Box } from "@mui/system";
import { FC } from "react";

const CartPage: FC = () => {
  return (
    <Box>
      <NavigationBar />
      <AddtoCart />
    </Box>
  );
};
export default CartPage;
