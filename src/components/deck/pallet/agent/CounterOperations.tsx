import React, {useEffect, useState} from 'react';
import Grid from "@mui/material/Grid";
import MainInputForm from "../../cartons/forms/MainInputForm";
import TokenToServe from "./TokenToServe";
import CurrentUser from "../../cartons/user/CurrentUser";
import {ICounter, IToken} from "../../../../types/types";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import LoadingMessage from "../../elements/loading/LoadingMessage";
import {usePostServedToken} from "../../../../hooks/data/usePostServedToken";
import {useAppDispatch} from "../../../../store/hooks/hooks";
import {updateServedToken, setSelectedCounter} from "../../../../store/reducers/tokenQueueReducer";
import {useCounter} from "../../../../hooks/data/useCounter";

type CounterOperationsProps = {
  counter: ICounter
}

const CounterOperations: React.FC<CounterOperationsProps> = (props: CounterOperationsProps) => {

  const {counter} = props;

  const [servedTokenNumber, setServedTokenNumber] = useState<number | null>(null);
  const [isPostRequested, setIsPostRequested] = useState(false);
  const [isRefreshCounter, setIsRefreshCounter] = useState(false);

  const [token, setToken] = useState<IToken | null>(null);

  const dispatch = useAppDispatch();

  useEffect(() => {
    setToken(counter.servingToken);
  }, [counter]);

  const responseMessage = usePostServedToken(isPostRequested, counter.id, servedTokenNumber);
  const remoteCounter = useCounter(isRefreshCounter, counter.id);

  const checkCounterUpdate = () => {
    console.log('check counter');
    if (token && !token.served) {
      return;
    }

    setIsRefreshCounter(true);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      checkCounterUpdate();
    }, 5000);

    return () => {
      clearInterval(interval);
    }
  }, []);

  useEffect(() => {
    if (!responseMessage && !token) {
      return;
    }

    dispatch(updateServedToken({servedToken: token}));
    setServedTokenNumber(null);
    setIsPostRequested(false);
  }, [responseMessage]);

  useEffect(() => {
    if (!remoteCounter) {
      return;
    }

    setIsRefreshCounter(false);
    dispatch(setSelectedCounter({counter: remoteCounter}));
  }, [remoteCounter]);

  const handleTokenChange = (tokenID: string) => {
    setServedTokenNumber(parseInt(tokenID));
  }

  const handleSubmit = () => {
    setIsPostRequested(true);
  }

  return (
    <Grid container sx={{py: {md: 3, xs: 0},}}>
      <Grid item md={6} xs={12} sx={{
        px: {md: 5, xs: 0},
      }}>
        {token && <TokenToServe token={token}/>}
        {!token && <LoadingMessage message="waiting for next token"/>}
      </Grid>

      <Grid item md={6} xs={12} sx={{
        pb: 5,
        pr: {md: 10, xs: 0},
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end'
      }}>

        <Box sx={{mb: {md: 0, xs: 3},}}>
          <CurrentUser label={`Counter #${counter.id}`}/>
        </Box>

        <MainInputForm buttonText="Submit"
                       value={servedTokenNumber ? servedTokenNumber + '' : null}
                       inputTextProps={{
                         name: 'token',
                         label: 'served token number',
                         invalidInputMessage: 'token number required.'
                       }}
                       onValueChange={handleTokenChange}
                       onSubmitClick={handleSubmit}/>

        <Divider sx={{width: '100%', mt: 5}}/>
      </Grid>
    </Grid>
  )
};

export default CounterOperations;