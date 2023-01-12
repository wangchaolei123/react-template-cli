import React, { useMemo, useState } from 'react';
import reactLogo from './assets/react.svg';
import styles from './App.module.css';
import { Provider } from 'react-redux';
import store from '@/store';
import zhCN from 'antd/lib/locale/zh_CN';
import i18n from '@/i18n';
import { IntlProvider, useIntl } from 'react-intl';
import { ConfigProvider } from 'antd';
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
  const [count, setCount] = useState(0);
  const { formatMessage, messages } = useIntl();

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className={styles.logo} alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className={styles.react} alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </div>
  );
}

function AppWrap() {
  const [userLocale, i18nMessage, antdLocale] = useLocaleSupported();
  return (
    <Provider store={store}>
      <IntlProvider
        locale={userLocale as TranslationsType}
        defaultLocale={DEFAULT_LOCALE}
        messages={i18nMessage as Record<string, string>}
      >
        <ConfigProvider locale={antdLocale as Locale}>
          <App />
        </ConfigProvider>
      </IntlProvider>
    </Provider>
  );
}

export default AppWrap;
