(function(g){var window=this;var Mua=function(a,b,c,d){var e=b.gc();g.S(a.element,"ytp-suggestion-set",!!e.videoId);var f=b.getPlaylistId();d=b.Zb(c,d?d:"mqdefault.jpg");var k=b instanceof g.qQ?g.BV(b.lengthSeconds):null,l=!!f,f=l&&"RD"==g.SP(f).type,m=b instanceof g.qQ?b.Ba:null;c={title:b.title,author:b.author,author_and_views:e.shortViewCount?b.author+" \u2022 "+e.shortViewCount:b.author,watch:g.T("YTP_WATCH_VIDEO_OR_PLAYLIST",{TITLE:b.title},b.title),duration:k,url:b.Lm(c),is_live:m,is_list:l,is_mix:f,background:d?"background-image: url("+
d+")":""};b instanceof g.QQ&&(c.playlist_length=b.getLength());a.update(c)},z8=function(a,b){g.AV.call(this,{H:"div",
ea:["html5-endscreen","ytp-player-content",b||"base-endscreen"]});this.o=a;this.P=!1},A8=function(a){g.IZ.call(this,a,{H:"div",
ea:["ytp-thumbnail-overlay","ytp-channel-overlay"],L:[{H:"div",N:"ytp-thumbnail-overlay-image",R:{style:"{{background}}"}},{H:"div",N:"ytp-thumbnail-overlay-curtain"}]})},B8=function(a){var b={H:"div",
N:"ytp-upnext",R:{"aria-label":"{{watch}}"},L:[{H:"div",N:"ytp-thumbnail-overlay-image",R:{style:"{{background}}"}},{H:"div",N:"ytp-thumbnail-overlay-curtain"},{H:"span",N:"ytp-upnext-top",L:[{H:"span",N:"ytp-upnext-header",L:[g.T("YTP_PLAYLIST_UP_NEXT")]},{H:"span",N:"ytp-upnext-title",L:["{{title}}"]},{H:"span",N:"ytp-upnext-author",L:["{{author}}"]}]},{H:"a",N:"ytp-upnext-autoplay-icon",R:{href:"{{url}}","aria-label":g.T("YTP_AUTOPLAY_NEXT")},L:[{H:"svg",R:{height:"100%",version:"1.1",viewBox:"0 0 98 98",
width:"100%"},L:[{H:"circle",N:"ytp-svg-autoplay-circle",R:{cx:"49",cy:"49",fill:"#000","fill-opacity":"0.8",r:"48"}},{H:"circle",N:"ytp-svg-autoplay-ring",R:{cx:"-49",cy:"49","fill-opacity":"0",r:"46.5",stroke:"#FFFFFF","stroke-dasharray":"293","stroke-dashoffset":"-293","stroke-width":"4",transform:"rotate(-90)"}},{H:"polygon",N:"ytp-svg-autoplay-triangle",R:{fill:"#fff",points:"32,27 72,49 32,71"}}]}]},{H:"span",N:"ytp-upnext-bottom",L:[{H:"span",N:"ytp-upnext-cancel"},{H:"span",N:"ytp-upnext-paused",
L:[g.T("YTP_AUTOPLAY_PAUSED_3")]}]},{H:"span",N:"ytp-upnext-close"}]};g.W.call(this,b);this.B=null;var c=this.xa["ytp-upnext-cancel"],b=this.xa["ytp-upnext-close"];this.B=new g.W({H:"button",ea:["ytp-upnext-cancel-button","ytp-button"],R:{tabindex:0,"aria-label":g.T("YTP_AUTOPLAY_CANCEL")},L:[g.T("YTP_CANCEL")]});g.N(this,this.B);this.B.W("click",this.uz,this);this.B.Ia(c);c=new g.W({H:"button",ea:["ytp-upnext-close-button","ytp-button"],R:{"aria-label":g.T("YTP_AUTOPLAY_CANCEL")}});g.N(this,c);c.W("click",
this.uz,this);c.Ia(b);this.o=a;this.K=this.xa["ytp-svg-autoplay-ring"];this.F=this.D=this.A=this.C=null;this.G=new g.qt(this.dm,5E3,this);g.N(this,this.G);this.J=0;this.T(this.xa["ytp-upnext-autoplay-icon"],"click",this.hO);this.pz();this.T(a,"autonavvisibility",this.pz);this.T(a,"mdxnowautoplaying",this.vN);this.T(a,"mdxautoplaycanceled",this.wN);this.T(a,"mdxautoplayupnext",this.tB);3==this.o.Ya()&&(a=(a=g.SU(g.NU(this.o)))?a.fG():null)&&this.tB(a)},Nua=function(a,b){a.C=b;
Mua(a,b,g.Y(a.o),"hqdefault.jpg")},C8=function(a,b){a.A||(g.fG("a11y-announce",g.T("YTP_PLAYLIST_UP_NEXT")+" "+a.C.title),a.J=(0,g.sG)(),a.A=new g.qt((0,g.B)(a.sp,a,b),25),a.sp(b));
g.Jp(a.element,"ytp-upnext-autoplay-paused")},E8=function(a){D8(a);
a.J=(0,g.sG)();a.sp();g.R(a.element,"ytp-upnext-autoplay-paused")},D8=function(a){a.A&&(a.A.dispose(),a.A=null)},F8=function(a){z8.call(this,a,"subscribecard-endscreen");
var b=a.ia();this.A=new A8(a);g.N(this,this.A);g.kV(this.o,this.A.element,5);this.B=new g.W({H:"div",N:"ytp-subscribe-card",L:[{H:"img",N:"ytp-author-image",R:{src:b.profilePicture}},{H:"div",N:"ytp-subscribe-card-right",L:[{H:"div",N:"ytp-author-name",L:[b.author]},{H:"div",N:"html5-subscribe-button-container"}]}]});g.N(this,this.B);this.B.Ia(this.element);this.C=new g.u1(g.T("YTP_SUBSCRIBE"),null,g.T("YTP_UNSUBSCRIBE"),null,!0,!1,b.bl,b.subscribed,"trailer-endscreen",null,null,a);g.N(this,this.C);
this.C.Ia(this.B.xa["html5-subscribe-button-container"]);this.hide()},G8=function(a){var b=g.Y(a),b=b.A&&!b.D;
g.W.call(this,{H:"a",N:"ytp-videowall-still",R:{href:"{{url}}",target:b?"_blank":"","aria-label":"{{watch}}","data-is-live":"{{is_live}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}"},L:[{H:"div",N:"ytp-videowall-still-image",R:{style:"{{background}}"}},{H:"span",N:"ytp-videowall-still-info",L:[{H:"span",N:"ytp-videowall-still-info-bg",L:[{H:"span",N:"ytp-videowall-still-info-content",R:g.UE||g.Ue?{style:"will-change: opacity"}:void 0,L:[{H:"span",N:"ytp-videowall-still-info-title",L:["{{title}}"]},
{H:"span",N:"ytp-videowall-still-info-author",L:["{{author_and_views}}"]},{H:"span",N:"ytp-videowall-still-info-live",L:[g.T("YTP_LIVE")]},{H:"span",N:"ytp-videowall-still-info-duration",L:["{{duration}}"]}]}]}]},{H:"span",ea:["ytp-videowall-still-listlabel-regular","ytp-videowall-still-listlabel"],L:[{H:"span",N:"ytp-videowall-still-listlabel-icon"},g.T("YTP_PLAYLIST"),{H:"span",N:"ytp-videowall-still-listlabel-length",L:[" (",{H:"span",L:["{{playlist_length}}"]},")"]}]},{H:"span",ea:["ytp-videowall-still-listlabel-mix",
"ytp-videowall-still-listlabel"],L:[{H:"span",N:"ytp-videowall-still-listlabel-mix-icon"},g.T("YTP_MIX"),{H:"span",N:"ytp-videowall-still-listlabel-length",L:[" (50+)"]}]}]});this.B=b;this.o=a;this.A=null;this.W("click",this.C);this.W("keypress",this.D);g.Y(a).fa&&(a=a.app.da,g.gb(a.A,this),b=String(a.G++),this.element.setAttribute("data-visual-id",b),g.Pe(this,(0,g.B)(a.F,a,this)))},H8=function(a){z8.call(this,a,"videowall-endscreen");
this.da=a;this.G=0;this.A=[];this.J=this.D=this.C=null;this.K=this.U=!1;this.F=new g.CJ(this);g.N(this,this.F);this.M=new g.qt(g.ya(g.R,this.element,"ytp-show-tiles"),0);g.N(this,this.M);var b=new g.W({H:"button",ea:["ytp-button","ytp-endscreen-previous"],R:{"aria-label":g.T("YTP_PREVIOUS")},L:[g.TD()]});g.N(this,b);b.Ia(this.element);b.W("click",this.uS,this);this.O=new g.XQ({H:"div",N:"ytp-endscreen-content"});g.N(this,this.O);this.O.Ia(this.element);b=new g.W({H:"button",ea:["ytp-button","ytp-endscreen-next"],
R:{"aria-label":g.T("YTP_NEXT")},L:[g.UD()]});g.N(this,b);b.Ia(this.element);b.W("click",this.tS,this);this.B=new B8(a);g.N(this,this.B);g.kV(this.o,this.B.element,5);this.hide()},I8=function(a){return g.lV(a.o)&&a.xp()&&!a.J},Oua=function(a){return(0,g.I)(a.Sf,function(a){return g.AZ(a)})},Pua=function(a,b,c){return 0==b&&a.C.length&&(b=c/H8.g,2<=c/H8.g&&2<=b&&g.Y(a.o).experiments.g("video_wall_emphasize_first"))?2*H8.g:H8.g},J8=function(a){var b=a.Bt();
b!=a.U&&(a.U=b,a.o.X("autonavvisibility"))},K8=function(a){g.vV.call(this,a);
g.PD({});this.o=null;this.isAvailable=!0;this.A=new g.CJ(this);g.N(this,this.A);this.B=g.Y(a);Qua(a)?this.o=new H8(this.g):this.B.Ra?this.o=new F8(this.g):this.o=new z8(this.g);g.N(this,this.o);g.kV(this.g,this.o.element,5);this.AA();this.A.T(a,"videodatachange",this.AA,this);this.A.T(a,"crn_endscreen",this.gS,this);this.A.T(a,"crx_endscreen",this.hS,this)},Qua=function(a){a=g.Y(a);
return a.tc&&!a.Ra};g.C(z8,g.AV);z8.prototype.create=function(){this.P=!0};
z8.prototype.destroy=function(){this.P=!1};
z8.prototype.xp=function(){return!1};
z8.prototype.Bt=function(){return!1};g.p(A8,g.IZ);A8.prototype.Jb=function(a){a?this.A.show():this.A.hide()};g.p(B8,g.W);g.h=B8.prototype;g.h.dm=function(){this.D&&(this.G.stop(),this.Aa(this.F),this.F=null,this.D.close(),this.D=null)};
g.h.pz=function(){this.Jb(g.OU(this.o))};
g.h.XN=function(){window.focus();this.dm()};
g.h.hide=function(){g.W.prototype.hide.call(this)};
g.h.sp=function(a){a=a||g.Y(this.o).experiments.o("autoplay_time")||1E4;var b=Math.min((0,g.sG)()-this.J,a);a=Math.min(b/a,1);this.K.setAttribute("stroke-dashoffset",-293*(a+1));1<=a&&3!=this.o.Ya()?this.select(!0):this.A&&this.A.start()};
g.h.select=function(a){a=void 0===a?!1:a;var b=g.Y(this.o);if(b.experiments.g("autonav_notifications")&&a&&window.Notification&&window.document.hasFocus){var c=window.Notification.permission;g.$U(this.o,"xwebnotifications",{permission:c});"default"==c?window.Notification.requestPermission():"granted"!=c||window.document.hasFocus()||(c=this.C.gc(),this.dm(),this.D=new window.Notification(g.T("YTP_PLAYLIST_UP_NEXT"),{body:c.title,icon:c.Zb(b)}),this.F=this.T(this.D,"click",this.XN),this.G.start())}D8(this);
this.o.hj(!1,a)};
g.h.hO=function(a){!g.Ce(this.B.element,g.FF(a))&&g.JV(a,this.o)&&this.select()};
g.h.uz=function(){g.aV(this.o,"autonavcancel");g.QU(this.o,!0)};
g.h.vN=function(a){this.o.Ya();this.show();C8(this,a)};
g.h.tB=function(a){this.o.Ya();this.C&&this.C.gc().videoId==a.gc().videoId||Nua(this,a)};
g.h.wN=function(){this.o.Ya();D8(this);this.hide()};
g.h.V=function(){D8(this);this.dm();g.W.prototype.V.call(this)};g.C(F8,z8);F8.prototype.show=function(){F8.Y.show.call(this);this.A.Jb(!0)};
F8.prototype.hide=function(){F8.Y.hide.call(this);this.A.Jb(!1)};g.p(G8,g.W);G8.prototype.uj=function(){var a=this.A.gc().videoId,b=this.A.getPlaylistId();g.B2(this.o.app,a,this.A.Md,b,void 0,void 0)};
G8.prototype.C=function(a){g.oV(this.o,this);var b=(g.Y(this.o).experiments.g("web_player_endscreen_new_tab")||!this.o.isFullscreen())&&this.B;g.JV(a,this.o,b,this.A.Md||void 0)&&this.uj()};
G8.prototype.D=function(a){switch(a.keyCode){case 13:case 32:g.KF(a)||(this.uj(),g.MF(a))}};g.C(H8,z8);H8.g=2;g.h=H8.prototype;g.h.create=function(){H8.Y.create.call(this);var a=this.o.ia();a&&(this.C=Oua(a),this.D=a);this.sh();this.F.T(this.o,"appresize",this.sh);this.F.T(this.o,"videodatachange",this.vS);this.F.T(this.o,"autonavchange",this.TB);this.F.T(this.o,"autonavcancel",this.sS);this.F.T(this.element,"transitionend",this.nP)};
g.h.destroy=function(){g.EJ(this.F);g.Re(this.A);this.A=[];this.C=null;H8.Y.destroy.call(this);g.Jp(this.element,"ytp-show-tiles");this.M.stop()};
g.h.xp=function(){return 1!=this.D.autonavState};
g.h.show=function(){H8.Y.show.call(this);g.Jp(this.element,"ytp-show-tiles");g.Y(this.o).isMobile?g.rt(this.M):this.M.start();(this.K||this.J&&this.J!=this.D.clientPlaybackNonce)&&g.QU(this.o,!1);var a=I8(this);g.lV(this.o)&&g.Y(this.o).experiments.g("ui_logging")&&g.$U(this.o,"end",{cancelButtonShow:a?"1":"0",state:this.xp()?"enabled":"disabled"});a?(J8(this),2==this.D.autonavState?g.Y(this.o).experiments.g("fast_autonav_in_background")&&3==this.o.sn()?this.B.select(!0):C8(this.B):3==this.D.autonavState&&
E8(this.B)):(g.QU(this.o,!0),J8(this))};
g.h.hide=function(){H8.Y.hide.call(this);E8(this.B);J8(this)};
g.h.nP=function(a){g.FF(a)==this.element&&this.sh()};
g.h.sh=function(){if(this.C&&this.C.length){g.R(this.element,"ytp-endscreen-paginate");var a=g.th(this.element),b=a.width/a.height,c=96/54,d=H8.g,e=H8.g,f=Math.max(a.width/96,2),k=Math.max(a.height/54,2),l=this.C.length,m=Math.pow(H8.g,2),n=Pua(this,0,k),q=Pua(this,1,k);var r=l*m+(Math.pow(n,2)-m);r+=Math.pow(q,2)-m;for(r-=m;0<r&&(d<f||e<k);){var w=d/H8.g;var x=e/H8.g;var A=d<=f-H8.g&&r>=x*m,D=e<=k-H8.g&&r>=w*m;if((w+1)/x*c/b>b/(w/(x+1)*c)&&D)r-=w*m,e+=H8.g;else if(A)r-=x*m,d+=H8.g;else if(D)r-=w*
m,e+=H8.g;else break}c=!1;f=H8.g+n;r>=3*m&&6>=l*m-r&&(e>=f||d>=f)&&q<=H8.g&&(c=!0);r=96*d;m=54*e;b=r/m<b?a.height/m:a.width/r;b=Math.min(b,2);r*=b;m*=b;r*=g.Od(a.width/r||1,1,1.21);m*=g.Od(a.height/m||1,1,1.21);r=Math.floor(Math.min(a.width,r));m=Math.floor(Math.min(a.height,m));a=this.O.element;g.sh(a,r,m);g.ah(a,{marginLeft:r/-2+"px",marginTop:m/-2+"px"});Nua(this.B,this.C[0]);g.S(this.element,"ytp-endscreen-takeover",I8(this));J8(this);b=r+4;r=m+4;m=0;f=!1;for(k=0;k<d;k++)for(w=0;w<e;w++)if(A=
q>H8.g&&1<=m&&!f?m+1:m,D=0,c&&k>=d-H8.g&&w>=e-H8.g?D=1:0==w%H8.g&&0==k%H8.g&&(w<n&&k<n?0==w&&0==k&&(D=n):q>H8.g&&w>=e-q&&k>=d-q?w==e-q&&k==d-q&&(f=!0,A=1,D=q):D=H8.g),A=g.Pd(A+this.G,l),0!=D){x=this.A[m];x||(x=new G8(this.o),this.A[m]=x,a.appendChild(x.element));var K=Math.floor(r*w/e),X=Math.floor(b*k/d),Ra=Math.floor(r*(w+D)/e)-K-4,ab=Math.floor(b*(k+D)/d)-X-4;g.hh(x.element,X,K);g.sh(x.element,ab,Ra);g.ah(x.element,"transitionDelay",(w+k)/20+"s");g.S(x.element,"ytp-videowall-still-mini",1==D);
g.S(x.element,"ytp-videowall-still-large",2<D);A=this.C[A];x.A=A;Mua(x,A,g.Y(x.o),g.Gp(x.element,"ytp-videowall-still-large")?"hqdefault.jpg":"mqdefault.jpg");D=A.Md;A=x.o;g.Y(A).fa&&(A=A.app.da,D=D&&D.itct,x=x.element.getAttribute("data-visual-id"),g.mV(A,"onLogServerVeCreated",{id:x,tracking_params:D}));m++}g.S(this.element,"ytp-endscreen-paginate",m<l);for(d=this.A.length-1;d>=m;d--)x=this.A[d],g.ve(x.element),g.Qe(x);this.A.length=m}};
H8.A=2;H8.o=1.21;g.h=H8.prototype;g.h.vS=function(){var a=this.o.ia();this.D!=a&&(this.G=0,this.C=Oua(a),this.D=a,this.sh())};
g.h.tS=function(){this.G+=this.A.length;this.sh()};
g.h.uS=function(){this.G-=this.A.length;this.sh()};
g.h.lI=function(){return!!this.B.A};
g.h.TB=function(a){1==a?(this.K=!1,this.J=this.D.clientPlaybackNonce,D8(this.B),this.g&&this.sh()):(this.K=!0,this.g&&I8(this)&&(2==a?C8(this.B):3==a&&E8(this.B)))};
g.h.sS=function(a){if(a){for(a=0;a<this.A.length;a++)g.pV(this.da,this.A[a],!0);this.TB(1)}else this.J=null,this.K=!1;this.sh()};
g.h.Bt=function(){return this.g&&I8(this)};g.C(K8,g.vV);g.h=K8.prototype;g.h.PB=function(){var a=this.g.ia(),b=!Qua(this.g)||!(!a.Sf||!a.Sf.length),a=g.KQ(a,"ypc_module"),c=g.KZ(this.g.app);return(b||!1)&&!a&&!c};
g.h.OB=function(){return this.o.Bt()};
g.h.iI=function(){return this.OB()?this.o.lI():!1};
g.h.V=function(){g.iV(this.g,"endscreen");K8.Y.V.call(this)};
g.h.load=function(){K8.Y.load.call(this);this.o.show();g.Y(this.g).Ra&&.01>Math.random()&&g.$U(this.g,"end",{trailerEndscreenShow:1})};
g.h.unload=function(){K8.Y.unload.call(this);this.o.hide();this.o.destroy();this.isAvailable=!1};
g.h.gS=function(a){this.PB()&&(this.o.P||this.o.create(),"load"==a.getId()&&this.load())};
g.h.hS=function(a){"load"==a.getId()&&this.loaded&&this.unload()};
g.h.AA=function(){g.iV(this.g,"endscreen");var a=Math.max(1E3*(this.g.ia().lengthSeconds-10),0),a=new g.oJ(a,0x8000000000000,{id:"preload",namespace:"endscreen"}),b=new g.oJ(0x8000000000000,0x8000000000000,{id:"load",priority:6,namespace:"endscreen"});g.fV(this.g,[a,b])};window._exportCheck==g.Aa&&g.v("ytmod.player.endscreen",K8,void 0);})(_yt_player);