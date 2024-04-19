import { call, put, takeEvery } from "redux-saga/effects";
import { setRoomData } from "../Slices/roomSlice";
import axios from "axios";

function* fetchRoomData(action) {
  try {
    // Fetch product data
    const response = yield call(
      axios.get,
      ` ${process.env.NEXT_PUBLIC_API_BASE_URL}/api/getSingleProduct?id=${action.payload}`
    );

    // Dispatch action to set room data
    yield put(setRoomData({ roomData: response.data, status: "succeeded" }));

    // Extract product ID and update popularity
    const productId = action.payload;
    yield call(updateProductPopularity, productId);
  } catch (error) {
    console.error("Error fetching room data:", error);
    yield put(setRoomData({ roomData: [], status: "failed" }));
  }
}

function* updateProductPopularity(productId) {
  try {
    // Make POST request to update product popularity
    yield call(
      axios.post,
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/increment-popularity?id=${productId}`
    );
    console.log("Product popularity updated successfully.");
  } catch (error) {
    console.error("Error updating product popularity:", error);
  }
}

export function* watchFetchRoomData() {
  yield takeEvery("FETCH_ROOM_REQUEST", fetchRoomData);
}
