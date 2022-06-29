import React, {useEffect, useState} from 'react';
import Heading from "../../elements/headings/Heading";
import DashboardContainer from "../../elements/containers/DashboardContainer";
import Services from "../../pallet/serviceList/Services";
import Box from "@mui/material/Box";
import LoadingMessage from "../../elements/loading/LoadingMessage";
import CurrentUser from "../../cartons/user/CurrentUser";
import Stack from "@mui/material/Stack";
import PageLink from "../../elements/links/PageLink";
import {Navigate} from "react-router-dom";
import {TOKEN_ROUTE_PATHS} from "../../../../routes/routePaths";
import {IService} from "../../../../types/types";
import {useAppDispatch, useAppSelector} from "../../../../store/hooks/hooks";
import {setNewTokenServiceID, setServices} from "../../../../store/reducers/tokenQueueReducer";
import {useServices} from "../../../../hooks/data/useServices";

const ServiceList: React.FC = () => {
  const services: IService[] | null = useAppSelector(state => state.tokenQueue.services);

  const [isRedirect, setIsRedirect] = useState(false);

  const dispatch = useAppDispatch();

  const remoteServices = useServices();

  useEffect(() => {
    dispatch(setNewTokenServiceID({serviceID: null}));
  }, []);

  useEffect(() => {
    if (!remoteServices) {
      return;
    }

    dispatch(setServices({services: remoteServices}));
  }, [remoteServices]);

  const handleOnPhoneChangeClick = () => {
    setIsRedirect(true);
  }

  const redirectToHome = () => {
    return <Navigate to={TOKEN_ROUTE_PATHS.GUEST_LOGIN}/>;
  }

  return (
    <DashboardContainer>
      {isRedirect && redirectToHome()}

      <Stack direction="column" sx={{
        alignItems: "center"
      }}>

        <Box sx={{textAlign: 'center', mt: 3}}>
          <Heading type="h1" text="Get a Token"/>
          <Heading type="h2" text='Click on a service to get a token'/>
        </Box>

        {services && <Services services={services}/>}
        <Stack sx={{mt: 5, pt: 5, alignItems: 'center'}}>
          {!services && <LoadingMessage message="Loading services"/>}

          <CurrentUser/>
          <PageLink text="Change Phone Number" onClick={handleOnPhoneChangeClick}/>
        </Stack>

      </Stack>
    </DashboardContainer>
  )
};

export default ServiceList;