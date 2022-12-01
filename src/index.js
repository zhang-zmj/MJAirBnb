import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


/*
@ => src： webpack
问题：react脚手架隐藏webpack
 解决方式1、npm run eject  把webpack的配置全部显示出来， 容易配置错误
 解决方式2、craco（react-app-rewired） => 名字的由来 create-react-app config

*/ 