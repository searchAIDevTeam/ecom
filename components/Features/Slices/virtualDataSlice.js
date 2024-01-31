import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    category:{},
  room: {},
  budget: {},
  color: {},
    selectiveproduct: {},
    style: {},
};

const selectedDataSlice = createSlice({
  name: 'selectedData',
  initialState,
  reducers: {
    setSelectedRoom(state, action) {
      state.room = action.payload;
    },
    setSelectedBudget(state, action) {
      state.budget = action.payload;
    },
    setSelectedColor(state, action) {
      state.color = action.payload;
    },
    setSelectedSelectiveProduct(state, action) {
      state.selectiveproduct = action.payload;
    },
    setSelectedStyle(state, action) {
      state.style = action.payload;
    },
    setCategory(state, action) {
      state.category = action.payload;
    },
  },
});

export const {
  setSelectedRoom,
  setSelectedBudget,
  setSelectedColor,
  setSelectedSelectiveProduct,
  setSelectedStyle,
  setCategory,
} = selectedDataSlice.actions;

export const selectRoom = (state) => state.selectedData?.room;
export const selectBudget = (state) => state.selectedData?.budget;
export const selectColor = (state) => state.selectedData?.color;
export const selectSelectiveProduct = (state) => state.selectedData?.selectiveproduct;
export const selectStyle = (state) => state.selectedData?.style;
export const selectCategory = (state) => state.selectedData?.category;
export const selectData = (state) => state.selectedData;
export const allSelectedData = (state) => state.selectedData;

export default selectedDataSlice.reducer;
