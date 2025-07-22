"use client";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import StoreProvider from "../store/storeProvider";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function AppProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider theme={darkTheme}>
      <StoreProvider>{children}</StoreProvider>
    </ThemeProvider>
  );
}
