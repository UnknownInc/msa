import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './theme';

function Root() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const apptheme = React.useMemo(
    () =>
      createMuiTheme(Object.assign(theme, {
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',
        },
      })),
    [prefersDarkMode],
  );

  return (
    <ThemeProvider theme={apptheme}>
      <CssBaseline/>
      <App />
    </ThemeProvider>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
