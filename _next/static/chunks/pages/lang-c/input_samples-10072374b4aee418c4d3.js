(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[454],{603:function(e,n,t){"use strict";t.d(n,{Z:function(){return l}});var s=t(5893),r=t(3272),i=t.n(r);function l(e){return(0,s.jsx)("div",{className:i().abstract,style:e.styles,children:e.children})}},1221:function(e,n,t){"use strict";t.d(n,{Z:function(){return C}});var s=t(5893),r=t(3349),i=t(6156),l=t(2949),a=t(6610),c=t(5991),o=t(5255),d=t(6089),h=t(7608),u=t(7294),m=t(3300),x=t.n(m),p=t(9235),j=t(7694),f=t(5005),g=t(7625),_=t(767),Z=t(8774),v=t(4370),b=t(3253),w=t.n(b);function y(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,s)}return t}function H(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?y(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):y(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function O(e){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,s=(0,h.Z)(e);if(n){var r=(0,h.Z)(this).constructor;t=Reflect.construct(s,arguments,r)}else t=s.apply(this,arguments);return(0,d.Z)(this,t)}}function I(e){var n={backgroundColor:"#f6f8fa",fontSize:"14px",padding:"7px 1rem 5px 1rem",margin:"0",overflow:"auto"};return Object.keys(e).includes("maxHeight")&&(n.maxHeight=e.maxHeight),(0,s.jsx)("pre",{style:n,children:e.children})}var N=function(e){(0,o.Z)(t,e);var n=O(t);function t(e){var s;return(0,a.Z)(this,t),(s=n.call(this,e)).state={loaded:!1,source:"",showModal:!1},s.maxHeight="15rem",s.margin="",e.maxHeight&&(s.maxHeight=e.maxHeight),s}return(0,c.Z)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.uri?x()(this.props.uri).then((function(e){return e.text()})).then((function(e){var n=e.split("\n");return""===n.slice(-1)[0]&&n.pop(),n.join("\n")})).then((function(n){e.setState({loaded:!0,source:n})})).catch((function(n){return e.setState({loaded:!0,source:n})})):(this.setState({loaded:!0,source:this.props.source}),this.margin="mt-3 mb-3")}},{key:"render",value:function(){var e=this,n=(p.lG.theme,(0,l.Z)(p.lG,["theme"]));return(0,s.jsx)("div",{className:this.margin,children:(0,s.jsx)(p.ZP,H(H({theme:j.Z},n),{},{code:this.state.source,language:this.props.language,children:function(n){var t=n.className,r=n.style,i=n.tokens,l=n.getLineProps,a=n.getTokenProps;return(0,s.jsx)(I,{className:t,style:r,maxHeight:e.maxHeight,children:i.map((function(e,n){return(0,s.jsx)("div",H(H({},l({line:e,key:n})),{},{children:e.map((function(e,n){return(0,s.jsx)("span",H({},a({token:e,key:n})))}))}))}))})}}))})}}]),t}(u.Component),k={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",maxHeight:"100vh",transform:"translate(-50%, -50%)"}},C=function(e){(0,o.Z)(t,e);var n=O(t);function t(e){var s;return(0,a.Z)(this,t),(s=n.call(this,e)).state={showModal:!1},s.handleOpenModal=s.handleOpenModal.bind((0,r.Z)(s)),s.handleCloseModal=s.handleCloseModal.bind((0,r.Z)(s)),s}return(0,c.Z)(t,[{key:"handleOpenModal",value:function(){this.setState({showModal:!0})}},{key:"handleCloseModal",value:function(){this.setState({showModal:!1})}},{key:"render",value:function(){return this.props.uri?(0,s.jsxs)("div",{style:{margin:"8px 0 8px 0"},children:[(0,s.jsx)(N,H({},this.props)),(0,s.jsxs)("div",{style:{textAlign:"right",padding:"5px 0 5px 0"},children:[this.props.expand&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(f.Z,{variant:"outline-dark",size:"md",onClick:this.handleOpenModal,children:(0,s.jsx)(g.G,{icon:Z.TT,style:{width:"1rem"}})}),(0,s.jsxs)(w(),{isOpen:this.state.showModal,onRequestClose:this.handleCloseModal,style:k,children:[(0,s.jsx)(N,H(H({},this.props),{},{maxHeight:"80vh"})),(0,s.jsx)("div",{style:{textAlign:"right"},children:(0,s.jsx)(f.Z,{variant:"outline-dark",size:"md",onClick:this.handleCloseModal,children:(0,s.jsx)(g.G,{icon:v.nY,style:{width:"1rem"}})})})]})]}),this.props.download&&(0,s.jsx)("a",{href:this.props.uri,download:!0,className:"ml-1",children:(0,s.jsx)(f.Z,{variant:"outline-primary",size:"md",className:"m-0 mr-1",children:(0,s.jsx)(g.G,{icon:_.q7,style:{width:"1rem"}})})})]})]}):(0,s.jsx)(N,H({},this.props))}}]),t}(u.Component)},6905:function(e,n,t){"use strict";t.d(n,{Z:function(){return l}});var s=t(5893),r=t(4824),i=t.n(r);function l(e){return(0,s.jsx)("div",{className:i().element,style:e.styles,children:e.children})}},5642:function(e,n,t){"use strict";t.d(n,{Z:function(){return l}});var s=t(5893),r=t(4091),i=t.n(r);function l(e){return(0,s.jsx)("div",{className:i().grid,children:e.children})}},8237:function(e,n,t){"use strict";t.d(n,{Z:function(){return c}});var s=t(5893),r=t(3062),i=t(4315),l=t(4505),a=t(1664);t(7625);function c(){return(0,s.jsx)("div",{className:"sticky-top",children:(0,s.jsxs)(r.Z,{bg:"light",style:{paddingRight:"7rem"},children:[(0,s.jsx)(a.default,{href:"/lang-c",className:"font-weight-bold",children:(0,s.jsx)("span",{className:"text-dark pr-3",children:"C \u8a00\u8a9e\u5165\u9580"})}),(0,s.jsx)(r.Z.Toggle,{"aria-controls":"nav2"}),(0,s.jsx)(r.Z.Collapse,{id:"nav2",children:(0,s.jsxs)(i.Z,{className:"ml-auto mr-auto",children:[(0,s.jsx)(l.Z.Divider,{}),(0,s.jsxs)(l.Z,{title:"\u306f\u3058\u3081\u306b",id:"basic-nav-dropdown",children:[(0,s.jsx)(l.Z.Item,{href:"/lang-c/introductions/stance",children:"\u30d7\u30ed\u30b0\u30e9\u30df\u30f3\u30b0\u3068\u306f\uff1f"}),(0,s.jsx)(l.Z.Item,{href:"/lang-c/introductions/install",children:"\u74b0\u5883\u69cb\u7bc9"}),(0,s.jsx)(l.Z.Item,{href:"/lang-c/introductions/hello",children:"\u306f\u3058\u3081\u3066\u306e\u30b3\u30f3\u30d1\u30a4\u30eb"}),(0,s.jsx)(l.Z.Item,{href:"/lang-c/introductions/trial",children:"\u52b9\u7387\u3088\u304f\u7fd2\u5f97\u3059\u308b\u305f\u3081\u306b"})]})]})}),(0,s.jsx)(r.Z.Toggle,{"aria-controls":"nav2"}),(0,s.jsx)(r.Z.Collapse,{id:"nav2",children:(0,s.jsx)(i.Z,{className:"ml-auto mr-auto",children:(0,s.jsxs)(l.Z,{title:"\u69cb\u6587\u30fb\u898f\u5247",id:"basic-nav-dropdown",children:[(0,s.jsx)(l.Z.Item,{href:"/lang-c/elements/literal_and_variable",children:"\u30ea\u30c6\u30e9\u30eb\u3068\u5909\u6570"}),(0,s.jsx)(l.Z.Item,{href:"/lang-c/elements/output",children:"\u6a19\u6e96\u51fa\u529b"}),(0,s.jsx)(l.Z.Item,{href:"/lang-c/elements/argv",children:"\u30b3\u30de\u30f3\u30c9\u30e9\u30a4\u30f3\u5f15\u6570"}),(0,s.jsx)(l.Z.Item,{href:"/lang-c/elements/statement",children:"\u5ba3\u8a00\u6587\u30fb\u5b9f\u884c\u6587"}),(0,s.jsx)(l.Z.Item,{href:"/lang-c/elements/array",children:"\u914d\u5217"}),(0,s.jsx)(l.Z.Item,{href:"/lang-c/elements/structure",children:"\u69cb\u9020\u4f53"}),(0,s.jsx)(l.Z.Item,{href:"/lang-c/elements/operator",children:"\u6f14\u7b97\u5b50"}),(0,s.jsx)(l.Z.Item,{href:"/lang-c/elements/conditional_branch",children:"\u6761\u4ef6\u5206\u5c90"}),(0,s.jsx)(l.Z.Item,{href:"/lang-c/elements/loop",children:"\u53cd\u5fa9"}),(0,s.jsx)(l.Z.Item,{href:"/lang-c/elements/function",children:"\u95a2\u6570"}),(0,s.jsx)(l.Z.Item,{href:"/lang-c/elements/file_input",children:"\u30d5\u30a1\u30a4\u30eb\u5165\u529b"})]})})}),(0,s.jsx)(r.Z.Toggle,{"aria-controls":"nav3"}),(0,s.jsx)(r.Z.Collapse,{id:"nav3",children:(0,s.jsx)(i.Z,{className:"ml-auto mr-auto",children:(0,s.jsxs)(l.Z,{title:"\u7d44\u307f\u5408\u308f\u305b",id:"basic-nav-dropdown",children:[(0,s.jsx)(l.Z.Item,{href:"/lang-c/complexes/bubble_sort",children:"\u30d0\u30d6\u30eb\u30bd\u30fc\u30c8"}),(0,s.jsx)(l.Z.Item,{href:"/lang-c/complexes/file_input",children:"\u30d5\u30a1\u30a4\u30eb\u306e\u8aad\u307f\u8fbc\u307f"}),(0,s.jsx)(l.Z.Item,{href:"/lang-c/complexes/monte_carlo",children:"\u30e2\u30f3\u30c6\u30ab\u30eb\u30ed\u6cd5"}),(0,s.jsx)(l.Z.Item,{href:"/lang-c/complexes/finch",children:"\u30c7\u30fc\u30bf\u89e3\u6790"})]})})}),(0,s.jsx)(r.Z.Toggle,{"aria-controls":"nav4"}),(0,s.jsx)(r.Z.Collapse,{id:"nav4",children:(0,s.jsx)(i.Z,{className:"ml-auto mr-auto",children:(0,s.jsxs)(l.Z,{title:"\u6f14\u7fd2",id:"basic-nav-dropdown",children:[(0,s.jsx)(l.Z.Item,{href:"/lang-c/subjects/linear_search",children:"\u7dda\u578b\u63a2\u7d22"}),(0,s.jsx)(l.Z.Item,{href:"/lang-c/subjects/bubble_sort",children:"\u30d0\u30d6\u30eb\u30bd\u30fc\u30c8\u6539"}),(0,s.jsx)(l.Z.Item,{href:"/lang-c/subjects/monte_carlo",children:"\u9762\u7a4d\u306e\u8a08\u7b97"}),(0,s.jsx)(l.Z.Item,{href:"/lang-c/subjects/finch",children:"\u30c7\u30fc\u30bf\u89e3\u6790\u6539"})]})})}),(0,s.jsx)(r.Z.Toggle,{"aria-controls":"nav5"}),(0,s.jsx)(r.Z.Collapse,{id:"nav5",children:(0,s.jsx)(i.Z,{className:"ml-auto mr-auto",children:(0,s.jsx)(l.Z,{title:"\u305d\u306e\u4ed6",id:"basic-nav-dropdown",children:(0,s.jsx)(l.Z.Item,{href:"/lang-c/input_samples",children:"\u5165\u529b\u30d5\u30a1\u30a4\u30eb\u306e\u30b5\u30f3\u30d7\u30eb"})})})})]})})}},7074:function(e,n,t){"use strict";t.d(n,{Z:function(){return l}});var s=t(5893),r=t(5513),i=t.n(r);function l(e){return(0,s.jsx)("div",{className:i().width,children:e.children})}},2888:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return h}});var s=t(5893),r=t(9008),i=t(8237),l=t(7074),a=t(603),c=t(5642),o=t(6905),d=t(1221);function h(){return(0,s.jsxs)("div",{children:[(0,s.jsxs)(r.default,{children:[(0,s.jsx)("title",{children:"\u5165\u529b\u30d5\u30a1\u30a4\u30eb\u306e\u30b5\u30f3\u30d7\u30eb"}),(0,s.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,s.jsx)(i.Z,{}),(0,s.jsx)("main",{children:(0,s.jsxs)(l.Z,{children:[(0,s.jsxs)(a.Z,{children:[(0,s.jsx)("h1",{children:"\u5165\u529b\u30d5\u30a1\u30a4\u30eb\u306e\u30b5\u30f3\u30d7\u30eb"}),(0,s.jsx)("p",{children:"\u7591\u4f3c\u4e71\u6570\u3067\u751f\u6210\u3057\u305f\u3044\u308d\u3044\u308d\u306a\u5165\u529b\u30d5\u30a1\u30a4\u30eb\u3092\u7f6e\u3044\u3066\u304a\u304d\u307e\u3059\u3002"})]}),(0,s.jsxs)(c.Z,{children:[(0,s.jsxs)(o.Z,{children:[(0,s.jsx)("h2",{className:"mb-5",children:"\u6574\u6570 10 \u884c, \u533a\u9593=[0:50]"}),(0,s.jsxs)("p",{children:["\u30b7\u30fc\u30c9=1621025592805379139",(0,s.jsx)(d.Z,{uri:"/codes/lang-c/input_samples/random_int_10_0_50_1621025592805379139.ssv",maxHeight:"7rem",download:!0}),"\u30b7\u30fc\u30c9=2625719985131503282",(0,s.jsx)(d.Z,{uri:"/codes/lang-c/input_samples/random_int_10_0_50_2625719985131503282.ssv",maxHeight:"7rem",download:!0}),"\u30b7\u30fc\u30c9=3612539632838912606",(0,s.jsx)(d.Z,{uri:"/codes/lang-c/input_samples/random_int_10_0_50_3612539632838912606.ssv",maxHeight:"7rem",download:!0}),"\u30b7\u30fc\u30c9=4514793392314528655",(0,s.jsx)(d.Z,{uri:"/codes/lang-c/input_samples/random_int_10_0_50_4514793392314528655.ssv",maxHeight:"7rem",download:!0}),"\u30b7\u30fc\u30c9=4543694396077351855",(0,s.jsx)(d.Z,{uri:"/codes/lang-c/input_samples/random_int_10_0_50_4543694396077351855.ssv",maxHeight:"7rem",download:!0})]})]}),(0,s.jsxs)(o.Z,{children:[(0,s.jsx)("h2",{className:"mb-5",children:"\u6574\u6570 50 \u884c, \u533a\u9593=[0:50]"}),(0,s.jsxs)("p",{children:["\u30b7\u30fc\u30c9=1621025592805379139",(0,s.jsx)(d.Z,{uri:"/codes/lang-c/input_samples/random_int_50_0_50_1621025592805379139.ssv",maxHeight:"7rem",download:!0}),"\u30b7\u30fc\u30c9=2625719985131503282",(0,s.jsx)(d.Z,{uri:"/codes/lang-c/input_samples/random_int_50_0_50_2625719985131503282.ssv",maxHeight:"7rem",download:!0}),"\u30b7\u30fc\u30c9=3612539632838912606",(0,s.jsx)(d.Z,{uri:"/codes/lang-c/input_samples/random_int_50_0_50_3612539632838912606.ssv",maxHeight:"7rem",download:!0}),"\u30b7\u30fc\u30c9=4514793392314528655",(0,s.jsx)(d.Z,{uri:"/codes/lang-c/input_samples/random_int_50_0_50_4514793392314528655.ssv",maxHeight:"7rem",download:!0}),"\u30b7\u30fc\u30c9=4543694396077351855",(0,s.jsx)(d.Z,{uri:"/codes/lang-c/input_samples/random_int_50_0_50_4543694396077351855.ssv",maxHeight:"7rem",download:!0})]})]}),(0,s.jsxs)(o.Z,{children:[(0,s.jsx)("h2",{className:"mb-5",children:"\u30d5\u30a3\u30f3\u30c1\u306e\u4f53\u91cd\u3068\u5927\u304d\u3055"}),(0,s.jsxs)("p",{children:["\uff11\u7a2e\u985e 20 \u4ef6",(0,s.jsx)(d.Z,{uri:"/codes/lang-c/input_samples/finch_1_20.ssv",maxHeight:"7rem",download:!0}),"2 \u7a2e\u985e\u300020 \u4ef6",(0,s.jsx)(d.Z,{uri:"/codes/lang-c/input_samples/finch_2_20.ssv",maxHeight:"7rem",download:!0}),"3 \u7a2e\u985e 20 \u4ef6",(0,s.jsx)(d.Z,{uri:"/codes/lang-c/input_samples/finch_3_20.ssv",maxHeight:"7rem",download:!0}),"3 \u7a2e\u985e 30 \u4ef6",(0,s.jsx)(d.Z,{uri:"/codes/lang-c/input_samples/finch_3_30.ssv",maxHeight:"7rem",download:!0}),"3 \u7a2e\u985e 40 \u4ef6",(0,s.jsx)(d.Z,{uri:"/codes/lang-c/input_samples/finch_3_30.ssv",maxHeight:"7rem",download:!0})]})]})]})]})})]})}},6429:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/lang-c/input_samples",function(){return t(2888)}])},3272:function(e){e.exports={abstract:"abstract_abstract__2J1_W"}},4091:function(e){e.exports={grid:"documentGrid_grid__5YgcL",center:"documentGrid_center__1Iy7m"}},4824:function(e){e.exports={element:"contentElement_element__2zPOC"}},5513:function(e){e.exports={width:"widthContainer_width__bLQd8"}}},function(e){e.O(0,[774,264,779,433,888,179],(function(){return n=6429,e(e.s=n);var n}));var n=e.O();_N_E=n}]);