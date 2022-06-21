import {AvatarIcon} from "../../types/uiTypes";

interface IGuest {
  id: string
  phone: string
  avatar?: AvatarIcon
}

interface ITokenState {
  guest: IGuest | null
  newTokenServiceID: string | null
}

export type {ITokenState, IGuest}