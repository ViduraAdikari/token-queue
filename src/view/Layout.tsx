import React, {PropsWithChildren, Suspense, useEffect, useState} from 'react';
import {Theme, ThemeProvider} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {getTheme} from "../util/theme/Theme";
import CustomProviderNavBar from "../components/deck/cartons/navbar/CustomProviderNavBar";
import {TokenQueueRoutes} from "../routes/routes";

type HomeProps = {
  prefersDarkMode: boolean
}

const Layout: React.FC<HomeProps> = (props: PropsWithChildren<HomeProps>) => {

  const {prefersDarkMode} = props;

  const [isDark, setIsDark] = useState(prefersDarkMode);

  useEffect(() => {
    setIsDark(prefersDarkMode);
  }, [prefersDarkMode]);

  const handleOnThemeChange = (isDarkTheme: boolean) => {
    setIsDark(isDarkTheme);
  }

  const theme: Theme = React.useMemo(() => {
    return getTheme(isDark ? 'dark' : 'light');
  }, [isDark]);

  const menu = TokenQueueRoutes.map(route => <Route key={route.path} path={route.path}
                                                    element={<Suspense fallback={<div>loading...</div>}>
                                                      {<route.component/>}
                                                    </Suspense>
                                                    }/>);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <CustomProviderNavBar onThemeChange={handleOnThemeChange} prefersDarkMode={prefersDarkMode}/>

      <Router>
        <Routes>
          {menu}
        </Routes>
      </Router>

    </ThemeProvider>
  )
};

export default Layout;