import React, {PropsWithChildren} from 'react';
import Typography from "@mui/material/Typography";

type LoadingMessageProps = {
  message?: string
}

const LoadingMessage: React.FC<LoadingMessageProps> = (props: PropsWithChildren<LoadingMessageProps>) => {
  
  const {message} = props;
  
  return (
    <Typography>{message}...</Typography>
  )
};

export default LoadingMessage;