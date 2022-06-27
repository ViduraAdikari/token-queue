import React, {useState} from 'react';
import Heading from "../../elements/headings/Heading";
import DashboardContainer from "../../elements/containers/DashboardContainer";
import CounterSelect from "../../pallet/agent/CounterSelect";
import Box from "@mui/material/Box";
import {ICounter} from "../../../../types/types";
import {useAppSelector} from "../../../../store/hooks/hooks";
import CounterOperations from "../../pallet/agent/CounterOperations";

const AgentCounter: React.FC = () => {
  const selectedCounter: ICounter | null = useAppSelector(state => state.tokenQueue.selectedCounter);

  return (
    <DashboardContainer>
      <Box sx={{mt: 3, textAlign: 'center'}}>
        <Heading type="h1" text="Agent Counter"/>
      </Box>

      {!selectedCounter && <CounterSelect/>}
      {selectedCounter && <CounterOperations counter={selectedCounter}/>}
    </DashboardContainer>
  )
};

export default AgentCounter;