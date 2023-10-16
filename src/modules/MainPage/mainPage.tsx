import { CardComponet } from "@/components/Cards";
import { Catagories } from "@/components/Catagoris";
import { NavigationBar } from "@/components/Navigationbar";
import { Box } from "@mui/system";
import { FC } from "react";

const MainPage: FC = () => {
  return (
    <>
      <Box>
        <NavigationBar />
        <Box sx={{ display: "flex" }}>
          <Catagories />
          <CardComponet />
        </Box>
      </Box>
    </>
  );
};
export default MainPage;
