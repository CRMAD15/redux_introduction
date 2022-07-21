import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
//Redux imports
import { Provider } from 'react-redux';

//Impor config Function of APPSTORE
import { createAppAsyncStore, createAppStore } from './store/config/storeConfig';
import AppReduxSaga from './AppRedux_saga';


//We create the App Store

// let appStore = createAppStore()

let appAsycnStore = createAppAsyncStore()

const container = document.getElementById('root')
const root = createRoot(container);
root.render(
  <Provider store={appAsycnStore}>
    <React.StrictMode>
      {/* <App /> */}
      <AppReduxSaga />
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
