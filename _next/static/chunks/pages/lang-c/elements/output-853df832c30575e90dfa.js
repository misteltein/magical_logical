(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[621],{4059:function(e,n,t){"use strict";t.d(n,{Z:function(){return l}});var r=t(5893),s=t(3272),i=t.n(s);function l(e){return(0,r.jsx)("div",{className:i().abstract,style:e.styles,children:e.children})}},2064:function(e,n,t){"use strict";t.d(n,{Z:function(){return T}});var r=t(5893),s=t(3349),i=t(6156),l=t(2949),c=t(6610),d=t(5991),a=t(5255),h=t(6089),o=t(7608),u=t(7294),x=t(3300),j=t.n(x),p=t(9235),m=t(7694),f=t(5005),g=t(7625),Z=t(767),v=t(8774),b=t(4370),y=t(3253),_=t.n(y),w=t(4184),O=t.n(w);function I(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function N(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?I(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):I(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function k(e){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=(0,o.Z)(e);if(n){var s=(0,o.Z)(this).constructor;t=Reflect.construct(r,arguments,s)}else t=r.apply(this,arguments);return(0,h.Z)(this,t)}}var C=function(e){(0,a.Z)(t,e);var n=k(t);function t(e){var r;return(0,c.Z)(this,t),(r=n.call(this,e)).state={maxHeight:"15rem"},r.props.maxHeight&&Object.assign(r.state,{maxHeight:r.props.maxHeight}),r}return(0,d.Z)(t,[{key:"render",value:function(){return(0,r.jsx)("pre",{className:O()("code-core",this.props.className),style:this.state,children:this.props.children})}}]),t}(u.Component),M=function(e){(0,a.Z)(t,e);var n=k(t);function t(e){var r;return(0,c.Z)(this,t),(r=n.call(this,e)).state={loaded:!1,source:"",showModal:!1},r}return(0,d.Z)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.uri?j()(this.props.uri).then((function(e){return e.text()})).then((function(e){var n=e.split("\n");return""===n.slice(-1)[0]&&n.pop(),n.join("\n")})).then((function(n){e.setState({loaded:!0,source:n})})).catch((function(n){return e.setState({loaded:!0,source:n})})):this.setState({loaded:!0,source:this.props.source})}},{key:"render",value:function(){var e=this,n=(p.lG.theme,(0,l.Z)(p.lG,["theme"]));return(0,r.jsx)("div",{children:(0,r.jsx)(p.ZP,N(N({theme:m.Z},n),{},{code:this.state.source,language:this.props.language,children:function(n){var t=n.className,s=n.style,i=n.tokens,l=n.getLineProps,c=n.getTokenProps;return(0,r.jsx)(C,{className:t,style:s,maxHeight:e.props.maxHeight,children:i.map((function(e,n){return(0,r.jsx)("div",N(N({},l({line:e,key:n})),{},{children:e.map((function(e,n){return(0,r.jsx)("span",N({},c({token:e,key:n})))}))}))}))})}}))})}}]),t}(u.Component),P={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",maxHeight:"100vh",transform:"translate(-50%, -50%)"}},T=function(e){(0,a.Z)(t,e);var n=k(t);function t(e){var r;return(0,c.Z)(this,t),(r=n.call(this,e)).state={showModal:!1},r.handleOpenModal=r.handleOpenModal.bind((0,s.Z)(r)),r.handleCloseModal=r.handleCloseModal.bind((0,s.Z)(r)),r}return(0,d.Z)(t,[{key:"handleOpenModal",value:function(){this.setState({showModal:!0})}},{key:"handleCloseModal",value:function(){this.setState({showModal:!1})}},{key:"render",value:function(){return this.props.uri?(0,r.jsxs)("div",{style:{margin:"8px 0 8px 0"},children:[(0,r.jsx)(M,{uri:this.props.uri,source:this.props.source,language:this.props.language}),(0,r.jsxs)("div",{style:{textAlign:"right",padding:"5px 0 5px 0"},children:[this.props.expand&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(f.Z,{variant:"outline-dark",size:"sm",onClick:this.handleOpenModal,children:(0,r.jsx)(g.G,{icon:v.TT,style:{width:"1rem"}})}),(0,r.jsxs)(_(),{isOpen:this.state.showModal,onRequestClose:this.handleCloseModal,style:P,children:[(0,r.jsx)(M,{uri:this.props.uri,source:this.props.source,language:this.props.language,maxHeight:"70vh"}),(0,r.jsx)("div",{style:{textAlign:"right"},children:(0,r.jsx)(f.Z,{variant:"outline-dark",size:"sm",onClick:this.handleCloseModal,children:(0,r.jsx)(g.G,{icon:b.nY,style:{width:"1rem"}})})})]})]}),this.props.download&&(0,r.jsx)("a",{href:this.props.uri,download:!0,className:"ml-1",children:(0,r.jsx)(f.Z,{variant:"outline-primary",size:"sm",className:"m-0 mr-1",children:(0,r.jsx)(g.G,{icon:Z.q7,style:{width:"1rem"}})})})]})]}):(0,r.jsx)(M,{uri:this.props.uri,source:this.props.source,language:this.props.language})}}]),t}(u.Component)},5525:function(e,n,t){"use strict";t.d(n,{Z:function(){return l}});var r=t(5893),s=t(4824),i=t.n(s);function l(e){return(0,r.jsx)("div",{className:i().element,style:e.styles,children:e.children})}},897:function(e,n,t){"use strict";t.d(n,{Z:function(){return l}});var r=t(5893),s=t(4091),i=t.n(s);function l(e){return(0,r.jsx)("div",{className:i().grid,children:e.children})}},9955:function(e,n,t){"use strict";t.d(n,{Z:function(){return d}});var r=t(5893),s=t(3062),i=t(4315),l=t(4505),c=t(1664);function d(){return(0,r.jsx)("div",{className:"sticky-top",children:(0,r.jsxs)(s.Z,{bg:"light",style:{paddingRight:"7rem"},children:[(0,r.jsx)(c.default,{href:"/lang-c",children:(0,r.jsx)("span",{className:"text-dark pr-3",children:"C \u8a00\u8a9e\u5165\u9580"})}),(0,r.jsx)(s.Z.Toggle,{"aria-controls":"nav2"}),(0,r.jsx)(s.Z.Collapse,{id:"nav2",children:(0,r.jsxs)(i.Z,{className:"ml-auto mr-auto",children:[(0,r.jsx)(l.Z.Divider,{}),(0,r.jsxs)(l.Z,{title:"\u306f\u3058\u3081\u306b",id:"basic-nav-dropdown",children:[(0,r.jsx)(l.Z.Item,{href:"/lang-c/introductions/stance",children:"\u30d7\u30ed\u30b0\u30e9\u30df\u30f3\u30b0\u3068\u306f\uff1f"}),(0,r.jsx)(l.Z.Item,{href:"/lang-c/introductions/install",children:"\u74b0\u5883\u69cb\u7bc9"}),(0,r.jsx)(l.Z.Item,{href:"/lang-c/introductions/hello",children:"\u306f\u3058\u3081\u3066\u306e\u30b3\u30f3\u30d1\u30a4\u30eb"}),(0,r.jsx)(l.Z.Item,{href:"/lang-c/introductions/trial",children:"\u52b9\u7387\u3088\u304f\u7fd2\u5f97\u3059\u308b\u305f\u3081\u306b"})]})]})}),(0,r.jsx)(s.Z.Toggle,{"aria-controls":"nav2"}),(0,r.jsx)(s.Z.Collapse,{id:"nav2",children:(0,r.jsx)(i.Z,{className:"ml-auto mr-auto",children:(0,r.jsxs)(l.Z,{title:"\u69cb\u6587\u30fb\u898f\u5247",id:"basic-nav-dropdown",children:[(0,r.jsx)(l.Z.Item,{href:"/lang-c/elements/literal_and_variable",children:"\u30ea\u30c6\u30e9\u30eb\u3068\u5909\u6570"}),(0,r.jsx)(l.Z.Item,{href:"/lang-c/elements/output",children:"\u6a19\u6e96\u51fa\u529b"}),(0,r.jsx)(l.Z.Item,{href:"/lang-c/elements/argv",children:"\u30b3\u30de\u30f3\u30c9\u30e9\u30a4\u30f3\u5f15\u6570"}),(0,r.jsx)(l.Z.Item,{href:"/lang-c/elements/statement",children:"\u5ba3\u8a00\u6587\u30fb\u5b9f\u884c\u6587"}),(0,r.jsx)(l.Z.Item,{href:"/lang-c/elements/array",children:"\u914d\u5217"}),(0,r.jsx)(l.Z.Item,{href:"/lang-c/elements/structure",children:"\u69cb\u9020\u4f53"}),(0,r.jsx)(l.Z.Item,{href:"/lang-c/elements/operator",children:"\u6f14\u7b97\u5b50"}),(0,r.jsx)(l.Z.Item,{href:"/lang-c/elements/conditional_branch",children:"\u6761\u4ef6\u5206\u5c90"}),(0,r.jsx)(l.Z.Item,{href:"/lang-c/elements/loop",children:"\u53cd\u5fa9"}),(0,r.jsx)(l.Z.Item,{href:"/lang-c/elements/function",children:"\u95a2\u6570"}),(0,r.jsx)(l.Z.Item,{href:"/lang-c/elements/file_input",children:"\u30d5\u30a1\u30a4\u30eb\u5165\u529b"})]})})}),(0,r.jsx)(s.Z.Toggle,{"aria-controls":"nav3"}),(0,r.jsx)(s.Z.Collapse,{id:"nav3",children:(0,r.jsx)(i.Z,{className:"ml-auto mr-auto",children:(0,r.jsxs)(l.Z,{title:"\u7d44\u307f\u5408\u308f\u305b",id:"basic-nav-dropdown",children:[(0,r.jsx)(l.Z.Item,{href:"/lang-c/complexes/bubble_sort",children:"\u30d0\u30d6\u30eb\u30bd\u30fc\u30c8"}),(0,r.jsx)(l.Z.Item,{href:"/lang-c/complexes/file_input",children:"\u30d5\u30a1\u30a4\u30eb\u306e\u8aad\u307f\u8fbc\u307f"}),(0,r.jsx)(l.Z.Item,{href:"/lang-c/complexes/monte_carlo",children:"\u30e2\u30f3\u30c6\u30ab\u30eb\u30ed\u6cd5"}),(0,r.jsx)(l.Z.Item,{href:"/lang-c/complexes/finch",children:"\u30c7\u30fc\u30bf\u89e3\u6790"})]})})}),(0,r.jsx)(s.Z.Toggle,{"aria-controls":"nav4"}),(0,r.jsx)(s.Z.Collapse,{id:"nav4",children:(0,r.jsx)(i.Z,{className:"ml-auto mr-auto",children:(0,r.jsxs)(l.Z,{title:"\u6f14\u7fd2",id:"basic-nav-dropdown",children:[(0,r.jsx)(l.Z.Item,{href:"/lang-c/subjects/linear_search",children:"\u7dda\u578b\u63a2\u7d22"}),(0,r.jsx)(l.Z.Item,{href:"/lang-c/subjects/bubble_sort",children:"\u30d0\u30d6\u30eb\u30bd\u30fc\u30c8\u6539"}),(0,r.jsx)(l.Z.Item,{href:"/lang-c/subjects/monte_carlo",children:"\u9762\u7a4d\u306e\u8a08\u7b97"}),(0,r.jsx)(l.Z.Item,{href:"/lang-c/subjects/finch",children:"\u30c7\u30fc\u30bf\u89e3\u6790\u6539"})]})})}),(0,r.jsx)(s.Z.Toggle,{"aria-controls":"nav5"}),(0,r.jsx)(s.Z.Collapse,{id:"nav5",children:(0,r.jsx)(i.Z,{className:"ml-auto mr-auto",children:(0,r.jsx)(l.Z,{title:"\u305d\u306e\u4ed6",id:"basic-nav-dropdown",children:(0,r.jsx)(l.Z.Item,{href:"/lang-c/input_samples",children:"\u5165\u529b\u30d5\u30a1\u30a4\u30eb\u306e\u30b5\u30f3\u30d7\u30eb"})})})})]})})}},6535:function(e,n,t){"use strict";t.d(n,{Z:function(){return l}});var r=t(5893),s=t(5513),i=t.n(s);function l(e){return(0,r.jsx)("div",{className:i().width,children:e.children})}},5399:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return o}});var r=t(5893),s=t(9008),i=t(6535),l=t(9955),c=t(4059),d=t(897),a=t(5525),h=t(2064);function o(){return(0,r.jsxs)("div",{children:[(0,r.jsxs)(s.default,{children:[(0,r.jsx)("title",{children:"\u6a19\u6e96\u51fa\u529b"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,r.jsx)(l.Z,{}),(0,r.jsx)("main",{children:(0,r.jsxs)(i.Z,{children:[(0,r.jsxs)(c.Z,{children:[(0,r.jsx)("h1",{children:"\u6a19\u6e96\u51fa\u529b"}),(0,r.jsx)("p",{children:"\u30bf\u30fc\u30df\u30ca\u30eb\u306a\u3069\u306e\u30b3\u30f3\u30bd\u30fc\u30eb\u3078\u306e\u6a19\u6e96\u51fa\u529b\u306f\uff0c\u30d7\u30ed\u30b0\u30e9\u30e0\u51e6\u7406\u306e\u7d50\u679c\u3092\u8868\u793a\u3059\u308b\u3060\u3051\u3067\u306a\u304f\uff0c \u305d\u306e\u9014\u4e2d\u304c\u6b63\u3057\u3044\u304b\u78ba\u304b\u3081\u308b\u3068\u304d\u306b\u3082\u5fc5\u8981\u3067\u3042\u308b\u3002"})]}),(0,r.jsxs)(d.Z,{children:[(0,r.jsxs)(a.Z,{children:[(0,r.jsx)("h2",{children:"printf \u95a2\u6570\u3092\u4f7f\u3063\u305f\u6a19\u6e96\u51fa\u529b"}),(0,r.jsx)("p",{children:"printf \u95a2\u6570\u306f\uff0c\u30ea\u30c6\u30e9\u30eb\u3084\uff0c\u5909\u6570\u306e\u5024\u3092\u6a19\u6e96\u51fa\u529b\u3059\u308b\u305f\u3081\u306b\u4f7f\u3046\u3002"}),(0,r.jsx)("p",{children:"\u8868\u793a\u3057\u305f\u3044\u3082\u306e\u304c\u30ea\u30c6\u30e9\u30eb\u3060\u3051\u3067\u3042\u308b\u5834\u5408\u306b\u306f\uff0c\u305d\u308c\u3092\u5f15\u6570\u306b\u4e0e\u3048\u308b\u3002"}),(0,r.jsx)(h.Z,{uri:"/codes/lang-c/output/helloworld.c",language:"c"}),(0,r.jsx)("p",{children:"\u5909\u6570\u306e\u5024\u3092\u542b\u3081\u305f\u308a\uff0c\u307e\u305f\u306f\u5909\u6570\u306e\u5024\u306e\u307f\u3092\u51fa\u529b\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u308b\u3002"}),(0,r.jsx)(h.Z,{uri:"/codes/lang-c/output/withVariable.c",language:"c"}),(0,r.jsx)("p",{children:"\u3053\u306e\u30c0\u30d6\u30eb\u30af\u30aa\u30fc\u30c6\u30fc\u30b7\u30e7\u30f3\u3067\u62ec\u3089\u308c\u305f\u6587\u5b57\u5217\u306f\u30d7\u30ec\u30fc\u30b9\u30db\u30eb\u30c0\uff08\u4eee\u7f6e\u304d\u306e\u6587\u5b57\u5217\uff09\u3067\u3042\u308b %d \u3092\u542b\u3093\u3067\u3044\u308b\u3002 \u3053\u308c\u3092 height \u3068\u3044\u3046\u5909\u6570\u306e\u5024\u3067\u7f6e\u304d\u63db\u3048\u3066\uff0c \u5b8c\u6210\u3057\u305f \u300cheight: 141 cm\u300d \u3068\u3044\u3046\uff11\u6587\u304c\u6a19\u6e96\u51fa\u529b\u3055\u308c\u308b\u3002"}),(0,r.jsx)("p",{children:"\u985e\u4f3c\u3057\u305f\u6a19\u6e96\u51fa\u529b\u7528\u306e\u95a2\u6570\u306f\u4ed6\u306b\u3082\u3042\u308b\u306e\u3067\uff0c\u8abf\u3079\u3066\u307f\u3066\u307b\u3057\u3044\u3002"})]}),(0,r.jsxs)(a.Z,{children:[(0,r.jsx)("h2",{children:"\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u6307\u5b9a\u5b50"}),(0,r.jsx)("p",{children:"\u5148\u7a0b\u7d39\u4ecb\u3057\u305f %d \u306e\u3088\u3046\u306a\u30d7\u30ec\u30fc\u30b9\u30db\u30eb\u30c0\u306f\uff0c\u5358\u306a\u308b\u4eee\u7f6e\u304d\u306e\u6587\u5b57\u5217\u3067\u306f\u306a\u3044\u3002 \u3053\u306e\u30d7\u30ec\u30fc\u30b9\u30db\u30eb\u30c0\u306f\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u6307\u5b9a\u5b50\u3068\u547c\u3070\u308c\u308b\u3082\u306e\u3067\u3042\u308a\uff0c \u8868\u793a\u3059\u308b\u969b\u306b\u5fc5\u8981\u306a\u30c7\u30fc\u30bf\u578b\u3092\u6307\u793a\u3059\u308b\u3068\u3068\u3082\u306b\uff0c \u305d\u306e\u51fa\u529b\u306e\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\uff08\u5f62\u5f0f\uff09\u3092\u6307\u5b9a\u3059\u308b\u305f\u3081\u306e\u5f79\u5272\u3092\u6301\u3063\u3066\u3044\u308b\u3002"}),(0,r.jsx)("p",{children:"\u30c7\u30fc\u30bf\u578b\u3092\u6307\u5b9a\u3059\u308b\u6307\u5b9a\u5b50\u306f\u5fc5\u9808\u3067\u3042\u308b\u3002 \u305d\u3057\u3066\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u6307\u5b9a\u5b50\u3068\u578b\u304c\u5bfe\u5fdc\u3057\u3066\u3044\u308b\u3002"}),(0,r.jsxs)("table",{className:"table table-striped mt-3 mb-3",children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{scope:"col",children:"\u6307\u5b9a\u5b50"}),(0,r.jsx)("th",{scope:"col",children:"\u5bfe\u5fdc\u3059\u308b\u578b"}),(0,r.jsx)("th",{scope:"col",children:"\u51fa\u529b\u3059\u308b\u3082\u306e"})]})}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"%d"}),(0,r.jsx)("td",{children:"int"}),(0,r.jsx)("td",{children:"\u7b26\u53f7\u4ed8\u304d\u6574\u6570\uff0810 \u9032\u6570\uff09"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"%u"}),(0,r.jsx)("td",{children:"unsigned int"}),(0,r.jsx)("td",{children:"\u7b26\u53f7\u306a\u3057\u6574\u6570\uff0810 \u9032\u6570\uff09"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"%f"}),(0,r.jsx)("td",{children:"float, double"}),(0,r.jsx)("td",{children:"\u6d6e\u52d5\u5c0f\u6570\u70b9\u6570"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"%c"}),(0,r.jsx)("td",{children:"char"}),(0,r.jsx)("td",{children:"1 \u6587\u5b57"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"%s"}),(0,r.jsx)("td",{children:"char[], char*"}),(0,r.jsx)("td",{children:"\u6587\u5b57\u5217"})]})]})]}),(0,r.jsx)("p",{children:"\u30d7\u30ed\u30b0\u30e9\u30e0\u306e\u51e6\u7406\u3092\u78ba\u304b\u3081\u308b\u969b\u306b\u5024\u306e\u51fa\u529b\u3092\u983b\u7e41\u306b\u884c\u3046\u305f\u3081\uff0c\u3053\u308c\u3089\u306f\u3068\u3066\u3082\u91cd\u8981\u3067\u3042\u308b\u3002"})]})]}),(0,r.jsxs)(c.Z,{children:[(0,r.jsx)("h2",{children:"\u8a73\u7d30\u306a\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u306e\u6307\u5b9a"}),(0,r.jsx)("p",{children:"\u5148\u7a0b\u306e\u8868\u306b\u793a\u3057\u305f\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u6307\u5b9a\u5b50\u306f\u3001\u5909\u63db\u6307\u5b9a\u5b50\u3068\u547c\u3070\u308c\u308b\u3082\u306e\u3067\u30c7\u30fc\u30bf\u306e\u578b\u306e\u307f\u3092\u6307\u5b9a\u3057\u3066\u3044\u305f\u304c\u3001 \u3088\u308a\u8a73\u7d30\u306a\u6307\u5b9a\u3082\u53ef\u80fd\u3067\u3042\u308b\u3002"})]}),(0,r.jsxs)(d.Z,{children:[(0,r.jsxs)(a.Z,{children:[(0,r.jsx)("h3",{children:"\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u6307\u5b9a\u5b50\u306e\u69cb\u6587"}),(0,r.jsx)("p",{children:"\u51fa\u529b\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u306f\uff0c\u30d5\u30e9\u30b0 (flags)\uff0c\u6700\u5c0f\u30d5\u30a3\u30fc\u30eb\u30c9\u5e45(width)\uff0c\u7cbe\u5ea6(precision)\uff0c \u9577\u3055(length)\uff0c \u5909\u63db\u6307\u5b9a\u5b50(type)\u305d\u308c\u305e\u308c\u3092\u9806\u306b\u7d44\u307f\u5408\u308f\u305b\u305f\u69cb\u6587\u3067\u6307\u5b9a\u3059\u308b\u3002 \u3053\u308c\u306b\u3088\u308a\u8a73\u7d30\u306a\u6307\u5b9a\u3067\u51fa\u529b\u3067\u304d\u308b\u3002"}),(0,r.jsx)(h.Z,{source:"%[flag][width][.precision][length]type",language:"bash"}),(0,r.jsx)("p",{children:"[\u304b\u3063\u3053] \u3067\u62ec\u3089\u308c\u305f\u90e8\u5206\u306f\u30aa\u30d7\u30b7\u30e7\u30f3\u3067\u3042\u308a\uff0c\u5fc5\u8981\u306a\u5834\u5408\u306b\u306e\u307f\u66f8\u3051\u3070\u3088\u3044\u3002 [ ] \u306f\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9\u306b\u542b\u3081\u308b\u6587\u5b57\u3067\u306f\u306a\u304f\u9818\u57df\u3092\u8868\u3057\u3066\u3044\u308b\u3002"})]}),(0,r.jsxs)(a.Z,{children:[(0,r.jsx)("h3",{children:"\u30d5\u30e9\u30b0"}),(0,r.jsxs)("table",{className:"table table-striped mt-3 mb-3",children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{scope:"col",children:"\u30d5\u30e9\u30b0"}),(0,r.jsx)("th",{scope:"col",children:"\u8aac\u660e"})]})}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"-"}),(0,r.jsx)("td",{children:"\u5de6\u5bc4\u305b\u3067\u51fa\u529b\uff08\u30c7\u30d5\u30a9\u30eb\u30c8\u306f\u53f3\u5bc4\u305b\uff09"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"+"}),(0,r.jsx)("td",{children:"\u5fc5\u305a\u7b26\u53f7\u4ed8\u304d\u3067\u51fa\u529b\uff08\u30c7\u30d5\u30a9\u30eb\u30c8\u306f\u30de\u30a4\u30ca\u30b9\u306e\u307f\uff09"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"\u534a\u89d2\u30b9\u30da\u30fc\u30b9"}),(0,r.jsx)("td",{children:"\u6b63\u306e\u7b26\u53f7\u306e\u5834\u5408\uff0c\u305d\u306e\u4f4d\u7f6e\u306b\u534a\u89d2\u30b9\u30da\u30fc\u30b9\u3092\u51fa\u529b \uff08\u30c7\u30d5\u30a9\u30eb\u30c8\u306f\u4f55\u3082\u51fa\u529b\u3055\u308c\u305a\uff09"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"0"}),(0,r.jsx)("td",{children:"\u51fa\u529b\u3059\u308b\u6587\u5b57\u6570\u304c\u6700\u5c0f\u30d5\u30a3\u30fc\u30eb\u30c9\u5e45\u672a\u6e80\u306e\u5834\u5408\u306b\u306f\uff0c\u305d\u308c\u307e\u3067 0 \u3092\u51fa\u529b\u3059\u308b"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"' (\u30a2\u30dd\u30b9\u30c8\u30ed\u30d5\u30a3)"}),(0,r.jsx)("td",{children:"10 \u9032\u6570\u306e\u5834\u5408\uff0c1000 \u5358\u4f4d\u3067\u30bb\u30d1\u30ec\u30fc\u30bf\u304c\u8868\u793a\u3055\u308c\u308b\u3002"})]})]})]})]}),(0,r.jsxs)(a.Z,{children:[(0,r.jsx)("h3",{children:"\u6700\u5c0f\u30d5\u30a3\u30fc\u30eb\u30c9\u5e45"}),(0,r.jsx)("p",{children:"\u6700\u5c0f\u30d5\u30a3\u30fc\u30eb\u30c9\u5e45\u306f\uff0c\u51fa\u529b\u3059\u308b\u6587\u5b57\u6570\u306e\u6700\u5c0f\u3092\u6307\u5b9a\u3059\u308b\u3002 \u3064\u307e\u308a\uff0c\u51fa\u529b\u3059\u308b\u6587\u5b57\u6570\u304c\u6307\u5b9a\u3057\u305f\u3082\u306e\u3088\u308a\u5927\u304d\u3044\u5834\u5408\u306b\u306f\u524a\u3089\u308c\u308b\u3053\u3068\u306a\u304f\u8868\u793a\u3055\u308c\u308b\u3002"})]}),(0,r.jsxs)(a.Z,{children:[(0,r.jsx)("h3",{children:"\u7cbe\u5ea6"}),(0,r.jsx)("p",{children:"\u7cbe\u5ea6\u306f\uff0c\u51fa\u529b\u306e\u6700\u5927\u6587\u5b57\u6570\u3092\u6307\u5b9a\u3059\u308b\u3082\u306e\u3067\u3042\u308b\u3002 \u6d6e\u52d5\u5c0f\u6570\u70b9\u6570\u3092\u8868\u3059\u30c7\u30fc\u30bf\u578b\u306e\u5834\u5408\u306b\u306f\uff0c\u5c0f\u6570\u70b9\u4ee5\u4e0b\u306e\u6841\u6570\u3092\u6307\u5b9a\u3059\u308b\u3002 \u6587\u5b57\u5217\u3092\u8868\u3059\u30c7\u30fc\u30bf\u578b\u306e\u5834\u5408\u306b\u306f\uff0c\u5148\u982d\u304b\u3089\u8868\u793a\u3059\u308b\u6700\u5927\u306e\u6587\u5b57\u6570\u3092\u6307\u5b9a\u3059\u308b\u3002 \uff08\u305d\u3053\u304b\u3089\u672b\u7aef\u307e\u3067\u5207\u308a\u6368\u3066\u3089\u308c\u8868\u793a\u3055\u308c\u306a\u3044\u3002\uff09"})]})]})]})})]})}},667:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/lang-c/elements/output",function(){return t(5399)}])},3272:function(e){e.exports={abstract:"abstract_abstract__2J1_W"}},4091:function(e){e.exports={grid:"documentGrid_grid__5YgcL",center:"documentGrid_center__1Iy7m"}},4824:function(e){e.exports={element:"contentElement_element__2zPOC"}},5513:function(e){e.exports={width:"widthContainer_width__bLQd8"}}},function(e){e.O(0,[774,376,779,433,888,179],(function(){return n=667,e(e.s=n);var n}));var n=e.O();_N_E=n}]);