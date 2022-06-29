import {IGuest} from "../types/tokenQueueReducerTypes";
import {AvatarIcon} from "../../types/uiTypes";
import {avatarIcons} from "../../const/avatarIcons";
import {ICounter, IToken} from "../../types/types";

/**
 * creates guest with random avatar
 * @param phone
 */
const createGuest = (phone: string): IGuest => {
  const avatarIcon: AvatarIcon = avatarIcons[Math.floor(Math.random() * avatarIcons.length)];

  return {id: new Date().getTime() + '', phone: phone, avatar: avatarIcon};
}

/**
 * add assignedTokens replacing previously assigned tokens in store
 * @param previousTokens
 * @param serviceID
 * @param assignedTokens
 */
const addAssignedTokens = (previousTokens: IToken[] | null, serviceID: string, assignedTokens: IToken[] | null):
  IToken[] | null => {
  if (!previousTokens && !assignedTokens) {
    return null;
  }

  if (!previousTokens || previousTokens.length === 0) {
    return assignedTokens;
  }

  if (!assignedTokens) { //remove previous tokens by this service
    return previousTokens.slice().filter((token: IToken) => token.serviceID !== serviceID);
  }

  let tokens: IToken[] = previousTokens.slice().filter((token: IToken) => token.serviceID !== serviceID);
  return tokens.concat(assignedTokens);
}

const updateServedTokenInCounter = (counter: ICounter | null, servedToken: IToken): ICounter | null => {
  if (!counter) {
    return null;
  }

  if (!counter.servingToken) {
    return counter;
  }

  counter.servingToken.served = counter.servingToken.id === servedToken.id;
  return counter;
}

export {createGuest, addAssignedTokens, updateServedTokenInCounter};