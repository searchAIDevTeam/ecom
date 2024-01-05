import { configureStore} from "@reduxjs/toolkit";
import recommendationReducer from "./Slices/recommendationSlice";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./Sagas/index";
import sliderReducer from "./Slices/sliderSlice";
import searchReducer from "./search/searchSlice";
import FirstCardReducer from './Slices/FIrstCardSlice'
import authReducer from "./auth/authSlice";
import profileReducer from "./Slices/profileSlice";
const sagaMiddleware = createSagaMiddleware();




const roomsReducer = (state = { selectedActivity: {} }, action) => {
  switch (action.type) {
    case 'SET_SELECTED_ACTIVITY':
      return {
        ...state,
        selectedActivity: action.payload,
      };
    default:
      return state;
  }
};

// Action
export const setSelectedActivity = (payload) => ({
  type: 'SET_SELECTED_ACTIVITY',
  payload,
});
export default roomsReducer;
export const store = configureStore({
  reducer: {
    recommendedProduct: recommendationReducer,
    slider: sliderReducer,
    FirstCard: FirstCardReducer,
    productWithSearch:searchReducer,
    auth:authReducer,
    rooms: roomsReducer,
    profile:profileReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
