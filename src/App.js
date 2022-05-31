import { MuiThemeProvider } from '@material-ui/core';
import './App.css';
import EiWebHeader from './components/ui/header/EiWebHeader';

import defaultTheme from './components/ui/styles/EiWebDefaultTheme'

const App = () => {
  return ( 
    <MuiThemeProvider theme={ defaultTheme }>
      <EiWebHeader></EiWebHeader>
      HELLO
    </MuiThemeProvider>
  );
}

export default App;
