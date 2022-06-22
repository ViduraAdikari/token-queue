import {IconTypes} from "../const/services";

export type HeadingTypes = 'h1' | 'h2';

export type AvatarIcon = {
  icon: string
  color: string
  alt?: string
}

export interface IService {
  id: string
  icon: IconTypes
  title: string
}