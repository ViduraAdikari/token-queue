import React from 'react';
import Paper from "@mui/material/Paper";
import {grey} from "@mui/material/colors";
import TokenTitle from "../../elements/token/TokenTitle";
import TokenTypo from "../../elements/token/TokenTypo";
import TokenQR from "../../elements/token/TokenQR";
import Box from "@mui/material/Box";
import TokenNumber from "../../elements/token/TokenNumber";
import {IDisplayToken} from "../../../../types/types";
import {getFormattedDate} from "../../../../util/util";

type TokenProps = {
  token: IDisplayToken
}

const Token: React.FC<TokenProps> = (props: TokenProps) => {

  const {token} = props;

  const tokenBGColor: string = grey[300];
  const formattedDate: string = getFormattedDate(token.time,"MMMM DD, YYYY, hh:mm A");

  return (
    <Paper elevation={3} sx={{
      py: 3,
      px: 1,
      bgcolor: tokenBGColor,
      width: '400px',
      maxWidth: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: "center",
      color: '#000000'
    }}>
      <TokenTitle title="token"/>
      <TokenTypo text={`Appointment for ${token.appointmentFor}`}/>
      <TokenTypo text={`Token time: ${formattedDate}`}/>

      <Box sx={{py: 2}}>
        <TokenQR tokenNumber={token.tokenNumber} size={150} bgColor={tokenBGColor}/>
      </Box>

      <TokenNumber tokenNumber={token.tokenNumber}/>

      <TokenTypo text={'conditions:'}/>
      <TokenTypo text={token.conditions} marginBottom={2}/>
      {token.customer && <TokenTypo text={`phone: ${token.customer.phone}`} marginBottom={2}/>}

    </Paper>
  )
};

export default Token;