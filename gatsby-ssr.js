import React from "react"
import Theme from "./src/themes/theme"
import { ThemeProvider } from "styled-components"

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={Theme}>{element}</ThemeProvider>
)
