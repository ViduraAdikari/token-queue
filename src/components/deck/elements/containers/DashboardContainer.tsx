import React from 'react';
import Container from "@mui/material/Container";

type DashboardContainerProps = {
  children: React.ReactNode
}

const DashboardContainer: React.FC<DashboardContainerProps> = (props: DashboardContainerProps) => {

  const {children} = props;

  return (
    <Container maxWidth="lg" sx={{
      px: 4,
      py: 5,
    }}>
      {children}
    </Container>
  )
};

export default DashboardContainer;