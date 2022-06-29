import React, {useEffect, useState} from 'react';
import {IGuest} from "../../../../store/types/tokenQueueReducerTypes";
import {usePostNewTokenRequest} from "../../../../hooks/data/usePostNewTokenRequest";
import {IDisplayToken, IService, IToken} from "../../../../types/types";
import {ERROR_UNABLE_TO_FIND_SERVICE, TOKEN_CONDITIONS} from "../../../../const/values";
import DashboardContainer from "../../elements/containers/DashboardContainer";
import Stack from "@mui/material/Stack";
import LoadingMessage from "../../elements/loading/LoadingMessage";
import Token from "./Token";
import PrintToken from "../../elements/token/PrintToken";
import {useAppSelector} from "../../../../store/hooks/hooks";

type RequestATokenProps = {
  guest: IGuest
  newTokenServiceID: string
}

const RequestAToken: React.FC<RequestATokenProps> = (props: RequestATokenProps) => {

  const {newTokenServiceID, guest} = props;

  const services: IService[] | null = useAppSelector(state => state.tokenQueue.services);

  const [isTokenRequested, setIsTokenRequested] = useState(false);
  const [displayToken, setDisplayToken] = useState<IDisplayToken | null>(null);

  let [isRequestPosted, issuedToken] = usePostNewTokenRequest(isTokenRequested, newTokenServiceID, guest);

  useEffect(() => {
    setIsTokenRequested(true);
  }, []);

  useEffect(() => {
    if (!isRequestPosted) {
      return;
    }

    setIsTokenRequested(false);
  }, [isRequestPosted]);

  useEffect(() => {
    if (!issuedToken) {
      return;
    }

    createDisplayToken(issuedToken);
  }, [issuedToken]);

  const getAppointmentFor = (): string => {
    if (!services) {
      return ERROR_UNABLE_TO_FIND_SERVICE;
    }

    const service: IService | undefined = services.find((service: IService) => service.id === newTokenServiceID);
    return service?.title || ERROR_UNABLE_TO_FIND_SERVICE;
  }

  const createDisplayToken = (newToken: IToken) => {
    const newDisplayToken: IDisplayToken = {
      ...newToken, customer: guest, appointmentFor: getAppointmentFor(), conditions: TOKEN_CONDITIONS
    };
    setDisplayToken(newDisplayToken);
  }

  return (
    <DashboardContainer>
      <Stack sx={{
        alignItems: 'center',
        pt: 5,
      }}>
        {!displayToken && <LoadingMessage message="Requesting a Token"/>}

        {displayToken && <Token token={displayToken}/>}
        {displayToken && <PrintToken/>}
      </Stack>
    </DashboardContainer>
  )
};

export default RequestAToken;