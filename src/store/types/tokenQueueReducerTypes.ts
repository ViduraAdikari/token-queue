import {AvatarIcon} from "../../types/uiTypes";
import {ICounter, IService, IToken} from "../../types/types";

interface IGuest {
  id: string
  phone: string
  avatar?: AvatarIcon
}

interface ITokenState {
  services: IService[] | null
  counters: ICounter[] | null
  assignedTokens: IToken[] | null
  isCheckingTokens: boolean
  guest: IGuest | null
  newTokenServiceID: string | null
  selectedCounter: ICounter | null
}

export type {ITokenState, IGuest}