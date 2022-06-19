import React from 'react';
import Stack from "@mui/material/Stack";
import Heading from "../../elements/headings/Heading";

const Hero: React.FC = () => {
  return (
    <Stack sx={{
      alignItems: 'center',
      my: 5,
      '& h2': {
        textAlign: 'center'
      }
    }}>
      <Heading type="h1" text="Token Queue"/>
      <Heading type="h2" text="Token issuing and queue management system."/>
    </Stack>
  )
};

export default Hero;