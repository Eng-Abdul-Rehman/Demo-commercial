import { getAddedtoCart, setAddtoCart } from "@/redux/AddtoCartSclice";
import { palette } from "@/theme/Palette";
import { Button, Modal, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";

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
interface Props {
  handleClose: () => void;
  open: boolean;
  data?: data | undefined;
}

const InformationCard: FC<Props> = ({ handleClose, open, data }) => {
  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };
  const dispatch = useDispatch();
  const cartItems = useSelector(getAddedtoCart);
  const handleAddToCart = (item: data | undefined) => {
    if (cartItems.includes(item)) {
    } else {
      dispatch(setAddtoCart([...cartItems, item]));
    }
  };
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, display: "flex", gap: 1 }}>
          <img width={200} height={"100%"} src={data?.image} alt="" />
          <Box
            sx={{
              display: "flex",
              justifyContent: "start",
              alignItems: "start",
              flexDirection: "column",
              gap: 0,
            }}
          >
            <Typography variant="subHeader-bold">{data?.title}</Typography>
            <Typography sx={{ mt: 2 }}>Price: {data?.price}$</Typography>
            <Typography>Rating: {data?.rating.rate}</Typography>
            <Typography>Category: {data?.category}</Typography>
            <Typography sx={{ mt: 1, color: palette.storm[60] }}>
              {data?.description}
            </Typography>
            <Button
              sx={{
                mt: 4,
                color: "white",
                bgcolor: "black",
                width: "100%",
                border: "1px solid transparent",
                ":hover": {
                  color: "black",
                  bgcolor: "white",
                  border: "1px solid black",
                },
              }}
              onClick={() => handleAddToCart(data)}
            >
              {cartItems.includes(data) ? "Added" : "Add to Cart"}
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};
export default InformationCard;
