import React from 'react';
import Stack from "@mui/material/Stack";
import GridHeadingLabel from "../../elements/labels/GridHeadingLabel";

const GridHeading: React.FC = () => {
  return (
    <Stack direction="row" spacing={1}>
      <GridHeadingLabel text="Token Number"/>
      <GridHeadingLabel text="Counter"/>
    </Stack>
  )
};

export default GridHeading;