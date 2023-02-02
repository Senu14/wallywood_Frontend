import { Globalstyle } from './Components/Styled/Global.style';
import { ThemeProvider } from 'styled-components';
import { theme } from './Components/Styled/Theme';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import React from 'react';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <Globalstyle />
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
  
);

