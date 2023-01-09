## 下载

```bash
  yarn
```

## 启动项目

```bash
  yarn run dev:dev
```

## 移动端配置

- 引入 rem.ts

```ts
const baseSize = 16;

// 设置 rem 函数
function setRem() {
  // 当前页面宽度相对于 1920 宽的缩放比例，可根据自己需要修改。
  const scale = document.documentElement.clientWidth / 1920;
  // 设置页面根节点字体大小, 字体大小最小为12
  const fontSize = baseSize * Math.min(scale, 2) > 12 ? baseSize * Math.min(scale, 2) : 12;
  document.documentElement.style.fontSize = fontSize + 'px';
}

//初始化
setRem();
//改变窗口大小时重新设置 rem,这里最好加上节流
window.onresize = function () {
  setRem();
};

```

- 下载依赖 `postcss-pxtorem

```bash
  yarn add  postcss-pxtorem --save-dev 
```

- `posc.config.js`中引入

```js
  const postcssPxToRem = require('postcss-pxtorem');

```

- `plugins`添加如下配置

```js
  plugin:[
  postcssPxToRem({
    rootValue: 16,
    unitPrecision: 5,
    propList: ['font', 'font-size', 'line-height', 'letter-spacing', 'height', 'width'],
    selectorBlackList: [],
    replace: true,
    mediaQuery: false,
    minPixelValue: 0,
  })
]
```  

`propList`表示转为rem 的css属性，详情见[文档](https://www.npmjs.com/package/postcss-pxtorem)

## 说明

- 此模板为通用模板，集成了router，ts，webpack，reduxe/toolkit，antd

## 国际化配置

```bash
  yarn add react-intl
```

- 创建i18b文件夹
- 目录结构为
  ├─en.json
  ├─zh-CN.json
  ├─index.ts

- `index.ts`  定义如下

```ts
import zhCN from './zh-CN.json';
import en from './en.json';

const i18n = {
  en,
  'zh-CN': zhCN,
};

export default i18n;
```

- 在 `App.tsx`中引入如下文件

```tsx
import zhCN from 'antd/lib/locale/zh_CN';   //antd 的国际化json数据
import i18n from '@/i18n';                 //  项目的国际化
import {useIntl} from 'react-intl';
import {ConfigProvider} from 'antd';
import {Locale} from 'antd/es/locale';

type TranslationsType = 'zh-CN' | 'en';
const DEFAULT_LOCALE = 'zh-CN';
const SUPPPORTED_LOCALES = new Set(['zh-CN', 'zh']);
const getAntdLocale = (locale: TranslationsType) => {
  switch (locale) {
    default:
      return zhCN;
  }
};

// 设置
function useLocaleSupported() {
  return useMemo(() => {
    const userLocales = navigator.languages || [navigator.language || DEFAULT_LOCALE];
    const locale = userLocales.find((x) => SUPPPORTED_LOCALES.has(x)) || DEFAULT_LOCALE;
    const i18nMessage = i18n[locale as TranslationsType];
    const antdLocale = getAntdLocale(locale);
    return [locale, i18nMessage, antdLocale];
  }, []);
}

// 用provider为父组件包裹App
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
          <App/>
        </ConfigProvider>
      </IntlProvider>
    </Provider>
  );
}

```

- 使用国际化

```tsx
import {useIntl} from 'react-intl';

const {formatMessage, messages} = useIntl();
formatMessage({id: ""})  //进行调用，id为json中定义的key
```

- 替换
  json 定义的value为以下的数据时

```json
{
  "pagination.total": "第 {0} - {1} 条 / 总共 {2} 条"
}
```

```tsx
  import {useIntl} from 'react-intl';

const {formatMessage, messages} = useIntl();
formatMessage({id: "pagination.total"}, [1, 2, 2])
```

第二个参数为values,第{0}中的0表示数组下标为0，取对应values下标为0的值

```json
{
  "pagination.total": "第 {count} - {page2} 条 / 总共 {total} 条"
}
```

json以上形式时，value为以下写法
formatMessage({id: "pagination.total"},{count:'...',page:'...',total:'...'})
