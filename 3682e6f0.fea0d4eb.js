(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{116:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return u})),t.d(n,"default",(function(){return p}));var r=t(2),a=t(6),i=(t(0),t(298)),o=t(302),l=t(303),s={title:"Sort Colors"},c={unversionedId:"sorting/quick-sort/sort-colors",id:"sorting/quick-sort/sort-colors",isDocsHomePage:!1,title:"Sort Colors",description:"\u63cf\u8ff0",source:"@site/docs/sorting/quick-sort/sort-colors.md",slug:"/sorting/quick-sort/sort-colors",permalink:"/sorting/quick-sort/sort-colors",editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/sorting/quick-sort/sort-colors.md",version:"current",sidebar:"someSidebar",previous:{title:"Merge k Sorted Lists",permalink:"/sorting/merge-sort/merge-k-sorted-lists"},next:{title:"Kth Largest Element in an Array",permalink:"/sorting/quick-sort/kth-largest-element-in-an-array"}},u=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5206\u6790",id:"\u5206\u6790",children:[]},{value:"\u4ee3\u7801 1",id:"\u4ee3\u7801-1",children:[]},{value:"\u4ee3\u7801 2",id:"\u4ee3\u7801-2",children:[]},{value:"\u4ee3\u7801 3",id:"\u4ee3\u7801-3",children:[]},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",children:[]}],b={rightToc:u};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),Object(i.b)("p",null,"Given an array with ",Object(i.b)("inlineCode",{parentName:"p"},"n")," objects colored red, white or blue, sort them so that objects of the same color are adjacent, with the colors in the order red, white and blue."),Object(i.b)("p",null,"Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively."),Object(i.b)("p",null,"Note:\nYou are not suppose to use the library's sort function for this problem."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Follow up"),":"),Object(i.b)("p",null,"A rather straight forward solution is a two-pass algorithm using counting sort."),Object(i.b)("p",null,"First, iterate the array counting number of 0's, 1's, and 2's, then overwrite array with total number of 0's, then 1's and followed by 2's."),Object(i.b)("p",null,"Could you come up with an one-pass algorithm using only constant space?"),Object(i.b)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),Object(i.b)("p",null,"\u7531\u4e8e 0, 1, 2 \u975e\u5e38\u7d27\u51d1\uff0c\u9996\u5148\u60f3\u5230\u8ba1\u6570\u6392\u5e8f(counting sort)\uff0c\u4f46\u9700\u8981\u626b\u63cf\u4e24\u904d\uff0c\u4e0d\u7b26\u5408\u9898\u76ee\u8981\u6c42\u3002"),Object(i.b)("p",null,"\u7531\u4e8e\u53ea\u6709\u4e09\u79cd\u989c\u8272\uff0c\u53ef\u4ee5\u8bbe\u7f6e\u4e24\u4e2a index\uff0c\u4e00\u4e2a\u662f red \u7684 index\uff0c\u4e00\u4e2a\u662f blue \u7684 index\uff0c\u4e24\u8fb9\u5f80\u4e2d\u95f4\u8d70\u3002\u65f6\u95f4\u590d\u6742\u5ea6",Object(i.b)("inlineCode",{parentName:"p"},"O(n)"),"\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6",Object(i.b)("inlineCode",{parentName:"p"},"O(1)"),"\u3002"),Object(i.b)("p",null,"\u7b2c 3 \u79cd\u601d\u8def\uff0c\u5229\u7528\u5feb\u901f\u6392\u5e8f\u91cc partition \u7684\u601d\u60f3\uff0c\u7b2c\u4e00\u6b21\u5c06\u6570\u7ec4\u6309 0 \u5206\u5272\uff0c\u7b2c\u4e8c\u6b21\u6309 1 \u5206\u5272\uff0c\u6392\u5e8f\u5b8c\u6bd5\uff0c\u53ef\u4ee5\u63a8\u5e7f\u5230",Object(i.b)("inlineCode",{parentName:"p"},"n"),"\u79cd\u989c\u8272\uff0c\u6bcf\u79cd\u989c\u8272\u6709\u91cd\u590d\u5143\u7d20\u7684\u60c5\u51b5\u3002"),Object(i.b)("h3",{id:"\u4ee3\u7801-1"},"\u4ee3\u7801 1"),Object(i.b)(o.a,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},Object(i.b)(l.a,{value:"java",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"// Sort Colors\n// Counting Sort\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\npublic class Solution {\n    public void sortColors(int[] nums) {\n        int[] counts = new int[3]; // \u8bb0\u5f55\u6bcf\u4e2a\u989c\u8272\u51fa\u73b0\u7684\u6b21\u6570\n\n        for (int i = 0; i < nums.length; i++)\n            counts[nums[i]]++;\n\n        for (int i = 0, index = 0; i < 3; i++)\n            for (int j = 0; j < counts[i]; j++)\n                nums[index++] = i;\n\n    }\n}\n"))),Object(i.b)(l.a,{value:"cpp",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cpp"}),"// Sort Colors\n// Counting Sort\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\nclass Solution {\npublic:\n    void sortColors(vector<int>& A) {\n        int counts[3] = { 0 }; // \u8bb0\u5f55\u6bcf\u4e2a\u989c\u8272\u51fa\u73b0\u7684\u6b21\u6570\n\n        for (int i = 0; i < A.size(); i++)\n            counts[A[i]]++;\n\n        for (int i = 0, index = 0; i < 3; i++)\n            for (int j = 0; j < counts[i]; j++)\n                A[index++] = i;\n\n    }\n};\n")))),Object(i.b)("h3",{id:"\u4ee3\u7801-2"},"\u4ee3\u7801 2"),Object(i.b)(o.a,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},Object(i.b)(l.a,{value:"java",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"// Sort Colors\n// \u53cc\u6307\u9488\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\npublic class Solution {\n    public void sortColors(int[] A) {\n        // \u4e00\u4e2a\u662fred\u7684index\uff0c\u4e00\u4e2a\u662fblue\u7684index\uff0c\u4e24\u8fb9\u5f80\u4e2d\u95f4\u8d70\n        int red = 0, blue = A.length - 1;\n\n        for (int i = 0; i < blue + 1;) {\n            if (A[i] == 0)\n                swap (A, i++, red++);\n            else if (A[i] == 2)\n                swap(A, i, blue--);\n            else\n                i++;\n        }\n    }\n    private static void swap(int[] A, int i, int j) {\n        int tmp = A[i];\n        A[i] = A[j];\n        A[j] = tmp;\n    }\n}\n"))),Object(i.b)(l.a,{value:"cpp",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cpp"}),"// Sort Colors\n// \u53cc\u6307\u9488\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\nclass Solution {\npublic:\n    void sortColors(vector<int>& A) {\n        // \u4e00\u4e2a\u662fred\u7684index\uff0c\u4e00\u4e2a\u662fblue\u7684index\uff0c\u4e24\u8fb9\u5f80\u4e2d\u95f4\u8d70\n        int red = 0, blue = A.size() - 1;\n\n        for (int i = 0; i < blue + 1;) {\n            if (A[i] == 0)\n                swap(A[i++], A[red++]);\n            else if (A[i] == 2)\n                swap(A[i], A[blue--]);\n            else\n                i++;\n        }\n    }\n};\n")))),Object(i.b)("h3",{id:"\u4ee3\u7801-3"},"\u4ee3\u7801 3"),Object(i.b)(o.a,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},Object(i.b)(l.a,{value:"java",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"// Sort Colors\n// \u91cd\u65b0\u5b9e\u73b0 partition()\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\npublic class Solution {\n    public void sortColors(int[] nums) {\n        partition(nums, partition(nums, 0, nums.length, new EqualTo(0)),\n                nums.length, new EqualTo(1));\n    }\n    private static int partition(int[] nums, int begin, int end, EqualTo predicate) {\n        int pos = begin;\n\n        for (; begin != end; ++begin)\n            if (predicate.apply(nums[begin]))\n                swap(nums, begin,pos++);\n\n        return pos;\n    }\n    static class EqualTo {\n        private final int target;\n        public EqualTo(int target) {\n            this.target = target;\n        }\n        public boolean apply(int x) {\n            return x == target;\n        }\n    }\n    private static void swap(int[] nums, int i, int j) {\n        int tmp = nums[i];\n        nums[i] = nums[j];\n        nums[j] = tmp;\n    }\n}\n"))),Object(i.b)(l.a,{value:"cpp",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cpp"}),"// Sort Colors\n// \u91cd\u65b0\u5b9e\u73b0 partition()\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\nclass Solution {\npublic:\n    void sortColors(vector<int>& nums) {\n        partition(partition(nums.begin(), nums.end(), bind1st(equal_to<int>(), 0)),\n                 nums.end(), bind1st(equal_to<int>(), 1));\n    }\nprivate:\n    template<typename ForwardIterator, typename UnaryPredicate>\n    ForwardIterator partition(ForwardIterator first, ForwardIterator last,\n            UnaryPredicate pred) {\n        auto pos = first;\n\n        for (; first != last; ++first)\n            if (pred(*first))\n                swap(*first, *pos++);\n\n        return pos;\n    }\n};\n")))),Object(i.b)("h3",{id:"\u76f8\u5173\u9898\u76ee"},"\u76f8\u5173\u9898\u76ee"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/sorting/bucket-sort/first-missing-positive"}),"First Missing Positive"))))}p.isMDXComponent=!0},298:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=a.a.createContext({}),u=function(e){var n=a.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},b=function(e){var n=u(e.components);return a.a.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),b=u(t),d=r,m=b["".concat(o,".").concat(d)]||b[d]||p[d]||i;return t?a.a.createElement(m,l(l({ref:n},c),{},{components:t})):a.a.createElement(m,l({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},299:function(e,n,t){"use strict";function r(e){var n,t,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=r(e[n]))&&(a&&(a+=" "),a+=t);else for(n in e)e[n]&&(a&&(a+=" "),a+=n);return a}n.a=function(){for(var e,n,t=0,a="";t<arguments.length;)(e=arguments[t++])&&(n=r(e))&&(a&&(a+=" "),a+=n);return a}},300:function(e,n,t){"use strict";var r=t(0),a=Object(r.createContext)(void 0);n.a=a},301:function(e,n,t){"use strict";var r=t(0),a=t(300);n.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},302:function(e,n,t){"use strict";var r=t(0),a=t.n(r),i=t(301),o=t(299),l=t(47),s=t.n(l),c=37,u=39;n.a=function(e){var n=e.block,t=e.children,l=e.defaultValue,b=e.values,p=e.groupId,d=Object(i.a)(),m=d.tabGroupChoices,f=d.setTabGroupChoices,v=Object(r.useState)(l),j=v[0],O=v[1],g=Object(r.useState)(!1),y=g[0],h=g[1];if(null!=p){var w=m[p];null!=w&&w!==j&&b.some((function(e){return e.value===w}))&&O(w)}var x=function(e){O(e),null!=p&&f(p,e)},C=[],T=function(e){e.metaKey||e.altKey||e.ctrlKey||h(!0)},A=function(){h(!1)};return Object(r.useEffect)((function(){window.addEventListener("keydown",T),window.addEventListener("mousedown",A)}),[]),a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":n})},b.map((function(e){var n=e.value,t=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":j===n,className:Object(o.a)("tabs__item",s.a.tabItem,{"tabs__item--active":j===n}),style:y?{}:{outline:"none"},key:n,ref:function(e){return C.push(e)},onKeyDown:function(e){!function(e,n,t){switch(t.keyCode){case u:!function(e,n){var t=e.indexOf(n)+1;e[t]?e[t].focus():e[0].focus()}(e,n);break;case c:!function(e,n){var t=e.indexOf(n)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,n)}}(C,e.target,e),T(e)},onFocus:function(){return x(n)},onClick:function(){x(n),h(!1)},onPointerDown:function(){return h(!1)}},t)}))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(t).filter((function(e){return e.props.value===j}))[0]))}},303:function(e,n,t){"use strict";var r=t(0),a=t.n(r);n.a=function(e){return a.a.createElement("div",null,e.children)}}}]);