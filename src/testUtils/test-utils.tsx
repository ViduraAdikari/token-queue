import React, {ReactElement} from 'react';
import {render, RenderOptions} from "@testing-library/react";
import {Theme, ThemeProvider} from "@mui/material/styles";
import {getTheme} from "../util/theme/Theme";

type AllTheProvidersProps = {
  children: React.ReactNode
}

const AllTheProviders: React.FC<AllTheProvidersProps> = ({children}: AllTheProvidersProps) => {
  const theme: Theme = getTheme('light');

  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, {wrapper: AllTheProviders, ...options});

export * from '@testing-library/react';
export {customRender as render};