import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraBaseProvider, extendTheme } from '@chakra-ui/react';
import App from './App';

const config = { initialColorMode: 'system', useSystemColorMode: true };
const theme = extendTheme({ config });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraBaseProvider theme={theme}>
      <App />
    </ChakraBaseProvider>
  </React.StrictMode>
);


