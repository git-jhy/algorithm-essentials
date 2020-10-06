(window.webpackJsonp=window.webpackJsonp||[]).push([[224],{284:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return u})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return p}));var r=t(2),a=t(6),i=(t(0),t(298)),l=t(302),o=t(303),u={title:"Add Two Numbers"},c={unversionedId:"linear-list/linked-list/add-two-numbers",id:"linear-list/linked-list/add-two-numbers",isDocsHomePage:!1,title:"Add Two Numbers",description:"\u63cf\u8ff0",source:"@site/docs/linear-list/linked-list/add-two-numbers.md",slug:"/linear-list/linked-list/add-two-numbers",permalink:"/linear-list/linked-list/add-two-numbers",editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/linear-list/linked-list/add-two-numbers.md",version:"current",sidebar:"someSidebar",previous:{title:"Odd Even Linked List",permalink:"/linear-list/linked-list/odd-even-linked-list"},next:{title:"Reverse Linked List II",permalink:"/linear-list/linked-list/reverse-linked-list-ii"}},s=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5206\u6790",id:"\u5206\u6790",children:[]},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",children:[]},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",children:[]}],d={rightToc:s};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),Object(i.b)("p",null,"You are given two linked lists representing two non-negative numbers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list."),Object(i.b)("p",null,"Input: ",Object(i.b)("inlineCode",{parentName:"p"},"(2 -> 4 -> 3)")," + ",Object(i.b)("inlineCode",{parentName:"p"},"(5 -> 6 -> 4)")),Object(i.b)("p",null,"Output: ",Object(i.b)("inlineCode",{parentName:"p"},"7 -> 0 -> 8")),Object(i.b)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),Object(i.b)("p",null,"\u8ddf ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/string/add-binary"}),"Add Binary")," \u5f88\u7c7b\u4f3c"),Object(i.b)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),Object(i.b)(l.a,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},Object(i.b)(o.a,{value:"java",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"// Add Two Numbers\n// \u8ddfAdd Binary \u5f88\u7c7b\u4f3c\n// \u65f6\u95f4\u590d\u6742\u5ea6O(m+n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\npublic class Solution {\n    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {\n        ListNode dummy = new ListNode(-1); // \u5934\u8282\u70b9\n        int carry = 0;\n        ListNode prev = dummy;\n        for (ListNode pa = l1, pb = l2;\n             pa != null || pb != null;\n             pa = pa == null ? null : pa.next,\n             pb = pb == null ? null : pb.next,\n             prev = prev.next) {\n            final int ai = pa == null ? 0 : pa.val;\n            final int bi = pb == null ? 0 : pb.val;\n            final int value = (ai + bi + carry) % 10;\n            carry = (ai + bi + carry) / 10;\n            prev.next = new ListNode(value); // \u5c3e\u63d2\u6cd5\n        }\n        if (carry > 0)\n            prev.next = new ListNode(carry);\n        return dummy.next;\n    }\n};\n"))),Object(i.b)(o.a,{value:"cpp",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cpp"}),"// Add Two Numbers\n// \u8ddfAdd Binary \u5f88\u7c7b\u4f3c\n// \u65f6\u95f4\u590d\u6742\u5ea6O(m+n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\nclass Solution {\npublic:\n    ListNode *addTwoNumbers(ListNode *l1, ListNode *l2) {\n        ListNode dummy(-1); // \u5934\u8282\u70b9\n        int carry = 0;\n        ListNode *prev = &dummy;\n        for (ListNode *pa = l1, *pb = l2;\n             pa != nullptr || pb != nullptr;\n             pa = pa == nullptr ? nullptr : pa->next,\n             pb = pb == nullptr ? nullptr : pb->next,\n             prev = prev->next) {\n            const int ai = pa == nullptr ? 0 : pa->val;\n            const int bi = pb == nullptr ? 0 : pb->val;\n            const int value = (ai + bi + carry) % 10;\n            carry = (ai + bi + carry) / 10;\n            prev->next = new ListNode(value); // \u5c3e\u63d2\u6cd5\n        }\n        if (carry > 0)\n            prev->next = new ListNode(carry);\n        return dummy.next;\n    }\n};\n")))),Object(i.b)("h3",{id:"\u76f8\u5173\u9898\u76ee"},"\u76f8\u5173\u9898\u76ee"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/string/add-binary"}),"Add Binary"))))}p.isMDXComponent=!0},298:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return f}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=a.a.createContext({}),s=function(e){var n=a.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=s(e.components);return a.a.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=s(t),b=r,f=d["".concat(l,".").concat(b)]||d[b]||p[b]||i;return t?a.a.createElement(f,o(o({ref:n},c),{},{components:t})):a.a.createElement(f,o({ref:n},c))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=b;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=t[c];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},299:function(e,n,t){"use strict";function r(e){var n,t,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=r(e[n]))&&(a&&(a+=" "),a+=t);else for(n in e)e[n]&&(a&&(a+=" "),a+=n);return a}n.a=function(){for(var e,n,t=0,a="";t<arguments.length;)(e=arguments[t++])&&(n=r(e))&&(a&&(a+=" "),a+=n);return a}},300:function(e,n,t){"use strict";var r=t(0),a=Object(r.createContext)(void 0);n.a=a},301:function(e,n,t){"use strict";var r=t(0),a=t(300);n.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},302:function(e,n,t){"use strict";var r=t(0),a=t.n(r),i=t(301),l=t(299),o=t(47),u=t.n(o),c=37,s=39;n.a=function(e){var n=e.block,t=e.children,o=e.defaultValue,d=e.values,p=e.groupId,b=Object(i.a)(),f=b.tabGroupChoices,m=b.setTabGroupChoices,v=Object(r.useState)(o),y=v[0],O=v[1],j=Object(r.useState)(!1),w=j[0],g=j[1];if(null!=p){var h=f[p];null!=h&&h!==y&&d.some((function(e){return e.value===h}))&&O(h)}var N=function(e){O(e),null!=p&&m(p,e)},x=[],k=function(e){e.metaKey||e.altKey||e.ctrlKey||g(!0)},L=function(){g(!1)};return Object(r.useEffect)((function(){window.addEventListener("keydown",k),window.addEventListener("mousedown",L)}),[]),a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":n})},d.map((function(e){var n=e.value,t=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":y===n,className:Object(l.a)("tabs__item",u.a.tabItem,{"tabs__item--active":y===n}),style:w?{}:{outline:"none"},key:n,ref:function(e){return x.push(e)},onKeyDown:function(e){!function(e,n,t){switch(t.keyCode){case s:!function(e,n){var t=e.indexOf(n)+1;e[t]?e[t].focus():e[0].focus()}(e,n);break;case c:!function(e,n){var t=e.indexOf(n)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,n)}}(x,e.target,e),k(e)},onFocus:function(){return N(n)},onClick:function(){N(n),g(!1)},onPointerDown:function(){return g(!1)}},t)}))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(t).filter((function(e){return e.props.value===y}))[0]))}},303:function(e,n,t){"use strict";var r=t(0),a=t.n(r);n.a=function(e){return a.a.createElement("div",null,e.children)}}}]);