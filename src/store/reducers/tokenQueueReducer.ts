import {createSlice, PayloadAction, Slice} from "@reduxjs/toolkit";
import {ITokenState} from "../types/tokenQueueReducerTypes";
import {IPhoneNumberPayload} from "../types/payloadTypes";
import {createGuest} from "../helper/tokenQueueHelper";

const initialState: ITokenState = {
  guest: null,
}

export const tokenSlice: Slice = createSlice({
  name: 'tokenQueue',
  initialState: initialState,
  reducers: {
    setGuestPhone: (state: ITokenState, action: PayloadAction<IPhoneNumberPayload>) => {
      state.guest = createGuest(action.payload.phone);
    },
  }
});

export const {
  setGuestPhone,
} = tokenSlice.actions;

export default tokenSlice.reducer;