!function(){function n(n,t){for(var e=0;e<t.length;e++){var o=t[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}function t(n,t,e,o,r,i,c){try{var a=n[i](c),u=a.value}catch(s){return void e(s)}a.done?t(u):Promise.resolve(u).then(o,r)}function e(n){return function(){var e=this,o=arguments;return new Promise(function(r,i){var c=n.apply(e,o);function a(n){t(c,r,i,a,u,"next",n)}function u(n){t(c,r,i,a,u,"throw",n)}a(void 0)})}}(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"74mu":function(n,t,o){"use strict";o.d(t,"a",function(){return i}),o.d(t,"b",function(){return c}),o.d(t,"c",function(){return r}),o.d(t,"d",function(){return u});var r=function(n,t){return null!==t.closest(n)},i=function(n,t){return"string"==typeof n&&n.length>0?Object.assign((e={"ion-color":!0},o="ion-color-".concat(n),r=!0,o in e?Object.defineProperty(e,o,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[o]=r,e),t):t;var e,o,r},c=function(n){var t={};return function(n){return void 0!==n?(Array.isArray(n)?n:n.split(" ")).filter(function(n){return null!=n}).map(function(n){return n.trim()}).filter(function(n){return""!==n}):[]}(n).forEach(function(n){return t[n]=!0}),t},a=/^[a-z][a-z0-9+\-.]*:/,u=function(){var n=e(regeneratorRuntime.mark(function n(t,e,o,r){var i;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(null==t||"#"===t[0]||a.test(t)){n.next=4;break}if(!(i=document.querySelector("ion-router"))){n.next=4;break}return n.abrupt("return",(null!=e&&e.preventDefault(),i.push(t,o,r)));case 4:return n.abrupt("return",!1);case 5:case"end":return n.stop()}},n)}));return function(t,e,o,r){return n.apply(this,arguments)}}()},JbSX:function(n,t,e){"use strict";e.d(t,"a",function(){return c});var o=e("wEJo"),r=e("qULd"),i=e("iWo5"),c=function(n,t){var e,c,a=function(n,o,r){if("undefined"!=typeof document){var i=document.elementFromPoint(n,o);i&&t(i)?i!==e&&(s(),u(i,r)):s()}},u=function(n,t){e=n,c||(c=e);var r=e;Object(o.f)(function(){return r.classList.add("ion-activated")}),t()},s=function(){var n=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e){var t=e;Object(o.f)(function(){return t.classList.remove("ion-activated")}),n&&c!==e&&e.click(),e=void 0}};return Object(i.createGesture)({el:n,gestureName:"buttonActiveDrag",threshold:0,onStart:function(n){return a(n.currentX,n.currentY,r.a)},onMove:function(n){return a(n.currentX,n.currentY,r.b)},onEnd:function(){s(!0),Object(r.e)(),c=void 0}})}},acej:function(n,t,o){"use strict";o.d(t,"a",function(){return i}),o.d(t,"b",function(){return c});var r=o("1vRN"),i=function(){var n=e(regeneratorRuntime.mark(function n(t,e,o,i,c){var a;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(!t){n.next=2;break}return n.abrupt("return",t.attachViewToDom(e,o,c,i));case 2:if("string"==typeof o||o instanceof HTMLElement){n.next=4;break}throw new Error("framework delegate is missing");case 4:return a="string"==typeof o?e.ownerDocument&&e.ownerDocument.createElement(o):o,i&&i.forEach(function(n){return a.classList.add(n)}),c&&Object.assign(a,c),e.appendChild(a),n.next=10,new Promise(function(n){return Object(r.c)(a,n)});case 10:return n.abrupt("return",a);case 11:case"end":return n.stop()}},n)}));return function(t,e,o,r,i){return n.apply(this,arguments)}}(),c=function(n,t){if(t){if(n)return n.removeViewFromDom(t.parentElement,t);t.remove()}return Promise.resolve()}},gotE:function(t,e,o){"use strict";o.d(e,"a",function(){return l});var r=o("fXoL"),i=o("gZKt"),c=o("TEn/"),a=o("ofXK");function u(n,t){1&n&&(r.Pb(0,"ion-label",9),r.Pb(1,"a",10),r.mc(2,"Contact"),r.Ob(),r.Ob())}function s(n,t){if(1&n){var e=r.Qb();r.Pb(0,"ion-buttons",6),r.Pb(1,"ion-button",7),r.Xb("click",function(){return r.hc(e),r.Zb().closeModal()}),r.Pb(2,"p"),r.mc(3,"Fermer"),r.Ob(),r.Ob(),r.kc(4,u,3,0,"ion-label",8),r.Ob()}if(2&n){var o=r.Zb();r.zb(4),r.cc("ngIf",o.button)}}var l=function(){var t=function(){function t(n,e){!function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.loading=n,this.modalController=e}var e,o,r;return e=t,(o=[{key:"ngOnInit",value:function(){this.loading.hide()}},{key:"closeModal",value:function(){this.modalController.dismiss({dismissed:!0})}}])&&n(e.prototype,o),r&&n(e,r),t}();return t.\u0275fac=function(n){return new(n||t)(r.Kb(i.a),r.Kb(c.G))},t.\u0275cmp=r.Eb({type:t,selectors:[["app-desktop"]],inputs:{button:"button"},decls:77,vars:1,consts:[[1,"ion-page"],["slot","start",4,"ngIf"],["id","colorTitle"],["id","blue"],["id","red"],["src","./assets/images/wait.jpg","alt","Resistance"],["slot","start"],[3,"click"],["class","ion-text-end",4,"ngIf"],[1,"ion-text-end"],["href","mailto:daniel@oisg.org"]],template:function(n,t){1&n&&(r.Pb(0,"title"),r.mc(1,"attestation-couvre-feu-covid-19"),r.Ob(),r.Pb(2,"div",0),r.kc(3,s,5,1,"ion-buttons",1),r.Pb(4,"ion-content"),r.Pb(5,"ion-header"),r.Pb(6,"ion-toolbar"),r.Pb(7,"ion-title"),r.Pb(8,"div",2),r.Pb(9,"p",3),r.mc(10,"media."),r.Ob(),r.Pb(11,"p"),r.mc(12,"inf\xe9rieur."),r.Ob(),r.Pb(13,"p",4),r.mc(14,"gauv.fr"),r.Ob(),r.Ob(),r.Ob(),r.Ob(),r.Ob(),r.Pb(15,"ion-card"),r.Pb(16,"p"),r.mc(17,"Merci de revenir avec un mobile"),r.Ob(),r.Ob(),r.Pb(18,"ion-card"),r.Pb(19,"section"),r.Lb(20,"img",5),r.Ob(),r.Ob(),r.Pb(21,"ion-card"),r.Pb(22,"section"),r.Pb(23,"h1"),r.mc(24,"Covattest"),r.Ob(),r.Pb(25,"p"),r.mc(26,"Cette application vous permet de pr\xe9senter une attestation de d\xe9placement"),r.Ob(),r.Pb(27,"p"),r.mc(28,"\xe0 n'importe quel moment \xe0 toutes personnes n'aillant pas compris"),r.Ob(),r.Pb(29,"p"),r.mc(30,"que vous \xeates dehors pour vivre."),r.Ob(),r.Lb(31,"br"),r.Pb(32,"p"),r.mc(33,"Cette attestation permet aux forces de l'ordre"),r.Ob(),r.Pb(34,"p"),r.mc(35,"de savoir que le virus est au courant que vous ne sortez pas pour rien!"),r.Ob(),r.Ob(),r.Pb(36,"section"),r.Pb(37,"p"),r.mc(38,"Vous pouvez installer cette simple page web comme"),r.Ob(),r.Pb(39,"p"),r.mc(40,"une application en suivant les \xe9tapes du petit tutoriel de d\xe9marrage."),r.Ob(),r.Ob(),r.Pb(41,"section"),r.Pb(42,"h1"),r.mc(43,"Attention !"),r.Ob(),r.Pb(44,"p"),r.mc(45,"Cette attestation est \xe0 utiliser \xe0 vos risques et p\xe9rils"),r.Ob(),r.Pb(46,"p"),r.mc(47,"Nous ne serions \xeatre tenu responsable d'une verbalisation"),r.Ob(),r.Pb(48,"p"),r.mc(49,"ou tout autre dommage quel qu\u2019il soit de vous ou tout mat\xe9riel en votre possession."),r.Ob(),r.Ob(),r.Pb(50,"section"),r.Pb(51,"h1"),r.mc(52,"Respect de la vie priv\xe9e"),r.Ob(),r.Pb(53,"p"),r.mc(54,"Contrairement \xe0 d'autres applications plus officielles!"),r.Ob(),r.Pb(55,"p"),r.mc(56,"Covattest ne conserve aucune donn\xe9e personnelle sur ces serveurs car il n'y a pas de serveur!"),r.Ob(),r.Pb(57,"p"),r.mc(58,"Toutes les informations sont crypt\xe9es avant d'\xeatre enregistr\xe9es sont sur votre t\xe9l\xe9phone !"),r.Ob(),r.Pb(59,"p"),r.mc(60,"Si vous d\xe9sinstaller l'application tout est supprim\xe9."),r.Ob(),r.Ob(),r.Ob(),r.Ob(),r.Pb(61,"ion-footer"),r.Pb(62,"ion-toolbar"),r.Pb(63,"ul"),r.Pb(64,"li"),r.Pb(65,"p"),r.mc(66,"Gratuit"),r.Ob(),r.Ob(),r.Pb(67,"li"),r.Pb(68,"p"),r.mc(69,"Amusant"),r.Ob(),r.Ob(),r.Pb(70,"li"),r.Pb(71,"p"),r.mc(72,"Unique"),r.Ob(),r.Ob(),r.Pb(73,"li"),r.Pb(74,"p"),r.mc(75,"Virale"),r.Ob(),r.Ob(),r.Ob(),r.Ob(),r.Ob(),r.Lb(76,"div"),r.Ob()),2&n&&(r.zb(3),r.cc("ngIf",t.button))},directives:[a.j,c.i,c.l,c.D,c.C,c.d,c.j,c.c,c.b,c.p],styles:['h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{color:#f0f8ff;text-align:center}#colorTitle[_ngcontent-%COMP%]{justify-content:center;display:flex;flex-direction:row;flex-wrap:wrap}#colorTitle[_ngcontent-%COMP%]   #blue[_ngcontent-%COMP%]{color:#00f}#colorTitle[_ngcontent-%COMP%]   #red[_ngcontent-%COMP%]{color:red}ion-buttons[_ngcontent-%COMP%]{display:flex;justify-content:space-between}ion-content[_ngcontent-%COMP%]{margin-top:15px}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]{margin:15px auto;max-width:80%;display:flex;flex-direction:column;justify-content:center}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin:20px}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{text-overflow:ellipsis}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]{text-align:center}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:auto;font-size:1em}ion-footer[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{color:#c8d9e8;display:flex;flex-direction:row;flex-wrap:wrap}ion-footer[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{list-style:none}ion-footer[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:after{margin:10px;content:" "}']}),t}()},h3R7:function(n,t,e){"use strict";e.d(t,"a",function(){return o});var o={bubbles:{dur:1e3,circles:9,fn:function(n,t,e){var o=n*t/e-n+"ms",r=2*Math.PI*t/e;return{r:5,style:{top:9*Math.sin(r)+"px",left:9*Math.cos(r)+"px","animation-delay":o}}}},circles:{dur:1e3,circles:8,fn:function(n,t,e){var o=t/e,r=n*o-n+"ms",i=2*Math.PI*o;return{r:5,style:{top:9*Math.sin(i)+"px",left:9*Math.cos(i)+"px","animation-delay":r}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:function(){return{r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}}}},crescent:{dur:750,circles:1,fn:function(){return{r:26,style:{}}}},dots:{dur:750,circles:3,fn:function(n,t){return{r:6,style:{left:9-9*t+"px","animation-delay":-110*t+"ms"}}}},lines:{dur:1e3,lines:12,fn:function(n,t,e){return{y1:17,y2:29,style:{transform:"rotate(".concat(30*t+(t<6?180:-180),"deg)"),"animation-delay":n*t/e-n+"ms"}}}},"lines-small":{dur:1e3,lines:12,fn:function(n,t,e){return{y1:12,y2:20,style:{transform:"rotate(".concat(30*t+(t<6?180:-180),"deg)"),"animation-delay":n*t/e-n+"ms"}}}}}},qULd:function(n,t,e){"use strict";e.d(t,"a",function(){return i}),e.d(t,"b",function(){return c}),e.d(t,"c",function(){return r}),e.d(t,"d",function(){return u}),e.d(t,"e",function(){return a});var o={getEngine:function(){var n=window;return n.TapticEngine||n.Capacitor&&n.Capacitor.isPluginAvailable("Haptics")&&n.Capacitor.Plugins.Haptics},available:function(){return!!this.getEngine()},isCordova:function(){return!!window.TapticEngine},isCapacitor:function(){return!!window.Capacitor},impact:function(n){var t=this.getEngine();if(t){var e=this.isCapacitor()?n.style.toUpperCase():n.style;t.impact({style:e})}},notification:function(n){var t=this.getEngine();if(t){var e=this.isCapacitor()?n.style.toUpperCase():n.style;t.notification({style:e})}},selection:function(){this.impact({style:"light"})},selectionStart:function(){var n=this.getEngine();n&&(this.isCapacitor()?n.selectionStart():n.gestureSelectionStart())},selectionChanged:function(){var n=this.getEngine();n&&(this.isCapacitor()?n.selectionChanged():n.gestureSelectionChanged())},selectionEnd:function(){var n=this.getEngine();n&&(this.isCapacitor()?n.selectionEnd():n.gestureSelectionEnd())}},r=function(){o.selection()},i=function(){o.selectionStart()},c=function(){o.selectionChanged()},a=function(){o.selectionEnd()},u=function(n){o.impact(n)}}}])}();