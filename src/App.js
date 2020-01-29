import React from 'react';
import Home from "./screens/home";
import {createMuiTheme, CssBaseline} from "@material-ui/core";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import {makeStyles} from "@material-ui/styles";

const theme = createMuiTheme({
    palette: {
        type: 'dark'
    }
});

function App() {

  return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Home/>
      </ThemeProvider>
  );
}

export default App;
