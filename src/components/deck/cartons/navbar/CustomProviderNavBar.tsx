import React, {PropsWithChildren} from 'react';
import Stack from "@mui/material/Stack";
import ThemeSwitch from "../../elements/switch/ThemeSwitch";

type CustomProviderNavBarProps = {
  onThemeChange: (isDarkTheme: boolean) => void
  prefersDarkMode: boolean
}

const CustomProviderNavBar: React.FC<CustomProviderNavBarProps> =
  (props: PropsWithChildren<CustomProviderNavBarProps>) => {

    const {prefersDarkMode} = props;

    return (
      <Stack direction='row'
             sx={{
               justifyContent: 'flex-end',
               paddingBottom: '.5em',
               position: 'fixed',
               width: '100%',
               zIndex: 1500,
               borderBottom: '1px solid #607D8B',
               bgcolor: theme => theme.palette.background.default,
               '@media print': {
                 display: 'none',
               }
             }}>
        <ThemeSwitch onChange={props.onThemeChange} defaultChecked={prefersDarkMode}/>
      </Stack>
    )
  };

export default CustomProviderNavBar;