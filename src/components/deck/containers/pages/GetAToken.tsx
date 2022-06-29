import React from 'react';
import {IGuest} from "../../../../store/types/tokenQueueReducerTypes";
import {useAppSelector} from "../../../../store/hooks/hooks";
import {createGuest} from '../../../../store/helper/tokenQueueHelper';
import ErrorMessage from "../../elements/error/ErrorMessage";
import RequestAToken from "../../pallet/token/RequestAToken";

const GetAToken: React.FC = () => {

  let guest: IGuest | null = useAppSelector(state => state.tokenQueue.guest);
  const newTokenServiceID: string | null = useAppSelector(state => state.tokenQueue.newTokenServiceID);
  guest = guest ? guest : createGuest("+94716331433");

  if (!newTokenServiceID) {
    return <ErrorMessage message={'Please select a service to get a token!'}/>
  }

  return <RequestAToken guest={guest} newTokenServiceID={newTokenServiceID}/>
};

export default GetAToken;