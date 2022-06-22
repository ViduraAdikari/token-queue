import React, {useState} from 'react';
import Grid from "@mui/material/Grid";
import ServiceCard from "../../cartons/cards/ServiceCard";
import {AVAILABLE_SERVICES, serviceIconMap} from "../../../../const/services";
import {IService} from "../../../../types/uiTypes";
import {useAppDispatch} from "../../../../store/hooks/hooks";
import {setNewTokenServiceID} from "../../../../store/reducers/tokenQueueReducer";
import {Navigate} from "react-router-dom";
import {TOKEN_ROUTE_PATHS} from "../../../../routes/routePaths";

const Services: React.FC = () => {
  const [isRedirect, setIsRedirect] = useState(false);

  const dispatch = useAppDispatch();

  const redirectToGetAToken = () => {
    return <Navigate to={TOKEN_ROUTE_PATHS.TOKEN_DASHBOARD.nested.token.path}/>;
  }

  const handleOnServiceClick = (id: string) => {
    dispatch(setNewTokenServiceID({serviceID: id}));
    setIsRedirect(true);
  }

  const renderServices = () => {
    return AVAILABLE_SERVICES.map((service: IService) => {
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