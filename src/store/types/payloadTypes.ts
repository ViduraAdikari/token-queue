import {ICounter} from "../../types/types";

export interface IPhoneNumberPayload {
  phone: string
}

export interface INewTokenServiceIDPayload {
  serviceID: string
}

export interface ISelectedCounterPayload {
  counter: ICounter | null
}