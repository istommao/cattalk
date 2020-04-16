import { defineConfig } from 'dumi';

export default defineConfig({
  title: '喵说',
  mode: 'site',
  favicon: 'https://cattalk.in/static/logo.ico',
  logo: 'https://cattalk.in/static/catlogo.gif',
  locales: [['zh-CN', '中文']],
  navs: [
    null, // null 值代表保留约定式生成的导航，只做增量配置
     {
      title: 'Blog',
      path: 'https://blog.cattalk.in/',
    },
     {
      title: 'GitHub',
      path: 'https://github.com/istommao/',
    }
  ],
  // more config: https://d.umijs.org/config
});
