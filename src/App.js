import React from 'react';
import Home from "./screens/home";
import {createMuiTheme, CssBaseline} from "@material-ui/core";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import {Provider} from "react-redux";
import {createStore} from "redux";
import rootReducer from "./reducers";


const theme = createMuiTheme({
    palette: {
        type: 'dark'
    }
});

const App = () => {

    const store = createStore(rootReducer);

  return (
      <Provider store={store}>
          <ThemeProvider theme={theme}>
              <CssBaseline />
              <Home/>
          </ThemeProvider>
      </Provider>
  );

};

export default App;
