(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[453],{603:function(e,n,t){"use strict";t.d(n,{Z:function(){return l}});var r=t(5893),s=t(3272),i=t.n(s);function l(e){return(0,r.jsx)("div",{className:i().abstract,style:e.styles,children:e.children})}},1221:function(e,n,t){"use strict";t.d(n,{Z:function(){return M}});var r=t(5893),s=t(3349),i=t(6156),l=t(2949),c=t(6610),a=t(5991),o=t(5255),h=t(6089),d=t(7608),u=t(7294),x=t(3300),p=t.n(x),j=t(9235),m=t(7694),f=t(5005),g=t(7625),Z=t(767),v=t(8774),y=t(4370),b=t(3253),_=t.n(b);function w(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function O(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?w(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):w(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function k(e){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=(0,d.Z)(e);if(n){var s=(0,d.Z)(this).constructor;t=Reflect.construct(r,arguments,s)}else t=r.apply(this,arguments);return(0,h.Z)(this,t)}}function I(e){var n={backgroundColor:"#f6f8fa",fontSize:"14px",padding:"7px 1rem 5px 1rem",margin:"0",overflow:"auto"};return Object.keys(e).includes("maxHeight")&&(n.maxHeight=e.maxHeight),(0,r.jsx)("pre",{style:n,children:e.children})}var C=function(e){(0,o.Z)(t,e);var n=k(t);function t(e){var r;return(0,c.Z)(this,t),(r=n.call(this,e)).state={loaded:!1,source:"",showModal:!1},r.maxHeight="15rem",r.margin="",e.maxHeight&&(r.maxHeight=e.maxHeight),r}return(0,a.Z)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.uri?p()(this.props.uri).then((function(e){return e.text()})).then((function(e){var n=e.split("\n");return""===n.slice(-1)[0]&&n.pop(),n.join("\n")})).then((function(n){e.setState({loaded:!0,source:n})})).catch((function(n){return e.setState({loaded:!0,source:n})})):(this.setState({loaded:!0,source:this.props.source}),this.margin="mt-3 mb-3")}},{key:"render",value:function(){var e=this,n=(j.lG.theme,(0,l.Z)(j.lG,["theme"]));return(0,r.jsx)("div",{className:this.margin,children:(0,r.jsx)(j.ZP,O(O({theme:m.Z},n),{},{code:this.state.source,language:this.props.language,children:function(n){var t=n.className,s=n.style,i=n.tokens,l=n.getLineProps,c=n.getTokenProps;return(0,r.jsx)(I,{className:t,style:s,maxHeight:e.maxHeight,children:i.map((function(e,n){return(0,r.jsx)("div",O(O({},l({line:e,key:n})),{},{children:e.map((function(e,n){return(0,r.jsx)("span",O({},c({token:e,key:n})))}))}))}))})}}))})}}]),t}(u.Component),N={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",maxHeight:"100vh",transform:"translate(-50%, -50%)"}},M=function(e){(0,o.Z)(t,e);var n=k(t);function t(e){var r;return(0,c.Z)(this,t),(r=n.call(this,e)).state={showModal:!1},r.handleOpenModal=r.handleOpenModal.bind((0,s.Z)(r)),r.handleCloseModal=r.handleCloseModal.bind((0,s.Z)(r)),r}return(0,a.Z)(t,[{key:"handleOpenModal",value:function(){this.setState({showModal:!0})}},{key:"handleCloseModal",value:function(){this.setState({showModal:!1})}},{key:"render",value:function(){return this.props.uri?(0,r.jsxs)("div",{style:{margin:"8px 0 8px 0"},children:[(0,r.jsx)(C,O({},this.props)),(0,r.jsxs)("div",{style:{textAlign:"right",padding:"5px 0 5px 0"},children:[this.props.expand&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(f.Z,{variant:"outline-dark",size:"md",onClick:this.handleOpenModal,children:(0,r.jsx)(g.G,{icon:v.TT,style:{width:"1rem"}})}),(0,r.jsxs)(_(),{isOpen:this.state.showModal,onRequestClose:this.handleCloseModal,style:N,children:[(0,r.jsx)(C,O(O({},this.props),{},{maxHeight:"80vh"})),(0,r.jsx)("div",{style:{textAlign:"right"},children:(0,r.jsx)(f.Z,{variant:"outline-dark",size:"md",onClick:this.handleCloseModal,children:(0,r.jsx)(g.G,{icon:y.nY,style:{width:"1rem"}})})})]})]}),this.props.download&&(0,r.jsx)("a",{href:this.props.uri,download:!0,className:"ml-1",children:(0,r.jsx)(f.Z,{variant:"outline-primary",size:"md",className:"m-0 mr-1",children:(0,r.jsx)(g.G,{icon:Z.q7,style:{width:"1rem"}})})})]})]}):(0,r.jsx)(C,O({},this.props))}}]),t}(u.Component)},6905:function(e,n,t){"use strict";t.d(n,{Z:function(){return l}});var r=t(5893),s=t(4824),i=t.n(s);function l(e){return(0,r.jsx)("div",{className:i().element,style:e.styles,children:e.children})}},5642:function(e,n,t){"use strict";t.d(n,{Z:function(){return l}});var r=t(5893),s=t(4091),i=t.n(s);function l(e){return(0,r.jsx)("div",{className:i().grid,children:e.children})}},8237:function(e,n,t){"use strict";t.d(n,{Z:function(){return a}});var r=t(5893),s=t(3062),i=t(4315),l=t(4505),c=t(1664);t(7625);function a(){return(0,r.jsx)("div",{className:"sticky-top",children:(0,r.jsxs)(s.Z,{bg:"light",style:{paddingRight:"7rem"},children:[(0,r.jsx)(c.default,{href:"/lang-c",className:"font-weight-bold",children:(0,r.jsx)("span",{className:"text-dark pr-3",children:"C \u8a00\u8a9e\u5165\u9580"})}),(0,r.jsx)(s.Z.Toggle,{"aria-controls":"nav2"}),(0,r.jsx)(s.Z.Collapse,{id:"nav2",children:(0,r.jsxs)(i.Z,{className:"ml-auto mr-auto",children:[(0,r.jsx)(l.Z.Divider,{}),(0,r.jsxs)(l.Z,{title:"\u306f\u3058\u3081\u306b",id:"basic-nav-dropdown",children:[(0,r.jsx)(l.Z.Item,{href:"/lang-c/introductions/stance",children:"\u30d7\u30ed\u30b0\u30e9\u30df\u30f3\u30b0\u3068\u306f\uff1f"}),(0,r.jsx)(l.Z.Item,{href:"/lang-c/introductions/install",children:"\u74b0\u5883\u69cb\u7bc9"}),(0,r.jsx)(l.Z.Item,{href:"/lang-c/introductions/hello",children:"\u306f\u3058\u3081\u3066\u306e\u30b3\u30f3\u30d1\u30a4\u30eb"}),(0,r.jsx)(l.Z.Item,{href:"/lang-c/introductions/trial",children:"\u52b9\u7387\u3088\u304f\u7fd2\u5f97\u3059\u308b\u305f\u3081\u306b"})]})]})}),(0,r.jsx)(s.Z.Toggle,{"aria-controls":"nav2"}),(0,r.jsx)(s.Z.Collapse,{id:"nav2",children:(0,r.jsx)(i.Z,{className:"ml-auto mr-auto",children:(0,r.jsxs)(l.Z,{title:"\u69cb\u6587\u30fb\u898f\u5247",id:"basic-nav-dropdown",children:[(0,r.jsx)(l.Z.Item,{href:"/lang-c/elements/literal_and_variable",children:"\u30ea\u30c6\u30e9\u30eb\u3068\u5909\u6570"}),(0,r.jsx)(l.Z.Item,{href:"/lang-c/elements/output",children:"\u6a19\u6e96\u51fa\u529b"}),(0,r.jsx)(l.Z.Item,{href:"/lang-c/elements/argv",children:"\u30b3\u30de\u30f3\u30c9\u30e9\u30a4\u30f3\u5f15\u6570"}),(0,r.jsx)(l.Z.Item,{href:"/lang-c/elements/statement",children:"\u5ba3\u8a00\u6587\u30fb\u5b9f\u884c\u6587"}),(0,r.jsx)(l.Z.Item,{href:"/lang-c/elements/array",children:"\u914d\u5217"}),(0,r.jsx)(l.Z.Item,{href:"/lang-c/elements/structure",children:"\u69cb\u9020\u4f53"}),(0,r.jsx)(l.Z.Item,{href:"/lang-c/elements/operator",children:"\u6f14\u7b97\u5b50"}),(0,r.jsx)(l.Z.Item,{href:"/lang-c/elements/conditional_branch",children:"\u6761\u4ef6\u5206\u5c90"}),(0,r.jsx)(l.Z.Item,{href:"/lang-c/elements/loop",children:"\u53cd\u5fa9"}),(0,r.jsx)(l.Z.Item,{href:"/lang-c/elements/function",children:"\u95a2\u6570"}),(0,r.jsx)(l.Z.Item,{href:"/lang-c/elements/file_input",children:"\u30d5\u30a1\u30a4\u30eb\u5165\u529b"})]})})}),(0,r.jsx)(s.Z.Toggle,{"aria-controls":"nav3"}),(0,r.jsx)(s.Z.Collapse,{id:"nav3",children:(0,r.jsx)(i.Z,{className:"ml-auto mr-auto",children:(0,r.jsxs)(l.Z,{title:"\u7d44\u307f\u5408\u308f\u305b",id:"basic-nav-dropdown",children:[(0,r.jsx)(l.Z.Item,{href:"/lang-c/complexes/bubble_sort",children:"\u30d0\u30d6\u30eb\u30bd\u30fc\u30c8"}),(0,r.jsx)(l.Z.Item,{href:"/lang-c/complexes/file_input",children:"\u30d5\u30a1\u30a4\u30eb\u306e\u8aad\u307f\u8fbc\u307f"}),(0,r.jsx)(l.Z.Item,{href:"/lang-c/complexes/monte_carlo",children:"\u30e2\u30f3\u30c6\u30ab\u30eb\u30ed\u6cd5"})]})})}),(0,r.jsx)(s.Z.Toggle,{"aria-controls":"nav4"}),(0,r.jsx)(s.Z.Collapse,{id:"nav4",children:(0,r.jsx)(i.Z,{className:"ml-auto mr-auto",children:(0,r.jsxs)(l.Z,{title:"\u6f14\u7fd2",id:"basic-nav-dropdown",children:[(0,r.jsx)(l.Z.Item,{href:"/lang-c/subjects/linear_search",children:"\u7dda\u578b\u63a2\u7d22"}),(0,r.jsx)(l.Z.Item,{href:"/lang-c/subjects/bubble_sort",children:"\u30d0\u30d6\u30eb\u30bd\u30fc\u30c8\u6539"}),(0,r.jsx)(l.Z.Item,{href:"/lang-c/subjects/monte_carlo",children:"\u9762\u7a4d\u306e\u8a08\u7b97"})]})})}),(0,r.jsx)(s.Z.Toggle,{"aria-controls":"nav5"}),(0,r.jsx)(s.Z.Collapse,{id:"nav5",children:(0,r.jsx)(i.Z,{className:"ml-auto mr-auto",children:(0,r.jsx)(l.Z,{title:"\u305d\u306e\u4ed6",id:"basic-nav-dropdown",children:(0,r.jsx)(l.Z.Item,{href:"/lang-c/input_samples",children:"\u5165\u529b\u30d5\u30a1\u30a4\u30eb\u306e\u30b5\u30f3\u30d7\u30eb"})})})})]})})}},7074:function(e,n,t){"use strict";t.d(n,{Z:function(){return l}});var r=t(5893),s=t(5513),i=t.n(s);function l(e){return(0,r.jsx)("div",{className:i().width,children:e.children})}},6239:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return u}});var r=t(5893),s=t(9008),i=t(8237),l=t(7074),c=t(603),a=t(5642),o=t(6905),h=t(1221),d=t(1664);function u(){return(0,r.jsxs)("div",{children:[(0,r.jsxs)(s.default,{children:[(0,r.jsx)("title",{children:"\u52b9\u7387\u3088\u304f\u7fd2\u5f97\u3059\u308b\u305f\u3081\u306b"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,r.jsx)(i.Z,{}),(0,r.jsx)("main",{children:(0,r.jsx)(l.Z,{children:(0,r.jsxs)(a.Z,{children:[(0,r.jsxs)(c.Z,{children:[(0,r.jsx)("h1",{children:"\u52b9\u7387\u3088\u304f\u7fd2\u5f97\u3059\u308b\u305f\u3081\u306b"}),(0,r.jsx)("p",{children:"\u30d7\u30ed\u30b0\u30e9\u30df\u30f3\u30b0\u3067\u5fc5\u8981\u306a\u8003\u3048\u65b9\u3084\u6280\u8853\u3092\u7fd2\u5f97\u3059\u308b\u969b\uff0c\u8aac\u660e\u6587\u3092\u8aad\u3093\u3060\u3060\u3051\u3067\u306f\u5b9a\u7740\u3057\u306a\u3044\u305f\u3081\uff0c\u8aad\u3093\u3060\u3053\u3068\u3092\u3082\u3068\u306b\u81ea\u5206\u306a\u308a\u306b\u8a66\u884c\u932f\u8aa4\u3059\u308b\u904e\u7a0b\u3092\u3068\u308b\u3053\u3068\u304c\u975e\u5e38\u306b\u91cd\u8981\u3067\u3042\u308b\u3002\u305d\u3057\u3066\u305d\u306e\u8a66\u884c\u932f\u8aa4\u3082\u3084\u307f\u304f\u3082\u306b\u884c\u3046\u306e\u3067\u306f\u306a\u304f\uff0c\u72d9\u3044\u3092\u6301\u3063\u3066\u884c\u3046\u3053\u3068\u304c\u5927\u5207\u3067\u3042\u308b\u3002"})]}),(0,r.jsxs)(o.Z,{children:[(0,r.jsx)("h2",{children:"\u6642\u9593\u304c\u304b\u304b\u308b\u539f\u56e0"}),(0,r.jsx)("p",{children:"\u30d7\u30ed\u30b0\u30e9\u30e0\u3092\u66f8\u304f\u3053\u3068\u306f\uff0c\u4f55\u3089\u304b\u306e\u76ee\u7684\u306e\u305f\u3081\u306b\uff0c\u8a00\u8a9e\u306e\u30eb\u30fc\u30eb\u3092\u5b88\u308a\u3064\u3064\u51e6\u7406\u3092\u66f8\u304f\u3068\u3044\u3046\u3053\u3068\u3067\u3042\u308b\u3002\u305f\u3060\u6c7a\u307e\u308a\u3054\u3068\u3092\u7406\u89e3\u3057\u305f\u3060\u3051\u3067\u306f\uff0c\u305d\u308c\u3092\u3069\u3046\u6d3b\u7528\u3057\u3066\u826f\u3044\u3082\u306e\u304b\u5206\u304b\u308a\u306b\u304f\u304f\uff0c\u3053\u306e\u30eb\u30fc\u30eb\u3068\u7528\u9014\u306e\u9593\u306e\u7e4b\u304c\u308a\u306e\u4e0d\u660e\u77ad\u3055\u304c\u5b66\u7fd2\u3092\u9045\u304f\u3059\u308b\u5927\u304d\u306a\u8981\u56e0\u3068\u306a\u308b\u3002"}),(0,r.jsx)("p",{children:"\u306a\u306b\u304b\u8aac\u660e\u3057\u305f\u3044\u69cb\u6587\uff08\u30d7\u30ed\u30b0\u30e9\u30e0\u306e\u66f8\u304d\u65b9, \u30eb\u30fc\u30eb\uff09\u304c\u3042\u308a\uff0c\u305d\u306e\u305f\u3081\u306b\u305d\u306e\u69cb\u6587\u3092\u4f7f\u3063\u305f\u77ed\u3081\u306e\u610f\u5473\u306e\u306a\u3044\u30b5\u30f3\u30d7\u30eb\u30b3\u30fc\u30c9\u3092\u898b\u305b\u308b\u3053\u3068\u306f\uff0c\u66f8\u7c4d\u7b49\u3067\u3088\u304f\u3042\u308b\u304c\uff0c\u3053\u308c\u306f\u5b9f\u969b\u306e\u7528\u9014\u3068\u304b\u3051\u96e2\u308c\u305f\u3082\u306e\u3067\u3042\u3063\u305f\u308a\u3059\u308b\u3002\u305d\u306e\u305f\u3081\uff0c\u8003\u3048\u306a\u304c\u3089\u8aad\u3080\u8aad\u8005\u306f\u300c\u3053\u308c\u306f\u610f\u5473\u3042\u308b\u306e\u304b\uff1f\u4ed6\u306e\u66f8\u304d\u65b9\u306e\u307b\u3046\u304c\u3088\u3044\u306e\u3067\u306f\uff1f\u300d\u3068\u5438\u53ce\u3059\u308b\u306e\u3092\u3084\u3081\u305f\u308a\uff0c\u3042\u307e\u308a\u8003\u3048\u306a\u3044\u8aad\u8005\u306f\u300c...\u300d\u3068\u305f\u3060\u5199\u7d4c\u3059\u308b\u3060\u3051\u3067\u306a\u306b\u304c\u306a\u3093\u3060\u304b\u5206\u304b\u3089\u305a\uff0c\u3044\u305a\u308c\u306b\u3057\u3066\u3082\u4f7f\u3046\u3079\u304d\u3068\u3053\u308d\u3067\u305d\u306e\u69cb\u6587\u3092\u4f7f\u3048\u306a\u3044\u3053\u3068\u304c\u3042\u308a\uff0c\u6642\u9593\u3092\u304b\u3051\u305f\u5272\u306b\u5b66\u7fd2\u3067\u304d\u306a\u3044\u4e8b\u614b\u304c\u751f\u3058\u308b\u3053\u3068\u304c\u3042\u308b\u3002"}),(0,r.jsx)("p",{children:"\u30d7\u30ed\u30b0\u30e9\u30df\u30f3\u30b0\u3092\u7fd2\u5f97\u3059\u308b\u3068\u304d\uff0c\u5927\u91cf\u306b\u77e5\u3089\u306a\u3044\u3053\u3068\u304c\u51fa\u3066\u304d\u3066\u30d1\u30cb\u30c3\u30af\u306b\u306a\u308a\u304c\u3061\u3067\u3042\u308b\u3002\u3057\u304b\u3057\uff0c\u5927\u5207\u306a\u306e\u306f\u7d30\u304b\u3044\u3053\u3068\u9685\u304b\u3089\u3092\u899a\u3048\u308b\u3088\u308a\u3082\uff0c\u307e\u305a\u306f\u5927\u304d\u306a\u5358\u4f4d\u3067\u3069\u306e\u3088\u3046\u306a\u3082\u306e\u304c\u3042\u308b\u304b\u3092\u6349\u3048\u308b\u3053\u3068\u3067\u3042\u308b\u3002"})]}),(0,r.jsxs)(o.Z,{children:[(0,r.jsx)("h2",{children:"\u5358\u7d14\u306a\u30d7\u30ed\u30b0\u30e9\u30e0"}),(0,r.jsxs)("p",{children:["\u30d7\u30ed\u30b0\u30e9\u30e0\u306e\u6d41\u308c\u3092\u69cb\u6210\u3059\u308b\u3082\u306e\u306f\uff0c",(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"\u9806\u63a5\uff08\u9806\u756a\u901a\u308a\u306e\u51e6\u7406\uff09"}),(0,r.jsx)("li",{children:"\u9078\u629e\uff08\u6761\u4ef6\u306b\u3088\u308b\u51e6\u7406\uff09"}),(0,r.jsx)("li",{children:"\u53cd\u5fa9\uff08\u7e70\u308a\u8fd4\u3057\u306e\u51e6\u7406\uff09"})]}),"\u306e\uff13\u7a2e\u985e\u3060\u3051\u3067\u3042\u308b\u3002\u3042\u3068\u306f\u3053\u308c\u306b\u5909\u6570\u306e\u5b9a\u7fa9\u306a\u3069\u306e\u305f\u3081\u306b\uff0c\u5ba3\u8a00\u306e\u6587\u304c\u52a0\u308f\u308b\u3060\u3051\u3067\u3042\u308b\u3002"]}),(0,r.jsx)("p",{children:"\u4eca\u5f8c\uff0c\u591a\u304f\u306e\u30ad\u30fc\u30ef\u30fc\u30c9\u3084\u6c7a\u307e\u308a\u3054\u3068\u3092\u8aac\u660e\u3059\u308b\u3053\u3068\u306b\u306a\u308b\u304c\uff0c\u4e0a\u8a18\u306e\u3069\u308c\u306b\u542b\u307e\u308c\u308b\u5185\u5bb9\u306a\u306e\u304b\u3092\u307e\u305a\u306f\u6349\u3048\u3066\u307b\u3057\u3044\u3002\u305d\u3046\u3059\u308b\u3053\u3068\u3067\u540c\u3058\u30b0\u30eb\u30fc\u30d7\u306e\u30ad\u30fc\u30ef\u30fc\u30c9\u3068\u95a2\u9023\u4ed8\u3051\u3066\u7406\u89e3\u3092\u6df1\u3081\u3084\u3059\u304f\u306a\u308b\u3057\uff0c\u30d1\u30cb\u30c3\u30af\u3092\u6291\u5236\u3067\u304d\u308b\u3002"})]}),(0,r.jsxs)(o.Z,{children:[(0,r.jsx)("h2",{children:"\u6700\u5c0f\u9650\u306e\u30d7\u30ed\u30b0\u30e9\u30e0"}),(0,r.jsxs)("p",{children:["\u4f55\u3082\u3057\u306a\u3044\u3092\u3059\u308b\u30d7\u30ed\u30b0\u30e9\u30e0\u306f\uff0c",(0,r.jsx)(h.Z,{uri:"/codes/lang-c/introduction/minimum.c",language:"c"}),"\u306e\u3088\u3046\u306b\u66f8\u3051\u308b\u3002\u3053\u308c\u306f\u4e2d\u8eab\u304c\u7a7a\u306e main \u95a2\u6570\u3060\u3051\u3067\u3067\u304d\u3066\u3044\u308b\u30d7\u30ed\u30b0\u30e9\u30e0\u3067\u3042\u308b\u3002\u3053\u306e main \u95a2\u6570\u306f\u30d7\u30ed\u30b0\u30e9\u30e0\u306e\u306a\u304b\u306b\uff11\u3064\u3060\u3051\u66f8\u304f\u3082\u306e\u3067\uff0c\u3053\u308c\u304c\u547c\u3073\u51fa\u3055\u308c\u308b\u3053\u3068\u3067\u30d7\u30ed\u30b0\u30e9\u30e0\u306e\u51e6\u7406\u304c\u59cb\u307e\u308b\u3002return 0; \u306f\u51e6\u7406\u304c\u6b63\u5e38\u306b\u7d42\u308f\u3063\u305f\u3053\u3068\u3092\u901a\u77e5\u3059\u308b\u305f\u3081\u306e\u3082\u306e\u3067\u3042\u308b\u3002"]})]}),(0,r.jsxs)(o.Z,{children:[(0,r.jsx)("h2",{children:"\u69cb\u6587\u3092\u8a66\u3059\u305f\u3081\u306e\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8"}),(0,r.jsx)("p",{children:"\u5404\u30da\u30fc\u30b8\u306b\u66f8\u304b\u308c\u3066\u3044\u308b\u3053\u3068\u306b\u3064\u3044\u3066\uff0c\u697d\u306b\u8a66\u884c\u932f\u8aa4\u3059\u308b\u305f\u3081\u306e\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092\u63d0\u4f9b\u3059\u308b\u3002 happy.c \u3068 happy.h \u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3057\u3066\u4f7f\u304a\u3046\u3002 \u66f8\u304d\u63db\u3048\u308b\u306e\u306f happy.c \u306e\u65b9\u3067\u3042\u308b\u3002"}),(0,r.jsxs)("p",{children:["happy.c:",(0,r.jsx)(h.Z,{uri:"/codes/lang-c/introduction/happy.c",language:"c",download:!0}),"happy.h:",(0,r.jsx)(h.Z,{uri:"/codes/lang-c/lib/happy.h",language:"c",download:!0})]}),(0,r.jsx)("p",{children:"\u3053\u306e happy.c \u306e main \u95a2\u6570\u3092\u66f8\u304d\u63db\u3048\u3066\uff0c\u69cb\u6587\u3092\u8a66\u3059\u3053\u3068\u304c\u3067\u304d\u308b\u3002(\u305f\u3060\u3057\uff0c\u95a2\u6570\u3092\u4f5c\u308b\u305f\u3081\u306b\u306f main \u95a2\u6570\u306e\u5916\u3092\u6539\u5909\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u3002)"}),(0,r.jsx)("p",{children:"return EXIT_SUCCESS; \u306f return 0; \u3068\u540c\u3058\u610f\u5473\u3060\u304c\uff0c0 \u304c\u4f55\u3092\u8868\u3057\u3066\u3044\u308b\u304b\u3092\u306f\u3063\u304d\u308a\u3068\u4f1d\u3048\u308b\u305f\u3081\u306b\u5909\u66f4\u3057\u305f\uff08happy.h \u3067 include \u3057\u3066\u3044\u308b stdlib.h \u304c\u5fc5\u8981\uff09\u3002"})]}),(0,r.jsxs)(o.Z,{children:[(0,r.jsx)("h2",{children:"\u4f8b: \u5909\u6570\u3092\u4f5c\u3063\u3066\u307f\u308b"}),(0,r.jsxs)("p",{children:["\u4f8b\u3068\u3057\u3066\uff0c",(0,r.jsx)(d.default,{href:"/lang-c/elements/literal_and_variable",children:"\u30ea\u30c6\u30e9\u30eb\u3068\u5909\u6570"}),"\u306e\u5185\u5bb9\u306b\u3064\u3044\u3066\u8a66\u3057\u3066\u307f\u308b\u3002\u305d\u308c\u3067\u306f\u4f8b\u3068\u3057\u3066\uff0chappy.c \u3092\u6539\u5909\u3057\u3066\u5909\u6570\uff08\u6574\u6570\uff09\u3092\u4f5c\u3063\u3066\u307f\u308b\u3002"]}),(0,r.jsxs)("p",{children:[(0,r.jsx)(d.default,{href:"/lang-c/elements/literal_and_variable",children:"\u30ea\u30c6\u30e9\u30eb\u3068\u5909\u6570"}),"\u306e\u30da\u30fc\u30b8\u3092\u8aad\u3080\u3068\uff0c\u6574\u6570\u306e\u5909\u6570\u3092\u4f5c\u308b\u305f\u3081\u306b\u306f\uff0cint \u3068\u3044\u3046\u578b\u304c\u4f7f\u3048\u308b\u3089\u3057\u3044\u3053\u3068\u304c\u5206\u304b\u308b\u3002\u305d\u308c\u3067\u306f\u307e\u305a\u306f\u771f\u4f3c\u3066\u66f8\u3044\u3066\u307f\u3088\u3046\u3002",(0,r.jsx)(h.Z,{uri:"/codes/lang-c/introduction/int_trial.c",language:"c"}),"\u3059\u308b\u3068\uff0c\u3053\u306e\u3088\u3046\u306b\u66f8\u304d\u63db\u3048\u308b\u3053\u3068\u306b\u306a\u308b\u3002",(0,r.jsx)(h.Z,{source:"clang happy.c",language:"zsh"}),"\u3067\u30b3\u30f3\u30d1\u30a4\u30eb\u3057\uff0c",(0,r.jsx)(h.Z,{source:"./a.out",language:"zsh"}),"\u3067\u5b9f\u884c\u3057\u3066\u307f\u308b\u3068\uff0c",(0,r.jsx)(h.Z,{source:"",language:"zsh"}),"\u306e\u3088\u3046\u306b\u4f55\u3082\u8868\u793a\u3055\u308c\u306a\u3044\u3002\u30a8\u30e9\u30fc\u306f\u51fa\u3066\u3044\u306a\u3044\u306e\u3067\uff0c\u5909\u6570\u3092\u4f5c\u308b\u3053\u3068\u306f\u3067\u304d\u305f\u306e\u304b\u3082\u3057\u308c\u306a\u3044\u3002"]}),(0,r.jsx)("p",{children:"\u5909\u6570\u3092\u4f5c\u308b\uff08\u5ba3\u8a00\u3059\u308b\uff09\u30d7\u30ed\u30b0\u30e9\u30e0\u306b\u3057\u305f\u3082\u306e\u306e\uff0c\u305d\u308c\u3092\u8868\u793a\u3059\u308b\u51e6\u7406\u3092\u66f8\u3044\u3066\u3044\u306a\u3044\u305f\u3081\uff0c\u4f55\u3082\u8868\u793a\u3055\u308c\u306a\u3044\u3002\u3053\u308c\u3067\u306f\u56f0\u308b\u306e\u3067\uff0c\u30a4\u30f3\u30c7\u30c3\u30af\u30b9\u3092\u898b\u3066\u307f\u308b\u3068\uff0c\u6a19\u6e96\u51fa\u529b\u3068\u66f8\u304b\u308c\u305f\u3082\u306e\u304c\u3042\u308b\u3002\u51fa\u529b\u3068\u3044\u3046\u306e\u3060\u304b\u3089\u8868\u793a\u306b\u4f7f\u3048\u305d\u3046\u3067\u3042\u308b\u3002\u3053\u306e\u30da\u30fc\u30b8\u3092\u898b\u3066\u307f\u308b\u3068\uff0c printf \u95a2\u6570\u3068\u3044\u3046\u3082\u306e\u304c\u3042\u308b\u3088\u3046\u3067\uff0c\u3069\u3046\u3082\u578b\u306b\u3088\u3063\u3066\u306a\u306b\u3084\u3089\u6307\u5b9a\u304c\u5fc5\u8981\u305d\u3046\u3067\u3042\u308b\u3002\u4eca\u56de\u306f int \u578b\u306e\u5909\u6570\u3092\u4f5c\u3063\u305f\u306e\u3067\uff0c\u305d\u308c\u306b\u95a2\u9023\u3059\u308b\u3068\u3053\u308d\u3092\u91cd\u70b9\u7684\u306b\u8aad\u3093\u3067\u307f\u308b\u3002\u3059\u308b\u3068 %d \u3068\u3044\u3046\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u6307\u5b9a\u5b50\u3092\u4f7f\u3048\u3070\u826f\u3055\u305d\u3046\u3067\u3042\u308b\u3053\u3068\u304c\u5206\u304b\u308b\u3002"}),(0,r.jsxs)("p",{children:[(0,r.jsx)(d.default,{href:"/lang-c/elements/output",children:"\u6a19\u6e96\u51fa\u529b"}),"\u306e\u30da\u30fc\u30b8\u3067\u306f\uff0cheight \u3068\u3044\u3046\u5909\u6570\u3092\u4f5c\u308a\uff0c",(0,r.jsx)(h.Z,{source:'printf("height: %d cm\\n", height);',language:"c"}),"\u3068\u3044\u3046\u6587\u3067\u300cheight: 141 cm\u300d \u3068\u8868\u793a\u3092\u3057\u3066\u3044\u308b\u304c\uff0c\u3044\u307e\u6b32\u3057\u3044\u306e\u306f\u6570\u5b57\u306e\u90e8\u5206\u3060\u3051\u3067\u3042\u308b\u3002\u305d\u306e\u305f\u3081\u8868\u793a\u306b\u4f7f\u3046\u5909\u6570\u306e\u540d\u524d\u3092\u5909\u3048\u3064\u3064\uff0c\u4f59\u8a08\u306a\u30c6\u30ad\u30b9\u30c8\u3092\u53d6\u308a\u53bb\u308c\u3070\u826f\u3055\u305d\u3046\u3067\u3042\u308b\u3002\u3059\u308b\u3068\uff0c",(0,r.jsx)(h.Z,{uri:"/codes/lang-c/introduction/int_trial2.c",language:"c"}),"\u306e\u3088\u3046\u306b\u306a\u308b\u3060\u308d\u3046\u3002\u3053\u308c\u3092\u5b9f\u884c\u3057\u3066\u307f\u308b\u3068\uff0c",(0,r.jsx)(h.Z,{source:"12345",language:"c"}),"\u306e\u3088\u3046\u306b\u8868\u793a\u3055\u308c\uff0c\u5909\u6570\u306e\u521d\u671f\u5316\u306e\u3068\u304d\u306b\u4e0e\u3048\u305f\u30ea\u30c6\u30e9\u30eb\u304c\u5024\u306b\u306a\u3063\u3066\u3044\u308b\u3053\u3068\u304c\u5206\u304b\u308b\u3002"]}),(0,r.jsx)("p",{children:"\u3053\u306e\u3088\u3046\u306a\u8981\u9818\u3067\uff0chappy.c \u3092\u6539\u5909\u3059\u308b\u3053\u3068\u3067\uff0c\u65b0\u3057\u3044\u69cb\u6587\u3092\u8a66\u3059\u3053\u3068\u304c\u3067\u304d\u308b\u3002\u4f3c\u305f\u3088\u3046\u306a\u3082\u306e\u304c\u3042\u308c\u3070\uff0c\u5b9f\u969b\u306b\u4f7f\u3044\u306a\u304c\u3089\u6bd4\u8f03\u3057\uff0c\u3069\u306e\u3088\u3046\u306a\u5834\u5408\u306b\u3069\u308c\u3092\u4f7f\u3048\u3070\u3044\u3044\u306e\u304b\u8003\u3048\u3066\u307f\u3066\u307b\u3057\u3044\u3002"})]})]})})})]})}},7715:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/lang-c/introductions/trial",function(){return t(6239)}])},3272:function(e){e.exports={abstract:"abstract_abstract__2J1_W"}},4091:function(e){e.exports={grid:"documentGrid_grid__5YgcL",center:"documentGrid_center__1Iy7m"}},4824:function(e){e.exports={element:"contentElement_element__2zPOC"}},5513:function(e){e.exports={width:"widthContainer_width__bLQd8"}}},function(e){e.O(0,[774,264,779,433,888,179],(function(){return n=7715,e(e.s=n);var n}));var n=e.O();_N_E=n}]);