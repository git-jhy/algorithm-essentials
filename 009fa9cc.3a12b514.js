(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{298:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return d}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function u(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?u(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var m=a.a.createContext({}),o=function(e){var n=a.a.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},b=function(e){var n=o(e.components);return a.a.createElement(m.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},s=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),b=o(t),s=r,d=b["".concat(u,".").concat(s)]||b[s]||p[s]||i;return t?a.a.createElement(d,c(c({ref:n},m),{},{components:t})):a.a.createElement(d,c({ref:n},m))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,u=new Array(i);u[0]=s;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,u[1]=c;for(var m=2;m<i;m++)u[m]=t[m];return a.a.createElement.apply(null,u)}return a.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},55:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return u})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return o}));var r=t(2),a=t(6),i=(t(0),t(298)),u={title:"Range Sum Query - Immutable"},c={unversionedId:"dp/range-sum-query-immutable",id:"dp/range-sum-query-immutable",isDocsHomePage:!1,title:"Range Sum Query - Immutable",description:"\u63cf\u8ff0",source:"@site/docs/dp/range-sum-query-immutable.md",slug:"/dp/range-sum-query-immutable",permalink:"/dp/range-sum-query-immutable",editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/dp/range-sum-query-immutable.md",version:"current",sidebar:"someSidebar",previous:{title:"House Robber III",permalink:"/dp/house-robber-iii"},next:{title:"Range Sum Query 2D - Immutable",permalink:"/dp/range-sum-query-2d-immutable"}},l=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5206\u6790",id:"\u5206\u6790",children:[]},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",children:[]},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",children:[]}],m={rightToc:l};function o(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},m,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),Object(i.b)("p",null,"Given an integer array ",Object(i.b)("inlineCode",{parentName:"p"},"nums"),", find the sum of the elements between indices ",Object(i.b)("inlineCode",{parentName:"p"},"i")," and ",Object(i.b)("inlineCode",{parentName:"p"},"j")," (",Object(i.b)("inlineCode",{parentName:"p"},"i \u2264 j"),"), inclusive."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Example"),":"),Object(i.b)("p",null,"Given ",Object(i.b)("inlineCode",{parentName:"p"},"nums = [-2, 0, 3, -5, 2, -1]")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"sumRange(0, 2) -> 1\nsumRange(2, 5) -> -1\nsumRange(0, 5) -> -3\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Note"),":"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"You may assume that the array does not change."),Object(i.b)("li",{parentName:"ul"},"There are many calls to sumRange function.")),Object(i.b)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),Object(i.b)("p",null,"\u4ee4\u72b6\u6001",Object(i.b)("inlineCode",{parentName:"p"},"f[i]"),"\u4e3a0\u5230",Object(i.b)("inlineCode",{parentName:"p"},"i"),"\u5143\u7d20\u4e4b\u95f4\u7684\u548c\uff0c\u5219\u72b6\u6001\u8f6c\u79fb\u65b9\u7a0b\u4e3a ",Object(i.b)("inlineCode",{parentName:"p"},"f[i] = f[i-1] + nums[i]"),"\u3002",Object(i.b)("inlineCode",{parentName:"p"},"f[i]"),"\u672c\u8d28\u4e0a\u662f\u7d2f\u52a0\u548c\uff0c\u6709\u4e86",Object(i.b)("inlineCode",{parentName:"p"},"f[i]"),"\uff0c\u5219\u8303\u56f4","[i,j]","\u4e4b\u95f4\u7684\u548c\u7b49\u4e8e",Object(i.b)("inlineCode",{parentName:"p"},"f[j] - f[i-1]"),"\u3002"),Object(i.b)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"// Range Sum Query - Immutable\npublic class NumArray {\n    // Time Complexity: O(n), Space Complexity: O(1)\n    public NumArray(int[] nums) {\n        this.f = new int[nums.length];\n        int sum = 0;\n        for (int i = 0; i < nums.length; ++i) {\n            sum += nums[i];\n            f[i] = sum;\n        }\n    }\n\n    // Time Complexity: O(1), Space Complexity: O(1)\n    public int sumRange(int i, int j) {\n        return f[j] - (i == 0 ? 0 : f[i - 1]);\n    }\n    private final int[] f;\n}\n")),Object(i.b)("h3",{id:"\u76f8\u5173\u9898\u76ee"},"\u76f8\u5173\u9898\u76ee"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/dp/range-sum-query-2d-immutable"}),"Range Sum Query 2D - Immutable")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/binary-tree/segment-tree/range-sum-query-mutable"}),"Range Sum Query - Mmutable"))))}o.isMDXComponent=!0}}]);