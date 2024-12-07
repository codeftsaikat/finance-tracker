import { useMemo } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "@/scenes/navbar";
import Dashboard from "./scenes/dashboard";

function App() {
  const theme = useMemo(() => createTheme(themeSettings), []);
  return (
    <div className="bg-black bg-opacity-60">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div>
            <Navbar/>
            <Routes>
              <Route path="/" element={<Dashboard/>} />
              <Route path="/prediction" element={<div>Prediction</div>} />
            </Routes>
          </div>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
