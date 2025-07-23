"use client";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
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
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ThemeProvider theme={darkTheme}>
        <StoreProvider>{children}</StoreProvider>
      </ThemeProvider>
    </LocalizationProvider>
  );
}
