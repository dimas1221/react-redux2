import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import store from './Redux/Store';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import Jumlah from './components/tambah';
// import Ping from './components/kali';
// import Min from './components/kurang';
// import Pembagian from './components/bagi';
// import KirimNama from './parentChild/kirimdatanama';
// import ParentComponent from './kirimFunctionKomponent/ParentKomponent';
// import Callculator from './kalkultor/ParentCal';
// import DataKaryawan from './datatabel/parentData';
import Path from './routes';
import MainLayout from './Layout/MainLayout';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <MainLayout/>
      <Path />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
