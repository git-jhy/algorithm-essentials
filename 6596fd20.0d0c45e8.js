(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{159:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return o})),t.d(n,"rightToc",(function(){return d})),t.d(n,"default",(function(){return p}));var r=t(2),i=t(6),l=(t(0),t(298)),a={title:"Palindrome Linked List"},o={unversionedId:"linear-list/linked-list/palindrome-linked-list",id:"linear-list/linked-list/palindrome-linked-list",isDocsHomePage:!1,title:"Palindrome Linked List",description:"\u63cf\u8ff0",source:"@site/docs/linear-list/linked-list/palindrome-linked-list.md",slug:"/linear-list/linked-list/palindrome-linked-list",permalink:"/linear-list/linked-list/palindrome-linked-list",editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/linear-list/linked-list/palindrome-linked-list.md",version:"current",sidebar:"someSidebar",previous:{title:"LRU Cache",permalink:"/linear-list/linked-list/lru-cache"},next:{title:"Valid Palindrome",permalink:"/string/valid-palindrome"}},d=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5206\u6790",id:"\u5206\u6790",children:[]},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",children:[]}],c={rightToc:d};function p(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),Object(l.b)("p",null,"Given a singly linked list, determine if it is a palindrome."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Follow up"),":"),Object(l.b)("p",null,"Could you do it in ",Object(l.b)("inlineCode",{parentName:"p"},"O(n)")," time and ",Object(l.b)("inlineCode",{parentName:"p"},"O(1)")," space?"),Object(l.b)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),Object(l.b)("p",null,"\u9996\u5148\u8981\u5bfb\u627e\u4e2d\u70b9\uff0c\u539f\u7406\u662f\u4f7f\u7528\u5feb\u6162\u6307\u9488\uff0c\u6bcf\u6b21\u5feb\u6307\u9488\u8d70\u4e24\u6b65\uff0c\u6162\u6307\u9488\u8d70\u4e00\u6b65\u3002\u540c\u65f6\u8fd8\u8981\u7528\u6808\uff0c\u6bcf\u6b21\u6162\u6307\u9488\u8d70\u4e00\u6b65\uff0c\u90fd\u628a\u503c\u5b58\u5165\u6808\u4e2d\u3002\u7b49\u5feb\u6307\u9488\u8d70\u5b8c\u65f6\uff0c\u94fe\u8868\u7684\u524d\u534a\u6bb5\u90fd\u5b58\u5165\u6808\u4e2d\u4e86\u3002\u6700\u540e\u6162\u6307\u9488\u7ee7\u7eed\u5f80\u524d\u8d70\uff0c\u6bcf\u6b21\u4e0e\u6808\u9876\u5143\u7d20\u8fdb\u884c\u6bd4\u8f83\u3002\u7a7a\u95f4\u590d\u6742\u5ea6",Object(l.b)("inlineCode",{parentName:"p"},"O(n)"),"\u3002"),Object(l.b)("p",null,"\u5982\u4f55\u505a\u5230\u7528",Object(l.b)("inlineCode",{parentName:"p"},"O(1)"),"\u7a7a\u95f4\u5462\uff1f\u53ef\u4ee5\u5148\u627e\u5230\u4e2d\u70b9\uff0c\u628a\u540e\u534a\u6bb5 reverse \u4e00\u4e0b\uff0c\u7136\u540e\u6bd4\u8f83\u4e24\u4e2a\u5c0f\u94fe\u8868\u3002"),Object(l.b)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"// Palindrome Linked List\n// Time Complexity: O(n), Space Complexity: O(1)\npublic class Solution {\n    public boolean isPalindrome(ListNode head) {\n        if (head == null) return true;\n\n        final ListNode middle = findMiddle(head);\n        middle.next = reverse(middle.next);\n\n        ListNode p1 = head;\n        ListNode p2 = middle.next;\n        while (p1 != null && p2 != null && p1.val == p2.val) {\n            p1 = p1.next;\n            p2 = p2.next;\n        }\n        return p2 == null;\n\n    }\n    private static ListNode findMiddle(ListNode head) {\n        if (head == null) return null;\n\n        ListNode slow = head;\n        ListNode fast = head.next;\n\n        while (fast != null && fast.next != null) {\n            slow = slow.next;\n            fast = fast.next.next;\n        }\n        return slow;\n    }\n\n    private static ListNode reverse(ListNode head) {\n        ListNode prev = null;\n\n        while (head != null) {\n            ListNode tmp = head.next;\n            head.next = prev;\n            prev = head;\n            head = tmp;\n        }\n\n        return prev;\n    }\n}\n")))}p.isMDXComponent=!0},298:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return b}));var r=t(0),i=t.n(r);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=i.a.createContext({}),p=function(e){var n=i.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=p(e.components);return i.a.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},m=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,a=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),s=p(t),m=r,b=s["".concat(a,".").concat(m)]||s[m]||u[m]||l;return t?i.a.createElement(b,o(o({ref:n},c),{},{components:t})):i.a.createElement(b,o({ref:n},c))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,a=new Array(l);a[0]=m;var o={};for(var d in n)hasOwnProperty.call(n,d)&&(o[d]=n[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,a[1]=o;for(var c=2;c<l;c++)a[c]=t[c];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);