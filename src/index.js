import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import { theme } from 'loft-taxi-mui-theme'
import { MuiThemeProvider } from '@material-ui/core/styles'
import { BrowserRouter as Router } from 'react-router-dom'
import AuthContext from './Context'
// import { store } from './Redux/Store'
// import { Provider } from 'react-redux'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthContext>
      {/* <Provider store={store}> */}
        <MuiThemeProvider theme={theme}>
          <App />
        </MuiThemeProvider>
      {/* </Provider> */}
      </AuthContext>
    </Router>
  </React.StrictMode >,
  document.getElementById('root')
);
