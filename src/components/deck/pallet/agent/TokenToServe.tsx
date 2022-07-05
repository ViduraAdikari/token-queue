import React from 'react';
import Paper from "@mui/material/Paper";
import TokenTitle from "../../elements/token/TokenTitle";
import TokenNumber from "../../elements/token/TokenNumber";
import {grey} from "@mui/material/colors";
import TokenTypo from "../../elements/token/TokenTypo";
import {useTheme} from "@mui/material/styles";
import {IToken} from "../../../../types/types";

type TokenToServeProps = {
  token: IToken
}

const TokenToServe: React.FC<TokenToServeProps> = (props: TokenToServeProps) => {

  const {token} = props;

  const isActive: boolean = !token.served;

  const theme = useTheme();

  const activeColor: string = theme.palette.mode === 'dark' ? grey[100] : grey[900];
  const inactiveColor: string = theme.palette.mode === 'dark' ? grey[800] : grey[500];

  return (
    <Paper elevation={3} sx={{
      mt: {md: 4, xs: 2},
      px: 3,
      py: 10,
      display: 'flex',
      flexDirection: 'column',
      alignItems: "center",
      fontSize: '1.5em',
      color: isActive ? activeColor : inactiveColor,
      '& p': {
        color: isActive ? activeColor : inactiveColor,
      }
    }}>

      <TokenTitle title="token to serve"/>
      <TokenNumber tokenNumber={token.tokenNumber}/>

      <TokenTypo text={'Customer:'}/>
      <TokenTypo text={token.customer.phone}/>

    </Paper>
  )
};

export default TokenToServe;