import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "antd/dist/antd.css";
import {Provider} from 'react-redux';
import Mystore from './store/store';
import Routes from './router/Router'



const store = Mystore();
function App() {
  return (
    <Provider store={store}>  
    <Routes />
    </Provider>
  );
}

export default App;
