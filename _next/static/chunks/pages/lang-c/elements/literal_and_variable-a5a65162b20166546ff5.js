(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[535],{603:function(e,n,t){"use strict";t.d(n,{Z:function(){return l}});var r=t(5893),s=t(3272),i=t.n(s);function l(e){return(0,r.jsx)("div",{className:i().abstract,style:e.styles,children:e.children})}},1221:function(e,n,t){"use strict";t.d(n,{Z:function(){return P}});var r=t(5893),s=t(3349),i=t(6156),l=t(2949),c=t(6610),a=t(5991),o=t(5255),d=t(6089),h=t(7608),u=t(7294),x=t(3300),j=t.n(x),m=t(9235),p=t(7694),f=t(5005),g=t(7625),Z=t(767),v=t(8774),b=t(4370),_=t(3253),y=t.n(_);function w(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function O(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?w(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):w(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function I(e){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=(0,h.Z)(e);if(n){var s=(0,h.Z)(this).constructor;t=Reflect.construct(r,arguments,s)}else t=r.apply(this,arguments);return(0,d.Z)(this,t)}}function k(e){var n={backgroundColor:"#f6f8fa",fontSize:"14px",padding:"7px 1rem 5px 1rem",margin:"0",overflow:"auto"};return Object.keys(e).includes("maxHeight")&&(n.maxHeight=e.maxHeight),(0,r.jsx)("pre",{style:n,children:e.children})}var N=function(e){(0,o.Z)(t,e);var n=I(t);function t(e){var r;return(0,c.Z)(this,t),(r=n.call(this,e)).state={loaded:!1,source:"",showModal:!1},r.maxHeight="15rem",r.margin="",e.maxHeight&&(r.maxHeight=e.maxHeight),r}return(0,a.Z)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.uri?j()(this.props.uri).then((function(e){return e.text()})).then((function(e){var n=e.split("\n");return""===n.slice(-1)[0]&&n.pop(),n.join("\n")})).then((function(n){e.setState({loaded:!0,source:n})})).catch((function(n){return e.setState({loaded:!0,source:n})})):(this.setState({loaded:!0,source:this.props.source}),this.margin="mt-3 mb-3")}},{key:"render",value:function(){var e=this,n=(m.lG.theme,(0,l.Z)(m.lG,["theme"]));return(0,r.jsx)("div",{className:this.margin,children:(0,r.jsx)(m.ZP,O(O({theme:p.Z},n),{},{code:this.state.source,language:this.props.language,children:function(n){var t=n.className,s=n.style,i=n.tokens,l=n.getLineProps,c=n.getTokenProps;return(0,r.jsx)(k,{className:t,style:s,maxHeight:e.maxHeight,children:i.map((function(e,n){return(0,r.jsx)("div",O(O({},l({line:e,key:n})),{},{children:e.map((function(e,n){return(0,r.jsx)("span",O({},c({token:e,key:n})))}))}))}))})}}))})}}]),t}(u.Component),C={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",maxHeight:"100vh",transform:"translate(-50%, -50%)"}},P=function(e){(0,o.Z)(t,e);var n=I(t);function t(e){var r;return(0,c.Z)(this,t),(r=n.call(this,e)).state={showModal:!1},r.handleOpenModal=r.handleOpenModal.bind((0,s.Z)(r)),r.handleCloseModal=r.handleCloseModal.bind((0,s.Z)(r)),r}return(0,a.Z)(t,[{key:"handleOpenModal",value:function(){this.setState({showModal:!0})}},{key:"handleCloseModal",value:function(){this.setState({showModal:!1})}},{key:"render",value:function(){return this.props.uri?(0,r.jsxs)("div",{style:{margin:"8px 0 8px 0"},children:[(0,r.jsx)(N,O({},this.props)),(0,r.jsxs)("div",{style:{textAlign:"right",padding:"5px 0 5px 0"},children:[this.props.expand&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(f.Z,{variant:"outline-dark",size:"md",onClick:this.handleOpenModal,children:(0,r.jsx)(g.G,{icon:v.TT,style:{width:"1rem"}})}),(0,r.jsxs)(y(),{isOpen:this.state.showModal,onRequestClose:this.handleCloseModal,style:C,children:[(0,r.jsx)(N,O(O({},this.props),{},{maxHeight:"80vh"})),(0,r.jsx)("div",{style:{textAlign:"right"},children:(0,r.jsx)(f.Z,{variant:"outline-dark",size:"md",onClick:this.handleCloseModal,children:(0,r.jsx)(g.G,{icon:b.nY,style:{width:"1rem"}})})})]})]}),this.props.download&&(0,r.jsx)("a",{href:this.props.uri,download:!0,className:"ml-1",children:(0,r.jsx)(f.Z,{variant:"outline-primary",size:"md",className:"m-0 mr-1",children:(0,r.jsx)(g.G,{icon:Z.q7,style:{width:"1rem"}})})})]})]}):(0,r.jsx)(N,O({},this.props))}}]),t}(u.Component)},6905:function(e,n,t){"use strict";t.d(n,{Z:function(){return l}});var r=t(5893),s=t(4824),i=t.n(s);function l(e){return(0,r.jsx)("div",{className:i().element,style:e.styles,children:e.children})}},5642:function(e,n,t){"use strict";t.d(n,{Z:function(){return l}});var r=t(5893),s=t(4091),i=t.n(s);function l(e){return(0,r.jsx)("div",{className:i().grid,children:e.children})}},8237:function(e,n,t){"use strict";t.d(n,{Z:function(){return a}});var r=t(5893),s=t(3062),i=t(4315),l=t(4505),c=t(1664);t(7625);function a(){return(0,r.jsx)("div",{className:"sticky-top",children:(0,r.jsxs)(s.Z,{bg:"light",style:{paddingRight:"7rem"},children:[(0,r.jsx)(c.default,{href:"/lang-c",className:"font-weight-bold",children:(0,r.jsx)("span",{className:"text-dark pr-3",children:"C \u8a00\u8a9e\u5165\u9580"})}),(0,r.jsx)(s.Z.Toggle,{"aria-controls":"nav2"}),(0,r.jsx)(s.Z.Collapse,{id:"nav2",children:(0,r.jsxs)(i.Z,{className:"ml-auto mr-auto",children:[(0,r.jsx)(l.Z.Divider,{}),(0,r.jsxs)(l.Z,{title:"\u306f\u3058\u3081\u306b",id:"basic-nav-dropdown",children:[(0,r.jsx)(l.Z.Item,{href:"/lang-c/introductions/stance",children:"\u30d7\u30ed\u30b0\u30e9\u30df\u30f3\u30b0\u3068\u306f\uff1f"}),(0,r.jsx)(l.Z.Item,{href:"/lang-c/introductions/install",children:"\u74b0\u5883\u69cb\u7bc9"}),(0,r.jsx)(l.Z.Item,{href:"/lang-c/introductions/hello",children:"\u306f\u3058\u3081\u3066\u306e\u30b3\u30f3\u30d1\u30a4\u30eb"}),(0,r.jsx)(l.Z.Item,{href:"/lang-c/introductions/trial",children:"\u52b9\u7387\u3088\u304f\u7fd2\u5f97\u3059\u308b\u305f\u3081\u306b"})]})]})}),(0,r.jsx)(s.Z.Toggle,{"aria-controls":"nav2"}),(0,r.jsx)(s.Z.Collapse,{id:"nav2",children:(0,r.jsx)(i.Z,{className:"ml-auto mr-auto",children:(0,r.jsxs)(l.Z,{title:"\u69cb\u6587\u30fb\u898f\u5247",id:"basic-nav-dropdown",children:[(0,r.jsx)(l.Z.Item,{href:"/lang-c/elements/literal_and_variable",children:"\u30ea\u30c6\u30e9\u30eb\u3068\u5909\u6570"}),(0,r.jsx)(l.Z.Item,{href:"/lang-c/elements/output",children:"\u6a19\u6e96\u51fa\u529b"}),(0,r.jsx)(l.Z.Item,{href:"/lang-c/elements/argv",children:"\u30b3\u30de\u30f3\u30c9\u30e9\u30a4\u30f3\u5f15\u6570"}),(0,r.jsx)(l.Z.Item,{href:"/lang-c/elements/statement",children:"\u5ba3\u8a00\u6587\u30fb\u5b9f\u884c\u6587"}),(0,r.jsx)(l.Z.Item,{href:"/lang-c/elements/array",children:"\u914d\u5217"}),(0,r.jsx)(l.Z.Item,{href:"/lang-c/elements/structure",children:"\u69cb\u9020\u4f53"}),(0,r.jsx)(l.Z.Item,{href:"/lang-c/elements/operator",children:"\u6f14\u7b97\u5b50"}),(0,r.jsx)(l.Z.Item,{href:"/lang-c/elements/conditional_branch",children:"\u6761\u4ef6\u5206\u5c90"}),(0,r.jsx)(l.Z.Item,{href:"/lang-c/elements/loop",children:"\u53cd\u5fa9"}),(0,r.jsx)(l.Z.Item,{href:"/lang-c/elements/function",children:"\u95a2\u6570"}),(0,r.jsx)(l.Z.Item,{href:"/lang-c/elements/file_input",children:"\u30d5\u30a1\u30a4\u30eb\u5165\u529b"})]})})}),(0,r.jsx)(s.Z.Toggle,{"aria-controls":"nav3"}),(0,r.jsx)(s.Z.Collapse,{id:"nav3",children:(0,r.jsx)(i.Z,{className:"ml-auto mr-auto",children:(0,r.jsxs)(l.Z,{title:"\u7d44\u307f\u5408\u308f\u305b",id:"basic-nav-dropdown",children:[(0,r.jsx)(l.Z.Item,{href:"/lang-c/complexes/bubble_sort",children:"\u30d0\u30d6\u30eb\u30bd\u30fc\u30c8"}),(0,r.jsx)(l.Z.Item,{href:"/lang-c/complexes/file_input",children:"\u30d5\u30a1\u30a4\u30eb\u306e\u8aad\u307f\u8fbc\u307f"}),(0,r.jsx)(l.Z.Item,{href:"/lang-c/complexes/monte_carlo",children:"\u30e2\u30f3\u30c6\u30ab\u30eb\u30ed\u6cd5"})]})})}),(0,r.jsx)(s.Z.Toggle,{"aria-controls":"nav4"}),(0,r.jsx)(s.Z.Collapse,{id:"nav4",children:(0,r.jsx)(i.Z,{className:"ml-auto mr-auto",children:(0,r.jsxs)(l.Z,{title:"\u6f14\u7fd2",id:"basic-nav-dropdown",children:[(0,r.jsx)(l.Z.Item,{href:"/lang-c/subjects/linear_search",children:"\u7dda\u578b\u63a2\u7d22"}),(0,r.jsx)(l.Z.Item,{href:"/lang-c/subjects/bubble_sort",children:"\u30d0\u30d6\u30eb\u30bd\u30fc\u30c8\u6539"}),(0,r.jsx)(l.Z.Item,{href:"/lang-c/subjects/monte_carlo",children:"\u9762\u7a4d\u306e\u8a08\u7b97"})]})})}),(0,r.jsx)(s.Z.Toggle,{"aria-controls":"nav5"}),(0,r.jsx)(s.Z.Collapse,{id:"nav5",children:(0,r.jsx)(i.Z,{className:"ml-auto mr-auto",children:(0,r.jsx)(l.Z,{title:"\u305d\u306e\u4ed6",id:"basic-nav-dropdown",children:(0,r.jsx)(l.Z.Item,{href:"/lang-c/input_samples",children:"\u5165\u529b\u30d5\u30a1\u30a4\u30eb\u306e\u30b5\u30f3\u30d7\u30eb"})})})})]})})}},7074:function(e,n,t){"use strict";t.d(n,{Z:function(){return l}});var r=t(5893),s=t(5513),i=t.n(s);function l(e){return(0,r.jsx)("div",{className:i().width,children:e.children})}},1130:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return h}});var r=t(5893),s=t(9008),i=t(8237),l=t(7074),c=t(603),a=t(5642),o=t(6905),d=t(1221);function h(){return(0,r.jsxs)("div",{children:[(0,r.jsxs)(s.default,{children:[(0,r.jsx)("title",{children:"\u30ea\u30c6\u30e9\u30eb\u3068\u5909\u6570"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,r.jsx)(i.Z,{}),(0,r.jsx)("main",{children:(0,r.jsxs)(l.Z,{children:[(0,r.jsxs)(c.Z,{children:[(0,r.jsx)("h1",{children:"\u30ea\u30c6\u30e9\u30eb\u3068\u5909\u6570"}),(0,r.jsx)("p",{children:"\u30ea\u30c6\u30e9\u30eb\u3068\u306f\uff0c\u76f4\u5024\u3068\u3082\u8a00\u308f\u308c\uff0c\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9\u306b\u76f4\u306b\u5024\u3092\u66f8\u3044\u305f\u3082\u306e\u3067\u3042\u308b\u3002 \u5909\u6570\u306f\uff0c\u5024\u3092\u4fdd\u5b58\u3057\u3066\u304a\u304f\u305f\u3081\u306e\u3082\u306e\u3067\uff0c\u5909\u66f4\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u308b\u3002 \u3053\u308c\u3089\u5024\u306f\u30d0\u30a4\u30ca\u30ea\u3067\u8868\u3055\u308c\u3066\u304a\u308a\uff0c\u3053\u308c\u3092\u8a08\u7b97\u6a5f\u304c\u3069\u3046\u89e3\u91c8\u3059\u308b\u304b\u6c7a\u3081\u308b\u305f\u3081\u306b\u578b\u60c5\u5831\u304c\u5fc5\u8981\u306b\u306a\u308b\u3002 \u3053\u306e\u578b\u306f\uff0c\u5909\u6570\u3092\u4f5c\u6210\u3059\u308b\u969b\u306b\u6307\u5b9a\u3059\u308b\u3002"}),(0,r.jsx)("p",{children:"\u5024\u306e\u51fa\u529b\u306b\u3064\u3044\u3066\u306f\u5225\u306e\u30da\u30fc\u30b8\u3067\u8aac\u660e\u3059\u308b\u3002"})]}),(0,r.jsxs)(a.Z,{children:[(0,r.jsxs)(o.Z,{children:[(0,r.jsx)("h2",{children:"\u6587\u5b57"}),(0,r.jsx)("p",{children:"\u8aac\u660e\u306e\u305f\u3081\u306b\uff0c\u5909\u6570\u3092 v \u3068\u3044\u3046\u540d\u524d\u3067\u3064\u304f\u308b\u3002 \u521d\u671f\u5024\u3068\u3057\u3066\uff0c\u30a2\u30eb\u30d5\u30a1\u30d9\u30c3\u30c8\u306e L \uff08\u3053\u308c\u304c\u30ea\u30c6\u30e9\u30eb\uff09\u3092\u4e0e\u3048\u3066\u5909\u6570\u3092\u4f5c\u6210\u3057\uff0c \u5024\u3092\u8868\u793a\u3059\u308b\u30d7\u30ed\u30b0\u30e9\u30e0\u3092\u4ee5\u4e0b\u306b\u793a\u3059\u3002"}),(0,r.jsx)("p",{children:"1 \u6587\u5b57\u3092\u8868\u3059\u30ea\u30c6\u30e9\u30eb\u306f\uff0c\u30b7\u30f3\u30b0\u30eb\u30af\u30aa\u30fc\u30c8\u3067\u631f\u307f\u8868\u8a18\u3059\u308b\u3002 \u3053\u308c\u306f char \u578b\u306e\u5909\u6570\u306b\u4fdd\u5b58\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u308b\u3002"}),(0,r.jsx)(d.Z,{source:"char v = 'L';",language:"c"})]}),(0,r.jsxs)(o.Z,{children:[(0,r.jsx)("h2",{children:"\u6587\u5b57\u5217"}),(0,r.jsx)("p",{children:"\u6587\u5b57\u5217\u3092\u8868\u3059\u30ea\u30c6\u30e9\u30eb\u306f\uff0c\u30c0\u30d6\u30eb\u30af\u30aa\u30fc\u30c8\u3067\u631f\u307f\u8868\u8a18\u3059\u308b\u3002 \u3053\u308c\u306f char \u578b\u306e\u914d\u5217\u306b\u4fdd\u5b58\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u308b\u3002"}),(0,r.jsx)(d.Z,{source:'char str[] = "hello";',language:"c"})]}),(0,r.jsxs)(o.Z,{children:[(0,r.jsx)("h2",{children:"\u6574\u6570"}),(0,r.jsx)("p",{children:"\u30af\u30aa\u30fc\u30c6\u30fc\u30b7\u30e7\u30f3\u3092\u4f7f\u308f\u305a\u76f4\u306b\u6574\u6570\u3092\u66f8\u3044\u305f\u3082\u306e\u304c\u6574\u6570\u30ea\u30c6\u30e9\u30eb\u3068\u306a\u308b\u3002 \u6574\u6570\u3092\u8868\u3059\u30c7\u30fc\u30bf\u578b\u306f int \u578b\u3067\u3042\u308b\uff08\u4ed6\u306b\u3082\u3042\u308b\uff09\u3002"}),(0,r.jsx)("p",{children:"\u8ca0\u306e\u6574\u6570\u306f\uff0c\u6574\u6570\u3092\u8868\u3059\u30ea\u30c6\u30e9\u30eb\u306b\u5358\u9805\u6f14\u7b97\u5b50 - \u3092\u3064\u3051\u3066\u8868\u3059\u3053\u3068\u304c\u3067\u304d\u308b\u3002"}),(0,r.jsx)("p",{children:"\u6b63\u8ca0\u305d\u308c\u305e\u308c\u306e\u30ea\u30c6\u30e9\u30eb\u3092\u4f7f\u3063\u3066 int \u578b\u306e\u5909\u6570\u3092\u521d\u671f\u5316\u3059\u308b\u4f8b\u3092\u4ee5\u4e0b\u306b\u793a\u3059:"}),(0,r.jsx)(d.Z,{uri:"/codes/lang-c/literal_and_variable/integer1.c",language:"c"}),(0,r.jsx)("p",{children:"\u7cbe\u5ea6\uff08\u6841\u6570\uff09\u306f\u74b0\u5883\u306b\u4f9d\u5b58\u3057\uff0c \u901a\u5e38\u306f 2 byte \u3082\u3057\u304f\u306f 4 byte \u3067\u3042\u308b\u3002"}),(0,r.jsx)("p",{children:"\u578b\u4fee\u98fe\u5b50 long \u3092\u6307\u5b9a\u3059\u308b\u3053\u3068\u3067 int \u578b\u3088\u308a\u8868\u305b\u308b\u6570\u306e\u7bc4\u56f2\u304c\u5e83\u304c\u308b\uff08\u51e6\u7406\u7cfb\u4f9d\u5b58\uff09\u3002 long int \u578b\u3068 long long int \u578b\u3092\u4f5c\u308b\u3053\u3068\u304c\u3067\u304d\u308b\u3002 \u3053\u308c\u3089\u306b\u5bfe\u5fdc\u3059\u308b\u30ea\u30c6\u30e9\u30eb\u306f\u6574\u6570\u306e\u672b\u5c3e\u306b long \u306e\u6570\u3060\u3051\u63a5\u5c3e\u8f9e L \u3092\u4ed8\u3051\u3066\u8868\u3059\u3002"}),(0,r.jsx)("p",{children:"\u578b\u4fee\u98fe\u5b50 unsigned \u3092\u3064\u3051\u308b\u3053\u3068\u3067\u6b63\u306e\u6574\u6570\u306e\u307f\u3092\u6271\u3046\u3088\u3046\u306b\u3067\u304d\uff0c \u8868\u305b\u308b\u6841\u6570\u3092\u5897\u3084\u3059\u3053\u3068\u304c\u3067\u304d\u308b\u3002 \u3053\u308c\u306b\u5bfe\u5fdc\u3059\u308b\u30ea\u30c6\u30e9\u30eb\u306f\u6574\u6570\u306e\u672b\u5c3e\u306b\u3055\u3089\u306b\u63a5\u5c3e\u8f9e U \u3092\u3064\u3051\u3066\u8868\u3059( L \u3088\u308a\u3082\u524d\u65b9\u306b)\u3002"}),(0,r.jsx)("p",{children:"\u578b\u4fee\u98fe\u5b50 long \u3084 unsigned \u3092\u6307\u5b9a\u3057\u305f int \u578b\u304c\u8868\u305b\u308b\u6574\u6570\u306e\u7bc4\u56f2\u306f\uff0c\u3069\u308c\u3082\u74b0\u5883\u4f9d\u5b58\u3067\u3042\u308b\u3002"}),(0,r.jsx)("p",{children:"\u578b\u4fee\u98fe\u5b50\u3092\u4f7f\u3063\u305f\u5909\u6570\u306e\u521d\u671f\u5316\u306e\u4f8b:"}),(0,r.jsx)(d.Z,{uri:"/codes/lang-c/literal_and_variable/integer2.c",language:"c"})]}),(0,r.jsxs)(o.Z,{children:[(0,r.jsx)("h2",{children:"\u6d6e\u52d5\u5c0f\u6570\u70b9\u6570"}),(0,r.jsx)("p",{children:"\u6d6e\u52d5\u5c0f\u6570\u70b9\u6570\u306e\u30ea\u30c6\u30e9\u30eb\u3082\u30af\u30aa\u30fc\u30c6\u30fc\u30b7\u30e7\u30f3\u3092\u4f7f\u308f\u305a\u306b\u66f8\u304f\u3002 \u6d6e\u52d5\u5c0f\u6570\u70b9\u6570\u3092\u8868\u3059\u30c7\u30fc\u30bf\u578b\u306b\u306f float \u578b\u3068 double \u578b\u304c\u3042\u308b\u3002"}),(0,r.jsx)("p",{children:"float \u578b\u306f 4 byte, double \u578b\u306f 8 byte \u3092\u4f7f\u3063\u3066\u6570\u3092\u8868\u3059\u3002 \u7b26\u53f7\uff0c\u6307\u6570\u90e8\uff0c\u4eee\u6570\u90e8\u305d\u308c\u305e\u308c\u3092\u8868\u3059\u305f\u3081\u306b\u4f55 bit \u3092\u4f7f\u3046\u304b\u306f\u51e6\u7406\u7cfb\u306b\u3088\u3063\u3066\u5909\u308f\u308b\u305f\u3081\uff0c \u7cbe\u5ea6\u306f\u74b0\u5883\u306b\u4f9d\u5b58\u3059\u308b\u3002"}),(0,r.jsx)("p",{children:"\u6574\u6570\u306e\u5834\u5408\u3068\u540c\u3058\u304f\uff0c\u30ea\u30c6\u30e9\u30eb\u306b\u5358\u9805\u6f14\u7b97\u5b50\u3092\u4ed8\u3051\u3066\u7b26\u53f7\u3092\u6307\u793a\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u308b\u3002"}),(0,r.jsx)("p",{children:"\u578b\u4fee\u98fe\u5b50 long \u3092\u6307\u5b9a\u3059\u308b\u3053\u3068\u3067 double \u578b\u3088\u308a\u8868\u305b\u308b\u6570\u306e\u7bc4\u56f2\u304c\u5e83\u304c\u308b\uff08\u51e6\u7406\u7cfb\u4f9d\u5b58\uff09\u3002"}),(0,r.jsx)("p",{children:"\u63a5\u5c3e\u8f9e\u3092\u4ed8\u3051\u306a\u3044\u5834\u5408\u306b\u306f double, F \u3092\u4ed8\u3051\u305f\u5834\u5408\u306b\u306f float\uff0c L \u3092\u4ed8\u3051\u305f\u5834\u5408\u306b\u306f long double \u3068\u3057\u3066\u305d\u308c\u305e\u308c\u89e3\u91c8\u3055\u308c\u308b\u3002"}),(0,r.jsx)(d.Z,{uri:"/codes/lang-c/literal_and_variable/number1.c",language:"c"}),(0,r.jsx)("p",{children:"\u6307\u6570\u8868\u8a18\u3092\u4f7f\u3063\u3066\u30ea\u30c6\u30e9\u30eb\u3092\u4e0e\u3048\u308b\u3053\u3068\u3082\u3067\u304d\u308b\u3002 \u4eee\u6570\u90e8\u3068\u6307\u6570\u90e8\u3092 E \u3067\u7e4b\u3052\u305f\u3082\u306e\u304c\u30ea\u30c6\u30e9\u30eb\u3068\u306a\u308b\u3002"}),(0,r.jsx)(d.Z,{uri:"/codes/lang-c/literal_and_variable/number2.c",language:"c"})]}),(0,r.jsxs)(o.Z,{children:[(0,r.jsx)("h2",{children:"\u5b9a\u6570"}),(0,r.jsx)("p",{children:"\u578b\u306e\u6307\u5b9a\u306e\u307e\u3048\u306b const \u4fee\u98fe\u5b50\u3092\u3064\u3051\u308c\u3070\uff0c\u3053\u306e\u5909\u6570\u306f\u5024\u306e\u5909\u66f4\u304c\u8a31\u3055\u308c\u306a\u3044\u5b9a\u6570\u3068\u306a\u308b\u3002 \u3064\u307e\u308a\u5909\u6570\u3092\u7279\u6b8a\u5316\u3059\u308b\u3053\u3068\u306b\u3088\u308a\u5b9a\u6570\u3092\u7528\u610f\u3057\u3066\u3044\u308b\u3002"}),(0,r.jsx)(d.Z,{source:"const double PI = 3.14;",language:"c"}),(0,r.jsx)("p",{children:"\u306e\u3088\u3046\u306b\u66f8\u3051\u3070 PI \u306f\u5b9a\u6570\u3068\u306a\u308b\u3002 \u5b9a\u6570\u306e\u540d\u524d\u306f\u5927\u6587\u5b57\u3067\u66f8\u304f\u6163\u7fd2\u304c\u3042\u308b\u304c\uff0c\u30d7\u30ed\u30b0\u30e9\u30e0\u5168\u4f53\u3067\u7d71\u4e00\u3055\u308c\u3066\u3044\u308c\u3070\u554f\u984c\u306a\u3044\u3002"}),(0,r.jsx)("p",{children:"\u3053\u306e\u3088\u3046\u306b\u5b9a\u6570\u3068\u3057\u3066\u304a\u3051\u3070\uff0c\u30ea\u30c6\u30e9\u30eb\u3092\u6563\u308a\u3070\u3081\u308b\u3053\u3068\u304c\u306a\u304f\u306a\u308a\uff0c \u3053\u306e\u5ba3\u8a00\uff11\u6587\u3092\u66f8\u304d\u63db\u3048\u308b\u3060\u3051\u3067\u30d7\u30ed\u30b0\u30e9\u30e0\u5168\u4f53\u306e\u632f\u308b\u821e\u3044\u3092\u5909\u3048\u308b\u3053\u3068\u304c\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308b\u305f\u3081\uff0c \u6d3b\u7528\u3057\u3066\u307b\u3057\u3044\u3002"})]})]})]})})]})}},62:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/lang-c/elements/literal_and_variable",function(){return t(1130)}])},3272:function(e){e.exports={abstract:"abstract_abstract__2J1_W"}},4091:function(e){e.exports={grid:"documentGrid_grid__5YgcL",center:"documentGrid_center__1Iy7m"}},4824:function(e){e.exports={element:"contentElement_element__2zPOC"}},5513:function(e){e.exports={width:"widthContainer_width__bLQd8"}}},function(e){e.O(0,[774,264,779,433,888,179],(function(){return n=62,e(e.s=n);var n}));var n=e.O();_N_E=n}]);