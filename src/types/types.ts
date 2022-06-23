import {IGuest} from "../store/types/tokenQueueReducerTypes";
import {IconTypes} from "../const/services";

export interface IService {
  id: string
  icon: IconTypes
  title: string
}

export interface ICounter {
  id: string
  serviceID: string
  servingToken: string | null
  isServing: boolean
}

export interface IToken {
  serviceID: string
  counterID?: string
  tokenNumber: number
  time: Date
  customer?: IGuest //:TODO cannot be undefined when connected to api
}

export interface IDisplayToken extends IToken {
  appointmentFor: string
  conditions: string
}

