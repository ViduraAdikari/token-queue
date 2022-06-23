import React from 'react';
import Typography from "@mui/material/Typography";
import {addLeadingZeros} from "../../../../util/util";
import {TOKEN_DISPLAY_LENGTH} from "../../../../const/values";

type TokenNumberProps = {
  tokenNumber: number
}

const TokenNumber: React.FC<TokenNumberProps> = (props: TokenNumberProps) => {

  const {tokenNumber} = props;

  return (
    <Typography variant="h3" sx={{
      fontSize: '2.2em',
      color: '#000000',
      fontWeight: 700,
      mb: 2
    }}>
      {addLeadingZeros(tokenNumber, TOKEN_DISPLAY_LENGTH)}
    </Typography>

  )
};

export default TokenNumber;