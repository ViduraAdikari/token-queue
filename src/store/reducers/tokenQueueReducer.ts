import {createSlice, PayloadAction, Slice} from "@reduxjs/toolkit";
import {ITokenState} from "../types/tokenQueueReducerTypes";
import {INewTokenServiceIDPayload, IPhoneNumberPayload} from "../types/payloadTypes";
import {createGuest} from "../helper/tokenQueueHelper";

const initialState: ITokenState = {
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
    },
    setNewTokenServiceID: (state: ITokenState, action: PayloadAction<INewTokenServiceIDPayload>) => {
      state.newTokenServiceID = action.payload.serviceID;
    },

  }
});

export const {
  setGuestPhone,
  resetGuest,
  setNewTokenServiceID,
} = tokenSlice.actions;

export default tokenSlice.reducer;