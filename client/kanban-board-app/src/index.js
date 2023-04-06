import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraBaseProvider, extendTheme } from '@chakra-ui/react'
import { QueryClientProvider} from 'react-query'
import { queryClient } from './data/hooks';

const config = { initialColorMode: 'system', useSystemColorMode: true };
const theme = extendTheme({ config });


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <ChakraBaseProvider theme={theme}>
      <App />
    </ChakraBaseProvider>
    </QueryClientProvider>
  </React.StrictMode>
);


