import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import store from '@/store';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from '@/router';
import { Spin } from 'antd'

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Spin />}>
        <AppRoutes />
      </Suspense>
    </BrowserRouter>
  );
}

function AppWrap() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

export default AppWrap;
