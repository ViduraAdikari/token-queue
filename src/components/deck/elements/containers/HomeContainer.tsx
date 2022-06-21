import React from 'react';
import Container from "@mui/material/Container";

type HomeContainerProps = {
  children: React.ReactNode
}

const HomeContainer: React.FC<HomeContainerProps> = (props: HomeContainerProps) => {

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

export default HomeContainer;