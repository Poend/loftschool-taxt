import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import { Store } from './Redux/Store'
import { theme } from 'loft-taxi-mui-theme'
import { MuiThemeProvider } from '@material-ui/core/styles'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
      <Router>
        <MuiThemeProvider theme={theme}>
          <App />
        </MuiThemeProvider>
      </Router>
    </Provider>
  </React.StrictMode >,
  document.getElementById('root')
);
