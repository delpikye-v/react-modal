!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("react"),require("react-dom"),require("@delpi/common")):"function"==typeof define&&define.amd?define(["exports","react","react-dom","@delpi/common"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).ReactModal={},e.React,e.reactDom,e.common)}(this,(function(e,t,o,l){"use strict";function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var a=n(t),d=function(){return a.default.createElement("svg",{fill:"currentColor",viewBox:"0 0 24 24",width:"1em",height:"1em"},a.default.createElement("path",{d:"M18.707 5.293a1 1 0 0 0-1.414 0L12 10.586 6.707 5.293a1 1 0 0 0-1.414 1.414L10.586 12l-5.293 5.293a1 1 0 1 0 1.414 1.414L12 13.414l5.293 5.293a1 1 0 0 0 1.414-1.414L13.414 12l5.293-5.293a1 1 0 0 0 0-1.414z"}))};var i=function(e){var l=e.children,n=e.id,a=void 0===n?"portal-modal":n,d=t.useState(null),i=d[0],c=d[1];return t.useLayoutEffect((function(){return c(function(e){var t=document.getElementById(e);return t||((t=document.createElement("div")).setAttribute("id",e),document.body.appendChild(t),t)}(a)),function(){i&&i.parentNode&&i.parentNode.removeChild(i)}}),[a]),null===i?null:o.createPortal(l,i)};e.ModalCloseIcon=d,e.ReactPortal=i,e.default=function(e){var o=e.children,n=e.id,c=e.modalId,u=e.isOpen,r=e.center,s=void 0!==r&&r,m=e.className,f=e.tabIndex,v=void 0===f?-1:f,E=e.showHeader,p=void 0===E||E,b=e.showFooter,h=void 0===b||b,C=e.modalTitle,g=void 0===C?a.default.createElement(a.default.Fragment,null):C,N=e.modalHeader,w=e.modalFooter,y=e.customizeXClose,k=e.alignFooter,x=void 0===k?"RIGHT":k,H=e.fullButtonhMobile,j=void 0===H||H,L=e.showExtraButton,T=void 0!==L&&L,U=e.showAcceptButton,A=void 0===U||U,B=e.showCancelButton,R=void 0===B||B,F=e.showXClose,I=void 0===F||F,S=e.disabledClose,M=void 0!==S&&S,O=e.escapeClose,X=void 0===O||O,q=e.outSideClose,D=void 0===q||q,P=e.showSplitBorder,z=void 0===P||P,_=e.toggleTitleExpand,G=void 0!==_&&_,K=e.fullSceen,J=void 0!==K&&K,Q=e.classNameAccept,V=e.classNameCancel,W=e.classNameExtra,Y=e.labelAccept,Z=void 0===Y?"OK":Y,$=e.labelCancel,ee=void 0===$?"CANCEL":$,te=e.labelExtra,oe=void 0===te?"EXTRA":te,le=e.backdropDark,ne=void 0!==le&&le,ae=e.handleToggle,de=void 0===ae?function(){}:ae,ie=e.handleAccept,ce=void 0===ie?function(){}:ie,ue=e.handleCancel,re=void 0===ue?function(){}:ue,se=e.handleEscapse,me=void 0===se?function(){}:se,fe=e.handleXClose,ve=e.handleExtra,Ee=void 0===ve?function(){}:ve,pe=e.handleOpen,be=void 0===pe?function(){}:pe,he=a.default.useRef(null),Ce=t.useState(u),ge=Ce[0],Ne=Ce[1],we=t.useState(!1),ye=we[0],ke=we[1];l.Hooks.useEventListener("keydown",(function(e){X&&"Escape"===e.key&&(xe(!1),me())})),t.useEffect((function(){if(u&&D&&!M){var e=function(e){he.current&&!he.current.contains(e.target)&&xe(!1)};return document.addEventListener("mousedown",e),function(){document.removeEventListener("mousedown",e)}}}),[u,D]),t.useEffect((function(){ke(J)}),[J]),t.useEffect((function(){Ne(u)}),[u]);var xe=function(e){M||(Ne(e),be(e))};return ge?a.default.createElement(i,{id:n},a.default.createElement("div",{id:c,className:l.HtmlUtils.joinClass("modal2",ne&&"dark-mode",ye&&"modal2-toggle",s&&"modal2-center",m),tabIndex:v,role:"dialog","aria-hidden":"true"},a.default.createElement("div",{ref:he,className:"modal2-content"},I&&!M&&a.default.createElement("div",{className:"modal2-close",onClick:function(){l.CmUtils.isFunc(fe)?fe():xe(!1)}},y||a.default.createElement(d,null)),p&&a.default.createElement("div",{className:l.HtmlUtils.joinClass("modal2-header",z&&"split-border")},a.default.createElement("span",{className:l.HtmlUtils.joinClass("modal2-title",G&&"modal2-title-toggle"),onDoubleClick:function(){G&&(ke(!ye),de(!ye))}},g),N),a.default.createElement("div",{className:"modal2-body"},o),h&&(w||a.default.createElement((function(){return a.default.createElement("div",{className:l.HtmlUtils.joinClass("modal2-footer",z&&"split-border","CENTER"===x&&"align-center","LEFT"===x&&"align-left",j&&"button-full-width-mobile")},R&&!M&&a.default.createElement("button",{className:l.HtmlUtils.joinClass("modal2-button modal2-light-button",V),onClick:function(){xe(!1),re()}},ee),A&&a.default.createElement("button",{className:l.HtmlUtils.joinClass("modal2-button modal2-primary-button",Q),onClick:function(){ce()}},Z),T&&a.default.createElement("button",{className:l.HtmlUtils.joinClass("modal2-button modal2-danger-button",W),onClick:function(){Ee()}},oe))}),null))))):null},Object.defineProperty(e,"__esModule",{value:!0})}));
