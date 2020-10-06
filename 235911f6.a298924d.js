(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{101:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return u})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return b}));var r=t(2),a=t(6),i=(t(0),t(298)),c=t(302),o=t(303),u={title:"Decode Ways"},l={unversionedId:"dp/decode-ways",id:"dp/decode-ways",isDocsHomePage:!1,title:"Decode Ways",description:"\u63cf\u8ff0",source:"@site/docs/dp/decode-ways.md",slug:"/dp/decode-ways",permalink:"/dp/decode-ways",editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/dp/decode-ways.md",version:"current",sidebar:"someSidebar",previous:{title:"Edit Distance",permalink:"/dp/edit-distance"},next:{title:"Distinct Subsequences",permalink:"/dp/distinct-subsequences"}},s=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5206\u6790",id:"\u5206\u6790",children:[]},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",children:[]},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",children:[]}],p={rightToc:s};function b(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),Object(i.b)("p",null,"A message containing letters from ",Object(i.b)("inlineCode",{parentName:"p"},"A-Z")," is being encoded to numbers using the following mapping:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"'A' -> 1\n'B' -> 2\n...\n'Z' -> 26\n")),Object(i.b)("p",null,"Given an encoded message containing digits, determine the total number of ways to decode it."),Object(i.b)("p",null,"For example,\nGiven encoded message ",Object(i.b)("inlineCode",{parentName:"p"},'"12"'),", it could be decoded as ",Object(i.b)("inlineCode",{parentName:"p"},'"AB"')," (1 2) or ",Object(i.b)("inlineCode",{parentName:"p"},'"L"')," (12)."),Object(i.b)("p",null,"The number of ways decoding ",Object(i.b)("inlineCode",{parentName:"p"},'"12"')," is 2."),Object(i.b)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),Object(i.b)("p",null,"\u8ddf\u7b2c???\u8282",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/linear-list/array/climbing-stairs"}),"Climbing Stairs"),"\u5f88\u7c7b\u4f3c\uff0c\u4e0d\u8fc7\u591a\u52a0\u4e00\u4e9b\u5224\u65ad\u903b\u8f91\u3002"),Object(i.b)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),Object(i.b)(c.a,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},Object(i.b)(o.a,{value:"java",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"// Decode Ways\n// \u52a8\u89c4\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\npublic class Solution {\n    public int numDecodings(String s) {\n        if (s.isEmpty() || s.charAt(0) == '0') return 0;\n\n        int prev = 0;\n        int cur = 1;\n        // \u957f\u5ea6\u4e3an\u7684\u5b57\u7b26\u4e32\uff0c\u6709 n+1\u4e2a\u9636\u68af\n        for (int i = 1; i <= s.length(); ++i) {\n            if (s.charAt(i-1) == '0') cur = 0;\n\n            if (i < 2 || !(s.charAt(i - 2) == '1' ||\n                    (s.charAt(i - 2) == '2' && s.charAt(i - 1) <= '6')))\n                prev = 0;\n\n            int tmp = cur;\n            cur = prev + cur;\n            prev = tmp;\n        }\n        return cur;\n    }\n}\n"))),Object(i.b)(o.a,{value:"cpp",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cpp"}),"// Decode Ways\n// \u52a8\u89c4\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\nclass Solution {\npublic:\n    int numDecodings(const string &s) {\n        if (s.empty() || s[0] == '0') return 0;\n\n        int prev = 0;\n        int cur = 1;\n        // \u957f\u5ea6\u4e3an\u7684\u5b57\u7b26\u4e32\uff0c\u6709 n+1\u4e2a\u9636\u68af\n        for (size_t i = 1; i <= s.size(); ++i) {\n            if (s[i-1] == '0') cur = 0;\n\n            if (i < 2 || !(s[i - 2] == '1' ||\n                     (s[i - 2] == '2' && s[i - 1] <= '6')))\n                prev = 0;\n\n            int tmp = cur;\n            cur = prev + cur;\n            prev = tmp;\n        }\n        return cur;\n    }\n};\n")))),Object(i.b)("h3",{id:"\u76f8\u5173\u9898\u76ee"},"\u76f8\u5173\u9898\u76ee"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/linear-list/array/climbing-stairs"}),"Climbing Stairs"))))}b.isMDXComponent=!0},298:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return f}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),s=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=s(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=s(t),d=r,f=p["".concat(c,".").concat(d)]||p[d]||b[d]||i;return t?a.a.createElement(f,o(o({ref:n},l),{},{components:t})):a.a.createElement(f,o({ref:n},l))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,c=new Array(i);c[0]=d;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var l=2;l<i;l++)c[l]=t[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},299:function(e,n,t){"use strict";function r(e){var n,t,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=r(e[n]))&&(a&&(a+=" "),a+=t);else for(n in e)e[n]&&(a&&(a+=" "),a+=n);return a}n.a=function(){for(var e,n,t=0,a="";t<arguments.length;)(e=arguments[t++])&&(n=r(e))&&(a&&(a+=" "),a+=n);return a}},300:function(e,n,t){"use strict";var r=t(0),a=Object(r.createContext)(void 0);n.a=a},301:function(e,n,t){"use strict";var r=t(0),a=t(300);n.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},302:function(e,n,t){"use strict";var r=t(0),a=t.n(r),i=t(301),c=t(299),o=t(47),u=t.n(o),l=37,s=39;n.a=function(e){var n=e.block,t=e.children,o=e.defaultValue,p=e.values,b=e.groupId,d=Object(i.a)(),f=d.tabGroupChoices,m=d.setTabGroupChoices,O=Object(r.useState)(o),v=O[0],y=O[1],j=Object(r.useState)(!1),g=j[0],h=j[1];if(null!=b){var w=f[b];null!=w&&w!==v&&p.some((function(e){return e.value===w}))&&y(w)}var C=function(e){y(e),null!=b&&m(b,e)},E=[],x=function(e){e.metaKey||e.altKey||e.ctrlKey||h(!0)},N=function(){h(!1)};return Object(r.useEffect)((function(){window.addEventListener("keydown",x),window.addEventListener("mousedown",N)}),[]),a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":n})},p.map((function(e){var n=e.value,t=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":v===n,className:Object(c.a)("tabs__item",u.a.tabItem,{"tabs__item--active":v===n}),style:g?{}:{outline:"none"},key:n,ref:function(e){return E.push(e)},onKeyDown:function(e){!function(e,n,t){switch(t.keyCode){case s:!function(e,n){var t=e.indexOf(n)+1;e[t]?e[t].focus():e[0].focus()}(e,n);break;case l:!function(e,n){var t=e.indexOf(n)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,n)}}(E,e.target,e),x(e)},onFocus:function(){return C(n)},onClick:function(){C(n),h(!1)},onPointerDown:function(){return h(!1)}},t)}))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(t).filter((function(e){return e.props.value===v}))[0]))}},303:function(e,n,t){"use strict";var r=t(0),a=t.n(r);n.a=function(e){return a.a.createElement("div",null,e.children)}}}]);