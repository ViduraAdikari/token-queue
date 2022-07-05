import React, {useEffect, useState} from 'react';
import Button from "@mui/material/Button";
import {Navigate} from "react-router-dom";
import {TOKEN_ROUTE_PATHS} from "../../../../routes/routePaths";
import PrintIcon from '@mui/icons-material/Print';

const PrintToken: React.FC = () => {
  const [isPrinting, setIsPrinting] = useState(false);
  const [isRedirecting, setIsRedirecting] = useState(false);
  const [isRedirect, setIsRedirect] = useState(false);


  useEffect(() => {
    if (!isRedirecting) {
      return;
    }

    const timeout = setTimeout(() => {
      clearTimeout(timeout);
      setIsRedirect(true);
    }, 1000);

  }, [isRedirecting]);

  useEffect(() => {
    if (!isPrinting) {
      return;
    }

    const timeout = setTimeout(() => {
      clearTimeout(timeout);
      setIsRedirecting(true);
    }, 500);

  }, [isPrinting]);

  const handleOnPrintClick = () => {
    setIsPrinting(true);
  }

  const redirectToHome = () => {
    return <Navigate to={TOKEN_ROUTE_PATHS.GUEST_LOGIN}/>;
  }


  return (
    <Button variant="contained" size="large" disabled={isPrinting} onClick={handleOnPrintClick}
            sx={{
              marginTop: '2em',
              width: '400px',
              maxWidth: '98%',
              py: 2,
              '@media print': {
                display: 'none',
              }
            }}>
      {isRedirect && redirectToHome()}

      {(isPrinting && !isRedirecting) && <PrintIcon sx={{mr: 1}}/>}
      {(isPrinting && !isRedirecting) ? 'Printing' : isRedirecting ? 'Redirecting..' : 'Print'}
    </Button>
  )
};

export default PrintToken;