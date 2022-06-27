import {IToken} from "./types";

export type HeadingTypes = 'h1' | 'h2';

export type AvatarIcon = {
  icon: string
  color: string
  alt?: string
}

export interface IGridRow {
  token: number
  counter: string
  isNew?: boolean
}

export type AssignedTokensGroup = {
  [key: string]: IToken[]
}
