import React, {FormEvent, useEffect, useState} from 'react';
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

type InputTextProps = {
  name?: string
  label?: string
  placeholder?: string
  invalidInputMessage?: string
}

type MainInputFormProps = {
  value: string | null
  inputTextProps: InputTextProps
  buttonText: string
  onValueChange: (phone: string) => void
  onSubmitClick: () => void
}

const MainInputForm: React.FC<MainInputFormProps> = (props: MainInputFormProps) => {

  const {value, inputTextProps, onValueChange, onSubmitClick, buttonText} = props;
  const {invalidInputMessage, ...inputProps} = inputTextProps;

  const [validated, setValidated] = useState(false);

  useEffect(() => {
    if (value === null) {
      setValidated(false);
    }
  }, [value]);

  const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onValueChange(event.target.value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setValidated(true);

    if (value && value.length > 0) {
      onSubmitClick();
    }
  }

  const isInputInvalid: boolean = validated && (value === '' || value === null);

  return (
    <Box component='form' noValidate autoComplete="off"
         sx={{
           py: {lg: 5, sm: 4},
           // px: 4,
           textAlign: 'right'
         }}
         onSubmit={handleSubmit}>

      <TextField
        sx={{
          '& fieldset': {
            borderRadius: {sm: '3em', xs: '1em'},
            fontSize: '1.2em',
            px: {sm: 3, xs: 2},
          },
          '& input': {
            px: 4,
            fontSize: {sm: '2em', xs: '1.5em'},
          },
          '& label': {
            fontSize: {sm: '1.2em', xs: '1.1em'},
            ml: {sm: 2, xs: 1},
          },
        }}
        required
        error={isInputInvalid}
        fullWidth
        id={`input-${inputProps.name}`}
        {...inputProps}
        focused
        autoFocus
        value={value ? value : ''}
        onChange={handleValueChange}
        helperText={isInputInvalid ? invalidInputMessage : undefined}
      />

      <Button variant="contained" color="primary"
              sx={{
                mt: 4,
                px: 5,
                borderRadius: '3em', width: {sm: 'auto', xs: '100%'}
              }}
              type="submit" disabled={value === '' || value === null}>
        {buttonText}
      </Button>
    </Box>
  );
};

export default MainInputForm;