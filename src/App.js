import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/landing/landing";
import { ThemeProvider } from "styled-components";
import Home from "./pages/home/home";

// Define what props.theme will look like
const theme = {
  primaryColor: "#AB54DB",
  secondoryColor: "#6979F8",
  fontColor: "#2B2B2B",
  primaryFontFamily: 'Poppins',
  secondoryFontFamily: 'Open Sans'
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
