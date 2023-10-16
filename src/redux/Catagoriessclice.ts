import { createSlice } from "@reduxjs/toolkit";
export const getCatagories = (state: any) =>
  state.CatagoriesType.defaultCatagoris;

const CatagoriesType = createSlice({
  name: "Catagories",
  initialState: {
    defaultCatagoris: "products",
  },
  reducers: {
    setDefaultId: (state, action) => {
      state.defaultCatagoris = action.payload;
    },
  },
});

export const { setDefaultId } = CatagoriesType.actions;
export default CatagoriesType.reducer;
