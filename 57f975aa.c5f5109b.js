(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{146:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return b}));var r=t(2),a=t(6),i=(t(0),t(298)),o=t(302),u=t(303),l={title:"Minimum Depth of Binary Tree"},c={unversionedId:"binary-tree/recursion/minimum-depth-of-binary-tree",id:"binary-tree/recursion/minimum-depth-of-binary-tree",isDocsHomePage:!1,title:"Minimum Depth of Binary Tree",description:"\u63cf\u8ff0",source:"@site/docs/binary-tree/recursion/minimum-depth-of-binary-tree.md",slug:"/binary-tree/recursion/minimum-depth-of-binary-tree",permalink:"/binary-tree/recursion/minimum-depth-of-binary-tree",editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/binary-tree/recursion/minimum-depth-of-binary-tree.md",version:"current",sidebar:"someSidebar",previous:{title:"\u7b80\u4ecb",permalink:"/binary-tree/recursion/README"},next:{title:"Maximum Depth of Binary Tree",permalink:"/binary-tree/recursion/maximum-depth-of-binary-tree"}},s=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5206\u6790",id:"\u5206\u6790",children:[]},{value:"\u9012\u5f52\u7248",id:"\u9012\u5f52\u7248",children:[]},{value:"\u8fed\u4ee3\u7248",id:"\u8fed\u4ee3\u7248",children:[]},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",children:[]}],p={rightToc:s};function b(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),Object(i.b)("p",null,"Given a binary tree, find its minimum depth."),Object(i.b)("p",null,"The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node."),Object(i.b)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),Object(i.b)("p",null,"\u65e0"),Object(i.b)("h3",{id:"\u9012\u5f52\u7248"},"\u9012\u5f52\u7248"),Object(i.b)(o.a,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},Object(i.b)(u.a,{value:"java",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"// Minimum Depth of Binary Tree\n// \u9012\u5f52\u7248\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(logn)\npublic class Solution {\n    public int minDepth(TreeNode root) {\n        return minDepth(root, false);\n    }\n    private static int minDepth(TreeNode root, boolean hasbrother) {\n        if (root == null) return hasbrother ? Integer.MAX_VALUE : 0;\n\n        return 1 + Math.min(minDepth(root.left, root.right != null),\n                minDepth(root.right, root.left != null));\n    }\n}\n"))),Object(i.b)(u.a,{value:"cpp",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cpp"}),"// Minimum Depth of Binary Tree\n// \u9012\u5f52\u7248\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(logn)\nclass Solution {\npublic:\n    int minDepth(const TreeNode *root) {\n        return minDepth(root, false);\n    }\nprivate:\n    static int minDepth(const TreeNode *root, bool hasbrother) {\n        if (!root) return hasbrother ? INT_MAX : 0;\n\n        return 1 + min(minDepth(root->left, root->right != NULL),\n                minDepth(root->right, root->left != NULL));\n    }\n};\n")))),Object(i.b)("h3",{id:"\u8fed\u4ee3\u7248"},"\u8fed\u4ee3\u7248"),Object(i.b)(o.a,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},Object(i.b)(u.a,{value:"java",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"// Minimum Depth of Binary Tree\n// \u8fed\u4ee3\u7248\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(logn)\npublic class Solution {\n    public int minDepth(TreeNode root) {\n        if (root == null) return 0;\n\n        int result = Integer.MAX_VALUE;\n        Stack<Pair> s = new Stack<>();\n        s.push(new Pair(root, 1));\n\n        while (!s.empty()) {\n            final Pair p = s.pop();\n            TreeNode node = p.node;\n            int depth = p.depth;\n\n            if (node.left == null && node.right == null)\n                result = Math.min(result, depth);\n\n            if (node.left != null && result > depth) // \u6df1\u5ea6\u63a7\u5236\uff0c\u526a\u679d\n                s.push(new Pair(node.left, depth + 1));\n\n            if (node.right != null && result > depth) // \u6df1\u5ea6\u63a7\u5236\uff0c\u526a\u679d\n                s.push(new Pair(node.right, depth + 1));\n        }\n\n        return result;\n    }\n\n    static class Pair {\n        TreeNode node;\n        int depth;\n        public Pair(TreeNode node, int depth) {\n            this.node = node;\n            this.depth = depth;\n        }\n    }\n}\n"))),Object(i.b)(u.a,{value:"cpp",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cpp"}),"// Minimum Depth of Binary Tree\n// \u8fed\u4ee3\u7248\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(logn)\nclass Solution {\npublic:\n    int minDepth(TreeNode* root) {\n        if (root == nullptr)\n            return 0;\n\n        int result = INT_MAX;\n\n        stack<pair<TreeNode*, int>> s;\n        s.push(make_pair(root, 1));\n\n        while (!s.empty()) {\n            auto node = s.top().first;\n            auto depth = s.top().second;\n            s.pop();\n\n            if (node->left == nullptr && node->right == nullptr)\n                result = min(result, depth);\n\n            if (node->left && result > depth) // \u6df1\u5ea6\u63a7\u5236\uff0c\u526a\u679d\n                s.push(make_pair(node->left, depth + 1));\n\n            if (node->right && result > depth) // \u6df1\u5ea6\u63a7\u5236\uff0c\u526a\u679d\n                s.push(make_pair(node->right, depth + 1));\n        }\n\n        return result;\n    }\n};\n")))),Object(i.b)("h3",{id:"\u76f8\u5173\u9898\u76ee"},"\u76f8\u5173\u9898\u76ee"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/binary-tree/recursion/maximum-depth-of-binary-tree"}),"Maximum Depth of Binary Tree"))))}b.isMDXComponent=!0},298:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=a.a.createContext({}),s=function(e){var n=a.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},p=function(e){var n=s(e.components);return a.a.createElement(c.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(t),d=r,m=p["".concat(o,".").concat(d)]||p[d]||b[d]||i;return t?a.a.createElement(m,u(u({ref:n},c),{},{components:t})):a.a.createElement(m,u({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=d;var u={};for(var l in n)hasOwnProperty.call(n,l)&&(u[l]=n[l]);u.originalType=e,u.mdxType="string"==typeof e?e:r,o[1]=u;for(var c=2;c<i;c++)o[c]=t[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},299:function(e,n,t){"use strict";function r(e){var n,t,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=r(e[n]))&&(a&&(a+=" "),a+=t);else for(n in e)e[n]&&(a&&(a+=" "),a+=n);return a}n.a=function(){for(var e,n,t=0,a="";t<arguments.length;)(e=arguments[t++])&&(n=r(e))&&(a&&(a+=" "),a+=n);return a}},300:function(e,n,t){"use strict";var r=t(0),a=Object(r.createContext)(void 0);n.a=a},301:function(e,n,t){"use strict";var r=t(0),a=t(300);n.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},302:function(e,n,t){"use strict";var r=t(0),a=t.n(r),i=t(301),o=t(299),u=t(47),l=t.n(u),c=37,s=39;n.a=function(e){var n=e.block,t=e.children,u=e.defaultValue,p=e.values,b=e.groupId,d=Object(i.a)(),m=d.tabGroupChoices,f=d.setTabGroupChoices,h=Object(r.useState)(u),y=h[0],v=h[1],O=Object(r.useState)(!1),j=O[0],g=O[1];if(null!=b){var T=m[b];null!=T&&T!==y&&p.some((function(e){return e.value===T}))&&v(T)}var w=function(e){v(e),null!=b&&f(b,e)},D=[],N=function(e){e.metaKey||e.altKey||e.ctrlKey||g(!0)},x=function(){g(!1)};return Object(r.useEffect)((function(){window.addEventListener("keydown",N),window.addEventListener("mousedown",x)}),[]),a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":n})},p.map((function(e){var n=e.value,t=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":y===n,className:Object(o.a)("tabs__item",l.a.tabItem,{"tabs__item--active":y===n}),style:j?{}:{outline:"none"},key:n,ref:function(e){return D.push(e)},onKeyDown:function(e){!function(e,n,t){switch(t.keyCode){case s:!function(e,n){var t=e.indexOf(n)+1;e[t]?e[t].focus():e[0].focus()}(e,n);break;case c:!function(e,n){var t=e.indexOf(n)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,n)}}(D,e.target,e),N(e)},onFocus:function(){return w(n)},onClick:function(){w(n),g(!1)},onPointerDown:function(){return g(!1)}},t)}))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(t).filter((function(e){return e.props.value===y}))[0]))}},303:function(e,n,t){"use strict";var r=t(0),a=t.n(r);n.a=function(e){return a.a.createElement("div",null,e.children)}}}]);