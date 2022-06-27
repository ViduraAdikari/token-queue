import {AvatarIcon} from "../../types/uiTypes";
import {ICounter} from "../../types/types";

interface IGuest {
  id: string
  phone: string
  avatar?: AvatarIcon
}

interface ITokenState {
  guest: IGuest | null
  newTokenServiceID: string | null
  selectedCounter: ICounter | null
}

export type {ITokenState, IGuest}