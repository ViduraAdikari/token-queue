import React from 'react';
import DashboardContainer from "../../elements/containers/DashboardContainer";
// import LoadingMessage from "../../elements/loading/LoadingMessage";
import Stack from "@mui/material/Stack";
import Token from "../../pallet/token/Token";
import {IGuest} from "../../../../store/types/tokenQueueReducerTypes";
import {useAppSelector} from "../../../../store/hooks/hooks";
import {IDisplayToken, IService} from "../../../../types/types";
import {AVAILABLE_SERVICES, SAMPLE_PRINT_TOKEN} from "../../../../const/sampleData";

import {createGuest} from '../../../../store/helper/tokenQueueHelper';
import {TOKEN_CONDITIONS} from "../../../../const/values";
import PrintToken from "../../elements/token/PrintToken";

const GetAToken: React.FC = () => {

  let guest: IGuest | null = useAppSelector(state => state.tokenQueue.guest);
  let newTokenServiceID: string | null = useAppSelector(state => state.tokenQueue.newTokenServiceID);
  guest = guest ? guest : createGuest("+94716331433");

  const serviceID: string = newTokenServiceID ? newTokenServiceID : SAMPLE_PRINT_TOKEN.serviceID;
  const appointmentFor: string = AVAILABLE_SERVICES.find((service: IService) =>
    service.id === serviceID)?.title || 'unable to find the service';

  const displayToken: IDisplayToken = {
    ...SAMPLE_PRINT_TOKEN, customer: guest, appointmentFor: appointmentFor,
    conditions: TOKEN_CONDITIONS
  };

  return (
    <DashboardContainer>
      <Stack sx={{
        alignItems: 'center',
        pt: 5,
      }}>
        {/*<LoadingMessage message="Requesting a Token"/>*/}

        <Token token={displayToken}/>
        <PrintToken/>
      </Stack>
    </DashboardContainer>
  )
};

export default GetAToken;