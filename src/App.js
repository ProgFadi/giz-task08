import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Product from "./pages/ProductPage";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { deepOrange, red } from "@mui/material/colors";
const theme = createTheme({
  palette: {
    primary: deepOrange,
    secondary: red,
  },
});
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Category" element={<Category />} />
        <Route path="/Product" element={<Product />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
