// sagas/index.js
import { all } from 'redux-saga/effects';
import { watchFetchRecommendedProduct } from './recommendationSaga';
import { watchFetchSliderView } from './sliderSaga';
import { watchSearchProducts } from './searchSaga';
import { watchFetchFirstCard } from './FirstCardSaga';
import { watchFetchProfileData } from './profileSaga';
import { watchFetchRoomData } from './roomSaga';

export default function* rootSaga() {
  yield all([
    watchFetchRecommendedProduct(),
    watchFetchSliderView(),
    watchSearchProducts(),
    watchFetchFirstCard(),
    watchFetchProfileData(),
    watchFetchRoomData()
  ]);
}
