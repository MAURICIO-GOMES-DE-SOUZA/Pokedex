import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./pages/App/index.tsx";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/reset.ts";
import { appTheme } from "./styles/theme.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={appTheme}>
      <App />
     <GlobalStyle/>
    </ThemeProvider>
  </React.StrictMode>
);
