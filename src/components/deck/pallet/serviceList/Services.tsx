import React, {useEffect, useState} from 'react';
import Grid from "@mui/material/Grid";
import ServiceCard from "../../cartons/cards/ServiceCard";
import {serviceIconMap} from "../../../../const/services";
import {useAppDispatch, useAppSelector} from "../../../../store/hooks/hooks";
import {setNewTokenServiceID} from "../../../../store/reducers/tokenQueueReducer";
import {Navigate} from "react-router-dom";
import {TOKEN_ROUTE_PATHS} from "../../../../routes/routePaths";
import {IService} from "../../../../types/types";

type ServicesProps = {
  services: IService[]
}

const Services: React.FC<ServicesProps> = (props: ServicesProps) => {

  const {services} = props;

  const newTokenServiceID: string | null = useAppSelector(state => state.tokenQueue.newTokenServiceID);

  const [isRedirect, setIsRedirect] = useState(false);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!newTokenServiceID) {
      return;
    }
    setIsRedirect(true);
  }, [newTokenServiceID]);

  const redirectToGetAToken = () => {
    return <Navigate to={TOKEN_ROUTE_PATHS.TOKEN_DASHBOARD.nested.token.path}/>;
  }

  const handleOnServiceClick = (id: string) => {
    dispatch(setNewTokenServiceID({serviceID: id}));
  }

  const renderServices = () => {
    return services.map((service: IService) => {
      return (
        <Grid item xs={12} sm={6} md={4} key={service.title}>
          <ServiceCard title={service.title} icon={serviceIconMap[service.icon]}
                       id={service.id}
                       onClick={handleOnServiceClick}/>
        </Grid>
      )
    });
  }

  return (
    <Grid container spacing={3} sx={{
      mt: 5,
    }}>
      {isRedirect && redirectToGetAToken()}

      {renderServices()}
    </Grid>
  )
};

export default Services;