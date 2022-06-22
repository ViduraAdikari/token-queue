import React from 'react';
import Typography from "@mui/material/Typography";

type TokenTypoProps = {
  text: string
  marginBottom?: number
}

const TokenTypo: React.FC<TokenTypoProps> = (props: TokenTypoProps) => {

  const {text, marginBottom} = props;

  return (
    <Typography variant="body2" sx={{
      fontSize: '1em',
      lineHeight: 1.5,
      color: '#000000',
      textAlign: 'center',
      mb: marginBottom
    }}>
      {text}
    </Typography>

  )
};

export default TokenTypo;