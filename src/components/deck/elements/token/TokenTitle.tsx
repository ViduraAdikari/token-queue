import React, {PropsWithChildren} from 'react';
import Typography from "@mui/material/Typography";

type TokenTitleProps = {
  title: string
}

const TokenTitle: React.FC<TokenTitleProps> = (props: PropsWithChildren<TokenTitleProps>) => {

  const {title} = props;

  return (
    <Typography component='h1' sx={{
      fontSize: '1.5em',
      fontWeight: 500,
      textTransform: 'uppercase',
      mb: 3
    }}>
      {title}
    </Typography>
  )
};

export default TokenTitle;