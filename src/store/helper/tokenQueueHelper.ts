import {IGuest} from "../types/tokenQueueReducerTypes";
import {AvatarIcon} from "../../types/uiTypes";
import {avatarIcons} from "../../const/avatarIcons";

/**
 * creates guest with random avatar
 * @param phone
 */
const createGuest = (phone: string): IGuest => {
  const avatarIcon: AvatarIcon = avatarIcons[Math.floor(Math.random() * avatarIcons.length)];

  return {id: new Date().getTime() + '', phone: phone, avatar: avatarIcon};
}

export {createGuest};