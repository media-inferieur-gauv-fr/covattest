!function(){function t(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,a=!1,i=void 0;try{for(var o,s=t[Symbol.iterator]();!(r=(o=s.next()).done)&&(n.push(o.value),!e||n.length!==e);r=!0);}catch(c){a=!0,i=c}finally{try{r||null==s.return||s.return()}finally{if(a)throw i}}return n}(t,n)||function(t,n){if(!t)return;if("string"==typeof t)return e(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return e(t,n)}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function a(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{gxxk:function(e,r,i){"use strict";i.d(r,"a",function(){return C});var o,s,c=i("mrSG"),l=i("fXoL"),u=i("TEn/"),d=i("gZKt"),b=i("ogpO"),f=i("0hV+"),h=((o=function(){function t(e,r,a){n(this,t),this.modalCtrl=e,this.loadingService=r,this.varGlobal=a,this.qrcodewitdh=.9*window.screen.availWidth,this.qrCodeData=null}return a(t,[{key:"ngOnInit",value:function(){this.qrCodeData="Cree le : "+this.toDayFr+" a "+this.timeBackH+";\nNom : "+this.varGlobal.setting.lastname+";\nPrenom: "+this.varGlobal.setting.firstname+";\nNaissance: "+this.dateOfBirthFrLong+" a "+this.varGlobal.setting.cityofbird+";\nAdresse: "+this.varGlobal.setting.adress+" "+this.varGlobal.setting.zipcode+" "+this.varGlobal.setting.city+" ;\nSortie: "+this.toDayFr+" a "+this.timeBackColon+";\nMotifs: "+this.activityName,this.loadingService.hide()}},{key:"pageRendered",value:function(t){this.loadingService.hide()}},{key:"closeModal",value:function(){this.modalCtrl.dismiss({dismissed:!0})}}]),t}()).\u0275fac=function(t){return new(t||o)(l.Kb(u.G),l.Kb(d.a),l.Kb(b.a))},o.\u0275cmp=l.Eb({type:o,selectors:[["app-attestation-tap"]],inputs:{activityName:"activityName",data:"data",dateOfBirth:"dateOfBirth",dateOfBirthFrLong:"dateOfBirthFrLong",toDayFr:"toDayFr",toDayFrLong:"toDayFrLong",timeBackT:"timeBackT",timeBackH:"timeBackH",timeBackColon:"timeBackColon"},decls:25,vars:16,consts:[["slot","start"],[3,"click"],["id","group"],[1,"qrcodeImg",3,"width","qrdata","margin","elementType"],["id","informations"]],template:function(t,e){1&t&&(l.Pb(0,"section"),l.Pb(1,"ion-buttons",0),l.Pb(2,"ion-button",1),l.Xb("click",function(){return e.closeModal()}),l.mc(3,"Fermer"),l.Ob(),l.Ob(),l.Pb(4,"ion-content"),l.Pb(5,"div",2),l.Pb(6,"div"),l.Lb(7,"qrcode",3),l.Ob(),l.Pb(8,"div",4),l.Pb(9,"p"),l.mc(10),l.Lb(11,"br"),l.mc(12),l.Lb(13,"br"),l.mc(14),l.Lb(15,"br"),l.mc(16),l.Lb(17,"br"),l.mc(18),l.Lb(19,"br"),l.mc(20),l.Lb(21,"br"),l.mc(22),l.Lb(23,"br"),l.mc(24),l.Ob(),l.Ob(),l.Ob(),l.Ob(),l.Ob()),2&t&&(l.zb(7),l.cc("width",e.qrcodewitdh)("qrdata",e.qrCodeData)("margin",1)("elementType","img"),l.zb(3),l.oc(" Cr\xe9\xe9 le ",e.toDayFrLong," \xe0 ",e.timeBackColon,""),l.zb(2),l.nc(" Nom : ",e.varGlobal.setting.lastname,""),l.zb(2),l.nc(" Pr\xe9nom : ",e.varGlobal.setting.firstname,""),l.zb(2),l.oc(" Naissance : ",e.dateOfBirthFrLong," \xe0 ",e.varGlobal.setting.cityofbird,""),l.zb(2),l.nc(" Adresse : ",e.varGlobal.setting.adress,""),l.zb(2),l.oc("",e.varGlobal.setting.zipcode," ",e.varGlobal.setting.city,""),l.zb(2),l.oc(" Sortie : ",e.toDayFrLong," \xe0 ",e.timeBackColon,""),l.zb(2),l.nc(" Code motif: ",e.activityName," "))},directives:[u.c,u.b,u.i,f.a],styles:["section[_ngcontent-%COMP%]{font-size:1em;height:100vh}section[_ngcontent-%COMP%]   ion-buttons[_ngcontent-%COMP%]{margin:5% 0 0}section[_ngcontent-%COMP%]   ion-buttons[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{font-size:.9em;color:#f0f8ff;text-transform:none}section[_ngcontent-%COMP%]   ion-content[_ngcontent-%COMP%]   #group[_ngcontent-%COMP%]{margin-top:5%;display:flex;flex-wrap:nowrap;flex-direction:column;justify-content:flex-start;text-align:center}section[_ngcontent-%COMP%]   ion-content[_ngcontent-%COMP%]   #group[_ngcontent-%COMP%]   #informations[_ngcontent-%COMP%]{margin:auto;color:#f0f8ff;text-align:center;max-width:90%}"]}),o),g=i("IkSl"),m=((s=function(){function t(e,r){n(this,t),this.modalCtrl=e,this.loadingService=r}return a(t,[{key:"ngOnInit",value:function(){return Object(c.a)(this,void 0,void 0,regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}},t)}))}},{key:"pageRendered",value:function(t){this.loadingService.hide()}},{key:"closeModal",value:function(){this.modalCtrl.dismiss({dismissed:!0})}}]),t}()).\u0275fac=function(t){return new(t||s)(l.Kb(u.G),l.Kb(d.a))},s.\u0275cmp=l.Eb({type:s,selectors:[["attestationPdf"]],inputs:{pdfUrl:"pdfUrl"},decls:4,vars:5,consts:[[1,"ion-page"],["color","black",3,"click"],["size","large","name","close-circle-outline"],[3,"src","render-text","show-all","original-size","autoresize","page-rendered"]],template:function(t,e){1&t&&(l.Pb(0,"div",0),l.Pb(1,"ion-buttons",1),l.Xb("click",function(){return e.closeModal()}),l.Lb(2,"ion-icon",2),l.Ob(),l.Pb(3,"pdf-viewer",3),l.Xb("page-rendered",function(t){return e.pageRendered(t)}),l.Ob(),l.Ob()),2&t&&(l.zb(3),l.cc("src",e.pdfUrl)("render-text",!1)("show-all",!0)("original-size",!1)("autoresize",!0))},directives:[u.c,u.m,g.a],styles:[".ion-page[_ngcontent-%COMP%]{background-color:#dedcdc}.ion-page[_ngcontent-%COMP%]   ion-buttons[_ngcontent-%COMP%]{font-size:large;position:absolute;color:transparent}.ion-page[_ngcontent-%COMP%]   ion-buttons[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:grey}.ion-page[_ngcontent-%COMP%]   pdf-viewer[_ngcontent-%COMP%]{display:block;height:100vh}"]}),s);i("gcOT");var p,v,y,k=i("ofXK"),O=i("OvJz"),P=((v=function(){function e(t,r,a,i,o){n(this,e),this._varGlobal=t,this.modalCtrl=r,this._datePipe=a,this._timeBackPipe=i,this.loading=o,this.toDay=new Date}return a(e,[{key:"modifyPdf",value:function(e,n){return Object(c.a)(this,void 0,void 0,regeneratorRuntime.mark(function r(){var a,o,s,c,l,u,d,b,f,h,g,p,v,y,k,O,P,_,w,C,G,M,x,B,D,F,S,L,z,T=this;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,i.e(14).then(i.bind(null,"4Zil")).then(function(t){return{PDFDocument:t.PDFDocument,StandardFonts:t.StandardFonts}});case 2:return a=r.sent,o=n<20?"./assets/pdf/curfew-certificate.40bf5adf.pdf":"./assets/pdf/quarantine-certificate.1f118cea.pdf",r.next=6,fetch(o).then(function(t){return t.arrayBuffer()});case 6:return s=r.sent,c=e,r.next=10,a.PDFDocument.load(s);case 10:return l=r.sent,r.next=13,l.embedPdf(c);case 13:return u=r.sent,d=t(u,1),b=d[0],r.next=18,l.embedFont(a.StandardFonts.Helvetica);case 18:f=r.sent,h=l.getPageCount(),l.getPages()[0].getSize(),l.setTitle("COVID-19 - D\xe9claration de d\xe9placement"),g=73,p=l.getPage(0),v=b.scale(.3),y=b.scale(1.1),k=function(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:11;T.page.drawText(t,{x:e,y:n,size:r,font:f})},n<20?(this.page=p,p.drawPage(b,Object.assign(Object.assign({},v),{x:p.getWidth()-v.width+60,y:p.getHeight()-v.height-660})),(O=l.addPage()).drawPage(b,Object.assign(Object.assign({},y),{x:O.getWidth()-y.width+80,y:O.getHeight()-y.height-50})),P=this._varGlobal.setting.firstname+" "+this._varGlobal.setting.lastname,_=this._varGlobal.setting.adress+" "+this._varGlobal.setting.zipcode+" "+this._varGlobal.setting.city,w=this._datePipe.transform(this._varGlobal.setting.dateOfBirth,"dd/MM/yyyy").toString(),k(P,148,704),k(w,148,684),k(this._varGlobal.setting.cityofbird,311,684),k(_,152,667),k("Fait \xe0 ",73,113),k(this._varGlobal.setting.city,106,113),k("Le "+this._datePipe.transform(this.toDay,"dd/MM/yyyy"),73,94),k("\xe0 "+this._timeBackPipe.transform(this._varGlobal.setting.timeback,2),311,94),k("(Date et heure de d\xe9but de sortie \xe0 mentionner obligatoirement)",73,78)):(C=l.getPage(h-1),this.page=p,C.drawPage(b,Object.assign(Object.assign({},v),{x:C.getWidth()-v.width+60,y:C.getHeight()-v.height-660})),(G=l.addPage()).drawPage(b,Object.assign(Object.assign({},y),{x:G.getWidth()-y.width+80,y:G.getHeight()-y.height-50})),M=this._varGlobal.setting.firstname+" "+this._varGlobal.setting.lastname,x=this._varGlobal.setting.adress+" "+this._varGlobal.setting.zipcode+" "+this._varGlobal.setting.city,B=this._datePipe.transform(this._varGlobal.setting.dateOfBirth,"dd/MM/yyyy").toString(),k(M,110,516),k(B,110,501),k(this._varGlobal.setting.cityofbird,220,501),k(x,127,488),this.page=C,k("Fait \xe0 ",73,113),k(this._varGlobal.setting.city,106,113),k("Le "+this._datePipe.transform(this.toDay,"dd/MM/yyyy"),73,94),k("\xe0 "+this._timeBackPipe.transform(this._varGlobal.setting.timeback,2),311,94),k("(Date et heure de d\xe9but de sortie \xe0 mentionner obligatoirement)",73,78)),D=null,r.t0=n,r.next=1===r.t0?28:2===r.t0?30:3===r.t0?32:4===r.t0?34:5===r.t0?36:6===r.t0?38:7===r.t0?40:8===r.t0?42:9===r.t0?44:10===r.t0?46:11===r.t0?48:12===r.t0?50:21===r.t0?52:22===r.t0?54:23===r.t0?56:24===r.t0?58:25===r.t0?60:26===r.t0?62:27===r.t0?64:28===r.t0?66:29===r.t0?68:30===r.t0?70:31===r.t0?72:32===r.t0?74:75;break;case 28:return D=505,r.abrupt("break",75);case 30:return D=471,r.abrupt("break",75);case 32:return D=437,r.abrupt("break",75);case 34:return D=404,r.abrupt("break",75);case 36:return D=383,r.abrupt("break",75);case 38:return D=338,r.abrupt("break",75);case 40:return D=305,r.abrupt("break",75);case 42:return D=270,r.abrupt("break",75);case 44:return D=230,r.abrupt("break",75);case 46:return D=185,r.abrupt("break",75);case 48:return D=115,r.abrupt("break",75);case 50:return D=70,r.abrupt("break",75);case 52:return D=292,r.abrupt("break",75);case 54:return D=170,r.abrupt("break",75);case 56:return D=86,r.abrupt("break",75);case 58:return D=707,r.abrupt("break",75);case 60:return D=650,r.abrupt("break",75);case 62:return D=554,r.abrupt("break",75);case 64:return D=458,r.abrupt("break",75);case 66:return D=403,r.abrupt("break",75);case 68:return D=349,r.abrupt("break",75);case 70:return D=307,r.abrupt("break",75);case 72:return D=239,r.abrupt("break",75);case 74:D=170;case 75:return n>20&&n<=23?(g=60,this.page=p,k("x",g,75+D,12)):k("x",n>23?g=60:g,75+D,12),r.next=78,l.save();case 78:return F=r.sent,S=new Blob([F],{type:"application/pdf"}),L=window.URL.createObjectURL(S),r.next=83,this.modalCtrl.create({component:m,cssClass:"my-custom-class",keyboardClose:!0,componentProps:{pdfUrl:L}});case 83:return z=r.sent,r.next=86,z.present();case 86:return r.abrupt("return",r.sent);case 87:case"end":return r.stop()}},r,this)}))}}]),e}()).\u0275fac=function(t){return new(t||v)(l.Tb(b.a),l.Tb(u.G),l.Tb(k.d),l.Tb(O.a),l.Tb(d.a))},v.\u0275prov=l.Gb({token:v,factory:v.\u0275fac,providedIn:"root"}),v),_=((p=function(){function t(e,r,a,i){n(this,t),this._pdflib=e,this.loadingController=r,this.loading=a,this._varGlobal=i,this.pdfMake=null,this.qrCodeData=null}return a(t,[{key:"ngOnInit",value:function(){return Object(c.a)(this,void 0,void 0,regeneratorRuntime.mark(function t(){var e,n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(this.pdfMake){t.next=8;break}return t.next=3,i.e(4).then(i.t.bind(null,"5JmO",7));case 3:return e=t.sent,t.next=6,i.e(79).then(i.t.bind(null,"TruH",7));case 6:n=t.sent,this.pdfMake=e.default,this.pdfMake.vfs=n.default.pdfMake.vfs;case 8:case"end":return t.stop()}},t,this)}))}},{key:"generatePdf",value:function(t,e,n){return Object(c.a)(this,void 0,void 0,regeneratorRuntime.mark(function r(){var a,o,s=this;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(a={content:[{qr:"Cree le : "+n.toDayFr+" a "+n.timeBackH+";\nNom : "+this._varGlobal.setting.lastname+";\nPrenom: "+this._varGlobal.setting.firstname+";\nNaissance: "+n.dateOfBirth+" a "+this._varGlobal.setting.cityofbird+";\nAdresse: "+this._varGlobal.setting.adress+" "+this._varGlobal.setting.zipcode+" "+this._varGlobal.setting.city+" ;\nSortie: "+n.toDayFr+" a "+n.timeBackColon+";\nMotifs: "+e+";"}]},this.pdfMake){r.next=6;break}return r.next=4,i.e(4).then(i.t.bind(null,"5JmO",7));case 4:o=r.sent,this.pdfMake=o.default;case 6:this.pdfMake.createPdf(a).getBase64(function(e){s._pdflib.modifyPdf(e,t)});case 7:case"end":return r.stop()}},r,this)}))}}]),t}()).\u0275fac=function(t){return new(t||p)(l.Tb(P),l.Tb(u.F),l.Tb(d.a),l.Tb(b.a))},p.\u0275prov=l.Gb({token:p,factory:p.\u0275fac,providedIn:"root"}),p),w=i("Gm54"),C=((y=function(){function t(e,r,a,i,o,s,c,l,u,d){n(this,t),this._routerOutlet=e,this._pdfMake=r,this._varGlobal=a,this._datePipe=i,this._timeBackPipe=o,this._activityPipe=s,this.loadingController=c,this.loadingService=l,this.modalCtrl=u,this.modalController=d}return a(t,[{key:"ionViewWillEnter",value:function(){return Object(c.a)(this,void 0,void 0,regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:this.loadingService.hide();case 1:case"end":return t.stop()}},t,this)}))}},{key:"attestation",value:function(t){return Object(c.a)(this,void 0,void 0,regeneratorRuntime.mark(function e(){var n,r,a,i,o,s,c,l,u,d,b,f;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n={year:"numeric",month:"long",day:"2-digit"},r=new Date,a=this._datePipe.transform(r,"dd/MM/yyyy"),i=r.toLocaleDateString("fr-FR",n),s=new Date(this._varGlobal.setting.dateOfBirth),o=s.toLocaleDateString("fr-FR",n),c=null,l=null,u=null,l=this._timeBackPipe.transform(this._varGlobal.setting.timeback,1),c=this._timeBackPipe.transform(this._varGlobal.setting.timeback,2),u=this._timeBackPipe.transform(this._varGlobal.setting.timeback,3),d=this._activityPipe.transform(t),1!==this._varGlobal.setting.screenmode){e.next=14;break}return e.next=10,this.modalCtrl.create({component:h,cssClass:"my-custom-class",keyboardClose:!0,componentProps:{activityName:d,dateOfBirth:s,dateOfBirthFrLong:o,toDayFr:a,toDayFrLong:i,timeBackT:u,timeBackH:l,timeBackColon:c}});case 10:return b=e.sent,e.next=13,b.present();case 13:return e.abrupt("return",e.sent);case 14:f={toDayFr:a,toDayFrLong:i,dateOfBirth:s,dateOfBirthFrLong:o,timeBackColon:c,timeBackH:l,timeBackT:u},this.loadingService.showSansMinuteur(),this._pdfMake.generatePdf(t,d,f);case 16:case"end":return e.stop()}},e,this)}))}},{key:"closeModal",value:function(){this.modalCtrl.dismiss({dismissed:!0})}}]),t}()).\u0275fac=function(t){return new(t||y)(l.Kb(u.u),l.Kb(_),l.Kb(b.a),l.Kb(k.d),l.Kb(O.a),l.Kb(w.a),l.Kb(u.F),l.Kb(d.a),l.Kb(u.G),l.Kb(u.G))},y.\u0275cmp=l.Eb({type:y,selectors:[["app-attestation"]],decls:0,vars:0,template:function(t,e){},styles:[""]}),y)},kiQV:function(t){t.exports=JSON.parse('{"a":"2.1.1"}')}}])}();