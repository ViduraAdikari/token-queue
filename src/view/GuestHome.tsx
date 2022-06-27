import React, {useEffect, useState} from 'react';
import Box from "@mui/material/Box";
import {Navigate} from 'react-router-dom';
import MainInputForm from "../components/deck/cartons/forms/MainInputForm";
import HomeContainer from "../components/deck/elements/containers/HomeContainer";
import Hero from "../components/deck/cartons/hero/Hero";
import {TOKEN_ROUTE_PATHS} from "../routes/routePaths";
import {useAppDispatch, useAppSelector} from "../store/hooks/hooks";
import {setGuestPhone, resetGuest} from "../store/reducers/tokenQueueReducer";
import {IGuest} from "../store/types/tokenQueueReducerTypes";
import Grid from "@mui/material/Grid";

const GuestHome: React.FC = () => {
  const [phone, setPhone] = useState<string | null>(null);
  const [isRedirect, setIsRedirect] = useState(false);

  const guest: IGuest | null = useAppSelector(state => state.tokenQueue.guest);
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(resetGuest({}));
  }, []);

  useEffect(() => {
    if (!guest || guest.phone !== phone) {
      return;
    }

    setIsRedirect(true);
  }, [guest]);

  const redirectToTokenDashboard = () => {
    return <Navigate to={TOKEN_ROUTE_PATHS.TOKEN_DASHBOARD.main}/>;
  }

  const handlePhoneChange = (phoneNumber: string) => {
    setPhone(phoneNumber);
  }

  const handleSubmit = () => {
    if (phone && phone.length > 0) {
      dispatch(setGuestPhone({phone: phone}));
    }
  }

  return (
    <HomeContainer>
      {isRedirect && redirectToTokenDashboard()}

      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: "center"
      }}>
        <Hero/>

        <Grid container sx={{
          justifyContent: 'center',
          mt: 5,
        }}>
          <Grid item md={5} sm={8} xs={12}>
            <MainInputForm buttonText="Next"
                           value={phone}
                           inputTextProps={{
                             name: 'phone',
                             label: 'Enter your phone number',
                             placeholder: 'phone number',
                             invalidInputMessage: 'A phone number required to begin.'
                           }}
                           onValueChange={handlePhoneChange}
                           onSubmitClick={handleSubmit}/>
          </Grid>
        </Grid>
      </Box>
    </HomeContainer>
  )
};

export default GuestHome;