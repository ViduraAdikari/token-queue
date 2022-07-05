import React from 'react';
import Select from 'react-select';
import {useTheme} from "@mui/material/styles";

export interface ISelectOptionValue {
}

export type SelectOption<T extends ISelectOptionValue> = {
  label: string
  value: T
}

type SelectDropdownProps = {
  isLoading?: boolean
  options: SelectOption<ISelectOptionValue>[]
  defaultSelection?: SelectOption<ISelectOptionValue>
  onSelection?: (selectedValue: ISelectOptionValue | null) => void
}

const SelectDropdown: React.FC<SelectDropdownProps> = (props: SelectDropdownProps) => {

  const theme = useTheme();

  const {isLoading, options, defaultSelection, onSelection} = props;

  const customStyles = {
    option: (provided: any) => ({
      ...provided,
      padding: 10,
      fontSize: '1.5em',
      bgColor: 'transparent',
      '&:hover': {
        cursor: 'pointer',
        background: theme.palette.primary.light
      }
    }),

    menu: () => ({
      border: '1px solid',
      borderColor: theme.palette.primary.light,
    }),
    singleValue: (provided: any, state: any) => ({
      ...provided,
      color: theme.palette.text.primary
    }),
    control: () => ({
      padding: 10,
      fontSize: '1.5em',
      display: 'flex',
      color: theme.palette.text.primary,
      borderRadius: '5px',
      border: '2px solid',
      borderColor: theme.palette.primary.dark,
    }),
  }

  const handleChange = (option: SelectOption<ISelectOptionValue> | null) => {
    if (!onSelection) {
      return;
    }

    onSelection(option && option.value);
  }

  return (
    <Select
      styles={customStyles}
      className="basic-single"
      classNamePrefix="select"
      defaultValue={defaultSelection}
      isLoading={isLoading}
      isClearable={true}
      name="select-dropdown"
      options={options}
      onChange={handleChange}
    />
  )
};

export default SelectDropdown;