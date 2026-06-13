var x_=Object.defineProperty;var S_=(r,t,e)=>t in r?x_(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var Lt=(r,t,e)=>S_(r,typeof t!="symbol"?t+"":t,e);function Ui(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function hp(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Kn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Jo={duration:.5,overwrite:!1,delay:0},fu,an,Le,si=1e8,we=1/si,Zc=Math.PI*2,M_=Zc/4,y_=0,up=Math.sqrt,E_=Math.cos,b_=Math.sin,nn=function(t){return typeof t=="string"},Oe=function(t){return typeof t=="function"},ki=function(t){return typeof t=="number"},du=function(t){return typeof t=="undefined"},Ai=function(t){return typeof t=="object"},Dn=function(t){return t!==!1},pu=function(){return typeof window!="undefined"},ua=function(t){return Oe(t)||nn(t)},fp=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},mn=Array.isArray,T_=/random\([^)]+\)/g,w_=/,\s*/g,rf=/(?:-?\.?\d|\.)+/gi,dp=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Fs=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,jl=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,pp=/[+-]=-?[.\d]+/,A_=/[^,'"\[\]\s]+/gi,R_=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ue,gi,Jc,mu,jn={},vl={},mp,_p=function(t){return(vl=Zs(t,jn))&&Nn},_u=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Qo=function(t,e){return!e&&console.warn(t)},gp=function(t,e){return t&&(jn[t]=e)&&vl&&(vl[t]=e)||jn},ta=function(){return 0},C_={suppressEvents:!0,isStart:!0,kill:!1},nl={suppressEvents:!0,kill:!1},P_={suppressEvents:!0},gu={},cr=[],Qc={},vp,Gn={},Zl={},sf=30,il=[],vu="",xu=function(t){var e=t[0],n,i;if(Ai(e)||Oe(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=il.length;i--&&!il[i].targetTest(e););n=il[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new kp(t[i],n)))||t.splice(i,1);return t},Wr=function(t){return t._gsap||xu(oi(t))[0]._gsap},xp=function(t,e,n){return(n=t[e])&&Oe(n)?t[e]():du(n)&&t.getAttribute&&t.getAttribute(e)||n},Ln=function(t,e){return(t=t.split(",")).forEach(e)||t},ke=function(t){return Math.round(t*1e5)/1e5||0},Ie=function(t){return Math.round(t*1e7)/1e7||0},Hs=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},D_=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},xl=function(){var t=cr.length,e=cr.slice(0),n,i;for(Qc={},cr.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Su=function(t){return!!(t._initted||t._startAt||t.add)},Sp=function(t,e,n,i){cr.length&&!an&&xl(),t.render(e,n,!!(an&&e<0&&Su(t))),cr.length&&!an&&xl()},Mp=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(A_).length<2?e:nn(t)?t.trim():t},yp=function(t){return t},Zn=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},L_=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},Zs=function(t,e){for(var n in e)t[n]=e[n];return t},of=function r(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=Ai(e[n])?r(t[n]||(t[n]={}),e[n]):e[n]);return t},Sl=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},ko=function(t){var e=t.parent||Ue,n=t.keyframes?L_(mn(t.keyframes)):Zn;if(Dn(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},I_=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},Ep=function(t,e,n,i,s){var o=t[i],a;if(s)for(a=e[s];o&&o[s]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=o,e.parent=e._dp=t,e},Bl=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,o=e._next;s?s._next=o:t[n]===e&&(t[n]=o),o?o._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},mr=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Xr=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},U_=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},th=function(t,e,n,i){return t._startAt&&(an?t._startAt.revert(nl):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},N_=function r(t){return!t||t._ts&&r(t.parent)},af=function(t){return t._repeat?Js(t._tTime,t=t.duration()+t._rDelay)*t:0},Js=function(t,e){var n=Math.floor(t=Ie(t/e));return t&&n===t?n-1:n},Ml=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},zl=function(t){return t._end=Ie(t._start+(t._tDur/Math.abs(t._ts||t._rts||we)||0))},kl=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=Ie(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),zl(t),n._dirty||Xr(n,t)),t},bp=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=Ml(t.rawTime(),e),(!e._dur||ca(0,e.totalDuration(),n)-e._tTime>we)&&e.render(n,!0)),Xr(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-we}},Si=function(t,e,n,i){return e.parent&&mr(e),e._start=Ie((ki(n)?n:n||t!==Ue?ei(t,n,e):t._time)+e._delay),e._end=Ie(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Ep(t,e,"_first","_last",t._sort?"_start":0),eh(e)||(t._recent=e),i||bp(t,e),t._ts<0&&kl(t,t._tTime),t},Tp=function(t,e){return(jn.ScrollTrigger||_u("scrollTrigger",e))&&jn.ScrollTrigger.create(e,t)},wp=function(t,e,n,i,s){if(yu(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!an&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&vp!==Xn.frame)return cr.push(t),t._lazy=[s,i],1},O_=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},eh=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},F_=function(t,e,n,i){var s=t.ratio,o=e<0||!e&&(!t._start&&O_(t)&&!(!t._initted&&eh(t))||(t._ts<0||t._dp._ts<0)&&!eh(t))?0:1,a=t._rDelay,l=0,c,h,u;if(a&&t._repeat&&(l=ca(0,t._tDur,e),h=Js(l,a),t._yoyo&&h&1&&(o=1-o),h!==Js(t._tTime,a)&&(s=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==s||an||i||t._zTime===we||!e&&t._zTime){if(!t._initted&&wp(t,e,i,n,l))return;for(u=t._zTime,t._zTime=e||(n?we:0),n||(n=e&&!u),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,c=t._pt;c;)c.r(o,c.d),c=c._next;e<0&&th(t,e,n,!0),t._onUpdate&&!n&&qn(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&qn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&mr(t,1),!n&&!an&&(qn(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},B_=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},Qs=function(t,e,n,i){var s=t._repeat,o=Ie(e)||0,a=t._tTime/t._tDur;return a&&!i&&(t._time*=o/t._dur),t._dur=o,t._tDur=s?s<0?1e10:Ie(o*(s+1)+t._rDelay*s):o,a>0&&!i&&kl(t,t._tTime=t._tDur*a),t.parent&&zl(t),n||Xr(t.parent,t),t},lf=function(t){return t instanceof Cn?Xr(t):Qs(t,t._dur)},z_={_start:0,endTime:ta,totalDuration:ta},ei=function r(t,e,n){var i=t.labels,s=t._recent||z_,o=t.duration()>=si?s.endTime(!1):t._dur,a,l,c;return nn(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(e in i||(i[e]=o),i[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&n&&(l=l/100*(mn(n)?n[0]:n).totalDuration()),a>1?r(t,e.substr(0,a-1),n)+l:o+l)):e==null?o:+e},Ho=function(t,e,n){var i=ki(e[1]),s=(i?2:1)+(t<2?0:1),o=e[s],a,l;if(i&&(o.duration=e[1]),o.parent=n,t){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Dn(l.vars.inherit)&&l.parent;o.immediateRender=Dn(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[s-1]}return new Xe(e[0],o,e[s+1])},Sr=function(t,e){return t||t===0?e(t):e},ca=function(t,e,n){return n<t?t:n>e?e:n},dn=function(t,e){return!nn(t)||!(e=R_.exec(t))?"":e[1]},k_=function(t,e,n){return Sr(n,function(i){return ca(t,e,i)})},nh=[].slice,Ap=function(t,e){return t&&Ai(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Ai(t[0]))&&!t.nodeType&&t!==gi},H_=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return nn(i)&&!e||Ap(i,1)?(s=n).push.apply(s,oi(i)):n.push(i)})||n},oi=function(t,e,n){return Le&&!e&&Le.selector?Le.selector(t):nn(t)&&!n&&(Jc||!to())?nh.call((e||mu).querySelectorAll(t),0):mn(t)?H_(t,n):Ap(t)?nh.call(t,0):t?[t]:[]},ih=function(t){return t=oi(t)[0]||Qo("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return oi(e,n.querySelectorAll?n:n===t?Qo("Invalid scope")||mu.createElement("div"):t)}},Rp=function(t){return t.sort(function(){return .5-Math.random()})},Cp=function(t){if(Oe(t))return t;var e=Ai(t)?t:{each:t},n=Yr(e.ease),i=e.from||0,s=parseFloat(e.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=e.axis,h=i,u=i;return nn(i)?h=u={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(h=i[0],u=i[1]),function(f,d,_){var g=(_||e).length,p=o[g],m,S,x,M,E,w,y,R,L;if(!p){if(L=e.grid==="auto"?0:(e.grid||[1,si])[1],!L){for(y=-si;y<(y=_[L++].getBoundingClientRect().left)&&L<g;);L<g&&L--}for(p=o[g]=[],m=l?Math.min(L,g)*h-.5:i%L,S=L===si?0:l?g*u/L-.5:i/L|0,y=0,R=si,w=0;w<g;w++)x=w%L-m,M=S-(w/L|0),p[w]=E=c?Math.abs(c==="y"?M:x):up(x*x+M*M),E>y&&(y=E),E<R&&(R=E);i==="random"&&Rp(p),p.max=y-R,p.min=R,p.v=g=(parseFloat(e.amount)||parseFloat(e.each)*(L>g?g-1:c?c==="y"?g/L:L:Math.max(L,g/L))||0)*(i==="edges"?-1:1),p.b=g<0?s-g:s,p.u=dn(e.amount||e.each)||0,n=n&&g<0?t0(n):n}return g=(p[f]-p.min)/p.max||0,Ie(p.b+(n?n(g):g)*p.v)+p.u}},rh=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=Ie(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(ki(n)?0:dn(n))}},Pp=function(t,e){var n=mn(t),i,s;return!n&&Ai(t)&&(i=n=t.radius||si,t.values?(t=oi(t.values),(s=!ki(t[0]))&&(i*=i)):t=rh(t.increment)),Sr(e,n?Oe(t)?function(o){return s=t(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=si,h=0,u=t.length,f,d;u--;)s?(f=t[u].x-a,d=t[u].y-l,f=f*f+d*d):f=Math.abs(t[u]-a),f<c&&(c=f,h=u);return h=!i||c<=i?t[h]:o,s||h===o||ki(o)?h:h+dn(o)}:rh(t))},Dp=function(t,e,n,i){return Sr(mn(t)?!e:n===!0?!!(n=0):!i,function(){return mn(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},G_=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,o){return o(s)},i)}},V_=function(t,e){return function(n){return t(parseFloat(n))+(e||dn(n))}},W_=function(t,e,n){return Ip(t,e,0,1,n)},Lp=function(t,e,n){return Sr(n,function(i){return t[~~e(i)]})},X_=function r(t,e,n){var i=e-t;return mn(t)?Lp(t,r(0,t.length),e):Sr(n,function(s){return(i+(s-t)%i)%i+t})},Y_=function r(t,e,n){var i=e-t,s=i*2;return mn(t)?Lp(t,r(0,t.length-1),e):Sr(n,function(o){return o=(s+(o-t)%s)%s||0,t+(o>i?s-o:o)})},ea=function(t){return t.replace(T_,function(e){var n=e.indexOf("[")+1,i=e.substring(n||7,n?e.indexOf("]"):e.length-1).split(w_);return Dp(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},Ip=function(t,e,n,i,s){var o=e-t,a=i-n;return Sr(s,function(l){return n+((l-t)/o*a||0)})},q_=function r(t,e,n,i){var s=isNaN(t+e)?0:function(d){return(1-d)*t+d*e};if(!s){var o=nn(t),a={},l,c,h,u,f;if(n===!0&&(i=1)&&(n=null),o)t={p:t},e={p:e};else if(mn(t)&&!mn(e)){for(h=[],u=t.length,f=u-2,c=1;c<u;c++)h.push(r(t[c-1],t[c]));u--,s=function(_){_*=u;var g=Math.min(f,~~_);return h[g](_-g)},n=e}else i||(t=Zs(mn(t)?[]:{},t));if(!h){for(l in e)Mu.call(a,t,l,"get",e[l]);s=function(_){return Tu(_,a)||(o?t.p:t)}}}return Sr(n,s)},cf=function(t,e,n){var i=t.labels,s=si,o,a,l;for(o in i)a=i[o]-e,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},qn=function(t,e,n){var i=t.vars,s=i[e],o=Le,a=t._ctx,l,c,h;if(s)return l=i[e+"Params"],c=i.callbackScope||t,n&&cr.length&&xl(),a&&(Le=a),h=l?s.apply(c,l):s.call(c),Le=o,h},Lo=function(t){return mr(t),t.scrollTrigger&&t.scrollTrigger.kill(!!an),t.progress()<1&&qn(t,"onInterrupt"),t},Bs,Up=[],Np=function(t){if(t)if(t=!t.name&&t.default||t,pu()||t.headless){var e=t.name,n=Oe(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:ta,render:Tu,add:Mu,kill:h0,modifier:c0,rawVars:0},o={targetTest:0,get:0,getSetter:bu,aliases:{},register:0};if(to(),t!==i){if(Gn[e])return;Zn(i,Zn(Sl(t,s),o)),Zs(i.prototype,Zs(s,Sl(t,o))),Gn[i.prop=e]=i,t.targetTest&&(il.push(i),gu[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}gp(e,i),t.register&&t.register(Nn,i,In)}else Up.push(t)},Te=255,Io={aqua:[0,Te,Te],lime:[0,Te,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Te],navy:[0,0,128],white:[Te,Te,Te],olive:[128,128,0],yellow:[Te,Te,0],orange:[Te,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Te,0,0],pink:[Te,192,203],cyan:[0,Te,Te],transparent:[Te,Te,Te,0]},Jl=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*Te+.5|0},Op=function(t,e,n){var i=t?ki(t)?[t>>16,t>>8&Te,t&Te]:0:Io.black,s,o,a,l,c,h,u,f,d,_;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Io[t])i=Io[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+s+s+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&Te,i&Te,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&Te,t&Te]}else if(t.substr(0,3)==="hsl"){if(i=_=t.match(rf),!e)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,o=h<=.5?h*(c+1):h+c-h*c,s=h*2-o,i.length>3&&(i[3]*=1),i[0]=Jl(l+1/3,s,o),i[1]=Jl(l,s,o),i[2]=Jl(l-1/3,s,o);else if(~t.indexOf("="))return i=t.match(dp),n&&i.length<4&&(i[3]=1),i}else i=t.match(rf)||Io.transparent;i=i.map(Number)}return e&&!_&&(s=i[0]/Te,o=i[1]/Te,a=i[2]/Te,u=Math.max(s,o,a),f=Math.min(s,o,a),h=(u+f)/2,u===f?l=c=0:(d=u-f,c=h>.5?d/(2-u-f):d/(u+f),l=u===s?(o-a)/d+(o<a?6:0):u===o?(a-s)/d+2:(s-o)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},Fp=function(t){var e=[],n=[],i=-1;return t.split(hr).forEach(function(s){var o=s.match(Fs)||[];e.push.apply(e,o),n.push(i+=o.length+1)}),e.c=n,e},hf=function(t,e,n){var i="",s=(t+i).match(hr),o=e?"hsla(":"rgba(",a=0,l,c,h,u;if(!s)return t;if(s=s.map(function(f){return(f=Op(f,e,1))&&o+(e?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(h=Fp(t),l=n.c,l.join(i)!==h.c.join(i)))for(c=t.replace(hr,"1").split(Fs),u=c.length-1;a<u;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!c)for(c=t.split(hr),u=c.length-1;a<u;a++)i+=c[a]+s[a];return i+c[u]},hr=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Io)r+="|"+t+"\\b";return new RegExp(r+")","gi")}(),$_=/hsl[a]?\(/,Bp=function(t){var e=t.join(" "),n;if(hr.lastIndex=0,hr.test(e))return n=$_.test(e),t[1]=hf(t[1],n),t[0]=hf(t[0],n,Fp(t[1])),!0},na,Xn=function(){var r=Date.now,t=500,e=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,h,u,f,d,_=function g(p){var m=r()-i,S=p===!0,x,M,E,w;if((m>t||m<0)&&(n+=m-e),i+=m,E=i-n,x=E-o,(x>0||S)&&(w=++u.frame,f=E-u.time*1e3,u.time=E=E/1e3,o+=x+(x>=s?4:s-x),M=1),S||(l=c(g)),M)for(d=0;d<a.length;d++)a[d](E,f,w,p)};return u={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(p){return f/(1e3/(p||60))},wake:function(){mp&&(!Jc&&pu()&&(gi=Jc=window,mu=gi.document||{},jn.gsap=Nn,(gi.gsapVersions||(gi.gsapVersions=[])).push(Nn.version),_p(vl||gi.GreenSockGlobals||!gi.gsap&&gi||{}),Up.forEach(Np)),h=typeof requestAnimationFrame!="undefined"&&requestAnimationFrame,l&&u.sleep(),c=h||function(p){return setTimeout(p,o-u.time*1e3+1|0)},na=1,_(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),na=0,c=ta},lagSmoothing:function(p,m){t=p||1/0,e=Math.min(m||33,t)},fps:function(p){s=1e3/(p||240),o=u.time*1e3+s},add:function(p,m,S){var x=m?function(M,E,w,y){p(M,E,w,y),u.remove(x)}:p;return u.remove(p),a[S?"unshift":"push"](x),to(),x},remove:function(p,m){~(m=a.indexOf(p))&&a.splice(m,1)&&d>=m&&d--},_listeners:a},u}(),to=function(){return!na&&Xn.wake()},he={},K_=/^[\d.\-M][\d.\-,\s]/,j_=/["']/g,Z_=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[i]=isNaN(c)?c.replace(j_,"").trim():+c,i=l.substr(a+1).trim();return e},J_=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},Q_=function(t){var e=(t+"").split("("),n=he[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[Z_(e[1])]:J_(t).split(",").map(Mp)):he._CE&&K_.test(t)?he._CE("",t):n},t0=function(t){return function(e){return 1-t(1-e)}},Yr=function(t,e){return t&&(Oe(t)?t:he[t]||Q_(t))||e},is=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},o;return Ln(t,function(a){he[a]=jn[a]=s,he[o=a.toLowerCase()]=n;for(var l in s)he[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=he[a+"."+l]=s[l]}),s},zp=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Ql=function r(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),o=s/Zc*(Math.asin(1/i)||0),a=function(h){return h===1?1:i*Math.pow(2,-10*h)*b_((h-o)*s)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:zp(a);return s=Zc/s,l.config=function(c,h){return r(t,c,h)},l},tc=function r(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:zp(n);return i.config=function(s){return r(t,s)},i};Ln("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;is(r+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});he.Linear.easeNone=he.none=he.Linear.easeIn;is("Elastic",Ql("in"),Ql("out"),Ql());(function(r,t){var e=1/t,n=2*e,i=2.5*e,s=function(a){return a<e?r*a*a:a<n?r*Math.pow(a-1.5/t,2)+.75:a<i?r*(a-=2.25/t)*a+.9375:r*Math.pow(a-2.625/t,2)+.984375};is("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);is("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});is("Circ",function(r){return-(up(1-r*r)-1)});is("Sine",function(r){return r===1?1:-E_(r*M_)+1});is("Back",tc("in"),tc("out"),tc());he.SteppedEase=he.steps=jn.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,o=1-we;return function(a){return((i*ca(0,o,a)|0)+s)*n}}};Jo.ease=he["quad.out"];Ln("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return vu+=r+","+r+"Params,"});var kp=function(t,e){this.id=y_++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:xp,this.set=e?e.getSetter:bu},ia=function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Qs(this,+e.duration,1,1),this.data=e.data,Le&&(this._ctx=Le,Le.data.push(this)),na||Xn.wake()}var t=r.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,Qs(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(to(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(kl(this,n),!s._dp||s.parent||bp(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Si(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===we||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Sp(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+af(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+af(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Js(this._tTime,s)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-we?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Ml(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-we?0:this._rts,this.totalTime(ca(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),zl(this),U_(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(to(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==we&&(this._tTime-=we)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=Ie(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Si(i,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+(Dn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Ml(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=P_);var i=an;return an=n,Su(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),an=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,lf(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,lf(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(ei(this,n),Dn(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Dn(i)),this._dur||(this._zTime=-we),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-we:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-we,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-we)},t.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},t.then=function(n){var i=this,s=i._prom;return new Promise(function(o){var a=Oe(n)?n:yp,l=function(){var h=i.then;i.then=null,s&&s(),Oe(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=h),o(a),i.then=h};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},t.kill=function(){Lo(this)},r}();Zn(ia.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-we,_prom:0,_ps:!1,_rts:1});var Cn=function(r){hp(t,r);function t(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Dn(n.sortChildren),Ue&&Si(n.parent||Ue,Ui(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Tp(Ui(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,o){return Ho(0,arguments,this),this},e.from=function(i,s,o){return Ho(1,arguments,this),this},e.fromTo=function(i,s,o,a){return Ho(2,arguments,this),this},e.set=function(i,s,o){return s.duration=0,s.parent=this,ko(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Xe(i,s,ei(this,o),1),this},e.call=function(i,s,o){return Si(this,Xe.delayedCall(0,i,s),o)},e.staggerTo=function(i,s,o,a,l,c,h){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=h,o.parent=this,new Xe(i,o,ei(this,l)),this},e.staggerFrom=function(i,s,o,a,l,c,h){return o.runBackwards=1,ko(o).immediateRender=Dn(o.immediateRender),this.staggerTo(i,s,o,a,l,c,h)},e.staggerFromTo=function(i,s,o,a,l,c,h,u){return a.startAt=o,ko(a).immediateRender=Dn(a.immediateRender),this.staggerTo(i,s,a,l,c,h,u)},e.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:Ie(i),u=this._zTime<0!=i<0&&(this._initted||!c),f,d,_,g,p,m,S,x,M,E,w,y;if(this!==Ue&&h>l&&i>=0&&(h=l),h!==this._tTime||o||u){if(a!==this._time&&c&&(h+=this._time-a,i+=this._time-a),f=h,M=this._start,x=this._ts,m=!x,u&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(w=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,s,o);if(f=Ie(h%p),h===l?(g=this._repeat,f=c):(E=Ie(h/p),g=~~E,g&&g===E&&(f=c,g--),f>c&&(f=c)),E=Js(this._tTime,p),!a&&this._tTime&&E!==g&&this._tTime-E*p-this._dur<=0&&(E=g),w&&g&1&&(f=c-f,y=1),g!==E&&!this._lock){var R=w&&E&1,L=R===(w&&g&1);if(g<E&&(R=!R),a=R?0:h%c?c:h,this._lock=1,this.render(a||(y?0:Ie(g*p)),s,!c)._lock=0,this._tTime=h,!s&&this.parent&&qn(this,"onRepeat"),this.vars.repeatRefresh&&!y&&(this.invalidate()._lock=1,E=g),a&&a!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,L&&(this._lock=2,a=R?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!y&&this.invalidate()),this._lock=0,!this._ts&&!m)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(S=B_(this,Ie(a),Ie(f)),S&&(h-=f-(f=S._start))),this._tTime=h,this._time=f,this._act=!!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&h&&c&&!s&&!E&&(qn(this,"onStart"),this._tTime!==h))return this;if(f>=a&&i>=0)for(d=this._first;d;){if(_=d._next,(d._act||f>=d._start)&&d._ts&&S!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,s,o),f!==this._time||!this._ts&&!m){S=0,_&&(h+=this._zTime=-we);break}}d=_}else{d=this._last;for(var v=i<0?i:f;d;){if(_=d._prev,(d._act||v<=d._end)&&d._ts&&S!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(v-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(v-d._start)*d._ts,s,o||an&&Su(d)),f!==this._time||!this._ts&&!m){S=0,_&&(h+=this._zTime=v?-we:we);break}}d=_}}if(S&&!s&&(this.pause(),S.render(f>=a?0:-we)._zTime=f>=a?1:-1,this._ts))return this._start=M,zl(this),this.render(i,s,o);this._onUpdate&&!s&&qn(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(M===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&mr(this,1),!s&&!(i<0&&!a)&&(h||a||!l)&&(qn(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var o=this;if(ki(s)||(s=ei(this,s,i)),!(i instanceof ia)){if(mn(i))return i.forEach(function(a){return o.add(a,s)}),this;if(nn(i))return this.addLabel(i,s);if(Oe(i))i=Xe.delayedCall(0,i);else return this}return this!==i?Si(this,i,s):this},e.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-si);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Xe?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},e.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},e.remove=function(i){return nn(i)?this.removeLabel(i):Oe(i)?this.killTweensOf(i):(i.parent===this&&Bl(this,i),i===this._recent&&(this._recent=this._last),Xr(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ie(Xn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=ei(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,o){var a=Xe.delayedCall(0,s||ta,o);return a.data="isPause",this._hasPause=1,Si(this,a,ei(this,i))},e.removePause=function(i){var s=this._first;for(i=ei(this,i);s;)s._start===i&&s.data==="isPause"&&mr(s),s=s._next},e.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)ir!==a[l]&&a[l].kill(i,s);return this},e.getTweensOf=function(i,s){for(var o=[],a=oi(i),l=this._first,c=ki(s),h;l;)l instanceof Xe?D_(l._targets,a)&&(c?(!ir||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(h=l.getTweensOf(a,s)).length&&o.push.apply(o,h),l=l._next;return o},e.tweenTo=function(i,s){s=s||{};var o=this,a=ei(o,i),l=s,c=l.startAt,h=l.onStart,u=l.onStartParams,f=l.immediateRender,d,_=Xe.to(o,Zn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||we,onStart:function(){if(o.pause(),!d){var p=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());_._dur!==p&&Qs(_,p,0,1).render(_._time,!0,!0),d=1}h&&h.apply(_,u||[])}},s));return f?_.render(0):_},e.tweenFromTo=function(i,s,o){return this.tweenTo(s,Zn({startAt:{time:ei(this,i)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),cf(this,ei(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),cf(this,ei(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+we)},e.shiftChildren=function(i,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(i=Ie(i);a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return Xr(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Xr(this)},e.totalDuration=function(i){var s=0,o=this,a=o._last,l=si,c,h,u;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(u=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Si(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(s-=h,(!u&&!o._dp||u&&u.smoothChildTiming)&&(o._start+=Ie(h/o._ts),o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;Qs(o,o===Ue&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(i){if(Ue._ts&&(Sp(Ue,Ml(i,Ue)),vp=Xn.frame),Xn.frame>=sf){sf+=Kn.autoSleep||120;var s=Ue._first;if((!s||!s._ts)&&Kn.autoSleep&&Xn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Xn.sleep()}}},t}(ia);Zn(Cn.prototype,{_lock:0,_hasPause:0,_forcing:0});var e0=function(t,e,n,i,s,o,a){var l=new In(this._pt,t,e,0,1,Yp,null,s),c=0,h=0,u,f,d,_,g,p,m,S;for(l.b=n,l.e=i,n+="",i+="",(m=~i.indexOf("random("))&&(i=ea(i)),o&&(S=[n,i],o(S,t,e),n=S[0],i=S[1]),f=n.match(jl)||[];u=jl.exec(i);)_=u[0],g=i.substring(c,u.index),d?d=(d+1)%5:g.substr(-5)==="rgba("&&(d=1),_!==f[h++]&&(p=parseFloat(f[h-1])||0,l._pt={_next:l._pt,p:g||h===1?g:",",s:p,c:_.charAt(1)==="="?Hs(p,_)-p:parseFloat(_)-p,m:d&&d<4?Math.round:0},c=jl.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(pp.test(i)||m)&&(l.e=0),this._pt=l,l},Mu=function(t,e,n,i,s,o,a,l,c,h){Oe(i)&&(i=i(s||0,t,o));var u=t[e],f=n!=="get"?n:Oe(u)?c?t[e.indexOf("set")||!Oe(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():u,d=Oe(u)?c?o0:Wp:Eu,_;if(nn(i)&&(~i.indexOf("random(")&&(i=ea(i)),i.charAt(1)==="="&&(_=Hs(f,i)+(dn(f)||0),(_||_===0)&&(i=_))),!h||f!==i||sh)return!isNaN(f*i)&&i!==""?(_=new In(this._pt,t,e,+f||0,i-(f||0),typeof u=="boolean"?l0:Xp,0,d),c&&(_.fp=c),a&&_.modifier(a,this,t),this._pt=_):(!u&&!(e in t)&&_u(e,i),e0.call(this,t,e,f,i,d,l||Kn.stringFilter,c))},n0=function(t,e,n,i,s){if(Oe(t)&&(t=Go(t,s,e,n,i)),!Ai(t)||t.style&&t.nodeType||mn(t)||fp(t))return nn(t)?Go(t,s,e,n,i):t;var o={},a;for(a in t)o[a]=Go(t[a],s,e,n,i);return o},Hp=function(t,e,n,i,s,o){var a,l,c,h;if(Gn[t]&&(a=new Gn[t]).init(s,a.rawVars?e[t]:n0(e[t],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new In(n._pt,s,t,0,1,a.render,a,0,a.priority),n!==Bs))for(c=n._ptLookup[n._targets.indexOf(s)],h=a._props.length;h--;)c[a._props[h]]=l;return a},ir,sh,yu=function r(t,e,n){var i=t.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,u=i.yoyoEase,f=i.keyframes,d=i.autoRevert,_=t._dur,g=t._startAt,p=t._targets,m=t.parent,S=m&&m.data==="nested"?m.vars.targets:p,x=t._overwrite==="auto"&&!fu,M=t.timeline,E=i.easeReverse||u,w,y,R,L,v,T,I,k,O,K,N,$,V;if(M&&(!f||!s)&&(s="none"),t._ease=Yr(s,Jo.ease),t._rEase=E&&(Yr(E)||t._ease),t._from=!M&&!!i.runBackwards,t._from&&(t.ratio=1),!M||f&&!i.stagger){if(k=p[0]?Wr(p[0]).harness:0,$=k&&i[k.prop],w=Sl(i,gu),g&&(g._zTime<0&&g.progress(1),e<0&&h&&a&&!d?g.render(-1,!0):g.revert(h&&_?nl:C_),g._lazy=0),o){if(mr(t._startAt=Xe.set(p,Zn({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!g&&Dn(l),startAt:null,delay:0,onUpdate:c&&function(){return qn(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(an||!a&&!d)&&t._startAt.revert(nl),a&&_&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&_&&!g){if(e&&(a=!1),R=Zn({overwrite:!1,data:"isFromStart",lazy:a&&!g&&Dn(l),immediateRender:a,stagger:0,parent:m},w),$&&(R[k.prop]=$),mr(t._startAt=Xe.set(p,R)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(an?t._startAt.revert(nl):t._startAt.render(-1,!0)),t._zTime=e,!a)r(t._startAt,we,we);else if(!e)return}for(t._pt=t._ptCache=0,l=_&&Dn(l)||l&&!_,y=0;y<p.length;y++){if(v=p[y],I=v._gsap||xu(p)[y]._gsap,t._ptLookup[y]=K={},Qc[I.id]&&cr.length&&xl(),N=S===p?y:S.indexOf(v),k&&(O=new k).init(v,$||w,t,N,S)!==!1&&(t._pt=L=new In(t._pt,v,O.name,0,1,O.render,O,0,O.priority),O._props.forEach(function(rt){K[rt]=L}),O.priority&&(T=1)),!k||$)for(R in w)Gn[R]&&(O=Hp(R,w,t,N,v,S))?O.priority&&(T=1):K[R]=L=Mu.call(t,v,R,"get",w[R],N,S,0,i.stringFilter);t._op&&t._op[y]&&t.kill(v,t._op[y]),x&&t._pt&&(ir=t,Ue.killTweensOf(v,K,t.globalTime(e)),V=!t.parent,ir=0),t._pt&&l&&(Qc[I.id]=1)}T&&qp(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!V,f&&e<=0&&M.render(si,!0,!0)},i0=function(t,e,n,i,s,o,a,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,u,f,d;if(!c)for(c=t._ptCache[e]=[],f=t._ptLookup,d=t._targets.length;d--;){if(h=f[d][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return sh=1,t.vars[e]="+=0",yu(t,a),sh=0,l?Qo(e+" not eligible for reset. Try splitting into individual properties"):1;c.push(h)}for(d=c.length;d--;)u=c[d],h=u._pt||u,h.s=(i||i===0)&&!s?i:h.s+(i||0)+o*h.c,h.c=n-h.s,u.e&&(u.e=ke(n)+dn(u.e)),u.b&&(u.b=h.s+dn(u.b))},r0=function(t,e){var n=t[0]?Wr(t[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return e;s=Zs({},e);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},s0=function(t,e,n,i){var s=e.ease||i||"power1.inOut",o,a;if(mn(e))a=n[t]||(n[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:s})});else for(o in e)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:s})},Go=function(t,e,n,i,s){return Oe(t)?t.call(e,n,i,s):nn(t)&&~t.indexOf("random(")?ea(t):t},Gp=vu+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Vp={};Ln(Gp+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Vp[r]=1});var Xe=function(r){hp(t,r);function t(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:ko(i))||this;var l=a.vars,c=l.duration,h=l.delay,u=l.immediateRender,f=l.stagger,d=l.overwrite,_=l.keyframes,g=l.defaults,p=l.scrollTrigger,m=i.parent||Ue,S=(mn(n)||fp(n)?ki(n[0]):"length"in i)?[n]:oi(n),x,M,E,w,y,R,L,v;if(a._targets=S.length?xu(S):Qo("GSAP target "+n+" not found. https://gsap.com",!Kn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,_||f||ua(c)||ua(h)){i=a.vars;var T=i.easeReverse||i.yoyoEase;if(x=a.timeline=new Cn({data:"nested",defaults:g||{},targets:m&&m.data==="nested"?m.vars.targets:S}),x.kill(),x.parent=x._dp=Ui(a),x._start=0,f||ua(c)||ua(h)){if(w=S.length,L=f&&Cp(f),Ai(f))for(y in f)~Gp.indexOf(y)&&(v||(v={}),v[y]=f[y]);for(M=0;M<w;M++)E=Sl(i,Vp),E.stagger=0,T&&(E.easeReverse=T),v&&Zs(E,v),R=S[M],E.duration=+Go(c,Ui(a),M,R,S),E.delay=(+Go(h,Ui(a),M,R,S)||0)-a._delay,!f&&w===1&&E.delay&&(a._delay=h=E.delay,a._start+=h,E.delay=0),x.to(R,E,L?L(M,R,S):0),x._ease=he.none;x.duration()?c=h=0:a.timeline=0}else if(_){ko(Zn(x.vars.defaults,{ease:"none"})),x._ease=Yr(_.ease||i.ease||"none");var I=0,k,O,K;if(mn(_))_.forEach(function(N){return x.to(S,N,">")}),x.duration();else{E={};for(y in _)y==="ease"||y==="easeEach"||s0(y,_[y],E,_.easeEach);for(y in E)for(k=E[y].sort(function(N,$){return N.t-$.t}),I=0,M=0;M<k.length;M++)O=k[M],K={ease:O.e,duration:(O.t-(M?k[M-1].t:0))/100*c},K[y]=O.v,x.to(S,K,I),I+=K.duration;x.duration()<c&&x.to({},{duration:c-x.duration()})}}c||a.duration(c=x.duration())}else a.timeline=0;return d===!0&&!fu&&(ir=Ui(a),Ue.killTweensOf(S),ir=0),Si(m,Ui(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(u||!c&&!_&&a._start===Ie(m._time)&&Dn(u)&&N_(Ui(a))&&m.data!=="nested")&&(a._tTime=-we,a.render(Math.max(0,-h)||0)),p&&Tp(Ui(a),p),a}var e=t.prototype;return e.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,h=i<0,u=i>l-we&&!h?l:i<we?0:i,f,d,_,g,p,m,S,x;if(!c)F_(this,i,s,o);else if(u!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(f=u,x=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(g*100+i,s,o);if(f=Ie(u%g),u===l?(_=this._repeat,f=c):(p=Ie(u/g),_=~~p,_&&_===p?(f=c,_--):f>c&&(f=c)),m=this._yoyo&&_&1,m&&(f=c-f),p=Js(this._tTime,g),f===a&&!o&&this._initted&&_===p)return this._tTime=u,this;_!==p&&this.vars.repeatRefresh&&!m&&!this._lock&&f!==g&&this._initted&&(this._lock=o=1,this.render(Ie(g*_),!0).invalidate()._lock=0)}if(!this._initted){if(wp(this,h?i:f,o,s,u))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&_!==p))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._rEase){var M=f<a;if(M!==this._inv){var E=M?a:c-a;this._inv=M,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=E?(M?-1:1)/E:0,this._invScale=M?-this.ratio:1-this.ratio,this._invEase=M?this._rEase:this._ease}this.ratio=S=this._invRatio+this._invScale*this._invEase((f-this._invTime)*this._invRecip)}else this.ratio=S=this._ease(f/c);if(this._from&&(this.ratio=S=1-S),this._tTime=u,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&u&&!s&&!p&&(qn(this,"onStart"),this._tTime!==u))return this;for(d=this._pt;d;)d.r(S,d.d),d=d._next;x&&x.render(i<0?i:x._dur*x._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(h&&th(this,i,s,o),qn(this,"onUpdate")),this._repeat&&_!==p&&this.vars.onRepeat&&!s&&this.parent&&qn(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&th(this,i,!0,!0),(i||!c)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&mr(this,1),!s&&!(h&&!a)&&(u||a||m)&&(qn(this,u===l?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,o,a,l){na||Xn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||yu(this,c),h=this._ease(c/this._dur),i0(this,i,s,o,a,h,c,l)?this.resetTo(i,s,o,a,1):(kl(this,0),this.parent||Ep(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Lo(this):this.scrollTrigger&&this.scrollTrigger.kill(!!an),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,ir&&ir.vars.overwrite!==!0)._first||Lo(this),this.parent&&o!==this.timeline.totalDuration()&&Qs(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?oi(i):a,c=this._ptLookup,h=this._pt,u,f,d,_,g,p,m;if((!s||s==="all")&&I_(a,l))return s==="all"&&(this._pt=0),Lo(this);for(u=this._op=this._op||[],s!=="all"&&(nn(s)&&(g={},Ln(s,function(S){return g[S]=1}),s=g),s=r0(a,s)),m=a.length;m--;)if(~l.indexOf(a[m])){f=c[m],s==="all"?(u[m]=s,_=f,d={}):(d=u[m]=u[m]||{},_=s);for(g in _)p=f&&f[g],p&&((!("kill"in p.d)||p.d.kill(g)===!0)&&Bl(this,p,"_pt"),delete f[g]),d!=="all"&&(d[g]=1)}return this._initted&&!this._pt&&h&&Lo(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return Ho(1,arguments)},t.delayedCall=function(i,s,o,a){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(i,s,o){return Ho(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,o){return Ue.killTweensOf(i,s,o)},t}(ia);Zn(Xe.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Ln("staggerTo,staggerFrom,staggerFromTo",function(r){Xe[r]=function(){var t=new Cn,e=nh.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var Eu=function(t,e,n){return t[e]=n},Wp=function(t,e,n){return t[e](n)},o0=function(t,e,n,i){return t[e](i.fp,n)},a0=function(t,e,n){return t.setAttribute(e,n)},bu=function(t,e){return Oe(t[e])?Wp:du(t[e])&&t.setAttribute?a0:Eu},Xp=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},l0=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Yp=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},Tu=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},c0=function(t,e,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(t,e,n),s=o},h0=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?Bl(this,e,"_pt"):e.dep||(n=1),e=i;return!n},u0=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},qp=function(t){for(var e=t._pt,n,i,s,o;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:o)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:o=e,e=n}t._pt=s},In=function(){function r(e,n,i,s,o,a,l,c,h){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||Xp,this.d=l||this,this.set=c||Eu,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=u0,this.m=n,this.mt=s,this.tween=i},r}();Ln(vu+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return gu[r]=1});jn.TweenMax=jn.TweenLite=Xe;jn.TimelineLite=jn.TimelineMax=Cn;Ue=new Cn({sortChildren:!1,defaults:Jo,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Kn.stringFilter=Bp;var qr=[],rl={},f0=[],uf=0,d0=0,ec=function(t){return(rl[t]||f0).map(function(e){return e()})},oh=function(){var t=Date.now(),e=[];t-uf>2&&(ec("matchMediaInit"),qr.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=gi.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&e.push(n))}),ec("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),uf=t,ec("matchMedia"))},$p=function(){function r(e,n){this.selector=n&&ih(n),this.data=[],this._r=[],this.isReverted=!1,this.id=d0++,e&&this.add(e)}var t=r.prototype;return t.add=function(n,i,s){Oe(n)&&(s=i,i=n,n=Oe);var o=this,a=function(){var c=Le,h=o.selector,u;return c&&c!==o&&c.data.push(o),s&&(o.selector=ih(s)),Le=o,u=i.apply(o,arguments),Oe(u)&&o._r.push(u),Le=c,o.selector=h,o.isReverted=!1,u};return o.last=a,n===Oe?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},t.ignore=function(n){var i=Le;Le=null,n(this),Le=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Xe&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n?function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,u){return u.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Cn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Xe)&&c.revert&&c.revert(n);s._r.forEach(function(h){return h(n,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=qr.length;o--;)qr[o].id===this.id&&qr.splice(o,1)},t.revert=function(n){this.kill(n||{})},r}(),p0=function(){function r(e){this.contexts=[],this.scope=e,Le&&Le.data.push(this)}var t=r.prototype;return t.add=function(n,i,s){Ai(n)||(n={matches:n});var o=new $p(0,s||this.scope),a=o.conditions={},l,c,h;Le&&!o.selector&&(o.selector=Le.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?h=1:(l=gi.matchMedia(n[c]),l&&(qr.indexOf(o)<0&&qr.push(o),(a[c]=l.matches)&&(h=1),l.addListener?l.addListener(oh):l.addEventListener("change",oh)));return h&&i(o,function(u){return o.add(null,u)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),yl={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return Np(i)})},timeline:function(t){return new Cn(t)},getTweensOf:function(t,e){return Ue.getTweensOf(t,e)},getProperty:function(t,e,n,i){nn(t)&&(t=oi(t)[0]);var s=Wr(t||{}).get,o=n?yp:Mp;return n==="native"&&(n=""),t&&(e?o((Gn[e]&&Gn[e].get||s)(t,e,n,i)):function(a,l,c){return o((Gn[a]&&Gn[a].get||s)(t,a,l,c))})},quickSetter:function(t,e,n){if(t=oi(t),t.length>1){var i=t.map(function(h){return Nn.quickSetter(h,e,n)}),s=i.length;return function(h){for(var u=s;u--;)i[u](h)}}t=t[0]||{};var o=Gn[e],a=Wr(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(h){var u=new o;Bs._pt=0,u.init(t,n?h+n:h,Bs,0,[t]),u.render(1,u),Bs._pt&&Tu(1,Bs)}:a.set(t,l);return o?c:function(h){return c(t,l,n?h+n:h,a,1)}},quickTo:function(t,e,n){var i,s=Nn.to(t,Zn((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,h){return s.resetTo(e,l,c,h)};return o.tween=s,o},isTweening:function(t){return Ue.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Yr(t.ease,Jo.ease)),of(Jo,t||{})},config:function(t){return of(Kn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,o=t.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Gn[a]&&!jn[a]&&Qo(e+" effect requires "+a+" plugin.")}),Zl[e]=function(a,l,c){return n(oi(a),Zn(l||{},s),c)},o&&(Cn.prototype[e]=function(a,l,c){return this.add(Zl[e](a,Ai(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){he[t]=Yr(e)},parseEase:function(t,e){return arguments.length?Yr(t,e):he},getById:function(t){return Ue.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new Cn(t),i,s;for(n.smoothChildTiming=Dn(t.smoothChildTiming),Ue.remove(n),n._dp=0,n._time=n._tTime=Ue._time,i=Ue._first;i;)s=i._next,(e||!(!i._dur&&i instanceof Xe&&i.vars.onComplete===i._targets[0]))&&Si(n,i,i._start-i._delay),i=s;return Si(Ue,n,0),n},context:function(t,e){return t?new $p(t,e):Le},matchMedia:function(t){return new p0(t)},matchMediaRefresh:function(){return qr.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||oh()},addEventListener:function(t,e){var n=rl[t]||(rl[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=rl[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:X_,wrapYoyo:Y_,distribute:Cp,random:Dp,snap:Pp,normalize:W_,getUnit:dn,clamp:k_,splitColor:Op,toArray:oi,selector:ih,mapRange:Ip,pipe:G_,unitize:V_,interpolate:q_,shuffle:Rp},install:_p,effects:Zl,ticker:Xn,updateRoot:Cn.updateRoot,plugins:Gn,globalTimeline:Ue,core:{PropTween:In,globals:gp,Tween:Xe,Timeline:Cn,Animation:ia,getCache:Wr,_removeLinkedListItem:Bl,reverting:function(){return an},context:function(t){return t&&Le&&(Le.data.push(t),t._ctx=Le),Le},suppressOverwrites:function(t){return fu=t}}};Ln("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return yl[r]=Xe[r]});Xn.add(Cn.updateRoot);Bs=yl.to({},{duration:0});var m0=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},_0=function(t,e){var n=t._targets,i,s,o;for(i in e)for(s=n.length;s--;)o=t._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=m0(o,i)),o&&o.modifier&&o.modifier(e[i],t,n[s],i))},nc=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(nn(s)&&(l={},Ln(s,function(h){return l[h]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}_0(a,s)}}}},Nn=yl.registerPlugin({name:"attr",init:function(t,e,n,i,s){var o,a,l;this.tween=n;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var n=e._pt;n;)an?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},nc("roundProps",rh),nc("modifiers"),nc("snap",Pp))||yl;Xe.version=Cn.version=Nn.version="3.15.0";mp=1;pu()&&to();he.Power0;he.Power1;he.Power2;he.Power3;he.Power4;he.Linear;he.Quad;he.Cubic;he.Quart;he.Quint;he.Strong;he.Elastic;he.Back;he.SteppedEase;he.Bounce;he.Sine;he.Expo;he.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var ff,rr,Gs,wu,zr,df,Au,g0=function(){return typeof window!="undefined"},Hi={},Lr=180/Math.PI,Vs=Math.PI/180,ls=Math.atan2,pf=1e8,Ru=/([A-Z])/g,v0=/(left|right|width|margin|padding|x)/i,x0=/[\s,\(]\S/,Ei={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},ah=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},S0=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},M0=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},y0=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},E0=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},Kp=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},jp=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},b0=function(t,e,n){return t.style[e]=n},T0=function(t,e,n){return t.style.setProperty(e,n)},w0=function(t,e,n){return t._gsap[e]=n},A0=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},R0=function(t,e,n,i,s){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},C0=function(t,e,n,i,s){var o=t._gsap;o[e]=n,o.renderTransform(s,o)},Ne="transform",Un=Ne+"Origin",P0=function r(t,e){var n=this,i=this.target,s=i.style,o=i._gsap;if(t in Hi&&s){if(this.tfm=this.tfm||{},t!=="transform")t=Ei[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=Ni(i,a)}):this.tfm[t]=o.x?o[t]:Ni(i,t),t===Un&&(this.tfm.zOrigin=o.zOrigin);else return Ei.transform.split(",").forEach(function(a){return r.call(n,a,e)});if(this.props.indexOf(Ne)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Un,e,"")),t=Ne}(s||e)&&this.props.push(t,e,s[t])},Zp=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},D0=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,o;for(s=0;s<t.length;s+=3)t[s+1]?t[s+1]===2?e[t[s]](t[s+2]):e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(Ru,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=Au(),(!s||!s.isStart)&&!n[Ne]&&(Zp(n),i.zOrigin&&n[Un]&&(n[Un]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Jp=function(t,e){var n={target:t,props:[],revert:D0,save:P0};return t._gsap||Nn.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},Qp,lh=function(t,e){var n=rr.createElementNS?rr.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):rr.createElement(t);return n&&n.style?n:rr.createElement(t)},$n=function r(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(Ru,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&r(t,eo(e)||e,1)||""},mf="O,Moz,ms,Ms,Webkit".split(","),eo=function(t,e,n){var i=e||zr,s=i.style,o=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(mf[o]+t in s););return o<0?null:(o===3?"ms":o>=0?mf[o]:"")+t},ch=function(){g0()&&window.document&&(ff=window,rr=ff.document,Gs=rr.documentElement,zr=lh("div")||{style:{}},lh("div"),Ne=eo(Ne),Un=Ne+"Origin",zr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Qp=!!eo("perspective"),Au=Nn.core.reverting,wu=1)},_f=function(t){var e=t.ownerSVGElement,n=lh("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),s;i.style.display="block",n.appendChild(i),Gs.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),Gs.removeChild(n),s},gf=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},tm=function(t){var e,n;try{e=t.getBBox()}catch{e=_f(t),n=1}return e&&(e.width||e.height)||n||(e=_f(t)),e&&!e.width&&!e.x&&!e.y?{x:+gf(t,["x","cx","x1"])||0,y:+gf(t,["y","cy","y1"])||0,width:0,height:0}:e},em=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&tm(t))},_r=function(t,e){if(e){var n=t.style,i;e in Hi&&e!==Un&&(e=Ne),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(Ru,"-$1").toLowerCase())):n.removeAttribute(e)}},sr=function(t,e,n,i,s,o){var a=new In(t._pt,e,n,0,1,o?jp:Kp);return t._pt=a,a.b=i,a.e=s,t._props.push(n),a},vf={deg:1,rad:1,turn:1},L0={grid:1,flex:1},gr=function r(t,e,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=zr.style,l=v0.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),u=100,f=i==="px",d=i==="%",_,g,p,m;if(i===o||!s||vf[i]||vf[o])return s;if(o!=="px"&&!f&&(s=r(t,e,n,"px")),m=t.getCTM&&em(t),(d||o==="%")&&(Hi[e]||~e.indexOf("adius")))return _=m?t.getBBox()[l?"width":"height"]:t[h],ke(d?s/_*u:s/100*_);if(a[l?"width":"height"]=u+(f?o:i),g=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,m&&(g=(t.ownerSVGElement||{}).parentNode),(!g||g===rr||!g.appendChild)&&(g=rr.body),p=g._gsap,p&&d&&p.width&&l&&p.time===Xn.time&&!p.uncache)return ke(s/p.width*u);if(d&&(e==="height"||e==="width")){var S=t.style[e];t.style[e]=u+i,_=t[h],S?t.style[e]=S:_r(t,e)}else(d||o==="%")&&!L0[$n(g,"display")]&&(a.position=$n(t,"position")),g===t&&(a.position="static"),g.appendChild(zr),_=zr[h],g.removeChild(zr),a.position="absolute";return l&&d&&(p=Wr(g),p.time=Xn.time,p.width=g[h]),ke(f?_*s/u:_&&s?u/_*s:0)},Ni=function(t,e,n,i){var s;return wu||ch(),e in Ei&&e!=="transform"&&(e=Ei[e],~e.indexOf(",")&&(e=e.split(",")[0])),Hi[e]&&e!=="transform"?(s=sa(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:bl($n(t,Un))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=El[e]&&El[e](t,e,n)||$n(t,e)||xp(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?gr(t,e,s,n)+n:s},I0=function(t,e,n,i){if(!n||n==="none"){var s=eo(e,t,1),o=s&&$n(t,s,1);o&&o!==n?(e=s,n=o):e==="borderColor"&&(n=$n(t,"borderTopColor"))}var a=new In(this._pt,t.style,e,0,1,Yp),l=0,c=0,h,u,f,d,_,g,p,m,S,x,M,E;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=$n(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(g=t.style[e],t.style[e]=i,i=$n(t,e)||i,g?t.style[e]=g:_r(t,e)),h=[n,i],Bp(h),n=h[0],i=h[1],f=n.match(Fs)||[],E=i.match(Fs)||[],E.length){for(;u=Fs.exec(i);)p=u[0],S=i.substring(l,u.index),_?_=(_+1)%5:(S.substr(-5)==="rgba("||S.substr(-5)==="hsla(")&&(_=1),p!==(g=f[c++]||"")&&(d=parseFloat(g)||0,M=g.substr((d+"").length),p.charAt(1)==="="&&(p=Hs(d,p)+M),m=parseFloat(p),x=p.substr((m+"").length),l=Fs.lastIndex-x.length,x||(x=x||Kn.units[e]||M,l===i.length&&(i+=x,a.e+=x)),M!==x&&(d=gr(t,e,g,x)||0),a._pt={_next:a._pt,p:S||c===1?S:",",s:d,c:m-d,m:_&&_<4||e==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=e==="display"&&i==="none"?jp:Kp;return pp.test(i)&&(a.e=0),this._pt=a,a},xf={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},U0=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=xf[n]||n,e[1]=xf[i]||i,e.join(" ")},N0=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],Hi[a]&&(l=1,a=a==="transformOrigin"?Un:Ne),_r(n,a);l&&(_r(n,Ne),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",sa(n,1),o.uncache=1,Zp(i)))}},El={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var o=t._pt=new In(t._pt,e,n,0,0,N0);return o.u=i,o.pr=-10,o.tween=s,t._props.push(n),1}}},ra=[1,0,0,1,0,0],nm={},im=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Sf=function(t){var e=$n(t,Ne);return im(e)?ra:e.substr(7).match(dp).map(ke)},Cu=function(t,e){var n=t._gsap||Wr(t),i=t.style,s=Sf(t),o,a,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?ra:s):(s===ra&&!t.offsetParent&&t!==Gs&&!n.svg&&(l=i.display,i.display="block",o=t.parentNode,(!o||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,a=t.nextElementSibling,Gs.appendChild(t)),s=Sf(t),l?i.display=l:_r(t,"display"),c&&(a?o.insertBefore(t,a):o?o.appendChild(t):Gs.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},hh=function(t,e,n,i,s,o){var a=t._gsap,l=s||Cu(t,!0),c=a.xOrigin||0,h=a.yOrigin||0,u=a.xOffset||0,f=a.yOffset||0,d=l[0],_=l[1],g=l[2],p=l[3],m=l[4],S=l[5],x=e.split(" "),M=parseFloat(x[0])||0,E=parseFloat(x[1])||0,w,y,R,L;n?l!==ra&&(y=d*p-_*g)&&(R=M*(p/y)+E*(-g/y)+(g*S-p*m)/y,L=M*(-_/y)+E*(d/y)-(d*S-_*m)/y,M=R,E=L):(w=tm(t),M=w.x+(~x[0].indexOf("%")?M/100*w.width:M),E=w.y+(~(x[1]||x[0]).indexOf("%")?E/100*w.height:E)),i||i!==!1&&a.smooth?(m=M-c,S=E-h,a.xOffset=u+(m*d+S*g)-m,a.yOffset=f+(m*_+S*p)-S):a.xOffset=a.yOffset=0,a.xOrigin=M,a.yOrigin=E,a.smooth=!!i,a.origin=e,a.originIsAbsolute=!!n,t.style[Un]="0px 0px",o&&(sr(o,a,"xOrigin",c,M),sr(o,a,"yOrigin",h,E),sr(o,a,"xOffset",u,a.xOffset),sr(o,a,"yOffset",f,a.yOffset)),t.setAttribute("data-svg-origin",M+" "+E)},sa=function(t,e){var n=t._gsap||new kp(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(t),c=$n(t,Un)||"0",h,u,f,d,_,g,p,m,S,x,M,E,w,y,R,L,v,T,I,k,O,K,N,$,V,rt,P,ct,Rt,Nt,q,et;return h=u=f=g=p=m=S=x=M=0,d=_=1,n.svg=!!(t.getCTM&&em(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Ne]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Ne]!=="none"?l[Ne]:"")),i.scale=i.rotate=i.translate="none"),y=Cu(t,n.svg),n.svg&&(n.uncache?(V=t.getBBox(),c=n.xOrigin-V.x+"px "+(n.yOrigin-V.y)+"px",$=""):$=!e&&t.getAttribute("data-svg-origin"),hh(t,$||c,!!$||n.originIsAbsolute,n.smooth!==!1,y)),E=n.xOrigin||0,w=n.yOrigin||0,y!==ra&&(T=y[0],I=y[1],k=y[2],O=y[3],h=K=y[4],u=N=y[5],y.length===6?(d=Math.sqrt(T*T+I*I),_=Math.sqrt(O*O+k*k),g=T||I?ls(I,T)*Lr:0,S=k||O?ls(k,O)*Lr+g:0,S&&(_*=Math.abs(Math.cos(S*Vs))),n.svg&&(h-=E-(E*T+w*k),u-=w-(E*I+w*O))):(et=y[6],Nt=y[7],P=y[8],ct=y[9],Rt=y[10],q=y[11],h=y[12],u=y[13],f=y[14],R=ls(et,Rt),p=R*Lr,R&&(L=Math.cos(-R),v=Math.sin(-R),$=K*L+P*v,V=N*L+ct*v,rt=et*L+Rt*v,P=K*-v+P*L,ct=N*-v+ct*L,Rt=et*-v+Rt*L,q=Nt*-v+q*L,K=$,N=V,et=rt),R=ls(-k,Rt),m=R*Lr,R&&(L=Math.cos(-R),v=Math.sin(-R),$=T*L-P*v,V=I*L-ct*v,rt=k*L-Rt*v,q=O*v+q*L,T=$,I=V,k=rt),R=ls(I,T),g=R*Lr,R&&(L=Math.cos(R),v=Math.sin(R),$=T*L+I*v,V=K*L+N*v,I=I*L-T*v,N=N*L-K*v,T=$,K=V),p&&Math.abs(p)+Math.abs(g)>359.9&&(p=g=0,m=180-m),d=ke(Math.sqrt(T*T+I*I+k*k)),_=ke(Math.sqrt(N*N+et*et)),R=ls(K,N),S=Math.abs(R)>2e-4?R*Lr:0,M=q?1/(q<0?-q:q):0),n.svg&&($=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!im($n(t,Ne)),$&&t.setAttribute("transform",$))),Math.abs(S)>90&&Math.abs(S)<270&&(s?(d*=-1,S+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,S+=S<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=u-((n.yPercent=u&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-u)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=ke(d),n.scaleY=ke(_),n.rotation=ke(g)+a,n.rotationX=ke(p)+a,n.rotationY=ke(m)+a,n.skewX=S+a,n.skewY=x+a,n.transformPerspective=M+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[Un]=bl(c)),n.xOffset=n.yOffset=0,n.force3D=Kn.force3D,n.renderTransform=n.svg?F0:Qp?rm:O0,n.uncache=0,n},bl=function(t){return(t=t.split(" "))[0]+" "+t[1]},ic=function(t,e,n){var i=dn(e);return ke(parseFloat(e)+parseFloat(gr(t,"x",n+"px",i)))+i},O0=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,rm(t,e)},Er="0deg",po="0px",br=") ",rm=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,h=n.rotationY,u=n.rotationX,f=n.skewX,d=n.skewY,_=n.scaleX,g=n.scaleY,p=n.transformPerspective,m=n.force3D,S=n.target,x=n.zOrigin,M="",E=m==="auto"&&t&&t!==1||m===!0;if(x&&(u!==Er||h!==Er)){var w=parseFloat(h)*Vs,y=Math.sin(w),R=Math.cos(w),L;w=parseFloat(u)*Vs,L=Math.cos(w),o=ic(S,o,y*L*-x),a=ic(S,a,-Math.sin(w)*-x),l=ic(S,l,R*L*-x+x)}p!==po&&(M+="perspective("+p+br),(i||s)&&(M+="translate("+i+"%, "+s+"%) "),(E||o!==po||a!==po||l!==po)&&(M+=l!==po||E?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+br),c!==Er&&(M+="rotate("+c+br),h!==Er&&(M+="rotateY("+h+br),u!==Er&&(M+="rotateX("+u+br),(f!==Er||d!==Er)&&(M+="skew("+f+", "+d+br),(_!==1||g!==1)&&(M+="scale("+_+", "+g+br),S.style[Ne]=M||"translate(0, 0)"},F0=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,h=n.skewY,u=n.scaleX,f=n.scaleY,d=n.target,_=n.xOrigin,g=n.yOrigin,p=n.xOffset,m=n.yOffset,S=n.forceCSS,x=parseFloat(o),M=parseFloat(a),E,w,y,R,L;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=Vs,c*=Vs,E=Math.cos(l)*u,w=Math.sin(l)*u,y=Math.sin(l-c)*-f,R=Math.cos(l-c)*f,c&&(h*=Vs,L=Math.tan(c-h),L=Math.sqrt(1+L*L),y*=L,R*=L,h&&(L=Math.tan(h),L=Math.sqrt(1+L*L),E*=L,w*=L)),E=ke(E),w=ke(w),y=ke(y),R=ke(R)):(E=u,R=f,w=y=0),(x&&!~(o+"").indexOf("px")||M&&!~(a+"").indexOf("px"))&&(x=gr(d,"x",o,"px"),M=gr(d,"y",a,"px")),(_||g||p||m)&&(x=ke(x+_-(_*E+g*y)+p),M=ke(M+g-(_*w+g*R)+m)),(i||s)&&(L=d.getBBox(),x=ke(x+i/100*L.width),M=ke(M+s/100*L.height)),L="matrix("+E+","+w+","+y+","+R+","+x+","+M+")",d.setAttribute("transform",L),S&&(d.style[Ne]=L)},B0=function(t,e,n,i,s){var o=360,a=nn(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Lr:1),c=l-i,h=i+c+"deg",u,f;return a&&(u=s.split("_")[1],u==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),u==="cw"&&c<0?c=(c+o*pf)%o-~~(c/o)*o:u==="ccw"&&c>0&&(c=(c-o*pf)%o-~~(c/o)*o)),t._pt=f=new In(t._pt,e,n,i,c,S0),f.e=h,f.u="deg",t._props.push(n),f},Mf=function(t,e){for(var n in e)t[n]=e[n];return t},z0=function(t,e,n){var i=Mf({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,h,u,f,d,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Ne]=e,a=sa(n,1),_r(n,Ne),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Ne],o[Ne]=e,a=sa(n,1),o[Ne]=c);for(l in Hi)c=i[l],h=a[l],c!==h&&s.indexOf(l)<0&&(d=dn(c),_=dn(h),u=d!==_?gr(n,l,c,_):parseFloat(c),f=parseFloat(h),t._pt=new In(t._pt,a,l,u,f-u,ah),t._pt.u=_||0,t._props.push(l));Mf(a,i)};Ln("padding,margin,Width,Radius",function(r,t){var e="Top",n="Right",i="Bottom",s="Left",o=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(a){return t<2?r+a:"border"+a+r});El[t>1?"border"+r:r]=function(a,l,c,h,u){var f,d;if(arguments.length<4)return f=o.map(function(_){return Ni(a,_,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(h+"").split(" "),d={},o.forEach(function(_,g){return d[_]=f[g]=f[g]||f[(g-1)/2|0]}),a.init(l,d,u)}});var sm={name:"css",register:ch,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var o=this._props,a=t.style,l=n.vars.startAt,c,h,u,f,d,_,g,p,m,S,x,M,E,w,y,R,L;wu||ch(),this.styles=this.styles||Jp(t),R=this.styles.props,this.tween=n;for(g in e)if(g!=="autoRound"&&(h=e[g],!(Gn[g]&&Hp(g,e,n,i,t,s)))){if(d=typeof h,_=El[g],d==="function"&&(h=h.call(n,i,t,s),d=typeof h),d==="string"&&~h.indexOf("random(")&&(h=ea(h)),_)_(this,t,g,h,n)&&(y=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(g)+"").trim(),h+="",hr.lastIndex=0,hr.test(c)||(p=dn(c),m=dn(h),m?p!==m&&(c=gr(t,g,c,m)+m):p&&(h+=p)),this.add(a,"setProperty",c,h,i,s,0,0,g),o.push(g),R.push(g,0,a[g]);else if(d!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,i,t,s):l[g],nn(c)&&~c.indexOf("random(")&&(c=ea(c)),dn(c+"")||c==="auto"||(c+=Kn.units[g]||dn(Ni(t,g))||""),(c+"").charAt(1)==="="&&(c=Ni(t,g))):c=Ni(t,g),f=parseFloat(c),S=d==="string"&&h.charAt(1)==="="&&h.substr(0,2),S&&(h=h.substr(2)),u=parseFloat(h),g in Ei&&(g==="autoAlpha"&&(f===1&&Ni(t,"visibility")==="hidden"&&u&&(f=0),R.push("visibility",0,a.visibility),sr(this,a,"visibility",f?"inherit":"hidden",u?"inherit":"hidden",!u)),g!=="scale"&&g!=="transform"&&(g=Ei[g],~g.indexOf(",")&&(g=g.split(",")[0]))),x=g in Hi,x){if(this.styles.save(g),L=h,d==="string"&&h.substring(0,6)==="var(--"){if(h=$n(t,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var v=t.style.perspective;t.style.perspective=h,h=$n(t,"perspective"),v?t.style.perspective=v:_r(t,"perspective")}u=parseFloat(h)}if(M||(E=t._gsap,E.renderTransform&&!e.parseTransform||sa(t,e.parseTransform),w=e.smoothOrigin!==!1&&E.smooth,M=this._pt=new In(this._pt,a,Ne,0,1,E.renderTransform,E,0,-1),M.dep=1),g==="scale")this._pt=new In(this._pt,E,"scaleY",E.scaleY,(S?Hs(E.scaleY,S+u):u)-E.scaleY||0,ah),this._pt.u=0,o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){R.push(Un,0,a[Un]),h=U0(h),E.svg?hh(t,h,0,w,0,this):(m=parseFloat(h.split(" ")[2])||0,m!==E.zOrigin&&sr(this,E,"zOrigin",E.zOrigin,m),sr(this,a,g,bl(c),bl(h)));continue}else if(g==="svgOrigin"){hh(t,h,1,w,0,this);continue}else if(g in nm){B0(this,E,g,f,S?Hs(f,S+h):h);continue}else if(g==="smoothOrigin"){sr(this,E,"smooth",E.smooth,h);continue}else if(g==="force3D"){E[g]=h;continue}else if(g==="transform"){z0(this,h,t);continue}}else g in a||(g=eo(g)||g);if(x||(u||u===0)&&(f||f===0)&&!x0.test(h)&&g in a)p=(c+"").substr((f+"").length),u||(u=0),m=dn(h)||(g in Kn.units?Kn.units[g]:p),p!==m&&(f=gr(t,g,c,m)),this._pt=new In(this._pt,x?E:a,g,f,(S?Hs(f,S+u):u)-f,!x&&(m==="px"||g==="zIndex")&&e.autoRound!==!1?E0:ah),this._pt.u=m||0,x&&L!==h?(this._pt.b=c,this._pt.e=L,this._pt.r=y0):p!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=M0);else if(g in a)I0.call(this,t,g,c,S?S+h:h);else if(g in t)this.add(t,g,c||t[g],S?S+h:h,i,s);else if(g!=="parseTransform"){_u(g,h);continue}x||(g in a?R.push(g,0,a[g]):typeof t[g]=="function"?R.push(g,2,t[g]()):R.push(g,1,c||t[g])),o.push(g)}}y&&qp(this)},render:function(t,e){if(e.tween._time||!Au())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:Ni,aliases:Ei,getSetter:function(t,e,n){var i=Ei[e];return i&&i.indexOf(",")<0&&(e=i),e in Hi&&e!==Un&&(t._gsap.x||Ni(t,"x"))?n&&df===n?e==="scale"?A0:w0:(df=n||{})&&(e==="scale"?R0:C0):t.style&&!du(t.style[e])?b0:~e.indexOf("-")?T0:bu(t,e)},core:{_removeProperty:_r,_getMatrix:Cu}};Nn.utils.checkPrefix=eo;Nn.core.getStyleSaver=Jp;(function(r,t,e,n){var i=Ln(r+","+t+","+e,function(s){Hi[s]=1});Ln(t,function(s){Kn.units[s]="deg",nm[s]=1}),Ei[i[13]]=r+","+t,Ln(n,function(s){var o=s.split(":");Ei[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Ln("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Kn.units[r]="px"});Nn.registerPlugin(sm);var ne=Nn.registerPlugin(sm)||Nn;ne.core.Tween;/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Pu="169",k0=0,yf=1,H0=2,om=1,G0=2,Ii=3,vr=0,wn=1,Mi=2,ur=0,Ws=1,Ef=2,bf=3,Tf=4,V0=5,Fr=100,W0=101,X0=102,Y0=103,q0=104,$0=200,K0=201,j0=202,Z0=203,uh=204,fh=205,J0=206,Q0=207,tg=208,eg=209,ng=210,ig=211,rg=212,sg=213,og=214,dh=0,ph=1,mh=2,no=3,_h=4,gh=5,vh=6,xh=7,am=0,ag=1,lg=2,fr=0,cg=1,hg=2,ug=3,fg=4,dg=5,pg=6,mg=7,lm=300,io=301,ro=302,Sh=303,Mh=304,Hl=306,yh=1e3,kr=1001,Eh=1002,Pn=1003,_g=1004,fa=1005,pi=1006,rc=1007,Hr=1008,Gi=1009,cm=1010,hm=1011,oa=1012,Du=1013,Zr=1014,bi=1015,ha=1016,Lu=1017,Iu=1018,so=1020,um=35902,fm=1021,dm=1022,mi=1023,pm=1024,mm=1025,Xs=1026,oo=1027,Uu=1028,Nu=1029,_m=1030,Ou=1031,Fu=1033,sl=33776,ol=33777,al=33778,ll=33779,bh=35840,Th=35841,wh=35842,Ah=35843,Rh=36196,Ch=37492,Ph=37496,Dh=37808,Lh=37809,Ih=37810,Uh=37811,Nh=37812,Oh=37813,Fh=37814,Bh=37815,zh=37816,kh=37817,Hh=37818,Gh=37819,Vh=37820,Wh=37821,cl=36492,Xh=36494,Yh=36495,gm=36283,qh=36284,$h=36285,Kh=36286,gg=3200,vg=3201,vm=0,xg=1,nr="",Rn="srgb",Mr="srgb-linear",Bu="display-p3",Gl="display-p3-linear",Tl="linear",Ce="srgb",wl="rec709",Al="p3",cs=7680,wf=519,Sg=512,Mg=513,yg=514,xm=515,Eg=516,bg=517,Tg=518,wg=519,jh=35044,mo=35048,Af="300 es",Fi=2e3,Rl=2001;class co{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}}const ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],sc=Math.PI/180,Zh=180/Math.PI;function dr(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ln[r&255]+ln[r>>8&255]+ln[r>>16&255]+ln[r>>24&255]+"-"+ln[t&255]+ln[t>>8&255]+"-"+ln[t>>16&15|64]+ln[t>>24&255]+"-"+ln[e&63|128]+ln[e>>8&255]+"-"+ln[e>>16&255]+ln[e>>24&255]+ln[n&255]+ln[n>>8&255]+ln[n>>16&255]+ln[n>>24&255]).toLowerCase()}function bn(r,t,e){return Math.max(t,Math.min(e,r))}function Ag(r,t){return(r%t+t)%t}function oc(r,t,e){return(1-e)*r+e*t}function yi(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Me(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class Yt{constructor(t=0,e=0){Yt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(bn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Jt{constructor(t,e,n,i,s,o,a,l,c){Jt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c)}set(t,e,n,i,s,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],_=n[8],g=i[0],p=i[3],m=i[6],S=i[1],x=i[4],M=i[7],E=i[2],w=i[5],y=i[8];return s[0]=o*g+a*S+l*E,s[3]=o*p+a*x+l*w,s[6]=o*m+a*M+l*y,s[1]=c*g+h*S+u*E,s[4]=c*p+h*x+u*w,s[7]=c*m+h*M+u*y,s[2]=f*g+d*S+_*E,s[5]=f*p+d*x+_*w,s[8]=f*m+d*M+_*y,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*s*h+n*a*l+i*s*c-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,f=a*l-h*s,d=c*s-o*l,_=e*u+n*f+i*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return t[0]=u*g,t[1]=(i*c-h*n)*g,t[2]=(a*n-i*o)*g,t[3]=f*g,t[4]=(h*e-i*l)*g,t[5]=(i*s-a*e)*g,t[6]=d*g,t[7]=(n*l-c*e)*g,t[8]=(o*e-n*s)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ac.makeScale(t,e)),this}rotate(t){return this.premultiply(ac.makeRotation(-t)),this}translate(t,e){return this.premultiply(ac.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ac=new Jt;function Sm(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Cl(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Rg(){const r=Cl("canvas");return r.style.display="block",r}const Rf={};function hl(r){r in Rf||(Rf[r]=!0,console.warn(r))}function Cg(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function Pg(r){const t=r.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Dg(r){const t=r.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Cf=new Jt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Pf=new Jt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),_o={[Mr]:{transfer:Tl,primaries:wl,luminanceCoefficients:[.2126,.7152,.0722],toReference:r=>r,fromReference:r=>r},[Rn]:{transfer:Ce,primaries:wl,luminanceCoefficients:[.2126,.7152,.0722],toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[Gl]:{transfer:Tl,primaries:Al,luminanceCoefficients:[.2289,.6917,.0793],toReference:r=>r.applyMatrix3(Pf),fromReference:r=>r.applyMatrix3(Cf)},[Bu]:{transfer:Ce,primaries:Al,luminanceCoefficients:[.2289,.6917,.0793],toReference:r=>r.convertSRGBToLinear().applyMatrix3(Pf),fromReference:r=>r.applyMatrix3(Cf).convertLinearToSRGB()}},Lg=new Set([Mr,Gl]),_e={enabled:!0,_workingColorSpace:Mr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!Lg.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,t,e){if(this.enabled===!1||t===e||!t||!e)return r;const n=_o[t].toReference,i=_o[e].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,t){return this.convert(r,this._workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this._workingColorSpace)},getPrimaries:function(r){return _o[r].primaries},getTransfer:function(r){return r===nr?Tl:_o[r].transfer},getLuminanceCoefficients:function(r,t=this._workingColorSpace){return r.fromArray(_o[t].luminanceCoefficients)}};function Ys(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function lc(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let hs;class Ig{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{hs===void 0&&(hs=Cl("canvas")),hs.width=t.width,hs.height=t.height;const n=hs.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=hs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){const e=Cl("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Ys(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ys(e[n]/255)*255):e[n]=Ys(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Ug=0;class Mm{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ug++}),this.uuid=dr(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(cc(i[o].image)):s.push(cc(i[o]))}else s=cc(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function cc(r){return typeof HTMLImageElement!="undefined"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&r instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&r instanceof ImageBitmap?Ig.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ng=0;class _n extends co{constructor(t=_n.DEFAULT_IMAGE,e=_n.DEFAULT_MAPPING,n=kr,i=kr,s=pi,o=Hr,a=mi,l=Gi,c=_n.DEFAULT_ANISOTROPY,h=nr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ng++}),this.uuid=dr(),this.name="",this.source=new Mm(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Yt(0,0),this.repeat=new Yt(1,1),this.center=new Yt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==lm)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case yh:t.x=t.x-Math.floor(t.x);break;case kr:t.x=t.x<0?0:1;break;case Eh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case yh:t.y=t.y-Math.floor(t.y);break;case kr:t.y=t.y<0?0:1;break;case Eh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}_n.DEFAULT_IMAGE=null;_n.DEFAULT_MAPPING=lm;_n.DEFAULT_ANISOTROPY=1;class ye{constructor(t=0,e=0,n=0,i=1){ye.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],_=l[9],g=l[2],p=l[6],m=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-g)<.01&&Math.abs(_-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+g)<.1&&Math.abs(_+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(c+1)/2,M=(d+1)/2,E=(m+1)/2,w=(h+f)/4,y=(u+g)/4,R=(_+p)/4;return x>M&&x>E?x<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(x),i=w/n,s=y/n):M>E?M<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(M),n=w/i,s=R/i):E<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(E),n=y/s,i=R/s),this.set(n,i,s,e),this}let S=Math.sqrt((p-_)*(p-_)+(u-g)*(u-g)+(f-h)*(f-h));return Math.abs(S)<.001&&(S=1),this.x=(p-_)/S,this.y=(u-g)/S,this.z=(f-h)/S,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Og extends co{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ye(0,0,t,e),this.scissorTest=!1,this.viewport=new ye(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new _n(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Mm(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Jr extends Og{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class ym extends _n{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=kr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Fg extends _n{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=kr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ho{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const f=s[o+0],d=s[o+1],_=s[o+2],g=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=_,t[e+3]=g;return}if(u!==g||l!==f||c!==d||h!==_){let p=1-a;const m=l*f+c*d+h*_+u*g,S=m>=0?1:-1,x=1-m*m;if(x>Number.EPSILON){const E=Math.sqrt(x),w=Math.atan2(E,m*S);p=Math.sin(p*w)/E,a=Math.sin(a*w)/E}const M=a*S;if(l=l*p+f*M,c=c*p+d*M,h=h*p+_*M,u=u*p+g*M,p===1-a){const E=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=E,c*=E,h*=E,u*=E}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[o],f=s[o+1],d=s[o+2],_=s[o+3];return t[e]=a*_+h*u+l*d-c*f,t[e+1]=l*_+h*f+c*u-a*d,t[e+2]=c*_+h*d+a*f-l*u,t[e+3]=h*_-a*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(s/2),f=l(n/2),d=l(i/2),_=l(s/2);switch(o){case"XYZ":this._x=f*h*u+c*d*_,this._y=c*d*u-f*h*_,this._z=c*h*_+f*d*u,this._w=c*h*u-f*d*_;break;case"YXZ":this._x=f*h*u+c*d*_,this._y=c*d*u-f*h*_,this._z=c*h*_-f*d*u,this._w=c*h*u+f*d*_;break;case"ZXY":this._x=f*h*u-c*d*_,this._y=c*d*u+f*h*_,this._z=c*h*_+f*d*u,this._w=c*h*u-f*d*_;break;case"ZYX":this._x=f*h*u-c*d*_,this._y=c*d*u+f*h*_,this._z=c*h*_-f*d*u,this._w=c*h*u+f*d*_;break;case"YZX":this._x=f*h*u+c*d*_,this._y=c*d*u+f*h*_,this._z=c*h*_-f*d*u,this._w=c*h*u-f*d*_;break;case"XZY":this._x=f*h*u-c*d*_,this._y=c*d*u-f*h*_,this._z=c*h*_+f*d*u,this._w=c*h*u+f*d*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(s-c)*d,this._z=(o-i)*d}else if(n>a&&n>u){const d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(s+c)/d}else if(a>u){const d=2*Math.sqrt(1+a-n-u);this._w=(s-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+u-n-a);this._w=(o-i)/d,this._x=(s+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(bn(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-s*l,this._y=i*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*i+e*this._y,this._z=d*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=s*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(t=0,e=0,n=0){U.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Df.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Df.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-s*i),u=2*(s*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-s*u,this.z=i+l*u+s*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return hc.copy(this).projectOnVector(t),this.sub(hc)}reflect(t){return this.sub(hc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(bn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const hc=new U,Df=new ho;class rs{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ci.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ci.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=ci.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,ci):ci.fromBufferAttribute(s,o),ci.applyMatrix4(t.matrixWorld),this.expandByPoint(ci);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),da.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),da.copy(n.boundingBox)),da.applyMatrix4(t.matrixWorld),this.union(da)}const i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ci),ci.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(go),pa.subVectors(this.max,go),us.subVectors(t.a,go),fs.subVectors(t.b,go),ds.subVectors(t.c,go),Xi.subVectors(fs,us),Yi.subVectors(ds,fs),Tr.subVectors(us,ds);let e=[0,-Xi.z,Xi.y,0,-Yi.z,Yi.y,0,-Tr.z,Tr.y,Xi.z,0,-Xi.x,Yi.z,0,-Yi.x,Tr.z,0,-Tr.x,-Xi.y,Xi.x,0,-Yi.y,Yi.x,0,-Tr.y,Tr.x,0];return!uc(e,us,fs,ds,pa)||(e=[1,0,0,0,1,0,0,0,1],!uc(e,us,fs,ds,pa))?!1:(ma.crossVectors(Xi,Yi),e=[ma.x,ma.y,ma.z],uc(e,us,fs,ds,pa))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ci).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ci).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ri),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Ri=[new U,new U,new U,new U,new U,new U,new U,new U],ci=new U,da=new rs,us=new U,fs=new U,ds=new U,Xi=new U,Yi=new U,Tr=new U,go=new U,pa=new U,ma=new U,wr=new U;function uc(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){wr.fromArray(r,s);const a=i.x*Math.abs(wr.x)+i.y*Math.abs(wr.y)+i.z*Math.abs(wr.z),l=t.dot(wr),c=e.dot(wr),h=n.dot(wr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Bg=new rs,vo=new U,fc=new U;class ss{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Bg.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;vo.subVectors(t,this.center);const e=vo.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(vo,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(fc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(vo.copy(t.center).add(fc)),this.expandByPoint(vo.copy(t.center).sub(fc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ci=new U,dc=new U,_a=new U,qi=new U,pc=new U,ga=new U,mc=new U;class zu{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ci)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ci.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ci.copy(this.origin).addScaledVector(this.direction,e),Ci.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){dc.copy(t).add(e).multiplyScalar(.5),_a.copy(e).sub(t).normalize(),qi.copy(this.origin).sub(dc);const s=t.distanceTo(e)*.5,o=-this.direction.dot(_a),a=qi.dot(this.direction),l=-qi.dot(_a),c=qi.lengthSq(),h=Math.abs(1-o*o);let u,f,d,_;if(h>0)if(u=o*l-a,f=o*a-l,_=s*h,u>=0)if(f>=-_)if(f<=_){const g=1/h;u*=g,f*=g,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-_?(u=Math.max(0,-(-o*s+a)),f=u>0?-s:Math.min(Math.max(-s,-l),s),d=-u*u+f*(f+2*l)+c):f<=_?(u=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(u=Math.max(0,-(o*s+a)),f=u>0?s:Math.min(Math.max(-s,-l),s),d=-u*u+f*(f+2*l)+c);else f=o>0?-s:s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(dc).addScaledVector(_a,f),d}intersectSphere(t,e){Ci.subVectors(t.center,this.origin);const n=Ci.dot(this.direction),i=Ci.dot(Ci)-n*n,s=t.radius*t.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,i=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,i=(t.min.x-f.x)*c),h>=0?(s=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(s=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Ci)!==null}intersectTriangle(t,e,n,i,s){pc.subVectors(e,t),ga.subVectors(n,t),mc.crossVectors(pc,ga);let o=this.direction.dot(mc),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;qi.subVectors(this.origin,t);const l=a*this.direction.dot(ga.crossVectors(qi,ga));if(l<0)return null;const c=a*this.direction.dot(pc.cross(qi));if(c<0||l+c>o)return null;const h=-a*qi.dot(mc);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ge{constructor(t,e,n,i,s,o,a,l,c,h,u,f,d,_,g,p){ge.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c,h,u,f,d,_,g,p)}set(t,e,n,i,s,o,a,l,c,h,u,f,d,_,g,p){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=f,m[3]=d,m[7]=_,m[11]=g,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ge().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/ps.setFromMatrixColumn(t,0).length(),s=1/ps.setFromMatrixColumn(t,1).length(),o=1/ps.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){const f=o*h,d=o*u,_=a*h,g=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+_*c,e[5]=f-g*c,e[9]=-a*l,e[2]=g-f*c,e[6]=_+d*c,e[10]=o*l}else if(t.order==="YXZ"){const f=l*h,d=l*u,_=c*h,g=c*u;e[0]=f+g*a,e[4]=_*a-d,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-_,e[6]=g+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*h,d=l*u,_=c*h,g=c*u;e[0]=f-g*a,e[4]=-o*u,e[8]=_+d*a,e[1]=d+_*a,e[5]=o*h,e[9]=g-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*h,d=o*u,_=a*h,g=a*u;e[0]=l*h,e[4]=_*c-d,e[8]=f*c+g,e[1]=l*u,e[5]=g*c+f,e[9]=d*c-_,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,d=o*c,_=a*l,g=a*c;e[0]=l*h,e[4]=g-f*u,e[8]=_*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*u+_,e[10]=f-g*u}else if(t.order==="XZY"){const f=o*l,d=o*c,_=a*l,g=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+g,e[5]=o*h,e[9]=d*u-_,e[2]=_*u-d,e[6]=a*h,e[10]=g*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(zg,t,kg)}lookAt(t,e,n){const i=this.elements;return Bn.subVectors(t,e),Bn.lengthSq()===0&&(Bn.z=1),Bn.normalize(),$i.crossVectors(n,Bn),$i.lengthSq()===0&&(Math.abs(n.z)===1?Bn.x+=1e-4:Bn.z+=1e-4,Bn.normalize(),$i.crossVectors(n,Bn)),$i.normalize(),va.crossVectors(Bn,$i),i[0]=$i.x,i[4]=va.x,i[8]=Bn.x,i[1]=$i.y,i[5]=va.y,i[9]=Bn.y,i[2]=$i.z,i[6]=va.z,i[10]=Bn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],_=n[2],g=n[6],p=n[10],m=n[14],S=n[3],x=n[7],M=n[11],E=n[15],w=i[0],y=i[4],R=i[8],L=i[12],v=i[1],T=i[5],I=i[9],k=i[13],O=i[2],K=i[6],N=i[10],$=i[14],V=i[3],rt=i[7],P=i[11],ct=i[15];return s[0]=o*w+a*v+l*O+c*V,s[4]=o*y+a*T+l*K+c*rt,s[8]=o*R+a*I+l*N+c*P,s[12]=o*L+a*k+l*$+c*ct,s[1]=h*w+u*v+f*O+d*V,s[5]=h*y+u*T+f*K+d*rt,s[9]=h*R+u*I+f*N+d*P,s[13]=h*L+u*k+f*$+d*ct,s[2]=_*w+g*v+p*O+m*V,s[6]=_*y+g*T+p*K+m*rt,s[10]=_*R+g*I+p*N+m*P,s[14]=_*L+g*k+p*$+m*ct,s[3]=S*w+x*v+M*O+E*V,s[7]=S*y+x*T+M*K+E*rt,s[11]=S*R+x*I+M*N+E*P,s[15]=S*L+x*k+M*$+E*ct,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],_=t[3],g=t[7],p=t[11],m=t[15];return _*(+s*l*u-i*c*u-s*a*f+n*c*f+i*a*d-n*l*d)+g*(+e*l*d-e*c*f+s*o*f-i*o*d+i*c*h-s*l*h)+p*(+e*c*u-e*a*d-s*o*u+n*o*d+s*a*h-n*c*h)+m*(-i*a*h-e*l*u+e*a*f+i*o*u-n*o*f+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],_=t[12],g=t[13],p=t[14],m=t[15],S=u*p*c-g*f*c+g*l*d-a*p*d-u*l*m+a*f*m,x=_*f*c-h*p*c-_*l*d+o*p*d+h*l*m-o*f*m,M=h*g*c-_*u*c+_*a*d-o*g*d-h*a*m+o*u*m,E=_*u*l-h*g*l-_*a*f+o*g*f+h*a*p-o*u*p,w=e*S+n*x+i*M+s*E;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const y=1/w;return t[0]=S*y,t[1]=(g*f*s-u*p*s-g*i*d+n*p*d+u*i*m-n*f*m)*y,t[2]=(a*p*s-g*l*s+g*i*c-n*p*c-a*i*m+n*l*m)*y,t[3]=(u*l*s-a*f*s-u*i*c+n*f*c+a*i*d-n*l*d)*y,t[4]=x*y,t[5]=(h*p*s-_*f*s+_*i*d-e*p*d-h*i*m+e*f*m)*y,t[6]=(_*l*s-o*p*s-_*i*c+e*p*c+o*i*m-e*l*m)*y,t[7]=(o*f*s-h*l*s+h*i*c-e*f*c-o*i*d+e*l*d)*y,t[8]=M*y,t[9]=(_*u*s-h*g*s-_*n*d+e*g*d+h*n*m-e*u*m)*y,t[10]=(o*g*s-_*a*s+_*n*c-e*g*c-o*n*m+e*a*m)*y,t[11]=(h*a*s-o*u*s-h*n*c+e*u*c+o*n*d-e*a*d)*y,t[12]=E*y,t[13]=(h*g*i-_*u*i+_*n*f-e*g*f-h*n*p+e*u*p)*y,t[14]=(_*a*i-o*g*i-_*n*l+e*g*l+o*n*p-e*a*p)*y,t[15]=(o*u*i-h*a*i+h*n*l-e*u*l-o*n*f+e*a*f)*y,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,h=o+o,u=a+a,f=s*c,d=s*h,_=s*u,g=o*h,p=o*u,m=a*u,S=l*c,x=l*h,M=l*u,E=n.x,w=n.y,y=n.z;return i[0]=(1-(g+m))*E,i[1]=(d+M)*E,i[2]=(_-x)*E,i[3]=0,i[4]=(d-M)*w,i[5]=(1-(f+m))*w,i[6]=(p+S)*w,i[7]=0,i[8]=(_+x)*y,i[9]=(p-S)*y,i[10]=(1-(f+g))*y,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=ps.set(i[0],i[1],i[2]).length();const o=ps.set(i[4],i[5],i[6]).length(),a=ps.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],hi.copy(this);const c=1/s,h=1/o,u=1/a;return hi.elements[0]*=c,hi.elements[1]*=c,hi.elements[2]*=c,hi.elements[4]*=h,hi.elements[5]*=h,hi.elements[6]*=h,hi.elements[8]*=u,hi.elements[9]*=u,hi.elements[10]*=u,e.setFromRotationMatrix(hi),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,i,s,o,a=Fi){const l=this.elements,c=2*s/(e-t),h=2*s/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i);let d,_;if(a===Fi)d=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Rl)d=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,o,a=Fi){const l=this.elements,c=1/(e-t),h=1/(n-i),u=1/(o-s),f=(e+t)*c,d=(n+i)*h;let _,g;if(a===Fi)_=(o+s)*u,g=-2*u;else if(a===Rl)_=s*u,g=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ps=new U,hi=new ge,zg=new U(0,0,0),kg=new U(1,1,1),$i=new U,va=new U,Bn=new U,Lf=new ge,If=new ho;class _i{constructor(t=0,e=0,n=0,i=_i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(bn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-bn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(bn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-bn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(bn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-bn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Lf.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Lf,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return If.setFromEuler(this),this.setFromQuaternion(If,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}_i.DEFAULT_ORDER="XYZ";class Em{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Hg=0;const Uf=new U,ms=new ho,Pi=new ge,xa=new U,xo=new U,Gg=new U,Vg=new ho,Nf=new U(1,0,0),Of=new U(0,1,0),Ff=new U(0,0,1),Bf={type:"added"},Wg={type:"removed"},_s={type:"childadded",child:null},_c={type:"childremoved",child:null};class qe extends co{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hg++}),this.uuid=dr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=qe.DEFAULT_UP.clone();const t=new U,e=new _i,n=new ho,i=new U(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ge},normalMatrix:{value:new Jt}}),this.matrix=new ge,this.matrixWorld=new ge,this.matrixAutoUpdate=qe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=qe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Em,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ms.setFromAxisAngle(t,e),this.quaternion.multiply(ms),this}rotateOnWorldAxis(t,e){return ms.setFromAxisAngle(t,e),this.quaternion.premultiply(ms),this}rotateX(t){return this.rotateOnAxis(Nf,t)}rotateY(t){return this.rotateOnAxis(Of,t)}rotateZ(t){return this.rotateOnAxis(Ff,t)}translateOnAxis(t,e){return Uf.copy(t).applyQuaternion(this.quaternion),this.position.add(Uf.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Nf,t)}translateY(t){return this.translateOnAxis(Of,t)}translateZ(t){return this.translateOnAxis(Ff,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Pi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?xa.copy(t):xa.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),xo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pi.lookAt(xo,xa,this.up):Pi.lookAt(xa,xo,this.up),this.quaternion.setFromRotationMatrix(Pi),i&&(Pi.extractRotation(i.matrixWorld),ms.setFromRotationMatrix(Pi),this.quaternion.premultiply(ms.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Bf),_s.child=t,this.dispatchEvent(_s),_s.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Wg),_c.child=t,this.dispatchEvent(_c),_c.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Pi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Pi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Pi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Bf),_s.child=t,this.dispatchEvent(_s),_s.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xo,t,Gg),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xo,Vg,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(t.shapes,u)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),_=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),_.length>0&&(n.nodes=_)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}qe.DEFAULT_UP=new U(0,1,0);qe.DEFAULT_MATRIX_AUTO_UPDATE=!0;qe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ui=new U,Di=new U,gc=new U,Li=new U,gs=new U,vs=new U,zf=new U,vc=new U,xc=new U,Sc=new U,Mc=new ye,yc=new ye,Ec=new ye;class ri{constructor(t=new U,e=new U,n=new U){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),ui.subVectors(t,e),i.cross(ui);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){ui.subVectors(i,e),Di.subVectors(n,e),gc.subVectors(t,e);const o=ui.dot(ui),a=ui.dot(Di),l=ui.dot(gc),c=Di.dot(Di),h=Di.dot(gc),u=o*c-a*a;if(u===0)return s.set(0,0,0),null;const f=1/u,d=(c*l-a*h)*f,_=(o*h-a*l)*f;return s.set(1-d-_,_,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Li)===null?!1:Li.x>=0&&Li.y>=0&&Li.x+Li.y<=1}static getInterpolation(t,e,n,i,s,o,a,l){return this.getBarycoord(t,e,n,i,Li)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Li.x),l.addScaledVector(o,Li.y),l.addScaledVector(a,Li.z),l)}static getInterpolatedAttribute(t,e,n,i,s,o){return Mc.setScalar(0),yc.setScalar(0),Ec.setScalar(0),Mc.fromBufferAttribute(t,e),yc.fromBufferAttribute(t,n),Ec.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(Mc,s.x),o.addScaledVector(yc,s.y),o.addScaledVector(Ec,s.z),o}static isFrontFacing(t,e,n,i){return ui.subVectors(n,e),Di.subVectors(t,e),ui.cross(Di).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ui.subVectors(this.c,this.b),Di.subVectors(this.a,this.b),ui.cross(Di).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ri.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ri.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return ri.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return ri.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ri.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let o,a;gs.subVectors(i,n),vs.subVectors(s,n),vc.subVectors(t,n);const l=gs.dot(vc),c=vs.dot(vc);if(l<=0&&c<=0)return e.copy(n);xc.subVectors(t,i);const h=gs.dot(xc),u=vs.dot(xc);if(h>=0&&u<=h)return e.copy(i);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(gs,o);Sc.subVectors(t,s);const d=gs.dot(Sc),_=vs.dot(Sc);if(_>=0&&d<=_)return e.copy(s);const g=d*c-l*_;if(g<=0&&c>=0&&_<=0)return a=c/(c-_),e.copy(n).addScaledVector(vs,a);const p=h*_-d*u;if(p<=0&&u-h>=0&&d-_>=0)return zf.subVectors(s,i),a=(u-h)/(u-h+(d-_)),e.copy(i).addScaledVector(zf,a);const m=1/(p+g+f);return o=g*m,a=f*m,e.copy(n).addScaledVector(gs,o).addScaledVector(vs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const bm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ki={h:0,s:0,l:0},Sa={h:0,s:0,l:0};function bc(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class Gt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Rn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,_e.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=_e.workingColorSpace){return this.r=t,this.g=e,this.b=n,_e.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=_e.workingColorSpace){if(t=Ag(t,1),e=bn(e,0,1),n=bn(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=bc(o,s,t+1/3),this.g=bc(o,s,t),this.b=bc(o,s,t-1/3)}return _e.toWorkingColorSpace(this,i),this}setStyle(t,e=Rn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Rn){const n=bm[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ys(t.r),this.g=Ys(t.g),this.b=Ys(t.b),this}copyLinearToSRGB(t){return this.r=lc(t.r),this.g=lc(t.g),this.b=lc(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Rn){return _e.fromWorkingColorSpace(cn.copy(this),t),Math.round(bn(cn.r*255,0,255))*65536+Math.round(bn(cn.g*255,0,255))*256+Math.round(bn(cn.b*255,0,255))}getHexString(t=Rn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=_e.workingColorSpace){_e.fromWorkingColorSpace(cn.copy(this),e);const n=cn.r,i=cn.g,s=cn.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=_e.workingColorSpace){return _e.fromWorkingColorSpace(cn.copy(this),e),t.r=cn.r,t.g=cn.g,t.b=cn.b,t}getStyle(t=Rn){_e.fromWorkingColorSpace(cn.copy(this),t);const e=cn.r,n=cn.g,i=cn.b;return t!==Rn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Ki),this.setHSL(Ki.h+t,Ki.s+e,Ki.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ki),t.getHSL(Sa);const n=oc(Ki.h,Sa.h,e),i=oc(Ki.s,Sa.s,e),s=oc(Ki.l,Sa.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const cn=new Gt;Gt.NAMES=bm;let Xg=0;class yr extends co{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xg++}),this.uuid=dr(),this.name="",this.type="Material",this.blending=Ws,this.side=vr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=uh,this.blendDst=fh,this.blendEquation=Fr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Gt(0,0,0),this.blendAlpha=0,this.depthFunc=no,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=cs,this.stencilZFail=cs,this.stencilZPass=cs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ws&&(n.blending=this.blending),this.side!==vr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==uh&&(n.blendSrc=this.blendSrc),this.blendDst!==fh&&(n.blendDst=this.blendDst),this.blendEquation!==Fr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==no&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==wf&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==cs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==cs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==cs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Gr extends yr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _i,this.combine=am,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ve=new U,Ma=new Yt;class Ye{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=jh,this.updateRanges=[],this.gpuType=bi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ma.fromBufferAttribute(this,e),Ma.applyMatrix3(t),this.setXY(e,Ma.x,Ma.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.applyMatrix3(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.applyMatrix4(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.applyNormalMatrix(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.transformDirection(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=yi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Me(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=yi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=yi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=yi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=yi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array),i=Me(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array),i=Me(i,this.array),s=Me(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==jh&&(t.usage=this.usage),t}}class Tm extends Ye{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class wm extends Ye{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Ge extends Ye{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Yg=0;const Qn=new ge,Tc=new qe,xs=new U,zn=new rs,So=new rs,Qe=new U;class rn extends co{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Yg++}),this.uuid=dr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Sm(t)?wm:Tm)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Jt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Qn.makeRotationFromQuaternion(t),this.applyMatrix4(Qn),this}rotateX(t){return Qn.makeRotationX(t),this.applyMatrix4(Qn),this}rotateY(t){return Qn.makeRotationY(t),this.applyMatrix4(Qn),this}rotateZ(t){return Qn.makeRotationZ(t),this.applyMatrix4(Qn),this}translate(t,e,n){return Qn.makeTranslation(t,e,n),this.applyMatrix4(Qn),this}scale(t,e,n){return Qn.makeScale(t,e,n),this.applyMatrix4(Qn),this}lookAt(t){return Tc.lookAt(t),Tc.updateMatrix(),this.applyMatrix4(Tc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xs).negate(),this.translate(xs.x,xs.y,xs.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ge(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new rs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];zn.setFromBufferAttribute(s),this.morphTargetsRelative?(Qe.addVectors(this.boundingBox.min,zn.min),this.boundingBox.expandByPoint(Qe),Qe.addVectors(this.boundingBox.max,zn.max),this.boundingBox.expandByPoint(Qe)):(this.boundingBox.expandByPoint(zn.min),this.boundingBox.expandByPoint(zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ss);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){const n=this.boundingSphere.center;if(zn.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];So.setFromBufferAttribute(a),this.morphTargetsRelative?(Qe.addVectors(zn.min,So.min),zn.expandByPoint(Qe),Qe.addVectors(zn.max,So.max),zn.expandByPoint(Qe)):(zn.expandByPoint(So.min),zn.expandByPoint(So.max))}zn.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)Qe.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Qe));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Qe.fromBufferAttribute(a,c),l&&(xs.fromBufferAttribute(t,c),Qe.add(xs)),i=Math.max(i,n.distanceToSquared(Qe))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ye(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<n.count;R++)a[R]=new U,l[R]=new U;const c=new U,h=new U,u=new U,f=new Yt,d=new Yt,_=new Yt,g=new U,p=new U;function m(R,L,v){c.fromBufferAttribute(n,R),h.fromBufferAttribute(n,L),u.fromBufferAttribute(n,v),f.fromBufferAttribute(s,R),d.fromBufferAttribute(s,L),_.fromBufferAttribute(s,v),h.sub(c),u.sub(c),d.sub(f),_.sub(f);const T=1/(d.x*_.y-_.x*d.y);isFinite(T)&&(g.copy(h).multiplyScalar(_.y).addScaledVector(u,-d.y).multiplyScalar(T),p.copy(u).multiplyScalar(d.x).addScaledVector(h,-_.x).multiplyScalar(T),a[R].add(g),a[L].add(g),a[v].add(g),l[R].add(p),l[L].add(p),l[v].add(p))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let R=0,L=S.length;R<L;++R){const v=S[R],T=v.start,I=v.count;for(let k=T,O=T+I;k<O;k+=3)m(t.getX(k+0),t.getX(k+1),t.getX(k+2))}const x=new U,M=new U,E=new U,w=new U;function y(R){E.fromBufferAttribute(i,R),w.copy(E);const L=a[R];x.copy(L),x.sub(E.multiplyScalar(E.dot(L))).normalize(),M.crossVectors(w,L);const T=M.dot(l[R])<0?-1:1;o.setXYZW(R,x.x,x.y,x.z,T)}for(let R=0,L=S.length;R<L;++R){const v=S[R],T=v.start,I=v.count;for(let k=T,O=T+I;k<O;k+=3)y(t.getX(k+0)),y(t.getX(k+1)),y(t.getX(k+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ye(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new U,s=new U,o=new U,a=new U,l=new U,c=new U,h=new U,u=new U;if(t)for(let f=0,d=t.count;f<d;f+=3){const _=t.getX(f+0),g=t.getX(f+1),p=t.getX(f+2);i.fromBufferAttribute(e,_),s.fromBufferAttribute(e,g),o.fromBufferAttribute(e,p),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)i.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Qe.fromBufferAttribute(t,e),Qe.normalize(),t.setXYZ(e,Qe.x,Qe.y,Qe.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h);let d=0,_=0;for(let g=0,p=l.length;g<p;g++){a.isInterleavedBufferAttribute?d=l[g]*a.data.stride+a.offset:d=l[g]*h;for(let m=0;m<h;m++)f[_++]=c[d++]}return new Ye(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new rn,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){const f=c[h],d=t(f,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(i[l]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const s=t.morphAttributes;for(const c in s){const h=[],u=s[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const kf=new ge,Ar=new zu,ya=new ss,Hf=new U,Ea=new U,ba=new U,Ta=new U,wc=new U,wa=new U,Gf=new U,Aa=new U;class fe extends qe{constructor(t=new rn,e=new Gr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(s&&a){wa.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],u=s[l];h!==0&&(wc.fromBufferAttribute(u,t),o?wa.addScaledVector(wc,h):wa.addScaledVector(wc.sub(e),h))}e.add(wa)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ya.copy(n.boundingSphere),ya.applyMatrix4(s),Ar.copy(t.ray).recast(t.near),!(ya.containsPoint(Ar.origin)===!1&&(Ar.intersectSphere(ya,Hf)===null||Ar.origin.distanceToSquared(Hf)>(t.far-t.near)**2))&&(kf.copy(s).invert(),Ar.copy(t.ray).applyMatrix4(kf),!(n.boundingBox!==null&&Ar.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ar)))}_computeIntersections(t,e,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){const p=f[_],m=o[p.materialIndex],S=Math.max(p.start,d.start),x=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let M=S,E=x;M<E;M+=3){const w=a.getX(M),y=a.getX(M+1),R=a.getX(M+2);i=Ra(this,m,t,n,c,h,u,w,y,R),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const _=Math.max(0,d.start),g=Math.min(a.count,d.start+d.count);for(let p=_,m=g;p<m;p+=3){const S=a.getX(p),x=a.getX(p+1),M=a.getX(p+2);i=Ra(this,o,t,n,c,h,u,S,x,M),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){const p=f[_],m=o[p.materialIndex],S=Math.max(p.start,d.start),x=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let M=S,E=x;M<E;M+=3){const w=M,y=M+1,R=M+2;i=Ra(this,m,t,n,c,h,u,w,y,R),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const _=Math.max(0,d.start),g=Math.min(l.count,d.start+d.count);for(let p=_,m=g;p<m;p+=3){const S=p,x=p+1,M=p+2;i=Ra(this,o,t,n,c,h,u,S,x,M),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}}function qg(r,t,e,n,i,s,o,a){let l;if(t.side===wn?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,t.side===vr,a),l===null)return null;Aa.copy(a),Aa.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(Aa);return c<e.near||c>e.far?null:{distance:c,point:Aa.clone(),object:r}}function Ra(r,t,e,n,i,s,o,a,l,c){r.getVertexPosition(a,Ea),r.getVertexPosition(l,ba),r.getVertexPosition(c,Ta);const h=qg(r,t,e,n,Ea,ba,Ta,Gf);if(h){const u=new U;ri.getBarycoord(Gf,Ea,ba,Ta,u),i&&(h.uv=ri.getInterpolatedAttribute(i,a,l,c,u,new Yt)),s&&(h.uv1=ri.getInterpolatedAttribute(s,a,l,c,u,new Yt)),o&&(h.normal=ri.getInterpolatedAttribute(o,a,l,c,u,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new U,materialIndex:0};ri.getNormal(Ea,ba,Ta,f.normal),h.face=f,h.barycoord=u}return h}class os extends rn{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],u=[];let f=0,d=0;_("z","y","x",-1,-1,n,e,t,o,s,0),_("z","y","x",1,-1,n,e,-t,o,s,1),_("x","z","y",1,1,t,n,e,i,o,2),_("x","z","y",1,-1,t,n,-e,i,o,3),_("x","y","z",1,-1,t,e,n,i,s,4),_("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Ge(c,3)),this.setAttribute("normal",new Ge(h,3)),this.setAttribute("uv",new Ge(u,2));function _(g,p,m,S,x,M,E,w,y,R,L){const v=M/y,T=E/R,I=M/2,k=E/2,O=w/2,K=y+1,N=R+1;let $=0,V=0;const rt=new U;for(let P=0;P<N;P++){const ct=P*T-k;for(let Rt=0;Rt<K;Rt++){const Nt=Rt*v-I;rt[g]=Nt*S,rt[p]=ct*x,rt[m]=O,c.push(rt.x,rt.y,rt.z),rt[g]=0,rt[p]=0,rt[m]=w>0?1:-1,h.push(rt.x,rt.y,rt.z),u.push(Rt/y),u.push(1-P/R),$+=1}}for(let P=0;P<R;P++)for(let ct=0;ct<y;ct++){const Rt=f+ct+K*P,Nt=f+ct+K*(P+1),q=f+(ct+1)+K*(P+1),et=f+(ct+1)+K*P;l.push(Rt,Nt,et),l.push(Nt,q,et),V+=6}a.addGroup(d,V,L),d+=V,f+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new os(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ao(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Sn(r){const t={};for(let e=0;e<r.length;e++){const n=ao(r[e]);for(const i in n)t[i]=n[i]}return t}function $g(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function Am(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:_e.workingColorSpace}const Kg={clone:ao,merge:Sn};var jg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Vi extends yr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jg,this.fragmentShader=Zg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ao(t.uniforms),this.uniformsGroups=$g(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Rm extends qe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ge,this.projectionMatrix=new ge,this.projectionMatrixInverse=new ge,this.coordinateSystem=Fi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ji=new U,Vf=new Yt,Wf=new Yt;class Vn extends Rm{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Zh*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(sc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Zh*2*Math.atan(Math.tan(sc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ji.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ji.x,ji.y).multiplyScalar(-t/ji.z),ji.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ji.x,ji.y).multiplyScalar(-t/ji.z)}getViewSize(t,e){return this.getViewBounds(t,Vf,Wf),e.subVectors(Wf,Vf)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(sc*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ss=-90,Ms=1;class Jg extends qe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Vn(Ss,Ms,t,e);i.layers=this.layers,this.add(i);const s=new Vn(Ss,Ms,t,e);s.layers=this.layers,this.add(s);const o=new Vn(Ss,Ms,t,e);o.layers=this.layers,this.add(o);const a=new Vn(Ss,Ms,t,e);a.layers=this.layers,this.add(a);const l=new Vn(Ss,Ms,t,e);l.layers=this.layers,this.add(l);const c=new Vn(Ss,Ms,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,o,a,l]=e;for(const c of e)this.remove(c);if(t===Fi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Rl)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Cm extends _n{constructor(t,e,n,i,s,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:io,super(t,e,n,i,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Qg extends Jr{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Cm(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:pi}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new os(5,5,5),s=new Vi({name:"CubemapFromEquirect",uniforms:ao(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:wn,blending:ur});s.uniforms.tEquirect.value=e;const o=new fe(i,s),a=e.minFilter;return e.minFilter===Hr&&(e.minFilter=pi),new Jg(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}}const Ac=new U,tv=new U,ev=new Jt;class Ir{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Ac.subVectors(n,e).cross(tv.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Ac),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||ev.getNormalMatrix(t),i=this.coplanarPoint(Ac).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Rr=new ss,Ca=new U;class ku{constructor(t=new Ir,e=new Ir,n=new Ir,i=new Ir,s=new Ir,o=new Ir){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Fi){const n=this.planes,i=t.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],u=i[6],f=i[7],d=i[8],_=i[9],g=i[10],p=i[11],m=i[12],S=i[13],x=i[14],M=i[15];if(n[0].setComponents(l-s,f-c,p-d,M-m).normalize(),n[1].setComponents(l+s,f+c,p+d,M+m).normalize(),n[2].setComponents(l+o,f+h,p+_,M+S).normalize(),n[3].setComponents(l-o,f-h,p-_,M-S).normalize(),n[4].setComponents(l-a,f-u,p-g,M-x).normalize(),e===Fi)n[5].setComponents(l+a,f+u,p+g,M+x).normalize();else if(e===Rl)n[5].setComponents(a,u,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Rr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Rr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Rr)}intersectsSprite(t){return Rr.center.set(0,0,0),Rr.radius=.7071067811865476,Rr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Rr)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Ca.x=i.normal.x>0?t.max.x:t.min.x,Ca.y=i.normal.y>0?t.max.y:t.min.y,Ca.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Ca)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Pm(){let r=null,t=!1,e=null,n=null;function i(s,o){e(s,o),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function nv(r){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,u=c.byteLength,f=r.createBuffer();r.bindBuffer(l,f),r.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=r.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=r.HALF_FLOAT:d=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=r.SHORT;else if(c instanceof Uint32Array)d=r.UNSIGNED_INT;else if(c instanceof Int32Array)d=r.INT;else if(c instanceof Int8Array)d=r.BYTE;else if(c instanceof Uint8Array)d=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(r.bindBuffer(c,a),u.length===0)r.bufferSubData(c,0,h);else{u.sort((d,_)=>d.start-_.start);let f=0;for(let d=1;d<u.length;d++){const _=u[f],g=u[d];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++f,u[f]=g)}u.length=f+1;for(let d=0,_=u.length;d<_;d++){const g=u[d];r.bufferSubData(c,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(r.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}class uo extends rn{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=t/a,f=e/l,d=[],_=[],g=[],p=[];for(let m=0;m<h;m++){const S=m*f-o;for(let x=0;x<c;x++){const M=x*u-s;_.push(M,-S,0),g.push(0,0,1),p.push(x/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let S=0;S<a;S++){const x=S+c*m,M=S+c*(m+1),E=S+1+c*(m+1),w=S+1+c*m;d.push(x,M,w),d.push(M,E,w)}this.setIndex(d),this.setAttribute("position",new Ge(_,3)),this.setAttribute("normal",new Ge(g,3)),this.setAttribute("uv",new Ge(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new uo(t.width,t.height,t.widthSegments,t.heightSegments)}}var iv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,rv=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,sv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ov=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,av=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,lv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cv=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,hv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,uv=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,fv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,dv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,pv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,mv=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,_v=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,gv=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,vv=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,xv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Sv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Mv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,yv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ev=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,bv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Tv=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,wv=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Av=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Rv=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Cv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Pv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Dv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Lv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Iv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Uv=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Nv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Ov=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Fv=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Bv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,kv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Hv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Gv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Vv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Wv=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Xv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Yv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qv=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$v=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Kv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,jv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Zv=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Jv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Qv=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,tx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ex=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,nx=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ix=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,rx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,sx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ox=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ax=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,cx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,hx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ux=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,fx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,px=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,mx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_x=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,gx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vx=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,xx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Mx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,yx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ex=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Tx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,wx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ax=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Rx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Cx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Px=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Dx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Lx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ix=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ux=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Nx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ox=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Fx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Bx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,zx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,kx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Hx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Gx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Vx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Wx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Xx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Yx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,qx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$x=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Kx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,jx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Zx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Jx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Qx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,tS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,eS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const nS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,iS=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,aS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,cS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,hS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,uS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,fS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,dS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,mS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_S=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,gS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,SS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,MS=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ES=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,bS=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,TS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wS=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,AS=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,RS=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,CS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,PS=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,DS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,LS=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,IS=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,US=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,NS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Zt={alphahash_fragment:iv,alphahash_pars_fragment:rv,alphamap_fragment:sv,alphamap_pars_fragment:ov,alphatest_fragment:av,alphatest_pars_fragment:lv,aomap_fragment:cv,aomap_pars_fragment:hv,batching_pars_vertex:uv,batching_vertex:fv,begin_vertex:dv,beginnormal_vertex:pv,bsdfs:mv,iridescence_fragment:_v,bumpmap_pars_fragment:gv,clipping_planes_fragment:vv,clipping_planes_pars_fragment:xv,clipping_planes_pars_vertex:Sv,clipping_planes_vertex:Mv,color_fragment:yv,color_pars_fragment:Ev,color_pars_vertex:bv,color_vertex:Tv,common:wv,cube_uv_reflection_fragment:Av,defaultnormal_vertex:Rv,displacementmap_pars_vertex:Cv,displacementmap_vertex:Pv,emissivemap_fragment:Dv,emissivemap_pars_fragment:Lv,colorspace_fragment:Iv,colorspace_pars_fragment:Uv,envmap_fragment:Nv,envmap_common_pars_fragment:Ov,envmap_pars_fragment:Fv,envmap_pars_vertex:Bv,envmap_physical_pars_fragment:Kv,envmap_vertex:zv,fog_vertex:kv,fog_pars_vertex:Hv,fog_fragment:Gv,fog_pars_fragment:Vv,gradientmap_pars_fragment:Wv,lightmap_pars_fragment:Xv,lights_lambert_fragment:Yv,lights_lambert_pars_fragment:qv,lights_pars_begin:$v,lights_toon_fragment:jv,lights_toon_pars_fragment:Zv,lights_phong_fragment:Jv,lights_phong_pars_fragment:Qv,lights_physical_fragment:tx,lights_physical_pars_fragment:ex,lights_fragment_begin:nx,lights_fragment_maps:ix,lights_fragment_end:rx,logdepthbuf_fragment:sx,logdepthbuf_pars_fragment:ox,logdepthbuf_pars_vertex:ax,logdepthbuf_vertex:lx,map_fragment:cx,map_pars_fragment:hx,map_particle_fragment:ux,map_particle_pars_fragment:fx,metalnessmap_fragment:dx,metalnessmap_pars_fragment:px,morphinstance_vertex:mx,morphcolor_vertex:_x,morphnormal_vertex:gx,morphtarget_pars_vertex:vx,morphtarget_vertex:xx,normal_fragment_begin:Sx,normal_fragment_maps:Mx,normal_pars_fragment:yx,normal_pars_vertex:Ex,normal_vertex:bx,normalmap_pars_fragment:Tx,clearcoat_normal_fragment_begin:wx,clearcoat_normal_fragment_maps:Ax,clearcoat_pars_fragment:Rx,iridescence_pars_fragment:Cx,opaque_fragment:Px,packing:Dx,premultiplied_alpha_fragment:Lx,project_vertex:Ix,dithering_fragment:Ux,dithering_pars_fragment:Nx,roughnessmap_fragment:Ox,roughnessmap_pars_fragment:Fx,shadowmap_pars_fragment:Bx,shadowmap_pars_vertex:zx,shadowmap_vertex:kx,shadowmask_pars_fragment:Hx,skinbase_vertex:Gx,skinning_pars_vertex:Vx,skinning_vertex:Wx,skinnormal_vertex:Xx,specularmap_fragment:Yx,specularmap_pars_fragment:qx,tonemapping_fragment:$x,tonemapping_pars_fragment:Kx,transmission_fragment:jx,transmission_pars_fragment:Zx,uv_pars_fragment:Jx,uv_pars_vertex:Qx,uv_vertex:tS,worldpos_vertex:eS,background_vert:nS,background_frag:iS,backgroundCube_vert:rS,backgroundCube_frag:sS,cube_vert:oS,cube_frag:aS,depth_vert:lS,depth_frag:cS,distanceRGBA_vert:hS,distanceRGBA_frag:uS,equirect_vert:fS,equirect_frag:dS,linedashed_vert:pS,linedashed_frag:mS,meshbasic_vert:_S,meshbasic_frag:gS,meshlambert_vert:vS,meshlambert_frag:xS,meshmatcap_vert:SS,meshmatcap_frag:MS,meshnormal_vert:yS,meshnormal_frag:ES,meshphong_vert:bS,meshphong_frag:TS,meshphysical_vert:wS,meshphysical_frag:AS,meshtoon_vert:RS,meshtoon_frag:CS,points_vert:PS,points_frag:DS,shadow_vert:LS,shadow_frag:IS,sprite_vert:US,sprite_frag:NS},vt={common:{diffuse:{value:new Gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Jt}},envmap:{envMap:{value:null},envMapRotation:{value:new Jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Jt},normalScale:{value:new Yt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0},uvTransform:{value:new Jt}},sprite:{diffuse:{value:new Gt(16777215)},opacity:{value:1},center:{value:new Yt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}}},xi={basic:{uniforms:Sn([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.fog]),vertexShader:Zt.meshbasic_vert,fragmentShader:Zt.meshbasic_frag},lambert:{uniforms:Sn([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new Gt(0)}}]),vertexShader:Zt.meshlambert_vert,fragmentShader:Zt.meshlambert_frag},phong:{uniforms:Sn([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new Gt(0)},specular:{value:new Gt(1118481)},shininess:{value:30}}]),vertexShader:Zt.meshphong_vert,fragmentShader:Zt.meshphong_frag},standard:{uniforms:Sn([vt.common,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.roughnessmap,vt.metalnessmap,vt.fog,vt.lights,{emissive:{value:new Gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag},toon:{uniforms:Sn([vt.common,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.gradientmap,vt.fog,vt.lights,{emissive:{value:new Gt(0)}}]),vertexShader:Zt.meshtoon_vert,fragmentShader:Zt.meshtoon_frag},matcap:{uniforms:Sn([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,{matcap:{value:null}}]),vertexShader:Zt.meshmatcap_vert,fragmentShader:Zt.meshmatcap_frag},points:{uniforms:Sn([vt.points,vt.fog]),vertexShader:Zt.points_vert,fragmentShader:Zt.points_frag},dashed:{uniforms:Sn([vt.common,vt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Zt.linedashed_vert,fragmentShader:Zt.linedashed_frag},depth:{uniforms:Sn([vt.common,vt.displacementmap]),vertexShader:Zt.depth_vert,fragmentShader:Zt.depth_frag},normal:{uniforms:Sn([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,{opacity:{value:1}}]),vertexShader:Zt.meshnormal_vert,fragmentShader:Zt.meshnormal_frag},sprite:{uniforms:Sn([vt.sprite,vt.fog]),vertexShader:Zt.sprite_vert,fragmentShader:Zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Zt.background_vert,fragmentShader:Zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Jt}},vertexShader:Zt.backgroundCube_vert,fragmentShader:Zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Zt.cube_vert,fragmentShader:Zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Zt.equirect_vert,fragmentShader:Zt.equirect_frag},distanceRGBA:{uniforms:Sn([vt.common,vt.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Zt.distanceRGBA_vert,fragmentShader:Zt.distanceRGBA_frag},shadow:{uniforms:Sn([vt.lights,vt.fog,{color:{value:new Gt(0)},opacity:{value:1}}]),vertexShader:Zt.shadow_vert,fragmentShader:Zt.shadow_frag}};xi.physical={uniforms:Sn([xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Jt},clearcoatNormalScale:{value:new Yt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Jt},sheen:{value:0},sheenColor:{value:new Gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Jt},transmissionSamplerSize:{value:new Yt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Jt},attenuationDistance:{value:0},attenuationColor:{value:new Gt(0)},specularColor:{value:new Gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Jt},anisotropyVector:{value:new Yt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Jt}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag};const Pa={r:0,b:0,g:0},Cr=new _i,OS=new ge;function FS(r,t,e,n,i,s,o){const a=new Gt(0);let l=s===!0?0:1,c,h,u=null,f=0,d=null;function _(S){let x=S.isScene===!0?S.background:null;return x&&x.isTexture&&(x=(S.backgroundBlurriness>0?e:t).get(x)),x}function g(S){let x=!1;const M=_(S);M===null?m(a,l):M&&M.isColor&&(m(M,1),x=!0);const E=r.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function p(S,x){const M=_(x);M&&(M.isCubeTexture||M.mapping===Hl)?(h===void 0&&(h=new fe(new os(1,1,1),new Vi({name:"BackgroundCubeMaterial",uniforms:ao(xi.backgroundCube.uniforms),vertexShader:xi.backgroundCube.vertexShader,fragmentShader:xi.backgroundCube.fragmentShader,side:wn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,w,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Cr.copy(x.backgroundRotation),Cr.x*=-1,Cr.y*=-1,Cr.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Cr.y*=-1,Cr.z*=-1),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(OS.makeRotationFromEuler(Cr)),h.material.toneMapped=_e.getTransfer(M.colorSpace)!==Ce,(u!==M||f!==M.version||d!==r.toneMapping)&&(h.material.needsUpdate=!0,u=M,f=M.version,d=r.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new fe(new uo(2,2),new Vi({name:"BackgroundMaterial",uniforms:ao(xi.background.uniforms),vertexShader:xi.background.vertexShader,fragmentShader:xi.background.fragmentShader,side:vr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=_e.getTransfer(M.colorSpace)!==Ce,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||f!==M.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,u=M,f=M.version,d=r.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function m(S,x){S.getRGB(Pa,Am(r)),n.buffers.color.setClear(Pa.r,Pa.g,Pa.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(S,x=1){a.set(S),l=x,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,m(a,l)},render:g,addToRenderList:p}}function BS(r,t){const e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=f(null);let s=i,o=!1;function a(v,T,I,k,O){let K=!1;const N=u(k,I,T);s!==N&&(s=N,c(s.object)),K=d(v,k,I,O),K&&_(v,k,I,O),O!==null&&t.update(O,r.ELEMENT_ARRAY_BUFFER),(K||o)&&(o=!1,M(v,T,I,k),O!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function l(){return r.createVertexArray()}function c(v){return r.bindVertexArray(v)}function h(v){return r.deleteVertexArray(v)}function u(v,T,I){const k=I.wireframe===!0;let O=n[v.id];O===void 0&&(O={},n[v.id]=O);let K=O[T.id];K===void 0&&(K={},O[T.id]=K);let N=K[k];return N===void 0&&(N=f(l()),K[k]=N),N}function f(v){const T=[],I=[],k=[];for(let O=0;O<e;O++)T[O]=0,I[O]=0,k[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:I,attributeDivisors:k,object:v,attributes:{},index:null}}function d(v,T,I,k){const O=s.attributes,K=T.attributes;let N=0;const $=I.getAttributes();for(const V in $)if($[V].location>=0){const P=O[V];let ct=K[V];if(ct===void 0&&(V==="instanceMatrix"&&v.instanceMatrix&&(ct=v.instanceMatrix),V==="instanceColor"&&v.instanceColor&&(ct=v.instanceColor)),P===void 0||P.attribute!==ct||ct&&P.data!==ct.data)return!0;N++}return s.attributesNum!==N||s.index!==k}function _(v,T,I,k){const O={},K=T.attributes;let N=0;const $=I.getAttributes();for(const V in $)if($[V].location>=0){let P=K[V];P===void 0&&(V==="instanceMatrix"&&v.instanceMatrix&&(P=v.instanceMatrix),V==="instanceColor"&&v.instanceColor&&(P=v.instanceColor));const ct={};ct.attribute=P,P&&P.data&&(ct.data=P.data),O[V]=ct,N++}s.attributes=O,s.attributesNum=N,s.index=k}function g(){const v=s.newAttributes;for(let T=0,I=v.length;T<I;T++)v[T]=0}function p(v){m(v,0)}function m(v,T){const I=s.newAttributes,k=s.enabledAttributes,O=s.attributeDivisors;I[v]=1,k[v]===0&&(r.enableVertexAttribArray(v),k[v]=1),O[v]!==T&&(r.vertexAttribDivisor(v,T),O[v]=T)}function S(){const v=s.newAttributes,T=s.enabledAttributes;for(let I=0,k=T.length;I<k;I++)T[I]!==v[I]&&(r.disableVertexAttribArray(I),T[I]=0)}function x(v,T,I,k,O,K,N){N===!0?r.vertexAttribIPointer(v,T,I,O,K):r.vertexAttribPointer(v,T,I,k,O,K)}function M(v,T,I,k){g();const O=k.attributes,K=I.getAttributes(),N=T.defaultAttributeValues;for(const $ in K){const V=K[$];if(V.location>=0){let rt=O[$];if(rt===void 0&&($==="instanceMatrix"&&v.instanceMatrix&&(rt=v.instanceMatrix),$==="instanceColor"&&v.instanceColor&&(rt=v.instanceColor)),rt!==void 0){const P=rt.normalized,ct=rt.itemSize,Rt=t.get(rt);if(Rt===void 0)continue;const Nt=Rt.buffer,q=Rt.type,et=Rt.bytesPerElement,ut=q===r.INT||q===r.UNSIGNED_INT||rt.gpuType===Du;if(rt.isInterleavedBufferAttribute){const lt=rt.data,Y=lt.stride,J=rt.offset;if(lt.isInstancedInterleavedBuffer){for(let pt=0;pt<V.locationSize;pt++)m(V.location+pt,lt.meshPerAttribute);v.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let pt=0;pt<V.locationSize;pt++)p(V.location+pt);r.bindBuffer(r.ARRAY_BUFFER,Nt);for(let pt=0;pt<V.locationSize;pt++)x(V.location+pt,ct/V.locationSize,q,P,Y*et,(J+ct/V.locationSize*pt)*et,ut)}else{if(rt.isInstancedBufferAttribute){for(let lt=0;lt<V.locationSize;lt++)m(V.location+lt,rt.meshPerAttribute);v.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let lt=0;lt<V.locationSize;lt++)p(V.location+lt);r.bindBuffer(r.ARRAY_BUFFER,Nt);for(let lt=0;lt<V.locationSize;lt++)x(V.location+lt,ct/V.locationSize,q,P,ct*et,ct/V.locationSize*lt*et,ut)}}else if(N!==void 0){const P=N[$];if(P!==void 0)switch(P.length){case 2:r.vertexAttrib2fv(V.location,P);break;case 3:r.vertexAttrib3fv(V.location,P);break;case 4:r.vertexAttrib4fv(V.location,P);break;default:r.vertexAttrib1fv(V.location,P)}}}}S()}function E(){R();for(const v in n){const T=n[v];for(const I in T){const k=T[I];for(const O in k)h(k[O].object),delete k[O];delete T[I]}delete n[v]}}function w(v){if(n[v.id]===void 0)return;const T=n[v.id];for(const I in T){const k=T[I];for(const O in k)h(k[O].object),delete k[O];delete T[I]}delete n[v.id]}function y(v){for(const T in n){const I=n[T];if(I[v.id]===void 0)continue;const k=I[v.id];for(const O in k)h(k[O].object),delete k[O];delete I[v.id]}}function R(){L(),o=!0,s!==i&&(s=i,c(s.object))}function L(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:R,resetDefaultState:L,dispose:E,releaseStatesOfGeometry:w,releaseStatesOfProgram:y,initAttributes:g,enableAttribute:p,disableUnusedAttributes:S}}function zS(r,t,e){let n;function i(c){n=c}function s(c,h){r.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(r.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let d=0;for(let _=0;_<u;_++)d+=h[_];e.update(d,n,1)}function l(c,h,u,f){if(u===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let _=0;_<c.length;_++)o(c[_],h[_],f[_]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let _=0;for(let g=0;g<u;g++)_+=h[g];for(let g=0;g<f.length;g++)e.update(_,n,f[g])}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function kS(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const y=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(y){return!(y!==mi&&n.convert(y)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(y){const R=y===ha&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(y!==Gi&&n.convert(y)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&y!==bi&&!R)}function l(y){if(y==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";y="mediump"}return y==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(f===!0){const y=t.get("EXT_clip_control");y.clipControlEXT(y.LOWER_LEFT_EXT,y.ZERO_TO_ONE_EXT)}const d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_TEXTURE_SIZE),p=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),S=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),x=r.getParameter(r.MAX_VARYING_VECTORS),M=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),E=_>0,w=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:S,maxVaryings:x,maxFragmentUniforms:M,vertexTextures:E,maxSamples:w}}function HS(r){const t=this;let e=null,n=0,i=!1,s=!1;const o=new Ir,a=new Jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){const _=u.clippingPlanes,g=u.clipIntersection,p=u.clipShadows,m=r.get(u);if(!i||_===null||_.length===0||s&&!p)s?h(null):c();else{const S=s?0:n,x=S*4;let M=m.clippingState||null;l.value=M,M=h(_,f,x,d);for(let E=0;E!==x;++E)M[E]=e[E];m.clippingState=M,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,_){const g=u!==null?u.length:0;let p=null;if(g!==0){if(p=l.value,_!==!0||p===null){const m=d+g*4,S=f.matrixWorldInverse;a.getNormalMatrix(S),(p===null||p.length<m)&&(p=new Float32Array(m));for(let x=0,M=d;x!==g;++x,M+=4)o.copy(u[x]).applyMatrix4(S,a),o.normal.toArray(p,M),p[M+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,p}}function GS(r){let t=new WeakMap;function e(o,a){return a===Sh?o.mapping=io:a===Mh&&(o.mapping=ro),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Sh||a===Mh)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Qg(l.height);return c.fromEquirectangularTexture(r,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class Dm extends Rm{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const zs=4,Xf=[.125,.215,.35,.446,.526,.582],Br=20,Rc=new Dm,Yf=new Gt;let Cc=null,Pc=0,Dc=0,Lc=!1;const Ur=(1+Math.sqrt(5))/2,ys=1/Ur,qf=[new U(-Ur,ys,0),new U(Ur,ys,0),new U(-ys,0,Ur),new U(ys,0,Ur),new U(0,Ur,-ys),new U(0,Ur,ys),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)];class Jh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Cc=this._renderer.getRenderTarget(),Pc=this._renderer.getActiveCubeFace(),Dc=this._renderer.getActiveMipmapLevel(),Lc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Kf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Cc,Pc,Dc),this._renderer.xr.enabled=Lc,t.scissorTest=!1,Da(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===io||t.mapping===ro?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Cc=this._renderer.getRenderTarget(),Pc=this._renderer.getActiveCubeFace(),Dc=this._renderer.getActiveMipmapLevel(),Lc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:pi,minFilter:pi,generateMipmaps:!1,type:ha,format:mi,colorSpace:Mr,depthBuffer:!1},i=$f(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$f(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=VS(s)),this._blurMaterial=WS(s,t,e)}return i}_compileMaterial(t){const e=new fe(this._lodPlanes[0],t);this._renderer.compile(e,Rc)}_sceneToCubeUV(t,e,n,i){const a=new Vn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Yf),h.toneMapping=fr,h.autoClear=!1;const d=new Gr({name:"PMREM.Background",side:wn,depthWrite:!1,depthTest:!1}),_=new fe(new os,d);let g=!1;const p=t.background;p?p.isColor&&(d.color.copy(p),t.background=null,g=!0):(d.color.copy(Yf),g=!0);for(let m=0;m<6;m++){const S=m%3;S===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):S===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const x=this._cubeSize;Da(i,S*x,m>2?x:0,x,x),h.setRenderTarget(i),g&&h.render(_,a),h.render(t,a)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===io||t.mapping===ro;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=jf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Kf());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new fe(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;Da(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Rc)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=qf[(i-s-1)%qf.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",s),this._halfBlur(o,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new fe(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Br-1),g=s/_,p=isFinite(s)?1+Math.floor(h*g):Br;p>Br&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Br}`);const m=[];let S=0;for(let y=0;y<Br;++y){const R=y/g,L=Math.exp(-R*R/2);m.push(L),y===0?S+=L:y<p&&(S+=2*L)}for(let y=0;y<m.length;y++)m[y]=m[y]/S;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:x}=this;f.dTheta.value=_,f.mipInt.value=x-n;const M=this._sizeLods[i],E=3*M*(i>x-zs?i-x+zs:0),w=4*(this._cubeSize-M);Da(e,E,w,3*M,2*M),l.setRenderTarget(e),l.render(u,Rc)}}function VS(r){const t=[],e=[],n=[];let i=r;const s=r-zs+1+Xf.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>r-zs?l=Xf[o-r+zs-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,_=6,g=3,p=2,m=1,S=new Float32Array(g*_*d),x=new Float32Array(p*_*d),M=new Float32Array(m*_*d);for(let w=0;w<d;w++){const y=w%3*2/3-1,R=w>2?0:-1,L=[y,R,0,y+2/3,R,0,y+2/3,R+1,0,y,R,0,y+2/3,R+1,0,y,R+1,0];S.set(L,g*_*w),x.set(f,p*_*w);const v=[w,w,w,w,w,w];M.set(v,m*_*w)}const E=new rn;E.setAttribute("position",new Ye(S,g)),E.setAttribute("uv",new Ye(x,p)),E.setAttribute("faceIndex",new Ye(M,m)),t.push(E),i>zs&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function $f(r,t,e){const n=new Jr(r,t,e);return n.texture.mapping=Hl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Da(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function WS(r,t,e){const n=new Float32Array(Br),i=new U(0,1,0);return new Vi({name:"SphericalGaussianBlur",defines:{n:Br,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Hu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ur,depthTest:!1,depthWrite:!1})}function Kf(){return new Vi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Hu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ur,depthTest:!1,depthWrite:!1})}function jf(){return new Vi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Hu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ur,depthTest:!1,depthWrite:!1})}function Hu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function XS(r){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Sh||l===Mh,h=l===io||l===ro;if(c||h){let u=t.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Jh(r)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const d=a.image;return c&&d&&d.height>0||h&&d&&i(d)?(e===null&&(e=new Jh(r)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function YS(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&hl("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function qS(r,t,e,n){const i={},s=new WeakMap;function o(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const _ in f.attributes)t.remove(f.attributes[_]);for(const _ in f.morphAttributes){const g=f.morphAttributes[_];for(let p=0,m=g.length;p<m;p++)t.remove(g[p])}f.removeEventListener("dispose",o),delete i[f.id];const d=s.get(f);d&&(t.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,e.memory.geometries++),f}function l(u){const f=u.attributes;for(const _ in f)t.update(f[_],r.ARRAY_BUFFER);const d=u.morphAttributes;for(const _ in d){const g=d[_];for(let p=0,m=g.length;p<m;p++)t.update(g[p],r.ARRAY_BUFFER)}}function c(u){const f=[],d=u.index,_=u.attributes.position;let g=0;if(d!==null){const S=d.array;g=d.version;for(let x=0,M=S.length;x<M;x+=3){const E=S[x+0],w=S[x+1],y=S[x+2];f.push(E,w,w,y,y,E)}}else if(_!==void 0){const S=_.array;g=_.version;for(let x=0,M=S.length/3-1;x<M;x+=3){const E=x+0,w=x+1,y=x+2;f.push(E,w,w,y,y,E)}}else return;const p=new(Sm(f)?wm:Tm)(f,1);p.version=g;const m=s.get(u);m&&t.remove(m),s.set(u,p)}function h(u){const f=s.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function $S(r,t,e){let n;function i(f){n=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,d){r.drawElements(n,d,s,f*o),e.update(d,n,1)}function c(f,d,_){_!==0&&(r.drawElementsInstanced(n,d,s,f*o,_),e.update(d,n,_))}function h(f,d,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,f,0,_);let p=0;for(let m=0;m<_;m++)p+=d[m];e.update(p,n,1)}function u(f,d,_,g){if(_===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<f.length;m++)c(f[m]/o,d[m],g[m]);else{p.multiDrawElementsInstancedWEBGL(n,d,0,s,f,0,g,0,_);let m=0;for(let S=0;S<_;S++)m+=d[S];for(let S=0;S<g.length;S++)e.update(m,n,g[S])}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function KS(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function jS(r,t,e){const n=new WeakMap,i=new ye;function s(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==u){let L=function(){y.dispose(),n.delete(a),a.removeEventListener("dispose",L)};f!==void 0&&f.texture.dispose();const d=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let x=0;d===!0&&(x=1),_===!0&&(x=2),g===!0&&(x=3);let M=a.attributes.position.count*x,E=1;M>t.maxTextureSize&&(E=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);const w=new Float32Array(M*E*4*u),y=new ym(w,M,E,u);y.type=bi,y.needsUpdate=!0;const R=x*4;for(let v=0;v<u;v++){const T=p[v],I=m[v],k=S[v],O=M*E*4*v;for(let K=0;K<T.count;K++){const N=K*R;d===!0&&(i.fromBufferAttribute(T,K),w[O+N+0]=i.x,w[O+N+1]=i.y,w[O+N+2]=i.z,w[O+N+3]=0),_===!0&&(i.fromBufferAttribute(I,K),w[O+N+4]=i.x,w[O+N+5]=i.y,w[O+N+6]=i.z,w[O+N+7]=0),g===!0&&(i.fromBufferAttribute(k,K),w[O+N+8]=i.x,w[O+N+9]=i.y,w[O+N+10]=i.z,w[O+N+11]=k.itemSize===4?i.w:1)}}f={count:u,texture:y,size:new Yt(M,E)},n.set(a,f),a.addEventListener("dispose",L)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,e);else{let d=0;for(let g=0;g<c.length;g++)d+=c[g];const _=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(r,"morphTargetBaseInfluence",_),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}return{update:s}}function ZS(r,t,e,n){let i=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return u}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}class Lm extends _n{constructor(t,e,n,i,s,o,a,l,c,h=Xs){if(h!==Xs&&h!==oo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Xs&&(n=Zr),n===void 0&&h===oo&&(n=so),super(null,i,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Pn,this.minFilter=l!==void 0?l:Pn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Im=new _n,Zf=new Lm(1,1),Um=new ym,Nm=new Fg,Om=new Cm,Jf=[],Qf=[],td=new Float32Array(16),ed=new Float32Array(9),nd=new Float32Array(4);function fo(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=Jf[i];if(s===void 0&&(s=new Float32Array(i),Jf[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function je(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function Ze(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function Vl(r,t){let e=Qf[t];e===void 0&&(e=new Int32Array(t),Qf[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function JS(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function QS(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(je(e,t))return;r.uniform2fv(this.addr,t),Ze(e,t)}}function tM(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(je(e,t))return;r.uniform3fv(this.addr,t),Ze(e,t)}}function eM(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(je(e,t))return;r.uniform4fv(this.addr,t),Ze(e,t)}}function nM(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(je(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),Ze(e,t)}else{if(je(e,n))return;nd.set(n),r.uniformMatrix2fv(this.addr,!1,nd),Ze(e,n)}}function iM(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(je(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),Ze(e,t)}else{if(je(e,n))return;ed.set(n),r.uniformMatrix3fv(this.addr,!1,ed),Ze(e,n)}}function rM(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(je(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),Ze(e,t)}else{if(je(e,n))return;td.set(n),r.uniformMatrix4fv(this.addr,!1,td),Ze(e,n)}}function sM(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function oM(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(je(e,t))return;r.uniform2iv(this.addr,t),Ze(e,t)}}function aM(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(je(e,t))return;r.uniform3iv(this.addr,t),Ze(e,t)}}function lM(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(je(e,t))return;r.uniform4iv(this.addr,t),Ze(e,t)}}function cM(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function hM(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(je(e,t))return;r.uniform2uiv(this.addr,t),Ze(e,t)}}function uM(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(je(e,t))return;r.uniform3uiv(this.addr,t),Ze(e,t)}}function fM(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(je(e,t))return;r.uniform4uiv(this.addr,t),Ze(e,t)}}function dM(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Zf.compareFunction=xm,s=Zf):s=Im,e.setTexture2D(t||s,i)}function pM(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Nm,i)}function mM(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Om,i)}function _M(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Um,i)}function gM(r){switch(r){case 5126:return JS;case 35664:return QS;case 35665:return tM;case 35666:return eM;case 35674:return nM;case 35675:return iM;case 35676:return rM;case 5124:case 35670:return sM;case 35667:case 35671:return oM;case 35668:case 35672:return aM;case 35669:case 35673:return lM;case 5125:return cM;case 36294:return hM;case 36295:return uM;case 36296:return fM;case 35678:case 36198:case 36298:case 36306:case 35682:return dM;case 35679:case 36299:case 36307:return pM;case 35680:case 36300:case 36308:case 36293:return mM;case 36289:case 36303:case 36311:case 36292:return _M}}function vM(r,t){r.uniform1fv(this.addr,t)}function xM(r,t){const e=fo(t,this.size,2);r.uniform2fv(this.addr,e)}function SM(r,t){const e=fo(t,this.size,3);r.uniform3fv(this.addr,e)}function MM(r,t){const e=fo(t,this.size,4);r.uniform4fv(this.addr,e)}function yM(r,t){const e=fo(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function EM(r,t){const e=fo(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function bM(r,t){const e=fo(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function TM(r,t){r.uniform1iv(this.addr,t)}function wM(r,t){r.uniform2iv(this.addr,t)}function AM(r,t){r.uniform3iv(this.addr,t)}function RM(r,t){r.uniform4iv(this.addr,t)}function CM(r,t){r.uniform1uiv(this.addr,t)}function PM(r,t){r.uniform2uiv(this.addr,t)}function DM(r,t){r.uniform3uiv(this.addr,t)}function LM(r,t){r.uniform4uiv(this.addr,t)}function IM(r,t,e){const n=this.cache,i=t.length,s=Vl(e,i);je(n,s)||(r.uniform1iv(this.addr,s),Ze(n,s));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||Im,s[o])}function UM(r,t,e){const n=this.cache,i=t.length,s=Vl(e,i);je(n,s)||(r.uniform1iv(this.addr,s),Ze(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Nm,s[o])}function NM(r,t,e){const n=this.cache,i=t.length,s=Vl(e,i);je(n,s)||(r.uniform1iv(this.addr,s),Ze(n,s));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||Om,s[o])}function OM(r,t,e){const n=this.cache,i=t.length,s=Vl(e,i);je(n,s)||(r.uniform1iv(this.addr,s),Ze(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Um,s[o])}function FM(r){switch(r){case 5126:return vM;case 35664:return xM;case 35665:return SM;case 35666:return MM;case 35674:return yM;case 35675:return EM;case 35676:return bM;case 5124:case 35670:return TM;case 35667:case 35671:return wM;case 35668:case 35672:return AM;case 35669:case 35673:return RM;case 5125:return CM;case 36294:return PM;case 36295:return DM;case 36296:return LM;case 35678:case 36198:case 36298:case 36306:case 35682:return IM;case 35679:case 36299:case 36307:return UM;case 35680:case 36300:case 36308:case 36293:return NM;case 36289:case 36303:case 36311:case 36292:return OM}}class BM{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=gM(e.type)}}class zM{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=FM(e.type)}}class kM{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(t,e[a.id],n)}}}const Ic=/(\w+)(\])?(\[|\.)?/g;function id(r,t){r.seq.push(t),r.map[t.id]=t}function HM(r,t,e){const n=r.name,i=n.length;for(Ic.lastIndex=0;;){const s=Ic.exec(n),o=Ic.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){id(e,c===void 0?new BM(a,r,t):new zM(a,r,t));break}else{let u=e.map[a];u===void 0&&(u=new kM(a),id(e,u)),e=u}}}class ul{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),o=t.getUniformLocation(e,s.name);HM(s,o,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function rd(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}const GM=37297;let VM=0;function WM(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function XM(r){const t=_e.getPrimaries(_e.workingColorSpace),e=_e.getPrimaries(r);let n;switch(t===e?n="":t===Al&&e===wl?n="LinearDisplayP3ToLinearSRGB":t===wl&&e===Al&&(n="LinearSRGBToLinearDisplayP3"),r){case Mr:case Gl:return[n,"LinearTransferOETF"];case Rn:case Bu:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function sd(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+WM(r.getShaderSource(t),o)}else return i}function YM(r,t){const e=XM(t);return`vec4 ${r}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function qM(r,t){let e;switch(t){case cg:e="Linear";break;case hg:e="Reinhard";break;case ug:e="Cineon";break;case fg:e="ACESFilmic";break;case pg:e="AgX";break;case mg:e="Neutral";break;case dg:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const La=new U;function $M(){_e.getLuminanceCoefficients(La);const r=La.x.toFixed(4),t=La.y.toFixed(4),e=La.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function KM(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Uo).join(`
`)}function jM(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function ZM(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function Uo(r){return r!==""}function od(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ad(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const JM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qh(r){return r.replace(JM,ty)}const QM=new Map;function ty(r,t){let e=Zt[t];if(e===void 0){const n=QM.get(t);if(n!==void 0)e=Zt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Qh(e)}const ey=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ld(r){return r.replace(ey,ny)}function ny(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function cd(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function iy(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===om?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===G0?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Ii&&(t="SHADOWMAP_TYPE_VSM"),t}function ry(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case io:case ro:t="ENVMAP_TYPE_CUBE";break;case Hl:t="ENVMAP_TYPE_CUBE_UV";break}return t}function sy(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case ro:t="ENVMAP_MODE_REFRACTION";break}return t}function oy(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case am:t="ENVMAP_BLENDING_MULTIPLY";break;case ag:t="ENVMAP_BLENDING_MIX";break;case lg:t="ENVMAP_BLENDING_ADD";break}return t}function ay(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function ly(r,t,e,n){const i=r.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=iy(e),c=ry(e),h=sy(e),u=oy(e),f=ay(e),d=KM(e),_=jM(s),g=i.createProgram();let p,m,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Uo).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Uo).join(`
`),m.length>0&&(m+=`
`)):(p=[cd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Uo).join(`
`),m=[cd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==fr?"#define TONE_MAPPING":"",e.toneMapping!==fr?Zt.tonemapping_pars_fragment:"",e.toneMapping!==fr?qM("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Zt.colorspace_pars_fragment,YM("linearToOutputTexel",e.outputColorSpace),$M(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Uo).join(`
`)),o=Qh(o),o=od(o,e),o=ad(o,e),a=Qh(a),a=od(a,e),a=ad(a,e),o=ld(o),a=ld(a),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===Af?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Af?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const x=S+p+o,M=S+m+a,E=rd(i,i.VERTEX_SHADER,x),w=rd(i,i.FRAGMENT_SHADER,M);i.attachShader(g,E),i.attachShader(g,w),e.index0AttributeName!==void 0?i.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function y(T){if(r.debug.checkShaderErrors){const I=i.getProgramInfoLog(g).trim(),k=i.getShaderInfoLog(E).trim(),O=i.getShaderInfoLog(w).trim();let K=!0,N=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(K=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,g,E,w);else{const $=sd(i,E,"vertex"),V=sd(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+I+`
`+$+`
`+V)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(k===""||O==="")&&(N=!1);N&&(T.diagnostics={runnable:K,programLog:I,vertexShader:{log:k,prefix:p},fragmentShader:{log:O,prefix:m}})}i.deleteShader(E),i.deleteShader(w),R=new ul(i,g),L=ZM(i,g)}let R;this.getUniforms=function(){return R===void 0&&y(this),R};let L;this.getAttributes=function(){return L===void 0&&y(this),L};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=i.getProgramParameter(g,GM)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=VM++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=E,this.fragmentShader=w,this}let cy=0;class hy{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new uy(t),e.set(t,n)),n}}class uy{constructor(t){this.id=cy++,this.code=t,this.usedTimes=0}}function fy(r,t,e,n,i,s,o){const a=new Em,l=new hy,c=new Set,h=[],u=i.logarithmicDepthBuffer,f=i.reverseDepthBuffer,d=i.vertexTextures;let _=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return c.add(v),v===0?"uv":`uv${v}`}function m(v,T,I,k,O){const K=k.fog,N=O.geometry,$=v.isMeshStandardMaterial?k.environment:null,V=(v.isMeshStandardMaterial?e:t).get(v.envMap||$),rt=V&&V.mapping===Hl?V.image.height:null,P=g[v.type];v.precision!==null&&(_=i.getMaxPrecision(v.precision),_!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",_,"instead."));const ct=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,Rt=ct!==void 0?ct.length:0;let Nt=0;N.morphAttributes.position!==void 0&&(Nt=1),N.morphAttributes.normal!==void 0&&(Nt=2),N.morphAttributes.color!==void 0&&(Nt=3);let q,et,ut,lt;if(P){const It=xi[P];q=It.vertexShader,et=It.fragmentShader}else q=v.vertexShader,et=v.fragmentShader,l.update(v),ut=l.getVertexShaderID(v),lt=l.getFragmentShaderID(v);const Y=r.getRenderTarget(),J=O.isInstancedMesh===!0,pt=O.isBatchedMesh===!0,At=!!v.map,Et=!!v.matcap,D=!!V,qt=!!v.aoMap,St=!!v.lightMap,Vt=!!v.bumpMap,H=!!v.normalMap,te=!!v.displacementMap,Ft=!!v.emissiveMap,C=!!v.metalnessMap,b=!!v.roughnessMap,X=v.anisotropy>0,Q=v.clearcoat>0,it=v.dispersion>0,Z=v.iridescence>0,Tt=v.sheen>0,ot=v.transmission>0,_t=X&&!!v.anisotropyMap,Xt=Q&&!!v.clearcoatMap,st=Q&&!!v.clearcoatNormalMap,yt=Q&&!!v.clearcoatRoughnessMap,bt=Z&&!!v.iridescenceMap,zt=Z&&!!v.iridescenceThicknessMap,Mt=Tt&&!!v.sheenColorMap,$t=Tt&&!!v.sheenRoughnessMap,Ht=!!v.specularMap,le=!!v.specularColorMap,F=!!v.specularIntensityMap,nt=ot&&!!v.transmissionMap,j=ot&&!!v.thicknessMap,tt=!!v.gradientMap,ht=!!v.alphaMap,ft=v.alphaTest>0,Kt=!!v.alphaHash,Ee=!!v.extensions;let Pe=fr;v.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(Pe=r.toneMapping);const oe={shaderID:P,shaderType:v.type,shaderName:v.name,vertexShader:q,fragmentShader:et,defines:v.defines,customVertexShaderID:ut,customFragmentShaderID:lt,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:_,batching:pt,batchingColor:pt&&O._colorsTexture!==null,instancing:J,instancingColor:J&&O.instanceColor!==null,instancingMorph:J&&O.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Y===null?r.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:Mr,alphaToCoverage:!!v.alphaToCoverage,map:At,matcap:Et,envMap:D,envMapMode:D&&V.mapping,envMapCubeUVHeight:rt,aoMap:qt,lightMap:St,bumpMap:Vt,normalMap:H,displacementMap:d&&te,emissiveMap:Ft,normalMapObjectSpace:H&&v.normalMapType===xg,normalMapTangentSpace:H&&v.normalMapType===vm,metalnessMap:C,roughnessMap:b,anisotropy:X,anisotropyMap:_t,clearcoat:Q,clearcoatMap:Xt,clearcoatNormalMap:st,clearcoatRoughnessMap:yt,dispersion:it,iridescence:Z,iridescenceMap:bt,iridescenceThicknessMap:zt,sheen:Tt,sheenColorMap:Mt,sheenRoughnessMap:$t,specularMap:Ht,specularColorMap:le,specularIntensityMap:F,transmission:ot,transmissionMap:nt,thicknessMap:j,gradientMap:tt,opaque:v.transparent===!1&&v.blending===Ws&&v.alphaToCoverage===!1,alphaMap:ht,alphaTest:ft,alphaHash:Kt,combine:v.combine,mapUv:At&&p(v.map.channel),aoMapUv:qt&&p(v.aoMap.channel),lightMapUv:St&&p(v.lightMap.channel),bumpMapUv:Vt&&p(v.bumpMap.channel),normalMapUv:H&&p(v.normalMap.channel),displacementMapUv:te&&p(v.displacementMap.channel),emissiveMapUv:Ft&&p(v.emissiveMap.channel),metalnessMapUv:C&&p(v.metalnessMap.channel),roughnessMapUv:b&&p(v.roughnessMap.channel),anisotropyMapUv:_t&&p(v.anisotropyMap.channel),clearcoatMapUv:Xt&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:st&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:yt&&p(v.clearcoatRoughnessMap.channel),iridescenceMapUv:bt&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:zt&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:Mt&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:$t&&p(v.sheenRoughnessMap.channel),specularMapUv:Ht&&p(v.specularMap.channel),specularColorMapUv:le&&p(v.specularColorMap.channel),specularIntensityMapUv:F&&p(v.specularIntensityMap.channel),transmissionMapUv:nt&&p(v.transmissionMap.channel),thicknessMapUv:j&&p(v.thicknessMap.channel),alphaMapUv:ht&&p(v.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(H||X),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!N.attributes.uv&&(At||ht),fog:!!K,useFog:v.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:f,skinning:O.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:Rt,morphTextureStride:Nt,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:r.shadowMap.enabled&&I.length>0,shadowMapType:r.shadowMap.type,toneMapping:Pe,decodeVideoTexture:At&&v.map.isVideoTexture===!0&&_e.getTransfer(v.map.colorSpace)===Ce,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Mi,flipSided:v.side===wn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Ee&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ee&&v.extensions.multiDraw===!0||pt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return oe.vertexUv1s=c.has(1),oe.vertexUv2s=c.has(2),oe.vertexUv3s=c.has(3),c.clear(),oe}function S(v){const T=[];if(v.shaderID?T.push(v.shaderID):(T.push(v.customVertexShaderID),T.push(v.customFragmentShaderID)),v.defines!==void 0)for(const I in v.defines)T.push(I),T.push(v.defines[I]);return v.isRawShaderMaterial===!1&&(x(T,v),M(T,v),T.push(r.outputColorSpace)),T.push(v.customProgramCacheKey),T.join()}function x(v,T){v.push(T.precision),v.push(T.outputColorSpace),v.push(T.envMapMode),v.push(T.envMapCubeUVHeight),v.push(T.mapUv),v.push(T.alphaMapUv),v.push(T.lightMapUv),v.push(T.aoMapUv),v.push(T.bumpMapUv),v.push(T.normalMapUv),v.push(T.displacementMapUv),v.push(T.emissiveMapUv),v.push(T.metalnessMapUv),v.push(T.roughnessMapUv),v.push(T.anisotropyMapUv),v.push(T.clearcoatMapUv),v.push(T.clearcoatNormalMapUv),v.push(T.clearcoatRoughnessMapUv),v.push(T.iridescenceMapUv),v.push(T.iridescenceThicknessMapUv),v.push(T.sheenColorMapUv),v.push(T.sheenRoughnessMapUv),v.push(T.specularMapUv),v.push(T.specularColorMapUv),v.push(T.specularIntensityMapUv),v.push(T.transmissionMapUv),v.push(T.thicknessMapUv),v.push(T.combine),v.push(T.fogExp2),v.push(T.sizeAttenuation),v.push(T.morphTargetsCount),v.push(T.morphAttributeCount),v.push(T.numDirLights),v.push(T.numPointLights),v.push(T.numSpotLights),v.push(T.numSpotLightMaps),v.push(T.numHemiLights),v.push(T.numRectAreaLights),v.push(T.numDirLightShadows),v.push(T.numPointLightShadows),v.push(T.numSpotLightShadows),v.push(T.numSpotLightShadowsWithMaps),v.push(T.numLightProbes),v.push(T.shadowMapType),v.push(T.toneMapping),v.push(T.numClippingPlanes),v.push(T.numClipIntersection),v.push(T.depthPacking)}function M(v,T){a.disableAll(),T.supportsVertexTextures&&a.enable(0),T.instancing&&a.enable(1),T.instancingColor&&a.enable(2),T.instancingMorph&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),T.dispersion&&a.enable(20),T.batchingColor&&a.enable(21),v.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reverseDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.alphaToCoverage&&a.enable(20),v.push(a.mask)}function E(v){const T=g[v.type];let I;if(T){const k=xi[T];I=Kg.clone(k.uniforms)}else I=v.uniforms;return I}function w(v,T){let I;for(let k=0,O=h.length;k<O;k++){const K=h[k];if(K.cacheKey===T){I=K,++I.usedTimes;break}}return I===void 0&&(I=new ly(r,T,v,s),h.push(I)),I}function y(v){if(--v.usedTimes===0){const T=h.indexOf(v);h[T]=h[h.length-1],h.pop(),v.destroy()}}function R(v){l.remove(v)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:S,getUniforms:E,acquireProgram:w,releaseProgram:y,releaseShaderCache:R,programs:h,dispose:L}}function dy(){let r=new WeakMap;function t(o){return r.has(o)}function e(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function py(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function hd(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function ud(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(u,f,d,_,g,p){let m=r[t];return m===void 0?(m={id:u.id,object:u,geometry:f,material:d,groupOrder:_,renderOrder:u.renderOrder,z:g,group:p},r[t]=m):(m.id=u.id,m.object=u,m.geometry=f,m.material=d,m.groupOrder=_,m.renderOrder=u.renderOrder,m.z=g,m.group=p),t++,m}function a(u,f,d,_,g,p){const m=o(u,f,d,_,g,p);d.transmission>0?n.push(m):d.transparent===!0?i.push(m):e.push(m)}function l(u,f,d,_,g,p){const m=o(u,f,d,_,g,p);d.transmission>0?n.unshift(m):d.transparent===!0?i.unshift(m):e.unshift(m)}function c(u,f){e.length>1&&e.sort(u||py),n.length>1&&n.sort(f||hd),i.length>1&&i.sort(f||hd)}function h(){for(let u=t,f=r.length;u<f;u++){const d=r[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:h,sort:c}}function my(){let r=new WeakMap;function t(n,i){const s=r.get(n);let o;return s===void 0?(o=new ud,r.set(n,[o])):i>=s.length?(o=new ud,s.push(o)):o=s[i],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function _y(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new U,color:new Gt};break;case"SpotLight":e={position:new U,direction:new U,color:new Gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new Gt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new Gt,groundColor:new Gt};break;case"RectAreaLight":e={color:new Gt,position:new U,halfWidth:new U,halfHeight:new U};break}return r[t.id]=e,e}}}function gy(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let vy=0;function xy(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function Sy(r){const t=new _y,e=gy(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new U);const i=new U,s=new ge,o=new ge;function a(c){let h=0,u=0,f=0;for(let L=0;L<9;L++)n.probe[L].set(0,0,0);let d=0,_=0,g=0,p=0,m=0,S=0,x=0,M=0,E=0,w=0,y=0;c.sort(xy);for(let L=0,v=c.length;L<v;L++){const T=c[L],I=T.color,k=T.intensity,O=T.distance,K=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)h+=I.r*k,u+=I.g*k,f+=I.b*k;else if(T.isLightProbe){for(let N=0;N<9;N++)n.probe[N].addScaledVector(T.sh.coefficients[N],k);y++}else if(T.isDirectionalLight){const N=t.get(T);if(N.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){const $=T.shadow,V=e.get(T);V.shadowIntensity=$.intensity,V.shadowBias=$.bias,V.shadowNormalBias=$.normalBias,V.shadowRadius=$.radius,V.shadowMapSize=$.mapSize,n.directionalShadow[d]=V,n.directionalShadowMap[d]=K,n.directionalShadowMatrix[d]=T.shadow.matrix,S++}n.directional[d]=N,d++}else if(T.isSpotLight){const N=t.get(T);N.position.setFromMatrixPosition(T.matrixWorld),N.color.copy(I).multiplyScalar(k),N.distance=O,N.coneCos=Math.cos(T.angle),N.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),N.decay=T.decay,n.spot[g]=N;const $=T.shadow;if(T.map&&(n.spotLightMap[E]=T.map,E++,$.updateMatrices(T),T.castShadow&&w++),n.spotLightMatrix[g]=$.matrix,T.castShadow){const V=e.get(T);V.shadowIntensity=$.intensity,V.shadowBias=$.bias,V.shadowNormalBias=$.normalBias,V.shadowRadius=$.radius,V.shadowMapSize=$.mapSize,n.spotShadow[g]=V,n.spotShadowMap[g]=K,M++}g++}else if(T.isRectAreaLight){const N=t.get(T);N.color.copy(I).multiplyScalar(k),N.halfWidth.set(T.width*.5,0,0),N.halfHeight.set(0,T.height*.5,0),n.rectArea[p]=N,p++}else if(T.isPointLight){const N=t.get(T);if(N.color.copy(T.color).multiplyScalar(T.intensity),N.distance=T.distance,N.decay=T.decay,T.castShadow){const $=T.shadow,V=e.get(T);V.shadowIntensity=$.intensity,V.shadowBias=$.bias,V.shadowNormalBias=$.normalBias,V.shadowRadius=$.radius,V.shadowMapSize=$.mapSize,V.shadowCameraNear=$.camera.near,V.shadowCameraFar=$.camera.far,n.pointShadow[_]=V,n.pointShadowMap[_]=K,n.pointShadowMatrix[_]=T.shadow.matrix,x++}n.point[_]=N,_++}else if(T.isHemisphereLight){const N=t.get(T);N.skyColor.copy(T.color).multiplyScalar(k),N.groundColor.copy(T.groundColor).multiplyScalar(k),n.hemi[m]=N,m++}}p>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=vt.LTC_FLOAT_1,n.rectAreaLTC2=vt.LTC_FLOAT_2):(n.rectAreaLTC1=vt.LTC_HALF_1,n.rectAreaLTC2=vt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const R=n.hash;(R.directionalLength!==d||R.pointLength!==_||R.spotLength!==g||R.rectAreaLength!==p||R.hemiLength!==m||R.numDirectionalShadows!==S||R.numPointShadows!==x||R.numSpotShadows!==M||R.numSpotMaps!==E||R.numLightProbes!==y)&&(n.directional.length=d,n.spot.length=g,n.rectArea.length=p,n.point.length=_,n.hemi.length=m,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=M+E-w,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=y,R.directionalLength=d,R.pointLength=_,R.spotLength=g,R.rectAreaLength=p,R.hemiLength=m,R.numDirectionalShadows=S,R.numPointShadows=x,R.numSpotShadows=M,R.numSpotMaps=E,R.numLightProbes=y,n.version=vy++)}function l(c,h){let u=0,f=0,d=0,_=0,g=0;const p=h.matrixWorldInverse;for(let m=0,S=c.length;m<S;m++){const x=c[m];if(x.isDirectionalLight){const M=n.directional[u];M.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(p),u++}else if(x.isSpotLight){const M=n.spot[d];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(p),d++}else if(x.isRectAreaLight){const M=n.rectArea[_];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(p),o.identity(),s.copy(x.matrixWorld),s.premultiply(p),o.extractRotation(s),M.halfWidth.set(x.width*.5,0,0),M.halfHeight.set(0,x.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),_++}else if(x.isPointLight){const M=n.point[f];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(p),f++}else if(x.isHemisphereLight){const M=n.hemi[g];M.direction.setFromMatrixPosition(x.matrixWorld),M.direction.transformDirection(p),g++}}}return{setup:a,setupView:l,state:n}}function fd(r){const t=new Sy(r),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function s(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function My(r){let t=new WeakMap;function e(i,s=0){const o=t.get(i);let a;return o===void 0?(a=new fd(r),t.set(i,[a])):s>=o.length?(a=new fd(r),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class yy extends yr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=gg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Ey extends yr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const by=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ty=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function wy(r,t,e){let n=new ku;const i=new Yt,s=new Yt,o=new ye,a=new yy({depthPacking:vg}),l=new Ey,c={},h=e.maxTextureSize,u={[vr]:wn,[wn]:vr,[Mi]:Mi},f=new Vi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Yt},radius:{value:4}},vertexShader:by,fragmentShader:Ty}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const _=new rn;_.setAttribute("position",new Ye(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new fe(_,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=om;let m=this.type;this.render=function(w,y,R){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;const L=r.getRenderTarget(),v=r.getActiveCubeFace(),T=r.getActiveMipmapLevel(),I=r.state;I.setBlending(ur),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const k=m!==Ii&&this.type===Ii,O=m===Ii&&this.type!==Ii;for(let K=0,N=w.length;K<N;K++){const $=w[K],V=$.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);const rt=V.getFrameExtents();if(i.multiply(rt),s.copy(V.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/rt.x),i.x=s.x*rt.x,V.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/rt.y),i.y=s.y*rt.y,V.mapSize.y=s.y)),V.map===null||k===!0||O===!0){const ct=this.type!==Ii?{minFilter:Pn,magFilter:Pn}:{};V.map!==null&&V.map.dispose(),V.map=new Jr(i.x,i.y,ct),V.map.texture.name=$.name+".shadowMap",V.camera.updateProjectionMatrix()}r.setRenderTarget(V.map),r.clear();const P=V.getViewportCount();for(let ct=0;ct<P;ct++){const Rt=V.getViewport(ct);o.set(s.x*Rt.x,s.y*Rt.y,s.x*Rt.z,s.y*Rt.w),I.viewport(o),V.updateMatrices($,ct),n=V.getFrustum(),M(y,R,V.camera,$,this.type)}V.isPointLightShadow!==!0&&this.type===Ii&&S(V,R),V.needsUpdate=!1}m=this.type,p.needsUpdate=!1,r.setRenderTarget(L,v,T)};function S(w,y){const R=t.update(g);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Jr(i.x,i.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(y,null,R,f,g,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(y,null,R,d,g,null)}function x(w,y,R,L){let v=null;const T=R.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(T!==void 0)v=T;else if(v=R.isPointLight===!0?l:a,r.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0){const I=v.uuid,k=y.uuid;let O=c[I];O===void 0&&(O={},c[I]=O);let K=O[k];K===void 0&&(K=v.clone(),O[k]=K,y.addEventListener("dispose",E)),v=K}if(v.visible=y.visible,v.wireframe=y.wireframe,L===Ii?v.side=y.shadowSide!==null?y.shadowSide:y.side:v.side=y.shadowSide!==null?y.shadowSide:u[y.side],v.alphaMap=y.alphaMap,v.alphaTest=y.alphaTest,v.map=y.map,v.clipShadows=y.clipShadows,v.clippingPlanes=y.clippingPlanes,v.clipIntersection=y.clipIntersection,v.displacementMap=y.displacementMap,v.displacementScale=y.displacementScale,v.displacementBias=y.displacementBias,v.wireframeLinewidth=y.wireframeLinewidth,v.linewidth=y.linewidth,R.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const I=r.properties.get(v);I.light=R}return v}function M(w,y,R,L,v){if(w.visible===!1)return;if(w.layers.test(y.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&v===Ii)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,w.matrixWorld);const k=t.update(w),O=w.material;if(Array.isArray(O)){const K=k.groups;for(let N=0,$=K.length;N<$;N++){const V=K[N],rt=O[V.materialIndex];if(rt&&rt.visible){const P=x(w,rt,L,v);w.onBeforeShadow(r,w,y,R,k,P,V),r.renderBufferDirect(R,null,k,P,w,V),w.onAfterShadow(r,w,y,R,k,P,V)}}}else if(O.visible){const K=x(w,O,L,v);w.onBeforeShadow(r,w,y,R,k,K,null),r.renderBufferDirect(R,null,k,K,w,null),w.onAfterShadow(r,w,y,R,k,K,null)}}const I=w.children;for(let k=0,O=I.length;k<O;k++)M(I[k],y,R,L,v)}function E(w){w.target.removeEventListener("dispose",E);for(const R in c){const L=c[R],v=w.target.uuid;v in L&&(L[v].dispose(),delete L[v])}}}const Ay={[dh]:ph,[mh]:vh,[_h]:xh,[no]:gh,[ph]:dh,[vh]:mh,[xh]:_h,[gh]:no};function Ry(r){function t(){let F=!1;const nt=new ye;let j=null;const tt=new ye(0,0,0,0);return{setMask:function(ht){j!==ht&&!F&&(r.colorMask(ht,ht,ht,ht),j=ht)},setLocked:function(ht){F=ht},setClear:function(ht,ft,Kt,Ee,Pe){Pe===!0&&(ht*=Ee,ft*=Ee,Kt*=Ee),nt.set(ht,ft,Kt,Ee),tt.equals(nt)===!1&&(r.clearColor(ht,ft,Kt,Ee),tt.copy(nt))},reset:function(){F=!1,j=null,tt.set(-1,0,0,0)}}}function e(){let F=!1,nt=!1,j=null,tt=null,ht=null;return{setReversed:function(ft){nt=ft},setTest:function(ft){ft?ut(r.DEPTH_TEST):lt(r.DEPTH_TEST)},setMask:function(ft){j!==ft&&!F&&(r.depthMask(ft),j=ft)},setFunc:function(ft){if(nt&&(ft=Ay[ft]),tt!==ft){switch(ft){case dh:r.depthFunc(r.NEVER);break;case ph:r.depthFunc(r.ALWAYS);break;case mh:r.depthFunc(r.LESS);break;case no:r.depthFunc(r.LEQUAL);break;case _h:r.depthFunc(r.EQUAL);break;case gh:r.depthFunc(r.GEQUAL);break;case vh:r.depthFunc(r.GREATER);break;case xh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}tt=ft}},setLocked:function(ft){F=ft},setClear:function(ft){ht!==ft&&(r.clearDepth(ft),ht=ft)},reset:function(){F=!1,j=null,tt=null,ht=null}}}function n(){let F=!1,nt=null,j=null,tt=null,ht=null,ft=null,Kt=null,Ee=null,Pe=null;return{setTest:function(oe){F||(oe?ut(r.STENCIL_TEST):lt(r.STENCIL_TEST))},setMask:function(oe){nt!==oe&&!F&&(r.stencilMask(oe),nt=oe)},setFunc:function(oe,It,Ct){(j!==oe||tt!==It||ht!==Ct)&&(r.stencilFunc(oe,It,Ct),j=oe,tt=It,ht=Ct)},setOp:function(oe,It,Ct){(ft!==oe||Kt!==It||Ee!==Ct)&&(r.stencilOp(oe,It,Ct),ft=oe,Kt=It,Ee=Ct)},setLocked:function(oe){F=oe},setClear:function(oe){Pe!==oe&&(r.clearStencil(oe),Pe=oe)},reset:function(){F=!1,nt=null,j=null,tt=null,ht=null,ft=null,Kt=null,Ee=null,Pe=null}}}const i=new t,s=new e,o=new n,a=new WeakMap,l=new WeakMap;let c={},h={},u=new WeakMap,f=[],d=null,_=!1,g=null,p=null,m=null,S=null,x=null,M=null,E=null,w=new Gt(0,0,0),y=0,R=!1,L=null,v=null,T=null,I=null,k=null;const O=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,N=0;const $=r.getParameter(r.VERSION);$.indexOf("WebGL")!==-1?(N=parseFloat(/^WebGL (\d)/.exec($)[1]),K=N>=1):$.indexOf("OpenGL ES")!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),K=N>=2);let V=null,rt={};const P=r.getParameter(r.SCISSOR_BOX),ct=r.getParameter(r.VIEWPORT),Rt=new ye().fromArray(P),Nt=new ye().fromArray(ct);function q(F,nt,j,tt){const ht=new Uint8Array(4),ft=r.createTexture();r.bindTexture(F,ft),r.texParameteri(F,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(F,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Kt=0;Kt<j;Kt++)F===r.TEXTURE_3D||F===r.TEXTURE_2D_ARRAY?r.texImage3D(nt,0,r.RGBA,1,1,tt,0,r.RGBA,r.UNSIGNED_BYTE,ht):r.texImage2D(nt+Kt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ht);return ft}const et={};et[r.TEXTURE_2D]=q(r.TEXTURE_2D,r.TEXTURE_2D,1),et[r.TEXTURE_CUBE_MAP]=q(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),et[r.TEXTURE_2D_ARRAY]=q(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),et[r.TEXTURE_3D]=q(r.TEXTURE_3D,r.TEXTURE_3D,1,1),i.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ut(r.DEPTH_TEST),s.setFunc(no),St(!1),Vt(yf),ut(r.CULL_FACE),D(ur);function ut(F){c[F]!==!0&&(r.enable(F),c[F]=!0)}function lt(F){c[F]!==!1&&(r.disable(F),c[F]=!1)}function Y(F,nt){return h[F]!==nt?(r.bindFramebuffer(F,nt),h[F]=nt,F===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=nt),F===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=nt),!0):!1}function J(F,nt){let j=f,tt=!1;if(F){j=u.get(nt),j===void 0&&(j=[],u.set(nt,j));const ht=F.textures;if(j.length!==ht.length||j[0]!==r.COLOR_ATTACHMENT0){for(let ft=0,Kt=ht.length;ft<Kt;ft++)j[ft]=r.COLOR_ATTACHMENT0+ft;j.length=ht.length,tt=!0}}else j[0]!==r.BACK&&(j[0]=r.BACK,tt=!0);tt&&r.drawBuffers(j)}function pt(F){return d!==F?(r.useProgram(F),d=F,!0):!1}const At={[Fr]:r.FUNC_ADD,[W0]:r.FUNC_SUBTRACT,[X0]:r.FUNC_REVERSE_SUBTRACT};At[Y0]=r.MIN,At[q0]=r.MAX;const Et={[$0]:r.ZERO,[K0]:r.ONE,[j0]:r.SRC_COLOR,[uh]:r.SRC_ALPHA,[ng]:r.SRC_ALPHA_SATURATE,[tg]:r.DST_COLOR,[J0]:r.DST_ALPHA,[Z0]:r.ONE_MINUS_SRC_COLOR,[fh]:r.ONE_MINUS_SRC_ALPHA,[eg]:r.ONE_MINUS_DST_COLOR,[Q0]:r.ONE_MINUS_DST_ALPHA,[ig]:r.CONSTANT_COLOR,[rg]:r.ONE_MINUS_CONSTANT_COLOR,[sg]:r.CONSTANT_ALPHA,[og]:r.ONE_MINUS_CONSTANT_ALPHA};function D(F,nt,j,tt,ht,ft,Kt,Ee,Pe,oe){if(F===ur){_===!0&&(lt(r.BLEND),_=!1);return}if(_===!1&&(ut(r.BLEND),_=!0),F!==V0){if(F!==g||oe!==R){if((p!==Fr||x!==Fr)&&(r.blendEquation(r.FUNC_ADD),p=Fr,x=Fr),oe)switch(F){case Ws:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ef:r.blendFunc(r.ONE,r.ONE);break;case bf:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Tf:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Ws:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ef:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case bf:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Tf:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}m=null,S=null,M=null,E=null,w.set(0,0,0),y=0,g=F,R=oe}return}ht=ht||nt,ft=ft||j,Kt=Kt||tt,(nt!==p||ht!==x)&&(r.blendEquationSeparate(At[nt],At[ht]),p=nt,x=ht),(j!==m||tt!==S||ft!==M||Kt!==E)&&(r.blendFuncSeparate(Et[j],Et[tt],Et[ft],Et[Kt]),m=j,S=tt,M=ft,E=Kt),(Ee.equals(w)===!1||Pe!==y)&&(r.blendColor(Ee.r,Ee.g,Ee.b,Pe),w.copy(Ee),y=Pe),g=F,R=!1}function qt(F,nt){F.side===Mi?lt(r.CULL_FACE):ut(r.CULL_FACE);let j=F.side===wn;nt&&(j=!j),St(j),F.blending===Ws&&F.transparent===!1?D(ur):D(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),s.setFunc(F.depthFunc),s.setTest(F.depthTest),s.setMask(F.depthWrite),i.setMask(F.colorWrite);const tt=F.stencilWrite;o.setTest(tt),tt&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),te(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?ut(r.SAMPLE_ALPHA_TO_COVERAGE):lt(r.SAMPLE_ALPHA_TO_COVERAGE)}function St(F){L!==F&&(F?r.frontFace(r.CW):r.frontFace(r.CCW),L=F)}function Vt(F){F!==k0?(ut(r.CULL_FACE),F!==v&&(F===yf?r.cullFace(r.BACK):F===H0?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):lt(r.CULL_FACE),v=F}function H(F){F!==T&&(K&&r.lineWidth(F),T=F)}function te(F,nt,j){F?(ut(r.POLYGON_OFFSET_FILL),(I!==nt||k!==j)&&(r.polygonOffset(nt,j),I=nt,k=j)):lt(r.POLYGON_OFFSET_FILL)}function Ft(F){F?ut(r.SCISSOR_TEST):lt(r.SCISSOR_TEST)}function C(F){F===void 0&&(F=r.TEXTURE0+O-1),V!==F&&(r.activeTexture(F),V=F)}function b(F,nt,j){j===void 0&&(V===null?j=r.TEXTURE0+O-1:j=V);let tt=rt[j];tt===void 0&&(tt={type:void 0,texture:void 0},rt[j]=tt),(tt.type!==F||tt.texture!==nt)&&(V!==j&&(r.activeTexture(j),V=j),r.bindTexture(F,nt||et[F]),tt.type=F,tt.texture=nt)}function X(){const F=rt[V];F!==void 0&&F.type!==void 0&&(r.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function Q(){try{r.compressedTexImage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function it(){try{r.compressedTexImage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Z(){try{r.texSubImage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Tt(){try{r.texSubImage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ot(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function _t(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Xt(){try{r.texStorage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function st(){try{r.texStorage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function yt(){try{r.texImage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function bt(){try{r.texImage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function zt(F){Rt.equals(F)===!1&&(r.scissor(F.x,F.y,F.z,F.w),Rt.copy(F))}function Mt(F){Nt.equals(F)===!1&&(r.viewport(F.x,F.y,F.z,F.w),Nt.copy(F))}function $t(F,nt){let j=l.get(nt);j===void 0&&(j=new WeakMap,l.set(nt,j));let tt=j.get(F);tt===void 0&&(tt=r.getUniformBlockIndex(nt,F.name),j.set(F,tt))}function Ht(F,nt){const tt=l.get(nt).get(F);a.get(nt)!==tt&&(r.uniformBlockBinding(nt,tt,F.__bindingPointIndex),a.set(nt,tt))}function le(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),c={},V=null,rt={},h={},u=new WeakMap,f=[],d=null,_=!1,g=null,p=null,m=null,S=null,x=null,M=null,E=null,w=new Gt(0,0,0),y=0,R=!1,L=null,v=null,T=null,I=null,k=null,Rt.set(0,0,r.canvas.width,r.canvas.height),Nt.set(0,0,r.canvas.width,r.canvas.height),i.reset(),s.reset(),o.reset()}return{buffers:{color:i,depth:s,stencil:o},enable:ut,disable:lt,bindFramebuffer:Y,drawBuffers:J,useProgram:pt,setBlending:D,setMaterial:qt,setFlipSided:St,setCullFace:Vt,setLineWidth:H,setPolygonOffset:te,setScissorTest:Ft,activeTexture:C,bindTexture:b,unbindTexture:X,compressedTexImage2D:Q,compressedTexImage3D:it,texImage2D:yt,texImage3D:bt,updateUBOMapping:$t,uniformBlockBinding:Ht,texStorage2D:Xt,texStorage3D:st,texSubImage2D:Z,texSubImage3D:Tt,compressedTexSubImage2D:ot,compressedTexSubImage3D:_t,scissor:zt,viewport:Mt,reset:le}}function dd(r,t,e,n){const i=Cy(n);switch(e){case fm:return r*t;case pm:return r*t;case mm:return r*t*2;case Uu:return r*t/i.components*i.byteLength;case Nu:return r*t/i.components*i.byteLength;case _m:return r*t*2/i.components*i.byteLength;case Ou:return r*t*2/i.components*i.byteLength;case dm:return r*t*3/i.components*i.byteLength;case mi:return r*t*4/i.components*i.byteLength;case Fu:return r*t*4/i.components*i.byteLength;case sl:case ol:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case al:case ll:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Th:case Ah:return Math.max(r,16)*Math.max(t,8)/4;case bh:case wh:return Math.max(r,8)*Math.max(t,8)/2;case Rh:case Ch:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Ph:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Dh:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Lh:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Ih:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Uh:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Nh:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Oh:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Fh:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Bh:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case zh:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case kh:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Hh:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Gh:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Vh:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Wh:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case cl:case Xh:case Yh:return Math.ceil(r/4)*Math.ceil(t/4)*16;case gm:case qh:return Math.ceil(r/4)*Math.ceil(t/4)*8;case $h:case Kh:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Cy(r){switch(r){case Gi:case cm:return{byteLength:1,components:1};case oa:case hm:case ha:return{byteLength:2,components:1};case Lu:case Iu:return{byteLength:2,components:4};case Zr:case Du:case bi:return{byteLength:4,components:1};case um:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function Py(r,t,e,n,i,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Yt,h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,b){return d?new OffscreenCanvas(C,b):Cl("canvas")}function g(C,b,X){let Q=1;const it=Ft(C);if((it.width>X||it.height>X)&&(Q=X/Math.max(it.width,it.height)),Q<1)if(typeof HTMLImageElement!="undefined"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&C instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&C instanceof ImageBitmap||typeof VideoFrame!="undefined"&&C instanceof VideoFrame){const Z=Math.floor(Q*it.width),Tt=Math.floor(Q*it.height);u===void 0&&(u=_(Z,Tt));const ot=b?_(Z,Tt):u;return ot.width=Z,ot.height=Tt,ot.getContext("2d").drawImage(C,0,0,Z,Tt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+Z+"x"+Tt+")."),ot}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),C;return C}function p(C){return C.generateMipmaps&&C.minFilter!==Pn&&C.minFilter!==pi}function m(C){r.generateMipmap(C)}function S(C,b,X,Q,it=!1){if(C!==null){if(r[C]!==void 0)return r[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Z=b;if(b===r.RED&&(X===r.FLOAT&&(Z=r.R32F),X===r.HALF_FLOAT&&(Z=r.R16F),X===r.UNSIGNED_BYTE&&(Z=r.R8)),b===r.RED_INTEGER&&(X===r.UNSIGNED_BYTE&&(Z=r.R8UI),X===r.UNSIGNED_SHORT&&(Z=r.R16UI),X===r.UNSIGNED_INT&&(Z=r.R32UI),X===r.BYTE&&(Z=r.R8I),X===r.SHORT&&(Z=r.R16I),X===r.INT&&(Z=r.R32I)),b===r.RG&&(X===r.FLOAT&&(Z=r.RG32F),X===r.HALF_FLOAT&&(Z=r.RG16F),X===r.UNSIGNED_BYTE&&(Z=r.RG8)),b===r.RG_INTEGER&&(X===r.UNSIGNED_BYTE&&(Z=r.RG8UI),X===r.UNSIGNED_SHORT&&(Z=r.RG16UI),X===r.UNSIGNED_INT&&(Z=r.RG32UI),X===r.BYTE&&(Z=r.RG8I),X===r.SHORT&&(Z=r.RG16I),X===r.INT&&(Z=r.RG32I)),b===r.RGB_INTEGER&&(X===r.UNSIGNED_BYTE&&(Z=r.RGB8UI),X===r.UNSIGNED_SHORT&&(Z=r.RGB16UI),X===r.UNSIGNED_INT&&(Z=r.RGB32UI),X===r.BYTE&&(Z=r.RGB8I),X===r.SHORT&&(Z=r.RGB16I),X===r.INT&&(Z=r.RGB32I)),b===r.RGBA_INTEGER&&(X===r.UNSIGNED_BYTE&&(Z=r.RGBA8UI),X===r.UNSIGNED_SHORT&&(Z=r.RGBA16UI),X===r.UNSIGNED_INT&&(Z=r.RGBA32UI),X===r.BYTE&&(Z=r.RGBA8I),X===r.SHORT&&(Z=r.RGBA16I),X===r.INT&&(Z=r.RGBA32I)),b===r.RGB&&X===r.UNSIGNED_INT_5_9_9_9_REV&&(Z=r.RGB9_E5),b===r.RGBA){const Tt=it?Tl:_e.getTransfer(Q);X===r.FLOAT&&(Z=r.RGBA32F),X===r.HALF_FLOAT&&(Z=r.RGBA16F),X===r.UNSIGNED_BYTE&&(Z=Tt===Ce?r.SRGB8_ALPHA8:r.RGBA8),X===r.UNSIGNED_SHORT_4_4_4_4&&(Z=r.RGBA4),X===r.UNSIGNED_SHORT_5_5_5_1&&(Z=r.RGB5_A1)}return(Z===r.R16F||Z===r.R32F||Z===r.RG16F||Z===r.RG32F||Z===r.RGBA16F||Z===r.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function x(C,b){let X;return C?b===null||b===Zr||b===so?X=r.DEPTH24_STENCIL8:b===bi?X=r.DEPTH32F_STENCIL8:b===oa&&(X=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Zr||b===so?X=r.DEPTH_COMPONENT24:b===bi?X=r.DEPTH_COMPONENT32F:b===oa&&(X=r.DEPTH_COMPONENT16),X}function M(C,b){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==Pn&&C.minFilter!==pi?Math.log2(Math.max(b.width,b.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?b.mipmaps.length:1}function E(C){const b=C.target;b.removeEventListener("dispose",E),y(b),b.isVideoTexture&&h.delete(b)}function w(C){const b=C.target;b.removeEventListener("dispose",w),L(b)}function y(C){const b=n.get(C);if(b.__webglInit===void 0)return;const X=C.source,Q=f.get(X);if(Q){const it=Q[b.__cacheKey];it.usedTimes--,it.usedTimes===0&&R(C),Object.keys(Q).length===0&&f.delete(X)}n.remove(C)}function R(C){const b=n.get(C);r.deleteTexture(b.__webglTexture);const X=C.source,Q=f.get(X);delete Q[b.__cacheKey],o.memory.textures--}function L(C){const b=n.get(C);if(C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(b.__webglFramebuffer[Q]))for(let it=0;it<b.__webglFramebuffer[Q].length;it++)r.deleteFramebuffer(b.__webglFramebuffer[Q][it]);else r.deleteFramebuffer(b.__webglFramebuffer[Q]);b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer[Q])}else{if(Array.isArray(b.__webglFramebuffer))for(let Q=0;Q<b.__webglFramebuffer.length;Q++)r.deleteFramebuffer(b.__webglFramebuffer[Q]);else r.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&r.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let Q=0;Q<b.__webglColorRenderbuffer.length;Q++)b.__webglColorRenderbuffer[Q]&&r.deleteRenderbuffer(b.__webglColorRenderbuffer[Q]);b.__webglDepthRenderbuffer&&r.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const X=C.textures;for(let Q=0,it=X.length;Q<it;Q++){const Z=n.get(X[Q]);Z.__webglTexture&&(r.deleteTexture(Z.__webglTexture),o.memory.textures--),n.remove(X[Q])}n.remove(C)}let v=0;function T(){v=0}function I(){const C=v;return C>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),v+=1,C}function k(C){const b=[];return b.push(C.wrapS),b.push(C.wrapT),b.push(C.wrapR||0),b.push(C.magFilter),b.push(C.minFilter),b.push(C.anisotropy),b.push(C.internalFormat),b.push(C.format),b.push(C.type),b.push(C.generateMipmaps),b.push(C.premultiplyAlpha),b.push(C.flipY),b.push(C.unpackAlignment),b.push(C.colorSpace),b.join()}function O(C,b){const X=n.get(C);if(C.isVideoTexture&&H(C),C.isRenderTargetTexture===!1&&C.version>0&&X.__version!==C.version){const Q=C.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Nt(X,C,b);return}}e.bindTexture(r.TEXTURE_2D,X.__webglTexture,r.TEXTURE0+b)}function K(C,b){const X=n.get(C);if(C.version>0&&X.__version!==C.version){Nt(X,C,b);return}e.bindTexture(r.TEXTURE_2D_ARRAY,X.__webglTexture,r.TEXTURE0+b)}function N(C,b){const X=n.get(C);if(C.version>0&&X.__version!==C.version){Nt(X,C,b);return}e.bindTexture(r.TEXTURE_3D,X.__webglTexture,r.TEXTURE0+b)}function $(C,b){const X=n.get(C);if(C.version>0&&X.__version!==C.version){q(X,C,b);return}e.bindTexture(r.TEXTURE_CUBE_MAP,X.__webglTexture,r.TEXTURE0+b)}const V={[yh]:r.REPEAT,[kr]:r.CLAMP_TO_EDGE,[Eh]:r.MIRRORED_REPEAT},rt={[Pn]:r.NEAREST,[_g]:r.NEAREST_MIPMAP_NEAREST,[fa]:r.NEAREST_MIPMAP_LINEAR,[pi]:r.LINEAR,[rc]:r.LINEAR_MIPMAP_NEAREST,[Hr]:r.LINEAR_MIPMAP_LINEAR},P={[Sg]:r.NEVER,[wg]:r.ALWAYS,[Mg]:r.LESS,[xm]:r.LEQUAL,[yg]:r.EQUAL,[Tg]:r.GEQUAL,[Eg]:r.GREATER,[bg]:r.NOTEQUAL};function ct(C,b){if(b.type===bi&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===pi||b.magFilter===rc||b.magFilter===fa||b.magFilter===Hr||b.minFilter===pi||b.minFilter===rc||b.minFilter===fa||b.minFilter===Hr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(C,r.TEXTURE_WRAP_S,V[b.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,V[b.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,V[b.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,rt[b.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,rt[b.minFilter]),b.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,P[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Pn||b.minFilter!==fa&&b.minFilter!==Hr||b.type===bi&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const X=t.get("EXT_texture_filter_anisotropic");r.texParameterf(C,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Rt(C,b){let X=!1;C.__webglInit===void 0&&(C.__webglInit=!0,b.addEventListener("dispose",E));const Q=b.source;let it=f.get(Q);it===void 0&&(it={},f.set(Q,it));const Z=k(b);if(Z!==C.__cacheKey){it[Z]===void 0&&(it[Z]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,X=!0),it[Z].usedTimes++;const Tt=it[C.__cacheKey];Tt!==void 0&&(it[C.__cacheKey].usedTimes--,Tt.usedTimes===0&&R(b)),C.__cacheKey=Z,C.__webglTexture=it[Z].texture}return X}function Nt(C,b,X){let Q=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(Q=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&(Q=r.TEXTURE_3D);const it=Rt(C,b),Z=b.source;e.bindTexture(Q,C.__webglTexture,r.TEXTURE0+X);const Tt=n.get(Z);if(Z.version!==Tt.__version||it===!0){e.activeTexture(r.TEXTURE0+X);const ot=_e.getPrimaries(_e.workingColorSpace),_t=b.colorSpace===nr?null:_e.getPrimaries(b.colorSpace),Xt=b.colorSpace===nr||ot===_t?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt);let st=g(b.image,!1,i.maxTextureSize);st=te(b,st);const yt=s.convert(b.format,b.colorSpace),bt=s.convert(b.type);let zt=S(b.internalFormat,yt,bt,b.colorSpace,b.isVideoTexture);ct(Q,b);let Mt;const $t=b.mipmaps,Ht=b.isVideoTexture!==!0,le=Tt.__version===void 0||it===!0,F=Z.dataReady,nt=M(b,st);if(b.isDepthTexture)zt=x(b.format===oo,b.type),le&&(Ht?e.texStorage2D(r.TEXTURE_2D,1,zt,st.width,st.height):e.texImage2D(r.TEXTURE_2D,0,zt,st.width,st.height,0,yt,bt,null));else if(b.isDataTexture)if($t.length>0){Ht&&le&&e.texStorage2D(r.TEXTURE_2D,nt,zt,$t[0].width,$t[0].height);for(let j=0,tt=$t.length;j<tt;j++)Mt=$t[j],Ht?F&&e.texSubImage2D(r.TEXTURE_2D,j,0,0,Mt.width,Mt.height,yt,bt,Mt.data):e.texImage2D(r.TEXTURE_2D,j,zt,Mt.width,Mt.height,0,yt,bt,Mt.data);b.generateMipmaps=!1}else Ht?(le&&e.texStorage2D(r.TEXTURE_2D,nt,zt,st.width,st.height),F&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,st.width,st.height,yt,bt,st.data)):e.texImage2D(r.TEXTURE_2D,0,zt,st.width,st.height,0,yt,bt,st.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Ht&&le&&e.texStorage3D(r.TEXTURE_2D_ARRAY,nt,zt,$t[0].width,$t[0].height,st.depth);for(let j=0,tt=$t.length;j<tt;j++)if(Mt=$t[j],b.format!==mi)if(yt!==null)if(Ht){if(F)if(b.layerUpdates.size>0){const ht=dd(Mt.width,Mt.height,b.format,b.type);for(const ft of b.layerUpdates){const Kt=Mt.data.subarray(ft*ht/Mt.data.BYTES_PER_ELEMENT,(ft+1)*ht/Mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,j,0,0,ft,Mt.width,Mt.height,1,yt,Kt,0,0)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,j,0,0,0,Mt.width,Mt.height,st.depth,yt,Mt.data,0,0)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,j,zt,Mt.width,Mt.height,st.depth,0,Mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ht?F&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,j,0,0,0,Mt.width,Mt.height,st.depth,yt,bt,Mt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,j,zt,Mt.width,Mt.height,st.depth,0,yt,bt,Mt.data)}else{Ht&&le&&e.texStorage2D(r.TEXTURE_2D,nt,zt,$t[0].width,$t[0].height);for(let j=0,tt=$t.length;j<tt;j++)Mt=$t[j],b.format!==mi?yt!==null?Ht?F&&e.compressedTexSubImage2D(r.TEXTURE_2D,j,0,0,Mt.width,Mt.height,yt,Mt.data):e.compressedTexImage2D(r.TEXTURE_2D,j,zt,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ht?F&&e.texSubImage2D(r.TEXTURE_2D,j,0,0,Mt.width,Mt.height,yt,bt,Mt.data):e.texImage2D(r.TEXTURE_2D,j,zt,Mt.width,Mt.height,0,yt,bt,Mt.data)}else if(b.isDataArrayTexture)if(Ht){if(le&&e.texStorage3D(r.TEXTURE_2D_ARRAY,nt,zt,st.width,st.height,st.depth),F)if(b.layerUpdates.size>0){const j=dd(st.width,st.height,b.format,b.type);for(const tt of b.layerUpdates){const ht=st.data.subarray(tt*j/st.data.BYTES_PER_ELEMENT,(tt+1)*j/st.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,tt,st.width,st.height,1,yt,bt,ht)}b.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,yt,bt,st.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,zt,st.width,st.height,st.depth,0,yt,bt,st.data);else if(b.isData3DTexture)Ht?(le&&e.texStorage3D(r.TEXTURE_3D,nt,zt,st.width,st.height,st.depth),F&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,yt,bt,st.data)):e.texImage3D(r.TEXTURE_3D,0,zt,st.width,st.height,st.depth,0,yt,bt,st.data);else if(b.isFramebufferTexture){if(le)if(Ht)e.texStorage2D(r.TEXTURE_2D,nt,zt,st.width,st.height);else{let j=st.width,tt=st.height;for(let ht=0;ht<nt;ht++)e.texImage2D(r.TEXTURE_2D,ht,zt,j,tt,0,yt,bt,null),j>>=1,tt>>=1}}else if($t.length>0){if(Ht&&le){const j=Ft($t[0]);e.texStorage2D(r.TEXTURE_2D,nt,zt,j.width,j.height)}for(let j=0,tt=$t.length;j<tt;j++)Mt=$t[j],Ht?F&&e.texSubImage2D(r.TEXTURE_2D,j,0,0,yt,bt,Mt):e.texImage2D(r.TEXTURE_2D,j,zt,yt,bt,Mt);b.generateMipmaps=!1}else if(Ht){if(le){const j=Ft(st);e.texStorage2D(r.TEXTURE_2D,nt,zt,j.width,j.height)}F&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,yt,bt,st)}else e.texImage2D(r.TEXTURE_2D,0,zt,yt,bt,st);p(b)&&m(Q),Tt.__version=Z.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function q(C,b,X){if(b.image.length!==6)return;const Q=Rt(C,b),it=b.source;e.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+X);const Z=n.get(it);if(it.version!==Z.__version||Q===!0){e.activeTexture(r.TEXTURE0+X);const Tt=_e.getPrimaries(_e.workingColorSpace),ot=b.colorSpace===nr?null:_e.getPrimaries(b.colorSpace),_t=b.colorSpace===nr||Tt===ot?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t);const Xt=b.isCompressedTexture||b.image[0].isCompressedTexture,st=b.image[0]&&b.image[0].isDataTexture,yt=[];for(let tt=0;tt<6;tt++)!Xt&&!st?yt[tt]=g(b.image[tt],!0,i.maxCubemapSize):yt[tt]=st?b.image[tt].image:b.image[tt],yt[tt]=te(b,yt[tt]);const bt=yt[0],zt=s.convert(b.format,b.colorSpace),Mt=s.convert(b.type),$t=S(b.internalFormat,zt,Mt,b.colorSpace),Ht=b.isVideoTexture!==!0,le=Z.__version===void 0||Q===!0,F=it.dataReady;let nt=M(b,bt);ct(r.TEXTURE_CUBE_MAP,b);let j;if(Xt){Ht&&le&&e.texStorage2D(r.TEXTURE_CUBE_MAP,nt,$t,bt.width,bt.height);for(let tt=0;tt<6;tt++){j=yt[tt].mipmaps;for(let ht=0;ht<j.length;ht++){const ft=j[ht];b.format!==mi?zt!==null?Ht?F&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ht,0,0,ft.width,ft.height,zt,ft.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ht,$t,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ht?F&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ht,0,0,ft.width,ft.height,zt,Mt,ft.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ht,$t,ft.width,ft.height,0,zt,Mt,ft.data)}}}else{if(j=b.mipmaps,Ht&&le){j.length>0&&nt++;const tt=Ft(yt[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,nt,$t,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(st){Ht?F&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,yt[tt].width,yt[tt].height,zt,Mt,yt[tt].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,$t,yt[tt].width,yt[tt].height,0,zt,Mt,yt[tt].data);for(let ht=0;ht<j.length;ht++){const Kt=j[ht].image[tt].image;Ht?F&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ht+1,0,0,Kt.width,Kt.height,zt,Mt,Kt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ht+1,$t,Kt.width,Kt.height,0,zt,Mt,Kt.data)}}else{Ht?F&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,zt,Mt,yt[tt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,$t,zt,Mt,yt[tt]);for(let ht=0;ht<j.length;ht++){const ft=j[ht];Ht?F&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ht+1,0,0,zt,Mt,ft.image[tt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ht+1,$t,zt,Mt,ft.image[tt])}}}p(b)&&m(r.TEXTURE_CUBE_MAP),Z.__version=it.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function et(C,b,X,Q,it,Z){const Tt=s.convert(X.format,X.colorSpace),ot=s.convert(X.type),_t=S(X.internalFormat,Tt,ot,X.colorSpace);if(!n.get(b).__hasExternalTextures){const st=Math.max(1,b.width>>Z),yt=Math.max(1,b.height>>Z);it===r.TEXTURE_3D||it===r.TEXTURE_2D_ARRAY?e.texImage3D(it,Z,_t,st,yt,b.depth,0,Tt,ot,null):e.texImage2D(it,Z,_t,st,yt,0,Tt,ot,null)}e.bindFramebuffer(r.FRAMEBUFFER,C),Vt(b)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Q,it,n.get(X).__webglTexture,0,St(b)):(it===r.TEXTURE_2D||it>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Q,it,n.get(X).__webglTexture,Z),e.bindFramebuffer(r.FRAMEBUFFER,null)}function ut(C,b,X){if(r.bindRenderbuffer(r.RENDERBUFFER,C),b.depthBuffer){const Q=b.depthTexture,it=Q&&Q.isDepthTexture?Q.type:null,Z=x(b.stencilBuffer,it),Tt=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ot=St(b);Vt(b)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ot,Z,b.width,b.height):X?r.renderbufferStorageMultisample(r.RENDERBUFFER,ot,Z,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,Z,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Tt,r.RENDERBUFFER,C)}else{const Q=b.textures;for(let it=0;it<Q.length;it++){const Z=Q[it],Tt=s.convert(Z.format,Z.colorSpace),ot=s.convert(Z.type),_t=S(Z.internalFormat,Tt,ot,Z.colorSpace),Xt=St(b);X&&Vt(b)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Xt,_t,b.width,b.height):Vt(b)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Xt,_t,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,_t,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function lt(C,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,C),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),O(b.depthTexture,0);const Q=n.get(b.depthTexture).__webglTexture,it=St(b);if(b.depthTexture.format===Xs)Vt(b)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Q,0,it):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Q,0);else if(b.depthTexture.format===oo)Vt(b)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Q,0,it):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Y(C){const b=n.get(C),X=C.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==C.depthTexture){const Q=C.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),Q){const it=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,Q.removeEventListener("dispose",it)};Q.addEventListener("dispose",it),b.__depthDisposeCallback=it}b.__boundDepthTexture=Q}if(C.depthTexture&&!b.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");lt(b.__webglFramebuffer,C)}else if(X){b.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(e.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[Q]),b.__webglDepthbuffer[Q]===void 0)b.__webglDepthbuffer[Q]=r.createRenderbuffer(),ut(b.__webglDepthbuffer[Q],C,!1);else{const it=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Z=b.__webglDepthbuffer[Q];r.bindRenderbuffer(r.RENDERBUFFER,Z),r.framebufferRenderbuffer(r.FRAMEBUFFER,it,r.RENDERBUFFER,Z)}}else if(e.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=r.createRenderbuffer(),ut(b.__webglDepthbuffer,C,!1);else{const Q=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,it=b.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,it),r.framebufferRenderbuffer(r.FRAMEBUFFER,Q,r.RENDERBUFFER,it)}e.bindFramebuffer(r.FRAMEBUFFER,null)}function J(C,b,X){const Q=n.get(C);b!==void 0&&et(Q.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),X!==void 0&&Y(C)}function pt(C){const b=C.texture,X=n.get(C),Q=n.get(b);C.addEventListener("dispose",w);const it=C.textures,Z=C.isWebGLCubeRenderTarget===!0,Tt=it.length>1;if(Tt||(Q.__webglTexture===void 0&&(Q.__webglTexture=r.createTexture()),Q.__version=b.version,o.memory.textures++),Z){X.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(b.mipmaps&&b.mipmaps.length>0){X.__webglFramebuffer[ot]=[];for(let _t=0;_t<b.mipmaps.length;_t++)X.__webglFramebuffer[ot][_t]=r.createFramebuffer()}else X.__webglFramebuffer[ot]=r.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){X.__webglFramebuffer=[];for(let ot=0;ot<b.mipmaps.length;ot++)X.__webglFramebuffer[ot]=r.createFramebuffer()}else X.__webglFramebuffer=r.createFramebuffer();if(Tt)for(let ot=0,_t=it.length;ot<_t;ot++){const Xt=n.get(it[ot]);Xt.__webglTexture===void 0&&(Xt.__webglTexture=r.createTexture(),o.memory.textures++)}if(C.samples>0&&Vt(C)===!1){X.__webglMultisampledFramebuffer=r.createFramebuffer(),X.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let ot=0;ot<it.length;ot++){const _t=it[ot];X.__webglColorRenderbuffer[ot]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,X.__webglColorRenderbuffer[ot]);const Xt=s.convert(_t.format,_t.colorSpace),st=s.convert(_t.type),yt=S(_t.internalFormat,Xt,st,_t.colorSpace,C.isXRRenderTarget===!0),bt=St(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,bt,yt,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ot,r.RENDERBUFFER,X.__webglColorRenderbuffer[ot])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(X.__webglDepthRenderbuffer=r.createRenderbuffer(),ut(X.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Z){e.bindTexture(r.TEXTURE_CUBE_MAP,Q.__webglTexture),ct(r.TEXTURE_CUBE_MAP,b);for(let ot=0;ot<6;ot++)if(b.mipmaps&&b.mipmaps.length>0)for(let _t=0;_t<b.mipmaps.length;_t++)et(X.__webglFramebuffer[ot][_t],C,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,_t);else et(X.__webglFramebuffer[ot],C,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);p(b)&&m(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Tt){for(let ot=0,_t=it.length;ot<_t;ot++){const Xt=it[ot],st=n.get(Xt);e.bindTexture(r.TEXTURE_2D,st.__webglTexture),ct(r.TEXTURE_2D,Xt),et(X.__webglFramebuffer,C,Xt,r.COLOR_ATTACHMENT0+ot,r.TEXTURE_2D,0),p(Xt)&&m(r.TEXTURE_2D)}e.unbindTexture()}else{let ot=r.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ot=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(ot,Q.__webglTexture),ct(ot,b),b.mipmaps&&b.mipmaps.length>0)for(let _t=0;_t<b.mipmaps.length;_t++)et(X.__webglFramebuffer[_t],C,b,r.COLOR_ATTACHMENT0,ot,_t);else et(X.__webglFramebuffer,C,b,r.COLOR_ATTACHMENT0,ot,0);p(b)&&m(ot),e.unbindTexture()}C.depthBuffer&&Y(C)}function At(C){const b=C.textures;for(let X=0,Q=b.length;X<Q;X++){const it=b[X];if(p(it)){const Z=C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,Tt=n.get(it).__webglTexture;e.bindTexture(Z,Tt),m(Z),e.unbindTexture()}}}const Et=[],D=[];function qt(C){if(C.samples>0){if(Vt(C)===!1){const b=C.textures,X=C.width,Q=C.height;let it=r.COLOR_BUFFER_BIT;const Z=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Tt=n.get(C),ot=b.length>1;if(ot)for(let _t=0;_t<b.length;_t++)e.bindFramebuffer(r.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+_t,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,Tt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+_t,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer);for(let _t=0;_t<b.length;_t++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(it|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(it|=r.STENCIL_BUFFER_BIT)),ot){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Tt.__webglColorRenderbuffer[_t]);const Xt=n.get(b[_t]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Xt,0)}r.blitFramebuffer(0,0,X,Q,0,0,X,Q,it,r.NEAREST),l===!0&&(Et.length=0,D.length=0,Et.push(r.COLOR_ATTACHMENT0+_t),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Et.push(Z),D.push(Z),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,D)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Et))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ot)for(let _t=0;_t<b.length;_t++){e.bindFramebuffer(r.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+_t,r.RENDERBUFFER,Tt.__webglColorRenderbuffer[_t]);const Xt=n.get(b[_t]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,Tt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+_t,r.TEXTURE_2D,Xt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const b=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[b])}}}function St(C){return Math.min(i.maxSamples,C.samples)}function Vt(C){const b=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function H(C){const b=o.render.frame;h.get(C)!==b&&(h.set(C,b),C.update())}function te(C,b){const X=C.colorSpace,Q=C.format,it=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||X!==Mr&&X!==nr&&(_e.getTransfer(X)===Ce?(Q!==mi||it!==Gi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),b}function Ft(C){return typeof HTMLImageElement!="undefined"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame!="undefined"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=I,this.resetTextureUnits=T,this.setTexture2D=O,this.setTexture2DArray=K,this.setTexture3D=N,this.setTextureCube=$,this.rebindTextures=J,this.setupRenderTarget=pt,this.updateRenderTargetMipmap=At,this.updateMultisampleRenderTarget=qt,this.setupDepthRenderbuffer=Y,this.setupFrameBufferTexture=et,this.useMultisampledRTT=Vt}function Dy(r,t){function e(n,i=nr){let s;const o=_e.getTransfer(i);if(n===Gi)return r.UNSIGNED_BYTE;if(n===Lu)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Iu)return r.UNSIGNED_SHORT_5_5_5_1;if(n===um)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===cm)return r.BYTE;if(n===hm)return r.SHORT;if(n===oa)return r.UNSIGNED_SHORT;if(n===Du)return r.INT;if(n===Zr)return r.UNSIGNED_INT;if(n===bi)return r.FLOAT;if(n===ha)return r.HALF_FLOAT;if(n===fm)return r.ALPHA;if(n===dm)return r.RGB;if(n===mi)return r.RGBA;if(n===pm)return r.LUMINANCE;if(n===mm)return r.LUMINANCE_ALPHA;if(n===Xs)return r.DEPTH_COMPONENT;if(n===oo)return r.DEPTH_STENCIL;if(n===Uu)return r.RED;if(n===Nu)return r.RED_INTEGER;if(n===_m)return r.RG;if(n===Ou)return r.RG_INTEGER;if(n===Fu)return r.RGBA_INTEGER;if(n===sl||n===ol||n===al||n===ll)if(o===Ce)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===sl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ol)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===al)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ll)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===sl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ol)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===al)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ll)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===bh||n===Th||n===wh||n===Ah)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===bh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Th)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===wh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ah)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Rh||n===Ch||n===Ph)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Rh||n===Ch)return o===Ce?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Ph)return o===Ce?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Dh||n===Lh||n===Ih||n===Uh||n===Nh||n===Oh||n===Fh||n===Bh||n===zh||n===kh||n===Hh||n===Gh||n===Vh||n===Wh)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Dh)return o===Ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Lh)return o===Ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ih)return o===Ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Uh)return o===Ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Nh)return o===Ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Oh)return o===Ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Fh)return o===Ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Bh)return o===Ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===zh)return o===Ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===kh)return o===Ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Hh)return o===Ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Gh)return o===Ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Vh)return o===Ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Wh)return o===Ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===cl||n===Xh||n===Yh)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===cl)return o===Ce?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Xh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Yh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===gm||n===qh||n===$h||n===Kh)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===cl)return s.COMPRESSED_RED_RGTC1_EXT;if(n===qh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===$h)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Kh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===so?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}class Ly extends Vn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class or extends qe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Iy={type:"move"};class Uc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new or,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new or,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new or,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const g of t.hand.values()){const p=e.getJointPose(g,n),m=this._getHandJoint(c,g);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,_=.005;c.inputState.pinching&&f>d+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Iy)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new or;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Uy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ny=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Oy{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new _n,s=t.properties.get(i);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Vi({vertexShader:Uy,fragmentShader:Ny,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new fe(new uo(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Fy extends co{constructor(t,e){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,_=null;const g=new Oy,p=e.getContextAttributes();let m=null,S=null;const x=[],M=[],E=new Yt;let w=null;const y=new Vn;y.layers.enable(1),y.viewport=new ye;const R=new Vn;R.layers.enable(2),R.viewport=new ye;const L=[y,R],v=new Ly;v.layers.enable(1),v.layers.enable(2);let T=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let et=x[q];return et===void 0&&(et=new Uc,x[q]=et),et.getTargetRaySpace()},this.getControllerGrip=function(q){let et=x[q];return et===void 0&&(et=new Uc,x[q]=et),et.getGripSpace()},this.getHand=function(q){let et=x[q];return et===void 0&&(et=new Uc,x[q]=et),et.getHandSpace()};function k(q){const et=M.indexOf(q.inputSource);if(et===-1)return;const ut=x[et];ut!==void 0&&(ut.update(q.inputSource,q.frame,c||o),ut.dispatchEvent({type:q.type,data:q.inputSource}))}function O(){i.removeEventListener("select",k),i.removeEventListener("selectstart",k),i.removeEventListener("selectend",k),i.removeEventListener("squeeze",k),i.removeEventListener("squeezestart",k),i.removeEventListener("squeezeend",k),i.removeEventListener("end",O),i.removeEventListener("inputsourceschange",K);for(let q=0;q<x.length;q++){const et=M[q];et!==null&&(M[q]=null,x[q].disconnect(et))}T=null,I=null,g.reset(),t.setRenderTarget(m),d=null,f=null,u=null,i=null,S=null,Nt.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",k),i.addEventListener("selectstart",k),i.addEventListener("selectend",k),i.addEventListener("squeeze",k),i.addEventListener("squeezestart",k),i.addEventListener("squeezeend",k),i.addEventListener("end",O),i.addEventListener("inputsourceschange",K),p.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(E),i.renderState.layers===void 0){const et={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,e,et),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),S=new Jr(d.framebufferWidth,d.framebufferHeight,{format:mi,type:Gi,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let et=null,ut=null,lt=null;p.depth&&(lt=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=p.stencil?oo:Xs,ut=p.stencil?so:Zr);const Y={colorFormat:e.RGBA8,depthFormat:lt,scaleFactor:s};u=new XRWebGLBinding(i,e),f=u.createProjectionLayer(Y),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),S=new Jr(f.textureWidth,f.textureHeight,{format:mi,type:Gi,depthTexture:new Lm(f.textureWidth,f.textureHeight,ut,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Nt.setContext(i),Nt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function K(q){for(let et=0;et<q.removed.length;et++){const ut=q.removed[et],lt=M.indexOf(ut);lt>=0&&(M[lt]=null,x[lt].disconnect(ut))}for(let et=0;et<q.added.length;et++){const ut=q.added[et];let lt=M.indexOf(ut);if(lt===-1){for(let J=0;J<x.length;J++)if(J>=M.length){M.push(ut),lt=J;break}else if(M[J]===null){M[J]=ut,lt=J;break}if(lt===-1)break}const Y=x[lt];Y&&Y.connect(ut)}}const N=new U,$=new U;function V(q,et,ut){N.setFromMatrixPosition(et.matrixWorld),$.setFromMatrixPosition(ut.matrixWorld);const lt=N.distanceTo($),Y=et.projectionMatrix.elements,J=ut.projectionMatrix.elements,pt=Y[14]/(Y[10]-1),At=Y[14]/(Y[10]+1),Et=(Y[9]+1)/Y[5],D=(Y[9]-1)/Y[5],qt=(Y[8]-1)/Y[0],St=(J[8]+1)/J[0],Vt=pt*qt,H=pt*St,te=lt/(-qt+St),Ft=te*-qt;if(et.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Ft),q.translateZ(te),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Y[10]===-1)q.projectionMatrix.copy(et.projectionMatrix),q.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{const C=pt+te,b=At+te,X=Vt-Ft,Q=H+(lt-Ft),it=Et*At/b*C,Z=D*At/b*C;q.projectionMatrix.makePerspective(X,Q,it,Z,C,b),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function rt(q,et){et===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(et.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;let et=q.near,ut=q.far;g.texture!==null&&(g.depthNear>0&&(et=g.depthNear),g.depthFar>0&&(ut=g.depthFar)),v.near=R.near=y.near=et,v.far=R.far=y.far=ut,(T!==v.near||I!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),T=v.near,I=v.far);const lt=q.parent,Y=v.cameras;rt(v,lt);for(let J=0;J<Y.length;J++)rt(Y[J],lt);Y.length===2?V(v,y,R):v.projectionMatrix.copy(y.projectionMatrix),P(q,v,lt)};function P(q,et,ut){ut===null?q.matrix.copy(et.matrixWorld):(q.matrix.copy(ut.matrixWorld),q.matrix.invert(),q.matrix.multiply(et.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(et.projectionMatrix),q.projectionMatrixInverse.copy(et.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Zh*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(q){l=q,f!==null&&(f.fixedFoveation=q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=q)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(v)};let ct=null;function Rt(q,et){if(h=et.getViewerPose(c||o),_=et,h!==null){const ut=h.views;d!==null&&(t.setRenderTargetFramebuffer(S,d.framebuffer),t.setRenderTarget(S));let lt=!1;ut.length!==v.cameras.length&&(v.cameras.length=0,lt=!0);for(let J=0;J<ut.length;J++){const pt=ut[J];let At=null;if(d!==null)At=d.getViewport(pt);else{const D=u.getViewSubImage(f,pt);At=D.viewport,J===0&&(t.setRenderTargetTextures(S,D.colorTexture,f.ignoreDepthValues?void 0:D.depthStencilTexture),t.setRenderTarget(S))}let Et=L[J];Et===void 0&&(Et=new Vn,Et.layers.enable(J),Et.viewport=new ye,L[J]=Et),Et.matrix.fromArray(pt.transform.matrix),Et.matrix.decompose(Et.position,Et.quaternion,Et.scale),Et.projectionMatrix.fromArray(pt.projectionMatrix),Et.projectionMatrixInverse.copy(Et.projectionMatrix).invert(),Et.viewport.set(At.x,At.y,At.width,At.height),J===0&&(v.matrix.copy(Et.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),lt===!0&&v.cameras.push(Et)}const Y=i.enabledFeatures;if(Y&&Y.includes("depth-sensing")){const J=u.getDepthInformation(ut[0]);J&&J.isValid&&J.texture&&g.init(t,J,i.renderState)}}for(let ut=0;ut<x.length;ut++){const lt=M[ut],Y=x[ut];lt!==null&&Y!==void 0&&Y.update(lt,et,c||o)}ct&&ct(q,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),_=null}const Nt=new Pm;Nt.setAnimationLoop(Rt),this.setAnimationLoop=function(q){ct=q},this.dispose=function(){}}}const Pr=new _i,By=new ge;function zy(r,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Am(r)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,S,x,M){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(p,m):m.isMeshToonMaterial?(s(p,m),u(p,m)):m.isMeshPhongMaterial?(s(p,m),h(p,m)):m.isMeshStandardMaterial?(s(p,m),f(p,m),m.isMeshPhysicalMaterial&&d(p,m,M)):m.isMeshMatcapMaterial?(s(p,m),_(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),g(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,S,x):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===wn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===wn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const S=t.get(m),x=S.envMap,M=S.envMapRotation;x&&(p.envMap.value=x,Pr.copy(M),Pr.x*=-1,Pr.y*=-1,Pr.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Pr.y*=-1,Pr.z*=-1),p.envMapRotation.value.setFromMatrix4(By.makeRotationFromEuler(Pr)),p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,S,x){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*S,p.scale.value=x*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,S){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===wn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,m){m.matcap&&(p.matcap.value=m.matcap)}function g(p,m){const S=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function ky(r,t,e,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,x){const M=x.program;n.uniformBlockBinding(S,M)}function c(S,x){let M=i[S.id];M===void 0&&(_(S),M=h(S),i[S.id]=M,S.addEventListener("dispose",p));const E=x.program;n.updateUBOMapping(S,E);const w=t.render.frame;s[S.id]!==w&&(f(S),s[S.id]=w)}function h(S){const x=u();S.__bindingPointIndex=x;const M=r.createBuffer(),E=S.__size,w=S.usage;return r.bindBuffer(r.UNIFORM_BUFFER,M),r.bufferData(r.UNIFORM_BUFFER,E,w),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,x,M),M}function u(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const x=i[S.id],M=S.uniforms,E=S.__cache;r.bindBuffer(r.UNIFORM_BUFFER,x);for(let w=0,y=M.length;w<y;w++){const R=Array.isArray(M[w])?M[w]:[M[w]];for(let L=0,v=R.length;L<v;L++){const T=R[L];if(d(T,w,L,E)===!0){const I=T.__offset,k=Array.isArray(T.value)?T.value:[T.value];let O=0;for(let K=0;K<k.length;K++){const N=k[K],$=g(N);typeof N=="number"||typeof N=="boolean"?(T.__data[0]=N,r.bufferSubData(r.UNIFORM_BUFFER,I+O,T.__data)):N.isMatrix3?(T.__data[0]=N.elements[0],T.__data[1]=N.elements[1],T.__data[2]=N.elements[2],T.__data[3]=0,T.__data[4]=N.elements[3],T.__data[5]=N.elements[4],T.__data[6]=N.elements[5],T.__data[7]=0,T.__data[8]=N.elements[6],T.__data[9]=N.elements[7],T.__data[10]=N.elements[8],T.__data[11]=0):(N.toArray(T.__data,O),O+=$.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,I,T.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(S,x,M,E){const w=S.value,y=x+"_"+M;if(E[y]===void 0)return typeof w=="number"||typeof w=="boolean"?E[y]=w:E[y]=w.clone(),!0;{const R=E[y];if(typeof w=="number"||typeof w=="boolean"){if(R!==w)return E[y]=w,!0}else if(R.equals(w)===!1)return R.copy(w),!0}return!1}function _(S){const x=S.uniforms;let M=0;const E=16;for(let y=0,R=x.length;y<R;y++){const L=Array.isArray(x[y])?x[y]:[x[y]];for(let v=0,T=L.length;v<T;v++){const I=L[v],k=Array.isArray(I.value)?I.value:[I.value];for(let O=0,K=k.length;O<K;O++){const N=k[O],$=g(N),V=M%E,rt=V%$.boundary,P=V+rt;M+=rt,P!==0&&E-P<$.storage&&(M+=E-P),I.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=M,M+=$.storage}}}const w=M%E;return w>0&&(M+=E-w),S.__size=M,S.__cache={},this}function g(S){const x={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(x.boundary=4,x.storage=4):S.isVector2?(x.boundary=8,x.storage=8):S.isVector3||S.isColor?(x.boundary=16,x.storage=12):S.isVector4?(x.boundary=16,x.storage=16):S.isMatrix3?(x.boundary=48,x.storage=48):S.isMatrix4?(x.boundary=64,x.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),x}function p(S){const x=S.target;x.removeEventListener("dispose",p);const M=o.indexOf(x.__bindingPointIndex);o.splice(M,1),r.deleteBuffer(i[x.id]),delete i[x.id],delete s[x.id]}function m(){for(const S in i)r.deleteBuffer(i[S]);o=[],i={},s={}}return{bind:l,update:c,dispose:m}}class Hy{constructor(t={}){const{canvas:e=Rg(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const d=new Uint32Array(4),_=new Int32Array(4);let g=null,p=null;const m=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Rn,this.toneMapping=fr,this.toneMappingExposure=1;const x=this;let M=!1,E=0,w=0,y=null,R=-1,L=null;const v=new ye,T=new ye;let I=null;const k=new Gt(0);let O=0,K=e.width,N=e.height,$=1,V=null,rt=null;const P=new ye(0,0,K,N),ct=new ye(0,0,K,N);let Rt=!1;const Nt=new ku;let q=!1,et=!1;const ut=new ge,lt=new ge,Y=new U,J=new ye,pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let At=!1;function Et(){return y===null?$:1}let D=n;function qt(A,z){return e.getContext(A,z)}try{const A={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Pu}`),e.addEventListener("webglcontextlost",tt,!1),e.addEventListener("webglcontextrestored",ht,!1),e.addEventListener("webglcontextcreationerror",ft,!1),D===null){const z="webgl2";if(D=qt(z,A),D===null)throw qt(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let St,Vt,H,te,Ft,C,b,X,Q,it,Z,Tt,ot,_t,Xt,st,yt,bt,zt,Mt,$t,Ht,le,F;function nt(){St=new YS(D),St.init(),Ht=new Dy(D,St),Vt=new kS(D,St,t,Ht),H=new Ry(D),Vt.reverseDepthBuffer&&H.buffers.depth.setReversed(!0),te=new KS(D),Ft=new dy,C=new Py(D,St,H,Ft,Vt,Ht,te),b=new GS(x),X=new XS(x),Q=new nv(D),le=new BS(D,Q),it=new qS(D,Q,te,le),Z=new ZS(D,it,Q,te),zt=new jS(D,Vt,C),st=new HS(Ft),Tt=new fy(x,b,X,St,Vt,le,st),ot=new zy(x,Ft),_t=new my,Xt=new My(St),bt=new FS(x,b,X,H,Z,f,l),yt=new wy(x,Z,Vt),F=new ky(D,te,Vt,H),Mt=new zS(D,St,te),$t=new $S(D,St,te),te.programs=Tt.programs,x.capabilities=Vt,x.extensions=St,x.properties=Ft,x.renderLists=_t,x.shadowMap=yt,x.state=H,x.info=te}nt();const j=new Fy(x,D);this.xr=j,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const A=St.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=St.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(A){A!==void 0&&($=A,this.setSize(K,N,!1))},this.getSize=function(A){return A.set(K,N)},this.setSize=function(A,z,G=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=A,N=z,e.width=Math.floor(A*$),e.height=Math.floor(z*$),G===!0&&(e.style.width=A+"px",e.style.height=z+"px"),this.setViewport(0,0,A,z)},this.getDrawingBufferSize=function(A){return A.set(K*$,N*$).floor()},this.setDrawingBufferSize=function(A,z,G){K=A,N=z,$=G,e.width=Math.floor(A*G),e.height=Math.floor(z*G),this.setViewport(0,0,A,z)},this.getCurrentViewport=function(A){return A.copy(v)},this.getViewport=function(A){return A.copy(P)},this.setViewport=function(A,z,G,W){A.isVector4?P.set(A.x,A.y,A.z,A.w):P.set(A,z,G,W),H.viewport(v.copy(P).multiplyScalar($).round())},this.getScissor=function(A){return A.copy(ct)},this.setScissor=function(A,z,G,W){A.isVector4?ct.set(A.x,A.y,A.z,A.w):ct.set(A,z,G,W),H.scissor(T.copy(ct).multiplyScalar($).round())},this.getScissorTest=function(){return Rt},this.setScissorTest=function(A){H.setScissorTest(Rt=A)},this.setOpaqueSort=function(A){V=A},this.setTransparentSort=function(A){rt=A},this.getClearColor=function(A){return A.copy(bt.getClearColor())},this.setClearColor=function(){bt.setClearColor.apply(bt,arguments)},this.getClearAlpha=function(){return bt.getClearAlpha()},this.setClearAlpha=function(){bt.setClearAlpha.apply(bt,arguments)},this.clear=function(A=!0,z=!0,G=!0){let W=0;if(A){let B=!1;if(y!==null){const at=y.texture.format;B=at===Fu||at===Ou||at===Nu}if(B){const at=y.texture.type,xt=at===Gi||at===Zr||at===oa||at===so||at===Lu||at===Iu,mt=bt.getClearColor(),dt=bt.getClearAlpha(),Dt=mt.r,kt=mt.g,Pt=mt.b;xt?(d[0]=Dt,d[1]=kt,d[2]=Pt,d[3]=dt,D.clearBufferuiv(D.COLOR,0,d)):(_[0]=Dt,_[1]=kt,_[2]=Pt,_[3]=dt,D.clearBufferiv(D.COLOR,0,_))}else W|=D.COLOR_BUFFER_BIT}z&&(W|=D.DEPTH_BUFFER_BIT,D.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),G&&(W|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",tt,!1),e.removeEventListener("webglcontextrestored",ht,!1),e.removeEventListener("webglcontextcreationerror",ft,!1),_t.dispose(),Xt.dispose(),Ft.dispose(),b.dispose(),X.dispose(),Z.dispose(),le.dispose(),F.dispose(),Tt.dispose(),j.dispose(),j.removeEventListener("sessionstart",ue),j.removeEventListener("sessionend",gt),Bt.stop()};function tt(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function ht(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const A=te.autoReset,z=yt.enabled,G=yt.autoUpdate,W=yt.needsUpdate,B=yt.type;nt(),te.autoReset=A,yt.enabled=z,yt.autoUpdate=G,yt.needsUpdate=W,yt.type=B}function ft(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Kt(A){const z=A.target;z.removeEventListener("dispose",Kt),Ee(z)}function Ee(A){Pe(A),Ft.remove(A)}function Pe(A){const z=Ft.get(A).programs;z!==void 0&&(z.forEach(function(G){Tt.releaseProgram(G)}),A.isShaderMaterial&&Tt.releaseShaderCache(A))}this.renderBufferDirect=function(A,z,G,W,B,at){z===null&&(z=pt);const xt=B.isMesh&&B.matrixWorld.determinant()<0,mt=ve(A,z,G,W,B);H.setMaterial(W,xt);let dt=G.index,Dt=1;if(W.wireframe===!0){if(dt=it.getWireframeAttribute(G),dt===void 0)return;Dt=2}const kt=G.drawRange,Pt=G.attributes.position;let ce=kt.start*Dt,ae=(kt.start+kt.count)*Dt;at!==null&&(ce=Math.max(ce,at.start*Dt),ae=Math.min(ae,(at.start+at.count)*Dt)),dt!==null?(ce=Math.max(ce,0),ae=Math.min(ae,dt.count)):Pt!=null&&(ce=Math.max(ce,0),ae=Math.min(ae,Pt.count));const Se=ae-ce;if(Se<0||Se===1/0)return;le.setup(B,W,mt,G,dt);let Je,ee=Mt;if(dt!==null&&(Je=Q.get(dt),ee=$t,ee.setIndex(Je)),B.isMesh)W.wireframe===!0?(H.setLineWidth(W.wireframeLinewidth*Et()),ee.setMode(D.LINES)):ee.setMode(D.TRIANGLES);else if(B.isLine){let Ot=W.linewidth;Ot===void 0&&(Ot=1),H.setLineWidth(Ot*Et()),B.isLineSegments?ee.setMode(D.LINES):B.isLineLoop?ee.setMode(D.LINE_LOOP):ee.setMode(D.LINE_STRIP)}else B.isPoints?ee.setMode(D.POINTS):B.isSprite&&ee.setMode(D.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)ee.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(St.get("WEBGL_multi_draw"))ee.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Ot=B._multiDrawStarts,sn=B._multiDrawCounts,pe=B._multiDrawCount,li=dt?Q.get(dt).bytesPerElement:1,as=Ft.get(W).currentProgram.getUniforms();for(let Fn=0;Fn<pe;Fn++)as.setValue(D,"_gl_DrawID",Fn),ee.render(Ot[Fn]/li,sn[Fn])}else if(B.isInstancedMesh)ee.renderInstances(ce,Se,B.count);else if(G.isInstancedBufferGeometry){const Ot=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,sn=Math.min(G.instanceCount,Ot);ee.renderInstances(ce,Se,sn)}else ee.render(ce,Se)};function oe(A,z,G){A.transparent===!0&&A.side===Mi&&A.forceSinglePass===!1?(A.side=wn,A.needsUpdate=!0,Be(A,z,G),A.side=vr,A.needsUpdate=!0,Be(A,z,G),A.side=Mi):Be(A,z,G)}this.compile=function(A,z,G=null){G===null&&(G=A),p=Xt.get(G),p.init(z),S.push(p),G.traverseVisible(function(B){B.isLight&&B.layers.test(z.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),A!==G&&A.traverseVisible(function(B){B.isLight&&B.layers.test(z.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),p.setupLights();const W=new Set;return A.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const at=B.material;if(at)if(Array.isArray(at))for(let xt=0;xt<at.length;xt++){const mt=at[xt];oe(mt,G,B),W.add(mt)}else oe(at,G,B),W.add(at)}),S.pop(),p=null,W},this.compileAsync=function(A,z,G=null){const W=this.compile(A,z,G);return new Promise(B=>{function at(){if(W.forEach(function(xt){Ft.get(xt).currentProgram.isReady()&&W.delete(xt)}),W.size===0){B(A);return}setTimeout(at,10)}St.get("KHR_parallel_shader_compile")!==null?at():setTimeout(at,10)})};let It=null;function Ct(A){It&&It(A)}function ue(){Bt.stop()}function gt(){Bt.start()}const Bt=new Pm;Bt.setAnimationLoop(Ct),typeof self!="undefined"&&Bt.setContext(self),this.setAnimationLoop=function(A){It=A,j.setAnimationLoop(A),A===null?Bt.stop():Bt.start()},j.addEventListener("sessionstart",ue),j.addEventListener("sessionend",gt),this.render=function(A,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(z),z=j.getCamera()),A.isScene===!0&&A.onBeforeRender(x,A,z,y),p=Xt.get(A,S.length),p.init(z),S.push(p),lt.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),Nt.setFromProjectionMatrix(lt),et=this.localClippingEnabled,q=st.init(this.clippingPlanes,et),g=_t.get(A,m.length),g.init(),m.push(g),j.enabled===!0&&j.isPresenting===!0){const at=x.xr.getDepthSensingMesh();at!==null&&Ut(at,z,-1/0,x.sortObjects)}Ut(A,z,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(V,rt),At=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,At&&bt.addToRenderList(g,A),this.info.render.frame++,q===!0&&st.beginShadows();const G=p.state.shadowsArray;yt.render(G,A,z),q===!0&&st.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=g.opaque,B=g.transmissive;if(p.setupLights(),z.isArrayCamera){const at=z.cameras;if(B.length>0)for(let xt=0,mt=at.length;xt<mt;xt++){const dt=at[xt];Fe(W,B,A,dt)}At&&bt.render(A);for(let xt=0,mt=at.length;xt<mt;xt++){const dt=at[xt];Wt(g,A,dt,dt.viewport)}}else B.length>0&&Fe(W,B,A,z),At&&bt.render(A),Wt(g,A,z);y!==null&&(C.updateMultisampleRenderTarget(y),C.updateRenderTargetMipmap(y)),A.isScene===!0&&A.onAfterRender(x,A,z),le.resetDefaultState(),R=-1,L=null,S.pop(),S.length>0?(p=S[S.length-1],q===!0&&st.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?g=m[m.length-1]:g=null};function Ut(A,z,G,W){if(A.visible===!1)return;if(A.layers.test(z.layers)){if(A.isGroup)G=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(z);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Nt.intersectsSprite(A)){W&&J.setFromMatrixPosition(A.matrixWorld).applyMatrix4(lt);const xt=Z.update(A),mt=A.material;mt.visible&&g.push(A,xt,mt,G,J.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Nt.intersectsObject(A))){const xt=Z.update(A),mt=A.material;if(W&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),J.copy(A.boundingSphere.center)):(xt.boundingSphere===null&&xt.computeBoundingSphere(),J.copy(xt.boundingSphere.center)),J.applyMatrix4(A.matrixWorld).applyMatrix4(lt)),Array.isArray(mt)){const dt=xt.groups;for(let Dt=0,kt=dt.length;Dt<kt;Dt++){const Pt=dt[Dt],ce=mt[Pt.materialIndex];ce&&ce.visible&&g.push(A,xt,ce,G,J.z,Pt)}}else mt.visible&&g.push(A,xt,mt,G,J.z,null)}}const at=A.children;for(let xt=0,mt=at.length;xt<mt;xt++)Ut(at[xt],z,G,W)}function Wt(A,z,G,W){const B=A.opaque,at=A.transmissive,xt=A.transparent;p.setupLightsView(G),q===!0&&st.setGlobalState(x.clippingPlanes,G),W&&H.viewport(v.copy(W)),B.length>0&&jt(B,z,G),at.length>0&&jt(at,z,G),xt.length>0&&jt(xt,z,G),H.buffers.depth.setTest(!0),H.buffers.depth.setMask(!0),H.buffers.color.setMask(!0),H.setPolygonOffset(!1)}function Fe(A,z,G,W){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[W.id]===void 0&&(p.state.transmissionRenderTarget[W.id]=new Jr(1,1,{generateMipmaps:!0,type:St.has("EXT_color_buffer_half_float")||St.has("EXT_color_buffer_float")?ha:Gi,minFilter:Hr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:_e.workingColorSpace}));const at=p.state.transmissionRenderTarget[W.id],xt=W.viewport||v;at.setSize(xt.z,xt.w);const mt=x.getRenderTarget();x.setRenderTarget(at),x.getClearColor(k),O=x.getClearAlpha(),O<1&&x.setClearColor(16777215,.5),x.clear(),At&&bt.render(G);const dt=x.toneMapping;x.toneMapping=fr;const Dt=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),p.setupLightsView(W),q===!0&&st.setGlobalState(x.clippingPlanes,W),jt(A,G,W),C.updateMultisampleRenderTarget(at),C.updateRenderTargetMipmap(at),St.has("WEBGL_multisampled_render_to_texture")===!1){let kt=!1;for(let Pt=0,ce=z.length;Pt<ce;Pt++){const ae=z[Pt],Se=ae.object,Je=ae.geometry,ee=ae.material,Ot=ae.group;if(ee.side===Mi&&Se.layers.test(W.layers)){const sn=ee.side;ee.side=wn,ee.needsUpdate=!0,De(Se,G,W,Je,ee,Ot),ee.side=sn,ee.needsUpdate=!0,kt=!0}}kt===!0&&(C.updateMultisampleRenderTarget(at),C.updateRenderTargetMipmap(at))}x.setRenderTarget(mt),x.setClearColor(k,O),Dt!==void 0&&(W.viewport=Dt),x.toneMapping=dt}function jt(A,z,G){const W=z.isScene===!0?z.overrideMaterial:null;for(let B=0,at=A.length;B<at;B++){const xt=A[B],mt=xt.object,dt=xt.geometry,Dt=W===null?xt.material:W,kt=xt.group;mt.layers.test(G.layers)&&De(mt,z,G,dt,Dt,kt)}}function De(A,z,G,W,B,at){A.onBeforeRender(x,z,G,W,B,at),A.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),B.onBeforeRender(x,z,G,W,A,at),B.transparent===!0&&B.side===Mi&&B.forceSinglePass===!1?(B.side=wn,B.needsUpdate=!0,x.renderBufferDirect(G,z,W,B,A,at),B.side=vr,B.needsUpdate=!0,x.renderBufferDirect(G,z,W,B,A,at),B.side=Mi):x.renderBufferDirect(G,z,W,B,A,at),A.onAfterRender(x,z,G,W,B,at)}function Be(A,z,G){z.isScene!==!0&&(z=pt);const W=Ft.get(A),B=p.state.lights,at=p.state.shadowsArray,xt=B.state.version,mt=Tt.getParameters(A,B.state,at,z,G),dt=Tt.getProgramCacheKey(mt);let Dt=W.programs;W.environment=A.isMeshStandardMaterial?z.environment:null,W.fog=z.fog,W.envMap=(A.isMeshStandardMaterial?X:b).get(A.envMap||W.environment),W.envMapRotation=W.environment!==null&&A.envMap===null?z.environmentRotation:A.envMapRotation,Dt===void 0&&(A.addEventListener("dispose",Kt),Dt=new Map,W.programs=Dt);let kt=Dt.get(dt);if(kt!==void 0){if(W.currentProgram===kt&&W.lightsStateVersion===xt)return be(A,mt),kt}else mt.uniforms=Tt.getUniforms(A),A.onBeforeCompile(mt,x),kt=Tt.acquireProgram(mt,dt),Dt.set(dt,kt),W.uniforms=mt.uniforms;const Pt=W.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Pt.clippingPlanes=st.uniform),be(A,mt),W.needsLights=Re(A),W.lightsStateVersion=xt,W.needsLights&&(Pt.ambientLightColor.value=B.state.ambient,Pt.lightProbe.value=B.state.probe,Pt.directionalLights.value=B.state.directional,Pt.directionalLightShadows.value=B.state.directionalShadow,Pt.spotLights.value=B.state.spot,Pt.spotLightShadows.value=B.state.spotShadow,Pt.rectAreaLights.value=B.state.rectArea,Pt.ltc_1.value=B.state.rectAreaLTC1,Pt.ltc_2.value=B.state.rectAreaLTC2,Pt.pointLights.value=B.state.point,Pt.pointLightShadows.value=B.state.pointShadow,Pt.hemisphereLights.value=B.state.hemi,Pt.directionalShadowMap.value=B.state.directionalShadowMap,Pt.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Pt.spotShadowMap.value=B.state.spotShadowMap,Pt.spotLightMatrix.value=B.state.spotLightMatrix,Pt.spotLightMap.value=B.state.spotLightMap,Pt.pointShadowMap.value=B.state.pointShadowMap,Pt.pointShadowMatrix.value=B.state.pointShadowMatrix),W.currentProgram=kt,W.uniformsList=null,kt}function Ae(A){if(A.uniformsList===null){const z=A.currentProgram.getUniforms();A.uniformsList=ul.seqWithValue(z.seq,A.uniforms)}return A.uniformsList}function be(A,z){const G=Ft.get(A);G.outputColorSpace=z.outputColorSpace,G.batching=z.batching,G.batchingColor=z.batchingColor,G.instancing=z.instancing,G.instancingColor=z.instancingColor,G.instancingMorph=z.instancingMorph,G.skinning=z.skinning,G.morphTargets=z.morphTargets,G.morphNormals=z.morphNormals,G.morphColors=z.morphColors,G.morphTargetsCount=z.morphTargetsCount,G.numClippingPlanes=z.numClippingPlanes,G.numIntersection=z.numClipIntersection,G.vertexAlphas=z.vertexAlphas,G.vertexTangents=z.vertexTangents,G.toneMapping=z.toneMapping}function ve(A,z,G,W,B){z.isScene!==!0&&(z=pt),C.resetTextureUnits();const at=z.fog,xt=W.isMeshStandardMaterial?z.environment:null,mt=y===null?x.outputColorSpace:y.isXRRenderTarget===!0?y.texture.colorSpace:Mr,dt=(W.isMeshStandardMaterial?X:b).get(W.envMap||xt),Dt=W.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,kt=!!G.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Pt=!!G.morphAttributes.position,ce=!!G.morphAttributes.normal,ae=!!G.morphAttributes.color;let Se=fr;W.toneMapped&&(y===null||y.isXRRenderTarget===!0)&&(Se=x.toneMapping);const Je=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ee=Je!==void 0?Je.length:0,Ot=Ft.get(W),sn=p.state.lights;if(q===!0&&(et===!0||A!==L)){const Jn=A===L&&W.id===R;st.setState(W,A,Jn)}let pe=!1;W.version===Ot.__version?(Ot.needsLights&&Ot.lightsStateVersion!==sn.state.version||Ot.outputColorSpace!==mt||B.isBatchedMesh&&Ot.batching===!1||!B.isBatchedMesh&&Ot.batching===!0||B.isBatchedMesh&&Ot.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Ot.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Ot.instancing===!1||!B.isInstancedMesh&&Ot.instancing===!0||B.isSkinnedMesh&&Ot.skinning===!1||!B.isSkinnedMesh&&Ot.skinning===!0||B.isInstancedMesh&&Ot.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Ot.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Ot.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Ot.instancingMorph===!1&&B.morphTexture!==null||Ot.envMap!==dt||W.fog===!0&&Ot.fog!==at||Ot.numClippingPlanes!==void 0&&(Ot.numClippingPlanes!==st.numPlanes||Ot.numIntersection!==st.numIntersection)||Ot.vertexAlphas!==Dt||Ot.vertexTangents!==kt||Ot.morphTargets!==Pt||Ot.morphNormals!==ce||Ot.morphColors!==ae||Ot.toneMapping!==Se||Ot.morphTargetsCount!==ee)&&(pe=!0):(pe=!0,Ot.__version=W.version);let li=Ot.currentProgram;pe===!0&&(li=Be(W,z,B));let as=!1,Fn=!1,ql=!1;const ze=li.getUniforms(),Wi=Ot.uniforms;if(H.useProgram(li.program)&&(as=!0,Fn=!0,ql=!0),W.id!==R&&(R=W.id,Fn=!0),as||L!==A){Vt.reverseDepthBuffer?(ut.copy(A.projectionMatrix),Pg(ut),Dg(ut),ze.setValue(D,"projectionMatrix",ut)):ze.setValue(D,"projectionMatrix",A.projectionMatrix),ze.setValue(D,"viewMatrix",A.matrixWorldInverse);const Jn=ze.map.cameraPosition;Jn!==void 0&&Jn.setValue(D,Y.setFromMatrixPosition(A.matrixWorld)),Vt.logarithmicDepthBuffer&&ze.setValue(D,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&ze.setValue(D,"isOrthographic",A.isOrthographicCamera===!0),L!==A&&(L=A,Fn=!0,ql=!0)}if(B.isSkinnedMesh){ze.setOptional(D,B,"bindMatrix"),ze.setOptional(D,B,"bindMatrixInverse");const Jn=B.skeleton;Jn&&(Jn.boneTexture===null&&Jn.computeBoneTexture(),ze.setValue(D,"boneTexture",Jn.boneTexture,C))}B.isBatchedMesh&&(ze.setOptional(D,B,"batchingTexture"),ze.setValue(D,"batchingTexture",B._matricesTexture,C),ze.setOptional(D,B,"batchingIdTexture"),ze.setValue(D,"batchingIdTexture",B._indirectTexture,C),ze.setOptional(D,B,"batchingColorTexture"),B._colorsTexture!==null&&ze.setValue(D,"batchingColorTexture",B._colorsTexture,C));const $l=G.morphAttributes;if(($l.position!==void 0||$l.normal!==void 0||$l.color!==void 0)&&zt.update(B,G,li),(Fn||Ot.receiveShadow!==B.receiveShadow)&&(Ot.receiveShadow=B.receiveShadow,ze.setValue(D,"receiveShadow",B.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Wi.envMap.value=dt,Wi.flipEnvMap.value=dt.isCubeTexture&&dt.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&z.environment!==null&&(Wi.envMapIntensity.value=z.environmentIntensity),Fn&&(ze.setValue(D,"toneMappingExposure",x.toneMappingExposure),Ot.needsLights&&On(Wi,ql),at&&W.fog===!0&&ot.refreshFogUniforms(Wi,at),ot.refreshMaterialUniforms(Wi,W,$,N,p.state.transmissionRenderTarget[A.id]),ul.upload(D,Ae(Ot),Wi,C)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(ul.upload(D,Ae(Ot),Wi,C),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&ze.setValue(D,"center",B.center),ze.setValue(D,"modelViewMatrix",B.modelViewMatrix),ze.setValue(D,"normalMatrix",B.normalMatrix),ze.setValue(D,"modelMatrix",B.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Jn=W.uniformsGroups;for(let Kl=0,v_=Jn.length;Kl<v_;Kl++){const nf=Jn[Kl];F.update(nf,li),F.bind(nf,li)}}return li}function On(A,z){A.ambientLightColor.needsUpdate=z,A.lightProbe.needsUpdate=z,A.directionalLights.needsUpdate=z,A.directionalLightShadows.needsUpdate=z,A.pointLights.needsUpdate=z,A.pointLightShadows.needsUpdate=z,A.spotLights.needsUpdate=z,A.spotLightShadows.needsUpdate=z,A.rectAreaLights.needsUpdate=z,A.hemisphereLights.needsUpdate=z}function Re(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return y},this.setRenderTargetTextures=function(A,z,G){Ft.get(A.texture).__webglTexture=z,Ft.get(A.depthTexture).__webglTexture=G;const W=Ft.get(A);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=G===void 0,W.__autoAllocateDepthBuffer||St.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,z){const G=Ft.get(A);G.__webglFramebuffer=z,G.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(A,z=0,G=0){y=A,E=z,w=G;let W=!0,B=null,at=!1,xt=!1;if(A){const dt=Ft.get(A);if(dt.__useDefaultFramebuffer!==void 0)H.bindFramebuffer(D.FRAMEBUFFER,null),W=!1;else if(dt.__webglFramebuffer===void 0)C.setupRenderTarget(A);else if(dt.__hasExternalTextures)C.rebindTextures(A,Ft.get(A.texture).__webglTexture,Ft.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Pt=A.depthTexture;if(dt.__boundDepthTexture!==Pt){if(Pt!==null&&Ft.has(Pt)&&(A.width!==Pt.image.width||A.height!==Pt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(A)}}const Dt=A.texture;(Dt.isData3DTexture||Dt.isDataArrayTexture||Dt.isCompressedArrayTexture)&&(xt=!0);const kt=Ft.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(kt[z])?B=kt[z][G]:B=kt[z],at=!0):A.samples>0&&C.useMultisampledRTT(A)===!1?B=Ft.get(A).__webglMultisampledFramebuffer:Array.isArray(kt)?B=kt[G]:B=kt,v.copy(A.viewport),T.copy(A.scissor),I=A.scissorTest}else v.copy(P).multiplyScalar($).floor(),T.copy(ct).multiplyScalar($).floor(),I=Rt;if(H.bindFramebuffer(D.FRAMEBUFFER,B)&&W&&H.drawBuffers(A,B),H.viewport(v),H.scissor(T),H.setScissorTest(I),at){const dt=Ft.get(A.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+z,dt.__webglTexture,G)}else if(xt){const dt=Ft.get(A.texture),Dt=z||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,dt.__webglTexture,G||0,Dt)}R=-1},this.readRenderTargetPixels=function(A,z,G,W,B,at,xt){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let mt=Ft.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&xt!==void 0&&(mt=mt[xt]),mt){H.bindFramebuffer(D.FRAMEBUFFER,mt);try{const dt=A.texture,Dt=dt.format,kt=dt.type;if(!Vt.textureFormatReadable(Dt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Vt.textureTypeReadable(kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=A.width-W&&G>=0&&G<=A.height-B&&D.readPixels(z,G,W,B,Ht.convert(Dt),Ht.convert(kt),at)}finally{const dt=y!==null?Ft.get(y).__webglFramebuffer:null;H.bindFramebuffer(D.FRAMEBUFFER,dt)}}},this.readRenderTargetPixelsAsync=async function(A,z,G,W,B,at,xt){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let mt=Ft.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&xt!==void 0&&(mt=mt[xt]),mt){const dt=A.texture,Dt=dt.format,kt=dt.type;if(!Vt.textureFormatReadable(Dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Vt.textureTypeReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(z>=0&&z<=A.width-W&&G>=0&&G<=A.height-B){H.bindFramebuffer(D.FRAMEBUFFER,mt);const Pt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Pt),D.bufferData(D.PIXEL_PACK_BUFFER,at.byteLength,D.STREAM_READ),D.readPixels(z,G,W,B,Ht.convert(Dt),Ht.convert(kt),0);const ce=y!==null?Ft.get(y).__webglFramebuffer:null;H.bindFramebuffer(D.FRAMEBUFFER,ce);const ae=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Cg(D,ae,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Pt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,at),D.deleteBuffer(Pt),D.deleteSync(ae),at}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,z=null,G=0){A.isTexture!==!0&&(hl("WebGLRenderer: copyFramebufferToTexture function signature has changed."),z=arguments[0]||null,A=arguments[1]);const W=Math.pow(2,-G),B=Math.floor(A.image.width*W),at=Math.floor(A.image.height*W),xt=z!==null?z.x:0,mt=z!==null?z.y:0;C.setTexture2D(A,0),D.copyTexSubImage2D(D.TEXTURE_2D,G,0,0,xt,mt,B,at),H.unbindTexture()},this.copyTextureToTexture=function(A,z,G=null,W=null,B=0){A.isTexture!==!0&&(hl("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,A=arguments[1],z=arguments[2],B=arguments[3]||0,G=null);let at,xt,mt,dt,Dt,kt;G!==null?(at=G.max.x-G.min.x,xt=G.max.y-G.min.y,mt=G.min.x,dt=G.min.y):(at=A.image.width,xt=A.image.height,mt=0,dt=0),W!==null?(Dt=W.x,kt=W.y):(Dt=0,kt=0);const Pt=Ht.convert(z.format),ce=Ht.convert(z.type);C.setTexture2D(z,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,z.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,z.unpackAlignment);const ae=D.getParameter(D.UNPACK_ROW_LENGTH),Se=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Je=D.getParameter(D.UNPACK_SKIP_PIXELS),ee=D.getParameter(D.UNPACK_SKIP_ROWS),Ot=D.getParameter(D.UNPACK_SKIP_IMAGES),sn=A.isCompressedTexture?A.mipmaps[B]:A.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,sn.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,sn.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,mt),D.pixelStorei(D.UNPACK_SKIP_ROWS,dt),A.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,B,Dt,kt,at,xt,Pt,ce,sn.data):A.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,B,Dt,kt,sn.width,sn.height,Pt,sn.data):D.texSubImage2D(D.TEXTURE_2D,B,Dt,kt,at,xt,Pt,ce,sn),D.pixelStorei(D.UNPACK_ROW_LENGTH,ae),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Se),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Je),D.pixelStorei(D.UNPACK_SKIP_ROWS,ee),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ot),B===0&&z.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),H.unbindTexture()},this.copyTextureToTexture3D=function(A,z,G=null,W=null,B=0){A.isTexture!==!0&&(hl("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,W=arguments[1]||null,A=arguments[2],z=arguments[3],B=arguments[4]||0);let at,xt,mt,dt,Dt,kt,Pt,ce,ae;const Se=A.isCompressedTexture?A.mipmaps[B]:A.image;G!==null?(at=G.max.x-G.min.x,xt=G.max.y-G.min.y,mt=G.max.z-G.min.z,dt=G.min.x,Dt=G.min.y,kt=G.min.z):(at=Se.width,xt=Se.height,mt=Se.depth,dt=0,Dt=0,kt=0),W!==null?(Pt=W.x,ce=W.y,ae=W.z):(Pt=0,ce=0,ae=0);const Je=Ht.convert(z.format),ee=Ht.convert(z.type);let Ot;if(z.isData3DTexture)C.setTexture3D(z,0),Ot=D.TEXTURE_3D;else if(z.isDataArrayTexture||z.isCompressedArrayTexture)C.setTexture2DArray(z,0),Ot=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,z.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,z.unpackAlignment);const sn=D.getParameter(D.UNPACK_ROW_LENGTH),pe=D.getParameter(D.UNPACK_IMAGE_HEIGHT),li=D.getParameter(D.UNPACK_SKIP_PIXELS),as=D.getParameter(D.UNPACK_SKIP_ROWS),Fn=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,Se.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Se.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,dt),D.pixelStorei(D.UNPACK_SKIP_ROWS,Dt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,kt),A.isDataTexture||A.isData3DTexture?D.texSubImage3D(Ot,B,Pt,ce,ae,at,xt,mt,Je,ee,Se.data):z.isCompressedArrayTexture?D.compressedTexSubImage3D(Ot,B,Pt,ce,ae,at,xt,mt,Je,Se.data):D.texSubImage3D(Ot,B,Pt,ce,ae,at,xt,mt,Je,ee,Se),D.pixelStorei(D.UNPACK_ROW_LENGTH,sn),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,pe),D.pixelStorei(D.UNPACK_SKIP_PIXELS,li),D.pixelStorei(D.UNPACK_SKIP_ROWS,as),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Fn),B===0&&z.generateMipmaps&&D.generateMipmap(Ot),H.unbindTexture()},this.initRenderTarget=function(A){Ft.get(A).__webglFramebuffer===void 0&&C.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?C.setTextureCube(A,0):A.isData3DTexture?C.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?C.setTexture2DArray(A,0):C.setTexture2D(A,0),H.unbindTexture()},this.resetState=function(){E=0,w=0,y=null,H.reset(),le.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Bu?"display-p3":"srgb",e.unpackColorSpace=_e.workingColorSpace===Gl?"display-p3":"srgb"}}class Fm extends qe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _i,this.environmentIntensity=1,this.environmentRotation=new _i,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Gy{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=jh,this.updateRanges=[],this.version=0,this.uuid=dr()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,s=this.stride;i<s;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=dr()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=dr()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const gn=new U;class Pl{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)gn.fromBufferAttribute(this,e),gn.applyMatrix4(t),this.setXYZ(e,gn.x,gn.y,gn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)gn.fromBufferAttribute(this,e),gn.applyNormalMatrix(t),this.setXYZ(e,gn.x,gn.y,gn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)gn.fromBufferAttribute(this,e),gn.transformDirection(t),this.setXYZ(e,gn.x,gn.y,gn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=yi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Me(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Me(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Me(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Me(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Me(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=yi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=yi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=yi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=yi(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array),i=Me(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array),i=Me(i,this.array),s=Me(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return new Ye(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Pl(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Qi extends yr{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Gt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Es;const Mo=new U,bs=new U,Ts=new U,ws=new Yt,yo=new Yt,Bm=new ge,Ia=new U,Eo=new U,Ua=new U,pd=new Yt,Nc=new Yt,md=new Yt;class Dr extends qe{constructor(t=new Qi){if(super(),this.isSprite=!0,this.type="Sprite",Es===void 0){Es=new rn;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Gy(e,5);Es.setIndex([0,1,2,0,2,3]),Es.setAttribute("position",new Pl(n,3,0,!1)),Es.setAttribute("uv",new Pl(n,2,3,!1))}this.geometry=Es,this.material=t,this.center=new Yt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),bs.setFromMatrixScale(this.matrixWorld),Bm.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ts.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&bs.multiplyScalar(-Ts.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const o=this.center;Na(Ia.set(-.5,-.5,0),Ts,o,bs,i,s),Na(Eo.set(.5,-.5,0),Ts,o,bs,i,s),Na(Ua.set(.5,.5,0),Ts,o,bs,i,s),pd.set(0,0),Nc.set(1,0),md.set(1,1);let a=t.ray.intersectTriangle(Ia,Eo,Ua,!1,Mo);if(a===null&&(Na(Eo.set(-.5,.5,0),Ts,o,bs,i,s),Nc.set(0,1),a=t.ray.intersectTriangle(Ia,Ua,Eo,!1,Mo),a===null))return;const l=t.ray.origin.distanceTo(Mo);l<t.near||l>t.far||e.push({distance:l,point:Mo.clone(),uv:ri.getInterpolation(Mo,Ia,Eo,Ua,pd,Nc,md,new Yt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Na(r,t,e,n,i,s){ws.subVectors(r,e).addScalar(.5).multiply(n),i!==void 0?(yo.x=s*ws.x-i*ws.y,yo.y=i*ws.x+s*ws.y):yo.copy(ws),r.copy(t),r.x+=yo.x,r.y+=yo.y,r.applyMatrix4(Bm)}class Vy extends _n{constructor(t=null,e=1,n=1,i,s,o,a,l,c=Pn,h=Pn,u,f){super(null,o,a,l,c,h,i,s,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _d extends Ye{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const As=new ge,gd=new ge,Oa=[],vd=new rs,Wy=new ge,bo=new fe,To=new ss;class Xy extends fe{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new _d(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Wy)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new rs),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,As),vd.copy(t.boundingBox).applyMatrix4(As),this.boundingBox.union(vd)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ss),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,As),To.copy(t.boundingSphere).applyMatrix4(As),this.boundingSphere.union(To)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=t*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(bo.geometry=this.geometry,bo.material=this.material,bo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),To.copy(this.boundingSphere),To.applyMatrix4(n),t.ray.intersectsSphere(To)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,As),gd.multiplyMatrices(n,As),bo.matrixWorld=gd,bo.raycast(t,Oa);for(let o=0,a=Oa.length;o<a;o++){const l=Oa[o];l.instanceId=s,l.object=this,e.push(l)}Oa.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new _d(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Vy(new Float32Array(i*this.count),i,this.count,Uu,bi));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*t;s[l]=a,s.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class zm extends yr{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Gt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Dl=new U,Ll=new U,xd=new ge,wo=new zu,Fa=new ss,Oc=new U,Sd=new U;class Yy extends qe{constructor(t=new rn,e=new zm){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)Dl.fromBufferAttribute(e,i-1),Ll.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Dl.distanceTo(Ll);t.setAttribute("lineDistance",new Ge(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Fa.copy(n.boundingSphere),Fa.applyMatrix4(i),Fa.radius+=s,t.ray.intersectsSphere(Fa)===!1)return;xd.copy(i).invert(),wo.copy(t.ray).applyMatrix4(xd);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const d=Math.max(0,o.start),_=Math.min(h.count,o.start+o.count);for(let g=d,p=_-1;g<p;g+=c){const m=h.getX(g),S=h.getX(g+1),x=Ba(this,t,wo,l,m,S);x&&e.push(x)}if(this.isLineLoop){const g=h.getX(_-1),p=h.getX(d),m=Ba(this,t,wo,l,g,p);m&&e.push(m)}}else{const d=Math.max(0,o.start),_=Math.min(f.count,o.start+o.count);for(let g=d,p=_-1;g<p;g+=c){const m=Ba(this,t,wo,l,g,g+1);m&&e.push(m)}if(this.isLineLoop){const g=Ba(this,t,wo,l,_-1,d);g&&e.push(g)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Ba(r,t,e,n,i,s){const o=r.geometry.attributes.position;if(Dl.fromBufferAttribute(o,i),Ll.fromBufferAttribute(o,s),e.distanceSqToSegment(Dl,Ll,Oc,Sd)>n)return;Oc.applyMatrix4(r.matrixWorld);const l=t.ray.origin.distanceTo(Oc);if(!(l<t.near||l>t.far))return{distance:l,point:Sd.clone().applyMatrix4(r.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:r}}const Md=new U,yd=new U;class qy extends Yy{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,s=e.count;i<s;i+=2)Md.fromBufferAttribute(e,i),yd.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Md.distanceTo(yd);t.setAttribute("lineDistance",new Ge(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class km extends yr{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Gt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Ed=new ge,tu=new zu,za=new ss,ka=new U;class Hm extends qe{constructor(t=new rn,e=new km){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),za.copy(n.boundingSphere),za.applyMatrix4(i),za.radius+=s,t.ray.intersectsSphere(za)===!1)return;Ed.copy(i).invert(),tu.copy(t.ray).applyMatrix4(Ed);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let _=f,g=d;_<g;_++){const p=c.getX(_);ka.fromBufferAttribute(u,p),bd(ka,p,l,i,t,e,this)}}else{const f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let _=f,g=d;_<g;_++)ka.fromBufferAttribute(u,_),bd(ka,_,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function bd(r,t,e,n,i,s,o){const a=tu.distanceSqToPoint(r);if(a<e){const l=new U;tu.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class Wl extends _n{constructor(t,e,n,i,s,o,a,l,c){super(t,e,n,i,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Gu extends rn{constructor(t=1,e=1,n=1,i=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const h=[],u=[],f=[],d=[];let _=0;const g=[],p=n/2;let m=0;S(),o===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new Ge(u,3)),this.setAttribute("normal",new Ge(f,3)),this.setAttribute("uv",new Ge(d,2));function S(){const M=new U,E=new U;let w=0;const y=(e-t)/n;for(let R=0;R<=s;R++){const L=[],v=R/s,T=v*(e-t)+t;for(let I=0;I<=i;I++){const k=I/i,O=k*l+a,K=Math.sin(O),N=Math.cos(O);E.x=T*K,E.y=-v*n+p,E.z=T*N,u.push(E.x,E.y,E.z),M.set(K,y,N).normalize(),f.push(M.x,M.y,M.z),d.push(k,1-v),L.push(_++)}g.push(L)}for(let R=0;R<i;R++)for(let L=0;L<s;L++){const v=g[L][R],T=g[L+1][R],I=g[L+1][R+1],k=g[L][R+1];t>0&&(h.push(v,T,k),w+=3),e>0&&(h.push(T,I,k),w+=3)}c.addGroup(m,w,0),m+=w}function x(M){const E=_,w=new Yt,y=new U;let R=0;const L=M===!0?t:e,v=M===!0?1:-1;for(let I=1;I<=i;I++)u.push(0,p*v,0),f.push(0,v,0),d.push(.5,.5),_++;const T=_;for(let I=0;I<=i;I++){const O=I/i*l+a,K=Math.cos(O),N=Math.sin(O);y.x=L*N,y.y=p*v,y.z=L*K,u.push(y.x,y.y,y.z),f.push(0,v,0),w.x=K*.5+.5,w.y=N*.5*v+.5,d.push(w.x,w.y),_++}for(let I=0;I<i;I++){const k=E+I,O=T+I;M===!0?h.push(O,O+1,k):h.push(O+1,O,k),R+=3}c.addGroup(m,R,M===!0?1:2),m+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Gu(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Vu extends Gu{constructor(t=1,e=1,n=32,i=1,s=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,s,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Vu(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Wu extends rn{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const s=[],o=[];a(i),c(n),h(),this.setAttribute("position",new Ge(s,3)),this.setAttribute("normal",new Ge(s.slice(),3)),this.setAttribute("uv",new Ge(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(S){const x=new U,M=new U,E=new U;for(let w=0;w<e.length;w+=3)d(e[w+0],x),d(e[w+1],M),d(e[w+2],E),l(x,M,E,S)}function l(S,x,M,E){const w=E+1,y=[];for(let R=0;R<=w;R++){y[R]=[];const L=S.clone().lerp(M,R/w),v=x.clone().lerp(M,R/w),T=w-R;for(let I=0;I<=T;I++)I===0&&R===w?y[R][I]=L:y[R][I]=L.clone().lerp(v,I/T)}for(let R=0;R<w;R++)for(let L=0;L<2*(w-R)-1;L++){const v=Math.floor(L/2);L%2===0?(f(y[R][v+1]),f(y[R+1][v]),f(y[R][v])):(f(y[R][v+1]),f(y[R+1][v+1]),f(y[R+1][v]))}}function c(S){const x=new U;for(let M=0;M<s.length;M+=3)x.x=s[M+0],x.y=s[M+1],x.z=s[M+2],x.normalize().multiplyScalar(S),s[M+0]=x.x,s[M+1]=x.y,s[M+2]=x.z}function h(){const S=new U;for(let x=0;x<s.length;x+=3){S.x=s[x+0],S.y=s[x+1],S.z=s[x+2];const M=p(S)/2/Math.PI+.5,E=m(S)/Math.PI+.5;o.push(M,1-E)}_(),u()}function u(){for(let S=0;S<o.length;S+=6){const x=o[S+0],M=o[S+2],E=o[S+4],w=Math.max(x,M,E),y=Math.min(x,M,E);w>.9&&y<.1&&(x<.2&&(o[S+0]+=1),M<.2&&(o[S+2]+=1),E<.2&&(o[S+4]+=1))}}function f(S){s.push(S.x,S.y,S.z)}function d(S,x){const M=S*3;x.x=t[M+0],x.y=t[M+1],x.z=t[M+2]}function _(){const S=new U,x=new U,M=new U,E=new U,w=new Yt,y=new Yt,R=new Yt;for(let L=0,v=0;L<s.length;L+=9,v+=6){S.set(s[L+0],s[L+1],s[L+2]),x.set(s[L+3],s[L+4],s[L+5]),M.set(s[L+6],s[L+7],s[L+8]),w.set(o[v+0],o[v+1]),y.set(o[v+2],o[v+3]),R.set(o[v+4],o[v+5]),E.copy(S).add(x).add(M).divideScalar(3);const T=p(E);g(w,v+0,S,T),g(y,v+2,x,T),g(R,v+4,M,T)}}function g(S,x,M,E){E<0&&S.x===1&&(o[x]=S.x-1),M.x===0&&M.z===0&&(o[x]=E/2/Math.PI+.5)}function p(S){return Math.atan2(S.z,-S.x)}function m(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wu(t.vertices,t.indices,t.radius,t.details)}}class Xu extends Wu{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Xu(t.radius,t.detail)}}class Yu extends rn{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new U,f=new U,d=[],_=[],g=[],p=[];for(let m=0;m<=n;m++){const S=[],x=m/n;let M=0;m===0&&o===0?M=.5/e:m===n&&l===Math.PI&&(M=-.5/e);for(let E=0;E<=e;E++){const w=E/e;u.x=-t*Math.cos(i+w*s)*Math.sin(o+x*a),u.y=t*Math.cos(o+x*a),u.z=t*Math.sin(i+w*s)*Math.sin(o+x*a),_.push(u.x,u.y,u.z),f.copy(u).normalize(),g.push(f.x,f.y,f.z),p.push(w+M,1-x),S.push(c++)}h.push(S)}for(let m=0;m<n;m++)for(let S=0;S<e;S++){const x=h[m][S+1],M=h[m][S],E=h[m+1][S],w=h[m+1][S+1];(m!==0||o>0)&&d.push(x,M,w),(m!==n-1||l<Math.PI)&&d.push(M,E,w)}this.setIndex(d),this.setAttribute("position",new Ge(_,3)),this.setAttribute("normal",new Ge(g,3)),this.setAttribute("uv",new Ge(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yu(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Il extends rn{constructor(t=1,e=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],l=[],c=[],h=new U,u=new U,f=new U;for(let d=0;d<=n;d++)for(let _=0;_<=i;_++){const g=_/i*s,p=d/n*Math.PI*2;u.x=(t+e*Math.cos(p))*Math.cos(g),u.y=(t+e*Math.cos(p))*Math.sin(g),u.z=e*Math.sin(p),a.push(u.x,u.y,u.z),h.x=t*Math.cos(g),h.y=t*Math.sin(g),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(_/i),c.push(d/n)}for(let d=1;d<=n;d++)for(let _=1;_<=i;_++){const g=(i+1)*d+_-1,p=(i+1)*(d-1)+_-1,m=(i+1)*(d-1)+_,S=(i+1)*d+_;o.push(g,p,S),o.push(p,m,S)}this.setIndex(o),this.setAttribute("position",new Ge(a,3)),this.setAttribute("normal",new Ge(l,3)),this.setAttribute("uv",new Ge(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Il(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Qr extends yr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Gt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vm,this.normalScale=new Yt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _i,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class $y extends Qr{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Yt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return bn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Gt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Gt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Gt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class qu extends qe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Gt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Ky extends qu{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(qe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Gt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Fc=new ge,Td=new U,wd=new U;class Gm{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Yt(512,512),this.map=null,this.mapPass=null,this.matrix=new ge,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ku,this._frameExtents=new Yt(1,1),this._viewportCount=1,this._viewports=[new ye(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Td.setFromMatrixPosition(t.matrixWorld),e.position.copy(Td),wd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(wd),e.updateMatrixWorld(),Fc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Fc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Ad=new ge,Ao=new U,Bc=new U;class jy extends Gm{constructor(){super(new Vn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Yt(4,2),this._viewportCount=6,this._viewports=[new ye(2,1,1,1),new ye(0,1,1,1),new ye(3,1,1,1),new ye(1,1,1,1),new ye(3,0,1,1),new ye(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Ao.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ao),Bc.copy(n.position),Bc.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Bc),n.updateMatrixWorld(),i.makeTranslation(-Ao.x,-Ao.y,-Ao.z),Ad.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ad)}}class Zy extends qu{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new jy}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Jy extends Gm{constructor(){super(new Dm(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Rd extends qu{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(qe.DEFAULT_UP),this.updateMatrix(),this.target=new qe,this.shadow=new Jy}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Qy{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Cd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Cd();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Cd(){return performance.now()}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Pu}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Pu);class t1 extends Fm{constructor(){super();const t=new os;t.deleteAttribute("uv");const e=new Qr({side:wn}),n=new Qr,i=new Zy(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);const s=new fe(t,e);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);const o=new fe(t,n);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);const a=new fe(t,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);const l=new fe(t,n);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);const c=new fe(t,n);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);const h=new fe(t,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);const u=new fe(t,n);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);const f=new fe(t,Rs(50));f.position.set(-16.116,14.37,8.208),f.scale.set(.1,2.428,2.739),this.add(f);const d=new fe(t,Rs(50));d.position.set(-16.109,18.021,-8.207),d.scale.set(.1,2.425,2.751),this.add(d);const _=new fe(t,Rs(17));_.position.set(14.904,12.198,-1.832),_.scale.set(.15,4.265,6.331),this.add(_);const g=new fe(t,Rs(43));g.position.set(-.462,8.89,14.52),g.scale.set(4.38,5.441,.088),this.add(g);const p=new fe(t,Rs(20));p.position.set(3.235,11.486,-12.541),p.scale.set(2.5,2,.1),this.add(p);const m=new fe(t,Rs(100));m.position.set(0,20,0),m.scale.set(1,.1,1),this.add(m)}dispose(){const t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(const e of t)e.dispose()}}function Rs(r){const t=new Gr;return t.color.setScalar(r),t}const Ro=new U;function ti(r,t,e,n,i,s){const o=2*Math.PI*i/4,a=Math.max(s-2*i,0),l=Math.PI/4;Ro.copy(t),Ro[n]=0,Ro.normalize();const c=.5*o/(o+a),h=1-Ro.angleTo(r)/l;return Math.sign(Ro[e])===1?h*c:a/(o+a)+c+c*(1-h)}class e1 extends os{constructor(t=1,e=1,n=1,i=2,s=.1){if(i=i*2+1,s=Math.min(t/2,e/2,n/2,s),super(1,1,1,i,i,i),i===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const a=new U,l=new U,c=new U(t,e,n).divideScalar(2).subScalar(s),h=this.attributes.position.array,u=this.attributes.normal.array,f=this.attributes.uv.array,d=h.length/6,_=new U,g=.5/i;for(let p=0,m=0;p<h.length;p+=3,m+=2)switch(a.fromArray(h,p),l.copy(a),l.x-=Math.sign(l.x)*g,l.y-=Math.sign(l.y)*g,l.z-=Math.sign(l.z)*g,l.normalize(),h[p+0]=c.x*Math.sign(a.x)+l.x*s,h[p+1]=c.y*Math.sign(a.y)+l.y*s,h[p+2]=c.z*Math.sign(a.z)+l.z*s,u[p+0]=l.x,u[p+1]=l.y,u[p+2]=l.z,Math.floor(p/d)){case 0:_.set(1,0,0),f[m+0]=ti(_,l,"z","y",s,n),f[m+1]=1-ti(_,l,"y","z",s,e);break;case 1:_.set(-1,0,0),f[m+0]=1-ti(_,l,"z","y",s,n),f[m+1]=1-ti(_,l,"y","z",s,e);break;case 2:_.set(0,1,0),f[m+0]=1-ti(_,l,"x","z",s,t),f[m+1]=ti(_,l,"z","x",s,n);break;case 3:_.set(0,-1,0),f[m+0]=1-ti(_,l,"x","z",s,t),f[m+1]=1-ti(_,l,"z","x",s,n);break;case 4:_.set(0,0,1),f[m+0]=1-ti(_,l,"x","y",s,t),f[m+1]=1-ti(_,l,"y","x",s,e);break;case 5:_.set(0,0,-1),f[m+0]=ti(_,l,"x","y",s,t),f[m+1]=1-ti(_,l,"y","x",s,e);break}}}const n1=[["INV","Invoice"],["PO","Purchase Order"],["GRN","Goods Receipt Note"],["WO","Work Order"],["BOM","Bill of Materials"],["CN","Credit Note"],["SO","Sales Order"],["QC","Quality Check"],["ASN","Advance Ship Notice"],["RMA","Return Authorization"],["LOT","Lot Record"],["COST","Cost Sheet"],["MFG","Manufacturing Record"],["PACK","Packing List"],["TAX","Tax Document"],["SHIP","Shipping Manifest"],["AP","AP Ledger"]];function Pd(r,t,e,n,i,s){r.beginPath(),r.moveTo(t+s,e),r.arcTo(t+n,e,t+n,e+i,s),r.arcTo(t+n,e+i,t,e+i,s),r.arcTo(t,e+i,t,e,s),r.arcTo(t,e,t+n,e,s),r.closePath()}function Vm(){return n1.map(([r,t],e)=>{const n=document.createElement("canvas");n.width=256,n.height=320;const i=n.getContext("2d");i.fillStyle="#ffffff",i.fillRect(0,0,256,320),i.fillStyle="rgba(98,188,241,0.13)",i.fillRect(0,0,256,62),i.fillStyle="#013d7c",i.font='800 42px "Segoe UI", Arial, sans-serif',i.fillText(r,20,108),i.fillStyle="rgba(24,40,60,0.55)",i.font='600 16px "Segoe UI", Arial, sans-serif',i.fillText(t,20,138),i.fillStyle="#ffc000",Pd(i,192,18,46,26,7),i.fill(),i.fillStyle="#013d7c",i.font="800 12px Arial, sans-serif",i.fillText("DOC",203,36);for(let o=0;o<4;o++)i.fillStyle="rgba(24,40,60,0.12)",Pd(i,20,168+o*26,120+(e*37+o*53)%96,10,5),i.fill();i.fillStyle="rgba(98,188,241,0.22)",i.fillRect(0,288,256,32),i.fillStyle="#2e8fd0",i.font="700 13px Consolas, monospace",i.fillText(`FB-2025-${1e3+e*73}`,20,309);const s=new Wl(n);return s.colorSpace=Rn,s.anisotropy=4,s})}function Xl(r){let t=r>>>0;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}const i1=r=>Math.min(1,Math.max(0,r));function r1(r){if(r.dataset.split)return r.querySelectorAll(".char");const t=r.textContent;r.setAttribute("aria-label",t.trim());const e=document.createDocumentFragment();return t.split(/(\s+)/).forEach(n=>{if(!n)return;if(/^\s+$/.test(n)){e.appendChild(document.createTextNode(" "));return}const i=document.createElement("span");i.className="word",i.setAttribute("aria-hidden","true");for(const s of n){const o=document.createElement("span");o.className="char",o.textContent=s,i.appendChild(o)}e.appendChild(i)}),r.textContent="",r.appendChild(e),r.dataset.split="1",r.querySelectorAll(".char")}const Dd=22,s1=6,Ld=15,zc=new U(0,.6,0);class o1{constructor(t){this.params={gather:0,ambient:0,fade:1},this.group=new or,t.add(this.group);const e=Xl(20251),n=Vm(),i=new e1(1.05,1.32,.05,3,.07),s=new uo(.97,1.24);this.cards=[];for(let o=0;o<Dd;o++){const a=new or,l=new Qr({color:16777215,roughness:.32,metalness:.06,transparent:!0}),c=new Qr({map:n[o%n.length],roughness:.5,metalness:0,transparent:!0}),h=new fe(i,l),u=new fe(s,c);u.position.z=.026;const f=c.clone(),d=new fe(s,f);d.position.z=-.026,d.rotation.y=Math.PI,a.add(h,u,d),this.group.add(a),this.cards.push({holder:a,mats:[l,c,f],x0:(e()-.5)*16,z0:-3.8+e()*5.6,speed:.22+e()*.34,phase:e(),baseScale:.78+e()*.5,rot:new _i((e()-.5)*.5,(e()-.5)*.9,(e()-.5)*.3),rotSpeed:new U((e()-.5)*.3,(e()-.5)*.5,(e()-.5)*.2),gatherDelay:o/Dd*.42,spin:e()*Math.PI*2,ambient:o<s1?{x:(e()-.5)*19,y:(e()-.5)*7,z:-6.5-e()*2.5,bob:e()*Math.PI*2}:null})}this._free=new U,this._target=new U}update(t){const{gather:e,ambient:n,fade:i}=this.params;for(let s=0;s<this.cards.length;s++){const o=this.cards[s],a=o.holder,l=7.5-(o.phase*Ld+t*o.speed*2.2)%Ld;this._free.set(o.x0+Math.sin(t*.3+s*1.7)*.45,l,o.z0);const c=i1((e*1.45-o.gatherDelay)/1),h=c*c*(3-2*c);let u=i,f=o.baseScale*(1-h);if(h>0){const _=o.spin+h*5,g=(1-h)*1.6;this._target.set(zc.x+Math.cos(_)*g,zc.y+Math.sin(_)*g*.55,zc.z+(1-h)*.8),this._free.lerp(this._target,h),u*=1-h*.3}if(o.ambient&&n>.01){const _=o.ambient,g=_.x+Math.sin(t*.12+_.bob)*.8,p=_.y+Math.sin(t*.18+_.bob*2)*.5;this._free.lerp(this._target.set(g,p,_.z),n*h),u=i*Math.max(u/i||0,.34*n*h),f=Math.max(f,o.baseScale*1.25*n*h)}a.position.copy(this._free),a.rotation.set(o.rot.x+t*o.rotSpeed.x+h*2.2,o.rot.y+t*o.rotSpeed.y,o.rot.z+t*o.rotSpeed.z),a.scale.setScalar(Math.max(f,1e-4));const d=u>.02&&f>.02;if(a.visible=d,d)for(const _ of o.mats)_.opacity=u}}}const tr=new Gt(98/255,188/255,241/255),Id=new Gt(3051472),a1=new Gt(1/255,61/255,124/255),Co=new Gt(1,192/255,0),un=36,kc=["Prompt","Synthesize","Validate","Deploy"],l1=[new U(0,.55,.18),new U(0,-.45,-.22),new U(0,.5,.12)],Cs=[{link:0,t:.5,off:[-.5,-1.7,.5]},{link:1,t:.3,off:[.3,-2,-.5]},{link:1,t:.72,off:[.6,-1.6,.4]},{link:2,t:.38,off:[-.4,-2.1,-.4]},{link:2,t:.8,off:[.5,-1.8,.5]}],de=new U,Ud=new U,Ps=new U,Zi=new U,Ha=new U,Nd=new ge,Od=new U,Fd=new ho,Wm=new U(0,0,1);function Ga(r,t){const e=document.createElement("canvas");e.width=e.height=128;const n=e.getContext("2d"),i=n.createRadialGradient(64,64,2,64,64,62);i.addColorStop(0,r),i.addColorStop(.4,t),i.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=i,n.fillRect(0,0,128,128);const s=new Wl(e);return s.colorSpace=Rn,s}function c1(){const r=document.createElement("canvas");r.width=r.height=256;const t=r.getContext("2d");t.strokeStyle="rgba(255,192,0,0.95)",t.lineWidth=10,t.shadowColor="rgba(255,192,0,0.9)",t.shadowBlur=22,t.beginPath(),t.arc(128,128,96,0,Math.PI*2),t.stroke();const e=new Wl(r);return e.colorSpace=Rn,e}function Bd(r,t="#013d7c",e="#ffffff"){const n=document.createElement("canvas");n.width=320,n.height=112;const i=n.getContext("2d");i.clearRect(0,0,n.width,n.height),i.fillStyle=t,i.shadowColor="rgba(1,61,124,0.24)",i.shadowBlur=18,i.beginPath(),i.roundRect(22,24,276,64,18),i.fill(),i.shadowBlur=0,i.fillStyle=e,i.font='800 25px "Segoe UI", Arial, sans-serif',i.textAlign="center",i.textBaseline="middle",i.fillText(r,160,57);const s=new Wl(n);return s.colorSpace=Rn,s}class h1{constructor(t,{tubular:e=22,radial:n=7,radius:i=.04,color:s=tr,opacity:o=1,emissiveIntensity:a=.35}){this.tubular=e,this.radial=n,this.radius=i,this.draw=0;const l=(e+1)*(n+1),c=new rn;c.setAttribute("position",new Ye(new Float32Array(l*3),3)),c.setAttribute("normal",new Ye(new Float32Array(l*3),3));const h=[];for(let u=0;u<e;u++)for(let f=0;f<n;f++){const d=u*(n+1)+f,_=d+n+1;h.push(d,_,d+1,_,_+1,d+1)}c.setIndex(h),this.mat=new Qr({color:s.clone(),roughness:.35,metalness:0,emissive:s.clone(),emissiveIntensity:a,transparent:!0,opacity:o}),this.mesh=new fe(c,this.mat),this.mesh.frustumCulled=!1,this.mesh.visible=!1,t.add(this.mesh)}update(t){if(this.draw<=.003){this.mesh.visible=!1;return}this.mesh.visible=!0;const{tubular:e,radial:n}=this,i=this.mesh.geometry.attributes.position.array,s=this.mesh.geometry.attributes.normal.array,o=this.draw;let a=0;for(let l=0;l<=e;l++){const c=l/e*o;t(c,de),t(Math.min(c+.012,o),Ud),Ps.subVectors(Ud,de),Ps.lengthSq()<1e-10&&Ps.set(1,0,0),Ps.normalize(),Zi.crossVectors(Ps,Wm),Zi.lengthSq()<1e-6&&Zi.set(0,1,0),Zi.normalize(),Ha.crossVectors(Ps,Zi).normalize();const h=Math.min(1,l*.4,(e-l)*.4),u=this.radius*h*Math.min(1,o*5);for(let f=0;f<=n;f++){const d=f/n*Math.PI*2,_=Math.cos(d),g=Math.sin(d),p=Zi.x*_+Ha.x*g,m=Zi.y*_+Ha.y*g,S=Zi.z*_+Ha.z*g;s[a]=p,i[a++]=de.x+p*u,s[a]=m,i[a++]=de.y+m*u,s[a]=S,i[a++]=de.z+S*u}}this.mesh.geometry.attributes.position.needsUpdate=!0,this.mesh.geometry.attributes.normal.needsUpdate=!0}}class u1{constructor(t){this.group=new or,t.add(this.group),this.params={scale:0,labelAlpha:0,jitter:0,flowSpeed:1,particleAlpha:0,glowBoost:0,methodSignal:0,riskSignal:0,repairSignal:0,confidenceSignal:0},this.flowT=0,this.layouts=f1();const e=this.layouts.workflow;this.hubPos=e.hubs.map(E=>({x:E[0],y:E[1],z:E[2]})),this.satPos=e.sats.map(E=>({x:E[0],y:E[1],z:E[2]})),this.hubScale=kc.map(()=>({v:0})),this.hubActive=kc.map(()=>({v:0})),this.satScl=this.satPos.map(()=>({v:0}));const n=Xl(99);this.satSize=this.satPos.map(()=>.055+n()*.055);const i=new Yu(.19,32,24),s=Ga("rgba(255,255,255,0.95)","rgba(98,188,241,0.55)");this.hubMeshes=[],this.hubGlows=[];for(let E=0;E<4;E++){const w=new $y({color:16777215,roughness:.16,metalness:.05,clearcoat:1,clearcoatRoughness:.25,emissive:tr.clone(),emissiveIntensity:.12}),y=new fe(i,w);this.group.add(y),this.hubMeshes.push(y);const R=new Dr(new Qi({map:s,transparent:!0,opacity:.4,depthWrite:!1}));R.scale.setScalar(1.1),this.group.add(R),this.hubGlows.push(R)}const o=new Xu(1,0),a=new Qr({color:16777215,roughness:.3,metalness:.15,flatShading:!0});this.satMesh=new Xy(o,a,un),this.satMesh.frustumCulled=!1;const l=new Gt;for(let E=0;E<un;E++){const w=n();l.copy(w<.62?tr:w<.88?a1:Co),this.satMesh.setColorAt(E,l)}this.group.add(this.satMesh);const c=E=>w=>w.set(this.hubPos[E].x,this.hubPos[E].y,this.hubPos[E].z),h=E=>w=>w.set(this.satPos[E].x,this.satPos[E].y,this.satPos[E].z),u=(E,w,y,R)=>{const L=new h1(this.group,R),v=new U,T=new U,I=new U;return{tube:L,point:(O,K)=>{E(v),w(T),I.set((v.x+T.x)/2+y.x,(v.y+T.y)/2+y.y,(v.z+T.z)/2+y.z);const N=1-O;K.set(N*N*v.x+2*N*O*I.x+O*O*T.x,N*N*v.y+2*N*O*I.y+O*O*T.y,N*N*v.z+2*N*O*I.z+O*O*T.z)}}};this.chain=[];for(let E=0;E<3;E++)this.chain.push(u(c(E),c(E+1),l1[E],{radius:.05,tubular:26,color:tr,emissiveIntensity:.4}));this.spokes=[];for(let E=0;E<un;E++){const w=new U((n()-.5)*.3,(n()-.5)*.3,(n()-.5)*.3);this.spokes.push(u(h(E),c(E%4),w,{radius:.013,tubular:14,radial:5,color:tr,opacity:.5,emissiveIntensity:.25}))}this.threads=[];for(let E=0;E<14;E++){let w=Math.floor(n()*un),y=Math.floor(n()*un);w===y&&(y=(y+7)%un);const R=new U((n()-.5)*.6,(n()-.5)*.6,.3+n()*.4);this.threads.push(u(h(w),h(y),R,{radius:.011,tubular:16,radial:5,color:Id,opacity:.55,emissiveIntensity:.3}))}const f=(E,w,y)=>this.chain[E].point(w,y);this.branches=Cs.map(E=>{const w=L=>f(E.link,E.t,L),y=L=>{f(E.link,E.t,L),L.x+=E.off[0],L.y+=E.off[1],L.z+=E.off[2]},R=new U(E.off[0]*.2,E.off[1]*.12-.25,E.off[2]*.2);return u(w,y,R,{radius:.032,tubular:18,color:Co,emissiveIntensity:.6})}),this.arcs=[];for(let E=0;E<un;E++)this.arcs.push(u(h(E),h((E+1)%un),new U(0,0,0),{radius:.026,tubular:8,radial:5,color:tr,emissiveIntensity:.5}));const d=Ga("rgba(255,236,170,1)","rgba(255,192,0,0.7)");this.flares=Cs.map(()=>{const E=new Dr(new Qi({map:d,color:Co.clone(),transparent:!0,opacity:0,depthWrite:!1}));return E.scale.setScalar(.001),this.group.add(E),{state:{v:0},sprite:E}}),this.pulses=Cs.map(()=>({t:0,on:0})),this.pulseSprites=Cs.map(()=>{const E=new Dr(new Qi({map:d,color:16777215,transparent:!0,opacity:0,depthWrite:!1}));return E.scale.setScalar(.001),this.group.add(E),E}),this.runner={t:0,on:0},this.runnerSprite=new Dr(new Qi({map:Ga("rgba(255,255,255,1)","rgba(255,210,80,0.8)"),transparent:!0,opacity:0,depthWrite:!1})),this.runnerSprite.scale.setScalar(.001),this.group.add(this.runnerSprite),this.stamp={s:0,a:0},this.stampSprite=new Dr(new Qi({map:c1(),transparent:!0,opacity:0,depthWrite:!1})),this.stampSprite.position.set(0,.65,.3),this.group.add(this.stampSprite);const _=Vm(),g=new uo(.46,.58);this.evidenceDocs=Array.from({length:7},(E,w)=>{const y=new fe(g,new Gr({map:_[w*2%_.length],transparent:!0,opacity:0,depthWrite:!1,side:Mi}));return y.renderOrder=4,this.group.add(y),y});const p=new Vu(.16,.44,5),m=new Gr({color:Co.clone(),transparent:!0,opacity:0,depthWrite:!1});this.riskBeacons=Cs.map(()=>{const E=new fe(p,m.clone());return E.renderOrder=5,this.group.add(E),E}),this.riskBadges=["Entry","Template","Fields","State","Output"].map(E=>{const w=new Dr(new Qi({map:Bd(E,"rgba(255,192,0,0.96)","#013d7c"),transparent:!0,opacity:0,depthWrite:!1}));return w.renderOrder=6,this.group.add(w),w});const S=new Il(.34,.018,8,64);this.repairRings=Cs.map(()=>{const E=new fe(S,new Gr({color:tr.clone(),transparent:!0,opacity:0,depthWrite:!1}));return E.renderOrder=4,this.group.add(E),E}),this.confidenceRings=[1.8,2.25,2.7].map((E,w)=>{const y=new fe(new Il(E,.018+w*.004,10,96),new Gr({color:w===1?Co.clone():tr.clone(),transparent:!0,opacity:0,depthWrite:!1}));return y.position.set(0,.65,.12+w*.04),y.renderOrder=3,this.group.add(y),y}),this.confidenceBadge=new Dr(new Qi({map:Bd("Auditable confidence","rgba(1,61,124,0.9)","#ffffff"),transparent:!0,opacity:0,depthWrite:!1})),this.confidenceBadge.position.set(0,.65,1.1),this.confidenceBadge.scale.set(2.4,.84,1),this.group.add(this.confidenceBadge);const x=48;this.pGeo=new rn,this.pGeo.setAttribute("position",new Ye(new Float32Array(x*3),3)),this.pLink=new Uint8Array(x),this.pOff=new Float32Array(x),this.pSpd=new Float32Array(x);for(let E=0;E<x;E++)this.pLink[E]=E%3,this.pOff[E]=n(),this.pSpd[E]=.1+n()*.14;this.points=new Hm(this.pGeo,new km({map:Ga("rgba(255,255,255,1)","rgba(46,143,208,0.85)"),color:Id,size:.16,sizeAttenuation:!0,transparent:!0,opacity:0,depthWrite:!1})),this.points.frustumCulled=!1,this.group.add(this.points);const M=document.getElementById("hub-labels");this.labels=kc.map(E=>{const w=document.createElement("div");return w.className="hub-label",w.textContent=E,w.style.opacity="0",M.appendChild(w),w})}update(t,e,n,i){const s=this.params;this.group.visible=s.scale>.002,this.group.scale.setScalar(Math.max(s.scale,1e-4)),this.flowT+=t*s.flowSpeed;for(let u=0;u<4;u++){const f=this.hubPos[u],d=Math.sin(e*11+u*13.7)*s.jitter*.08,_=Math.cos(e*13+u*7.3)*s.jitter*.08,g=this.hubMeshes[u];g.position.set(f.x+d,f.y+_,f.z);const p=this.hubActive[u].v,m=this.hubScale[u].v*(1+.45*p)*(1+Math.sin(e*2.4+u)*.025);g.scale.setScalar(Math.max(m,1e-4)),g.visible=m>.01,g.material.emissiveIntensity=.12+p*.5+s.glowBoost*.4;const S=this.hubGlows[u];S.position.copy(g.position),S.scale.setScalar(Math.max(1.05*m*(1+p*.5),1e-4)),S.material.opacity=(.34+p*.45+s.glowBoost*.5)*Math.min(m,1),S.visible=g.visible}for(let u=0;u<un;u++){const f=this.satPos[u],d=Math.sin(e*9+u*3.1)*s.jitter*.1,_=Math.cos(e*8+u*5.7)*s.jitter*.1,g=Math.sin(e*.9+u*1.3)*.04;Od.setScalar(Math.max(this.satScl[u].v*this.satSize[u],1e-4)),Fd.setFromAxisAngle(Wm,e*.4+u),Nd.compose(de.set(f.x+d,f.y+_+g,f.z),Fd,Od),this.satMesh.setMatrixAt(u,Nd)}if(this.satMesh.instanceMatrix.needsUpdate=!0,this.group.visible){for(const u of this.chain)u.tube.update(u.point);for(const u of this.spokes)u.tube.update(u.point);for(const u of this.threads)u.tube.update(u.point);for(const u of this.branches)u.tube.update(u.point);for(const u of this.arcs)u.tube.update(u.point)}const o=s.particleAlpha;if(this.points.visible=o>.02&&this.group.visible,this.points.visible){const u=this.pGeo.attributes.position.array;for(let f=0;f<this.pLink.length;f++){const d=(this.pOff[f]+this.flowT*this.pSpd[f])%1;this.chain[this.pLink[f]].point(d,de),u[f*3]=de.x,u[f*3+1]=de.y+Math.sin(e*3+f)*.03,u[f*3+2]=de.z+.08}this.pGeo.attributes.position.needsUpdate=!0,this.points.material.opacity=o}for(let u=0;u<this.flares.length;u++){const f=this.flares[u],d=f.state.v;f.sprite.visible=d>.01&&this.group.visible,f.sprite.visible&&(this.branches[u].point(0,de),f.sprite.position.copy(de),f.sprite.scale.setScalar(d*(.85+Math.sin(e*5+u*2)*.12)),f.sprite.material.opacity=Math.min(1,d))}for(let u=0;u<this.pulses.length;u++){const f=this.pulses[u],d=this.pulseSprites[u];d.visible=f.on>.01&&this.group.visible,d.visible&&(this.branches[u].point(Math.max(0,1-f.t),de),d.position.copy(de),d.scale.setScalar(.5*f.on),d.material.opacity=f.on)}if(this.runnerSprite.visible=this.runner.on>.01&&this.group.visible,this.runnerSprite.visible){const u=Math.min(this.runner.t,.999)*3,f=Math.min(2,Math.floor(u));this.chain[f].point(u-f,de),this.runnerSprite.position.copy(de),this.runnerSprite.scale.setScalar(.6*this.runner.on),this.runnerSprite.material.opacity=this.runner.on}this.stampSprite.visible=this.stamp.a>.01&&this.group.visible,this.stampSprite.visible&&(this.stampSprite.scale.setScalar(Math.max(this.stamp.s*4.6,.001)),this.stampSprite.material.opacity=this.stamp.a);const a=s.methodSignal*(this.group.visible?1:0);for(let u=0;u<this.evidenceDocs.length;u++){const f=this.evidenceDocs[u];if(f.visible=a>.02,f.visible){const _=(e*.11+u/this.evidenceDocs.length)%1*3,g=Math.min(2,Math.floor(_));this.chain[g].point(_-g,de),f.position.set(de.x,de.y+Math.sin(e*2.2+u)*.14,de.z+.58),f.rotation.set(-.22+Math.sin(e+u)*.04,.2,Math.sin(e*.7+u)*.2),f.scale.setScalar(.75+Math.sin(e*1.7+u)*.06),f.material.opacity=a*(.46+u%3*.12)}}const l=s.riskSignal*(this.group.visible?1:0);for(let u=0;u<this.riskBeacons.length;u++){const f=this.riskBeacons[u],d=this.riskBadges[u],_=.75+Math.sin(e*5.2+u*.85)*.25;f.visible=l>.02,d.visible=l>.02,f.visible&&(this.branches[u].point(1,de),f.position.copy(de),f.position.z+=.26+_*.08,f.rotation.set(Math.PI,0,e*1.4+u),f.scale.setScalar(.85+_*.45),f.material.opacity=l*(.56+_*.34),d.position.set(de.x,de.y+.62,de.z+.78),d.scale.set(1.1,.38,1),d.material.opacity=l*.86)}const c=s.repairSignal*(this.group.visible?1:0);for(let u=0;u<this.repairRings.length;u++){const f=this.repairRings[u];if(f.visible=c>.02,f.visible){this.branches[u].point(.62,de);const d=1+Math.sin(e*4+u)*.18;f.position.copy(de),f.position.z+=.2,f.rotation.set(Math.PI/2,0,e*1.6+u),f.scale.setScalar((1.24+u*.05)*d),f.material.opacity=c*(.78+Math.sin(e*3+u)*.18)}}const h=s.confidenceSignal*(this.group.visible?1:0);for(let u=0;u<this.confidenceRings.length;u++){const f=this.confidenceRings[u];f.visible=h>.02,f.visible&&(f.rotation.set(Math.PI/2+Math.sin(e*.4+u)*.08,e*.12,e*(.18+u*.08)),f.scale.setScalar(1+Math.sin(e*1.1+u)*.025),f.material.opacity=h*(.42+u*.12))}this.confidenceBadge.visible=h>.02,this.confidenceBadge.visible&&(this.confidenceBadge.position.y=.65+Math.sin(e*1.2)*.06,this.confidenceBadge.material.opacity=h*.9);for(let u=0;u<4;u++){const f=this.labels[u],d=s.labelAlpha*this.hubScale[u].v*(this.group.visible?1:0);if(d<.02){f.style.opacity="0";continue}if(this.hubMeshes[u].getWorldPosition(de).project(n),de.z>1){f.style.opacity="0";continue}const _=(de.x+1)/2*i.vw,g=(1-de.y)/2*i.vh;f.style.opacity=String(d),f.style.transform=`translate3d(${_.toFixed(1)}px, ${g.toFixed(1)}px, 0) translate(-50%, -160%)`,f.classList.toggle("active",this.hubActive[u].v>.5)}}}function f1(){const r=Xl(777),t={},e=[[-4.2,.7,0],[-1.4,.7,0],[1.4,.7,0],[4.2,.7,0]];t.workflow={hubs:e,sats:Array.from({length:un},(o,a)=>{const l=e[a%4],c=r()*Math.PI*2,h=.5+r()*.6;return[l[0]+Math.cos(c)*h,l[1]+Math.sin(c)*h*.65,(r()-.5)*1.4]})},t.method={hubs:[[-3.6,2.1,-.2],[3.6,2.1,-.2],[-3.6,-1.1,-.2],[3.6,-1.1,-.2]],sats:Array.from({length:un},()=>[-4.2+r()*8.4,-1.5+r()*3.9,(r()-.5)*.5])},t.risk={hubs:[[-4.2,1.05,0],[-1.4,.35,0],[1.4,1.15,0],[4.2,.45,0]],sats:Array.from({length:un},(o,a)=>a<24?[-4.2+r()*8.4,.6+(r()-.5)*1.6,(r()-.5)*1.4]:[(r()-.5)*8,-1.6-r()*1.2,(r()-.5)*1.6])};const n=0,i=.65,s=1.95;return t.impact={hubs:[45,135,225,315].map(o=>{const a=o*Math.PI/180;return[n+Math.cos(a)*s,i+Math.sin(a)*s*.92,0]}),sats:Array.from({length:un},(o,a)=>{const l=a/un*Math.PI*2,c=s+(r()-.5)*.12;return[n+Math.cos(l)*c,i+Math.sin(l)*c*.92,(r()-.5)*.25]})},t.bloom={hubs:[0,90,180,270].map(o=>{const a=o*Math.PI/180;return[Math.cos(a)*.5,.9+Math.sin(a)*.5,0]}),sats:Array.from({length:un},(o,a)=>{const l=a/un*Math.PI*2+(r()-.5)*.4,c=5.5+r()*4;return[Math.cos(l)*c,.8+Math.sin(l)*c*.7,(r()-.5)*3.5]})},t}const d1=new Gt(98/255,188/255,241/255),zd=new Gt(3051472),p1=new Gt(1/255,61/255,124/255),Va=new Gt(1,192/255,0),fi=150,kd=320,Hd=5.4,m1=Hd*Hd,Hc=-11,eu=6,_1=eu*eu,Gc=2.2,Vc=.9,g1=Math.min(window.devicePixelRatio||1,1.75),Wc=new U;class v1{constructor(t){this.group=new or,this.group.renderOrder=-1,t.add(this.group);const e=Xl(7321);this.n=fi,this.home=new Float32Array(fi*3),this.pos=new Float32Array(fi*3),this.vel=new Float32Array(fi*3),this.phase=new Float32Array(fi),this.baseCol=new Float32Array(fi*3),this.baseSize=new Float32Array(fi);const n=new Float32Array(fi*3),i=new Float32Array(fi),s=new Float32Array(fi),o=new Gt;for(let l=0;l<fi;l++){const c=(e()-.5)*60,h=(e()-.5)*34,u=Hc+(e()-.5)*16;this.home[l*3]=c,this.home[l*3+1]=h,this.home[l*3+2]=u,this.pos[l*3]=c,this.pos[l*3+1]=h,this.pos[l*3+2]=u,this.phase[l]=e()*Math.PI*2;const f=e();o.copy(f<.55?d1:f<.8?zd:f<.93?p1:Va),this.baseCol[l*3]=o.r,this.baseCol[l*3+1]=o.g,this.baseCol[l*3+2]=o.b,n[l*3]=o.r,n[l*3+1]=o.g,n[l*3+2]=o.b,this.baseSize[l]=.5+e()*.7,i[l]=this.baseSize[l],s[l]=.5}this.geo=new rn,this.geo.setAttribute("position",new Ye(this.pos,3).setUsage(mo)),this.aColor=new Ye(n,3).setUsage(mo),this.aSize=new Ye(i,1).setUsage(mo),this.aAlpha=new Ye(s,1).setUsage(mo),this.geo.setAttribute("aColor",this.aColor),this.geo.setAttribute("aSize",this.aSize),this.geo.setAttribute("aAlpha",this.aAlpha);const a=new Vi({transparent:!0,depthWrite:!1,uniforms:{uPR:{value:g1}},vertexShader:`
        attribute vec3 aColor;
        attribute float aSize;
        attribute float aAlpha;
        uniform float uPR;
        varying vec3 vColor;
        varying float vAlpha;
        void main() {
          vColor = aColor;
          vAlpha = aAlpha;
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = aSize * uPR * (300.0 / -mv.z);
          gl_Position = projectionMatrix * mv;
        }
      `,fragmentShader:`
        varying vec3 vColor;
        varying float vAlpha;
        void main() {
          float d = length(gl_PointCoord - vec2(0.5));
          if (d > 0.5) discard;
          float a = smoothstep(0.5, 0.0, d) * vAlpha;
          gl_FragColor = vec4(vColor, a);
        }
      `});this.points=new Hm(this.geo,a),this.points.frustumCulled=!1,this.group.add(this.points),this.linkPos=new Float32Array(kd*2*3),this.linkGeo=new rn,this.linkGeo.setAttribute("position",new Ye(this.linkPos,3).setUsage(mo)),this.linkMat=new zm({color:zd.clone(),transparent:!0,opacity:.17,depthWrite:!1}),this.links=new qy(this.linkGeo,this.linkMat),this.links.frustumCulled=!1,this.group.add(this.links),this.ptr={x:0,y:0,active:!1},this.cursor=new U(0,0,Hc),this.waves=[],this._wantWave=!1,this.scroll=0,window.matchMedia("(pointer: fine)").matches&&(window.addEventListener("mousemove",l=>{this.ptr.x=l.clientX/window.innerWidth*2-1,this.ptr.y=-(l.clientY/window.innerHeight*2-1),this.ptr.active=!0},{passive:!0}),window.addEventListener("click",()=>{this._wantWave=!0},{passive:!0})),window.addEventListener("scroll",()=>{const l=document.documentElement.scrollHeight-window.innerHeight;this.scroll=l>0?window.scrollY/l:0},{passive:!0})}update(t,e,n){const i=Math.min(t,.05);if(n&&this.ptr.active){n.updateMatrixWorld(),Wc.set(this.ptr.x,this.ptr.y,.5).unproject(n).sub(n.position).normalize();const p=(Hc-n.position.z)/Wc.z;this.cursor.copy(n.position).addScaledVector(Wc,p)}this.group.position.y=-this.scroll*2.2,this.group.rotation.z=this.ptr.x*.03,this._wantWave&&(this._wantWave=!1,this.waves.push({x:this.cursor.x,y:this.cursor.y,t:0}),this.waves.length>4&&this.waves.shift());for(const p of this.waves)p.t+=i;this.waves=this.waves.filter(p=>p.t<1.3);const s=this.pos,o=this.vel,a=this.home,l=this.aSize.array,c=this.aColor.array,h=this.aAlpha.array,u=this.cursor.x-this.group.position.x,f=this.cursor.y-this.group.position.y;for(let p=0;p<this.n;p++){const m=p*3,S=m+1,x=m+2,M=a[m]+Math.sin(e*.25+this.phase[p])*.6,E=a[S]+Math.cos(e*.21+this.phase[p])*.6;o[m]+=(M-s[m])*Gc*i,o[S]+=(E-s[S])*Gc*i,o[x]+=(a[x]-s[x])*Gc*i;let w=0;const y=u-s[m],R=f-s[S],L=y*y+R*R;if(this.ptr.active&&L<_1){const O=1-Math.sqrt(L)/eu;w=O,o[m]+=y*O*4*i,o[S]+=R*O*4*i}for(const O of this.waves){const K=s[m]-O.x,N=s[S]-O.y,$=Math.sqrt(K*K+N*N)+.001,V=O.t*22;if(Math.abs($-V)<3){const rt=(1-O.t/1.3)*16*i;o[m]+=K/$*rt,o[S]+=N/$*rt,w=Math.max(w,1-O.t/1.3)}}o[m]*=Vc,o[S]*=Vc,o[x]*=Vc,s[m]+=o[m]*i*6,s[S]+=o[S]*i*6,s[x]+=o[x]*i*6;const v=.42+Math.sin(e*1.4+this.phase[p])*.08;h[p]=Math.min(1,v+w*.5),l[p]=this.baseSize[p]*(1+w*1.3);const T=this.baseCol[m],I=this.baseCol[S],k=this.baseCol[x];c[m]=T+(Va.r-T)*w,c[S]=I+(Va.g-I)*w,c[x]=k+(Va.b-k)*w}this.geo.attributes.position.needsUpdate=!0,this.aSize.needsUpdate=!0,this.aAlpha.needsUpdate=!0,this.aColor.needsUpdate=!0;const d=this.linkPos,_=kd*6;let g=0;for(let p=0;p<this.n&&g<_;p++){const m=s[p*3],S=s[p*3+1],x=s[p*3+2];for(let M=p+1;M<this.n&&g<_;M++){const E=m-s[M*3],w=S-s[M*3+1],y=x-s[M*3+2];E*E+w*w+y*y<m1&&(d[g++]=m,d[g++]=S,d[g++]=x,d[g++]=s[M*3],d[g++]=s[M*3+1],d[g++]=s[M*3+2])}}this.linkGeo.setDrawRange(0,g/3),this.linkGeo.attributes.position.needsUpdate=!0}}const Gd=4.8;class x1{constructor(t){Lt(this,"render",()=>{const t=Math.min(this.clock.getDelta(),.05),e=this.clock.elapsedTime,n=this.cam;this.camera.position.set(n.x-Gd,n.y,n.z),this.camera.lookAt(n.tx-Gd,n.ty,n.tz),this.ambient.update(t,e,this.camera),this.rain.update(e),this.subject.update(t,e,this.camera,this),this.renderer.render(this.scene,this.camera)});this.renderer=new Hy({canvas:t,antialias:!0,alpha:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.75)),this.scene=new Fm,this.camera=new Vn(42,1,.1,80),this.cam={x:0,y:.6,z:16,tx:0,ty:.6,tz:0};const e=new Jh(this.renderer);this.scene.environment=e.fromScene(new t1,.04).texture,"environmentIntensity"in this.scene&&(this.scene.environmentIntensity=.5),this.scene.add(new Ky(16777215,14214386,.9));const n=new Rd(16777215,1.1);n.position.set(5,9,7),this.scene.add(n);const i=new Rd(12575743,.35);i.position.set(-6,-3,5),this.scene.add(i),this.ambient=new v1(this.scene),this.rain=new o1(this.scene),this.subject=new u1(this.scene),this.clock=new Qy,this.resize(),window.addEventListener("resize",()=>this.resize())}resize(){this.vw=window.innerWidth,this.vh=window.innerHeight,this.renderer.setSize(this.vw,this.vh,!1),this.camera.aspect=this.vw/this.vh,this.camera.updateProjectionMatrix()}}function S1(r,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function M1(r,t,e){return t&&S1(r.prototype,t),r}/*!
 * Observer 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var on,fl,Yn,ar,lr,qs,Xm,Nr,$s,Ym,Bi,di,qm,$m=function(){return on||typeof window!="undefined"&&(on=window.gsap)&&on.registerPlugin&&on},Km=1,ks=[],se=[],wi=[],Vo=Date.now,nu=function(t,e){return e},y1=function(){var t=$s.core,e=t.bridge||{},n=t._scrollers,i=t._proxies;n.push.apply(n,se),i.push.apply(i,wi),se=n,wi=i,nu=function(o,a){return e[o](a)}},pr=function(t,e){return~wi.indexOf(t)&&wi[wi.indexOf(t)+1][e]},Wo=function(t){return!!~Ym.indexOf(t)},xn=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:i!==!1,capture:!!s})},vn=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},Wa="scrollLeft",Xa="scrollTop",iu=function(){return Bi&&Bi.isPressed||se.cache++},Ul=function(t,e){var n=function i(s){if(s||s===0){Km&&(Yn.history.scrollRestoration="manual");var o=Bi&&Bi.isPressed;s=i.v=Math.round(s)||(Bi&&Bi.iOS?1:0),t(s),i.cacheID=se.cache,o&&nu("ss",s)}else(e||se.cache!==i.cacheID||nu("ref"))&&(i.cacheID=se.cache,i.v=t());return i.v+i.offset};return n.offset=0,t&&n},Tn={s:Wa,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Ul(function(r){return arguments.length?Yn.scrollTo(r,Ke.sc()):Yn.pageXOffset||ar[Wa]||lr[Wa]||qs[Wa]||0})},Ke={s:Xa,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Tn,sc:Ul(function(r){return arguments.length?Yn.scrollTo(Tn.sc(),r):Yn.pageYOffset||ar[Xa]||lr[Xa]||qs[Xa]||0})},An=function(t,e){return(e&&e._ctx&&e._ctx.selector||on.utils.toArray)(t)[0]||(typeof t=="string"&&on.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},E1=function(t,e){for(var n=e.length;n--;)if(e[n]===t||e[n].contains(t))return!0;return!1},xr=function(t,e){var n=e.s,i=e.sc;Wo(t)&&(t=ar.scrollingElement||lr);var s=se.indexOf(t),o=i===Ke.sc?1:2;!~s&&(s=se.push(t)-1),se[s+o]||xn(t,"scroll",iu);var a=se[s+o],l=a||(se[s+o]=Ul(pr(t,n),!0)||(Wo(t)?i:Ul(function(c){return arguments.length?t[n]=c:t[n]})));return l.target=t,a||(l.smooth=on.getProperty(t,"scrollBehavior")==="smooth"),l},ru=function(t,e,n){var i=t,s=t,o=Vo(),a=o,l=e||50,c=Math.max(500,l*3),h=function(_,g){var p=Vo();g||p-o>l?(s=i,i=_,a=o,o=p):n?i+=_:i=s+(_-s)/(p-a)*(o-a)},u=function(){s=i=n?0:i,a=o=0},f=function(_){var g=a,p=s,m=Vo();return(_||_===0)&&_!==i&&h(_),o===a||m-a>c?0:(i+(n?p:-p))/((n?m:o)-g)*1e3};return{update:h,reset:u,getVelocity:f}},Po=function(t,e){return e&&!t._gsapAllow&&t.cancelable!==!1&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},Vd=function(t){var e=Math.max.apply(Math,t),n=Math.min.apply(Math,t);return Math.abs(e)>=Math.abs(n)?e:n},jm=function(){$s=on.core.globals().ScrollTrigger,$s&&$s.core&&y1()},Zm=function(t){return on=t||$m(),!fl&&on&&typeof document!="undefined"&&document.body&&(Yn=window,ar=document,lr=ar.documentElement,qs=ar.body,Ym=[Yn,ar,lr,qs],on.utils.clamp,qm=on.core.context||function(){},Nr="onpointerenter"in qs?"pointer":"mouse",Xm=He.isTouch=Yn.matchMedia&&Yn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Yn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,di=He.eventTypes=("ontouchstart"in lr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in lr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Km=0},500),fl=1),$s||jm(),fl};Tn.op=Ke;se.cache=0;var He=function(){function r(e){this.init(e)}var t=r.prototype;return t.init=function(n){fl||Zm(on)||console.warn("Please gsap.registerPlugin(Observer)"),$s||jm();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,h=n.preventDefault,u=n.onStop,f=n.onStopDelay,d=n.ignore,_=n.wheelSpeed,g=n.event,p=n.onDragStart,m=n.onDragEnd,S=n.onDrag,x=n.onPress,M=n.onRelease,E=n.onRight,w=n.onLeft,y=n.onUp,R=n.onDown,L=n.onChangeX,v=n.onChangeY,T=n.onChange,I=n.onToggleX,k=n.onToggleY,O=n.onHover,K=n.onHoverEnd,N=n.onMove,$=n.ignoreCheck,V=n.isNormalizer,rt=n.onGestureStart,P=n.onGestureEnd,ct=n.onWheel,Rt=n.onEnable,Nt=n.onDisable,q=n.onClick,et=n.scrollSpeed,ut=n.capture,lt=n.allowClicks,Y=n.lockAxis,J=n.onLockAxis;this.target=a=An(a)||lr,this.vars=n,d&&(d=on.utils.toArray(d)),i=i||1e-9,s=s||0,_=_||1,et=et||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Yn.getComputedStyle(qs).lineHeight)||22);var pt,At,Et,D,qt,St,Vt,H=this,te=0,Ft=0,C=n.passive||!h&&n.passive!==!1,b=xr(a,Tn),X=xr(a,Ke),Q=b(),it=X(),Z=~o.indexOf("touch")&&!~o.indexOf("pointer")&&di[0]==="pointerdown",Tt=Wo(a),ot=a.ownerDocument||ar,_t=[0,0,0],Xt=[0,0,0],st=0,yt=function(){return st=Vo()},bt=function(Ct,ue){return(H.event=Ct)&&d&&E1(Ct.target,d)||ue&&Z&&Ct.pointerType!=="touch"||$&&$(Ct,ue)},zt=function(){H._vx.reset(),H._vy.reset(),At.pause(),u&&u(H)},Mt=function(){var Ct=H.deltaX=Vd(_t),ue=H.deltaY=Vd(Xt),gt=Math.abs(Ct)>=i,Bt=Math.abs(ue)>=i;T&&(gt||Bt)&&T(H,Ct,ue,_t,Xt),gt&&(E&&H.deltaX>0&&E(H),w&&H.deltaX<0&&w(H),L&&L(H),I&&H.deltaX<0!=te<0&&I(H),te=H.deltaX,_t[0]=_t[1]=_t[2]=0),Bt&&(R&&H.deltaY>0&&R(H),y&&H.deltaY<0&&y(H),v&&v(H),k&&H.deltaY<0!=Ft<0&&k(H),Ft=H.deltaY,Xt[0]=Xt[1]=Xt[2]=0),(D||Et)&&(N&&N(H),Et&&(p&&Et===1&&p(H),S&&S(H),Et=0),D=!1),St&&!(St=!1)&&J&&J(H),qt&&(ct(H),qt=!1),pt=0},$t=function(Ct,ue,gt){_t[gt]+=Ct,Xt[gt]+=ue,H._vx.update(Ct),H._vy.update(ue),c?pt||(pt=requestAnimationFrame(Mt)):Mt()},Ht=function(Ct,ue){Y&&!Vt&&(H.axis=Vt=Math.abs(Ct)>Math.abs(ue)?"x":"y",St=!0),Vt!=="y"&&(_t[2]+=Ct,H._vx.update(Ct,!0)),Vt!=="x"&&(Xt[2]+=ue,H._vy.update(ue,!0)),c?pt||(pt=requestAnimationFrame(Mt)):Mt()},le=function(Ct){if(!bt(Ct,1)){Ct=Po(Ct,h);var ue=Ct.clientX,gt=Ct.clientY,Bt=ue-H.x,Ut=gt-H.y,Wt=H.isDragging;H.x=ue,H.y=gt,(Wt||(Bt||Ut)&&(Math.abs(H.startX-ue)>=s||Math.abs(H.startY-gt)>=s))&&(Et||(Et=Wt?2:1),Wt||(H.isDragging=!0),Ht(Bt,Ut))}},F=H.onPress=function(It){bt(It,1)||It&&It.button||(H.axis=Vt=null,At.pause(),H.isPressed=!0,It=Po(It),te=Ft=0,H.startX=H.x=It.clientX,H.startY=H.y=It.clientY,H._vx.reset(),H._vy.reset(),xn(V?a:ot,di[1],le,C,!0),H.deltaX=H.deltaY=0,x&&x(H))},nt=H.onRelease=function(It){if(!bt(It,1)){vn(V?a:ot,di[1],le,!0);var Ct=!isNaN(H.y-H.startY),ue=H.isDragging,gt=ue&&(Math.abs(H.x-H.startX)>3||Math.abs(H.y-H.startY)>3),Bt=Po(It);!gt&&Ct&&(H._vx.reset(),H._vy.reset(),h&&lt&&on.delayedCall(.08,function(){if(Vo()-st>300&&!It.defaultPrevented){if(It.target.click)It.target.click();else if(ot.createEvent){var Ut=ot.createEvent("MouseEvents");Ut.initMouseEvent("click",!0,!0,Yn,1,Bt.screenX,Bt.screenY,Bt.clientX,Bt.clientY,!1,!1,!1,!1,0,null),It.target.dispatchEvent(Ut)}}})),H.isDragging=H.isGesturing=H.isPressed=!1,u&&ue&&!V&&At.restart(!0),Et&&Mt(),m&&ue&&m(H),M&&M(H,gt)}},j=function(Ct){return Ct.touches&&Ct.touches.length>1&&(H.isGesturing=!0)&&rt(Ct,H.isDragging)},tt=function(){return(H.isGesturing=!1)||P(H)},ht=function(Ct){if(!bt(Ct)){var ue=b(),gt=X();$t((ue-Q)*et,(gt-it)*et,1),Q=ue,it=gt,u&&At.restart(!0)}},ft=function(Ct){if(!bt(Ct)){Ct=Po(Ct,h),ct&&(qt=!0);var ue=(Ct.deltaMode===1?l:Ct.deltaMode===2?Yn.innerHeight:1)*_;$t(Ct.deltaX*ue,Ct.deltaY*ue,0),u&&!V&&At.restart(!0)}},Kt=function(Ct){if(!bt(Ct)){var ue=Ct.clientX,gt=Ct.clientY,Bt=ue-H.x,Ut=gt-H.y;H.x=ue,H.y=gt,D=!0,u&&At.restart(!0),(Bt||Ut)&&Ht(Bt,Ut)}},Ee=function(Ct){H.event=Ct,O(H)},Pe=function(Ct){H.event=Ct,K(H)},oe=function(Ct){return bt(Ct)||Po(Ct,h)&&q(H)};At=H._dc=on.delayedCall(f||.25,zt).pause(),H.deltaX=H.deltaY=0,H._vx=ru(0,50,!0),H._vy=ru(0,50,!0),H.scrollX=b,H.scrollY=X,H.isDragging=H.isGesturing=H.isPressed=!1,qm(this),H.enable=function(It){return H.isEnabled||(xn(Tt?ot:a,"scroll",iu),o.indexOf("scroll")>=0&&xn(Tt?ot:a,"scroll",ht,C,ut),o.indexOf("wheel")>=0&&xn(a,"wheel",ft,C,ut),(o.indexOf("touch")>=0&&Xm||o.indexOf("pointer")>=0)&&(xn(a,di[0],F,C,ut),xn(ot,di[2],nt),xn(ot,di[3],nt),lt&&xn(a,"click",yt,!0,!0),q&&xn(a,"click",oe),rt&&xn(ot,"gesturestart",j),P&&xn(ot,"gestureend",tt),O&&xn(a,Nr+"enter",Ee),K&&xn(a,Nr+"leave",Pe),N&&xn(a,Nr+"move",Kt)),H.isEnabled=!0,H.isDragging=H.isGesturing=H.isPressed=D=Et=!1,H._vx.reset(),H._vy.reset(),Q=b(),it=X(),It&&It.type&&F(It),Rt&&Rt(H)),H},H.disable=function(){H.isEnabled&&(ks.filter(function(It){return It!==H&&Wo(It.target)}).length||vn(Tt?ot:a,"scroll",iu),H.isPressed&&(H._vx.reset(),H._vy.reset(),vn(V?a:ot,di[1],le,!0)),vn(Tt?ot:a,"scroll",ht,ut),vn(a,"wheel",ft,ut),vn(a,di[0],F,ut),vn(ot,di[2],nt),vn(ot,di[3],nt),vn(a,"click",yt,!0),vn(a,"click",oe),vn(ot,"gesturestart",j),vn(ot,"gestureend",tt),vn(a,Nr+"enter",Ee),vn(a,Nr+"leave",Pe),vn(a,Nr+"move",Kt),H.isEnabled=H.isPressed=H.isDragging=!1,Nt&&Nt(H))},H.kill=H.revert=function(){H.disable();var It=ks.indexOf(H);It>=0&&ks.splice(It,1),Bi===H&&(Bi=0)},ks.push(H),V&&Wo(a)&&(Bi=H),H.enable(g)},M1(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r}();He.version="3.15.0";He.create=function(r){return new He(r)};He.register=Zm;He.getAll=function(){return ks.slice()};He.getById=function(r){return ks.filter(function(t){return t.vars.id===r})[0]};$m()&&on.registerPlugin(He);/*!
 * ScrollTrigger 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var wt,Ns,re,xe,Wn,me,$u,Nl,aa,Xo,No,Ya,hn,Yl,su,yn,Wd,Xd,Os,Jm,Xc,Qm,Mn,ou,t_,e_,er,au,Ku,Ks,ju,Yo,lu,Yc,qa=1,fn=Date.now,qc=fn(),ai=0,Oo=0,Yd=function(t,e,n){var i=Hn(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return n["_"+e+"Clamp"]=i,i?t.substr(6,t.length-7):t},qd=function(t,e){return e&&(!Hn(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},b1=function r(){return Oo&&requestAnimationFrame(r)},$d=function(){return Yl=1},Kd=function(){return Yl=0},vi=function(t){return t},Fo=function(t){return Math.round(t*1e5)/1e5||0},n_=function(){return typeof window!="undefined"},i_=function(){return wt||n_()&&(wt=window.gsap)&&wt.registerPlugin&&wt},ts=function(t){return!!~$u.indexOf(t)},r_=function(t){return(t==="Height"?ju:re["inner"+t])||Wn["client"+t]||me["client"+t]},s_=function(t){return pr(t,"getBoundingClientRect")||(ts(t)?function(){return gl.width=re.innerWidth,gl.height=ju,gl}:function(){return Oi(t)})},T1=function(t,e,n){var i=n.d,s=n.d2,o=n.a;return(o=pr(t,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(e?r_(s):t["client"+s])||0}},w1=function(t,e){return!e||~wi.indexOf(t)?s_(t):function(){return gl}},Ti=function(t,e){var n=e.s,i=e.d2,s=e.d,o=e.a;return Math.max(0,(n="scroll"+i)&&(o=pr(t,n))?o()-s_(t)()[s]:ts(t)?(Wn[n]||me[n])-r_(i):t[n]-t["offset"+i])},$a=function(t,e){for(var n=0;n<Os.length;n+=3)(!e||~e.indexOf(Os[n+1]))&&t(Os[n],Os[n+1],Os[n+2])},Hn=function(t){return typeof t=="string"},pn=function(t){return typeof t=="function"},Bo=function(t){return typeof t=="number"},Or=function(t){return typeof t=="object"},Do=function(t,e,n){return t&&t.progress(e?0:1)&&n&&t.pause()},Ds=function(t,e,n){if(t.enabled){var i=t._ctx?t._ctx.add(function(){return e(t,n)}):e(t,n);i&&i.totalTime&&(t.callbackAnimation=i)}},Ls=Math.abs,o_="left",a_="top",Zu="right",Ju="bottom",$r="width",Kr="height",qo="Right",$o="Left",Ko="Top",jo="Bottom",We="padding",ni="margin",lo="Width",Qu="Height",$e="px",ii=function(t){return re.getComputedStyle(t.nodeType===Node.DOCUMENT_NODE?t.scrollingElement:t)},A1=function(t){var e=ii(t).position;t.style.position=e==="absolute"||e==="fixed"?e:"relative"},jd=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},Oi=function(t,e){var n=e&&ii(t)[su]!=="matrix(1, 0, 0, 1, 0, 0)"&&wt.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=t.getBoundingClientRect?t.getBoundingClientRect():t.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},Ol=function(t,e){var n=e.d2;return t["offset"+n]||t["client"+n]||0},l_=function(t){var e=[],n=t.labels,i=t.duration(),s;for(s in n)e.push(n[s]/i);return e},R1=function(t){return function(e){return wt.utils.snap(l_(t),e)}},tf=function(t){var e=wt.utils.snap(t),n=Array.isArray(t)&&t.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return e(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=e(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:e(s<0?i-t:i+t)}},C1=function(t){return function(e,n){return tf(l_(t))(e,n.direction)}},Ka=function(t,e,n,i){return n.split(",").forEach(function(s){return t(e,s,i)})},en=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:!i,capture:!!s})},tn=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},ja=function(t,e,n){n=n&&n.wheelHandler,n&&(t(e,"wheel",n),t(e,"touchmove",n))},Zd={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Za={toggleActions:"play",anticipatePin:0},Fl={top:0,left:0,center:.5,bottom:1,right:1},dl=function(t,e){if(Hn(t)){var n=t.indexOf("="),i=~n?+(t.charAt(n-1)+1)*parseFloat(t.substr(n+1)):0;~n&&(t.indexOf("%")>n&&(i*=e/100),t=t.substr(0,n-1)),t=i+(t in Fl?Fl[t]*e:~t.indexOf("%")?parseFloat(t)*e/100:parseFloat(t)||0)}return t},Ja=function(t,e,n,i,s,o,a,l){var c=s.startColor,h=s.endColor,u=s.fontSize,f=s.indent,d=s.fontWeight,_=xe.createElement("div"),g=ts(n)||pr(n,"pinType")==="fixed",p=t.indexOf("scroller")!==-1,m=g?me:n.tagName==="IFRAME"?n.contentDocument.body:n,S=t.indexOf("start")!==-1,x=S?c:h,M="border-color:"+x+";font-size:"+u+";color:"+x+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return M+="position:"+((p||l)&&g?"fixed;":"absolute;"),(p||l||!g)&&(M+=(i===Ke?Zu:Ju)+":"+(o+parseFloat(f))+"px;"),a&&(M+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),_._isStart=S,_.setAttribute("class","gsap-marker-"+t+(e?" marker-"+e:"")),_.style.cssText=M,_.innerText=e||e===0?t+"-"+e:t,m.children[0]?m.insertBefore(_,m.children[0]):m.appendChild(_),_._offset=_["offset"+i.op.d2],pl(_,0,i,S),_},pl=function(t,e,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];t._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+lo]=1,s["border"+a+lo]=0,s[n.p]=e+"px",wt.set(t,s)},ie=[],cu={},la,Jd=function(){return fn()-ai>34&&(la||(la=requestAnimationFrame(zi)))},Is=function(){(!Mn||!Mn.isPressed||Mn.startX>me.clientWidth)&&(se.cache++,Mn?la||(la=requestAnimationFrame(zi)):zi(),ai||ns("scrollStart"),ai=fn())},$c=function(){e_=re.innerWidth,t_=re.innerHeight},zo=function(t){se.cache++,(t===!0||!hn&&!Qm&&!xe.fullscreenElement&&!xe.webkitFullscreenElement&&(!ou||e_!==re.innerWidth||Math.abs(re.innerHeight-t_)>re.innerHeight*.25))&&Nl.restart(!0)},es={},P1=[],c_=function r(){return tn(Qt,"scrollEnd",r)||Vr(!0)},ns=function(t){return es[t]&&es[t].map(function(e){return e()})||P1},kn=[],h_=function(t){for(var e=0;e<kn.length;e+=5)(!t||kn[e+4]&&kn[e+4].query===t)&&(kn[e].style.cssText=kn[e+1],kn[e].getBBox&&kn[e].setAttribute("transform",kn[e+2]||""),kn[e+3].uncache=1)},u_=function(){return se.forEach(function(t){return pn(t)&&++t.cacheID&&(t.rec=t())})},ef=function(t,e){var n;for(yn=0;yn<ie.length;yn++)n=ie[yn],n&&(!e||n._ctx===e)&&(t?n.kill(1):n.revert(!0,!0));Yo=!0,e&&h_(e),e||ns("revert")},f_=function(t,e){se.cache++,(e||!En)&&se.forEach(function(n){return pn(n)&&n.cacheID++&&(n.rec=0)}),Hn(t)&&(re.history.scrollRestoration=Ku=t)},En,jr=0,Qd,D1=function(){if(Qd!==jr){var t=Qd=jr;requestAnimationFrame(function(){return t===jr&&Vr(!0)})}},d_=function(){me.appendChild(Ks),ju=!Mn&&Ks.offsetHeight||re.innerHeight,me.removeChild(Ks)},tp=function(t){return aa(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e){return e.style.display=t?"none":"block"})},Vr=function(t,e){if(Wn=xe.documentElement,me=xe.body,$u=[re,xe,Wn,me],ai&&!t&&!Yo){en(Qt,"scrollEnd",c_);return}d_(),En=Qt.isRefreshing=!0,Yo||u_();var n=ns("refreshInit");Jm&&Qt.sort(),e||ef(),se.forEach(function(i){pn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),ie.slice(0).forEach(function(i){return i.refresh()}),Yo=!1,ie.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),lu=1,tp(!0),ie.forEach(function(i){var s=Ti(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),tp(!1),lu=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),se.forEach(function(i){pn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),f_(Ku,1),Nl.pause(),jr++,En=2,zi(2),ie.forEach(function(i){return pn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),En=Qt.isRefreshing=!1,ns("refresh")},hu=0,ml=1,Zo,zi=function(t){if(t===2||!En&&!Yo){Qt.isUpdating=!0,Zo&&Zo.update(0);var e=ie.length,n=fn(),i=n-qc>=50,s=e&&ie[0].scroll();if(ml=hu>s?-1:1,En||(hu=s),i&&(ai&&!Yl&&n-ai>200&&(ai=0,ns("scrollEnd")),No=qc,qc=n),ml<0){for(yn=e;yn-- >0;)ie[yn]&&ie[yn].update(0,i);ml=1}else for(yn=0;yn<e;yn++)ie[yn]&&ie[yn].update(0,i);Qt.isUpdating=!1}la=0},uu=[o_,a_,Ju,Zu,ni+jo,ni+qo,ni+Ko,ni+$o,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],_l=uu.concat([$r,Kr,"boxSizing","max"+lo,"max"+Qu,"position",ni,We,We+Ko,We+qo,We+jo,We+$o]),L1=function(t,e,n){js(n);var i=t._gsap;if(i.spacerIsNative)js(i.spacerState);else if(t._gsap.swappedIn){var s=e.parentNode;s&&(s.insertBefore(t,e),s.removeChild(e))}t._gsap.swappedIn=!1},Kc=function(t,e,n,i){if(!t._gsap.swappedIn){for(var s=uu.length,o=e.style,a=t.style,l;s--;)l=uu[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[Ju]=a[Zu]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[$r]=Ol(t,Tn)+$e,o[Kr]=Ol(t,Ke)+$e,o[We]=a[ni]=a[a_]=a[o_]="0",js(i),a[$r]=a["max"+lo]=n[$r],a[Kr]=a["max"+Qu]=n[Kr],a[We]=n[We],t.parentNode!==e&&(t.parentNode.insertBefore(e,t),e.appendChild(t)),t._gsap.swappedIn=!0}},I1=/([A-Z])/g,js=function(t){if(t){var e=t.t.style,n=t.length,i=0,s,o;for((t.t._gsap||wt.core.getCache(t.t)).uncache=1;i<n;i+=2)o=t[i+1],s=t[i],o?e[s]=o:e[s]&&e.removeProperty(s.replace(I1,"-$1").toLowerCase())}},Qa=function(t){for(var e=_l.length,n=t.style,i=[],s=0;s<e;s++)i.push(_l[s],n[_l[s]]);return i.t=t,i},U1=function(t,e,n){for(var i=[],s=t.length,o=n?8:0,a;o<s;o+=2)a=t[o],i.push(a,a in e?e[a]:t[o+1]);return i.t=t.t,i},gl={left:0,top:0},ep=function(t,e,n,i,s,o,a,l,c,h,u,f,d,_){pn(t)&&(t=t(l)),Hn(t)&&t.substr(0,3)==="max"&&(t=f+(t.charAt(4)==="="?dl("0"+t.substr(3),n):0));var g=d?d.time():0,p,m,S;if(d&&d.seek(0),isNaN(t)||(t=+t),Bo(t))d&&(t=wt.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,f,t)),a&&pl(a,n,i,!0);else{pn(e)&&(e=e(l));var x=(t||"0").split(" "),M,E,w,y;S=An(e,l)||me,M=Oi(S)||{},(!M||!M.left&&!M.top)&&ii(S).display==="none"&&(y=S.style.display,S.style.display="block",M=Oi(S),y?S.style.display=y:S.style.removeProperty("display")),E=dl(x[0],M[i.d]),w=dl(x[1]||"0",n),t=M[i.p]-c[i.p]-h+E+s-w,a&&pl(a,w,i,n-w<20||a._isStart&&w>20),n-=n-w}if(_&&(l[_]=t||-.001,t<0&&(t=0)),o){var R=t+n,L=o._isStart;p="scroll"+i.d2,pl(o,R,i,L&&R>20||!L&&(u?Math.max(me[p],Wn[p]):o.parentNode[p])<=R+1),u&&(c=Oi(a),u&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+$e))}return d&&S&&(p=Oi(S),d.seek(f),m=Oi(S),d._caScrollDist=p[i.p]-m[i.p],t=t/d._caScrollDist*f),d&&d.seek(g),d?t:Math.round(t)},N1=/(webkit|moz|length|cssText|inset)/i,np=function(t,e,n,i){if(t.parentNode!==e){var s=t.style,o,a;if(e===me){t._stOrig=s.cssText,a=ii(t);for(o in a)!+o&&!N1.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=t._stOrig;wt.core.getCache(t).uncache=1,e.appendChild(t)}},p_=function(t,e,n){var i=e,s=i;return function(o){var a=Math.round(t());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=Math.round(o),i}},tl=function(t,e,n){var i={};i[e.p]="+="+n,wt.set(t,i)},ip=function(t,e){var n=xr(t,e),i="_scroll"+e.p2,s=function o(a,l,c,h,u){var f=o.tween,d=l.onComplete,_={};c=c||n();var g=p_(n,c,function(){f.kill(),o.tween=0});return u=h&&u||0,h=h||a-c,f&&f.kill(),l[i]=a,l.inherit=!1,l.modifiers=_,_[i]=function(){return g(c+h*f.ratio+u*f.ratio*f.ratio)},l.onUpdate=function(){se.cache++,o.tween&&zi()},l.onComplete=function(){o.tween=0,d&&d.call(f)},f=o.tween=wt.to(t,l),f};return t[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},en(t,"wheel",n.wheelHandler),Qt.isTouch&&en(t,"touchmove",n.wheelHandler),s},Qt=function(){function r(e,n){Ns||r.register(wt)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),au(this),this.init(e,n)}var t=r.prototype;return t.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Oo){this.update=this.refresh=this.kill=vi;return}n=jd(Hn(n)||Bo(n)||n.nodeType?{trigger:n}:n,Za);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,h=s.onRefresh,u=s.scrub,f=s.trigger,d=s.pin,_=s.pinSpacing,g=s.invalidateOnRefresh,p=s.anticipatePin,m=s.onScrubComplete,S=s.onSnapComplete,x=s.once,M=s.snap,E=s.pinReparent,w=s.pinSpacer,y=s.containerAnimation,R=s.fastScrollEnd,L=s.preventOverlaps,v=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Tn:Ke,T=!u&&u!==0,I=An(n.scroller||re),k=wt.core.getCache(I),O=ts(I),K=("pinType"in n?n.pinType:pr(I,"pinType")||O&&"fixed")==="fixed",N=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],$=T&&n.toggleActions.split(" "),V="markers"in n?n.markers:Za.markers,rt=O?0:parseFloat(ii(I)["border"+v.p2+lo])||0,P=this,ct=n.onRefreshInit&&function(){return n.onRefreshInit(P)},Rt=T1(I,O,v),Nt=w1(I,O),q=0,et=0,ut=0,lt=xr(I,v),Y,J,pt,At,Et,D,qt,St,Vt,H,te,Ft,C,b,X,Q,it,Z,Tt,ot,_t,Xt,st,yt,bt,zt,Mt,$t,Ht,le,F,nt,j,tt,ht,ft,Kt,Ee,Pe;if(P._startClamp=P._endClamp=!1,P._dir=v,p*=45,P.scroller=I,P.scroll=y?y.time.bind(y):lt,At=lt(),P.vars=n,i=i||n.animation,"refreshPriority"in n&&(Jm=1,n.refreshPriority===-9999&&(Zo=P)),k.tweenScroll=k.tweenScroll||{top:ip(I,Ke),left:ip(I,Tn)},P.tweenTo=Y=k.tweenScroll[v.p],P.scrubDuration=function(gt){j=Bo(gt)&&gt,j?nt?nt.duration(gt):nt=wt.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:j,paused:!0,onComplete:function(){return m&&m(P)}}):(nt&&nt.progress(1).kill(),nt=0)},i&&(i.vars.lazy=!1,i._initted&&!P.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),P.animation=i.pause(),i.scrollTrigger=P,P.scrubDuration(u),le=0,l||(l=i.vars.id)),M&&((!Or(M)||M.push)&&(M={snapTo:M}),"scrollBehavior"in me.style&&wt.set(O?[me,Wn]:I,{scrollBehavior:"auto"}),se.forEach(function(gt){return pn(gt)&&gt.target===(O?xe.scrollingElement||Wn:I)&&(gt.smooth=!1)}),pt=pn(M.snapTo)?M.snapTo:M.snapTo==="labels"?R1(i):M.snapTo==="labelsDirectional"?C1(i):M.directional!==!1?function(gt,Bt){return tf(M.snapTo)(gt,fn()-et<500?0:Bt.direction)}:wt.utils.snap(M.snapTo),tt=M.duration||{min:.1,max:2},tt=Or(tt)?Xo(tt.min,tt.max):Xo(tt,tt),ht=wt.delayedCall(M.delay||j/2||.1,function(){var gt=lt(),Bt=fn()-et<500,Ut=Y.tween;if((Bt||Math.abs(P.getVelocity())<10)&&!Ut&&!Yl&&q!==gt){var Wt=(gt-D)/b,Fe=i&&!T?i.totalProgress():Wt,jt=Bt?0:(Fe-F)/(fn()-No)*1e3||0,De=wt.utils.clamp(-Wt,1-Wt,Ls(jt/2)*jt/.185),Be=Wt+(M.inertia===!1?0:De),Ae,be,ve=M,On=ve.onStart,Re=ve.onInterrupt,A=ve.onComplete;if(Ae=pt(Be,P),Bo(Ae)||(Ae=Be),be=Math.max(0,Math.round(D+Ae*b)),gt<=qt&&gt>=D&&be!==gt){if(Ut&&!Ut._initted&&Ut.data<=Ls(be-gt))return;M.inertia===!1&&(De=Ae-Wt),Y(be,{duration:tt(Ls(Math.max(Ls(Be-Fe),Ls(Ae-Fe))*.185/jt/.05||0)),ease:M.ease||"power3",data:Ls(be-gt),onInterrupt:function(){return ht.restart(!0)&&Re&&Ds(P,Re)},onComplete:function(){P.update(),q=lt(),i&&!T&&(nt?nt.resetTo("totalProgress",Ae,i._tTime/i._tDur):i.progress(Ae)),le=F=i&&!T?i.totalProgress():P.progress,S&&S(P),A&&Ds(P,A)}},gt,De*b,be-gt-De*b),On&&Ds(P,On,Y.tween)}}else P.isActive&&q!==gt&&ht.restart(!0)}).pause()),l&&(cu[l]=P),f=P.trigger=An(f||d!==!0&&d),Pe=f&&f._gsap&&f._gsap.stRevert,Pe&&(Pe=Pe(P)),d=d===!0?f:An(d),Hn(a)&&(a={targets:f,className:a}),d&&(_===!1||_===ni||(_=!_&&d.parentNode&&d.parentNode.style&&ii(d.parentNode).display==="flex"?!1:We),P.pin=d,J=wt.core.getCache(d),J.spacer?X=J.pinState:(w&&(w=An(w),w&&!w.nodeType&&(w=w.current||w.nativeElement),J.spacerIsNative=!!w,w&&(J.spacerState=Qa(w))),J.spacer=Z=w||xe.createElement("div"),Z.classList.add("pin-spacer"),l&&Z.classList.add("pin-spacer-"+l),J.pinState=X=Qa(d)),n.force3D!==!1&&wt.set(d,{force3D:!0}),P.spacer=Z=J.spacer,Ht=ii(d),yt=Ht[_+v.os2],ot=wt.getProperty(d),_t=wt.quickSetter(d,v.a,$e),Kc(d,Z,Ht),it=Qa(d)),V){Ft=Or(V)?jd(V,Zd):Zd,H=Ja("scroller-start",l,I,v,Ft,0),te=Ja("scroller-end",l,I,v,Ft,0,H),Tt=H["offset"+v.op.d2];var oe=An(pr(I,"content")||I);St=this.markerStart=Ja("start",l,oe,v,Ft,Tt,0,y),Vt=this.markerEnd=Ja("end",l,oe,v,Ft,Tt,0,y),y&&(Ee=wt.quickSetter([St,Vt],v.a,$e)),!K&&!(wi.length&&pr(I,"fixedMarkers")===!0)&&(A1(O?me:I),wt.set([H,te],{force3D:!0}),zt=wt.quickSetter(H,v.a,$e),$t=wt.quickSetter(te,v.a,$e))}if(y){var It=y.vars.onUpdate,Ct=y.vars.onUpdateParams;y.eventCallback("onUpdate",function(){P.update(0,0,1),It&&It.apply(y,Ct||[])})}if(P.previous=function(){return ie[ie.indexOf(P)-1]},P.next=function(){return ie[ie.indexOf(P)+1]},P.revert=function(gt,Bt){if(!Bt)return P.kill(!0);var Ut=gt!==!1||!P.enabled,Wt=hn;Ut!==P.isReverted&&(Ut&&(ft=Math.max(lt(),P.scroll.rec||0),ut=P.progress,Kt=i&&i.progress()),St&&[St,Vt,H,te].forEach(function(Fe){return Fe.style.display=Ut?"none":"block"}),Ut&&(hn=P,P.update(Ut)),d&&(!E||!P.isActive)&&(Ut?L1(d,Z,X):Kc(d,Z,ii(d),bt)),Ut||P.update(Ut),hn=Wt,P.isReverted=Ut)},P.refresh=function(gt,Bt,Ut,Wt){if(!((hn||!P.enabled)&&!Bt)){if(d&&gt&&ai){en(r,"scrollEnd",c_);return}!En&&ct&&ct(P),hn=P,Y.tween&&!Ut&&(Y.tween.kill(),Y.tween=0),nt&&nt.pause(),g&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(ee){return ee.vars.immediateRender&&ee.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),P.isReverted||P.revert(!0,!0),P._subPinOffset=!1;var Fe=Rt(),jt=Nt(),De=y?y.duration():Ti(I,v),Be=b<=.01||!b,Ae=0,be=Wt||0,ve=Or(Ut)?Ut.end:n.end,On=n.endTrigger||f,Re=Or(Ut)?Ut.start:n.start||(n.start===0||!f?0:d?"0 0":"0 100%"),A=P.pinnedContainer=n.pinnedContainer&&An(n.pinnedContainer,P),z=f&&Math.max(0,ie.indexOf(P))||0,G=z,W,B,at,xt,mt,dt,Dt,kt,Pt,ce,ae,Se,Je;for(V&&Or(Ut)&&(Se=wt.getProperty(H,v.p),Je=wt.getProperty(te,v.p));G-- >0;)dt=ie[G],dt.end||dt.refresh(0,1)||(hn=P),Dt=dt.pin,Dt&&(Dt===f||Dt===d||Dt===A)&&!dt.isReverted&&(ce||(ce=[]),ce.unshift(dt),dt.revert(!0,!0)),dt!==ie[G]&&(z--,G--);for(pn(Re)&&(Re=Re(P)),Re=Yd(Re,"start",P),D=ep(Re,f,Fe,v,lt(),St,H,P,jt,rt,K,De,y,P._startClamp&&"_startClamp")||(d?-.001:0),pn(ve)&&(ve=ve(P)),Hn(ve)&&!ve.indexOf("+=")&&(~ve.indexOf(" ")?ve=(Hn(Re)?Re.split(" ")[0]:"")+ve:(Ae=dl(ve.substr(2),Fe),ve=Hn(Re)?Re:(y?wt.utils.mapRange(0,y.duration(),y.scrollTrigger.start,y.scrollTrigger.end,D):D)+Ae,On=f)),ve=Yd(ve,"end",P),qt=Math.max(D,ep(ve||(On?"100% 0":De),On,Fe,v,lt()+Ae,Vt,te,P,jt,rt,K,De,y,P._endClamp&&"_endClamp"))||-.001,Ae=0,G=z;G--;)dt=ie[G]||{},Dt=dt.pin,Dt&&dt.start-dt._pinPush<=D&&!y&&dt.end>0&&(W=dt.end-(P._startClamp?Math.max(0,dt.start):dt.start),(Dt===f&&dt.start-dt._pinPush<D||Dt===A)&&isNaN(Re)&&(Ae+=W*(1-dt.progress)),Dt===d&&(be+=W));if(D+=Ae,qt+=Ae,P._startClamp&&(P._startClamp+=Ae),P._endClamp&&!En&&(P._endClamp=qt||-.001,qt=Math.min(qt,Ti(I,v))),b=qt-D||(D-=.01)&&.001,Be&&(ut=wt.utils.clamp(0,1,wt.utils.normalize(D,qt,ft))),P._pinPush=be,St&&Ae&&(W={},W[v.a]="+="+Ae,A&&(W[v.p]="-="+lt()),wt.set([St,Vt],W)),d&&!(lu&&P.end>=Ti(I,v)))W=ii(d),xt=v===Ke,at=lt(),Xt=parseFloat(ot(v.a))+be,!De&&qt>1&&(ae=(O?xe.scrollingElement||Wn:I).style,ae={style:ae,value:ae["overflow"+v.a.toUpperCase()]},O&&ii(me)["overflow"+v.a.toUpperCase()]!=="scroll"&&(ae.style["overflow"+v.a.toUpperCase()]="scroll")),Kc(d,Z,W),it=Qa(d),B=Oi(d,!0),kt=K&&xr(I,xt?Tn:Ke)(),_?(bt=[_+v.os2,b+be+$e],bt.t=Z,G=_===We?Ol(d,v)+b+be:0,G&&(bt.push(v.d,G+$e),Z.style.flexBasis!=="auto"&&(Z.style.flexBasis=G+$e)),js(bt),A&&ie.forEach(function(ee){ee.pin===A&&ee.vars.pinSpacing!==!1&&(ee._subPinOffset=!0)}),K&&lt(ft)):(G=Ol(d,v),G&&Z.style.flexBasis!=="auto"&&(Z.style.flexBasis=G+$e)),K&&(mt={top:B.top+(xt?at-D:kt)+$e,left:B.left+(xt?kt:at-D)+$e,boxSizing:"border-box",position:"fixed"},mt[$r]=mt["max"+lo]=Math.ceil(B.width)+$e,mt[Kr]=mt["max"+Qu]=Math.ceil(B.height)+$e,mt[ni]=mt[ni+Ko]=mt[ni+qo]=mt[ni+jo]=mt[ni+$o]="0",mt[We]=W[We],mt[We+Ko]=W[We+Ko],mt[We+qo]=W[We+qo],mt[We+jo]=W[We+jo],mt[We+$o]=W[We+$o],Q=U1(X,mt,E),En&&lt(0)),i?(Pt=i._initted,Xc(1),i.render(i.duration(),!0,!0),st=ot(v.a)-Xt+b+be,Mt=Math.abs(b-st)>1,K&&Mt&&Q.splice(Q.length-2,2),i.render(0,!0,!0),Pt||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Xc(0)):st=b,ae&&(ae.value?ae.style["overflow"+v.a.toUpperCase()]=ae.value:ae.style.removeProperty("overflow-"+v.a));else if(f&&lt()&&!y)for(B=f.parentNode;B&&B!==me;)B._pinOffset&&(D-=B._pinOffset,qt-=B._pinOffset),B=B.parentNode;ce&&ce.forEach(function(ee){return ee.revert(!1,!0)}),P.start=D,P.end=qt,At=Et=En?ft:lt(),!y&&!En&&(At<ft&&lt(ft),P.scroll.rec=0),P.revert(!1,!0),et=fn(),ht&&(q=-1,ht.restart(!0)),hn=0,i&&T&&(i._initted||Kt)&&i.progress()!==Kt&&i.progress(Kt||0,!0).render(i.time(),!0,!0),(Be||ut!==P.progress||y||g||i&&!i._initted)&&(i&&!T&&(i._initted||ut||i.vars.immediateRender!==!1)&&i.totalProgress(y&&D<-.001&&!ut?wt.utils.normalize(D,qt,0):ut,!0),P.progress=Be||(At-D)/b===ut?0:ut),d&&_&&(Z._pinOffset=Math.round(P.progress*st)),nt&&nt.invalidate(),isNaN(Se)||(Se-=wt.getProperty(H,v.p),Je-=wt.getProperty(te,v.p),tl(H,v,Se),tl(St,v,Se-(Wt||0)),tl(te,v,Je),tl(Vt,v,Je-(Wt||0))),Be&&!En&&P.update(),h&&!En&&!C&&(C=!0,h(P),C=!1)}},P.getVelocity=function(){return(lt()-Et)/(fn()-No)*1e3||0},P.endAnimation=function(){Do(P.callbackAnimation),i&&(nt?nt.progress(1):i.paused()?T||Do(i,P.direction<0,1):Do(i,i.reversed()))},P.labelToScroll=function(gt){return i&&i.labels&&(D||P.refresh()||D)+i.labels[gt]/i.duration()*b||0},P.getTrailing=function(gt){var Bt=ie.indexOf(P),Ut=P.direction>0?ie.slice(0,Bt).reverse():ie.slice(Bt+1);return(Hn(gt)?Ut.filter(function(Wt){return Wt.vars.preventOverlaps===gt}):Ut).filter(function(Wt){return P.direction>0?Wt.end<=D:Wt.start>=qt})},P.update=function(gt,Bt,Ut){if(!(y&&!Ut&&!gt)){var Wt=En===!0?ft:P.scroll(),Fe=gt?0:(Wt-D)/b,jt=Fe<0?0:Fe>1?1:Fe||0,De=P.progress,Be,Ae,be,ve,On,Re,A,z;if(Bt&&(Et=At,At=y?lt():Wt,M&&(F=le,le=i&&!T?i.totalProgress():jt)),p&&d&&!hn&&!qa&&ai&&(!jt&&D<Wt+(Wt-Et)/(fn()-No)*p?jt=1e-4:jt===1&&qt>Wt+(Wt-Et)/(fn()-No)*p&&(jt=.9999)),jt!==De&&P.enabled){if(Be=P.isActive=!!jt&&jt<1,Ae=!!De&&De<1,Re=Be!==Ae,On=Re||!!jt!=!!De,P.direction=jt>De?1:-1,P.progress=jt,On&&!hn&&(be=jt&&!De?0:jt===1?1:De===1?2:3,T&&(ve=!Re&&$[be+1]!=="none"&&$[be+1]||$[be],z=i&&(ve==="complete"||ve==="reset"||ve in i))),L&&(Re||z)&&(z||u||!i)&&(pn(L)?L(P):P.getTrailing(L).forEach(function(at){return at.endAnimation()})),T||(nt&&!hn&&!qa?(nt._dp._time-nt._start!==nt._time&&nt.render(nt._dp._time-nt._start),nt.resetTo?nt.resetTo("totalProgress",jt,i._tTime/i._tDur):(nt.vars.totalProgress=jt,nt.invalidate().restart())):i&&i.totalProgress(jt,!!(hn&&(et||gt)))),d){if(gt&&_&&(Z.style[_+v.os2]=yt),!K)_t(Fo(Xt+st*jt));else if(On){if(A=!gt&&jt>De&&qt+1>Wt&&Wt+1>=Ti(I,v),E)if(!gt&&(Be||A)){var G=Oi(d,!0),W=Wt-D;np(d,me,G.top+(v===Ke?W:0)+$e,G.left+(v===Ke?0:W)+$e)}else np(d,Z);js(Be||A?Q:it),Mt&&jt<1&&Be||_t(Xt+(jt===1&&!A?st:0))}}M&&!Y.tween&&!hn&&!qa&&ht.restart(!0),a&&(Re||x&&jt&&(jt<1||!Yc))&&aa(a.targets).forEach(function(at){return at.classList[Be||x?"add":"remove"](a.className)}),o&&!T&&!gt&&o(P),On&&!hn?(T&&(z&&(ve==="complete"?i.pause().totalProgress(1):ve==="reset"?i.restart(!0).pause():ve==="restart"?i.restart(!0):i[ve]()),o&&o(P)),(Re||!Yc)&&(c&&Re&&Ds(P,c),N[be]&&Ds(P,N[be]),x&&(jt===1?P.kill(!1,1):N[be]=0),Re||(be=jt===1?1:3,N[be]&&Ds(P,N[be]))),R&&!Be&&Math.abs(P.getVelocity())>(Bo(R)?R:2500)&&(Do(P.callbackAnimation),nt?nt.progress(1):Do(i,ve==="reverse"?1:!jt,1))):T&&o&&!hn&&o(P)}if($t){var B=y?Wt/y.duration()*(y._caScrollDist||0):Wt;zt(B+(H._isFlipped?1:0)),$t(B)}Ee&&Ee(-Wt/y.duration()*(y._caScrollDist||0))}},P.enable=function(gt,Bt){P.enabled||(P.enabled=!0,en(I,"resize",zo),O||en(I,"scroll",Is),ct&&en(r,"refreshInit",ct),gt!==!1&&(P.progress=ut=0,At=Et=q=lt()),Bt!==!1&&P.refresh())},P.getTween=function(gt){return gt&&Y?Y.tween:nt},P.setPositions=function(gt,Bt,Ut,Wt){if(y){var Fe=y.scrollTrigger,jt=y.duration(),De=Fe.end-Fe.start;gt=Fe.start+De*gt/jt,Bt=Fe.start+De*Bt/jt}P.refresh(!1,!1,{start:qd(gt,Ut&&!!P._startClamp),end:qd(Bt,Ut&&!!P._endClamp)},Wt),P.update()},P.adjustPinSpacing=function(gt){if(bt&&gt){var Bt=bt.indexOf(v.d)+1;bt[Bt]=parseFloat(bt[Bt])+gt+$e,bt[1]=parseFloat(bt[1])+gt+$e,js(bt)}},P.disable=function(gt,Bt){if(gt!==!1&&P.revert(!0,!0),P.enabled&&(P.enabled=P.isActive=!1,Bt||nt&&nt.pause(),ft=0,J&&(J.uncache=1),ct&&tn(r,"refreshInit",ct),ht&&(ht.pause(),Y.tween&&Y.tween.kill()&&(Y.tween=0)),!O)){for(var Ut=ie.length;Ut--;)if(ie[Ut].scroller===I&&ie[Ut]!==P)return;tn(I,"resize",zo),O||tn(I,"scroll",Is)}},P.kill=function(gt,Bt){P.disable(gt,Bt),nt&&!Bt&&nt.kill(),l&&delete cu[l];var Ut=ie.indexOf(P);Ut>=0&&ie.splice(Ut,1),Ut===yn&&ml>0&&yn--,Ut=0,ie.forEach(function(Wt){return Wt.scroller===P.scroller&&(Ut=1)}),Ut||En||(P.scroll.rec=0),i&&(i.scrollTrigger=null,gt&&i.revert({kill:!1}),Bt||i.kill()),St&&[St,Vt,H,te].forEach(function(Wt){return Wt.parentNode&&Wt.parentNode.removeChild(Wt)}),Zo===P&&(Zo=0),d&&(J&&(J.uncache=1),Ut=0,ie.forEach(function(Wt){return Wt.pin===d&&Ut++}),Ut||(J.spacer=0)),n.onKill&&n.onKill(P)},ie.push(P),P.enable(!1,!1),Pe&&Pe(P),i&&i.add&&!b){var ue=P.update;P.update=function(){P.update=ue,se.cache++,D||qt||P.refresh()},wt.delayedCall(.01,P.update),b=.01,D=qt=0}else P.refresh();d&&D1()},r.register=function(n){return Ns||(wt=n||i_(),n_()&&window.document&&r.enable(),Ns=Oo),Ns},r.defaults=function(n){if(n)for(var i in n)Za[i]=n[i];return Za},r.disable=function(n,i){Oo=0,ie.forEach(function(o){return o[i?"kill":"disable"](n)}),tn(re,"wheel",Is),tn(xe,"scroll",Is),clearInterval(Ya),tn(xe,"touchcancel",vi),tn(me,"touchstart",vi),Ka(tn,xe,"pointerdown,touchstart,mousedown",$d),Ka(tn,xe,"pointerup,touchend,mouseup",Kd),Nl.kill(),$a(tn);for(var s=0;s<se.length;s+=3)ja(tn,se[s],se[s+1]),ja(tn,se[s],se[s+2])},r.enable=function(){if(re=window,xe=document,Wn=xe.documentElement,me=xe.body,wt){if(aa=wt.utils.toArray,Xo=wt.utils.clamp,au=wt.core.context||vi,Xc=wt.core.suppressOverwrites||vi,Ku=re.history.scrollRestoration||"auto",hu=re.pageYOffset||0,wt.core.globals("ScrollTrigger",r),me){Oo=1,Ks=document.createElement("div"),Ks.style.height="100vh",Ks.style.position="absolute",d_(),b1(),He.register(wt),r.isTouch=He.isTouch,er=He.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),ou=He.isTouch===1,en(re,"wheel",Is),$u=[re,xe,Wn,me],wt.matchMedia?(r.matchMedia=function(h){var u=wt.matchMedia(),f;for(f in h)u.add(f,h[f]);return u},wt.addEventListener("matchMediaInit",function(){u_(),ef()}),wt.addEventListener("matchMediaRevert",function(){return h_()}),wt.addEventListener("matchMedia",function(){Vr(0,1),ns("matchMedia")}),wt.matchMedia().add("(orientation: portrait)",function(){return $c(),$c})):console.warn("Requires GSAP 3.11.0 or later"),$c(),en(xe,"scroll",Is);var n=me.hasAttribute("style"),i=me.style,s=i.borderTopStyle,o=wt.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=Oi(me),Ke.m=Math.round(a.top+Ke.sc())||0,Tn.m=Math.round(a.left+Tn.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(me.setAttribute("style",""),me.removeAttribute("style")),Ya=setInterval(Jd,250),wt.delayedCall(.5,function(){return qa=0}),en(xe,"touchcancel",vi),en(me,"touchstart",vi),Ka(en,xe,"pointerdown,touchstart,mousedown",$d),Ka(en,xe,"pointerup,touchend,mouseup",Kd),su=wt.utils.checkPrefix("transform"),_l.push(su),Ns=fn(),Nl=wt.delayedCall(.2,Vr).pause(),Os=[xe,"visibilitychange",function(){var h=re.innerWidth,u=re.innerHeight;xe.hidden?(Wd=h,Xd=u):(Wd!==h||Xd!==u)&&zo()},xe,"DOMContentLoaded",Vr,re,"load",Vr,re,"resize",zo],$a(en),ie.forEach(function(h){return h.enable(0,1)}),l=0;l<se.length;l+=3)ja(tn,se[l],se[l+1]),ja(tn,se[l],se[l+2])}else if(xe){var c=function h(){r.enable(),xe.removeEventListener("DOMContentLoaded",h)};xe.addEventListener("DOMContentLoaded",c)}}},r.config=function(n){"limitCallbacks"in n&&(Yc=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Ya)||(Ya=i)&&setInterval(Jd,i),"ignoreMobileResize"in n&&(ou=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&($a(tn)||$a(en,n.autoRefreshEvents||"none"),Qm=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=An(n),o=se.indexOf(s),a=ts(s);~o&&se.splice(o,a?6:2),i&&(a?wi.unshift(re,i,me,i,Wn,i):wi.unshift(s,i))},r.clearMatchMedia=function(n){ie.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(Hn(n)?An(n):n).getBoundingClientRect(),a=o[s?$r:Kr]*i||0;return s?o.right-a>0&&o.left+a<re.innerWidth:o.bottom-a>0&&o.top+a<re.innerHeight},r.positionInViewport=function(n,i,s){Hn(n)&&(n=An(n));var o=n.getBoundingClientRect(),a=o[s?$r:Kr],l=i==null?a/2:i in Fl?Fl[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/re.innerWidth:(o.top+l)/re.innerHeight},r.killAll=function(n){if(ie.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=es.killAll||[];es={},i.forEach(function(s){return s()})}},r}();Qt.version="3.15.0";Qt.saveStyles=function(r){return r?aa(r).forEach(function(t){if(t&&t.style){var e=kn.indexOf(t);e>=0&&kn.splice(e,5),kn.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),wt.core.getCache(t),au())}}):kn};Qt.revert=function(r,t){return ef(!r,t)};Qt.create=function(r,t){return new Qt(r,t)};Qt.refresh=function(r){return r?zo(!0):(Ns||Qt.register())&&Vr(!0)};Qt.update=function(r){return++se.cache&&zi(r===!0?2:0)};Qt.clearScrollMemory=f_;Qt.maxScroll=function(r,t){return Ti(r,t?Tn:Ke)};Qt.getScrollFunc=function(r,t){return xr(An(r),t?Tn:Ke)};Qt.getById=function(r){return cu[r]};Qt.getAll=function(){return ie.filter(function(r){return r.vars.id!=="ScrollSmoother"})};Qt.isScrolling=function(){return!!ai};Qt.snapDirectional=tf;Qt.addEventListener=function(r,t){var e=es[r]||(es[r]=[]);~e.indexOf(t)||e.push(t)};Qt.removeEventListener=function(r,t){var e=es[r],n=e&&e.indexOf(t);n>=0&&e.splice(n,1)};Qt.batch=function(r,t){var e=[],n={},i=t.interval||.016,s=t.batchMax||1e9,o=function(c,h){var u=[],f=[],d=wt.delayedCall(i,function(){h(u,f),u=[],f=[]}).pause();return function(_){u.length||d.restart(!0),u.push(_.trigger),f.push(_),s<=u.length&&d.progress(1)}},a;for(a in t)n[a]=a.substr(0,2)==="on"&&pn(t[a])&&a!=="onRefreshInit"?o(a,t[a]):t[a];return pn(s)&&(s=s(),en(Qt,"refresh",function(){return s=t.batchMax()})),aa(r).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,e.push(Qt.create(c))}),e};var rp=function(t,e,n,i){return e>i?t(i):e<0&&t(0),n>i?(i-e)/(n-e):n<0?e/(e-n):1},jc=function r(t,e){e===!0?t.style.removeProperty("touch-action"):t.style.touchAction=e===!0?"auto":e?"pan-"+e+(He.isTouch?" pinch-zoom":""):"none",t===Wn&&r(me,e)},el={auto:1,scroll:1},O1=function(t){var e=t.event,n=t.target,i=t.axis,s=(e.changedTouches?e.changedTouches[0]:e).target,o=s._gsap||wt.core.getCache(s),a=fn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==me&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(el[(l=ii(s)).overflowY]||el[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!ts(s)&&(el[(l=ii(s)).overflowY]||el[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(e.stopPropagation(),e._gsapAllow=!0)},m_=function(t,e,n,i){return He.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:i=i&&O1,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&en(xe,He.eventTypes[0],op,!1,!0)},onDisable:function(){return tn(xe,He.eventTypes[0],op,!0)}})},F1=/(input|label|select|textarea)/i,sp,op=function(t){var e=F1.test(t.target.tagName);(e||sp)&&(t._gsapAllow=!0,sp=e)},B1=function(t){Or(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var e=t,n=e.normalizeScrollX,i=e.momentum,s=e.allowNestedScroll,o=e.onRelease,a,l,c=An(t.target)||Wn,h=wt.core.globals().ScrollSmoother,u=h&&h.get(),f=er&&(t.content&&An(t.content)||u&&t.content!==!1&&!u.smooth()&&u.content()),d=xr(c,Ke),_=xr(c,Tn),g=1,p=(He.isTouch&&re.visualViewport?re.visualViewport.scale*re.visualViewport.width:re.outerWidth)/re.innerWidth,m=0,S=pn(i)?function(){return i(a)}:function(){return i||2.8},x,M,E=m_(c,t.type,!0,s),w=function(){return M=!1},y=vi,R=vi,L=function(){l=Ti(c,Ke),R=Xo(er?1:0,l),n&&(y=Xo(0,Ti(c,Tn))),x=jr},v=function(){f._gsap.y=Fo(parseFloat(f._gsap.y)+d.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},T=function(){if(M){requestAnimationFrame(w);var V=Fo(a.deltaY/2),rt=R(d.v-V);if(f&&rt!==d.v+d.offset){d.offset=rt-d.v;var P=Fo((parseFloat(f&&f._gsap.y)||0)-d.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+P+", 0, 1)",f._gsap.y=P+"px",d.cacheID=se.cache,zi()}return!0}d.offset&&v(),M=!0},I,k,O,K,N=function(){L(),I.isActive()&&I.vars.scrollY>l&&(d()>l?I.progress(1)&&d(l):I.resetTo("scrollY",l))};return f&&wt.set(f,{y:"+=0"}),t.ignoreCheck=function($){return er&&$.type==="touchmove"&&T()||g>1.05&&$.type!=="touchstart"||a.isGesturing||$.touches&&$.touches.length>1},t.onPress=function(){M=!1;var $=g;g=Fo((re.visualViewport&&re.visualViewport.scale||1)/p),I.pause(),$!==g&&jc(c,g>1.01?!0:n?!1:"x"),k=_(),O=d(),L(),x=jr},t.onRelease=t.onGestureStart=function($,V){if(d.offset&&v(),!V)K.restart(!0);else{se.cache++;var rt=S(),P,ct;n&&(P=_(),ct=P+rt*.05*-$.velocityX/.227,rt*=rp(_,P,ct,Ti(c,Tn)),I.vars.scrollX=y(ct)),P=d(),ct=P+rt*.05*-$.velocityY/.227,rt*=rp(d,P,ct,Ti(c,Ke)),I.vars.scrollY=R(ct),I.invalidate().duration(rt).play(.01),(er&&I.vars.scrollY>=l||P>=l-1)&&wt.to({},{onUpdate:N,duration:rt})}o&&o($)},t.onWheel=function(){I._ts&&I.pause(),fn()-m>1e3&&(x=0,m=fn())},t.onChange=function($,V,rt,P,ct){if(jr!==x&&L(),V&&n&&_(y(P[2]===V?k+($.startX-$.x):_()+V-P[1])),rt){d.offset&&v();var Rt=ct[2]===rt,Nt=Rt?O+$.startY-$.y:d()+rt-ct[1],q=R(Nt);Rt&&Nt!==q&&(O+=q-Nt),d(q)}(rt||V)&&zi()},t.onEnable=function(){jc(c,n?!1:"x"),Qt.addEventListener("refresh",N),en(re,"resize",N),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=_.smooth=!1),E.enable()},t.onDisable=function(){jc(c,!0),tn(re,"resize",N),Qt.removeEventListener("refresh",N),E.kill()},t.lockAxis=t.lockAxis!==!1,a=new He(t),a.iOS=er,er&&!d()&&d(1),er&&wt.ticker.add(vi),K=a._dc,I=wt.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:p_(d,d(),function(){return I.pause()})},onUpdate:zi,onComplete:K.vars.onComplete}),a};Qt.sort=function(r){if(pn(r))return ie.sort(r);var t=re.pageYOffset||0;return Qt.getAll().forEach(function(e){return e._sortY=e.trigger?t+e.trigger.getBoundingClientRect().top:e.start+re.innerHeight}),ie.sort(r||function(e,n){return(e.vars.refreshPriority||0)*-1e6+(e.vars.containerAnimation?1e6:e._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};Qt.observe=function(r){return new He(r)};Qt.normalizeScroll=function(r){if(typeof r=="undefined")return Mn;if(r===!0&&Mn)return Mn.enable();if(r===!1){Mn&&Mn.kill(),Mn=r;return}var t=r instanceof He?r:B1(r);return Mn&&Mn.target===t.target&&Mn.kill(),ts(t.target)&&(Mn=t),t};Qt.core={_getVelocityProp:ru,_inputObserver:m_,_scrollers:se,_proxies:wi,bridge:{ss:function(){ai||ns("scrollStart"),ai=fn()},ref:function(){return hn}}};i_()&&wt.registerPlugin(Qt);var ap="1.3.23";function __(r,t,e){return Math.max(r,Math.min(t,e))}function z1(r,t,e){return(1-e)*r+e*t}function k1(r,t,e,n){return z1(r,t,1-Math.exp(-e*n))}function H1(r,t){return(r%t+t)%t}var G1=class{constructor(){Lt(this,"isRunning",!1);Lt(this,"value",0);Lt(this,"from",0);Lt(this,"to",0);Lt(this,"currentTime",0);Lt(this,"lerp");Lt(this,"duration");Lt(this,"easing");Lt(this,"onUpdate")}advance(r){var e;if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=r;const n=__(0,this.currentTime/this.duration,1);t=n>=1;const i=t?1:this.easing(n);this.value=this.from+(this.to-this.from)*i}else this.lerp?(this.value=k1(this.value,this.to,this.lerp*60,r),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),(e=this.onUpdate)==null||e.call(this,this.value,t)}stop(){this.isRunning=!1}fromTo(r,t,{lerp:e,duration:n,easing:i,onStart:s,onUpdate:o}){this.from=this.value=r,this.to=t,this.lerp=e,this.duration=n,this.easing=i,this.currentTime=0,this.isRunning=!0,s==null||s(),this.onUpdate=o}};function V1(r,t){let e;return function(...n){clearTimeout(e),e=setTimeout(()=>{e=void 0,r.apply(this,n)},t)}}var W1=class{constructor(r,t,{autoResize:e=!0,debounce:n=250}={}){Lt(this,"width",0);Lt(this,"height",0);Lt(this,"scrollHeight",0);Lt(this,"scrollWidth",0);Lt(this,"debouncedResize");Lt(this,"wrapperResizeObserver");Lt(this,"contentResizeObserver");Lt(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Lt(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Lt(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=r,this.content=t,e&&(this.debouncedResize=V1(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var r,t;(r=this.wrapperResizeObserver)==null||r.disconnect(),(t=this.contentResizeObserver)==null||t.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},g_=class{constructor(){Lt(this,"events",{})}emit(r,...t){var n;const e=this.events[r]||[];for(let i=0,s=e.length;i<s;i++)(n=e[i])==null||n.call(e,...t)}on(r,t){return this.events[r]?this.events[r].push(t):this.events[r]=[t],()=>{var e;this.events[r]=(e=this.events[r])==null?void 0:e.filter(n=>t!==n)}}off(r,t){var e;this.events[r]=(e=this.events[r])==null?void 0:e.filter(n=>t!==n)}destroy(){this.events={}}};const X1=100/6,Ji={passive:!1};function lp(r,t){return r===1?X1:r===2?t:1}var Y1=class{constructor(r,t={wheelMultiplier:1,touchMultiplier:1}){Lt(this,"touchStart",{x:0,y:0});Lt(this,"lastDelta",{x:0,y:0});Lt(this,"window",{width:0,height:0});Lt(this,"emitter",new g_);Lt(this,"onTouchStart",r=>{const{clientX:t,clientY:e}=r.targetTouches?r.targetTouches[0]:r;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:r})});Lt(this,"onTouchMove",r=>{const{clientX:t,clientY:e}=r.targetTouches?r.targetTouches[0]:r,n=-(t-this.touchStart.x)*this.options.touchMultiplier,i=-(e-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:n,y:i},this.emitter.emit("scroll",{deltaX:n,deltaY:i,event:r})});Lt(this,"onTouchEnd",r=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:r})});Lt(this,"onWheel",r=>{let{deltaX:t,deltaY:e,deltaMode:n}=r;const i=lp(n,this.window.width),s=lp(n,this.window.height);t*=i,e*=s,t*=this.options.wheelMultiplier,e*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:e,event:r})});Lt(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=r,this.options=t,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,Ji),this.element.addEventListener("touchstart",this.onTouchStart,Ji),this.element.addEventListener("touchmove",this.onTouchMove,Ji),this.element.addEventListener("touchend",this.onTouchEnd,Ji)}on(r,t){return this.emitter.on(r,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,Ji),this.element.removeEventListener("touchstart",this.onTouchStart,Ji),this.element.removeEventListener("touchmove",this.onTouchMove,Ji),this.element.removeEventListener("touchend",this.onTouchEnd,Ji)}};const cp=r=>Math.min(1,1.001-2**(-10*r));var q1=class{constructor({wrapper:r=window,content:t=document.documentElement,eventsTarget:e=r,smoothWheel:n=!0,syncTouch:i=!1,syncTouchLerp:s=.075,touchInertiaExponent:o=1.7,duration:a,easing:l,lerp:c=.1,infinite:h=!1,orientation:u="vertical",gestureOrientation:f=u==="horizontal"?"both":"vertical",touchMultiplier:d=1,wheelMultiplier:_=1,autoResize:g=!0,prevent:p,virtualScroll:m,overscroll:S=!0,autoRaf:x=!1,anchors:M=!1,autoToggle:E=!1,allowNestedScroll:w=!1,__experimental__naiveDimensions:y=!1,naiveDimensions:R=y,stopInertiaOnNavigate:L=!1}={}){Lt(this,"_isScrolling",!1);Lt(this,"_isStopped",!1);Lt(this,"_isLocked",!1);Lt(this,"_preventNextNativeScrollEvent",!1);Lt(this,"_resetVelocityTimeout",null);Lt(this,"_rafId",null);Lt(this,"isTouching");Lt(this,"time",0);Lt(this,"userData",{});Lt(this,"lastVelocity",0);Lt(this,"velocity",0);Lt(this,"direction",0);Lt(this,"options");Lt(this,"targetScroll");Lt(this,"animatedScroll");Lt(this,"animate",new G1);Lt(this,"emitter",new g_);Lt(this,"dimensions");Lt(this,"virtualScroll");Lt(this,"onScrollEnd",r=>{r instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&r.stopPropagation()});Lt(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});Lt(this,"onTransitionEnd",r=>{var t;(t=r.propertyName)!=null&&t.includes("overflow")&&r.target===this.rootElement&&this.checkOverflow()});Lt(this,"onClick",r=>{const t=r.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.href).map(n=>new URL(n.href)),e=new URL(window.location.href);if(this.options.anchors){const n=t.find(i=>e.host===i.host&&e.pathname===i.pathname&&i.hash);if(n){const i=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,s=`#${n.hash.split("#")[1]}`;this.scrollTo(s,i);return}}if(this.options.stopInertiaOnNavigate&&t.some(n=>e.host===n.host&&e.pathname!==n.pathname)){this.reset();return}});Lt(this,"onPointerDown",r=>{r.button===1&&this.reset()});Lt(this,"onVirtualScroll",r=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(r)===!1)return;const{deltaX:t,deltaY:e,event:n}=r;if(this.emitter.emit("virtual-scroll",{deltaX:t,deltaY:e,event:n}),n.ctrlKey||n.lenisStopPropagation)return;const i=n.type.includes("touch"),s=n.type.includes("wheel");this.isTouching=n.type==="touchstart"||n.type==="touchmove";const o=t===0&&e===0;if(this.options.syncTouch&&i&&n.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}const a=this.options.gestureOrientation==="vertical"&&e===0||this.options.gestureOrientation==="horizontal"&&t===0;if(o||a)return;let l=n.composedPath();l=l.slice(0,l.indexOf(this.rootElement));const c=this.options.prevent,h=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical";if(l.find(_=>{var g,p,m,S,x;return _ instanceof HTMLElement&&(typeof c=="function"&&(c==null?void 0:c(_))||((g=_.hasAttribute)==null?void 0:g.call(_,"data-lenis-prevent"))||h==="vertical"&&((p=_.hasAttribute)==null?void 0:p.call(_,"data-lenis-prevent-vertical"))||h==="horizontal"&&((m=_.hasAttribute)==null?void 0:m.call(_,"data-lenis-prevent-horizontal"))||i&&((S=_.hasAttribute)==null?void 0:S.call(_,"data-lenis-prevent-touch"))||s&&((x=_.hasAttribute)==null?void 0:x.call(_,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.hasNestedScroll(_,{deltaX:t,deltaY:e}))}))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let u=e;this.options.gestureOrientation==="both"?u=Math.abs(e)>Math.abs(t)?e:t:this.options.gestureOrientation==="horizontal"&&(u=t),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&e>0||this.animatedScroll===this.limit&&e<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();const f=i&&this.options.syncTouch,d=i&&n.type==="touchend";d&&(u=Math.sign(u)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+u,{programmatic:!1,...f?{lerp:d?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});Lt(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const r=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-r,this.direction=Math.sign(this.animatedScroll-r),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});Lt(this,"raf",r=>{const t=r-(this.time||r);this.time=r,this.animate.advance(t*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=ap,window.lenis||(window.lenis={}),window.lenis.version=ap,u==="horizontal"&&(window.lenis.horizontal=!0),i===!0&&(window.lenis.touch=!0),(!r||r===document.documentElement)&&(r=window),typeof a=="number"&&typeof l!="function"?l=cp:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:r,content:t,eventsTarget:e,smoothWheel:n,syncTouch:i,syncTouchLerp:s,touchInertiaExponent:o,duration:a,easing:l,lerp:c,infinite:h,gestureOrientation:f,orientation:u,touchMultiplier:d,wheelMultiplier:_,autoResize:g,prevent:p,virtualScroll:m,overscroll:S,autoRaf:x,anchors:M,autoToggle:E,allowNestedScroll:w,naiveDimensions:R,stopInertiaOnNavigate:L},this.dimensions=new W1(r,t,{autoResize:g}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new Y1(e,{touchMultiplier:d,wheelMultiplier:_}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(r,t){return this.emitter.on(r,t)}off(r,t){return this.emitter.off(r,t)}get overflow(){const r=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[r]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(r){this.isHorizontal?this.options.wrapper.scrollTo({left:r,behavior:"instant"}):this.options.wrapper.scrollTo({top:r,behavior:"instant"})}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(r,{offset:t=0,immediate:e=!1,lock:n=!1,programmatic:i=!0,lerp:s=i?this.options.lerp:void 0,duration:o=i?this.options.duration:void 0,easing:a=i?this.options.easing:void 0,onStart:l,onComplete:c,force:h=!1,userData:u}={}){if((this.isStopped||this.isLocked)&&!h)return;let f=r,d=t;if(typeof f=="string"&&["top","left","start","#"].includes(f))f=0;else if(typeof f=="string"&&["bottom","right","end"].includes(f))f=this.limit;else{let _=null;if(typeof f=="string"?(_=document.querySelector(f),_||(f==="#top"?f=0:console.warn("Lenis: Target not found",f))):f instanceof HTMLElement&&(f!=null&&f.nodeType)&&(_=f),_){if(this.options.wrapper!==window){const M=this.rootElement.getBoundingClientRect();d-=this.isHorizontal?M.left:M.top}const g=_.getBoundingClientRect(),p=getComputedStyle(_),m=this.isHorizontal?Number.parseFloat(p.scrollMarginLeft):Number.parseFloat(p.scrollMarginTop),S=getComputedStyle(this.rootElement),x=this.isHorizontal?Number.parseFloat(S.scrollPaddingLeft):Number.parseFloat(S.scrollPaddingTop);f=(this.isHorizontal?g.left:g.top)+this.animatedScroll-(Number.isNaN(m)?0:m)-(Number.isNaN(x)?0:x)}}if(typeof f=="number"){if(f+=d,this.options.infinite){if(i){this.targetScroll=this.animatedScroll=this.scroll;const _=f-this.animatedScroll;_>this.limit/2?f-=this.limit:_<-this.limit/2&&(f+=this.limit)}}else f=__(0,f,this.limit);if(f===this.targetScroll){l==null||l(this),c==null||c(this);return}if(this.userData=u!=null?u:{},e){this.animatedScroll=this.targetScroll=f,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}i||(this.targetScroll=f),typeof o=="number"&&typeof a!="function"?a=cp:typeof a=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,f,{duration:o,easing:a,lerp:s,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",l==null||l(this)},onUpdate:(_,g)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=_-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=_,this.setScroll(this.scroll),i&&(this.targetScroll=_),g||this.emit(),g&&(this.reset(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(r,{deltaX:t,deltaY:e}){var w;const n=Date.now();r._lenis||(r._lenis={});const i=r._lenis;let s,o,a,l,c,h,u,f,d,_;if(n-((w=i.time)!=null?w:0)>2e3){i.time=Date.now();const y=window.getComputedStyle(r);if(i.computedStyle=y,s=["auto","overlay","scroll"].includes(y.overflowX),o=["auto","overlay","scroll"].includes(y.overflowY),c=["auto"].includes(y.overscrollBehaviorX),h=["auto"].includes(y.overscrollBehaviorY),i.hasOverflowX=s,i.hasOverflowY=o,!(s||o))return!1;u=r.scrollWidth,f=r.scrollHeight,d=r.clientWidth,_=r.clientHeight,a=u>d,l=f>_,i.isScrollableX=a,i.isScrollableY=l,i.scrollWidth=u,i.scrollHeight=f,i.clientWidth=d,i.clientHeight=_,i.hasOverscrollBehaviorX=c,i.hasOverscrollBehaviorY=h}else a=i.isScrollableX,l=i.isScrollableY,s=i.hasOverflowX,o=i.hasOverflowY,u=i.scrollWidth,f=i.scrollHeight,d=i.clientWidth,_=i.clientHeight,c=i.hasOverscrollBehaviorX,h=i.hasOverscrollBehaviorY;if(!(s&&a||o&&l))return!1;const g=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical";let p,m,S,x,M,E;if(g==="horizontal")p=Math.round(r.scrollLeft),m=u-d,S=t,x=s,M=a,E=c;else if(g==="vertical")p=Math.round(r.scrollTop),m=f-_,S=e,x=o,M=l,E=h;else return!1;return!E&&(p>=m||p<=0)?!0:(S>0?p<m:p>0)&&x&&M}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){var t,e;const r=this.options.wrapper;return this.isHorizontal?(t=r.scrollX)!=null?t:r.scrollLeft:(e=r.scrollY)!=null?e:r.scrollTop}get scroll(){return this.options.infinite?H1(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(r){this._isScrolling!==r&&(this._isScrolling=r,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(r){this._isStopped!==r&&(this._isStopped=r,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(r){this._isLocked!==r&&(this._isLocked=r,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let r="lenis";return this.options.autoToggle&&(r+=" lenis-autoToggle"),this.isStopped&&(r+=" lenis-stopped"),this.isLocked&&(r+=" lenis-locked"),this.isScrolling&&(r+=" lenis-scrolling"),this.isScrolling==="smooth"&&(r+=" lenis-smooth"),r}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(r=>{this.rootElement.classList.add(r)})}cleanUpClassName(){for(const r of Array.from(this.rootElement.classList))(r==="lenis"||r.startsWith("lenis-"))&&this.rootElement.classList.remove(r)}};ne.registerPlugin(Qt);const $1=[{id:"before",label:"Problem"},{id:"workflow",label:"Workflow"},{id:"methodology",label:"Method"},{id:"risk-map",label:"Risk Map"},{id:"findings",label:"Fixes"},{id:"impact",label:"Impact"},{id:"team",label:"Team"},{id:"cta",label:"Try Fibula"}];function K1(r){const{cam:t,subject:e,rain:n}=r,i=Y=>document.querySelector(Y),s=Y=>Array.from(document.querySelectorAll(Y)),o=new q1({duration:1.15});o.on("scroll",Qt.update),ne.ticker.add(Y=>o.raf(Y*1e3)),ne.ticker.lagSmoothing(0),s(".split-chars").forEach(Y=>r1(Y)),s("#workflow, #methodology, #risk-map, #findings, #impact, #team").forEach(Y=>{ne.set(Y.querySelectorAll(".eyebrow, .stage-body"),{autoAlpha:0,y:24})}),ne.set("#workflow .stage-title .char",{autoAlpha:0,x:-16,y:4});const l=i("#methodology .stage-title");ne.set(l,{autoAlpha:0,scale:1.06,transformOrigin:"0% 50%"}),l.style.filter="blur(14px)",ne.set("#risk-map .stage-title .char",{autoAlpha:0,x:()=>(Math.random()-.5)*26,y:()=>(Math.random()-.5)*30,rotation:()=>(Math.random()-.5)*26}),ne.set("#findings .stage-title .char",{autoAlpha:0,rotationX:-92,transformPerspective:600,transformOrigin:"50% 100%"}),ne.set("#impact .stage-title .char",{autoAlpha:0,scale:1.55}),ne.set("#team .stage-title .word",{autoAlpha:0,y:30}),ne.set(".wf-card",{autoAlpha:0,y:90,rotationX:7,transformPerspective:800}),ne.set(".wf-progress-num",{autoAlpha:0,y:10});const c=s(".ev-card");ne.set(c,{autoAlpha:0,x:0,y:Y=>[90,130,90][Y],rotation:0}),ne.set(".method-stats",{autoAlpha:0,y:40});const h=s(".risk-beat");ne.set(h,{autoAlpha:0}),h.forEach(Y=>{ne.set(Y.querySelectorAll(".risk-quote .char"),{autoAlpha:0,y:36}),ne.set(Y.querySelector(".risk-card"),{autoAlpha:0,x:90})}),ne.set(".journey",{autoAlpha:0}),ne.set(".fix-card",{autoAlpha:0,x:-100,yPercent:-50}),ne.set(".relight",{yPercent:-50,autoAlpha:0,scale:.85}),ne.set(".impact-left",{autoAlpha:0,x:-120,rotationY:9,transformPerspective:900}),ne.set(".impact-right",{autoAlpha:0,x:120,rotationY:-9,transformPerspective:900});const u=s(".member-card");(()=>{u.forEach(Y=>{ne.set(Y,{x:0,y:24,scale:.96,autoAlpha:0,rotation:0})})})(),ne.set(".students-label",{autoAlpha:0}),ne.set(".mentors-block",{autoAlpha:0,y:46}),ne.set(".mentor-card",{autoAlpha:0,y:22}),ne.set(".logos li",{autoAlpha:0,y:26}),ne.set("#cta .eyebrow, #cta .cta-body",{autoAlpha:0,y:30}),ne.set("#cta .stage-title .char",{yPercent:120,autoAlpha:0}),ne.set("#cta .btn",{autoAlpha:0,y:38,scale:.92}),ne.set("#act-converge .converge-line .char",{autoAlpha:0,x:(Y,J,pt)=>(Y-(pt.length-1)/2)*14}),ne.set("#act-converge .converge-sub",{autoAlpha:0});const d={};function _(Y,J){const pt=ne.timeline({defaults:{ease:"power2.out"},scrollTrigger:{trigger:Y,start:"top top",end:()=>"+="+Math.round(window.innerHeight*J/100),pin:!0,scrub:!0,anticipatePin:1,invalidateOnRefresh:!0}});return d[Y.slice(1)]=pt.scrollTrigger,pt}function g(Y,J,pt=0){const At=i(J),Et=At.querySelector(".eyebrow"),D=At.querySelector(".stage-body");Et&&Y.to(Et,{autoAlpha:1,y:0,duration:.4},pt),D&&Y.to(D,{autoAlpha:1,y:0,duration:.5},pt+.3)}function p(Y,J,pt,At=0,Et=1.2){const D=e.layouts[J],qt=e.layouts[pt];Y.fromTo(e.hubPos,{x:St=>D.hubs[St][0],y:St=>D.hubs[St][1],z:St=>D.hubs[St][2]},{x:St=>qt.hubs[St][0],y:St=>qt.hubs[St][1],z:St=>qt.hubs[St][2],duration:Et,ease:"power2.inOut",immediateRender:!1},At),Y.fromTo(e.satPos,{x:St=>D.sats[St][0],y:St=>D.sats[St][1],z:St=>D.sats[St][2]},{x:St=>qt.sats[St][0],y:St=>qt.sats[St][1],z:St=>qt.sats[St][2],duration:Et*.85,ease:"power3.inOut",immediateRender:!1,stagger:{each:Et*.012,from:"random"}},At)}const m=(Y,J,pt,At,Et,D)=>{Y.fromTo(S(J),{draw:pt},{draw:At,immediateRender:!1,...Et},D)},S=Y=>Y.map(J=>J.tube),x=s("#before .hero-headline .char");ne.timeline({delay:.2,defaults:{ease:"power3.out"}}).from("#topnav",{y:-28,autoAlpha:0,duration:.7},0).from("#before .kicker",{autoAlpha:0,y:18,duration:.6},.15).fromTo(x,{y:()=>-(220+Math.random()*420),rotation:()=>(Math.random()-.5)*56,autoAlpha:0},{y:0,rotation:0,autoAlpha:1,duration:1.05,ease:"back.out(1.1)",stagger:{each:.015,from:"random"}},.3).from("#before .hero-body",{autoAlpha:0,y:30,duration:.7},1.25).from("#before .scroll-hint",{autoAlpha:0,duration:.6},1.55),_("#before",110).to(x,{y:()=>-(130+Math.random()*330),rotation:()=>(Math.random()-.5)*44,autoAlpha:0,duration:1,ease:"power2.in",stagger:{each:.01,from:"random"}},0).to("#before .kicker, #before .hero-body, #before .scroll-hint",{autoAlpha:0,y:-44,duration:.6},0).to(t,{z:14.6,duration:1.2,ease:"power1.inOut"},0),_("#act-converge",170).to(n.params,{gather:1,duration:1.6,ease:"power2.inOut"},0).to(t,{z:13.2,duration:2.2,ease:"power1.inOut"},0).to("#act-converge .converge-line .char",{autoAlpha:1,x:0,duration:.6,stagger:{each:.012,from:"edges"},ease:"power3.out"},.15).to("#act-converge .converge-sub",{autoAlpha:1,duration:.4},.55).to(e.params,{scale:1,duration:.7,ease:"back.out(1.4)"},.9).to(e.hubScale,{v:1,duration:.5,ease:"back.out(2.2)",stagger:.1},1).fromTo(S(e.chain),{draw:0},{draw:1,duration:.55,stagger:.18,ease:"power2.inOut",immediateRender:!1},1.2).fromTo(e.satScl,{v:0},{v:1,duration:.4,ease:"back.out(2)",stagger:{each:.012,from:"random"},immediateRender:!1},1.3).fromTo(S(e.spokes),{draw:0},{draw:1,duration:.5,stagger:.012,immediateRender:!1},1.45).to(e.params,{labelAlpha:1,particleAlpha:.95,duration:.4},1.85).to("#act-converge .converge-line .char",{autoAlpha:0,y:-30,duration:.35,stagger:.008},2.05).to("#act-converge .converge-sub",{autoAlpha:0,duration:.3},2.1);const y=[-4.2,-1.4,1.4,4.2],R=s(".wf-card"),L=s(".wf-progress-num"),v=_("#workflow",300);g(v,"#workflow",0),v.to("#workflow .stage-title .char",{autoAlpha:1,x:0,y:0,duration:.5,stagger:{each:.018,from:"start"},ease:"power2.out"},.05),v.fromTo(n.params,{ambient:0},{ambient:.85,duration:1,immediateRender:!1},0),v.to(e.params,{methodSignal:0,riskSignal:0,repairSignal:0,confidenceSignal:0,duration:.4},0);for(let Y=0;Y<4;Y++){const J=.7+Y*2;v.to(t,{x:y[Y]*.55,tx:y[Y]*.8,z:12.2,duration:.9,ease:"power2.inOut"},J),v.to(e.hubActive[Y],{v:1,duration:.35},J+.15),v.to(R[Y],{autoAlpha:1,y:0,rotationX:0,duration:.55,ease:"power3.out"},J+.25),v.to(L[Y],{autoAlpha:1,y:0,duration:.25},J+.25),Y>0&&(v.to(R[Y-1],{autoAlpha:0,y:-70,duration:.4,ease:"power2.in"},J),v.to(e.hubActive[Y-1],{v:0,duration:.3},J),v.to(L[Y-1],{autoAlpha:0,y:-10,duration:.2},J))}v.to(t,{x:0,tx:0,z:12.8,duration:.9,ease:"power2.inOut"},8.9),v.to(R[3],{autoAlpha:0,y:-70,duration:.4},8.9),v.to(e.hubActive[3],{v:0,duration:.3},8.9),v.to(L[3],{autoAlpha:0,duration:.2},8.9);const T=_("#methodology",200);g(T,"#methodology",0),T.to(l,{autoAlpha:1,scale:1,duration:.7,ease:"power2.out"},.05);const I={b:14};T.to(I,{b:0,duration:.7,ease:"power2.out",onUpdate:()=>{l.style.filter=`blur(${I.b}px)`}},.05),p(T,"workflow","method",.2,1.3),T.to(e.params,{flowSpeed:.45,methodSignal:1,riskSignal:0,repairSignal:0,confidenceSignal:0,duration:.8},.2),m(T,e.threads,0,1,{duration:.7,stagger:.05},1),T.to(c,{autoAlpha:1,x:0,y:0,rotation:0,duration:.7,ease:"back.out(1.5)",stagger:{each:.05,from:"center"}},1.5),T.to(".method-stats",{autoAlpha:1,y:0,duration:.5},2.7),s(".stat-num").forEach(Y=>{const J=+Y.dataset.count,pt=Y.dataset.suffix||"",At={v:0};T.to(At,{v:J,duration:.9,ease:"power1.out",onUpdate:()=>{Y.textContent=Math.round(At.v)+pt}},2.8)});const k=h.map(Y=>Y.querySelector(".risk-card")),O=s(".journey-stop"),K=s(".journey-dot"),N=_("#risk-map",380);g(N,"#risk-map",0),N.to("#risk-map .stage-title .char",{autoAlpha:1,x:0,y:0,rotation:0,duration:.5,stagger:{each:.014,from:"random"},ease:"back.out(1.7)"},.05),p(N,"method","risk",.2,1.1),m(N,e.threads,1,0,{duration:.5,stagger:.02},.2),N.to(e.params,{flowSpeed:.25,methodSignal:0,riskSignal:1,repairSignal:0,confidenceSignal:0,duration:.6},.3),N.to(".journey",{autoAlpha:1,duration:.4},.5),e.chain.forEach(Y=>{N.fromTo(Y.tube.mat.emissive,{r:Us.r,g:Us.g,b:Us.b},{r:1,g:.62,b:.1,duration:1.2,immediateRender:!1},.4)});const $=[-.9,-.3,.1,.7,1.1];for(let Y=0;Y<5;Y++){const J=1.1+Y*2,pt=h[Y];Y>0&&N.to(h[Y-1],{autoAlpha:0,duration:.3,ease:"power1.in"},J-.2),N.to(pt,{autoAlpha:1,duration:.15},J),N.to(pt.querySelectorAll(".risk-quote .char"),{autoAlpha:1,y:0,duration:.4,stagger:.008,ease:"power3.out"},J+.05),N.to(k[Y],{autoAlpha:1,x:0,duration:.5,ease:"power3.out"},J+.35),N.fromTo(e.branches[Y].tube,{draw:0},{draw:1,duration:.5,ease:"power3.out",immediateRender:!1},J+.1),N.fromTo(e.flares[Y].state,{v:0},{v:1,duration:.4,ease:"back.out(2.5)",immediateRender:!1},J+.1),N.to(e.params,{jitter:.55,duration:.12},J+.08).to(e.params,{jitter:.14,duration:.5},J+.26),N.to(K[Y],{backgroundColor:"#ffc000",boxShadow:"0 0 12px rgba(255,192,0,0.95)",duration:.2},J+.1),N.to(O[Y],{color:"rgb(1,61,124)",duration:.2},J+.1),N.to("#vignette",{opacity:.14+Y*.09,duration:.4},J+.2),N.to(t,{x:$[Y],duration:.8,ease:"power2.inOut"},J)}const V=s(".fix-card"),rt=[[0,1],[2],[3,4]],P=_("#findings",290);g(P,"#findings",0),P.to("#findings .stage-title .char",{autoAlpha:1,rotationX:0,duration:.55,stagger:{each:.02,from:"start"},ease:"back.out(1.4)"},.05),P.to(h[4],{autoAlpha:0,duration:.4},0),P.to(".journey",{autoAlpha:0,duration:.4},0),P.to(e.params,{methodSignal:0,riskSignal:0,repairSignal:1,confidenceSignal:0,duration:.35},0),P.to(t,{x:0,duration:1,ease:"power2.inOut"},.2),p(P,"risk","workflow",.5,4.2),P.to(e.params,{jitter:0,riskSignal:0,repairSignal:1,confidenceSignal:0,duration:2},1);const ct=[.8,2.6,4.4];for(let Y=0;Y<3;Y++){const J=ct[Y];Y>0&&P.to(V[Y-1],{autoAlpha:0,x:-70,duration:.35},J-.15),P.to(V[Y],{autoAlpha:1,x:0,duration:.5,ease:"power3.out"},J),rt[Y].forEach((pt,At)=>{const Et=J+.4+At*.3;P.to(e.pulses[pt],{on:1,duration:.08},Et).fromTo(e.pulses[pt],{t:0},{t:1,duration:.4,ease:"power1.in",immediateRender:!1},Et).to(e.pulses[pt],{on:0,duration:.15},Et+.42),P.fromTo(e.branches[pt].tube,{draw:1},{draw:0,duration:.45,ease:"power2.in",immediateRender:!1},Et),P.fromTo(e.flares[pt].sprite.material.color,{r:1,g:192/255,b:0},{r:.38,g:.74,b:.95,duration:.3,immediateRender:!1},Et),P.fromTo(e.flares[pt].state,{v:1},{v:0,duration:.35,immediateRender:!1},Et+.12)})}e.chain.forEach(Y=>{P.fromTo(Y.tube.mat.emissive,{r:1,g:.62,b:.1},{r:Us.r,g:Us.g,b:Us.b,duration:1.4,immediateRender:!1},3.2)}),P.fromTo("#vignette",{opacity:.5},{opacity:0,duration:.8,immediateRender:!1},3.4),P.to(V[2],{autoAlpha:0,x:-70,duration:.35},6),P.to(".relight",{autoAlpha:1,scale:1,duration:.5,ease:"back.out(1.6)"},6.2),P.to(e.runner,{on:1,duration:.1},6.3).to(e.runner,{t:1,duration:.7,ease:"power1.inOut"},6.35).to(e.runner,{on:0,duration:.15},7.05),P.to(e.params,{flowSpeed:1.7,particleAlpha:1,duration:.5},6.4).to(e.params,{flowSpeed:1.15,duration:.6},7.1);const Rt=_("#impact",240);g(Rt,"#impact",0),Rt.to("#impact .stage-title .char",{autoAlpha:1,scale:1,duration:.5,stagger:{each:.016,from:"center"},ease:"power4.out"},.05),Rt.to(".relight",{autoAlpha:0,duration:.3},0),p(Rt,"workflow","impact",.3,1.4),m(Rt,e.chain,1,0,{duration:.6},.3),m(Rt,e.spokes,1,0,{duration:.7,stagger:.008},.3),Rt.fromTo(e.params,{particleAlpha:1,labelAlpha:1},{particleAlpha:0,flowSpeed:.6,labelAlpha:0,riskSignal:0,repairSignal:0,confidenceSignal:1,duration:.6,immediateRender:!1},.35),m(Rt,e.arcs,0,1,{duration:.5,stagger:.015},1.3),Rt.to(t,{z:11.8,ty:.62,duration:1.2,ease:"power1.inOut"},.3),Rt.to(".impact-left",{autoAlpha:1,x:0,rotationY:0,duration:.6,ease:"power3.out"},2.3),Rt.to(".impact-right",{autoAlpha:1,x:0,rotationY:0,duration:.6,ease:"power3.out"},3.5),Rt.to(e.stamp,{a:.85,duration:.1},4.6).to(e.stamp,{s:1.7,duration:.5,ease:"power2.out"},4.62).to(e.stamp,{a:0,duration:.35},4.85),Rt.to(e.params,{glowBoost:.5,duration:.2},4.6).to(e.params,{glowBoost:0,duration:.5},4.9);const Nt=_("#team",310);g(Nt,"#team",0),Nt.to("#team .stage-title .word",{autoAlpha:1,y:0,duration:.6,stagger:.08,ease:"back.out(1.6)"},.05),m(Nt,e.arcs,1,0,{duration:.6,stagger:.01},.5),p(Nt,"impact","bloom",.5,1.5),Nt.to(e.params,{methodSignal:0,riskSignal:0,repairSignal:0,confidenceSignal:.18,duration:.8},.4),Nt.fromTo(e.satScl,{v:1},{v:0,duration:.5,stagger:{each:.02,from:"random"},immediateRender:!1},1.3),Nt.fromTo(e.group.position,{y:0,z:0},{y:1.5,z:-2.6,duration:1.2,ease:"power2.inOut",immediateRender:!1},.6),Nt.fromTo(e.params,{scale:1},{scale:.55,duration:1.2,immediateRender:!1},.6),Nt.to(".students-label",{autoAlpha:1,duration:.3},1.2),u.forEach((Y,J)=>{Nt.to(Y,{x:0,y:0,scale:1,rotation:0,autoAlpha:1,duration:.45,ease:"power2.out"},.95+J*.06)}),Nt.to(".mentors-block",{autoAlpha:1,y:0,duration:.45,ease:"power1.out"},1.45),Nt.to(".mentor-card",{autoAlpha:1,y:0,duration:.32,stagger:.04,ease:"power1.out"},1.55),Nt.to(".logos li",{autoAlpha:1,y:0,duration:.32,stagger:.04},1.78);const q=_("#cta",170);q.fromTo(e.group.position,{y:1.5,z:-2.6},{y:1.15,z:0,duration:1.2,ease:"power2.inOut",immediateRender:!1},0),q.fromTo(e.params,{scale:.55},{scale:.3,glowBoost:.25,duration:1.2,immediateRender:!1},0),q.to(e.group.rotation,{y:1.4,duration:2.4,ease:"none"},0),q.fromTo(n.params,{ambient:.85},{ambient:0,duration:1,immediateRender:!1},0),q.to(t,{x:0,z:13.5,ty:.5,duration:1.2,ease:"power1.inOut"},0),q.to("#cta .eyebrow",{autoAlpha:1,y:0,duration:.4},.3),q.to("#cta .stage-title .char",{yPercent:0,autoAlpha:1,duration:.6,stagger:{each:.02,from:"center"},ease:"back.out(1.5)"},.4),q.to("#cta .cta-body",{autoAlpha:1,y:0,duration:.5},.8),q.to("#cta .btn",{autoAlpha:1,y:0,scale:1,duration:.5,stagger:.12,ease:"back.out(1.7)"},1.05);const et=document.getElementById("dots");$1.forEach(({id:Y,label:J})=>{const pt=document.createElement("button");pt.className="dot",pt.setAttribute("aria-label",J),pt.innerHTML=`<span class="dot-tip">${J}</span>`,pt.addEventListener("click",()=>lt(Y)),et.appendChild(pt);const At=d[Y]?d[Y].trigger:document.getElementById(Y);Qt.create({trigger:At,start:"top center",end:"bottom center",onToggle:Et=>pt.classList.toggle("active",Et.isActive)})});const ut={"act-converge":.3,workflow:.16,methodology:.32,"risk-map":.23,findings:.14,impact:.24,team:.82,cta:.62};function lt(Y){var At;if(Y==="before"){o.scrollTo(0,{duration:1.4});return}const J=d[Y],pt=J?J.start+(J.end-J.start)*(ut[Y]||.15):((At=document.getElementById(Y))==null?void 0:At.offsetTop)||0;o.scrollTo(pt,{duration:1.5})}return document.addEventListener("click",Y=>{const J=Y.target.closest('a[href^="#"]');if(!J)return;Y.preventDefault();const pt=J.getAttribute("href").slice(1);history.replaceState(null,"","#"+pt),lt(pt)}),window.addEventListener("load",()=>{if(Qt.refresh(),location.hash.length>1){const Y=location.hash.slice(1);requestAnimationFrame(()=>{const J=d[Y];J&&o.scrollTo(J.start+(J.end-J.start)*(ut[Y]||.15),{immediate:!0})})}}),{lenis:o,scrollToSection:lt}}const Us={r:98/255,g:188/255,b:241/255};function j1(){const r=document.createElement("canvas");r.width=r.height=128;const t=r.getContext("2d"),e=t.createImageData(128,128);for(let c=0;c<e.data.length;c+=4){const h=Math.random()*255;e.data[c]=e.data[c+1]=e.data[c+2]=h,e.data[c+3]=26}t.putImageData(e,0,0);const n=document.getElementById("grain");if(n.style.backgroundImage=`url(${r.toDataURL()})`,n.style.backgroundRepeat="repeat",!window.matchMedia("(pointer: fine)").matches)return;const i=document.getElementById("cursor"),s=i.querySelector(".cursor-dot"),o=i.querySelector(".cursor-ring"),a={x:innerWidth/2,y:innerHeight/2},l={x:a.x,y:a.y};window.addEventListener("mousemove",c=>{a.x=c.clientX,a.y=c.clientY,s.style.transform=`translate3d(${a.x}px, ${a.y}px, 0)`}),ne.ticker.add(()=>{l.x+=(a.x-l.x)*.16,l.y+=(a.y-l.y)*.16,o.style.transform=`translate3d(${l.x}px, ${l.y}px, 0)`}),document.addEventListener("mouseover",c=>{c.target.closest("a, button")&&i.classList.add("hovering")}),document.addEventListener("mouseout",c=>{c.target.closest("a, button")&&i.classList.remove("hovering")}),document.querySelectorAll(".magnetic").forEach(c=>{c.addEventListener("mousemove",h=>{const u=c.getBoundingClientRect(),f=h.clientX-(u.left+u.width/2),d=h.clientY-(u.top+u.height/2);ne.to(c,{x:f*.28,y:d*.34,duration:.4,ease:"power2.out"})}),c.addEventListener("mouseleave",()=>{ne.to(c,{x:0,y:0,duration:.7,ease:"elastic.out(1, 0.4)"})})})}function J1(){const r=new x1(document.getElementById("gl"));K1(r),j1(),ne.ticker.add(r.render)}export{J1 as init};
