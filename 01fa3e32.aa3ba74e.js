(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{338:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return b}));var i=t(0),r=t.n(i);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=r.a.createContext({}),s=function(e){var n=r.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):d(d({},n),e)),t},l=function(e){var n=s(e.components);return r.a.createElement(c.Provider,{value:n},e.children)},v={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},f=r.a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),l=s(t),f=i,b=l["".concat(a,".").concat(f)]||l[f]||v[f]||o;return t?r.a.createElement(b,d(d({ref:n},c),{},{components:t})):r.a.createElement(b,d({ref:n},c))}));function b(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=f;var d={};for(var u in n)hasOwnProperty.call(n,u)&&(d[u]=n[u]);d.originalType=e,d.mdxType="string"==typeof e?e:i,a[1]=d;for(var c=2;c<o;c++)a[c]=t[c];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},339:function(e,n,t){"use strict";function i(e){var n,t,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=i(e[n]))&&(r&&(r+=" "),r+=t);else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}n.a=function(){for(var e,n,t=0,r="";t<arguments.length;)(e=arguments[t++])&&(n=i(e))&&(r&&(r+=" "),r+=n);return r}},340:function(e,n,t){"use strict";var i=t(0),r=t(341);n.a=function(){var e=Object(i.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},341:function(e,n,t){"use strict";var i=t(0),r=Object(i.createContext)(void 0);n.a=r},342:function(e,n,t){"use strict";var i=t(0),r=t.n(i),o=t(340),a=t(339),d=t(49),u=t.n(d),c=37,s=39;n.a=function(e){var n=e.block,t=e.children,d=e.defaultValue,l=e.values,v=e.groupId,f=e.className,b=Object(o.a)(),p=b.tabGroupChoices,m=b.setTabGroupChoices,g=Object(i.useState)(d),O=g[0],y=g[1],w=Object(i.useState)(!1),j=w[0],h=w[1];if(null!=v){var I=p[v];null!=I&&I!==O&&l.some((function(e){return e.value===I}))&&y(I)}var T=function(e){y(e),null!=v&&m(v,e)},E=[],N=function(e){e.metaKey||e.altKey||e.ctrlKey||h(!0)},x=function(){h(!1)};return Object(i.useEffect)((function(){return window.addEventListener("keydown",N),window.addEventListener("mousedown",x),function(){window.removeEventListener("keydown",N),window.removeEventListener("mousedown",x)}}),[]),r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(a.a)("tabs",{"tabs--block":n},f)},l.map((function(e){var n=e.value,t=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===n,className:Object(a.a)("tabs__item",u.a.tabItem,{"tabs__item--active":O===n}),style:j?{}:{outline:"none"},key:n,ref:function(e){return E.push(e)},onKeyDown:function(e){!function(e,n,t){switch(t.keyCode){case s:!function(e,n){var t=e.indexOf(n)+1;e[t]?e[t].focus():e[0].focus()}(e,n);break;case c:!function(e,n){var t=e.indexOf(n)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,n)}}(E,e.target,e),N(e)},onFocus:function(){return T(n)},onClick:function(){T(n),h(!1)},onPointerDown:function(){return h(!1)}},t)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},i.Children.toArray(t).filter((function(e){return e.props.value===O}))[0]))}},343:function(e,n,t){"use strict";var i=t(0),r=t.n(i);n.a=function(e){return r.a.createElement("div",null,e.children)}},64:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return u})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return v}));var i=t(2),r=t(7),o=(t(0),t(338)),a=t(342),d=t(343),u={title:"Divide Two Integers"},c={unversionedId:"simulation/divide-two-integers",id:"simulation/divide-two-integers",isDocsHomePage:!1,title:"Divide Two Integers",description:"\u63cf\u8ff0",source:"@site/docs/simulation/divide-two-integers.md",slug:"/simulation/divide-two-integers",permalink:"/simulation/divide-two-integers",editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/simulation/divide-two-integers.md",version:"current",sidebar:"someSidebar",previous:{title:"ZigZag Conversion",permalink:"/simulation/zigzag-conversion"},next:{title:"Text Justification",permalink:"/simulation/text-justification"}},s=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5206\u6790",id:"\u5206\u6790",children:[]},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",children:[]}],l={rightToc:s};function v(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(i.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),Object(o.b)("p",null,"Divide two integers without using multiplication, division and mod operator."),Object(o.b)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),Object(o.b)("p",null,"\u4e0d\u80fd\u7528\u4e58\u3001\u9664\u548c\u53d6\u6a21\uff0c\u90a3\u5269\u4e0b\u7684\uff0c\u8fd8\u6709\u52a0\u3001\u51cf\u548c\u4f4d\u8fd0\u7b97\u3002"),Object(o.b)("p",null,"\u6700\u7b80\u5355\u7684\u65b9\u6cd5\uff0c\u662f\u4e0d\u65ad\u51cf\u53bb\u88ab\u9664\u6570\u3002\u5728\u8fd9\u4e2a\u57fa\u7840\u4e0a\uff0c\u53ef\u4ee5\u505a\u4e00\u70b9\u4f18\u5316\uff0c\u6bcf\u6b21\u628a\u88ab\u9664\u6570\u7ffb\u500d\uff0c\u4ece\u800c\u52a0\u901f\u3002"),Object(o.b)("p",null,"\u6ce8\u610f\uff0c\u5199\u4ee3\u7801\u7684\u65f6\u5019\uff0c\u7981\u6b62\u4f7f\u7528 long."),Object(o.b)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),Object(o.b)(a.a,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},Object(o.b)(d.a,{value:"java",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-java"}),"// Divide Two Integers\n// \u65f6\u95f4\u590d\u6742\u5ea6O(logn)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\npublic class Solution {\n    public int divide(int dividend, int divisor) {\n        if(dividend == 0) return 0;\n        if (divisor == 0) return Integer.MAX_VALUE;\n\n        // \u5f53 dividend = INT_MIN\uff0cdivisor = -1\u65f6\uff0c\u7ed3\u679c\u4f1a\u6ea2\u51fa\n        if (dividend == Integer.MIN_VALUE) {\n            if (divisor == -1) return Integer.MAX_VALUE;\n            else if (divisor < 0)\n                return 1 + divide(dividend - divisor, divisor);\n            else\n                return - 1 + divide((dividend + divisor), divisor);\n        }\n        if(divisor == Integer.MIN_VALUE){\n            return dividend == divisor ? 1 : 0;\n        }\n\n        int a = dividend > 0 ? dividend : -dividend;\n        int b = divisor > 0 ? divisor : -divisor;\n\n        int result = 0;\n        while (a >= b) {\n            int c = b;\n            for (int i = 0; a >= c;) {\n                a -= c;\n                result += 1 << i;\n                if (c < Integer.MAX_VALUE / 2) { // prevent overflow\n                    ++i;\n                    c <<= 1;\n                }\n            }\n        }\n\n        return ((dividend^divisor) >> 31) != 0 ? (-result) : (result);\n    }\n}\n"))),Object(o.b)(d.a,{value:"cpp",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-cpp"}),"// Divide Two Integers\n// \u65f6\u95f4\u590d\u6742\u5ea6O(logn)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\nclass Solution {\npublic:\n    int divide(int dividend, int divisor) {\n        if (dividend == 0) return 0;\n        if (divisor == 0) return INT_MAX;\n\n        // \u5f53 dividend = INT_MIN\uff0cdivisor = -1\u65f6\uff0c\u7ed3\u679c\u4f1a\u6ea2\u51fa\n        if (dividend == INT_MIN) {\n            if (divisor == -1) return INT_MAX;\n            else if (divisor < 0)\n                return 1 + divide(dividend - divisor, divisor);\n            else\n                return - 1 + divide((dividend + divisor), divisor);\n        }\n        if(divisor == INT_MIN){\n            return dividend == divisor ? 1 : 0;\n        }\n\n        int a = dividend > 0 ? dividend : -dividend;\n        int b = divisor > 0 ? divisor : -divisor;\n\n        int result = 0;\n        while (a >= b) {\n            int c = b;\n            for (int i = 0; a >= c;) {\n                a -= c;\n                result += 1 << i;\n                if (c < INT_MAX / 2) { // prevent overflow\n                    ++i;\n                    c <<= 1;\n                }\n            }\n        }\n\n        return ((dividend^divisor) >> 31) ? (-result) : (result);\n    }\n};\n")))))}v.isMDXComponent=!0}}]);