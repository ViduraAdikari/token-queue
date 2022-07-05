import {createSlice, PayloadAction, Slice} from "@reduxjs/toolkit";
import {ITokenState} from "../types/tokenQueueReducerTypes";
import {
  IAssignedTokensPayload,
  IAssignedTokensRequestedPayload,
  ICountersPayload,
  INewTokenServiceIDPayload,
  IPhoneNumberPayload,
  ISelectedCounterPayload,
  IServedTokenPayload,
  IServicesPayload
} from "../types/payloadTypes";
import {addAssignedTokens, createGuest, updateServedTokenInCounter} from "../helper/tokenQueueHelper";

const initialState: ITokenState = {
  services: null,
  counters: null,
  assignedTokens: null,
  selectedCounter: null,
  isCheckingTokens: false,
  guest: null,
  newTokenServiceID: null
}

export const tokenSlice: Slice = createSlice({
  name: 'tokenQueue',
  initialState: initialState,
  reducers: {
    setGuestPhone: (state: ITokenState, action: PayloadAction<IPhoneNumberPayload>) => {
      state.guest = createGuest(action.payload.phone);
    },
    resetGuest: (state: ITokenState) => {
      state.guest = null;
      state.newTokenServiceID = null;
    },
    setServices: (state: ITokenState, action: PayloadAction<IServicesPayload>) => {
      state.services = action.payload.services;
    },
    setNewTokenServiceID: (state: ITokenState, action: PayloadAction<INewTokenServiceIDPayload>) => {
      state.newTokenServiceID = action.payload.serviceID;
    },
    setSelectedCounter: (state: ITokenState, action: PayloadAction<ISelectedCounterPayload>) => {
      state.selectedCounter = action.payload.counter;
    },
    setAssignedTokens: (state: ITokenState, action: PayloadAction<IAssignedTokensPayload>) => {
      state.assignedTokens = addAssignedTokens(state.assignedTokens, action.payload.serviceID, action.payload.tokens);
      state.isCheckingTokens = false;
    },
    setIsCheckingAssignedTokens: (state: ITokenState, action: PayloadAction<IAssignedTokensRequestedPayload>) => {
      state.isCheckingTokens = action.payload.isRequested;
    },
    setCounters: (state: ITokenState, action: PayloadAction<ICountersPayload>) => {
      state.counters = action.payload.counters;
    },
    updateServedToken: (state: ITokenState, action: PayloadAction<IServedTokenPayload>) => {
      state.selectedCounter = updateServedTokenInCounter(state.selectedCounter, action.payload.servedToken);
    },
  }
});

export const {
  setGuestPhone,
  resetGuest,
  setServices,
  setNewTokenServiceID,
  setTokenIssued,
  setSelectedCounter,
  setAssignedTokens,
  setIsCheckingAssignedTokens,
  setCounters,
  updateServedToken,
} = tokenSlice.actions;

export default tokenSlice.reducer;