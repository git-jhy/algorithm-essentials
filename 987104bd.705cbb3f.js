(window.webpackJsonp=window.webpackJsonp||[]).push([[154],{212:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return s})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return p}));var r=t(2),i=t(6),a=(t(0),t(298)),o=t(302),u=t(303),l={title:"Reverse Nodes in k-Group"},s={unversionedId:"linear-list/linked-list/reverse-nodes-in-k-group",id:"linear-list/linked-list/reverse-nodes-in-k-group",isDocsHomePage:!1,title:"Reverse Nodes in k-Group",description:"\u63cf\u8ff0",source:"@site/docs/linear-list/linked-list/reverse-nodes-in-k-group.md",slug:"/linear-list/linked-list/reverse-nodes-in-k-group",permalink:"/linear-list/linked-list/reverse-nodes-in-k-group",editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/linear-list/linked-list/reverse-nodes-in-k-group.md",version:"current",sidebar:"someSidebar",previous:{title:"Swap Nodes in Pairs",permalink:"/linear-list/linked-list/swap-nodes-in-pairs"},next:{title:"Copy List with Random Pointer",permalink:"/linear-list/linked-list/copy-list-with-random-pointer"}},c=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5206\u6790",id:"\u5206\u6790",children:[]},{value:"\u9012\u5f52\u7248",id:"\u9012\u5f52\u7248",children:[]},{value:"\u8fed\u4ee3\u7248",id:"\u8fed\u4ee3\u7248",children:[]},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",children:[]}],d={rightToc:c};function p(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),Object(a.b)("p",null,"Given a linked list, reverse the nodes of a linked list k at a time and return its modified list."),Object(a.b)("p",null,"If the number of nodes is not a multiple of ",Object(a.b)("inlineCode",{parentName:"p"},"k")," then left-out nodes in the end should remain as it is."),Object(a.b)("p",null,"You may not alter the values in the nodes, only nodes itself may be changed."),Object(a.b)("p",null,"Only constant memory is allowed."),Object(a.b)("p",null,"For example,\nGiven this linked list: ",Object(a.b)("inlineCode",{parentName:"p"},"1->2->3->4->5")),Object(a.b)("p",null,"For ",Object(a.b)("inlineCode",{parentName:"p"},"k = 2"),", you should return: ",Object(a.b)("inlineCode",{parentName:"p"},"2->1->4->3->5")),Object(a.b)("p",null,"For ",Object(a.b)("inlineCode",{parentName:"p"},"k = 3"),", you should return: ",Object(a.b)("inlineCode",{parentName:"p"},"3->2->1->4->5")),Object(a.b)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),Object(a.b)("p",null,"\u65e0"),Object(a.b)("h3",{id:"\u9012\u5f52\u7248"},"\u9012\u5f52\u7248"),Object(a.b)(o.a,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},Object(a.b)(u.a,{value:"java",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"\n// Reverse Nodes in k-Group\n// \u9012\u5f52\u7248\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\nclass Solution {\n    public ListNode reverseKGroup(ListNode head, int k) {\n        if (head == null || head.next == null || k < 2)\n            return head;\n\n        ListNode next_group = head;\n        for (int i = 0; i < k; ++i) {\n            if (next_group != null)\n                next_group = next_group.next;\n            else\n                return head;\n        }\n        // next_group is the head of next group\n        // new_next_group is the new head of next group after reversion\n        ListNode new_next_group = reverseKGroup(next_group, k);\n        ListNode prev = null, cur = head;\n        while (cur != next_group) {\n            ListNode next = cur.next;\n            cur.next = prev != null ? prev : new_next_group;\n            prev = cur;\n            cur = next;\n        }\n        return prev; // prev will be the new head of this group\n    }\n}\n"))),Object(a.b)(u.a,{value:"cpp",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cpp"}),"// Reverse Nodes in k-Group\n// \u9012\u5f52\u7248\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\nclass Solution {\npublic:\n    ListNode *reverseKGroup(ListNode *head, int k) {\n        if (head == nullptr || head->next == nullptr || k < 2)\n            return head;\n\n        ListNode *next_group = head;\n        for (int i = 0; i < k; ++i) {\n            if (next_group)\n                next_group = next_group->next;\n            else\n                return head;\n        }\n        // next_group is the head of next group\n        // new_next_group is the new head of next group after reversion\n        ListNode *new_next_group = reverseKGroup(next_group, k);\n        ListNode *prev = NULL, *cur = head;\n        while (cur != next_group) {\n            ListNode *next = cur->next;\n            cur->next = prev ? prev : new_next_group;\n            prev = cur;\n            cur = next;\n        }\n        return prev; // prev will be the new head of this group\n    }\n};\n")))),Object(a.b)("h3",{id:"\u8fed\u4ee3\u7248"},"\u8fed\u4ee3\u7248"),Object(a.b)(o.a,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},Object(a.b)(u.a,{value:"java",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"// Reverse Nodes in k-Group\n// \u8fed\u4ee3\u7248\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\nclass Solution {\n    public ListNode reverseKGroup(ListNode head, int k) {\n        if (head == null || head.next == null || k < 2) return head;\n        ListNode dummy = new ListNode(-1);\n        dummy.next = head;\n\n        for(ListNode prev = dummy, end = head; end != null; end = prev.next) {\n            for (int i = 1; i < k && end != null; i++)\n                end = end.next;\n            if (end  == null) break;  // \u4e0d\u8db3 k \u4e2a\n\n            prev = reverse(prev, prev.next, end);\n        }\n\n        return dummy.next;\n    }\n\n    // prev \u662f first \u524d\u4e00\u4e2a\u5143\u7d20, [begin, end] \u95ed\u533a\u95f4\uff0c\u4fdd\u8bc1\u4e09\u8005\u90fd\u4e0d\u4e3a null\n    // \u8fd4\u56de\u53cd\u8f6c\u540e\u7684\u5012\u6570\u7b2c1\u4e2a\u5143\u7d20\n    ListNode reverse(ListNode prev, ListNode begin, ListNode end) {\n        ListNode end_next = end.next;\n        for (ListNode p = begin, cur = p.next, next = cur.next;\n                cur != end_next;\n                p = cur, cur = next, next = next != null ? next.next : null) {\n            cur.next = p;\n        }\n        begin.next = end_next;\n        prev.next = end;\n        return begin;\n    }\n};\n"))),Object(a.b)(u.a,{value:"cpp",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cpp"}),"// Reverse Nodes in k-Group\n// \u8fed\u4ee3\u7248\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\nclass Solution {\npublic:\n    ListNode *reverseKGroup(ListNode *head, int k) {\n        if (head == nullptr || head->next == nullptr || k < 2) return head;\n        ListNode dummy(-1);\n        dummy.next = head;\n\n        for(ListNode *prev = &dummy, *end = head; end; end = prev->next) {\n            for (int i = 1; i < k && end; i++)\n                end = end->next;\n            if (end  == nullptr) break;  // \u4e0d\u8db3 k \u4e2a\n\n            prev = reverse(prev, prev->next, end);\n        }\n\n        return dummy.next;\n    }\n\n    // prev \u662f first \u524d\u4e00\u4e2a\u5143\u7d20, [begin, end] \u95ed\u533a\u95f4\uff0c\u4fdd\u8bc1\u4e09\u8005\u90fd\u4e0d\u4e3a null\n    // \u8fd4\u56de\u53cd\u8f6c\u540e\u7684\u5012\u6570\u7b2c1\u4e2a\u5143\u7d20\n    ListNode* reverse(ListNode *prev, ListNode *begin, ListNode *end) {\n        ListNode *end_next = end->next;\n        for (ListNode *p = begin, *cur = p->next, *next = cur->next;\n                cur != end_next;\n                p = cur, cur = next, next = next ? next->next : nullptr) {\n            cur->next = p;\n        }\n        begin->next = end_next;\n        prev->next = end;\n        return begin;\n    }\n};\n")))),Object(a.b)("h3",{id:"\u76f8\u5173\u9898\u76ee"},"\u76f8\u5173\u9898\u76ee"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"/linear-list/linked-list/swap-nodes-in-pairs"}),"Swap Nodes in Pairs"))))}p.isMDXComponent=!0},298:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return f}));var r=t(0),i=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=i.a.createContext({}),c=function(e){var n=i.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},d=function(e){var n=c(e.components);return i.a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},b=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(t),b=r,f=d["".concat(o,".").concat(b)]||d[b]||p[b]||a;return t?i.a.createElement(f,u(u({ref:n},s),{},{components:t})):i.a.createElement(f,u({ref:n},s))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=b;var u={};for(var l in n)hasOwnProperty.call(n,l)&&(u[l]=n[l]);u.originalType=e,u.mdxType="string"==typeof e?e:r,o[1]=u;for(var s=2;s<a;s++)o[s]=t[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},299:function(e,n,t){"use strict";function r(e){var n,t,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=r(e[n]))&&(i&&(i+=" "),i+=t);else for(n in e)e[n]&&(i&&(i+=" "),i+=n);return i}n.a=function(){for(var e,n,t=0,i="";t<arguments.length;)(e=arguments[t++])&&(n=r(e))&&(i&&(i+=" "),i+=n);return i}},300:function(e,n,t){"use strict";var r=t(0),i=Object(r.createContext)(void 0);n.a=i},301:function(e,n,t){"use strict";var r=t(0),i=t(300);n.a=function(){var e=Object(r.useContext)(i.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},302:function(e,n,t){"use strict";var r=t(0),i=t.n(r),a=t(301),o=t(299),u=t(47),l=t.n(u),s=37,c=39;n.a=function(e){var n=e.block,t=e.children,u=e.defaultValue,d=e.values,p=e.groupId,b=Object(a.a)(),f=b.tabGroupChoices,v=b.setTabGroupChoices,m=Object(r.useState)(u),x=m[0],h=m[1],O=Object(r.useState)(!1),g=O[0],j=O[1];if(null!=p){var y=f[p];null!=y&&y!==x&&d.some((function(e){return e.value===y}))&&h(y)}var N=function(e){h(e),null!=p&&v(p,e)},k=[],w=function(e){e.metaKey||e.altKey||e.ctrlKey||j(!0)},L=function(){j(!1)};return Object(r.useEffect)((function(){window.addEventListener("keydown",w),window.addEventListener("mousedown",L)}),[]),i.a.createElement("div",null,i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":n})},d.map((function(e){var n=e.value,t=e.label;return i.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":x===n,className:Object(o.a)("tabs__item",l.a.tabItem,{"tabs__item--active":x===n}),style:g?{}:{outline:"none"},key:n,ref:function(e){return k.push(e)},onKeyDown:function(e){!function(e,n,t){switch(t.keyCode){case c:!function(e,n){var t=e.indexOf(n)+1;e[t]?e[t].focus():e[0].focus()}(e,n);break;case s:!function(e,n){var t=e.indexOf(n)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,n)}}(k,e.target,e),w(e)},onFocus:function(){return N(n)},onClick:function(){N(n),j(!1)},onPointerDown:function(){return j(!1)}},t)}))),i.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(t).filter((function(e){return e.props.value===x}))[0]))}},303:function(e,n,t){"use strict";var r=t(0),i=t.n(r);n.a=function(e){return i.a.createElement("div",null,e.children)}}}]);