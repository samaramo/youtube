var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

(function(){var e=this;function f(a){a=a.split(".");for(var b=e,c;c=a.shift();)if(null!=b[c])b=b[c];else return null;return b}function g(a,b,c){return a.call.apply(a.bind,arguments)}function k(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}
function l(a,b,c){l=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?g:k;return l.apply(null,arguments)}var m=Date.now||function(){return+new Date};function n(a,b){var c=a.split("."),d=e;c[0]in d||!d.execScript||d.execScript("var "+c[0]);for(var h;c.length&&(h=c.shift());)c.length||void 0===b?d[h]?d=d[h]:d=d[h]={}:d[h]=b}
Function.prototype.bind=Function.prototype.bind||function(a,b){if(1<arguments.length){var c=Array.prototype.slice.call(arguments,1);c.unshift(this,a);return l.apply(null,c)}return l(this,a)};function p(){this.f=this.f;this.k=this.k}p.prototype.f=!1;p.prototype.dispose=function(){this.f||(this.f=!0,this.l())};p.prototype.l=function(){if(this.k)for(;this.k.length;)this.k.shift()()};function t(){p.call(this);this.c=[];this.c[3]=[];this.c[2]=[];this.c[1]=[];this.c[0]=[];this.d={};this.h=t.c;this.o=this.j=0;this.m=this.n=!1;this.e=[];this.r=l(this.t,this)}(function(){var a=t;function b(){}b.prototype=p.prototype;a.v=p.prototype;a.prototype=new b;a.base=function(a,b,h){for(var q=Array(arguments.length-2),r=2;r<arguments.length;r++)q[r-2]=arguments[r];return p.prototype[b].apply(a,q)}})();t.h="hidden";t.e=1E3/60;t.d=3;t.c=t.e-t.d;
function u(a,b,c){++a.o;var d=a.o;a.d[d]=b;a.n?a.e.push({id:d,priority:c}):(a.c[c].push(d),a.m||a.start());return d}function v(a){a.e.length=0;for(var b=3;0<=b;b--)a.c[b].length=0;a.d={};a.stop()}function w(a){try{a()}catch(b){(a=f("yt.www.errors.log"))&&a(b)}}
t.prototype.t=function(){this.stop();this.n=!0;for(var a=m()+this.h,b=this.c[3];b.length;){var c=this.d[b.shift()];c&&w(c)}for(b=2;0<=b;b--){for(var c=a,d=this.c[b];d.length&&m()<c;){var h=d.shift(),q=this.d[h];delete this.d[h];q&&w(q)}if(!(m()<c))break}this.n=!1;b=0;for(c=this.e.length;b<c;b++)d=this.e[b],this.c[d.priority].push(d.id);this.h=t.c;(a<=m()||this.e.length)&&this.start();this.e.length=0};t.prototype.start=function(){this.m=!1;0==this.j&&(this.j=window.setTimeout(this.r,1))};
t.prototype.pause=function(){this.stop();this.m=!0};t.prototype.stop=function(){window.clearTimeout(this.j);this.j=0};t.prototype.l=function(){v(this);this.stop();t.v.l.call(this)};function x(){var a=f("yt.scheduler.instance.instance_");if(!a||a.f)a=new t,n("yt.scheduler.instance.instance_",a);return a}function y(){var a=f("yt.scheduler.instance.instance_");a&&(a&&"function"==typeof a.dispose&&a.dispose(),n("yt.scheduler.instance.instance_",null))}function z(){v(x())}var A=f("yt.scheduler.instance.timerIdMap_")||{};function B(a,b,c){if(0==c)return-u(x(),a,b);var d=window.setTimeout(function(){var c=u(x(),a,b);A[d]=c},c);return d}
function C(a){var b=x(),c=m();w(a);a=m()-c;b.h-=a}function D(a){var b=x();if(0>a)delete b.d[-a];else{var c=A[a];c?(delete b.d[c],delete A[a]):window.clearTimeout(a)}}function E(){x().start()}function F(){x().pause()};function G(){}G.getInstance=function(){return G.c?G.c:G.c=new G};G.prototype.addTask=function(a){return B(a,2,0)};G.prototype.cancelTask=function(a){D(a)};if(!f("yt.scheduler.initialized")){n("yt.scheduler.instance.dispose",y);n("yt.scheduler.instance.addJob",B);n("yt.scheduler.instance.addImmediateJob",C);n("yt.scheduler.instance.cancelJob",D);n("yt.scheduler.instance.cancelAllJobs",z);n("yt.scheduler.instance.start",E);n("yt.scheduler.instance.pause",F);n("yt.scheduler.SpfScheduler.instance",G.getInstance());var H=G.getInstance(),I=G.getInstance().addTask;H.addTask=I;var J=G.getInstance(),K=G.getInstance().cancelTask;J.cancelTask=K;n("yt.scheduler.initialized",
!0)};})();


}
/*
     FILE ARCHIVED ON 22:14:38 Mar 04, 2015 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 08:56:47 Dec 01, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.535
  exclusion.robots: 0.013
  exclusion.robots.policy: 0.006
  esindex: 0.008
  cdx.remote: 6.849
  LoadShardBlock: 126.849 (6)
  PetaboxLoader3.datanode: 147.751 (8)
  load_resource: 197.819 (2)
  PetaboxLoader3.resolve: 153.931 (2)
*/