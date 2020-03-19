import { ApplyPluginsType } from '/Users/maozhengjing/MySpace/cattalk/docs/node_modules/@umijs/runtime/dist/index.js';
import { plugin } from './plugin';

const routes = [
  {
    "path": "/",
    "component": (props) => require('react').createElement(require('/Users/maozhengjing/MySpace/cattalk/docs/node_modules/@umijs/preset-dumi/lib/themes/default/layout.js').default, {
      ...{"menus":{"*":{"*":[{"path":"/","title":"Index","meta":{}}],"/short-url":[{"path":"/short-url","title":"短链接工具","meta":{}}]}},"locales":[],"navs":{"*":[{"title":"短链接工具","order":1,"path":"/short-url"}]},"title":"喵说","logo":"http://tu.jiuwa.net/pic/20180227/1519727868436802.gif_scaling","mode":"site"},
      ...props,
    }),
    "routes": [
      {
        "path": "/",
        "component": require('../../../docs/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/index.md",
          "updatedTime": null,
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
              "desc": "<div class=\"markdown\"><p>ffmpeg学习笔记 <a href=\"https://github.com/istommao/ffmpeg-notes\" target=\"_blank\">https://github.com/istommao/ffmpeg-notes<svg xmlns=\"http://www.w3.org/2000/svg\" aria-hidden x=\"0px\" y=\"0px\" viewBox=\"0 0 100 100\" width=\"15\" height=\"15\" class=\"__dumi-default-external-link-icon\"><path fill=\"currentColor\" d=\"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z\"></path><polygon fill=\"currentColor\" points=\"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9\"></polygon></svg></a></p></div>"
            },
            {
              "icon": "https://gw.alipayobjects.com/zos/bmw-prod/d60657df-0822-4631-9d7c-e7a869c2f21c/k79dmz3q_w126_h126.png",
              "title": "Python3源码剖析",
              "desc": "<div class=\"markdown\"><p>python3-source-code-analysis</p></div>"
            },
            {
              "icon": "https://gw.alipayobjects.com/zos/bmw-prod/d1ee0c6f-5aed-4a45-a507-339a4bfe076c/k7bjsocq_w144_h144.png",
              "title": "密码学",
              "desc": "<div class=\"markdown\"><p>密码学入门</p></div>"
            },
            {
              "icon": "https://gw.alipayobjects.com/zos/bmw-prod/d1ee0c6f-5aed-4a45-a507-339a4bfe076c/k7bjsocq_w144_h144.png",
              "title": "CodeSnippet",
              "desc": "<div class=\"markdown\"><p><a href=\"https://codesnippet.top/\" target=\"_blank\">https://codesnippet.top/<svg xmlns=\"http://www.w3.org/2000/svg\" aria-hidden x=\"0px\" y=\"0px\" viewBox=\"0 0 100 100\" width=\"15\" height=\"15\" class=\"__dumi-default-external-link-icon\"><path fill=\"currentColor\" d=\"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z\"></path><polygon fill=\"currentColor\" points=\"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9\"></polygon></svg></a></p></div>"
            }
          ],
          "footer": null,
          "slugs": [],
          "title": "Index"
        },
        "title": "Index"
      },
      {
        "path": "/short-url",
        "component": require('../../../docs/short-url.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/short-url.md",
          "updatedTime": null,
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
