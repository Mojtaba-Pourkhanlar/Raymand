import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
// mui RTL
import { CacheProvider } from "@emotion/react";
import rtlPlugin from "stylis-plugin-rtl";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
// MUI Theme
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "frontEnd/mui/theme";
// Components
import UserID from "frontEnd/components/user";
import Users from "frontEnd/components/users";

const AppContainer = () => {
  //NOTE Create RTL Cache
  const cacheRTL = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
  });

  return (
    <CacheProvider value={cacheRTL}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path="/users/:id" element={<UserID />} />
          <Route path="/users" element={<Users />} />
          <Route path="/*" element={<Navigate to="/users" />} />
        </Routes>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default AppContainer;
