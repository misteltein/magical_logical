(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[897],{603:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var s=t(5893),r=t(3272),l=t.n(r);function i(e){return(0,s.jsx)("div",{className:l().abstract,style:e.styles,children:e.children})}},1221:function(e,n,t){"use strict";t.d(n,{Z:function(){return P}});var s=t(5893),r=t(3349),l=t(6156),i=t(2949),c=t(6610),a=t(5991),o=t(5255),d=t(6089),h=t(7608),u=t(7294),x=t(3300),j=t.n(x),m=t(9235),p=t(7694),g=t(5005),f=t(7625),b=t(767),Z=t(8774),v=t(4370),_=t(3253),y=t.n(_);function w(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,s)}return t}function N(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?w(Object(t),!0).forEach((function(n){(0,l.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):w(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function O(e){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,s=(0,h.Z)(e);if(n){var r=(0,h.Z)(this).constructor;t=Reflect.construct(s,arguments,r)}else t=s.apply(this,arguments);return(0,d.Z)(this,t)}}function k(e){var n={backgroundColor:"#f6f8fa",fontSize:"14px",padding:"7px 1rem 5px 1rem",margin:"0",overflow:"auto"};return Object.keys(e).includes("maxHeight")&&(n.maxHeight=e.maxHeight),(0,s.jsx)("pre",{style:n,children:e.children})}var C=function(e){(0,o.Z)(t,e);var n=O(t);function t(e){var s;return(0,c.Z)(this,t),(s=n.call(this,e)).state={loaded:!1,source:"",showModal:!1},s.maxHeight="15rem",s.margin="",e.maxHeight&&(s.maxHeight=e.maxHeight),s}return(0,a.Z)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.uri?j()(this.props.uri).then((function(e){return e.text()})).then((function(e){var n=e.split("\n");return""===n.slice(-1)[0]&&n.pop(),n.join("\n")})).then((function(n){e.setState({loaded:!0,source:n})})).catch((function(n){return e.setState({loaded:!0,source:n})})):(this.setState({loaded:!0,source:this.props.source}),this.margin="mt-3 mb-3")}},{key:"render",value:function(){var e=this,n=(m.lG.theme,(0,i.Z)(m.lG,["theme"]));return(0,s.jsx)("div",{className:this.margin,children:(0,s.jsx)(m.ZP,N(N({theme:p.Z},n),{},{code:this.state.source,language:this.props.language,children:function(n){var t=n.className,r=n.style,l=n.tokens,i=n.getLineProps,c=n.getTokenProps;return(0,s.jsx)(k,{className:t,style:r,maxHeight:e.maxHeight,children:l.map((function(e,n){return(0,s.jsx)("div",N(N({},i({line:e,key:n})),{},{children:e.map((function(e,n){return(0,s.jsx)("span",N({},c({token:e,key:n})))}))}))}))})}}))})}}]),t}(u.Component),I={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",maxHeight:"100vh",transform:"translate(-50%, -50%)"}},P=function(e){(0,o.Z)(t,e);var n=O(t);function t(e){var s;return(0,c.Z)(this,t),(s=n.call(this,e)).state={showModal:!1},s.handleOpenModal=s.handleOpenModal.bind((0,r.Z)(s)),s.handleCloseModal=s.handleCloseModal.bind((0,r.Z)(s)),s}return(0,a.Z)(t,[{key:"handleOpenModal",value:function(){this.setState({showModal:!0})}},{key:"handleCloseModal",value:function(){this.setState({showModal:!1})}},{key:"render",value:function(){return this.props.uri?(0,s.jsxs)("div",{style:{margin:"8px 0 8px 0"},children:[(0,s.jsx)(C,N({},this.props)),(0,s.jsxs)("div",{style:{textAlign:"right",padding:"5px 0 5px 0"},children:[this.props.expand&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(g.Z,{variant:"outline-dark",size:"md",onClick:this.handleOpenModal,children:(0,s.jsx)(f.G,{icon:Z.TT,style:{width:"1rem"}})}),(0,s.jsxs)(y(),{isOpen:this.state.showModal,onRequestClose:this.handleCloseModal,style:I,children:[(0,s.jsx)(C,N(N({},this.props),{},{maxHeight:"80vh"})),(0,s.jsx)("div",{style:{textAlign:"right"},children:(0,s.jsx)(g.Z,{variant:"outline-dark",size:"md",onClick:this.handleCloseModal,children:(0,s.jsx)(f.G,{icon:v.nY,style:{width:"1rem"}})})})]})]}),this.props.download&&(0,s.jsx)("a",{href:this.props.uri,download:!0,className:"ml-1",children:(0,s.jsx)(g.Z,{variant:"outline-primary",size:"md",className:"m-0 mr-1",children:(0,s.jsx)(f.G,{icon:b.q7,style:{width:"1rem"}})})})]})]}):(0,s.jsx)(C,N({},this.props))}}]),t}(u.Component)},6905:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var s=t(5893),r=t(4824),l=t.n(r);function i(e){return(0,s.jsx)("div",{className:l().element,style:e.styles,children:e.children})}},5642:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var s=t(5893),r=t(4091),l=t.n(r);function i(e){return(0,s.jsx)("div",{className:l().grid,children:e.children})}},8237:function(e,n,t){"use strict";t.d(n,{Z:function(){return a}});var s=t(5893),r=t(3062),l=t(4315),i=t(4505),c=t(1664);t(7625);function a(){return(0,s.jsx)("div",{className:"sticky-top",children:(0,s.jsxs)(r.Z,{bg:"light",style:{paddingRight:"7rem"},children:[(0,s.jsx)(c.default,{href:"/lang-c",className:"font-weight-bold",children:(0,s.jsx)("span",{className:"text-dark pr-3",children:"C \u8a00\u8a9e\u5165\u9580"})}),(0,s.jsx)(r.Z.Toggle,{"aria-controls":"nav2"}),(0,s.jsx)(r.Z.Collapse,{id:"nav2",children:(0,s.jsxs)(l.Z,{className:"ml-auto mr-auto",children:[(0,s.jsx)(i.Z.Divider,{}),(0,s.jsxs)(i.Z,{title:"\u306f\u3058\u3081\u306b",id:"basic-nav-dropdown",children:[(0,s.jsx)(i.Z.Item,{href:"/lang-c/introductions/stance",children:"\u30d7\u30ed\u30b0\u30e9\u30df\u30f3\u30b0\u3068\u306f\uff1f"}),(0,s.jsx)(i.Z.Item,{href:"/lang-c/introductions/install",children:"\u74b0\u5883\u69cb\u7bc9"}),(0,s.jsx)(i.Z.Item,{href:"/lang-c/introductions/hello",children:"\u306f\u3058\u3081\u3066\u306e\u30b3\u30f3\u30d1\u30a4\u30eb"}),(0,s.jsx)(i.Z.Item,{href:"/lang-c/introductions/trial",children:"\u52b9\u7387\u3088\u304f\u7fd2\u5f97\u3059\u308b\u305f\u3081\u306b"})]})]})}),(0,s.jsx)(r.Z.Toggle,{"aria-controls":"nav2"}),(0,s.jsx)(r.Z.Collapse,{id:"nav2",children:(0,s.jsx)(l.Z,{className:"ml-auto mr-auto",children:(0,s.jsxs)(i.Z,{title:"\u69cb\u6587\u30fb\u898f\u5247",id:"basic-nav-dropdown",children:[(0,s.jsx)(i.Z.Item,{href:"/lang-c/elements/literal_and_variable",children:"\u30ea\u30c6\u30e9\u30eb\u3068\u5909\u6570"}),(0,s.jsx)(i.Z.Item,{href:"/lang-c/elements/output",children:"\u6a19\u6e96\u51fa\u529b"}),(0,s.jsx)(i.Z.Item,{href:"/lang-c/elements/argv",children:"\u30b3\u30de\u30f3\u30c9\u30e9\u30a4\u30f3\u5f15\u6570"}),(0,s.jsx)(i.Z.Item,{href:"/lang-c/elements/statement",children:"\u5ba3\u8a00\u6587\u30fb\u5b9f\u884c\u6587"}),(0,s.jsx)(i.Z.Item,{href:"/lang-c/elements/array",children:"\u914d\u5217"}),(0,s.jsx)(i.Z.Item,{href:"/lang-c/elements/struct",children:"\u69cb\u9020\u4f53(WIP)"}),(0,s.jsx)(i.Z.Item,{href:"/lang-c/elements/operator",children:"\u6f14\u7b97\u5b50"}),(0,s.jsx)(i.Z.Item,{href:"/lang-c/elements/conditional_branch",children:"\u6761\u4ef6\u5206\u5c90"}),(0,s.jsx)(i.Z.Item,{href:"/lang-c/elements/loop",children:"\u53cd\u5fa9"}),(0,s.jsx)(i.Z.Item,{href:"/lang-c/elements/function",children:"\u95a2\u6570"}),(0,s.jsx)(i.Z.Item,{href:"/lang-c/elements/file_input",children:"\u30d5\u30a1\u30a4\u30eb\u5165\u529b"})]})})}),(0,s.jsx)(r.Z.Toggle,{"aria-controls":"nav3"}),(0,s.jsx)(r.Z.Collapse,{id:"nav3",children:(0,s.jsx)(l.Z,{className:"ml-auto mr-auto",children:(0,s.jsxs)(i.Z,{title:"\u7d44\u307f\u5408\u308f\u305b",id:"basic-nav-dropdown",children:[(0,s.jsx)(i.Z.Item,{href:"/lang-c/complexes/bubble_sort",children:"\u30d0\u30d6\u30eb\u30bd\u30fc\u30c8"}),(0,s.jsx)(i.Z.Item,{href:"/lang-c/complexes/file_input",children:"\u30d5\u30a1\u30a4\u30eb\u306e\u8aad\u307f\u8fbc\u307f"}),(0,s.jsx)(i.Z.Item,{href:"/lang-c/complexes/monte_carlo",children:"\u30e2\u30f3\u30c6\u30ab\u30eb\u30ed\u6cd5"})]})})}),(0,s.jsx)(r.Z.Toggle,{"aria-controls":"nav4"}),(0,s.jsx)(r.Z.Collapse,{id:"nav4",children:(0,s.jsx)(l.Z,{className:"ml-auto mr-auto",children:(0,s.jsxs)(i.Z,{title:"\u6f14\u7fd2",id:"basic-nav-dropdown",children:[(0,s.jsx)(i.Z.Item,{href:"/lang-c/subjects/linear_search",children:"\u7dda\u578b\u63a2\u7d22"}),(0,s.jsx)(i.Z.Item,{href:"/lang-c/subjects/bubble_sort",children:"\u30d0\u30d6\u30eb\u30bd\u30fc\u30c8\u6539"})]})})}),(0,s.jsx)(r.Z.Toggle,{"aria-controls":"nav5"}),(0,s.jsx)(r.Z.Collapse,{id:"nav5",children:(0,s.jsx)(l.Z,{className:"ml-auto mr-auto",children:(0,s.jsx)(i.Z,{title:"\u305d\u306e\u4ed6",id:"basic-nav-dropdown",children:(0,s.jsx)(i.Z.Item,{href:"/lang-c/input_samples",children:"\u5165\u529b\u30d5\u30a1\u30a4\u30eb\u306e\u30b5\u30f3\u30d7\u30eb"})})})})]})})}},7074:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var s=t(5893),r=t(5513),l=t.n(r);function i(e){return(0,s.jsx)("div",{className:l().width,children:e.children})}},1706:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return h}});var s=t(5893),r=t(9008),l=(t(1664),t(7074)),i=t(8237),c=t(603),a=t(5642),o=t(6905),d=t(1221);t(7625);function h(){return(0,s.jsxs)("div",{children:[(0,s.jsxs)(r.default,{children:[(0,s.jsx)("title",{children:"\u30d0\u30d6\u30eb\u30bd\u30fc\u30c8"}),(0,s.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,s.jsx)(i.Z,{}),(0,s.jsx)("main",{children:(0,s.jsxs)(l.Z,{children:[(0,s.jsxs)(c.Z,{children:[(0,s.jsx)("h1",{children:"\u30d0\u30d6\u30eb\u30bd\u30fc\u30c8"}),(0,s.jsx)("p",{children:"\u914d\u5217\u306e\u8981\u7d20\u3092\u3042\u308b\u30eb\u30fc\u30eb\u3067\u4e26\u3073\u66ff\u3048\u308b\u64cd\u4f5c\u3092\u30bd\u30fc\u30c8\uff08sort\uff09\u3068\u547c\u3076\u3002 \u5024\u306b\u5927\u5c0f\u3092\u3064\u3051\u3089\u308c\u308b\u5834\u5408\u306b\u3064\u3044\u3066\uff0c\u6607\u9806\u304b\u964d\u9806\u306b\u4e26\u3073\u66ff\u3048\u308b\u3002 \u8981\u7d20\u304c\u914d\u5217\u3084\u69cb\u9020\u4f53\u306e\u5834\u5408\u306f\u6bd4\u8f03\u6f14\u7b97\u5b50\u3092\u4f7f\u3048\u306a\u3044\u305f\u3081\uff0c \u4f55\u3089\u304b\u306e\u57fa\u6e96\u3067\u8981\u7d20\u306e\u5024\u306b\u5927\u5c0f\u3092\u3064\u3051\u308b\u65b9\u6cd5\u3092\u6e96\u5099\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u3002"}),(0,s.jsx)("p",{children:"\u5358\u7d14\u306a\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0\u3067\u3042\u308b\u30d0\u30d6\u30eb\u30bd\u30fc\u30c8\u306f\uff0c\u96a3\u308a\u5408\u3063\u305f\u8981\u7d20\u306e\u30da\u30a2\u306e\u9806\u5e8f\u3092\u8abf\u3079\uff0c \u3053\u308c\u304c\u9006\u3067\u3042\u308b\u3068\u304d\u306b\u5024\u3092\u4ea4\u63db\u3059\u308b\u3053\u3068\u3092\u7e70\u308a\u8fd4\u3057\uff0c\u914d\u5217\u5168\u4f53\u306e\u4e26\u3073\u66ff\u3048\u3092\u884c\u3046\u3002 \u3053\u306e\u65b9\u6cd5\u306f\u52b9\u7387\u7684\u3067\u306f\u306a\u3044\u305f\u3081\uff0c\u5927\u304d\u306a\u914d\u5217\u3092\u30bd\u30fc\u30c8\u3059\u308b\u305f\u3081\u306b\u306f\u6642\u9593\u304c\u304b\u304b\u3063\u3066\u3057\u307e\u3046\u3002 \u3057\u304b\u3057\u5358\u7d14\u306a\u306e\u3067\uff0c\u521d\u3081\u306b\u8aac\u660e\u3059\u308b\u30bd\u30fc\u30c8\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0\u3068\u3057\u3066\u6709\u540d\u3067\u3042\u308b\u3002"})]}),(0,s.jsxs)(a.Z,{children:[(0,s.jsxs)(o.Z,{children:[(0,s.jsx)("h2",{children:"\u30bd\u30fc\u30c8\u306e\u6d41\u308c"}),(0,s.jsx)("p",{children:"\u4f8b\u3068\u3057\u3066\uff0c5, 3, 4, 2, 1 \u3068\u3044\u3046\u8981\u7d20\u3092\u3082\u3064\u914d\u5217\u306b\u3064\u3044\u3066\uff0c \u30bd\u30fc\u30c8\u3092\u884c\u3044\u305d\u306e\u8981\u7d20\u306e\u4e26\u3073\u3092 1, 2, 3, 4, 5 \u306b\u3059\u308b\u904e\u7a0b\u3092\u4ee5\u4e0b\u306e\u56f3\u3092\u4f7f\u3063\u3066\u8aac\u660e\u3059\u308b\u3002"}),(0,s.jsx)("div",{className:"mt-3 mb-3",children:(0,s.jsxs)("figure",{className:"text-center",children:[(0,s.jsx)("img",{className:"d-inline-block",src:"/images/lang-c/bubble_sort.png",width:"300px"}),(0,s.jsx)("figcaption",{className:"mt-2 mb-2",children:"\u30d0\u30d6\u30eb\u30bd\u30fc\u30c8\u306e\u9014\u4e2d\u7d50\u679c"})]})}),(0,s.jsx)("p",{children:"\u96a3\u308a\u5408\u3046\u30da\u30a2\u306e\u5024\u3092\u7aef\u304b\u3089\u9806\u306b\u6bd4\u8f03\u3057\uff0c\u305d\u306e\u305f\u3073\u9006\u9806\u306a\u3089\u4ea4\u63db\u3059\u308b\u3002 (5, 3) \u306a\u3089 (3, 5) \u306b\u4ea4\u63db\u3059\u308b\u3002(3, 4)\u306a\u3089\u4ea4\u63db\u3057\u306a\u3044\u3002 \u4e00\u5de1\u76ee\u3067\u306f\uff0c\u3082\u3063\u3068\u3082\u5927\u304d\u3044\u6570\u306e 5 \u304c 1 \u3064\u305a\u3064\u53f3\u5074\u306b\u305a\u308c\u3066\u3044\u304f\u3002 \u4e00\u5de1\u76ee\u304c\u7d42\u308f\u3063\u305f\u6642\u70b9\u3067\uff0c(3, 4, 2, 1, 5) \u306e\u4e26\u3073\u306b\u306a\u308b\u3002 \u30bd\u30fc\u30c8\u304c\u5b8c\u4e86\u3057\u3066\u3044\u308b\u90e8\u5206\u306f 5 \u3060\u3051\u3067\u3042\u308b\u3002 \u540c\u69d8\u306e\u6bd4\u8f03\u3068\u4ea4\u63db\u3092\u3082\u3046\u4e00\u5de1\u3059\u308b\u3068\uff0c(3, 2, 1, 4, 5) \u306b\u306a\u308a\uff0c \u30bd\u30fc\u30c8\u304c\u5b8c\u4e86\u3057\u3066\u3044\u308b\u90e8\u5206\u306f (4, 5) \u3067\u3042\u308b\u3002 \u3053\u306e\u4e8c\u5de1\u76ee\u3067\u306f\uff0c5 \u306e\u4f4d\u7f6e\u304c\u78ba\u5b9a\u3057\u3066\u3044\u308b\u305f\u3081\uff0c\u6700\u5f8c\u306e\u30da\u30a2 (4, 5) \u306e\u6bd4\u8f03\u30fb\u4ea4\u63db\u304c\u4e0d\u8981\u3067\u3042\u308b\u3002 \u4e00\u5de1\u3059\u308b\u305f\u3073\u306b\uff0c\u3053\u306e\u7701\u7565\u3067\u304d\u308b\u6bd4\u8f03\u30fb\u4ea4\u63db\u306f\uff0c\uff11\u30da\u30a2\u305a\u3064\u5897\u3048\u3066\u3044\u304f\u3002"})]}),(0,s.jsxs)(o.Z,{children:[(0,s.jsx)("h2",{children:"\u3072\u3068\u307e\u305a\u52d5\u304f\u3082\u306e\u3092\u3064\u304f\u308b"}),(0,s.jsxs)("p",{children:["\u306f\u3058\u3081\u306b\u30bd\u30fc\u30c8\u3059\u308b\u5bfe\u8c61\u306e\u914d\u5217\u3092\u7528\u610f\u3059\u308b\u3002 \u4f8b\u306b\u6cbf\u3063\u3066\u64cd\u4f5c\u3092\u78ba\u304b\u3081\u3089\u308c\u308b\u3088\u3046\u306b\uff0c \u307e\u305a\u306f\u540c\u3058\u8981\u7d20\u3092\u3082\u3064\u914d\u5217\u3092\u3064\u304f\u308b\u3002",(0,s.jsx)(d.Z,{uri:"/codes/lang-c/complexes/bubble_sort/sort1.c",language:"c"})]}),(0,s.jsxs)("p",{children:["\u6b21\u306b\u96a3\u308a\u5408\u3046\u30da\u30a2\u306e\u5024\u3092\u53d6\u308a\u51fa\u3059\u3053\u3068\u3092\u7e70\u308a\u8fd4\u3059\u305f\u3081\u306e\u51e6\u7406\u3092\u4f5c\u6210\u3059\u308b\u3002",(0,s.jsx)(d.Z,{uri:"/codes/lang-c/complexes/bubble_sort/sort2.c",language:"c"}),"\u3053\u308c\u3092\u5b9f\u884c\u3059\u308b\u3068\uff0c",(0,s.jsx)(d.Z,{source:"(5, 3)(3, 4)(4, 2)(2, 1)(1, 32766)"}),"\u304c\u51fa\u529b\u3055\u308c\u308b\u3002\u96a3\u308a\u5408\u3063\u3066\u3044\u308b\uff12\u3064\u306e\u5024\u3092\u51fa\u529b\u3067\u304d\u3066\u3044\u308b\u304c\uff0c\u6700\u5f8c\u306e\u30da\u30a2\u3060\u3051\u5909\u3067\u3042\u308b\u3002 \u3053\u308c\u306f\uff0c\u914d\u5217\u306e\u7bc4\u56f2\u5916\u306e\u9818\u57df\u306b\u30a2\u30af\u30bb\u30b9\u3057\u305f\u305f\u3081\u3067\u3042\u308a\uff0c \u610f\u5473\u306e\u306a\u3044\u672a\u5b9a\u7fa9\u306e\u30c7\u30fc\u30bf\u3092\u53d6\u308a\u51fa\u3057\u3066\u3057\u307e\u3063\u3066\u3044\u308b\u305f\u3081\u3067\u3042\u308b\u3002 \u672a\u5b9a\u7fa9\u306a\u306e\u3067\u5b9f\u884c\u3059\u308b\u305f\u3073\u306b\u5909\u308f\u3063\u305f\u308a\uff0c\u5b9f\u884c\u3059\u308b\u74b0\u5883\u306b\u3088\u3063\u3066\u3082\u5909\u308f\u308b\u3082\u306e\u3067\u3042\u308b\u3002 \u89aa\u5207\u306a\u8a00\u8a9e\u3060\u3068\uff0c\u7bc4\u56f2\u5916\u3078\u306e\u30a2\u30af\u30bb\u30b9\u3092\u691c\u51fa\u3057\u3066\u5b9f\u884c\u6642\u306e\u30a8\u30e9\u30fc\u306a\u3069\u306b\u3057\u3066\u304f\u308c\u308b\u304c\uff0c C \u8a00\u8a9e\u3067\u306f\u3053\u306e\u3088\u3046\u306a\u30b5\u30dd\u30fc\u30c8\u304c\u306a\u3044\u3002 \u305f\u3060\uff0c\u3069\u306e\u307f\u3061\u6b63\u5e38\u306a\u51e6\u7406\u304c\u3067\u304d\u3066\u3044\u308b\u304b\u3069\u3046\u304b\u8abf\u3079\u308b\u6bb5\u968e\u3067\uff0c \u304a\u304b\u3057\u3044\u6319\u52d5\u3068\u3057\u3066\u691c\u51fa\u3067\u304d\u308b\u306e\u3067\uff0c \u304d\u3063\u3061\u308a\u3068\u6bb5\u968e\u3092\u8e0f\u3093\u3067\u30c1\u30a7\u30c3\u30af\u3059\u308c\u3070\uff0c\u3053\u306e\u3088\u3046\u306a\u30df\u30b9\u304c\u6700\u5f8c\u307e\u3067\u6b8b\u308b\u3053\u3068\u306f\u306a\u3044\u3002"]}),(0,s.jsxs)("p",{children:["\u5148\u7a0b\u306e\u7bc4\u56f2\u5916\u306e\u30a2\u30af\u30bb\u30b9\u3092\u4fee\u6b63\u3057\u3066\uff0c",(0,s.jsx)(d.Z,{uri:"/codes/lang-c/complexes/bubble_sort/sort3.c",language:"c"}),"\u3068\u66f8\u304d\u76f4\u3059\u3002\u3053\u308c\u306e\u7d50\u679c\u3092\u51fa\u529b\u3059\u308b\u3068\uff0c",(0,s.jsx)(d.Z,{source:"(5, 3)(3, 4)(4, 2)(2, 1)"}),"\u306e\u3088\u3046\u306b\u306a\u308a\uff0c\u6b63\u3057\u3044\u30da\u30a2\u3092\u53d6\u308a\u51fa\u305b\u305f\u3053\u3068\u304c\u5206\u304b\u308b\u3002 \uff08\u306a\u305c 5-1 \u3092 4 \u3068\u66f8\u304b\u306a\u3044\u306e\u304b\u306e\u7406\u7531\u306f\u5f8c\u3067\u8aac\u660e\u3059\u308b\u3002\uff09"]}),(0,s.jsxs)("p",{children:["\u3055\u3066\uff0c\u6bd4\u8f03\u3059\u308b\u30da\u30a2\u3092\u53d6\u5f97\u3067\u304d\u305f\u306e\u3067\uff0c\u6bd4\u8f03\u3068\u4ea4\u63db\u306e\u51e6\u7406\u3092\u52a0\u3048\u308b\u3002 \uff12\u3064\u306e\u5909\u6570\u306e\u5024\u3092\u4ea4\u63db\u3059\u308b\u305f\u3081\u306b\u306f\uff0c\u3082\u3046\uff11\u3064\u306e\u5909\u6570\u304c\u5fc5\u8981\u3067\u3042\u308b\u3002 \u3053\u308c\u306f\u4e00\u6642\u7684\u306a\u5909\u6570\u306a\u306e\u3067 tmp \u306a\u3069\u306e\u540d\u524d\u306b\u3059\u308b\u3053\u3068\u304c\u591a\u3044\u3002",(0,s.jsx)(d.Z,{uri:"/codes/lang-c/complexes/bubble_sort/sort4.c",language:"c",expand:!0}),"\u3053\u3053\u3067\u51e6\u7406\u306e\u524d\u5f8c\u306e\u914d\u5217\u306e\u8981\u7d20\u306e\u5024\u304c\u5206\u304b\u308b\u3088\u3046\u306b\u51fa\u529b\u3092\u52a0\u3048\u305f\u3002 \u3053\u308c\u3092\u5b9f\u884c\u3057\u3066\u307f\u308b\u3068\uff0c",(0,s.jsx)(d.Z,{uri:"/codes/lang-c/complexes/bubble_sort/out1.txt",language:"txt"}),"\u306e\u3088\u3046\u306b\u306a\u308a\uff0c\uff11\u6bb5\u968e\u76ee\u306e\u30bd\u30fc\u30c8\u304c\u4e88\u60f3\u901a\u308a\u3067\u304d\u3066\u3044\u308b\u3053\u3068\u304c\u5206\u304b\u308b\u3002"]}),(0,s.jsxs)("p",{children:["\u3042\u3068\u306f\u7e70\u308a\u8fd4\u3057\u51e6\u7406\u3092\u884c\u3046\u3060\u3051\u3067\u3042\u308b\u3002 \u7e70\u308a\u8fd4\u3057\u3092\u6700\u5927\u3067\u8981\u7d20\u6570\u2212\uff11\u56de\uff08\u4eca\u56de\u306a\u3089\uff14\u56de\uff09\u3059\u308c\u3070\u914d\u5217\u5168\u4f53\u306e\u30bd\u30fc\u30c8\u304c\u5b8c\u4e86\u3059\u308b\u3002 \u5168\u4f53\u3092\u56f2\u3046\u3088\u3046\u306b for \u6587\u3092\u8ffd\u52a0\u3057\u3066\uff0c",(0,s.jsx)(d.Z,{uri:"/codes/lang-c/complexes/bubble_sort/sort5.c",language:"c",expand:!0,download:!0}),"\u3068\u66f8\u3051\u3070",(0,s.jsx)(d.Z,{uri:"/codes/lang-c/complexes/bubble_sort/out2.txt",language:"txt"}),"\u306e\u3088\u3046\u306b\u30bd\u30fc\u30c8\u306e\u5404\u6bb5\u968e\u3068\uff0c\u6700\u7d42\u7684\u306b\u30bd\u30fc\u30c8\u3055\u308c\u305f\u914d\u5217\u306e\u5024\u304c\u8868\u793a\u3055\u308c\u308b\u3002"]}),(0,s.jsxs)("p",{children:["\u3053\u308c\u3067\u30d0\u30d6\u30eb\u30bd\u30fc\u30c8\u306e\u30d7\u30ed\u30b0\u30e9\u30e0\u306f\u5b8c\u6210\u3057\u305f\u304c\uff0c",(0,s.jsxs)("ul",{className:"mt-3 mb-3",children:[(0,s.jsx)("li",{children:"\u8abf\u3079\u306a\u304f\u3066\u3082\u826f\u3044\u30da\u30a2\u3082\u8abf\u3079\u3066\u3044\u308b"}),(0,s.jsx)("li",{children:"\u914d\u5217\u306e\u30b5\u30a4\u30ba\u3092\u5909\u3048\u305f\u3068\u304d\u306b\u8907\u6570\u30f6\u6240\u306e\u4fee\u6b63\u304c\u5fc5\u8981"}),(0,s.jsx)("li",{children:"\u65e9\u3044\u6bb5\u968e\u3067\u30bd\u30fc\u30c8\u6e08\u307f\u306b\u306a\u3063\u305f\u3068\u304d\u306b\u3082\u7e70\u308a\u8fd4\u3057\u304c\u7d9a\u304f"}),(0,s.jsx)("li",{children:"\u4efb\u610f\u306e\u914d\u5217\u306b\u3064\u3044\u3066\u51e6\u7406\u304c\u3067\u304d\u306a\u3044"})]}),"\u306b\u3064\u3044\u3066\u6539\u5584\u306e\u4f59\u5730\u304c\u3042\u308a\uff0c\u5b9f\u7528\u7684\u3067\u306a\u3044\u3002"]})]}),(0,s.jsxs)(o.Z,{children:[(0,s.jsx)("h2",{children:"\u4e0d\u8981\u306a\u6bd4\u8f03\u3092\u9664\u53bb\u3059\u308b\u6539\u826f"}),(0,s.jsxs)("p",{children:["\u30bd\u30fc\u30c8\u304c\u9032\u3080\u306b\u3064\u308c\u3066\uff0c\u914d\u5217\u306e\u5f8c\u65b9\u304b\u3089\u30bd\u30fc\u30c8\u6e08\u307f\u306b\u306a\u308b\u305f\u3081\uff0c\u305d\u306e\u90e8\u5206\u306e\u30da\u30a2\u306b\u3064\u3044\u3066\u306e\u6bd4\u8f03\u306f\u4e0d\u8981\u3067\u3042\u308b\u3002 \u3053\u306e\u305f\u3081\uff0c\u6bd4\u8f03\u3059\u308b\u7bc4\u56f2\u3092\u72ed\u3081\u3066\u3044\u304f\u3088\u3046\u306b\u51e6\u7406\u3092\u6539\u826f\u3059\u308b\u3002 \u3053\u306e\u8abf\u3079\u308b\u5fc5\u8981\u306e\u306a\u3044\u30da\u30a2\u306f\uff11\u5de1\u3059\u308b\u5ea6\u306b\uff11\u3064\u305a\u3064\u5897\u3048\u3066\u3044\u304f\u305f\u3081\uff0c",(0,s.jsx)(d.Z,{uri:"/codes/lang-c/complexes/bubble_sort/sort6.c",language:"c",expand:!0}),"\u306e\u3088\u3046\u306b for \u6587\u306e\u7d99\u7d9a\u6761\u4ef6\u3092\u5909\u66f4\u3059\u308c\u3070\u3088\u3044\u3002"]})]}),(0,s.jsxs)(o.Z,{children:[(0,s.jsx)("h2",{children:"\u914d\u5217\u306e\u30b5\u30a4\u30ba\u306b\u3064\u3044\u3066\u306e\u6539\u826f"}),(0,s.jsx)("p",{children:"\u914d\u5217\u306e\u8981\u7d20\u6570\u306b\u3088\u3089\u305a\u51e6\u7406\u304c\u884c\u308f\u308c\u308b\u3088\u3046\u306b\u30b3\u30fc\u30c9\u3092\u5909\u66f4\u3057\u3066\u304a\u304f\u3053\u3068\u3067\uff0c \u3088\u308a\u67d4\u8edf\u306b\u4f7f\u3048\u308b\u30d1\u30fc\u30c4\u306b\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u308b\u3002"}),(0,s.jsx)("p",{children:"C \u8a00\u8a9e\u306e\u4e8b\u60c5\u306b\u3088\u308a\uff0c\u914d\u5217\u3092\u4f5c\u6210\u3059\u308b\u3068\u304d\u306b\u78ba\u4fdd\u3059\u308b\u8981\u7d20\u6570\u3092 \u5909\u6570\u306b\u3088\u308a\u4e0e\u3048\u308b\u3053\u3068\u304c\u3067\u304d\u306a\u3044\u3002"}),(0,s.jsxs)("p",{children:["\u914d\u5217\u306e\u8981\u7d20\u6570\u3092\u5909\u6570\u306b\u8a18\u9332\u3057\u3066\u7f6e\u304f\u3053\u3068\u3067\uff0c \u30ea\u30c6\u30e9\u30eb\u306e\u4f7f\u7528\u983b\u5ea6\u3092\u4e0b\u3052\uff0c\u8981\u7d20\u6570\u306e\u5909\u66f4\u306b\u3088\u308b\u4fee\u6b63\u306e\u624b\u9593\u3092\u5c11\u306a\u304f\u3059\u308b\u3002",(0,s.jsx)(d.Z,{uri:"/codes/lang-c/complexes/bubble_sort/sort7.c",language:"c",expand:!0}),"\u4e00\u822c\u306b\u30ea\u30c6\u30e9\u30eb\u306e\u4f7f\u7528\u306f\u6700\u5c0f\u9650\u306b\u3057\u3066\u304a\u3044\u305f\u307b\u3046\u304c\u3044\u3044\u3002"]})]}),(0,s.jsxs)(o.Z,{children:[(0,s.jsx)("h2",{children:"\u30bd\u30fc\u30c8\u6e08\u307f\u306b\u306a\u308c\u3070\u53cd\u5fa9\u3092\u7d42\u3048\u308b\u3088\u3046\u306b\u6539\u826f"}),(0,s.jsxs)("p",{children:["\uff11\u5de1\u306e\u9593\uff0c\u3069\u306e\u30da\u30a2\u3067\u3082\u4ea4\u63db\u3055\u308c\u306a\u304b\u3063\u305f\u306a\u3089\uff0c \u305d\u308c\u306f\u914d\u5217\u5168\u4f53\u304c\u30bd\u30fc\u30c8\u6e08\u307f\u3067\u3042\u308b\u3002 \u305d\u308c\u3092\u5229\u7528\u3057\uff0c",(0,s.jsx)(d.Z,{uri:"/codes/lang-c/complexes/bubble_sort/sort8.c",language:"c",expand:!0}),"\u306e\u3088\u3046\u306b\uff0c\u4ea4\u63db\u3055\u308c\u305f\u304b\u3069\u3046\u304b\u3092\u5024\u3067\u5224\u5225\u3067\u304d\u308b\u3088\u3046\u3059\u308c\u3070\uff0c\u4e0d\u8981\u306a\u53cd\u5fa9\u51e6\u7406\u3092\u7701\u304f\u3053\u3068\u304c\u3067\u304d\u308b\u3002"]}),(0,s.jsx)("p",{children:"\u4f8b\u306b\u4f7f\u7528\u3057\u305f\u914d\u5217\u3060\u3068\uff0c\u4e0d\u8981\u306a\u53cd\u5fa9\u51e6\u7406\u304c\u306a\u3044\u3002 \u305d\u306e\u305f\u3081\uff0c\u9014\u4e2d\u3067\u30bd\u30fc\u30c8\u6e08\u307f\u306b\u306a\u308b\u3088\u3046\u306a\u8981\u7d20\u3092\u8a2d\u5b9a\u3057\u3066\u72d9\u3044\u901a\u308a\u306b\u51e6\u7406\u3067\u304d\u308b\u304b\u3069\u3046\u304b\u78ba\u304b\u3081\u3066\u307b\u3057\u3044\u3002"})]}),(0,s.jsxs)(o.Z,{children:[(0,s.jsx)("h2",{children:"\u30bd\u30fc\u30c8\u6a5f\u80fd\u3060\u3051\u3092\u5207\u308a\u51fa\u3057\u3066\u95a2\u6570\u5316"}),(0,s.jsxs)("p",{children:["\u30bd\u30fc\u30c8\u3092\u4f7f\u3046\u5ea6\u306b\u4e0a\u8a18\u306e\u9577\u3044\u30b3\u30fc\u30c9\u3092\u66f8\u304f\u3053\u3068\u306f\u5197\u9577\u3067\u3042\u308b\u4e0a\uff0c\u30df\u30b9\u3092\u8a98\u767a\u3059\u308b\u3002 \u305d\u306e\u305f\u3081\uff0c\u914d\u5217\u3092\u53d7\u3051\u53d6\u308a\uff0c\u305d\u308c\u3092\u30bd\u30fc\u30c8\u3059\u308b\u3088\u3046\u306a\u95a2\u6570\u3092\u4f5c\u6210\u3059\u308b\u3002 \u6e21\u3055\u308c\u305f\u914d\u5217\u3092\u30bd\u30fc\u30c8\u3059\u308b\u305f\u3081\uff0c\u623b\u308a\u5024\u306f\u7121\u3044\u305f\u3081\uff0cvoid \u578b\u306e\u95a2\u6570\u3092\u4f5c\u308b\u3002 \u307e\u305f\u914d\u5217\u306e\u5024\u3092\u8868\u793a\u3059\u308b\u30b3\u30fc\u30c9\u3082\u5197\u9577\u306b\u306a\u308b\u306e\u3067\u95a2\u6570\u306b\u3059\u308b\u3002",(0,s.jsx)(d.Z,{uri:"/codes/lang-c/complexes/bubble_sort/sort9.c",language:"c",expand:!0,download:!0}),"\u3053\u3053\u3067\u306f\uff0c\u4f7f\u3044\u56de\u305b\u308b\u3053\u3068\u3092\u793a\u3059\u305f\u3081\u306b\uff0c\uff12\u3064\u306e\u914d\u5217\u3092\u305d\u308c\u305e\u308c\u30bd\u30fc\u30c8\u3057\u3066\u8868\u793a\u3059\u308b\u3088\u3046\u306b\u3057\u305f\u3002 main \u95a2\u6570\u5185\u306b\u30c7\u30e2\u306e\u305f\u3081\u306e\u51e6\u7406\uff0cbubbleSort\u95a2\u6570\u306b\u30bd\u30fc\u30c8\u306e\u305f\u3081\u306e\u51e6\u7406\u3068\u306a\u308b\u3088\u3046\u306b \u5206\u96e2\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u305f\u3002 \u3064\u307e\u308a\uff0c\u4efb\u610f\u306e\u914d\u5217\u306b\u5bfe\u5fdc\u3067\u304d\u308b\u30bd\u30fc\u30c8\u306e\u6a5f\u80fd\uff08\u95a2\u6570\uff09\u3092\u4f5c\u308b\u3053\u3068\u304c\u3067\u304d\u305f\u3002"]}),(0,s.jsx)("p",{children:"\u6163\u7fd2\u7684\u306b\u306f\uff12\u56de\u4ee5\u4e0a\u4f7f\u308f\u308c\u308b\u51e6\u7406\u306f\u95a2\u6570\u306b\u3059\u308b\u3002"})]})]})]})})]})}},9497:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/lang-c/complexes/bubble_sort",function(){return t(1706)}])},3272:function(e){e.exports={abstract:"abstract_abstract__2J1_W"}},4091:function(e){e.exports={grid:"documentGrid_grid__5YgcL",center:"documentGrid_center__1Iy7m"}},4824:function(e){e.exports={element:"contentElement_element__2zPOC"}},5513:function(e){e.exports={width:"widthContainer_width__bLQd8"}}},function(e){e.O(0,[774,264,779,433,888,179],(function(){return n=9497,e(e.s=n);var n}));var n=e.O();_N_E=n}]);