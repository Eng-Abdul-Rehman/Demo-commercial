import { PayloadAction, createSlice } from "@reduxjs/toolkit";
export const getAddedtoCart = (state: any) => state.AddtoCart.defaultCart;

interface Item {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  rating: {
    rate: number;
    count: number;
  };
  title: string;
}

const AddtoCart = createSlice({
  name: "AddtoCart",
  initialState: {
    defaultCart: [] as Item[],
  },
  reducers: {
    setAddtoCart: (state, action: PayloadAction<Item[]>) => {
      state.defaultCart = action.payload;
    },
    removeItemFromCart: (state, action: PayloadAction<Item>) => {
      state.defaultCart = state.defaultCart.filter(
        (item) => item.id !== action.payload.id
      );
    },
  },
});

export const { setAddtoCart, removeItemFromCart } = AddtoCart.actions;
export default AddtoCart.reducer;
