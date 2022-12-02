import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";


import App from '@/App';
import "normalize.css"
import store from './store';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Suspense fallback="loading">
      <Provider store={store}>
        <HashRouter>
          <App />
        </HashRouter>
      </Provider>
    </Suspense>

  </React.StrictMode>
);


/*
@ => src： webpack
问题：react脚手架隐藏webpack
 解决方式1、npm run eject  把webpack的配置全部显示出来， 容易配置错误
 解决方式2、craco（react-app-rewired） => 名字的由来 create-react-app config
*/ 