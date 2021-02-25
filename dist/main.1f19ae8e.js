// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"style.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.string = void 0;
var string = "\n.head {\n    background: #83c2f1;\n    width: 370px;\n    height: 320px;\n    border-radius: 50%;\n    border: 5px solid #34373c;\n    position: relative;\n    z-index: 1;\n}\n\n.face {\n    background: #ffffff;\n    width: 310px;\n    height: 250px;\n    border-radius: 50%;\n    border: 5px solid #34373c;\n    position: absolute;\n    bottom: -5px;\n    left: 50%;\n    transform: translateX(-50%);\n}\n\n.left-eye {\n    background: #ffffff;\n    width: 75px;\n    height: 100px;\n    position: absolute;\n    border: 5px solid #34373c;\n    border-radius: 50%;\n    transform: rotate(5deg);\n    right: 50%;\n    top: -20%;\n}\n\n.left-eye::before {\n    content: '';\n    display: block;\n    position: absolute;\n    width: 25px;\n    height: 38px;\n    background: #34373c;\n    border-radius: 50%;\n    bottom: 15%;\n    left: 50%;\n}\n\n.left-eye::after {\n    content: '';\n    display: block;\n    position: absolute;\n    width: 12px;\n    height: 18px;\n    background: #ffffff;\n    border-radius: 50%;\n    bottom: 27%;\n    left: 60%;\n}\n\n.right-eye {\n    background: #ffffff;\n    width: 75px;\n    height: 100px;\n    position: absolute;\n    border: 5px solid #34373c;\n    border-radius: 50%;\n    transform: rotate(-5deg);\n    left: 50%;\n    top: -20%;\n}\n\n.right-eye::before {\n    content: '';\n    display: block;\n    position: absolute;\n    width: 25px;\n    height: 38px;\n    background: #34373c;\n    border-radius: 50%;\n    bottom: 15%;\n    right: 50%;\n}\n\n.right-eye::after {\n    content: '';\n    display: block;\n    position: absolute;\n    width: 12px;\n    height: 18px;\n    background: #ffffff;\n    border-radius: 50%;\n    bottom: 27%;\n    left: 20%;\n}\n\n.nose {\n    width: 47px;\n    height: 47px;\n    border: 6px solid #34373c;\n    background: #f06274;\n    border-radius: 50%;\n    position: absolute;\n    left: 50%;\n    transform: translateX(-50%);\n    top: 14%;\n}\n\n.nose::before {\n    content: '';\n    background: rgb(255, 255, 255);\n    background: radial-gradient(circle, rgba(255, 255, 255, 1) 50%, rgba(240, 98, 116, 1) 100%);\n    display: block;\n    width: 12px;\n    height: 12px;\n    border-radius: 50%;\n    position: absolute;\n    left: 40%;\n    top: 15%;\n}\n\n.nose::after {\n    content: '';\n    display: block;\n    position: absolute;\n    width: 5px;\n    height: 100px;\n    background: #34373c;\n    left: 50%;\n    transform: translateX(-50%);\n    top: 40px;\n}\n\n.mouth {\n    width: 30px;\n    height: 30px;\n    position: absolute;\n    background: rgb(255, 255, 255);\n    background: linear-gradient(-45deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 50%, rgba(253, 144, 158, 1) 50%, rgba(253, 144, 158, 1) 100%);\n    border-top: 5px solid #34373c;\n    border-left: 5px solid #34373c;\n    transform: translateX(-50%) rotate(45deg);\n    left: 50%;\n    top: 66%;\n    border-top-left-radius: 25px;\n}\n\n.mouth::before {\n    content: '';\n    display: block;\n    width: 60px;\n    height: 30px;\n    background: #fc8fa0;\n    transform: rotate(-50deg) skew(-45deg);\n    border-bottom-left-radius: 80%;\n    border-top-right-radius: 100%;\n    position: absolute;\n    left: -55%;\n    top: 25%;\n    border-left: 7px solid #34373c;\n    border-bottom: 5px solid #34373c;\n}\n\n.mouth::after {\n    content: '';\n    display: block;\n    width: 60px;\n    height: 30px;\n    background: #fc8fa0;\n    transform: rotate(-40deg) skew(45deg);\n    border-bottom-right-radius: 80%;\n    border-top-left-radius: 100%;\n    position: absolute;\n    right: -105%;\n    top: 6%;\n    border-right: 7px solid #34373c;\n    border-bottom: 5px solid #34373c;\n}\n\n.left-blusher {\n    width: 60px;\n    height: 45px;\n    background: rgb(253, 200, 205);\n    background: radial-gradient(circle, rgba(253, 200, 205, 1) 0%, rgba(253, 200, 205, 1) 50%, rgba(255, 255, 255, 1) 100%);\n    position: absolute;\n    top: 25%;\n    left: 15%;\n    border-radius: 50%;\n    animation: change 1s infinite alternate;\n}\n\n.left-blusher::before {\n    content: '';\n    display: block;\n    width: 3px;\n    height: 20px;\n    background: #df7e91;\n    transform: rotate(25deg);\n    position: absolute;\n    top: 20%;\n    left: 30%;\n    border-radius: 1px;\n}\n\n.left-blusher::after {\n    content: '';\n    display: block;\n    width: 3px;\n    height: 20px;\n    background: #df7e91;\n    transform: rotate(25deg);\n    position: absolute;\n    top: 20%;\n    left: 60%;\n    border-radius: 1px;\n}\n\n.right-blusher {\n    width: 60px;\n    height: 45px;\n    background: rgb(253, 200, 205);\n    background: radial-gradient(circle, rgba(253, 200, 205, 1) 0%, rgba(253, 200, 205, 1) 50%, rgba(255, 255, 255, 1) 100%);\n    position: absolute;\n    top: 25%;\n    left: 65%;\n    border-radius: 50%;\n    animation: change 1s infinite alternate;\n}\n\n.right-blusher::before {\n    content: '';\n    display: block;\n    width: 3px;\n    height: 20px;\n    background: #df7e91;\n    transform: rotate(25deg);\n    position: absolute;\n    top: 20%;\n    left: 60%;\n    border-radius: 1px;\n}\n\n.right-blusher::after {\n    content: '';\n    display: block;\n    width: 3px;\n    height: 20px;\n    background: #df7e91;\n    transform: rotate(25deg);\n    position: absolute;\n    top: 20%;\n    left: 30%;\n    border-radius: 1px;\n}\n\n.left-beard1 {\n    width: 100px;\n    height: 5px;\n    background: #34373c;\n    transform: rotate(20deg);\n    position: absolute;\n    border-radius: 2px;\n    top: 20%;\n    left: -5%;\n}\n\n.left-beard2 {\n    width: 100px;\n    height: 5px;\n    background: #34373c;\n    position: absolute;\n    border-radius: 2px;\n    top: 38%;\n    left: -5%;\n}\n\n.left-beard3 {\n    width: 90px;\n    height: 5px;\n    background: #34373c;\n    transform: rotate(-20deg);\n    position: absolute;\n    border-radius: 2px;\n    top: 56%;\n    left: 0;\n}\n\n.right-beard1 {\n    width: 100px;\n    height: 5px;\n    background: #34373c;\n    transform: rotate(-20deg);\n    position: absolute;\n    border-radius: 2px;\n    top: 20%;\n    right: -5%;\n}\n\n.right-beard2 {\n    width: 100px;\n    height: 5px;\n    background: #34373c;\n    position: absolute;\n    border-radius: 2px;\n    top: 38%;\n    right: -5%;\n}\n\n.right-beard3 {\n    width: 90px;\n    height: 5px;\n    background: #34373c;\n    transform: rotate(20deg);\n    position: absolute;\n    border-radius: 2px;\n    top: 56%;\n    right: 0;\n}\n\n.neck {\n    width: 300px;\n    height: 120px;\n    border: 15px solid transparent;\n    border-bottom-color: #f56475;\n    border-radius: 50%;\n    position: absolute;\n    bottom: 0;\n    left: 50%;\n    transform: translateX(-50%);\n}\n\n.neck::before {\n    content: '';\n    display: block;\n    width: 300px;\n    height: 120px;\n    border: 5px solid transparent;\n    border-bottom-color: #34373c;\n    border-radius: 50%;\n    position: absolute;\n    bottom: -2%;\n    left: 50%;\n    transform: translateX(-50%);\n}\n\n.neck::after {\n    content: '';\n    display: block;\n    width: 300px;\n    height: 120px;\n    border: 5px solid transparent;\n    border-bottom-color: #34373c;\n    border-radius: 50%;\n    position: absolute;\n    bottom: -20%;\n    left: 50%;\n    transform: translateX(-50%);\n}\n\n.neck-left {\n    width: 5px;\n    height: 15px;\n    background: #34373c;\n    position: absolute;\n    bottom: 8%;\n    left: 4%;\n    transform: rotate(20deg);\n}\n\n.neck-right {\n    width: 5px;\n    height: 15px;\n    background: #34373c;\n    position: absolute;\n    bottom: 8%;\n    right: 4%;\n    transform: rotate(-20deg);\n}\n\n.body {\n    width: 350px;\n    height: 500px;\n    background: #8ac2f1;\n    border: 5px solid #34373c;\n    border-radius: 50%;\n    position: absolute;\n    z-index: -1;\n    top: 68%;\n    left: 50%;\n    transform: translateX(-50%);\n}\n\n.body::before {\n    content: '';\n    display: block;\n    width: 240px;\n    height: 450px;\n    background: #ffffff;\n    border: 5px solid #34373c;\n    border-radius: 50%;\n    position: absolute;\n    z-index: -1;\n    top: 0;\n    left: 50%;\n    transform: translateX(-50%);\n}\n\n.small-bell {\n    width: 55px;\n    height: 55px;\n    background: #f2db88;\n    border-radius: 50%;\n    border: 5px solid #34373c;\n    position: absolute;\n    top: 20%;\n    left: 50%;\n    transform: translateX(-50%);\n    overflow: hidden;\n}\n\n.small-bell::before {\n    content: '';\n    display: block;\n    width: 5px;\n    height: 12px;\n    background: #34373c;\n    position: absolute;\n    left: 50%;\n    transform: translateX(-50%);\n    bottom: 0;\n}\n\n.small-bell::after {\n    content: '';\n    display: block;\n    width: 18px;\n    height: 18px;\n    border-radius: 50%;\n    border: 5px solid #34373c;\n    position: absolute;\n    left: 50%;\n    transform: translateX(-50%);\n    top: 45%;\n}\n\n.small-line1 {\n    width: 120px;\n    height: 100px;\n    border: 5px solid #34373c;\n    border-radius: 50%;\n    position: absolute;\n    top: 15%;\n    left: 50%;\n    transform: translateX(-50%) rotate(10deg);\n}\n\n.small-line2 {\n    width: 120px;\n    height: 100px;\n    border: 5px solid #34373c;\n    border-radius: 50%;\n    position: absolute;\n    top: 30%;\n    left: 50%;\n    transform: translateX(-50%) rotate(10deg);\n}\n\n@keyframes change {\n    from {\n        transform: scale(0.8);\n    }\n    to {\n        transform: scale(1);\n    }\n}";
exports.string = string;
},{}],"main.js":[function(require,module,exports) {
"use strict";

var _style = require("./style");

var player = {
  //声明变量
  n: 1,
  id: undefined,
  ui: {
    showString: document.querySelector('.show-string'),
    style: document.querySelector('style'),
    btnPlay: document.querySelector('.play'),
    pause: document.querySelector('.pause')
  },
  //初始化方法
  init: function init() {
    player.play();
    player.bindEvents();
  },
  //绑定按钮的事件
  bindEvents: function bindEvents() {
    player.ui.btnPlay.onclick = function () {
      player.clearClock();
      player.play();
    };

    player.ui.pause.onclick = player.clearClock;
  },
  //重复执行run函数
  play: function play() {
    player.id = setInterval(player.run);
  },
  //在页面上展示内容
  run: function run() {
    if (player.n > _style.string.length) {
      player.clearClock();
      return;
    }

    player.ui.showString.innerText = _style.string.substring(0, player.n);
    player.ui.style.innerHTML = _style.string.substring(0, player.n);
    player.n += 1;
    player.ui.showString.scrollTop = 9999;
  },
  //清除计时器
  clearClock: function clearClock() {
    window.clearInterval(player.id);
  }
};
player.init();
},{"./style":"style.js"}],"C:/Users/ggg/AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "5392" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["C:/Users/ggg/AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map