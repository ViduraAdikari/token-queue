import React from 'react';
import Grid from "@mui/material/Grid";
import ServiceCard from "../../cartons/cards/ServiceCard";
import {AVAILABLE_SERVICES, serviceIconMap} from "../../../../const/services";
import {IServiceDetails} from "../../../../types/uiTypes";
import {useAppDispatch} from "../../../../store/hooks/hooks";
import {setNewTokenServiceID} from "../../../../store/reducers/tokenQueueReducer";

const Services: React.FC = () => {

  const dispatch = useAppDispatch();

  const handleOnServiceClick = (id: string) => {
    dispatch(setNewTokenServiceID({serviceID: id}));
  }

  const renderServices = () => {
    return AVAILABLE_SERVICES.map((service: IServiceDetails) => {
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
      {renderServices()}
    </Grid>
  )
};

export default Services;