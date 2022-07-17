(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1459],{6610:function(t,i,e){"use strict";function n(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}e.d(i,{Z:function(){return n}})},5991:function(t,i,e){"use strict";function n(t,i){for(var e=0;e<i.length;e++){var n=i[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function r(t,i,e){return i&&n(t.prototype,i),e&&n(t,e),t}e.d(i,{Z:function(){return r}})},7022:function(t,i){"use strict";class e{constructor(t){this.mt=new Array(e.MT_N),this.mti=e.MT_M+1,this.mag01=new Array(2),this.init(t),this.mag01=[0,e.MATRIX_A]}init(t){for(this.mt[0]=4294967295&t,this.mti=1;this.mti<e.MT_N;++this.mti)this.mt[this.mti]=this.multiple_as_uint32(1812433253,this.mt[this.mti-1]^this.mt[this.mti-1]>>>30)+this.mti,this.mt[this.mti]>>>=0}genrand_int32(){let t=0;if(this.mti>=e.MT_N){let i;for(i=0;i<e.MT_N-e.MT_M;++i)t=this.mt[i]&e.UPPER_MASK|this.mt[i+1]&e.LOWER_MASK,this.mt[i]=this.mt[i+e.MT_M]^t>>>1^this.mag01[1&t];for(;i<e.MT_N-1;++i)t=this.mt[i]&e.UPPER_MASK|this.mt[i+1]&e.LOWER_MASK,this.mt[i]=this.mt[i+(e.MT_M-e.MT_N)]^t>>>1^this.mag01[1&t];t=this.mt[e.MT_N-1]&e.UPPER_MASK|this.mt[0]&e.LOWER_MASK,this.mt[e.MT_N-1]=this.mt[e.MT_M-1]^t>>>1^this.mag01[1&t],this.mti=0}return t=this.mt[this.mti++],t^=t>>>11,t^=t<<7&2636928640,t^=t<<15&4022730752,t^=t>>>18,t>>>0}genrand_real1(){return this.genrand_int32()*e.INV_1}genrand_real2(){return this.genrand_int32()*e.INV_2}genrand_real3(){return(this.genrand_int32()+.5)*e.INV_3}genrand_res53(){return(67108864*(this.genrand_int32()>>>5)+(this.genrand_int32()>>>6))*e.INV_53}multiple_as_uint32(t,i){const e=65535&t,n=65535&i;return((t>>>16)*n+e*(i>>>16)<<16)+e*n>>>0}_snapshot(){return{mt:this.mt,mti:this.mti,mag01:this.mag01}}}e.MT_N=624,e.MT_M=397,e.MATRIX_A=2567483615,e.UPPER_MASK=2147483648,e.LOWER_MASK=2147483647,e.INV_1=1/4294967295,e.INV_2=1/4294967296,e.INV_3=1/4294967296,e.INV_53=1/9007199254740992,i.Z=e},5481:function(t,i,e){"use strict";e.r(i),e.d(i,{default:function(){return x}});var n=e(5893),r=e(6630);function a(t,i){(null==i||i>t.length)&&(i=t.length);for(var e=0,n=new Array(i);e<i;e++)n[e]=t[e];return n}function h(t){return function(t){if(Array.isArray(t))return a(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,i){if(t){if("string"===typeof t)return a(t,i);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?a(t,i):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var s=e(6610),o=e(5991),u=e(6156),c=e(7022),l=22,f=function(t,i){return Math.min(Math.abs(t-i),Math.abs(t-i-l),Math.abs(t-i+l))},g="\u6c34\u6cb9".length,d=function(){function t(i,e,n){var r=this;(0,s.Z)(this,t),(0,u.Z)(this,"data",[]),(0,u.Z)(this,"nearestNeighborList",[]),(0,u.Z)(this,"nextNearestNeighborList",[]),(0,u.Z)(this,"span",{x:25,y:25}),(0,u.Z)(this,"textSize",void 0),(0,u.Z)(this,"energy",void 0),(0,u.Z)(this,"step",void 0),(0,u.Z)(this,"kT",void 0),(0,u.Z)(this,"energyHistory",void 0);for(var a=0,h=0;h<i;++h)for(var o=0;o<e;++o,++a){var c=Math.floor(t.mt.genrand_real1()*g);this.data.push({i:a,ix:h,iy:o,ic:c})}this.textSize=n,this.energy=0,this.kT=5,this.data.forEach((function(t){r.nearestNeighborList.push(r.findNearestNeighbors(t.i))})),this.data.forEach((function(t){r.nextNearestNeighborList.push(r.findNextNearestNeighbors(t.i))})),this.step=0,this.energyHistory=[0]}return(0,o.Z)(t,[{key:"findNearestNeighbors",value:function(t){var i=this.data[t];return this.data.filter((function(e){return t!==e.i&&(0===f(i.ix,e.ix)&&1===f(i.iy,e.iy)||1===f(i.ix,e.ix)&&0===f(i.iy,e.iy))})).map((function(t){return t.i}))}},{key:"findNextNearestNeighbors",value:function(t){var i=this.data[t];return this.data.filter((function(e,n){return t!==n&&1===f(i.ix,e.ix)&&1===f(i.iy,e.iy)})).map((function(t){return t.i}))}},{key:"computeTypologicalDistance",value:function(t,i){return Math.min(Math.abs(t.ic-i.ic),Math.abs(t.ic-i.ic+g),Math.abs(t.ic-i.ic-g))}},{key:"computePairPotential",value:function(t,i,e){return t*this.computeTypologicalDistance(i,e)}},{key:"computePotentialDiff",value:function(t,i){var e=this,n=this.nearestNeighborList[t].map((function(i){return[t,i]})).concat(this.nearestNeighborList[i].filter((function(i){return i!==t})).map((function(t){return[t,i]}))),r=this.nextNearestNeighborList[t].map((function(i){return[t,i]})).concat(this.nextNearestNeighborList[i].filter((function(i){return i!==t})).map((function(t){return[t,i]}))),a=function(e){return e.map((function(e){return[e[0]===t?i:e[0]===i?t:e[0],e[1]===t?i:e[1]===i?t:e[1]]}))},h=0;n.forEach((function(t){h+=e.computePairPotential(2,e.data[t[0]],e.data[t[1]])})),r.forEach((function(t){h+=e.computePairPotential(1,e.data[t[0]],e.data[t[1]])}));var s=0;return a(n).forEach((function(t){s+=e.computePairPotential(2,e.data[t[0]],e.data[t[1]])})),a(r).forEach((function(t){s+=e.computePairPotential(1,e.data[t[0]],e.data[t[1]])})),h-s}},{key:"trialSwapping",value:function(){var i=Math.floor(t.mt.genrand_real2()*this.data.length),e=t.mt.genrand_real1()<.7?this.nearestNeighborList[i][Math.floor(t.mt.genrand_real2()*this.nearestNeighborList[i].length)]:this.nextNearestNeighborList[i][Math.floor(t.mt.genrand_real2()*this.nextNearestNeighborList[i].length)],n=this.computePotentialDiff(i,e);if(t.mt.genrand_real1()<Math.min(1,Math.exp(n/this.kT))){var r=this.data[i].ic;this.data[i].ic=this.data[e].ic,this.data[e].ic=r,this.energy-=n}this.step%150===0&&(this.energyHistory.unshift(this.energy),this.energyHistory.splice(270)),this.step+=1}},{key:"upKT",value:function(){this.kT*=1.1,console.log(this.kT)}},{key:"downKT",value:function(){this.kT/=1.1,console.log(this.kT)}},{key:"getEnergyHistory",value:function(){return this.energyHistory}},{key:"draw",value:function(t){var i=this;t.textAlign(t.CENTER,t.CENTER),t.textSize(this.textSize),t.textFont("BIZ UDPMincho"),this.data.forEach((function(e){0===e.ic?t.fill(t.color(0,141,183)):t.fill("yellow"),t.noStroke(),t.text("\u6c34\u6cb9"[e.ic],e.ix*i.span.x+1.5*i.span.x,e.iy*i.span.y+1.5*i.span.y)}))}}]),t}();(0,u.Z)(d,"mt",new c.Z(4756273526));var m=function(){function t(i,e,n,r,a){(0,s.Z)(this,t),(0,u.Z)(this,"data",void 0),(0,u.Z)(this,"height",void 0),(0,u.Z)(this,"length",void 0),(0,u.Z)(this,"x",void 0),(0,u.Z)(this,"y",void 0),this.data=i,this.height=r,this.x=e,this.y=n,this.length=a}return(0,o.Z)(t,[{key:"draw",value:function(t){var i=this;t.stroke("white"),t.strokeWeight(1);var e=Math.max.apply(Math,h(this.data)),n=Math.min.apply(Math,h(this.data)),r=Math.floor(e-n)+1;this.data.forEach((function(e,a){t.point(i.x-a+i.length,i.y+i.height-(e-n)/r*i.height)})),t.noFill(),t.rectMode(t.CORNER),t.textSize(10),t.strokeWeight(.5),t.textFont("Armata"),t.text(e,this.x,this.y),t.text(Math.floor((e+n)/2),this.x,this.y+.5*this.height),t.text(n,this.x,this.y+this.height)}}]),t}(),y=function(){function t(i,e,n,r,a){(0,s.Z)(this,t),(0,u.Z)(this,"current",[]),(0,u.Z)(this,"height",void 0),(0,u.Z)(this,"length",void 0),(0,u.Z)(this,"x",void 0),(0,u.Z)(this,"y",void 0);for(var h=0;h<=l;++h)this.current.push({distance:h,count:0,total:0});this.updateCurrentData(i),this.height=r,this.length=a,this.x=e,this.y=n}return(0,o.Z)(t,[{key:"updateCurrentData",value:function(t){for(var i=0,e=this.current.length;i<e;++i)this.current[i].count=0,this.current[i].total=0;for(var n=0,r=t.length;n<r;++n)for(var a=0;a<r;++a){var h=f(t[n].ix,t[a].ix)+f(t[n].iy,t[a].iy);this.current[h].count+=t[n].ic===t[a].ic?1:0,this.current[h].total+=1}}},{key:"draw",value:function(t){var i=this;t.strokeWeight(1),this.current.forEach((function(e){var n=e.count/e.total;t.point(i.x+.5*i.length+e.distance*(.5*i.length/l),i.y+.5*i.height+2*(.5-n)*.5*i.height),t.point(i.x+.5*i.length-e.distance*(.5*i.length/l),i.y+.5*i.height+2*(.5-n)*.5*i.height)})),t.textSize(10),t.strokeWeight(.5),t.textFont("Armata"),t.text(0,this.x+.5*this.length,this.y+.66*this.height),t.text(-12,this.x+.5*this.length-.5*this.length/l*12,this.y+.66*this.height),t.text(12,this.x+.5*this.length+.5*this.length/l*12,this.y+.66*this.height)}}]),t}(),p=function(){function t(i,e,n,r){(0,s.Z)(this,t),(0,u.Z)(this,"height",void 0),(0,u.Z)(this,"length",void 0),(0,u.Z)(this,"x",void 0),(0,u.Z)(this,"y",void 0),this.height=n,this.length=r,this.x=i,this.y=e}return(0,o.Z)(t,[{key:"draw",value:function(t){t.rect(this.x,this.y,this.length,this.height)}}]),t}(),v=function(t){var i=new d(l,l,14),e=new m(i.getEnergyHistory(),600,30,150,270),n=new y(i.data,600,200,200,270),r=new p(600,420,150,270);t.preload=function(){for(var t=0;t<Math.pow(10,5);++t)i.trialSwapping()},t.setup=function(){t.createCanvas(900,600),t.background(50),t.frameRate(30)},t.draw=function(){t.background(50),i.draw(t);for(var a=0;a<50;++a)i.trialSwapping();e.draw(t),n.updateCurrentData(i.data),n.draw(t),r.draw(t)},t.keyPressed=function(){t.keyCode===t.UP_ARROW&&i.upKT(),t.keyCode===t.DOWN_ARROW&&i.downKT(),t.keyCode===t.ESCAPE&&t.noLoop()}},_=(0,n.jsxs)("div",{className:"text-center w-100",children:[(0,n.jsx)("div",{className:"m-3",children:"\u624b\u3092\u52a0\u3048\u305f\u304b\u3089\u826f\u304f\u306a\u308b\u3068\u306f\u9650\u3089\u306a\u3044\u3002"}),(0,n.jsx)("div",{className:"m-3",children:"\u77ed\u671f\u7684\u306b\u307f\u3066\u597d\u307e\u3057\u304f\u5909\u5316\u3057\u3066\u3044\u308b\u3088\u3046\u3067\u3082\uff0c\u9577\u671f\u7684\u306b\u306f\u305d\u3046\u3067\u306f\u306a\u3044\u304b\u3082\u3057\u308c\u306a\u3044\u3002"})]}),x=function(){return(0,r.Z)(v,"\u754c\u9762 \u76e3\u8996 \u4f5c\u70ba",_)}},9237:function(t,i,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/p5/gallery/oil-water",function(){return e(5481)}])}},function(t){t.O(0,[9774,6630,2888,179],(function(){return i=9237,t(t.s=i);var i}));var i=t.O();_N_E=i}]);