import {IGuest} from "../store/types/tokenQueueReducerTypes";

export interface IToken {
  serviceID: string
  tokenNumber: number
  time: Date
  customer?: IGuest //:TODO cannot be undefined when connected to api
}

export interface IDisplayToken extends IToken {
  appointmentFor: string
  conditions: string
}