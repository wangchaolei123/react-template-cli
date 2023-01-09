import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import store from '@/store';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from '@/router';
import Footer from '@/components/footer';
import { SpinLoading } from 'antd-mobile';

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<SpinLoading />}>
        <AppRoutes />
      </Suspense>
      <Footer />
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
