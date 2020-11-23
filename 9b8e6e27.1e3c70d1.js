(window.webpackJsonp=window.webpackJsonp||[]).push([[175],{235:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return d}));var r=n(2),i=n(7),a=(n(0),n(338)),l=n(342),o=n(343),c={title:"Intersection of Two Linked Lists"},s={unversionedId:"linear-list/linked-list/intersection-of-two-linked-lists",id:"linear-list/linked-list/intersection-of-two-linked-lists",isDocsHomePage:!1,title:"Intersection of Two Linked Lists",description:"\u63cf\u8ff0",source:"@site/docs/linear-list/linked-list/intersection-of-two-linked-lists.md",slug:"/linear-list/linked-list/intersection-of-two-linked-lists",permalink:"/linear-list/linked-list/intersection-of-two-linked-lists",editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/linear-list/linked-list/intersection-of-two-linked-lists.md",version:"current",sidebar:"someSidebar",previous:{title:"Palindrome Linked List",permalink:"/linear-list/linked-list/palindrome-linked-list"},next:{title:"Valid Palindrome",permalink:"/string/valid-palindrome"}},u=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5206\u6790",id:"\u5206\u6790",children:[]},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",children:[]},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",children:[]}],b={rightToc:u};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),Object(a.b)("p",null,"Write a program to find the node at which the intersection of two singly linked lists begins."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Example 1"),":"),Object(a.b)("img",{src:"/img/intersection-of-two-linked-lists_example_1.png",width:"60%"}),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"Input"),": listA = ","[4,1,8,4,5]",", listB = ","[5,6,1,8,4,5]",Object(a.b)("br",{parentName:"p"}),"\n",Object(a.b)("strong",{parentName:"p"},"Output"),": The node with value = 8")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Notes"),":"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"If the two linked lists have no intersection at all, return null."),Object(a.b)("li",{parentName:"ul"},"The linked lists must retain their original structure after the function returns."),Object(a.b)("li",{parentName:"ul"},"You may assume there are no cycles anywhere in the entire linked structure."),Object(a.b)("li",{parentName:"ul"},"Your code should preferably run in O(n) time and use only O(1) memory.")),Object(a.b)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),Object(a.b)("p",null,"\u6700\u81ea\u7136\u7684\u60f3\u6cd5\uff0c\u662f\u5148\u904d\u5386\u5b8c\u4e24\u4e2a\u5355\u94fe\u8868\uff0c\u5f97\u5230\u4ed6\u4eec\u7684\u957f\u5ea6",Object(a.b)("inlineCode",{parentName:"p"},"lenA"),"\u548c",Object(a.b)("inlineCode",{parentName:"p"},"lenB"),"\uff0c\u8fdb\u800c\u77e5\u9053\u4ed6\u4eec\u7684\u957f\u5ea6\u4e4b\u5dee\u3002\u7136\u540e\u518d\u6b21\u904d\u5386\u4e24\u4e2a\u5355\u94fe\u8868\uff0c\u4e0d\u8fc7\u8fd9\u6b21\uff0c\u957f\u7684\u5355\u94fe\u8868\u5148\u8d70",Object(a.b)("inlineCode",{parentName:"p"},"|lenA-lenB|"),"\u6b65\uff0c\u7136\u540e\u4e24\u4e2a\u6307\u9488\u4e00\u8d77\u8d70\uff0c\u5f53\u4e24\u4e2a\u6307\u9488\u6307\u5411\u76f8\u540c\u7684\u8282\u70b9\uff0c\u8fd9\u4e2a\u8282\u70b9\u5c31\u662f\u76f8\u4ea4\u70b9\u3002\u8fd9\u4e2a\u7b97\u6cd5\u7684\u65f6\u95f4\u590d\u6742\u5ea6\u662f O(m+n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6 O(1)\uff0c\u662f\u7b26\u5408\u9898\u76ee\u8981\u6c42\u7684\u3002"),Object(a.b)("p",null,"\u4e0a\u8ff0\u601d\u8def\u904d\u5386\u4e86\u4e24\u8fb9\uff0c\u53ef\u4ee5\u4f18\u5316\u4e3a\u53ea\u904d\u5386\u4e00\u904d\u3002\u904d\u5386\u4e24\u4e2a\u5355\u94fe\u8868\uff0c\u8f83\u77ed\u7684\u90a3\u6761\u4f1a\u6700\u5148\u5230\u8fbe\u5c3e\u90e8\uff0c\u7136\u540e\u628a\u8fd9\u4e2a\u6307\u9488\u6307\u5411\u8f83\u957f\u7684\u5355\u94fe\u8868\u7684\u5934\u90e8\uff08\u8fd9\u7b49\u4ef7\u4e8e\u8ba9\u957f\u94fe\u8868\u7684\u6307\u9488\u5148\u8d70",Object(a.b)("inlineCode",{parentName:"p"},"|lenA-lenB|"),"\u6b65\uff09\uff0c\u4e24\u4e2a\u6307\u9488\u7ee7\u7eed\u5f80\u524d\u8d70\uff0c\u5f53\u4e24\u4e2a\u6307\u9488\u6307\u5411\u76f8\u540c\u7684\u8282\u70b9\u65f6\uff0c\u8fd9\u4e2a\u6307\u9488\u5c31\u662f\u76f8\u4ea4\u70b9\u3002"),Object(a.b)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),Object(a.b)(l.a,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},Object(a.b)(o.a,{value:"java",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"// Intersection of Two Linked Lists\n// Two Pointers\n// Time Complexity: O(m+n), Space Complexity: O(1)\npublic class Solution {\n    public ListNode getIntersectionNode(ListNode headA, ListNode headB) {\n        if(headA == null || headB == null) return null;\n\n        ListNode a = headA;\n        ListNode b = headB;\n        while( a != b) {\n            a = a == null? headB : a.next;\n            b = b == null? headA : b.next;\n        }\n\n        return a;\n    }\n}\n"))),Object(a.b)(o.a,{value:"cpp",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cpp"}),"// TODO\n")))),Object(a.b)("h3",{id:"\u76f8\u5173\u9898\u76ee"},"\u76f8\u5173\u9898\u76ee"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"/linear-list/linked-list/linked-list-cycle-ii"}),"Linked List Cycle II"))))}d.isMDXComponent=!0},338:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),u=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=u(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=u(n),p=r,f=b["".concat(l,".").concat(p)]||b[p]||d[p]||a;return n?i.a.createElement(f,o(o({ref:t},s),{},{components:n})):i.a.createElement(f,o({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<a;s++)l[s]=n[s];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},339:function(e,t,n){"use strict";function r(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}t.a=function(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(i&&(i+=" "),i+=t);return i}},340:function(e,t,n){"use strict";var r=n(0),i=n(341);t.a=function(){var e=Object(r.useContext)(i.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},341:function(e,t,n){"use strict";var r=n(0),i=Object(r.createContext)(void 0);t.a=i},342:function(e,t,n){"use strict";var r=n(0),i=n.n(r),a=n(340),l=n(339),o=n(49),c=n.n(o),s=37,u=39;t.a=function(e){var t=e.block,n=e.children,o=e.defaultValue,b=e.values,d=e.groupId,p=e.className,f=Object(a.a)(),m=f.tabGroupChoices,O=f.setTabGroupChoices,v=Object(r.useState)(o),j=v[0],y=v[1],h=Object(r.useState)(!1),w=h[0],g=h[1];if(null!=d){var k=m[d];null!=k&&k!==j&&b.some((function(e){return e.value===k}))&&y(k)}var N=function(e){y(e),null!=d&&O(d,e)},x=[],T=function(e){e.metaKey||e.altKey||e.ctrlKey||g(!0)},C=function(){g(!1)};return Object(r.useEffect)((function(){return window.addEventListener("keydown",T),window.addEventListener("mousedown",C),function(){window.removeEventListener("keydown",T),window.removeEventListener("mousedown",C)}}),[]),i.a.createElement("div",null,i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":t},p)},b.map((function(e){var t=e.value,n=e.label;return i.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":j===t,className:Object(l.a)("tabs__item",c.a.tabItem,{"tabs__item--active":j===t}),style:w?{}:{outline:"none"},key:t,ref:function(e){return x.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case u:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(x,e.target,e),T(e)},onFocus:function(){return N(t)},onClick:function(){N(t),g(!1)},onPointerDown:function(){return g(!1)}},n)}))),i.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(n).filter((function(e){return e.props.value===j}))[0]))}},343:function(e,t,n){"use strict";var r=n(0),i=n.n(r);t.a=function(e){return i.a.createElement("div",null,e.children)}}}]);