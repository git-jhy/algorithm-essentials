(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{338:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=u(n),f=r,d=b["".concat(o,".").concat(f)]||b[f]||p[f]||i;return n?a.a.createElement(d,s(s({ref:t},l),{},{components:n})):a.a.createElement(d,s({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},339:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},340:function(e,t,n){"use strict";var r=n(0),a=n(341);t.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},341:function(e,t,n){"use strict";var r=n(0),a=Object(r.createContext)(void 0);t.a=a},342:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(340),o=n(339),s=n(49),c=n.n(s),l=37,u=39;t.a=function(e){var t=e.block,n=e.children,s=e.defaultValue,b=e.values,p=e.groupId,f=e.className,d=Object(i.a)(),g=d.tabGroupChoices,m=d.setTabGroupChoices,h=Object(r.useState)(s),O=h[0],v=h[1],y=Object(r.useState)(!1),j=y[0],w=y[1];if(null!=p){var x=g[p];null!=x&&x!==O&&b.some((function(e){return e.value===x}))&&v(x)}var C=function(e){v(e),null!=p&&m(p,e)},S=[],E=function(e){e.metaKey||e.altKey||e.ctrlKey||w(!0)},I=function(){w(!1)};return Object(r.useEffect)((function(){return window.addEventListener("keydown",E),window.addEventListener("mousedown",I),function(){window.removeEventListener("keydown",E),window.removeEventListener("mousedown",I)}}),[]),a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":t},f)},b.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===t,className:Object(o.a)("tabs__item",c.a.tabItem,{"tabs__item--active":O===t}),style:j?{}:{outline:"none"},key:t,ref:function(e){return S.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case u:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(S,e.target,e),E(e)},onFocus:function(){return C(t)},onClick:function(){C(t),w(!1)},onPointerDown:function(){return w(!1)}},n)}))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(n).filter((function(e){return e.props.value===O}))[0]))}},343:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){return a.a.createElement("div",null,e.children)}},399:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/longest-substring-without-repeating-characters-27ffa1f34e43f607f13032821dcbb5ac.png"},74:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(7),i=(n(0),n(338)),o=n(342),s=n(343),c={title:"Longest Substring Without Repeating Characters"},l={unversionedId:"greedy/longest-substring-without-repeating-characters",id:"greedy/longest-substring-without-repeating-characters",isDocsHomePage:!1,title:"Longest Substring Without Repeating Characters",description:"\u63cf\u8ff0",source:"@site/docs/greedy/longest-substring-without-repeating-characters.md",slug:"/greedy/longest-substring-without-repeating-characters",permalink:"/greedy/longest-substring-without-repeating-characters",editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/greedy/longest-substring-without-repeating-characters.md",version:"current",sidebar:"someSidebar",previous:{title:"Best Time to Buy and Sell Stock II",permalink:"/greedy/best-time-to-buy-and-sell-stock-ii"},next:{title:"Container With Most Water",permalink:"/greedy/container-with-most-water"}},u=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5206\u6790",id:"\u5206\u6790",children:[]},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",children:[]}],b={rightToc:u};function p(e){var t=e.components,c=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},b,c,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),Object(i.b)("p",null,"Given a string, find the length of the longest substring without repeating characters. For example, the longest substring without repeating letters for ",Object(i.b)("inlineCode",{parentName:"p"},'"abcabcbb"')," is ",Object(i.b)("inlineCode",{parentName:"p"},'"abc"'),", which the length is 3. For ",Object(i.b)("inlineCode",{parentName:"p"},'"bbbbb"')," the longest substring is ",Object(i.b)("inlineCode",{parentName:"p"},'"b"'),", with the length of 1."),Object(i.b)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),Object(i.b)("p",null,"\u5047\u8bbe\u5b50\u4e32\u91cc\u542b\u6709\u91cd\u590d\u5b57\u7b26\uff0c\u5219\u7236\u4e32\u4e00\u5b9a\u542b\u6709\u91cd\u590d\u5b57\u7b26\uff0c\u5355\u4e2a\u5b50\u95ee\u9898\u5c31\u53ef\u4ee5\u51b3\u5b9a\u7236\u95ee\u9898\uff0c\u56e0\u6b64\u53ef\u4ee5\u7528\u8d2a\u5fc3\u6cd5\u3002\u8ddf\u52a8\u89c4\u4e0d\u540c\uff0c\u52a8\u89c4\u91cc\uff0c\u5355\u4e2a\u5b50\u95ee\u9898\u53ea\u80fd\u5f71\u54cd\u7236\u95ee\u9898\uff0c\u4e0d\u8db3\u4ee5\u51b3\u5b9a\u7236\u95ee\u9898\u3002"),Object(i.b)("p",null,"\u4ece\u5de6\u5f80\u53f3\u626b\u63cf\uff0c\u5f53\u9047\u5230\u91cd\u590d\u5b57\u6bcd\u65f6\uff0c\u4ee5\u4e0a\u4e00\u4e2a\u91cd\u590d\u5b57\u6bcd\u7684",Object(i.b)("inlineCode",{parentName:"p"},"index+1"),"\uff0c\u4f5c\u4e3a\u65b0\u7684\u641c\u7d22\u8d77\u59cb\u4f4d\u7f6e\uff0c\u76f4\u5230\u6700\u540e\u4e00\u4e2a\u5b57\u6bcd\uff0c\u590d\u6742\u5ea6\u662f",Object(i.b)("inlineCode",{parentName:"p"},"O(n)"),"\u3002\u5982\u4e0b\u56fe\u6240\u793a\u3002"),Object(i.b)("p",null,Object(i.b)("img",{alt:"\u4e0d\u542b\u91cd\u590d\u5b57\u7b26\u7684\u6700\u957f\u5b50\u4e32",src:n(399).default})),Object(i.b)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),Object(i.b)(o.a,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},Object(i.b)(s.a,{value:"java",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'// Longest Substring Without Repeating Characters\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\n// \u8003\u8651\u975e\u5b57\u6bcd\u7684\u60c5\u51b5\npublic class Solution {\n    public int lengthOfLongestSubstring(String s) {\n        final int ASCII_MAX = 255;\n        int[] last = new int[ASCII_MAX]; // \u8bb0\u5f55\u5b57\u7b26\u4e0a\u6b21\u51fa\u73b0\u8fc7\u7684\u4f4d\u7f6e\n        int start = 0; // \u8bb0\u5f55\u5f53\u524d\u5b50\u4e32\u7684\u8d77\u59cb\u4f4d\u7f6e\n\n        Arrays.fill(last, -1); // 0\u4e5f\u662f\u6709\u6548\u4f4d\u7f6e\uff0c\u56e0\u6b64\u521d\u59cb\u5316\u4e3a-1\n        int max_len = 0;\n        for (int i = 0; i < s.length(); i++) {\n            if (last[s.charAt(i)] >= start) {\n                max_len = Math.max(i - start, max_len);\n                start = last[s.charAt(i)] + 1;\n            }\n            last[s.charAt(i)] = i;\n        }\n        return Math.max((int)s.length() - start, max_len);  // \u522b\u5fd8\u4e86\u6700\u540e\u4e00\u6b21\uff0c\u4f8b\u5982"abcd"\n    }\n}\n'))),Object(i.b)(s.a,{value:"cpp",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cpp"}),'// Longest Substring Without Repeating Characters\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\n// \u8003\u8651\u975e\u5b57\u6bcd\u7684\u60c5\u51b5\nclass Solution {\npublic:\n    int lengthOfLongestSubstring(string s) {\n        const int ASCII_MAX = 255;\n        int last[ASCII_MAX]; // \u8bb0\u5f55\u5b57\u7b26\u4e0a\u6b21\u51fa\u73b0\u8fc7\u7684\u4f4d\u7f6e\n        int start = 0; // \u8bb0\u5f55\u5f53\u524d\u5b50\u4e32\u7684\u8d77\u59cb\u4f4d\u7f6e\n\n        fill(last, last + ASCII_MAX, -1); // 0\u4e5f\u662f\u6709\u6548\u4f4d\u7f6e\uff0c\u56e0\u6b64\u521d\u59cb\u5316\u4e3a-1\n        int max_len = 0;\n        for (int i = 0; i < s.size(); i++) {\n            if (last[s[i]] >= start) {\n                max_len = max(i - start, max_len);\n                start = last[s[i]] + 1;\n            }\n            last[s[i]] = i;\n        }\n        return max((int)s.size() - start, max_len);  // \u522b\u5fd8\u4e86\u6700\u540e\u4e00\u6b21\uff0c\u4f8b\u5982"abcd"\n    }\n};\n')))))}p.isMDXComponent=!0}}]);