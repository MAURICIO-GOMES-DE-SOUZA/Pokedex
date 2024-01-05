import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/reset.ts";
import { appTheme } from "./styles/theme.ts";
import { AppRoutes } from "./routes/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={appTheme}>
      <AppRoutes />
     <GlobalStyle/>
    </ThemeProvider>
  </React.StrictMode>
);
