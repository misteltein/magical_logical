(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[719],{603:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var r=t(5893),s=t(3272),c=t.n(s);function i(e){return(0,r.jsx)("div",{className:c().abstract,style:e.styles,children:e.children})}},1221:function(e,n,t){"use strict";t.d(n,{Z:function(){return M}});var r=t(5893),s=t(3349),c=t(6156),i=t(2949),l=t(6610),a=t(5991),o=t(5255),d=t(6089),h=t(7608),u=t(7294),x=t(3300),m=t.n(x),p=t(9235),j=t(7694),g=t(5005),f=t(7625),Z=t(767),v=t(8774),_=t(4370),b=t(3253),y=t.n(b);function w(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function O(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?w(Object(t),!0).forEach((function(n){(0,c.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):w(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function N(e){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=(0,h.Z)(e);if(n){var s=(0,h.Z)(this).constructor;t=Reflect.construct(r,arguments,s)}else t=r.apply(this,arguments);return(0,d.Z)(this,t)}}function k(e){var n={backgroundColor:"#f6f8fa",fontSize:"14px",padding:"7px 1rem 5px 1rem",margin:"0",overflow:"auto"};return Object.keys(e).includes("maxHeight")&&(n.maxHeight=e.maxHeight),(0,r.jsx)("pre",{style:n,children:e.children})}var I=function(e){(0,o.Z)(t,e);var n=N(t);function t(e){var r;return(0,l.Z)(this,t),(r=n.call(this,e)).state={loaded:!1,source:"",showModal:!1},r.maxHeight="15rem",r.margin="",e.maxHeight&&(r.maxHeight=e.maxHeight),r}return(0,a.Z)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.uri?m()(this.props.uri).then((function(e){return e.text()})).then((function(e){var n=e.split("\n");return""===n.slice(-1)[0]&&n.pop(),n.join("\n")})).then((function(n){e.setState({loaded:!0,source:n})})).catch((function(n){return e.setState({loaded:!0,source:n})})):(this.setState({loaded:!0,source:this.props.source}),this.margin="mt-3 mb-3")}},{key:"render",value:function(){var e=this,n=(p.lG.theme,(0,i.Z)(p.lG,["theme"]));return(0,r.jsx)("div",{className:this.margin,children:(0,r.jsx)(p.ZP,O(O({theme:j.Z},n),{},{code:this.state.source,language:this.props.language,children:function(n){var t=n.className,s=n.style,c=n.tokens,i=n.getLineProps,l=n.getTokenProps;return(0,r.jsx)(k,{className:t,style:s,maxHeight:e.maxHeight,children:c.map((function(e,n){return(0,r.jsx)("div",O(O({},i({line:e,key:n})),{},{children:e.map((function(e,n){return(0,r.jsx)("span",O({},l({token:e,key:n})))}))}))}))})}}))})}}]),t}(u.Component),C={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",maxHeight:"100vh",transform:"translate(-50%, -50%)"}},M=function(e){(0,o.Z)(t,e);var n=N(t);function t(e){var r;return(0,l.Z)(this,t),(r=n.call(this,e)).state={showModal:!1},r.handleOpenModal=r.handleOpenModal.bind((0,s.Z)(r)),r.handleCloseModal=r.handleCloseModal.bind((0,s.Z)(r)),r}return(0,a.Z)(t,[{key:"handleOpenModal",value:function(){this.setState({showModal:!0})}},{key:"handleCloseModal",value:function(){this.setState({showModal:!1})}},{key:"render",value:function(){return this.props.uri?(0,r.jsxs)("div",{style:{margin:"8px 0 8px 0"},children:[(0,r.jsx)(I,O({},this.props)),(0,r.jsxs)("div",{style:{textAlign:"right",padding:"5px 0 5px 0"},children:[this.props.expand&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(g.Z,{variant:"outline-dark",size:"md",onClick:this.handleOpenModal,children:(0,r.jsx)(f.G,{icon:v.TT,style:{width:"1rem"}})}),(0,r.jsxs)(y(),{isOpen:this.state.showModal,onRequestClose:this.handleCloseModal,style:C,children:[(0,r.jsx)(I,O(O({},this.props),{},{maxHeight:"80vh"})),(0,r.jsx)("div",{style:{textAlign:"right"},children:(0,r.jsx)(g.Z,{variant:"outline-dark",size:"md",onClick:this.handleCloseModal,children:(0,r.jsx)(f.G,{icon:_.nY,style:{width:"1rem"}})})})]})]}),this.props.download&&(0,r.jsx)("a",{href:this.props.uri,download:!0,className:"ml-1",children:(0,r.jsx)(g.Z,{variant:"outline-primary",size:"md",className:"m-0 mr-1",children:(0,r.jsx)(f.G,{icon:Z.q7,style:{width:"1rem"}})})})]})]}):(0,r.jsx)(I,O({},this.props))}}]),t}(u.Component)},6905:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var r=t(5893),s=t(4824),c=t.n(s);function i(e){return(0,r.jsx)("div",{className:c().element,style:e.styles,children:e.children})}},5642:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var r=t(5893),s=t(4091),c=t.n(s);function i(e){return(0,r.jsx)("div",{className:c().grid,children:e.children})}},8237:function(e,n,t){"use strict";t.d(n,{Z:function(){return a}});var r=t(5893),s=t(3062),c=t(4315),i=t(4505),l=t(1664);t(7625);function a(){return(0,r.jsx)("div",{className:"sticky-top",children:(0,r.jsxs)(s.Z,{bg:"light",style:{paddingRight:"7rem"},children:[(0,r.jsx)(l.default,{href:"/lang-c",className:"font-weight-bold",children:(0,r.jsx)("span",{className:"text-dark pr-3",children:"C \u8a00\u8a9e\u5165\u9580"})}),(0,r.jsx)(s.Z.Toggle,{"aria-controls":"nav2"}),(0,r.jsx)(s.Z.Collapse,{id:"nav2",children:(0,r.jsxs)(c.Z,{className:"ml-auto mr-auto",children:[(0,r.jsx)(i.Z.Divider,{}),(0,r.jsxs)(i.Z,{title:"\u306f\u3058\u3081\u306b",id:"basic-nav-dropdown",children:[(0,r.jsx)(i.Z.Item,{href:"/lang-c/introductions/stance",children:"\u30d7\u30ed\u30b0\u30e9\u30df\u30f3\u30b0\u3068\u306f\uff1f"}),(0,r.jsx)(i.Z.Item,{href:"/lang-c/introductions/install",children:"\u74b0\u5883\u69cb\u7bc9"}),(0,r.jsx)(i.Z.Item,{href:"/lang-c/introductions/hello",children:"\u306f\u3058\u3081\u3066\u306e\u30b3\u30f3\u30d1\u30a4\u30eb"}),(0,r.jsx)(i.Z.Item,{href:"/lang-c/introductions/trial",children:"\u52b9\u7387\u3088\u304f\u7fd2\u5f97\u3059\u308b\u305f\u3081\u306b"})]})]})}),(0,r.jsx)(s.Z.Toggle,{"aria-controls":"nav2"}),(0,r.jsx)(s.Z.Collapse,{id:"nav2",children:(0,r.jsx)(c.Z,{className:"ml-auto mr-auto",children:(0,r.jsxs)(i.Z,{title:"\u69cb\u6587\u30fb\u898f\u5247",id:"basic-nav-dropdown",children:[(0,r.jsx)(i.Z.Item,{href:"/lang-c/elements/literal_and_variable",children:"\u30ea\u30c6\u30e9\u30eb\u3068\u5909\u6570"}),(0,r.jsx)(i.Z.Item,{href:"/lang-c/elements/output",children:"\u6a19\u6e96\u51fa\u529b"}),(0,r.jsx)(i.Z.Item,{href:"/lang-c/elements/argv",children:"\u30b3\u30de\u30f3\u30c9\u30e9\u30a4\u30f3\u5f15\u6570"}),(0,r.jsx)(i.Z.Item,{href:"/lang-c/elements/statement",children:"\u5ba3\u8a00\u6587\u30fb\u5b9f\u884c\u6587"}),(0,r.jsx)(i.Z.Item,{href:"/lang-c/elements/array",children:"\u914d\u5217"}),(0,r.jsx)(i.Z.Item,{href:"/lang-c/elements/structure",children:"\u69cb\u9020\u4f53"}),(0,r.jsx)(i.Z.Item,{href:"/lang-c/elements/operator",children:"\u6f14\u7b97\u5b50"}),(0,r.jsx)(i.Z.Item,{href:"/lang-c/elements/conditional_branch",children:"\u6761\u4ef6\u5206\u5c90"}),(0,r.jsx)(i.Z.Item,{href:"/lang-c/elements/loop",children:"\u53cd\u5fa9"}),(0,r.jsx)(i.Z.Item,{href:"/lang-c/elements/function",children:"\u95a2\u6570"}),(0,r.jsx)(i.Z.Item,{href:"/lang-c/elements/file_input",children:"\u30d5\u30a1\u30a4\u30eb\u5165\u529b"})]})})}),(0,r.jsx)(s.Z.Toggle,{"aria-controls":"nav3"}),(0,r.jsx)(s.Z.Collapse,{id:"nav3",children:(0,r.jsx)(c.Z,{className:"ml-auto mr-auto",children:(0,r.jsxs)(i.Z,{title:"\u7d44\u307f\u5408\u308f\u305b",id:"basic-nav-dropdown",children:[(0,r.jsx)(i.Z.Item,{href:"/lang-c/complexes/bubble_sort",children:"\u30d0\u30d6\u30eb\u30bd\u30fc\u30c8"}),(0,r.jsx)(i.Z.Item,{href:"/lang-c/complexes/file_input",children:"\u30d5\u30a1\u30a4\u30eb\u306e\u8aad\u307f\u8fbc\u307f"}),(0,r.jsx)(i.Z.Item,{href:"/lang-c/complexes/monte_carlo",children:"\u30e2\u30f3\u30c6\u30ab\u30eb\u30ed\u6cd5"})]})})}),(0,r.jsx)(s.Z.Toggle,{"aria-controls":"nav4"}),(0,r.jsx)(s.Z.Collapse,{id:"nav4",children:(0,r.jsx)(c.Z,{className:"ml-auto mr-auto",children:(0,r.jsxs)(i.Z,{title:"\u6f14\u7fd2",id:"basic-nav-dropdown",children:[(0,r.jsx)(i.Z.Item,{href:"/lang-c/subjects/linear_search",children:"\u7dda\u578b\u63a2\u7d22"}),(0,r.jsx)(i.Z.Item,{href:"/lang-c/subjects/bubble_sort",children:"\u30d0\u30d6\u30eb\u30bd\u30fc\u30c8\u6539"}),(0,r.jsx)(i.Z.Item,{href:"/lang-c/subjects/monte_carlo",children:"\u9762\u7a4d\u306e\u8a08\u7b97"})]})})}),(0,r.jsx)(s.Z.Toggle,{"aria-controls":"nav5"}),(0,r.jsx)(s.Z.Collapse,{id:"nav5",children:(0,r.jsx)(c.Z,{className:"ml-auto mr-auto",children:(0,r.jsx)(i.Z,{title:"\u305d\u306e\u4ed6",id:"basic-nav-dropdown",children:(0,r.jsx)(i.Z.Item,{href:"/lang-c/input_samples",children:"\u5165\u529b\u30d5\u30a1\u30a4\u30eb\u306e\u30b5\u30f3\u30d7\u30eb"})})})})]})})}},7074:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var r=t(5893),s=t(5513),c=t.n(s);function i(e){return(0,r.jsx)("div",{className:c().width,children:e.children})}},3825:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return h}});var r=t(5893),s=t(9008),c=(t(1664),t(7074)),i=t(8237),l=t(603),a=t(5642),o=t(6905),d=t(1221);function h(){return(0,r.jsxs)("div",{children:[(0,r.jsxs)(s.default,{children:[(0,r.jsx)("title",{children:"\u30e2\u30f3\u30c6\u30ab\u30eb\u30ed\u6cd5"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,r.jsx)(i.Z,{}),(0,r.jsx)("main",{children:(0,r.jsxs)(c.Z,{children:[(0,r.jsxs)(l.Z,{children:[(0,r.jsx)("h1",{children:"\u30e2\u30f3\u30c6\u30ab\u30eb\u30ed\u6cd5"}),(0,r.jsx)("p",{children:"\u30e2\u30f3\u30c6\u30ab\u30eb\u30ed\u6cd5\u3068\u306f\uff0c\u4e71\u6570\u3092\u4f7f\u3063\u305f\u30b5\u30f3\u30d7\u30ea\u30f3\u30b0\u3092\u7e70\u308a\u8fd4\u3059\u8a08\u7b97\u624b\u6cd5\u306e\u3053\u3068\u3067\u3042\u308b\u3002 \u3053\u3053\u3067\u306f\uff0c\u3053\u306e\u65b9\u6cd5\u3092\u4f7f\u3063\u3066\u5186\u306e\u9762\u7a4d\u3092\u6c42\u3081\u308b\u3053\u3068\u306b\u3059\u308b\u3002 \u5186\u306e\u9762\u7a4d\u306f\u534a\u5f84\u304b\u3089\u3059\u3050\u8a08\u7b97\u3067\u304d\u308b\u305f\u3081\uff0c \u3053\u308c\u304b\u3089\u4f5c\u308b\u30d7\u30ed\u30b0\u30e9\u30e0\u306b\u5b9f\u7528\u6027\u306f\u306a\u3044\u3002 \u3057\u304b\u3057\uff0c\u3053\u306e\u30d7\u30ed\u30b0\u30e9\u30e0\u3092\u4f5c\u308a\u7d42\u3048\u305f\u306a\u3089\uff0c\u5bfe\u8c61\u306b\u3059\u308b\u56f3\u5f62\u306f\u5186\u306b\u9650\u3089\u305a \u624b\u8a08\u7b97\u304c\u9762\u5012\u306a\u4efb\u610f\u306e\u56f3\u5f62\u306b\u3064\u3044\u3066\u9069\u7528\u3067\u304d\u308b\u3053\u3068\u304c\u5206\u304b\u308b\u306f\u305a\u3067\u3042\u308b\u3002 \u307e\u305f\uff0c\u6b21\u5143\u3082\uff12\u6b21\u5143\u306b\u9650\u3089\u306a\u3044\u3002"})]}),(0,r.jsxs)(a.Z,{children:[(0,r.jsxs)(o.Z,{children:[(0,r.jsx)("h2",{children:"\u4e71\u6570\u3092\u4f7f\u3063\u3066\u9762\u7a4d\u3092\u8a08\u7b97\u3059\u308b\u4ed5\u7d44\u307f"}),(0,r.jsx)("p",{children:"\u3053\u3053\u3067\u554f\u984c\u306f\uff0c\u534a\u5f84 R \u306e\u5186\u306e\u9762\u7a4d\u3092\u6c42\u3081\u308b\u3053\u3068\u306b\u3059\u308b\u3002"}),(0,r.jsx)("p",{children:"\u5186\u3092\u5185\u5305\u3059\u308b\u3088\u3046\u306b\uff0c\u8fba\u304c L_BOX \u3067\u3042\u308b\u6b63\u65b9\u5f62\u3092\u7528\u610f\u3059\u308b\u3002 \u5186\u3068\u6b63\u65b9\u5f62\u306e\u4e2d\u5fc3\u306f\u539f\u70b9\u3067\u4e00\u81f4\u3057\u3066\u3044\u308b\u3068\u3059\u308b\u3002 \u3053\u306e\u6b63\u65b9\u5f62\u306e\u4e0a\u306b\uff0c\u70b9\u3092\u4e00\u69d8\u306b\u30e9\u30f3\u30c0\u30e0\u306b\u3070\u3089\u307e\u304f\u3002 \u3053\u308c\u3089\u306e\u70b9\u306e\u3046\u3061\uff0c\u5186\u306e\u4e0a\u306b\u4e57\u3063\u305f\u5272\u5408\u306f\uff0c\u6b63\u65b9\u5f62\u3068\u5186\u306e\u9762\u7a4d\u306e\u6bd4\u306b\u7b49\u3057\u3044\u3002 \u3053\u306e\u95a2\u4fc2\u3092\u5229\u7528\u3057\u3066\uff0c\u65e2\u77e5\u306e\u6b63\u65b9\u5f62\u306e\u9762\u7a4d\u304b\u3089\uff0c\u672a\u77e5\u306e\u5186\u306e\u9762\u7a4d\u3092\u63a8\u5b9a\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u308b\u3002"}),(0,r.jsx)("div",{className:"mt-3 mb-3",children:(0,r.jsxs)("figure",{className:"text-center",children:[(0,r.jsx)("img",{className:"d-inline-block",src:"/images/lang-c/circle_volume.png",width:"300px"}),(0,r.jsx)("figcaption",{className:"mt-2 mb-2",children:"\u8a08\u7b97\u306e\u305f\u3081\u306e\u56f3\u5f62\u3068\u5909\u6570"})]})}),(0,r.jsx)("p",{children:"\u534a\u5f84 1 \u306b\u3059\u308c\u3070\u5186\u5468\u7387\u3092\u63a8\u5b9a\u3067\u304d\u308b\u3002"}),(0,r.jsx)("p",{children:"\u70b9\u306e\u6570\uff08\u30b5\u30f3\u30d7\u30eb\u306e\u6570\uff09\u306f\u591a\u3044\u307b\u3069\uff0c\u3088\u308a\u9ad8\u3044\u7cbe\u5ea6\u3067\u63a8\u5b9a\u3067\u304d\u308b\u3002"}),(0,r.jsx)("p",{children:"\u4eca\u56de\u306f\u70b9\u3092\u751f\u6210\u3059\u308b\u9818\u57df\u3092\u7c21\u5358\u306b\u3059\u308b\u305f\u3081\u306b\u6b63\u65b9\u5f62\u306b\u3057\u305f\u304c\uff0c\u5bfe\u8c61\u306e\u56f3\u5f62\u3092\u5185\u5305\u3057\u3066\u3044\u3066\u7bc4\u56f2\u3068\u9762\u7a4d\u304c\u65e2\u77e5\u306a\u3089\u4f55\u3067\u3082\u826f\u3044\u3002"})]}),(0,r.jsxs)(o.Z,{children:[(0,r.jsx)("h2",{children:"\u30d7\u30ed\u30b0\u30e9\u30e0\u3092\u4f5c\u308b\u305f\u3081\u306b\u5fc5\u8981\u306a\u3082\u306e"}),(0,r.jsxs)("p",{children:["R, L_BOX \u306e\u305f\u3081\u306e\u5909\u6570\u3068\uff0c",(0,r.jsxs)("ul",{className:"mt-3 mb-3",children:[(0,r.jsx)("li",{children:"\u30e9\u30f3\u30c0\u30e0\u306a\u6d6e\u52d5\u5c0f\u6570\u70b9\u6570\u3092\u3064\u304f\u308b\u3082\u306e"}),(0,r.jsx)("li",{children:"\u30e9\u30f3\u30c0\u30e0\u306a\u70b9(x,y)\u3092\u3064\u304f\u308b\u3082\u306e"}),(0,r.jsx)("li",{children:"\u5186\u306e\u4e0a\u306b\u70b9\u304c\u4e57\u3063\u3066\u3044\u308b\u304b\u5224\u65ad\u3059\u308b\u3082\u306e"}),(0,r.jsx)("li",{children:"\u6bd4\u3092\u8a08\u7b97\u3057\u9762\u7a4d\u3092\u63a8\u5b9a\u3059\u308b\u3082\u306e"})]}),"\u3042\u305f\u308a\u306e\u6a5f\u80fd\u3092\u7528\u610f\u3057\u3066\u4f7f\u3048\u3070\u76ee\u7684\u306e\u30d7\u30ed\u30b0\u30e9\u30e0\u3092\u4f5c\u308c\u305d\u3046\u3067\u3042\u308b\u3002"]})]}),(0,r.jsxs)(o.Z,{children:[(0,r.jsx)("h2",{children:"\u30e9\u30f3\u30c0\u30e0\u306a\u6d6e\u52d5\u5c0f\u6570\u70b9\u6570"}),(0,r.jsx)("p",{children:"\u6570\u5024\u8a08\u7b97\u306e\u30d7\u30ed\u30b0\u30e9\u30e0\u3067\u4f7f\u3046\u4e71\u6570\u306f\uff0c\u5b8c\u5168\u306a\u4e71\u6570\u3067\u306f\u306a\u304f\uff0c \u9577\u3044\u5468\u671f\u6027\u3092\u3082\u3064\u4e71\u96d1\u306a\u6570\uff08\u7591\u4f3c\u4e71\u6570\uff09\u3092\u4f7f\u3046\u3053\u3068\u304c\u591a\u3044\u3002 \u3053\u306e\u7591\u4f3c\u4e71\u6570\u306f\uff0c\u3044\u3064\u3067\u3082\u6c7a\u307e\u3063\u305f\u9806\u756a\u3067\u751f\u6210\u3055\u308c\u308b\u6570\u3067\u3042\u308a\uff0c \u306a\u306b\u304b\u4e0d\u5177\u5408\u304c\u751f\u3058\u305f\u3068\u304d\u306b\u305d\u306e\u554f\u984c\u3092\u78ba\u5b9f\u306b\u518d\u73fe\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308b\u305f\u3081\u90fd\u5408\u304c\u3088\u3044\u3053\u3068\uff0c \u771f\u306e\u4e71\u6570\u3088\u308a\u3082\u9ad8\u901f\u306b\u4f5c\u308a\u51fa\u3059\u3053\u3068\u304c\u3067\u304d\u308b\u3053\u3068\u304c\u5229\u70b9\u3067\u3042\u308a\u91cd\u5b9d\u3055\u308c\u3066\u3044\u308b\u3002"}),(0,r.jsxs)("p",{children:["\u81ea\u5206\u3067\u4f5c\u308b\u65b9\u6cd5\u3082\u3042\u308b\u304c\uff0c\u672c\u7b4b\u304b\u3089\u96e2\u308c\u3066\u3057\u307e\u3046\u306e\u3067\uff0c\u4eca\u56de\u306f\u30e1\u30eb\u30bb\u30f3\u30cc\u30fb\u30c4\u30a4\u30b9\u30bf\u3068\u3044\u3046\u65b9\u6cd5\u3092\u4f7f\u3063\u3066 \u7591\u4f3c\u4e71\u6570\u3092\u3064\u304f\u308b\u30d7\u30ed\u30b0\u30e9\u30e0\uff08\u30d8\u30c3\u30c0\uff09\u304c\u516c\u958b\u3055\u308c\u3066\u3044\u308b\u306e\u3067\uff0c\u305d\u308c\u3092\u4f7f\u3063\u3066\u30e9\u30f3\u30c0\u30e0\u306a\u6d6e\u52d5\u5c0f\u6570\u70b9\u6570\u3092\u5f97\u308b\u3053\u3068\u306b\u3059\u308b\u3002",(0,r.jsx)(d.Z,{uri:"/codes/lang-c/lib/MT.h",language:"c",expand:!0,download:!0}),"\u30e9\u30a4\u30bb\u30f3\u30b9\u306f\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9\u306e\u4e0a\u90e8\u306b\u66f8\u304b\u308c\u3066\u3044\u308b\u3002 \u3053\u308c\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3057\uff0c\u4f5c\u6210\u3059\u308b\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9\u306e\u7f6e\u304b\u308c\u308b\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306b\u914d\u7f6e\u3057\u3066\u307b\u3057\u3044\u3002"]}),(0,r.jsxs)("p",{children:["\u7591\u4f3c\u4e71\u6570\u3092\u4f5c\u308b\u305f\u3081\u306e\u3082\u3068\u306b\u306a\u308b\u6570\uff08\u30b7\u30fc\u30c9\uff09\u3092\u59cb\u3081\u306b\u8a2d\u5b9a\u3057\uff0c \u3072\u3068\u3064\u306e\u7591\u4f3c\u4e71\u6570 [0:1](\u3064\u307e\u308a\uff10\u4ee5\u4e0a\uff11\u4ee5\u4e0b) \u3092\u751f\u6210\u3059\u308b\u30d7\u30ed\u30b0\u30e9\u30e0\u306f\uff0c",(0,r.jsx)(d.Z,{uri:"/codes/lang-c/complexes/monte_carlo/random.c",language:"c",download:!0}),"\u306e\u3088\u3046\u306b\u66f8\u3051\u308b\u3002 #include \u3067\u30d8\u30c3\u30c0\u3092\u8aad\u307f\u8fbc\u3081\u308b\u304c ","<",">",' \u3067\u306f\u306a\u304f\u30af\u30aa\u30fc\u30c6\u30fc\u30b7\u30e7\u30f3 "" \u3067\u30d5\u30a1\u30a4\u30eb\u540d\u3092\u304f\u304f\u308b\u6c7a\u307e\u308b\u304c\u3042\u308b\u3002 init_genrand \u3067\u30b7\u30fc\u30c9\u306e\u8a2d\u5b9a\uff0cgenrand_real1 \u3067 [0:1] \u306e\u7591\u4f3c\u4e71\u6570\u3092\u751f\u6210\u3057\u3066\u3044\u308b\u3002 genrand_real1 \u306f\u547c\u3073\u51fa\u3059\u5ea6\u306b\u7570\u306a\u308b\u6570\u3092\u8fd4\u3059\uff08\u7591\u4f3c\u4e71\u6570\u3067\u3042\u308b\u305f\u3081\u9577\u3044\u5468\u671f\u3067\u306f\u540c\u3058\u6570\u304c\u751f\u6210\u3055\u308c\u308b\uff09\u3002']})]}),(0,r.jsxs)(o.Z,{children:[(0,r.jsx)("h2",{children:"\u30e9\u30f3\u30c0\u30e0\u306a\u70b9 (x, y) "}),(0,r.jsxs)("p",{children:["\u4e0a\u8a18\u306e\u95a2\u6570 genrand_real1 \u306f [0,1] \u306e\u7bc4\u56f2\u306e\u6570\u3092\u8fd4\u3059\u305f\u3081\uff0c[-0.5L_BOX,+0.5L_BOX] \u306e \u7bc4\u56f2\u3067\u30e9\u30f3\u30c0\u30e0\u306a\u5ea7\u6a19\u3092\u5f97\u308b\u305f\u3081\u306b\u306f\uff0c\u7bc4\u56f2\u3092\u5909\u66f4\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u3002 \u305d\u3053\u3067\uff0c\u305d\u306e\u305f\u3081\u306e\u6a5f\u80fd\u3092\u7528\u610f\u3059\u308b\u3002 \u7bc4\u56f2\u3092\u56fa\u5b9a\u3059\u308b\u3068\uff0c\u4ed6\u3067\u4f7f\u3046\u6a5f\u4f1a\u304c\u3042\u3063\u305f\u3068\u304d\u4f7f\u3044\u56de\u305b\u306a\u304f\u306a\u308b\u306e\u3067\uff0c \u6c4e\u7528\u6027\u3092\u3082\u305f\u305b\u308b\u3088\u3046 [begin,end] \u306e\u7bc4\u56f2\u306e \u4e71\u6570\u3092\u4f5c\u308b\u3088\u3046\u306a\u95a2\u6570\u3092\u3064\u304f\u308b\u3053\u3068\u306b\u3059\u308b\u3002 \u7bc4\u56f2\u3092 [0,1] \u304b\u3089 [begin,end] \u306b\u5909\u66f4\u3059\u308b\u306b\u306f\u5e45\u304c end-begin \u306b\u306a\u308a\uff0c \u59cb\u307e\u308a\u304c begin \u306b\u306a\u308c\u3070\u3088\u3044\u306e\u3067\uff0c",(0,r.jsx)(d.Z,{uri:"/codes/lang-c/complexes/monte_carlo/randomBetween.c",language:"c"}),"\u306e\u3088\u3046\u306b\u7bc4\u56f2\u3092\u5b9a\u3081\u308b begin \u3068 end \u3092\u5f15\u6570\u306b\u3068\u308a\uff0c \u7bc4\u56f2\u3092\u8abf\u6574\u3057\u305f\u4e71\u6570\u3092\u8fd4\u3059\u3088\u3046\u306a\u95a2\u6570\u306b\u3059\u308c\u3070\u826f\u3055\u305d\u3046\u3067\u3042\u308b\u3002"]}),(0,r.jsxs)("p",{children:["\u70b9\u306e\u5ea7\u6a19 x, y \u305d\u308c\u305e\u308c\u304c [-0.5L_BOX,+0.5L_BOX] \u306e\u7bc4\u56f2\u3067\u30e9\u30f3\u30c0\u30e0\u306a\u5024\u3092\u6301\u3064\u3088\u3046\u306b\u3059\u308b\u306b\u306f\uff0c \u95a2\u6570 randomBetween \u3092\u4f7f\u3063\u3066\uff0c",(0,r.jsx)(d.Z,{uri:"/codes/lang-c/complexes/monte_carlo/random_point.c",language:"c"}),"\u306e\u3088\u3046\u306b\u66f8\u3051\u3070\u3088\u3044\u3002"]}),(0,r.jsx)("p",{children:"\u3053\u306e\u307e\u307e\uff12\u3064\u306e\u6d6e\u52d5\u5c0f\u6570\u70b9\u6570\u3092\u70b9\u3068\u3057\u3066\u6271\u3044\u3064\u3064\uff0c\u30d7\u30ed\u30b0\u30e9\u30e0\u3092\u5b8c\u6210\u3055\u305b\u308b\u3053\u3068\u3082\u3067\u304d\u308b\u304c\uff0c \u5f8c\u3005\u4e0d\u4fbf\u306a\u306e\u3067\uff0c\u69cb\u9020\u4f53\u3092\u4f7f\u3063\u3066\u70b9\u3092\u8868\u3059\u3088\u3046\u306b\u3057\u305f\u3044\u3002"}),(0,r.jsxs)("p",{children:["\u70b9\u3092\u8868\u3059\u305f\u3081\u306e\u69cb\u9020\u4f53\u306f\uff0c",(0,r.jsx)(d.Z,{uri:"/codes/lang-c/complexes/monte_carlo/point.c",language:"c"}),"\u306e\u3088\u3046\u306b\u5b9a\u7fa9\u3059\u308c\u3070\u826f\u3055\u305d\u3046\u3067\u3042\u308b\u3002"]}),(0,r.jsxs)("p",{children:["\u3053\u3053\u307e\u3067\u8003\u3048\u305f\u3053\u3068\u304b\u3089\uff0c\u30e9\u30f3\u30c0\u30e0\u306a\u70b9\u3092\uff11\u3064\u3060\u3051\u4f5c\u308b\u30d7\u30ed\u30b0\u30e9\u30e0\u306f\uff0c",(0,r.jsx)(d.Z,{uri:"/codes/lang-c/complexes/monte_carlo/random_point_demo.c",language:"c",expand:!0,download:!0}),"\u306e\u3088\u3046\u306b\u306a\u308b\u3002"]})]}),(0,r.jsxs)(o.Z,{children:[(0,r.jsx)("h2",{children:"\u5186\u306e\u4e0a\u306b\u70b9\u304c\u4e57\u3063\u3066\u3044\u308b\u304b"}),(0,r.jsx)("p",{children:"\u5186\u306e\u4e2d\u5fc3\u3068\u70b9\u306e\u9593\u306e\u8ddd\u96e2\u304c\u534a\u5f84\u4ee5\u4e0b\u3067\u3042\u308c\u3070\uff0c\u305d\u306e\u70b9\u306f\u5186\u306b\u542b\u307e\u308c\u3066\u3044\u308b\u3002 \u3053\u308c\u306b\u57fa\u3065\u3044\u3066\u5224\u5b9a\u3092\u884c\u3046\u3002"}),(0,r.jsxs)("p",{children:["\u5186\u306f\uff0c\u4e2d\u5fc3\u70b9\u3068\u534a\u5f84\u3067\u5b9a\u307e\u308b\u56f3\u5f62\u306a\u306e\u3067\uff0c\u305d\u306e\u60c5\u5831\u3092\u3072\u3068\u3064\u306b\u307e\u3068\u3081\u3089\u308c\u308b\u3088\u3046\u306a\u69cb\u9020\u4f53\u3092\u5b9a\u7fa9\u3059\u308b\u3068\uff0c",(0,r.jsx)(d.Z,{uri:"/codes/lang-c/complexes/monte_carlo/Circle.c",language:"c"}),"\u306e\u3088\u3046\u306b\u306a\u308b\u3002\u4e2d\u5fc3\u70b9\u3092\u8868\u73fe\u3059\u308b\u305f\u3081\u306b\u524d\u8ff0\u306e\u69cb\u9020\u4f53 Point \u3092\u4f7f\u3063\u3066\u3044\u308b\u3002\u305d\u308c\u306b\u534a\u5f84\u3092\u5408\u308f\u305b\u305f\u3060\u3051\u3067\u3042\u308b\u3002 \u3053\u308c\u3092\u4f7f\u3046\u3053\u3068\u3067\uff0c\u4f8b\u3048\u3070\u4e2d\u5fc3 (0, 0) \u3067\u534a\u5f84 1 \u306e\u5186\u306a\u3089",(0,r.jsx)(d.Z,{source:"Circle c = {{0.0,0.0},1.0};",lang:"c"}),"\u306e\u3088\u3046\u306b\u5909\u6570\u3068\u3057\u3066\u4f5c\u308c\u308b\u3088\u3046\u306b\u306a\u308b\u3002"]}),(0,r.jsxs)("p",{children:["\u3042\u308b\u70b9\u304c\uff0c\u3042\u308b\u5186\u306b\u542b\u307e\u308c\u3066\u3044\u308b\u304b\u3069\u3046\u304b\u3092\u5224\u5b9a\u3059\u308b\u95a2\u6570\u3092\u4f5c\u308b\u969b\uff0c \u8ddd\u96e2\u3092\u6c42\u3081\u308b\u305f\u3081\u306b\u5e73\u65b9\u6839\u3068\u4e8c\u4e57\u3092\u8a08\u7b97\u3059\u308b\u3053\u3068\u306b\u306a\u308b\u3002 \u3053\u308c\u3089\u306e\u8a08\u7b97\u306e\u305f\u3081\u306b\uff0cmath.h \u3068\u3044\u3046\u30d8\u30c3\u30c0\u306b\u3042\u308b sqrt \u95a2\u6570\u3068 pow \u95a2\u6570\u3092\u5229\u7528\u3067\u304d\u308b\u306e\u3067\u305d\u3046\u3059\u308b\u3002 \u5224\u5b9a\u306e\u305f\u3081\u306e\u95a2\u6570\u306e\u5f15\u6570\u306b\u306f\u70b9\u3068\u5186\u3092\u53d7\u3051\u53d6\u308c\u3070\u3044\u3044\u306e\u3067\uff0c",(0,r.jsx)(d.Z,{uri:"/codes/lang-c/complexes/monte_carlo/isInside.c",language:"c"}),"\u306e\u3088\u3046\u306b\u66f8\u3051\u308b\u3002"]})]}),(0,r.jsxs)(o.Z,{children:[(0,r.jsx)("h2",{children:"\u6bd4\u3092\u8a08\u7b97\u3057\u9762\u7a4d\u3092\u63a8\u5b9a\u3059\u308b"}),(0,r.jsx)("p",{children:"\u30b5\u30f3\u30d7\u30ea\u30f3\u30b0\u306b\u5fc5\u8981\u306a\u3082\u306e\u3092\u7528\u610f\u3067\u304d\u305f\u306e\u3067\uff0c\u305d\u308c\u3089\u3092\u4f7f\u3063\u3066\u9762\u7a4d\u306e\u6bd4\u3092\u8a08\u7b97\u3059\u308b\u3002 \u3044\u304f\u3064\u30b5\u30f3\u30d7\u30eb\u3092\u53d6\u308c\u3070\u5024\u304c\u53ce\u675f\u3059\u308b\u306e\u304b\u3088\u304f\u5206\u304b\u3089\u306a\u3044\u306e\u3067\uff0c\u30b5\u30f3\u30d7\u30eb\u6570\u3092\u5897\u3084\u3057\u306a\u304c\u3089 \u63a8\u5b9a\u3092\u6539\u5584\u3059\u308b\u3088\u3046\u306b\u3057\u305f\u3044\u3002"}),(0,r.jsxs)("p",{children:["\u5186\u306b\u542b\u307e\u308c\u3066\u3044\u305f\u70b9\u306e\u6570\u306e\u30ab\u30a6\u30f3\u30c8\u7528\u306e\u5909\u6570 count \u3068\uff0c\u30b5\u30f3\u30d7\u30eb\u6570\u306e\u30ab\u30a6\u30f3\u30c8\u7528\u306e\u5909\u6570 numSample \u3092\u7528\u610f\u3057\u3066\u304a\u304d\uff0c",(0,r.jsx)(d.Z,{uri:"/codes/lang-c/complexes/monte_carlo/sampling.c",language:"c"}),"\u306e\u3088\u3046\u306b\u6761\u4ef6\u5206\u5c90\u3055\u305b\u308b\u3053\u3068\u3067\uff0c\u305d\u308c\u305e\u308c\u306e\u6570\u3092\u30ab\u30a6\u30f3\u30c8\u3059\u308c\u3070\u826f\u3055\u305d\u3046\u3067\u3042\u308b\u3002"]}),(0,r.jsxs)("p",{children:["\u30ab\u30a6\u30f3\u30c8\u3057\u305f\u305d\u308c\u305e\u308c\u306e\u6570\u304b\u3089\u9762\u7a4d\u3092\u63a8\u5b9a\u3057\u305f\u7b54\u3048\u3092\u51fa\u529b\u3059\u308b\u90e8\u5206\u306f\uff0c",(0,r.jsx)(d.Z,{source:'printf("%f\\n", pow(L_BOX, 2) * ((double)count / numSample));',lang:"c"}),"\u306e\u3088\u3046\u306b\u306a\u308b\u3002count, numSample \u304c\u6574\u6570\u578b\u3067\u3042\u308b\u306a\u3089\u5272\u3063\u305f\u7b54\u3048\u3082\u6574\u6570\u3067 \u8868\u3055\u308c\uff0c\u7b54\u3048\u306e\u7cbe\u5ea6\u304c\u60aa\u304f\u306a\u308b\u3002\u3053\u308c\u3092\u56de\u907f\u3059\u308b\u305f\u3081\u306b\uff0ccount \u3092\u3082\u3068\u306b\u6d6e\u52d5\u5c0f\u6570\u70b9\u6570\u3092\u4f5c\u308a\u305d\u308c\u3092\u4f7f\u3046\u3088\u3046\u306b (double) \u3092 count \u306e\u524d\u306b\u3064\u3051\u3066\u3044\u308b\uff08\u3053\u308c\u3092\u30ad\u30e3\u30b9\u30c8\u3059\u308b\u3068\u3044\u3046\uff09\u3002 \u3053\u308c\u306b\u3088\u308a\uff0c\u6d6e\u52d5\u5c0f\u6570\u70b9\u6570/\u6574\u6570\u306b\u306a\u308a\uff0c\u7b54\u3048\u304c\u6d6e\u52d5\u5c0f\u6570\u70b9\u6570\u3067\u5f97\u3089\u308c\u308b\u3002"]}),(0,r.jsxs)("p",{children:["\u8a08\u7b97\u3059\u308b\u305f\u3073\u306b\u8868\u793a\u3059\u308b\u3068\u304d\uff0c\u9577\u3044\u51fa\u529b\u3092\u907f\u3051\u305f\u3044\u306a\u3089\uff0c",(0,r.jsx)(d.Z,{source:'printf("%f\\r", pow(L_BOX, 2) * ((double)count / numSample));',lang:"c"}),"\u306e\u3088\u3046\u306b\uff0c\u6539\u884c \\n \u3067\u306f\u306a\u304f\u5fa9\u5e30 \\r \u3092\u4f7f\u3063\u3066\uff0c\u66f8\u3044\u3066\u306f\u6d88\u3057\u3092\u7e70\u308a\u8fd4\u3059\u3088\u3046\u306a\u30d7\u30ed\u30b0\u30e9\u30e0\u306b\u3059\u308b\u65b9\u6cd5\u304c\u3042\u308b\u3002"]}),(0,r.jsx)("p",{children:"\u30e9\u30f3\u30c0\u30e0\u306a\u70b9\u3092\u751f\u6210\u3059\u308b\u7e70\u308a\u8fd4\u3057\u306f\uff0c\u7121\u9650\u30eb\u30fc\u30d7\u306b\u306a\u308b\u3053\u3068\u3092\u907f\u3051\u308b\u305f\u3081\u306b\u6700\u5927\u306e\u56de\u6570\u3092\u6c7a\u3081\u3066\u304a\u304f\u3053\u3068\u306b\u3059\u308b\u3002 \u7121\u9650\u30eb\u30fc\u30d7\u306b\u3042\u3048\u3066\u3059\u308b\u306b\u306f\uff0cwhile(true) \u3084 for(;;) \u3068\u66f8\u304f\u3053\u3068\u304c\u3042\u308b\u304c\uff0c \u3053\u308c\u306f\u52d5\u4f5c\u672a\u5b9a\u7fa9\u3092\u5f15\u304d\u8d77\u3053\u3059\u3053\u3068\u304c\u3042\u308b\u305f\u3081\uff0c\u8abf\u3079\u7269\u306e\u9014\u4e2d\u3069\u3053\u304b\u3067\u898b\u304b\u3051\u305f\u3068\u3057\u3066\u3082\u63a7\u3048\u3066\u6b32\u3057\u3044\u3002"}),(0,r.jsxs)("p",{children:["\u4ee5\u4e0a\u306e\u3053\u3068\u3092\u8003\u3048\u3064\u3064\uff0c\u30d7\u30ed\u30b0\u30e9\u30e0\u3092\u7d44\u3080\u3068\uff0c",(0,r.jsx)(d.Z,{uri:"/codes/lang-c/complexes/monte_carlo/mc.c",language:"c",expand:!0,download:!0}),"\u306e\u3088\u3046\u306b\u306a\u308b\u3002 \u307e\u305a\u306f R=1 \u306e\u5834\u5408\u306b\u3064\u3044\u3066\u9762\u7a4d\u3092\u6c42\u3081\uff0c\u30b5\u30f3\u30d7\u30eb\u304c\u591a\u304f\u306a\u308b\u306b\u3064\u308c\u3066\u6b63\u78ba\u306a\u5186\u5468\u7387\u306b\u63a8\u5b9a\u3057\u305f\u5024\u304c \u53ce\u675f\u3057\u3066\u3044\u304f\u304b\u78ba\u304b\u3081\u3066\u6b32\u3057\u3044\u3002"]})]})]})]})})]})}},8489:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/lang-c/complexes/monte_carlo",function(){return t(3825)}])},3272:function(e){e.exports={abstract:"abstract_abstract__2J1_W"}},4091:function(e){e.exports={grid:"documentGrid_grid__5YgcL",center:"documentGrid_center__1Iy7m"}},4824:function(e){e.exports={element:"contentElement_element__2zPOC"}},5513:function(e){e.exports={width:"widthContainer_width__bLQd8"}}},function(e){e.O(0,[774,264,779,433,888,179],(function(){return n=8489,e(e.s=n);var n}));var n=e.O();_N_E=n}]);