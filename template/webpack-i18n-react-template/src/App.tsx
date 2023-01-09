import React, { Suspense, useMemo } from 'react';
import { Provider } from 'react-redux';
import store from '@/store';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from '@/router';
import zhCN from 'antd/lib/locale/zh_CN';
import i18n from '@/i18n';
import { IntlProvider, useIntl } from 'react-intl';
import {ConfigProvider, Spin} from 'antd';
import { Locale } from 'antd/es/locale';

type TranslationsType = 'zh-CN' | 'en';
const DEFAULT_LOCALE = 'zh-CN';
const SUPPPORTED_LOCALES = new Set(['zh-CN', 'zh']);

const getAntdLocale = (locale: TranslationsType) => {
  switch (locale) {
  default:
    return zhCN;
  }
};

function useLocaleSupported() {
  return useMemo(() => {
    const userLocales = navigator.languages || [navigator.language || DEFAULT_LOCALE];
    const locale = userLocales.find((x) => SUPPPORTED_LOCALES.has(x)) || DEFAULT_LOCALE;
    const i18nMessage = i18n[locale as TranslationsType];
    const antdLocale = getAntdLocale(locale as 'zh-CN' | 'en');
    return [locale, i18nMessage, antdLocale];
  }, []);
}

function App() {
  const { formatMessage, messages } = useIntl();
  return (
    <BrowserRouter>
      <Suspense fallback={<Spin />}>
        <AppRoutes />
      </Suspense>
    </BrowserRouter>
  );
}

function AppWrap() {
  const [userLocale, i18nMessage, antdLocale] = useLocaleSupported();
  return (
    <Provider store={store}>
      <IntlProvider
        locale={userLocale as TranslationsType}
        defaultLocale={DEFAULT_LOCALE}
        messages={i18nMessage}
      >
        <ConfigProvider locale={antdLocale as Locale}>
          <App />
        </ConfigProvider>
      </IntlProvider>
    </Provider>
  );
}

export default AppWrap;
