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
        paddingBottom: '.6em',
        borderBottom: '1px solid #607D8B',
        position: 'fixed',
        width: '100%',
        zIndex: 1500,
        bgcolor: theme => theme.palette.background.default,
      }}>
      <ThemeSwitch onChange={props.onThemeChange} defaultChecked={prefersDarkMode}/>
    </Stack>
  )
};

export default CustomProviderNavBar;