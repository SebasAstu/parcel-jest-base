var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},t={},u=e.parcelRequirec771;null==u&&((u=function(e){if(e in r)return r[e].exports;if(e in t){var u=t[e];delete t[e];var n={id:e,exports:{}};return r[e]=n,u.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,r){t[e]=r},e.parcelRequirec771=u),u.register("iSlgh",(function(e,r){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=void 0;var t=function(e,r){return e+r};e.exports.default=t})),u.register("38mAt",(function(e,r){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=void 0;var t=function(e,r){return e*r};e.exports.default=t}));var n=l(u("iSlgh")),o=l(u("38mAt"));function l(e){return e&&e.__esModule?e:{default:e}}var d=document.querySelector("#primer-numero"),i=document.querySelector("#segundo-numero"),a=document.querySelector("#sumar-form"),f=document.querySelector("#resultado-div"),c=document.querySelector("#primer-numeroMul"),s=document.querySelector("#segundo-numeroMul"),p=document.querySelector("#multiplicar-form"),m=document.querySelector("#resultado-divMul");a.addEventListener("submit",(function(e){e.preventDefault();var r=Number.parseInt(d.value),t=Number.parseInt(i.value);f.innerHTML="<p>"+(0,n.default)(r,t)+"</p>"})),p.addEventListener("submit",(function(e){e.preventDefault();var r=Number.parseInt(c.value),t=Number.parseInt(s.value);m.innerHTML="<p>"+(0,o.default)(r,t)+"</p>"}));
//# sourceMappingURL=index.6274988d.js.map