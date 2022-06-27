import React from 'react';
import SelectDropdown, {ISelectOptionValue, SelectOption} from "../../elements/dropdown/SelectDropdown";
import Box from "@mui/material/Box";
import {SAMPLE_COUNTERS} from "../../../../const/sampleData";
import {ICounter} from "../../../../types/types";
import {useAppDispatch} from "../../../../store/hooks/hooks";
import {setSelectedCounter} from "../../../../store/reducers/tokenQueueReducer";
import Heading from "../../elements/headings/Heading";

interface ICounterOptionValue extends ISelectOptionValue, ICounter {
}

const counterOptionValues: ICounterOptionValue[] = SAMPLE_COUNTERS;

const options: SelectOption<ICounterOptionValue>[] = counterOptionValues.map((counter: ICounterOptionValue) => ({
  label: `Counter #${counter.id}`,
  value: counter
}));

//Agent counter selection
const CounterSelect: React.FC = () => {

  const dispatch = useAppDispatch();

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
      <SelectDropdown options={options} onSelection={handleOnSelection}/>
    </Box>
  )
};

export default CounterSelect;