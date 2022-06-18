import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalState from "./Global/GlobalState";
import Router from "./Routes/Router";
import theme from "./constants/theme";
import NavBar from "./components/NavBar.js"

function App() {
  return (
    <ThemeProvider theme={theme} >
    <GlobalState> 
    <NavBar/>       
      <Router/>      
      
    </GlobalState>
    </ThemeProvider>
  );
}
export default App;
