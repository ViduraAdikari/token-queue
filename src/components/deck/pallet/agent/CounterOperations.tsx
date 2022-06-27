import React, {useState} from 'react';
import Grid from "@mui/material/Grid";
import MainInputForm from "../../cartons/forms/MainInputForm";
import TokenToServe from "./TokenToServe";
import CurrentUser from "../../cartons/user/CurrentUser";
import {ICounter} from "../../../../types/types";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";

type CounterOperationsProps = {
  counter: ICounter
}

const CounterOperations: React.FC<CounterOperationsProps> = (props: CounterOperationsProps) => {

  const {counter} = props;

  const [token, setToken] = useState<string | null>(null);

  const handleTokenChange = (tokenID: string) => {
    setToken(tokenID);
  }

  const handleSubmit = () => {
    setToken(null);
  }

  return (
    <Grid container sx={{py: {md: 3, xs: 0},}}>
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
                       value={token}
                       inputTextProps={{
                         name: 'token',
                         label: 'served token number',
                         invalidInputMessage: 'token number required.'
                       }}
                       onValueChange={handleTokenChange}
                       onSubmitClick={handleSubmit}/>

        <Divider sx={{width: '100%', mt: 5}}/>
      </Grid>
      <Grid item md={6} xs={12} sx={{
        px: {md: 5, xs: 0},
      }}>
        <TokenToServe/>
      </Grid>
    </Grid>
  )
};

export default CounterOperations;