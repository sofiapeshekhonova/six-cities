import {createReducer} from '@reduxjs/toolkit';
import { Card } from 'types/offer';
import { ReviewsType } from 'types/reviews';
import { UserData } from 'types/user-data';
import { AuthorizationStatus, CITIES, sortList } from '../constants';
import { changeCardsSort, changeCity, getRoomComments, getUserInformation, loadHotels, requireAuthorization, setCardsDataLoadingStatus } from './action';

type InitialState = {
  city: string;
  cards: Card[];
  sortOption: string;
  isCardsDataLoading: boolean;
  authorizationStatus: string;
  userInformation: UserData | null;
  roomComments: ReviewsType[];
};

const defaultState: InitialState = {
  cards: [],
  city: CITIES[0],
  sortOption: sortList[0],
  isCardsDataLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  userInformation: null,
  roomComments: []
};

const reducer = createReducer(defaultState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(changeCardsSort, (state, action) => {
      state.sortOption = action.payload;
    })
    .addCase(loadHotels, (state, action) => {
      state.cards = action.payload;
    })
    .addCase(setCardsDataLoadingStatus, (state, action) => {
      state.isCardsDataLoading = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(getUserInformation, (state, action) => {
      state.userInformation = action.payload;
    })
    .addCase(getRoomComments, (state, action) => {
      state.roomComments = action.payload;
    });
});

export { reducer };
