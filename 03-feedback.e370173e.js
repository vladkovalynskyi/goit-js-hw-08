var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,r=/^0o[0-7]+$/i,a=parseInt,u="object"==typeof e&&e&&e.Object===Object&&e,f="object"==typeof self&&self&&self.Object===Object&&self,c=u||f||Function("return this")(),l=Object.prototype.toString,s=Math.max,d=Math.min,v=function(){return c.Date.now()};function m(e,t,n){var i,o,r,a,u,f,c=0,l=!1,m=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=i,r=o;return i=o=void 0,c=t,a=e.apply(r,n)}function j(e){return c=e,u=setTimeout(w,t),l?b(e):a}function h(e){var n=e-f;return void 0===f||n>=t||n<0||m&&e-c>=r}function w(){var e=v();if(h(e))return T(e);u=setTimeout(w,function(e){var n=t-(e-f);return m?d(n,r-(e-c)):n}(e))}function T(e){return u=void 0,g&&i?b(e):(i=o=void 0,a)}function x(){var e=v(),n=h(e);if(i=arguments,o=this,f=e,n){if(void 0===u)return j(f);if(m)return u=setTimeout(w,t),b(f)}return void 0===u&&(u=setTimeout(w,t)),a}return t=y(t)||0,p(n)&&(l=!!n.leading,r=(m="maxWait"in n)?s(y(n.maxWait)||0,t):r,g="trailing"in n?!!n.trailing:g),x.cancel=function(){void 0!==u&&clearTimeout(u),c=0,i=f=o=u=void 0},x.flush=function(){return void 0===u?a:T(v())},x}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==l.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var u=o.test(e);return u||r.test(e)?a(e.slice(2),u?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),m(e,t,{leading:i,maxWait:t,trailing:o})};const g=document.querySelector(".feedback-form"),b=g.querySelector('input[name="email"]'),j=g.querySelector('textarea[name="message"]');g.addEventListener("input",t((function(){const e={email:b.value,message:j.value};localStorage.setItem("feedback-form-state",JSON.stringify(e))}),500)),g.addEventListener("submit",(function(e){e.preventDefault();const t={email:b.value,message:j.value};console.log(t),localStorage.removeItem("feedback-form-state"),g.reset()}));
//# sourceMappingURL=03-feedback.e370173e.js.map