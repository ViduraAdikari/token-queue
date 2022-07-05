import React from 'react';
import Stack from "@mui/material/Stack";
import DashboardContainer from "../containers/DashboardContainer";
import Typography from "@mui/material/Typography";

type ErrorMessageProps = {
  message: string
}

const ErrorMessage: React.FC<ErrorMessageProps> = (props: ErrorMessageProps) => {

  const {message} = props;

  return (
    <DashboardContainer>
      <Stack sx={{
        alignItems: 'center',
        pt: 5,
      }}>
        <Typography>{message}</Typography>
      </Stack>
    </DashboardContainer>
  )
};

export default ErrorMessage;