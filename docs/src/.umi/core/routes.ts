import { ApplyPluginsType } from '/Users/maozhengjing/MySpace/cattalk/docs/node_modules/@umijs/runtime/dist/index.js';
import { plugin } from './plugin';

const routes = [
  {
    "path": "/",
    "component": (props) => require('react').createElement(require('/Users/maozhengjing/MySpace/cattalk/docs/node_modules/@umijs/preset-dumi/lib/themes/default/layout.js').default, {
      ...{"menus":{"*":{"*":[{"path":"/","title":"编程猫无声","meta":{}}],"/short-url":[{"path":"/short-url","title":"短链接工具","meta":{}}]}},"locales":[],"navs":{"*":[{"title":"短链接工具","order":1,"path":"/short-url"}]},"title":"喵说","logo":"https://cattalk.in/static/catlogo.gif","mode":"site"},
      ...props,
    }),
    "routes": [
      {
        "path": "/",
        "component": require('../../../docs/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/index.md",
          "updatedTime": 1584627708000,
          "hero": {
            "title": "猫大人的笔记本",
            "desc": "编程猫无声",
            "actions": [
              {
                "text": "笔记",
                "link": "/"
              }
            ]
          },
          "features": [
            {
              "icon": "https://gw.alipayobjects.com/zos/bmw-prod/881dc458-f20b-407b-947a-95104b5ec82b/k79dm8ih_w144_h144.png",
              "title": "ffmpeg-notes",
              "desc": "<div class=\"markdown\"><p>ffmpeg学习笔记</p></div>"
            },
            {
              "icon": "https://gw.alipayobjects.com/zos/bmw-prod/d60657df-0822-4631-9d7c-e7a869c2f21c/k79dmz3q_w126_h126.png",
              "title": "Python3源码剖析",
              "desc": "<div class=\"markdown\"><p>python3-source-code-analysis</p></div>"
            },
            {
              "icon": "https://gw.alipayobjects.com/zos/bmw-prod/d1ee0c6f-5aed-4a45-a507-339a4bfe076c/k7bjsocq_w144_h144.png",
              "title": "密码学",
              "desc": "<div class=\"markdown\"><p>github.com/istommao/cryptokit</p></div>"
            }
          ],
          "footer": null,
          "slugs": [
            {
              "depth": 1,
              "value": "编程猫无声",
              "heading": "编程猫无声"
            }
          ],
          "title": "编程猫无声"
        },
        "title": "编程猫无声"
      },
      {
        "path": "/short-url",
        "component": require('../../../docs/short-url.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/short-url.md",
          "updatedTime": 1584627708000,
          "nav": {
            "title": "短链接工具",
            "order": 1,
            "path": "/short-url"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "短链接工具",
              "heading": "短链接工具"
            }
          ],
          "title": "短链接工具"
        },
        "title": "短链接工具"
      }
    ],
    "title": "喵说"
  }
];

// allow user to extend routes
plugin.applyPlugins({
  key: 'patchRoutes',
  type: ApplyPluginsType.event,
  args: { routes },
});

export { routes };
