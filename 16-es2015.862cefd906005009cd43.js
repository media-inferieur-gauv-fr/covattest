(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{Q4p2:function(n,t,i){"use strict";i.r(t),i.d(t,"SlidesModule",function(){return p});var e=i("ofXK"),o=i("TEn/"),s=i("tyNb"),a=i("mrSG"),r=i("kiQV"),c=i("fXoL"),g=i("2hsb"),b=i("gZKt");function l(n,t){1&n&&(c.Pb(0,"div",1),c.Lb(1,"img",11),c.Pb(2,"p"),c.mc(3,"Enregistrer le raccourcis sur "),c.Lb(4,"br"),c.mc(5," l'\xe9cran d'accueil avec Safari"),c.Ob(),c.Pb(6,"p"),c.Lb(7,"img",12),c.Ob(),c.Pb(8,"p"),c.Lb(9,"img",13),c.Ob(),c.Pb(10,"p"),c.Lb(11,"img",14),c.Ob(),c.Ob())}function d(n,t){1&n&&(c.Pb(0,"div",1),c.Lb(1,"img",15),c.Pb(2,"p"),c.mc(3,"Enregistrer le raccourcis sur l'\xe9cran d'accueil"),c.Ob(),c.Pb(4,"p"),c.Lb(5,"img",16),c.Ob(),c.Pb(6,"p"),c.Lb(7,"img",17),c.Ob(),c.Pb(8,"p"),c.Lb(9,"img",18),c.Ob(),c.Ob())}const O=[{path:"",component:(()=>{class n{constructor(n,t,i,e){this._router=n,this._storage=t,this._platform=i,this.loading=e,this.checkOs=null,this.version=r.a}ngOnInit(){return Object(a.a)(this,void 0,void 0,function*(){yield this._platform.ready(),this.checkOs=!!/iPhone|iPad|iPod/i.test(navigator.userAgent)})}ionViewDidEnter(){this.loading.hide()}start(){this._storage.saveLocal("intro","1"),this._router.navigateByUrl("settings")}}return n.\u0275fac=function(t){return new(t||n)(c.Kb(s.e),c.Kb(g.a),c.Kb(o.I),c.Kb(b.a))},n.\u0275cmp=c.Eb({type:n,selectors:[["app-slides"]],decls:63,vars:3,consts:[["fullscreen","","scroll-y","false","color","secondary",1,"ion-padding"],[1,"slide"],["src","assets/images/intro/img-intro01.png",1,"intro"],[1,"arrow"],["class","slide",4,"ngIf","ngIfElse"],["elseBlock",""],["src","assets/images/intro/img-intro02.png",1,"intro"],["src","assets/images/intro/img-intro03.png",1,"intro"],["fill","clear","color","danger","fill","solid","size","large",3,"click"],["slot","end","name","arrow-forward"],["clas","version"],["src","assets/images/intro/safari.png",1,"oslogo"],["src","assets/images/intro/ios1.png","alt","Safari",1,"os"],["src","assets/images/intro/ios2.png","alt","Safari",1,"os"],["src","assets/images/intro/ios3.png","alt","Safari",1,"os"],["src","assets/images/intro/android.png",1,"oslogo"],["src","assets/images/intro/android1.png","alt","Android",1,"os"],["src","assets/images/intro/android2.png","alt","Android",1,"os"],["src","assets/images/intro/android3.png","alt","Android",1,"os"]],template:function(n,t){if(1&n&&(c.Pb(0,"ion-content",0),c.Pb(1,"ion-slides"),c.Pb(2,"ion-slide"),c.Pb(3,"div",1),c.Lb(4,"img",2),c.Pb(5,"h2"),c.mc(6,"Bienvenue sur "),c.Pb(7,"b"),c.Lb(8,"br"),c.mc(9,"CovAttest"),c.Ob(),c.Ob(),c.Pb(10,"p"),c.mc(11,"La libert\xe9 dans la poche..."),c.Ob(),c.Ob(),c.Pb(12,"div",3),c.Lb(13,"span"),c.Lb(14,"span"),c.Lb(15,"span"),c.Ob(),c.Ob(),c.Pb(16,"ion-slide"),c.Pb(17,"ion-header"),c.Pb(18,"h1"),c.mc(19,"Etape 1"),c.Ob(),c.Ob(),c.Pb(20,"ion-text"),c.kc(21,l,12,0,"div",4),c.kc(22,d,10,0,"ng-template",null,5,c.lc),c.Ob(),c.Pb(24,"div",3),c.Lb(25,"span"),c.Lb(26,"span"),c.Lb(27,"span"),c.Ob(),c.Ob(),c.Pb(28,"ion-slide"),c.Pb(29,"ion-header"),c.Pb(30,"h1"),c.mc(31,"Etape 2"),c.Ob(),c.Ob(),c.Pb(32,"div",1),c.Lb(33,"img",6),c.Pb(34,"p"),c.mc(35,"Ouvrir l'app nouvellement install\xe9e "),c.Ob(),c.Pb(36,"p"),c.mc(37,"Remplir ces informations la premi\xe8re fois."),c.Ob(),c.Ob(),c.Pb(38,"div",3),c.Lb(39,"span"),c.Lb(40,"span"),c.Lb(41,"span"),c.Ob(),c.Ob(),c.Pb(42,"ion-slide"),c.Pb(43,"ion-header"),c.Pb(44,"h1"),c.mc(45,"Voila c'est fini !"),c.Ob(),c.Ob(),c.Pb(46,"div",1),c.Lb(47,"img",7),c.Pb(48,"p"),c.Pb(49,"b"),c.mc(50,"Votre Attestation"),c.Ob(),c.Lb(51,"br"),c.mc(52," est d\xe9j\xe0 pr\xeate. "),c.Ob(),c.Pb(53,"p"),c.mc(54," Choisissez, "),c.Lb(55,"br"),c.mc(56," Pr\xe9senter! "),c.Ob(),c.Ob(),c.Pb(57,"ion-button",8),c.Xb("click",function(){return t.start()}),c.mc(58,"D\xe9marrer"),c.Lb(59,"ion-icon",9),c.Ob(),c.Ob(),c.Ob(),c.Ob(),c.Pb(60,"ion-footer"),c.Pb(61,"ion-text",10),c.mc(62),c.Ob(),c.Ob()),2&n){const n=c.fc(23);c.zb(21),c.cc("ngIf",t.checkOs)("ngIfElse",n),c.zb(41),c.nc("Version ",t.version,"")}},directives:[o.i,o.x,o.w,o.l,o.B,e.j,o.b,o.m,o.j],styles:["ion-content[_ngcontent-%COMP%]   ion-slides[_ngcontent-%COMP%]{height:100%}ion-content[_ngcontent-%COMP%]   ion-slides[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]{position:relative;display:block;text-align:center;justify-content:space-around}ion-content[_ngcontent-%COMP%]   ion-slides[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin-top:0}ion-content[_ngcontent-%COMP%]   ion-slides[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{position:absolute;margin:20% 10% 0 0;align-items:center;bottom:7%;left:26.5vw}ion-content[_ngcontent-%COMP%]   ion-slides[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]{height:62vh;display:flex;flex-direction:column;justify-content:space-around;align-items:center}ion-content[_ngcontent-%COMP%]   ion-slides[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   img.intro[_ngcontent-%COMP%]{max-height:50%;width:60%}ion-content[_ngcontent-%COMP%]   ion-slides[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   img.oslogo[_ngcontent-%COMP%]{max-width:120px;max-height:120px}ion-content[_ngcontent-%COMP%]   ion-slides[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   img.os[_ngcontent-%COMP%]{max-height:44px}ion-content[_ngcontent-%COMP%]   ion-slides[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:10px 10%}ion-content[_ngcontent-%COMP%]   ion-slides[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%]{position:absolute;margin:20% 10% 0 0;left:55%;bottom:10%;transform:translate(-50%,-50%);transform:rotate(90deg)}ion-content[_ngcontent-%COMP%]   ion-slides[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block;width:20px;height:20px;border-bottom:3px solid #fff;border-right:3px solid #fff;transform:rotate(45deg);margin:-10px;-webkit-animation:animate 2s infinite;animation:animate 2s infinite}ion-content[_ngcontent-%COMP%]   ion-slides[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2){-webkit-animation-delay:-.2s;animation-delay:-.2s}ion-content[_ngcontent-%COMP%]   ion-slides[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3){-webkit-animation-delay:-.4s;animation-delay:-.4s}@-webkit-keyframes animate{0%{opacity:0;transform:rotate(45deg) translate(-20px,-20px)}50%{opacity:1}to{opacity:0;transform:rotate(45deg) translate(20px,20px)}}@keyframes animate{0%{opacity:0;transform:rotate(45deg) translate(-20px,-20px)}50%{opacity:1}to{opacity:0;transform:rotate(45deg) translate(20px,20px)}}ion-footer[_ngcontent-%COMP%]{text-align:right}ion-footer[_ngcontent-%COMP%]   ion-text[_ngcontent-%COMP%]{margin:0 7% 0 0}"]}),n})()}];let P=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=c.Ib({type:n}),n.\u0275inj=c.Hb({imports:[[s.g.forChild(O)],s.g]}),n})(),p=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=c.Ib({type:n}),n.\u0275inj=c.Hb({imports:[[e.b,o.E,P]]}),n})()},kiQV:function(n){n.exports=JSON.parse('{"a":"2.1.1"}')}}]);