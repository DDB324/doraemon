parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"IwUp":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.string=void 0;var n="\n.head {\n    background: #83c2f1;\n    width: 370px;\n    height: 320px;\n    border-radius: 50%;\n    border: 5px solid #34373c;\n    position: relative;\n    z-index: 1;\n}\n\n.face {\n    background: #ffffff;\n    width: 310px;\n    height: 250px;\n    border-radius: 50%;\n    border: 5px solid #34373c;\n    position: absolute;\n    bottom: -5px;\n    left: 50%;\n    transform: translateX(-50%);\n}\n\n.left-eye {\n    background: #ffffff;\n    width: 75px;\n    height: 100px;\n    position: absolute;\n    border: 5px solid #34373c;\n    border-radius: 50%;\n    transform: rotate(5deg);\n    right: 50%;\n    top: -20%;\n}\n\n.left-eye::before {\n    content: '';\n    display: block;\n    position: absolute;\n    width: 25px;\n    height: 38px;\n    background: #34373c;\n    border-radius: 50%;\n    bottom: 15%;\n    left: 50%;\n}\n\n.left-eye::after {\n    content: '';\n    display: block;\n    position: absolute;\n    width: 12px;\n    height: 18px;\n    background: #ffffff;\n    border-radius: 50%;\n    bottom: 27%;\n    left: 60%;\n}\n\n.right-eye {\n    background: #ffffff;\n    width: 75px;\n    height: 100px;\n    position: absolute;\n    border: 5px solid #34373c;\n    border-radius: 50%;\n    transform: rotate(-5deg);\n    left: 50%;\n    top: -20%;\n}\n\n.right-eye::before {\n    content: '';\n    display: block;\n    position: absolute;\n    width: 25px;\n    height: 38px;\n    background: #34373c;\n    border-radius: 50%;\n    bottom: 15%;\n    right: 50%;\n}\n\n.right-eye::after {\n    content: '';\n    display: block;\n    position: absolute;\n    width: 12px;\n    height: 18px;\n    background: #ffffff;\n    border-radius: 50%;\n    bottom: 27%;\n    left: 20%;\n}\n\n.nose {\n    width: 47px;\n    height: 47px;\n    border: 6px solid #34373c;\n    background: #f06274;\n    border-radius: 50%;\n    position: absolute;\n    left: 50%;\n    transform: translateX(-50%);\n    top: 14%;\n}\n\n.nose::before {\n    content: '';\n    background: rgb(255, 255, 255);\n    background: radial-gradient(circle, rgba(255, 255, 255, 1) 50%, rgba(240, 98, 116, 1) 100%);\n    display: block;\n    width: 12px;\n    height: 12px;\n    border-radius: 50%;\n    position: absolute;\n    left: 40%;\n    top: 15%;\n}\n\n.nose::after {\n    content: '';\n    display: block;\n    position: absolute;\n    width: 5px;\n    height: 100px;\n    background: #34373c;\n    left: 50%;\n    transform: translateX(-50%);\n    top: 40px;\n}\n\n.mouth {\n    width: 30px;\n    height: 30px;\n    position: absolute;\n    background: rgb(255, 255, 255);\n    background: linear-gradient(-45deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 50%, rgba(253, 144, 158, 1) 50%, rgba(253, 144, 158, 1) 100%);\n    border-top: 5px solid #34373c;\n    border-left: 5px solid #34373c;\n    transform: translateX(-50%) rotate(45deg);\n    left: 50%;\n    top: 66%;\n    border-top-left-radius: 25px;\n}\n\n.mouth::before {\n    content: '';\n    display: block;\n    width: 60px;\n    height: 30px;\n    background: #fc8fa0;\n    transform: rotate(-50deg) skew(-45deg);\n    border-bottom-left-radius: 80%;\n    border-top-right-radius: 100%;\n    position: absolute;\n    left: -55%;\n    top: 25%;\n    border-left: 7px solid #34373c;\n    border-bottom: 5px solid #34373c;\n}\n\n.mouth::after {\n    content: '';\n    display: block;\n    width: 60px;\n    height: 30px;\n    background: #fc8fa0;\n    transform: rotate(-40deg) skew(45deg);\n    border-bottom-right-radius: 80%;\n    border-top-left-radius: 100%;\n    position: absolute;\n    right: -105%;\n    top: 6%;\n    border-right: 7px solid #34373c;\n    border-bottom: 5px solid #34373c;\n}\n\n.left-blusher {\n    width: 60px;\n    height: 45px;\n    background: rgb(253, 200, 205);\n    background: radial-gradient(circle, rgba(253, 200, 205, 1) 0%, rgba(253, 200, 205, 1) 50%, rgba(255, 255, 255, 1) 100%);\n    position: absolute;\n    top: 25%;\n    left: 15%;\n    border-radius: 50%;\n    animation: change 1s infinite alternate;\n}\n\n.left-blusher::before {\n    content: '';\n    display: block;\n    width: 3px;\n    height: 20px;\n    background: #df7e91;\n    transform: rotate(25deg);\n    position: absolute;\n    top: 20%;\n    left: 30%;\n    border-radius: 1px;\n}\n\n.left-blusher::after {\n    content: '';\n    display: block;\n    width: 3px;\n    height: 20px;\n    background: #df7e91;\n    transform: rotate(25deg);\n    position: absolute;\n    top: 20%;\n    left: 60%;\n    border-radius: 1px;\n}\n\n.right-blusher {\n    width: 60px;\n    height: 45px;\n    background: rgb(253, 200, 205);\n    background: radial-gradient(circle, rgba(253, 200, 205, 1) 0%, rgba(253, 200, 205, 1) 50%, rgba(255, 255, 255, 1) 100%);\n    position: absolute;\n    top: 25%;\n    left: 65%;\n    border-radius: 50%;\n    animation: change 1s infinite alternate;\n}\n\n.right-blusher::before {\n    content: '';\n    display: block;\n    width: 3px;\n    height: 20px;\n    background: #df7e91;\n    transform: rotate(25deg);\n    position: absolute;\n    top: 20%;\n    left: 60%;\n    border-radius: 1px;\n}\n\n.right-blusher::after {\n    content: '';\n    display: block;\n    width: 3px;\n    height: 20px;\n    background: #df7e91;\n    transform: rotate(25deg);\n    position: absolute;\n    top: 20%;\n    left: 30%;\n    border-radius: 1px;\n}\n\n.left-beard1 {\n    width: 100px;\n    height: 5px;\n    background: #34373c;\n    transform: rotate(20deg);\n    position: absolute;\n    border-radius: 2px;\n    top: 20%;\n    left: -5%;\n}\n\n.left-beard2 {\n    width: 100px;\n    height: 5px;\n    background: #34373c;\n    position: absolute;\n    border-radius: 2px;\n    top: 38%;\n    left: -5%;\n}\n\n.left-beard3 {\n    width: 90px;\n    height: 5px;\n    background: #34373c;\n    transform: rotate(-20deg);\n    position: absolute;\n    border-radius: 2px;\n    top: 56%;\n    left: 0;\n}\n\n.right-beard1 {\n    width: 100px;\n    height: 5px;\n    background: #34373c;\n    transform: rotate(-20deg);\n    position: absolute;\n    border-radius: 2px;\n    top: 20%;\n    right: -5%;\n}\n\n.right-beard2 {\n    width: 100px;\n    height: 5px;\n    background: #34373c;\n    position: absolute;\n    border-radius: 2px;\n    top: 38%;\n    right: -5%;\n}\n\n.right-beard3 {\n    width: 90px;\n    height: 5px;\n    background: #34373c;\n    transform: rotate(20deg);\n    position: absolute;\n    border-radius: 2px;\n    top: 56%;\n    right: 0;\n}\n\n.neck {\n    width: 300px;\n    height: 120px;\n    border: 15px solid transparent;\n    border-bottom-color: #f56475;\n    border-radius: 50%;\n    position: absolute;\n    bottom: 0;\n    left: 50%;\n    transform: translateX(-50%);\n}\n\n.neck::before {\n    content: '';\n    display: block;\n    width: 300px;\n    height: 120px;\n    border: 5px solid transparent;\n    border-bottom-color: #34373c;\n    border-radius: 50%;\n    position: absolute;\n    bottom: -2%;\n    left: 50%;\n    transform: translateX(-50%);\n}\n\n.neck::after {\n    content: '';\n    display: block;\n    width: 300px;\n    height: 120px;\n    border: 5px solid transparent;\n    border-bottom-color: #34373c;\n    border-radius: 50%;\n    position: absolute;\n    bottom: -20%;\n    left: 50%;\n    transform: translateX(-50%);\n}\n\n.neck-left {\n    width: 5px;\n    height: 15px;\n    background: #34373c;\n    position: absolute;\n    bottom: 8%;\n    left: 4%;\n    transform: rotate(20deg);\n}\n\n.neck-right {\n    width: 5px;\n    height: 15px;\n    background: #34373c;\n    position: absolute;\n    bottom: 8%;\n    right: 4%;\n    transform: rotate(-20deg);\n}\n\n.body {\n    width: 350px;\n    height: 500px;\n    background: #8ac2f1;\n    border: 5px solid #34373c;\n    border-radius: 50%;\n    position: absolute;\n    z-index: -1;\n    top: 68%;\n    left: 50%;\n    transform: translateX(-50%);\n}\n\n.body::before {\n    content: '';\n    display: block;\n    width: 240px;\n    height: 450px;\n    background: #ffffff;\n    border: 5px solid #34373c;\n    border-radius: 50%;\n    position: absolute;\n    z-index: -1;\n    top: 0;\n    left: 50%;\n    transform: translateX(-50%);\n}\n\n.small-bell {\n    width: 55px;\n    height: 55px;\n    background: #f2db88;\n    border-radius: 50%;\n    border: 5px solid #34373c;\n    position: absolute;\n    top: 20%;\n    left: 50%;\n    transform: translateX(-50%);\n    overflow: hidden;\n}\n\n.small-bell::before {\n    content: '';\n    display: block;\n    width: 5px;\n    height: 12px;\n    background: #34373c;\n    position: absolute;\n    left: 50%;\n    transform: translateX(-50%);\n    bottom: 0;\n}\n\n.small-bell::after {\n    content: '';\n    display: block;\n    width: 18px;\n    height: 18px;\n    border-radius: 50%;\n    border: 5px solid #34373c;\n    position: absolute;\n    left: 50%;\n    transform: translateX(-50%);\n    top: 45%;\n}\n\n.small-line1 {\n    width: 120px;\n    height: 100px;\n    border: 5px solid #34373c;\n    border-radius: 50%;\n    position: absolute;\n    top: 15%;\n    left: 50%;\n    transform: translateX(-50%) rotate(10deg);\n}\n\n.small-line2 {\n    width: 120px;\n    height: 100px;\n    border: 5px solid #34373c;\n    border-radius: 50%;\n    position: absolute;\n    top: 30%;\n    left: 50%;\n    transform: translateX(-50%) rotate(10deg);\n}\n\n@keyframes change {\n    from {\n        transform: scale(0.8);\n    }\n    to {\n        transform: scale(1);\n    }\n}";exports.string=n;
},{}],"epB2":[function(require,module,exports) {
"use strict";var n=require("./style"),e={n:1,id:void 0,ui:{showString:document.querySelector(".show-string"),style:document.querySelector("style"),btnPlay:document.querySelector(".play"),pause:document.querySelector(".pause")},init:function(){e.play(),e.bindEvents()},bindEvents:function(){e.ui.btnPlay.onclick=function(){e.clearClock(),e.play()},e.ui.pause.onclick=e.clearClock},play:function(){e.id=setInterval(e.run)},run:function(){e.n>n.string.length?e.clearClock():(e.ui.showString.innerText=n.string.substring(0,e.n),e.ui.style.innerHTML=n.string.substring(0,e.n),e.n+=1,e.ui.showString.scrollTop=9999)},clearClock:function(){window.clearInterval(e.id)}};e.init();
},{"./style":"IwUp"}]},{},["epB2"], null)
//# sourceMappingURL=main.52a867b5.js.map