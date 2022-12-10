import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";


import App from '@/App';
import 'antd/dist/reset.css';
import "normalize.css"
import "./assets/css/index.less"
import store from './store';
import theme from './assets/theme';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //这样的结构解决store不能更新的问题，异步引起的。。。  调整包含结构
  // import会导致刷新两次，解决方案一：去掉import， 解决方案二：

  <Provider store={store}>
    <Suspense fallback="loading">
      <ThemeProvider theme={theme}>
        <HashRouter>
          <App />
        </HashRouter>
      </ThemeProvider>
    </Suspense>
  </Provider >


);


