import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
import { ChakraProvider } from '@chakra-ui/react'
// import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider> 
      <Provider store={store}> 
      {/* <PersistGate loading={null} persistor={persistor}><App/></PersistGate>  */}
      <App/>
      
    </Provider>
    </ChakraProvider>
   
  
  </React.StrictMode>
);
