var Wm=Object.defineProperty;var Xm=(r,t,e)=>t in r?Wm(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var Lt=(r,t,e)=>Xm(r,typeof t!="symbol"?t+"":t,e);function Li(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Fd(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var qn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Wa={duration:.5,overwrite:!1,delay:0},$u,rn,De,si=1e8,be=1/si,Uc=Math.PI*2,Ym=Uc/4,qm=0,Bd=Math.sqrt,$m=Math.cos,Km=Math.sin,tn=function(t){return typeof t=="string"},Ne=function(t){return typeof t=="function"},zi=function(t){return typeof t=="number"},Ku=function(t){return typeof t=="undefined"},bi=function(t){return typeof t=="object"},Rn=function(t){return t!==!1},ju=function(){return typeof window!="undefined"},ro=function(t){return Ne(t)||tn(t)},zd=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},fn=Array.isArray,jm=/random\([^)]+\)/g,Zm=/,\s*/g,zh=/(?:-?\.?\d|\.)+/gi,kd=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ls=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Fl=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Hd=/[+-]=-?[.\d]+/,Jm=/[^,'"\[\]\s]+/gi,Qm=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ie,_i,Nc,Zu,Kn={},ul={},Gd,Vd=function(t){return(ul=Ys(t,Kn))&&Ln},Ju=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Xa=function(t,e){return!e&&console.warn(t)},Wd=function(t,e){return t&&(Kn[t]=e)&&ul&&(ul[t]=e)||Kn},Ya=function(){return 0},t_={suppressEvents:!0,isStart:!0,kill:!1},$o={suppressEvents:!0,kill:!1},e_={suppressEvents:!0},Qu={},rr=[],Oc={},Xd,zn={},Bl={},kh=30,Ko=[],th="",eh=function(t){var e=t[0],n,i;if(bi(e)||Ne(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=Ko.length;i--&&!Ko[i].targetTest(e););n=Ko[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new dp(t[i],n)))||t.splice(i,1);return t},Br=function(t){return t._gsap||eh(ai(t))[0]._gsap},Yd=function(t,e,n){return(n=t[e])&&Ne(n)?t[e]():Ku(n)&&t.getAttribute&&t.getAttribute(e)||n},Cn=function(t,e){return(t=t.split(",")).forEach(e)||t},ze=function(t){return Math.round(t*1e5)/1e5||0},Le=function(t){return Math.round(t*1e7)/1e7||0},Os=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},n_=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},hl=function(){var t=rr.length,e=rr.slice(0),n,i;for(Oc={},rr.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},nh=function(t){return!!(t._initted||t._startAt||t.add)},qd=function(t,e,n,i){rr.length&&!rn&&hl(),t.render(e,n,!!(rn&&e<0&&nh(t))),rr.length&&!rn&&hl()},$d=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(Jm).length<2?e:tn(t)?t.trim():t},Kd=function(t){return t},jn=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},i_=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},Ys=function(t,e){for(var n in e)t[n]=e[n];return t},Hh=function r(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=bi(e[n])?r(t[n]||(t[n]={}),e[n]):e[n]);return t},fl=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},La=function(t){var e=t.parent||Ie,n=t.keyframes?i_(fn(t.keyframes)):jn;if(Rn(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},r_=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},jd=function(t,e,n,i,s){var a=t[i],o;if(s)for(o=e[s];a&&a[s]>o;)a=a._prev;return a?(e._next=a._next,a._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=a,e.parent=e._dp=t,e},Al=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,a=e._next;s?s._next=a:t[n]===e&&(t[n]=a),a?a._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},ur=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},zr=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},s_=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Fc=function(t,e,n,i){return t._startAt&&(rn?t._startAt.revert($o):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},a_=function r(t){return!t||t._ts&&r(t.parent)},Gh=function(t){return t._repeat?qs(t._tTime,t=t.duration()+t._rDelay)*t:0},qs=function(t,e){var n=Math.floor(t=Le(t/e));return t&&n===t?n-1:n},dl=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Rl=function(t){return t._end=Le(t._start+(t._tDur/Math.abs(t._ts||t._rts||be)||0))},Cl=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=Le(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Rl(t),n._dirty||zr(n,t)),t},Zd=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=dl(t.rawTime(),e),(!e._dur||eo(0,e.totalDuration(),n)-e._tTime>be)&&e.render(n,!0)),zr(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-be}},xi=function(t,e,n,i){return e.parent&&ur(e),e._start=Le((zi(n)?n:n||t!==Ie?ei(t,n,e):t._time)+e._delay),e._end=Le(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),jd(t,e,"_first","_last",t._sort?"_start":0),Bc(e)||(t._recent=e),i||Zd(t,e),t._ts<0&&Cl(t,t._tTime),t},Jd=function(t,e){return(Kn.ScrollTrigger||Ju("scrollTrigger",e))&&Kn.ScrollTrigger.create(e,t)},Qd=function(t,e,n,i,s){if(rh(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!rn&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Xd!==Vn.frame)return rr.push(t),t._lazy=[s,i],1},o_=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},Bc=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},l_=function(t,e,n,i){var s=t.ratio,a=e<0||!e&&(!t._start&&o_(t)&&!(!t._initted&&Bc(t))||(t._ts<0||t._dp._ts<0)&&!Bc(t))?0:1,o=t._rDelay,l=0,c,u,d;if(o&&t._repeat&&(l=eo(0,t._tDur,e),u=qs(l,o),t._yoyo&&u&1&&(a=1-a),u!==qs(t._tTime,o)&&(s=1-a,t.vars.repeatRefresh&&t._initted&&t.invalidate())),a!==s||rn||i||t._zTime===be||!e&&t._zTime){if(!t._initted&&Qd(t,e,i,n,l))return;for(d=t._zTime,t._zTime=e||(n?be:0),n||(n=e&&!d),t.ratio=a,t._from&&(a=1-a),t._time=0,t._tTime=l,c=t._pt;c;)c.r(a,c.d),c=c._next;e<0&&Fc(t,e,n,!0),t._onUpdate&&!n&&Xn(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&Xn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===a&&(a&&ur(t,1),!n&&!rn&&(Xn(t,a?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},c_=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},$s=function(t,e,n,i){var s=t._repeat,a=Le(e)||0,o=t._tTime/t._tDur;return o&&!i&&(t._time*=a/t._dur),t._dur=a,t._tDur=s?s<0?1e10:Le(a*(s+1)+t._rDelay*s):a,o>0&&!i&&Cl(t,t._tTime=t._tDur*o),t.parent&&Rl(t),n||zr(t.parent,t),t},Vh=function(t){return t instanceof wn?zr(t):$s(t,t._dur)},u_={_start:0,endTime:Ya,totalDuration:Ya},ei=function r(t,e,n){var i=t.labels,s=t._recent||u_,a=t.duration()>=si?s.endTime(!1):t._dur,o,l,c;return tn(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",o=e.indexOf("="),l==="<"||l===">"?(o>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(e in i||(i[e]=a),i[e]):(l=parseFloat(e.charAt(o-1)+e.substr(o+1)),c&&n&&(l=l/100*(fn(n)?n[0]:n).totalDuration()),o>1?r(t,e.substr(0,o-1),n)+l:a+l)):e==null?a:+e},Ia=function(t,e,n){var i=zi(e[1]),s=(i?2:1)+(t<2?0:1),a=e[s],o,l;if(i&&(a.duration=e[1]),a.parent=n,t){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Rn(l.vars.inherit)&&l.parent;a.immediateRender=Rn(o.immediateRender),t<2?a.runBackwards=1:a.startAt=e[s-1]}return new We(e[0],a,e[s+1])},_r=function(t,e){return t||t===0?e(t):e},eo=function(t,e,n){return n<t?t:n>e?e:n},un=function(t,e){return!tn(t)||!(e=Qm.exec(t))?"":e[1]},h_=function(t,e,n){return _r(n,function(i){return eo(t,e,i)})},zc=[].slice,tp=function(t,e){return t&&bi(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&bi(t[0]))&&!t.nodeType&&t!==_i},f_=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return tn(i)&&!e||tp(i,1)?(s=n).push.apply(s,ai(i)):n.push(i)})||n},ai=function(t,e,n){return De&&!e&&De.selector?De.selector(t):tn(t)&&!n&&(Nc||!Ks())?zc.call((e||Zu).querySelectorAll(t),0):fn(t)?f_(t,n):tp(t)?zc.call(t,0):t?[t]:[]},kc=function(t){return t=ai(t)[0]||Xa("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return ai(e,n.querySelectorAll?n:n===t?Xa("Invalid scope")||Zu.createElement("div"):t)}},ep=function(t){return t.sort(function(){return .5-Math.random()})},np=function(t){if(Ne(t))return t;var e=bi(t)?t:{each:t},n=kr(e.ease),i=e.from||0,s=parseFloat(e.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=e.axis,u=i,d=i;return tn(i)?u=d={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(u=i[0],d=i[1]),function(h,p,_){var g=(_||e).length,f=a[g],m,S,x,M,A,w,E,C,L;if(!f){if(L=e.grid==="auto"?0:(e.grid||[1,si])[1],!L){for(E=-si;E<(E=_[L++].getBoundingClientRect().left)&&L<g;);L<g&&L--}for(f=a[g]=[],m=l?Math.min(L,g)*u-.5:i%L,S=L===si?0:l?g*d/L-.5:i/L|0,E=0,C=si,w=0;w<g;w++)x=w%L-m,M=S-(w/L|0),f[w]=A=c?Math.abs(c==="y"?M:x):Bd(x*x+M*M),A>E&&(E=A),A<C&&(C=A);i==="random"&&ep(f),f.max=E-C,f.min=C,f.v=g=(parseFloat(e.amount)||parseFloat(e.each)*(L>g?g-1:c?c==="y"?g/L:L:Math.max(L,g/L))||0)*(i==="edges"?-1:1),f.b=g<0?s-g:s,f.u=un(e.amount||e.each)||0,n=n&&g<0?b_(n):n}return g=(f[h]-f.min)/f.max||0,Le(f.b+(n?n(g):g)*f.v)+f.u}},Hc=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=Le(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(zi(n)?0:un(n))}},ip=function(t,e){var n=fn(t),i,s;return!n&&bi(t)&&(i=n=t.radius||si,t.values?(t=ai(t.values),(s=!zi(t[0]))&&(i*=i)):t=Hc(t.increment)),_r(e,n?Ne(t)?function(a){return s=t(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=si,u=0,d=t.length,h,p;d--;)s?(h=t[d].x-o,p=t[d].y-l,h=h*h+p*p):h=Math.abs(t[d]-o),h<c&&(c=h,u=d);return u=!i||c<=i?t[u]:a,s||u===a||zi(a)?u:u+un(a)}:Hc(t))},rp=function(t,e,n,i){return _r(fn(t)?!e:n===!0?!!(n=0):!i,function(){return fn(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},d_=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,a){return a(s)},i)}},p_=function(t,e){return function(n){return t(parseFloat(n))+(e||un(n))}},m_=function(t,e,n){return ap(t,e,0,1,n)},sp=function(t,e,n){return _r(n,function(i){return t[~~e(i)]})},__=function r(t,e,n){var i=e-t;return fn(t)?sp(t,r(0,t.length),e):_r(n,function(s){return(i+(s-t)%i)%i+t})},g_=function r(t,e,n){var i=e-t,s=i*2;return fn(t)?sp(t,r(0,t.length-1),e):_r(n,function(a){return a=(s+(a-t)%s)%s||0,t+(a>i?s-a:a)})},qa=function(t){return t.replace(jm,function(e){var n=e.indexOf("[")+1,i=e.substring(n||7,n?e.indexOf("]"):e.length-1).split(Zm);return rp(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},ap=function(t,e,n,i,s){var a=e-t,o=i-n;return _r(s,function(l){return n+((l-t)/a*o||0)})},v_=function r(t,e,n,i){var s=isNaN(t+e)?0:function(p){return(1-p)*t+p*e};if(!s){var a=tn(t),o={},l,c,u,d,h;if(n===!0&&(i=1)&&(n=null),a)t={p:t},e={p:e};else if(fn(t)&&!fn(e)){for(u=[],d=t.length,h=d-2,c=1;c<d;c++)u.push(r(t[c-1],t[c]));d--,s=function(_){_*=d;var g=Math.min(h,~~_);return u[g](_-g)},n=e}else i||(t=Ys(fn(t)?[]:{},t));if(!u){for(l in e)ih.call(o,t,l,"get",e[l]);s=function(_){return oh(_,o)||(a?t.p:t)}}}return _r(n,s)},Wh=function(t,e,n){var i=t.labels,s=si,a,o,l;for(a in i)o=i[a]-e,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},Xn=function(t,e,n){var i=t.vars,s=i[e],a=De,o=t._ctx,l,c,u;if(s)return l=i[e+"Params"],c=i.callbackScope||t,n&&rr.length&&hl(),o&&(De=o),u=l?s.apply(c,l):s.call(c),De=a,u},Ta=function(t){return ur(t),t.scrollTrigger&&t.scrollTrigger.kill(!!rn),t.progress()<1&&Xn(t,"onInterrupt"),t},Is,op=[],lp=function(t){if(t)if(t=!t.name&&t.default||t,ju()||t.headless){var e=t.name,n=Ne(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:Ya,render:oh,add:ih,kill:N_,modifier:U_,rawVars:0},a={targetTest:0,get:0,getSetter:ah,aliases:{},register:0};if(Ks(),t!==i){if(zn[e])return;jn(i,jn(fl(t,s),a)),Ys(i.prototype,Ys(s,fl(t,a))),zn[i.prop=e]=i,t.targetTest&&(Ko.push(i),Qu[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Wd(e,i),t.register&&t.register(Ln,i,Pn)}else op.push(t)},Te=255,ba={aqua:[0,Te,Te],lime:[0,Te,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Te],navy:[0,0,128],white:[Te,Te,Te],olive:[128,128,0],yellow:[Te,Te,0],orange:[Te,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Te,0,0],pink:[Te,192,203],cyan:[0,Te,Te],transparent:[Te,Te,Te,0]},zl=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*Te+.5|0},cp=function(t,e,n){var i=t?zi(t)?[t>>16,t>>8&Te,t&Te]:0:ba.black,s,a,o,l,c,u,d,h,p,_;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),ba[t])i=ba[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),a=t.charAt(2),o=t.charAt(3),t="#"+s+s+a+a+o+o+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&Te,i&Te,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&Te,t&Te]}else if(t.substr(0,3)==="hsl"){if(i=_=t.match(zh),!e)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(c+1):u+c-u*c,s=u*2-a,i.length>3&&(i[3]*=1),i[0]=zl(l+1/3,s,a),i[1]=zl(l,s,a),i[2]=zl(l-1/3,s,a);else if(~t.indexOf("="))return i=t.match(kd),n&&i.length<4&&(i[3]=1),i}else i=t.match(zh)||ba.transparent;i=i.map(Number)}return e&&!_&&(s=i[0]/Te,a=i[1]/Te,o=i[2]/Te,d=Math.max(s,a,o),h=Math.min(s,a,o),u=(d+h)/2,d===h?l=c=0:(p=d-h,c=u>.5?p/(2-d-h):p/(d+h),l=d===s?(a-o)/p+(a<o?6:0):d===a?(o-s)/p+2:(s-a)/p+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},up=function(t){var e=[],n=[],i=-1;return t.split(sr).forEach(function(s){var a=s.match(Ls)||[];e.push.apply(e,a),n.push(i+=a.length+1)}),e.c=n,e},Xh=function(t,e,n){var i="",s=(t+i).match(sr),a=e?"hsla(":"rgba(",o=0,l,c,u,d;if(!s)return t;if(s=s.map(function(h){return(h=cp(h,e,1))&&a+(e?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),n&&(u=up(t),l=n.c,l.join(i)!==u.c.join(i)))for(c=t.replace(sr,"1").split(Ls),d=c.length-1;o<d;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=t.split(sr),d=c.length-1;o<d;o++)i+=c[o]+s[o];return i+c[d]},sr=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in ba)r+="|"+t+"\\b";return new RegExp(r+")","gi")}(),x_=/hsl[a]?\(/,hp=function(t){var e=t.join(" "),n;if(sr.lastIndex=0,sr.test(e))return n=x_.test(e),t[1]=Xh(t[1],n),t[0]=Xh(t[0],n,up(t[1])),!0},$a,Vn=function(){var r=Date.now,t=500,e=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,c,u,d,h,p,_=function g(f){var m=r()-i,S=f===!0,x,M,A,w;if((m>t||m<0)&&(n+=m-e),i+=m,A=i-n,x=A-a,(x>0||S)&&(w=++d.frame,h=A-d.time*1e3,d.time=A=A/1e3,a+=x+(x>=s?4:s-x),M=1),S||(l=c(g)),M)for(p=0;p<o.length;p++)o[p](A,h,w,f)};return d={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(f){return h/(1e3/(f||60))},wake:function(){Gd&&(!Nc&&ju()&&(_i=Nc=window,Zu=_i.document||{},Kn.gsap=Ln,(_i.gsapVersions||(_i.gsapVersions=[])).push(Ln.version),Vd(ul||_i.GreenSockGlobals||!_i.gsap&&_i||{}),op.forEach(lp)),u=typeof requestAnimationFrame!="undefined"&&requestAnimationFrame,l&&d.sleep(),c=u||function(f){return setTimeout(f,a-d.time*1e3+1|0)},$a=1,_(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),$a=0,c=Ya},lagSmoothing:function(f,m){t=f||1/0,e=Math.min(m||33,t)},fps:function(f){s=1e3/(f||240),a=d.time*1e3+s},add:function(f,m,S){var x=m?function(M,A,w,E){f(M,A,w,E),d.remove(x)}:f;return d.remove(f),o[S?"unshift":"push"](x),Ks(),x},remove:function(f,m){~(m=o.indexOf(f))&&o.splice(m,1)&&p>=m&&p--},_listeners:o},d}(),Ks=function(){return!$a&&Vn.wake()},ue={},S_=/^[\d.\-M][\d.\-,\s]/,M_=/["']/g,y_=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),e[i]=isNaN(c)?c.replace(M_,"").trim():+c,i=l.substr(o+1).trim();return e},E_=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},T_=function(t){var e=(t+"").split("("),n=ue[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[y_(e[1])]:E_(t).split(",").map($d)):ue._CE&&S_.test(t)?ue._CE("",t):n},b_=function(t){return function(e){return 1-t(1-e)}},kr=function(t,e){return t&&(Ne(t)?t:ue[t]||T_(t))||e},Zr=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},a;return Cn(t,function(o){ue[o]=Kn[o]=s,ue[a=o.toLowerCase()]=n;for(var l in s)ue[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ue[o+"."+l]=s[l]}),s},fp=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},kl=function r(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),a=s/Uc*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*Km((u-a)*s)+1},l=t==="out"?o:t==="in"?function(c){return 1-o(1-c)}:fp(o);return s=Uc/s,l.config=function(c,u){return r(t,c,u)},l},Hl=function r(t,e){e===void 0&&(e=1.70158);var n=function(a){return a?--a*a*((e+1)*a+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:fp(n);return i.config=function(s){return r(t,s)},i};Cn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;Zr(r+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});ue.Linear.easeNone=ue.none=ue.Linear.easeIn;Zr("Elastic",kl("in"),kl("out"),kl());(function(r,t){var e=1/t,n=2*e,i=2.5*e,s=function(o){return o<e?r*o*o:o<n?r*Math.pow(o-1.5/t,2)+.75:o<i?r*(o-=2.25/t)*o+.9375:r*Math.pow(o-2.625/t,2)+.984375};Zr("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);Zr("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});Zr("Circ",function(r){return-(Bd(1-r*r)-1)});Zr("Sine",function(r){return r===1?1:-$m(r*Ym)+1});Zr("Back",Hl("in"),Hl("out"),Hl());ue.SteppedEase=ue.steps=Kn.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,a=1-be;return function(o){return((i*eo(0,a,o)|0)+s)*n}}};Wa.ease=ue["quad.out"];Cn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return th+=r+","+r+"Params,"});var dp=function(t,e){this.id=qm++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Yd,this.set=e?e.getSetter:ah},Ka=function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,$s(this,+e.duration,1,1),this.data=e.data,De&&(this._ctx=De,De.data.push(this)),$a||Vn.wake()}var t=r.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,$s(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(Ks(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Cl(this,n),!s._dp||s.parent||Zd(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&xi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===be||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),qd(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Gh(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Gh(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?qs(this._tTime,s)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-be?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?dl(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-be?0:this._rts,this.totalTime(eo(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),Rl(this),s_(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ks(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==be&&(this._tTime-=be)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=Le(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&xi(i,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+(Rn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?dl(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=e_);var i=rn;return rn=n,nh(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),rn=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Vh(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Vh(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(ei(this,n),Rn(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Rn(i)),this._dur||(this._zTime=-be),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-be:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-be,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-be)},t.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},t.then=function(n){var i=this,s=i._prom;return new Promise(function(a){var o=Ne(n)?n:Kd,l=function(){var u=i.then;i.then=null,s&&s(),Ne(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=u),a(o),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},t.kill=function(){Ta(this)},r}();jn(Ka.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-be,_prom:0,_ps:!1,_rts:1});var wn=function(r){Fd(t,r);function t(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Rn(n.sortChildren),Ie&&xi(n.parent||Ie,Li(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Jd(Li(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,a){return Ia(0,arguments,this),this},e.from=function(i,s,a){return Ia(1,arguments,this),this},e.fromTo=function(i,s,a,o){return Ia(2,arguments,this),this},e.set=function(i,s,a){return s.duration=0,s.parent=this,La(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new We(i,s,ei(this,a),1),this},e.call=function(i,s,a){return xi(this,We.delayedCall(0,i,s),a)},e.staggerTo=function(i,s,a,o,l,c,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new We(i,a,ei(this,l)),this},e.staggerFrom=function(i,s,a,o,l,c,u){return a.runBackwards=1,La(a).immediateRender=Rn(a.immediateRender),this.staggerTo(i,s,a,o,l,c,u)},e.staggerFromTo=function(i,s,a,o,l,c,u,d){return o.startAt=a,La(o).immediateRender=Rn(o.immediateRender),this.staggerTo(i,s,o,l,c,u,d)},e.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Le(i),d=this._zTime<0!=i<0&&(this._initted||!c),h,p,_,g,f,m,S,x,M,A,w,E;if(this!==Ie&&u>l&&i>=0&&(u=l),u!==this._tTime||a||d){if(o!==this._time&&c&&(u+=this._time-o,i+=this._time-o),h=u,M=this._start,x=this._ts,m=!x,d&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(w=this._yoyo,f=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(f*100+i,s,a);if(h=Le(u%f),u===l?(g=this._repeat,h=c):(A=Le(u/f),g=~~A,g&&g===A&&(h=c,g--),h>c&&(h=c)),A=qs(this._tTime,f),!o&&this._tTime&&A!==g&&this._tTime-A*f-this._dur<=0&&(A=g),w&&g&1&&(h=c-h,E=1),g!==A&&!this._lock){var C=w&&A&1,L=C===(w&&g&1);if(g<A&&(C=!C),o=C?0:u%c?c:u,this._lock=1,this.render(o||(E?0:Le(g*f)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Xn(this,"onRepeat"),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1,A=g),o&&o!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,L&&(this._lock=2,o=C?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!m)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(S=c_(this,Le(o),Le(h)),S&&(u-=h-(h=S._start))),this._tTime=u,this._time=h,this._act=!!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&u&&c&&!s&&!A&&(Xn(this,"onStart"),this._tTime!==u))return this;if(h>=o&&i>=0)for(p=this._first;p;){if(_=p._next,(p._act||h>=p._start)&&p._ts&&S!==p){if(p.parent!==this)return this.render(i,s,a);if(p.render(p._ts>0?(h-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(h-p._start)*p._ts,s,a),h!==this._time||!this._ts&&!m){S=0,_&&(u+=this._zTime=-be);break}}p=_}else{p=this._last;for(var v=i<0?i:h;p;){if(_=p._prev,(p._act||v<=p._end)&&p._ts&&S!==p){if(p.parent!==this)return this.render(i,s,a);if(p.render(p._ts>0?(v-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(v-p._start)*p._ts,s,a||rn&&nh(p)),h!==this._time||!this._ts&&!m){S=0,_&&(u+=this._zTime=v?-be:be);break}}p=_}}if(S&&!s&&(this.pause(),S.render(h>=o?0:-be)._zTime=h>=o?1:-1,this._ts))return this._start=M,Rl(this),this.render(i,s,a);this._onUpdate&&!s&&Xn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(M===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&ur(this,1),!s&&!(i<0&&!o)&&(u||o||!l)&&(Xn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var a=this;if(zi(s)||(s=ei(this,s,i)),!(i instanceof Ka)){if(fn(i))return i.forEach(function(o){return a.add(o,s)}),this;if(tn(i))return this.addLabel(i,s);if(Ne(i))i=We.delayedCall(0,i);else return this}return this!==i?xi(this,i,s):this},e.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-si);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof We?s&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},e.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},e.remove=function(i){return tn(i)?this.removeLabel(i):Ne(i)?this.killTweensOf(i):(i.parent===this&&Al(this,i),i===this._recent&&(this._recent=this._last),zr(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Le(Vn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=ei(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,a){var o=We.delayedCall(0,s||Ya,a);return o.data="isPause",this._hasPause=1,xi(this,o,ei(this,i))},e.removePause=function(i){var s=this._first;for(i=ei(this,i);s;)s._start===i&&s.data==="isPause"&&ur(s),s=s._next},e.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)Qi!==o[l]&&o[l].kill(i,s);return this},e.getTweensOf=function(i,s){for(var a=[],o=ai(i),l=this._first,c=zi(s),u;l;)l instanceof We?n_(l._targets,o)&&(c?(!Qi||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(u=l.getTweensOf(o,s)).length&&a.push.apply(a,u),l=l._next;return a},e.tweenTo=function(i,s){s=s||{};var a=this,o=ei(a,i),l=s,c=l.startAt,u=l.onStart,d=l.onStartParams,h=l.immediateRender,p,_=We.to(a,jn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||be,onStart:function(){if(a.pause(),!p){var f=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());_._dur!==f&&$s(_,f,0,1).render(_._time,!0,!0),p=1}u&&u.apply(_,d||[])}},s));return h?_.render(0):_},e.tweenFromTo=function(i,s,a){return this.tweenTo(s,jn({startAt:{time:ei(this,i)}},a))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),Wh(this,ei(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),Wh(this,ei(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+be)},e.shiftChildren=function(i,s,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(i=Le(i);o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=i);return zr(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),zr(this)},e.totalDuration=function(i){var s=0,a=this,o=a._last,l=si,c,u,d;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(d=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,xi(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!d&&!a._dp||d&&d.smoothChildTiming)&&(a._start+=Le(u/a._ts),a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;$s(a,a===Ie&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},t.updateRoot=function(i){if(Ie._ts&&(qd(Ie,dl(i,Ie)),Xd=Vn.frame),Vn.frame>=kh){kh+=qn.autoSleep||120;var s=Ie._first;if((!s||!s._ts)&&qn.autoSleep&&Vn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Vn.sleep()}}},t}(Ka);jn(wn.prototype,{_lock:0,_hasPause:0,_forcing:0});var w_=function(t,e,n,i,s,a,o){var l=new Pn(this._pt,t,e,0,1,xp,null,s),c=0,u=0,d,h,p,_,g,f,m,S;for(l.b=n,l.e=i,n+="",i+="",(m=~i.indexOf("random("))&&(i=qa(i)),a&&(S=[n,i],a(S,t,e),n=S[0],i=S[1]),h=n.match(Fl)||[];d=Fl.exec(i);)_=d[0],g=i.substring(c,d.index),p?p=(p+1)%5:g.substr(-5)==="rgba("&&(p=1),_!==h[u++]&&(f=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:g||u===1?g:",",s:f,c:_.charAt(1)==="="?Os(f,_)-f:parseFloat(_)-f,m:p&&p<4?Math.round:0},c=Fl.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(Hd.test(i)||m)&&(l.e=0),this._pt=l,l},ih=function(t,e,n,i,s,a,o,l,c,u){Ne(i)&&(i=i(s||0,t,a));var d=t[e],h=n!=="get"?n:Ne(d)?c?t[e.indexOf("set")||!Ne(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():d,p=Ne(d)?c?D_:gp:sh,_;if(tn(i)&&(~i.indexOf("random(")&&(i=qa(i)),i.charAt(1)==="="&&(_=Os(h,i)+(un(h)||0),(_||_===0)&&(i=_))),!u||h!==i||Gc)return!isNaN(h*i)&&i!==""?(_=new Pn(this._pt,t,e,+h||0,i-(h||0),typeof d=="boolean"?I_:vp,0,p),c&&(_.fp=c),o&&_.modifier(o,this,t),this._pt=_):(!d&&!(e in t)&&Ju(e,i),w_.call(this,t,e,h,i,p,l||qn.stringFilter,c))},A_=function(t,e,n,i,s){if(Ne(t)&&(t=Ua(t,s,e,n,i)),!bi(t)||t.style&&t.nodeType||fn(t)||zd(t))return tn(t)?Ua(t,s,e,n,i):t;var a={},o;for(o in t)a[o]=Ua(t[o],s,e,n,i);return a},pp=function(t,e,n,i,s,a){var o,l,c,u;if(zn[t]&&(o=new zn[t]).init(s,o.rawVars?e[t]:A_(e[t],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new Pn(n._pt,s,t,0,1,o.render,o,0,o.priority),n!==Is))for(c=n._ptLookup[n._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},Qi,Gc,rh=function r(t,e,n){var i=t.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,d=i.yoyoEase,h=i.keyframes,p=i.autoRevert,_=t._dur,g=t._startAt,f=t._targets,m=t.parent,S=m&&m.data==="nested"?m.vars.targets:f,x=t._overwrite==="auto"&&!$u,M=t.timeline,A=i.easeReverse||d,w,E,C,L,v,T,U,k,G,Z,B,$,V;if(M&&(!h||!s)&&(s="none"),t._ease=kr(s,Wa.ease),t._rEase=A&&(kr(A)||t._ease),t._from=!M&&!!i.runBackwards,t._from&&(t.ratio=1),!M||h&&!i.stagger){if(k=f[0]?Br(f[0]).harness:0,$=k&&i[k.prop],w=fl(i,Qu),g&&(g._zTime<0&&g.progress(1),e<0&&u&&o&&!p?g.render(-1,!0):g.revert(u&&_?$o:t_),g._lazy=0),a){if(ur(t._startAt=We.set(f,jn({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!g&&Rn(l),startAt:null,delay:0,onUpdate:c&&function(){return Xn(t,"onUpdate")},stagger:0},a))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(rn||!o&&!p)&&t._startAt.revert($o),o&&_&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(u&&_&&!g){if(e&&(o=!1),C=jn({overwrite:!1,data:"isFromStart",lazy:o&&!g&&Rn(l),immediateRender:o,stagger:0,parent:m},w),$&&(C[k.prop]=$),ur(t._startAt=We.set(f,C)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(rn?t._startAt.revert($o):t._startAt.render(-1,!0)),t._zTime=e,!o)r(t._startAt,be,be);else if(!e)return}for(t._pt=t._ptCache=0,l=_&&Rn(l)||l&&!_,E=0;E<f.length;E++){if(v=f[E],U=v._gsap||eh(f)[E]._gsap,t._ptLookup[E]=Z={},Oc[U.id]&&rr.length&&hl(),B=S===f?E:S.indexOf(v),k&&(G=new k).init(v,$||w,t,B,S)!==!1&&(t._pt=L=new Pn(t._pt,v,G.name,0,1,G.render,G,0,G.priority),G._props.forEach(function(st){Z[st]=L}),G.priority&&(T=1)),!k||$)for(C in w)zn[C]&&(G=pp(C,w,t,B,v,S))?G.priority&&(T=1):Z[C]=L=ih.call(t,v,C,"get",w[C],B,S,0,i.stringFilter);t._op&&t._op[E]&&t.kill(v,t._op[E]),x&&t._pt&&(Qi=t,Ie.killTweensOf(v,Z,t.globalTime(e)),V=!t.parent,Qi=0),t._pt&&l&&(Oc[U.id]=1)}T&&Sp(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!V,h&&e<=0&&M.render(si,!0,!0)},R_=function(t,e,n,i,s,a,o,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],u,d,h,p;if(!c)for(c=t._ptCache[e]=[],h=t._ptLookup,p=t._targets.length;p--;){if(u=h[p][e],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==e&&u.fp!==e;)u=u._next;if(!u)return Gc=1,t.vars[e]="+=0",rh(t,o),Gc=0,l?Xa(e+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(p=c.length;p--;)d=c[p],u=d._pt||d,u.s=(i||i===0)&&!s?i:u.s+(i||0)+a*u.c,u.c=n-u.s,d.e&&(d.e=ze(n)+un(d.e)),d.b&&(d.b=u.s+un(d.b))},C_=function(t,e){var n=t[0]?Br(t[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return e;s=Ys({},e);for(a in i)if(a in s)for(l=i[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},P_=function(t,e,n,i){var s=e.ease||i||"power1.inOut",a,o;if(fn(e))o=n[t]||(n[t]=[]),e.forEach(function(l,c){return o.push({t:c/(e.length-1)*100,v:l,e:s})});else for(a in e)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(t),v:e[a],e:s})},Ua=function(t,e,n,i,s){return Ne(t)?t.call(e,n,i,s):tn(t)&&~t.indexOf("random(")?qa(t):t},mp=th+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",_p={};Cn(mp+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return _p[r]=1});var We=function(r){Fd(t,r);function t(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:La(i))||this;var l=o.vars,c=l.duration,u=l.delay,d=l.immediateRender,h=l.stagger,p=l.overwrite,_=l.keyframes,g=l.defaults,f=l.scrollTrigger,m=i.parent||Ie,S=(fn(n)||zd(n)?zi(n[0]):"length"in i)?[n]:ai(n),x,M,A,w,E,C,L,v;if(o._targets=S.length?eh(S):Xa("GSAP target "+n+" not found. https://gsap.com",!qn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=p,_||h||ro(c)||ro(u)){i=o.vars;var T=i.easeReverse||i.yoyoEase;if(x=o.timeline=new wn({data:"nested",defaults:g||{},targets:m&&m.data==="nested"?m.vars.targets:S}),x.kill(),x.parent=x._dp=Li(o),x._start=0,h||ro(c)||ro(u)){if(w=S.length,L=h&&np(h),bi(h))for(E in h)~mp.indexOf(E)&&(v||(v={}),v[E]=h[E]);for(M=0;M<w;M++)A=fl(i,_p),A.stagger=0,T&&(A.easeReverse=T),v&&Ys(A,v),C=S[M],A.duration=+Ua(c,Li(o),M,C,S),A.delay=(+Ua(u,Li(o),M,C,S)||0)-o._delay,!h&&w===1&&A.delay&&(o._delay=u=A.delay,o._start+=u,A.delay=0),x.to(C,A,L?L(M,C,S):0),x._ease=ue.none;x.duration()?c=u=0:o.timeline=0}else if(_){La(jn(x.vars.defaults,{ease:"none"})),x._ease=kr(_.ease||i.ease||"none");var U=0,k,G,Z;if(fn(_))_.forEach(function(B){return x.to(S,B,">")}),x.duration();else{A={};for(E in _)E==="ease"||E==="easeEach"||P_(E,_[E],A,_.easeEach);for(E in A)for(k=A[E].sort(function(B,$){return B.t-$.t}),U=0,M=0;M<k.length;M++)G=k[M],Z={ease:G.e,duration:(G.t-(M?k[M-1].t:0))/100*c},Z[E]=G.v,x.to(S,Z,U),U+=Z.duration;x.duration()<c&&x.to({},{duration:c-x.duration()})}}c||o.duration(c=x.duration())}else o.timeline=0;return p===!0&&!$u&&(Qi=Li(o),Ie.killTweensOf(S),Qi=0),xi(m,Li(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(d||!c&&!_&&o._start===Le(m._time)&&Rn(d)&&a_(Li(o))&&m.data!=="nested")&&(o._tTime=-be,o.render(Math.max(0,-u)||0)),f&&Jd(Li(o),f),o}var e=t.prototype;return e.render=function(i,s,a){var o=this._time,l=this._tDur,c=this._dur,u=i<0,d=i>l-be&&!u?l:i<be?0:i,h,p,_,g,f,m,S,x;if(!c)l_(this,i,s,a);else if(d!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(h=d,x=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+i,s,a);if(h=Le(d%g),d===l?(_=this._repeat,h=c):(f=Le(d/g),_=~~f,_&&_===f?(h=c,_--):h>c&&(h=c)),m=this._yoyo&&_&1,m&&(h=c-h),f=qs(this._tTime,g),h===o&&!a&&this._initted&&_===f)return this._tTime=d,this;_!==f&&this.vars.repeatRefresh&&!m&&!this._lock&&h!==g&&this._initted&&(this._lock=a=1,this.render(Le(g*_),!0).invalidate()._lock=0)}if(!this._initted){if(Qd(this,u?i:h,a,s,d))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&_!==f))return this;if(c!==this._dur)return this.render(i,s,a)}if(this._rEase){var M=h<o;if(M!==this._inv){var A=M?o:c-o;this._inv=M,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=A?(M?-1:1)/A:0,this._invScale=M?-this.ratio:1-this.ratio,this._invEase=M?this._rEase:this._ease}this.ratio=S=this._invRatio+this._invScale*this._invEase((h-this._invTime)*this._invRecip)}else this.ratio=S=this._ease(h/c);if(this._from&&(this.ratio=S=1-S),this._tTime=d,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&d&&!s&&!f&&(Xn(this,"onStart"),this._tTime!==d))return this;for(p=this._pt;p;)p.r(S,p.d),p=p._next;x&&x.render(i<0?i:x._dur*x._ease(h/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&Fc(this,i,s,a),Xn(this,"onUpdate")),this._repeat&&_!==f&&this.vars.onRepeat&&!s&&this.parent&&Xn(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(u&&!this._onUpdate&&Fc(this,i,!0,!0),(i||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&ur(this,1),!s&&!(u&&!o)&&(d||o||m)&&(Xn(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,a,o,l){$a||Vn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||rh(this,c),u=this._ease(c/this._dur),R_(this,i,s,a,o,u,c,l)?this.resetTo(i,s,a,o,1):(Cl(this,0),this.parent||jd(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Ta(this):this.scrollTrigger&&this.scrollTrigger.kill(!!rn),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Qi&&Qi.vars.overwrite!==!0)._first||Ta(this),this.parent&&a!==this.timeline.totalDuration()&&$s(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?ai(i):o,c=this._ptLookup,u=this._pt,d,h,p,_,g,f,m;if((!s||s==="all")&&r_(o,l))return s==="all"&&(this._pt=0),Ta(this);for(d=this._op=this._op||[],s!=="all"&&(tn(s)&&(g={},Cn(s,function(S){return g[S]=1}),s=g),s=C_(o,s)),m=o.length;m--;)if(~l.indexOf(o[m])){h=c[m],s==="all"?(d[m]=s,_=h,p={}):(p=d[m]=d[m]||{},_=s);for(g in _)f=h&&h[g],f&&((!("kill"in f.d)||f.d.kill(g)===!0)&&Al(this,f,"_pt"),delete h[g]),p!=="all"&&(p[g]=1)}return this._initted&&!this._pt&&u&&Ta(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return Ia(1,arguments)},t.delayedCall=function(i,s,a,o){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},t.fromTo=function(i,s,a){return Ia(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,a){return Ie.killTweensOf(i,s,a)},t}(Ka);jn(We.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Cn("staggerTo,staggerFrom,staggerFromTo",function(r){We[r]=function(){var t=new wn,e=zc.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var sh=function(t,e,n){return t[e]=n},gp=function(t,e,n){return t[e](n)},D_=function(t,e,n,i){return t[e](i.fp,n)},L_=function(t,e,n){return t.setAttribute(e,n)},ah=function(t,e){return Ne(t[e])?gp:Ku(t[e])&&t.setAttribute?L_:sh},vp=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},I_=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},xp=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},oh=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},U_=function(t,e,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(t,e,n),s=a},N_=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?Al(this,e,"_pt"):e.dep||(n=1),e=i;return!n},O_=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},Sp=function(t){for(var e=t._pt,n,i,s,a;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:a)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:a=e,e=n}t._pt=s},Pn=function(){function r(e,n,i,s,a,o,l,c,u){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||vp,this.d=l||this,this.set=c||sh,this.pr=u||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=O_,this.m=n,this.mt=s,this.tween=i},r}();Cn(th+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return Qu[r]=1});Kn.TweenMax=Kn.TweenLite=We;Kn.TimelineLite=Kn.TimelineMax=wn;Ie=new wn({sortChildren:!1,defaults:Wa,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});qn.stringFilter=hp;var Hr=[],jo={},F_=[],Yh=0,B_=0,Gl=function(t){return(jo[t]||F_).map(function(e){return e()})},Vc=function(){var t=Date.now(),e=[];t-Yh>2&&(Gl("matchMediaInit"),Hr.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,c;for(o in i)a=_i.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&e.push(n))}),Gl("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Yh=t,Gl("matchMedia"))},Mp=function(){function r(e,n){this.selector=n&&kc(n),this.data=[],this._r=[],this.isReverted=!1,this.id=B_++,e&&this.add(e)}var t=r.prototype;return t.add=function(n,i,s){Ne(n)&&(s=i,i=n,n=Ne);var a=this,o=function(){var c=De,u=a.selector,d;return c&&c!==a&&c.data.push(a),s&&(a.selector=kc(s)),De=a,d=i.apply(a,arguments),Ne(d)&&a._r.push(d),De=c,a.selector=u,a.isReverted=!1,d};return a.last=o,n===Ne?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},t.ignore=function(n){var i=De;De=null,n(this),De=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof We&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n?function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,d){return d.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof wn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof We)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=Hr.length;a--;)Hr[a].id===this.id&&Hr.splice(a,1)},t.revert=function(n){this.kill(n||{})},r}(),z_=function(){function r(e){this.contexts=[],this.scope=e,De&&De.data.push(this)}var t=r.prototype;return t.add=function(n,i,s){bi(n)||(n={matches:n});var a=new Mp(0,s||this.scope),o=a.conditions={},l,c,u;De&&!a.selector&&(a.selector=De.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?u=1:(l=_i.matchMedia(n[c]),l&&(Hr.indexOf(a)<0&&Hr.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(Vc):l.addEventListener("change",Vc)));return u&&i(a,function(d){return a.add(null,d)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),pl={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return lp(i)})},timeline:function(t){return new wn(t)},getTweensOf:function(t,e){return Ie.getTweensOf(t,e)},getProperty:function(t,e,n,i){tn(t)&&(t=ai(t)[0]);var s=Br(t||{}).get,a=n?Kd:$d;return n==="native"&&(n=""),t&&(e?a((zn[e]&&zn[e].get||s)(t,e,n,i)):function(o,l,c){return a((zn[o]&&zn[o].get||s)(t,o,l,c))})},quickSetter:function(t,e,n){if(t=ai(t),t.length>1){var i=t.map(function(u){return Ln.quickSetter(u,e,n)}),s=i.length;return function(u){for(var d=s;d--;)i[d](u)}}t=t[0]||{};var a=zn[e],o=Br(t),l=o.harness&&(o.harness.aliases||{})[e]||e,c=a?function(u){var d=new a;Is._pt=0,d.init(t,n?u+n:u,Is,0,[t]),d.render(1,d),Is._pt&&oh(1,Is)}:o.set(t,l);return a?c:function(u){return c(t,l,n?u+n:u,o,1)}},quickTo:function(t,e,n){var i,s=Ln.to(t,jn((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(l,c,u){return s.resetTo(e,l,c,u)};return a.tween=s,a},isTweening:function(t){return Ie.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=kr(t.ease,Wa.ease)),Hh(Wa,t||{})},config:function(t){return Hh(qn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,a=t.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!zn[o]&&!Kn[o]&&Xa(e+" effect requires "+o+" plugin.")}),Bl[e]=function(o,l,c){return n(ai(o),jn(l||{},s),c)},a&&(wn.prototype[e]=function(o,l,c){return this.add(Bl[e](o,bi(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){ue[t]=kr(e)},parseEase:function(t,e){return arguments.length?kr(t,e):ue},getById:function(t){return Ie.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new wn(t),i,s;for(n.smoothChildTiming=Rn(t.smoothChildTiming),Ie.remove(n),n._dp=0,n._time=n._tTime=Ie._time,i=Ie._first;i;)s=i._next,(e||!(!i._dur&&i instanceof We&&i.vars.onComplete===i._targets[0]))&&xi(n,i,i._start-i._delay),i=s;return xi(Ie,n,0),n},context:function(t,e){return t?new Mp(t,e):De},matchMedia:function(t){return new z_(t)},matchMediaRefresh:function(){return Hr.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||Vc()},addEventListener:function(t,e){var n=jo[t]||(jo[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=jo[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:__,wrapYoyo:g_,distribute:np,random:rp,snap:ip,normalize:m_,getUnit:un,clamp:h_,splitColor:cp,toArray:ai,selector:kc,mapRange:ap,pipe:d_,unitize:p_,interpolate:v_,shuffle:ep},install:Vd,effects:Bl,ticker:Vn,updateRoot:wn.updateRoot,plugins:zn,globalTimeline:Ie,core:{PropTween:Pn,globals:Wd,Tween:We,Timeline:wn,Animation:Ka,getCache:Br,_removeLinkedListItem:Al,reverting:function(){return rn},context:function(t){return t&&De&&(De.data.push(t),t._ctx=De),De},suppressOverwrites:function(t){return $u=t}}};Cn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return pl[r]=We[r]});Vn.add(wn.updateRoot);Is=pl.to({},{duration:0});var k_=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},H_=function(t,e){var n=t._targets,i,s,a;for(i in e)for(s=n.length;s--;)a=t._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=k_(a,i)),a&&a.modifier&&a.modifier(e[i],t,n[s],i))},Vl=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,c;if(tn(s)&&(l={},Cn(s,function(u){return l[u]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}H_(o,s)}}}},Ln=pl.registerPlugin({name:"attr",init:function(t,e,n,i,s){var a,o,l;this.tween=n;for(a in e)l=t.getAttribute(a)||"",o=this.add(t,"setAttribute",(l||0)+"",e[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(t,e){for(var n=e._pt;n;)rn?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},Vl("roundProps",Hc),Vl("modifiers"),Vl("snap",ip))||pl;We.version=wn.version=Ln.version="3.15.0";Gd=1;ju()&&Ks();ue.Power0;ue.Power1;ue.Power2;ue.Power3;ue.Power4;ue.Linear;ue.Quad;ue.Cubic;ue.Quart;ue.Quint;ue.Strong;ue.Elastic;ue.Back;ue.SteppedEase;ue.Bounce;ue.Sine;ue.Expo;ue.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var qh,tr,Fs,lh,Ir,$h,ch,G_=function(){return typeof window!="undefined"},ki={},wr=180/Math.PI,Bs=Math.PI/180,ns=Math.atan2,Kh=1e8,uh=/([A-Z])/g,V_=/(left|right|width|margin|padding|x)/i,W_=/[\s,\(]\S/,Mi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Wc=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},X_=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Y_=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},q_=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},$_=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},yp=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},Ep=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},K_=function(t,e,n){return t.style[e]=n},j_=function(t,e,n){return t.style.setProperty(e,n)},Z_=function(t,e,n){return t._gsap[e]=n},J_=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},Q_=function(t,e,n,i,s){var a=t._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},tg=function(t,e,n,i,s){var a=t._gsap;a[e]=n,a.renderTransform(s,a)},Ue="transform",Dn=Ue+"Origin",eg=function r(t,e){var n=this,i=this.target,s=i.style,a=i._gsap;if(t in ki&&s){if(this.tfm=this.tfm||{},t!=="transform")t=Mi[t]||t,~t.indexOf(",")?t.split(",").forEach(function(o){return n.tfm[o]=Ii(i,o)}):this.tfm[t]=a.x?a[t]:Ii(i,t),t===Dn&&(this.tfm.zOrigin=a.zOrigin);else return Mi.transform.split(",").forEach(function(o){return r.call(n,o,e)});if(this.props.indexOf(Ue)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Dn,e,"")),t=Ue}(s||e)&&this.props.push(t,e,s[t])},Tp=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},ng=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,a;for(s=0;s<t.length;s+=3)t[s+1]?t[s+1]===2?e[t[s]](t[s+2]):e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(uh,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=ch(),(!s||!s.isStart)&&!n[Ue]&&(Tp(n),i.zOrigin&&n[Dn]&&(n[Dn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},bp=function(t,e){var n={target:t,props:[],revert:ng,save:eg};return t._gsap||Ln.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},wp,Xc=function(t,e){var n=tr.createElementNS?tr.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):tr.createElement(t);return n&&n.style?n:tr.createElement(t)},Yn=function r(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(uh,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&r(t,js(e)||e,1)||""},jh="O,Moz,ms,Ms,Webkit".split(","),js=function(t,e,n){var i=e||Ir,s=i.style,a=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);a--&&!(jh[a]+t in s););return a<0?null:(a===3?"ms":a>=0?jh[a]:"")+t},Yc=function(){G_()&&window.document&&(qh=window,tr=qh.document,Fs=tr.documentElement,Ir=Xc("div")||{style:{}},Xc("div"),Ue=js(Ue),Dn=Ue+"Origin",Ir.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",wp=!!js("perspective"),ch=Ln.core.reverting,lh=1)},Zh=function(t){var e=t.ownerSVGElement,n=Xc("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),s;i.style.display="block",n.appendChild(i),Fs.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),Fs.removeChild(n),s},Jh=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},Ap=function(t){var e,n;try{e=t.getBBox()}catch{e=Zh(t),n=1}return e&&(e.width||e.height)||n||(e=Zh(t)),e&&!e.width&&!e.x&&!e.y?{x:+Jh(t,["x","cx","x1"])||0,y:+Jh(t,["y","cy","y1"])||0,width:0,height:0}:e},Rp=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Ap(t))},hr=function(t,e){if(e){var n=t.style,i;e in ki&&e!==Dn&&(e=Ue),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(uh,"-$1").toLowerCase())):n.removeAttribute(e)}},er=function(t,e,n,i,s,a){var o=new Pn(t._pt,e,n,0,1,a?Ep:yp);return t._pt=o,o.b=i,o.e=s,t._props.push(n),o},Qh={deg:1,rad:1,turn:1},ig={grid:1,flex:1},fr=function r(t,e,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=Ir.style,l=V_.test(e),c=t.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),d=100,h=i==="px",p=i==="%",_,g,f,m;if(i===a||!s||Qh[i]||Qh[a])return s;if(a!=="px"&&!h&&(s=r(t,e,n,"px")),m=t.getCTM&&Rp(t),(p||a==="%")&&(ki[e]||~e.indexOf("adius")))return _=m?t.getBBox()[l?"width":"height"]:t[u],ze(p?s/_*d:s/100*_);if(o[l?"width":"height"]=d+(h?a:i),g=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,m&&(g=(t.ownerSVGElement||{}).parentNode),(!g||g===tr||!g.appendChild)&&(g=tr.body),f=g._gsap,f&&p&&f.width&&l&&f.time===Vn.time&&!f.uncache)return ze(s/f.width*d);if(p&&(e==="height"||e==="width")){var S=t.style[e];t.style[e]=d+i,_=t[u],S?t.style[e]=S:hr(t,e)}else(p||a==="%")&&!ig[Yn(g,"display")]&&(o.position=Yn(t,"position")),g===t&&(o.position="static"),g.appendChild(Ir),_=Ir[u],g.removeChild(Ir),o.position="absolute";return l&&p&&(f=Br(g),f.time=Vn.time,f.width=g[u]),ze(h?_*s/d:_&&s?d/_*s:0)},Ii=function(t,e,n,i){var s;return lh||Yc(),e in Mi&&e!=="transform"&&(e=Mi[e],~e.indexOf(",")&&(e=e.split(",")[0])),ki[e]&&e!=="transform"?(s=Za(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:_l(Yn(t,Dn))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=ml[e]&&ml[e](t,e,n)||Yn(t,e)||Yd(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?fr(t,e,s,n)+n:s},rg=function(t,e,n,i){if(!n||n==="none"){var s=js(e,t,1),a=s&&Yn(t,s,1);a&&a!==n?(e=s,n=a):e==="borderColor"&&(n=Yn(t,"borderTopColor"))}var o=new Pn(this._pt,t.style,e,0,1,xp),l=0,c=0,u,d,h,p,_,g,f,m,S,x,M,A;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=Yn(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(g=t.style[e],t.style[e]=i,i=Yn(t,e)||i,g?t.style[e]=g:hr(t,e)),u=[n,i],hp(u),n=u[0],i=u[1],h=n.match(Ls)||[],A=i.match(Ls)||[],A.length){for(;d=Ls.exec(i);)f=d[0],S=i.substring(l,d.index),_?_=(_+1)%5:(S.substr(-5)==="rgba("||S.substr(-5)==="hsla(")&&(_=1),f!==(g=h[c++]||"")&&(p=parseFloat(g)||0,M=g.substr((p+"").length),f.charAt(1)==="="&&(f=Os(p,f)+M),m=parseFloat(f),x=f.substr((m+"").length),l=Ls.lastIndex-x.length,x||(x=x||qn.units[e]||M,l===i.length&&(i+=x,o.e+=x)),M!==x&&(p=fr(t,e,g,x)||0),o._pt={_next:o._pt,p:S||c===1?S:",",s:p,c:m-p,m:_&&_<4||e==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=e==="display"&&i==="none"?Ep:yp;return Hd.test(i)&&(o.e=0),this._pt=o,o},tf={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},sg=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=tf[n]||n,e[1]=tf[i]||i,e.join(" ")},ag=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],ki[o]&&(l=1,o=o==="transformOrigin"?Dn:Ue),hr(n,o);l&&(hr(n,Ue),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Za(n,1),a.uncache=1,Tp(i)))}},ml={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var a=t._pt=new Pn(t._pt,e,n,0,0,ag);return a.u=i,a.pr=-10,a.tween=s,t._props.push(n),1}}},ja=[1,0,0,1,0,0],Cp={},Pp=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},ef=function(t){var e=Yn(t,Ue);return Pp(e)?ja:e.substr(7).match(kd).map(ze)},hh=function(t,e){var n=t._gsap||Br(t),i=t.style,s=ef(t),a,o,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?ja:s):(s===ja&&!t.offsetParent&&t!==Fs&&!n.svg&&(l=i.display,i.display="block",a=t.parentNode,(!a||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,o=t.nextElementSibling,Fs.appendChild(t)),s=ef(t),l?i.display=l:hr(t,"display"),c&&(o?a.insertBefore(t,o):a?a.appendChild(t):Fs.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},qc=function(t,e,n,i,s,a){var o=t._gsap,l=s||hh(t,!0),c=o.xOrigin||0,u=o.yOrigin||0,d=o.xOffset||0,h=o.yOffset||0,p=l[0],_=l[1],g=l[2],f=l[3],m=l[4],S=l[5],x=e.split(" "),M=parseFloat(x[0])||0,A=parseFloat(x[1])||0,w,E,C,L;n?l!==ja&&(E=p*f-_*g)&&(C=M*(f/E)+A*(-g/E)+(g*S-f*m)/E,L=M*(-_/E)+A*(p/E)-(p*S-_*m)/E,M=C,A=L):(w=Ap(t),M=w.x+(~x[0].indexOf("%")?M/100*w.width:M),A=w.y+(~(x[1]||x[0]).indexOf("%")?A/100*w.height:A)),i||i!==!1&&o.smooth?(m=M-c,S=A-u,o.xOffset=d+(m*p+S*g)-m,o.yOffset=h+(m*_+S*f)-S):o.xOffset=o.yOffset=0,o.xOrigin=M,o.yOrigin=A,o.smooth=!!i,o.origin=e,o.originIsAbsolute=!!n,t.style[Dn]="0px 0px",a&&(er(a,o,"xOrigin",c,M),er(a,o,"yOrigin",u,A),er(a,o,"xOffset",d,o.xOffset),er(a,o,"yOffset",h,o.yOffset)),t.setAttribute("data-svg-origin",M+" "+A)},Za=function(t,e){var n=t._gsap||new dp(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(t),c=Yn(t,Dn)||"0",u,d,h,p,_,g,f,m,S,x,M,A,w,E,C,L,v,T,U,k,G,Z,B,$,V,st,P,ct,Rt,Ft,q,et;return u=d=h=g=f=m=S=x=M=0,p=_=1,n.svg=!!(t.getCTM&&Rp(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Ue]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Ue]!=="none"?l[Ue]:"")),i.scale=i.rotate=i.translate="none"),E=hh(t,n.svg),n.svg&&(n.uncache?(V=t.getBBox(),c=n.xOrigin-V.x+"px "+(n.yOrigin-V.y)+"px",$=""):$=!e&&t.getAttribute("data-svg-origin"),qc(t,$||c,!!$||n.originIsAbsolute,n.smooth!==!1,E)),A=n.xOrigin||0,w=n.yOrigin||0,E!==ja&&(T=E[0],U=E[1],k=E[2],G=E[3],u=Z=E[4],d=B=E[5],E.length===6?(p=Math.sqrt(T*T+U*U),_=Math.sqrt(G*G+k*k),g=T||U?ns(U,T)*wr:0,S=k||G?ns(k,G)*wr+g:0,S&&(_*=Math.abs(Math.cos(S*Bs))),n.svg&&(u-=A-(A*T+w*k),d-=w-(A*U+w*G))):(et=E[6],Ft=E[7],P=E[8],ct=E[9],Rt=E[10],q=E[11],u=E[12],d=E[13],h=E[14],C=ns(et,Rt),f=C*wr,C&&(L=Math.cos(-C),v=Math.sin(-C),$=Z*L+P*v,V=B*L+ct*v,st=et*L+Rt*v,P=Z*-v+P*L,ct=B*-v+ct*L,Rt=et*-v+Rt*L,q=Ft*-v+q*L,Z=$,B=V,et=st),C=ns(-k,Rt),m=C*wr,C&&(L=Math.cos(-C),v=Math.sin(-C),$=T*L-P*v,V=U*L-ct*v,st=k*L-Rt*v,q=G*v+q*L,T=$,U=V,k=st),C=ns(U,T),g=C*wr,C&&(L=Math.cos(C),v=Math.sin(C),$=T*L+U*v,V=Z*L+B*v,U=U*L-T*v,B=B*L-Z*v,T=$,Z=V),f&&Math.abs(f)+Math.abs(g)>359.9&&(f=g=0,m=180-m),p=ze(Math.sqrt(T*T+U*U+k*k)),_=ze(Math.sqrt(B*B+et*et)),C=ns(Z,B),S=Math.abs(C)>2e-4?C*wr:0,M=q?1/(q<0?-q:q):0),n.svg&&($=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!Pp(Yn(t,Ue)),$&&t.setAttribute("transform",$))),Math.abs(S)>90&&Math.abs(S)<270&&(s?(p*=-1,S+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,S+=S<=0?180:-180)),e=e||n.uncache,n.x=u-((n.xPercent=u&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-u)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+a,n.y=d-((n.yPercent=d&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-d)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+a,n.z=h+a,n.scaleX=ze(p),n.scaleY=ze(_),n.rotation=ze(g)+o,n.rotationX=ze(f)+o,n.rotationY=ze(m)+o,n.skewX=S+o,n.skewY=x+o,n.transformPerspective=M+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[Dn]=_l(c)),n.xOffset=n.yOffset=0,n.force3D=qn.force3D,n.renderTransform=n.svg?lg:wp?Dp:og,n.uncache=0,n},_l=function(t){return(t=t.split(" "))[0]+" "+t[1]},Wl=function(t,e,n){var i=un(e);return ze(parseFloat(e)+parseFloat(fr(t,"x",n+"px",i)))+i},og=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Dp(t,e)},vr="0deg",la="0px",xr=") ",Dp=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,d=n.rotationX,h=n.skewX,p=n.skewY,_=n.scaleX,g=n.scaleY,f=n.transformPerspective,m=n.force3D,S=n.target,x=n.zOrigin,M="",A=m==="auto"&&t&&t!==1||m===!0;if(x&&(d!==vr||u!==vr)){var w=parseFloat(u)*Bs,E=Math.sin(w),C=Math.cos(w),L;w=parseFloat(d)*Bs,L=Math.cos(w),a=Wl(S,a,E*L*-x),o=Wl(S,o,-Math.sin(w)*-x),l=Wl(S,l,C*L*-x+x)}f!==la&&(M+="perspective("+f+xr),(i||s)&&(M+="translate("+i+"%, "+s+"%) "),(A||a!==la||o!==la||l!==la)&&(M+=l!==la||A?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+xr),c!==vr&&(M+="rotate("+c+xr),u!==vr&&(M+="rotateY("+u+xr),d!==vr&&(M+="rotateX("+d+xr),(h!==vr||p!==vr)&&(M+="skew("+h+", "+p+xr),(_!==1||g!==1)&&(M+="scale("+_+", "+g+xr),S.style[Ue]=M||"translate(0, 0)"},lg=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,d=n.scaleX,h=n.scaleY,p=n.target,_=n.xOrigin,g=n.yOrigin,f=n.xOffset,m=n.yOffset,S=n.forceCSS,x=parseFloat(a),M=parseFloat(o),A,w,E,C,L;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Bs,c*=Bs,A=Math.cos(l)*d,w=Math.sin(l)*d,E=Math.sin(l-c)*-h,C=Math.cos(l-c)*h,c&&(u*=Bs,L=Math.tan(c-u),L=Math.sqrt(1+L*L),E*=L,C*=L,u&&(L=Math.tan(u),L=Math.sqrt(1+L*L),A*=L,w*=L)),A=ze(A),w=ze(w),E=ze(E),C=ze(C)):(A=d,C=h,w=E=0),(x&&!~(a+"").indexOf("px")||M&&!~(o+"").indexOf("px"))&&(x=fr(p,"x",a,"px"),M=fr(p,"y",o,"px")),(_||g||f||m)&&(x=ze(x+_-(_*A+g*E)+f),M=ze(M+g-(_*w+g*C)+m)),(i||s)&&(L=p.getBBox(),x=ze(x+i/100*L.width),M=ze(M+s/100*L.height)),L="matrix("+A+","+w+","+E+","+C+","+x+","+M+")",p.setAttribute("transform",L),S&&(p.style[Ue]=L)},cg=function(t,e,n,i,s){var a=360,o=tn(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?wr:1),c=l-i,u=i+c+"deg",d,h;return o&&(d=s.split("_")[1],d==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),d==="cw"&&c<0?c=(c+a*Kh)%a-~~(c/a)*a:d==="ccw"&&c>0&&(c=(c-a*Kh)%a-~~(c/a)*a)),t._pt=h=new Pn(t._pt,e,n,i,c,X_),h.e=u,h.u="deg",t._props.push(n),h},nf=function(t,e){for(var n in e)t[n]=e[n];return t},ug=function(t,e,n){var i=nf({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,u,d,h,p,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[Ue]=e,o=Za(n,1),hr(n,Ue),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Ue],a[Ue]=e,o=Za(n,1),a[Ue]=c);for(l in ki)c=i[l],u=o[l],c!==u&&s.indexOf(l)<0&&(p=un(c),_=un(u),d=p!==_?fr(n,l,c,_):parseFloat(c),h=parseFloat(u),t._pt=new Pn(t._pt,o,l,d,h-d,Wc),t._pt.u=_||0,t._props.push(l));nf(o,i)};Cn("padding,margin,Width,Radius",function(r,t){var e="Top",n="Right",i="Bottom",s="Left",a=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(o){return t<2?r+o:"border"+o+r});ml[t>1?"border"+r:r]=function(o,l,c,u,d){var h,p;if(arguments.length<4)return h=a.map(function(_){return Ii(o,_,c)}),p=h.join(" "),p.split(h[0]).length===5?h[0]:p;h=(u+"").split(" "),p={},a.forEach(function(_,g){return p[_]=h[g]=h[g]||h[(g-1)/2|0]}),o.init(l,p,d)}});var Lp={name:"css",register:Yc,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var a=this._props,o=t.style,l=n.vars.startAt,c,u,d,h,p,_,g,f,m,S,x,M,A,w,E,C,L;lh||Yc(),this.styles=this.styles||bp(t),C=this.styles.props,this.tween=n;for(g in e)if(g!=="autoRound"&&(u=e[g],!(zn[g]&&pp(g,e,n,i,t,s)))){if(p=typeof u,_=ml[g],p==="function"&&(u=u.call(n,i,t,s),p=typeof u),p==="string"&&~u.indexOf("random(")&&(u=qa(u)),_)_(this,t,g,u,n)&&(E=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(g)+"").trim(),u+="",sr.lastIndex=0,sr.test(c)||(f=un(c),m=un(u),m?f!==m&&(c=fr(t,g,c,m)+m):f&&(u+=f)),this.add(o,"setProperty",c,u,i,s,0,0,g),a.push(g),C.push(g,0,o[g]);else if(p!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,i,t,s):l[g],tn(c)&&~c.indexOf("random(")&&(c=qa(c)),un(c+"")||c==="auto"||(c+=qn.units[g]||un(Ii(t,g))||""),(c+"").charAt(1)==="="&&(c=Ii(t,g))):c=Ii(t,g),h=parseFloat(c),S=p==="string"&&u.charAt(1)==="="&&u.substr(0,2),S&&(u=u.substr(2)),d=parseFloat(u),g in Mi&&(g==="autoAlpha"&&(h===1&&Ii(t,"visibility")==="hidden"&&d&&(h=0),C.push("visibility",0,o.visibility),er(this,o,"visibility",h?"inherit":"hidden",d?"inherit":"hidden",!d)),g!=="scale"&&g!=="transform"&&(g=Mi[g],~g.indexOf(",")&&(g=g.split(",")[0]))),x=g in ki,x){if(this.styles.save(g),L=u,p==="string"&&u.substring(0,6)==="var(--"){if(u=Yn(t,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var v=t.style.perspective;t.style.perspective=u,u=Yn(t,"perspective"),v?t.style.perspective=v:hr(t,"perspective")}d=parseFloat(u)}if(M||(A=t._gsap,A.renderTransform&&!e.parseTransform||Za(t,e.parseTransform),w=e.smoothOrigin!==!1&&A.smooth,M=this._pt=new Pn(this._pt,o,Ue,0,1,A.renderTransform,A,0,-1),M.dep=1),g==="scale")this._pt=new Pn(this._pt,A,"scaleY",A.scaleY,(S?Os(A.scaleY,S+d):d)-A.scaleY||0,Wc),this._pt.u=0,a.push("scaleY",g),g+="X";else if(g==="transformOrigin"){C.push(Dn,0,o[Dn]),u=sg(u),A.svg?qc(t,u,0,w,0,this):(m=parseFloat(u.split(" ")[2])||0,m!==A.zOrigin&&er(this,A,"zOrigin",A.zOrigin,m),er(this,o,g,_l(c),_l(u)));continue}else if(g==="svgOrigin"){qc(t,u,1,w,0,this);continue}else if(g in Cp){cg(this,A,g,h,S?Os(h,S+u):u);continue}else if(g==="smoothOrigin"){er(this,A,"smooth",A.smooth,u);continue}else if(g==="force3D"){A[g]=u;continue}else if(g==="transform"){ug(this,u,t);continue}}else g in o||(g=js(g)||g);if(x||(d||d===0)&&(h||h===0)&&!W_.test(u)&&g in o)f=(c+"").substr((h+"").length),d||(d=0),m=un(u)||(g in qn.units?qn.units[g]:f),f!==m&&(h=fr(t,g,c,m)),this._pt=new Pn(this._pt,x?A:o,g,h,(S?Os(h,S+d):d)-h,!x&&(m==="px"||g==="zIndex")&&e.autoRound!==!1?$_:Wc),this._pt.u=m||0,x&&L!==u?(this._pt.b=c,this._pt.e=L,this._pt.r=q_):f!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=Y_);else if(g in o)rg.call(this,t,g,c,S?S+u:u);else if(g in t)this.add(t,g,c||t[g],S?S+u:u,i,s);else if(g!=="parseTransform"){Ju(g,u);continue}x||(g in o?C.push(g,0,o[g]):typeof t[g]=="function"?C.push(g,2,t[g]()):C.push(g,1,c||t[g])),a.push(g)}}E&&Sp(this)},render:function(t,e){if(e.tween._time||!ch())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:Ii,aliases:Mi,getSetter:function(t,e,n){var i=Mi[e];return i&&i.indexOf(",")<0&&(e=i),e in ki&&e!==Dn&&(t._gsap.x||Ii(t,"x"))?n&&$h===n?e==="scale"?J_:Z_:($h=n||{})&&(e==="scale"?Q_:tg):t.style&&!Ku(t.style[e])?K_:~e.indexOf("-")?j_:ah(t,e)},core:{_removeProperty:hr,_getMatrix:hh}};Ln.utils.checkPrefix=js;Ln.core.getStyleSaver=bp;(function(r,t,e,n){var i=Cn(r+","+t+","+e,function(s){ki[s]=1});Cn(t,function(s){qn.units[s]="deg",Cp[s]=1}),Mi[i[13]]=r+","+t,Cn(n,function(s){var a=s.split(":");Mi[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Cn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){qn.units[r]="px"});Ln.registerPlugin(Lp);var ce=Ln.registerPlugin(Lp)||Ln;ce.core.Tween;/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const fh="169",hg=0,rf=1,fg=2,Ip=1,dg=2,Di=3,dr=0,En=1,Ui=2,ar=0,zs=1,sf=2,af=3,of=4,pg=5,Dr=100,mg=101,_g=102,gg=103,vg=104,xg=200,Sg=201,Mg=202,yg=203,$c=204,Kc=205,Eg=206,Tg=207,bg=208,wg=209,Ag=210,Rg=211,Cg=212,Pg=213,Dg=214,jc=0,Zc=1,Jc=2,Zs=3,Qc=4,tu=5,eu=6,nu=7,Up=0,Lg=1,Ig=2,or=0,Ug=1,Ng=2,Og=3,Fg=4,Bg=5,zg=6,kg=7,Np=300,Js=301,Qs=302,iu=303,ru=304,Pl=306,su=1e3,Ur=1001,au=1002,An=1003,Hg=1004,so=1005,di=1006,Xl=1007,Nr=1008,Hi=1009,Op=1010,Fp=1011,Ja=1012,dh=1013,Xr=1014,yi=1015,no=1016,ph=1017,mh=1018,ta=1020,Bp=35902,zp=1021,kp=1022,pi=1023,Hp=1024,Gp=1025,ks=1026,ea=1027,_h=1028,gh=1029,Vp=1030,vh=1031,xh=1033,Zo=33776,Jo=33777,Qo=33778,tl=33779,ou=35840,lu=35841,cu=35842,uu=35843,hu=36196,fu=37492,du=37496,pu=37808,mu=37809,_u=37810,gu=37811,vu=37812,xu=37813,Su=37814,Mu=37815,yu=37816,Eu=37817,Tu=37818,bu=37819,wu=37820,Au=37821,el=36492,Ru=36494,Cu=36495,Wp=36283,Pu=36284,Du=36285,Lu=36286,Gg=3200,Vg=3201,Xp=0,Wg=1,Ji="",kn="srgb",gr="srgb-linear",Sh="display-p3",Dl="display-p3-linear",gl="linear",Re="srgb",vl="rec709",xl="p3",is=7680,lf=519,Xg=512,Yg=513,qg=514,Yp=515,$g=516,Kg=517,jg=518,Zg=519,Iu=35044,cf="300 es",Oi=2e3,Sl=2001;class ra{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,t);t.target=null}}}const sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Yl=Math.PI/180,Uu=180/Math.PI;function lr(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(sn[r&255]+sn[r>>8&255]+sn[r>>16&255]+sn[r>>24&255]+"-"+sn[t&255]+sn[t>>8&255]+"-"+sn[t>>16&15|64]+sn[t>>24&255]+"-"+sn[e&63|128]+sn[e>>8&255]+"-"+sn[e>>16&255]+sn[e>>24&255]+sn[n&255]+sn[n>>8&255]+sn[n>>16&255]+sn[n>>24&255]).toLowerCase()}function Mn(r,t,e){return Math.max(t,Math.min(e,r))}function Jg(r,t){return(r%t+t)%t}function ql(r,t,e){return(1-e)*r+e*t}function Si(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Se(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class qt{constructor(t=0,e=0){qt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Mn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*i+t.x,this.y=s*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Jt{constructor(t,e,n,i,s,a,o,l,c){Jt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,l,c)}set(t,e,n,i,s,a,o,l,c){const u=this.elements;return u[0]=t,u[1]=i,u[2]=o,u[3]=e,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],d=n[7],h=n[2],p=n[5],_=n[8],g=i[0],f=i[3],m=i[6],S=i[1],x=i[4],M=i[7],A=i[2],w=i[5],E=i[8];return s[0]=a*g+o*S+l*A,s[3]=a*f+o*x+l*w,s[6]=a*m+o*M+l*E,s[1]=c*g+u*S+d*A,s[4]=c*f+u*x+d*w,s[7]=c*m+u*M+d*E,s[2]=h*g+p*S+_*A,s[5]=h*f+p*x+_*w,s[8]=h*m+p*M+_*E,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*s*u+n*o*l+i*s*c-i*a*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],d=u*a-o*c,h=o*l-u*s,p=c*s-a*l,_=e*d+n*h+i*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return t[0]=d*g,t[1]=(i*c-u*n)*g,t[2]=(o*n-i*a)*g,t[3]=h*g,t[4]=(u*e-i*l)*g,t[5]=(i*s-o*e)*g,t[6]=p*g,t[7]=(n*l-c*e)*g,t[8]=(a*e-n*s)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply($l.makeScale(t,e)),this}rotate(t){return this.premultiply($l.makeRotation(-t)),this}translate(t,e){return this.premultiply($l.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const $l=new Jt;function qp(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Ml(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Qg(){const r=Ml("canvas");return r.style.display="block",r}const uf={};function nl(r){r in uf||(uf[r]=!0,console.warn(r))}function t0(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function e0(r){const t=r.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function n0(r){const t=r.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const hf=new Jt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ff=new Jt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ca={[gr]:{transfer:gl,primaries:vl,luminanceCoefficients:[.2126,.7152,.0722],toReference:r=>r,fromReference:r=>r},[kn]:{transfer:Re,primaries:vl,luminanceCoefficients:[.2126,.7152,.0722],toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[Dl]:{transfer:gl,primaries:xl,luminanceCoefficients:[.2289,.6917,.0793],toReference:r=>r.applyMatrix3(ff),fromReference:r=>r.applyMatrix3(hf)},[Sh]:{transfer:Re,primaries:xl,luminanceCoefficients:[.2289,.6917,.0793],toReference:r=>r.convertSRGBToLinear().applyMatrix3(ff),fromReference:r=>r.applyMatrix3(hf).convertLinearToSRGB()}},i0=new Set([gr,Dl]),pe={enabled:!0,_workingColorSpace:gr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!i0.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,t,e){if(this.enabled===!1||t===e||!t||!e)return r;const n=ca[t].toReference,i=ca[e].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,t){return this.convert(r,this._workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this._workingColorSpace)},getPrimaries:function(r){return ca[r].primaries},getTransfer:function(r){return r===Ji?gl:ca[r].transfer},getLuminanceCoefficients:function(r,t=this._workingColorSpace){return r.fromArray(ca[t].luminanceCoefficients)}};function Hs(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Kl(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let rs;class r0{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{rs===void 0&&(rs=Ml("canvas")),rs.width=t.width,rs.height=t.height;const n=rs.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=rs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){const e=Ml("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=Hs(s[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Hs(e[n]/255)*255):e[n]=Hs(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let s0=0;class $p{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:s0++}),this.uuid=lr(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(jl(i[a].image)):s.push(jl(i[a]))}else s=jl(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function jl(r){return typeof HTMLImageElement!="undefined"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&r instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&r instanceof ImageBitmap?r0.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let a0=0;class dn extends ra{constructor(t=dn.DEFAULT_IMAGE,e=dn.DEFAULT_MAPPING,n=Ur,i=Ur,s=di,a=Nr,o=pi,l=Hi,c=dn.DEFAULT_ANISOTROPY,u=Ji){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:a0++}),this.uuid=lr(),this.name="",this.source=new $p(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new qt(0,0),this.repeat=new qt(1,1),this.center=new qt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Np)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case su:t.x=t.x-Math.floor(t.x);break;case Ur:t.x=t.x<0?0:1;break;case au:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case su:t.y=t.y-Math.floor(t.y);break;case Ur:t.y=t.y<0?0:1;break;case au:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}dn.DEFAULT_IMAGE=null;dn.DEFAULT_MAPPING=Np;dn.DEFAULT_ANISOTROPY=1;class Me{constructor(t=0,e=0,n=0,i=1){Me.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const l=t.elements,c=l[0],u=l[4],d=l[8],h=l[1],p=l[5],_=l[9],g=l[2],f=l[6],m=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-g)<.01&&Math.abs(_-f)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+g)<.1&&Math.abs(_+f)<.1&&Math.abs(c+p+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(c+1)/2,M=(p+1)/2,A=(m+1)/2,w=(u+h)/4,E=(d+g)/4,C=(_+f)/4;return x>M&&x>A?x<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(x),i=w/n,s=E/n):M>A?M<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(M),n=w/i,s=C/i):A<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(A),n=E/s,i=C/s),this.set(n,i,s,e),this}let S=Math.sqrt((f-_)*(f-_)+(d-g)*(d-g)+(h-u)*(h-u));return Math.abs(S)<.001&&(S=1),this.x=(f-_)/S,this.y=(d-g)/S,this.z=(h-u)/S,this.w=Math.acos((c+p+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class o0 extends ra{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Me(0,0,t,e),this.scissorTest=!1,this.viewport=new Me(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:di,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new dn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new $p(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Yr extends o0{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Kp extends dn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=An,this.minFilter=An,this.wrapR=Ur,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class l0 extends dn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=An,this.minFilter=An,this.wrapR=Ur,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class sa{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],d=n[i+3];const h=s[a+0],p=s[a+1],_=s[a+2],g=s[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d;return}if(o===1){t[e+0]=h,t[e+1]=p,t[e+2]=_,t[e+3]=g;return}if(d!==g||l!==h||c!==p||u!==_){let f=1-o;const m=l*h+c*p+u*_+d*g,S=m>=0?1:-1,x=1-m*m;if(x>Number.EPSILON){const A=Math.sqrt(x),w=Math.atan2(A,m*S);f=Math.sin(f*w)/A,o=Math.sin(o*w)/A}const M=o*S;if(l=l*f+h*M,c=c*f+p*M,u=u*f+_*M,d=d*f+g*M,f===1-o){const A=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=A,c*=A,u*=A,d*=A}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],d=s[a],h=s[a+1],p=s[a+2],_=s[a+3];return t[e]=o*_+u*d+l*p-c*h,t[e+1]=l*_+u*h+c*d-o*p,t[e+2]=c*_+u*p+o*h-l*d,t[e+3]=u*_-o*d-l*h-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),d=o(s/2),h=l(n/2),p=l(i/2),_=l(s/2);switch(a){case"XYZ":this._x=h*u*d+c*p*_,this._y=c*p*d-h*u*_,this._z=c*u*_+h*p*d,this._w=c*u*d-h*p*_;break;case"YXZ":this._x=h*u*d+c*p*_,this._y=c*p*d-h*u*_,this._z=c*u*_-h*p*d,this._w=c*u*d+h*p*_;break;case"ZXY":this._x=h*u*d-c*p*_,this._y=c*p*d+h*u*_,this._z=c*u*_+h*p*d,this._w=c*u*d-h*p*_;break;case"ZYX":this._x=h*u*d-c*p*_,this._y=c*p*d+h*u*_,this._z=c*u*_-h*p*d,this._w=c*u*d+h*p*_;break;case"YZX":this._x=h*u*d+c*p*_,this._y=c*p*d+h*u*_,this._z=c*u*_-h*p*d,this._w=c*u*d-h*p*_;break;case"XZY":this._x=h*u*d-c*p*_,this._y=c*p*d-h*u*_,this._z=c*u*_+h*p*d,this._w=c*u*d+h*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],d=e[10],h=n+o+d;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(a-i)*p}else if(n>o&&n>d){const p=2*Math.sqrt(1+n-o-d);this._w=(u-l)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(s+c)/p}else if(o>d){const p=2*Math.sqrt(1+o-n-d);this._w=(s-c)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+d-n-o);this._w=(a-i)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Mn(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+i*c-s*l,this._y=i*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*t._w+n*t._x+i*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*i+e*this._y,this._z=p*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),d=Math.sin((1-e)*u)/c,h=Math.sin(e*u)/c;return this._w=a*d+this._w*h,this._x=n*d+this._x*h,this._y=i*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(t=0,e=0,n=0){I.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(df.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(df.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),u=2*(o*e-s*i),d=2*(s*n-a*e);return this.x=e+l*c+a*d-o*u,this.y=n+l*u+o*c-s*d,this.z=i+l*d+s*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Zl.copy(this).projectOnVector(t),this.sub(Zl)}reflect(t){return this.sub(Zl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Mn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Zl=new I,df=new sa;class Jr{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ci.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ci.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=ci.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,ci):ci.fromBufferAttribute(s,a),ci.applyMatrix4(t.matrixWorld),this.expandByPoint(ci);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ao.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ao.copy(n.boundingBox)),ao.applyMatrix4(t.matrixWorld),this.union(ao)}const i=t.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ci),ci.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ua),oo.subVectors(this.max,ua),ss.subVectors(t.a,ua),as.subVectors(t.b,ua),os.subVectors(t.c,ua),Vi.subVectors(as,ss),Wi.subVectors(os,as),Sr.subVectors(ss,os);let e=[0,-Vi.z,Vi.y,0,-Wi.z,Wi.y,0,-Sr.z,Sr.y,Vi.z,0,-Vi.x,Wi.z,0,-Wi.x,Sr.z,0,-Sr.x,-Vi.y,Vi.x,0,-Wi.y,Wi.x,0,-Sr.y,Sr.x,0];return!Jl(e,ss,as,os,oo)||(e=[1,0,0,0,1,0,0,0,1],!Jl(e,ss,as,os,oo))?!1:(lo.crossVectors(Vi,Wi),e=[lo.x,lo.y,lo.z],Jl(e,ss,as,os,oo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ci).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ci).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(wi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const wi=[new I,new I,new I,new I,new I,new I,new I,new I],ci=new I,ao=new Jr,ss=new I,as=new I,os=new I,Vi=new I,Wi=new I,Sr=new I,ua=new I,oo=new I,lo=new I,Mr=new I;function Jl(r,t,e,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){Mr.fromArray(r,s);const o=i.x*Math.abs(Mr.x)+i.y*Math.abs(Mr.y)+i.z*Math.abs(Mr.z),l=t.dot(Mr),c=e.dot(Mr),u=n.dot(Mr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const c0=new Jr,ha=new I,Ql=new I;class aa{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):c0.setFromPoints(t).getCenter(n);let i=0;for(let s=0,a=t.length;s<a;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ha.subVectors(t,this.center);const e=ha.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(ha,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ql.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ha.copy(t.center).add(Ql)),this.expandByPoint(ha.copy(t.center).sub(Ql))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ai=new I,tc=new I,co=new I,Xi=new I,ec=new I,uo=new I,nc=new I;class jp{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ai)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ai.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ai.copy(this.origin).addScaledVector(this.direction,e),Ai.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){tc.copy(t).add(e).multiplyScalar(.5),co.copy(e).sub(t).normalize(),Xi.copy(this.origin).sub(tc);const s=t.distanceTo(e)*.5,a=-this.direction.dot(co),o=Xi.dot(this.direction),l=-Xi.dot(co),c=Xi.lengthSq(),u=Math.abs(1-a*a);let d,h,p,_;if(u>0)if(d=a*l-o,h=a*o-l,_=s*u,d>=0)if(h>=-_)if(h<=_){const g=1/u;d*=g,h*=g,p=d*(d+a*h+2*o)+h*(a*d+h+2*l)+c}else h=s,d=Math.max(0,-(a*h+o)),p=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(a*h+o)),p=-d*d+h*(h+2*l)+c;else h<=-_?(d=Math.max(0,-(-a*s+o)),h=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+c):h<=_?(d=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(d=Math.max(0,-(a*s+o)),h=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+c);else h=a>0?-s:s,d=Math.max(0,-(a*h+o)),p=-d*d+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(tc).addScaledVector(co,h),p}intersectSphere(t,e){Ai.subVectors(t.center,this.origin);const n=Ai.dot(this.direction),i=Ai.dot(Ai)-n*n,s=t.radius*t.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(t.min.x-h.x)*c,i=(t.max.x-h.x)*c):(n=(t.max.x-h.x)*c,i=(t.min.x-h.x)*c),u>=0?(s=(t.min.y-h.y)*u,a=(t.max.y-h.y)*u):(s=(t.max.y-h.y)*u,a=(t.min.y-h.y)*u),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),d>=0?(o=(t.min.z-h.z)*d,l=(t.max.z-h.z)*d):(o=(t.max.z-h.z)*d,l=(t.min.z-h.z)*d),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Ai)!==null}intersectTriangle(t,e,n,i,s){ec.subVectors(e,t),uo.subVectors(n,t),nc.crossVectors(ec,uo);let a=this.direction.dot(nc),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Xi.subVectors(this.origin,t);const l=o*this.direction.dot(uo.crossVectors(Xi,uo));if(l<0)return null;const c=o*this.direction.dot(ec.cross(Xi));if(c<0||l+c>a)return null;const u=-o*Xi.dot(nc);return u<0?null:this.at(u/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ve{constructor(t,e,n,i,s,a,o,l,c,u,d,h,p,_,g,f){ve.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,l,c,u,d,h,p,_,g,f)}set(t,e,n,i,s,a,o,l,c,u,d,h,p,_,g,f){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=s,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=u,m[10]=d,m[14]=h,m[3]=p,m[7]=_,m[11]=g,m[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ve().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/ls.setFromMatrixColumn(t,0).length(),s=1/ls.setFromMatrixColumn(t,1).length(),a=1/ls.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){const h=a*u,p=a*d,_=o*u,g=o*d;e[0]=l*u,e[4]=-l*d,e[8]=c,e[1]=p+_*c,e[5]=h-g*c,e[9]=-o*l,e[2]=g-h*c,e[6]=_+p*c,e[10]=a*l}else if(t.order==="YXZ"){const h=l*u,p=l*d,_=c*u,g=c*d;e[0]=h+g*o,e[4]=_*o-p,e[8]=a*c,e[1]=a*d,e[5]=a*u,e[9]=-o,e[2]=p*o-_,e[6]=g+h*o,e[10]=a*l}else if(t.order==="ZXY"){const h=l*u,p=l*d,_=c*u,g=c*d;e[0]=h-g*o,e[4]=-a*d,e[8]=_+p*o,e[1]=p+_*o,e[5]=a*u,e[9]=g-h*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const h=a*u,p=a*d,_=o*u,g=o*d;e[0]=l*u,e[4]=_*c-p,e[8]=h*c+g,e[1]=l*d,e[5]=g*c+h,e[9]=p*c-_,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const h=a*l,p=a*c,_=o*l,g=o*c;e[0]=l*u,e[4]=g-h*d,e[8]=_*d+p,e[1]=d,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=p*d+_,e[10]=h-g*d}else if(t.order==="XZY"){const h=a*l,p=a*c,_=o*l,g=o*c;e[0]=l*u,e[4]=-d,e[8]=c*u,e[1]=h*d+g,e[5]=a*u,e[9]=p*d-_,e[2]=_*d-p,e[6]=o*u,e[10]=g*d+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(u0,t,h0)}lookAt(t,e,n){const i=this.elements;return Nn.subVectors(t,e),Nn.lengthSq()===0&&(Nn.z=1),Nn.normalize(),Yi.crossVectors(n,Nn),Yi.lengthSq()===0&&(Math.abs(n.z)===1?Nn.x+=1e-4:Nn.z+=1e-4,Nn.normalize(),Yi.crossVectors(n,Nn)),Yi.normalize(),ho.crossVectors(Nn,Yi),i[0]=Yi.x,i[4]=ho.x,i[8]=Nn.x,i[1]=Yi.y,i[5]=ho.y,i[9]=Nn.y,i[2]=Yi.z,i[6]=ho.z,i[10]=Nn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],d=n[5],h=n[9],p=n[13],_=n[2],g=n[6],f=n[10],m=n[14],S=n[3],x=n[7],M=n[11],A=n[15],w=i[0],E=i[4],C=i[8],L=i[12],v=i[1],T=i[5],U=i[9],k=i[13],G=i[2],Z=i[6],B=i[10],$=i[14],V=i[3],st=i[7],P=i[11],ct=i[15];return s[0]=a*w+o*v+l*G+c*V,s[4]=a*E+o*T+l*Z+c*st,s[8]=a*C+o*U+l*B+c*P,s[12]=a*L+o*k+l*$+c*ct,s[1]=u*w+d*v+h*G+p*V,s[5]=u*E+d*T+h*Z+p*st,s[9]=u*C+d*U+h*B+p*P,s[13]=u*L+d*k+h*$+p*ct,s[2]=_*w+g*v+f*G+m*V,s[6]=_*E+g*T+f*Z+m*st,s[10]=_*C+g*U+f*B+m*P,s[14]=_*L+g*k+f*$+m*ct,s[3]=S*w+x*v+M*G+A*V,s[7]=S*E+x*T+M*Z+A*st,s[11]=S*C+x*U+M*B+A*P,s[15]=S*L+x*k+M*$+A*ct,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],d=t[6],h=t[10],p=t[14],_=t[3],g=t[7],f=t[11],m=t[15];return _*(+s*l*d-i*c*d-s*o*h+n*c*h+i*o*p-n*l*p)+g*(+e*l*p-e*c*h+s*a*h-i*a*p+i*c*u-s*l*u)+f*(+e*c*d-e*o*p-s*a*d+n*a*p+s*o*u-n*c*u)+m*(-i*o*u-e*l*d+e*o*h+i*a*d-n*a*h+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],d=t[9],h=t[10],p=t[11],_=t[12],g=t[13],f=t[14],m=t[15],S=d*f*c-g*h*c+g*l*p-o*f*p-d*l*m+o*h*m,x=_*h*c-u*f*c-_*l*p+a*f*p+u*l*m-a*h*m,M=u*g*c-_*d*c+_*o*p-a*g*p-u*o*m+a*d*m,A=_*d*l-u*g*l-_*o*h+a*g*h+u*o*f-a*d*f,w=e*S+n*x+i*M+s*A;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/w;return t[0]=S*E,t[1]=(g*h*s-d*f*s-g*i*p+n*f*p+d*i*m-n*h*m)*E,t[2]=(o*f*s-g*l*s+g*i*c-n*f*c-o*i*m+n*l*m)*E,t[3]=(d*l*s-o*h*s-d*i*c+n*h*c+o*i*p-n*l*p)*E,t[4]=x*E,t[5]=(u*f*s-_*h*s+_*i*p-e*f*p-u*i*m+e*h*m)*E,t[6]=(_*l*s-a*f*s-_*i*c+e*f*c+a*i*m-e*l*m)*E,t[7]=(a*h*s-u*l*s+u*i*c-e*h*c-a*i*p+e*l*p)*E,t[8]=M*E,t[9]=(_*d*s-u*g*s-_*n*p+e*g*p+u*n*m-e*d*m)*E,t[10]=(a*g*s-_*o*s+_*n*c-e*g*c-a*n*m+e*o*m)*E,t[11]=(u*o*s-a*d*s-u*n*c+e*d*c+a*n*p-e*o*p)*E,t[12]=A*E,t[13]=(u*g*i-_*d*i+_*n*h-e*g*h-u*n*f+e*d*f)*E,t[14]=(_*o*i-a*g*i-_*n*l+e*g*l+a*n*f-e*o*f)*E,t[15]=(a*d*i-u*o*i+u*n*l-e*d*l-a*n*h+e*o*h)*E,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,a=t.x,o=t.y,l=t.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,a){return this.set(1,n,s,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,u=a+a,d=o+o,h=s*c,p=s*u,_=s*d,g=a*u,f=a*d,m=o*d,S=l*c,x=l*u,M=l*d,A=n.x,w=n.y,E=n.z;return i[0]=(1-(g+m))*A,i[1]=(p+M)*A,i[2]=(_-x)*A,i[3]=0,i[4]=(p-M)*w,i[5]=(1-(h+m))*w,i[6]=(f+S)*w,i[7]=0,i[8]=(_+x)*E,i[9]=(f-S)*E,i[10]=(1-(h+g))*E,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=ls.set(i[0],i[1],i[2]).length();const a=ls.set(i[4],i[5],i[6]).length(),o=ls.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],ui.copy(this);const c=1/s,u=1/a,d=1/o;return ui.elements[0]*=c,ui.elements[1]*=c,ui.elements[2]*=c,ui.elements[4]*=u,ui.elements[5]*=u,ui.elements[6]*=u,ui.elements[8]*=d,ui.elements[9]*=d,ui.elements[10]*=d,e.setFromRotationMatrix(ui),n.x=s,n.y=a,n.z=o,this}makePerspective(t,e,n,i,s,a,o=Oi){const l=this.elements,c=2*s/(e-t),u=2*s/(n-i),d=(e+t)/(e-t),h=(n+i)/(n-i);let p,_;if(o===Oi)p=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===Sl)p=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,a,o=Oi){const l=this.elements,c=1/(e-t),u=1/(n-i),d=1/(a-s),h=(e+t)*c,p=(n+i)*u;let _,g;if(o===Oi)_=(a+s)*d,g=-2*d;else if(o===Sl)_=s*d,g=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ls=new I,ui=new ve,u0=new I(0,0,0),h0=new I(1,1,1),Yi=new I,ho=new I,Nn=new I,pf=new ve,mf=new sa;class mi{constructor(t=0,e=0,n=0,i=mi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],d=i[2],h=i[6],p=i[10];switch(e){case"XYZ":this._y=Math.asin(Mn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Mn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Mn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Mn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Mn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Mn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return pf.makeRotationFromQuaternion(t),this.setFromRotationMatrix(pf,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return mf.setFromEuler(this),this.setFromQuaternion(mf,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}mi.DEFAULT_ORDER="XYZ";class Zp{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let f0=0;const _f=new I,cs=new sa,Ri=new ve,fo=new I,fa=new I,d0=new I,p0=new sa,gf=new I(1,0,0),vf=new I(0,1,0),xf=new I(0,0,1),Sf={type:"added"},m0={type:"removed"},us={type:"childadded",child:null},ic={type:"childremoved",child:null};class qe extends ra{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:f0++}),this.uuid=lr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=qe.DEFAULT_UP.clone();const t=new I,e=new mi,n=new sa,i=new I(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ve},normalMatrix:{value:new Jt}}),this.matrix=new ve,this.matrixWorld=new ve,this.matrixAutoUpdate=qe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=qe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return cs.setFromAxisAngle(t,e),this.quaternion.multiply(cs),this}rotateOnWorldAxis(t,e){return cs.setFromAxisAngle(t,e),this.quaternion.premultiply(cs),this}rotateX(t){return this.rotateOnAxis(gf,t)}rotateY(t){return this.rotateOnAxis(vf,t)}rotateZ(t){return this.rotateOnAxis(xf,t)}translateOnAxis(t,e){return _f.copy(t).applyQuaternion(this.quaternion),this.position.add(_f.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(gf,t)}translateY(t){return this.translateOnAxis(vf,t)}translateZ(t){return this.translateOnAxis(xf,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ri.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?fo.copy(t):fo.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),fa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ri.lookAt(fa,fo,this.up):Ri.lookAt(fo,fa,this.up),this.quaternion.setFromRotationMatrix(Ri),i&&(Ri.extractRotation(i.matrixWorld),cs.setFromRotationMatrix(Ri),this.quaternion.premultiply(cs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Sf),us.child=t,this.dispatchEvent(us),us.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(m0),ic.child=t,this.dispatchEvent(ic),ic.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ri.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ri.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ri),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Sf),us.child=t,this.dispatchEvent(us),us.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fa,t,d0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fa,p0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(t.shapes,d)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));i.material=o}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),d=a(t.shapes),h=a(t.skeletons),p=a(t.animations),_=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=i,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}qe.DEFAULT_UP=new I(0,1,0);qe.DEFAULT_MATRIX_AUTO_UPDATE=!0;qe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const hi=new I,Ci=new I,rc=new I,Pi=new I,hs=new I,fs=new I,Mf=new I,sc=new I,ac=new I,oc=new I,lc=new Me,cc=new Me,uc=new Me;class ri{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),hi.subVectors(t,e),i.cross(hi);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){hi.subVectors(i,e),Ci.subVectors(n,e),rc.subVectors(t,e);const a=hi.dot(hi),o=hi.dot(Ci),l=hi.dot(rc),c=Ci.dot(Ci),u=Ci.dot(rc),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;const h=1/d,p=(c*l-o*u)*h,_=(a*u-o*l)*h;return s.set(1-p-_,_,p)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Pi)===null?!1:Pi.x>=0&&Pi.y>=0&&Pi.x+Pi.y<=1}static getInterpolation(t,e,n,i,s,a,o,l){return this.getBarycoord(t,e,n,i,Pi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Pi.x),l.addScaledVector(a,Pi.y),l.addScaledVector(o,Pi.z),l)}static getInterpolatedAttribute(t,e,n,i,s,a){return lc.setScalar(0),cc.setScalar(0),uc.setScalar(0),lc.fromBufferAttribute(t,e),cc.fromBufferAttribute(t,n),uc.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(lc,s.x),a.addScaledVector(cc,s.y),a.addScaledVector(uc,s.z),a}static isFrontFacing(t,e,n,i){return hi.subVectors(n,e),Ci.subVectors(t,e),hi.cross(Ci).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return hi.subVectors(this.c,this.b),Ci.subVectors(this.a,this.b),hi.cross(Ci).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ri.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ri.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return ri.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return ri.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ri.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let a,o;hs.subVectors(i,n),fs.subVectors(s,n),sc.subVectors(t,n);const l=hs.dot(sc),c=fs.dot(sc);if(l<=0&&c<=0)return e.copy(n);ac.subVectors(t,i);const u=hs.dot(ac),d=fs.dot(ac);if(u>=0&&d<=u)return e.copy(i);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(n).addScaledVector(hs,a);oc.subVectors(t,s);const p=hs.dot(oc),_=fs.dot(oc);if(_>=0&&p<=_)return e.copy(s);const g=p*c-l*_;if(g<=0&&c>=0&&_<=0)return o=c/(c-_),e.copy(n).addScaledVector(fs,o);const f=u*_-p*d;if(f<=0&&d-u>=0&&p-_>=0)return Mf.subVectors(s,i),o=(d-u)/(d-u+(p-_)),e.copy(i).addScaledVector(Mf,o);const m=1/(f+g+h);return a=g*m,o=h*m,e.copy(n).addScaledVector(hs,a).addScaledVector(fs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Jp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qi={h:0,s:0,l:0},po={h:0,s:0,l:0};function hc(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class Yt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=kn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,pe.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=pe.workingColorSpace){return this.r=t,this.g=e,this.b=n,pe.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=pe.workingColorSpace){if(t=Jg(t,1),e=Mn(e,0,1),n=Mn(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=hc(a,s,t+1/3),this.g=hc(a,s,t),this.b=hc(a,s,t-1/3)}return pe.toWorkingColorSpace(this,i),this}setStyle(t,e=kn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=kn){const n=Jp[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Hs(t.r),this.g=Hs(t.g),this.b=Hs(t.b),this}copyLinearToSRGB(t){return this.r=Kl(t.r),this.g=Kl(t.g),this.b=Kl(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=kn){return pe.fromWorkingColorSpace(an.copy(this),t),Math.round(Mn(an.r*255,0,255))*65536+Math.round(Mn(an.g*255,0,255))*256+Math.round(Mn(an.b*255,0,255))}getHexString(t=kn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=pe.workingColorSpace){pe.fromWorkingColorSpace(an.copy(this),e);const n=an.r,i=an.g,s=an.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case n:l=(i-s)/d+(i<s?6:0);break;case i:l=(s-n)/d+2;break;case s:l=(n-i)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=pe.workingColorSpace){return pe.fromWorkingColorSpace(an.copy(this),e),t.r=an.r,t.g=an.g,t.b=an.b,t}getStyle(t=kn){pe.fromWorkingColorSpace(an.copy(this),t);const e=an.r,n=an.g,i=an.b;return t!==kn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(qi),this.setHSL(qi.h+t,qi.s+e,qi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(qi),t.getHSL(po);const n=ql(qi.h,po.h,e),i=ql(qi.s,po.s,e),s=ql(qi.l,po.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const an=new Yt;Yt.NAMES=Jp;let _0=0;class Qr extends ra{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_0++}),this.uuid=lr(),this.name="",this.type="Material",this.blending=zs,this.side=dr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$c,this.blendDst=Kc,this.blendEquation=Dr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Yt(0,0,0),this.blendAlpha=0,this.depthFunc=Zs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=is,this.stencilZFail=is,this.stencilZPass=is,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==zs&&(n.blending=this.blending),this.side!==dr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==$c&&(n.blendSrc=this.blendSrc),this.blendDst!==Kc&&(n.blendDst=this.blendDst),this.blendEquation!==Dr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Zs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==lf&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==is&&(n.stencilFail=this.stencilFail),this.stencilZFail!==is&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==is&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(e){const s=i(t.textures),a=i(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Mh extends Qr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mi,this.combine=Up,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const He=new I,mo=new qt;class Tn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Iu,this.updateRanges=[],this.gpuType=yi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)mo.fromBufferAttribute(this,e),mo.applyMatrix3(t),this.setXY(e,mo.x,mo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyMatrix3(t),this.setXYZ(e,He.x,He.y,He.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyMatrix4(t),this.setXYZ(e,He.x,He.y,He.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyNormalMatrix(t),this.setXYZ(e,He.x,He.y,He.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.transformDirection(t),this.setXYZ(e,He.x,He.y,He.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Si(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Se(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Si(e,this.array)),e}setX(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Si(e,this.array)),e}setY(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Si(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Si(e,this.array)),e}setW(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),i=Se(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),i=Se(i,this.array),s=Se(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Iu&&(t.usage=this.usage),t}}class Qp extends Tn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class tm extends Tn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class $n extends Tn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let g0=0;const Qn=new ve,fc=new qe,ds=new I,On=new Jr,da=new Jr,Ze=new I;class Zn extends ra{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:g0++}),this.uuid=lr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(qp(t)?tm:Qp)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Jt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Qn.makeRotationFromQuaternion(t),this.applyMatrix4(Qn),this}rotateX(t){return Qn.makeRotationX(t),this.applyMatrix4(Qn),this}rotateY(t){return Qn.makeRotationY(t),this.applyMatrix4(Qn),this}rotateZ(t){return Qn.makeRotationZ(t),this.applyMatrix4(Qn),this}translate(t,e,n){return Qn.makeTranslation(t,e,n),this.applyMatrix4(Qn),this}scale(t,e,n){return Qn.makeScale(t,e,n),this.applyMatrix4(Qn),this}lookAt(t){return fc.lookAt(t),fc.updateMatrix(),this.applyMatrix4(fc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ds).negate(),this.translate(ds.x,ds.y,ds.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new $n(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Jr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];On.setFromBufferAttribute(s),this.morphTargetsRelative?(Ze.addVectors(this.boundingBox.min,On.min),this.boundingBox.expandByPoint(Ze),Ze.addVectors(this.boundingBox.max,On.max),this.boundingBox.expandByPoint(Ze)):(this.boundingBox.expandByPoint(On.min),this.boundingBox.expandByPoint(On.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new aa);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){const n=this.boundingSphere.center;if(On.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];da.setFromBufferAttribute(o),this.morphTargetsRelative?(Ze.addVectors(On.min,da.min),On.expandByPoint(Ze),Ze.addVectors(On.max,da.max),On.expandByPoint(Ze)):(On.expandByPoint(da.min),On.expandByPoint(da.max))}On.getCenter(n);let i=0;for(let s=0,a=t.count;s<a;s++)Ze.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Ze));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Ze.fromBufferAttribute(o,c),l&&(ds.fromBufferAttribute(t,c),Ze.add(ds)),i=Math.max(i,n.distanceToSquared(Ze))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Tn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let C=0;C<n.count;C++)o[C]=new I,l[C]=new I;const c=new I,u=new I,d=new I,h=new qt,p=new qt,_=new qt,g=new I,f=new I;function m(C,L,v){c.fromBufferAttribute(n,C),u.fromBufferAttribute(n,L),d.fromBufferAttribute(n,v),h.fromBufferAttribute(s,C),p.fromBufferAttribute(s,L),_.fromBufferAttribute(s,v),u.sub(c),d.sub(c),p.sub(h),_.sub(h);const T=1/(p.x*_.y-_.x*p.y);isFinite(T)&&(g.copy(u).multiplyScalar(_.y).addScaledVector(d,-p.y).multiplyScalar(T),f.copy(d).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(T),o[C].add(g),o[L].add(g),o[v].add(g),l[C].add(f),l[L].add(f),l[v].add(f))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let C=0,L=S.length;C<L;++C){const v=S[C],T=v.start,U=v.count;for(let k=T,G=T+U;k<G;k+=3)m(t.getX(k+0),t.getX(k+1),t.getX(k+2))}const x=new I,M=new I,A=new I,w=new I;function E(C){A.fromBufferAttribute(i,C),w.copy(A);const L=o[C];x.copy(L),x.sub(A.multiplyScalar(A.dot(L))).normalize(),M.crossVectors(w,L);const T=M.dot(l[C])<0?-1:1;a.setXYZW(C,x.x,x.y,x.z,T)}for(let C=0,L=S.length;C<L;++C){const v=S[C],T=v.start,U=v.count;for(let k=T,G=T+U;k<G;k+=3)E(t.getX(k+0)),E(t.getX(k+1)),E(t.getX(k+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Tn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,p=n.count;h<p;h++)n.setXYZ(h,0,0,0);const i=new I,s=new I,a=new I,o=new I,l=new I,c=new I,u=new I,d=new I;if(t)for(let h=0,p=t.count;h<p;h+=3){const _=t.getX(h+0),g=t.getX(h+1),f=t.getX(h+2);i.fromBufferAttribute(e,_),s.fromBufferAttribute(e,g),a.fromBufferAttribute(e,f),u.subVectors(a,s),d.subVectors(i,s),u.cross(d),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,f),o.add(u),l.add(u),c.add(u),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let h=0,p=e.count;h<p;h+=3)i.fromBufferAttribute(e,h+0),s.fromBufferAttribute(e,h+1),a.fromBufferAttribute(e,h+2),u.subVectors(a,s),d.subVectors(i,s),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ze.fromBufferAttribute(t,e),Ze.normalize(),t.setXYZ(e,Ze.x,Ze.y,Ze.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u);let p=0,_=0;for(let g=0,f=l.length;g<f;g++){o.isInterleavedBufferAttribute?p=l[g]*o.data.stride+o.offset:p=l[g]*u;for(let m=0;m<u;m++)h[_++]=c[p++]}return new Tn(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Zn,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=t(l,n);e.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,d=c.length;u<d;u++){const h=c[u],p=t(h,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const p=c[d];u.push(p.toJSON(t.data))}u.length>0&&(i[l]=u,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],d=s[c];for(let h=0,p=d.length;h<p;h++)u.push(d[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const yf=new ve,yr=new jp,_o=new aa,Ef=new I,go=new I,vo=new I,xo=new I,dc=new I,So=new I,Tf=new I,Mo=new I;class ge extends qe{constructor(t=new Zn,e=new Mh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(s&&o){So.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],d=s[l];u!==0&&(dc.fromBufferAttribute(d,t),a?So.addScaledVector(dc,u):So.addScaledVector(dc.sub(e),u))}e.add(So)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),_o.copy(n.boundingSphere),_o.applyMatrix4(s),yr.copy(t.ray).recast(t.near),!(_o.containsPoint(yr.origin)===!1&&(yr.intersectSphere(_o,Ef)===null||yr.origin.distanceToSquared(Ef)>(t.far-t.near)**2))&&(yf.copy(s).invert(),yr.copy(t.ray).applyMatrix4(yf),!(n.boundingBox!==null&&yr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,yr)))}_computeIntersections(t,e,n){let i;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,g=h.length;_<g;_++){const f=h[_],m=a[f.materialIndex],S=Math.max(f.start,p.start),x=Math.min(o.count,Math.min(f.start+f.count,p.start+p.count));for(let M=S,A=x;M<A;M+=3){const w=o.getX(M),E=o.getX(M+1),C=o.getX(M+2);i=yo(this,m,t,n,c,u,d,w,E,C),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=f.materialIndex,e.push(i))}}else{const _=Math.max(0,p.start),g=Math.min(o.count,p.start+p.count);for(let f=_,m=g;f<m;f+=3){const S=o.getX(f),x=o.getX(f+1),M=o.getX(f+2);i=yo(this,a,t,n,c,u,d,S,x,M),i&&(i.faceIndex=Math.floor(f/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,g=h.length;_<g;_++){const f=h[_],m=a[f.materialIndex],S=Math.max(f.start,p.start),x=Math.min(l.count,Math.min(f.start+f.count,p.start+p.count));for(let M=S,A=x;M<A;M+=3){const w=M,E=M+1,C=M+2;i=yo(this,m,t,n,c,u,d,w,E,C),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=f.materialIndex,e.push(i))}}else{const _=Math.max(0,p.start),g=Math.min(l.count,p.start+p.count);for(let f=_,m=g;f<m;f+=3){const S=f,x=f+1,M=f+2;i=yo(this,a,t,n,c,u,d,S,x,M),i&&(i.faceIndex=Math.floor(f/3),e.push(i))}}}}function v0(r,t,e,n,i,s,a,o){let l;if(t.side===En?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,t.side===dr,o),l===null)return null;Mo.copy(o),Mo.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(Mo);return c<e.near||c>e.far?null:{distance:c,point:Mo.clone(),object:r}}function yo(r,t,e,n,i,s,a,o,l,c){r.getVertexPosition(o,go),r.getVertexPosition(l,vo),r.getVertexPosition(c,xo);const u=v0(r,t,e,n,go,vo,xo,Tf);if(u){const d=new I;ri.getBarycoord(Tf,go,vo,xo,d),i&&(u.uv=ri.getInterpolatedAttribute(i,o,l,c,d,new qt)),s&&(u.uv1=ri.getInterpolatedAttribute(s,o,l,c,d,new qt)),a&&(u.normal=ri.getInterpolatedAttribute(a,o,l,c,d,new I),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new I,materialIndex:0};ri.getNormal(go,vo,xo,h.normal),u.face=h,u.barycoord=d}return u}class ts extends Zn{constructor(t=1,e=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],d=[];let h=0,p=0;_("z","y","x",-1,-1,n,e,t,a,s,0),_("z","y","x",1,-1,n,e,-t,a,s,1),_("x","z","y",1,1,t,n,e,i,a,2),_("x","z","y",1,-1,t,n,-e,i,a,3),_("x","y","z",1,-1,t,e,n,i,s,4),_("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new $n(c,3)),this.setAttribute("normal",new $n(u,3)),this.setAttribute("uv",new $n(d,2));function _(g,f,m,S,x,M,A,w,E,C,L){const v=M/E,T=A/C,U=M/2,k=A/2,G=w/2,Z=E+1,B=C+1;let $=0,V=0;const st=new I;for(let P=0;P<B;P++){const ct=P*T-k;for(let Rt=0;Rt<Z;Rt++){const Ft=Rt*v-U;st[g]=Ft*S,st[f]=ct*x,st[m]=G,c.push(st.x,st.y,st.z),st[g]=0,st[f]=0,st[m]=w>0?1:-1,u.push(st.x,st.y,st.z),d.push(Rt/E),d.push(1-P/C),$+=1}}for(let P=0;P<C;P++)for(let ct=0;ct<E;ct++){const Rt=h+ct+Z*P,Ft=h+ct+Z*(P+1),q=h+(ct+1)+Z*(P+1),et=h+(ct+1)+Z*P;l.push(Rt,Ft,et),l.push(Ft,q,et),V+=6}o.addGroup(p,V,L),p+=V,h+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ts(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function na(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function gn(r){const t={};for(let e=0;e<r.length;e++){const n=na(r[e]);for(const i in n)t[i]=n[i]}return t}function x0(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function em(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:pe.workingColorSpace}const S0={clone:na,merge:gn};var M0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,y0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class pr extends Qr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=M0,this.fragmentShader=y0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=na(t.uniforms),this.uniformsGroups=x0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class nm extends qe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ve,this.projectionMatrix=new ve,this.projectionMatrixInverse=new ve,this.coordinateSystem=Oi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const $i=new I,bf=new qt,wf=new qt;class Hn extends nm{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Uu*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Yl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Uu*2*Math.atan(Math.tan(Yl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){$i.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set($i.x,$i.y).multiplyScalar(-t/$i.z),$i.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set($i.x,$i.y).multiplyScalar(-t/$i.z)}getViewSize(t,e){return this.getViewBounds(t,bf,wf),e.subVectors(wf,bf)}setViewOffset(t,e,n,i,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Yl*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ps=-90,ms=1;class E0 extends qe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Hn(ps,ms,t,e);i.layers=this.layers,this.add(i);const s=new Hn(ps,ms,t,e);s.layers=this.layers,this.add(s);const a=new Hn(ps,ms,t,e);a.layers=this.layers,this.add(a);const o=new Hn(ps,ms,t,e);o.layers=this.layers,this.add(o);const l=new Hn(ps,ms,t,e);l.layers=this.layers,this.add(l);const c=new Hn(ps,ms,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,a,o,l]=e;for(const c of e)this.remove(c);if(t===Oi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Sl)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,d=t.getRenderTarget(),h=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,i),t.render(e,u),t.setRenderTarget(d,h,p),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class im extends dn{constructor(t,e,n,i,s,a,o,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:Js,super(t,e,n,i,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class T0 extends Yr{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new im(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:di}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new ts(5,5,5),s=new pr({name:"CubemapFromEquirect",uniforms:na(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:En,blending:ar});s.uniforms.tEquirect.value=e;const a=new ge(i,s),o=e.minFilter;return e.minFilter===Nr&&(e.minFilter=di),new E0(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(s)}}const pc=new I,b0=new I,w0=new Jt;class Ar{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=pc.subVectors(n,e).cross(b0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(pc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||w0.getNormalMatrix(t),i=this.coplanarPoint(pc).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Er=new aa,Eo=new I;class yh{constructor(t=new Ar,e=new Ar,n=new Ar,i=new Ar,s=new Ar,a=new Ar){this.planes=[t,e,n,i,s,a]}set(t,e,n,i,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Oi){const n=this.planes,i=t.elements,s=i[0],a=i[1],o=i[2],l=i[3],c=i[4],u=i[5],d=i[6],h=i[7],p=i[8],_=i[9],g=i[10],f=i[11],m=i[12],S=i[13],x=i[14],M=i[15];if(n[0].setComponents(l-s,h-c,f-p,M-m).normalize(),n[1].setComponents(l+s,h+c,f+p,M+m).normalize(),n[2].setComponents(l+a,h+u,f+_,M+S).normalize(),n[3].setComponents(l-a,h-u,f-_,M-S).normalize(),n[4].setComponents(l-o,h-d,f-g,M-x).normalize(),e===Oi)n[5].setComponents(l+o,h+d,f+g,M+x).normalize();else if(e===Sl)n[5].setComponents(o,d,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Er.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Er.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Er)}intersectsSprite(t){return Er.center.set(0,0,0),Er.radius=.7071067811865476,Er.applyMatrix4(t.matrixWorld),this.intersectsSphere(Er)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Eo.x=i.normal.x>0?t.max.x:t.min.x,Eo.y=i.normal.y>0?t.max.y:t.min.y,Eo.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Eo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function rm(){let r=null,t=!1,e=null,n=null;function i(s,a){e(s,a),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function A0(r){const t=new WeakMap;function e(o,l){const c=o.array,u=o.usage,d=c.byteLength,h=r.createBuffer();r.bindBuffer(l,h),r.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=r.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=r.HALF_FLOAT:p=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=r.SHORT;else if(c instanceof Uint32Array)p=r.UNSIGNED_INT;else if(c instanceof Int32Array)p=r.INT;else if(c instanceof Int8Array)p=r.BYTE;else if(c instanceof Uint8Array)p=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const u=l.array,d=l.updateRanges;if(r.bindBuffer(c,o),d.length===0)r.bufferSubData(c,0,u);else{d.sort((p,_)=>p.start-_.start);let h=0;for(let p=1;p<d.length;p++){const _=d[h],g=d[p];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++h,d[h]=g)}d.length=h+1;for(let p=0,_=d.length;p<_;p++){const g=d[p];r.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(r.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:a}}class io extends Zn{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,d=t/o,h=e/l,p=[],_=[],g=[],f=[];for(let m=0;m<u;m++){const S=m*h-a;for(let x=0;x<c;x++){const M=x*d-s;_.push(M,-S,0),g.push(0,0,1),f.push(x/o),f.push(1-m/l)}}for(let m=0;m<l;m++)for(let S=0;S<o;S++){const x=S+c*m,M=S+c*(m+1),A=S+1+c*(m+1),w=S+1+c*m;p.push(x,M,w),p.push(M,A,w)}this.setIndex(p),this.setAttribute("position",new $n(_,3)),this.setAttribute("normal",new $n(g,3)),this.setAttribute("uv",new $n(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new io(t.width,t.height,t.widthSegments,t.heightSegments)}}var R0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,C0=`#ifdef USE_ALPHAHASH
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
#endif`,P0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,D0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,L0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,I0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,U0=`#ifdef USE_AOMAP
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
#endif`,N0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,O0=`#ifdef USE_BATCHING
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
#endif`,F0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,B0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,z0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,k0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,H0=`#ifdef USE_IRIDESCENCE
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
#endif`,G0=`#ifdef USE_BUMPMAP
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
#endif`,V0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,W0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,X0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Y0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,q0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,$0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,K0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,j0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Z0=`#define PI 3.141592653589793
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
} // validated`,J0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Q0=`vec3 transformedNormal = objectNormal;
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
#endif`,tv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ev=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,nv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,iv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rv="gl_FragColor = linearToOutputTexel( gl_FragColor );",sv=`
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
}`,av=`#ifdef USE_ENVMAP
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
#endif`,ov=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,lv=`#ifdef USE_ENVMAP
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
#endif`,cv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,uv=`#ifdef USE_ENVMAP
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
#endif`,hv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,dv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,pv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,mv=`#ifdef USE_GRADIENTMAP
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
}`,_v=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xv=`uniform bool receiveShadow;
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
#endif`,Sv=`#ifdef USE_ENVMAP
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
#endif`,Mv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ev=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Tv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bv=`PhysicalMaterial material;
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
#endif`,wv=`struct PhysicalMaterial {
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
}`,Av=`
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
#endif`,Rv=`#if defined( RE_IndirectDiffuse )
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
#endif`,Cv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Pv=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Dv=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lv=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Iv=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Uv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Nv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ov=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Fv=`#if defined( USE_POINTS_UV )
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
#endif`,Bv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,kv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Hv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Gv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vv=`#ifdef USE_MORPHTARGETS
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
#endif`,Wv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Yv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,qv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$v=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,jv=`#ifdef USE_NORMALMAP
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
#endif`,Zv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Jv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Qv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,tx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ex=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,nx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ix=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,rx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ax=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ox=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,lx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ux=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,fx=`float getShadowMask() {
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
}`,dx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,px=`#ifdef USE_SKINNING
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
#endif`,mx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_x=`#ifdef USE_SKINNING
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
#endif`,gx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Sx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Mx=`#ifdef USE_TRANSMISSION
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
#endif`,yx=`#ifdef USE_TRANSMISSION
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
#endif`,Ex=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ax=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Rx=`uniform sampler2D t2D;
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
}`,Cx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Px=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Dx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ix=`#include <common>
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
}`,Ux=`#if DEPTH_PACKING == 3200
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
}`,Nx=`#define DISTANCE
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
}`,Ox=`#define DISTANCE
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
}`,Fx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Bx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zx=`uniform float scale;
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
}`,kx=`uniform vec3 diffuse;
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
}`,Hx=`#include <common>
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
}`,Gx=`uniform vec3 diffuse;
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
}`,Vx=`#define LAMBERT
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
}`,Wx=`#define LAMBERT
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
}`,Xx=`#define MATCAP
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
}`,Yx=`#define MATCAP
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
}`,qx=`#define NORMAL
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
}`,$x=`#define NORMAL
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
}`,Kx=`#define PHONG
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
}`,jx=`#define PHONG
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
}`,Zx=`#define STANDARD
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
}`,Jx=`#define STANDARD
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
}`,Qx=`#define TOON
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
}`,tS=`#define TOON
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
}`,eS=`uniform float size;
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
}`,nS=`uniform vec3 diffuse;
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
}`,iS=`#include <common>
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
}`,rS=`uniform vec3 color;
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
}`,sS=`uniform float rotation;
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
}`,aS=`uniform vec3 diffuse;
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
}`,Zt={alphahash_fragment:R0,alphahash_pars_fragment:C0,alphamap_fragment:P0,alphamap_pars_fragment:D0,alphatest_fragment:L0,alphatest_pars_fragment:I0,aomap_fragment:U0,aomap_pars_fragment:N0,batching_pars_vertex:O0,batching_vertex:F0,begin_vertex:B0,beginnormal_vertex:z0,bsdfs:k0,iridescence_fragment:H0,bumpmap_pars_fragment:G0,clipping_planes_fragment:V0,clipping_planes_pars_fragment:W0,clipping_planes_pars_vertex:X0,clipping_planes_vertex:Y0,color_fragment:q0,color_pars_fragment:$0,color_pars_vertex:K0,color_vertex:j0,common:Z0,cube_uv_reflection_fragment:J0,defaultnormal_vertex:Q0,displacementmap_pars_vertex:tv,displacementmap_vertex:ev,emissivemap_fragment:nv,emissivemap_pars_fragment:iv,colorspace_fragment:rv,colorspace_pars_fragment:sv,envmap_fragment:av,envmap_common_pars_fragment:ov,envmap_pars_fragment:lv,envmap_pars_vertex:cv,envmap_physical_pars_fragment:Sv,envmap_vertex:uv,fog_vertex:hv,fog_pars_vertex:fv,fog_fragment:dv,fog_pars_fragment:pv,gradientmap_pars_fragment:mv,lightmap_pars_fragment:_v,lights_lambert_fragment:gv,lights_lambert_pars_fragment:vv,lights_pars_begin:xv,lights_toon_fragment:Mv,lights_toon_pars_fragment:yv,lights_phong_fragment:Ev,lights_phong_pars_fragment:Tv,lights_physical_fragment:bv,lights_physical_pars_fragment:wv,lights_fragment_begin:Av,lights_fragment_maps:Rv,lights_fragment_end:Cv,logdepthbuf_fragment:Pv,logdepthbuf_pars_fragment:Dv,logdepthbuf_pars_vertex:Lv,logdepthbuf_vertex:Iv,map_fragment:Uv,map_pars_fragment:Nv,map_particle_fragment:Ov,map_particle_pars_fragment:Fv,metalnessmap_fragment:Bv,metalnessmap_pars_fragment:zv,morphinstance_vertex:kv,morphcolor_vertex:Hv,morphnormal_vertex:Gv,morphtarget_pars_vertex:Vv,morphtarget_vertex:Wv,normal_fragment_begin:Xv,normal_fragment_maps:Yv,normal_pars_fragment:qv,normal_pars_vertex:$v,normal_vertex:Kv,normalmap_pars_fragment:jv,clearcoat_normal_fragment_begin:Zv,clearcoat_normal_fragment_maps:Jv,clearcoat_pars_fragment:Qv,iridescence_pars_fragment:tx,opaque_fragment:ex,packing:nx,premultiplied_alpha_fragment:ix,project_vertex:rx,dithering_fragment:sx,dithering_pars_fragment:ax,roughnessmap_fragment:ox,roughnessmap_pars_fragment:lx,shadowmap_pars_fragment:cx,shadowmap_pars_vertex:ux,shadowmap_vertex:hx,shadowmask_pars_fragment:fx,skinbase_vertex:dx,skinning_pars_vertex:px,skinning_vertex:mx,skinnormal_vertex:_x,specularmap_fragment:gx,specularmap_pars_fragment:vx,tonemapping_fragment:xx,tonemapping_pars_fragment:Sx,transmission_fragment:Mx,transmission_pars_fragment:yx,uv_pars_fragment:Ex,uv_pars_vertex:Tx,uv_vertex:bx,worldpos_vertex:wx,background_vert:Ax,background_frag:Rx,backgroundCube_vert:Cx,backgroundCube_frag:Px,cube_vert:Dx,cube_frag:Lx,depth_vert:Ix,depth_frag:Ux,distanceRGBA_vert:Nx,distanceRGBA_frag:Ox,equirect_vert:Fx,equirect_frag:Bx,linedashed_vert:zx,linedashed_frag:kx,meshbasic_vert:Hx,meshbasic_frag:Gx,meshlambert_vert:Vx,meshlambert_frag:Wx,meshmatcap_vert:Xx,meshmatcap_frag:Yx,meshnormal_vert:qx,meshnormal_frag:$x,meshphong_vert:Kx,meshphong_frag:jx,meshphysical_vert:Zx,meshphysical_frag:Jx,meshtoon_vert:Qx,meshtoon_frag:tS,points_vert:eS,points_frag:nS,shadow_vert:iS,shadow_frag:rS,sprite_vert:sS,sprite_frag:aS},vt={common:{diffuse:{value:new Yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Jt}},envmap:{envMap:{value:null},envMapRotation:{value:new Jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Jt},normalScale:{value:new qt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0},uvTransform:{value:new Jt}},sprite:{diffuse:{value:new Yt(16777215)},opacity:{value:1},center:{value:new qt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}}},vi={basic:{uniforms:gn([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.fog]),vertexShader:Zt.meshbasic_vert,fragmentShader:Zt.meshbasic_frag},lambert:{uniforms:gn([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new Yt(0)}}]),vertexShader:Zt.meshlambert_vert,fragmentShader:Zt.meshlambert_frag},phong:{uniforms:gn([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new Yt(0)},specular:{value:new Yt(1118481)},shininess:{value:30}}]),vertexShader:Zt.meshphong_vert,fragmentShader:Zt.meshphong_frag},standard:{uniforms:gn([vt.common,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.roughnessmap,vt.metalnessmap,vt.fog,vt.lights,{emissive:{value:new Yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag},toon:{uniforms:gn([vt.common,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.gradientmap,vt.fog,vt.lights,{emissive:{value:new Yt(0)}}]),vertexShader:Zt.meshtoon_vert,fragmentShader:Zt.meshtoon_frag},matcap:{uniforms:gn([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,{matcap:{value:null}}]),vertexShader:Zt.meshmatcap_vert,fragmentShader:Zt.meshmatcap_frag},points:{uniforms:gn([vt.points,vt.fog]),vertexShader:Zt.points_vert,fragmentShader:Zt.points_frag},dashed:{uniforms:gn([vt.common,vt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Zt.linedashed_vert,fragmentShader:Zt.linedashed_frag},depth:{uniforms:gn([vt.common,vt.displacementmap]),vertexShader:Zt.depth_vert,fragmentShader:Zt.depth_frag},normal:{uniforms:gn([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,{opacity:{value:1}}]),vertexShader:Zt.meshnormal_vert,fragmentShader:Zt.meshnormal_frag},sprite:{uniforms:gn([vt.sprite,vt.fog]),vertexShader:Zt.sprite_vert,fragmentShader:Zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Zt.background_vert,fragmentShader:Zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Jt}},vertexShader:Zt.backgroundCube_vert,fragmentShader:Zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Zt.cube_vert,fragmentShader:Zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Zt.equirect_vert,fragmentShader:Zt.equirect_frag},distanceRGBA:{uniforms:gn([vt.common,vt.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Zt.distanceRGBA_vert,fragmentShader:Zt.distanceRGBA_frag},shadow:{uniforms:gn([vt.lights,vt.fog,{color:{value:new Yt(0)},opacity:{value:1}}]),vertexShader:Zt.shadow_vert,fragmentShader:Zt.shadow_frag}};vi.physical={uniforms:gn([vi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Jt},clearcoatNormalScale:{value:new qt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Jt},sheen:{value:0},sheenColor:{value:new Yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Jt},transmissionSamplerSize:{value:new qt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Jt},attenuationDistance:{value:0},attenuationColor:{value:new Yt(0)},specularColor:{value:new Yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Jt},anisotropyVector:{value:new qt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Jt}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag};const To={r:0,b:0,g:0},Tr=new mi,oS=new ve;function lS(r,t,e,n,i,s,a){const o=new Yt(0);let l=s===!0?0:1,c,u,d=null,h=0,p=null;function _(S){let x=S.isScene===!0?S.background:null;return x&&x.isTexture&&(x=(S.backgroundBlurriness>0?e:t).get(x)),x}function g(S){let x=!1;const M=_(S);M===null?m(o,l):M&&M.isColor&&(m(M,1),x=!0);const A=r.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function f(S,x){const M=_(x);M&&(M.isCubeTexture||M.mapping===Pl)?(u===void 0&&(u=new ge(new ts(1,1,1),new pr({name:"BackgroundCubeMaterial",uniforms:na(vi.backgroundCube.uniforms),vertexShader:vi.backgroundCube.vertexShader,fragmentShader:vi.backgroundCube.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,w,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Tr.copy(x.backgroundRotation),Tr.x*=-1,Tr.y*=-1,Tr.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Tr.y*=-1,Tr.z*=-1),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(oS.makeRotationFromEuler(Tr)),u.material.toneMapped=pe.getTransfer(M.colorSpace)!==Re,(d!==M||h!==M.version||p!==r.toneMapping)&&(u.material.needsUpdate=!0,d=M,h=M.version,p=r.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new ge(new io(2,2),new pr({name:"BackgroundMaterial",uniforms:na(vi.background.uniforms),vertexShader:vi.background.vertexShader,fragmentShader:vi.background.fragmentShader,side:dr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=pe.getTransfer(M.colorSpace)!==Re,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(d!==M||h!==M.version||p!==r.toneMapping)&&(c.material.needsUpdate=!0,d=M,h=M.version,p=r.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function m(S,x){S.getRGB(To,em(r)),n.buffers.color.setClear(To.r,To.g,To.b,x,a)}return{getClearColor:function(){return o},setClearColor:function(S,x=1){o.set(S),l=x,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,m(o,l)},render:g,addToRenderList:f}}function cS(r,t){const e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=h(null);let s=i,a=!1;function o(v,T,U,k,G){let Z=!1;const B=d(k,U,T);s!==B&&(s=B,c(s.object)),Z=p(v,k,U,G),Z&&_(v,k,U,G),G!==null&&t.update(G,r.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,M(v,T,U,k),G!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function l(){return r.createVertexArray()}function c(v){return r.bindVertexArray(v)}function u(v){return r.deleteVertexArray(v)}function d(v,T,U){const k=U.wireframe===!0;let G=n[v.id];G===void 0&&(G={},n[v.id]=G);let Z=G[T.id];Z===void 0&&(Z={},G[T.id]=Z);let B=Z[k];return B===void 0&&(B=h(l()),Z[k]=B),B}function h(v){const T=[],U=[],k=[];for(let G=0;G<e;G++)T[G]=0,U[G]=0,k[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:U,attributeDivisors:k,object:v,attributes:{},index:null}}function p(v,T,U,k){const G=s.attributes,Z=T.attributes;let B=0;const $=U.getAttributes();for(const V in $)if($[V].location>=0){const P=G[V];let ct=Z[V];if(ct===void 0&&(V==="instanceMatrix"&&v.instanceMatrix&&(ct=v.instanceMatrix),V==="instanceColor"&&v.instanceColor&&(ct=v.instanceColor)),P===void 0||P.attribute!==ct||ct&&P.data!==ct.data)return!0;B++}return s.attributesNum!==B||s.index!==k}function _(v,T,U,k){const G={},Z=T.attributes;let B=0;const $=U.getAttributes();for(const V in $)if($[V].location>=0){let P=Z[V];P===void 0&&(V==="instanceMatrix"&&v.instanceMatrix&&(P=v.instanceMatrix),V==="instanceColor"&&v.instanceColor&&(P=v.instanceColor));const ct={};ct.attribute=P,P&&P.data&&(ct.data=P.data),G[V]=ct,B++}s.attributes=G,s.attributesNum=B,s.index=k}function g(){const v=s.newAttributes;for(let T=0,U=v.length;T<U;T++)v[T]=0}function f(v){m(v,0)}function m(v,T){const U=s.newAttributes,k=s.enabledAttributes,G=s.attributeDivisors;U[v]=1,k[v]===0&&(r.enableVertexAttribArray(v),k[v]=1),G[v]!==T&&(r.vertexAttribDivisor(v,T),G[v]=T)}function S(){const v=s.newAttributes,T=s.enabledAttributes;for(let U=0,k=T.length;U<k;U++)T[U]!==v[U]&&(r.disableVertexAttribArray(U),T[U]=0)}function x(v,T,U,k,G,Z,B){B===!0?r.vertexAttribIPointer(v,T,U,G,Z):r.vertexAttribPointer(v,T,U,k,G,Z)}function M(v,T,U,k){g();const G=k.attributes,Z=U.getAttributes(),B=T.defaultAttributeValues;for(const $ in Z){const V=Z[$];if(V.location>=0){let st=G[$];if(st===void 0&&($==="instanceMatrix"&&v.instanceMatrix&&(st=v.instanceMatrix),$==="instanceColor"&&v.instanceColor&&(st=v.instanceColor)),st!==void 0){const P=st.normalized,ct=st.itemSize,Rt=t.get(st);if(Rt===void 0)continue;const Ft=Rt.buffer,q=Rt.type,et=Rt.bytesPerElement,ht=q===r.INT||q===r.UNSIGNED_INT||st.gpuType===dh;if(st.isInterleavedBufferAttribute){const lt=st.data,Y=lt.stride,J=st.offset;if(lt.isInstancedInterleavedBuffer){for(let ft=0;ft<V.locationSize;ft++)m(V.location+ft,lt.meshPerAttribute);v.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let ft=0;ft<V.locationSize;ft++)f(V.location+ft);r.bindBuffer(r.ARRAY_BUFFER,Ft);for(let ft=0;ft<V.locationSize;ft++)x(V.location+ft,ct/V.locationSize,q,P,Y*et,(J+ct/V.locationSize*ft)*et,ht)}else{if(st.isInstancedBufferAttribute){for(let lt=0;lt<V.locationSize;lt++)m(V.location+lt,st.meshPerAttribute);v.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let lt=0;lt<V.locationSize;lt++)f(V.location+lt);r.bindBuffer(r.ARRAY_BUFFER,Ft);for(let lt=0;lt<V.locationSize;lt++)x(V.location+lt,ct/V.locationSize,q,P,ct*et,ct/V.locationSize*lt*et,ht)}}else if(B!==void 0){const P=B[$];if(P!==void 0)switch(P.length){case 2:r.vertexAttrib2fv(V.location,P);break;case 3:r.vertexAttrib3fv(V.location,P);break;case 4:r.vertexAttrib4fv(V.location,P);break;default:r.vertexAttrib1fv(V.location,P)}}}}S()}function A(){C();for(const v in n){const T=n[v];for(const U in T){const k=T[U];for(const G in k)u(k[G].object),delete k[G];delete T[U]}delete n[v]}}function w(v){if(n[v.id]===void 0)return;const T=n[v.id];for(const U in T){const k=T[U];for(const G in k)u(k[G].object),delete k[G];delete T[U]}delete n[v.id]}function E(v){for(const T in n){const U=n[T];if(U[v.id]===void 0)continue;const k=U[v.id];for(const G in k)u(k[G].object),delete k[G];delete U[v.id]}}function C(){L(),a=!0,s!==i&&(s=i,c(s.object))}function L(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:C,resetDefaultState:L,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfProgram:E,initAttributes:g,enableAttribute:f,disableUnusedAttributes:S}}function uS(r,t,e){let n;function i(c){n=c}function s(c,u){r.drawArrays(n,c,u),e.update(u,n,1)}function a(c,u,d){d!==0&&(r.drawArraysInstanced(n,c,u,d),e.update(u,n,d))}function o(c,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,d);let p=0;for(let _=0;_<d;_++)p+=u[_];e.update(p,n,1)}function l(c,u,d,h){if(d===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)a(c[_],u[_],h[_]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,u,0,h,0,d);let _=0;for(let g=0;g<d;g++)_+=u[g];for(let g=0;g<h.length;g++)e.update(_,n,h[g])}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function hS(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const E=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(E){return!(E!==pi&&n.convert(E)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){const C=E===no&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==Hi&&n.convert(E)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==yi&&!C)}function l(E){if(E==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=e.logarithmicDepthBuffer===!0,h=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(h===!0){const E=t.get("EXT_clip_control");E.clipControlEXT(E.LOWER_LEFT_EXT,E.ZERO_TO_ONE_EXT)}const p=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_TEXTURE_SIZE),f=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),S=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),x=r.getParameter(r.MAX_VARYING_VECTORS),M=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),A=_>0,w=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:h,maxTextures:p,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:f,maxAttributes:m,maxVertexUniforms:S,maxVaryings:x,maxFragmentUniforms:M,vertexTextures:A,maxSamples:w}}function fS(r){const t=this;let e=null,n=0,i=!1,s=!1;const a=new Ar,o=new Jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const p=d.length!==0||h||n!==0||i;return i=h,n=d.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){e=u(d,h,0)},this.setState=function(d,h,p){const _=d.clippingPlanes,g=d.clipIntersection,f=d.clipShadows,m=r.get(d);if(!i||_===null||_.length===0||s&&!f)s?u(null):c();else{const S=s?0:n,x=S*4;let M=m.clippingState||null;l.value=M,M=u(_,h,x,p);for(let A=0;A!==x;++A)M[A]=e[A];m.clippingState=M,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(d,h,p,_){const g=d!==null?d.length:0;let f=null;if(g!==0){if(f=l.value,_!==!0||f===null){const m=p+g*4,S=h.matrixWorldInverse;o.getNormalMatrix(S),(f===null||f.length<m)&&(f=new Float32Array(m));for(let x=0,M=p;x!==g;++x,M+=4)a.copy(d[x]).applyMatrix4(S,o),a.normal.toArray(f,M),f[M+3]=a.constant}l.value=f,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,f}}function dS(r){let t=new WeakMap;function e(a,o){return o===iu?a.mapping=Js:o===ru&&(a.mapping=Qs),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===iu||o===ru)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new T0(l.height);return c.fromEquirectangularTexture(r,a),t.set(a,c),a.addEventListener("dispose",i),e(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class sm extends nm{constructor(t=-1,e=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Us=4,Af=[.125,.215,.35,.446,.526,.582],Lr=20,mc=new sm,Rf=new Yt;let _c=null,gc=0,vc=0,xc=!1;const Rr=(1+Math.sqrt(5))/2,_s=1/Rr,Cf=[new I(-Rr,_s,0),new I(Rr,_s,0),new I(-_s,0,Rr),new I(_s,0,Rr),new I(0,Rr,-_s),new I(0,Rr,_s),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)];class Nu{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){_c=this._renderer.getRenderTarget(),gc=this._renderer.getActiveCubeFace(),vc=this._renderer.getActiveMipmapLevel(),xc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Lf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Df(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(_c,gc,vc),this._renderer.xr.enabled=xc,t.scissorTest=!1,bo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Js||t.mapping===Qs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),_c=this._renderer.getRenderTarget(),gc=this._renderer.getActiveCubeFace(),vc=this._renderer.getActiveMipmapLevel(),xc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:di,minFilter:di,generateMipmaps:!1,type:no,format:pi,colorSpace:gr,depthBuffer:!1},i=Pf(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pf(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=pS(s)),this._blurMaterial=mS(s,t,e)}return i}_compileMaterial(t){const e=new ge(this._lodPlanes[0],t);this._renderer.compile(e,mc)}_sceneToCubeUV(t,e,n,i){const o=new Hn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(Rf),u.toneMapping=or,u.autoClear=!1;const p=new Mh({name:"PMREM.Background",side:En,depthWrite:!1,depthTest:!1}),_=new ge(new ts,p);let g=!1;const f=t.background;f?f.isColor&&(p.color.copy(f),t.background=null,g=!0):(p.color.copy(Rf),g=!0);for(let m=0;m<6;m++){const S=m%3;S===0?(o.up.set(0,l[m],0),o.lookAt(c[m],0,0)):S===1?(o.up.set(0,0,l[m]),o.lookAt(0,c[m],0)):(o.up.set(0,l[m],0),o.lookAt(0,0,c[m]));const x=this._cubeSize;bo(i,S*x,m>2?x:0,x,x),u.setRenderTarget(i),g&&u.render(_,o),u.render(t,o)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=h,u.autoClear=d,t.background=f}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Js||t.mapping===Qs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Lf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Df());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new ge(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;bo(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,mc)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Cf[(i-s-1)%Cf.length];this._blur(t,s-1,s,a,o)}e.autoClear=n}_blur(t,e,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",s),this._halfBlur(a,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new ge(this._lodPlanes[i],c),h=c.uniforms,p=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Lr-1),g=s/_,f=isFinite(s)?1+Math.floor(u*g):Lr;f>Lr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Lr}`);const m=[];let S=0;for(let E=0;E<Lr;++E){const C=E/g,L=Math.exp(-C*C/2);m.push(L),E===0?S+=L:E<f&&(S+=2*L)}for(let E=0;E<m.length;E++)m[E]=m[E]/S;h.envMap.value=t.texture,h.samples.value=f,h.weights.value=m,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:x}=this;h.dTheta.value=_,h.mipInt.value=x-n;const M=this._sizeLods[i],A=3*M*(i>x-Us?i-x+Us:0),w=4*(this._cubeSize-M);bo(e,A,w,3*M,2*M),l.setRenderTarget(e),l.render(d,mc)}}function pS(r){const t=[],e=[],n=[];let i=r;const s=r-Us+1+Af.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);e.push(o);let l=1/o;a>r-Us?l=Af[a-r+Us-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,_=6,g=3,f=2,m=1,S=new Float32Array(g*_*p),x=new Float32Array(f*_*p),M=new Float32Array(m*_*p);for(let w=0;w<p;w++){const E=w%3*2/3-1,C=w>2?0:-1,L=[E,C,0,E+2/3,C,0,E+2/3,C+1,0,E,C,0,E+2/3,C+1,0,E,C+1,0];S.set(L,g*_*w),x.set(h,f*_*w);const v=[w,w,w,w,w,w];M.set(v,m*_*w)}const A=new Zn;A.setAttribute("position",new Tn(S,g)),A.setAttribute("uv",new Tn(x,f)),A.setAttribute("faceIndex",new Tn(M,m)),t.push(A),i>Us&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Pf(r,t,e){const n=new Yr(r,t,e);return n.texture.mapping=Pl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function bo(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function mS(r,t,e){const n=new Float32Array(Lr),i=new I(0,1,0);return new pr({name:"SphericalGaussianBlur",defines:{n:Lr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Eh(),fragmentShader:`

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
		`,blending:ar,depthTest:!1,depthWrite:!1})}function Df(){return new pr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Eh(),fragmentShader:`

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
		`,blending:ar,depthTest:!1,depthWrite:!1})}function Lf(){return new pr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Eh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ar,depthTest:!1,depthWrite:!1})}function Eh(){return`

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
	`}function _S(r){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===iu||l===ru,u=l===Js||l===Qs;if(c||u){let d=t.get(o);const h=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return e===null&&(e=new Nu(r)),d=c?e.fromEquirectangular(o,d):e.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{const p=o.image;return c&&p&&p.height>0||u&&p&&i(p)?(e===null&&(e=new Nu(r)),d=c?e.fromEquirectangular(o):e.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",s),d.texture):null}}}return o}function i(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function gS(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&nl("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function vS(r,t,e,n){const i={},s=new WeakMap;function a(d){const h=d.target;h.index!==null&&t.remove(h.index);for(const _ in h.attributes)t.remove(h.attributes[_]);for(const _ in h.morphAttributes){const g=h.morphAttributes[_];for(let f=0,m=g.length;f<m;f++)t.remove(g[f])}h.removeEventListener("dispose",a),delete i[h.id];const p=s.get(h);p&&(t.remove(p),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function o(d,h){return i[h.id]===!0||(h.addEventListener("dispose",a),i[h.id]=!0,e.memory.geometries++),h}function l(d){const h=d.attributes;for(const _ in h)t.update(h[_],r.ARRAY_BUFFER);const p=d.morphAttributes;for(const _ in p){const g=p[_];for(let f=0,m=g.length;f<m;f++)t.update(g[f],r.ARRAY_BUFFER)}}function c(d){const h=[],p=d.index,_=d.attributes.position;let g=0;if(p!==null){const S=p.array;g=p.version;for(let x=0,M=S.length;x<M;x+=3){const A=S[x+0],w=S[x+1],E=S[x+2];h.push(A,w,w,E,E,A)}}else if(_!==void 0){const S=_.array;g=_.version;for(let x=0,M=S.length/3-1;x<M;x+=3){const A=x+0,w=x+1,E=x+2;h.push(A,w,w,E,E,A)}}else return;const f=new(qp(h)?tm:Qp)(h,1);f.version=g;const m=s.get(d);m&&t.remove(m),s.set(d,f)}function u(d){const h=s.get(d);if(h){const p=d.index;p!==null&&h.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function xS(r,t,e){let n;function i(h){n=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function l(h,p){r.drawElements(n,p,s,h*a),e.update(p,n,1)}function c(h,p,_){_!==0&&(r.drawElementsInstanced(n,p,s,h*a,_),e.update(p,n,_))}function u(h,p,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,s,h,0,_);let f=0;for(let m=0;m<_;m++)f+=p[m];e.update(f,n,1)}function d(h,p,_,g){if(_===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<h.length;m++)c(h[m]/a,p[m],g[m]);else{f.multiDrawElementsInstancedWEBGL(n,p,0,s,h,0,g,0,_);let m=0;for(let S=0;S<_;S++)m+=p[S];for(let S=0;S<g.length;S++)e.update(m,n,g[S])}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function SS(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case r.TRIANGLES:e.triangles+=o*(s/3);break;case r.LINES:e.lines+=o*(s/2);break;case r.LINE_STRIP:e.lines+=o*(s-1);break;case r.LINE_LOOP:e.lines+=o*s;break;case r.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function MS(r,t,e){const n=new WeakMap,i=new Me;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let h=n.get(o);if(h===void 0||h.count!==d){let L=function(){E.dispose(),n.delete(o),o.removeEventListener("dispose",L)};h!==void 0&&h.texture.dispose();const p=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let x=0;p===!0&&(x=1),_===!0&&(x=2),g===!0&&(x=3);let M=o.attributes.position.count*x,A=1;M>t.maxTextureSize&&(A=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);const w=new Float32Array(M*A*4*d),E=new Kp(w,M,A,d);E.type=yi,E.needsUpdate=!0;const C=x*4;for(let v=0;v<d;v++){const T=f[v],U=m[v],k=S[v],G=M*A*4*v;for(let Z=0;Z<T.count;Z++){const B=Z*C;p===!0&&(i.fromBufferAttribute(T,Z),w[G+B+0]=i.x,w[G+B+1]=i.y,w[G+B+2]=i.z,w[G+B+3]=0),_===!0&&(i.fromBufferAttribute(U,Z),w[G+B+4]=i.x,w[G+B+5]=i.y,w[G+B+6]=i.z,w[G+B+7]=0),g===!0&&(i.fromBufferAttribute(k,Z),w[G+B+8]=i.x,w[G+B+9]=i.y,w[G+B+10]=i.z,w[G+B+11]=k.itemSize===4?i.w:1)}}h={count:d,texture:E,size:new qt(M,A)},n.set(o,h),o.addEventListener("dispose",L)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,e);else{let p=0;for(let g=0;g<c.length;g++)p+=c[g];const _=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(r,"morphTargetBaseInfluence",_),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",h.size)}return{update:s}}function yS(r,t,e,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,d=t.get(l,u);if(i.get(d)!==c&&(t.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;i.get(h)!==c&&(h.update(),i.set(h,c))}return d}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:a}}class am extends dn{constructor(t,e,n,i,s,a,o,l,c,u=ks){if(u!==ks&&u!==ea)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===ks&&(n=Xr),n===void 0&&u===ea&&(n=ta),super(null,i,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:An,this.minFilter=l!==void 0?l:An,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const om=new dn,If=new am(1,1),lm=new Kp,cm=new l0,um=new im,Uf=[],Nf=[],Of=new Float32Array(16),Ff=new Float32Array(9),Bf=new Float32Array(4);function oa(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=Uf[i];if(s===void 0&&(s=new Float32Array(i),Uf[i]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,r[a].toArray(s,o)}return s}function $e(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function Ke(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function Ll(r,t){let e=Nf[t];e===void 0&&(e=new Int32Array(t),Nf[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function ES(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function TS(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if($e(e,t))return;r.uniform2fv(this.addr,t),Ke(e,t)}}function bS(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if($e(e,t))return;r.uniform3fv(this.addr,t),Ke(e,t)}}function wS(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if($e(e,t))return;r.uniform4fv(this.addr,t),Ke(e,t)}}function AS(r,t){const e=this.cache,n=t.elements;if(n===void 0){if($e(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),Ke(e,t)}else{if($e(e,n))return;Bf.set(n),r.uniformMatrix2fv(this.addr,!1,Bf),Ke(e,n)}}function RS(r,t){const e=this.cache,n=t.elements;if(n===void 0){if($e(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),Ke(e,t)}else{if($e(e,n))return;Ff.set(n),r.uniformMatrix3fv(this.addr,!1,Ff),Ke(e,n)}}function CS(r,t){const e=this.cache,n=t.elements;if(n===void 0){if($e(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),Ke(e,t)}else{if($e(e,n))return;Of.set(n),r.uniformMatrix4fv(this.addr,!1,Of),Ke(e,n)}}function PS(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function DS(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if($e(e,t))return;r.uniform2iv(this.addr,t),Ke(e,t)}}function LS(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if($e(e,t))return;r.uniform3iv(this.addr,t),Ke(e,t)}}function IS(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if($e(e,t))return;r.uniform4iv(this.addr,t),Ke(e,t)}}function US(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function NS(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if($e(e,t))return;r.uniform2uiv(this.addr,t),Ke(e,t)}}function OS(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if($e(e,t))return;r.uniform3uiv(this.addr,t),Ke(e,t)}}function FS(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if($e(e,t))return;r.uniform4uiv(this.addr,t),Ke(e,t)}}function BS(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(If.compareFunction=Yp,s=If):s=om,e.setTexture2D(t||s,i)}function zS(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||cm,i)}function kS(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||um,i)}function HS(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||lm,i)}function GS(r){switch(r){case 5126:return ES;case 35664:return TS;case 35665:return bS;case 35666:return wS;case 35674:return AS;case 35675:return RS;case 35676:return CS;case 5124:case 35670:return PS;case 35667:case 35671:return DS;case 35668:case 35672:return LS;case 35669:case 35673:return IS;case 5125:return US;case 36294:return NS;case 36295:return OS;case 36296:return FS;case 35678:case 36198:case 36298:case 36306:case 35682:return BS;case 35679:case 36299:case 36307:return zS;case 35680:case 36300:case 36308:case 36293:return kS;case 36289:case 36303:case 36311:case 36292:return HS}}function VS(r,t){r.uniform1fv(this.addr,t)}function WS(r,t){const e=oa(t,this.size,2);r.uniform2fv(this.addr,e)}function XS(r,t){const e=oa(t,this.size,3);r.uniform3fv(this.addr,e)}function YS(r,t){const e=oa(t,this.size,4);r.uniform4fv(this.addr,e)}function qS(r,t){const e=oa(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function $S(r,t){const e=oa(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function KS(r,t){const e=oa(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function jS(r,t){r.uniform1iv(this.addr,t)}function ZS(r,t){r.uniform2iv(this.addr,t)}function JS(r,t){r.uniform3iv(this.addr,t)}function QS(r,t){r.uniform4iv(this.addr,t)}function tM(r,t){r.uniform1uiv(this.addr,t)}function eM(r,t){r.uniform2uiv(this.addr,t)}function nM(r,t){r.uniform3uiv(this.addr,t)}function iM(r,t){r.uniform4uiv(this.addr,t)}function rM(r,t,e){const n=this.cache,i=t.length,s=Ll(e,i);$e(n,s)||(r.uniform1iv(this.addr,s),Ke(n,s));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||om,s[a])}function sM(r,t,e){const n=this.cache,i=t.length,s=Ll(e,i);$e(n,s)||(r.uniform1iv(this.addr,s),Ke(n,s));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||cm,s[a])}function aM(r,t,e){const n=this.cache,i=t.length,s=Ll(e,i);$e(n,s)||(r.uniform1iv(this.addr,s),Ke(n,s));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||um,s[a])}function oM(r,t,e){const n=this.cache,i=t.length,s=Ll(e,i);$e(n,s)||(r.uniform1iv(this.addr,s),Ke(n,s));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||lm,s[a])}function lM(r){switch(r){case 5126:return VS;case 35664:return WS;case 35665:return XS;case 35666:return YS;case 35674:return qS;case 35675:return $S;case 35676:return KS;case 5124:case 35670:return jS;case 35667:case 35671:return ZS;case 35668:case 35672:return JS;case 35669:case 35673:return QS;case 5125:return tM;case 36294:return eM;case 36295:return nM;case 36296:return iM;case 35678:case 36198:case 36298:case 36306:case 35682:return rM;case 35679:case 36299:case 36307:return sM;case 35680:case 36300:case 36308:case 36293:return aM;case 36289:case 36303:case 36311:case 36292:return oM}}class cM{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=GS(e.type)}}class uM{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=lM(e.type)}}class hM{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(t,e[o.id],n)}}}const Sc=/(\w+)(\])?(\[|\.)?/g;function zf(r,t){r.seq.push(t),r.map[t.id]=t}function fM(r,t,e){const n=r.name,i=n.length;for(Sc.lastIndex=0;;){const s=Sc.exec(n),a=Sc.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){zf(e,c===void 0?new cM(o,r,t):new uM(o,r,t));break}else{let d=e.map[o];d===void 0&&(d=new hM(o),zf(e,d)),e=d}}}class il{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),a=t.getUniformLocation(e,s.name);fM(s,a,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,a=e.length;s!==a;++s){const o=e[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function kf(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}const dM=37297;let pM=0;function mM(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function _M(r){const t=pe.getPrimaries(pe.workingColorSpace),e=pe.getPrimaries(r);let n;switch(t===e?n="":t===xl&&e===vl?n="LinearDisplayP3ToLinearSRGB":t===vl&&e===xl&&(n="LinearSRGBToLinearDisplayP3"),r){case gr:case Dl:return[n,"LinearTransferOETF"];case kn:case Sh:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function Hf(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+mM(r.getShaderSource(t),a)}else return i}function gM(r,t){const e=_M(t);return`vec4 ${r}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function vM(r,t){let e;switch(t){case Ug:e="Linear";break;case Ng:e="Reinhard";break;case Og:e="Cineon";break;case Fg:e="ACESFilmic";break;case zg:e="AgX";break;case kg:e="Neutral";break;case Bg:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const wo=new I;function xM(){pe.getLuminanceCoefficients(wo);const r=wo.x.toFixed(4),t=wo.y.toFixed(4),e=wo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function SM(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(wa).join(`
`)}function MM(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function yM(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:r.getAttribLocation(t,a),locationSize:o}}return e}function wa(r){return r!==""}function Gf(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Vf(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const EM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ou(r){return r.replace(EM,bM)}const TM=new Map;function bM(r,t){let e=Zt[t];if(e===void 0){const n=TM.get(t);if(n!==void 0)e=Zt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ou(e)}const wM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wf(r){return r.replace(wM,AM)}function AM(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Xf(r){let t=`precision ${r.precision} float;
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
#define LOW_PRECISION`),t}function RM(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Ip?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===dg?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Di&&(t="SHADOWMAP_TYPE_VSM"),t}function CM(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Js:case Qs:t="ENVMAP_TYPE_CUBE";break;case Pl:t="ENVMAP_TYPE_CUBE_UV";break}return t}function PM(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Qs:t="ENVMAP_MODE_REFRACTION";break}return t}function DM(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Up:t="ENVMAP_BLENDING_MULTIPLY";break;case Lg:t="ENVMAP_BLENDING_MIX";break;case Ig:t="ENVMAP_BLENDING_ADD";break}return t}function LM(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function IM(r,t,e,n){const i=r.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=RM(e),c=CM(e),u=PM(e),d=DM(e),h=LM(e),p=SM(e),_=MM(s),g=i.createProgram();let f,m,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(wa).join(`
`),f.length>0&&(f+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(wa).join(`
`),m.length>0&&(m+=`
`)):(f=[Xf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wa).join(`
`),m=[Xf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==or?"#define TONE_MAPPING":"",e.toneMapping!==or?Zt.tonemapping_pars_fragment:"",e.toneMapping!==or?vM("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Zt.colorspace_pars_fragment,gM("linearToOutputTexel",e.outputColorSpace),xM(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(wa).join(`
`)),a=Ou(a),a=Gf(a,e),a=Vf(a,e),o=Ou(o),o=Gf(o,e),o=Vf(o,e),a=Wf(a),o=Wf(o),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,f=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,m=["#define varying in",e.glslVersion===cf?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===cf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const x=S+f+a,M=S+m+o,A=kf(i,i.VERTEX_SHADER,x),w=kf(i,i.FRAGMENT_SHADER,M);i.attachShader(g,A),i.attachShader(g,w),e.index0AttributeName!==void 0?i.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function E(T){if(r.debug.checkShaderErrors){const U=i.getProgramInfoLog(g).trim(),k=i.getShaderInfoLog(A).trim(),G=i.getShaderInfoLog(w).trim();let Z=!0,B=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(Z=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,g,A,w);else{const $=Hf(i,A,"vertex"),V=Hf(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+U+`
`+$+`
`+V)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(k===""||G==="")&&(B=!1);B&&(T.diagnostics={runnable:Z,programLog:U,vertexShader:{log:k,prefix:f},fragmentShader:{log:G,prefix:m}})}i.deleteShader(A),i.deleteShader(w),C=new il(i,g),L=yM(i,g)}let C;this.getUniforms=function(){return C===void 0&&E(this),C};let L;this.getAttributes=function(){return L===void 0&&E(this),L};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=i.getProgramParameter(g,dM)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=pM++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=A,this.fragmentShader=w,this}let UM=0;class NM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new OM(t),e.set(t,n)),n}}class OM{constructor(t){this.id=UM++,this.code=t,this.usedTimes=0}}function FM(r,t,e,n,i,s,a){const o=new Zp,l=new NM,c=new Set,u=[],d=i.logarithmicDepthBuffer,h=i.reverseDepthBuffer,p=i.vertexTextures;let _=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(v){return c.add(v),v===0?"uv":`uv${v}`}function m(v,T,U,k,G){const Z=k.fog,B=G.geometry,$=v.isMeshStandardMaterial?k.environment:null,V=(v.isMeshStandardMaterial?e:t).get(v.envMap||$),st=V&&V.mapping===Pl?V.image.height:null,P=g[v.type];v.precision!==null&&(_=i.getMaxPrecision(v.precision),_!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",_,"instead."));const ct=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Rt=ct!==void 0?ct.length:0;let Ft=0;B.morphAttributes.position!==void 0&&(Ft=1),B.morphAttributes.normal!==void 0&&(Ft=2),B.morphAttributes.color!==void 0&&(Ft=3);let q,et,ht,lt;if(P){const It=vi[P];q=It.vertexShader,et=It.fragmentShader}else q=v.vertexShader,et=v.fragmentShader,l.update(v),ht=l.getVertexShaderID(v),lt=l.getFragmentShaderID(v);const Y=r.getRenderTarget(),J=G.isInstancedMesh===!0,ft=G.isBatchedMesh===!0,bt=!!v.map,yt=!!v.matcap,D=!!V,Xt=!!v.aoMap,St=!!v.lightMap,Gt=!!v.bumpMap,z=!!v.normalMap,te=!!v.displacementMap,Ot=!!v.emissiveMap,R=!!v.metalnessMap,y=!!v.roughnessMap,X=v.anisotropy>0,Q=v.clearcoat>0,it=v.dispersion>0,j=v.iridescence>0,wt=v.sheen>0,at=v.transmission>0,_t=X&&!!v.anisotropyMap,Wt=Q&&!!v.clearcoatMap,rt=Q&&!!v.clearcoatNormalMap,Et=Q&&!!v.clearcoatRoughnessMap,Tt=j&&!!v.iridescenceMap,zt=j&&!!v.iridescenceThicknessMap,Mt=wt&&!!v.sheenColorMap,$t=wt&&!!v.sheenRoughnessMap,Ht=!!v.specularMap,oe=!!v.specularColorMap,N=!!v.specularIntensityMap,nt=at&&!!v.transmissionMap,K=at&&!!v.thicknessMap,tt=!!v.gradientMap,ut=!!v.alphaMap,dt=v.alphaTest>0,Kt=!!v.alphaHash,ye=!!v.extensions;let Ce=or;v.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(Ce=r.toneMapping);const se={shaderID:P,shaderType:v.type,shaderName:v.name,vertexShader:q,fragmentShader:et,defines:v.defines,customVertexShaderID:ht,customFragmentShaderID:lt,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:_,batching:ft,batchingColor:ft&&G._colorsTexture!==null,instancing:J,instancingColor:J&&G.instanceColor!==null,instancingMorph:J&&G.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:Y===null?r.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:gr,alphaToCoverage:!!v.alphaToCoverage,map:bt,matcap:yt,envMap:D,envMapMode:D&&V.mapping,envMapCubeUVHeight:st,aoMap:Xt,lightMap:St,bumpMap:Gt,normalMap:z,displacementMap:p&&te,emissiveMap:Ot,normalMapObjectSpace:z&&v.normalMapType===Wg,normalMapTangentSpace:z&&v.normalMapType===Xp,metalnessMap:R,roughnessMap:y,anisotropy:X,anisotropyMap:_t,clearcoat:Q,clearcoatMap:Wt,clearcoatNormalMap:rt,clearcoatRoughnessMap:Et,dispersion:it,iridescence:j,iridescenceMap:Tt,iridescenceThicknessMap:zt,sheen:wt,sheenColorMap:Mt,sheenRoughnessMap:$t,specularMap:Ht,specularColorMap:oe,specularIntensityMap:N,transmission:at,transmissionMap:nt,thicknessMap:K,gradientMap:tt,opaque:v.transparent===!1&&v.blending===zs&&v.alphaToCoverage===!1,alphaMap:ut,alphaTest:dt,alphaHash:Kt,combine:v.combine,mapUv:bt&&f(v.map.channel),aoMapUv:Xt&&f(v.aoMap.channel),lightMapUv:St&&f(v.lightMap.channel),bumpMapUv:Gt&&f(v.bumpMap.channel),normalMapUv:z&&f(v.normalMap.channel),displacementMapUv:te&&f(v.displacementMap.channel),emissiveMapUv:Ot&&f(v.emissiveMap.channel),metalnessMapUv:R&&f(v.metalnessMap.channel),roughnessMapUv:y&&f(v.roughnessMap.channel),anisotropyMapUv:_t&&f(v.anisotropyMap.channel),clearcoatMapUv:Wt&&f(v.clearcoatMap.channel),clearcoatNormalMapUv:rt&&f(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Et&&f(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Tt&&f(v.iridescenceMap.channel),iridescenceThicknessMapUv:zt&&f(v.iridescenceThicknessMap.channel),sheenColorMapUv:Mt&&f(v.sheenColorMap.channel),sheenRoughnessMapUv:$t&&f(v.sheenRoughnessMap.channel),specularMapUv:Ht&&f(v.specularMap.channel),specularColorMapUv:oe&&f(v.specularColorMap.channel),specularIntensityMapUv:N&&f(v.specularIntensityMap.channel),transmissionMapUv:nt&&f(v.transmissionMap.channel),thicknessMapUv:K&&f(v.thicknessMap.channel),alphaMapUv:ut&&f(v.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(z||X),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!B.attributes.uv&&(bt||ut),fog:!!Z,useFog:v.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:h,skinning:G.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:Rt,morphTextureStride:Ft,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:r.shadowMap.enabled&&U.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ce,decodeVideoTexture:bt&&v.map.isVideoTexture===!0&&pe.getTransfer(v.map.colorSpace)===Re,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Ui,flipSided:v.side===En,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:ye&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ye&&v.extensions.multiDraw===!0||ft)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return se.vertexUv1s=c.has(1),se.vertexUv2s=c.has(2),se.vertexUv3s=c.has(3),c.clear(),se}function S(v){const T=[];if(v.shaderID?T.push(v.shaderID):(T.push(v.customVertexShaderID),T.push(v.customFragmentShaderID)),v.defines!==void 0)for(const U in v.defines)T.push(U),T.push(v.defines[U]);return v.isRawShaderMaterial===!1&&(x(T,v),M(T,v),T.push(r.outputColorSpace)),T.push(v.customProgramCacheKey),T.join()}function x(v,T){v.push(T.precision),v.push(T.outputColorSpace),v.push(T.envMapMode),v.push(T.envMapCubeUVHeight),v.push(T.mapUv),v.push(T.alphaMapUv),v.push(T.lightMapUv),v.push(T.aoMapUv),v.push(T.bumpMapUv),v.push(T.normalMapUv),v.push(T.displacementMapUv),v.push(T.emissiveMapUv),v.push(T.metalnessMapUv),v.push(T.roughnessMapUv),v.push(T.anisotropyMapUv),v.push(T.clearcoatMapUv),v.push(T.clearcoatNormalMapUv),v.push(T.clearcoatRoughnessMapUv),v.push(T.iridescenceMapUv),v.push(T.iridescenceThicknessMapUv),v.push(T.sheenColorMapUv),v.push(T.sheenRoughnessMapUv),v.push(T.specularMapUv),v.push(T.specularColorMapUv),v.push(T.specularIntensityMapUv),v.push(T.transmissionMapUv),v.push(T.thicknessMapUv),v.push(T.combine),v.push(T.fogExp2),v.push(T.sizeAttenuation),v.push(T.morphTargetsCount),v.push(T.morphAttributeCount),v.push(T.numDirLights),v.push(T.numPointLights),v.push(T.numSpotLights),v.push(T.numSpotLightMaps),v.push(T.numHemiLights),v.push(T.numRectAreaLights),v.push(T.numDirLightShadows),v.push(T.numPointLightShadows),v.push(T.numSpotLightShadows),v.push(T.numSpotLightShadowsWithMaps),v.push(T.numLightProbes),v.push(T.shadowMapType),v.push(T.toneMapping),v.push(T.numClippingPlanes),v.push(T.numClipIntersection),v.push(T.depthPacking)}function M(v,T){o.disableAll(),T.supportsVertexTextures&&o.enable(0),T.instancing&&o.enable(1),T.instancingColor&&o.enable(2),T.instancingMorph&&o.enable(3),T.matcap&&o.enable(4),T.envMap&&o.enable(5),T.normalMapObjectSpace&&o.enable(6),T.normalMapTangentSpace&&o.enable(7),T.clearcoat&&o.enable(8),T.iridescence&&o.enable(9),T.alphaTest&&o.enable(10),T.vertexColors&&o.enable(11),T.vertexAlphas&&o.enable(12),T.vertexUv1s&&o.enable(13),T.vertexUv2s&&o.enable(14),T.vertexUv3s&&o.enable(15),T.vertexTangents&&o.enable(16),T.anisotropy&&o.enable(17),T.alphaHash&&o.enable(18),T.batching&&o.enable(19),T.dispersion&&o.enable(20),T.batchingColor&&o.enable(21),v.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reverseDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.alphaToCoverage&&o.enable(20),v.push(o.mask)}function A(v){const T=g[v.type];let U;if(T){const k=vi[T];U=S0.clone(k.uniforms)}else U=v.uniforms;return U}function w(v,T){let U;for(let k=0,G=u.length;k<G;k++){const Z=u[k];if(Z.cacheKey===T){U=Z,++U.usedTimes;break}}return U===void 0&&(U=new IM(r,T,v,s),u.push(U)),U}function E(v){if(--v.usedTimes===0){const T=u.indexOf(v);u[T]=u[u.length-1],u.pop(),v.destroy()}}function C(v){l.remove(v)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:S,getUniforms:A,acquireProgram:w,releaseProgram:E,releaseShaderCache:C,programs:u,dispose:L}}function BM(){let r=new WeakMap;function t(a){return r.has(a)}function e(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function zM(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function Yf(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function qf(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function a(d,h,p,_,g,f){let m=r[t];return m===void 0?(m={id:d.id,object:d,geometry:h,material:p,groupOrder:_,renderOrder:d.renderOrder,z:g,group:f},r[t]=m):(m.id=d.id,m.object=d,m.geometry=h,m.material=p,m.groupOrder=_,m.renderOrder=d.renderOrder,m.z=g,m.group=f),t++,m}function o(d,h,p,_,g,f){const m=a(d,h,p,_,g,f);p.transmission>0?n.push(m):p.transparent===!0?i.push(m):e.push(m)}function l(d,h,p,_,g,f){const m=a(d,h,p,_,g,f);p.transmission>0?n.unshift(m):p.transparent===!0?i.unshift(m):e.unshift(m)}function c(d,h){e.length>1&&e.sort(d||zM),n.length>1&&n.sort(h||Yf),i.length>1&&i.sort(h||Yf)}function u(){for(let d=t,h=r.length;d<h;d++){const p=r[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:u,sort:c}}function kM(){let r=new WeakMap;function t(n,i){const s=r.get(n);let a;return s===void 0?(a=new qf,r.set(n,[a])):i>=s.length?(a=new qf,s.push(a)):a=s[i],a}function e(){r=new WeakMap}return{get:t,dispose:e}}function HM(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new Yt};break;case"SpotLight":e={position:new I,direction:new I,color:new Yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new Yt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new Yt,groundColor:new Yt};break;case"RectAreaLight":e={color:new Yt,position:new I,halfWidth:new I,halfHeight:new I};break}return r[t.id]=e,e}}}function GM(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let VM=0;function WM(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function XM(r){const t=new HM,e=GM(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);const i=new I,s=new ve,a=new ve;function o(c){let u=0,d=0,h=0;for(let L=0;L<9;L++)n.probe[L].set(0,0,0);let p=0,_=0,g=0,f=0,m=0,S=0,x=0,M=0,A=0,w=0,E=0;c.sort(WM);for(let L=0,v=c.length;L<v;L++){const T=c[L],U=T.color,k=T.intensity,G=T.distance,Z=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)u+=U.r*k,d+=U.g*k,h+=U.b*k;else if(T.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(T.sh.coefficients[B],k);E++}else if(T.isDirectionalLight){const B=t.get(T);if(B.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){const $=T.shadow,V=e.get(T);V.shadowIntensity=$.intensity,V.shadowBias=$.bias,V.shadowNormalBias=$.normalBias,V.shadowRadius=$.radius,V.shadowMapSize=$.mapSize,n.directionalShadow[p]=V,n.directionalShadowMap[p]=Z,n.directionalShadowMatrix[p]=T.shadow.matrix,S++}n.directional[p]=B,p++}else if(T.isSpotLight){const B=t.get(T);B.position.setFromMatrixPosition(T.matrixWorld),B.color.copy(U).multiplyScalar(k),B.distance=G,B.coneCos=Math.cos(T.angle),B.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),B.decay=T.decay,n.spot[g]=B;const $=T.shadow;if(T.map&&(n.spotLightMap[A]=T.map,A++,$.updateMatrices(T),T.castShadow&&w++),n.spotLightMatrix[g]=$.matrix,T.castShadow){const V=e.get(T);V.shadowIntensity=$.intensity,V.shadowBias=$.bias,V.shadowNormalBias=$.normalBias,V.shadowRadius=$.radius,V.shadowMapSize=$.mapSize,n.spotShadow[g]=V,n.spotShadowMap[g]=Z,M++}g++}else if(T.isRectAreaLight){const B=t.get(T);B.color.copy(U).multiplyScalar(k),B.halfWidth.set(T.width*.5,0,0),B.halfHeight.set(0,T.height*.5,0),n.rectArea[f]=B,f++}else if(T.isPointLight){const B=t.get(T);if(B.color.copy(T.color).multiplyScalar(T.intensity),B.distance=T.distance,B.decay=T.decay,T.castShadow){const $=T.shadow,V=e.get(T);V.shadowIntensity=$.intensity,V.shadowBias=$.bias,V.shadowNormalBias=$.normalBias,V.shadowRadius=$.radius,V.shadowMapSize=$.mapSize,V.shadowCameraNear=$.camera.near,V.shadowCameraFar=$.camera.far,n.pointShadow[_]=V,n.pointShadowMap[_]=Z,n.pointShadowMatrix[_]=T.shadow.matrix,x++}n.point[_]=B,_++}else if(T.isHemisphereLight){const B=t.get(T);B.skyColor.copy(T.color).multiplyScalar(k),B.groundColor.copy(T.groundColor).multiplyScalar(k),n.hemi[m]=B,m++}}f>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=vt.LTC_FLOAT_1,n.rectAreaLTC2=vt.LTC_FLOAT_2):(n.rectAreaLTC1=vt.LTC_HALF_1,n.rectAreaLTC2=vt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;const C=n.hash;(C.directionalLength!==p||C.pointLength!==_||C.spotLength!==g||C.rectAreaLength!==f||C.hemiLength!==m||C.numDirectionalShadows!==S||C.numPointShadows!==x||C.numSpotShadows!==M||C.numSpotMaps!==A||C.numLightProbes!==E)&&(n.directional.length=p,n.spot.length=g,n.rectArea.length=f,n.point.length=_,n.hemi.length=m,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=M+A-w,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=E,C.directionalLength=p,C.pointLength=_,C.spotLength=g,C.rectAreaLength=f,C.hemiLength=m,C.numDirectionalShadows=S,C.numPointShadows=x,C.numSpotShadows=M,C.numSpotMaps=A,C.numLightProbes=E,n.version=VM++)}function l(c,u){let d=0,h=0,p=0,_=0,g=0;const f=u.matrixWorldInverse;for(let m=0,S=c.length;m<S;m++){const x=c[m];if(x.isDirectionalLight){const M=n.directional[d];M.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(f),d++}else if(x.isSpotLight){const M=n.spot[p];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(f),M.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(f),p++}else if(x.isRectAreaLight){const M=n.rectArea[_];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(f),a.identity(),s.copy(x.matrixWorld),s.premultiply(f),a.extractRotation(s),M.halfWidth.set(x.width*.5,0,0),M.halfHeight.set(0,x.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),_++}else if(x.isPointLight){const M=n.point[h];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(f),h++}else if(x.isHemisphereLight){const M=n.hemi[g];M.direction.setFromMatrixPosition(x.matrixWorld),M.direction.transformDirection(f),g++}}}return{setup:o,setupView:l,state:n}}function $f(r){const t=new XM(r),e=[],n=[];function i(u){c.camera=u,e.length=0,n.length=0}function s(u){e.push(u)}function a(u){n.push(u)}function o(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function YM(r){let t=new WeakMap;function e(i,s=0){const a=t.get(i);let o;return a===void 0?(o=new $f(r),t.set(i,[o])):s>=a.length?(o=new $f(r),a.push(o)):o=a[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class qM extends Qr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Gg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class $M extends Qr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const KM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,jM=`uniform sampler2D shadow_pass;
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
}`;function ZM(r,t,e){let n=new yh;const i=new qt,s=new qt,a=new Me,o=new qM({depthPacking:Vg}),l=new $M,c={},u=e.maxTextureSize,d={[dr]:En,[En]:dr,[Ui]:Ui},h=new pr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qt},radius:{value:4}},vertexShader:KM,fragmentShader:jM}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const _=new Zn;_.setAttribute("position",new Tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new ge(_,h),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ip;let m=this.type;this.render=function(w,E,C){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||w.length===0)return;const L=r.getRenderTarget(),v=r.getActiveCubeFace(),T=r.getActiveMipmapLevel(),U=r.state;U.setBlending(ar),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const k=m!==Di&&this.type===Di,G=m===Di&&this.type!==Di;for(let Z=0,B=w.length;Z<B;Z++){const $=w[Z],V=$.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);const st=V.getFrameExtents();if(i.multiply(st),s.copy(V.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/st.x),i.x=s.x*st.x,V.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/st.y),i.y=s.y*st.y,V.mapSize.y=s.y)),V.map===null||k===!0||G===!0){const ct=this.type!==Di?{minFilter:An,magFilter:An}:{};V.map!==null&&V.map.dispose(),V.map=new Yr(i.x,i.y,ct),V.map.texture.name=$.name+".shadowMap",V.camera.updateProjectionMatrix()}r.setRenderTarget(V.map),r.clear();const P=V.getViewportCount();for(let ct=0;ct<P;ct++){const Rt=V.getViewport(ct);a.set(s.x*Rt.x,s.y*Rt.y,s.x*Rt.z,s.y*Rt.w),U.viewport(a),V.updateMatrices($,ct),n=V.getFrustum(),M(E,C,V.camera,$,this.type)}V.isPointLightShadow!==!0&&this.type===Di&&S(V,C),V.needsUpdate=!1}m=this.type,f.needsUpdate=!1,r.setRenderTarget(L,v,T)};function S(w,E){const C=t.update(g);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Yr(i.x,i.y)),h.uniforms.shadow_pass.value=w.map.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(E,null,C,h,g,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(E,null,C,p,g,null)}function x(w,E,C,L){let v=null;const T=C.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(T!==void 0)v=T;else if(v=C.isPointLight===!0?l:o,r.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const U=v.uuid,k=E.uuid;let G=c[U];G===void 0&&(G={},c[U]=G);let Z=G[k];Z===void 0&&(Z=v.clone(),G[k]=Z,E.addEventListener("dispose",A)),v=Z}if(v.visible=E.visible,v.wireframe=E.wireframe,L===Di?v.side=E.shadowSide!==null?E.shadowSide:E.side:v.side=E.shadowSide!==null?E.shadowSide:d[E.side],v.alphaMap=E.alphaMap,v.alphaTest=E.alphaTest,v.map=E.map,v.clipShadows=E.clipShadows,v.clippingPlanes=E.clippingPlanes,v.clipIntersection=E.clipIntersection,v.displacementMap=E.displacementMap,v.displacementScale=E.displacementScale,v.displacementBias=E.displacementBias,v.wireframeLinewidth=E.wireframeLinewidth,v.linewidth=E.linewidth,C.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const U=r.properties.get(v);U.light=C}return v}function M(w,E,C,L,v){if(w.visible===!1)return;if(w.layers.test(E.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&v===Di)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,w.matrixWorld);const k=t.update(w),G=w.material;if(Array.isArray(G)){const Z=k.groups;for(let B=0,$=Z.length;B<$;B++){const V=Z[B],st=G[V.materialIndex];if(st&&st.visible){const P=x(w,st,L,v);w.onBeforeShadow(r,w,E,C,k,P,V),r.renderBufferDirect(C,null,k,P,w,V),w.onAfterShadow(r,w,E,C,k,P,V)}}}else if(G.visible){const Z=x(w,G,L,v);w.onBeforeShadow(r,w,E,C,k,Z,null),r.renderBufferDirect(C,null,k,Z,w,null),w.onAfterShadow(r,w,E,C,k,Z,null)}}const U=w.children;for(let k=0,G=U.length;k<G;k++)M(U[k],E,C,L,v)}function A(w){w.target.removeEventListener("dispose",A);for(const C in c){const L=c[C],v=w.target.uuid;v in L&&(L[v].dispose(),delete L[v])}}}const JM={[jc]:Zc,[Jc]:eu,[Qc]:nu,[Zs]:tu,[Zc]:jc,[eu]:Jc,[nu]:Qc,[tu]:Zs};function QM(r){function t(){let N=!1;const nt=new Me;let K=null;const tt=new Me(0,0,0,0);return{setMask:function(ut){K!==ut&&!N&&(r.colorMask(ut,ut,ut,ut),K=ut)},setLocked:function(ut){N=ut},setClear:function(ut,dt,Kt,ye,Ce){Ce===!0&&(ut*=ye,dt*=ye,Kt*=ye),nt.set(ut,dt,Kt,ye),tt.equals(nt)===!1&&(r.clearColor(ut,dt,Kt,ye),tt.copy(nt))},reset:function(){N=!1,K=null,tt.set(-1,0,0,0)}}}function e(){let N=!1,nt=!1,K=null,tt=null,ut=null;return{setReversed:function(dt){nt=dt},setTest:function(dt){dt?ht(r.DEPTH_TEST):lt(r.DEPTH_TEST)},setMask:function(dt){K!==dt&&!N&&(r.depthMask(dt),K=dt)},setFunc:function(dt){if(nt&&(dt=JM[dt]),tt!==dt){switch(dt){case jc:r.depthFunc(r.NEVER);break;case Zc:r.depthFunc(r.ALWAYS);break;case Jc:r.depthFunc(r.LESS);break;case Zs:r.depthFunc(r.LEQUAL);break;case Qc:r.depthFunc(r.EQUAL);break;case tu:r.depthFunc(r.GEQUAL);break;case eu:r.depthFunc(r.GREATER);break;case nu:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}tt=dt}},setLocked:function(dt){N=dt},setClear:function(dt){ut!==dt&&(r.clearDepth(dt),ut=dt)},reset:function(){N=!1,K=null,tt=null,ut=null}}}function n(){let N=!1,nt=null,K=null,tt=null,ut=null,dt=null,Kt=null,ye=null,Ce=null;return{setTest:function(se){N||(se?ht(r.STENCIL_TEST):lt(r.STENCIL_TEST))},setMask:function(se){nt!==se&&!N&&(r.stencilMask(se),nt=se)},setFunc:function(se,It,Ct){(K!==se||tt!==It||ut!==Ct)&&(r.stencilFunc(se,It,Ct),K=se,tt=It,ut=Ct)},setOp:function(se,It,Ct){(dt!==se||Kt!==It||ye!==Ct)&&(r.stencilOp(se,It,Ct),dt=se,Kt=It,ye=Ct)},setLocked:function(se){N=se},setClear:function(se){Ce!==se&&(r.clearStencil(se),Ce=se)},reset:function(){N=!1,nt=null,K=null,tt=null,ut=null,dt=null,Kt=null,ye=null,Ce=null}}}const i=new t,s=new e,a=new n,o=new WeakMap,l=new WeakMap;let c={},u={},d=new WeakMap,h=[],p=null,_=!1,g=null,f=null,m=null,S=null,x=null,M=null,A=null,w=new Yt(0,0,0),E=0,C=!1,L=null,v=null,T=null,U=null,k=null;const G=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,B=0;const $=r.getParameter(r.VERSION);$.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec($)[1]),Z=B>=1):$.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),Z=B>=2);let V=null,st={};const P=r.getParameter(r.SCISSOR_BOX),ct=r.getParameter(r.VIEWPORT),Rt=new Me().fromArray(P),Ft=new Me().fromArray(ct);function q(N,nt,K,tt){const ut=new Uint8Array(4),dt=r.createTexture();r.bindTexture(N,dt),r.texParameteri(N,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(N,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Kt=0;Kt<K;Kt++)N===r.TEXTURE_3D||N===r.TEXTURE_2D_ARRAY?r.texImage3D(nt,0,r.RGBA,1,1,tt,0,r.RGBA,r.UNSIGNED_BYTE,ut):r.texImage2D(nt+Kt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ut);return dt}const et={};et[r.TEXTURE_2D]=q(r.TEXTURE_2D,r.TEXTURE_2D,1),et[r.TEXTURE_CUBE_MAP]=q(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),et[r.TEXTURE_2D_ARRAY]=q(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),et[r.TEXTURE_3D]=q(r.TEXTURE_3D,r.TEXTURE_3D,1,1),i.setClear(0,0,0,1),s.setClear(1),a.setClear(0),ht(r.DEPTH_TEST),s.setFunc(Zs),St(!1),Gt(rf),ht(r.CULL_FACE),D(ar);function ht(N){c[N]!==!0&&(r.enable(N),c[N]=!0)}function lt(N){c[N]!==!1&&(r.disable(N),c[N]=!1)}function Y(N,nt){return u[N]!==nt?(r.bindFramebuffer(N,nt),u[N]=nt,N===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=nt),N===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=nt),!0):!1}function J(N,nt){let K=h,tt=!1;if(N){K=d.get(nt),K===void 0&&(K=[],d.set(nt,K));const ut=N.textures;if(K.length!==ut.length||K[0]!==r.COLOR_ATTACHMENT0){for(let dt=0,Kt=ut.length;dt<Kt;dt++)K[dt]=r.COLOR_ATTACHMENT0+dt;K.length=ut.length,tt=!0}}else K[0]!==r.BACK&&(K[0]=r.BACK,tt=!0);tt&&r.drawBuffers(K)}function ft(N){return p!==N?(r.useProgram(N),p=N,!0):!1}const bt={[Dr]:r.FUNC_ADD,[mg]:r.FUNC_SUBTRACT,[_g]:r.FUNC_REVERSE_SUBTRACT};bt[gg]=r.MIN,bt[vg]=r.MAX;const yt={[xg]:r.ZERO,[Sg]:r.ONE,[Mg]:r.SRC_COLOR,[$c]:r.SRC_ALPHA,[Ag]:r.SRC_ALPHA_SATURATE,[bg]:r.DST_COLOR,[Eg]:r.DST_ALPHA,[yg]:r.ONE_MINUS_SRC_COLOR,[Kc]:r.ONE_MINUS_SRC_ALPHA,[wg]:r.ONE_MINUS_DST_COLOR,[Tg]:r.ONE_MINUS_DST_ALPHA,[Rg]:r.CONSTANT_COLOR,[Cg]:r.ONE_MINUS_CONSTANT_COLOR,[Pg]:r.CONSTANT_ALPHA,[Dg]:r.ONE_MINUS_CONSTANT_ALPHA};function D(N,nt,K,tt,ut,dt,Kt,ye,Ce,se){if(N===ar){_===!0&&(lt(r.BLEND),_=!1);return}if(_===!1&&(ht(r.BLEND),_=!0),N!==pg){if(N!==g||se!==C){if((f!==Dr||x!==Dr)&&(r.blendEquation(r.FUNC_ADD),f=Dr,x=Dr),se)switch(N){case zs:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case sf:r.blendFunc(r.ONE,r.ONE);break;case af:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case of:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case zs:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case sf:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case af:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case of:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}m=null,S=null,M=null,A=null,w.set(0,0,0),E=0,g=N,C=se}return}ut=ut||nt,dt=dt||K,Kt=Kt||tt,(nt!==f||ut!==x)&&(r.blendEquationSeparate(bt[nt],bt[ut]),f=nt,x=ut),(K!==m||tt!==S||dt!==M||Kt!==A)&&(r.blendFuncSeparate(yt[K],yt[tt],yt[dt],yt[Kt]),m=K,S=tt,M=dt,A=Kt),(ye.equals(w)===!1||Ce!==E)&&(r.blendColor(ye.r,ye.g,ye.b,Ce),w.copy(ye),E=Ce),g=N,C=!1}function Xt(N,nt){N.side===Ui?lt(r.CULL_FACE):ht(r.CULL_FACE);let K=N.side===En;nt&&(K=!K),St(K),N.blending===zs&&N.transparent===!1?D(ar):D(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),s.setFunc(N.depthFunc),s.setTest(N.depthTest),s.setMask(N.depthWrite),i.setMask(N.colorWrite);const tt=N.stencilWrite;a.setTest(tt),tt&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),te(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?ht(r.SAMPLE_ALPHA_TO_COVERAGE):lt(r.SAMPLE_ALPHA_TO_COVERAGE)}function St(N){L!==N&&(N?r.frontFace(r.CW):r.frontFace(r.CCW),L=N)}function Gt(N){N!==hg?(ht(r.CULL_FACE),N!==v&&(N===rf?r.cullFace(r.BACK):N===fg?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):lt(r.CULL_FACE),v=N}function z(N){N!==T&&(Z&&r.lineWidth(N),T=N)}function te(N,nt,K){N?(ht(r.POLYGON_OFFSET_FILL),(U!==nt||k!==K)&&(r.polygonOffset(nt,K),U=nt,k=K)):lt(r.POLYGON_OFFSET_FILL)}function Ot(N){N?ht(r.SCISSOR_TEST):lt(r.SCISSOR_TEST)}function R(N){N===void 0&&(N=r.TEXTURE0+G-1),V!==N&&(r.activeTexture(N),V=N)}function y(N,nt,K){K===void 0&&(V===null?K=r.TEXTURE0+G-1:K=V);let tt=st[K];tt===void 0&&(tt={type:void 0,texture:void 0},st[K]=tt),(tt.type!==N||tt.texture!==nt)&&(V!==K&&(r.activeTexture(K),V=K),r.bindTexture(N,nt||et[N]),tt.type=N,tt.texture=nt)}function X(){const N=st[V];N!==void 0&&N.type!==void 0&&(r.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function Q(){try{r.compressedTexImage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function it(){try{r.compressedTexImage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function j(){try{r.texSubImage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function wt(){try{r.texSubImage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function at(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function _t(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Wt(){try{r.texStorage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function rt(){try{r.texStorage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Et(){try{r.texImage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Tt(){try{r.texImage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function zt(N){Rt.equals(N)===!1&&(r.scissor(N.x,N.y,N.z,N.w),Rt.copy(N))}function Mt(N){Ft.equals(N)===!1&&(r.viewport(N.x,N.y,N.z,N.w),Ft.copy(N))}function $t(N,nt){let K=l.get(nt);K===void 0&&(K=new WeakMap,l.set(nt,K));let tt=K.get(N);tt===void 0&&(tt=r.getUniformBlockIndex(nt,N.name),K.set(N,tt))}function Ht(N,nt){const tt=l.get(nt).get(N);o.get(nt)!==tt&&(r.uniformBlockBinding(nt,tt,N.__bindingPointIndex),o.set(nt,tt))}function oe(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),c={},V=null,st={},u={},d=new WeakMap,h=[],p=null,_=!1,g=null,f=null,m=null,S=null,x=null,M=null,A=null,w=new Yt(0,0,0),E=0,C=!1,L=null,v=null,T=null,U=null,k=null,Rt.set(0,0,r.canvas.width,r.canvas.height),Ft.set(0,0,r.canvas.width,r.canvas.height),i.reset(),s.reset(),a.reset()}return{buffers:{color:i,depth:s,stencil:a},enable:ht,disable:lt,bindFramebuffer:Y,drawBuffers:J,useProgram:ft,setBlending:D,setMaterial:Xt,setFlipSided:St,setCullFace:Gt,setLineWidth:z,setPolygonOffset:te,setScissorTest:Ot,activeTexture:R,bindTexture:y,unbindTexture:X,compressedTexImage2D:Q,compressedTexImage3D:it,texImage2D:Et,texImage3D:Tt,updateUBOMapping:$t,uniformBlockBinding:Ht,texStorage2D:Wt,texStorage3D:rt,texSubImage2D:j,texSubImage3D:wt,compressedTexSubImage2D:at,compressedTexSubImage3D:_t,scissor:zt,viewport:Mt,reset:oe}}function Kf(r,t,e,n){const i=ty(n);switch(e){case zp:return r*t;case Hp:return r*t;case Gp:return r*t*2;case _h:return r*t/i.components*i.byteLength;case gh:return r*t/i.components*i.byteLength;case Vp:return r*t*2/i.components*i.byteLength;case vh:return r*t*2/i.components*i.byteLength;case kp:return r*t*3/i.components*i.byteLength;case pi:return r*t*4/i.components*i.byteLength;case xh:return r*t*4/i.components*i.byteLength;case Zo:case Jo:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Qo:case tl:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case lu:case uu:return Math.max(r,16)*Math.max(t,8)/4;case ou:case cu:return Math.max(r,8)*Math.max(t,8)/2;case hu:case fu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case du:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case pu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case mu:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case _u:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case gu:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case vu:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case xu:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Su:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Mu:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case yu:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Eu:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Tu:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case bu:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case wu:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Au:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case el:case Ru:case Cu:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Wp:case Pu:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Du:case Lu:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function ty(r){switch(r){case Hi:case Op:return{byteLength:1,components:1};case Ja:case Fp:case no:return{byteLength:2,components:1};case ph:case mh:return{byteLength:2,components:4};case Xr:case dh:case yi:return{byteLength:4,components:1};case Bp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function ey(r,t,e,n,i,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new qt,u=new WeakMap;let d;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,y){return p?new OffscreenCanvas(R,y):Ml("canvas")}function g(R,y,X){let Q=1;const it=Ot(R);if((it.width>X||it.height>X)&&(Q=X/Math.max(it.width,it.height)),Q<1)if(typeof HTMLImageElement!="undefined"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&R instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&R instanceof ImageBitmap||typeof VideoFrame!="undefined"&&R instanceof VideoFrame){const j=Math.floor(Q*it.width),wt=Math.floor(Q*it.height);d===void 0&&(d=_(j,wt));const at=y?_(j,wt):d;return at.width=j,at.height=wt,at.getContext("2d").drawImage(R,0,0,j,wt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+j+"x"+wt+")."),at}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),R;return R}function f(R){return R.generateMipmaps&&R.minFilter!==An&&R.minFilter!==di}function m(R){r.generateMipmap(R)}function S(R,y,X,Q,it=!1){if(R!==null){if(r[R]!==void 0)return r[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let j=y;if(y===r.RED&&(X===r.FLOAT&&(j=r.R32F),X===r.HALF_FLOAT&&(j=r.R16F),X===r.UNSIGNED_BYTE&&(j=r.R8)),y===r.RED_INTEGER&&(X===r.UNSIGNED_BYTE&&(j=r.R8UI),X===r.UNSIGNED_SHORT&&(j=r.R16UI),X===r.UNSIGNED_INT&&(j=r.R32UI),X===r.BYTE&&(j=r.R8I),X===r.SHORT&&(j=r.R16I),X===r.INT&&(j=r.R32I)),y===r.RG&&(X===r.FLOAT&&(j=r.RG32F),X===r.HALF_FLOAT&&(j=r.RG16F),X===r.UNSIGNED_BYTE&&(j=r.RG8)),y===r.RG_INTEGER&&(X===r.UNSIGNED_BYTE&&(j=r.RG8UI),X===r.UNSIGNED_SHORT&&(j=r.RG16UI),X===r.UNSIGNED_INT&&(j=r.RG32UI),X===r.BYTE&&(j=r.RG8I),X===r.SHORT&&(j=r.RG16I),X===r.INT&&(j=r.RG32I)),y===r.RGB_INTEGER&&(X===r.UNSIGNED_BYTE&&(j=r.RGB8UI),X===r.UNSIGNED_SHORT&&(j=r.RGB16UI),X===r.UNSIGNED_INT&&(j=r.RGB32UI),X===r.BYTE&&(j=r.RGB8I),X===r.SHORT&&(j=r.RGB16I),X===r.INT&&(j=r.RGB32I)),y===r.RGBA_INTEGER&&(X===r.UNSIGNED_BYTE&&(j=r.RGBA8UI),X===r.UNSIGNED_SHORT&&(j=r.RGBA16UI),X===r.UNSIGNED_INT&&(j=r.RGBA32UI),X===r.BYTE&&(j=r.RGBA8I),X===r.SHORT&&(j=r.RGBA16I),X===r.INT&&(j=r.RGBA32I)),y===r.RGB&&X===r.UNSIGNED_INT_5_9_9_9_REV&&(j=r.RGB9_E5),y===r.RGBA){const wt=it?gl:pe.getTransfer(Q);X===r.FLOAT&&(j=r.RGBA32F),X===r.HALF_FLOAT&&(j=r.RGBA16F),X===r.UNSIGNED_BYTE&&(j=wt===Re?r.SRGB8_ALPHA8:r.RGBA8),X===r.UNSIGNED_SHORT_4_4_4_4&&(j=r.RGBA4),X===r.UNSIGNED_SHORT_5_5_5_1&&(j=r.RGB5_A1)}return(j===r.R16F||j===r.R32F||j===r.RG16F||j===r.RG32F||j===r.RGBA16F||j===r.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function x(R,y){let X;return R?y===null||y===Xr||y===ta?X=r.DEPTH24_STENCIL8:y===yi?X=r.DEPTH32F_STENCIL8:y===Ja&&(X=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Xr||y===ta?X=r.DEPTH_COMPONENT24:y===yi?X=r.DEPTH_COMPONENT32F:y===Ja&&(X=r.DEPTH_COMPONENT16),X}function M(R,y){return f(R)===!0||R.isFramebufferTexture&&R.minFilter!==An&&R.minFilter!==di?Math.log2(Math.max(y.width,y.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?y.mipmaps.length:1}function A(R){const y=R.target;y.removeEventListener("dispose",A),E(y),y.isVideoTexture&&u.delete(y)}function w(R){const y=R.target;y.removeEventListener("dispose",w),L(y)}function E(R){const y=n.get(R);if(y.__webglInit===void 0)return;const X=R.source,Q=h.get(X);if(Q){const it=Q[y.__cacheKey];it.usedTimes--,it.usedTimes===0&&C(R),Object.keys(Q).length===0&&h.delete(X)}n.remove(R)}function C(R){const y=n.get(R);r.deleteTexture(y.__webglTexture);const X=R.source,Q=h.get(X);delete Q[y.__cacheKey],a.memory.textures--}function L(R){const y=n.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(y.__webglFramebuffer[Q]))for(let it=0;it<y.__webglFramebuffer[Q].length;it++)r.deleteFramebuffer(y.__webglFramebuffer[Q][it]);else r.deleteFramebuffer(y.__webglFramebuffer[Q]);y.__webglDepthbuffer&&r.deleteRenderbuffer(y.__webglDepthbuffer[Q])}else{if(Array.isArray(y.__webglFramebuffer))for(let Q=0;Q<y.__webglFramebuffer.length;Q++)r.deleteFramebuffer(y.__webglFramebuffer[Q]);else r.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&r.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&r.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let Q=0;Q<y.__webglColorRenderbuffer.length;Q++)y.__webglColorRenderbuffer[Q]&&r.deleteRenderbuffer(y.__webglColorRenderbuffer[Q]);y.__webglDepthRenderbuffer&&r.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const X=R.textures;for(let Q=0,it=X.length;Q<it;Q++){const j=n.get(X[Q]);j.__webglTexture&&(r.deleteTexture(j.__webglTexture),a.memory.textures--),n.remove(X[Q])}n.remove(R)}let v=0;function T(){v=0}function U(){const R=v;return R>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),v+=1,R}function k(R){const y=[];return y.push(R.wrapS),y.push(R.wrapT),y.push(R.wrapR||0),y.push(R.magFilter),y.push(R.minFilter),y.push(R.anisotropy),y.push(R.internalFormat),y.push(R.format),y.push(R.type),y.push(R.generateMipmaps),y.push(R.premultiplyAlpha),y.push(R.flipY),y.push(R.unpackAlignment),y.push(R.colorSpace),y.join()}function G(R,y){const X=n.get(R);if(R.isVideoTexture&&z(R),R.isRenderTargetTexture===!1&&R.version>0&&X.__version!==R.version){const Q=R.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ft(X,R,y);return}}e.bindTexture(r.TEXTURE_2D,X.__webglTexture,r.TEXTURE0+y)}function Z(R,y){const X=n.get(R);if(R.version>0&&X.__version!==R.version){Ft(X,R,y);return}e.bindTexture(r.TEXTURE_2D_ARRAY,X.__webglTexture,r.TEXTURE0+y)}function B(R,y){const X=n.get(R);if(R.version>0&&X.__version!==R.version){Ft(X,R,y);return}e.bindTexture(r.TEXTURE_3D,X.__webglTexture,r.TEXTURE0+y)}function $(R,y){const X=n.get(R);if(R.version>0&&X.__version!==R.version){q(X,R,y);return}e.bindTexture(r.TEXTURE_CUBE_MAP,X.__webglTexture,r.TEXTURE0+y)}const V={[su]:r.REPEAT,[Ur]:r.CLAMP_TO_EDGE,[au]:r.MIRRORED_REPEAT},st={[An]:r.NEAREST,[Hg]:r.NEAREST_MIPMAP_NEAREST,[so]:r.NEAREST_MIPMAP_LINEAR,[di]:r.LINEAR,[Xl]:r.LINEAR_MIPMAP_NEAREST,[Nr]:r.LINEAR_MIPMAP_LINEAR},P={[Xg]:r.NEVER,[Zg]:r.ALWAYS,[Yg]:r.LESS,[Yp]:r.LEQUAL,[qg]:r.EQUAL,[jg]:r.GEQUAL,[$g]:r.GREATER,[Kg]:r.NOTEQUAL};function ct(R,y){if(y.type===yi&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===di||y.magFilter===Xl||y.magFilter===so||y.magFilter===Nr||y.minFilter===di||y.minFilter===Xl||y.minFilter===so||y.minFilter===Nr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(R,r.TEXTURE_WRAP_S,V[y.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,V[y.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,V[y.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,st[y.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,st[y.minFilter]),y.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,P[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===An||y.minFilter!==so&&y.minFilter!==Nr||y.type===yi&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const X=t.get("EXT_texture_filter_anisotropic");r.texParameterf(R,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function Rt(R,y){let X=!1;R.__webglInit===void 0&&(R.__webglInit=!0,y.addEventListener("dispose",A));const Q=y.source;let it=h.get(Q);it===void 0&&(it={},h.set(Q,it));const j=k(y);if(j!==R.__cacheKey){it[j]===void 0&&(it[j]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,X=!0),it[j].usedTimes++;const wt=it[R.__cacheKey];wt!==void 0&&(it[R.__cacheKey].usedTimes--,wt.usedTimes===0&&C(y)),R.__cacheKey=j,R.__webglTexture=it[j].texture}return X}function Ft(R,y,X){let Q=r.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(Q=r.TEXTURE_2D_ARRAY),y.isData3DTexture&&(Q=r.TEXTURE_3D);const it=Rt(R,y),j=y.source;e.bindTexture(Q,R.__webglTexture,r.TEXTURE0+X);const wt=n.get(j);if(j.version!==wt.__version||it===!0){e.activeTexture(r.TEXTURE0+X);const at=pe.getPrimaries(pe.workingColorSpace),_t=y.colorSpace===Ji?null:pe.getPrimaries(y.colorSpace),Wt=y.colorSpace===Ji||at===_t?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt);let rt=g(y.image,!1,i.maxTextureSize);rt=te(y,rt);const Et=s.convert(y.format,y.colorSpace),Tt=s.convert(y.type);let zt=S(y.internalFormat,Et,Tt,y.colorSpace,y.isVideoTexture);ct(Q,y);let Mt;const $t=y.mipmaps,Ht=y.isVideoTexture!==!0,oe=wt.__version===void 0||it===!0,N=j.dataReady,nt=M(y,rt);if(y.isDepthTexture)zt=x(y.format===ea,y.type),oe&&(Ht?e.texStorage2D(r.TEXTURE_2D,1,zt,rt.width,rt.height):e.texImage2D(r.TEXTURE_2D,0,zt,rt.width,rt.height,0,Et,Tt,null));else if(y.isDataTexture)if($t.length>0){Ht&&oe&&e.texStorage2D(r.TEXTURE_2D,nt,zt,$t[0].width,$t[0].height);for(let K=0,tt=$t.length;K<tt;K++)Mt=$t[K],Ht?N&&e.texSubImage2D(r.TEXTURE_2D,K,0,0,Mt.width,Mt.height,Et,Tt,Mt.data):e.texImage2D(r.TEXTURE_2D,K,zt,Mt.width,Mt.height,0,Et,Tt,Mt.data);y.generateMipmaps=!1}else Ht?(oe&&e.texStorage2D(r.TEXTURE_2D,nt,zt,rt.width,rt.height),N&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,rt.width,rt.height,Et,Tt,rt.data)):e.texImage2D(r.TEXTURE_2D,0,zt,rt.width,rt.height,0,Et,Tt,rt.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Ht&&oe&&e.texStorage3D(r.TEXTURE_2D_ARRAY,nt,zt,$t[0].width,$t[0].height,rt.depth);for(let K=0,tt=$t.length;K<tt;K++)if(Mt=$t[K],y.format!==pi)if(Et!==null)if(Ht){if(N)if(y.layerUpdates.size>0){const ut=Kf(Mt.width,Mt.height,y.format,y.type);for(const dt of y.layerUpdates){const Kt=Mt.data.subarray(dt*ut/Mt.data.BYTES_PER_ELEMENT,(dt+1)*ut/Mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,K,0,0,dt,Mt.width,Mt.height,1,Et,Kt,0,0)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,K,0,0,0,Mt.width,Mt.height,rt.depth,Et,Mt.data,0,0)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,K,zt,Mt.width,Mt.height,rt.depth,0,Mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ht?N&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,K,0,0,0,Mt.width,Mt.height,rt.depth,Et,Tt,Mt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,K,zt,Mt.width,Mt.height,rt.depth,0,Et,Tt,Mt.data)}else{Ht&&oe&&e.texStorage2D(r.TEXTURE_2D,nt,zt,$t[0].width,$t[0].height);for(let K=0,tt=$t.length;K<tt;K++)Mt=$t[K],y.format!==pi?Et!==null?Ht?N&&e.compressedTexSubImage2D(r.TEXTURE_2D,K,0,0,Mt.width,Mt.height,Et,Mt.data):e.compressedTexImage2D(r.TEXTURE_2D,K,zt,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ht?N&&e.texSubImage2D(r.TEXTURE_2D,K,0,0,Mt.width,Mt.height,Et,Tt,Mt.data):e.texImage2D(r.TEXTURE_2D,K,zt,Mt.width,Mt.height,0,Et,Tt,Mt.data)}else if(y.isDataArrayTexture)if(Ht){if(oe&&e.texStorage3D(r.TEXTURE_2D_ARRAY,nt,zt,rt.width,rt.height,rt.depth),N)if(y.layerUpdates.size>0){const K=Kf(rt.width,rt.height,y.format,y.type);for(const tt of y.layerUpdates){const ut=rt.data.subarray(tt*K/rt.data.BYTES_PER_ELEMENT,(tt+1)*K/rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,tt,rt.width,rt.height,1,Et,Tt,ut)}y.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,Et,Tt,rt.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,zt,rt.width,rt.height,rt.depth,0,Et,Tt,rt.data);else if(y.isData3DTexture)Ht?(oe&&e.texStorage3D(r.TEXTURE_3D,nt,zt,rt.width,rt.height,rt.depth),N&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,Et,Tt,rt.data)):e.texImage3D(r.TEXTURE_3D,0,zt,rt.width,rt.height,rt.depth,0,Et,Tt,rt.data);else if(y.isFramebufferTexture){if(oe)if(Ht)e.texStorage2D(r.TEXTURE_2D,nt,zt,rt.width,rt.height);else{let K=rt.width,tt=rt.height;for(let ut=0;ut<nt;ut++)e.texImage2D(r.TEXTURE_2D,ut,zt,K,tt,0,Et,Tt,null),K>>=1,tt>>=1}}else if($t.length>0){if(Ht&&oe){const K=Ot($t[0]);e.texStorage2D(r.TEXTURE_2D,nt,zt,K.width,K.height)}for(let K=0,tt=$t.length;K<tt;K++)Mt=$t[K],Ht?N&&e.texSubImage2D(r.TEXTURE_2D,K,0,0,Et,Tt,Mt):e.texImage2D(r.TEXTURE_2D,K,zt,Et,Tt,Mt);y.generateMipmaps=!1}else if(Ht){if(oe){const K=Ot(rt);e.texStorage2D(r.TEXTURE_2D,nt,zt,K.width,K.height)}N&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,Et,Tt,rt)}else e.texImage2D(r.TEXTURE_2D,0,zt,Et,Tt,rt);f(y)&&m(Q),wt.__version=j.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function q(R,y,X){if(y.image.length!==6)return;const Q=Rt(R,y),it=y.source;e.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+X);const j=n.get(it);if(it.version!==j.__version||Q===!0){e.activeTexture(r.TEXTURE0+X);const wt=pe.getPrimaries(pe.workingColorSpace),at=y.colorSpace===Ji?null:pe.getPrimaries(y.colorSpace),_t=y.colorSpace===Ji||wt===at?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t);const Wt=y.isCompressedTexture||y.image[0].isCompressedTexture,rt=y.image[0]&&y.image[0].isDataTexture,Et=[];for(let tt=0;tt<6;tt++)!Wt&&!rt?Et[tt]=g(y.image[tt],!0,i.maxCubemapSize):Et[tt]=rt?y.image[tt].image:y.image[tt],Et[tt]=te(y,Et[tt]);const Tt=Et[0],zt=s.convert(y.format,y.colorSpace),Mt=s.convert(y.type),$t=S(y.internalFormat,zt,Mt,y.colorSpace),Ht=y.isVideoTexture!==!0,oe=j.__version===void 0||Q===!0,N=it.dataReady;let nt=M(y,Tt);ct(r.TEXTURE_CUBE_MAP,y);let K;if(Wt){Ht&&oe&&e.texStorage2D(r.TEXTURE_CUBE_MAP,nt,$t,Tt.width,Tt.height);for(let tt=0;tt<6;tt++){K=Et[tt].mipmaps;for(let ut=0;ut<K.length;ut++){const dt=K[ut];y.format!==pi?zt!==null?Ht?N&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ut,0,0,dt.width,dt.height,zt,dt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ut,$t,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ht?N&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ut,0,0,dt.width,dt.height,zt,Mt,dt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ut,$t,dt.width,dt.height,0,zt,Mt,dt.data)}}}else{if(K=y.mipmaps,Ht&&oe){K.length>0&&nt++;const tt=Ot(Et[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,nt,$t,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(rt){Ht?N&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,Et[tt].width,Et[tt].height,zt,Mt,Et[tt].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,$t,Et[tt].width,Et[tt].height,0,zt,Mt,Et[tt].data);for(let ut=0;ut<K.length;ut++){const Kt=K[ut].image[tt].image;Ht?N&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ut+1,0,0,Kt.width,Kt.height,zt,Mt,Kt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ut+1,$t,Kt.width,Kt.height,0,zt,Mt,Kt.data)}}else{Ht?N&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,zt,Mt,Et[tt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,$t,zt,Mt,Et[tt]);for(let ut=0;ut<K.length;ut++){const dt=K[ut];Ht?N&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ut+1,0,0,zt,Mt,dt.image[tt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ut+1,$t,zt,Mt,dt.image[tt])}}}f(y)&&m(r.TEXTURE_CUBE_MAP),j.__version=it.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function et(R,y,X,Q,it,j){const wt=s.convert(X.format,X.colorSpace),at=s.convert(X.type),_t=S(X.internalFormat,wt,at,X.colorSpace);if(!n.get(y).__hasExternalTextures){const rt=Math.max(1,y.width>>j),Et=Math.max(1,y.height>>j);it===r.TEXTURE_3D||it===r.TEXTURE_2D_ARRAY?e.texImage3D(it,j,_t,rt,Et,y.depth,0,wt,at,null):e.texImage2D(it,j,_t,rt,Et,0,wt,at,null)}e.bindFramebuffer(r.FRAMEBUFFER,R),Gt(y)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Q,it,n.get(X).__webglTexture,0,St(y)):(it===r.TEXTURE_2D||it>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Q,it,n.get(X).__webglTexture,j),e.bindFramebuffer(r.FRAMEBUFFER,null)}function ht(R,y,X){if(r.bindRenderbuffer(r.RENDERBUFFER,R),y.depthBuffer){const Q=y.depthTexture,it=Q&&Q.isDepthTexture?Q.type:null,j=x(y.stencilBuffer,it),wt=y.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,at=St(y);Gt(y)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,at,j,y.width,y.height):X?r.renderbufferStorageMultisample(r.RENDERBUFFER,at,j,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,j,y.width,y.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,wt,r.RENDERBUFFER,R)}else{const Q=y.textures;for(let it=0;it<Q.length;it++){const j=Q[it],wt=s.convert(j.format,j.colorSpace),at=s.convert(j.type),_t=S(j.internalFormat,wt,at,j.colorSpace),Wt=St(y);X&&Gt(y)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Wt,_t,y.width,y.height):Gt(y)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Wt,_t,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,_t,y.width,y.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function lt(R,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,R),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),G(y.depthTexture,0);const Q=n.get(y.depthTexture).__webglTexture,it=St(y);if(y.depthTexture.format===ks)Gt(y)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Q,0,it):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Q,0);else if(y.depthTexture.format===ea)Gt(y)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Q,0,it):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Y(R){const y=n.get(R),X=R.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==R.depthTexture){const Q=R.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),Q){const it=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,Q.removeEventListener("dispose",it)};Q.addEventListener("dispose",it),y.__depthDisposeCallback=it}y.__boundDepthTexture=Q}if(R.depthTexture&&!y.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");lt(y.__webglFramebuffer,R)}else if(X){y.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(e.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer[Q]),y.__webglDepthbuffer[Q]===void 0)y.__webglDepthbuffer[Q]=r.createRenderbuffer(),ht(y.__webglDepthbuffer[Q],R,!1);else{const it=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,j=y.__webglDepthbuffer[Q];r.bindRenderbuffer(r.RENDERBUFFER,j),r.framebufferRenderbuffer(r.FRAMEBUFFER,it,r.RENDERBUFFER,j)}}else if(e.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=r.createRenderbuffer(),ht(y.__webglDepthbuffer,R,!1);else{const Q=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,it=y.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,it),r.framebufferRenderbuffer(r.FRAMEBUFFER,Q,r.RENDERBUFFER,it)}e.bindFramebuffer(r.FRAMEBUFFER,null)}function J(R,y,X){const Q=n.get(R);y!==void 0&&et(Q.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),X!==void 0&&Y(R)}function ft(R){const y=R.texture,X=n.get(R),Q=n.get(y);R.addEventListener("dispose",w);const it=R.textures,j=R.isWebGLCubeRenderTarget===!0,wt=it.length>1;if(wt||(Q.__webglTexture===void 0&&(Q.__webglTexture=r.createTexture()),Q.__version=y.version,a.memory.textures++),j){X.__webglFramebuffer=[];for(let at=0;at<6;at++)if(y.mipmaps&&y.mipmaps.length>0){X.__webglFramebuffer[at]=[];for(let _t=0;_t<y.mipmaps.length;_t++)X.__webglFramebuffer[at][_t]=r.createFramebuffer()}else X.__webglFramebuffer[at]=r.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){X.__webglFramebuffer=[];for(let at=0;at<y.mipmaps.length;at++)X.__webglFramebuffer[at]=r.createFramebuffer()}else X.__webglFramebuffer=r.createFramebuffer();if(wt)for(let at=0,_t=it.length;at<_t;at++){const Wt=n.get(it[at]);Wt.__webglTexture===void 0&&(Wt.__webglTexture=r.createTexture(),a.memory.textures++)}if(R.samples>0&&Gt(R)===!1){X.__webglMultisampledFramebuffer=r.createFramebuffer(),X.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let at=0;at<it.length;at++){const _t=it[at];X.__webglColorRenderbuffer[at]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,X.__webglColorRenderbuffer[at]);const Wt=s.convert(_t.format,_t.colorSpace),rt=s.convert(_t.type),Et=S(_t.internalFormat,Wt,rt,_t.colorSpace,R.isXRRenderTarget===!0),Tt=St(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,Tt,Et,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+at,r.RENDERBUFFER,X.__webglColorRenderbuffer[at])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(X.__webglDepthRenderbuffer=r.createRenderbuffer(),ht(X.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(j){e.bindTexture(r.TEXTURE_CUBE_MAP,Q.__webglTexture),ct(r.TEXTURE_CUBE_MAP,y);for(let at=0;at<6;at++)if(y.mipmaps&&y.mipmaps.length>0)for(let _t=0;_t<y.mipmaps.length;_t++)et(X.__webglFramebuffer[at][_t],R,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+at,_t);else et(X.__webglFramebuffer[at],R,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);f(y)&&m(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(wt){for(let at=0,_t=it.length;at<_t;at++){const Wt=it[at],rt=n.get(Wt);e.bindTexture(r.TEXTURE_2D,rt.__webglTexture),ct(r.TEXTURE_2D,Wt),et(X.__webglFramebuffer,R,Wt,r.COLOR_ATTACHMENT0+at,r.TEXTURE_2D,0),f(Wt)&&m(r.TEXTURE_2D)}e.unbindTexture()}else{let at=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(at=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(at,Q.__webglTexture),ct(at,y),y.mipmaps&&y.mipmaps.length>0)for(let _t=0;_t<y.mipmaps.length;_t++)et(X.__webglFramebuffer[_t],R,y,r.COLOR_ATTACHMENT0,at,_t);else et(X.__webglFramebuffer,R,y,r.COLOR_ATTACHMENT0,at,0);f(y)&&m(at),e.unbindTexture()}R.depthBuffer&&Y(R)}function bt(R){const y=R.textures;for(let X=0,Q=y.length;X<Q;X++){const it=y[X];if(f(it)){const j=R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,wt=n.get(it).__webglTexture;e.bindTexture(j,wt),m(j),e.unbindTexture()}}}const yt=[],D=[];function Xt(R){if(R.samples>0){if(Gt(R)===!1){const y=R.textures,X=R.width,Q=R.height;let it=r.COLOR_BUFFER_BIT;const j=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,wt=n.get(R),at=y.length>1;if(at)for(let _t=0;_t<y.length;_t++)e.bindFramebuffer(r.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+_t,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,wt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+_t,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,wt.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,wt.__webglFramebuffer);for(let _t=0;_t<y.length;_t++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(it|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(it|=r.STENCIL_BUFFER_BIT)),at){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,wt.__webglColorRenderbuffer[_t]);const Wt=n.get(y[_t]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Wt,0)}r.blitFramebuffer(0,0,X,Q,0,0,X,Q,it,r.NEAREST),l===!0&&(yt.length=0,D.length=0,yt.push(r.COLOR_ATTACHMENT0+_t),R.depthBuffer&&R.resolveDepthBuffer===!1&&(yt.push(j),D.push(j),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,D)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,yt))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),at)for(let _t=0;_t<y.length;_t++){e.bindFramebuffer(r.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+_t,r.RENDERBUFFER,wt.__webglColorRenderbuffer[_t]);const Wt=n.get(y[_t]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,wt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+_t,r.TEXTURE_2D,Wt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,wt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const y=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[y])}}}function St(R){return Math.min(i.maxSamples,R.samples)}function Gt(R){const y=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function z(R){const y=a.render.frame;u.get(R)!==y&&(u.set(R,y),R.update())}function te(R,y){const X=R.colorSpace,Q=R.format,it=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||X!==gr&&X!==Ji&&(pe.getTransfer(X)===Re?(Q!==pi||it!==Hi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),y}function Ot(R){return typeof HTMLImageElement!="undefined"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame!="undefined"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=T,this.setTexture2D=G,this.setTexture2DArray=Z,this.setTexture3D=B,this.setTextureCube=$,this.rebindTextures=J,this.setupRenderTarget=ft,this.updateRenderTargetMipmap=bt,this.updateMultisampleRenderTarget=Xt,this.setupDepthRenderbuffer=Y,this.setupFrameBufferTexture=et,this.useMultisampledRTT=Gt}function ny(r,t){function e(n,i=Ji){let s;const a=pe.getTransfer(i);if(n===Hi)return r.UNSIGNED_BYTE;if(n===ph)return r.UNSIGNED_SHORT_4_4_4_4;if(n===mh)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Bp)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Op)return r.BYTE;if(n===Fp)return r.SHORT;if(n===Ja)return r.UNSIGNED_SHORT;if(n===dh)return r.INT;if(n===Xr)return r.UNSIGNED_INT;if(n===yi)return r.FLOAT;if(n===no)return r.HALF_FLOAT;if(n===zp)return r.ALPHA;if(n===kp)return r.RGB;if(n===pi)return r.RGBA;if(n===Hp)return r.LUMINANCE;if(n===Gp)return r.LUMINANCE_ALPHA;if(n===ks)return r.DEPTH_COMPONENT;if(n===ea)return r.DEPTH_STENCIL;if(n===_h)return r.RED;if(n===gh)return r.RED_INTEGER;if(n===Vp)return r.RG;if(n===vh)return r.RG_INTEGER;if(n===xh)return r.RGBA_INTEGER;if(n===Zo||n===Jo||n===Qo||n===tl)if(a===Re)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Zo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Jo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Qo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===tl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Zo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Jo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Qo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===tl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ou||n===lu||n===cu||n===uu)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===ou)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===lu)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===cu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===uu)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===hu||n===fu||n===du)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===hu||n===fu)return a===Re?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===du)return a===Re?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===pu||n===mu||n===_u||n===gu||n===vu||n===xu||n===Su||n===Mu||n===yu||n===Eu||n===Tu||n===bu||n===wu||n===Au)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===pu)return a===Re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===mu)return a===Re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===_u)return a===Re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===gu)return a===Re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===vu)return a===Re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===xu)return a===Re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Su)return a===Re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Mu)return a===Re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===yu)return a===Re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Eu)return a===Re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Tu)return a===Re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===bu)return a===Re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===wu)return a===Re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Au)return a===Re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===el||n===Ru||n===Cu)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===el)return a===Re?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ru)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Cu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Wp||n===Pu||n===Du||n===Lu)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===el)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Pu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Du)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Lu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ta?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}class iy extends Hn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Or extends qe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ry={type:"move"};class Mc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Or,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Or,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Or,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const g of t.hand.values()){const f=e.getJointPose(g,n),m=this._getHandJoint(c,g);f!==null&&(m.matrix.fromArray(f.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=f.radius),m.visible=f!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),p=.02,_=.005;c.inputState.pinching&&h>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ry)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Or;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const sy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ay=`
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

}`;class oy{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new dn,s=t.properties.get(i);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new pr({vertexShader:sy,fragmentShader:ay,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ge(new io(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ly extends ra{constructor(t,e){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,h=null,p=null,_=null;const g=new oy,f=e.getContextAttributes();let m=null,S=null;const x=[],M=[],A=new qt;let w=null;const E=new Hn;E.layers.enable(1),E.viewport=new Me;const C=new Hn;C.layers.enable(2),C.viewport=new Me;const L=[E,C],v=new iy;v.layers.enable(1),v.layers.enable(2);let T=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let et=x[q];return et===void 0&&(et=new Mc,x[q]=et),et.getTargetRaySpace()},this.getControllerGrip=function(q){let et=x[q];return et===void 0&&(et=new Mc,x[q]=et),et.getGripSpace()},this.getHand=function(q){let et=x[q];return et===void 0&&(et=new Mc,x[q]=et),et.getHandSpace()};function k(q){const et=M.indexOf(q.inputSource);if(et===-1)return;const ht=x[et];ht!==void 0&&(ht.update(q.inputSource,q.frame,c||a),ht.dispatchEvent({type:q.type,data:q.inputSource}))}function G(){i.removeEventListener("select",k),i.removeEventListener("selectstart",k),i.removeEventListener("selectend",k),i.removeEventListener("squeeze",k),i.removeEventListener("squeezestart",k),i.removeEventListener("squeezeend",k),i.removeEventListener("end",G),i.removeEventListener("inputsourceschange",Z);for(let q=0;q<x.length;q++){const et=M[q];et!==null&&(M[q]=null,x[q].disconnect(et))}T=null,U=null,g.reset(),t.setRenderTarget(m),p=null,h=null,d=null,i=null,S=null,Ft.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",k),i.addEventListener("selectstart",k),i.addEventListener("selectend",k),i.addEventListener("squeeze",k),i.addEventListener("squeezestart",k),i.addEventListener("squeezeend",k),i.addEventListener("end",G),i.addEventListener("inputsourceschange",Z),f.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(A),i.renderState.layers===void 0){const et={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(i,e,et),i.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new Yr(p.framebufferWidth,p.framebufferHeight,{format:pi,type:Hi,colorSpace:t.outputColorSpace,stencilBuffer:f.stencil})}else{let et=null,ht=null,lt=null;f.depth&&(lt=f.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=f.stencil?ea:ks,ht=f.stencil?ta:Xr);const Y={colorFormat:e.RGBA8,depthFormat:lt,scaleFactor:s};d=new XRWebGLBinding(i,e),h=d.createProjectionLayer(Y),i.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),S=new Yr(h.textureWidth,h.textureHeight,{format:pi,type:Hi,depthTexture:new am(h.textureWidth,h.textureHeight,ht,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:f.stencil,colorSpace:t.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Ft.setContext(i),Ft.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function Z(q){for(let et=0;et<q.removed.length;et++){const ht=q.removed[et],lt=M.indexOf(ht);lt>=0&&(M[lt]=null,x[lt].disconnect(ht))}for(let et=0;et<q.added.length;et++){const ht=q.added[et];let lt=M.indexOf(ht);if(lt===-1){for(let J=0;J<x.length;J++)if(J>=M.length){M.push(ht),lt=J;break}else if(M[J]===null){M[J]=ht,lt=J;break}if(lt===-1)break}const Y=x[lt];Y&&Y.connect(ht)}}const B=new I,$=new I;function V(q,et,ht){B.setFromMatrixPosition(et.matrixWorld),$.setFromMatrixPosition(ht.matrixWorld);const lt=B.distanceTo($),Y=et.projectionMatrix.elements,J=ht.projectionMatrix.elements,ft=Y[14]/(Y[10]-1),bt=Y[14]/(Y[10]+1),yt=(Y[9]+1)/Y[5],D=(Y[9]-1)/Y[5],Xt=(Y[8]-1)/Y[0],St=(J[8]+1)/J[0],Gt=ft*Xt,z=ft*St,te=lt/(-Xt+St),Ot=te*-Xt;if(et.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Ot),q.translateZ(te),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Y[10]===-1)q.projectionMatrix.copy(et.projectionMatrix),q.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{const R=ft+te,y=bt+te,X=Gt-Ot,Q=z+(lt-Ot),it=yt*bt/y*R,j=D*bt/y*R;q.projectionMatrix.makePerspective(X,Q,it,j,R,y),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function st(q,et){et===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(et.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;let et=q.near,ht=q.far;g.texture!==null&&(g.depthNear>0&&(et=g.depthNear),g.depthFar>0&&(ht=g.depthFar)),v.near=C.near=E.near=et,v.far=C.far=E.far=ht,(T!==v.near||U!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),T=v.near,U=v.far);const lt=q.parent,Y=v.cameras;st(v,lt);for(let J=0;J<Y.length;J++)st(Y[J],lt);Y.length===2?V(v,E,C):v.projectionMatrix.copy(E.projectionMatrix),P(q,v,lt)};function P(q,et,ht){ht===null?q.matrix.copy(et.matrixWorld):(q.matrix.copy(ht.matrixWorld),q.matrix.invert(),q.matrix.multiply(et.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(et.projectionMatrix),q.projectionMatrixInverse.copy(et.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Uu*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(q){l=q,h!==null&&(h.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(v)};let ct=null;function Rt(q,et){if(u=et.getViewerPose(c||a),_=et,u!==null){const ht=u.views;p!==null&&(t.setRenderTargetFramebuffer(S,p.framebuffer),t.setRenderTarget(S));let lt=!1;ht.length!==v.cameras.length&&(v.cameras.length=0,lt=!0);for(let J=0;J<ht.length;J++){const ft=ht[J];let bt=null;if(p!==null)bt=p.getViewport(ft);else{const D=d.getViewSubImage(h,ft);bt=D.viewport,J===0&&(t.setRenderTargetTextures(S,D.colorTexture,h.ignoreDepthValues?void 0:D.depthStencilTexture),t.setRenderTarget(S))}let yt=L[J];yt===void 0&&(yt=new Hn,yt.layers.enable(J),yt.viewport=new Me,L[J]=yt),yt.matrix.fromArray(ft.transform.matrix),yt.matrix.decompose(yt.position,yt.quaternion,yt.scale),yt.projectionMatrix.fromArray(ft.projectionMatrix),yt.projectionMatrixInverse.copy(yt.projectionMatrix).invert(),yt.viewport.set(bt.x,bt.y,bt.width,bt.height),J===0&&(v.matrix.copy(yt.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),lt===!0&&v.cameras.push(yt)}const Y=i.enabledFeatures;if(Y&&Y.includes("depth-sensing")){const J=d.getDepthInformation(ht[0]);J&&J.isValid&&J.texture&&g.init(t,J,i.renderState)}}for(let ht=0;ht<x.length;ht++){const lt=M[ht],Y=x[ht];lt!==null&&Y!==void 0&&Y.update(lt,et,c||a)}ct&&ct(q,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),_=null}const Ft=new rm;Ft.setAnimationLoop(Rt),this.setAnimationLoop=function(q){ct=q},this.dispose=function(){}}}const br=new mi,cy=new ve;function uy(r,t){function e(f,m){f.matrixAutoUpdate===!0&&f.updateMatrix(),m.value.copy(f.matrix)}function n(f,m){m.color.getRGB(f.fogColor.value,em(r)),m.isFog?(f.fogNear.value=m.near,f.fogFar.value=m.far):m.isFogExp2&&(f.fogDensity.value=m.density)}function i(f,m,S,x,M){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(f,m):m.isMeshToonMaterial?(s(f,m),d(f,m)):m.isMeshPhongMaterial?(s(f,m),u(f,m)):m.isMeshStandardMaterial?(s(f,m),h(f,m),m.isMeshPhysicalMaterial&&p(f,m,M)):m.isMeshMatcapMaterial?(s(f,m),_(f,m)):m.isMeshDepthMaterial?s(f,m):m.isMeshDistanceMaterial?(s(f,m),g(f,m)):m.isMeshNormalMaterial?s(f,m):m.isLineBasicMaterial?(a(f,m),m.isLineDashedMaterial&&o(f,m)):m.isPointsMaterial?l(f,m,S,x):m.isSpriteMaterial?c(f,m):m.isShadowMaterial?(f.color.value.copy(m.color),f.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(f,m){f.opacity.value=m.opacity,m.color&&f.diffuse.value.copy(m.color),m.emissive&&f.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(f.map.value=m.map,e(m.map,f.mapTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,e(m.alphaMap,f.alphaMapTransform)),m.bumpMap&&(f.bumpMap.value=m.bumpMap,e(m.bumpMap,f.bumpMapTransform),f.bumpScale.value=m.bumpScale,m.side===En&&(f.bumpScale.value*=-1)),m.normalMap&&(f.normalMap.value=m.normalMap,e(m.normalMap,f.normalMapTransform),f.normalScale.value.copy(m.normalScale),m.side===En&&f.normalScale.value.negate()),m.displacementMap&&(f.displacementMap.value=m.displacementMap,e(m.displacementMap,f.displacementMapTransform),f.displacementScale.value=m.displacementScale,f.displacementBias.value=m.displacementBias),m.emissiveMap&&(f.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,f.emissiveMapTransform)),m.specularMap&&(f.specularMap.value=m.specularMap,e(m.specularMap,f.specularMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest);const S=t.get(m),x=S.envMap,M=S.envMapRotation;x&&(f.envMap.value=x,br.copy(M),br.x*=-1,br.y*=-1,br.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(br.y*=-1,br.z*=-1),f.envMapRotation.value.setFromMatrix4(cy.makeRotationFromEuler(br)),f.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=m.reflectivity,f.ior.value=m.ior,f.refractionRatio.value=m.refractionRatio),m.lightMap&&(f.lightMap.value=m.lightMap,f.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,f.lightMapTransform)),m.aoMap&&(f.aoMap.value=m.aoMap,f.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,f.aoMapTransform))}function a(f,m){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,m.map&&(f.map.value=m.map,e(m.map,f.mapTransform))}function o(f,m){f.dashSize.value=m.dashSize,f.totalSize.value=m.dashSize+m.gapSize,f.scale.value=m.scale}function l(f,m,S,x){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,f.size.value=m.size*S,f.scale.value=x*.5,m.map&&(f.map.value=m.map,e(m.map,f.uvTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,e(m.alphaMap,f.alphaMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest)}function c(f,m){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,f.rotation.value=m.rotation,m.map&&(f.map.value=m.map,e(m.map,f.mapTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,e(m.alphaMap,f.alphaMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest)}function u(f,m){f.specular.value.copy(m.specular),f.shininess.value=Math.max(m.shininess,1e-4)}function d(f,m){m.gradientMap&&(f.gradientMap.value=m.gradientMap)}function h(f,m){f.metalness.value=m.metalness,m.metalnessMap&&(f.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,f.metalnessMapTransform)),f.roughness.value=m.roughness,m.roughnessMap&&(f.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,f.roughnessMapTransform)),m.envMap&&(f.envMapIntensity.value=m.envMapIntensity)}function p(f,m,S){f.ior.value=m.ior,m.sheen>0&&(f.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),f.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(f.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,f.sheenColorMapTransform)),m.sheenRoughnessMap&&(f.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,f.sheenRoughnessMapTransform))),m.clearcoat>0&&(f.clearcoat.value=m.clearcoat,f.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(f.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,f.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(f.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===En&&f.clearcoatNormalScale.value.negate())),m.dispersion>0&&(f.dispersion.value=m.dispersion),m.iridescence>0&&(f.iridescence.value=m.iridescence,f.iridescenceIOR.value=m.iridescenceIOR,f.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(f.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,f.iridescenceMapTransform)),m.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),m.transmission>0&&(f.transmission.value=m.transmission,f.transmissionSamplerMap.value=S.texture,f.transmissionSamplerSize.value.set(S.width,S.height),m.transmissionMap&&(f.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,f.transmissionMapTransform)),f.thickness.value=m.thickness,m.thicknessMap&&(f.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=m.attenuationDistance,f.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(f.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(f.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=m.specularIntensity,f.specularColor.value.copy(m.specularColor),m.specularColorMap&&(f.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,f.specularColorMapTransform)),m.specularIntensityMap&&(f.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,f.specularIntensityMapTransform))}function _(f,m){m.matcap&&(f.matcap.value=m.matcap)}function g(f,m){const S=t.get(m).light;f.referencePosition.value.setFromMatrixPosition(S.matrixWorld),f.nearDistance.value=S.shadow.camera.near,f.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function hy(r,t,e,n){let i={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,x){const M=x.program;n.uniformBlockBinding(S,M)}function c(S,x){let M=i[S.id];M===void 0&&(_(S),M=u(S),i[S.id]=M,S.addEventListener("dispose",f));const A=x.program;n.updateUBOMapping(S,A);const w=t.render.frame;s[S.id]!==w&&(h(S),s[S.id]=w)}function u(S){const x=d();S.__bindingPointIndex=x;const M=r.createBuffer(),A=S.__size,w=S.usage;return r.bindBuffer(r.UNIFORM_BUFFER,M),r.bufferData(r.UNIFORM_BUFFER,A,w),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,x,M),M}function d(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(S){const x=i[S.id],M=S.uniforms,A=S.__cache;r.bindBuffer(r.UNIFORM_BUFFER,x);for(let w=0,E=M.length;w<E;w++){const C=Array.isArray(M[w])?M[w]:[M[w]];for(let L=0,v=C.length;L<v;L++){const T=C[L];if(p(T,w,L,A)===!0){const U=T.__offset,k=Array.isArray(T.value)?T.value:[T.value];let G=0;for(let Z=0;Z<k.length;Z++){const B=k[Z],$=g(B);typeof B=="number"||typeof B=="boolean"?(T.__data[0]=B,r.bufferSubData(r.UNIFORM_BUFFER,U+G,T.__data)):B.isMatrix3?(T.__data[0]=B.elements[0],T.__data[1]=B.elements[1],T.__data[2]=B.elements[2],T.__data[3]=0,T.__data[4]=B.elements[3],T.__data[5]=B.elements[4],T.__data[6]=B.elements[5],T.__data[7]=0,T.__data[8]=B.elements[6],T.__data[9]=B.elements[7],T.__data[10]=B.elements[8],T.__data[11]=0):(B.toArray(T.__data,G),G+=$.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,U,T.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function p(S,x,M,A){const w=S.value,E=x+"_"+M;if(A[E]===void 0)return typeof w=="number"||typeof w=="boolean"?A[E]=w:A[E]=w.clone(),!0;{const C=A[E];if(typeof w=="number"||typeof w=="boolean"){if(C!==w)return A[E]=w,!0}else if(C.equals(w)===!1)return C.copy(w),!0}return!1}function _(S){const x=S.uniforms;let M=0;const A=16;for(let E=0,C=x.length;E<C;E++){const L=Array.isArray(x[E])?x[E]:[x[E]];for(let v=0,T=L.length;v<T;v++){const U=L[v],k=Array.isArray(U.value)?U.value:[U.value];for(let G=0,Z=k.length;G<Z;G++){const B=k[G],$=g(B),V=M%A,st=V%$.boundary,P=V+st;M+=st,P!==0&&A-P<$.storage&&(M+=A-P),U.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=M,M+=$.storage}}}const w=M%A;return w>0&&(M+=A-w),S.__size=M,S.__cache={},this}function g(S){const x={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(x.boundary=4,x.storage=4):S.isVector2?(x.boundary=8,x.storage=8):S.isVector3||S.isColor?(x.boundary=16,x.storage=12):S.isVector4?(x.boundary=16,x.storage=16):S.isMatrix3?(x.boundary=48,x.storage=48):S.isMatrix4?(x.boundary=64,x.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),x}function f(S){const x=S.target;x.removeEventListener("dispose",f);const M=a.indexOf(x.__bindingPointIndex);a.splice(M,1),r.deleteBuffer(i[x.id]),delete i[x.id],delete s[x.id]}function m(){for(const S in i)r.deleteBuffer(i[S]);a=[],i={},s={}}return{bind:l,update:c,dispose:m}}class fy{constructor(t={}){const{canvas:e=Qg(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=t;this.isWebGLRenderer=!0;let h;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=n.getContextAttributes().alpha}else h=a;const p=new Uint32Array(4),_=new Int32Array(4);let g=null,f=null;const m=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=kn,this.toneMapping=or,this.toneMappingExposure=1;const x=this;let M=!1,A=0,w=0,E=null,C=-1,L=null;const v=new Me,T=new Me;let U=null;const k=new Yt(0);let G=0,Z=e.width,B=e.height,$=1,V=null,st=null;const P=new Me(0,0,Z,B),ct=new Me(0,0,Z,B);let Rt=!1;const Ft=new yh;let q=!1,et=!1;const ht=new ve,lt=new ve,Y=new I,J=new Me,ft={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let bt=!1;function yt(){return E===null?$:1}let D=n;function Xt(b,F){return e.getContext(b,F)}try{const b={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${fh}`),e.addEventListener("webglcontextlost",tt,!1),e.addEventListener("webglcontextrestored",ut,!1),e.addEventListener("webglcontextcreationerror",dt,!1),D===null){const F="webgl2";if(D=Xt(F,b),D===null)throw Xt(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let St,Gt,z,te,Ot,R,y,X,Q,it,j,wt,at,_t,Wt,rt,Et,Tt,zt,Mt,$t,Ht,oe,N;function nt(){St=new gS(D),St.init(),Ht=new ny(D,St),Gt=new hS(D,St,t,Ht),z=new QM(D),Gt.reverseDepthBuffer&&z.buffers.depth.setReversed(!0),te=new SS(D),Ot=new BM,R=new ey(D,St,z,Ot,Gt,Ht,te),y=new dS(x),X=new _S(x),Q=new A0(D),oe=new cS(D,Q),it=new vS(D,Q,te,oe),j=new yS(D,it,Q,te),zt=new MS(D,Gt,R),rt=new fS(Ot),wt=new FM(x,y,X,St,Gt,oe,rt),at=new uy(x,Ot),_t=new kM,Wt=new YM(St),Tt=new lS(x,y,X,z,j,h,l),Et=new ZM(x,j,Gt),N=new hy(D,te,Gt,z),Mt=new uS(D,St,te),$t=new xS(D,St,te),te.programs=wt.programs,x.capabilities=Gt,x.extensions=St,x.properties=Ot,x.renderLists=_t,x.shadowMap=Et,x.state=z,x.info=te}nt();const K=new ly(x,D);this.xr=K,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const b=St.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=St.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(b){b!==void 0&&($=b,this.setSize(Z,B,!1))},this.getSize=function(b){return b.set(Z,B)},this.setSize=function(b,F,H=!0){if(K.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=b,B=F,e.width=Math.floor(b*$),e.height=Math.floor(F*$),H===!0&&(e.style.width=b+"px",e.style.height=F+"px"),this.setViewport(0,0,b,F)},this.getDrawingBufferSize=function(b){return b.set(Z*$,B*$).floor()},this.setDrawingBufferSize=function(b,F,H){Z=b,B=F,$=H,e.width=Math.floor(b*H),e.height=Math.floor(F*H),this.setViewport(0,0,b,F)},this.getCurrentViewport=function(b){return b.copy(v)},this.getViewport=function(b){return b.copy(P)},this.setViewport=function(b,F,H,W){b.isVector4?P.set(b.x,b.y,b.z,b.w):P.set(b,F,H,W),z.viewport(v.copy(P).multiplyScalar($).round())},this.getScissor=function(b){return b.copy(ct)},this.setScissor=function(b,F,H,W){b.isVector4?ct.set(b.x,b.y,b.z,b.w):ct.set(b,F,H,W),z.scissor(T.copy(ct).multiplyScalar($).round())},this.getScissorTest=function(){return Rt},this.setScissorTest=function(b){z.setScissorTest(Rt=b)},this.setOpaqueSort=function(b){V=b},this.setTransparentSort=function(b){st=b},this.getClearColor=function(b){return b.copy(Tt.getClearColor())},this.setClearColor=function(){Tt.setClearColor.apply(Tt,arguments)},this.getClearAlpha=function(){return Tt.getClearAlpha()},this.setClearAlpha=function(){Tt.setClearAlpha.apply(Tt,arguments)},this.clear=function(b=!0,F=!0,H=!0){let W=0;if(b){let O=!1;if(E!==null){const ot=E.texture.format;O=ot===xh||ot===vh||ot===gh}if(O){const ot=E.texture.type,xt=ot===Hi||ot===Xr||ot===Ja||ot===ta||ot===ph||ot===mh,mt=Tt.getClearColor(),pt=Tt.getClearAlpha(),Dt=mt.r,kt=mt.g,Pt=mt.b;xt?(p[0]=Dt,p[1]=kt,p[2]=Pt,p[3]=pt,D.clearBufferuiv(D.COLOR,0,p)):(_[0]=Dt,_[1]=kt,_[2]=Pt,_[3]=pt,D.clearBufferiv(D.COLOR,0,_))}else W|=D.COLOR_BUFFER_BIT}F&&(W|=D.DEPTH_BUFFER_BIT,D.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),H&&(W|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",tt,!1),e.removeEventListener("webglcontextrestored",ut,!1),e.removeEventListener("webglcontextcreationerror",dt,!1),_t.dispose(),Wt.dispose(),Ot.dispose(),y.dispose(),X.dispose(),j.dispose(),oe.dispose(),N.dispose(),wt.dispose(),K.dispose(),K.removeEventListener("sessionstart",he),K.removeEventListener("sessionend",gt),Bt.stop()};function tt(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function ut(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const b=te.autoReset,F=Et.enabled,H=Et.autoUpdate,W=Et.needsUpdate,O=Et.type;nt(),te.autoReset=b,Et.enabled=F,Et.autoUpdate=H,Et.needsUpdate=W,Et.type=O}function dt(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Kt(b){const F=b.target;F.removeEventListener("dispose",Kt),ye(F)}function ye(b){Ce(b),Ot.remove(b)}function Ce(b){const F=Ot.get(b).programs;F!==void 0&&(F.forEach(function(H){wt.releaseProgram(H)}),b.isShaderMaterial&&wt.releaseShaderCache(b))}this.renderBufferDirect=function(b,F,H,W,O,ot){F===null&&(F=ft);const xt=O.isMesh&&O.matrixWorld.determinant()<0,mt=me(b,F,H,W,O);z.setMaterial(W,xt);let pt=H.index,Dt=1;if(W.wireframe===!0){if(pt=it.getWireframeAttribute(H),pt===void 0)return;Dt=2}const kt=H.drawRange,Pt=H.attributes.position;let le=kt.start*Dt,ae=(kt.start+kt.count)*Dt;ot!==null&&(le=Math.max(le,ot.start*Dt),ae=Math.min(ae,(ot.start+ot.count)*Dt)),pt!==null?(le=Math.max(le,0),ae=Math.min(ae,pt.count)):Pt!=null&&(le=Math.max(le,0),ae=Math.min(ae,Pt.count));const xe=ae-le;if(xe<0||xe===1/0)return;oe.setup(O,W,mt,H,pt);let je,ee=Mt;if(pt!==null&&(je=Q.get(pt),ee=$t,ee.setIndex(je)),O.isMesh)W.wireframe===!0?(z.setLineWidth(W.wireframeLinewidth*yt()),ee.setMode(D.LINES)):ee.setMode(D.TRIANGLES);else if(O.isLine){let Nt=W.linewidth;Nt===void 0&&(Nt=1),z.setLineWidth(Nt*yt()),O.isLineSegments?ee.setMode(D.LINES):O.isLineLoop?ee.setMode(D.LINE_LOOP):ee.setMode(D.LINE_STRIP)}else O.isPoints?ee.setMode(D.POINTS):O.isSprite&&ee.setMode(D.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)ee.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(St.get("WEBGL_multi_draw"))ee.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Nt=O._multiDrawStarts,en=O._multiDrawCounts,fe=O._multiDrawCount,li=pt?Q.get(pt).bytesPerElement:1,es=Ot.get(W).currentProgram.getUniforms();for(let Un=0;Un<fe;Un++)es.setValue(D,"_gl_DrawID",Un),ee.render(Nt[Un]/li,en[Un])}else if(O.isInstancedMesh)ee.renderInstances(le,xe,O.count);else if(H.isInstancedBufferGeometry){const Nt=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,en=Math.min(H.instanceCount,Nt);ee.renderInstances(le,xe,en)}else ee.render(le,xe)};function se(b,F,H){b.transparent===!0&&b.side===Ui&&b.forceSinglePass===!1?(b.side=En,b.needsUpdate=!0,Fe(b,F,H),b.side=dr,b.needsUpdate=!0,Fe(b,F,H),b.side=Ui):Fe(b,F,H)}this.compile=function(b,F,H=null){H===null&&(H=b),f=Wt.get(H),f.init(F),S.push(f),H.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(f.pushLight(O),O.castShadow&&f.pushShadow(O))}),b!==H&&b.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(f.pushLight(O),O.castShadow&&f.pushShadow(O))}),f.setupLights();const W=new Set;return b.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const ot=O.material;if(ot)if(Array.isArray(ot))for(let xt=0;xt<ot.length;xt++){const mt=ot[xt];se(mt,H,O),W.add(mt)}else se(ot,H,O),W.add(ot)}),S.pop(),f=null,W},this.compileAsync=function(b,F,H=null){const W=this.compile(b,F,H);return new Promise(O=>{function ot(){if(W.forEach(function(xt){Ot.get(xt).currentProgram.isReady()&&W.delete(xt)}),W.size===0){O(b);return}setTimeout(ot,10)}St.get("KHR_parallel_shader_compile")!==null?ot():setTimeout(ot,10)})};let It=null;function Ct(b){It&&It(b)}function he(){Bt.stop()}function gt(){Bt.start()}const Bt=new rm;Bt.setAnimationLoop(Ct),typeof self!="undefined"&&Bt.setContext(self),this.setAnimationLoop=function(b){It=b,K.setAnimationLoop(b),b===null?Bt.stop():Bt.start()},K.addEventListener("sessionstart",he),K.addEventListener("sessionend",gt),this.render=function(b,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(K.cameraAutoUpdate===!0&&K.updateCamera(F),F=K.getCamera()),b.isScene===!0&&b.onBeforeRender(x,b,F,E),f=Wt.get(b,S.length),f.init(F),S.push(f),lt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Ft.setFromProjectionMatrix(lt),et=this.localClippingEnabled,q=rt.init(this.clippingPlanes,et),g=_t.get(b,m.length),g.init(),m.push(g),K.enabled===!0&&K.isPresenting===!0){const ot=x.xr.getDepthSensingMesh();ot!==null&&Ut(ot,F,-1/0,x.sortObjects)}Ut(b,F,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(V,st),bt=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,bt&&Tt.addToRenderList(g,b),this.info.render.frame++,q===!0&&rt.beginShadows();const H=f.state.shadowsArray;Et.render(H,b,F),q===!0&&rt.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=g.opaque,O=g.transmissive;if(f.setupLights(),F.isArrayCamera){const ot=F.cameras;if(O.length>0)for(let xt=0,mt=ot.length;xt<mt;xt++){const pt=ot[xt];Oe(W,O,b,pt)}bt&&Tt.render(b);for(let xt=0,mt=ot.length;xt<mt;xt++){const pt=ot[xt];Vt(g,b,pt,pt.viewport)}}else O.length>0&&Oe(W,O,b,F),bt&&Tt.render(b),Vt(g,b,F);E!==null&&(R.updateMultisampleRenderTarget(E),R.updateRenderTargetMipmap(E)),b.isScene===!0&&b.onAfterRender(x,b,F),oe.resetDefaultState(),C=-1,L=null,S.pop(),S.length>0?(f=S[S.length-1],q===!0&&rt.setGlobalState(x.clippingPlanes,f.state.camera)):f=null,m.pop(),m.length>0?g=m[m.length-1]:g=null};function Ut(b,F,H,W){if(b.visible===!1)return;if(b.layers.test(F.layers)){if(b.isGroup)H=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(F);else if(b.isLight)f.pushLight(b),b.castShadow&&f.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Ft.intersectsSprite(b)){W&&J.setFromMatrixPosition(b.matrixWorld).applyMatrix4(lt);const xt=j.update(b),mt=b.material;mt.visible&&g.push(b,xt,mt,H,J.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Ft.intersectsObject(b))){const xt=j.update(b),mt=b.material;if(W&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),J.copy(b.boundingSphere.center)):(xt.boundingSphere===null&&xt.computeBoundingSphere(),J.copy(xt.boundingSphere.center)),J.applyMatrix4(b.matrixWorld).applyMatrix4(lt)),Array.isArray(mt)){const pt=xt.groups;for(let Dt=0,kt=pt.length;Dt<kt;Dt++){const Pt=pt[Dt],le=mt[Pt.materialIndex];le&&le.visible&&g.push(b,xt,le,H,J.z,Pt)}}else mt.visible&&g.push(b,xt,mt,H,J.z,null)}}const ot=b.children;for(let xt=0,mt=ot.length;xt<mt;xt++)Ut(ot[xt],F,H,W)}function Vt(b,F,H,W){const O=b.opaque,ot=b.transmissive,xt=b.transparent;f.setupLightsView(H),q===!0&&rt.setGlobalState(x.clippingPlanes,H),W&&z.viewport(v.copy(W)),O.length>0&&jt(O,F,H),ot.length>0&&jt(ot,F,H),xt.length>0&&jt(xt,F,H),z.buffers.depth.setTest(!0),z.buffers.depth.setMask(!0),z.buffers.color.setMask(!0),z.setPolygonOffset(!1)}function Oe(b,F,H,W){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[W.id]===void 0&&(f.state.transmissionRenderTarget[W.id]=new Yr(1,1,{generateMipmaps:!0,type:St.has("EXT_color_buffer_half_float")||St.has("EXT_color_buffer_float")?no:Hi,minFilter:Nr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:pe.workingColorSpace}));const ot=f.state.transmissionRenderTarget[W.id],xt=W.viewport||v;ot.setSize(xt.z,xt.w);const mt=x.getRenderTarget();x.setRenderTarget(ot),x.getClearColor(k),G=x.getClearAlpha(),G<1&&x.setClearColor(16777215,.5),x.clear(),bt&&Tt.render(H);const pt=x.toneMapping;x.toneMapping=or;const Dt=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),f.setupLightsView(W),q===!0&&rt.setGlobalState(x.clippingPlanes,W),jt(b,H,W),R.updateMultisampleRenderTarget(ot),R.updateRenderTargetMipmap(ot),St.has("WEBGL_multisampled_render_to_texture")===!1){let kt=!1;for(let Pt=0,le=F.length;Pt<le;Pt++){const ae=F[Pt],xe=ae.object,je=ae.geometry,ee=ae.material,Nt=ae.group;if(ee.side===Ui&&xe.layers.test(W.layers)){const en=ee.side;ee.side=En,ee.needsUpdate=!0,Pe(xe,H,W,je,ee,Nt),ee.side=en,ee.needsUpdate=!0,kt=!0}}kt===!0&&(R.updateMultisampleRenderTarget(ot),R.updateRenderTargetMipmap(ot))}x.setRenderTarget(mt),x.setClearColor(k,G),Dt!==void 0&&(W.viewport=Dt),x.toneMapping=pt}function jt(b,F,H){const W=F.isScene===!0?F.overrideMaterial:null;for(let O=0,ot=b.length;O<ot;O++){const xt=b[O],mt=xt.object,pt=xt.geometry,Dt=W===null?xt.material:W,kt=xt.group;mt.layers.test(H.layers)&&Pe(mt,F,H,pt,Dt,kt)}}function Pe(b,F,H,W,O,ot){b.onBeforeRender(x,F,H,W,O,ot),b.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),O.onBeforeRender(x,F,H,W,b,ot),O.transparent===!0&&O.side===Ui&&O.forceSinglePass===!1?(O.side=En,O.needsUpdate=!0,x.renderBufferDirect(H,F,W,O,b,ot),O.side=dr,O.needsUpdate=!0,x.renderBufferDirect(H,F,W,O,b,ot),O.side=Ui):x.renderBufferDirect(H,F,W,O,b,ot),b.onAfterRender(x,F,H,W,O,ot)}function Fe(b,F,H){F.isScene!==!0&&(F=ft);const W=Ot.get(b),O=f.state.lights,ot=f.state.shadowsArray,xt=O.state.version,mt=wt.getParameters(b,O.state,ot,F,H),pt=wt.getProgramCacheKey(mt);let Dt=W.programs;W.environment=b.isMeshStandardMaterial?F.environment:null,W.fog=F.fog,W.envMap=(b.isMeshStandardMaterial?X:y).get(b.envMap||W.environment),W.envMapRotation=W.environment!==null&&b.envMap===null?F.environmentRotation:b.envMapRotation,Dt===void 0&&(b.addEventListener("dispose",Kt),Dt=new Map,W.programs=Dt);let kt=Dt.get(pt);if(kt!==void 0){if(W.currentProgram===kt&&W.lightsStateVersion===xt)return Ee(b,mt),kt}else mt.uniforms=wt.getUniforms(b),b.onBeforeCompile(mt,x),kt=wt.acquireProgram(mt,pt),Dt.set(pt,kt),W.uniforms=mt.uniforms;const Pt=W.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Pt.clippingPlanes=rt.uniform),Ee(b,mt),W.needsLights=Ae(b),W.lightsStateVersion=xt,W.needsLights&&(Pt.ambientLightColor.value=O.state.ambient,Pt.lightProbe.value=O.state.probe,Pt.directionalLights.value=O.state.directional,Pt.directionalLightShadows.value=O.state.directionalShadow,Pt.spotLights.value=O.state.spot,Pt.spotLightShadows.value=O.state.spotShadow,Pt.rectAreaLights.value=O.state.rectArea,Pt.ltc_1.value=O.state.rectAreaLTC1,Pt.ltc_2.value=O.state.rectAreaLTC2,Pt.pointLights.value=O.state.point,Pt.pointLightShadows.value=O.state.pointShadow,Pt.hemisphereLights.value=O.state.hemi,Pt.directionalShadowMap.value=O.state.directionalShadowMap,Pt.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Pt.spotShadowMap.value=O.state.spotShadowMap,Pt.spotLightMatrix.value=O.state.spotLightMatrix,Pt.spotLightMap.value=O.state.spotLightMap,Pt.pointShadowMap.value=O.state.pointShadowMap,Pt.pointShadowMatrix.value=O.state.pointShadowMatrix),W.currentProgram=kt,W.uniformsList=null,kt}function we(b){if(b.uniformsList===null){const F=b.currentProgram.getUniforms();b.uniformsList=il.seqWithValue(F.seq,b.uniforms)}return b.uniformsList}function Ee(b,F){const H=Ot.get(b);H.outputColorSpace=F.outputColorSpace,H.batching=F.batching,H.batchingColor=F.batchingColor,H.instancing=F.instancing,H.instancingColor=F.instancingColor,H.instancingMorph=F.instancingMorph,H.skinning=F.skinning,H.morphTargets=F.morphTargets,H.morphNormals=F.morphNormals,H.morphColors=F.morphColors,H.morphTargetsCount=F.morphTargetsCount,H.numClippingPlanes=F.numClippingPlanes,H.numIntersection=F.numClipIntersection,H.vertexAlphas=F.vertexAlphas,H.vertexTangents=F.vertexTangents,H.toneMapping=F.toneMapping}function me(b,F,H,W,O){F.isScene!==!0&&(F=ft),R.resetTextureUnits();const ot=F.fog,xt=W.isMeshStandardMaterial?F.environment:null,mt=E===null?x.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:gr,pt=(W.isMeshStandardMaterial?X:y).get(W.envMap||xt),Dt=W.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,kt=!!H.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Pt=!!H.morphAttributes.position,le=!!H.morphAttributes.normal,ae=!!H.morphAttributes.color;let xe=or;W.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(xe=x.toneMapping);const je=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ee=je!==void 0?je.length:0,Nt=Ot.get(W),en=f.state.lights;if(q===!0&&(et===!0||b!==L)){const Jn=b===L&&W.id===C;rt.setState(W,b,Jn)}let fe=!1;W.version===Nt.__version?(Nt.needsLights&&Nt.lightsStateVersion!==en.state.version||Nt.outputColorSpace!==mt||O.isBatchedMesh&&Nt.batching===!1||!O.isBatchedMesh&&Nt.batching===!0||O.isBatchedMesh&&Nt.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Nt.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Nt.instancing===!1||!O.isInstancedMesh&&Nt.instancing===!0||O.isSkinnedMesh&&Nt.skinning===!1||!O.isSkinnedMesh&&Nt.skinning===!0||O.isInstancedMesh&&Nt.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Nt.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Nt.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Nt.instancingMorph===!1&&O.morphTexture!==null||Nt.envMap!==pt||W.fog===!0&&Nt.fog!==ot||Nt.numClippingPlanes!==void 0&&(Nt.numClippingPlanes!==rt.numPlanes||Nt.numIntersection!==rt.numIntersection)||Nt.vertexAlphas!==Dt||Nt.vertexTangents!==kt||Nt.morphTargets!==Pt||Nt.morphNormals!==le||Nt.morphColors!==ae||Nt.toneMapping!==xe||Nt.morphTargetsCount!==ee)&&(fe=!0):(fe=!0,Nt.__version=W.version);let li=Nt.currentProgram;fe===!0&&(li=Fe(W,F,O));let es=!1,Un=!1,Ul=!1;const Be=li.getUniforms(),Gi=Nt.uniforms;if(z.useProgram(li.program)&&(es=!0,Un=!0,Ul=!0),W.id!==C&&(C=W.id,Un=!0),es||L!==b){Gt.reverseDepthBuffer?(ht.copy(b.projectionMatrix),e0(ht),n0(ht),Be.setValue(D,"projectionMatrix",ht)):Be.setValue(D,"projectionMatrix",b.projectionMatrix),Be.setValue(D,"viewMatrix",b.matrixWorldInverse);const Jn=Be.map.cameraPosition;Jn!==void 0&&Jn.setValue(D,Y.setFromMatrixPosition(b.matrixWorld)),Gt.logarithmicDepthBuffer&&Be.setValue(D,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Be.setValue(D,"isOrthographic",b.isOrthographicCamera===!0),L!==b&&(L=b,Un=!0,Ul=!0)}if(O.isSkinnedMesh){Be.setOptional(D,O,"bindMatrix"),Be.setOptional(D,O,"bindMatrixInverse");const Jn=O.skeleton;Jn&&(Jn.boneTexture===null&&Jn.computeBoneTexture(),Be.setValue(D,"boneTexture",Jn.boneTexture,R))}O.isBatchedMesh&&(Be.setOptional(D,O,"batchingTexture"),Be.setValue(D,"batchingTexture",O._matricesTexture,R),Be.setOptional(D,O,"batchingIdTexture"),Be.setValue(D,"batchingIdTexture",O._indirectTexture,R),Be.setOptional(D,O,"batchingColorTexture"),O._colorsTexture!==null&&Be.setValue(D,"batchingColorTexture",O._colorsTexture,R));const Nl=H.morphAttributes;if((Nl.position!==void 0||Nl.normal!==void 0||Nl.color!==void 0)&&zt.update(O,H,li),(Un||Nt.receiveShadow!==O.receiveShadow)&&(Nt.receiveShadow=O.receiveShadow,Be.setValue(D,"receiveShadow",O.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Gi.envMap.value=pt,Gi.flipEnvMap.value=pt.isCubeTexture&&pt.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&F.environment!==null&&(Gi.envMapIntensity.value=F.environmentIntensity),Un&&(Be.setValue(D,"toneMappingExposure",x.toneMappingExposure),Nt.needsLights&&In(Gi,Ul),ot&&W.fog===!0&&at.refreshFogUniforms(Gi,ot),at.refreshMaterialUniforms(Gi,W,$,B,f.state.transmissionRenderTarget[b.id]),il.upload(D,we(Nt),Gi,R)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(il.upload(D,we(Nt),Gi,R),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Be.setValue(D,"center",O.center),Be.setValue(D,"modelViewMatrix",O.modelViewMatrix),Be.setValue(D,"normalMatrix",O.normalMatrix),Be.setValue(D,"modelMatrix",O.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Jn=W.uniformsGroups;for(let Ol=0,Vm=Jn.length;Ol<Vm;Ol++){const Bh=Jn[Ol];N.update(Bh,li),N.bind(Bh,li)}}return li}function In(b,F){b.ambientLightColor.needsUpdate=F,b.lightProbe.needsUpdate=F,b.directionalLights.needsUpdate=F,b.directionalLightShadows.needsUpdate=F,b.pointLights.needsUpdate=F,b.pointLightShadows.needsUpdate=F,b.spotLights.needsUpdate=F,b.spotLightShadows.needsUpdate=F,b.rectAreaLights.needsUpdate=F,b.hemisphereLights.needsUpdate=F}function Ae(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(b,F,H){Ot.get(b.texture).__webglTexture=F,Ot.get(b.depthTexture).__webglTexture=H;const W=Ot.get(b);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=H===void 0,W.__autoAllocateDepthBuffer||St.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,F){const H=Ot.get(b);H.__webglFramebuffer=F,H.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(b,F=0,H=0){E=b,A=F,w=H;let W=!0,O=null,ot=!1,xt=!1;if(b){const pt=Ot.get(b);if(pt.__useDefaultFramebuffer!==void 0)z.bindFramebuffer(D.FRAMEBUFFER,null),W=!1;else if(pt.__webglFramebuffer===void 0)R.setupRenderTarget(b);else if(pt.__hasExternalTextures)R.rebindTextures(b,Ot.get(b.texture).__webglTexture,Ot.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Pt=b.depthTexture;if(pt.__boundDepthTexture!==Pt){if(Pt!==null&&Ot.has(Pt)&&(b.width!==Pt.image.width||b.height!==Pt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(b)}}const Dt=b.texture;(Dt.isData3DTexture||Dt.isDataArrayTexture||Dt.isCompressedArrayTexture)&&(xt=!0);const kt=Ot.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(kt[F])?O=kt[F][H]:O=kt[F],ot=!0):b.samples>0&&R.useMultisampledRTT(b)===!1?O=Ot.get(b).__webglMultisampledFramebuffer:Array.isArray(kt)?O=kt[H]:O=kt,v.copy(b.viewport),T.copy(b.scissor),U=b.scissorTest}else v.copy(P).multiplyScalar($).floor(),T.copy(ct).multiplyScalar($).floor(),U=Rt;if(z.bindFramebuffer(D.FRAMEBUFFER,O)&&W&&z.drawBuffers(b,O),z.viewport(v),z.scissor(T),z.setScissorTest(U),ot){const pt=Ot.get(b.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+F,pt.__webglTexture,H)}else if(xt){const pt=Ot.get(b.texture),Dt=F||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,pt.__webglTexture,H||0,Dt)}C=-1},this.readRenderTargetPixels=function(b,F,H,W,O,ot,xt){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let mt=Ot.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&xt!==void 0&&(mt=mt[xt]),mt){z.bindFramebuffer(D.FRAMEBUFFER,mt);try{const pt=b.texture,Dt=pt.format,kt=pt.type;if(!Gt.textureFormatReadable(Dt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Gt.textureTypeReadable(kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=b.width-W&&H>=0&&H<=b.height-O&&D.readPixels(F,H,W,O,Ht.convert(Dt),Ht.convert(kt),ot)}finally{const pt=E!==null?Ot.get(E).__webglFramebuffer:null;z.bindFramebuffer(D.FRAMEBUFFER,pt)}}},this.readRenderTargetPixelsAsync=async function(b,F,H,W,O,ot,xt){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let mt=Ot.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&xt!==void 0&&(mt=mt[xt]),mt){const pt=b.texture,Dt=pt.format,kt=pt.type;if(!Gt.textureFormatReadable(Dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Gt.textureTypeReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=b.width-W&&H>=0&&H<=b.height-O){z.bindFramebuffer(D.FRAMEBUFFER,mt);const Pt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Pt),D.bufferData(D.PIXEL_PACK_BUFFER,ot.byteLength,D.STREAM_READ),D.readPixels(F,H,W,O,Ht.convert(Dt),Ht.convert(kt),0);const le=E!==null?Ot.get(E).__webglFramebuffer:null;z.bindFramebuffer(D.FRAMEBUFFER,le);const ae=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await t0(D,ae,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Pt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ot),D.deleteBuffer(Pt),D.deleteSync(ae),ot}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,F=null,H=0){b.isTexture!==!0&&(nl("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,b=arguments[1]);const W=Math.pow(2,-H),O=Math.floor(b.image.width*W),ot=Math.floor(b.image.height*W),xt=F!==null?F.x:0,mt=F!==null?F.y:0;R.setTexture2D(b,0),D.copyTexSubImage2D(D.TEXTURE_2D,H,0,0,xt,mt,O,ot),z.unbindTexture()},this.copyTextureToTexture=function(b,F,H=null,W=null,O=0){b.isTexture!==!0&&(nl("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,b=arguments[1],F=arguments[2],O=arguments[3]||0,H=null);let ot,xt,mt,pt,Dt,kt;H!==null?(ot=H.max.x-H.min.x,xt=H.max.y-H.min.y,mt=H.min.x,pt=H.min.y):(ot=b.image.width,xt=b.image.height,mt=0,pt=0),W!==null?(Dt=W.x,kt=W.y):(Dt=0,kt=0);const Pt=Ht.convert(F.format),le=Ht.convert(F.type);R.setTexture2D(F,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,F.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,F.unpackAlignment);const ae=D.getParameter(D.UNPACK_ROW_LENGTH),xe=D.getParameter(D.UNPACK_IMAGE_HEIGHT),je=D.getParameter(D.UNPACK_SKIP_PIXELS),ee=D.getParameter(D.UNPACK_SKIP_ROWS),Nt=D.getParameter(D.UNPACK_SKIP_IMAGES),en=b.isCompressedTexture?b.mipmaps[O]:b.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,en.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,en.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,mt),D.pixelStorei(D.UNPACK_SKIP_ROWS,pt),b.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,O,Dt,kt,ot,xt,Pt,le,en.data):b.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,O,Dt,kt,en.width,en.height,Pt,en.data):D.texSubImage2D(D.TEXTURE_2D,O,Dt,kt,ot,xt,Pt,le,en),D.pixelStorei(D.UNPACK_ROW_LENGTH,ae),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,xe),D.pixelStorei(D.UNPACK_SKIP_PIXELS,je),D.pixelStorei(D.UNPACK_SKIP_ROWS,ee),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Nt),O===0&&F.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),z.unbindTexture()},this.copyTextureToTexture3D=function(b,F,H=null,W=null,O=0){b.isTexture!==!0&&(nl("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,W=arguments[1]||null,b=arguments[2],F=arguments[3],O=arguments[4]||0);let ot,xt,mt,pt,Dt,kt,Pt,le,ae;const xe=b.isCompressedTexture?b.mipmaps[O]:b.image;H!==null?(ot=H.max.x-H.min.x,xt=H.max.y-H.min.y,mt=H.max.z-H.min.z,pt=H.min.x,Dt=H.min.y,kt=H.min.z):(ot=xe.width,xt=xe.height,mt=xe.depth,pt=0,Dt=0,kt=0),W!==null?(Pt=W.x,le=W.y,ae=W.z):(Pt=0,le=0,ae=0);const je=Ht.convert(F.format),ee=Ht.convert(F.type);let Nt;if(F.isData3DTexture)R.setTexture3D(F,0),Nt=D.TEXTURE_3D;else if(F.isDataArrayTexture||F.isCompressedArrayTexture)R.setTexture2DArray(F,0),Nt=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,F.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,F.unpackAlignment);const en=D.getParameter(D.UNPACK_ROW_LENGTH),fe=D.getParameter(D.UNPACK_IMAGE_HEIGHT),li=D.getParameter(D.UNPACK_SKIP_PIXELS),es=D.getParameter(D.UNPACK_SKIP_ROWS),Un=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,xe.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,xe.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,pt),D.pixelStorei(D.UNPACK_SKIP_ROWS,Dt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,kt),b.isDataTexture||b.isData3DTexture?D.texSubImage3D(Nt,O,Pt,le,ae,ot,xt,mt,je,ee,xe.data):F.isCompressedArrayTexture?D.compressedTexSubImage3D(Nt,O,Pt,le,ae,ot,xt,mt,je,xe.data):D.texSubImage3D(Nt,O,Pt,le,ae,ot,xt,mt,je,ee,xe),D.pixelStorei(D.UNPACK_ROW_LENGTH,en),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,fe),D.pixelStorei(D.UNPACK_SKIP_PIXELS,li),D.pixelStorei(D.UNPACK_SKIP_ROWS,es),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Un),O===0&&F.generateMipmaps&&D.generateMipmap(Nt),z.unbindTexture()},this.initRenderTarget=function(b){Ot.get(b).__webglFramebuffer===void 0&&R.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?R.setTextureCube(b,0):b.isData3DTexture?R.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?R.setTexture2DArray(b,0):R.setTexture2D(b,0),z.unbindTexture()},this.resetState=function(){A=0,w=0,E=null,z.reset(),oe.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Sh?"display-p3":"srgb",e.unpackColorSpace=pe.workingColorSpace===Dl?"display-p3":"srgb"}}class hm extends qe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new mi,this.environmentIntensity=1,this.environmentRotation=new mi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class dy{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Iu,this.updateRanges=[],this.version=0,this.uuid=lr()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,s=this.stride;i<s;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=lr()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=lr()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const pn=new I;class yl{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)pn.fromBufferAttribute(this,e),pn.applyMatrix4(t),this.setXYZ(e,pn.x,pn.y,pn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)pn.fromBufferAttribute(this,e),pn.applyNormalMatrix(t),this.setXYZ(e,pn.x,pn.y,pn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)pn.fromBufferAttribute(this,e),pn.transformDirection(t),this.setXYZ(e,pn.x,pn.y,pn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Si(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Se(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Se(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Se(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Se(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Se(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Si(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Si(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Si(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Si(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),i=Se(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),i=Se(i,this.array),s=Se(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return new Tn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new yl(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Rs extends Qr{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Yt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let gs;const pa=new I,vs=new I,xs=new I,Ss=new qt,ma=new qt,fm=new ve,Ao=new I,_a=new I,Ro=new I,jf=new qt,yc=new qt,Zf=new qt;class ga extends qe{constructor(t=new Rs){if(super(),this.isSprite=!0,this.type="Sprite",gs===void 0){gs=new Zn;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new dy(e,5);gs.setIndex([0,1,2,0,2,3]),gs.setAttribute("position",new yl(n,3,0,!1)),gs.setAttribute("uv",new yl(n,2,3,!1))}this.geometry=gs,this.material=t,this.center=new qt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),vs.setFromMatrixScale(this.matrixWorld),fm.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),xs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&vs.multiplyScalar(-xs.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const a=this.center;Co(Ao.set(-.5,-.5,0),xs,a,vs,i,s),Co(_a.set(.5,-.5,0),xs,a,vs,i,s),Co(Ro.set(.5,.5,0),xs,a,vs,i,s),jf.set(0,0),yc.set(1,0),Zf.set(1,1);let o=t.ray.intersectTriangle(Ao,_a,Ro,!1,pa);if(o===null&&(Co(_a.set(-.5,.5,0),xs,a,vs,i,s),yc.set(0,1),o=t.ray.intersectTriangle(Ao,Ro,_a,!1,pa),o===null))return;const l=t.ray.origin.distanceTo(pa);l<t.near||l>t.far||e.push({distance:l,point:pa.clone(),uv:ri.getInterpolation(pa,Ao,_a,Ro,jf,yc,Zf,new qt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Co(r,t,e,n,i,s){Ss.subVectors(r,e).addScalar(.5).multiply(n),i!==void 0?(ma.x=s*Ss.x-i*Ss.y,ma.y=i*Ss.x+s*Ss.y):ma.copy(Ss),r.copy(t),r.x+=ma.x,r.y+=ma.y,r.applyMatrix4(fm)}class py extends dn{constructor(t=null,e=1,n=1,i,s,a,o,l,c=An,u=An,d,h){super(null,a,o,l,c,u,i,s,d,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Jf extends Tn{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Ms=new ve,Qf=new ve,Po=[],td=new Jr,my=new ve,va=new ge,xa=new aa;class _y extends ge{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Jf(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,my)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Jr),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ms),td.copy(t.boundingBox).applyMatrix4(Ms),this.boundingBox.union(td)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new aa),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ms),xa.copy(t.boundingSphere).applyMatrix4(Ms),this.boundingSphere.union(xa)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,a=t*s+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(va.geometry=this.geometry,va.material=this.material,va.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),xa.copy(this.boundingSphere),xa.applyMatrix4(n),t.ray.intersectsSphere(xa)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Ms),Qf.multiplyMatrices(n,Ms),va.matrixWorld=Qf,va.raycast(t,Po);for(let a=0,o=Po.length;a<o;a++){const l=Po[a];l.instanceId=s,l.object=this,e.push(l)}Po.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Jf(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new py(new Float32Array(i*this.count),i,this.count,_h,yi));const s=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=i*t;s[l]=o,s.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class dm extends Qr{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Yt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const ed=new ve,Fu=new jp,Do=new aa,Lo=new I;class gy extends qe{constructor(t=new Zn,e=new dm){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Do.copy(n.boundingSphere),Do.applyMatrix4(i),Do.radius+=s,t.ray.intersectsSphere(Do)===!1)return;ed.copy(i).invert(),Fu.copy(t.ray).applyMatrix4(ed);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){const h=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let _=h,g=p;_<g;_++){const f=c.getX(_);Lo.fromBufferAttribute(d,f),nd(Lo,f,l,i,t,e,this)}}else{const h=Math.max(0,a.start),p=Math.min(d.count,a.start+a.count);for(let _=h,g=p;_<g;_++)Lo.fromBufferAttribute(d,_),nd(Lo,_,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function nd(r,t,e,n,i,s,a){const o=Fu.distanceSqToPoint(r);if(o<e){const l=new I;Fu.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Th extends dn{constructor(t,e,n,i,s,a,o,l,c){super(t,e,n,i,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class bh extends Zn{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const s=[],a=[];o(i),c(n),u(),this.setAttribute("position",new $n(s,3)),this.setAttribute("normal",new $n(s.slice(),3)),this.setAttribute("uv",new $n(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(S){const x=new I,M=new I,A=new I;for(let w=0;w<e.length;w+=3)p(e[w+0],x),p(e[w+1],M),p(e[w+2],A),l(x,M,A,S)}function l(S,x,M,A){const w=A+1,E=[];for(let C=0;C<=w;C++){E[C]=[];const L=S.clone().lerp(M,C/w),v=x.clone().lerp(M,C/w),T=w-C;for(let U=0;U<=T;U++)U===0&&C===w?E[C][U]=L:E[C][U]=L.clone().lerp(v,U/T)}for(let C=0;C<w;C++)for(let L=0;L<2*(w-C)-1;L++){const v=Math.floor(L/2);L%2===0?(h(E[C][v+1]),h(E[C+1][v]),h(E[C][v])):(h(E[C][v+1]),h(E[C+1][v+1]),h(E[C+1][v]))}}function c(S){const x=new I;for(let M=0;M<s.length;M+=3)x.x=s[M+0],x.y=s[M+1],x.z=s[M+2],x.normalize().multiplyScalar(S),s[M+0]=x.x,s[M+1]=x.y,s[M+2]=x.z}function u(){const S=new I;for(let x=0;x<s.length;x+=3){S.x=s[x+0],S.y=s[x+1],S.z=s[x+2];const M=f(S)/2/Math.PI+.5,A=m(S)/Math.PI+.5;a.push(M,1-A)}_(),d()}function d(){for(let S=0;S<a.length;S+=6){const x=a[S+0],M=a[S+2],A=a[S+4],w=Math.max(x,M,A),E=Math.min(x,M,A);w>.9&&E<.1&&(x<.2&&(a[S+0]+=1),M<.2&&(a[S+2]+=1),A<.2&&(a[S+4]+=1))}}function h(S){s.push(S.x,S.y,S.z)}function p(S,x){const M=S*3;x.x=t[M+0],x.y=t[M+1],x.z=t[M+2]}function _(){const S=new I,x=new I,M=new I,A=new I,w=new qt,E=new qt,C=new qt;for(let L=0,v=0;L<s.length;L+=9,v+=6){S.set(s[L+0],s[L+1],s[L+2]),x.set(s[L+3],s[L+4],s[L+5]),M.set(s[L+6],s[L+7],s[L+8]),w.set(a[v+0],a[v+1]),E.set(a[v+2],a[v+3]),C.set(a[v+4],a[v+5]),A.copy(S).add(x).add(M).divideScalar(3);const T=f(A);g(w,v+0,S,T),g(E,v+2,x,T),g(C,v+4,M,T)}}function g(S,x,M,A){A<0&&S.x===1&&(a[x]=S.x-1),M.x===0&&M.z===0&&(a[x]=A/2/Math.PI+.5)}function f(S){return Math.atan2(S.z,-S.x)}function m(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new bh(t.vertices,t.indices,t.radius,t.details)}}class wh extends bh{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new wh(t.radius,t.detail)}}class Ah extends Zn{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],d=new I,h=new I,p=[],_=[],g=[],f=[];for(let m=0;m<=n;m++){const S=[],x=m/n;let M=0;m===0&&a===0?M=.5/e:m===n&&l===Math.PI&&(M=-.5/e);for(let A=0;A<=e;A++){const w=A/e;d.x=-t*Math.cos(i+w*s)*Math.sin(a+x*o),d.y=t*Math.cos(a+x*o),d.z=t*Math.sin(i+w*s)*Math.sin(a+x*o),_.push(d.x,d.y,d.z),h.copy(d).normalize(),g.push(h.x,h.y,h.z),f.push(w+M,1-x),S.push(c++)}u.push(S)}for(let m=0;m<n;m++)for(let S=0;S<e;S++){const x=u[m][S+1],M=u[m][S],A=u[m+1][S],w=u[m+1][S+1];(m!==0||a>0)&&p.push(x,M,w),(m!==n-1||l<Math.PI)&&p.push(M,A,w)}this.setIndex(p),this.setAttribute("position",new $n(_,3)),this.setAttribute("normal",new $n(g,3)),this.setAttribute("uv",new $n(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ah(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class qr extends Qr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Yt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xp,this.normalScale=new qt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class vy extends qr{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new qt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Mn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Yt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Yt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Yt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Rh extends qe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Yt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class xy extends Rh{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(qe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Yt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Ec=new ve,id=new I,rd=new I;class pm{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new qt(512,512),this.map=null,this.mapPass=null,this.matrix=new ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new yh,this._frameExtents=new qt(1,1),this._viewportCount=1,this._viewports=[new Me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;id.setFromMatrixPosition(t.matrixWorld),e.position.copy(id),rd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(rd),e.updateMatrixWorld(),Ec.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ec),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ec)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const sd=new ve,Sa=new I,Tc=new I;class Sy extends pm{constructor(){super(new Hn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new qt(4,2),this._viewportCount=6,this._viewports=[new Me(2,1,1,1),new Me(0,1,1,1),new Me(3,1,1,1),new Me(1,1,1,1),new Me(3,0,1,1),new Me(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Sa.setFromMatrixPosition(t.matrixWorld),n.position.copy(Sa),Tc.copy(n.position),Tc.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Tc),n.updateMatrixWorld(),i.makeTranslation(-Sa.x,-Sa.y,-Sa.z),sd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sd)}}class My extends Rh{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Sy}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class yy extends pm{constructor(){super(new sm(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ad extends Rh{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(qe.DEFAULT_UP),this.updateMatrix(),this.target=new qe,this.shadow=new yy}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Ey{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=od(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=od();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function od(){return performance.now()}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:fh}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=fh);class Ty extends hm{constructor(){super();const t=new ts;t.deleteAttribute("uv");const e=new qr({side:En}),n=new qr,i=new My(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);const s=new ge(t,e);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);const a=new ge(t,n);a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),this.add(a);const o=new ge(t,n);o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),this.add(o);const l=new ge(t,n);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);const c=new ge(t,n);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);const u=new ge(t,n);u.position.set(2.291,-.756,-2.621),u.rotation.set(0,-.286,0),u.scale.set(1.546,1.552,1.496),this.add(u);const d=new ge(t,n);d.position.set(-2.193,-.369,-5.547),d.rotation.set(0,.516,0),d.scale.set(3.875,3.487,2.986),this.add(d);const h=new ge(t,ys(50));h.position.set(-16.116,14.37,8.208),h.scale.set(.1,2.428,2.739),this.add(h);const p=new ge(t,ys(50));p.position.set(-16.109,18.021,-8.207),p.scale.set(.1,2.425,2.751),this.add(p);const _=new ge(t,ys(17));_.position.set(14.904,12.198,-1.832),_.scale.set(.15,4.265,6.331),this.add(_);const g=new ge(t,ys(43));g.position.set(-.462,8.89,14.52),g.scale.set(4.38,5.441,.088),this.add(g);const f=new ge(t,ys(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);const m=new ge(t,ys(100));m.position.set(0,20,0),m.scale.set(1,.1,1),this.add(m)}dispose(){const t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(const e of t)e.dispose()}}function ys(r){const t=new Mh;return t.color.setScalar(r),t}const Ma=new I;function ti(r,t,e,n,i,s){const a=2*Math.PI*i/4,o=Math.max(s-2*i,0),l=Math.PI/4;Ma.copy(t),Ma[n]=0,Ma.normalize();const c=.5*a/(a+o),u=1-Ma.angleTo(r)/l;return Math.sign(Ma[e])===1?u*c:o/(a+o)+c+c*(1-u)}class by extends ts{constructor(t=1,e=1,n=1,i=2,s=.1){if(i=i*2+1,s=Math.min(t/2,e/2,n/2,s),super(1,1,1,i,i,i),i===1)return;const a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;const o=new I,l=new I,c=new I(t,e,n).divideScalar(2).subScalar(s),u=this.attributes.position.array,d=this.attributes.normal.array,h=this.attributes.uv.array,p=u.length/6,_=new I,g=.5/i;for(let f=0,m=0;f<u.length;f+=3,m+=2)switch(o.fromArray(u,f),l.copy(o),l.x-=Math.sign(l.x)*g,l.y-=Math.sign(l.y)*g,l.z-=Math.sign(l.z)*g,l.normalize(),u[f+0]=c.x*Math.sign(o.x)+l.x*s,u[f+1]=c.y*Math.sign(o.y)+l.y*s,u[f+2]=c.z*Math.sign(o.z)+l.z*s,d[f+0]=l.x,d[f+1]=l.y,d[f+2]=l.z,Math.floor(f/p)){case 0:_.set(1,0,0),h[m+0]=ti(_,l,"z","y",s,n),h[m+1]=1-ti(_,l,"y","z",s,e);break;case 1:_.set(-1,0,0),h[m+0]=1-ti(_,l,"z","y",s,n),h[m+1]=1-ti(_,l,"y","z",s,e);break;case 2:_.set(0,1,0),h[m+0]=1-ti(_,l,"x","z",s,t),h[m+1]=ti(_,l,"z","x",s,n);break;case 3:_.set(0,-1,0),h[m+0]=1-ti(_,l,"x","z",s,t),h[m+1]=1-ti(_,l,"z","x",s,n);break;case 4:_.set(0,0,1),h[m+0]=1-ti(_,l,"x","y",s,t),h[m+1]=1-ti(_,l,"y","x",s,e);break;case 5:_.set(0,0,-1),h[m+0]=ti(_,l,"x","y",s,t),h[m+1]=1-ti(_,l,"y","x",s,e);break}}}const wy=[["INV","Invoice"],["PO","Purchase Order"],["GRN","Goods Receipt Note"],["WO","Work Order"],["BOM","Bill of Materials"],["CN","Credit Note"],["SO","Sales Order"],["QC","Quality Check"],["ASN","Advance Ship Notice"],["RMA","Return Authorization"],["LOT","Lot Record"],["COST","Cost Sheet"],["MFG","Manufacturing Record"],["PACK","Packing List"],["TAX","Tax Document"],["SHIP","Shipping Manifest"],["AP","AP Ledger"]];function ld(r,t,e,n,i,s){r.beginPath(),r.moveTo(t+s,e),r.arcTo(t+n,e,t+n,e+i,s),r.arcTo(t+n,e+i,t,e+i,s),r.arcTo(t,e+i,t,e,s),r.arcTo(t,e,t+n,e,s),r.closePath()}function Ay(){return wy.map(([r,t],e)=>{const n=document.createElement("canvas");n.width=256,n.height=320;const i=n.getContext("2d");i.fillStyle="#ffffff",i.fillRect(0,0,256,320),i.fillStyle="rgba(98,188,241,0.13)",i.fillRect(0,0,256,62),i.fillStyle="#013d7c",i.font='800 42px "Segoe UI", Arial, sans-serif',i.fillText(r,20,108),i.fillStyle="rgba(24,40,60,0.55)",i.font='600 16px "Segoe UI", Arial, sans-serif',i.fillText(t,20,138),i.fillStyle="#ffc000",ld(i,192,18,46,26,7),i.fill(),i.fillStyle="#013d7c",i.font="800 12px Arial, sans-serif",i.fillText("DOC",203,36);for(let a=0;a<4;a++)i.fillStyle="rgba(24,40,60,0.12)",ld(i,20,168+a*26,120+(e*37+a*53)%96,10,5),i.fill();i.fillStyle="rgba(98,188,241,0.22)",i.fillRect(0,288,256,32),i.fillStyle="#2e8fd0",i.font="700 13px Consolas, monospace",i.fillText(`FB-2025-${1e3+e*73}`,20,309);const s=new Th(n);return s.colorSpace=kn,s.anisotropy=4,s})}function Ch(r){let t=r>>>0;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}const Ry=r=>Math.min(1,Math.max(0,r));function Cy(r){if(r.dataset.split)return r.querySelectorAll(".char");const t=r.textContent;r.setAttribute("aria-label",t.trim());const e=document.createDocumentFragment();return t.split(/(\s+)/).forEach(n=>{if(!n)return;if(/^\s+$/.test(n)){e.appendChild(document.createTextNode(" "));return}const i=document.createElement("span");i.className="word",i.setAttribute("aria-hidden","true");for(const s of n){const a=document.createElement("span");a.className="char",a.textContent=s,i.appendChild(a)}e.appendChild(i)}),r.textContent="",r.appendChild(e),r.dataset.split="1",r.querySelectorAll(".char")}const cd=22,Py=6,ud=15,bc=new I(0,.6,0);class Dy{constructor(t){this.params={gather:0,ambient:0,fade:1},this.group=new Or,t.add(this.group);const e=Ch(20251),n=Ay(),i=new by(1.05,1.32,.05,3,.07),s=new io(.97,1.24);this.cards=[];for(let a=0;a<cd;a++){const o=new Or,l=new qr({color:16777215,roughness:.32,metalness:.06,transparent:!0}),c=new qr({map:n[a%n.length],roughness:.5,metalness:0,transparent:!0}),u=new ge(i,l),d=new ge(s,c);d.position.z=.026;const h=c.clone(),p=new ge(s,h);p.position.z=-.026,p.rotation.y=Math.PI,o.add(u,d,p),this.group.add(o),this.cards.push({holder:o,mats:[l,c,h],x0:(e()-.5)*16,z0:-3.8+e()*5.6,speed:.22+e()*.34,phase:e(),baseScale:.78+e()*.5,rot:new mi((e()-.5)*.5,(e()-.5)*.9,(e()-.5)*.3),rotSpeed:new I((e()-.5)*.3,(e()-.5)*.5,(e()-.5)*.2),gatherDelay:a/cd*.42,spin:e()*Math.PI*2,ambient:a<Py?{x:(e()-.5)*19,y:(e()-.5)*7,z:-6.5-e()*2.5,bob:e()*Math.PI*2}:null})}this._free=new I,this._target=new I}update(t){const{gather:e,ambient:n,fade:i}=this.params;for(let s=0;s<this.cards.length;s++){const a=this.cards[s],o=a.holder,l=7.5-(a.phase*ud+t*a.speed*2.2)%ud;this._free.set(a.x0+Math.sin(t*.3+s*1.7)*.45,l,a.z0);const c=Ry((e*1.45-a.gatherDelay)/1),u=c*c*(3-2*c);let d=i,h=a.baseScale*(1-u);if(u>0){const _=a.spin+u*5,g=(1-u)*1.6;this._target.set(bc.x+Math.cos(_)*g,bc.y+Math.sin(_)*g*.55,bc.z+(1-u)*.8),this._free.lerp(this._target,u),d*=1-u*.3}if(a.ambient&&n>.01){const _=a.ambient,g=_.x+Math.sin(t*.12+_.bob)*.8,f=_.y+Math.sin(t*.18+_.bob*2)*.5;this._free.lerp(this._target.set(g,f,_.z),n*u),d=i*Math.max(d/i||0,.34*n*u),h=Math.max(h,a.baseScale*1.25*n*u)}o.position.copy(this._free),o.rotation.set(a.rot.x+t*a.rotSpeed.x+u*2.2,a.rot.y+t*a.rotSpeed.y,a.rot.z+t*a.rotSpeed.z),o.scale.setScalar(Math.max(h,1e-4));const p=d>.02&&h>.02;if(o.visible=p,p)for(const _ of a.mats)_.opacity=d}}}const Cs=new Yt(98/255,188/255,241/255),hd=new Yt(3051472),Ly=new Yt(1/255,61/255,124/255),wc=new Yt(1,192/255,0),ln=36,Ac=["Prompt","Synthesize","Validate","Deploy"],Iy=[new I(0,.55,.18),new I(0,-.45,-.22),new I(0,.5,.12)],Io=[{link:0,t:.5,off:[-.5,-1.7,.5]},{link:1,t:.3,off:[.3,-2,-.5]},{link:1,t:.72,off:[.6,-1.6,.4]},{link:2,t:.38,off:[-.4,-2.1,-.4]},{link:2,t:.8,off:[.5,-1.8,.5]}],Ge=new I,fd=new I,Es=new I,Ki=new I,Uo=new I,dd=new ve,pd=new I,md=new sa,mm=new I(0,0,1);function No(r,t){const e=document.createElement("canvas");e.width=e.height=128;const n=e.getContext("2d"),i=n.createRadialGradient(64,64,2,64,64,62);i.addColorStop(0,r),i.addColorStop(.4,t),i.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=i,n.fillRect(0,0,128,128);const s=new Th(e);return s.colorSpace=kn,s}function Uy(){const r=document.createElement("canvas");r.width=r.height=256;const t=r.getContext("2d");t.strokeStyle="rgba(255,192,0,0.95)",t.lineWidth=10,t.shadowColor="rgba(255,192,0,0.9)",t.shadowBlur=22,t.beginPath(),t.arc(128,128,96,0,Math.PI*2),t.stroke();const e=new Th(r);return e.colorSpace=kn,e}class Ny{constructor(t,{tubular:e=22,radial:n=7,radius:i=.04,color:s=Cs,opacity:a=1,emissiveIntensity:o=.35}){this.tubular=e,this.radial=n,this.radius=i,this.draw=0;const l=(e+1)*(n+1),c=new Zn;c.setAttribute("position",new Tn(new Float32Array(l*3),3)),c.setAttribute("normal",new Tn(new Float32Array(l*3),3));const u=[];for(let d=0;d<e;d++)for(let h=0;h<n;h++){const p=d*(n+1)+h,_=p+n+1;u.push(p,_,p+1,_,_+1,p+1)}c.setIndex(u),this.mat=new qr({color:s.clone(),roughness:.35,metalness:0,emissive:s.clone(),emissiveIntensity:o,transparent:!0,opacity:a}),this.mesh=new ge(c,this.mat),this.mesh.frustumCulled=!1,this.mesh.visible=!1,t.add(this.mesh)}update(t){if(this.draw<=.003){this.mesh.visible=!1;return}this.mesh.visible=!0;const{tubular:e,radial:n}=this,i=this.mesh.geometry.attributes.position.array,s=this.mesh.geometry.attributes.normal.array,a=this.draw;let o=0;for(let l=0;l<=e;l++){const c=l/e*a;t(c,Ge),t(Math.min(c+.012,a),fd),Es.subVectors(fd,Ge),Es.lengthSq()<1e-10&&Es.set(1,0,0),Es.normalize(),Ki.crossVectors(Es,mm),Ki.lengthSq()<1e-6&&Ki.set(0,1,0),Ki.normalize(),Uo.crossVectors(Es,Ki).normalize();const u=Math.min(1,l*.4,(e-l)*.4),d=this.radius*u*Math.min(1,a*5);for(let h=0;h<=n;h++){const p=h/n*Math.PI*2,_=Math.cos(p),g=Math.sin(p),f=Ki.x*_+Uo.x*g,m=Ki.y*_+Uo.y*g,S=Ki.z*_+Uo.z*g;s[o]=f,i[o++]=Ge.x+f*d,s[o]=m,i[o++]=Ge.y+m*d,s[o]=S,i[o++]=Ge.z+S*d}}this.mesh.geometry.attributes.position.needsUpdate=!0,this.mesh.geometry.attributes.normal.needsUpdate=!0}}class Oy{constructor(t){this.group=new Or,t.add(this.group),this.params={scale:0,labelAlpha:0,jitter:0,flowSpeed:1,particleAlpha:0,glowBoost:0},this.flowT=0,this.layouts=Fy();const e=this.layouts.workflow;this.hubPos=e.hubs.map(f=>({x:f[0],y:f[1],z:f[2]})),this.satPos=e.sats.map(f=>({x:f[0],y:f[1],z:f[2]})),this.hubScale=Ac.map(()=>({v:0})),this.hubActive=Ac.map(()=>({v:0})),this.satScl=this.satPos.map(()=>({v:0}));const n=Ch(99);this.satSize=this.satPos.map(()=>.055+n()*.055);const i=new Ah(.19,32,24),s=No("rgba(255,255,255,0.95)","rgba(98,188,241,0.55)");this.hubMeshes=[],this.hubGlows=[];for(let f=0;f<4;f++){const m=new vy({color:16777215,roughness:.16,metalness:.05,clearcoat:1,clearcoatRoughness:.25,emissive:Cs.clone(),emissiveIntensity:.12}),S=new ge(i,m);this.group.add(S),this.hubMeshes.push(S);const x=new ga(new Rs({map:s,transparent:!0,opacity:.4,depthWrite:!1}));x.scale.setScalar(1.1),this.group.add(x),this.hubGlows.push(x)}const a=new wh(1,0),o=new qr({color:16777215,roughness:.3,metalness:.15,flatShading:!0});this.satMesh=new _y(a,o,ln),this.satMesh.frustumCulled=!1;const l=new Yt;for(let f=0;f<ln;f++){const m=n();l.copy(m<.62?Cs:m<.88?Ly:wc),this.satMesh.setColorAt(f,l)}this.group.add(this.satMesh);const c=f=>m=>m.set(this.hubPos[f].x,this.hubPos[f].y,this.hubPos[f].z),u=f=>m=>m.set(this.satPos[f].x,this.satPos[f].y,this.satPos[f].z),d=(f,m,S,x)=>{const M=new Ny(this.group,x),A=new I,w=new I,E=new I;return{tube:M,point:(L,v)=>{f(A),m(w),E.set((A.x+w.x)/2+S.x,(A.y+w.y)/2+S.y,(A.z+w.z)/2+S.z);const T=1-L;v.set(T*T*A.x+2*T*L*E.x+L*L*w.x,T*T*A.y+2*T*L*E.y+L*L*w.y,T*T*A.z+2*T*L*E.z+L*L*w.z)}}};this.chain=[];for(let f=0;f<3;f++)this.chain.push(d(c(f),c(f+1),Iy[f],{radius:.05,tubular:26,color:Cs,emissiveIntensity:.4}));this.spokes=[];for(let f=0;f<ln;f++){const m=new I((n()-.5)*.3,(n()-.5)*.3,(n()-.5)*.3);this.spokes.push(d(u(f),c(f%4),m,{radius:.013,tubular:14,radial:5,color:Cs,opacity:.5,emissiveIntensity:.25}))}this.threads=[];for(let f=0;f<14;f++){let m=Math.floor(n()*ln),S=Math.floor(n()*ln);m===S&&(S=(S+7)%ln);const x=new I((n()-.5)*.6,(n()-.5)*.6,.3+n()*.4);this.threads.push(d(u(m),u(S),x,{radius:.011,tubular:16,radial:5,color:hd,opacity:.55,emissiveIntensity:.3}))}const h=(f,m,S)=>this.chain[f].point(m,S);this.branches=Io.map(f=>{const m=M=>h(f.link,f.t,M),S=M=>{h(f.link,f.t,M),M.x+=f.off[0],M.y+=f.off[1],M.z+=f.off[2]},x=new I(f.off[0]*.2,f.off[1]*.12-.25,f.off[2]*.2);return d(m,S,x,{radius:.032,tubular:18,color:wc,emissiveIntensity:.6})}),this.arcs=[];for(let f=0;f<ln;f++)this.arcs.push(d(u(f),u((f+1)%ln),new I(0,0,0),{radius:.026,tubular:8,radial:5,color:Cs,emissiveIntensity:.5}));const p=No("rgba(255,236,170,1)","rgba(255,192,0,0.7)");this.flares=Io.map(()=>{const f=new ga(new Rs({map:p,color:wc.clone(),transparent:!0,opacity:0,depthWrite:!1}));return f.scale.setScalar(.001),this.group.add(f),{state:{v:0},sprite:f}}),this.pulses=Io.map(()=>({t:0,on:0})),this.pulseSprites=Io.map(()=>{const f=new ga(new Rs({map:p,color:16777215,transparent:!0,opacity:0,depthWrite:!1}));return f.scale.setScalar(.001),this.group.add(f),f}),this.runner={t:0,on:0},this.runnerSprite=new ga(new Rs({map:No("rgba(255,255,255,1)","rgba(255,210,80,0.8)"),transparent:!0,opacity:0,depthWrite:!1})),this.runnerSprite.scale.setScalar(.001),this.group.add(this.runnerSprite),this.stamp={s:0,a:0},this.stampSprite=new ga(new Rs({map:Uy(),transparent:!0,opacity:0,depthWrite:!1})),this.stampSprite.position.set(0,.65,.3),this.group.add(this.stampSprite);const _=48;this.pGeo=new Zn,this.pGeo.setAttribute("position",new Tn(new Float32Array(_*3),3)),this.pLink=new Uint8Array(_),this.pOff=new Float32Array(_),this.pSpd=new Float32Array(_);for(let f=0;f<_;f++)this.pLink[f]=f%3,this.pOff[f]=n(),this.pSpd[f]=.1+n()*.14;this.points=new gy(this.pGeo,new dm({map:No("rgba(255,255,255,1)","rgba(46,143,208,0.85)"),color:hd,size:.16,sizeAttenuation:!0,transparent:!0,opacity:0,depthWrite:!1})),this.points.frustumCulled=!1,this.group.add(this.points);const g=document.getElementById("hub-labels");this.labels=Ac.map(f=>{const m=document.createElement("div");return m.className="hub-label",m.textContent=f,m.style.opacity="0",g.appendChild(m),m})}update(t,e,n,i){const s=this.params;this.group.visible=s.scale>.002,this.group.scale.setScalar(Math.max(s.scale,1e-4)),this.flowT+=t*s.flowSpeed;for(let o=0;o<4;o++){const l=this.hubPos[o],c=Math.sin(e*11+o*13.7)*s.jitter*.08,u=Math.cos(e*13+o*7.3)*s.jitter*.08,d=this.hubMeshes[o];d.position.set(l.x+c,l.y+u,l.z);const h=this.hubActive[o].v,p=this.hubScale[o].v*(1+.45*h)*(1+Math.sin(e*2.4+o)*.025);d.scale.setScalar(Math.max(p,1e-4)),d.visible=p>.01,d.material.emissiveIntensity=.12+h*.5+s.glowBoost*.4;const _=this.hubGlows[o];_.position.copy(d.position),_.scale.setScalar(Math.max(1.05*p*(1+h*.5),1e-4)),_.material.opacity=(.34+h*.45+s.glowBoost*.5)*Math.min(p,1),_.visible=d.visible}for(let o=0;o<ln;o++){const l=this.satPos[o],c=Math.sin(e*9+o*3.1)*s.jitter*.1,u=Math.cos(e*8+o*5.7)*s.jitter*.1,d=Math.sin(e*.9+o*1.3)*.04;pd.setScalar(Math.max(this.satScl[o].v*this.satSize[o],1e-4)),md.setFromAxisAngle(mm,e*.4+o),dd.compose(Ge.set(l.x+c,l.y+u+d,l.z),md,pd),this.satMesh.setMatrixAt(o,dd)}if(this.satMesh.instanceMatrix.needsUpdate=!0,this.group.visible){for(const o of this.chain)o.tube.update(o.point);for(const o of this.spokes)o.tube.update(o.point);for(const o of this.threads)o.tube.update(o.point);for(const o of this.branches)o.tube.update(o.point);for(const o of this.arcs)o.tube.update(o.point)}const a=s.particleAlpha;if(this.points.visible=a>.02&&this.group.visible,this.points.visible){const o=this.pGeo.attributes.position.array;for(let l=0;l<this.pLink.length;l++){const c=(this.pOff[l]+this.flowT*this.pSpd[l])%1;this.chain[this.pLink[l]].point(c,Ge),o[l*3]=Ge.x,o[l*3+1]=Ge.y+Math.sin(e*3+l)*.03,o[l*3+2]=Ge.z+.08}this.pGeo.attributes.position.needsUpdate=!0,this.points.material.opacity=a}for(let o=0;o<this.flares.length;o++){const l=this.flares[o],c=l.state.v;l.sprite.visible=c>.01&&this.group.visible,l.sprite.visible&&(this.branches[o].point(0,Ge),l.sprite.position.copy(Ge),l.sprite.scale.setScalar(c*(.85+Math.sin(e*5+o*2)*.12)),l.sprite.material.opacity=Math.min(1,c))}for(let o=0;o<this.pulses.length;o++){const l=this.pulses[o],c=this.pulseSprites[o];c.visible=l.on>.01&&this.group.visible,c.visible&&(this.branches[o].point(Math.max(0,1-l.t),Ge),c.position.copy(Ge),c.scale.setScalar(.5*l.on),c.material.opacity=l.on)}if(this.runnerSprite.visible=this.runner.on>.01&&this.group.visible,this.runnerSprite.visible){const o=Math.min(this.runner.t,.999)*3,l=Math.min(2,Math.floor(o));this.chain[l].point(o-l,Ge),this.runnerSprite.position.copy(Ge),this.runnerSprite.scale.setScalar(.6*this.runner.on),this.runnerSprite.material.opacity=this.runner.on}this.stampSprite.visible=this.stamp.a>.01&&this.group.visible,this.stampSprite.visible&&(this.stampSprite.scale.setScalar(Math.max(this.stamp.s*4.6,.001)),this.stampSprite.material.opacity=this.stamp.a);for(let o=0;o<4;o++){const l=this.labels[o],c=s.labelAlpha*this.hubScale[o].v*(this.group.visible?1:0);if(c<.02){l.style.opacity="0";continue}if(this.hubMeshes[o].getWorldPosition(Ge).project(n),Ge.z>1){l.style.opacity="0";continue}const u=(Ge.x+1)/2*i.vw,d=(1-Ge.y)/2*i.vh;l.style.opacity=String(c),l.style.transform=`translate3d(${u.toFixed(1)}px, ${d.toFixed(1)}px, 0) translate(-50%, -160%)`,l.classList.toggle("active",this.hubActive[o].v>.5)}}}function Fy(){const r=Ch(777),t={},e=[[-4.2,.7,0],[-1.4,.7,0],[1.4,.7,0],[4.2,.7,0]];t.workflow={hubs:e,sats:Array.from({length:ln},(a,o)=>{const l=e[o%4],c=r()*Math.PI*2,u=.5+r()*.6;return[l[0]+Math.cos(c)*u,l[1]+Math.sin(c)*u*.65,(r()-.5)*1.4]})},t.method={hubs:[[-3.6,2.1,-.2],[3.6,2.1,-.2],[-3.6,-1.1,-.2],[3.6,-1.1,-.2]],sats:Array.from({length:ln},()=>[-4.2+r()*8.4,-1.5+r()*3.9,(r()-.5)*.5])},t.risk={hubs:[[-4.2,1.05,0],[-1.4,.35,0],[1.4,1.15,0],[4.2,.45,0]],sats:Array.from({length:ln},(a,o)=>o<24?[-4.2+r()*8.4,.6+(r()-.5)*1.6,(r()-.5)*1.4]:[(r()-.5)*8,-1.6-r()*1.2,(r()-.5)*1.6])};const n=0,i=.65,s=1.95;return t.impact={hubs:[45,135,225,315].map(a=>{const o=a*Math.PI/180;return[n+Math.cos(o)*s,i+Math.sin(o)*s*.92,0]}),sats:Array.from({length:ln},(a,o)=>{const l=o/ln*Math.PI*2,c=s+(r()-.5)*.12;return[n+Math.cos(l)*c,i+Math.sin(l)*c*.92,(r()-.5)*.25]})},t.bloom={hubs:[0,90,180,270].map(a=>{const o=a*Math.PI/180;return[Math.cos(o)*.5,.9+Math.sin(o)*.5,0]}),sats:Array.from({length:ln},(a,o)=>{const l=o/ln*Math.PI*2+(r()-.5)*.4,c=5.5+r()*4;return[Math.cos(l)*c,.8+Math.sin(l)*c*.7,(r()-.5)*3.5]})},t}class By{constructor(t){Lt(this,"render",()=>{const t=Math.min(this.clock.getDelta(),.05),e=this.clock.elapsedTime,n=this.cam;this.camera.position.set(n.x,n.y,n.z),this.camera.lookAt(n.tx,n.ty,n.tz),this.rain.update(e),this.subject.update(t,e,this.camera,this),this.renderer.render(this.scene,this.camera)});this.renderer=new fy({canvas:t,antialias:!0,alpha:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.75)),this.scene=new hm,this.camera=new Hn(42,1,.1,80),this.cam={x:0,y:.6,z:16,tx:0,ty:.6,tz:0};const e=new Nu(this.renderer);this.scene.environment=e.fromScene(new Ty,.04).texture,"environmentIntensity"in this.scene&&(this.scene.environmentIntensity=.5),this.scene.add(new xy(16777215,14214386,.9));const n=new ad(16777215,1.1);n.position.set(5,9,7),this.scene.add(n);const i=new ad(12575743,.35);i.position.set(-6,-3,5),this.scene.add(i),this.rain=new Dy(this.scene),this.subject=new Oy(this.scene),this.clock=new Ey,this.resize(),window.addEventListener("resize",()=>this.resize())}resize(){this.vw=window.innerWidth,this.vh=window.innerHeight,this.renderer.setSize(this.vw,this.vh,!1),this.camera.aspect=this.vw/this.vh,this.camera.updateProjectionMatrix()}}function zy(r,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function ky(r,t,e){return t&&zy(r.prototype,t),r}/*!
 * Observer 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var nn,rl,Wn,nr,ir,Gs,_m,Cr,Vs,gm,Fi,fi,vm,xm=function(){return nn||typeof window!="undefined"&&(nn=window.gsap)&&nn.registerPlugin&&nn},Sm=1,Ns=[],re=[],Ti=[],Na=Date.now,Bu=function(t,e){return e},Hy=function(){var t=Vs.core,e=t.bridge||{},n=t._scrollers,i=t._proxies;n.push.apply(n,re),i.push.apply(i,Ti),re=n,Ti=i,Bu=function(a,o){return e[a](o)}},cr=function(t,e){return~Ti.indexOf(t)&&Ti[Ti.indexOf(t)+1][e]},Oa=function(t){return!!~gm.indexOf(t)},_n=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:i!==!1,capture:!!s})},mn=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},Oo="scrollLeft",Fo="scrollTop",zu=function(){return Fi&&Fi.isPressed||re.cache++},El=function(t,e){var n=function i(s){if(s||s===0){Sm&&(Wn.history.scrollRestoration="manual");var a=Fi&&Fi.isPressed;s=i.v=Math.round(s)||(Fi&&Fi.iOS?1:0),t(s),i.cacheID=re.cache,a&&Bu("ss",s)}else(e||re.cache!==i.cacheID||Bu("ref"))&&(i.cacheID=re.cache,i.v=t());return i.v+i.offset};return n.offset=0,t&&n},yn={s:Oo,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:El(function(r){return arguments.length?Wn.scrollTo(r,Ye.sc()):Wn.pageXOffset||nr[Oo]||ir[Oo]||Gs[Oo]||0})},Ye={s:Fo,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:yn,sc:El(function(r){return arguments.length?Wn.scrollTo(yn.sc(),r):Wn.pageYOffset||nr[Fo]||ir[Fo]||Gs[Fo]||0})},bn=function(t,e){return(e&&e._ctx&&e._ctx.selector||nn.utils.toArray)(t)[0]||(typeof t=="string"&&nn.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},Gy=function(t,e){for(var n=e.length;n--;)if(e[n]===t||e[n].contains(t))return!0;return!1},mr=function(t,e){var n=e.s,i=e.sc;Oa(t)&&(t=nr.scrollingElement||ir);var s=re.indexOf(t),a=i===Ye.sc?1:2;!~s&&(s=re.push(t)-1),re[s+a]||_n(t,"scroll",zu);var o=re[s+a],l=o||(re[s+a]=El(cr(t,n),!0)||(Oa(t)?i:El(function(c){return arguments.length?t[n]=c:t[n]})));return l.target=t,o||(l.smooth=nn.getProperty(t,"scrollBehavior")==="smooth"),l},ku=function(t,e,n){var i=t,s=t,a=Na(),o=a,l=e||50,c=Math.max(500,l*3),u=function(_,g){var f=Na();g||f-a>l?(s=i,i=_,o=a,a=f):n?i+=_:i=s+(_-s)/(f-o)*(a-o)},d=function(){s=i=n?0:i,o=a=0},h=function(_){var g=o,f=s,m=Na();return(_||_===0)&&_!==i&&u(_),a===o||m-o>c?0:(i+(n?f:-f))/((n?m:a)-g)*1e3};return{update:u,reset:d,getVelocity:h}},ya=function(t,e){return e&&!t._gsapAllow&&t.cancelable!==!1&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},_d=function(t){var e=Math.max.apply(Math,t),n=Math.min.apply(Math,t);return Math.abs(e)>=Math.abs(n)?e:n},Mm=function(){Vs=nn.core.globals().ScrollTrigger,Vs&&Vs.core&&Hy()},ym=function(t){return nn=t||xm(),!rl&&nn&&typeof document!="undefined"&&document.body&&(Wn=window,nr=document,ir=nr.documentElement,Gs=nr.body,gm=[Wn,nr,ir,Gs],nn.utils.clamp,vm=nn.core.context||function(){},Cr="onpointerenter"in Gs?"pointer":"mouse",_m=ke.isTouch=Wn.matchMedia&&Wn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Wn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,fi=ke.eventTypes=("ontouchstart"in ir?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in ir?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Sm=0},500),rl=1),Vs||Mm(),rl};yn.op=Ye;re.cache=0;var ke=function(){function r(e){this.init(e)}var t=r.prototype;return t.init=function(n){rl||ym(nn)||console.warn("Please gsap.registerPlugin(Observer)"),Vs||Mm();var i=n.tolerance,s=n.dragMinimum,a=n.type,o=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,d=n.onStop,h=n.onStopDelay,p=n.ignore,_=n.wheelSpeed,g=n.event,f=n.onDragStart,m=n.onDragEnd,S=n.onDrag,x=n.onPress,M=n.onRelease,A=n.onRight,w=n.onLeft,E=n.onUp,C=n.onDown,L=n.onChangeX,v=n.onChangeY,T=n.onChange,U=n.onToggleX,k=n.onToggleY,G=n.onHover,Z=n.onHoverEnd,B=n.onMove,$=n.ignoreCheck,V=n.isNormalizer,st=n.onGestureStart,P=n.onGestureEnd,ct=n.onWheel,Rt=n.onEnable,Ft=n.onDisable,q=n.onClick,et=n.scrollSpeed,ht=n.capture,lt=n.allowClicks,Y=n.lockAxis,J=n.onLockAxis;this.target=o=bn(o)||ir,this.vars=n,p&&(p=nn.utils.toArray(p)),i=i||1e-9,s=s||0,_=_||1,et=et||1,a=a||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Wn.getComputedStyle(Gs).lineHeight)||22);var ft,bt,yt,D,Xt,St,Gt,z=this,te=0,Ot=0,R=n.passive||!u&&n.passive!==!1,y=mr(o,yn),X=mr(o,Ye),Q=y(),it=X(),j=~a.indexOf("touch")&&!~a.indexOf("pointer")&&fi[0]==="pointerdown",wt=Oa(o),at=o.ownerDocument||nr,_t=[0,0,0],Wt=[0,0,0],rt=0,Et=function(){return rt=Na()},Tt=function(Ct,he){return(z.event=Ct)&&p&&Gy(Ct.target,p)||he&&j&&Ct.pointerType!=="touch"||$&&$(Ct,he)},zt=function(){z._vx.reset(),z._vy.reset(),bt.pause(),d&&d(z)},Mt=function(){var Ct=z.deltaX=_d(_t),he=z.deltaY=_d(Wt),gt=Math.abs(Ct)>=i,Bt=Math.abs(he)>=i;T&&(gt||Bt)&&T(z,Ct,he,_t,Wt),gt&&(A&&z.deltaX>0&&A(z),w&&z.deltaX<0&&w(z),L&&L(z),U&&z.deltaX<0!=te<0&&U(z),te=z.deltaX,_t[0]=_t[1]=_t[2]=0),Bt&&(C&&z.deltaY>0&&C(z),E&&z.deltaY<0&&E(z),v&&v(z),k&&z.deltaY<0!=Ot<0&&k(z),Ot=z.deltaY,Wt[0]=Wt[1]=Wt[2]=0),(D||yt)&&(B&&B(z),yt&&(f&&yt===1&&f(z),S&&S(z),yt=0),D=!1),St&&!(St=!1)&&J&&J(z),Xt&&(ct(z),Xt=!1),ft=0},$t=function(Ct,he,gt){_t[gt]+=Ct,Wt[gt]+=he,z._vx.update(Ct),z._vy.update(he),c?ft||(ft=requestAnimationFrame(Mt)):Mt()},Ht=function(Ct,he){Y&&!Gt&&(z.axis=Gt=Math.abs(Ct)>Math.abs(he)?"x":"y",St=!0),Gt!=="y"&&(_t[2]+=Ct,z._vx.update(Ct,!0)),Gt!=="x"&&(Wt[2]+=he,z._vy.update(he,!0)),c?ft||(ft=requestAnimationFrame(Mt)):Mt()},oe=function(Ct){if(!Tt(Ct,1)){Ct=ya(Ct,u);var he=Ct.clientX,gt=Ct.clientY,Bt=he-z.x,Ut=gt-z.y,Vt=z.isDragging;z.x=he,z.y=gt,(Vt||(Bt||Ut)&&(Math.abs(z.startX-he)>=s||Math.abs(z.startY-gt)>=s))&&(yt||(yt=Vt?2:1),Vt||(z.isDragging=!0),Ht(Bt,Ut))}},N=z.onPress=function(It){Tt(It,1)||It&&It.button||(z.axis=Gt=null,bt.pause(),z.isPressed=!0,It=ya(It),te=Ot=0,z.startX=z.x=It.clientX,z.startY=z.y=It.clientY,z._vx.reset(),z._vy.reset(),_n(V?o:at,fi[1],oe,R,!0),z.deltaX=z.deltaY=0,x&&x(z))},nt=z.onRelease=function(It){if(!Tt(It,1)){mn(V?o:at,fi[1],oe,!0);var Ct=!isNaN(z.y-z.startY),he=z.isDragging,gt=he&&(Math.abs(z.x-z.startX)>3||Math.abs(z.y-z.startY)>3),Bt=ya(It);!gt&&Ct&&(z._vx.reset(),z._vy.reset(),u&&lt&&nn.delayedCall(.08,function(){if(Na()-rt>300&&!It.defaultPrevented){if(It.target.click)It.target.click();else if(at.createEvent){var Ut=at.createEvent("MouseEvents");Ut.initMouseEvent("click",!0,!0,Wn,1,Bt.screenX,Bt.screenY,Bt.clientX,Bt.clientY,!1,!1,!1,!1,0,null),It.target.dispatchEvent(Ut)}}})),z.isDragging=z.isGesturing=z.isPressed=!1,d&&he&&!V&&bt.restart(!0),yt&&Mt(),m&&he&&m(z),M&&M(z,gt)}},K=function(Ct){return Ct.touches&&Ct.touches.length>1&&(z.isGesturing=!0)&&st(Ct,z.isDragging)},tt=function(){return(z.isGesturing=!1)||P(z)},ut=function(Ct){if(!Tt(Ct)){var he=y(),gt=X();$t((he-Q)*et,(gt-it)*et,1),Q=he,it=gt,d&&bt.restart(!0)}},dt=function(Ct){if(!Tt(Ct)){Ct=ya(Ct,u),ct&&(Xt=!0);var he=(Ct.deltaMode===1?l:Ct.deltaMode===2?Wn.innerHeight:1)*_;$t(Ct.deltaX*he,Ct.deltaY*he,0),d&&!V&&bt.restart(!0)}},Kt=function(Ct){if(!Tt(Ct)){var he=Ct.clientX,gt=Ct.clientY,Bt=he-z.x,Ut=gt-z.y;z.x=he,z.y=gt,D=!0,d&&bt.restart(!0),(Bt||Ut)&&Ht(Bt,Ut)}},ye=function(Ct){z.event=Ct,G(z)},Ce=function(Ct){z.event=Ct,Z(z)},se=function(Ct){return Tt(Ct)||ya(Ct,u)&&q(z)};bt=z._dc=nn.delayedCall(h||.25,zt).pause(),z.deltaX=z.deltaY=0,z._vx=ku(0,50,!0),z._vy=ku(0,50,!0),z.scrollX=y,z.scrollY=X,z.isDragging=z.isGesturing=z.isPressed=!1,vm(this),z.enable=function(It){return z.isEnabled||(_n(wt?at:o,"scroll",zu),a.indexOf("scroll")>=0&&_n(wt?at:o,"scroll",ut,R,ht),a.indexOf("wheel")>=0&&_n(o,"wheel",dt,R,ht),(a.indexOf("touch")>=0&&_m||a.indexOf("pointer")>=0)&&(_n(o,fi[0],N,R,ht),_n(at,fi[2],nt),_n(at,fi[3],nt),lt&&_n(o,"click",Et,!0,!0),q&&_n(o,"click",se),st&&_n(at,"gesturestart",K),P&&_n(at,"gestureend",tt),G&&_n(o,Cr+"enter",ye),Z&&_n(o,Cr+"leave",Ce),B&&_n(o,Cr+"move",Kt)),z.isEnabled=!0,z.isDragging=z.isGesturing=z.isPressed=D=yt=!1,z._vx.reset(),z._vy.reset(),Q=y(),it=X(),It&&It.type&&N(It),Rt&&Rt(z)),z},z.disable=function(){z.isEnabled&&(Ns.filter(function(It){return It!==z&&Oa(It.target)}).length||mn(wt?at:o,"scroll",zu),z.isPressed&&(z._vx.reset(),z._vy.reset(),mn(V?o:at,fi[1],oe,!0)),mn(wt?at:o,"scroll",ut,ht),mn(o,"wheel",dt,ht),mn(o,fi[0],N,ht),mn(at,fi[2],nt),mn(at,fi[3],nt),mn(o,"click",Et,!0),mn(o,"click",se),mn(at,"gesturestart",K),mn(at,"gestureend",tt),mn(o,Cr+"enter",ye),mn(o,Cr+"leave",Ce),mn(o,Cr+"move",Kt),z.isEnabled=z.isPressed=z.isDragging=!1,Ft&&Ft(z))},z.kill=z.revert=function(){z.disable();var It=Ns.indexOf(z);It>=0&&Ns.splice(It,1),Fi===z&&(Fi=0)},Ns.push(z),V&&Oa(o)&&(Fi=z),z.enable(g)},ky(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r}();ke.version="3.15.0";ke.create=function(r){return new ke(r)};ke.register=ym;ke.getAll=function(){return Ns.slice()};ke.getById=function(r){return Ns.filter(function(t){return t.vars.id===r})[0]};xm()&&nn.registerPlugin(ke);/*!
 * ScrollTrigger 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var At,Ps,ie,_e,Gn,de,Ph,Tl,Qa,Fa,Aa,Bo,on,Il,Hu,xn,gd,vd,Ds,Em,Rc,Tm,vn,Gu,bm,wm,Zi,Vu,Dh,Ws,Lh,Ba,Wu,Cc,zo=1,cn=Date.now,Pc=cn(),oi=0,Ra=0,xd=function(t,e,n){var i=Bn(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return n["_"+e+"Clamp"]=i,i?t.substr(6,t.length-7):t},Sd=function(t,e){return e&&(!Bn(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},Vy=function r(){return Ra&&requestAnimationFrame(r)},Md=function(){return Il=1},yd=function(){return Il=0},gi=function(t){return t},Ca=function(t){return Math.round(t*1e5)/1e5||0},Am=function(){return typeof window!="undefined"},Rm=function(){return At||Am()&&(At=window.gsap)&&At.registerPlugin&&At},$r=function(t){return!!~Ph.indexOf(t)},Cm=function(t){return(t==="Height"?Lh:ie["inner"+t])||Gn["client"+t]||de["client"+t]},Pm=function(t){return cr(t,"getBoundingClientRect")||($r(t)?function(){return cl.width=ie.innerWidth,cl.height=Lh,cl}:function(){return Ni(t)})},Wy=function(t,e,n){var i=n.d,s=n.d2,a=n.a;return(a=cr(t,"getBoundingClientRect"))?function(){return a()[i]}:function(){return(e?Cm(s):t["client"+s])||0}},Xy=function(t,e){return!e||~Ti.indexOf(t)?Pm(t):function(){return cl}},Ei=function(t,e){var n=e.s,i=e.d2,s=e.d,a=e.a;return Math.max(0,(n="scroll"+i)&&(a=cr(t,n))?a()-Pm(t)()[s]:$r(t)?(Gn[n]||de[n])-Cm(i):t[n]-t["offset"+i])},ko=function(t,e){for(var n=0;n<Ds.length;n+=3)(!e||~e.indexOf(Ds[n+1]))&&t(Ds[n],Ds[n+1],Ds[n+2])},Bn=function(t){return typeof t=="string"},hn=function(t){return typeof t=="function"},Pa=function(t){return typeof t=="number"},Pr=function(t){return typeof t=="object"},Ea=function(t,e,n){return t&&t.progress(e?0:1)&&n&&t.pause()},Ts=function(t,e,n){if(t.enabled){var i=t._ctx?t._ctx.add(function(){return e(t,n)}):e(t,n);i&&i.totalTime&&(t.callbackAnimation=i)}},bs=Math.abs,Dm="left",Lm="top",Ih="right",Uh="bottom",Gr="width",Vr="height",za="Right",ka="Left",Ha="Top",Ga="Bottom",Ve="padding",ni="margin",ia="Width",Nh="Height",Xe="px",ii=function(t){return ie.getComputedStyle(t.nodeType===Node.DOCUMENT_NODE?t.scrollingElement:t)},Yy=function(t){var e=ii(t).position;t.style.position=e==="absolute"||e==="fixed"?e:"relative"},Ed=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},Ni=function(t,e){var n=e&&ii(t)[Hu]!=="matrix(1, 0, 0, 1, 0, 0)"&&At.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=t.getBoundingClientRect?t.getBoundingClientRect():t.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},bl=function(t,e){var n=e.d2;return t["offset"+n]||t["client"+n]||0},Im=function(t){var e=[],n=t.labels,i=t.duration(),s;for(s in n)e.push(n[s]/i);return e},qy=function(t){return function(e){return At.utils.snap(Im(t),e)}},Oh=function(t){var e=At.utils.snap(t),n=Array.isArray(t)&&t.slice(0).sort(function(i,s){return i-s});return n?function(i,s,a){a===void 0&&(a=.001);var o;if(!s)return e(i);if(s>0){for(i-=a,o=0;o<n.length;o++)if(n[o]>=i)return n[o];return n[o-1]}else for(o=n.length,i+=a;o--;)if(n[o]<=i)return n[o];return n[0]}:function(i,s,a){a===void 0&&(a=.001);var o=e(i);return!s||Math.abs(o-i)<a||o-i<0==s<0?o:e(s<0?i-t:i+t)}},$y=function(t){return function(e,n){return Oh(Im(t))(e,n.direction)}},Ho=function(t,e,n,i){return n.split(",").forEach(function(s){return t(e,s,i)})},Qe=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:!i,capture:!!s})},Je=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},Go=function(t,e,n){n=n&&n.wheelHandler,n&&(t(e,"wheel",n),t(e,"touchmove",n))},Td={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Vo={toggleActions:"play",anticipatePin:0},wl={top:0,left:0,center:.5,bottom:1,right:1},sl=function(t,e){if(Bn(t)){var n=t.indexOf("="),i=~n?+(t.charAt(n-1)+1)*parseFloat(t.substr(n+1)):0;~n&&(t.indexOf("%")>n&&(i*=e/100),t=t.substr(0,n-1)),t=i+(t in wl?wl[t]*e:~t.indexOf("%")?parseFloat(t)*e/100:parseFloat(t)||0)}return t},Wo=function(t,e,n,i,s,a,o,l){var c=s.startColor,u=s.endColor,d=s.fontSize,h=s.indent,p=s.fontWeight,_=_e.createElement("div"),g=$r(n)||cr(n,"pinType")==="fixed",f=t.indexOf("scroller")!==-1,m=g?de:n.tagName==="IFRAME"?n.contentDocument.body:n,S=t.indexOf("start")!==-1,x=S?c:u,M="border-color:"+x+";font-size:"+d+";color:"+x+";font-weight:"+p+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return M+="position:"+((f||l)&&g?"fixed;":"absolute;"),(f||l||!g)&&(M+=(i===Ye?Ih:Uh)+":"+(a+parseFloat(h))+"px;"),o&&(M+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),_._isStart=S,_.setAttribute("class","gsap-marker-"+t+(e?" marker-"+e:"")),_.style.cssText=M,_.innerText=e||e===0?t+"-"+e:t,m.children[0]?m.insertBefore(_,m.children[0]):m.appendChild(_),_._offset=_["offset"+i.op.d2],al(_,0,i,S),_},al=function(t,e,n,i){var s={display:"block"},a=n[i?"os2":"p2"],o=n[i?"p2":"os2"];t._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+a+ia]=1,s["border"+o+ia]=0,s[n.p]=e+"px",At.set(t,s)},ne=[],Xu={},to,bd=function(){return cn()-oi>34&&(to||(to=requestAnimationFrame(Bi)))},ws=function(){(!vn||!vn.isPressed||vn.startX>de.clientWidth)&&(re.cache++,vn?to||(to=requestAnimationFrame(Bi)):Bi(),oi||jr("scrollStart"),oi=cn())},Dc=function(){wm=ie.innerWidth,bm=ie.innerHeight},Da=function(t){re.cache++,(t===!0||!on&&!Tm&&!_e.fullscreenElement&&!_e.webkitFullscreenElement&&(!Gu||wm!==ie.innerWidth||Math.abs(ie.innerHeight-bm)>ie.innerHeight*.25))&&Tl.restart(!0)},Kr={},Ky=[],Um=function r(){return Je(Qt,"scrollEnd",r)||Fr(!0)},jr=function(t){return Kr[t]&&Kr[t].map(function(e){return e()})||Ky},Fn=[],Nm=function(t){for(var e=0;e<Fn.length;e+=5)(!t||Fn[e+4]&&Fn[e+4].query===t)&&(Fn[e].style.cssText=Fn[e+1],Fn[e].getBBox&&Fn[e].setAttribute("transform",Fn[e+2]||""),Fn[e+3].uncache=1)},Om=function(){return re.forEach(function(t){return hn(t)&&++t.cacheID&&(t.rec=t())})},Fh=function(t,e){var n;for(xn=0;xn<ne.length;xn++)n=ne[xn],n&&(!e||n._ctx===e)&&(t?n.kill(1):n.revert(!0,!0));Ba=!0,e&&Nm(e),e||jr("revert")},Fm=function(t,e){re.cache++,(e||!Sn)&&re.forEach(function(n){return hn(n)&&n.cacheID++&&(n.rec=0)}),Bn(t)&&(ie.history.scrollRestoration=Dh=t)},Sn,Wr=0,wd,jy=function(){if(wd!==Wr){var t=wd=Wr;requestAnimationFrame(function(){return t===Wr&&Fr(!0)})}},Bm=function(){de.appendChild(Ws),Lh=!vn&&Ws.offsetHeight||ie.innerHeight,de.removeChild(Ws)},Ad=function(t){return Qa(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e){return e.style.display=t?"none":"block"})},Fr=function(t,e){if(Gn=_e.documentElement,de=_e.body,Ph=[ie,_e,Gn,de],oi&&!t&&!Ba){Qe(Qt,"scrollEnd",Um);return}Bm(),Sn=Qt.isRefreshing=!0,Ba||Om();var n=jr("refreshInit");Em&&Qt.sort(),e||Fh(),re.forEach(function(i){hn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),ne.slice(0).forEach(function(i){return i.refresh()}),Ba=!1,ne.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",a=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-a),i.refresh()}}),Wu=1,Ad(!0),ne.forEach(function(i){var s=Ei(i.scroller,i._dir),a=i.vars.end==="max"||i._endClamp&&i.end>s,o=i._startClamp&&i.start>=s;(a||o)&&i.setPositions(o?s-1:i.start,a?Math.max(o?s:i.start+1,s):i.end,!0)}),Ad(!1),Wu=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),re.forEach(function(i){hn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),Fm(Dh,1),Tl.pause(),Wr++,Sn=2,Bi(2),ne.forEach(function(i){return hn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Sn=Qt.isRefreshing=!1,jr("refresh")},Yu=0,ol=1,Va,Bi=function(t){if(t===2||!Sn&&!Ba){Qt.isUpdating=!0,Va&&Va.update(0);var e=ne.length,n=cn(),i=n-Pc>=50,s=e&&ne[0].scroll();if(ol=Yu>s?-1:1,Sn||(Yu=s),i&&(oi&&!Il&&n-oi>200&&(oi=0,jr("scrollEnd")),Aa=Pc,Pc=n),ol<0){for(xn=e;xn-- >0;)ne[xn]&&ne[xn].update(0,i);ol=1}else for(xn=0;xn<e;xn++)ne[xn]&&ne[xn].update(0,i);Qt.isUpdating=!1}to=0},qu=[Dm,Lm,Uh,Ih,ni+Ga,ni+za,ni+Ha,ni+ka,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],ll=qu.concat([Gr,Vr,"boxSizing","max"+ia,"max"+Nh,"position",ni,Ve,Ve+Ha,Ve+za,Ve+Ga,Ve+ka]),Zy=function(t,e,n){Xs(n);var i=t._gsap;if(i.spacerIsNative)Xs(i.spacerState);else if(t._gsap.swappedIn){var s=e.parentNode;s&&(s.insertBefore(t,e),s.removeChild(e))}t._gsap.swappedIn=!1},Lc=function(t,e,n,i){if(!t._gsap.swappedIn){for(var s=qu.length,a=e.style,o=t.style,l;s--;)l=qu[s],a[l]=n[l];a.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(a.display="inline-block"),o[Uh]=o[Ih]="auto",a.flexBasis=n.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[Gr]=bl(t,yn)+Xe,a[Vr]=bl(t,Ye)+Xe,a[Ve]=o[ni]=o[Lm]=o[Dm]="0",Xs(i),o[Gr]=o["max"+ia]=n[Gr],o[Vr]=o["max"+Nh]=n[Vr],o[Ve]=n[Ve],t.parentNode!==e&&(t.parentNode.insertBefore(e,t),e.appendChild(t)),t._gsap.swappedIn=!0}},Jy=/([A-Z])/g,Xs=function(t){if(t){var e=t.t.style,n=t.length,i=0,s,a;for((t.t._gsap||At.core.getCache(t.t)).uncache=1;i<n;i+=2)a=t[i+1],s=t[i],a?e[s]=a:e[s]&&e.removeProperty(s.replace(Jy,"-$1").toLowerCase())}},Xo=function(t){for(var e=ll.length,n=t.style,i=[],s=0;s<e;s++)i.push(ll[s],n[ll[s]]);return i.t=t,i},Qy=function(t,e,n){for(var i=[],s=t.length,a=n?8:0,o;a<s;a+=2)o=t[a],i.push(o,o in e?e[o]:t[a+1]);return i.t=t.t,i},cl={left:0,top:0},Rd=function(t,e,n,i,s,a,o,l,c,u,d,h,p,_){hn(t)&&(t=t(l)),Bn(t)&&t.substr(0,3)==="max"&&(t=h+(t.charAt(4)==="="?sl("0"+t.substr(3),n):0));var g=p?p.time():0,f,m,S;if(p&&p.seek(0),isNaN(t)||(t=+t),Pa(t))p&&(t=At.utils.mapRange(p.scrollTrigger.start,p.scrollTrigger.end,0,h,t)),o&&al(o,n,i,!0);else{hn(e)&&(e=e(l));var x=(t||"0").split(" "),M,A,w,E;S=bn(e,l)||de,M=Ni(S)||{},(!M||!M.left&&!M.top)&&ii(S).display==="none"&&(E=S.style.display,S.style.display="block",M=Ni(S),E?S.style.display=E:S.style.removeProperty("display")),A=sl(x[0],M[i.d]),w=sl(x[1]||"0",n),t=M[i.p]-c[i.p]-u+A+s-w,o&&al(o,w,i,n-w<20||o._isStart&&w>20),n-=n-w}if(_&&(l[_]=t||-.001,t<0&&(t=0)),a){var C=t+n,L=a._isStart;f="scroll"+i.d2,al(a,C,i,L&&C>20||!L&&(d?Math.max(de[f],Gn[f]):a.parentNode[f])<=C+1),d&&(c=Ni(o),d&&(a.style[i.op.p]=c[i.op.p]-i.op.m-a._offset+Xe))}return p&&S&&(f=Ni(S),p.seek(h),m=Ni(S),p._caScrollDist=f[i.p]-m[i.p],t=t/p._caScrollDist*h),p&&p.seek(g),p?t:Math.round(t)},tE=/(webkit|moz|length|cssText|inset)/i,Cd=function(t,e,n,i){if(t.parentNode!==e){var s=t.style,a,o;if(e===de){t._stOrig=s.cssText,o=ii(t);for(a in o)!+a&&!tE.test(a)&&o[a]&&typeof s[a]=="string"&&a!=="0"&&(s[a]=o[a]);s.top=n,s.left=i}else s.cssText=t._stOrig;At.core.getCache(t).uncache=1,e.appendChild(t)}},zm=function(t,e,n){var i=e,s=i;return function(a){var o=Math.round(t());return o!==i&&o!==s&&Math.abs(o-i)>3&&Math.abs(o-s)>3&&(a=o,n&&n()),s=i,i=Math.round(a),i}},Yo=function(t,e,n){var i={};i[e.p]="+="+n,At.set(t,i)},Pd=function(t,e){var n=mr(t,e),i="_scroll"+e.p2,s=function a(o,l,c,u,d){var h=a.tween,p=l.onComplete,_={};c=c||n();var g=zm(n,c,function(){h.kill(),a.tween=0});return d=u&&d||0,u=u||o-c,h&&h.kill(),l[i]=o,l.inherit=!1,l.modifiers=_,_[i]=function(){return g(c+u*h.ratio+d*h.ratio*h.ratio)},l.onUpdate=function(){re.cache++,a.tween&&Bi()},l.onComplete=function(){a.tween=0,p&&p.call(h)},h=a.tween=At.to(t,l),h};return t[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},Qe(t,"wheel",n.wheelHandler),Qt.isTouch&&Qe(t,"touchmove",n.wheelHandler),s},Qt=function(){function r(e,n){Ps||r.register(At)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Vu(this),this.init(e,n)}var t=r.prototype;return t.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Ra){this.update=this.refresh=this.kill=gi;return}n=Ed(Bn(n)||Pa(n)||n.nodeType?{trigger:n}:n,Vo);var s=n,a=s.onUpdate,o=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,d=s.scrub,h=s.trigger,p=s.pin,_=s.pinSpacing,g=s.invalidateOnRefresh,f=s.anticipatePin,m=s.onScrubComplete,S=s.onSnapComplete,x=s.once,M=s.snap,A=s.pinReparent,w=s.pinSpacer,E=s.containerAnimation,C=s.fastScrollEnd,L=s.preventOverlaps,v=n.horizontal||n.containerAnimation&&n.horizontal!==!1?yn:Ye,T=!d&&d!==0,U=bn(n.scroller||ie),k=At.core.getCache(U),G=$r(U),Z=("pinType"in n?n.pinType:cr(U,"pinType")||G&&"fixed")==="fixed",B=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],$=T&&n.toggleActions.split(" "),V="markers"in n?n.markers:Vo.markers,st=G?0:parseFloat(ii(U)["border"+v.p2+ia])||0,P=this,ct=n.onRefreshInit&&function(){return n.onRefreshInit(P)},Rt=Wy(U,G,v),Ft=Xy(U,G),q=0,et=0,ht=0,lt=mr(U,v),Y,J,ft,bt,yt,D,Xt,St,Gt,z,te,Ot,R,y,X,Q,it,j,wt,at,_t,Wt,rt,Et,Tt,zt,Mt,$t,Ht,oe,N,nt,K,tt,ut,dt,Kt,ye,Ce;if(P._startClamp=P._endClamp=!1,P._dir=v,f*=45,P.scroller=U,P.scroll=E?E.time.bind(E):lt,bt=lt(),P.vars=n,i=i||n.animation,"refreshPriority"in n&&(Em=1,n.refreshPriority===-9999&&(Va=P)),k.tweenScroll=k.tweenScroll||{top:Pd(U,Ye),left:Pd(U,yn)},P.tweenTo=Y=k.tweenScroll[v.p],P.scrubDuration=function(gt){K=Pa(gt)&&gt,K?nt?nt.duration(gt):nt=At.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:K,paused:!0,onComplete:function(){return m&&m(P)}}):(nt&&nt.progress(1).kill(),nt=0)},i&&(i.vars.lazy=!1,i._initted&&!P.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),P.animation=i.pause(),i.scrollTrigger=P,P.scrubDuration(d),oe=0,l||(l=i.vars.id)),M&&((!Pr(M)||M.push)&&(M={snapTo:M}),"scrollBehavior"in de.style&&At.set(G?[de,Gn]:U,{scrollBehavior:"auto"}),re.forEach(function(gt){return hn(gt)&&gt.target===(G?_e.scrollingElement||Gn:U)&&(gt.smooth=!1)}),ft=hn(M.snapTo)?M.snapTo:M.snapTo==="labels"?qy(i):M.snapTo==="labelsDirectional"?$y(i):M.directional!==!1?function(gt,Bt){return Oh(M.snapTo)(gt,cn()-et<500?0:Bt.direction)}:At.utils.snap(M.snapTo),tt=M.duration||{min:.1,max:2},tt=Pr(tt)?Fa(tt.min,tt.max):Fa(tt,tt),ut=At.delayedCall(M.delay||K/2||.1,function(){var gt=lt(),Bt=cn()-et<500,Ut=Y.tween;if((Bt||Math.abs(P.getVelocity())<10)&&!Ut&&!Il&&q!==gt){var Vt=(gt-D)/y,Oe=i&&!T?i.totalProgress():Vt,jt=Bt?0:(Oe-N)/(cn()-Aa)*1e3||0,Pe=At.utils.clamp(-Vt,1-Vt,bs(jt/2)*jt/.185),Fe=Vt+(M.inertia===!1?0:Pe),we,Ee,me=M,In=me.onStart,Ae=me.onInterrupt,b=me.onComplete;if(we=ft(Fe,P),Pa(we)||(we=Fe),Ee=Math.max(0,Math.round(D+we*y)),gt<=Xt&&gt>=D&&Ee!==gt){if(Ut&&!Ut._initted&&Ut.data<=bs(Ee-gt))return;M.inertia===!1&&(Pe=we-Vt),Y(Ee,{duration:tt(bs(Math.max(bs(Fe-Oe),bs(we-Oe))*.185/jt/.05||0)),ease:M.ease||"power3",data:bs(Ee-gt),onInterrupt:function(){return ut.restart(!0)&&Ae&&Ts(P,Ae)},onComplete:function(){P.update(),q=lt(),i&&!T&&(nt?nt.resetTo("totalProgress",we,i._tTime/i._tDur):i.progress(we)),oe=N=i&&!T?i.totalProgress():P.progress,S&&S(P),b&&Ts(P,b)}},gt,Pe*y,Ee-gt-Pe*y),In&&Ts(P,In,Y.tween)}}else P.isActive&&q!==gt&&ut.restart(!0)}).pause()),l&&(Xu[l]=P),h=P.trigger=bn(h||p!==!0&&p),Ce=h&&h._gsap&&h._gsap.stRevert,Ce&&(Ce=Ce(P)),p=p===!0?h:bn(p),Bn(o)&&(o={targets:h,className:o}),p&&(_===!1||_===ni||(_=!_&&p.parentNode&&p.parentNode.style&&ii(p.parentNode).display==="flex"?!1:Ve),P.pin=p,J=At.core.getCache(p),J.spacer?X=J.pinState:(w&&(w=bn(w),w&&!w.nodeType&&(w=w.current||w.nativeElement),J.spacerIsNative=!!w,w&&(J.spacerState=Xo(w))),J.spacer=j=w||_e.createElement("div"),j.classList.add("pin-spacer"),l&&j.classList.add("pin-spacer-"+l),J.pinState=X=Xo(p)),n.force3D!==!1&&At.set(p,{force3D:!0}),P.spacer=j=J.spacer,Ht=ii(p),Et=Ht[_+v.os2],at=At.getProperty(p),_t=At.quickSetter(p,v.a,Xe),Lc(p,j,Ht),it=Xo(p)),V){Ot=Pr(V)?Ed(V,Td):Td,z=Wo("scroller-start",l,U,v,Ot,0),te=Wo("scroller-end",l,U,v,Ot,0,z),wt=z["offset"+v.op.d2];var se=bn(cr(U,"content")||U);St=this.markerStart=Wo("start",l,se,v,Ot,wt,0,E),Gt=this.markerEnd=Wo("end",l,se,v,Ot,wt,0,E),E&&(ye=At.quickSetter([St,Gt],v.a,Xe)),!Z&&!(Ti.length&&cr(U,"fixedMarkers")===!0)&&(Yy(G?de:U),At.set([z,te],{force3D:!0}),zt=At.quickSetter(z,v.a,Xe),$t=At.quickSetter(te,v.a,Xe))}if(E){var It=E.vars.onUpdate,Ct=E.vars.onUpdateParams;E.eventCallback("onUpdate",function(){P.update(0,0,1),It&&It.apply(E,Ct||[])})}if(P.previous=function(){return ne[ne.indexOf(P)-1]},P.next=function(){return ne[ne.indexOf(P)+1]},P.revert=function(gt,Bt){if(!Bt)return P.kill(!0);var Ut=gt!==!1||!P.enabled,Vt=on;Ut!==P.isReverted&&(Ut&&(dt=Math.max(lt(),P.scroll.rec||0),ht=P.progress,Kt=i&&i.progress()),St&&[St,Gt,z,te].forEach(function(Oe){return Oe.style.display=Ut?"none":"block"}),Ut&&(on=P,P.update(Ut)),p&&(!A||!P.isActive)&&(Ut?Zy(p,j,X):Lc(p,j,ii(p),Tt)),Ut||P.update(Ut),on=Vt,P.isReverted=Ut)},P.refresh=function(gt,Bt,Ut,Vt){if(!((on||!P.enabled)&&!Bt)){if(p&&gt&&oi){Qe(r,"scrollEnd",Um);return}!Sn&&ct&&ct(P),on=P,Y.tween&&!Ut&&(Y.tween.kill(),Y.tween=0),nt&&nt.pause(),g&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(ee){return ee.vars.immediateRender&&ee.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),P.isReverted||P.revert(!0,!0),P._subPinOffset=!1;var Oe=Rt(),jt=Ft(),Pe=E?E.duration():Ei(U,v),Fe=y<=.01||!y,we=0,Ee=Vt||0,me=Pr(Ut)?Ut.end:n.end,In=n.endTrigger||h,Ae=Pr(Ut)?Ut.start:n.start||(n.start===0||!h?0:p?"0 0":"0 100%"),b=P.pinnedContainer=n.pinnedContainer&&bn(n.pinnedContainer,P),F=h&&Math.max(0,ne.indexOf(P))||0,H=F,W,O,ot,xt,mt,pt,Dt,kt,Pt,le,ae,xe,je;for(V&&Pr(Ut)&&(xe=At.getProperty(z,v.p),je=At.getProperty(te,v.p));H-- >0;)pt=ne[H],pt.end||pt.refresh(0,1)||(on=P),Dt=pt.pin,Dt&&(Dt===h||Dt===p||Dt===b)&&!pt.isReverted&&(le||(le=[]),le.unshift(pt),pt.revert(!0,!0)),pt!==ne[H]&&(F--,H--);for(hn(Ae)&&(Ae=Ae(P)),Ae=xd(Ae,"start",P),D=Rd(Ae,h,Oe,v,lt(),St,z,P,jt,st,Z,Pe,E,P._startClamp&&"_startClamp")||(p?-.001:0),hn(me)&&(me=me(P)),Bn(me)&&!me.indexOf("+=")&&(~me.indexOf(" ")?me=(Bn(Ae)?Ae.split(" ")[0]:"")+me:(we=sl(me.substr(2),Oe),me=Bn(Ae)?Ae:(E?At.utils.mapRange(0,E.duration(),E.scrollTrigger.start,E.scrollTrigger.end,D):D)+we,In=h)),me=xd(me,"end",P),Xt=Math.max(D,Rd(me||(In?"100% 0":Pe),In,Oe,v,lt()+we,Gt,te,P,jt,st,Z,Pe,E,P._endClamp&&"_endClamp"))||-.001,we=0,H=F;H--;)pt=ne[H]||{},Dt=pt.pin,Dt&&pt.start-pt._pinPush<=D&&!E&&pt.end>0&&(W=pt.end-(P._startClamp?Math.max(0,pt.start):pt.start),(Dt===h&&pt.start-pt._pinPush<D||Dt===b)&&isNaN(Ae)&&(we+=W*(1-pt.progress)),Dt===p&&(Ee+=W));if(D+=we,Xt+=we,P._startClamp&&(P._startClamp+=we),P._endClamp&&!Sn&&(P._endClamp=Xt||-.001,Xt=Math.min(Xt,Ei(U,v))),y=Xt-D||(D-=.01)&&.001,Fe&&(ht=At.utils.clamp(0,1,At.utils.normalize(D,Xt,dt))),P._pinPush=Ee,St&&we&&(W={},W[v.a]="+="+we,b&&(W[v.p]="-="+lt()),At.set([St,Gt],W)),p&&!(Wu&&P.end>=Ei(U,v)))W=ii(p),xt=v===Ye,ot=lt(),Wt=parseFloat(at(v.a))+Ee,!Pe&&Xt>1&&(ae=(G?_e.scrollingElement||Gn:U).style,ae={style:ae,value:ae["overflow"+v.a.toUpperCase()]},G&&ii(de)["overflow"+v.a.toUpperCase()]!=="scroll"&&(ae.style["overflow"+v.a.toUpperCase()]="scroll")),Lc(p,j,W),it=Xo(p),O=Ni(p,!0),kt=Z&&mr(U,xt?yn:Ye)(),_?(Tt=[_+v.os2,y+Ee+Xe],Tt.t=j,H=_===Ve?bl(p,v)+y+Ee:0,H&&(Tt.push(v.d,H+Xe),j.style.flexBasis!=="auto"&&(j.style.flexBasis=H+Xe)),Xs(Tt),b&&ne.forEach(function(ee){ee.pin===b&&ee.vars.pinSpacing!==!1&&(ee._subPinOffset=!0)}),Z&&lt(dt)):(H=bl(p,v),H&&j.style.flexBasis!=="auto"&&(j.style.flexBasis=H+Xe)),Z&&(mt={top:O.top+(xt?ot-D:kt)+Xe,left:O.left+(xt?kt:ot-D)+Xe,boxSizing:"border-box",position:"fixed"},mt[Gr]=mt["max"+ia]=Math.ceil(O.width)+Xe,mt[Vr]=mt["max"+Nh]=Math.ceil(O.height)+Xe,mt[ni]=mt[ni+Ha]=mt[ni+za]=mt[ni+Ga]=mt[ni+ka]="0",mt[Ve]=W[Ve],mt[Ve+Ha]=W[Ve+Ha],mt[Ve+za]=W[Ve+za],mt[Ve+Ga]=W[Ve+Ga],mt[Ve+ka]=W[Ve+ka],Q=Qy(X,mt,A),Sn&&lt(0)),i?(Pt=i._initted,Rc(1),i.render(i.duration(),!0,!0),rt=at(v.a)-Wt+y+Ee,Mt=Math.abs(y-rt)>1,Z&&Mt&&Q.splice(Q.length-2,2),i.render(0,!0,!0),Pt||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Rc(0)):rt=y,ae&&(ae.value?ae.style["overflow"+v.a.toUpperCase()]=ae.value:ae.style.removeProperty("overflow-"+v.a));else if(h&&lt()&&!E)for(O=h.parentNode;O&&O!==de;)O._pinOffset&&(D-=O._pinOffset,Xt-=O._pinOffset),O=O.parentNode;le&&le.forEach(function(ee){return ee.revert(!1,!0)}),P.start=D,P.end=Xt,bt=yt=Sn?dt:lt(),!E&&!Sn&&(bt<dt&&lt(dt),P.scroll.rec=0),P.revert(!1,!0),et=cn(),ut&&(q=-1,ut.restart(!0)),on=0,i&&T&&(i._initted||Kt)&&i.progress()!==Kt&&i.progress(Kt||0,!0).render(i.time(),!0,!0),(Fe||ht!==P.progress||E||g||i&&!i._initted)&&(i&&!T&&(i._initted||ht||i.vars.immediateRender!==!1)&&i.totalProgress(E&&D<-.001&&!ht?At.utils.normalize(D,Xt,0):ht,!0),P.progress=Fe||(bt-D)/y===ht?0:ht),p&&_&&(j._pinOffset=Math.round(P.progress*rt)),nt&&nt.invalidate(),isNaN(xe)||(xe-=At.getProperty(z,v.p),je-=At.getProperty(te,v.p),Yo(z,v,xe),Yo(St,v,xe-(Vt||0)),Yo(te,v,je),Yo(Gt,v,je-(Vt||0))),Fe&&!Sn&&P.update(),u&&!Sn&&!R&&(R=!0,u(P),R=!1)}},P.getVelocity=function(){return(lt()-yt)/(cn()-Aa)*1e3||0},P.endAnimation=function(){Ea(P.callbackAnimation),i&&(nt?nt.progress(1):i.paused()?T||Ea(i,P.direction<0,1):Ea(i,i.reversed()))},P.labelToScroll=function(gt){return i&&i.labels&&(D||P.refresh()||D)+i.labels[gt]/i.duration()*y||0},P.getTrailing=function(gt){var Bt=ne.indexOf(P),Ut=P.direction>0?ne.slice(0,Bt).reverse():ne.slice(Bt+1);return(Bn(gt)?Ut.filter(function(Vt){return Vt.vars.preventOverlaps===gt}):Ut).filter(function(Vt){return P.direction>0?Vt.end<=D:Vt.start>=Xt})},P.update=function(gt,Bt,Ut){if(!(E&&!Ut&&!gt)){var Vt=Sn===!0?dt:P.scroll(),Oe=gt?0:(Vt-D)/y,jt=Oe<0?0:Oe>1?1:Oe||0,Pe=P.progress,Fe,we,Ee,me,In,Ae,b,F;if(Bt&&(yt=bt,bt=E?lt():Vt,M&&(N=oe,oe=i&&!T?i.totalProgress():jt)),f&&p&&!on&&!zo&&oi&&(!jt&&D<Vt+(Vt-yt)/(cn()-Aa)*f?jt=1e-4:jt===1&&Xt>Vt+(Vt-yt)/(cn()-Aa)*f&&(jt=.9999)),jt!==Pe&&P.enabled){if(Fe=P.isActive=!!jt&&jt<1,we=!!Pe&&Pe<1,Ae=Fe!==we,In=Ae||!!jt!=!!Pe,P.direction=jt>Pe?1:-1,P.progress=jt,In&&!on&&(Ee=jt&&!Pe?0:jt===1?1:Pe===1?2:3,T&&(me=!Ae&&$[Ee+1]!=="none"&&$[Ee+1]||$[Ee],F=i&&(me==="complete"||me==="reset"||me in i))),L&&(Ae||F)&&(F||d||!i)&&(hn(L)?L(P):P.getTrailing(L).forEach(function(ot){return ot.endAnimation()})),T||(nt&&!on&&!zo?(nt._dp._time-nt._start!==nt._time&&nt.render(nt._dp._time-nt._start),nt.resetTo?nt.resetTo("totalProgress",jt,i._tTime/i._tDur):(nt.vars.totalProgress=jt,nt.invalidate().restart())):i&&i.totalProgress(jt,!!(on&&(et||gt)))),p){if(gt&&_&&(j.style[_+v.os2]=Et),!Z)_t(Ca(Wt+rt*jt));else if(In){if(b=!gt&&jt>Pe&&Xt+1>Vt&&Vt+1>=Ei(U,v),A)if(!gt&&(Fe||b)){var H=Ni(p,!0),W=Vt-D;Cd(p,de,H.top+(v===Ye?W:0)+Xe,H.left+(v===Ye?0:W)+Xe)}else Cd(p,j);Xs(Fe||b?Q:it),Mt&&jt<1&&Fe||_t(Wt+(jt===1&&!b?rt:0))}}M&&!Y.tween&&!on&&!zo&&ut.restart(!0),o&&(Ae||x&&jt&&(jt<1||!Cc))&&Qa(o.targets).forEach(function(ot){return ot.classList[Fe||x?"add":"remove"](o.className)}),a&&!T&&!gt&&a(P),In&&!on?(T&&(F&&(me==="complete"?i.pause().totalProgress(1):me==="reset"?i.restart(!0).pause():me==="restart"?i.restart(!0):i[me]()),a&&a(P)),(Ae||!Cc)&&(c&&Ae&&Ts(P,c),B[Ee]&&Ts(P,B[Ee]),x&&(jt===1?P.kill(!1,1):B[Ee]=0),Ae||(Ee=jt===1?1:3,B[Ee]&&Ts(P,B[Ee]))),C&&!Fe&&Math.abs(P.getVelocity())>(Pa(C)?C:2500)&&(Ea(P.callbackAnimation),nt?nt.progress(1):Ea(i,me==="reverse"?1:!jt,1))):T&&a&&!on&&a(P)}if($t){var O=E?Vt/E.duration()*(E._caScrollDist||0):Vt;zt(O+(z._isFlipped?1:0)),$t(O)}ye&&ye(-Vt/E.duration()*(E._caScrollDist||0))}},P.enable=function(gt,Bt){P.enabled||(P.enabled=!0,Qe(U,"resize",Da),G||Qe(U,"scroll",ws),ct&&Qe(r,"refreshInit",ct),gt!==!1&&(P.progress=ht=0,bt=yt=q=lt()),Bt!==!1&&P.refresh())},P.getTween=function(gt){return gt&&Y?Y.tween:nt},P.setPositions=function(gt,Bt,Ut,Vt){if(E){var Oe=E.scrollTrigger,jt=E.duration(),Pe=Oe.end-Oe.start;gt=Oe.start+Pe*gt/jt,Bt=Oe.start+Pe*Bt/jt}P.refresh(!1,!1,{start:Sd(gt,Ut&&!!P._startClamp),end:Sd(Bt,Ut&&!!P._endClamp)},Vt),P.update()},P.adjustPinSpacing=function(gt){if(Tt&&gt){var Bt=Tt.indexOf(v.d)+1;Tt[Bt]=parseFloat(Tt[Bt])+gt+Xe,Tt[1]=parseFloat(Tt[1])+gt+Xe,Xs(Tt)}},P.disable=function(gt,Bt){if(gt!==!1&&P.revert(!0,!0),P.enabled&&(P.enabled=P.isActive=!1,Bt||nt&&nt.pause(),dt=0,J&&(J.uncache=1),ct&&Je(r,"refreshInit",ct),ut&&(ut.pause(),Y.tween&&Y.tween.kill()&&(Y.tween=0)),!G)){for(var Ut=ne.length;Ut--;)if(ne[Ut].scroller===U&&ne[Ut]!==P)return;Je(U,"resize",Da),G||Je(U,"scroll",ws)}},P.kill=function(gt,Bt){P.disable(gt,Bt),nt&&!Bt&&nt.kill(),l&&delete Xu[l];var Ut=ne.indexOf(P);Ut>=0&&ne.splice(Ut,1),Ut===xn&&ol>0&&xn--,Ut=0,ne.forEach(function(Vt){return Vt.scroller===P.scroller&&(Ut=1)}),Ut||Sn||(P.scroll.rec=0),i&&(i.scrollTrigger=null,gt&&i.revert({kill:!1}),Bt||i.kill()),St&&[St,Gt,z,te].forEach(function(Vt){return Vt.parentNode&&Vt.parentNode.removeChild(Vt)}),Va===P&&(Va=0),p&&(J&&(J.uncache=1),Ut=0,ne.forEach(function(Vt){return Vt.pin===p&&Ut++}),Ut||(J.spacer=0)),n.onKill&&n.onKill(P)},ne.push(P),P.enable(!1,!1),Ce&&Ce(P),i&&i.add&&!y){var he=P.update;P.update=function(){P.update=he,re.cache++,D||Xt||P.refresh()},At.delayedCall(.01,P.update),y=.01,D=Xt=0}else P.refresh();p&&jy()},r.register=function(n){return Ps||(At=n||Rm(),Am()&&window.document&&r.enable(),Ps=Ra),Ps},r.defaults=function(n){if(n)for(var i in n)Vo[i]=n[i];return Vo},r.disable=function(n,i){Ra=0,ne.forEach(function(a){return a[i?"kill":"disable"](n)}),Je(ie,"wheel",ws),Je(_e,"scroll",ws),clearInterval(Bo),Je(_e,"touchcancel",gi),Je(de,"touchstart",gi),Ho(Je,_e,"pointerdown,touchstart,mousedown",Md),Ho(Je,_e,"pointerup,touchend,mouseup",yd),Tl.kill(),ko(Je);for(var s=0;s<re.length;s+=3)Go(Je,re[s],re[s+1]),Go(Je,re[s],re[s+2])},r.enable=function(){if(ie=window,_e=document,Gn=_e.documentElement,de=_e.body,At){if(Qa=At.utils.toArray,Fa=At.utils.clamp,Vu=At.core.context||gi,Rc=At.core.suppressOverwrites||gi,Dh=ie.history.scrollRestoration||"auto",Yu=ie.pageYOffset||0,At.core.globals("ScrollTrigger",r),de){Ra=1,Ws=document.createElement("div"),Ws.style.height="100vh",Ws.style.position="absolute",Bm(),Vy(),ke.register(At),r.isTouch=ke.isTouch,Zi=ke.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Gu=ke.isTouch===1,Qe(ie,"wheel",ws),Ph=[ie,_e,Gn,de],At.matchMedia?(r.matchMedia=function(u){var d=At.matchMedia(),h;for(h in u)d.add(h,u[h]);return d},At.addEventListener("matchMediaInit",function(){Om(),Fh()}),At.addEventListener("matchMediaRevert",function(){return Nm()}),At.addEventListener("matchMedia",function(){Fr(0,1),jr("matchMedia")}),At.matchMedia().add("(orientation: portrait)",function(){return Dc(),Dc})):console.warn("Requires GSAP 3.11.0 or later"),Dc(),Qe(_e,"scroll",ws);var n=de.hasAttribute("style"),i=de.style,s=i.borderTopStyle,a=At.core.Animation.prototype,o,l;for(a.revert||Object.defineProperty(a,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",o=Ni(de),Ye.m=Math.round(o.top+Ye.sc())||0,yn.m=Math.round(o.left+yn.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(de.setAttribute("style",""),de.removeAttribute("style")),Bo=setInterval(bd,250),At.delayedCall(.5,function(){return zo=0}),Qe(_e,"touchcancel",gi),Qe(de,"touchstart",gi),Ho(Qe,_e,"pointerdown,touchstart,mousedown",Md),Ho(Qe,_e,"pointerup,touchend,mouseup",yd),Hu=At.utils.checkPrefix("transform"),ll.push(Hu),Ps=cn(),Tl=At.delayedCall(.2,Fr).pause(),Ds=[_e,"visibilitychange",function(){var u=ie.innerWidth,d=ie.innerHeight;_e.hidden?(gd=u,vd=d):(gd!==u||vd!==d)&&Da()},_e,"DOMContentLoaded",Fr,ie,"load",Fr,ie,"resize",Da],ko(Qe),ne.forEach(function(u){return u.enable(0,1)}),l=0;l<re.length;l+=3)Go(Je,re[l],re[l+1]),Go(Je,re[l],re[l+2])}else if(_e){var c=function u(){r.enable(),_e.removeEventListener("DOMContentLoaded",u)};_e.addEventListener("DOMContentLoaded",c)}}},r.config=function(n){"limitCallbacks"in n&&(Cc=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Bo)||(Bo=i)&&setInterval(bd,i),"ignoreMobileResize"in n&&(Gu=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(ko(Je)||ko(Qe,n.autoRefreshEvents||"none"),Tm=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=bn(n),a=re.indexOf(s),o=$r(s);~a&&re.splice(a,o?6:2),i&&(o?Ti.unshift(ie,i,de,i,Gn,i):Ti.unshift(s,i))},r.clearMatchMedia=function(n){ne.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var a=(Bn(n)?bn(n):n).getBoundingClientRect(),o=a[s?Gr:Vr]*i||0;return s?a.right-o>0&&a.left+o<ie.innerWidth:a.bottom-o>0&&a.top+o<ie.innerHeight},r.positionInViewport=function(n,i,s){Bn(n)&&(n=bn(n));var a=n.getBoundingClientRect(),o=a[s?Gr:Vr],l=i==null?o/2:i in wl?wl[i]*o:~i.indexOf("%")?parseFloat(i)*o/100:parseFloat(i)||0;return s?(a.left+l)/ie.innerWidth:(a.top+l)/ie.innerHeight},r.killAll=function(n){if(ne.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=Kr.killAll||[];Kr={},i.forEach(function(s){return s()})}},r}();Qt.version="3.15.0";Qt.saveStyles=function(r){return r?Qa(r).forEach(function(t){if(t&&t.style){var e=Fn.indexOf(t);e>=0&&Fn.splice(e,5),Fn.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),At.core.getCache(t),Vu())}}):Fn};Qt.revert=function(r,t){return Fh(!r,t)};Qt.create=function(r,t){return new Qt(r,t)};Qt.refresh=function(r){return r?Da(!0):(Ps||Qt.register())&&Fr(!0)};Qt.update=function(r){return++re.cache&&Bi(r===!0?2:0)};Qt.clearScrollMemory=Fm;Qt.maxScroll=function(r,t){return Ei(r,t?yn:Ye)};Qt.getScrollFunc=function(r,t){return mr(bn(r),t?yn:Ye)};Qt.getById=function(r){return Xu[r]};Qt.getAll=function(){return ne.filter(function(r){return r.vars.id!=="ScrollSmoother"})};Qt.isScrolling=function(){return!!oi};Qt.snapDirectional=Oh;Qt.addEventListener=function(r,t){var e=Kr[r]||(Kr[r]=[]);~e.indexOf(t)||e.push(t)};Qt.removeEventListener=function(r,t){var e=Kr[r],n=e&&e.indexOf(t);n>=0&&e.splice(n,1)};Qt.batch=function(r,t){var e=[],n={},i=t.interval||.016,s=t.batchMax||1e9,a=function(c,u){var d=[],h=[],p=At.delayedCall(i,function(){u(d,h),d=[],h=[]}).pause();return function(_){d.length||p.restart(!0),d.push(_.trigger),h.push(_),s<=d.length&&p.progress(1)}},o;for(o in t)n[o]=o.substr(0,2)==="on"&&hn(t[o])&&o!=="onRefreshInit"?a(o,t[o]):t[o];return hn(s)&&(s=s(),Qe(Qt,"refresh",function(){return s=t.batchMax()})),Qa(r).forEach(function(l){var c={};for(o in n)c[o]=n[o];c.trigger=l,e.push(Qt.create(c))}),e};var Dd=function(t,e,n,i){return e>i?t(i):e<0&&t(0),n>i?(i-e)/(n-e):n<0?e/(e-n):1},Ic=function r(t,e){e===!0?t.style.removeProperty("touch-action"):t.style.touchAction=e===!0?"auto":e?"pan-"+e+(ke.isTouch?" pinch-zoom":""):"none",t===Gn&&r(de,e)},qo={auto:1,scroll:1},eE=function(t){var e=t.event,n=t.target,i=t.axis,s=(e.changedTouches?e.changedTouches[0]:e).target,a=s._gsap||At.core.getCache(s),o=cn(),l;if(!a._isScrollT||o-a._isScrollT>2e3){for(;s&&s!==de&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(qo[(l=ii(s)).overflowY]||qo[l.overflowX]));)s=s.parentNode;a._isScroll=s&&s!==n&&!$r(s)&&(qo[(l=ii(s)).overflowY]||qo[l.overflowX]),a._isScrollT=o}(a._isScroll||i==="x")&&(e.stopPropagation(),e._gsapAllow=!0)},km=function(t,e,n,i){return ke.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:i=i&&eE,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&Qe(_e,ke.eventTypes[0],Id,!1,!0)},onDisable:function(){return Je(_e,ke.eventTypes[0],Id,!0)}})},nE=/(input|label|select|textarea)/i,Ld,Id=function(t){var e=nE.test(t.target.tagName);(e||Ld)&&(t._gsapAllow=!0,Ld=e)},iE=function(t){Pr(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var e=t,n=e.normalizeScrollX,i=e.momentum,s=e.allowNestedScroll,a=e.onRelease,o,l,c=bn(t.target)||Gn,u=At.core.globals().ScrollSmoother,d=u&&u.get(),h=Zi&&(t.content&&bn(t.content)||d&&t.content!==!1&&!d.smooth()&&d.content()),p=mr(c,Ye),_=mr(c,yn),g=1,f=(ke.isTouch&&ie.visualViewport?ie.visualViewport.scale*ie.visualViewport.width:ie.outerWidth)/ie.innerWidth,m=0,S=hn(i)?function(){return i(o)}:function(){return i||2.8},x,M,A=km(c,t.type,!0,s),w=function(){return M=!1},E=gi,C=gi,L=function(){l=Ei(c,Ye),C=Fa(Zi?1:0,l),n&&(E=Fa(0,Ei(c,yn))),x=Wr},v=function(){h._gsap.y=Ca(parseFloat(h._gsap.y)+p.offset)+"px",h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(h._gsap.y)+", 0, 1)",p.offset=p.cacheID=0},T=function(){if(M){requestAnimationFrame(w);var V=Ca(o.deltaY/2),st=C(p.v-V);if(h&&st!==p.v+p.offset){p.offset=st-p.v;var P=Ca((parseFloat(h&&h._gsap.y)||0)-p.offset);h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+P+", 0, 1)",h._gsap.y=P+"px",p.cacheID=re.cache,Bi()}return!0}p.offset&&v(),M=!0},U,k,G,Z,B=function(){L(),U.isActive()&&U.vars.scrollY>l&&(p()>l?U.progress(1)&&p(l):U.resetTo("scrollY",l))};return h&&At.set(h,{y:"+=0"}),t.ignoreCheck=function($){return Zi&&$.type==="touchmove"&&T()||g>1.05&&$.type!=="touchstart"||o.isGesturing||$.touches&&$.touches.length>1},t.onPress=function(){M=!1;var $=g;g=Ca((ie.visualViewport&&ie.visualViewport.scale||1)/f),U.pause(),$!==g&&Ic(c,g>1.01?!0:n?!1:"x"),k=_(),G=p(),L(),x=Wr},t.onRelease=t.onGestureStart=function($,V){if(p.offset&&v(),!V)Z.restart(!0);else{re.cache++;var st=S(),P,ct;n&&(P=_(),ct=P+st*.05*-$.velocityX/.227,st*=Dd(_,P,ct,Ei(c,yn)),U.vars.scrollX=E(ct)),P=p(),ct=P+st*.05*-$.velocityY/.227,st*=Dd(p,P,ct,Ei(c,Ye)),U.vars.scrollY=C(ct),U.invalidate().duration(st).play(.01),(Zi&&U.vars.scrollY>=l||P>=l-1)&&At.to({},{onUpdate:B,duration:st})}a&&a($)},t.onWheel=function(){U._ts&&U.pause(),cn()-m>1e3&&(x=0,m=cn())},t.onChange=function($,V,st,P,ct){if(Wr!==x&&L(),V&&n&&_(E(P[2]===V?k+($.startX-$.x):_()+V-P[1])),st){p.offset&&v();var Rt=ct[2]===st,Ft=Rt?G+$.startY-$.y:p()+st-ct[1],q=C(Ft);Rt&&Ft!==q&&(G+=q-Ft),p(q)}(st||V)&&Bi()},t.onEnable=function(){Ic(c,n?!1:"x"),Qt.addEventListener("refresh",B),Qe(ie,"resize",B),p.smooth&&(p.target.style.scrollBehavior="auto",p.smooth=_.smooth=!1),A.enable()},t.onDisable=function(){Ic(c,!0),Je(ie,"resize",B),Qt.removeEventListener("refresh",B),A.kill()},t.lockAxis=t.lockAxis!==!1,o=new ke(t),o.iOS=Zi,Zi&&!p()&&p(1),Zi&&At.ticker.add(gi),Z=o._dc,U=At.to(o,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:zm(p,p(),function(){return U.pause()})},onUpdate:Bi,onComplete:Z.vars.onComplete}),o};Qt.sort=function(r){if(hn(r))return ne.sort(r);var t=ie.pageYOffset||0;return Qt.getAll().forEach(function(e){return e._sortY=e.trigger?t+e.trigger.getBoundingClientRect().top:e.start+ie.innerHeight}),ne.sort(r||function(e,n){return(e.vars.refreshPriority||0)*-1e6+(e.vars.containerAnimation?1e6:e._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};Qt.observe=function(r){return new ke(r)};Qt.normalizeScroll=function(r){if(typeof r=="undefined")return vn;if(r===!0&&vn)return vn.enable();if(r===!1){vn&&vn.kill(),vn=r;return}var t=r instanceof ke?r:iE(r);return vn&&vn.target===t.target&&vn.kill(),$r(t.target)&&(vn=t),t};Qt.core={_getVelocityProp:ku,_inputObserver:km,_scrollers:re,_proxies:Ti,bridge:{ss:function(){oi||jr("scrollStart"),oi=cn()},ref:function(){return on}}};Rm()&&At.registerPlugin(Qt);var Ud="1.3.23";function Hm(r,t,e){return Math.max(r,Math.min(t,e))}function rE(r,t,e){return(1-e)*r+e*t}function sE(r,t,e,n){return rE(r,t,1-Math.exp(-e*n))}function aE(r,t){return(r%t+t)%t}var oE=class{constructor(){Lt(this,"isRunning",!1);Lt(this,"value",0);Lt(this,"from",0);Lt(this,"to",0);Lt(this,"currentTime",0);Lt(this,"lerp");Lt(this,"duration");Lt(this,"easing");Lt(this,"onUpdate")}advance(r){var e;if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=r;const n=Hm(0,this.currentTime/this.duration,1);t=n>=1;const i=t?1:this.easing(n);this.value=this.from+(this.to-this.from)*i}else this.lerp?(this.value=sE(this.value,this.to,this.lerp*60,r),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),(e=this.onUpdate)==null||e.call(this,this.value,t)}stop(){this.isRunning=!1}fromTo(r,t,{lerp:e,duration:n,easing:i,onStart:s,onUpdate:a}){this.from=this.value=r,this.to=t,this.lerp=e,this.duration=n,this.easing=i,this.currentTime=0,this.isRunning=!0,s==null||s(),this.onUpdate=a}};function lE(r,t){let e;return function(...n){clearTimeout(e),e=setTimeout(()=>{e=void 0,r.apply(this,n)},t)}}var cE=class{constructor(r,t,{autoResize:e=!0,debounce:n=250}={}){Lt(this,"width",0);Lt(this,"height",0);Lt(this,"scrollHeight",0);Lt(this,"scrollWidth",0);Lt(this,"debouncedResize");Lt(this,"wrapperResizeObserver");Lt(this,"contentResizeObserver");Lt(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Lt(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Lt(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=r,this.content=t,e&&(this.debouncedResize=lE(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var r,t;(r=this.wrapperResizeObserver)==null||r.disconnect(),(t=this.contentResizeObserver)==null||t.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},Gm=class{constructor(){Lt(this,"events",{})}emit(r,...t){var n;const e=this.events[r]||[];for(let i=0,s=e.length;i<s;i++)(n=e[i])==null||n.call(e,...t)}on(r,t){return this.events[r]?this.events[r].push(t):this.events[r]=[t],()=>{var e;this.events[r]=(e=this.events[r])==null?void 0:e.filter(n=>t!==n)}}off(r,t){var e;this.events[r]=(e=this.events[r])==null?void 0:e.filter(n=>t!==n)}destroy(){this.events={}}};const uE=100/6,ji={passive:!1};function Nd(r,t){return r===1?uE:r===2?t:1}var hE=class{constructor(r,t={wheelMultiplier:1,touchMultiplier:1}){Lt(this,"touchStart",{x:0,y:0});Lt(this,"lastDelta",{x:0,y:0});Lt(this,"window",{width:0,height:0});Lt(this,"emitter",new Gm);Lt(this,"onTouchStart",r=>{const{clientX:t,clientY:e}=r.targetTouches?r.targetTouches[0]:r;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:r})});Lt(this,"onTouchMove",r=>{const{clientX:t,clientY:e}=r.targetTouches?r.targetTouches[0]:r,n=-(t-this.touchStart.x)*this.options.touchMultiplier,i=-(e-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:n,y:i},this.emitter.emit("scroll",{deltaX:n,deltaY:i,event:r})});Lt(this,"onTouchEnd",r=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:r})});Lt(this,"onWheel",r=>{let{deltaX:t,deltaY:e,deltaMode:n}=r;const i=Nd(n,this.window.width),s=Nd(n,this.window.height);t*=i,e*=s,t*=this.options.wheelMultiplier,e*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:e,event:r})});Lt(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=r,this.options=t,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,ji),this.element.addEventListener("touchstart",this.onTouchStart,ji),this.element.addEventListener("touchmove",this.onTouchMove,ji),this.element.addEventListener("touchend",this.onTouchEnd,ji)}on(r,t){return this.emitter.on(r,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,ji),this.element.removeEventListener("touchstart",this.onTouchStart,ji),this.element.removeEventListener("touchmove",this.onTouchMove,ji),this.element.removeEventListener("touchend",this.onTouchEnd,ji)}};const Od=r=>Math.min(1,1.001-2**(-10*r));var fE=class{constructor({wrapper:r=window,content:t=document.documentElement,eventsTarget:e=r,smoothWheel:n=!0,syncTouch:i=!1,syncTouchLerp:s=.075,touchInertiaExponent:a=1.7,duration:o,easing:l,lerp:c=.1,infinite:u=!1,orientation:d="vertical",gestureOrientation:h=d==="horizontal"?"both":"vertical",touchMultiplier:p=1,wheelMultiplier:_=1,autoResize:g=!0,prevent:f,virtualScroll:m,overscroll:S=!0,autoRaf:x=!1,anchors:M=!1,autoToggle:A=!1,allowNestedScroll:w=!1,__experimental__naiveDimensions:E=!1,naiveDimensions:C=E,stopInertiaOnNavigate:L=!1}={}){Lt(this,"_isScrolling",!1);Lt(this,"_isStopped",!1);Lt(this,"_isLocked",!1);Lt(this,"_preventNextNativeScrollEvent",!1);Lt(this,"_resetVelocityTimeout",null);Lt(this,"_rafId",null);Lt(this,"isTouching");Lt(this,"time",0);Lt(this,"userData",{});Lt(this,"lastVelocity",0);Lt(this,"velocity",0);Lt(this,"direction",0);Lt(this,"options");Lt(this,"targetScroll");Lt(this,"animatedScroll");Lt(this,"animate",new oE);Lt(this,"emitter",new Gm);Lt(this,"dimensions");Lt(this,"virtualScroll");Lt(this,"onScrollEnd",r=>{r instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&r.stopPropagation()});Lt(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});Lt(this,"onTransitionEnd",r=>{var t;(t=r.propertyName)!=null&&t.includes("overflow")&&r.target===this.rootElement&&this.checkOverflow()});Lt(this,"onClick",r=>{const t=r.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.href).map(n=>new URL(n.href)),e=new URL(window.location.href);if(this.options.anchors){const n=t.find(i=>e.host===i.host&&e.pathname===i.pathname&&i.hash);if(n){const i=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,s=`#${n.hash.split("#")[1]}`;this.scrollTo(s,i);return}}if(this.options.stopInertiaOnNavigate&&t.some(n=>e.host===n.host&&e.pathname!==n.pathname)){this.reset();return}});Lt(this,"onPointerDown",r=>{r.button===1&&this.reset()});Lt(this,"onVirtualScroll",r=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(r)===!1)return;const{deltaX:t,deltaY:e,event:n}=r;if(this.emitter.emit("virtual-scroll",{deltaX:t,deltaY:e,event:n}),n.ctrlKey||n.lenisStopPropagation)return;const i=n.type.includes("touch"),s=n.type.includes("wheel");this.isTouching=n.type==="touchstart"||n.type==="touchmove";const a=t===0&&e===0;if(this.options.syncTouch&&i&&n.type==="touchstart"&&a&&!this.isStopped&&!this.isLocked){this.reset();return}const o=this.options.gestureOrientation==="vertical"&&e===0||this.options.gestureOrientation==="horizontal"&&t===0;if(a||o)return;let l=n.composedPath();l=l.slice(0,l.indexOf(this.rootElement));const c=this.options.prevent,u=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical";if(l.find(_=>{var g,f,m,S,x;return _ instanceof HTMLElement&&(typeof c=="function"&&(c==null?void 0:c(_))||((g=_.hasAttribute)==null?void 0:g.call(_,"data-lenis-prevent"))||u==="vertical"&&((f=_.hasAttribute)==null?void 0:f.call(_,"data-lenis-prevent-vertical"))||u==="horizontal"&&((m=_.hasAttribute)==null?void 0:m.call(_,"data-lenis-prevent-horizontal"))||i&&((S=_.hasAttribute)==null?void 0:S.call(_,"data-lenis-prevent-touch"))||s&&((x=_.hasAttribute)==null?void 0:x.call(_,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.hasNestedScroll(_,{deltaX:t,deltaY:e}))}))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let d=e;this.options.gestureOrientation==="both"?d=Math.abs(e)>Math.abs(t)?e:t:this.options.gestureOrientation==="horizontal"&&(d=t),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&e>0||this.animatedScroll===this.limit&&e<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();const h=i&&this.options.syncTouch,p=i&&n.type==="touchend";p&&(d=Math.sign(d)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+d,{programmatic:!1,...h?{lerp:p?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});Lt(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const r=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-r,this.direction=Math.sign(this.animatedScroll-r),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});Lt(this,"raf",r=>{const t=r-(this.time||r);this.time=r,this.animate.advance(t*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=Ud,window.lenis||(window.lenis={}),window.lenis.version=Ud,d==="horizontal"&&(window.lenis.horizontal=!0),i===!0&&(window.lenis.touch=!0),(!r||r===document.documentElement)&&(r=window),typeof o=="number"&&typeof l!="function"?l=Od:typeof l=="function"&&typeof o!="number"&&(o=1),this.options={wrapper:r,content:t,eventsTarget:e,smoothWheel:n,syncTouch:i,syncTouchLerp:s,touchInertiaExponent:a,duration:o,easing:l,lerp:c,infinite:u,gestureOrientation:h,orientation:d,touchMultiplier:p,wheelMultiplier:_,autoResize:g,prevent:f,virtualScroll:m,overscroll:S,autoRaf:x,anchors:M,autoToggle:A,allowNestedScroll:w,naiveDimensions:C,stopInertiaOnNavigate:L},this.dimensions=new cE(r,t,{autoResize:g}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new hE(e,{touchMultiplier:p,wheelMultiplier:_}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(r,t){return this.emitter.on(r,t)}off(r,t){return this.emitter.off(r,t)}get overflow(){const r=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[r]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(r){this.isHorizontal?this.options.wrapper.scrollTo({left:r,behavior:"instant"}):this.options.wrapper.scrollTo({top:r,behavior:"instant"})}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(r,{offset:t=0,immediate:e=!1,lock:n=!1,programmatic:i=!0,lerp:s=i?this.options.lerp:void 0,duration:a=i?this.options.duration:void 0,easing:o=i?this.options.easing:void 0,onStart:l,onComplete:c,force:u=!1,userData:d}={}){if((this.isStopped||this.isLocked)&&!u)return;let h=r,p=t;if(typeof h=="string"&&["top","left","start","#"].includes(h))h=0;else if(typeof h=="string"&&["bottom","right","end"].includes(h))h=this.limit;else{let _=null;if(typeof h=="string"?(_=document.querySelector(h),_||(h==="#top"?h=0:console.warn("Lenis: Target not found",h))):h instanceof HTMLElement&&(h!=null&&h.nodeType)&&(_=h),_){if(this.options.wrapper!==window){const M=this.rootElement.getBoundingClientRect();p-=this.isHorizontal?M.left:M.top}const g=_.getBoundingClientRect(),f=getComputedStyle(_),m=this.isHorizontal?Number.parseFloat(f.scrollMarginLeft):Number.parseFloat(f.scrollMarginTop),S=getComputedStyle(this.rootElement),x=this.isHorizontal?Number.parseFloat(S.scrollPaddingLeft):Number.parseFloat(S.scrollPaddingTop);h=(this.isHorizontal?g.left:g.top)+this.animatedScroll-(Number.isNaN(m)?0:m)-(Number.isNaN(x)?0:x)}}if(typeof h=="number"){if(h+=p,this.options.infinite){if(i){this.targetScroll=this.animatedScroll=this.scroll;const _=h-this.animatedScroll;_>this.limit/2?h-=this.limit:_<-this.limit/2&&(h+=this.limit)}}else h=Hm(0,h,this.limit);if(h===this.targetScroll){l==null||l(this),c==null||c(this);return}if(this.userData=d!=null?d:{},e){this.animatedScroll=this.targetScroll=h,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}i||(this.targetScroll=h),typeof a=="number"&&typeof o!="function"?o=Od:typeof o=="function"&&typeof a!="number"&&(a=1),this.animate.fromTo(this.animatedScroll,h,{duration:a,easing:o,lerp:s,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",l==null||l(this)},onUpdate:(_,g)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=_-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=_,this.setScroll(this.scroll),i&&(this.targetScroll=_),g||this.emit(),g&&(this.reset(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(r,{deltaX:t,deltaY:e}){var w;const n=Date.now();r._lenis||(r._lenis={});const i=r._lenis;let s,a,o,l,c,u,d,h,p,_;if(n-((w=i.time)!=null?w:0)>2e3){i.time=Date.now();const E=window.getComputedStyle(r);if(i.computedStyle=E,s=["auto","overlay","scroll"].includes(E.overflowX),a=["auto","overlay","scroll"].includes(E.overflowY),c=["auto"].includes(E.overscrollBehaviorX),u=["auto"].includes(E.overscrollBehaviorY),i.hasOverflowX=s,i.hasOverflowY=a,!(s||a))return!1;d=r.scrollWidth,h=r.scrollHeight,p=r.clientWidth,_=r.clientHeight,o=d>p,l=h>_,i.isScrollableX=o,i.isScrollableY=l,i.scrollWidth=d,i.scrollHeight=h,i.clientWidth=p,i.clientHeight=_,i.hasOverscrollBehaviorX=c,i.hasOverscrollBehaviorY=u}else o=i.isScrollableX,l=i.isScrollableY,s=i.hasOverflowX,a=i.hasOverflowY,d=i.scrollWidth,h=i.scrollHeight,p=i.clientWidth,_=i.clientHeight,c=i.hasOverscrollBehaviorX,u=i.hasOverscrollBehaviorY;if(!(s&&o||a&&l))return!1;const g=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical";let f,m,S,x,M,A;if(g==="horizontal")f=Math.round(r.scrollLeft),m=d-p,S=t,x=s,M=o,A=c;else if(g==="vertical")f=Math.round(r.scrollTop),m=h-_,S=e,x=a,M=l,A=u;else return!1;return!A&&(f>=m||f<=0)?!0:(S>0?f<m:f>0)&&x&&M}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){var t,e;const r=this.options.wrapper;return this.isHorizontal?(t=r.scrollX)!=null?t:r.scrollLeft:(e=r.scrollY)!=null?e:r.scrollTop}get scroll(){return this.options.infinite?aE(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(r){this._isScrolling!==r&&(this._isScrolling=r,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(r){this._isStopped!==r&&(this._isStopped=r,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(r){this._isLocked!==r&&(this._isLocked=r,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let r="lenis";return this.options.autoToggle&&(r+=" lenis-autoToggle"),this.isStopped&&(r+=" lenis-stopped"),this.isLocked&&(r+=" lenis-locked"),this.isScrolling&&(r+=" lenis-scrolling"),this.isScrolling==="smooth"&&(r+=" lenis-smooth"),r}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(r=>{this.rootElement.classList.add(r)})}cleanUpClassName(){for(const r of Array.from(this.rootElement.classList))(r==="lenis"||r.startsWith("lenis-"))&&this.rootElement.classList.remove(r)}};ce.registerPlugin(Qt);const dE=[{id:"before",label:"Problem"},{id:"workflow",label:"Workflow"},{id:"methodology",label:"Method"},{id:"risk-map",label:"Risk Map"},{id:"findings",label:"Fixes"},{id:"impact",label:"Impact"},{id:"team",label:"Team"},{id:"cta",label:"Try Fibula"}];function pE(r){const{cam:t,subject:e,rain:n}=r,i=Y=>document.querySelector(Y),s=Y=>Array.from(document.querySelectorAll(Y)),a=new fE({duration:1.15});a.on("scroll",Qt.update),ce.ticker.add(Y=>a.raf(Y*1e3)),ce.ticker.lagSmoothing(0),s(".split-chars").forEach(Y=>Cy(Y)),s("#workflow, #methodology, #risk-map, #findings, #impact, #team").forEach(Y=>{ce.set(Y.querySelectorAll(".stage-title .char"),{yPercent:120,autoAlpha:0}),ce.set(Y.querySelectorAll(".eyebrow, .stage-body"),{autoAlpha:0,y:24})}),ce.set(".wf-card",{xPercent:-50,autoAlpha:0,y:90,rotationX:7,transformPerspective:800}),ce.set(".wf-progress-num",{autoAlpha:0,y:10});const l=s(".ev-card");ce.set(l,{autoAlpha:0,scale:1.45,y:-130,rotation:Y=>[-14,10,-9][Y],transformOrigin:"50% 0%"}),ce.set(l[1],{xPercent:-50,x:0}),ce.set(".method-stats",{xPercent:-50,x:0,autoAlpha:0,y:44});const c=s(".risk-beat");ce.set(c,{autoAlpha:0}),c.forEach(Y=>{ce.set(Y.querySelectorAll(".risk-quote .char"),{autoAlpha:0,y:36}),ce.set(Y.querySelector(".risk-card"),{autoAlpha:0,x:90})}),ce.set(".journey",{autoAlpha:0}),ce.set(".fix-card",{autoAlpha:0,x:-100,yPercent:-50}),ce.set(".relight",{xPercent:-50,yPercent:-50,autoAlpha:0,scale:.85}),ce.set(".impact-left",{autoAlpha:0,x:-120,rotationY:9,transformPerspective:900}),ce.set(".impact-right",{autoAlpha:0,x:120,rotationY:-9,transformPerspective:900});const u=s(".member-card");(()=>{const J=i("#team .stage-shell").getBoundingClientRect();u.forEach((ft,bt)=>{const yt=ft.getBoundingClientRect(),D=J.left+J.width/2-(yt.left+yt.width/2),Xt=J.top+J.height*.42-(yt.top+yt.height/2);ce.set(ft,{x:D,y:Xt,scale:.1,autoAlpha:0,rotation:[-18,12,-9,15,-12][bt%5]})})})(),ce.set(".students-label",{autoAlpha:0}),ce.set(".mentors-block",{autoAlpha:0,y:46}),ce.set(".mentor-card",{autoAlpha:0,y:22}),ce.set(".logos li",{autoAlpha:0,y:26}),ce.set("#cta .eyebrow, #cta .cta-body",{autoAlpha:0,y:30}),ce.set("#cta .stage-title .char",{yPercent:120,autoAlpha:0}),ce.set("#cta .btn",{autoAlpha:0,y:38,scale:.92}),ce.set("#act-converge .converge-line .char",{autoAlpha:0,y:42}),ce.set("#act-converge .converge-sub",{autoAlpha:0});const h={};function p(Y,J){const ft=ce.timeline({defaults:{ease:"power2.out"},scrollTrigger:{trigger:Y,start:"top top",end:()=>"+="+Math.round(window.innerHeight*J/100),pin:!0,scrub:!0,anticipatePin:1,invalidateOnRefresh:!0}});return h[Y.slice(1)]=ft.scrollTrigger,ft}function _(Y,J,ft=0){const bt=i(J),yt=bt.querySelector(".eyebrow"),D=bt.querySelector(".stage-body");yt&&Y.to(yt,{autoAlpha:1,y:0,duration:.4},ft),Y.to(bt.querySelectorAll(".stage-title .char"),{yPercent:0,autoAlpha:1,duration:.7,stagger:.012,ease:"power3.out"},ft+.05),D&&Y.to(D,{autoAlpha:1,y:0,duration:.5},ft+.3)}function g(Y,J,ft,bt=0,yt=1.2){const D=e.layouts[J],Xt=e.layouts[ft];Y.fromTo(e.hubPos,{x:St=>D.hubs[St][0],y:St=>D.hubs[St][1],z:St=>D.hubs[St][2]},{x:St=>Xt.hubs[St][0],y:St=>Xt.hubs[St][1],z:St=>Xt.hubs[St][2],duration:yt,ease:"power2.inOut",immediateRender:!1},bt),Y.fromTo(e.satPos,{x:St=>D.sats[St][0],y:St=>D.sats[St][1],z:St=>D.sats[St][2]},{x:St=>Xt.sats[St][0],y:St=>Xt.sats[St][1],z:St=>Xt.sats[St][2],duration:yt*.85,ease:"power3.inOut",immediateRender:!1,stagger:{each:yt*.012,from:"random"}},bt)}const f=(Y,J,ft,bt,yt,D)=>{Y.fromTo(m(J),{draw:ft},{draw:bt,immediateRender:!1,...yt},D)},m=Y=>Y.map(J=>J.tube),S=s("#before .hero-headline .char");ce.timeline({delay:.2,defaults:{ease:"power3.out"}}).from("#topnav",{y:-28,autoAlpha:0,duration:.7},0).from("#before .kicker",{autoAlpha:0,y:18,duration:.6},.15).fromTo(S,{y:()=>-(220+Math.random()*420),rotation:()=>(Math.random()-.5)*56,autoAlpha:0},{y:0,rotation:0,autoAlpha:1,duration:1.05,ease:"back.out(1.1)",stagger:{each:.015,from:"random"}},.3).from("#before .hero-body",{autoAlpha:0,y:30,duration:.7},1.25).from("#before .scroll-hint",{autoAlpha:0,duration:.6},1.55),p("#before",110).to(S,{y:()=>-(130+Math.random()*330),rotation:()=>(Math.random()-.5)*44,autoAlpha:0,duration:1,ease:"power2.in",stagger:{each:.01,from:"random"}},0).to("#before .kicker, #before .hero-body, #before .scroll-hint",{autoAlpha:0,y:-44,duration:.6},0).to(t,{z:14.6,duration:1.2,ease:"power1.inOut"},0),p("#act-converge",170).to(n.params,{gather:1,duration:1.6,ease:"power2.inOut"},0).to(t,{z:13.2,duration:2.2,ease:"power1.inOut"},0).to("#act-converge .converge-line .char",{autoAlpha:1,y:0,duration:.5,stagger:.02,ease:"power3.out"},.15).to("#act-converge .converge-sub",{autoAlpha:1,duration:.4},.55).to(e.params,{scale:1,duration:.7,ease:"back.out(1.4)"},.9).to(e.hubScale,{v:1,duration:.5,ease:"back.out(2.2)",stagger:.1},1).fromTo(m(e.chain),{draw:0},{draw:1,duration:.55,stagger:.18,ease:"power2.inOut",immediateRender:!1},1.2).fromTo(e.satScl,{v:0},{v:1,duration:.4,ease:"back.out(2)",stagger:{each:.012,from:"random"},immediateRender:!1},1.3).fromTo(m(e.spokes),{draw:0},{draw:1,duration:.5,stagger:.012,immediateRender:!1},1.45).to(e.params,{labelAlpha:1,particleAlpha:.95,duration:.4},1.85).to("#act-converge .converge-line .char",{autoAlpha:0,y:-30,duration:.35,stagger:.008},2.05).to("#act-converge .converge-sub",{autoAlpha:0,duration:.3},2.1);const w=[-4.2,-1.4,1.4,4.2],E=s(".wf-card"),C=s(".wf-progress-num"),L=p("#workflow",300);_(L,"#workflow",0),L.fromTo(n.params,{ambient:0},{ambient:.85,duration:1,immediateRender:!1},0);for(let Y=0;Y<4;Y++){const J=.7+Y*2;L.to(t,{x:w[Y]*.55,tx:w[Y]*.8,z:12.2,duration:.9,ease:"power2.inOut"},J),L.to(e.hubActive[Y],{v:1,duration:.35},J+.15),L.to(E[Y],{autoAlpha:1,y:0,rotationX:0,duration:.55,ease:"power3.out"},J+.25),L.to(C[Y],{autoAlpha:1,y:0,duration:.25},J+.25),Y>0&&(L.to(E[Y-1],{autoAlpha:0,y:-70,duration:.4,ease:"power2.in"},J),L.to(e.hubActive[Y-1],{v:0,duration:.3},J),L.to(C[Y-1],{autoAlpha:0,y:-10,duration:.2},J))}L.to(t,{x:0,tx:0,z:12.8,duration:.9,ease:"power2.inOut"},8.9),L.to(E[3],{autoAlpha:0,y:-70,duration:.4},8.9),L.to(e.hubActive[3],{v:0,duration:.3},8.9),L.to(C[3],{autoAlpha:0,duration:.2},8.9);const v=p("#methodology",270);_(v,"#methodology",0),g(v,"workflow","method",.2,1.3),v.to(e.params,{flowSpeed:.45,duration:.8},.2),f(v,e.threads,0,1,{duration:.7,stagger:.05},1);const T=[1.5,3.1,4.7],U=[-2,1.5,-1.2];l.forEach((Y,J)=>{v.to(Y,{autoAlpha:1,scale:1,y:0,rotation:U[J],duration:.6,ease:"back.out(1.9)"},T[J])}),v.to(".method-stats",{autoAlpha:1,y:0,duration:.5},6.1),s(".stat-num").forEach(Y=>{const J=+Y.dataset.count,ft=Y.dataset.suffix||"",bt={v:0};v.to(bt,{v:J,duration:.9,ease:"power1.out",onUpdate:()=>{Y.textContent=Math.round(bt.v)+ft}},6.2)});const k=c.map(Y=>Y.querySelector(".risk-card")),G=s(".journey-stop"),Z=s(".journey-dot"),B=p("#risk-map",380);_(B,"#risk-map",0),g(B,"method","risk",.2,1.1),f(B,e.threads,1,0,{duration:.5,stagger:.02},.2),B.to(e.params,{flowSpeed:.25,duration:.6},.3),B.to(".journey",{autoAlpha:1,duration:.4},.5),e.chain.forEach(Y=>{B.fromTo(Y.tube.mat.emissive,{r:As.r,g:As.g,b:As.b},{r:1,g:.62,b:.1,duration:1.2,immediateRender:!1},.4)});const $=[-.9,-.3,.1,.7,1.1];for(let Y=0;Y<5;Y++){const J=1.1+Y*2,ft=c[Y];Y>0&&B.to(c[Y-1],{autoAlpha:0,duration:.3,ease:"power1.in"},J-.2),B.to(ft,{autoAlpha:1,duration:.15},J),B.to(ft.querySelectorAll(".risk-quote .char"),{autoAlpha:1,y:0,duration:.4,stagger:.008,ease:"power3.out"},J+.05),B.to(k[Y],{autoAlpha:1,x:0,duration:.5,ease:"power3.out"},J+.35),B.fromTo(e.branches[Y].tube,{draw:0},{draw:1,duration:.5,ease:"power3.out",immediateRender:!1},J+.1),B.fromTo(e.flares[Y].state,{v:0},{v:1,duration:.4,ease:"back.out(2.5)",immediateRender:!1},J+.1),B.to(e.params,{jitter:.55,duration:.12},J+.08).to(e.params,{jitter:.14,duration:.5},J+.26),B.to(Z[Y],{backgroundColor:"#ffc000",boxShadow:"0 0 12px rgba(255,192,0,0.95)",duration:.2},J+.1),B.to(G[Y],{color:"rgb(1,61,124)",duration:.2},J+.1),B.to("#vignette",{opacity:.14+Y*.09,duration:.4},J+.2),B.to(t,{x:$[Y],duration:.8,ease:"power2.inOut"},J)}const V=s(".fix-card"),st=[[0,1],[2],[3,4]],P=p("#findings",290);_(P,"#findings",0),P.to(c[4],{autoAlpha:0,duration:.4},0),P.to(".journey",{autoAlpha:0,duration:.4},0),P.to(t,{x:0,duration:1,ease:"power2.inOut"},.2),g(P,"risk","workflow",.5,4.2),P.to(e.params,{jitter:0,duration:2},1);const ct=[.8,2.6,4.4];for(let Y=0;Y<3;Y++){const J=ct[Y];Y>0&&P.to(V[Y-1],{autoAlpha:0,x:-70,duration:.35},J-.15),P.to(V[Y],{autoAlpha:1,x:0,duration:.5,ease:"power3.out"},J),st[Y].forEach((ft,bt)=>{const yt=J+.4+bt*.3;P.to(e.pulses[ft],{on:1,duration:.08},yt).fromTo(e.pulses[ft],{t:0},{t:1,duration:.4,ease:"power1.in",immediateRender:!1},yt).to(e.pulses[ft],{on:0,duration:.15},yt+.42),P.fromTo(e.branches[ft].tube,{draw:1},{draw:0,duration:.45,ease:"power2.in",immediateRender:!1},yt),P.fromTo(e.flares[ft].sprite.material.color,{r:1,g:192/255,b:0},{r:.38,g:.74,b:.95,duration:.3,immediateRender:!1},yt),P.fromTo(e.flares[ft].state,{v:1},{v:0,duration:.35,immediateRender:!1},yt+.12)})}e.chain.forEach(Y=>{P.fromTo(Y.tube.mat.emissive,{r:1,g:.62,b:.1},{r:As.r,g:As.g,b:As.b,duration:1.4,immediateRender:!1},3.2)}),P.fromTo("#vignette",{opacity:.5},{opacity:0,duration:.8,immediateRender:!1},3.4),P.to(V[2],{autoAlpha:0,x:-70,duration:.35},6),P.to(".relight",{autoAlpha:1,scale:1,duration:.5,ease:"back.out(1.6)"},6.2),P.to(e.runner,{on:1,duration:.1},6.3).to(e.runner,{t:1,duration:.7,ease:"power1.inOut"},6.35).to(e.runner,{on:0,duration:.15},7.05),P.to(e.params,{flowSpeed:1.7,particleAlpha:1,duration:.5},6.4).to(e.params,{flowSpeed:1.15,duration:.6},7.1);const Rt=p("#impact",240);_(Rt,"#impact",0),Rt.to(".relight",{autoAlpha:0,duration:.3},0),g(Rt,"workflow","impact",.3,1.4),f(Rt,e.chain,1,0,{duration:.6},.3),f(Rt,e.spokes,1,0,{duration:.7,stagger:.008},.3),Rt.fromTo(e.params,{particleAlpha:1,labelAlpha:1},{particleAlpha:0,flowSpeed:.6,labelAlpha:0,duration:.6,immediateRender:!1},.35),f(Rt,e.arcs,0,1,{duration:.5,stagger:.015},1.3),Rt.to(t,{z:11.8,ty:.62,duration:1.2,ease:"power1.inOut"},.3),Rt.to(".impact-left",{autoAlpha:1,x:0,rotationY:0,duration:.6,ease:"power3.out"},2.3),Rt.to(".impact-right",{autoAlpha:1,x:0,rotationY:0,duration:.6,ease:"power3.out"},3.5),Rt.to(e.stamp,{a:.85,duration:.1},4.6).to(e.stamp,{s:1.7,duration:.5,ease:"power2.out"},4.62).to(e.stamp,{a:0,duration:.35},4.85),Rt.to(e.params,{glowBoost:.5,duration:.2},4.6).to(e.params,{glowBoost:0,duration:.5},4.9);const Ft=p("#team",310);_(Ft,"#team",0),f(Ft,e.arcs,1,0,{duration:.6,stagger:.01},.5),g(Ft,"impact","bloom",.5,1.5),Ft.fromTo(e.satScl,{v:1},{v:0,duration:.5,stagger:{each:.02,from:"random"},immediateRender:!1},1.3),Ft.fromTo(e.group.position,{y:0,z:0},{y:1.5,z:-2.6,duration:1.2,ease:"power2.inOut",immediateRender:!1},.6),Ft.fromTo(e.params,{scale:1},{scale:.55,duration:1.2,immediateRender:!1},.6),Ft.to(".students-label",{autoAlpha:1,duration:.3},1.2),u.forEach((Y,J)=>{Ft.to(Y,{x:0,y:0,scale:1,rotation:0,autoAlpha:1,duration:.75,ease:"back.out(1.25)"},1.4+J*.55)}),Ft.to(".mentors-block",{autoAlpha:1,y:0,duration:.6,ease:"power1.out"},4.7),Ft.to(".mentor-card",{autoAlpha:1,y:0,duration:.6,stagger:.18,ease:"power1.out"},4.9),Ft.to(".logos li",{autoAlpha:1,y:0,duration:.5,stagger:.12},5.7);const q=p("#cta",170);q.fromTo(e.group.position,{y:1.5,z:-2.6},{y:1.15,z:0,duration:1.2,ease:"power2.inOut",immediateRender:!1},0),q.fromTo(e.params,{scale:.55},{scale:.3,glowBoost:.25,duration:1.2,immediateRender:!1},0),q.to(e.group.rotation,{y:1.4,duration:2.4,ease:"none"},0),q.fromTo(n.params,{ambient:.85},{ambient:0,duration:1,immediateRender:!1},0),q.to(t,{x:0,z:13.5,ty:.5,duration:1.2,ease:"power1.inOut"},0),q.to("#cta .eyebrow",{autoAlpha:1,y:0,duration:.4},.3),q.to("#cta .stage-title .char",{yPercent:0,autoAlpha:1,duration:.6,stagger:.012,ease:"power3.out"},.4),q.to("#cta .cta-body",{autoAlpha:1,y:0,duration:.5},.8),q.to("#cta .btn",{autoAlpha:1,y:0,scale:1,duration:.5,stagger:.12,ease:"back.out(1.7)"},1.05);const et=document.getElementById("dots");dE.forEach(({id:Y,label:J})=>{const ft=document.createElement("button");ft.className="dot",ft.setAttribute("aria-label",J),ft.innerHTML=`<span class="dot-tip">${J}</span>`,ft.addEventListener("click",()=>lt(Y)),et.appendChild(ft);const bt=h[Y]?h[Y].trigger:document.getElementById(Y);Qt.create({trigger:bt,start:"top center",end:"bottom center",onToggle:yt=>ft.classList.toggle("active",yt.isActive)})});const ht={"act-converge":.3,workflow:.16,methodology:.16,"risk-map":.13,findings:.14,impact:.24,team:.3,cta:.62};function lt(Y){var bt;if(Y==="before"){a.scrollTo(0,{duration:1.4});return}const J=h[Y],ft=J?J.start+(J.end-J.start)*(ht[Y]||.15):((bt=document.getElementById(Y))==null?void 0:bt.offsetTop)||0;a.scrollTo(ft,{duration:1.5})}return document.addEventListener("click",Y=>{const J=Y.target.closest('a[href^="#"]');if(!J)return;Y.preventDefault();const ft=J.getAttribute("href").slice(1);history.replaceState(null,"","#"+ft),lt(ft)}),window.addEventListener("load",()=>{if(Qt.refresh(),location.hash.length>1){const Y=location.hash.slice(1);requestAnimationFrame(()=>{const J=h[Y];J&&a.scrollTo(J.start+(J.end-J.start)*(ht[Y]||.15),{immediate:!0})})}}),{lenis:a,scrollToSection:lt}}const As={r:98/255,g:188/255,b:241/255};function mE(){const r=document.createElement("canvas");r.width=r.height=128;const t=r.getContext("2d"),e=t.createImageData(128,128);for(let c=0;c<e.data.length;c+=4){const u=Math.random()*255;e.data[c]=e.data[c+1]=e.data[c+2]=u,e.data[c+3]=26}t.putImageData(e,0,0);const n=document.getElementById("grain");if(n.style.backgroundImage=`url(${r.toDataURL()})`,n.style.backgroundRepeat="repeat",!window.matchMedia("(pointer: fine)").matches)return;const i=document.getElementById("cursor"),s=i.querySelector(".cursor-dot"),a=i.querySelector(".cursor-ring"),o={x:innerWidth/2,y:innerHeight/2},l={x:o.x,y:o.y};window.addEventListener("mousemove",c=>{o.x=c.clientX,o.y=c.clientY,s.style.transform=`translate3d(${o.x}px, ${o.y}px, 0)`}),ce.ticker.add(()=>{l.x+=(o.x-l.x)*.16,l.y+=(o.y-l.y)*.16,a.style.transform=`translate3d(${l.x}px, ${l.y}px, 0)`}),document.addEventListener("mouseover",c=>{c.target.closest("a, button")&&i.classList.add("hovering")}),document.addEventListener("mouseout",c=>{c.target.closest("a, button")&&i.classList.remove("hovering")}),document.querySelectorAll(".magnetic").forEach(c=>{c.addEventListener("mousemove",u=>{const d=c.getBoundingClientRect(),h=u.clientX-(d.left+d.width/2),p=u.clientY-(d.top+d.height/2);ce.to(c,{x:h*.28,y:p*.34,duration:.4,ease:"power2.out"})}),c.addEventListener("mouseleave",()=>{ce.to(c,{x:0,y:0,duration:.7,ease:"elastic.out(1, 0.4)"})})})}function gE(){const r=new By(document.getElementById("gl"));pE(r),mE(),ce.ticker.add(r.render)}export{gE as init};
