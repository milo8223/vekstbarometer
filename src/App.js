import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/landing/landing";
import { ThemeProvider } from "styled-components";

// Define what props.theme will look like
const theme = {
  primaryColor: "#AB54DB",
  secondoryColor: "#6979F8",
  primaryFontFamily: 'Poppins',
  secondoryFontFamily: 'Open Sans'
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
