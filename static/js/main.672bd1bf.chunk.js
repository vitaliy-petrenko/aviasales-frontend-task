(this.webpackJsonpaviasales=this.webpackJsonpaviasales||[]).push([[0],{52:function(e,t,n){e.exports=n(87)},61:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},83:function(e,t,n){},84:function(e,t,n){},85:function(e,t,n){},87:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"currency",(function(){return ft})),n.d(a,"locale",(function(){return dt}));var r=n(0),c=n.n(r),i=n(21),o=n.n(i),s=n(8),l=(n(61),n(62),n(14)),u=(n(63),n(6)),m=function(e,t){return"".concat(e,"--").concat(t)},f=function(e){var t=e.type,n=e.size,a=e.isLoading,r=e.block,c=e.isDisabled,i=[];return t&&i.push(t),n&&i.push(n),r&&i.push("block"),function(e,t){var n=t.isLoading,a=t.isActive,r=t.isDisabled,c=t.modifiers,i=void 0===c?[]:c,o=[e];if(n&&o.push("is-loading"),r&&o.push("is-disabled"),a&&o.push("is-active"),e&&i.length){var s=m.bind(null,e);o.push.apply(o,Object(u.a)(i.map(s)))}return o.join(" ")}("btn",{isLoading:a,isDisabled:c,modifiers:i})},d=function(e){var t=e.div,n=e.a,a=e.type,r=void 0===a?"primary":a,i=e.size,o=e.isLoading,s=e.isDisabled,u=e.block,m=e.text,d=e.children,b=Object(l.a)(e,["div","a","type","size","isLoading","isDisabled","block","text","children"]),p=f({type:r,size:i,isLoading:o,isDisabled:s,block:u}),E=t?"div":n?"a":"button";return c.a.createElement(E,Object.assign({className:p},b),m,d)},b=n(30),p=function(){return c.a.createElement("div",{className:"do-not-touch-this"},c.a.createElement("div",{className:"do-not-touch__d"}),c.a.createElement("div",{className:"do-not-touch__o"}),c.a.createElement("div",{className:"do-not-touch__n"}),c.a.createElement("div",{className:"do-not-touch__o"}),c.a.createElement("div",{className:"do-not-touch__t"}),c.a.createElement("div",{className:"do-not-touch__t"}),c.a.createElement("div",{className:"do-not-touch__o"}),c.a.createElement("div",{className:"do-not-touch__u"},c.a.createElement(b.b,{to:"/",className:"yo-btn-wrap"},c.a.createElement(d,{size:"lg",div:!0,type:"secondary"},"\u0423\u0439\u0442\u0438"))),c.a.createElement("div",{className:"do-not-touch__c"}),c.a.createElement("div",{className:"do-not-touch__h"}),c.a.createElement("div",{className:"do-not-touch__t"}),c.a.createElement("div",{className:"do-not-touch__h"}),c.a.createElement("div",{className:"do-not-touch__i"}),c.a.createElement("div",{className:"do-not-touch__s"}))},E=(n(65),n(66),n(25)),O=function(e){var t=e.animated,n=void 0!==t&&t;return c.a.createElement("div",{className:"plane-logo"},c.a.createElement(E.a.div,{className:"plane-logo__earth",animate:n?{scale:[1,1.1,1,1.1,1],rotate:[0,180]}:{scale:1,rotate:0},transition:n?{duration:2,loop:1/0}:{duration:.5,loop:0}}),c.a.createElement("div",{className:"plane-logo__plane-wrap"},c.a.createElement(E.a.div,{className:"plane-logo__plane",animate:n?{scale:[1,.8,.8,1],rotate:[0,-1,0,-1,0],x:[0,-1,0,1,0],y:[0,1,0,-1,0]}:{scale:1,rotate:0,x:0,y:0},transition:n?{duration:4,loop:1/0}:{duration:.5,loop:0}})))},v=n(40),y=n(2),h=n(4),j=function(e){return Array.from(Array(e).keys())},_=n(16),g=n.n(_),k=n(23),S={base:"https://front-test.beta.aviasales.ru",gateWays:{searchKey:"/search",tickets:"/tickets"}},N=function(){var e=Object(k.a)(g.a.mark((function e(t){var n,a,r;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:if(!(n=e.sent).ok){e.next=7;break}return e.abrupt("return",n.json());case 7:return a=n.status,e.next=10,n.text();case 10:return r=e.sent,e.abrupt("return",Promise.reject("".concat(a,": ").concat(r)));case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=n(36);function I(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?I(n,!0).forEach((function(t){Object(y.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):I(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var D,P,F,C,L,R=function(e){e.segments;var t=Object(l.a)(e,["segments"]);return w({id:Object(T.v4)(),segments:e.segments.map(A)},t)},A=function(e){return w({id:Object(T.v4)()},e)},x=S.base+S.gateWays.searchKey,K=S.base+S.gateWays.tickets,B=function(){var e=Object(k.a)(g.a.mark((function e(){var t,n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N(x);case 2:return t=e.sent,n=t.searchId,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),U=function(e,t){!function n(){setTimeout((function(){e()||n()}),t)}()},z=function(){var e=Object(k.a)(g.a.mark((function e(t){var n,a,r,c,i,o;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=!1,a=[],e.next=3,B();case 3:r=e.sent,c="".concat(K,"?searchId=").concat(r),U((function(){if(a.length){var e=a.map(R);t(e),a=[]}return n}),500);case 6:if(n){e.next=20;break}return e.prev=7,e.next=10,N(c);case 10:o=e.sent,n=o.stop,(i=a).push.apply(i,Object(u.a)(o.tickets)),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(7),console.warn(e.t0);case 18:e.next=6;break;case 20:case"end":return e.stop()}}),e,null,[[7,15]])})));return function(t){return e.apply(this,arguments)}}(),G={FIND_TICKETS:{CLEAR:"FIND_TICKETS.TICKETS.CLEAR",TICKETS:{ADD:"FIND_TICKETS.TICKETS.ADD"},STATUSES:{IS_FETCHING_ALL:"FIND_TICKETS.STATUSES.IS_FETCHING_ALL",IS_FETCHING:"FIND_TICKETS.STATUSES.IS_FETCHING",IS_ERROR:"FIND_TICKETS.STATUSES.IS_ERROR"},FILTERS:{TRANSFERS:{SET_SELECTED_OPTIONS:"FIND_TICKETS.FILTERS.TRANSFERS.SET_SELECTED_OPTIONS",SET_AVAILABLE_OPTIONS:"FIND_TICKETS.FILTERS.TRANSFERS.SET_AVAILABLE_OPTIONS"}},SORT_BY:"FIND_TICKETS.SORT_BY"}},H=Object(h.a)(G.FIND_TICKETS.STATUSES.IS_FETCHING,(function(e){return{payload:e}})),M=Object(h.a)(G.FIND_TICKETS.STATUSES.IS_FETCHING_ALL,(function(e){return{payload:e}})),W=Object(h.a)(G.FIND_TICKETS.STATUSES.IS_ERROR,(function(e){return{payload:e}})),V=Object(h.a)(G.FIND_TICKETS.TICKETS.ADD,(function(e){return{payload:e}})),Z=Object(h.a)(G.FIND_TICKETS.CLEAR),Y=Object(h.a)(G.FIND_TICKETS.SORT_BY,(function(e){return{payload:e}})),J=Object(h.a)(G.FIND_TICKETS.FILTERS.TRANSFERS.SET_AVAILABLE_OPTIONS,(function(e){return{payload:e}})),X=Object(h.a)(G.FIND_TICKETS.FILTERS.TRANSFERS.SET_SELECTED_OPTIONS,(function(e){return{payload:e}})),$=function(){return function(e){var t=0,n=!1;e(W(!1)),e(H(!0)),e(M(!0)),z((function(a){var r=function(e){var t=0;return e.forEach((function(e){return e.segments.forEach((function(e){var n=e.stops;return t=Math.max(t,n.length)}))})),t}(a);e(V(a)),r>t&&(e(J(j(r+1))),t=r),n||(e(H(!1)),n=!0)})).catch((function(){e(W(!0))})).finally((function(){e(M(!1))}))}};function q(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function Q(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?q(n,!0).forEach((function(t){Object(y.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):q(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}!function(e){e[e.price=0]="price",e[e.duration=1]="duration"}(L||(L={}));var ee={statuses:{isFetching:!1,isError:!1,isFetchingAll:!1},tickets:[],sortBy:L.price,filters:{transfers:{available:j(2),selected:j(2)}},pagination:{offset:0,limit:5}},te=Object(h.b)(ee.filters.transfers,(D={},Object(y.a)(D,X.type,(function(e,t){return Q({},e,{selected:t.payload})})),Object(y.a)(D,J.type,(function(e,t){var n=e.selected,a=e.available;return{selected:n.length===a.length?Object(u.a)(t.payload):n,available:t.payload}})),Object(y.a)(D,Z.type,(function(){return Q({},ee.filters.transfers)})),D)),ne=Object(h.b)(ee.sortBy,(P={},Object(y.a)(P,Y.type,(function(e,t){return t.payload})),Object(y.a)(P,Z.type,(function(){return ee.sortBy})),P)),ae=Object(h.b)(ee.tickets,(F={},Object(y.a)(F,V.type,(function(e,t){return[].concat(Object(u.a)(e),Object(u.a)(t.payload))})),Object(y.a)(F,Z.type,(function(e,t){return Object(u.a)(ee.tickets)})),F)),re=Object(h.b)(ee.statuses,(C={},Object(y.a)(C,M.type,(function(e,t){return Q({},e,{isFetchingAll:t.payload})})),Object(y.a)(C,H.type,(function(e,t){return Q({},e,{isError:t.payload})})),Object(y.a)(C,H.type,(function(e,t){return Q({},e,{isFetching:t.payload})})),Object(y.a)(C,Z.type,(function(){return Q({},ee.statuses)})),C)),ce=Object(h.b)(ee.pagination,Object(y.a)({},Z.type,(function(){return Q({},ee.pagination)}))),ie=function(e){return e.findTickets.statuses},oe=function(e){return e.findTickets.filters},se=function(e){return e.findTickets.sortBy},le=function(e){return e.reduce((function(e,t){return e+t.duration}),0)},ue=Object(v.a)((function(e){return e.findTickets.tickets}),se,(function(e,t){return t===L.duration?e.slice().sort((function(e,t){return le(e.segments)-le(t.segments)})):t===L.price?e.slice().sort((function(e,t){return e.price-t.price})):e})),me=Object(v.a)(ue,oe,(function(e,t){var n=t.transfers,a=n.selected.length===n.available.length,r=!n.selected.length;return console.log(a,r),a?e:r?[]:e.filter((function(e){var t=function(e){return e.segments.map((function(e){return e.stops.length}))}(e),a=0;return t.forEach((function(e){return n.selected.includes(e)&&a++})),a===t.length}))})),fe=Object(v.a)(me,(function(e){return e.findTickets.pagination}),(function(e,t){var n=t.offset,a=t.limit;return e.slice(n,n+a)})),de=Object(s.b)((function(e){return{animated:ie(e).isFetchingAll}}))(O),be=(n(71),function(e){var t=e.Sidebar,n=e.children;return c.a.createElement("div",{className:"layout"},t&&c.a.createElement("div",{className:"layout__sidebar"},c.a.createElement(t,null)),c.a.createElement("div",{className:"layout__main"},n))}),pe=n(1),Ee=n(5);function Oe(){return(Oe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function ve(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var ye=c.a.createElement("path",{d:"M4.28571 8L0 4.16123L1.20857 3.0787L4.28571 5.82726L10.7914 0L12 1.09021L4.28571 8Z"}),he=function(e){var t=e.svgRef,n=e.title,a=ve(e,["svgRef","title"]);return c.a.createElement("svg",Oe({width:12,height:8,viewBox:"0 0 12 8",fill:"none",ref:t},a),n?c.a.createElement("title",null,n):null,ye)},je=c.a.forwardRef((function(e,t){return c.a.createElement(he,Oe({svgRef:t},e))})),_e=(n.p,n(72),function(e){var t=e.children,n=e.onChange,a=e.type,r=void 0===a?"checkbox":a,i=Object(l.a)(e,["children","onChange","type"]);return c.a.createElement("label",{className:"checkbox"},c.a.createElement("input",Object.assign({type:r,onChange:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(e){return n(e.target.checked)}))},i)),c.a.createElement("span",{className:"checkbox__icon"},c.a.createElement(je,null)),c.a.createElement("span",{className:"checkbox__label"},t))}),ge=(n(73),function(e){var t=e.title,n=e.children;return c.a.createElement("div",{className:"filters-section"},c.a.createElement("div",{className:"filters-section__title"},t),c.a.createElement("div",{className:"filters-section__body"},n))}),ke=n(3),Se=function(e){var t=e.setSelectedTransfersOptions,n=e.filters,a=Object(ke.b)(),r=Object(Ee.a)(a,1)[0],i=n.transfers,o=i.selected,s=i.available,l=s.length===o.length,m=function(e){return t((a=e,(n=o).includes(a)?n.filter((function(e){return a!==e})):[].concat(Object(u.a)(n),[a])));var n,a};return c.a.createElement(ge,{title:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043e\u043a"},c.a.createElement(_e,{checked:l,onChange:function(){return t(o.length&&l?[]:Object(u.a)(s))}},r("findTickets.transfers.all")),s.map((function(e){return c.a.createElement(_e,{key:e,checked:o.includes(e),onChange:function(){return m(e)}},r("findTickets.transfers.label".concat(0===e?"Zero":""),{count:e}))})))},Ne=Object(s.b)((function(e){return{filters:oe(e)}}),(function(e){return{setSelectedTransfersOptions:Object(pe.bindActionCreators)(X,e)}}))(Se),Te=n(46),Ie=n(18),we=n.n(Ie),De=(n(83),function(e){var t=e.value,n=e.currency,a=function(e){return e.toLocaleString()}(t),r=n.symbol;return"USD"===n.name?c.a.createElement(c.a.Fragment,null,"".concat(r).concat(a)):c.a.createElement(c.a.Fragment,null,"".concat(a," ").concat(r))}),Pe=function(e){return e.common.currency},Fe=function(e){return e.common.locale},Ce=Object(s.b)((function(e){return{currency:Pe(e)}}))(De);function Le(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var Re=function(e){return e.join(" - ")},Ae=function(e){var t=e%60;return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Le(n,!0).forEach((function(t){Object(y.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Le(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},function(e){var t=e%24;return{days:(e-t)/24,hours:t}}((e-t)/60),{minutes:t})},xe=function(e){var t=e.from,n=void 0===t?"minutes":t,a=e.duration,r=Object(ke.b)(),i=Object(Ee.a)(r,1)[0];return c.a.createElement(c.a.Fragment,null,function(e){var t=e.duration,n=e.t,a=Ae(t),r=a.days,c=a.hours,i=a.minutes,o=[];return r&&o.push("".concat(r).concat(n("labels.time.daysShort"))),(c||r)&&o.push("".concat(c).concat(n("labels.time.hoursShort"))),(i||c)&&o.push("".concat(i).concat(n("labels.time.minutesShort"))),o.join(" ")}({duration:a,t:i,from:n}))},Ke=function(e){var t=e.label,n=e.children;return c.a.createElement("div",{className:"ticket-segment-item"},c.a.createElement("div",{className:"ticket-segment-item__label"},t),c.a.createElement("div",{className:"ticket-segment-item__value"},n))},Be=function(){return c.a.createElement("div",{className:"ticket-loading animated-background-loading"})},Ue=function(){return c.a.createElement("div",{className:"ticket"},c.a.createElement("div",{className:"ticket__header"},c.a.createElement("div",{className:"ticket__row"},c.a.createElement("div",{className:"ticket__col"},c.a.createElement(Be,null)),c.a.createElement("div",{className:"ticket__col"},c.a.createElement(Be,null)))),c.a.createElement("div",{className:"ticket__body"},c.a.createElement("div",{className:"ticket-segments"},c.a.createElement("div",{className:"ticket__row"},c.a.createElement("div",{className:"ticket__col"},c.a.createElement(Be,null),c.a.createElement(Be,null)),c.a.createElement("div",{className:"ticket__col"},c.a.createElement(Be,null),c.a.createElement(Be,null)),c.a.createElement("div",{className:"ticket__col"},c.a.createElement(Be,null),c.a.createElement(Be,null))))))},ze=function(e){var t,n=e.ticket,a=Object(ke.b)(),r=Object(Ee.a)(a,1)[0];return c.a.createElement("div",{className:"ticket"},c.a.createElement("div",{className:"ticket__header"},c.a.createElement("div",{className:"ticket__row"},c.a.createElement("div",{className:"ticket__col"},c.a.createElement("div",{className:"ticket-price"},c.a.createElement(Ce,{value:n.price}))),c.a.createElement("div",{className:"ticket__col"},c.a.createElement("div",{className:"ticket-company-logo"},c.a.createElement(Te.LazyLoadImage,{alt:"",src:(t=n.carrier,"//pics.avs.io/99/36/".concat(t,".png"))}))))),c.a.createElement("div",{className:"ticket__body"},c.a.createElement("div",{className:"ticket-segments"},n.segments.map((function(e){var t=e.id,n=e.date,a=e.destination,i=e.duration,o=e.origin,s=e.stops;return c.a.createElement("div",{className:"ticket__row",key:t},c.a.createElement("div",{className:"ticket__col"},c.a.createElement(Ke,{label:Re([o,a])},function(e,t){return Re([we()(e).format("LT"),we()(e).add(t,"minutes").format("LT")])}(n,i))),c.a.createElement("div",{className:"ticket__col"},c.a.createElement(Ke,{label:r("tickets.duration")},c.a.createElement(xe,{duration:i}))),c.a.createElement("div",{className:"ticket__col"},s.length?c.a.createElement(Ke,{label:r("findTickets.transfers.label",{count:s.length})},Re(s)):c.a.createElement(Ke,{label:r("findTickets.transfers.labelZero")})))})))))};function Ge(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function He(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ge(n,!0).forEach((function(t){Object(y.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ge(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Me=function(e){var t=e.duration,n=void 0===t?.2:t,a=e.children,r=e.className,i={x:[e.initialX||0,0]};return c.a.createElement(E.a.div,{animate:He({opacity:[0,1]},i),initial:{opacity:0},transition:{duration:n},className:r},a)},We=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"tickets-list__item"},c.a.createElement(Ue,null)),c.a.createElement("div",{className:"tickets-list__item"},c.a.createElement(Ue,null)),c.a.createElement("div",{className:"tickets-list__item"},c.a.createElement(Ue,null)))},Ve=function(){var e=Object(ke.b)(),t=Object(Ee.a)(e,1)[0];return c.a.createElement("div",{className:"tickets-list-not-found"},t("tickets.notFound"))},Ze=function(e){var t=e.statuses,n=e.tickets,a=n.map((function(e){return c.a.createElement("div",{className:"tickets-list__item",key:e.id},c.a.createElement(Me,{initialX:8,duration:.25},c.a.createElement(ze,{ticket:e})))})),r=!n.length&&!t.isFetching&&c.a.createElement("div",{className:"tickets-list__item"},c.a.createElement(Ve,null));return c.a.createElement("div",{className:"tickets-list"},a,t.isFetching&&c.a.createElement(We,null),r)},Ye=n(19),Je=n(20),Xe=n(50),$e=n(47),qe=n(51),Qe=(n(84),function(e){var t=e.children,n=Object(ke.b)(),a=Object(Ee.a)(n,1)[0];return c.a.createElement("div",{className:"error"},c.a.createElement("div",{className:"error__message"},a("commonMessages.error")),t&&c.a.createElement("div",{className:"error__body"},t))});function et(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var tt=function(e){var t=e.reload,n=Object(ke.b)(),a=Object(Ee.a)(n,1)[0];return c.a.createElement(Qe,null,c.a.createElement(d,{onClick:t},a("labels.reload")))},nt=function(e){return function(t){function n(){return Object(Ye.a)(this,n),Object(Xe.a)(this,Object($e.a)(n).apply(this,arguments))}return Object(qe.a)(n,t),Object(Je.a)(n,[{key:"componentDidMount",value:function(){this.props.fetch()}},{key:"componentWillUnmount",value:function(){this.props.reset()}},{key:"render",value:function(){var t=this.props,n=t.fetch,a=(t.reset,t.statuses),r=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?et(n,!0).forEach((function(t){Object(y.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):et(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({statuses:a},Object(l.a)(t,["fetch","reset","statuses"]));return c.a.createElement(c.a.Fragment,null,a.isError?c.a.createElement(tt,{reload:n}):c.a.createElement(e,r))}}]),n}(c.a.Component)},at=Object(s.b)((function(e){return{statuses:ie(e),tickets:fe(e)}}),(function(e){return{fetch:Object(pe.bindActionCreators)($,e),reset:Object(pe.bindActionCreators)(Z,e)}}))(nt(Ze)),rt=(n(85),function(e){var t=e.children;return c.a.createElement("div",{className:"button-group"},t)}),ct=function(e){var t=e.sortBy,n=e.selectSortBy,a=Object(ke.b)(),r=Object(Ee.a)(a,1)[0],i=t===L.price;return c.a.createElement(rt,null,c.a.createElement(d,{div:!0,type:i?"primary":"secondary",size:"lg",onClick:function(){return!i&&n(L.price)}},r("findTickets.tabs.".concat(L.price))),c.a.createElement(d,{div:!0,type:i?"secondary":"primary",size:"lg",onClick:function(){return i&&n(L.duration)}},r("findTickets.tabs.".concat(L.duration))))},it=Object(s.b)((function(e){return{sortBy:se(e)}}),(function(e){return{selectSortBy:Object(pe.bindActionCreators)(Y,e)}}))(ct),ot=function(){return c.a.createElement("div",{className:"find-tickets"},c.a.createElement("div",{className:"find-tickets__top"},c.a.createElement(de,null)),c.a.createElement("div",{className:"find-tickets__body"},c.a.createElement(be,{Sidebar:Ne},c.a.createElement("div",{className:"find-tickets__row"},c.a.createElement(it,null)),c.a.createElement("div",{className:"find-tickets__row"},c.a.createElement(at,null)))))},st=n(15),lt=function(){return c.a.createElement(b.a,null,c.a.createElement(st.d,null,c.a.createElement(st.b,{exact:!0,path:"/"},c.a.createElement(st.a,{to:"/find-tickets"})),c.a.createElement(st.b,{exact:!0,path:"/find-tickets"},c.a.createElement(ot,null)),c.a.createElement(st.b,{exact:!0,path:"/o-privet"},c.a.createElement(p,null)),c.a.createElement(st.b,{path:"*"},c.a.createElement(st.a,{to:"/o-privet"}))))},ut=n(24),mt=(n(48),n(29),{currency:{name:"RUB",symbol:"\u0420"},locale:"ru-RU"}),ft=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:mt.currency;return e},dt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:mt.locale;return e};function bt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var pt=Object(pe.combineReducers)(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?bt(n,!0).forEach((function(t){Object(y.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):bt(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},a)),Et=Object(pe.combineReducers)({tickets:ae,statuses:re,sortBy:ne,pagination:ce,filters:Object(pe.combineReducers)({transfers:te})}),Ot=Object(pe.combineReducers)({common:pt,findTickets:Et}),vt=[ut.a];var yt=pe.applyMiddleware.apply(void 0,vt);var ht,jt=yt(pe.createStore)(Ot),_t=n(49),gt={findTickets:{tabs:(ht={},Object(y.a)(ht,L.price,"\u0421\u0430\u043c\u044b\u0439 \u0434\u0435\u0448\u0435\u0432\u044b\u0439"),Object(y.a)(ht,L.duration,"\u0421\u0430\u043c\u044b\u0439 \u0431\u044b\u0441\u0442\u0440\u044b\u0439"),ht),transfers:{title:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043e\u043a",all:"\u0412\u0441\u0435",labelZero:"\u0411\u0435\u0437 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043e\u043a",label_0:"{{count}} \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0430",label_1:"{{count}} \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0438",label_2:"{{count}} \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043e\u043a"}},tickets:{duration:"\u0412 \u043f\u0443\u0442\u0438",notFound:"\u041f\u043e \u0432\u044b\u0431\u0440\u0430\u043d\u043d\u044b\u043c \u043a\u0440\u0438\u0442\u0435\u0440\u0438\u044f\u043c \u043d\u0435\u0442 \u0431\u0438\u043b\u0435\u0442\u043e\u0432, \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u043f\u043e\u0438\u0441\u043a \u2708\ufe0f"},labels:{time:{daysShort:"\u0434",hoursShort:"\u0447",minutesShort:"\u043c"},reload:"\u043f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c"},commonMessages:{error:"\u0427\u0442\u043e \u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a"}},kt=new(function(){function e(){Object(Ye.a)(this,e)}return Object(Je.a)(e,[{key:"init",value:function(e){_t.a.use(ke.a).init({resources:{"ru-RU":{translation:gt}},lng:e,fallbackLng:"ru-RU",interpolation:{escapeValue:!1}})}}]),e}()),St=(n(86),new(function(){function e(){Object(Ye.a)(this,e)}return Object(Je.a)(e,[{key:"setLocale",value:function(e){we.a.locale(e)}}]),e}())),Nt=function(e){!function(e){var t=Fe(e);kt.init(Fe(e)),St.setLocale(t)}(e)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Tt=function(){o.a.render(c.a.createElement(s.a,{store:jt},c.a.createElement(lt,null)),document.getElementById("root"))};Nt(jt.getState()),jt.subscribe(Tt),Tt(),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[52,1,2]]]);
//# sourceMappingURL=main.672bd1bf.chunk.js.map