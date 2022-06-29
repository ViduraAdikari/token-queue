import React, {useEffect, useState} from 'react';
import SelectDropdown, {ISelectOptionValue, SelectOption} from "../../elements/dropdown/SelectDropdown";
import Box from "@mui/material/Box";
import {ICounter} from "../../../../types/types";
import {useAppDispatch, useAppSelector} from "../../../../store/hooks/hooks";
import {setSelectedCounter, setCounters} from "../../../../store/reducers/tokenQueueReducer";
import Heading from "../../elements/headings/Heading";
import {useCounters} from "../../../../hooks/data/useCounters";
import LoadingMessage from "../../elements/loading/LoadingMessage";

interface ICounterOptionValue extends ISelectOptionValue, ICounter {
}

//Agent counter selection
const CounterSelect: React.FC = () => {

  const counters: ICounter[] | null = useAppSelector(state => state.tokenQueue.counters);

  const [options, setOptions] = useState<SelectOption<ICounterOptionValue>[] | null>(null);

  const dispatch = useAppDispatch();

  const remoteCounters = useCounters();

  const getOptions = (counters: ICounter[]): SelectOption<ICounterOptionValue>[] => {
    const counterOptionValues: ICounterOptionValue[] = counters;
    return counterOptionValues.map((counter: ICounterOptionValue) => ({
      label: `Counter #${counter.id}`,
      value: counter
    }));
  }

  useEffect(() => {
    if (!counters) {
      return
    }

    setOptions(getOptions(counters));
  }, [counters]);

  useEffect(() => {
    if (!remoteCounters) {
      return;
    }

    dispatch(setCounters({counters: remoteCounters}));
  }, [remoteCounters]);

  const handleOnSelection = (selectedValue: ISelectOptionValue | null) => {
    const selectedCounter: ICounter = selectedValue as ICounter;
    dispatch(setSelectedCounter({counter: selectedCounter}));
  }

  return (
    <Box sx={{
      py: 3,
      mt: 3,
      maxWidth: '600px',
      margin: 'auto'
    }}>
      <Heading type="h2" text="Select your counter"/>

      {!options && <LoadingMessage message="Loading counters"/>}
      {options && <SelectDropdown options={options} onSelection={handleOnSelection}/>}
    </Box>
  )
};

export default CounterSelect;