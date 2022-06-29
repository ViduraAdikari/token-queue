import {ICounter, IService, IToken} from "../../types/types";

export interface IPhoneNumberPayload {
  phone: string
}

export interface IServicesPayload {
  services: IService[]
}

export interface INewTokenServiceIDPayload {
  serviceID: string | null
}

export interface ISelectedCounterPayload {
  counter: ICounter | null
}

export interface IAssignedTokensPayload {
  serviceID: string
  tokens: IToken[] | null
}

export interface IAssignedTokensRequestedPayload {
  isRequested: boolean
}

export interface ICountersPayload {
  counters: ICounter[]
}

export interface IServedTokenPayload {
  servedToken: IToken
}