import React from 'react';
import Paper from "@mui/material/Paper";
import TokenTitle from "../../elements/token/TokenTitle";
import TokenNumber from "../../elements/token/TokenNumber";
import {grey} from "@mui/material/colors";
import TokenTypo from "../../elements/token/TokenTypo";

const TokenToServe: React.FC = () => {
  const isActive: boolean = true;

  return (
    <Paper elevation={3} sx={{
      mt: {md: 4, xs: 2},
      px: 3,
      py: 10,
      display: 'flex',
      flexDirection: 'column',
      alignItems: "center",
      fontSize: '1.5em',
      color: isActive ? grey[100] : grey[500],
      '& p': {
        color: isActive ? grey[100] : grey[500],
      }
    }}>

      <TokenTitle title="token to serve"/>
      <TokenNumber tokenNumber={45}/>

      <TokenTypo text={'Customer:'}/>
      <TokenTypo text={'+94716331433'}/>

    </Paper>
  )
};

export default TokenToServe;