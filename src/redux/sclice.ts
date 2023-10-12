import { createSlice } from '@reduxjs/toolkit';

const defaultSlice = createSlice({
  name: 'default',
  initialState: {
    defaultId: '',
    refetch: 0,
  },
  reducers: {
    setDefaultId: (state, action) => {
      state.defaultId = action.payload;
    },
    setRefetch: (state, action) => {
      state.refetch = action.payload;
    },
  },
});
export const { setDefaultId, setRefetch } = defaultSlice.actions;
export default defaultSlice.reducer;
