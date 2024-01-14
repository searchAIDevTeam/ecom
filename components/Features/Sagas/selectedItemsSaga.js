// sagas/selectedItemsSaga.js

import { put, takeLatest } from "redux-saga/effects";
// import {
//   'SET_SELECTED_ITEMS_1_ASYNC',
//   'SET_SELECTED_ITEMS_2_ASYNC',
//   'SET_SELECTED_ITEMS_3_ASYNC',
// } from "../actions/actionTypes"; // Replace with your actual actionTypes
import {
  setSelectedItems1,
  setSelectedItems2,
  setSelectedItems3,
} from "../Slices/selectedItemsSlice"; // Replace with your actual slice path

// Replace with your actual API call function
function* setSelectedItems1Async(action) {
  try {
    // Call your API here if needed

    yield put(setSelectedItems1(action.payload));
  } catch (error) {
    // Handle error if necessary
    console.error("Error is occurred", error);
  }
}

function* setSelectedItems2Async(action) {
  try {
    // Call your API here if needed

    yield put(setSelectedItems2(action.payload));
  } catch (error) {
    // Handle error if necessary
    console.error("Error is occurred", error);
  }
}

function* setSelectedItems3Async(action) {
  try {
    // Call your API here if needed

    yield put(setSelectedItems3(action.payload));
  } catch (error) {
    // Handle error if necessary
    console.error("Error is occurred", error);
  }
}

// Watchers
export function* watchSelectedItemsSaga() {
  yield takeLatest("SET_SELECTED_ITEMS_1_ASYNC", setSelectedItems1Async);
  yield takeLatest("SET_SELECTED_ITEMS_2_ASYNC", setSelectedItems2Async);
  yield takeLatest("SET_SELECTED_ITEMS_3_ASYNC", setSelectedItems3Async);
}
