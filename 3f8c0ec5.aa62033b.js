(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{126:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return u})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return b}));var r=t(2),a=t(6),i=(t(0),t(298)),o=t(302),c=t(303),s={title:"Anagrams"},u={unversionedId:"string/anagrams",id:"string/anagrams",isDocsHomePage:!1,title:"Anagrams",description:"\u63cf\u8ff0",source:"@site/docs/string/anagrams.md",slug:"/string/anagrams",permalink:"/string/anagrams",editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/string/anagrams.md",version:"current",sidebar:"someSidebar",previous:{title:"Count and Say",permalink:"/string/count-and-say"},next:{title:"Valid Anagram",permalink:"/string/valid-anagram"}},l=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5206\u6790",id:"\u5206\u6790",children:[]},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",children:[]}],p={rightToc:l};function b(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),Object(i.b)("p",null,"Given an array of strings, return all groups of strings that are anagrams."),Object(i.b)("p",null,"Note: All inputs will be in lower-case."),Object(i.b)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),Object(i.b)("p",null,"Anagram\uff08\u56de\u6587\u6784\u8bcd\u6cd5\uff09\u662f\u6307\u6253\u4e71\u5b57\u6bcd\u987a\u5e8f\u4ece\u800c\u5f97\u5230\u65b0\u7684\u5355\u8bcd\uff0c\u6bd4\u5982 ",Object(i.b)("inlineCode",{parentName:"p"},'"dormitory"')," \u6253\u4e71\u5b57\u6bcd\u987a\u5e8f\u4f1a\u53d8\u6210 ",Object(i.b)("inlineCode",{parentName:"p"},'"dirty room"')," \uff0c",Object(i.b)("inlineCode",{parentName:"p"},'"tea"')," \u4f1a\u53d8\u6210",Object(i.b)("inlineCode",{parentName:"p"},'"eat"'),"\u3002"),Object(i.b)("p",null,"\u56de\u6587\u6784\u8bcd\u6cd5\u6709\u4e00\u4e2a\u7279\u70b9\uff1a\u5355\u8bcd\u91cc\u7684\u5b57\u6bcd\u7684\u79cd\u7c7b\u548c\u6570\u76ee\u6ca1\u6709\u6539\u53d8\uff0c\u53ea\u662f\u6539\u53d8\u4e86\u5b57\u6bcd\u7684\u6392\u5217\u987a\u5e8f\u3002\u56e0\u6b64\uff0c\u5c06\u51e0\u4e2a\u5355\u8bcd\u6309\u7167\u5b57\u6bcd\u987a\u5e8f\u6392\u5e8f\u540e\uff0c\u82e5\u5b83\u4eec\u76f8\u7b49\uff0c\u5219\u5b83\u4eec\u5c5e\u4e8e\u540c\u4e00\u7ec4 anagrams \u3002"),Object(i.b)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),Object(i.b)(o.a,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},Object(i.b)(c.a,{value:"java",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"// Anagrams\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n)\npublic class Solution {\n    public List<List<String>> groupAnagrams(String[] strs) {\n        final HashMap<String, ArrayList<String>> group = new HashMap<>();\n        for (final String s : strs) {\n            char[] tmp = s.toCharArray();\n            Arrays.sort(tmp);\n\n            final String key = new String(tmp);\n            if (!group.containsKey(key)) {\n                group.put(key, new ArrayList<>());\n            }\n            group.get(key).add(s);\n        }\n\n        List<List<String>> result = new ArrayList<>();\n        for (Map.Entry<String, ArrayList<String>> entry : group.entrySet()) {\n            final ArrayList<String> list = entry.getValue();\n            Collections.sort(list);\n            result.add(list);\n        }\n        return result;\n    }\n}\n"))),Object(i.b)(c.a,{value:"cpp",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cpp"}),"// Anagrams\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n)\nclass Solution {\npublic:\n    vector<vector<string>> groupAnagrams(vector<string>& strs) {\n        unordered_map<string, vector<string> > group;\n        for (const auto &s : strs) {\n            string key = s;\n            sort(key.begin(), key.end());\n            group[key].push_back(s);\n        }\n\n        vector<vector<string>> result;\n        for (auto iter = group.cbegin(); iter != group.cend(); iter++) {\n            auto v = iter->second;\n            sort(v.begin(), v.end());\n            result.push_back(v);\n        }\n        return result;\n    }\n};\n")))))}b.isMDXComponent=!0},298:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return d}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=a.a.createContext({}),l=function(e){var n=a.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=l(e.components);return a.a.createElement(u.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},f=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(t),f=r,d=p["".concat(o,".").concat(f)]||p[f]||b[f]||i;return t?a.a.createElement(d,c(c({ref:n},u),{},{components:t})):a.a.createElement(d,c({ref:n},u))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=f;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var u=2;u<i;u++)o[u]=t[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},299:function(e,n,t){"use strict";function r(e){var n,t,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=r(e[n]))&&(a&&(a+=" "),a+=t);else for(n in e)e[n]&&(a&&(a+=" "),a+=n);return a}n.a=function(){for(var e,n,t=0,a="";t<arguments.length;)(e=arguments[t++])&&(n=r(e))&&(a&&(a+=" "),a+=n);return a}},300:function(e,n,t){"use strict";var r=t(0),a=Object(r.createContext)(void 0);n.a=a},301:function(e,n,t){"use strict";var r=t(0),a=t(300);n.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},302:function(e,n,t){"use strict";var r=t(0),a=t.n(r),i=t(301),o=t(299),c=t(47),s=t.n(c),u=37,l=39;n.a=function(e){var n=e.block,t=e.children,c=e.defaultValue,p=e.values,b=e.groupId,f=Object(i.a)(),d=f.tabGroupChoices,m=f.setTabGroupChoices,g=Object(r.useState)(c),y=g[0],v=g[1],O=Object(r.useState)(!1),j=O[0],h=O[1];if(null!=b){var w=d[b];null!=w&&w!==y&&p.some((function(e){return e.value===w}))&&v(w)}var k=function(e){v(e),null!=b&&m(b,e)},C=[],S=function(e){e.metaKey||e.altKey||e.ctrlKey||h(!0)},A=function(){h(!1)};return Object(r.useEffect)((function(){window.addEventListener("keydown",S),window.addEventListener("mousedown",A)}),[]),a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":n})},p.map((function(e){var n=e.value,t=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":y===n,className:Object(o.a)("tabs__item",s.a.tabItem,{"tabs__item--active":y===n}),style:j?{}:{outline:"none"},key:n,ref:function(e){return C.push(e)},onKeyDown:function(e){!function(e,n,t){switch(t.keyCode){case l:!function(e,n){var t=e.indexOf(n)+1;e[t]?e[t].focus():e[0].focus()}(e,n);break;case u:!function(e,n){var t=e.indexOf(n)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,n)}}(C,e.target,e),S(e)},onFocus:function(){return k(n)},onClick:function(){k(n),h(!1)},onPointerDown:function(){return h(!1)}},t)}))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(t).filter((function(e){return e.props.value===y}))[0]))}},303:function(e,n,t){"use strict";var r=t(0),a=t.n(r);n.a=function(e){return a.a.createElement("div",null,e.children)}}}]);