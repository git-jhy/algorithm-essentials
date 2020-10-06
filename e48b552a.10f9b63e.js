(window.webpackJsonp=window.webpackJsonp||[]).push([[214],{274:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return p})),t.d(n,"default",(function(){return u}));var r=t(2),a=t(6),o=(t(0),t(298)),i=t(302),d=t(303),c={title:"Clone Graph"},l={unversionedId:"graph/clone-graph",id:"graph/clone-graph",isDocsHomePage:!1,title:"Clone Graph",description:"\u63cf\u8ff0",source:"@site/docs/graph/clone-graph.md",slug:"/graph/clone-graph",permalink:"/graph/clone-graph",editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/graph/clone-graph.md",version:"current",sidebar:"someSidebar",previous:{title:"\u56fe\u8282\u70b9\u5b9a\u4e49",permalink:"/graph/README"},next:{title:"Reverse Bits",permalink:"/bitwise-operations/reverse-bits"}},p=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5206\u6790",id:"\u5206\u6790",children:[]},{value:"DFS",id:"dfs",children:[]},{value:"BFS",id:"bfs",children:[]}],s={rightToc:p};function u(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),Object(o.b)("p",null,"Clone an undirected graph. Each node in the graph contains a ",Object(o.b)("inlineCode",{parentName:"p"},"label")," and a list of its ",Object(o.b)("inlineCode",{parentName:"p"},"neighbours"),"."),Object(o.b)("p",null,"OJ's undirected graph serialization:\nNodes are labeled uniquely."),Object(o.b)("p",null,"We use ",Object(o.b)("inlineCode",{parentName:"p"},"#")," as a separator for each node, and ",Object(o.b)("inlineCode",{parentName:"p"},",")," as a separator for node label and each neighbour of the node.\nAs an example, consider the serialized graph ",Object(o.b)("inlineCode",{parentName:"p"},"{0,1,2#1,2#2,2}"),"."),Object(o.b)("p",null,"The graph has a total of three nodes, and therefore contains three parts as separated by ",Object(o.b)("inlineCode",{parentName:"p"},"#"),"."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"First node is labeled as 0. Connect node 0 to both nodes 1 and 2."),Object(o.b)("li",{parentName:"ol"},"Second node is labeled as 1. Connect node 1 to node 2."),Object(o.b)("li",{parentName:"ol"},"Third node is labeled as 2. Connect node 2 to node 2 (itself), thus forming a self-cycle.")),Object(o.b)("p",null,"Visually, the graph looks like the following:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"       1\n      / \\\n     /   \\\n    0 --- 2\n         / \\\n         \\_/\n")),Object(o.b)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),Object(o.b)("p",null,"\u5e7f\u5ea6\u4f18\u5148\u904d\u5386\u6216\u6df1\u5ea6\u4f18\u5148\u904d\u5386\u90fd\u53ef\u4ee5\u3002"),Object(o.b)("h3",{id:"dfs"},"DFS"),Object(o.b)(i.a,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},Object(o.b)(d.a,{value:"java",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"// Clone Graph\n// DFS\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n)\npublic class Solution {\n    public UndirectedGraphNode cloneGraph(UndirectedGraphNode node) {\n        if(node == null) return null;\n        // key is original node\uff0cvalue is copied node\n        HashMap<UndirectedGraphNode, UndirectedGraphNode> visited = new HashMap<>();\n        clone(node, visited);\n        return visited.get(node);\n    }\n    // DFS\n    private static UndirectedGraphNode clone(UndirectedGraphNode node,\n                                              HashMap<UndirectedGraphNode,\n                                                      UndirectedGraphNode> visited) {\n        // a copy already exists\n        if (visited.containsKey(node)) return visited.get(node);\n\n        UndirectedGraphNode new_node = new UndirectedGraphNode(node.label);\n        visited.put(node, new_node);\n        for (UndirectedGraphNode nbr : node.neighbors)\n            new_node.neighbors.add(clone(nbr, visited));\n        return new_node;\n    }\n}\n"))),Object(o.b)(d.a,{value:"cpp",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cpp"}),"// Clone Graph\n// DFS\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n)\nclass Solution {\npublic:\n    UndirectedGraphNode *cloneGraph(const UndirectedGraphNode *node) {\n        if(node == nullptr) return nullptr;\n        // key is original node\uff0cvalue is copied node\n        unordered_map<const UndirectedGraphNode *,\n                            UndirectedGraphNode *> visited;\n        clone(node, visited);\n        return visited[node];\n    }\nprivate:\n    // DFS\n    static UndirectedGraphNode* clone(const UndirectedGraphNode *node,\n            unordered_map<const UndirectedGraphNode *,\n            UndirectedGraphNode *> &visited) {\n        // a copy already exists\n        if (visited.find(node) != visited.end()) return visited[node];\n\n        UndirectedGraphNode *new_node = new UndirectedGraphNode(node->label);\n        visited[node] = new_node;\n        for (auto nbr : node->neighbors)\n            new_node->neighbors.push_back(clone(nbr, visited));\n        return new_node;\n    }\n};\n")))),Object(o.b)("h3",{id:"bfs"},"BFS"),Object(o.b)(i.a,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},Object(o.b)(d.a,{value:"java",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"// Clone Graph\n// BFS\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n)\npublic class Solution {\n    public UndirectedGraphNode cloneGraph(UndirectedGraphNode node) {\n        if (node == null) return null;\n        // key is original node\uff0cvalue is copied node\n        HashMap<UndirectedGraphNode,UndirectedGraphNode> visited = new HashMap<>();\n        // each node in queue is already copied itself\n        // but neighbors are not copied yet\n        Queue<UndirectedGraphNode> q = new LinkedList<>();\n        q.offer(node);\n        visited.put(node, new UndirectedGraphNode(node.label));\n        while (!q.isEmpty()) {\n            UndirectedGraphNode cur = q.poll();\n            for (UndirectedGraphNode nbr : cur.neighbors) {\n                // a copy already exists\n                if (visited.containsKey(nbr)) {\n                    visited.get(cur).neighbors.add(visited.get(nbr));\n                } else {\n                    UndirectedGraphNode new_node =\n                            new UndirectedGraphNode(nbr.label);\n                    visited.put(nbr, new_node);\n                    visited.get(cur).neighbors.add(new_node);\n                    q.offer(nbr);\n                }\n            }\n        }\n        return visited.get(node);\n    }\n}\n"))),Object(o.b)(d.a,{value:"cpp",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cpp"}),"// Clone Graph\n// BFS\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n)\nclass Solution {\npublic:\n    UndirectedGraphNode *cloneGraph(const UndirectedGraphNode *node) {\n        if (node == nullptr) return nullptr;\n        // key is original node\uff0cvalue is copied node\n        unordered_map<const UndirectedGraphNode *,\n                            UndirectedGraphNode *> copied;\n        // each node in queue is already copied itself\n        // but neighbors are not copied yet\n        queue<const UndirectedGraphNode *> q;\n        q.push(node);\n        copied[node] = new UndirectedGraphNode(node->label);\n        while (!q.empty()) {\n            const UndirectedGraphNode *cur = q.front();\n            q.pop();\n            for (auto nbr : cur->neighbors) {\n                // a copy already exists\n                if (copied.find(nbr) != copied.end()) {\n                    copied[cur]->neighbors.push_back(copied[nbr]);\n                } else {\n                    UndirectedGraphNode *new_node =\n                            new UndirectedGraphNode(nbr->label);\n                    copied[nbr] = new_node;\n                    copied[cur]->neighbors.push_back(new_node);\n                    q.push(nbr);\n                }\n            }\n        }\n        return copied[node];\n    }\n};\n")))))}u.isMDXComponent=!0},298:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return h}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),p=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):d(d({},n),e)),t},s=function(e){var n=p(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),s=p(t),b=r,h=s["".concat(i,".").concat(b)]||s[b]||u[b]||o;return t?a.a.createElement(h,d(d({ref:n},l),{},{components:t})):a.a.createElement(h,d({ref:n},l))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=b;var d={};for(var c in n)hasOwnProperty.call(n,c)&&(d[c]=n[c]);d.originalType=e,d.mdxType="string"==typeof e?e:r,i[1]=d;for(var l=2;l<o;l++)i[l]=t[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},299:function(e,n,t){"use strict";function r(e){var n,t,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=r(e[n]))&&(a&&(a+=" "),a+=t);else for(n in e)e[n]&&(a&&(a+=" "),a+=n);return a}n.a=function(){for(var e,n,t=0,a="";t<arguments.length;)(e=arguments[t++])&&(n=r(e))&&(a&&(a+=" "),a+=n);return a}},300:function(e,n,t){"use strict";var r=t(0),a=Object(r.createContext)(void 0);n.a=a},301:function(e,n,t){"use strict";var r=t(0),a=t(300);n.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},302:function(e,n,t){"use strict";var r=t(0),a=t.n(r),o=t(301),i=t(299),d=t(47),c=t.n(d),l=37,p=39;n.a=function(e){var n=e.block,t=e.children,d=e.defaultValue,s=e.values,u=e.groupId,b=Object(o.a)(),h=b.tabGroupChoices,f=b.setTabGroupChoices,v=Object(r.useState)(d),m=v[0],O=v[1],g=Object(r.useState)(!1),y=g[0],j=g[1];if(null!=u){var N=h[u];null!=N&&N!==m&&s.some((function(e){return e.value===N}))&&O(N)}var w=function(e){O(e),null!=u&&f(u,e)},G=[],U=function(e){e.metaKey||e.altKey||e.ctrlKey||j(!0)},C=function(){j(!1)};return Object(r.useEffect)((function(){window.addEventListener("keydown",U),window.addEventListener("mousedown",C)}),[]),a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":n})},s.map((function(e){var n=e.value,t=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":m===n,className:Object(i.a)("tabs__item",c.a.tabItem,{"tabs__item--active":m===n}),style:y?{}:{outline:"none"},key:n,ref:function(e){return G.push(e)},onKeyDown:function(e){!function(e,n,t){switch(t.keyCode){case p:!function(e,n){var t=e.indexOf(n)+1;e[t]?e[t].focus():e[0].focus()}(e,n);break;case l:!function(e,n){var t=e.indexOf(n)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,n)}}(G,e.target,e),U(e)},onFocus:function(){return w(n)},onClick:function(){w(n),j(!1)},onPointerDown:function(){return j(!1)}},t)}))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(t).filter((function(e){return e.props.value===m}))[0]))}},303:function(e,n,t){"use strict";var r=t(0),a=t.n(r);n.a=function(e){return a.a.createElement("div",null,e.children)}}}]);