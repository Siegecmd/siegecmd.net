(function () {
  const o = document.createElement("link").relList;
  if (o && o.supports && o.supports("modulepreload")) return;
  for (const h of document.querySelectorAll('link[rel="modulepreload"]')) r(h);
  new MutationObserver((h) => {
    for (const g of h)
      if (g.type === "childList")
        for (const R of g.addedNodes)
          R.tagName === "LINK" && R.rel === "modulepreload" && r(R);
  }).observe(document, { childList: !0, subtree: !0 });
  function s(h) {
    const g = {};
    return (
      h.integrity && (g.integrity = h.integrity),
      h.referrerPolicy && (g.referrerPolicy = h.referrerPolicy),
      h.crossOrigin === "use-credentials"
        ? (g.credentials = "include")
        : h.crossOrigin === "anonymous"
          ? (g.credentials = "omit")
          : (g.credentials = "same-origin"),
      g
    );
  }
  function r(h) {
    if (h.ep) return;
    h.ep = !0;
    const g = s(h);
    fetch(h.href, g);
  }
})();
function Q0(f) {
  return f && f.__esModule && Object.prototype.hasOwnProperty.call(f, "default")
    ? f.default
    : f;
}
var gc = { exports: {} },
  zu = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var O0;
function Dm() {
  if (O0) return zu;
  O0 = 1;
  var f = Symbol.for("react.transitional.element"),
    o = Symbol.for("react.fragment");
  function s(r, h, g) {
    var R = null;
    if (
      (g !== void 0 && (R = "" + g),
      h.key !== void 0 && (R = "" + h.key),
      "key" in h)
    ) {
      g = {};
      for (var U in h) U !== "key" && (g[U] = h[U]);
    } else g = h;
    return (
      (h = g.ref),
      { $$typeof: f, type: r, key: R, ref: h !== void 0 ? h : null, props: g }
    );
  }
  return ((zu.Fragment = o), (zu.jsx = s), (zu.jsxs = s), zu);
}
var M0;
function Um() {
  return (M0 || ((M0 = 1), (gc.exports = Dm())), gc.exports);
}
var Kt = Um(),
  Sc = { exports: {} },
  tt = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var _0;
function xm() {
  if (_0) return tt;
  _0 = 1;
  var f = Symbol.for("react.transitional.element"),
    o = Symbol.for("react.portal"),
    s = Symbol.for("react.fragment"),
    r = Symbol.for("react.strict_mode"),
    h = Symbol.for("react.profiler"),
    g = Symbol.for("react.consumer"),
    R = Symbol.for("react.context"),
    U = Symbol.for("react.forward_ref"),
    p = Symbol.for("react.suspense"),
    m = Symbol.for("react.memo"),
    z = Symbol.for("react.lazy"),
    B = Symbol.iterator;
  function N(v) {
    return v === null || typeof v != "object"
      ? null
      : ((v = (B && v[B]) || v["@@iterator"]),
        typeof v == "function" ? v : null);
  }
  var Q = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    C = Object.assign,
    X = {};
  function w(v, H, L) {
    ((this.props = v),
      (this.context = H),
      (this.refs = X),
      (this.updater = L || Q));
  }
  ((w.prototype.isReactComponent = {}),
    (w.prototype.setState = function (v, H) {
      if (typeof v != "object" && typeof v != "function" && v != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, v, H, "setState");
    }),
    (w.prototype.forceUpdate = function (v) {
      this.updater.enqueueForceUpdate(this, v, "forceUpdate");
    }));
  function q() {}
  q.prototype = w.prototype;
  function Z(v, H, L) {
    ((this.props = v),
      (this.context = H),
      (this.refs = X),
      (this.updater = L || Q));
  }
  var F = (Z.prototype = new q());
  ((F.constructor = Z), C(F, w.prototype), (F.isPureReactComponent = !0));
  var it = Array.isArray,
    P = { H: null, A: null, T: null, S: null, V: null },
    Dt = Object.prototype.hasOwnProperty;
  function At(v, H, L, Y, K, ft) {
    return (
      (L = ft.ref),
      { $$typeof: f, type: v, key: H, ref: L !== void 0 ? L : null, props: ft }
    );
  }
  function Ot(v, H) {
    return At(v.type, H, void 0, void 0, void 0, v.props);
  }
  function St(v) {
    return typeof v == "object" && v !== null && v.$$typeof === f;
  }
  function Jt(v) {
    var H = { "=": "=0", ":": "=2" };
    return (
      "$" +
      v.replace(/[=:]/g, function (L) {
        return H[L];
      })
    );
  }
  var oe = /\/+/g;
  function jt(v, H) {
    return typeof v == "object" && v !== null && v.key != null
      ? Jt("" + v.key)
      : H.toString(36);
  }
  function bl() {}
  function El(v) {
    switch (v.status) {
      case "fulfilled":
        return v.value;
      case "rejected":
        throw v.reason;
      default:
        switch (
          (typeof v.status == "string"
            ? v.then(bl, bl)
            : ((v.status = "pending"),
              v.then(
                function (H) {
                  v.status === "pending" &&
                    ((v.status = "fulfilled"), (v.value = H));
                },
                function (H) {
                  v.status === "pending" &&
                    ((v.status = "rejected"), (v.reason = H));
                }
              )),
          v.status)
        ) {
          case "fulfilled":
            return v.value;
          case "rejected":
            throw v.reason;
        }
    }
    throw v;
  }
  function Qt(v, H, L, Y, K) {
    var ft = typeof v;
    (ft === "undefined" || ft === "boolean") && (v = null);
    var I = !1;
    if (v === null) I = !0;
    else
      switch (ft) {
        case "bigint":
        case "string":
        case "number":
          I = !0;
          break;
        case "object":
          switch (v.$$typeof) {
            case f:
            case o:
              I = !0;
              break;
            case z:
              return ((I = v._init), Qt(I(v._payload), H, L, Y, K));
          }
      }
    if (I)
      return (
        (K = K(v)),
        (I = Y === "" ? "." + jt(v, 0) : Y),
        it(K)
          ? ((L = ""),
            I != null && (L = I.replace(oe, "$&/") + "/"),
            Qt(K, H, L, "", function (ke) {
              return ke;
            }))
          : K != null &&
            (St(K) &&
              (K = Ot(
                K,
                L +
                  (K.key == null || (v && v.key === K.key)
                    ? ""
                    : ("" + K.key).replace(oe, "$&/") + "/") +
                  I
              )),
            H.push(K)),
        1
      );
    I = 0;
    var te = Y === "" ? "." : Y + ":";
    if (it(v))
      for (var pt = 0; pt < v.length; pt++)
        ((Y = v[pt]), (ft = te + jt(Y, pt)), (I += Qt(Y, H, L, ft, K)));
    else if (((pt = N(v)), typeof pt == "function"))
      for (v = pt.call(v), pt = 0; !(Y = v.next()).done; )
        ((Y = Y.value), (ft = te + jt(Y, pt++)), (I += Qt(Y, H, L, ft, K)));
    else if (ft === "object") {
      if (typeof v.then == "function") return Qt(El(v), H, L, Y, K);
      throw (
        (H = String(v)),
        Error(
          "Objects are not valid as a React child (found: " +
            (H === "[object Object]"
              ? "object with keys {" + Object.keys(v).join(", ") + "}"
              : H) +
            "). If you meant to render a collection of children, use an array instead."
        )
      );
    }
    return I;
  }
  function M(v, H, L) {
    if (v == null) return v;
    var Y = [],
      K = 0;
    return (
      Qt(v, Y, "", "", function (ft) {
        return H.call(L, ft, K++);
      }),
      Y
    );
  }
  function G(v) {
    if (v._status === -1) {
      var H = v._result;
      ((H = H()),
        H.then(
          function (L) {
            (v._status === 0 || v._status === -1) &&
              ((v._status = 1), (v._result = L));
          },
          function (L) {
            (v._status === 0 || v._status === -1) &&
              ((v._status = 2), (v._result = L));
          }
        ),
        v._status === -1 && ((v._status = 0), (v._result = H)));
    }
    if (v._status === 1) return v._result.default;
    throw v._result;
  }
  var k =
    typeof reportError == "function"
      ? reportError
      : function (v) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var H = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof v == "object" &&
                v !== null &&
                typeof v.message == "string"
                  ? String(v.message)
                  : String(v),
              error: v,
            });
            if (!window.dispatchEvent(H)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", v);
            return;
          }
          console.error(v);
        };
  function vt() {}
  return (
    (tt.Children = {
      map: M,
      forEach: function (v, H, L) {
        M(
          v,
          function () {
            H.apply(this, arguments);
          },
          L
        );
      },
      count: function (v) {
        var H = 0;
        return (
          M(v, function () {
            H++;
          }),
          H
        );
      },
      toArray: function (v) {
        return (
          M(v, function (H) {
            return H;
          }) || []
        );
      },
      only: function (v) {
        if (!St(v))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return v;
      },
    }),
    (tt.Component = w),
    (tt.Fragment = s),
    (tt.Profiler = h),
    (tt.PureComponent = Z),
    (tt.StrictMode = r),
    (tt.Suspense = p),
    (tt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = P),
    (tt.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (v) {
        return P.H.useMemoCache(v);
      },
    }),
    (tt.cache = function (v) {
      return function () {
        return v.apply(null, arguments);
      };
    }),
    (tt.cloneElement = function (v, H, L) {
      if (v == null)
        throw Error(
          "The argument must be a React element, but you passed " + v + "."
        );
      var Y = C({}, v.props),
        K = v.key,
        ft = void 0;
      if (H != null)
        for (I in (H.ref !== void 0 && (ft = void 0),
        H.key !== void 0 && (K = "" + H.key),
        H))
          !Dt.call(H, I) ||
            I === "key" ||
            I === "__self" ||
            I === "__source" ||
            (I === "ref" && H.ref === void 0) ||
            (Y[I] = H[I]);
      var I = arguments.length - 2;
      if (I === 1) Y.children = L;
      else if (1 < I) {
        for (var te = Array(I), pt = 0; pt < I; pt++)
          te[pt] = arguments[pt + 2];
        Y.children = te;
      }
      return At(v.type, K, void 0, void 0, ft, Y);
    }),
    (tt.createContext = function (v) {
      return (
        (v = {
          $$typeof: R,
          _currentValue: v,
          _currentValue2: v,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (v.Provider = v),
        (v.Consumer = { $$typeof: g, _context: v }),
        v
      );
    }),
    (tt.createElement = function (v, H, L) {
      var Y,
        K = {},
        ft = null;
      if (H != null)
        for (Y in (H.key !== void 0 && (ft = "" + H.key), H))
          Dt.call(H, Y) &&
            Y !== "key" &&
            Y !== "__self" &&
            Y !== "__source" &&
            (K[Y] = H[Y]);
      var I = arguments.length - 2;
      if (I === 1) K.children = L;
      else if (1 < I) {
        for (var te = Array(I), pt = 0; pt < I; pt++)
          te[pt] = arguments[pt + 2];
        K.children = te;
      }
      if (v && v.defaultProps)
        for (Y in ((I = v.defaultProps), I)) K[Y] === void 0 && (K[Y] = I[Y]);
      return At(v, ft, void 0, void 0, null, K);
    }),
    (tt.createRef = function () {
      return { current: null };
    }),
    (tt.forwardRef = function (v) {
      return { $$typeof: U, render: v };
    }),
    (tt.isValidElement = St),
    (tt.lazy = function (v) {
      return { $$typeof: z, _payload: { _status: -1, _result: v }, _init: G };
    }),
    (tt.memo = function (v, H) {
      return { $$typeof: m, type: v, compare: H === void 0 ? null : H };
    }),
    (tt.startTransition = function (v) {
      var H = P.T,
        L = {};
      P.T = L;
      try {
        var Y = v(),
          K = P.S;
        (K !== null && K(L, Y),
          typeof Y == "object" &&
            Y !== null &&
            typeof Y.then == "function" &&
            Y.then(vt, k));
      } catch (ft) {
        k(ft);
      } finally {
        P.T = H;
      }
    }),
    (tt.unstable_useCacheRefresh = function () {
      return P.H.useCacheRefresh();
    }),
    (tt.use = function (v) {
      return P.H.use(v);
    }),
    (tt.useActionState = function (v, H, L) {
      return P.H.useActionState(v, H, L);
    }),
    (tt.useCallback = function (v, H) {
      return P.H.useCallback(v, H);
    }),
    (tt.useContext = function (v) {
      return P.H.useContext(v);
    }),
    (tt.useDebugValue = function () {}),
    (tt.useDeferredValue = function (v, H) {
      return P.H.useDeferredValue(v, H);
    }),
    (tt.useEffect = function (v, H, L) {
      var Y = P.H;
      if (typeof L == "function")
        throw Error(
          "useEffect CRUD overload is not enabled in this build of React."
        );
      return Y.useEffect(v, H);
    }),
    (tt.useId = function () {
      return P.H.useId();
    }),
    (tt.useImperativeHandle = function (v, H, L) {
      return P.H.useImperativeHandle(v, H, L);
    }),
    (tt.useInsertionEffect = function (v, H) {
      return P.H.useInsertionEffect(v, H);
    }),
    (tt.useLayoutEffect = function (v, H) {
      return P.H.useLayoutEffect(v, H);
    }),
    (tt.useMemo = function (v, H) {
      return P.H.useMemo(v, H);
    }),
    (tt.useOptimistic = function (v, H) {
      return P.H.useOptimistic(v, H);
    }),
    (tt.useReducer = function (v, H, L) {
      return P.H.useReducer(v, H, L);
    }),
    (tt.useRef = function (v) {
      return P.H.useRef(v);
    }),
    (tt.useState = function (v) {
      return P.H.useState(v);
    }),
    (tt.useSyncExternalStore = function (v, H, L) {
      return P.H.useSyncExternalStore(v, H, L);
    }),
    (tt.useTransition = function () {
      return P.H.useTransition();
    }),
    (tt.version = "19.1.0"),
    tt
  );
}
var D0;
function Mc() {
  return (D0 || ((D0 = 1), (Sc.exports = xm())), Sc.exports);
}
var x = Mc();
const Nm = Q0(x);
var pc = { exports: {} },
  Ou = {},
  bc = { exports: {} },
  Ec = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var U0;
function Hm() {
  return (
    U0 ||
      ((U0 = 1),
      (function (f) {
        function o(M, G) {
          var k = M.length;
          M.push(G);
          t: for (; 0 < k; ) {
            var vt = (k - 1) >>> 1,
              v = M[vt];
            if (0 < h(v, G)) ((M[vt] = G), (M[k] = v), (k = vt));
            else break t;
          }
        }
        function s(M) {
          return M.length === 0 ? null : M[0];
        }
        function r(M) {
          if (M.length === 0) return null;
          var G = M[0],
            k = M.pop();
          if (k !== G) {
            M[0] = k;
            t: for (var vt = 0, v = M.length, H = v >>> 1; vt < H; ) {
              var L = 2 * (vt + 1) - 1,
                Y = M[L],
                K = L + 1,
                ft = M[K];
              if (0 > h(Y, k))
                K < v && 0 > h(ft, Y)
                  ? ((M[vt] = ft), (M[K] = k), (vt = K))
                  : ((M[vt] = Y), (M[L] = k), (vt = L));
              else if (K < v && 0 > h(ft, k))
                ((M[vt] = ft), (M[K] = k), (vt = K));
              else break t;
            }
          }
          return G;
        }
        function h(M, G) {
          var k = M.sortIndex - G.sortIndex;
          return k !== 0 ? k : M.id - G.id;
        }
        if (
          ((f.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var g = performance;
          f.unstable_now = function () {
            return g.now();
          };
        } else {
          var R = Date,
            U = R.now();
          f.unstable_now = function () {
            return R.now() - U;
          };
        }
        var p = [],
          m = [],
          z = 1,
          B = null,
          N = 3,
          Q = !1,
          C = !1,
          X = !1,
          w = !1,
          q = typeof setTimeout == "function" ? setTimeout : null,
          Z = typeof clearTimeout == "function" ? clearTimeout : null,
          F = typeof setImmediate < "u" ? setImmediate : null;
        function it(M) {
          for (var G = s(m); G !== null; ) {
            if (G.callback === null) r(m);
            else if (G.startTime <= M)
              (r(m), (G.sortIndex = G.expirationTime), o(p, G));
            else break;
            G = s(m);
          }
        }
        function P(M) {
          if (((X = !1), it(M), !C))
            if (s(p) !== null) ((C = !0), Dt || ((Dt = !0), jt()));
            else {
              var G = s(m);
              G !== null && Qt(P, G.startTime - M);
            }
        }
        var Dt = !1,
          At = -1,
          Ot = 5,
          St = -1;
        function Jt() {
          return w ? !0 : !(f.unstable_now() - St < Ot);
        }
        function oe() {
          if (((w = !1), Dt)) {
            var M = f.unstable_now();
            St = M;
            var G = !0;
            try {
              t: {
                ((C = !1), X && ((X = !1), Z(At), (At = -1)), (Q = !0));
                var k = N;
                try {
                  e: {
                    for (
                      it(M), B = s(p);
                      B !== null && !(B.expirationTime > M && Jt());
                    ) {
                      var vt = B.callback;
                      if (typeof vt == "function") {
                        ((B.callback = null), (N = B.priorityLevel));
                        var v = vt(B.expirationTime <= M);
                        if (((M = f.unstable_now()), typeof v == "function")) {
                          ((B.callback = v), it(M), (G = !0));
                          break e;
                        }
                        (B === s(p) && r(p), it(M));
                      } else r(p);
                      B = s(p);
                    }
                    if (B !== null) G = !0;
                    else {
                      var H = s(m);
                      (H !== null && Qt(P, H.startTime - M), (G = !1));
                    }
                  }
                  break t;
                } finally {
                  ((B = null), (N = k), (Q = !1));
                }
                G = void 0;
              }
            } finally {
              G ? jt() : (Dt = !1);
            }
          }
        }
        var jt;
        if (typeof F == "function")
          jt = function () {
            F(oe);
          };
        else if (typeof MessageChannel < "u") {
          var bl = new MessageChannel(),
            El = bl.port2;
          ((bl.port1.onmessage = oe),
            (jt = function () {
              El.postMessage(null);
            }));
        } else
          jt = function () {
            q(oe, 0);
          };
        function Qt(M, G) {
          At = q(function () {
            M(f.unstable_now());
          }, G);
        }
        ((f.unstable_IdlePriority = 5),
          (f.unstable_ImmediatePriority = 1),
          (f.unstable_LowPriority = 4),
          (f.unstable_NormalPriority = 3),
          (f.unstable_Profiling = null),
          (f.unstable_UserBlockingPriority = 2),
          (f.unstable_cancelCallback = function (M) {
            M.callback = null;
          }),
          (f.unstable_forceFrameRate = function (M) {
            0 > M || 125 < M
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (Ot = 0 < M ? Math.floor(1e3 / M) : 5);
          }),
          (f.unstable_getCurrentPriorityLevel = function () {
            return N;
          }),
          (f.unstable_next = function (M) {
            switch (N) {
              case 1:
              case 2:
              case 3:
                var G = 3;
                break;
              default:
                G = N;
            }
            var k = N;
            N = G;
            try {
              return M();
            } finally {
              N = k;
            }
          }),
          (f.unstable_requestPaint = function () {
            w = !0;
          }),
          (f.unstable_runWithPriority = function (M, G) {
            switch (M) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                M = 3;
            }
            var k = N;
            N = M;
            try {
              return G();
            } finally {
              N = k;
            }
          }),
          (f.unstable_scheduleCallback = function (M, G, k) {
            var vt = f.unstable_now();
            switch (
              (typeof k == "object" && k !== null
                ? ((k = k.delay),
                  (k = typeof k == "number" && 0 < k ? vt + k : vt))
                : (k = vt),
              M)
            ) {
              case 1:
                var v = -1;
                break;
              case 2:
                v = 250;
                break;
              case 5:
                v = 1073741823;
                break;
              case 4:
                v = 1e4;
                break;
              default:
                v = 5e3;
            }
            return (
              (v = k + v),
              (M = {
                id: z++,
                callback: G,
                priorityLevel: M,
                startTime: k,
                expirationTime: v,
                sortIndex: -1,
              }),
              k > vt
                ? ((M.sortIndex = k),
                  o(m, M),
                  s(p) === null &&
                    M === s(m) &&
                    (X ? (Z(At), (At = -1)) : (X = !0), Qt(P, k - vt)))
                : ((M.sortIndex = v),
                  o(p, M),
                  C || Q || ((C = !0), Dt || ((Dt = !0), jt()))),
              M
            );
          }),
          (f.unstable_shouldYield = Jt),
          (f.unstable_wrapCallback = function (M) {
            var G = N;
            return function () {
              var k = N;
              N = G;
              try {
                return M.apply(this, arguments);
              } finally {
                N = k;
              }
            };
          }));
      })(Ec)),
    Ec
  );
}
var x0;
function Cm() {
  return (x0 || ((x0 = 1), (bc.exports = Hm())), bc.exports);
}
var Tc = { exports: {} },
  Vt = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var N0;
function Bm() {
  if (N0) return Vt;
  N0 = 1;
  var f = Mc();
  function o(p) {
    var m = "https://react.dev/errors/" + p;
    if (1 < arguments.length) {
      m += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var z = 2; z < arguments.length; z++)
        m += "&args[]=" + encodeURIComponent(arguments[z]);
    }
    return (
      "Minified React error #" +
      p +
      "; visit " +
      m +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function s() {}
  var r = {
      d: {
        f: s,
        r: function () {
          throw Error(o(522));
        },
        D: s,
        C: s,
        L: s,
        m: s,
        X: s,
        S: s,
        M: s,
      },
      p: 0,
      findDOMNode: null,
    },
    h = Symbol.for("react.portal");
  function g(p, m, z) {
    var B =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: h,
      key: B == null ? null : "" + B,
      children: p,
      containerInfo: m,
      implementation: z,
    };
  }
  var R = f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function U(p, m) {
    if (p === "font") return "";
    if (typeof m == "string") return m === "use-credentials" ? m : "";
  }
  return (
    (Vt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r),
    (Vt.createPortal = function (p, m) {
      var z =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!m || (m.nodeType !== 1 && m.nodeType !== 9 && m.nodeType !== 11))
        throw Error(o(299));
      return g(p, m, null, z);
    }),
    (Vt.flushSync = function (p) {
      var m = R.T,
        z = r.p;
      try {
        if (((R.T = null), (r.p = 2), p)) return p();
      } finally {
        ((R.T = m), (r.p = z), r.d.f());
      }
    }),
    (Vt.preconnect = function (p, m) {
      typeof p == "string" &&
        (m
          ? ((m = m.crossOrigin),
            (m =
              typeof m == "string"
                ? m === "use-credentials"
                  ? m
                  : ""
                : void 0))
          : (m = null),
        r.d.C(p, m));
    }),
    (Vt.prefetchDNS = function (p) {
      typeof p == "string" && r.d.D(p);
    }),
    (Vt.preinit = function (p, m) {
      if (typeof p == "string" && m && typeof m.as == "string") {
        var z = m.as,
          B = U(z, m.crossOrigin),
          N = typeof m.integrity == "string" ? m.integrity : void 0,
          Q = typeof m.fetchPriority == "string" ? m.fetchPriority : void 0;
        z === "style"
          ? r.d.S(p, typeof m.precedence == "string" ? m.precedence : void 0, {
              crossOrigin: B,
              integrity: N,
              fetchPriority: Q,
            })
          : z === "script" &&
            r.d.X(p, {
              crossOrigin: B,
              integrity: N,
              fetchPriority: Q,
              nonce: typeof m.nonce == "string" ? m.nonce : void 0,
            });
      }
    }),
    (Vt.preinitModule = function (p, m) {
      if (typeof p == "string")
        if (typeof m == "object" && m !== null) {
          if (m.as == null || m.as === "script") {
            var z = U(m.as, m.crossOrigin);
            r.d.M(p, {
              crossOrigin: z,
              integrity: typeof m.integrity == "string" ? m.integrity : void 0,
              nonce: typeof m.nonce == "string" ? m.nonce : void 0,
            });
          }
        } else m == null && r.d.M(p);
    }),
    (Vt.preload = function (p, m) {
      if (
        typeof p == "string" &&
        typeof m == "object" &&
        m !== null &&
        typeof m.as == "string"
      ) {
        var z = m.as,
          B = U(z, m.crossOrigin);
        r.d.L(p, z, {
          crossOrigin: B,
          integrity: typeof m.integrity == "string" ? m.integrity : void 0,
          nonce: typeof m.nonce == "string" ? m.nonce : void 0,
          type: typeof m.type == "string" ? m.type : void 0,
          fetchPriority:
            typeof m.fetchPriority == "string" ? m.fetchPriority : void 0,
          referrerPolicy:
            typeof m.referrerPolicy == "string" ? m.referrerPolicy : void 0,
          imageSrcSet:
            typeof m.imageSrcSet == "string" ? m.imageSrcSet : void 0,
          imageSizes: typeof m.imageSizes == "string" ? m.imageSizes : void 0,
          media: typeof m.media == "string" ? m.media : void 0,
        });
      }
    }),
    (Vt.preloadModule = function (p, m) {
      if (typeof p == "string")
        if (m) {
          var z = U(m.as, m.crossOrigin);
          r.d.m(p, {
            as: typeof m.as == "string" && m.as !== "script" ? m.as : void 0,
            crossOrigin: z,
            integrity: typeof m.integrity == "string" ? m.integrity : void 0,
          });
        } else r.d.m(p);
    }),
    (Vt.requestFormReset = function (p) {
      r.d.r(p);
    }),
    (Vt.unstable_batchedUpdates = function (p, m) {
      return p(m);
    }),
    (Vt.useFormState = function (p, m, z) {
      return R.H.useFormState(p, m, z);
    }),
    (Vt.useFormStatus = function () {
      return R.H.useHostTransitionStatus();
    }),
    (Vt.version = "19.1.0"),
    Vt
  );
}
var H0;
function qm() {
  if (H0) return Tc.exports;
  H0 = 1;
  function f() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f);
      } catch (o) {
        console.error(o);
      }
  }
  return (f(), (Tc.exports = Bm()), Tc.exports);
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var C0;
function Ym() {
  if (C0) return Ou;
  C0 = 1;
  var f = Cm(),
    o = Mc(),
    s = qm();
  function r(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var l = 2; l < arguments.length; l++)
        e += "&args[]=" + encodeURIComponent(arguments[l]);
    }
    return (
      "Minified React error #" +
      t +
      "; visit " +
      e +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function h(t) {
    return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
  }
  function g(t) {
    var e = t,
      l = t;
    if (t.alternate) for (; e.return; ) e = e.return;
    else {
      t = e;
      do ((e = t), (e.flags & 4098) !== 0 && (l = e.return), (t = e.return));
      while (t);
    }
    return e.tag === 3 ? l : null;
  }
  function R(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if (
        (e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)),
        e !== null)
      )
        return e.dehydrated;
    }
    return null;
  }
  function U(t) {
    if (g(t) !== t) throw Error(r(188));
  }
  function p(t) {
    var e = t.alternate;
    if (!e) {
      if (((e = g(t)), e === null)) throw Error(r(188));
      return e !== t ? null : t;
    }
    for (var l = t, a = e; ; ) {
      var u = l.return;
      if (u === null) break;
      var n = u.alternate;
      if (n === null) {
        if (((a = u.return), a !== null)) {
          l = a;
          continue;
        }
        break;
      }
      if (u.child === n.child) {
        for (n = u.child; n; ) {
          if (n === l) return (U(u), t);
          if (n === a) return (U(u), e);
          n = n.sibling;
        }
        throw Error(r(188));
      }
      if (l.return !== a.return) ((l = u), (a = n));
      else {
        for (var i = !1, c = u.child; c; ) {
          if (c === l) {
            ((i = !0), (l = u), (a = n));
            break;
          }
          if (c === a) {
            ((i = !0), (a = u), (l = n));
            break;
          }
          c = c.sibling;
        }
        if (!i) {
          for (c = n.child; c; ) {
            if (c === l) {
              ((i = !0), (l = n), (a = u));
              break;
            }
            if (c === a) {
              ((i = !0), (a = n), (l = u));
              break;
            }
            c = c.sibling;
          }
          if (!i) throw Error(r(189));
        }
      }
      if (l.alternate !== a) throw Error(r(190));
    }
    if (l.tag !== 3) throw Error(r(188));
    return l.stateNode.current === l ? t : e;
  }
  function m(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (((e = m(t)), e !== null)) return e;
      t = t.sibling;
    }
    return null;
  }
  var z = Object.assign,
    B = Symbol.for("react.element"),
    N = Symbol.for("react.transitional.element"),
    Q = Symbol.for("react.portal"),
    C = Symbol.for("react.fragment"),
    X = Symbol.for("react.strict_mode"),
    w = Symbol.for("react.profiler"),
    q = Symbol.for("react.provider"),
    Z = Symbol.for("react.consumer"),
    F = Symbol.for("react.context"),
    it = Symbol.for("react.forward_ref"),
    P = Symbol.for("react.suspense"),
    Dt = Symbol.for("react.suspense_list"),
    At = Symbol.for("react.memo"),
    Ot = Symbol.for("react.lazy"),
    St = Symbol.for("react.activity"),
    Jt = Symbol.for("react.memo_cache_sentinel"),
    oe = Symbol.iterator;
  function jt(t) {
    return t === null || typeof t != "object"
      ? null
      : ((t = (oe && t[oe]) || t["@@iterator"]),
        typeof t == "function" ? t : null);
  }
  var bl = Symbol.for("react.client.reference");
  function El(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === bl ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case C:
        return "Fragment";
      case w:
        return "Profiler";
      case X:
        return "StrictMode";
      case P:
        return "Suspense";
      case Dt:
        return "SuspenseList";
      case St:
        return "Activity";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case Q:
          return "Portal";
        case F:
          return (t.displayName || "Context") + ".Provider";
        case Z:
          return (t._context.displayName || "Context") + ".Consumer";
        case it:
          var e = t.render;
          return (
            (t = t.displayName),
            t ||
              ((t = e.displayName || e.name || ""),
              (t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")),
            t
          );
        case At:
          return (
            (e = t.displayName || null),
            e !== null ? e : El(t.type) || "Memo"
          );
        case Ot:
          ((e = t._payload), (t = t._init));
          try {
            return El(t(e));
          } catch {}
      }
    return null;
  }
  var Qt = Array.isArray,
    M = o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    G = s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    k = { pending: !1, data: null, method: null, action: null },
    vt = [],
    v = -1;
  function H(t) {
    return { current: t };
  }
  function L(t) {
    0 > v || ((t.current = vt[v]), (vt[v] = null), v--);
  }
  function Y(t, e) {
    (v++, (vt[v] = t.current), (t.current = e));
  }
  var K = H(null),
    ft = H(null),
    I = H(null),
    te = H(null);
  function pt(t, e) {
    switch ((Y(I, e), Y(ft, t), Y(K, null), e.nodeType)) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? t0(t) : 0;
        break;
      default:
        if (((t = e.tagName), (e = e.namespaceURI)))
          ((e = t0(e)), (t = e0(e, t)));
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    (L(K), Y(K, t));
  }
  function ke() {
    (L(K), L(ft), L(I));
  }
  function ei(t) {
    t.memoizedState !== null && Y(te, t);
    var e = K.current,
      l = e0(e, t.type);
    e !== l && (Y(ft, t), Y(K, l));
  }
  function Hu(t) {
    (ft.current === t && (L(K), L(ft)),
      te.current === t && (L(te), (bu._currentValue = k)));
  }
  var li = Object.prototype.hasOwnProperty,
    ai = f.unstable_scheduleCallback,
    ui = f.unstable_cancelCallback,
    fd = f.unstable_shouldYield,
    cd = f.unstable_requestPaint,
    Ae = f.unstable_now,
    rd = f.unstable_getCurrentPriorityLevel,
    Hc = f.unstable_ImmediatePriority,
    Cc = f.unstable_UserBlockingPriority,
    Cu = f.unstable_NormalPriority,
    od = f.unstable_LowPriority,
    Bc = f.unstable_IdlePriority,
    sd = f.log,
    dd = f.unstable_setDisableYieldValue,
    _a = null,
    ee = null;
  function We(t) {
    if (
      (typeof sd == "function" && dd(t),
      ee && typeof ee.setStrictMode == "function")
    )
      try {
        ee.setStrictMode(_a, t);
      } catch {}
  }
  var le = Math.clz32 ? Math.clz32 : vd,
    hd = Math.log,
    md = Math.LN2;
  function vd(t) {
    return ((t >>>= 0), t === 0 ? 32 : (31 - ((hd(t) / md) | 0)) | 0);
  }
  var Bu = 256,
    qu = 4194304;
  function Tl(t) {
    var e = t & 42;
    if (e !== 0) return e;
    switch (t & -t) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return t;
    }
  }
  function Yu(t, e, l) {
    var a = t.pendingLanes;
    if (a === 0) return 0;
    var u = 0,
      n = t.suspendedLanes,
      i = t.pingedLanes;
    t = t.warmLanes;
    var c = a & 134217727;
    return (
      c !== 0
        ? ((a = c & ~n),
          a !== 0
            ? (u = Tl(a))
            : ((i &= c),
              i !== 0
                ? (u = Tl(i))
                : l || ((l = c & ~t), l !== 0 && (u = Tl(l)))))
        : ((c = a & ~n),
          c !== 0
            ? (u = Tl(c))
            : i !== 0
              ? (u = Tl(i))
              : l || ((l = a & ~t), l !== 0 && (u = Tl(l)))),
      u === 0
        ? 0
        : e !== 0 &&
            e !== u &&
            (e & n) === 0 &&
            ((n = u & -u),
            (l = e & -e),
            n >= l || (n === 32 && (l & 4194048) !== 0))
          ? e
          : u
    );
  }
  function Da(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function yd(t, e) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return e + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function qc() {
    var t = Bu;
    return ((Bu <<= 1), (Bu & 4194048) === 0 && (Bu = 256), t);
  }
  function Yc() {
    var t = qu;
    return ((qu <<= 1), (qu & 62914560) === 0 && (qu = 4194304), t);
  }
  function ni(t) {
    for (var e = [], l = 0; 31 > l; l++) e.push(t);
    return e;
  }
  function Ua(t, e) {
    ((t.pendingLanes |= e),
      e !== 268435456 &&
        ((t.suspendedLanes = 0), (t.pingedLanes = 0), (t.warmLanes = 0)));
  }
  function gd(t, e, l, a, u, n) {
    var i = t.pendingLanes;
    ((t.pendingLanes = l),
      (t.suspendedLanes = 0),
      (t.pingedLanes = 0),
      (t.warmLanes = 0),
      (t.expiredLanes &= l),
      (t.entangledLanes &= l),
      (t.errorRecoveryDisabledLanes &= l),
      (t.shellSuspendCounter = 0));
    var c = t.entanglements,
      d = t.expirationTimes,
      E = t.hiddenUpdates;
    for (l = i & ~l; 0 < l; ) {
      var O = 31 - le(l),
        D = 1 << O;
      ((c[O] = 0), (d[O] = -1));
      var T = E[O];
      if (T !== null)
        for (E[O] = null, O = 0; O < T.length; O++) {
          var A = T[O];
          A !== null && (A.lane &= -536870913);
        }
      l &= ~D;
    }
    (a !== 0 && Gc(t, a, 0),
      n !== 0 && u === 0 && t.tag !== 0 && (t.suspendedLanes |= n & ~(i & ~e)));
  }
  function Gc(t, e, l) {
    ((t.pendingLanes |= e), (t.suspendedLanes &= ~e));
    var a = 31 - le(e);
    ((t.entangledLanes |= e),
      (t.entanglements[a] = t.entanglements[a] | 1073741824 | (l & 4194090)));
  }
  function Lc(t, e) {
    var l = (t.entangledLanes |= e);
    for (t = t.entanglements; l; ) {
      var a = 31 - le(l),
        u = 1 << a;
      ((u & e) | (t[a] & e) && (t[a] |= e), (l &= ~u));
    }
  }
  function ii(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function fi(t) {
    return (
      (t &= -t),
      2 < t ? (8 < t ? ((t & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function Xc() {
    var t = G.p;
    return t !== 0 ? t : ((t = window.event), t === void 0 ? 32 : b0(t.type));
  }
  function Sd(t, e) {
    var l = G.p;
    try {
      return ((G.p = t), e());
    } finally {
      G.p = l;
    }
  }
  var Fe = Math.random().toString(36).slice(2),
    Zt = "__reactFiber$" + Fe,
    kt = "__reactProps$" + Fe,
    jl = "__reactContainer$" + Fe,
    ci = "__reactEvents$" + Fe,
    pd = "__reactListeners$" + Fe,
    bd = "__reactHandles$" + Fe,
    jc = "__reactResources$" + Fe,
    xa = "__reactMarker$" + Fe;
  function ri(t) {
    (delete t[Zt], delete t[kt], delete t[ci], delete t[pd], delete t[bd]);
  }
  function Ql(t) {
    var e = t[Zt];
    if (e) return e;
    for (var l = t.parentNode; l; ) {
      if ((e = l[jl] || l[Zt])) {
        if (
          ((l = e.alternate),
          e.child !== null || (l !== null && l.child !== null))
        )
          for (t = n0(t); t !== null; ) {
            if ((l = t[Zt])) return l;
            t = n0(t);
          }
        return e;
      }
      ((t = l), (l = t.parentNode));
    }
    return null;
  }
  function Zl(t) {
    if ((t = t[Zt] || t[jl])) {
      var e = t.tag;
      if (e === 5 || e === 6 || e === 13 || e === 26 || e === 27 || e === 3)
        return t;
    }
    return null;
  }
  function Na(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(r(33));
  }
  function wl(t) {
    var e = t[jc];
    return (
      e ||
        (e = t[jc] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      e
    );
  }
  function Ct(t) {
    t[xa] = !0;
  }
  var Qc = new Set(),
    Zc = {};
  function Al(t, e) {
    (Vl(t, e), Vl(t + "Capture", e));
  }
  function Vl(t, e) {
    for (Zc[t] = e, t = 0; t < e.length; t++) Qc.add(e[t]);
  }
  var Ed = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ),
    wc = {},
    Vc = {};
  function Td(t) {
    return li.call(Vc, t)
      ? !0
      : li.call(wc, t)
        ? !1
        : Ed.test(t)
          ? (Vc[t] = !0)
          : ((wc[t] = !0), !1);
  }
  function Gu(t, e, l) {
    if (Td(e))
      if (l === null) t.removeAttribute(e);
      else {
        switch (typeof l) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(e);
            return;
          case "boolean":
            var a = e.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              t.removeAttribute(e);
              return;
            }
        }
        t.setAttribute(e, "" + l);
      }
  }
  function Lu(t, e, l) {
    if (l === null) t.removeAttribute(e);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttribute(e, "" + l);
    }
  }
  function xe(t, e, l, a) {
    if (a === null) t.removeAttribute(l);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(l);
          return;
      }
      t.setAttributeNS(e, l, "" + a);
    }
  }
  var oi, Kc;
  function Kl(t) {
    if (oi === void 0)
      try {
        throw Error();
      } catch (l) {
        var e = l.stack.trim().match(/\n( *(at )?)/);
        ((oi = (e && e[1]) || ""),
          (Kc =
            -1 <
            l.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < l.stack.indexOf("@")
                ? "@unknown:0:0"
                : ""));
      }
    return (
      `
` +
      oi +
      t +
      Kc
    );
  }
  var si = !1;
  function di(t, e) {
    if (!t || si) return "";
    si = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function () {
          try {
            if (e) {
              var D = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(D.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(D, []);
                } catch (A) {
                  var T = A;
                }
                Reflect.construct(t, [], D);
              } else {
                try {
                  D.call();
                } catch (A) {
                  T = A;
                }
                t.call(D.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (A) {
                T = A;
              }
              (D = t()) &&
                typeof D.catch == "function" &&
                D.catch(function () {});
            }
          } catch (A) {
            if (A && T && typeof A.stack == "string") return [A.stack, T.stack];
          }
          return [null, null];
        },
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var u = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name"
      );
      u &&
        u.configurable &&
        Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var n = a.DetermineComponentFrameRoot(),
        i = n[0],
        c = n[1];
      if (i && c) {
        var d = i.split(`
`),
          E = c.split(`
`);
        for (
          u = a = 0;
          a < d.length && !d[a].includes("DetermineComponentFrameRoot");
        )
          a++;
        for (; u < E.length && !E[u].includes("DetermineComponentFrameRoot"); )
          u++;
        if (a === d.length || u === E.length)
          for (
            a = d.length - 1, u = E.length - 1;
            1 <= a && 0 <= u && d[a] !== E[u];
          )
            u--;
        for (; 1 <= a && 0 <= u; a--, u--)
          if (d[a] !== E[u]) {
            if (a !== 1 || u !== 1)
              do
                if ((a--, u--, 0 > u || d[a] !== E[u])) {
                  var O =
                    `
` + d[a].replace(" at new ", " at ");
                  return (
                    t.displayName &&
                      O.includes("<anonymous>") &&
                      (O = O.replace("<anonymous>", t.displayName)),
                    O
                  );
                }
              while (1 <= a && 0 <= u);
            break;
          }
      }
    } finally {
      ((si = !1), (Error.prepareStackTrace = l));
    }
    return (l = t ? t.displayName || t.name : "") ? Kl(l) : "";
  }
  function Ad(t) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return Kl(t.type);
      case 16:
        return Kl("Lazy");
      case 13:
        return Kl("Suspense");
      case 19:
        return Kl("SuspenseList");
      case 0:
      case 15:
        return di(t.type, !1);
      case 11:
        return di(t.type.render, !1);
      case 1:
        return di(t.type, !0);
      case 31:
        return Kl("Activity");
      default:
        return "";
    }
  }
  function Jc(t) {
    try {
      var e = "";
      do ((e += Ad(t)), (t = t.return));
      while (t);
      return e;
    } catch (l) {
      return (
        `
Error generating stack: ` +
        l.message +
        `
` +
        l.stack
      );
    }
  }
  function se(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function $c(t) {
    var e = t.type;
    return (
      (t = t.nodeName) &&
      t.toLowerCase() === "input" &&
      (e === "checkbox" || e === "radio")
    );
  }
  function Rd(t) {
    var e = $c(t) ? "checked" : "value",
      l = Object.getOwnPropertyDescriptor(t.constructor.prototype, e),
      a = "" + t[e];
    if (
      !t.hasOwnProperty(e) &&
      typeof l < "u" &&
      typeof l.get == "function" &&
      typeof l.set == "function"
    ) {
      var u = l.get,
        n = l.set;
      return (
        Object.defineProperty(t, e, {
          configurable: !0,
          get: function () {
            return u.call(this);
          },
          set: function (i) {
            ((a = "" + i), n.call(this, i));
          },
        }),
        Object.defineProperty(t, e, { enumerable: l.enumerable }),
        {
          getValue: function () {
            return a;
          },
          setValue: function (i) {
            a = "" + i;
          },
          stopTracking: function () {
            ((t._valueTracker = null), delete t[e]);
          },
        }
      );
    }
  }
  function Xu(t) {
    t._valueTracker || (t._valueTracker = Rd(t));
  }
  function kc(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var l = e.getValue(),
      a = "";
    return (
      t && (a = $c(t) ? (t.checked ? "true" : "false") : t.value),
      (t = a),
      t !== l ? (e.setValue(t), !0) : !1
    );
  }
  function ju(t) {
    if (
      ((t = t || (typeof document < "u" ? document : void 0)), typeof t > "u")
    )
      return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var zd = /[\n"\\]/g;
  function de(t) {
    return t.replace(zd, function (e) {
      return "\\" + e.charCodeAt(0).toString(16) + " ";
    });
  }
  function hi(t, e, l, a, u, n, i, c) {
    ((t.name = ""),
      i != null &&
      typeof i != "function" &&
      typeof i != "symbol" &&
      typeof i != "boolean"
        ? (t.type = i)
        : t.removeAttribute("type"),
      e != null
        ? i === "number"
          ? ((e === 0 && t.value === "") || t.value != e) &&
            (t.value = "" + se(e))
          : t.value !== "" + se(e) && (t.value = "" + se(e))
        : (i !== "submit" && i !== "reset") || t.removeAttribute("value"),
      e != null
        ? mi(t, i, se(e))
        : l != null
          ? mi(t, i, se(l))
          : a != null && t.removeAttribute("value"),
      u == null && n != null && (t.defaultChecked = !!n),
      u != null &&
        (t.checked = u && typeof u != "function" && typeof u != "symbol"),
      c != null &&
      typeof c != "function" &&
      typeof c != "symbol" &&
      typeof c != "boolean"
        ? (t.name = "" + se(c))
        : t.removeAttribute("name"));
  }
  function Wc(t, e, l, a, u, n, i, c) {
    if (
      (n != null &&
        typeof n != "function" &&
        typeof n != "symbol" &&
        typeof n != "boolean" &&
        (t.type = n),
      e != null || l != null)
    ) {
      if (!((n !== "submit" && n !== "reset") || e != null)) return;
      ((l = l != null ? "" + se(l) : ""),
        (e = e != null ? "" + se(e) : l),
        c || e === t.value || (t.value = e),
        (t.defaultValue = e));
    }
    ((a = a ?? u),
      (a = typeof a != "function" && typeof a != "symbol" && !!a),
      (t.checked = c ? t.checked : !!a),
      (t.defaultChecked = !!a),
      i != null &&
        typeof i != "function" &&
        typeof i != "symbol" &&
        typeof i != "boolean" &&
        (t.name = i));
  }
  function mi(t, e, l) {
    (e === "number" && ju(t.ownerDocument) === t) ||
      t.defaultValue === "" + l ||
      (t.defaultValue = "" + l);
  }
  function Jl(t, e, l, a) {
    if (((t = t.options), e)) {
      e = {};
      for (var u = 0; u < l.length; u++) e["$" + l[u]] = !0;
      for (l = 0; l < t.length; l++)
        ((u = e.hasOwnProperty("$" + t[l].value)),
          t[l].selected !== u && (t[l].selected = u),
          u && a && (t[l].defaultSelected = !0));
    } else {
      for (l = "" + se(l), e = null, u = 0; u < t.length; u++) {
        if (t[u].value === l) {
          ((t[u].selected = !0), a && (t[u].defaultSelected = !0));
          return;
        }
        e !== null || t[u].disabled || (e = t[u]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function Fc(t, e, l) {
    if (
      e != null &&
      ((e = "" + se(e)), e !== t.value && (t.value = e), l == null)
    ) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = l != null ? "" + se(l) : "";
  }
  function Pc(t, e, l, a) {
    if (e == null) {
      if (a != null) {
        if (l != null) throw Error(r(92));
        if (Qt(a)) {
          if (1 < a.length) throw Error(r(93));
          a = a[0];
        }
        l = a;
      }
      (l == null && (l = ""), (e = l));
    }
    ((l = se(e)),
      (t.defaultValue = l),
      (a = t.textContent),
      a === l && a !== "" && a !== null && (t.value = a));
  }
  function $l(t, e) {
    if (e) {
      var l = t.firstChild;
      if (l && l === t.lastChild && l.nodeType === 3) {
        l.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var Od = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Ic(t, e, l) {
    var a = e.indexOf("--") === 0;
    l == null || typeof l == "boolean" || l === ""
      ? a
        ? t.setProperty(e, "")
        : e === "float"
          ? (t.cssFloat = "")
          : (t[e] = "")
      : a
        ? t.setProperty(e, l)
        : typeof l != "number" || l === 0 || Od.has(e)
          ? e === "float"
            ? (t.cssFloat = l)
            : (t[e] = ("" + l).trim())
          : (t[e] = l + "px");
  }
  function tr(t, e, l) {
    if (e != null && typeof e != "object") throw Error(r(62));
    if (((t = t.style), l != null)) {
      for (var a in l)
        !l.hasOwnProperty(a) ||
          (e != null && e.hasOwnProperty(a)) ||
          (a.indexOf("--") === 0
            ? t.setProperty(a, "")
            : a === "float"
              ? (t.cssFloat = "")
              : (t[a] = ""));
      for (var u in e)
        ((a = e[u]), e.hasOwnProperty(u) && l[u] !== a && Ic(t, u, a));
    } else for (var n in e) e.hasOwnProperty(n) && Ic(t, n, e[n]);
  }
  function vi(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Md = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    _d =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Qu(t) {
    return _d.test("" + t)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : t;
  }
  var yi = null;
  function gi(t) {
    return (
      (t = t.target || t.srcElement || window),
      t.correspondingUseElement && (t = t.correspondingUseElement),
      t.nodeType === 3 ? t.parentNode : t
    );
  }
  var kl = null,
    Wl = null;
  function er(t) {
    var e = Zl(t);
    if (e && (t = e.stateNode)) {
      var l = t[kt] || null;
      t: switch (((t = e.stateNode), e.type)) {
        case "input":
          if (
            (hi(
              t,
              l.value,
              l.defaultValue,
              l.defaultValue,
              l.checked,
              l.defaultChecked,
              l.type,
              l.name
            ),
            (e = l.name),
            l.type === "radio" && e != null)
          ) {
            for (l = t; l.parentNode; ) l = l.parentNode;
            for (
              l = l.querySelectorAll(
                'input[name="' + de("" + e) + '"][type="radio"]'
              ),
                e = 0;
              e < l.length;
              e++
            ) {
              var a = l[e];
              if (a !== t && a.form === t.form) {
                var u = a[kt] || null;
                if (!u) throw Error(r(90));
                hi(
                  a,
                  u.value,
                  u.defaultValue,
                  u.defaultValue,
                  u.checked,
                  u.defaultChecked,
                  u.type,
                  u.name
                );
              }
            }
            for (e = 0; e < l.length; e++)
              ((a = l[e]), a.form === t.form && kc(a));
          }
          break t;
        case "textarea":
          Fc(t, l.value, l.defaultValue);
          break t;
        case "select":
          ((e = l.value), e != null && Jl(t, !!l.multiple, e, !1));
      }
    }
  }
  var Si = !1;
  function lr(t, e, l) {
    if (Si) return t(e, l);
    Si = !0;
    try {
      var a = t(e);
      return a;
    } finally {
      if (
        ((Si = !1),
        (kl !== null || Wl !== null) &&
          (_n(), kl && ((e = kl), (t = Wl), (Wl = kl = null), er(e), t)))
      )
        for (e = 0; e < t.length; e++) er(t[e]);
    }
  }
  function Ha(t, e) {
    var l = t.stateNode;
    if (l === null) return null;
    var a = l[kt] || null;
    if (a === null) return null;
    l = a[e];
    t: switch (e) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        ((a = !a.disabled) ||
          ((t = t.type),
          (a = !(
            t === "button" ||
            t === "input" ||
            t === "select" ||
            t === "textarea"
          ))),
          (t = !a));
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (l && typeof l != "function") throw Error(r(231, e, typeof l));
    return l;
  }
  var Ne = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    pi = !1;
  if (Ne)
    try {
      var Ca = {};
      (Object.defineProperty(Ca, "passive", {
        get: function () {
          pi = !0;
        },
      }),
        window.addEventListener("test", Ca, Ca),
        window.removeEventListener("test", Ca, Ca));
    } catch {
      pi = !1;
    }
  var Pe = null,
    bi = null,
    Zu = null;
  function ar() {
    if (Zu) return Zu;
    var t,
      e = bi,
      l = e.length,
      a,
      u = "value" in Pe ? Pe.value : Pe.textContent,
      n = u.length;
    for (t = 0; t < l && e[t] === u[t]; t++);
    var i = l - t;
    for (a = 1; a <= i && e[l - a] === u[n - a]; a++);
    return (Zu = u.slice(t, 1 < a ? 1 - a : void 0));
  }
  function wu(t) {
    var e = t.keyCode;
    return (
      "charCode" in t
        ? ((t = t.charCode), t === 0 && e === 13 && (t = 13))
        : (t = e),
      t === 10 && (t = 13),
      32 <= t || t === 13 ? t : 0
    );
  }
  function Vu() {
    return !0;
  }
  function ur() {
    return !1;
  }
  function Wt(t) {
    function e(l, a, u, n, i) {
      ((this._reactName = l),
        (this._targetInst = u),
        (this.type = a),
        (this.nativeEvent = n),
        (this.target = i),
        (this.currentTarget = null));
      for (var c in t)
        t.hasOwnProperty(c) && ((l = t[c]), (this[c] = l ? l(n) : n[c]));
      return (
        (this.isDefaultPrevented = (
          n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1
        )
          ? Vu
          : ur),
        (this.isPropagationStopped = ur),
        this
      );
    }
    return (
      z(e.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var l = this.nativeEvent;
          l &&
            (l.preventDefault
              ? l.preventDefault()
              : typeof l.returnValue != "unknown" && (l.returnValue = !1),
            (this.isDefaultPrevented = Vu));
        },
        stopPropagation: function () {
          var l = this.nativeEvent;
          l &&
            (l.stopPropagation
              ? l.stopPropagation()
              : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0),
            (this.isPropagationStopped = Vu));
        },
        persist: function () {},
        isPersistent: Vu,
      }),
      e
    );
  }
  var Rl = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (t) {
        return t.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Ku = Wt(Rl),
    Ba = z({}, Rl, { view: 0, detail: 0 }),
    Dd = Wt(Ba),
    Ei,
    Ti,
    qa,
    Ju = z({}, Ba, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Ri,
      button: 0,
      buttons: 0,
      relatedTarget: function (t) {
        return t.relatedTarget === void 0
          ? t.fromElement === t.srcElement
            ? t.toElement
            : t.fromElement
          : t.relatedTarget;
      },
      movementX: function (t) {
        return "movementX" in t
          ? t.movementX
          : (t !== qa &&
              (qa && t.type === "mousemove"
                ? ((Ei = t.screenX - qa.screenX), (Ti = t.screenY - qa.screenY))
                : (Ti = Ei = 0),
              (qa = t)),
            Ei);
      },
      movementY: function (t) {
        return "movementY" in t ? t.movementY : Ti;
      },
    }),
    nr = Wt(Ju),
    Ud = z({}, Ju, { dataTransfer: 0 }),
    xd = Wt(Ud),
    Nd = z({}, Ba, { relatedTarget: 0 }),
    Ai = Wt(Nd),
    Hd = z({}, Rl, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Cd = Wt(Hd),
    Bd = z({}, Rl, {
      clipboardData: function (t) {
        return "clipboardData" in t ? t.clipboardData : window.clipboardData;
      },
    }),
    qd = Wt(Bd),
    Yd = z({}, Rl, { data: 0 }),
    ir = Wt(Yd),
    Gd = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    Ld = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    Xd = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function jd(t) {
    var e = this.nativeEvent;
    return e.getModifierState
      ? e.getModifierState(t)
      : (t = Xd[t])
        ? !!e[t]
        : !1;
  }
  function Ri() {
    return jd;
  }
  var Qd = z({}, Ba, {
      key: function (t) {
        if (t.key) {
          var e = Gd[t.key] || t.key;
          if (e !== "Unidentified") return e;
        }
        return t.type === "keypress"
          ? ((t = wu(t)), t === 13 ? "Enter" : String.fromCharCode(t))
          : t.type === "keydown" || t.type === "keyup"
            ? Ld[t.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Ri,
      charCode: function (t) {
        return t.type === "keypress" ? wu(t) : 0;
      },
      keyCode: function (t) {
        return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      },
      which: function (t) {
        return t.type === "keypress"
          ? wu(t)
          : t.type === "keydown" || t.type === "keyup"
            ? t.keyCode
            : 0;
      },
    }),
    Zd = Wt(Qd),
    wd = z({}, Ju, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    fr = Wt(wd),
    Vd = z({}, Ba, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Ri,
    }),
    Kd = Wt(Vd),
    Jd = z({}, Rl, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    $d = Wt(Jd),
    kd = z({}, Ju, {
      deltaX: function (t) {
        return "deltaX" in t
          ? t.deltaX
          : "wheelDeltaX" in t
            ? -t.wheelDeltaX
            : 0;
      },
      deltaY: function (t) {
        return "deltaY" in t
          ? t.deltaY
          : "wheelDeltaY" in t
            ? -t.wheelDeltaY
            : "wheelDelta" in t
              ? -t.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    Wd = Wt(kd),
    Fd = z({}, Rl, { newState: 0, oldState: 0 }),
    Pd = Wt(Fd),
    Id = [9, 13, 27, 32],
    zi = Ne && "CompositionEvent" in window,
    Ya = null;
  Ne && "documentMode" in document && (Ya = document.documentMode);
  var th = Ne && "TextEvent" in window && !Ya,
    cr = Ne && (!zi || (Ya && 8 < Ya && 11 >= Ya)),
    rr = " ",
    or = !1;
  function sr(t, e) {
    switch (t) {
      case "keyup":
        return Id.indexOf(e.keyCode) !== -1;
      case "keydown":
        return e.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function dr(t) {
    return (
      (t = t.detail),
      typeof t == "object" && "data" in t ? t.data : null
    );
  }
  var Fl = !1;
  function eh(t, e) {
    switch (t) {
      case "compositionend":
        return dr(e);
      case "keypress":
        return e.which !== 32 ? null : ((or = !0), rr);
      case "textInput":
        return ((t = e.data), t === rr && or ? null : t);
      default:
        return null;
    }
  }
  function lh(t, e) {
    if (Fl)
      return t === "compositionend" || (!zi && sr(t, e))
        ? ((t = ar()), (Zu = bi = Pe = null), (Fl = !1), t)
        : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || (e.ctrlKey && e.altKey)) {
          if (e.char && 1 < e.char.length) return e.char;
          if (e.which) return String.fromCharCode(e.which);
        }
        return null;
      case "compositionend":
        return cr && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var ah = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function hr(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!ah[t.type] : e === "textarea";
  }
  function mr(t, e, l, a) {
    (kl ? (Wl ? Wl.push(a) : (Wl = [a])) : (kl = a),
      (e = Cn(e, "onChange")),
      0 < e.length &&
        ((l = new Ku("onChange", "change", null, l, a)),
        t.push({ event: l, listeners: e })));
  }
  var Ga = null,
    La = null;
  function uh(t) {
    ks(t, 0);
  }
  function $u(t) {
    var e = Na(t);
    if (kc(e)) return t;
  }
  function vr(t, e) {
    if (t === "change") return e;
  }
  var yr = !1;
  if (Ne) {
    var Oi;
    if (Ne) {
      var Mi = "oninput" in document;
      if (!Mi) {
        var gr = document.createElement("div");
        (gr.setAttribute("oninput", "return;"),
          (Mi = typeof gr.oninput == "function"));
      }
      Oi = Mi;
    } else Oi = !1;
    yr = Oi && (!document.documentMode || 9 < document.documentMode);
  }
  function Sr() {
    Ga && (Ga.detachEvent("onpropertychange", pr), (La = Ga = null));
  }
  function pr(t) {
    if (t.propertyName === "value" && $u(La)) {
      var e = [];
      (mr(e, La, t, gi(t)), lr(uh, e));
    }
  }
  function nh(t, e, l) {
    t === "focusin"
      ? (Sr(), (Ga = e), (La = l), Ga.attachEvent("onpropertychange", pr))
      : t === "focusout" && Sr();
  }
  function ih(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return $u(La);
  }
  function fh(t, e) {
    if (t === "click") return $u(e);
  }
  function ch(t, e) {
    if (t === "input" || t === "change") return $u(e);
  }
  function rh(t, e) {
    return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
  }
  var ae = typeof Object.is == "function" ? Object.is : rh;
  function Xa(t, e) {
    if (ae(t, e)) return !0;
    if (
      typeof t != "object" ||
      t === null ||
      typeof e != "object" ||
      e === null
    )
      return !1;
    var l = Object.keys(t),
      a = Object.keys(e);
    if (l.length !== a.length) return !1;
    for (a = 0; a < l.length; a++) {
      var u = l[a];
      if (!li.call(e, u) || !ae(t[u], e[u])) return !1;
    }
    return !0;
  }
  function br(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function Er(t, e) {
    var l = br(t);
    t = 0;
    for (var a; l; ) {
      if (l.nodeType === 3) {
        if (((a = t + l.textContent.length), t <= e && a >= e))
          return { node: l, offset: e - t };
        t = a;
      }
      t: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break t;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = br(l);
    }
  }
  function Tr(t, e) {
    return t && e
      ? t === e
        ? !0
        : t && t.nodeType === 3
          ? !1
          : e && e.nodeType === 3
            ? Tr(t, e.parentNode)
            : "contains" in t
              ? t.contains(e)
              : t.compareDocumentPosition
                ? !!(t.compareDocumentPosition(e) & 16)
                : !1
      : !1;
  }
  function Ar(t) {
    t =
      t != null &&
      t.ownerDocument != null &&
      t.ownerDocument.defaultView != null
        ? t.ownerDocument.defaultView
        : window;
    for (var e = ju(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var l = typeof e.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) t = e.contentWindow;
      else break;
      e = ju(t.document);
    }
    return e;
  }
  function _i(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return (
      e &&
      ((e === "input" &&
        (t.type === "text" ||
          t.type === "search" ||
          t.type === "tel" ||
          t.type === "url" ||
          t.type === "password")) ||
        e === "textarea" ||
        t.contentEditable === "true")
    );
  }
  var oh = Ne && "documentMode" in document && 11 >= document.documentMode,
    Pl = null,
    Di = null,
    ja = null,
    Ui = !1;
  function Rr(t, e, l) {
    var a =
      l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    Ui ||
      Pl == null ||
      Pl !== ju(a) ||
      ((a = Pl),
      "selectionStart" in a && _i(a)
        ? (a = { start: a.selectionStart, end: a.selectionEnd })
        : ((a = (
            (a.ownerDocument && a.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (a = {
            anchorNode: a.anchorNode,
            anchorOffset: a.anchorOffset,
            focusNode: a.focusNode,
            focusOffset: a.focusOffset,
          })),
      (ja && Xa(ja, a)) ||
        ((ja = a),
        (a = Cn(Di, "onSelect")),
        0 < a.length &&
          ((e = new Ku("onSelect", "select", null, e, l)),
          t.push({ event: e, listeners: a }),
          (e.target = Pl))));
  }
  function zl(t, e) {
    var l = {};
    return (
      (l[t.toLowerCase()] = e.toLowerCase()),
      (l["Webkit" + t] = "webkit" + e),
      (l["Moz" + t] = "moz" + e),
      l
    );
  }
  var Il = {
      animationend: zl("Animation", "AnimationEnd"),
      animationiteration: zl("Animation", "AnimationIteration"),
      animationstart: zl("Animation", "AnimationStart"),
      transitionrun: zl("Transition", "TransitionRun"),
      transitionstart: zl("Transition", "TransitionStart"),
      transitioncancel: zl("Transition", "TransitionCancel"),
      transitionend: zl("Transition", "TransitionEnd"),
    },
    xi = {},
    zr = {};
  Ne &&
    ((zr = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Il.animationend.animation,
      delete Il.animationiteration.animation,
      delete Il.animationstart.animation),
    "TransitionEvent" in window || delete Il.transitionend.transition);
  function Ol(t) {
    if (xi[t]) return xi[t];
    if (!Il[t]) return t;
    var e = Il[t],
      l;
    for (l in e) if (e.hasOwnProperty(l) && l in zr) return (xi[t] = e[l]);
    return t;
  }
  var Or = Ol("animationend"),
    Mr = Ol("animationiteration"),
    _r = Ol("animationstart"),
    sh = Ol("transitionrun"),
    dh = Ol("transitionstart"),
    hh = Ol("transitioncancel"),
    Dr = Ol("transitionend"),
    Ur = new Map(),
    Ni =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  Ni.push("scrollEnd");
  function be(t, e) {
    (Ur.set(t, e), Al(e, [t]));
  }
  var xr = new WeakMap();
  function he(t, e) {
    if (typeof t == "object" && t !== null) {
      var l = xr.get(t);
      return l !== void 0
        ? l
        : ((e = { value: t, source: e, stack: Jc(e) }), xr.set(t, e), e);
    }
    return { value: t, source: e, stack: Jc(e) };
  }
  var me = [],
    ta = 0,
    Hi = 0;
  function ku() {
    for (var t = ta, e = (Hi = ta = 0); e < t; ) {
      var l = me[e];
      me[e++] = null;
      var a = me[e];
      me[e++] = null;
      var u = me[e];
      me[e++] = null;
      var n = me[e];
      if (((me[e++] = null), a !== null && u !== null)) {
        var i = a.pending;
        (i === null ? (u.next = u) : ((u.next = i.next), (i.next = u)),
          (a.pending = u));
      }
      n !== 0 && Nr(l, u, n);
    }
  }
  function Wu(t, e, l, a) {
    ((me[ta++] = t),
      (me[ta++] = e),
      (me[ta++] = l),
      (me[ta++] = a),
      (Hi |= a),
      (t.lanes |= a),
      (t = t.alternate),
      t !== null && (t.lanes |= a));
  }
  function Ci(t, e, l, a) {
    return (Wu(t, e, l, a), Fu(t));
  }
  function ea(t, e) {
    return (Wu(t, null, null, e), Fu(t));
  }
  function Nr(t, e, l) {
    t.lanes |= l;
    var a = t.alternate;
    a !== null && (a.lanes |= l);
    for (var u = !1, n = t.return; n !== null; )
      ((n.childLanes |= l),
        (a = n.alternate),
        a !== null && (a.childLanes |= l),
        n.tag === 22 &&
          ((t = n.stateNode), t === null || t._visibility & 1 || (u = !0)),
        (t = n),
        (n = n.return));
    return t.tag === 3
      ? ((n = t.stateNode),
        u &&
          e !== null &&
          ((u = 31 - le(l)),
          (t = n.hiddenUpdates),
          (a = t[u]),
          a === null ? (t[u] = [e]) : a.push(e),
          (e.lane = l | 536870912)),
        n)
      : null;
  }
  function Fu(t) {
    if (50 < du) throw ((du = 0), (jf = null), Error(r(185)));
    for (var e = t.return; e !== null; ) ((t = e), (e = t.return));
    return t.tag === 3 ? t.stateNode : null;
  }
  var la = {};
  function mh(t, e, l, a) {
    ((this.tag = t),
      (this.key = l),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = e),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = a),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function ue(t, e, l, a) {
    return new mh(t, e, l, a);
  }
  function Bi(t) {
    return ((t = t.prototype), !(!t || !t.isReactComponent));
  }
  function He(t, e) {
    var l = t.alternate;
    return (
      l === null
        ? ((l = ue(t.tag, e, t.key, t.mode)),
          (l.elementType = t.elementType),
          (l.type = t.type),
          (l.stateNode = t.stateNode),
          (l.alternate = t),
          (t.alternate = l))
        : ((l.pendingProps = e),
          (l.type = t.type),
          (l.flags = 0),
          (l.subtreeFlags = 0),
          (l.deletions = null)),
      (l.flags = t.flags & 65011712),
      (l.childLanes = t.childLanes),
      (l.lanes = t.lanes),
      (l.child = t.child),
      (l.memoizedProps = t.memoizedProps),
      (l.memoizedState = t.memoizedState),
      (l.updateQueue = t.updateQueue),
      (e = t.dependencies),
      (l.dependencies =
        e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }),
      (l.sibling = t.sibling),
      (l.index = t.index),
      (l.ref = t.ref),
      (l.refCleanup = t.refCleanup),
      l
    );
  }
  function Hr(t, e) {
    t.flags &= 65011714;
    var l = t.alternate;
    return (
      l === null
        ? ((t.childLanes = 0),
          (t.lanes = e),
          (t.child = null),
          (t.subtreeFlags = 0),
          (t.memoizedProps = null),
          (t.memoizedState = null),
          (t.updateQueue = null),
          (t.dependencies = null),
          (t.stateNode = null))
        : ((t.childLanes = l.childLanes),
          (t.lanes = l.lanes),
          (t.child = l.child),
          (t.subtreeFlags = 0),
          (t.deletions = null),
          (t.memoizedProps = l.memoizedProps),
          (t.memoizedState = l.memoizedState),
          (t.updateQueue = l.updateQueue),
          (t.type = l.type),
          (e = l.dependencies),
          (t.dependencies =
            e === null
              ? null
              : { lanes: e.lanes, firstContext: e.firstContext })),
      t
    );
  }
  function Pu(t, e, l, a, u, n) {
    var i = 0;
    if (((a = t), typeof t == "function")) Bi(t) && (i = 1);
    else if (typeof t == "string")
      i = ym(t, l, K.current)
        ? 26
        : t === "html" || t === "head" || t === "body"
          ? 27
          : 5;
    else
      t: switch (t) {
        case St:
          return (
            (t = ue(31, l, e, u)),
            (t.elementType = St),
            (t.lanes = n),
            t
          );
        case C:
          return Ml(l.children, u, n, e);
        case X:
          ((i = 8), (u |= 24));
          break;
        case w:
          return (
            (t = ue(12, l, e, u | 2)),
            (t.elementType = w),
            (t.lanes = n),
            t
          );
        case P:
          return ((t = ue(13, l, e, u)), (t.elementType = P), (t.lanes = n), t);
        case Dt:
          return (
            (t = ue(19, l, e, u)),
            (t.elementType = Dt),
            (t.lanes = n),
            t
          );
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case q:
              case F:
                i = 10;
                break t;
              case Z:
                i = 9;
                break t;
              case it:
                i = 11;
                break t;
              case At:
                i = 14;
                break t;
              case Ot:
                ((i = 16), (a = null));
                break t;
            }
          ((i = 29),
            (l = Error(r(130, t === null ? "null" : typeof t, ""))),
            (a = null));
      }
    return (
      (e = ue(i, l, e, u)),
      (e.elementType = t),
      (e.type = a),
      (e.lanes = n),
      e
    );
  }
  function Ml(t, e, l, a) {
    return ((t = ue(7, t, a, e)), (t.lanes = l), t);
  }
  function qi(t, e, l) {
    return ((t = ue(6, t, null, e)), (t.lanes = l), t);
  }
  function Yi(t, e, l) {
    return (
      (e = ue(4, t.children !== null ? t.children : [], t.key, e)),
      (e.lanes = l),
      (e.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation,
      }),
      e
    );
  }
  var aa = [],
    ua = 0,
    Iu = null,
    tn = 0,
    ve = [],
    ye = 0,
    _l = null,
    Ce = 1,
    Be = "";
  function Dl(t, e) {
    ((aa[ua++] = tn), (aa[ua++] = Iu), (Iu = t), (tn = e));
  }
  function Cr(t, e, l) {
    ((ve[ye++] = Ce), (ve[ye++] = Be), (ve[ye++] = _l), (_l = t));
    var a = Ce;
    t = Be;
    var u = 32 - le(a) - 1;
    ((a &= ~(1 << u)), (l += 1));
    var n = 32 - le(e) + u;
    if (30 < n) {
      var i = u - (u % 5);
      ((n = (a & ((1 << i) - 1)).toString(32)),
        (a >>= i),
        (u -= i),
        (Ce = (1 << (32 - le(e) + u)) | (l << u) | a),
        (Be = n + t));
    } else ((Ce = (1 << n) | (l << u) | a), (Be = t));
  }
  function Gi(t) {
    t.return !== null && (Dl(t, 1), Cr(t, 1, 0));
  }
  function Li(t) {
    for (; t === Iu; )
      ((Iu = aa[--ua]), (aa[ua] = null), (tn = aa[--ua]), (aa[ua] = null));
    for (; t === _l; )
      ((_l = ve[--ye]),
        (ve[ye] = null),
        (Be = ve[--ye]),
        (ve[ye] = null),
        (Ce = ve[--ye]),
        (ve[ye] = null));
  }
  var $t = null,
    Rt = null,
    rt = !1,
    Ul = null,
    Re = !1,
    Xi = Error(r(519));
  function xl(t) {
    var e = Error(r(418, ""));
    throw (wa(he(e, t)), Xi);
  }
  function Br(t) {
    var e = t.stateNode,
      l = t.type,
      a = t.memoizedProps;
    switch (((e[Zt] = t), (e[kt] = a), l)) {
      case "dialog":
        (ut("cancel", e), ut("close", e));
        break;
      case "iframe":
      case "object":
      case "embed":
        ut("load", e);
        break;
      case "video":
      case "audio":
        for (l = 0; l < mu.length; l++) ut(mu[l], e);
        break;
      case "source":
        ut("error", e);
        break;
      case "img":
      case "image":
      case "link":
        (ut("error", e), ut("load", e));
        break;
      case "details":
        ut("toggle", e);
        break;
      case "input":
        (ut("invalid", e),
          Wc(
            e,
            a.value,
            a.defaultValue,
            a.checked,
            a.defaultChecked,
            a.type,
            a.name,
            !0
          ),
          Xu(e));
        break;
      case "select":
        ut("invalid", e);
        break;
      case "textarea":
        (ut("invalid", e), Pc(e, a.value, a.defaultValue, a.children), Xu(e));
    }
    ((l = a.children),
      (typeof l != "string" && typeof l != "number" && typeof l != "bigint") ||
      e.textContent === "" + l ||
      a.suppressHydrationWarning === !0 ||
      Is(e.textContent, l)
        ? (a.popover != null && (ut("beforetoggle", e), ut("toggle", e)),
          a.onScroll != null && ut("scroll", e),
          a.onScrollEnd != null && ut("scrollend", e),
          a.onClick != null && (e.onclick = Bn),
          (e = !0))
        : (e = !1),
      e || xl(t));
  }
  function qr(t) {
    for ($t = t.return; $t; )
      switch ($t.tag) {
        case 5:
        case 13:
          Re = !1;
          return;
        case 27:
        case 3:
          Re = !0;
          return;
        default:
          $t = $t.return;
      }
  }
  function Qa(t) {
    if (t !== $t) return !1;
    if (!rt) return (qr(t), (rt = !0), !1);
    var e = t.tag,
      l;
    if (
      ((l = e !== 3 && e !== 27) &&
        ((l = e === 5) &&
          ((l = t.type),
          (l =
            !(l !== "form" && l !== "button") || ac(t.type, t.memoizedProps))),
        (l = !l)),
      l && Rt && xl(t),
      qr(t),
      e === 13)
    ) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
        throw Error(r(317));
      t: {
        for (t = t.nextSibling, e = 0; t; ) {
          if (t.nodeType === 8)
            if (((l = t.data), l === "/$")) {
              if (e === 0) {
                Rt = Te(t.nextSibling);
                break t;
              }
              e--;
            } else (l !== "$" && l !== "$!" && l !== "$?") || e++;
          t = t.nextSibling;
        }
        Rt = null;
      }
    } else
      e === 27
        ? ((e = Rt), ml(t.type) ? ((t = fc), (fc = null), (Rt = t)) : (Rt = e))
        : (Rt = $t ? Te(t.stateNode.nextSibling) : null);
    return !0;
  }
  function Za() {
    ((Rt = $t = null), (rt = !1));
  }
  function Yr() {
    var t = Ul;
    return (
      t !== null &&
        (It === null ? (It = t) : It.push.apply(It, t), (Ul = null)),
      t
    );
  }
  function wa(t) {
    Ul === null ? (Ul = [t]) : Ul.push(t);
  }
  var ji = H(null),
    Nl = null,
    qe = null;
  function Ie(t, e, l) {
    (Y(ji, e._currentValue), (e._currentValue = l));
  }
  function Ye(t) {
    ((t._currentValue = ji.current), L(ji));
  }
  function Qi(t, e, l) {
    for (; t !== null; ) {
      var a = t.alternate;
      if (
        ((t.childLanes & e) !== e
          ? ((t.childLanes |= e), a !== null && (a.childLanes |= e))
          : a !== null && (a.childLanes & e) !== e && (a.childLanes |= e),
        t === l)
      )
        break;
      t = t.return;
    }
  }
  function Zi(t, e, l, a) {
    var u = t.child;
    for (u !== null && (u.return = t); u !== null; ) {
      var n = u.dependencies;
      if (n !== null) {
        var i = u.child;
        n = n.firstContext;
        t: for (; n !== null; ) {
          var c = n;
          n = u;
          for (var d = 0; d < e.length; d++)
            if (c.context === e[d]) {
              ((n.lanes |= l),
                (c = n.alternate),
                c !== null && (c.lanes |= l),
                Qi(n.return, l, t),
                a || (i = null));
              break t;
            }
          n = c.next;
        }
      } else if (u.tag === 18) {
        if (((i = u.return), i === null)) throw Error(r(341));
        ((i.lanes |= l),
          (n = i.alternate),
          n !== null && (n.lanes |= l),
          Qi(i, l, t),
          (i = null));
      } else i = u.child;
      if (i !== null) i.return = u;
      else
        for (i = u; i !== null; ) {
          if (i === t) {
            i = null;
            break;
          }
          if (((u = i.sibling), u !== null)) {
            ((u.return = i.return), (i = u));
            break;
          }
          i = i.return;
        }
      u = i;
    }
  }
  function Va(t, e, l, a) {
    t = null;
    for (var u = e, n = !1; u !== null; ) {
      if (!n) {
        if ((u.flags & 524288) !== 0) n = !0;
        else if ((u.flags & 262144) !== 0) break;
      }
      if (u.tag === 10) {
        var i = u.alternate;
        if (i === null) throw Error(r(387));
        if (((i = i.memoizedProps), i !== null)) {
          var c = u.type;
          ae(u.pendingProps.value, i.value) ||
            (t !== null ? t.push(c) : (t = [c]));
        }
      } else if (u === te.current) {
        if (((i = u.alternate), i === null)) throw Error(r(387));
        i.memoizedState.memoizedState !== u.memoizedState.memoizedState &&
          (t !== null ? t.push(bu) : (t = [bu]));
      }
      u = u.return;
    }
    (t !== null && Zi(e, t, l, a), (e.flags |= 262144));
  }
  function en(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!ae(t.context._currentValue, t.memoizedValue)) return !0;
      t = t.next;
    }
    return !1;
  }
  function Hl(t) {
    ((Nl = t),
      (qe = null),
      (t = t.dependencies),
      t !== null && (t.firstContext = null));
  }
  function wt(t) {
    return Gr(Nl, t);
  }
  function ln(t, e) {
    return (Nl === null && Hl(t), Gr(t, e));
  }
  function Gr(t, e) {
    var l = e._currentValue;
    if (((e = { context: e, memoizedValue: l, next: null }), qe === null)) {
      if (t === null) throw Error(r(308));
      ((qe = e),
        (t.dependencies = { lanes: 0, firstContext: e }),
        (t.flags |= 524288));
    } else qe = qe.next = e;
    return l;
  }
  var vh =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var t = [],
              e = (this.signal = {
                aborted: !1,
                addEventListener: function (l, a) {
                  t.push(a);
                },
              });
            this.abort = function () {
              ((e.aborted = !0),
                t.forEach(function (l) {
                  return l();
                }));
            };
          },
    yh = f.unstable_scheduleCallback,
    gh = f.unstable_NormalPriority,
    Nt = {
      $$typeof: F,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function wi() {
    return { controller: new vh(), data: new Map(), refCount: 0 };
  }
  function Ka(t) {
    (t.refCount--,
      t.refCount === 0 &&
        yh(gh, function () {
          t.controller.abort();
        }));
  }
  var Ja = null,
    Vi = 0,
    na = 0,
    ia = null;
  function Sh(t, e) {
    if (Ja === null) {
      var l = (Ja = []);
      ((Vi = 0),
        (na = $f()),
        (ia = {
          status: "pending",
          value: void 0,
          then: function (a) {
            l.push(a);
          },
        }));
    }
    return (Vi++, e.then(Lr, Lr), e);
  }
  function Lr() {
    if (--Vi === 0 && Ja !== null) {
      ia !== null && (ia.status = "fulfilled");
      var t = Ja;
      ((Ja = null), (na = 0), (ia = null));
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function ph(t, e) {
    var l = [],
      a = {
        status: "pending",
        value: null,
        reason: null,
        then: function (u) {
          l.push(u);
        },
      };
    return (
      t.then(
        function () {
          ((a.status = "fulfilled"), (a.value = e));
          for (var u = 0; u < l.length; u++) (0, l[u])(e);
        },
        function (u) {
          for (a.status = "rejected", a.reason = u, u = 0; u < l.length; u++)
            (0, l[u])(void 0);
        }
      ),
      a
    );
  }
  var Xr = M.S;
  M.S = function (t, e) {
    (typeof e == "object" &&
      e !== null &&
      typeof e.then == "function" &&
      Sh(t, e),
      Xr !== null && Xr(t, e));
  };
  var Cl = H(null);
  function Ki() {
    var t = Cl.current;
    return t !== null ? t : gt.pooledCache;
  }
  function an(t, e) {
    e === null ? Y(Cl, Cl.current) : Y(Cl, e.pool);
  }
  function jr() {
    var t = Ki();
    return t === null ? null : { parent: Nt._currentValue, pool: t };
  }
  var $a = Error(r(460)),
    Qr = Error(r(474)),
    un = Error(r(542)),
    Ji = { then: function () {} };
  function Zr(t) {
    return ((t = t.status), t === "fulfilled" || t === "rejected");
  }
  function nn() {}
  function wr(t, e, l) {
    switch (
      ((l = t[l]),
      l === void 0 ? t.push(e) : l !== e && (e.then(nn, nn), (e = l)),
      e.status)
    ) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw ((t = e.reason), Kr(t), t);
      default:
        if (typeof e.status == "string") e.then(nn, nn);
        else {
          if (((t = gt), t !== null && 100 < t.shellSuspendCounter))
            throw Error(r(482));
          ((t = e),
            (t.status = "pending"),
            t.then(
              function (a) {
                if (e.status === "pending") {
                  var u = e;
                  ((u.status = "fulfilled"), (u.value = a));
                }
              },
              function (a) {
                if (e.status === "pending") {
                  var u = e;
                  ((u.status = "rejected"), (u.reason = a));
                }
              }
            ));
        }
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw ((t = e.reason), Kr(t), t);
        }
        throw ((ka = e), $a);
    }
  }
  var ka = null;
  function Vr() {
    if (ka === null) throw Error(r(459));
    var t = ka;
    return ((ka = null), t);
  }
  function Kr(t) {
    if (t === $a || t === un) throw Error(r(483));
  }
  var tl = !1;
  function $i(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function ki(t, e) {
    ((t = t.updateQueue),
      e.updateQueue === t &&
        (e.updateQueue = {
          baseState: t.baseState,
          firstBaseUpdate: t.firstBaseUpdate,
          lastBaseUpdate: t.lastBaseUpdate,
          shared: t.shared,
          callbacks: null,
        }));
  }
  function el(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function ll(t, e, l) {
    var a = t.updateQueue;
    if (a === null) return null;
    if (((a = a.shared), (ot & 2) !== 0)) {
      var u = a.pending;
      return (
        u === null ? (e.next = e) : ((e.next = u.next), (u.next = e)),
        (a.pending = e),
        (e = Fu(t)),
        Nr(t, null, l),
        e
      );
    }
    return (Wu(t, a, e, l), Fu(t));
  }
  function Wa(t, e, l) {
    if (
      ((e = e.updateQueue), e !== null && ((e = e.shared), (l & 4194048) !== 0))
    ) {
      var a = e.lanes;
      ((a &= t.pendingLanes), (l |= a), (e.lanes = l), Lc(t, l));
    }
  }
  function Wi(t, e) {
    var l = t.updateQueue,
      a = t.alternate;
    if (a !== null && ((a = a.updateQueue), l === a)) {
      var u = null,
        n = null;
      if (((l = l.firstBaseUpdate), l !== null)) {
        do {
          var i = {
            lane: l.lane,
            tag: l.tag,
            payload: l.payload,
            callback: null,
            next: null,
          };
          (n === null ? (u = n = i) : (n = n.next = i), (l = l.next));
        } while (l !== null);
        n === null ? (u = n = e) : (n = n.next = e);
      } else u = n = e;
      ((l = {
        baseState: a.baseState,
        firstBaseUpdate: u,
        lastBaseUpdate: n,
        shared: a.shared,
        callbacks: a.callbacks,
      }),
        (t.updateQueue = l));
      return;
    }
    ((t = l.lastBaseUpdate),
      t === null ? (l.firstBaseUpdate = e) : (t.next = e),
      (l.lastBaseUpdate = e));
  }
  var Fi = !1;
  function Fa() {
    if (Fi) {
      var t = ia;
      if (t !== null) throw t;
    }
  }
  function Pa(t, e, l, a) {
    Fi = !1;
    var u = t.updateQueue;
    tl = !1;
    var n = u.firstBaseUpdate,
      i = u.lastBaseUpdate,
      c = u.shared.pending;
    if (c !== null) {
      u.shared.pending = null;
      var d = c,
        E = d.next;
      ((d.next = null), i === null ? (n = E) : (i.next = E), (i = d));
      var O = t.alternate;
      O !== null &&
        ((O = O.updateQueue),
        (c = O.lastBaseUpdate),
        c !== i &&
          (c === null ? (O.firstBaseUpdate = E) : (c.next = E),
          (O.lastBaseUpdate = d)));
    }
    if (n !== null) {
      var D = u.baseState;
      ((i = 0), (O = E = d = null), (c = n));
      do {
        var T = c.lane & -536870913,
          A = T !== c.lane;
        if (A ? (nt & T) === T : (a & T) === T) {
          (T !== 0 && T === na && (Fi = !0),
            O !== null &&
              (O = O.next =
                {
                  lane: 0,
                  tag: c.tag,
                  payload: c.payload,
                  callback: null,
                  next: null,
                }));
          t: {
            var W = t,
              J = c;
            T = e;
            var mt = l;
            switch (J.tag) {
              case 1:
                if (((W = J.payload), typeof W == "function")) {
                  D = W.call(mt, D, T);
                  break t;
                }
                D = W;
                break t;
              case 3:
                W.flags = (W.flags & -65537) | 128;
              case 0:
                if (
                  ((W = J.payload),
                  (T = typeof W == "function" ? W.call(mt, D, T) : W),
                  T == null)
                )
                  break t;
                D = z({}, D, T);
                break t;
              case 2:
                tl = !0;
            }
          }
          ((T = c.callback),
            T !== null &&
              ((t.flags |= 64),
              A && (t.flags |= 8192),
              (A = u.callbacks),
              A === null ? (u.callbacks = [T]) : A.push(T)));
        } else
          ((A = {
            lane: T,
            tag: c.tag,
            payload: c.payload,
            callback: c.callback,
            next: null,
          }),
            O === null ? ((E = O = A), (d = D)) : (O = O.next = A),
            (i |= T));
        if (((c = c.next), c === null)) {
          if (((c = u.shared.pending), c === null)) break;
          ((A = c),
            (c = A.next),
            (A.next = null),
            (u.lastBaseUpdate = A),
            (u.shared.pending = null));
        }
      } while (!0);
      (O === null && (d = D),
        (u.baseState = d),
        (u.firstBaseUpdate = E),
        (u.lastBaseUpdate = O),
        n === null && (u.shared.lanes = 0),
        (ol |= i),
        (t.lanes = i),
        (t.memoizedState = D));
    }
  }
  function Jr(t, e) {
    if (typeof t != "function") throw Error(r(191, t));
    t.call(e);
  }
  function $r(t, e) {
    var l = t.callbacks;
    if (l !== null)
      for (t.callbacks = null, t = 0; t < l.length; t++) Jr(l[t], e);
  }
  var fa = H(null),
    fn = H(0);
  function kr(t, e) {
    ((t = we), Y(fn, t), Y(fa, e), (we = t | e.baseLanes));
  }
  function Pi() {
    (Y(fn, we), Y(fa, fa.current));
  }
  function Ii() {
    ((we = fn.current), L(fa), L(fn));
  }
  var al = 0,
    et = null,
    dt = null,
    Ut = null,
    cn = !1,
    ca = !1,
    Bl = !1,
    rn = 0,
    Ia = 0,
    ra = null,
    bh = 0;
  function Mt() {
    throw Error(r(321));
  }
  function tf(t, e) {
    if (e === null) return !1;
    for (var l = 0; l < e.length && l < t.length; l++)
      if (!ae(t[l], e[l])) return !1;
    return !0;
  }
  function ef(t, e, l, a, u, n) {
    return (
      (al = n),
      (et = e),
      (e.memoizedState = null),
      (e.updateQueue = null),
      (e.lanes = 0),
      (M.H = t === null || t.memoizedState === null ? Ho : Co),
      (Bl = !1),
      (n = l(a, u)),
      (Bl = !1),
      ca && (n = Fr(e, l, a, u)),
      Wr(t),
      n
    );
  }
  function Wr(t) {
    M.H = vn;
    var e = dt !== null && dt.next !== null;
    if (((al = 0), (Ut = dt = et = null), (cn = !1), (Ia = 0), (ra = null), e))
      throw Error(r(300));
    t === null ||
      Bt ||
      ((t = t.dependencies), t !== null && en(t) && (Bt = !0));
  }
  function Fr(t, e, l, a) {
    et = t;
    var u = 0;
    do {
      if ((ca && (ra = null), (Ia = 0), (ca = !1), 25 <= u))
        throw Error(r(301));
      if (((u += 1), (Ut = dt = null), t.updateQueue != null)) {
        var n = t.updateQueue;
        ((n.lastEffect = null),
          (n.events = null),
          (n.stores = null),
          n.memoCache != null && (n.memoCache.index = 0));
      }
      ((M.H = Mh), (n = e(l, a)));
    } while (ca);
    return n;
  }
  function Eh() {
    var t = M.H,
      e = t.useState()[0];
    return (
      (e = typeof e.then == "function" ? tu(e) : e),
      (t = t.useState()[0]),
      (dt !== null ? dt.memoizedState : null) !== t && (et.flags |= 1024),
      e
    );
  }
  function lf() {
    var t = rn !== 0;
    return ((rn = 0), t);
  }
  function af(t, e, l) {
    ((e.updateQueue = t.updateQueue), (e.flags &= -2053), (t.lanes &= ~l));
  }
  function uf(t) {
    if (cn) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        (e !== null && (e.pending = null), (t = t.next));
      }
      cn = !1;
    }
    ((al = 0), (Ut = dt = et = null), (ca = !1), (Ia = rn = 0), (ra = null));
  }
  function Ft() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (Ut === null ? (et.memoizedState = Ut = t) : (Ut = Ut.next = t), Ut);
  }
  function xt() {
    if (dt === null) {
      var t = et.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = dt.next;
    var e = Ut === null ? et.memoizedState : Ut.next;
    if (e !== null) ((Ut = e), (dt = t));
    else {
      if (t === null)
        throw et.alternate === null ? Error(r(467)) : Error(r(310));
      ((dt = t),
        (t = {
          memoizedState: dt.memoizedState,
          baseState: dt.baseState,
          baseQueue: dt.baseQueue,
          queue: dt.queue,
          next: null,
        }),
        Ut === null ? (et.memoizedState = Ut = t) : (Ut = Ut.next = t));
    }
    return Ut;
  }
  function nf() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function tu(t) {
    var e = Ia;
    return (
      (Ia += 1),
      ra === null && (ra = []),
      (t = wr(ra, t, e)),
      (e = et),
      (Ut === null ? e.memoizedState : Ut.next) === null &&
        ((e = e.alternate),
        (M.H = e === null || e.memoizedState === null ? Ho : Co)),
      t
    );
  }
  function on(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return tu(t);
      if (t.$$typeof === F) return wt(t);
    }
    throw Error(r(438, String(t)));
  }
  function ff(t) {
    var e = null,
      l = et.updateQueue;
    if ((l !== null && (e = l.memoCache), e == null)) {
      var a = et.alternate;
      a !== null &&
        ((a = a.updateQueue),
        a !== null &&
          ((a = a.memoCache),
          a != null &&
            (e = {
              data: a.data.map(function (u) {
                return u.slice();
              }),
              index: 0,
            })));
    }
    if (
      (e == null && (e = { data: [], index: 0 }),
      l === null && ((l = nf()), (et.updateQueue = l)),
      (l.memoCache = e),
      (l = e.data[e.index]),
      l === void 0)
    )
      for (l = e.data[e.index] = Array(t), a = 0; a < t; a++) l[a] = Jt;
    return (e.index++, l);
  }
  function Ge(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function sn(t) {
    var e = xt();
    return cf(e, dt, t);
  }
  function cf(t, e, l) {
    var a = t.queue;
    if (a === null) throw Error(r(311));
    a.lastRenderedReducer = l;
    var u = t.baseQueue,
      n = a.pending;
    if (n !== null) {
      if (u !== null) {
        var i = u.next;
        ((u.next = n.next), (n.next = i));
      }
      ((e.baseQueue = u = n), (a.pending = null));
    }
    if (((n = t.baseState), u === null)) t.memoizedState = n;
    else {
      e = u.next;
      var c = (i = null),
        d = null,
        E = e,
        O = !1;
      do {
        var D = E.lane & -536870913;
        if (D !== E.lane ? (nt & D) === D : (al & D) === D) {
          var T = E.revertLane;
          if (T === 0)
            (d !== null &&
              (d = d.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: E.action,
                  hasEagerState: E.hasEagerState,
                  eagerState: E.eagerState,
                  next: null,
                }),
              D === na && (O = !0));
          else if ((al & T) === T) {
            ((E = E.next), T === na && (O = !0));
            continue;
          } else
            ((D = {
              lane: 0,
              revertLane: E.revertLane,
              action: E.action,
              hasEagerState: E.hasEagerState,
              eagerState: E.eagerState,
              next: null,
            }),
              d === null ? ((c = d = D), (i = n)) : (d = d.next = D),
              (et.lanes |= T),
              (ol |= T));
          ((D = E.action),
            Bl && l(n, D),
            (n = E.hasEagerState ? E.eagerState : l(n, D)));
        } else
          ((T = {
            lane: D,
            revertLane: E.revertLane,
            action: E.action,
            hasEagerState: E.hasEagerState,
            eagerState: E.eagerState,
            next: null,
          }),
            d === null ? ((c = d = T), (i = n)) : (d = d.next = T),
            (et.lanes |= D),
            (ol |= D));
        E = E.next;
      } while (E !== null && E !== e);
      if (
        (d === null ? (i = n) : (d.next = c),
        !ae(n, t.memoizedState) && ((Bt = !0), O && ((l = ia), l !== null)))
      )
        throw l;
      ((t.memoizedState = n),
        (t.baseState = i),
        (t.baseQueue = d),
        (a.lastRenderedState = n));
    }
    return (u === null && (a.lanes = 0), [t.memoizedState, a.dispatch]);
  }
  function rf(t) {
    var e = xt(),
      l = e.queue;
    if (l === null) throw Error(r(311));
    l.lastRenderedReducer = t;
    var a = l.dispatch,
      u = l.pending,
      n = e.memoizedState;
    if (u !== null) {
      l.pending = null;
      var i = (u = u.next);
      do ((n = t(n, i.action)), (i = i.next));
      while (i !== u);
      (ae(n, e.memoizedState) || (Bt = !0),
        (e.memoizedState = n),
        e.baseQueue === null && (e.baseState = n),
        (l.lastRenderedState = n));
    }
    return [n, a];
  }
  function Pr(t, e, l) {
    var a = et,
      u = xt(),
      n = rt;
    if (n) {
      if (l === void 0) throw Error(r(407));
      l = l();
    } else l = e();
    var i = !ae((dt || u).memoizedState, l);
    (i && ((u.memoizedState = l), (Bt = !0)), (u = u.queue));
    var c = eo.bind(null, a, u, t);
    if (
      (eu(2048, 8, c, [t]),
      u.getSnapshot !== e || i || (Ut !== null && Ut.memoizedState.tag & 1))
    ) {
      if (
        ((a.flags |= 2048),
        oa(9, dn(), to.bind(null, a, u, l, e), null),
        gt === null)
      )
        throw Error(r(349));
      n || (al & 124) !== 0 || Ir(a, e, l);
    }
    return l;
  }
  function Ir(t, e, l) {
    ((t.flags |= 16384),
      (t = { getSnapshot: e, value: l }),
      (e = et.updateQueue),
      e === null
        ? ((e = nf()), (et.updateQueue = e), (e.stores = [t]))
        : ((l = e.stores), l === null ? (e.stores = [t]) : l.push(t)));
  }
  function to(t, e, l, a) {
    ((e.value = l), (e.getSnapshot = a), lo(e) && ao(t));
  }
  function eo(t, e, l) {
    return l(function () {
      lo(e) && ao(t);
    });
  }
  function lo(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var l = e();
      return !ae(t, l);
    } catch {
      return !0;
    }
  }
  function ao(t) {
    var e = ea(t, 2);
    e !== null && re(e, t, 2);
  }
  function of(t) {
    var e = Ft();
    if (typeof t == "function") {
      var l = t;
      if (((t = l()), Bl)) {
        We(!0);
        try {
          l();
        } finally {
          We(!1);
        }
      }
    }
    return (
      (e.memoizedState = e.baseState = t),
      (e.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ge,
        lastRenderedState: t,
      }),
      e
    );
  }
  function uo(t, e, l, a) {
    return ((t.baseState = l), cf(t, dt, typeof a == "function" ? a : Ge));
  }
  function Th(t, e, l, a, u) {
    if (mn(t)) throw Error(r(485));
    if (((t = e.action), t !== null)) {
      var n = {
        payload: u,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (i) {
          n.listeners.push(i);
        },
      };
      (M.T !== null ? l(!0) : (n.isTransition = !1),
        a(n),
        (l = e.pending),
        l === null
          ? ((n.next = e.pending = n), no(e, n))
          : ((n.next = l.next), (e.pending = l.next = n)));
    }
  }
  function no(t, e) {
    var l = e.action,
      a = e.payload,
      u = t.state;
    if (e.isTransition) {
      var n = M.T,
        i = {};
      M.T = i;
      try {
        var c = l(u, a),
          d = M.S;
        (d !== null && d(i, c), io(t, e, c));
      } catch (E) {
        sf(t, e, E);
      } finally {
        M.T = n;
      }
    } else
      try {
        ((n = l(u, a)), io(t, e, n));
      } catch (E) {
        sf(t, e, E);
      }
  }
  function io(t, e, l) {
    l !== null && typeof l == "object" && typeof l.then == "function"
      ? l.then(
          function (a) {
            fo(t, e, a);
          },
          function (a) {
            return sf(t, e, a);
          }
        )
      : fo(t, e, l);
  }
  function fo(t, e, l) {
    ((e.status = "fulfilled"),
      (e.value = l),
      co(e),
      (t.state = l),
      (e = t.pending),
      e !== null &&
        ((l = e.next),
        l === e ? (t.pending = null) : ((l = l.next), (e.next = l), no(t, l))));
  }
  function sf(t, e, l) {
    var a = t.pending;
    if (((t.pending = null), a !== null)) {
      a = a.next;
      do ((e.status = "rejected"), (e.reason = l), co(e), (e = e.next));
      while (e !== a);
    }
    t.action = null;
  }
  function co(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function ro(t, e) {
    return e;
  }
  function oo(t, e) {
    if (rt) {
      var l = gt.formState;
      if (l !== null) {
        t: {
          var a = et;
          if (rt) {
            if (Rt) {
              e: {
                for (var u = Rt, n = Re; u.nodeType !== 8; ) {
                  if (!n) {
                    u = null;
                    break e;
                  }
                  if (((u = Te(u.nextSibling)), u === null)) {
                    u = null;
                    break e;
                  }
                }
                ((n = u.data), (u = n === "F!" || n === "F" ? u : null));
              }
              if (u) {
                ((Rt = Te(u.nextSibling)), (a = u.data === "F!"));
                break t;
              }
            }
            xl(a);
          }
          a = !1;
        }
        a && (e = l[0]);
      }
    }
    return (
      (l = Ft()),
      (l.memoizedState = l.baseState = e),
      (a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ro,
        lastRenderedState: e,
      }),
      (l.queue = a),
      (l = Uo.bind(null, et, a)),
      (a.dispatch = l),
      (a = of(!1)),
      (n = yf.bind(null, et, !1, a.queue)),
      (a = Ft()),
      (u = { state: e, dispatch: null, action: t, pending: null }),
      (a.queue = u),
      (l = Th.bind(null, et, u, n, l)),
      (u.dispatch = l),
      (a.memoizedState = t),
      [e, l, !1]
    );
  }
  function so(t) {
    var e = xt();
    return ho(e, dt, t);
  }
  function ho(t, e, l) {
    if (
      ((e = cf(t, e, ro)[0]),
      (t = sn(Ge)[0]),
      typeof e == "object" && e !== null && typeof e.then == "function")
    )
      try {
        var a = tu(e);
      } catch (i) {
        throw i === $a ? un : i;
      }
    else a = e;
    e = xt();
    var u = e.queue,
      n = u.dispatch;
    return (
      l !== e.memoizedState &&
        ((et.flags |= 2048), oa(9, dn(), Ah.bind(null, u, l), null)),
      [a, n, t]
    );
  }
  function Ah(t, e) {
    t.action = e;
  }
  function mo(t) {
    var e = xt(),
      l = dt;
    if (l !== null) return ho(e, l, t);
    (xt(), (e = e.memoizedState), (l = xt()));
    var a = l.queue.dispatch;
    return ((l.memoizedState = t), [e, a, !1]);
  }
  function oa(t, e, l, a) {
    return (
      (t = { tag: t, create: l, deps: a, inst: e, next: null }),
      (e = et.updateQueue),
      e === null && ((e = nf()), (et.updateQueue = e)),
      (l = e.lastEffect),
      l === null
        ? (e.lastEffect = t.next = t)
        : ((a = l.next), (l.next = t), (t.next = a), (e.lastEffect = t)),
      t
    );
  }
  function dn() {
    return { destroy: void 0, resource: void 0 };
  }
  function vo() {
    return xt().memoizedState;
  }
  function hn(t, e, l, a) {
    var u = Ft();
    ((a = a === void 0 ? null : a),
      (et.flags |= t),
      (u.memoizedState = oa(1 | e, dn(), l, a)));
  }
  function eu(t, e, l, a) {
    var u = xt();
    a = a === void 0 ? null : a;
    var n = u.memoizedState.inst;
    dt !== null && a !== null && tf(a, dt.memoizedState.deps)
      ? (u.memoizedState = oa(e, n, l, a))
      : ((et.flags |= t), (u.memoizedState = oa(1 | e, n, l, a)));
  }
  function yo(t, e) {
    hn(8390656, 8, t, e);
  }
  function go(t, e) {
    eu(2048, 8, t, e);
  }
  function So(t, e) {
    return eu(4, 2, t, e);
  }
  function po(t, e) {
    return eu(4, 4, t, e);
  }
  function bo(t, e) {
    if (typeof e == "function") {
      t = t();
      var l = e(t);
      return function () {
        typeof l == "function" ? l() : e(null);
      };
    }
    if (e != null)
      return (
        (t = t()),
        (e.current = t),
        function () {
          e.current = null;
        }
      );
  }
  function Eo(t, e, l) {
    ((l = l != null ? l.concat([t]) : null), eu(4, 4, bo.bind(null, e, t), l));
  }
  function df() {}
  function To(t, e) {
    var l = xt();
    e = e === void 0 ? null : e;
    var a = l.memoizedState;
    return e !== null && tf(e, a[1]) ? a[0] : ((l.memoizedState = [t, e]), t);
  }
  function Ao(t, e) {
    var l = xt();
    e = e === void 0 ? null : e;
    var a = l.memoizedState;
    if (e !== null && tf(e, a[1])) return a[0];
    if (((a = t()), Bl)) {
      We(!0);
      try {
        t();
      } finally {
        We(!1);
      }
    }
    return ((l.memoizedState = [a, e]), a);
  }
  function hf(t, e, l) {
    return l === void 0 || (al & 1073741824) !== 0
      ? (t.memoizedState = e)
      : ((t.memoizedState = l), (t = Os()), (et.lanes |= t), (ol |= t), l);
  }
  function Ro(t, e, l, a) {
    return ae(l, e)
      ? l
      : fa.current !== null
        ? ((t = hf(t, l, a)), ae(t, e) || (Bt = !0), t)
        : (al & 42) === 0
          ? ((Bt = !0), (t.memoizedState = l))
          : ((t = Os()), (et.lanes |= t), (ol |= t), e);
  }
  function zo(t, e, l, a, u) {
    var n = G.p;
    G.p = n !== 0 && 8 > n ? n : 8;
    var i = M.T,
      c = {};
    ((M.T = c), yf(t, !1, e, l));
    try {
      var d = u(),
        E = M.S;
      if (
        (E !== null && E(c, d),
        d !== null && typeof d == "object" && typeof d.then == "function")
      ) {
        var O = ph(d, a);
        lu(t, e, O, ce(t));
      } else lu(t, e, a, ce(t));
    } catch (D) {
      lu(t, e, { then: function () {}, status: "rejected", reason: D }, ce());
    } finally {
      ((G.p = n), (M.T = i));
    }
  }
  function Rh() {}
  function mf(t, e, l, a) {
    if (t.tag !== 5) throw Error(r(476));
    var u = Oo(t).queue;
    zo(
      t,
      u,
      e,
      k,
      l === null
        ? Rh
        : function () {
            return (Mo(t), l(a));
          }
    );
  }
  function Oo(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: k,
      baseState: k,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ge,
        lastRenderedState: k,
      },
      next: null,
    };
    var l = {};
    return (
      (e.next = {
        memoizedState: l,
        baseState: l,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Ge,
          lastRenderedState: l,
        },
        next: null,
      }),
      (t.memoizedState = e),
      (t = t.alternate),
      t !== null && (t.memoizedState = e),
      e
    );
  }
  function Mo(t) {
    var e = Oo(t).next.queue;
    lu(t, e, {}, ce());
  }
  function vf() {
    return wt(bu);
  }
  function _o() {
    return xt().memoizedState;
  }
  function Do() {
    return xt().memoizedState;
  }
  function zh(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var l = ce();
          t = el(l);
          var a = ll(e, t, l);
          (a !== null && (re(a, e, l), Wa(a, e, l)),
            (e = { cache: wi() }),
            (t.payload = e));
          return;
      }
      e = e.return;
    }
  }
  function Oh(t, e, l) {
    var a = ce();
    ((l = {
      lane: a,
      revertLane: 0,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      mn(t)
        ? xo(e, l)
        : ((l = Ci(t, e, l, a)), l !== null && (re(l, t, a), No(l, e, a))));
  }
  function Uo(t, e, l) {
    var a = ce();
    lu(t, e, l, a);
  }
  function lu(t, e, l, a) {
    var u = {
      lane: a,
      revertLane: 0,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (mn(t)) xo(e, u);
    else {
      var n = t.alternate;
      if (
        t.lanes === 0 &&
        (n === null || n.lanes === 0) &&
        ((n = e.lastRenderedReducer), n !== null)
      )
        try {
          var i = e.lastRenderedState,
            c = n(i, l);
          if (((u.hasEagerState = !0), (u.eagerState = c), ae(c, i)))
            return (Wu(t, e, u, 0), gt === null && ku(), !1);
        } catch {
        } finally {
        }
      if (((l = Ci(t, e, u, a)), l !== null))
        return (re(l, t, a), No(l, e, a), !0);
    }
    return !1;
  }
  function yf(t, e, l, a) {
    if (
      ((a = {
        lane: 2,
        revertLane: $f(),
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      mn(t))
    ) {
      if (e) throw Error(r(479));
    } else ((e = Ci(t, l, a, 2)), e !== null && re(e, t, 2));
  }
  function mn(t) {
    var e = t.alternate;
    return t === et || (e !== null && e === et);
  }
  function xo(t, e) {
    ca = cn = !0;
    var l = t.pending;
    (l === null ? (e.next = e) : ((e.next = l.next), (l.next = e)),
      (t.pending = e));
  }
  function No(t, e, l) {
    if ((l & 4194048) !== 0) {
      var a = e.lanes;
      ((a &= t.pendingLanes), (l |= a), (e.lanes = l), Lc(t, l));
    }
  }
  var vn = {
      readContext: wt,
      use: on,
      useCallback: Mt,
      useContext: Mt,
      useEffect: Mt,
      useImperativeHandle: Mt,
      useLayoutEffect: Mt,
      useInsertionEffect: Mt,
      useMemo: Mt,
      useReducer: Mt,
      useRef: Mt,
      useState: Mt,
      useDebugValue: Mt,
      useDeferredValue: Mt,
      useTransition: Mt,
      useSyncExternalStore: Mt,
      useId: Mt,
      useHostTransitionStatus: Mt,
      useFormState: Mt,
      useActionState: Mt,
      useOptimistic: Mt,
      useMemoCache: Mt,
      useCacheRefresh: Mt,
    },
    Ho = {
      readContext: wt,
      use: on,
      useCallback: function (t, e) {
        return ((Ft().memoizedState = [t, e === void 0 ? null : e]), t);
      },
      useContext: wt,
      useEffect: yo,
      useImperativeHandle: function (t, e, l) {
        ((l = l != null ? l.concat([t]) : null),
          hn(4194308, 4, bo.bind(null, e, t), l));
      },
      useLayoutEffect: function (t, e) {
        return hn(4194308, 4, t, e);
      },
      useInsertionEffect: function (t, e) {
        hn(4, 2, t, e);
      },
      useMemo: function (t, e) {
        var l = Ft();
        e = e === void 0 ? null : e;
        var a = t();
        if (Bl) {
          We(!0);
          try {
            t();
          } finally {
            We(!1);
          }
        }
        return ((l.memoizedState = [a, e]), a);
      },
      useReducer: function (t, e, l) {
        var a = Ft();
        if (l !== void 0) {
          var u = l(e);
          if (Bl) {
            We(!0);
            try {
              l(e);
            } finally {
              We(!1);
            }
          }
        } else u = e;
        return (
          (a.memoizedState = a.baseState = u),
          (t = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: t,
            lastRenderedState: u,
          }),
          (a.queue = t),
          (t = t.dispatch = Oh.bind(null, et, t)),
          [a.memoizedState, t]
        );
      },
      useRef: function (t) {
        var e = Ft();
        return ((t = { current: t }), (e.memoizedState = t));
      },
      useState: function (t) {
        t = of(t);
        var e = t.queue,
          l = Uo.bind(null, et, e);
        return ((e.dispatch = l), [t.memoizedState, l]);
      },
      useDebugValue: df,
      useDeferredValue: function (t, e) {
        var l = Ft();
        return hf(l, t, e);
      },
      useTransition: function () {
        var t = of(!1);
        return (
          (t = zo.bind(null, et, t.queue, !0, !1)),
          (Ft().memoizedState = t),
          [!1, t]
        );
      },
      useSyncExternalStore: function (t, e, l) {
        var a = et,
          u = Ft();
        if (rt) {
          if (l === void 0) throw Error(r(407));
          l = l();
        } else {
          if (((l = e()), gt === null)) throw Error(r(349));
          (nt & 124) !== 0 || Ir(a, e, l);
        }
        u.memoizedState = l;
        var n = { value: l, getSnapshot: e };
        return (
          (u.queue = n),
          yo(eo.bind(null, a, n, t), [t]),
          (a.flags |= 2048),
          oa(9, dn(), to.bind(null, a, n, l, e), null),
          l
        );
      },
      useId: function () {
        var t = Ft(),
          e = gt.identifierPrefix;
        if (rt) {
          var l = Be,
            a = Ce;
          ((l = (a & ~(1 << (32 - le(a) - 1))).toString(32) + l),
            (e = "«" + e + "R" + l),
            (l = rn++),
            0 < l && (e += "H" + l.toString(32)),
            (e += "»"));
        } else ((l = bh++), (e = "«" + e + "r" + l.toString(32) + "»"));
        return (t.memoizedState = e);
      },
      useHostTransitionStatus: vf,
      useFormState: oo,
      useActionState: oo,
      useOptimistic: function (t) {
        var e = Ft();
        e.memoizedState = e.baseState = t;
        var l = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (e.queue = l),
          (e = yf.bind(null, et, !0, l)),
          (l.dispatch = e),
          [t, e]
        );
      },
      useMemoCache: ff,
      useCacheRefresh: function () {
        return (Ft().memoizedState = zh.bind(null, et));
      },
    },
    Co = {
      readContext: wt,
      use: on,
      useCallback: To,
      useContext: wt,
      useEffect: go,
      useImperativeHandle: Eo,
      useInsertionEffect: So,
      useLayoutEffect: po,
      useMemo: Ao,
      useReducer: sn,
      useRef: vo,
      useState: function () {
        return sn(Ge);
      },
      useDebugValue: df,
      useDeferredValue: function (t, e) {
        var l = xt();
        return Ro(l, dt.memoizedState, t, e);
      },
      useTransition: function () {
        var t = sn(Ge)[0],
          e = xt().memoizedState;
        return [typeof t == "boolean" ? t : tu(t), e];
      },
      useSyncExternalStore: Pr,
      useId: _o,
      useHostTransitionStatus: vf,
      useFormState: so,
      useActionState: so,
      useOptimistic: function (t, e) {
        var l = xt();
        return uo(l, dt, t, e);
      },
      useMemoCache: ff,
      useCacheRefresh: Do,
    },
    Mh = {
      readContext: wt,
      use: on,
      useCallback: To,
      useContext: wt,
      useEffect: go,
      useImperativeHandle: Eo,
      useInsertionEffect: So,
      useLayoutEffect: po,
      useMemo: Ao,
      useReducer: rf,
      useRef: vo,
      useState: function () {
        return rf(Ge);
      },
      useDebugValue: df,
      useDeferredValue: function (t, e) {
        var l = xt();
        return dt === null ? hf(l, t, e) : Ro(l, dt.memoizedState, t, e);
      },
      useTransition: function () {
        var t = rf(Ge)[0],
          e = xt().memoizedState;
        return [typeof t == "boolean" ? t : tu(t), e];
      },
      useSyncExternalStore: Pr,
      useId: _o,
      useHostTransitionStatus: vf,
      useFormState: mo,
      useActionState: mo,
      useOptimistic: function (t, e) {
        var l = xt();
        return dt !== null
          ? uo(l, dt, t, e)
          : ((l.baseState = t), [t, l.queue.dispatch]);
      },
      useMemoCache: ff,
      useCacheRefresh: Do,
    },
    sa = null,
    au = 0;
  function yn(t) {
    var e = au;
    return ((au += 1), sa === null && (sa = []), wr(sa, t, e));
  }
  function uu(t, e) {
    ((e = e.props.ref), (t.ref = e !== void 0 ? e : null));
  }
  function gn(t, e) {
    throw e.$$typeof === B
      ? Error(r(525))
      : ((t = Object.prototype.toString.call(e)),
        Error(
          r(
            31,
            t === "[object Object]"
              ? "object with keys {" + Object.keys(e).join(", ") + "}"
              : t
          )
        ));
  }
  function Bo(t) {
    var e = t._init;
    return e(t._payload);
  }
  function qo(t) {
    function e(S, y) {
      if (t) {
        var b = S.deletions;
        b === null ? ((S.deletions = [y]), (S.flags |= 16)) : b.push(y);
      }
    }
    function l(S, y) {
      if (!t) return null;
      for (; y !== null; ) (e(S, y), (y = y.sibling));
      return null;
    }
    function a(S) {
      for (var y = new Map(); S !== null; )
        (S.key !== null ? y.set(S.key, S) : y.set(S.index, S), (S = S.sibling));
      return y;
    }
    function u(S, y) {
      return ((S = He(S, y)), (S.index = 0), (S.sibling = null), S);
    }
    function n(S, y, b) {
      return (
        (S.index = b),
        t
          ? ((b = S.alternate),
            b !== null
              ? ((b = b.index), b < y ? ((S.flags |= 67108866), y) : b)
              : ((S.flags |= 67108866), y))
          : ((S.flags |= 1048576), y)
      );
    }
    function i(S) {
      return (t && S.alternate === null && (S.flags |= 67108866), S);
    }
    function c(S, y, b, _) {
      return y === null || y.tag !== 6
        ? ((y = qi(b, S.mode, _)), (y.return = S), y)
        : ((y = u(y, b)), (y.return = S), y);
    }
    function d(S, y, b, _) {
      var j = b.type;
      return j === C
        ? O(S, y, b.props.children, _, b.key)
        : y !== null &&
            (y.elementType === j ||
              (typeof j == "object" &&
                j !== null &&
                j.$$typeof === Ot &&
                Bo(j) === y.type))
          ? ((y = u(y, b.props)), uu(y, b), (y.return = S), y)
          : ((y = Pu(b.type, b.key, b.props, null, S.mode, _)),
            uu(y, b),
            (y.return = S),
            y);
    }
    function E(S, y, b, _) {
      return y === null ||
        y.tag !== 4 ||
        y.stateNode.containerInfo !== b.containerInfo ||
        y.stateNode.implementation !== b.implementation
        ? ((y = Yi(b, S.mode, _)), (y.return = S), y)
        : ((y = u(y, b.children || [])), (y.return = S), y);
    }
    function O(S, y, b, _, j) {
      return y === null || y.tag !== 7
        ? ((y = Ml(b, S.mode, _, j)), (y.return = S), y)
        : ((y = u(y, b)), (y.return = S), y);
    }
    function D(S, y, b) {
      if (
        (typeof y == "string" && y !== "") ||
        typeof y == "number" ||
        typeof y == "bigint"
      )
        return ((y = qi("" + y, S.mode, b)), (y.return = S), y);
      if (typeof y == "object" && y !== null) {
        switch (y.$$typeof) {
          case N:
            return (
              (b = Pu(y.type, y.key, y.props, null, S.mode, b)),
              uu(b, y),
              (b.return = S),
              b
            );
          case Q:
            return ((y = Yi(y, S.mode, b)), (y.return = S), y);
          case Ot:
            var _ = y._init;
            return ((y = _(y._payload)), D(S, y, b));
        }
        if (Qt(y) || jt(y))
          return ((y = Ml(y, S.mode, b, null)), (y.return = S), y);
        if (typeof y.then == "function") return D(S, yn(y), b);
        if (y.$$typeof === F) return D(S, ln(S, y), b);
        gn(S, y);
      }
      return null;
    }
    function T(S, y, b, _) {
      var j = y !== null ? y.key : null;
      if (
        (typeof b == "string" && b !== "") ||
        typeof b == "number" ||
        typeof b == "bigint"
      )
        return j !== null ? null : c(S, y, "" + b, _);
      if (typeof b == "object" && b !== null) {
        switch (b.$$typeof) {
          case N:
            return b.key === j ? d(S, y, b, _) : null;
          case Q:
            return b.key === j ? E(S, y, b, _) : null;
          case Ot:
            return ((j = b._init), (b = j(b._payload)), T(S, y, b, _));
        }
        if (Qt(b) || jt(b)) return j !== null ? null : O(S, y, b, _, null);
        if (typeof b.then == "function") return T(S, y, yn(b), _);
        if (b.$$typeof === F) return T(S, y, ln(S, b), _);
        gn(S, b);
      }
      return null;
    }
    function A(S, y, b, _, j) {
      if (
        (typeof _ == "string" && _ !== "") ||
        typeof _ == "number" ||
        typeof _ == "bigint"
      )
        return ((S = S.get(b) || null), c(y, S, "" + _, j));
      if (typeof _ == "object" && _ !== null) {
        switch (_.$$typeof) {
          case N:
            return (
              (S = S.get(_.key === null ? b : _.key) || null),
              d(y, S, _, j)
            );
          case Q:
            return (
              (S = S.get(_.key === null ? b : _.key) || null),
              E(y, S, _, j)
            );
          case Ot:
            var lt = _._init;
            return ((_ = lt(_._payload)), A(S, y, b, _, j));
        }
        if (Qt(_) || jt(_))
          return ((S = S.get(b) || null), O(y, S, _, j, null));
        if (typeof _.then == "function") return A(S, y, b, yn(_), j);
        if (_.$$typeof === F) return A(S, y, b, ln(y, _), j);
        gn(y, _);
      }
      return null;
    }
    function W(S, y, b, _) {
      for (
        var j = null, lt = null, V = y, $ = (y = 0), Yt = null;
        V !== null && $ < b.length;
        $++
      ) {
        V.index > $ ? ((Yt = V), (V = null)) : (Yt = V.sibling);
        var ct = T(S, V, b[$], _);
        if (ct === null) {
          V === null && (V = Yt);
          break;
        }
        (t && V && ct.alternate === null && e(S, V),
          (y = n(ct, y, $)),
          lt === null ? (j = ct) : (lt.sibling = ct),
          (lt = ct),
          (V = Yt));
      }
      if ($ === b.length) return (l(S, V), rt && Dl(S, $), j);
      if (V === null) {
        for (; $ < b.length; $++)
          ((V = D(S, b[$], _)),
            V !== null &&
              ((y = n(V, y, $)),
              lt === null ? (j = V) : (lt.sibling = V),
              (lt = V)));
        return (rt && Dl(S, $), j);
      }
      for (V = a(V); $ < b.length; $++)
        ((Yt = A(V, S, $, b[$], _)),
          Yt !== null &&
            (t &&
              Yt.alternate !== null &&
              V.delete(Yt.key === null ? $ : Yt.key),
            (y = n(Yt, y, $)),
            lt === null ? (j = Yt) : (lt.sibling = Yt),
            (lt = Yt)));
      return (
        t &&
          V.forEach(function (pl) {
            return e(S, pl);
          }),
        rt && Dl(S, $),
        j
      );
    }
    function J(S, y, b, _) {
      if (b == null) throw Error(r(151));
      for (
        var j = null, lt = null, V = y, $ = (y = 0), Yt = null, ct = b.next();
        V !== null && !ct.done;
        $++, ct = b.next()
      ) {
        V.index > $ ? ((Yt = V), (V = null)) : (Yt = V.sibling);
        var pl = T(S, V, ct.value, _);
        if (pl === null) {
          V === null && (V = Yt);
          break;
        }
        (t && V && pl.alternate === null && e(S, V),
          (y = n(pl, y, $)),
          lt === null ? (j = pl) : (lt.sibling = pl),
          (lt = pl),
          (V = Yt));
      }
      if (ct.done) return (l(S, V), rt && Dl(S, $), j);
      if (V === null) {
        for (; !ct.done; $++, ct = b.next())
          ((ct = D(S, ct.value, _)),
            ct !== null &&
              ((y = n(ct, y, $)),
              lt === null ? (j = ct) : (lt.sibling = ct),
              (lt = ct)));
        return (rt && Dl(S, $), j);
      }
      for (V = a(V); !ct.done; $++, ct = b.next())
        ((ct = A(V, S, $, ct.value, _)),
          ct !== null &&
            (t &&
              ct.alternate !== null &&
              V.delete(ct.key === null ? $ : ct.key),
            (y = n(ct, y, $)),
            lt === null ? (j = ct) : (lt.sibling = ct),
            (lt = ct)));
      return (
        t &&
          V.forEach(function (_m) {
            return e(S, _m);
          }),
        rt && Dl(S, $),
        j
      );
    }
    function mt(S, y, b, _) {
      if (
        (typeof b == "object" &&
          b !== null &&
          b.type === C &&
          b.key === null &&
          (b = b.props.children),
        typeof b == "object" && b !== null)
      ) {
        switch (b.$$typeof) {
          case N:
            t: {
              for (var j = b.key; y !== null; ) {
                if (y.key === j) {
                  if (((j = b.type), j === C)) {
                    if (y.tag === 7) {
                      (l(S, y.sibling),
                        (_ = u(y, b.props.children)),
                        (_.return = S),
                        (S = _));
                      break t;
                    }
                  } else if (
                    y.elementType === j ||
                    (typeof j == "object" &&
                      j !== null &&
                      j.$$typeof === Ot &&
                      Bo(j) === y.type)
                  ) {
                    (l(S, y.sibling),
                      (_ = u(y, b.props)),
                      uu(_, b),
                      (_.return = S),
                      (S = _));
                    break t;
                  }
                  l(S, y);
                  break;
                } else e(S, y);
                y = y.sibling;
              }
              b.type === C
                ? ((_ = Ml(b.props.children, S.mode, _, b.key)),
                  (_.return = S),
                  (S = _))
                : ((_ = Pu(b.type, b.key, b.props, null, S.mode, _)),
                  uu(_, b),
                  (_.return = S),
                  (S = _));
            }
            return i(S);
          case Q:
            t: {
              for (j = b.key; y !== null; ) {
                if (y.key === j)
                  if (
                    y.tag === 4 &&
                    y.stateNode.containerInfo === b.containerInfo &&
                    y.stateNode.implementation === b.implementation
                  ) {
                    (l(S, y.sibling),
                      (_ = u(y, b.children || [])),
                      (_.return = S),
                      (S = _));
                    break t;
                  } else {
                    l(S, y);
                    break;
                  }
                else e(S, y);
                y = y.sibling;
              }
              ((_ = Yi(b, S.mode, _)), (_.return = S), (S = _));
            }
            return i(S);
          case Ot:
            return ((j = b._init), (b = j(b._payload)), mt(S, y, b, _));
        }
        if (Qt(b)) return W(S, y, b, _);
        if (jt(b)) {
          if (((j = jt(b)), typeof j != "function")) throw Error(r(150));
          return ((b = j.call(b)), J(S, y, b, _));
        }
        if (typeof b.then == "function") return mt(S, y, yn(b), _);
        if (b.$$typeof === F) return mt(S, y, ln(S, b), _);
        gn(S, b);
      }
      return (typeof b == "string" && b !== "") ||
        typeof b == "number" ||
        typeof b == "bigint"
        ? ((b = "" + b),
          y !== null && y.tag === 6
            ? (l(S, y.sibling), (_ = u(y, b)), (_.return = S), (S = _))
            : (l(S, y), (_ = qi(b, S.mode, _)), (_.return = S), (S = _)),
          i(S))
        : l(S, y);
    }
    return function (S, y, b, _) {
      try {
        au = 0;
        var j = mt(S, y, b, _);
        return ((sa = null), j);
      } catch (V) {
        if (V === $a || V === un) throw V;
        var lt = ue(29, V, null, S.mode);
        return ((lt.lanes = _), (lt.return = S), lt);
      } finally {
      }
    };
  }
  var da = qo(!0),
    Yo = qo(!1),
    ge = H(null),
    ze = null;
  function ul(t) {
    var e = t.alternate;
    (Y(Ht, Ht.current & 1),
      Y(ge, t),
      ze === null &&
        (e === null || fa.current !== null || e.memoizedState !== null) &&
        (ze = t));
  }
  function Go(t) {
    if (t.tag === 22) {
      if ((Y(Ht, Ht.current), Y(ge, t), ze === null)) {
        var e = t.alternate;
        e !== null && e.memoizedState !== null && (ze = t);
      }
    } else nl();
  }
  function nl() {
    (Y(Ht, Ht.current), Y(ge, ge.current));
  }
  function Le(t) {
    (L(ge), ze === t && (ze = null), L(Ht));
  }
  var Ht = H(0);
  function Sn(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var l = e.memoizedState;
        if (
          l !== null &&
          ((l = l.dehydrated), l === null || l.data === "$?" || ic(l))
        )
          return e;
      } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
        if ((e.flags & 128) !== 0) return e;
      } else if (e.child !== null) {
        ((e.child.return = e), (e = e.child));
        continue;
      }
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return null;
        e = e.return;
      }
      ((e.sibling.return = e.return), (e = e.sibling));
    }
    return null;
  }
  function gf(t, e, l, a) {
    ((e = t.memoizedState),
      (l = l(a, e)),
      (l = l == null ? e : z({}, e, l)),
      (t.memoizedState = l),
      t.lanes === 0 && (t.updateQueue.baseState = l));
  }
  var Sf = {
    enqueueSetState: function (t, e, l) {
      t = t._reactInternals;
      var a = ce(),
        u = el(a);
      ((u.payload = e),
        l != null && (u.callback = l),
        (e = ll(t, u, a)),
        e !== null && (re(e, t, a), Wa(e, t, a)));
    },
    enqueueReplaceState: function (t, e, l) {
      t = t._reactInternals;
      var a = ce(),
        u = el(a);
      ((u.tag = 1),
        (u.payload = e),
        l != null && (u.callback = l),
        (e = ll(t, u, a)),
        e !== null && (re(e, t, a), Wa(e, t, a)));
    },
    enqueueForceUpdate: function (t, e) {
      t = t._reactInternals;
      var l = ce(),
        a = el(l);
      ((a.tag = 2),
        e != null && (a.callback = e),
        (e = ll(t, a, l)),
        e !== null && (re(e, t, l), Wa(e, t, l)));
    },
  };
  function Lo(t, e, l, a, u, n, i) {
    return (
      (t = t.stateNode),
      typeof t.shouldComponentUpdate == "function"
        ? t.shouldComponentUpdate(a, n, i)
        : e.prototype && e.prototype.isPureReactComponent
          ? !Xa(l, a) || !Xa(u, n)
          : !0
    );
  }
  function Xo(t, e, l, a) {
    ((t = e.state),
      typeof e.componentWillReceiveProps == "function" &&
        e.componentWillReceiveProps(l, a),
      typeof e.UNSAFE_componentWillReceiveProps == "function" &&
        e.UNSAFE_componentWillReceiveProps(l, a),
      e.state !== t && Sf.enqueueReplaceState(e, e.state, null));
  }
  function ql(t, e) {
    var l = e;
    if ("ref" in e) {
      l = {};
      for (var a in e) a !== "ref" && (l[a] = e[a]);
    }
    if ((t = t.defaultProps)) {
      l === e && (l = z({}, l));
      for (var u in t) l[u] === void 0 && (l[u] = t[u]);
    }
    return l;
  }
  var pn =
    typeof reportError == "function"
      ? reportError
      : function (t) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var e = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof t == "object" &&
                t !== null &&
                typeof t.message == "string"
                  ? String(t.message)
                  : String(t),
              error: t,
            });
            if (!window.dispatchEvent(e)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", t);
            return;
          }
          console.error(t);
        };
  function jo(t) {
    pn(t);
  }
  function Qo(t) {
    console.error(t);
  }
  function Zo(t) {
    pn(t);
  }
  function bn(t, e) {
    try {
      var l = t.onUncaughtError;
      l(e.value, { componentStack: e.stack });
    } catch (a) {
      setTimeout(function () {
        throw a;
      });
    }
  }
  function wo(t, e, l) {
    try {
      var a = t.onCaughtError;
      a(l.value, {
        componentStack: l.stack,
        errorBoundary: e.tag === 1 ? e.stateNode : null,
      });
    } catch (u) {
      setTimeout(function () {
        throw u;
      });
    }
  }
  function pf(t, e, l) {
    return (
      (l = el(l)),
      (l.tag = 3),
      (l.payload = { element: null }),
      (l.callback = function () {
        bn(t, e);
      }),
      l
    );
  }
  function Vo(t) {
    return ((t = el(t)), (t.tag = 3), t);
  }
  function Ko(t, e, l, a) {
    var u = l.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var n = a.value;
      ((t.payload = function () {
        return u(n);
      }),
        (t.callback = function () {
          wo(e, l, a);
        }));
    }
    var i = l.stateNode;
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (t.callback = function () {
        (wo(e, l, a),
          typeof u != "function" &&
            (sl === null ? (sl = new Set([this])) : sl.add(this)));
        var c = a.stack;
        this.componentDidCatch(a.value, {
          componentStack: c !== null ? c : "",
        });
      });
  }
  function _h(t, e, l, a, u) {
    if (
      ((l.flags |= 32768),
      a !== null && typeof a == "object" && typeof a.then == "function")
    ) {
      if (
        ((e = l.alternate),
        e !== null && Va(e, l, u, !0),
        (l = ge.current),
        l !== null)
      ) {
        switch (l.tag) {
          case 13:
            return (
              ze === null ? Zf() : l.alternate === null && zt === 0 && (zt = 3),
              (l.flags &= -257),
              (l.flags |= 65536),
              (l.lanes = u),
              a === Ji
                ? (l.flags |= 16384)
                : ((e = l.updateQueue),
                  e === null ? (l.updateQueue = new Set([a])) : e.add(a),
                  Vf(t, a, u)),
              !1
            );
          case 22:
            return (
              (l.flags |= 65536),
              a === Ji
                ? (l.flags |= 16384)
                : ((e = l.updateQueue),
                  e === null
                    ? ((e = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([a]),
                      }),
                      (l.updateQueue = e))
                    : ((l = e.retryQueue),
                      l === null ? (e.retryQueue = new Set([a])) : l.add(a)),
                  Vf(t, a, u)),
              !1
            );
        }
        throw Error(r(435, l.tag));
      }
      return (Vf(t, a, u), Zf(), !1);
    }
    if (rt)
      return (
        (e = ge.current),
        e !== null
          ? ((e.flags & 65536) === 0 && (e.flags |= 256),
            (e.flags |= 65536),
            (e.lanes = u),
            a !== Xi && ((t = Error(r(422), { cause: a })), wa(he(t, l))))
          : (a !== Xi && ((e = Error(r(423), { cause: a })), wa(he(e, l))),
            (t = t.current.alternate),
            (t.flags |= 65536),
            (u &= -u),
            (t.lanes |= u),
            (a = he(a, l)),
            (u = pf(t.stateNode, a, u)),
            Wi(t, u),
            zt !== 4 && (zt = 2)),
        !1
      );
    var n = Error(r(520), { cause: a });
    if (
      ((n = he(n, l)),
      su === null ? (su = [n]) : su.push(n),
      zt !== 4 && (zt = 2),
      e === null)
    )
      return !0;
    ((a = he(a, l)), (l = e));
    do {
      switch (l.tag) {
        case 3:
          return (
            (l.flags |= 65536),
            (t = u & -u),
            (l.lanes |= t),
            (t = pf(l.stateNode, a, t)),
            Wi(l, t),
            !1
          );
        case 1:
          if (
            ((e = l.type),
            (n = l.stateNode),
            (l.flags & 128) === 0 &&
              (typeof e.getDerivedStateFromError == "function" ||
                (n !== null &&
                  typeof n.componentDidCatch == "function" &&
                  (sl === null || !sl.has(n)))))
          )
            return (
              (l.flags |= 65536),
              (u &= -u),
              (l.lanes |= u),
              (u = Vo(u)),
              Ko(u, t, l, a),
              Wi(l, u),
              !1
            );
      }
      l = l.return;
    } while (l !== null);
    return !1;
  }
  var Jo = Error(r(461)),
    Bt = !1;
  function Gt(t, e, l, a) {
    e.child = t === null ? Yo(e, null, l, a) : da(e, t.child, l, a);
  }
  function $o(t, e, l, a, u) {
    l = l.render;
    var n = e.ref;
    if ("ref" in a) {
      var i = {};
      for (var c in a) c !== "ref" && (i[c] = a[c]);
    } else i = a;
    return (
      Hl(e),
      (a = ef(t, e, l, i, n, u)),
      (c = lf()),
      t !== null && !Bt
        ? (af(t, e, u), Xe(t, e, u))
        : (rt && c && Gi(e), (e.flags |= 1), Gt(t, e, a, u), e.child)
    );
  }
  function ko(t, e, l, a, u) {
    if (t === null) {
      var n = l.type;
      return typeof n == "function" &&
        !Bi(n) &&
        n.defaultProps === void 0 &&
        l.compare === null
        ? ((e.tag = 15), (e.type = n), Wo(t, e, n, a, u))
        : ((t = Pu(l.type, null, a, e, e.mode, u)),
          (t.ref = e.ref),
          (t.return = e),
          (e.child = t));
    }
    if (((n = t.child), !Mf(t, u))) {
      var i = n.memoizedProps;
      if (
        ((l = l.compare), (l = l !== null ? l : Xa), l(i, a) && t.ref === e.ref)
      )
        return Xe(t, e, u);
    }
    return (
      (e.flags |= 1),
      (t = He(n, a)),
      (t.ref = e.ref),
      (t.return = e),
      (e.child = t)
    );
  }
  function Wo(t, e, l, a, u) {
    if (t !== null) {
      var n = t.memoizedProps;
      if (Xa(n, a) && t.ref === e.ref)
        if (((Bt = !1), (e.pendingProps = a = n), Mf(t, u)))
          (t.flags & 131072) !== 0 && (Bt = !0);
        else return ((e.lanes = t.lanes), Xe(t, e, u));
    }
    return bf(t, e, l, a, u);
  }
  function Fo(t, e, l) {
    var a = e.pendingProps,
      u = a.children,
      n = t !== null ? t.memoizedState : null;
    if (a.mode === "hidden") {
      if ((e.flags & 128) !== 0) {
        if (((a = n !== null ? n.baseLanes | l : l), t !== null)) {
          for (u = e.child = t.child, n = 0; u !== null; )
            ((n = n | u.lanes | u.childLanes), (u = u.sibling));
          e.childLanes = n & ~a;
        } else ((e.childLanes = 0), (e.child = null));
        return Po(t, e, a, l);
      }
      if ((l & 536870912) !== 0)
        ((e.memoizedState = { baseLanes: 0, cachePool: null }),
          t !== null && an(e, n !== null ? n.cachePool : null),
          n !== null ? kr(e, n) : Pi(),
          Go(e));
      else
        return (
          (e.lanes = e.childLanes = 536870912),
          Po(t, e, n !== null ? n.baseLanes | l : l, l)
        );
    } else
      n !== null
        ? (an(e, n.cachePool), kr(e, n), nl(), (e.memoizedState = null))
        : (t !== null && an(e, null), Pi(), nl());
    return (Gt(t, e, u, l), e.child);
  }
  function Po(t, e, l, a) {
    var u = Ki();
    return (
      (u = u === null ? null : { parent: Nt._currentValue, pool: u }),
      (e.memoizedState = { baseLanes: l, cachePool: u }),
      t !== null && an(e, null),
      Pi(),
      Go(e),
      t !== null && Va(t, e, a, !0),
      null
    );
  }
  function En(t, e) {
    var l = e.ref;
    if (l === null) t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof l != "function" && typeof l != "object") throw Error(r(284));
      (t === null || t.ref !== l) && (e.flags |= 4194816);
    }
  }
  function bf(t, e, l, a, u) {
    return (
      Hl(e),
      (l = ef(t, e, l, a, void 0, u)),
      (a = lf()),
      t !== null && !Bt
        ? (af(t, e, u), Xe(t, e, u))
        : (rt && a && Gi(e), (e.flags |= 1), Gt(t, e, l, u), e.child)
    );
  }
  function Io(t, e, l, a, u, n) {
    return (
      Hl(e),
      (e.updateQueue = null),
      (l = Fr(e, a, l, u)),
      Wr(t),
      (a = lf()),
      t !== null && !Bt
        ? (af(t, e, n), Xe(t, e, n))
        : (rt && a && Gi(e), (e.flags |= 1), Gt(t, e, l, n), e.child)
    );
  }
  function ts(t, e, l, a, u) {
    if ((Hl(e), e.stateNode === null)) {
      var n = la,
        i = l.contextType;
      (typeof i == "object" && i !== null && (n = wt(i)),
        (n = new l(a, n)),
        (e.memoizedState =
          n.state !== null && n.state !== void 0 ? n.state : null),
        (n.updater = Sf),
        (e.stateNode = n),
        (n._reactInternals = e),
        (n = e.stateNode),
        (n.props = a),
        (n.state = e.memoizedState),
        (n.refs = {}),
        $i(e),
        (i = l.contextType),
        (n.context = typeof i == "object" && i !== null ? wt(i) : la),
        (n.state = e.memoizedState),
        (i = l.getDerivedStateFromProps),
        typeof i == "function" && (gf(e, l, i, a), (n.state = e.memoizedState)),
        typeof l.getDerivedStateFromProps == "function" ||
          typeof n.getSnapshotBeforeUpdate == "function" ||
          (typeof n.UNSAFE_componentWillMount != "function" &&
            typeof n.componentWillMount != "function") ||
          ((i = n.state),
          typeof n.componentWillMount == "function" && n.componentWillMount(),
          typeof n.UNSAFE_componentWillMount == "function" &&
            n.UNSAFE_componentWillMount(),
          i !== n.state && Sf.enqueueReplaceState(n, n.state, null),
          Pa(e, a, n, u),
          Fa(),
          (n.state = e.memoizedState)),
        typeof n.componentDidMount == "function" && (e.flags |= 4194308),
        (a = !0));
    } else if (t === null) {
      n = e.stateNode;
      var c = e.memoizedProps,
        d = ql(l, c);
      n.props = d;
      var E = n.context,
        O = l.contextType;
      ((i = la), typeof O == "object" && O !== null && (i = wt(O)));
      var D = l.getDerivedStateFromProps;
      ((O =
        typeof D == "function" ||
        typeof n.getSnapshotBeforeUpdate == "function"),
        (c = e.pendingProps !== c),
        O ||
          (typeof n.UNSAFE_componentWillReceiveProps != "function" &&
            typeof n.componentWillReceiveProps != "function") ||
          ((c || E !== i) && Xo(e, n, a, i)),
        (tl = !1));
      var T = e.memoizedState;
      ((n.state = T),
        Pa(e, a, n, u),
        Fa(),
        (E = e.memoizedState),
        c || T !== E || tl
          ? (typeof D == "function" && (gf(e, l, D, a), (E = e.memoizedState)),
            (d = tl || Lo(e, l, d, a, T, E, i))
              ? (O ||
                  (typeof n.UNSAFE_componentWillMount != "function" &&
                    typeof n.componentWillMount != "function") ||
                  (typeof n.componentWillMount == "function" &&
                    n.componentWillMount(),
                  typeof n.UNSAFE_componentWillMount == "function" &&
                    n.UNSAFE_componentWillMount()),
                typeof n.componentDidMount == "function" &&
                  (e.flags |= 4194308))
              : (typeof n.componentDidMount == "function" &&
                  (e.flags |= 4194308),
                (e.memoizedProps = a),
                (e.memoizedState = E)),
            (n.props = a),
            (n.state = E),
            (n.context = i),
            (a = d))
          : (typeof n.componentDidMount == "function" && (e.flags |= 4194308),
            (a = !1)));
    } else {
      ((n = e.stateNode),
        ki(t, e),
        (i = e.memoizedProps),
        (O = ql(l, i)),
        (n.props = O),
        (D = e.pendingProps),
        (T = n.context),
        (E = l.contextType),
        (d = la),
        typeof E == "object" && E !== null && (d = wt(E)),
        (c = l.getDerivedStateFromProps),
        (E =
          typeof c == "function" ||
          typeof n.getSnapshotBeforeUpdate == "function") ||
          (typeof n.UNSAFE_componentWillReceiveProps != "function" &&
            typeof n.componentWillReceiveProps != "function") ||
          ((i !== D || T !== d) && Xo(e, n, a, d)),
        (tl = !1),
        (T = e.memoizedState),
        (n.state = T),
        Pa(e, a, n, u),
        Fa());
      var A = e.memoizedState;
      i !== D ||
      T !== A ||
      tl ||
      (t !== null && t.dependencies !== null && en(t.dependencies))
        ? (typeof c == "function" && (gf(e, l, c, a), (A = e.memoizedState)),
          (O =
            tl ||
            Lo(e, l, O, a, T, A, d) ||
            (t !== null && t.dependencies !== null && en(t.dependencies)))
            ? (E ||
                (typeof n.UNSAFE_componentWillUpdate != "function" &&
                  typeof n.componentWillUpdate != "function") ||
                (typeof n.componentWillUpdate == "function" &&
                  n.componentWillUpdate(a, A, d),
                typeof n.UNSAFE_componentWillUpdate == "function" &&
                  n.UNSAFE_componentWillUpdate(a, A, d)),
              typeof n.componentDidUpdate == "function" && (e.flags |= 4),
              typeof n.getSnapshotBeforeUpdate == "function" &&
                (e.flags |= 1024))
            : (typeof n.componentDidUpdate != "function" ||
                (i === t.memoizedProps && T === t.memoizedState) ||
                (e.flags |= 4),
              typeof n.getSnapshotBeforeUpdate != "function" ||
                (i === t.memoizedProps && T === t.memoizedState) ||
                (e.flags |= 1024),
              (e.memoizedProps = a),
              (e.memoizedState = A)),
          (n.props = a),
          (n.state = A),
          (n.context = d),
          (a = O))
        : (typeof n.componentDidUpdate != "function" ||
            (i === t.memoizedProps && T === t.memoizedState) ||
            (e.flags |= 4),
          typeof n.getSnapshotBeforeUpdate != "function" ||
            (i === t.memoizedProps && T === t.memoizedState) ||
            (e.flags |= 1024),
          (a = !1));
    }
    return (
      (n = a),
      En(t, e),
      (a = (e.flags & 128) !== 0),
      n || a
        ? ((n = e.stateNode),
          (l =
            a && typeof l.getDerivedStateFromError != "function"
              ? null
              : n.render()),
          (e.flags |= 1),
          t !== null && a
            ? ((e.child = da(e, t.child, null, u)),
              (e.child = da(e, null, l, u)))
            : Gt(t, e, l, u),
          (e.memoizedState = n.state),
          (t = e.child))
        : (t = Xe(t, e, u)),
      t
    );
  }
  function es(t, e, l, a) {
    return (Za(), (e.flags |= 256), Gt(t, e, l, a), e.child);
  }
  var Ef = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function Tf(t) {
    return { baseLanes: t, cachePool: jr() };
  }
  function Af(t, e, l) {
    return ((t = t !== null ? t.childLanes & ~l : 0), e && (t |= Se), t);
  }
  function ls(t, e, l) {
    var a = e.pendingProps,
      u = !1,
      n = (e.flags & 128) !== 0,
      i;
    if (
      ((i = n) ||
        (i =
          t !== null && t.memoizedState === null ? !1 : (Ht.current & 2) !== 0),
      i && ((u = !0), (e.flags &= -129)),
      (i = (e.flags & 32) !== 0),
      (e.flags &= -33),
      t === null)
    ) {
      if (rt) {
        if ((u ? ul(e) : nl(), rt)) {
          var c = Rt,
            d;
          if ((d = c)) {
            t: {
              for (d = c, c = Re; d.nodeType !== 8; ) {
                if (!c) {
                  c = null;
                  break t;
                }
                if (((d = Te(d.nextSibling)), d === null)) {
                  c = null;
                  break t;
                }
              }
              c = d;
            }
            c !== null
              ? ((e.memoizedState = {
                  dehydrated: c,
                  treeContext: _l !== null ? { id: Ce, overflow: Be } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (d = ue(18, null, null, 0)),
                (d.stateNode = c),
                (d.return = e),
                (e.child = d),
                ($t = e),
                (Rt = null),
                (d = !0))
              : (d = !1);
          }
          d || xl(e);
        }
        if (
          ((c = e.memoizedState),
          c !== null && ((c = c.dehydrated), c !== null))
        )
          return (ic(c) ? (e.lanes = 32) : (e.lanes = 536870912), null);
        Le(e);
      }
      return (
        (c = a.children),
        (a = a.fallback),
        u
          ? (nl(),
            (u = e.mode),
            (c = Tn({ mode: "hidden", children: c }, u)),
            (a = Ml(a, u, l, null)),
            (c.return = e),
            (a.return = e),
            (c.sibling = a),
            (e.child = c),
            (u = e.child),
            (u.memoizedState = Tf(l)),
            (u.childLanes = Af(t, i, l)),
            (e.memoizedState = Ef),
            a)
          : (ul(e), Rf(e, c))
      );
    }
    if (
      ((d = t.memoizedState), d !== null && ((c = d.dehydrated), c !== null))
    ) {
      if (n)
        e.flags & 256
          ? (ul(e), (e.flags &= -257), (e = zf(t, e, l)))
          : e.memoizedState !== null
            ? (nl(), (e.child = t.child), (e.flags |= 128), (e = null))
            : (nl(),
              (u = a.fallback),
              (c = e.mode),
              (a = Tn({ mode: "visible", children: a.children }, c)),
              (u = Ml(u, c, l, null)),
              (u.flags |= 2),
              (a.return = e),
              (u.return = e),
              (a.sibling = u),
              (e.child = a),
              da(e, t.child, null, l),
              (a = e.child),
              (a.memoizedState = Tf(l)),
              (a.childLanes = Af(t, i, l)),
              (e.memoizedState = Ef),
              (e = u));
      else if ((ul(e), ic(c))) {
        if (((i = c.nextSibling && c.nextSibling.dataset), i)) var E = i.dgst;
        ((i = E),
          (a = Error(r(419))),
          (a.stack = ""),
          (a.digest = i),
          wa({ value: a, source: null, stack: null }),
          (e = zf(t, e, l)));
      } else if (
        (Bt || Va(t, e, l, !1), (i = (l & t.childLanes) !== 0), Bt || i)
      ) {
        if (
          ((i = gt),
          i !== null &&
            ((a = l & -l),
            (a = (a & 42) !== 0 ? 1 : ii(a)),
            (a = (a & (i.suspendedLanes | l)) !== 0 ? 0 : a),
            a !== 0 && a !== d.retryLane))
        )
          throw ((d.retryLane = a), ea(t, a), re(i, t, a), Jo);
        (c.data === "$?" || Zf(), (e = zf(t, e, l)));
      } else
        c.data === "$?"
          ? ((e.flags |= 192), (e.child = t.child), (e = null))
          : ((t = d.treeContext),
            (Rt = Te(c.nextSibling)),
            ($t = e),
            (rt = !0),
            (Ul = null),
            (Re = !1),
            t !== null &&
              ((ve[ye++] = Ce),
              (ve[ye++] = Be),
              (ve[ye++] = _l),
              (Ce = t.id),
              (Be = t.overflow),
              (_l = e)),
            (e = Rf(e, a.children)),
            (e.flags |= 4096));
      return e;
    }
    return u
      ? (nl(),
        (u = a.fallback),
        (c = e.mode),
        (d = t.child),
        (E = d.sibling),
        (a = He(d, { mode: "hidden", children: a.children })),
        (a.subtreeFlags = d.subtreeFlags & 65011712),
        E !== null ? (u = He(E, u)) : ((u = Ml(u, c, l, null)), (u.flags |= 2)),
        (u.return = e),
        (a.return = e),
        (a.sibling = u),
        (e.child = a),
        (a = u),
        (u = e.child),
        (c = t.child.memoizedState),
        c === null
          ? (c = Tf(l))
          : ((d = c.cachePool),
            d !== null
              ? ((E = Nt._currentValue),
                (d = d.parent !== E ? { parent: E, pool: E } : d))
              : (d = jr()),
            (c = { baseLanes: c.baseLanes | l, cachePool: d })),
        (u.memoizedState = c),
        (u.childLanes = Af(t, i, l)),
        (e.memoizedState = Ef),
        a)
      : (ul(e),
        (l = t.child),
        (t = l.sibling),
        (l = He(l, { mode: "visible", children: a.children })),
        (l.return = e),
        (l.sibling = null),
        t !== null &&
          ((i = e.deletions),
          i === null ? ((e.deletions = [t]), (e.flags |= 16)) : i.push(t)),
        (e.child = l),
        (e.memoizedState = null),
        l);
  }
  function Rf(t, e) {
    return (
      (e = Tn({ mode: "visible", children: e }, t.mode)),
      (e.return = t),
      (t.child = e)
    );
  }
  function Tn(t, e) {
    return (
      (t = ue(22, t, null, e)),
      (t.lanes = 0),
      (t.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null,
      }),
      t
    );
  }
  function zf(t, e, l) {
    return (
      da(e, t.child, null, l),
      (t = Rf(e, e.pendingProps.children)),
      (t.flags |= 2),
      (e.memoizedState = null),
      t
    );
  }
  function as(t, e, l) {
    t.lanes |= e;
    var a = t.alternate;
    (a !== null && (a.lanes |= e), Qi(t.return, e, l));
  }
  function Of(t, e, l, a, u) {
    var n = t.memoizedState;
    n === null
      ? (t.memoizedState = {
          isBackwards: e,
          rendering: null,
          renderingStartTime: 0,
          last: a,
          tail: l,
          tailMode: u,
        })
      : ((n.isBackwards = e),
        (n.rendering = null),
        (n.renderingStartTime = 0),
        (n.last = a),
        (n.tail = l),
        (n.tailMode = u));
  }
  function us(t, e, l) {
    var a = e.pendingProps,
      u = a.revealOrder,
      n = a.tail;
    if ((Gt(t, e, a.children, l), (a = Ht.current), (a & 2) !== 0))
      ((a = (a & 1) | 2), (e.flags |= 128));
    else {
      if (t !== null && (t.flags & 128) !== 0)
        t: for (t = e.child; t !== null; ) {
          if (t.tag === 13) t.memoizedState !== null && as(t, l, e);
          else if (t.tag === 19) as(t, l, e);
          else if (t.child !== null) {
            ((t.child.return = t), (t = t.child));
            continue;
          }
          if (t === e) break t;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) break t;
            t = t.return;
          }
          ((t.sibling.return = t.return), (t = t.sibling));
        }
      a &= 1;
    }
    switch ((Y(Ht, a), u)) {
      case "forwards":
        for (l = e.child, u = null; l !== null; )
          ((t = l.alternate),
            t !== null && Sn(t) === null && (u = l),
            (l = l.sibling));
        ((l = u),
          l === null
            ? ((u = e.child), (e.child = null))
            : ((u = l.sibling), (l.sibling = null)),
          Of(e, !1, u, l, n));
        break;
      case "backwards":
        for (l = null, u = e.child, e.child = null; u !== null; ) {
          if (((t = u.alternate), t !== null && Sn(t) === null)) {
            e.child = u;
            break;
          }
          ((t = u.sibling), (u.sibling = l), (l = u), (u = t));
        }
        Of(e, !0, l, null, n);
        break;
      case "together":
        Of(e, !1, null, null, void 0);
        break;
      default:
        e.memoizedState = null;
    }
    return e.child;
  }
  function Xe(t, e, l) {
    if (
      (t !== null && (e.dependencies = t.dependencies),
      (ol |= e.lanes),
      (l & e.childLanes) === 0)
    )
      if (t !== null) {
        if ((Va(t, e, l, !1), (l & e.childLanes) === 0)) return null;
      } else return null;
    if (t !== null && e.child !== t.child) throw Error(r(153));
    if (e.child !== null) {
      for (
        t = e.child, l = He(t, t.pendingProps), e.child = l, l.return = e;
        t.sibling !== null;
      )
        ((t = t.sibling),
          (l = l.sibling = He(t, t.pendingProps)),
          (l.return = e));
      l.sibling = null;
    }
    return e.child;
  }
  function Mf(t, e) {
    return (t.lanes & e) !== 0
      ? !0
      : ((t = t.dependencies), !!(t !== null && en(t)));
  }
  function Dh(t, e, l) {
    switch (e.tag) {
      case 3:
        (pt(e, e.stateNode.containerInfo),
          Ie(e, Nt, t.memoizedState.cache),
          Za());
        break;
      case 27:
      case 5:
        ei(e);
        break;
      case 4:
        pt(e, e.stateNode.containerInfo);
        break;
      case 10:
        Ie(e, e.type, e.memoizedProps.value);
        break;
      case 13:
        var a = e.memoizedState;
        if (a !== null)
          return a.dehydrated !== null
            ? (ul(e), (e.flags |= 128), null)
            : (l & e.child.childLanes) !== 0
              ? ls(t, e, l)
              : (ul(e), (t = Xe(t, e, l)), t !== null ? t.sibling : null);
        ul(e);
        break;
      case 19:
        var u = (t.flags & 128) !== 0;
        if (
          ((a = (l & e.childLanes) !== 0),
          a || (Va(t, e, l, !1), (a = (l & e.childLanes) !== 0)),
          u)
        ) {
          if (a) return us(t, e, l);
          e.flags |= 128;
        }
        if (
          ((u = e.memoizedState),
          u !== null &&
            ((u.rendering = null), (u.tail = null), (u.lastEffect = null)),
          Y(Ht, Ht.current),
          a)
        )
          break;
        return null;
      case 22:
      case 23:
        return ((e.lanes = 0), Fo(t, e, l));
      case 24:
        Ie(e, Nt, t.memoizedState.cache);
    }
    return Xe(t, e, l);
  }
  function ns(t, e, l) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps) Bt = !0;
      else {
        if (!Mf(t, l) && (e.flags & 128) === 0) return ((Bt = !1), Dh(t, e, l));
        Bt = (t.flags & 131072) !== 0;
      }
    else ((Bt = !1), rt && (e.flags & 1048576) !== 0 && Cr(e, tn, e.index));
    switch (((e.lanes = 0), e.tag)) {
      case 16:
        t: {
          t = e.pendingProps;
          var a = e.elementType,
            u = a._init;
          if (((a = u(a._payload)), (e.type = a), typeof a == "function"))
            Bi(a)
              ? ((t = ql(a, t)), (e.tag = 1), (e = ts(null, e, a, t, l)))
              : ((e.tag = 0), (e = bf(null, e, a, t, l)));
          else {
            if (a != null) {
              if (((u = a.$$typeof), u === it)) {
                ((e.tag = 11), (e = $o(null, e, a, t, l)));
                break t;
              } else if (u === At) {
                ((e.tag = 14), (e = ko(null, e, a, t, l)));
                break t;
              }
            }
            throw ((e = El(a) || a), Error(r(306, e, "")));
          }
        }
        return e;
      case 0:
        return bf(t, e, e.type, e.pendingProps, l);
      case 1:
        return ((a = e.type), (u = ql(a, e.pendingProps)), ts(t, e, a, u, l));
      case 3:
        t: {
          if ((pt(e, e.stateNode.containerInfo), t === null))
            throw Error(r(387));
          a = e.pendingProps;
          var n = e.memoizedState;
          ((u = n.element), ki(t, e), Pa(e, a, null, l));
          var i = e.memoizedState;
          if (
            ((a = i.cache),
            Ie(e, Nt, a),
            a !== n.cache && Zi(e, [Nt], l, !0),
            Fa(),
            (a = i.element),
            n.isDehydrated)
          )
            if (
              ((n = { element: a, isDehydrated: !1, cache: i.cache }),
              (e.updateQueue.baseState = n),
              (e.memoizedState = n),
              e.flags & 256)
            ) {
              e = es(t, e, a, l);
              break t;
            } else if (a !== u) {
              ((u = he(Error(r(424)), e)), wa(u), (e = es(t, e, a, l)));
              break t;
            } else {
              switch (((t = e.stateNode.containerInfo), t.nodeType)) {
                case 9:
                  t = t.body;
                  break;
                default:
                  t = t.nodeName === "HTML" ? t.ownerDocument.body : t;
              }
              for (
                Rt = Te(t.firstChild),
                  $t = e,
                  rt = !0,
                  Ul = null,
                  Re = !0,
                  l = Yo(e, null, a, l),
                  e.child = l;
                l;
              )
                ((l.flags = (l.flags & -3) | 4096), (l = l.sibling));
            }
          else {
            if ((Za(), a === u)) {
              e = Xe(t, e, l);
              break t;
            }
            Gt(t, e, a, l);
          }
          e = e.child;
        }
        return e;
      case 26:
        return (
          En(t, e),
          t === null
            ? (l = r0(e.type, null, e.pendingProps, null))
              ? (e.memoizedState = l)
              : rt ||
                ((l = e.type),
                (t = e.pendingProps),
                (a = qn(I.current).createElement(l)),
                (a[Zt] = e),
                (a[kt] = t),
                Xt(a, l, t),
                Ct(a),
                (e.stateNode = a))
            : (e.memoizedState = r0(
                e.type,
                t.memoizedProps,
                e.pendingProps,
                t.memoizedState
              )),
          null
        );
      case 27:
        return (
          ei(e),
          t === null &&
            rt &&
            ((a = e.stateNode = i0(e.type, e.pendingProps, I.current)),
            ($t = e),
            (Re = !0),
            (u = Rt),
            ml(e.type) ? ((fc = u), (Rt = Te(a.firstChild))) : (Rt = u)),
          Gt(t, e, e.pendingProps.children, l),
          En(t, e),
          t === null && (e.flags |= 4194304),
          e.child
        );
      case 5:
        return (
          t === null &&
            rt &&
            ((u = a = Rt) &&
              ((a = am(a, e.type, e.pendingProps, Re)),
              a !== null
                ? ((e.stateNode = a),
                  ($t = e),
                  (Rt = Te(a.firstChild)),
                  (Re = !1),
                  (u = !0))
                : (u = !1)),
            u || xl(e)),
          ei(e),
          (u = e.type),
          (n = e.pendingProps),
          (i = t !== null ? t.memoizedProps : null),
          (a = n.children),
          ac(u, n) ? (a = null) : i !== null && ac(u, i) && (e.flags |= 32),
          e.memoizedState !== null &&
            ((u = ef(t, e, Eh, null, null, l)), (bu._currentValue = u)),
          En(t, e),
          Gt(t, e, a, l),
          e.child
        );
      case 6:
        return (
          t === null &&
            rt &&
            ((t = l = Rt) &&
              ((l = um(l, e.pendingProps, Re)),
              l !== null
                ? ((e.stateNode = l), ($t = e), (Rt = null), (t = !0))
                : (t = !1)),
            t || xl(e)),
          null
        );
      case 13:
        return ls(t, e, l);
      case 4:
        return (
          pt(e, e.stateNode.containerInfo),
          (a = e.pendingProps),
          t === null ? (e.child = da(e, null, a, l)) : Gt(t, e, a, l),
          e.child
        );
      case 11:
        return $o(t, e, e.type, e.pendingProps, l);
      case 7:
        return (Gt(t, e, e.pendingProps, l), e.child);
      case 8:
        return (Gt(t, e, e.pendingProps.children, l), e.child);
      case 12:
        return (Gt(t, e, e.pendingProps.children, l), e.child);
      case 10:
        return (
          (a = e.pendingProps),
          Ie(e, e.type, a.value),
          Gt(t, e, a.children, l),
          e.child
        );
      case 9:
        return (
          (u = e.type._context),
          (a = e.pendingProps.children),
          Hl(e),
          (u = wt(u)),
          (a = a(u)),
          (e.flags |= 1),
          Gt(t, e, a, l),
          e.child
        );
      case 14:
        return ko(t, e, e.type, e.pendingProps, l);
      case 15:
        return Wo(t, e, e.type, e.pendingProps, l);
      case 19:
        return us(t, e, l);
      case 31:
        return (
          (a = e.pendingProps),
          (l = e.mode),
          (a = { mode: a.mode, children: a.children }),
          t === null
            ? ((l = Tn(a, l)),
              (l.ref = e.ref),
              (e.child = l),
              (l.return = e),
              (e = l))
            : ((l = He(t.child, a)),
              (l.ref = e.ref),
              (e.child = l),
              (l.return = e),
              (e = l)),
          e
        );
      case 22:
        return Fo(t, e, l);
      case 24:
        return (
          Hl(e),
          (a = wt(Nt)),
          t === null
            ? ((u = Ki()),
              u === null &&
                ((u = gt),
                (n = wi()),
                (u.pooledCache = n),
                n.refCount++,
                n !== null && (u.pooledCacheLanes |= l),
                (u = n)),
              (e.memoizedState = { parent: a, cache: u }),
              $i(e),
              Ie(e, Nt, u))
            : ((t.lanes & l) !== 0 && (ki(t, e), Pa(e, null, null, l), Fa()),
              (u = t.memoizedState),
              (n = e.memoizedState),
              u.parent !== a
                ? ((u = { parent: a, cache: a }),
                  (e.memoizedState = u),
                  e.lanes === 0 &&
                    (e.memoizedState = e.updateQueue.baseState = u),
                  Ie(e, Nt, a))
                : ((a = n.cache),
                  Ie(e, Nt, a),
                  a !== u.cache && Zi(e, [Nt], l, !0))),
          Gt(t, e, e.pendingProps.children, l),
          e.child
        );
      case 29:
        throw e.pendingProps;
    }
    throw Error(r(156, e.tag));
  }
  function je(t) {
    t.flags |= 4;
  }
  function is(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (((t.flags |= 16777216), !m0(e))) {
      if (
        ((e = ge.current),
        e !== null &&
          ((nt & 4194048) === nt
            ? ze !== null
            : ((nt & 62914560) !== nt && (nt & 536870912) === 0) || e !== ze))
      )
        throw ((ka = Ji), Qr);
      t.flags |= 8192;
    }
  }
  function An(t, e) {
    (e !== null && (t.flags |= 4),
      t.flags & 16384 &&
        ((e = t.tag !== 22 ? Yc() : 536870912), (t.lanes |= e), (ya |= e)));
  }
  function nu(t, e) {
    if (!rt)
      switch (t.tailMode) {
        case "hidden":
          e = t.tail;
          for (var l = null; e !== null; )
            (e.alternate !== null && (l = e), (e = e.sibling));
          l === null ? (t.tail = null) : (l.sibling = null);
          break;
        case "collapsed":
          l = t.tail;
          for (var a = null; l !== null; )
            (l.alternate !== null && (a = l), (l = l.sibling));
          a === null
            ? e || t.tail === null
              ? (t.tail = null)
              : (t.tail.sibling = null)
            : (a.sibling = null);
      }
  }
  function Et(t) {
    var e = t.alternate !== null && t.alternate.child === t.child,
      l = 0,
      a = 0;
    if (e)
      for (var u = t.child; u !== null; )
        ((l |= u.lanes | u.childLanes),
          (a |= u.subtreeFlags & 65011712),
          (a |= u.flags & 65011712),
          (u.return = t),
          (u = u.sibling));
    else
      for (u = t.child; u !== null; )
        ((l |= u.lanes | u.childLanes),
          (a |= u.subtreeFlags),
          (a |= u.flags),
          (u.return = t),
          (u = u.sibling));
    return ((t.subtreeFlags |= a), (t.childLanes = l), e);
  }
  function Uh(t, e, l) {
    var a = e.pendingProps;
    switch ((Li(e), e.tag)) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (Et(e), null);
      case 1:
        return (Et(e), null);
      case 3:
        return (
          (l = e.stateNode),
          (a = null),
          t !== null && (a = t.memoizedState.cache),
          e.memoizedState.cache !== a && (e.flags |= 2048),
          Ye(Nt),
          ke(),
          l.pendingContext &&
            ((l.context = l.pendingContext), (l.pendingContext = null)),
          (t === null || t.child === null) &&
            (Qa(e)
              ? je(e)
              : t === null ||
                (t.memoizedState.isDehydrated && (e.flags & 256) === 0) ||
                ((e.flags |= 1024), Yr())),
          Et(e),
          null
        );
      case 26:
        return (
          (l = e.memoizedState),
          t === null
            ? (je(e),
              l !== null ? (Et(e), is(e, l)) : (Et(e), (e.flags &= -16777217)))
            : l
              ? l !== t.memoizedState
                ? (je(e), Et(e), is(e, l))
                : (Et(e), (e.flags &= -16777217))
              : (t.memoizedProps !== a && je(e), Et(e), (e.flags &= -16777217)),
          null
        );
      case 27:
        (Hu(e), (l = I.current));
        var u = e.type;
        if (t !== null && e.stateNode != null) t.memoizedProps !== a && je(e);
        else {
          if (!a) {
            if (e.stateNode === null) throw Error(r(166));
            return (Et(e), null);
          }
          ((t = K.current),
            Qa(e) ? Br(e) : ((t = i0(u, a, l)), (e.stateNode = t), je(e)));
        }
        return (Et(e), null);
      case 5:
        if ((Hu(e), (l = e.type), t !== null && e.stateNode != null))
          t.memoizedProps !== a && je(e);
        else {
          if (!a) {
            if (e.stateNode === null) throw Error(r(166));
            return (Et(e), null);
          }
          if (((t = K.current), Qa(e))) Br(e);
          else {
            switch (((u = qn(I.current)), t)) {
              case 1:
                t = u.createElementNS("http://www.w3.org/2000/svg", l);
                break;
              case 2:
                t = u.createElementNS("http://www.w3.org/1998/Math/MathML", l);
                break;
              default:
                switch (l) {
                  case "svg":
                    t = u.createElementNS("http://www.w3.org/2000/svg", l);
                    break;
                  case "math":
                    t = u.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      l
                    );
                    break;
                  case "script":
                    ((t = u.createElement("div")),
                      (t.innerHTML = "<script><\/script>"),
                      (t = t.removeChild(t.firstChild)));
                    break;
                  case "select":
                    ((t =
                      typeof a.is == "string"
                        ? u.createElement("select", { is: a.is })
                        : u.createElement("select")),
                      a.multiple
                        ? (t.multiple = !0)
                        : a.size && (t.size = a.size));
                    break;
                  default:
                    t =
                      typeof a.is == "string"
                        ? u.createElement(l, { is: a.is })
                        : u.createElement(l);
                }
            }
            ((t[Zt] = e), (t[kt] = a));
            t: for (u = e.child; u !== null; ) {
              if (u.tag === 5 || u.tag === 6) t.appendChild(u.stateNode);
              else if (u.tag !== 4 && u.tag !== 27 && u.child !== null) {
                ((u.child.return = u), (u = u.child));
                continue;
              }
              if (u === e) break t;
              for (; u.sibling === null; ) {
                if (u.return === null || u.return === e) break t;
                u = u.return;
              }
              ((u.sibling.return = u.return), (u = u.sibling));
            }
            e.stateNode = t;
            t: switch ((Xt(t, l, a), l)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                t = !!a.autoFocus;
                break t;
              case "img":
                t = !0;
                break t;
              default:
                t = !1;
            }
            t && je(e);
          }
        }
        return (Et(e), (e.flags &= -16777217), null);
      case 6:
        if (t && e.stateNode != null) t.memoizedProps !== a && je(e);
        else {
          if (typeof a != "string" && e.stateNode === null) throw Error(r(166));
          if (((t = I.current), Qa(e))) {
            if (
              ((t = e.stateNode),
              (l = e.memoizedProps),
              (a = null),
              (u = $t),
              u !== null)
            )
              switch (u.tag) {
                case 27:
                case 5:
                  a = u.memoizedProps;
              }
            ((t[Zt] = e),
              (t = !!(
                t.nodeValue === l ||
                (a !== null && a.suppressHydrationWarning === !0) ||
                Is(t.nodeValue, l)
              )),
              t || xl(e));
          } else
            ((t = qn(t).createTextNode(a)), (t[Zt] = e), (e.stateNode = t));
        }
        return (Et(e), null);
      case 13:
        if (
          ((a = e.memoizedState),
          t === null ||
            (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
        ) {
          if (((u = Qa(e)), a !== null && a.dehydrated !== null)) {
            if (t === null) {
              if (!u) throw Error(r(318));
              if (
                ((u = e.memoizedState),
                (u = u !== null ? u.dehydrated : null),
                !u)
              )
                throw Error(r(317));
              u[Zt] = e;
            } else
              (Za(),
                (e.flags & 128) === 0 && (e.memoizedState = null),
                (e.flags |= 4));
            (Et(e), (u = !1));
          } else
            ((u = Yr()),
              t !== null &&
                t.memoizedState !== null &&
                (t.memoizedState.hydrationErrors = u),
              (u = !0));
          if (!u) return e.flags & 256 ? (Le(e), e) : (Le(e), null);
        }
        if ((Le(e), (e.flags & 128) !== 0)) return ((e.lanes = l), e);
        if (
          ((l = a !== null), (t = t !== null && t.memoizedState !== null), l)
        ) {
          ((a = e.child),
            (u = null),
            a.alternate !== null &&
              a.alternate.memoizedState !== null &&
              a.alternate.memoizedState.cachePool !== null &&
              (u = a.alternate.memoizedState.cachePool.pool));
          var n = null;
          (a.memoizedState !== null &&
            a.memoizedState.cachePool !== null &&
            (n = a.memoizedState.cachePool.pool),
            n !== u && (a.flags |= 2048));
        }
        return (
          l !== t && l && (e.child.flags |= 8192),
          An(e, e.updateQueue),
          Et(e),
          null
        );
      case 4:
        return (ke(), t === null && Pf(e.stateNode.containerInfo), Et(e), null);
      case 10:
        return (Ye(e.type), Et(e), null);
      case 19:
        if ((L(Ht), (u = e.memoizedState), u === null)) return (Et(e), null);
        if (((a = (e.flags & 128) !== 0), (n = u.rendering), n === null))
          if (a) nu(u, !1);
          else {
            if (zt !== 0 || (t !== null && (t.flags & 128) !== 0))
              for (t = e.child; t !== null; ) {
                if (((n = Sn(t)), n !== null)) {
                  for (
                    e.flags |= 128,
                      nu(u, !1),
                      t = n.updateQueue,
                      e.updateQueue = t,
                      An(e, t),
                      e.subtreeFlags = 0,
                      t = l,
                      l = e.child;
                    l !== null;
                  )
                    (Hr(l, t), (l = l.sibling));
                  return (Y(Ht, (Ht.current & 1) | 2), e.child);
                }
                t = t.sibling;
              }
            u.tail !== null &&
              Ae() > On &&
              ((e.flags |= 128), (a = !0), nu(u, !1), (e.lanes = 4194304));
          }
        else {
          if (!a)
            if (((t = Sn(n)), t !== null)) {
              if (
                ((e.flags |= 128),
                (a = !0),
                (t = t.updateQueue),
                (e.updateQueue = t),
                An(e, t),
                nu(u, !0),
                u.tail === null &&
                  u.tailMode === "hidden" &&
                  !n.alternate &&
                  !rt)
              )
                return (Et(e), null);
            } else
              2 * Ae() - u.renderingStartTime > On &&
                l !== 536870912 &&
                ((e.flags |= 128), (a = !0), nu(u, !1), (e.lanes = 4194304));
          u.isBackwards
            ? ((n.sibling = e.child), (e.child = n))
            : ((t = u.last),
              t !== null ? (t.sibling = n) : (e.child = n),
              (u.last = n));
        }
        return u.tail !== null
          ? ((e = u.tail),
            (u.rendering = e),
            (u.tail = e.sibling),
            (u.renderingStartTime = Ae()),
            (e.sibling = null),
            (t = Ht.current),
            Y(Ht, a ? (t & 1) | 2 : t & 1),
            e)
          : (Et(e), null);
      case 22:
      case 23:
        return (
          Le(e),
          Ii(),
          (a = e.memoizedState !== null),
          t !== null
            ? (t.memoizedState !== null) !== a && (e.flags |= 8192)
            : a && (e.flags |= 8192),
          a
            ? (l & 536870912) !== 0 &&
              (e.flags & 128) === 0 &&
              (Et(e), e.subtreeFlags & 6 && (e.flags |= 8192))
            : Et(e),
          (l = e.updateQueue),
          l !== null && An(e, l.retryQueue),
          (l = null),
          t !== null &&
            t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (l = t.memoizedState.cachePool.pool),
          (a = null),
          e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (a = e.memoizedState.cachePool.pool),
          a !== l && (e.flags |= 2048),
          t !== null && L(Cl),
          null
        );
      case 24:
        return (
          (l = null),
          t !== null && (l = t.memoizedState.cache),
          e.memoizedState.cache !== l && (e.flags |= 2048),
          Ye(Nt),
          Et(e),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(r(156, e.tag));
  }
  function xh(t, e) {
    switch ((Li(e), e.tag)) {
      case 1:
        return (
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 3:
        return (
          Ye(Nt),
          ke(),
          (t = e.flags),
          (t & 65536) !== 0 && (t & 128) === 0
            ? ((e.flags = (t & -65537) | 128), e)
            : null
        );
      case 26:
      case 27:
      case 5:
        return (Hu(e), null);
      case 13:
        if (
          (Le(e), (t = e.memoizedState), t !== null && t.dehydrated !== null)
        ) {
          if (e.alternate === null) throw Error(r(340));
          Za();
        }
        return (
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 19:
        return (L(Ht), null);
      case 4:
        return (ke(), null);
      case 10:
        return (Ye(e.type), null);
      case 22:
      case 23:
        return (
          Le(e),
          Ii(),
          t !== null && L(Cl),
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 24:
        return (Ye(Nt), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function fs(t, e) {
    switch ((Li(e), e.tag)) {
      case 3:
        (Ye(Nt), ke());
        break;
      case 26:
      case 27:
      case 5:
        Hu(e);
        break;
      case 4:
        ke();
        break;
      case 13:
        Le(e);
        break;
      case 19:
        L(Ht);
        break;
      case 10:
        Ye(e.type);
        break;
      case 22:
      case 23:
        (Le(e), Ii(), t !== null && L(Cl));
        break;
      case 24:
        Ye(Nt);
    }
  }
  function iu(t, e) {
    try {
      var l = e.updateQueue,
        a = l !== null ? l.lastEffect : null;
      if (a !== null) {
        var u = a.next;
        l = u;
        do {
          if ((l.tag & t) === t) {
            a = void 0;
            var n = l.create,
              i = l.inst;
            ((a = n()), (i.destroy = a));
          }
          l = l.next;
        } while (l !== u);
      }
    } catch (c) {
      yt(e, e.return, c);
    }
  }
  function il(t, e, l) {
    try {
      var a = e.updateQueue,
        u = a !== null ? a.lastEffect : null;
      if (u !== null) {
        var n = u.next;
        a = n;
        do {
          if ((a.tag & t) === t) {
            var i = a.inst,
              c = i.destroy;
            if (c !== void 0) {
              ((i.destroy = void 0), (u = e));
              var d = l,
                E = c;
              try {
                E();
              } catch (O) {
                yt(u, d, O);
              }
            }
          }
          a = a.next;
        } while (a !== n);
      }
    } catch (O) {
      yt(e, e.return, O);
    }
  }
  function cs(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var l = t.stateNode;
      try {
        $r(e, l);
      } catch (a) {
        yt(t, t.return, a);
      }
    }
  }
  function rs(t, e, l) {
    ((l.props = ql(t.type, t.memoizedProps)), (l.state = t.memoizedState));
    try {
      l.componentWillUnmount();
    } catch (a) {
      yt(t, e, a);
    }
  }
  function fu(t, e) {
    try {
      var l = t.ref;
      if (l !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var a = t.stateNode;
            break;
          case 30:
            a = t.stateNode;
            break;
          default:
            a = t.stateNode;
        }
        typeof l == "function" ? (t.refCleanup = l(a)) : (l.current = a);
      }
    } catch (u) {
      yt(t, e, u);
    }
  }
  function Oe(t, e) {
    var l = t.ref,
      a = t.refCleanup;
    if (l !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (u) {
          yt(t, e, u);
        } finally {
          ((t.refCleanup = null),
            (t = t.alternate),
            t != null && (t.refCleanup = null));
        }
      else if (typeof l == "function")
        try {
          l(null);
        } catch (u) {
          yt(t, e, u);
        }
      else l.current = null;
  }
  function os(t) {
    var e = t.type,
      l = t.memoizedProps,
      a = t.stateNode;
    try {
      t: switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          l.autoFocus && a.focus();
          break t;
        case "img":
          l.src ? (a.src = l.src) : l.srcSet && (a.srcset = l.srcSet);
      }
    } catch (u) {
      yt(t, t.return, u);
    }
  }
  function _f(t, e, l) {
    try {
      var a = t.stateNode;
      (Ph(a, t.type, l, e), (a[kt] = e));
    } catch (u) {
      yt(t, t.return, u);
    }
  }
  function ss(t) {
    return (
      t.tag === 5 ||
      t.tag === 3 ||
      t.tag === 26 ||
      (t.tag === 27 && ml(t.type)) ||
      t.tag === 4
    );
  }
  function Df(t) {
    t: for (;;) {
      for (; t.sibling === null; ) {
        if (t.return === null || ss(t.return)) return null;
        t = t.return;
      }
      for (
        t.sibling.return = t.return, t = t.sibling;
        t.tag !== 5 && t.tag !== 6 && t.tag !== 18;
      ) {
        if (
          (t.tag === 27 && ml(t.type)) ||
          t.flags & 2 ||
          t.child === null ||
          t.tag === 4
        )
          continue t;
        ((t.child.return = t), (t = t.child));
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function Uf(t, e, l) {
    var a = t.tag;
    if (a === 5 || a === 6)
      ((t = t.stateNode),
        e
          ? (l.nodeType === 9
              ? l.body
              : l.nodeName === "HTML"
                ? l.ownerDocument.body
                : l
            ).insertBefore(t, e)
          : ((e =
              l.nodeType === 9
                ? l.body
                : l.nodeName === "HTML"
                  ? l.ownerDocument.body
                  : l),
            e.appendChild(t),
            (l = l._reactRootContainer),
            l != null || e.onclick !== null || (e.onclick = Bn)));
    else if (
      a !== 4 &&
      (a === 27 && ml(t.type) && ((l = t.stateNode), (e = null)),
      (t = t.child),
      t !== null)
    )
      for (Uf(t, e, l), t = t.sibling; t !== null; )
        (Uf(t, e, l), (t = t.sibling));
  }
  function Rn(t, e, l) {
    var a = t.tag;
    if (a === 5 || a === 6)
      ((t = t.stateNode), e ? l.insertBefore(t, e) : l.appendChild(t));
    else if (
      a !== 4 &&
      (a === 27 && ml(t.type) && (l = t.stateNode), (t = t.child), t !== null)
    )
      for (Rn(t, e, l), t = t.sibling; t !== null; )
        (Rn(t, e, l), (t = t.sibling));
  }
  function ds(t) {
    var e = t.stateNode,
      l = t.memoizedProps;
    try {
      for (var a = t.type, u = e.attributes; u.length; )
        e.removeAttributeNode(u[0]);
      (Xt(e, a, l), (e[Zt] = t), (e[kt] = l));
    } catch (n) {
      yt(t, t.return, n);
    }
  }
  var Qe = !1,
    _t = !1,
    xf = !1,
    hs = typeof WeakSet == "function" ? WeakSet : Set,
    qt = null;
  function Nh(t, e) {
    if (((t = t.containerInfo), (ec = Qn), (t = Ar(t)), _i(t))) {
      if ("selectionStart" in t)
        var l = { start: t.selectionStart, end: t.selectionEnd };
      else
        t: {
          l = ((l = t.ownerDocument) && l.defaultView) || window;
          var a = l.getSelection && l.getSelection();
          if (a && a.rangeCount !== 0) {
            l = a.anchorNode;
            var u = a.anchorOffset,
              n = a.focusNode;
            a = a.focusOffset;
            try {
              (l.nodeType, n.nodeType);
            } catch {
              l = null;
              break t;
            }
            var i = 0,
              c = -1,
              d = -1,
              E = 0,
              O = 0,
              D = t,
              T = null;
            e: for (;;) {
              for (
                var A;
                D !== l || (u !== 0 && D.nodeType !== 3) || (c = i + u),
                  D !== n || (a !== 0 && D.nodeType !== 3) || (d = i + a),
                  D.nodeType === 3 && (i += D.nodeValue.length),
                  (A = D.firstChild) !== null;
              )
                ((T = D), (D = A));
              for (;;) {
                if (D === t) break e;
                if (
                  (T === l && ++E === u && (c = i),
                  T === n && ++O === a && (d = i),
                  (A = D.nextSibling) !== null)
                )
                  break;
                ((D = T), (T = D.parentNode));
              }
              D = A;
            }
            l = c === -1 || d === -1 ? null : { start: c, end: d };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (
      lc = { focusedElem: t, selectionRange: l }, Qn = !1, qt = e;
      qt !== null;
    )
      if (
        ((e = qt), (t = e.child), (e.subtreeFlags & 1024) !== 0 && t !== null)
      )
        ((t.return = e), (qt = t));
      else
        for (; qt !== null; ) {
          switch (((e = qt), (n = e.alternate), (t = e.flags), e.tag)) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && n !== null) {
                ((t = void 0),
                  (l = e),
                  (u = n.memoizedProps),
                  (n = n.memoizedState),
                  (a = l.stateNode));
                try {
                  var W = ql(l.type, u, l.elementType === l.type);
                  ((t = a.getSnapshotBeforeUpdate(W, n)),
                    (a.__reactInternalSnapshotBeforeUpdate = t));
                } catch (J) {
                  yt(l, l.return, J);
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (
                  ((t = e.stateNode.containerInfo), (l = t.nodeType), l === 9)
                )
                  nc(t);
                else if (l === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      nc(t);
                      break;
                    default:
                      t.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((t & 1024) !== 0) throw Error(r(163));
          }
          if (((t = e.sibling), t !== null)) {
            ((t.return = e.return), (qt = t));
            break;
          }
          qt = e.return;
        }
  }
  function ms(t, e, l) {
    var a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        (fl(t, l), a & 4 && iu(5, l));
        break;
      case 1:
        if ((fl(t, l), a & 4))
          if (((t = l.stateNode), e === null))
            try {
              t.componentDidMount();
            } catch (i) {
              yt(l, l.return, i);
            }
          else {
            var u = ql(l.type, e.memoizedProps);
            e = e.memoizedState;
            try {
              t.componentDidUpdate(u, e, t.__reactInternalSnapshotBeforeUpdate);
            } catch (i) {
              yt(l, l.return, i);
            }
          }
        (a & 64 && cs(l), a & 512 && fu(l, l.return));
        break;
      case 3:
        if ((fl(t, l), a & 64 && ((t = l.updateQueue), t !== null))) {
          if (((e = null), l.child !== null))
            switch (l.child.tag) {
              case 27:
              case 5:
                e = l.child.stateNode;
                break;
              case 1:
                e = l.child.stateNode;
            }
          try {
            $r(t, e);
          } catch (i) {
            yt(l, l.return, i);
          }
        }
        break;
      case 27:
        e === null && a & 4 && ds(l);
      case 26:
      case 5:
        (fl(t, l), e === null && a & 4 && os(l), a & 512 && fu(l, l.return));
        break;
      case 12:
        fl(t, l);
        break;
      case 13:
        (fl(t, l),
          a & 4 && gs(t, l),
          a & 64 &&
            ((t = l.memoizedState),
            t !== null &&
              ((t = t.dehydrated),
              t !== null && ((l = jh.bind(null, l)), nm(t, l)))));
        break;
      case 22:
        if (((a = l.memoizedState !== null || Qe), !a)) {
          ((e = (e !== null && e.memoizedState !== null) || _t), (u = Qe));
          var n = _t;
          ((Qe = a),
            (_t = e) && !n ? cl(t, l, (l.subtreeFlags & 8772) !== 0) : fl(t, l),
            (Qe = u),
            (_t = n));
        }
        break;
      case 30:
        break;
      default:
        fl(t, l);
    }
  }
  function vs(t) {
    var e = t.alternate;
    (e !== null && ((t.alternate = null), vs(e)),
      (t.child = null),
      (t.deletions = null),
      (t.sibling = null),
      t.tag === 5 && ((e = t.stateNode), e !== null && ri(e)),
      (t.stateNode = null),
      (t.return = null),
      (t.dependencies = null),
      (t.memoizedProps = null),
      (t.memoizedState = null),
      (t.pendingProps = null),
      (t.stateNode = null),
      (t.updateQueue = null));
  }
  var bt = null,
    Pt = !1;
  function Ze(t, e, l) {
    for (l = l.child; l !== null; ) (ys(t, e, l), (l = l.sibling));
  }
  function ys(t, e, l) {
    if (ee && typeof ee.onCommitFiberUnmount == "function")
      try {
        ee.onCommitFiberUnmount(_a, l);
      } catch {}
    switch (l.tag) {
      case 26:
        (_t || Oe(l, e),
          Ze(t, e, l),
          l.memoizedState
            ? l.memoizedState.count--
            : l.stateNode && ((l = l.stateNode), l.parentNode.removeChild(l)));
        break;
      case 27:
        _t || Oe(l, e);
        var a = bt,
          u = Pt;
        (ml(l.type) && ((bt = l.stateNode), (Pt = !1)),
          Ze(t, e, l),
          yu(l.stateNode),
          (bt = a),
          (Pt = u));
        break;
      case 5:
        _t || Oe(l, e);
      case 6:
        if (
          ((a = bt),
          (u = Pt),
          (bt = null),
          Ze(t, e, l),
          (bt = a),
          (Pt = u),
          bt !== null)
        )
          if (Pt)
            try {
              (bt.nodeType === 9
                ? bt.body
                : bt.nodeName === "HTML"
                  ? bt.ownerDocument.body
                  : bt
              ).removeChild(l.stateNode);
            } catch (n) {
              yt(l, e, n);
            }
          else
            try {
              bt.removeChild(l.stateNode);
            } catch (n) {
              yt(l, e, n);
            }
        break;
      case 18:
        bt !== null &&
          (Pt
            ? ((t = bt),
              u0(
                t.nodeType === 9
                  ? t.body
                  : t.nodeName === "HTML"
                    ? t.ownerDocument.body
                    : t,
                l.stateNode
              ),
              Ru(t))
            : u0(bt, l.stateNode));
        break;
      case 4:
        ((a = bt),
          (u = Pt),
          (bt = l.stateNode.containerInfo),
          (Pt = !0),
          Ze(t, e, l),
          (bt = a),
          (Pt = u));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (_t || il(2, l, e), _t || il(4, l, e), Ze(t, e, l));
        break;
      case 1:
        (_t ||
          (Oe(l, e),
          (a = l.stateNode),
          typeof a.componentWillUnmount == "function" && rs(l, e, a)),
          Ze(t, e, l));
        break;
      case 21:
        Ze(t, e, l);
        break;
      case 22:
        ((_t = (a = _t) || l.memoizedState !== null), Ze(t, e, l), (_t = a));
        break;
      default:
        Ze(t, e, l);
    }
  }
  function gs(t, e) {
    if (
      e.memoizedState === null &&
      ((t = e.alternate),
      t !== null &&
        ((t = t.memoizedState), t !== null && ((t = t.dehydrated), t !== null)))
    )
      try {
        Ru(t);
      } catch (l) {
        yt(e, e.return, l);
      }
  }
  function Hh(t) {
    switch (t.tag) {
      case 13:
      case 19:
        var e = t.stateNode;
        return (e === null && (e = t.stateNode = new hs()), e);
      case 22:
        return (
          (t = t.stateNode),
          (e = t._retryCache),
          e === null && (e = t._retryCache = new hs()),
          e
        );
      default:
        throw Error(r(435, t.tag));
    }
  }
  function Nf(t, e) {
    var l = Hh(t);
    e.forEach(function (a) {
      var u = Qh.bind(null, t, a);
      l.has(a) || (l.add(a), a.then(u, u));
    });
  }
  function ne(t, e) {
    var l = e.deletions;
    if (l !== null)
      for (var a = 0; a < l.length; a++) {
        var u = l[a],
          n = t,
          i = e,
          c = i;
        t: for (; c !== null; ) {
          switch (c.tag) {
            case 27:
              if (ml(c.type)) {
                ((bt = c.stateNode), (Pt = !1));
                break t;
              }
              break;
            case 5:
              ((bt = c.stateNode), (Pt = !1));
              break t;
            case 3:
            case 4:
              ((bt = c.stateNode.containerInfo), (Pt = !0));
              break t;
          }
          c = c.return;
        }
        if (bt === null) throw Error(r(160));
        (ys(n, i, u),
          (bt = null),
          (Pt = !1),
          (n = u.alternate),
          n !== null && (n.return = null),
          (u.return = null));
      }
    if (e.subtreeFlags & 13878)
      for (e = e.child; e !== null; ) (Ss(e, t), (e = e.sibling));
  }
  var Ee = null;
  function Ss(t, e) {
    var l = t.alternate,
      a = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (ne(e, t),
          ie(t),
          a & 4 && (il(3, t, t.return), iu(3, t), il(5, t, t.return)));
        break;
      case 1:
        (ne(e, t),
          ie(t),
          a & 512 && (_t || l === null || Oe(l, l.return)),
          a & 64 &&
            Qe &&
            ((t = t.updateQueue),
            t !== null &&
              ((a = t.callbacks),
              a !== null &&
                ((l = t.shared.hiddenCallbacks),
                (t.shared.hiddenCallbacks = l === null ? a : l.concat(a))))));
        break;
      case 26:
        var u = Ee;
        if (
          (ne(e, t),
          ie(t),
          a & 512 && (_t || l === null || Oe(l, l.return)),
          a & 4)
        ) {
          var n = l !== null ? l.memoizedState : null;
          if (((a = t.memoizedState), l === null))
            if (a === null)
              if (t.stateNode === null) {
                t: {
                  ((a = t.type),
                    (l = t.memoizedProps),
                    (u = u.ownerDocument || u));
                  e: switch (a) {
                    case "title":
                      ((n = u.getElementsByTagName("title")[0]),
                        (!n ||
                          n[xa] ||
                          n[Zt] ||
                          n.namespaceURI === "http://www.w3.org/2000/svg" ||
                          n.hasAttribute("itemprop")) &&
                          ((n = u.createElement(a)),
                          u.head.insertBefore(
                            n,
                            u.querySelector("head > title")
                          )),
                        Xt(n, a, l),
                        (n[Zt] = t),
                        Ct(n),
                        (a = n));
                      break t;
                    case "link":
                      var i = d0("link", "href", u).get(a + (l.href || ""));
                      if (i) {
                        for (var c = 0; c < i.length; c++)
                          if (
                            ((n = i[c]),
                            n.getAttribute("href") ===
                              (l.href == null || l.href === ""
                                ? null
                                : l.href) &&
                              n.getAttribute("rel") ===
                                (l.rel == null ? null : l.rel) &&
                              n.getAttribute("title") ===
                                (l.title == null ? null : l.title) &&
                              n.getAttribute("crossorigin") ===
                                (l.crossOrigin == null ? null : l.crossOrigin))
                          ) {
                            i.splice(c, 1);
                            break e;
                          }
                      }
                      ((n = u.createElement(a)),
                        Xt(n, a, l),
                        u.head.appendChild(n));
                      break;
                    case "meta":
                      if (
                        (i = d0("meta", "content", u).get(
                          a + (l.content || "")
                        ))
                      ) {
                        for (c = 0; c < i.length; c++)
                          if (
                            ((n = i[c]),
                            n.getAttribute("content") ===
                              (l.content == null ? null : "" + l.content) &&
                              n.getAttribute("name") ===
                                (l.name == null ? null : l.name) &&
                              n.getAttribute("property") ===
                                (l.property == null ? null : l.property) &&
                              n.getAttribute("http-equiv") ===
                                (l.httpEquiv == null ? null : l.httpEquiv) &&
                              n.getAttribute("charset") ===
                                (l.charSet == null ? null : l.charSet))
                          ) {
                            i.splice(c, 1);
                            break e;
                          }
                      }
                      ((n = u.createElement(a)),
                        Xt(n, a, l),
                        u.head.appendChild(n));
                      break;
                    default:
                      throw Error(r(468, a));
                  }
                  ((n[Zt] = t), Ct(n), (a = n));
                }
                t.stateNode = a;
              } else h0(u, t.type, t.stateNode);
            else t.stateNode = s0(u, a, t.memoizedProps);
          else
            n !== a
              ? (n === null
                  ? l.stateNode !== null &&
                    ((l = l.stateNode), l.parentNode.removeChild(l))
                  : n.count--,
                a === null
                  ? h0(u, t.type, t.stateNode)
                  : s0(u, a, t.memoizedProps))
              : a === null &&
                t.stateNode !== null &&
                _f(t, t.memoizedProps, l.memoizedProps);
        }
        break;
      case 27:
        (ne(e, t),
          ie(t),
          a & 512 && (_t || l === null || Oe(l, l.return)),
          l !== null && a & 4 && _f(t, t.memoizedProps, l.memoizedProps));
        break;
      case 5:
        if (
          (ne(e, t),
          ie(t),
          a & 512 && (_t || l === null || Oe(l, l.return)),
          t.flags & 32)
        ) {
          u = t.stateNode;
          try {
            $l(u, "");
          } catch (A) {
            yt(t, t.return, A);
          }
        }
        (a & 4 &&
          t.stateNode != null &&
          ((u = t.memoizedProps), _f(t, u, l !== null ? l.memoizedProps : u)),
          a & 1024 && (xf = !0));
        break;
      case 6:
        if ((ne(e, t), ie(t), a & 4)) {
          if (t.stateNode === null) throw Error(r(162));
          ((a = t.memoizedProps), (l = t.stateNode));
          try {
            l.nodeValue = a;
          } catch (A) {
            yt(t, t.return, A);
          }
        }
        break;
      case 3:
        if (
          ((Ln = null),
          (u = Ee),
          (Ee = Yn(e.containerInfo)),
          ne(e, t),
          (Ee = u),
          ie(t),
          a & 4 && l !== null && l.memoizedState.isDehydrated)
        )
          try {
            Ru(e.containerInfo);
          } catch (A) {
            yt(t, t.return, A);
          }
        xf && ((xf = !1), ps(t));
        break;
      case 4:
        ((a = Ee),
          (Ee = Yn(t.stateNode.containerInfo)),
          ne(e, t),
          ie(t),
          (Ee = a));
        break;
      case 12:
        (ne(e, t), ie(t));
        break;
      case 13:
        (ne(e, t),
          ie(t),
          t.child.flags & 8192 &&
            (t.memoizedState !== null) !=
              (l !== null && l.memoizedState !== null) &&
            (Gf = Ae()),
          a & 4 &&
            ((a = t.updateQueue),
            a !== null && ((t.updateQueue = null), Nf(t, a))));
        break;
      case 22:
        u = t.memoizedState !== null;
        var d = l !== null && l.memoizedState !== null,
          E = Qe,
          O = _t;
        if (
          ((Qe = E || u),
          (_t = O || d),
          ne(e, t),
          (_t = O),
          (Qe = E),
          ie(t),
          a & 8192)
        )
          t: for (
            e = t.stateNode,
              e._visibility = u ? e._visibility & -2 : e._visibility | 1,
              u && (l === null || d || Qe || _t || Yl(t)),
              l = null,
              e = t;
            ;
          ) {
            if (e.tag === 5 || e.tag === 26) {
              if (l === null) {
                d = l = e;
                try {
                  if (((n = d.stateNode), u))
                    ((i = n.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"));
                  else {
                    c = d.stateNode;
                    var D = d.memoizedProps.style,
                      T =
                        D != null && D.hasOwnProperty("display")
                          ? D.display
                          : null;
                    c.style.display =
                      T == null || typeof T == "boolean" ? "" : ("" + T).trim();
                  }
                } catch (A) {
                  yt(d, d.return, A);
                }
              }
            } else if (e.tag === 6) {
              if (l === null) {
                d = e;
                try {
                  d.stateNode.nodeValue = u ? "" : d.memoizedProps;
                } catch (A) {
                  yt(d, d.return, A);
                }
              }
            } else if (
              ((e.tag !== 22 && e.tag !== 23) ||
                e.memoizedState === null ||
                e === t) &&
              e.child !== null
            ) {
              ((e.child.return = e), (e = e.child));
              continue;
            }
            if (e === t) break t;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t) break t;
              (l === e && (l = null), (e = e.return));
            }
            (l === e && (l = null),
              (e.sibling.return = e.return),
              (e = e.sibling));
          }
        a & 4 &&
          ((a = t.updateQueue),
          a !== null &&
            ((l = a.retryQueue),
            l !== null && ((a.retryQueue = null), Nf(t, l))));
        break;
      case 19:
        (ne(e, t),
          ie(t),
          a & 4 &&
            ((a = t.updateQueue),
            a !== null && ((t.updateQueue = null), Nf(t, a))));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        (ne(e, t), ie(t));
    }
  }
  function ie(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var l, a = t.return; a !== null; ) {
          if (ss(a)) {
            l = a;
            break;
          }
          a = a.return;
        }
        if (l == null) throw Error(r(160));
        switch (l.tag) {
          case 27:
            var u = l.stateNode,
              n = Df(t);
            Rn(t, n, u);
            break;
          case 5:
            var i = l.stateNode;
            l.flags & 32 && ($l(i, ""), (l.flags &= -33));
            var c = Df(t);
            Rn(t, c, i);
            break;
          case 3:
          case 4:
            var d = l.stateNode.containerInfo,
              E = Df(t);
            Uf(t, E, d);
            break;
          default:
            throw Error(r(161));
        }
      } catch (O) {
        yt(t, t.return, O);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function ps(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        (ps(e),
          e.tag === 5 && e.flags & 1024 && e.stateNode.reset(),
          (t = t.sibling));
      }
  }
  function fl(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; ) (ms(t, e.alternate, e), (e = e.sibling));
  }
  function Yl(t) {
    for (t = t.child; t !== null; ) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (il(4, e, e.return), Yl(e));
          break;
        case 1:
          Oe(e, e.return);
          var l = e.stateNode;
          (typeof l.componentWillUnmount == "function" && rs(e, e.return, l),
            Yl(e));
          break;
        case 27:
          yu(e.stateNode);
        case 26:
        case 5:
          (Oe(e, e.return), Yl(e));
          break;
        case 22:
          e.memoizedState === null && Yl(e);
          break;
        case 30:
          Yl(e);
          break;
        default:
          Yl(e);
      }
      t = t.sibling;
    }
  }
  function cl(t, e, l) {
    for (l = l && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
      var a = e.alternate,
        u = t,
        n = e,
        i = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          (cl(u, n, l), iu(4, n));
          break;
        case 1:
          if (
            (cl(u, n, l),
            (a = n),
            (u = a.stateNode),
            typeof u.componentDidMount == "function")
          )
            try {
              u.componentDidMount();
            } catch (E) {
              yt(a, a.return, E);
            }
          if (((a = n), (u = a.updateQueue), u !== null)) {
            var c = a.stateNode;
            try {
              var d = u.shared.hiddenCallbacks;
              if (d !== null)
                for (u.shared.hiddenCallbacks = null, u = 0; u < d.length; u++)
                  Jr(d[u], c);
            } catch (E) {
              yt(a, a.return, E);
            }
          }
          (l && i & 64 && cs(n), fu(n, n.return));
          break;
        case 27:
          ds(n);
        case 26:
        case 5:
          (cl(u, n, l), l && a === null && i & 4 && os(n), fu(n, n.return));
          break;
        case 12:
          cl(u, n, l);
          break;
        case 13:
          (cl(u, n, l), l && i & 4 && gs(u, n));
          break;
        case 22:
          (n.memoizedState === null && cl(u, n, l), fu(n, n.return));
          break;
        case 30:
          break;
        default:
          cl(u, n, l);
      }
      e = e.sibling;
    }
  }
  function Hf(t, e) {
    var l = null;
    (t !== null &&
      t.memoizedState !== null &&
      t.memoizedState.cachePool !== null &&
      (l = t.memoizedState.cachePool.pool),
      (t = null),
      e.memoizedState !== null &&
        e.memoizedState.cachePool !== null &&
        (t = e.memoizedState.cachePool.pool),
      t !== l && (t != null && t.refCount++, l != null && Ka(l)));
  }
  function Cf(t, e) {
    ((t = null),
      e.alternate !== null && (t = e.alternate.memoizedState.cache),
      (e = e.memoizedState.cache),
      e !== t && (e.refCount++, t != null && Ka(t)));
  }
  function Me(t, e, l, a) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) (bs(t, e, l, a), (e = e.sibling));
  }
  function bs(t, e, l, a) {
    var u = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        (Me(t, e, l, a), u & 2048 && iu(9, e));
        break;
      case 1:
        Me(t, e, l, a);
        break;
      case 3:
        (Me(t, e, l, a),
          u & 2048 &&
            ((t = null),
            e.alternate !== null && (t = e.alternate.memoizedState.cache),
            (e = e.memoizedState.cache),
            e !== t && (e.refCount++, t != null && Ka(t))));
        break;
      case 12:
        if (u & 2048) {
          (Me(t, e, l, a), (t = e.stateNode));
          try {
            var n = e.memoizedProps,
              i = n.id,
              c = n.onPostCommit;
            typeof c == "function" &&
              c(
                i,
                e.alternate === null ? "mount" : "update",
                t.passiveEffectDuration,
                -0
              );
          } catch (d) {
            yt(e, e.return, d);
          }
        } else Me(t, e, l, a);
        break;
      case 13:
        Me(t, e, l, a);
        break;
      case 23:
        break;
      case 22:
        ((n = e.stateNode),
          (i = e.alternate),
          e.memoizedState !== null
            ? n._visibility & 2
              ? Me(t, e, l, a)
              : cu(t, e)
            : n._visibility & 2
              ? Me(t, e, l, a)
              : ((n._visibility |= 2),
                ha(t, e, l, a, (e.subtreeFlags & 10256) !== 0)),
          u & 2048 && Hf(i, e));
        break;
      case 24:
        (Me(t, e, l, a), u & 2048 && Cf(e.alternate, e));
        break;
      default:
        Me(t, e, l, a);
    }
  }
  function ha(t, e, l, a, u) {
    for (u = u && (e.subtreeFlags & 10256) !== 0, e = e.child; e !== null; ) {
      var n = t,
        i = e,
        c = l,
        d = a,
        E = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          (ha(n, i, c, d, u), iu(8, i));
          break;
        case 23:
          break;
        case 22:
          var O = i.stateNode;
          (i.memoizedState !== null
            ? O._visibility & 2
              ? ha(n, i, c, d, u)
              : cu(n, i)
            : ((O._visibility |= 2), ha(n, i, c, d, u)),
            u && E & 2048 && Hf(i.alternate, i));
          break;
        case 24:
          (ha(n, i, c, d, u), u && E & 2048 && Cf(i.alternate, i));
          break;
        default:
          ha(n, i, c, d, u);
      }
      e = e.sibling;
    }
  }
  function cu(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var l = t,
          a = e,
          u = a.flags;
        switch (a.tag) {
          case 22:
            (cu(l, a), u & 2048 && Hf(a.alternate, a));
            break;
          case 24:
            (cu(l, a), u & 2048 && Cf(a.alternate, a));
            break;
          default:
            cu(l, a);
        }
        e = e.sibling;
      }
  }
  var ru = 8192;
  function ma(t) {
    if (t.subtreeFlags & ru)
      for (t = t.child; t !== null; ) (Es(t), (t = t.sibling));
  }
  function Es(t) {
    switch (t.tag) {
      case 26:
        (ma(t),
          t.flags & ru &&
            t.memoizedState !== null &&
            Sm(Ee, t.memoizedState, t.memoizedProps));
        break;
      case 5:
        ma(t);
        break;
      case 3:
      case 4:
        var e = Ee;
        ((Ee = Yn(t.stateNode.containerInfo)), ma(t), (Ee = e));
        break;
      case 22:
        t.memoizedState === null &&
          ((e = t.alternate),
          e !== null && e.memoizedState !== null
            ? ((e = ru), (ru = 16777216), ma(t), (ru = e))
            : ma(t));
        break;
      default:
        ma(t);
    }
  }
  function Ts(t) {
    var e = t.alternate;
    if (e !== null && ((t = e.child), t !== null)) {
      e.child = null;
      do ((e = t.sibling), (t.sibling = null), (t = e));
      while (t !== null);
    }
  }
  function ou(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var l = 0; l < e.length; l++) {
          var a = e[l];
          ((qt = a), Rs(a, t));
        }
      Ts(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) (As(t), (t = t.sibling));
  }
  function As(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        (ou(t), t.flags & 2048 && il(9, t, t.return));
        break;
      case 3:
        ou(t);
        break;
      case 12:
        ou(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null &&
        e._visibility & 2 &&
        (t.return === null || t.return.tag !== 13)
          ? ((e._visibility &= -3), zn(t))
          : ou(t);
        break;
      default:
        ou(t);
    }
  }
  function zn(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var l = 0; l < e.length; l++) {
          var a = e[l];
          ((qt = a), Rs(a, t));
        }
      Ts(t);
    }
    for (t = t.child; t !== null; ) {
      switch (((e = t), e.tag)) {
        case 0:
        case 11:
        case 15:
          (il(8, e, e.return), zn(e));
          break;
        case 22:
          ((l = e.stateNode),
            l._visibility & 2 && ((l._visibility &= -3), zn(e)));
          break;
        default:
          zn(e);
      }
      t = t.sibling;
    }
  }
  function Rs(t, e) {
    for (; qt !== null; ) {
      var l = qt;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          il(8, l, e);
          break;
        case 23:
        case 22:
          if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
            var a = l.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          Ka(l.memoizedState.cache);
      }
      if (((a = l.child), a !== null)) ((a.return = l), (qt = a));
      else
        t: for (l = t; qt !== null; ) {
          a = qt;
          var u = a.sibling,
            n = a.return;
          if ((vs(a), a === l)) {
            qt = null;
            break t;
          }
          if (u !== null) {
            ((u.return = n), (qt = u));
            break t;
          }
          qt = n;
        }
    }
  }
  var Ch = {
      getCacheForType: function (t) {
        var e = wt(Nt),
          l = e.data.get(t);
        return (l === void 0 && ((l = t()), e.data.set(t, l)), l);
      },
    },
    Bh = typeof WeakMap == "function" ? WeakMap : Map,
    ot = 0,
    gt = null,
    at = null,
    nt = 0,
    st = 0,
    fe = null,
    rl = !1,
    va = !1,
    Bf = !1,
    we = 0,
    zt = 0,
    ol = 0,
    Gl = 0,
    qf = 0,
    Se = 0,
    ya = 0,
    su = null,
    It = null,
    Yf = !1,
    Gf = 0,
    On = 1 / 0,
    Mn = null,
    sl = null,
    Lt = 0,
    dl = null,
    ga = null,
    Sa = 0,
    Lf = 0,
    Xf = null,
    zs = null,
    du = 0,
    jf = null;
  function ce() {
    if ((ot & 2) !== 0 && nt !== 0) return nt & -nt;
    if (M.T !== null) {
      var t = na;
      return t !== 0 ? t : $f();
    }
    return Xc();
  }
  function Os() {
    Se === 0 && (Se = (nt & 536870912) === 0 || rt ? qc() : 536870912);
    var t = ge.current;
    return (t !== null && (t.flags |= 32), Se);
  }
  function re(t, e, l) {
    (((t === gt && (st === 2 || st === 9)) || t.cancelPendingCommit !== null) &&
      (pa(t, 0), hl(t, nt, Se, !1)),
      Ua(t, l),
      ((ot & 2) === 0 || t !== gt) &&
        (t === gt &&
          ((ot & 2) === 0 && (Gl |= l), zt === 4 && hl(t, nt, Se, !1)),
        _e(t)));
  }
  function Ms(t, e, l) {
    if ((ot & 6) !== 0) throw Error(r(327));
    var a = (!l && (e & 124) === 0 && (e & t.expiredLanes) === 0) || Da(t, e),
      u = a ? Gh(t, e) : wf(t, e, !0),
      n = a;
    do {
      if (u === 0) {
        va && !a && hl(t, e, 0, !1);
        break;
      } else {
        if (((l = t.current.alternate), n && !qh(l))) {
          ((u = wf(t, e, !1)), (n = !1));
          continue;
        }
        if (u === 2) {
          if (((n = e), t.errorRecoveryDisabledLanes & n)) var i = 0;
          else
            ((i = t.pendingLanes & -536870913),
              (i = i !== 0 ? i : i & 536870912 ? 536870912 : 0));
          if (i !== 0) {
            e = i;
            t: {
              var c = t;
              u = su;
              var d = c.current.memoizedState.isDehydrated;
              if ((d && (pa(c, i).flags |= 256), (i = wf(c, i, !1)), i !== 2)) {
                if (Bf && !d) {
                  ((c.errorRecoveryDisabledLanes |= n), (Gl |= n), (u = 4));
                  break t;
                }
                ((n = It),
                  (It = u),
                  n !== null &&
                    (It === null ? (It = n) : It.push.apply(It, n)));
              }
              u = i;
            }
            if (((n = !1), u !== 2)) continue;
          }
        }
        if (u === 1) {
          (pa(t, 0), hl(t, e, 0, !0));
          break;
        }
        t: {
          switch (((a = t), (n = u), n)) {
            case 0:
            case 1:
              throw Error(r(345));
            case 4:
              if ((e & 4194048) !== e) break;
            case 6:
              hl(a, e, Se, !rl);
              break t;
            case 2:
              It = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(r(329));
          }
          if ((e & 62914560) === e && ((u = Gf + 300 - Ae()), 10 < u)) {
            if ((hl(a, e, Se, !rl), Yu(a, 0, !0) !== 0)) break t;
            a.timeoutHandle = l0(
              _s.bind(null, a, l, It, Mn, Yf, e, Se, Gl, ya, rl, n, 2, -0, 0),
              u
            );
            break t;
          }
          _s(a, l, It, Mn, Yf, e, Se, Gl, ya, rl, n, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    _e(t);
  }
  function _s(t, e, l, a, u, n, i, c, d, E, O, D, T, A) {
    if (
      ((t.timeoutHandle = -1),
      (D = e.subtreeFlags),
      (D & 8192 || (D & 16785408) === 16785408) &&
        ((pu = { stylesheets: null, count: 0, unsuspend: gm }),
        Es(e),
        (D = pm()),
        D !== null))
    ) {
      ((t.cancelPendingCommit = D(
        Bs.bind(null, t, e, n, l, a, u, i, c, d, O, 1, T, A)
      )),
        hl(t, n, i, !E));
      return;
    }
    Bs(t, e, n, l, a, u, i, c, d);
  }
  function qh(t) {
    for (var e = t; ; ) {
      var l = e.tag;
      if (
        (l === 0 || l === 11 || l === 15) &&
        e.flags & 16384 &&
        ((l = e.updateQueue), l !== null && ((l = l.stores), l !== null))
      )
        for (var a = 0; a < l.length; a++) {
          var u = l[a],
            n = u.getSnapshot;
          u = u.value;
          try {
            if (!ae(n(), u)) return !1;
          } catch {
            return !1;
          }
        }
      if (((l = e.child), e.subtreeFlags & 16384 && l !== null))
        ((l.return = e), (e = l));
      else {
        if (e === t) break;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) return !0;
          e = e.return;
        }
        ((e.sibling.return = e.return), (e = e.sibling));
      }
    }
    return !0;
  }
  function hl(t, e, l, a) {
    ((e &= ~qf),
      (e &= ~Gl),
      (t.suspendedLanes |= e),
      (t.pingedLanes &= ~e),
      a && (t.warmLanes |= e),
      (a = t.expirationTimes));
    for (var u = e; 0 < u; ) {
      var n = 31 - le(u),
        i = 1 << n;
      ((a[n] = -1), (u &= ~i));
    }
    l !== 0 && Gc(t, l, e);
  }
  function _n() {
    return (ot & 6) === 0 ? (hu(0), !1) : !0;
  }
  function Qf() {
    if (at !== null) {
      if (st === 0) var t = at.return;
      else ((t = at), (qe = Nl = null), uf(t), (sa = null), (au = 0), (t = at));
      for (; t !== null; ) (fs(t.alternate, t), (t = t.return));
      at = null;
    }
  }
  function pa(t, e) {
    var l = t.timeoutHandle;
    (l !== -1 && ((t.timeoutHandle = -1), tm(l)),
      (l = t.cancelPendingCommit),
      l !== null && ((t.cancelPendingCommit = null), l()),
      Qf(),
      (gt = t),
      (at = l = He(t.current, null)),
      (nt = e),
      (st = 0),
      (fe = null),
      (rl = !1),
      (va = Da(t, e)),
      (Bf = !1),
      (ya = Se = qf = Gl = ol = zt = 0),
      (It = su = null),
      (Yf = !1),
      (e & 8) !== 0 && (e |= e & 32));
    var a = t.entangledLanes;
    if (a !== 0)
      for (t = t.entanglements, a &= e; 0 < a; ) {
        var u = 31 - le(a),
          n = 1 << u;
        ((e |= t[u]), (a &= ~n));
      }
    return ((we = e), ku(), l);
  }
  function Ds(t, e) {
    ((et = null),
      (M.H = vn),
      e === $a || e === un
        ? ((e = Vr()), (st = 3))
        : e === Qr
          ? ((e = Vr()), (st = 4))
          : (st =
              e === Jo
                ? 8
                : e !== null &&
                    typeof e == "object" &&
                    typeof e.then == "function"
                  ? 6
                  : 1),
      (fe = e),
      at === null && ((zt = 1), bn(t, he(e, t.current))));
  }
  function Us() {
    var t = M.H;
    return ((M.H = vn), t === null ? vn : t);
  }
  function xs() {
    var t = M.A;
    return ((M.A = Ch), t);
  }
  function Zf() {
    ((zt = 4),
      rl || ((nt & 4194048) !== nt && ge.current !== null) || (va = !0),
      ((ol & 134217727) === 0 && (Gl & 134217727) === 0) ||
        gt === null ||
        hl(gt, nt, Se, !1));
  }
  function wf(t, e, l) {
    var a = ot;
    ot |= 2;
    var u = Us(),
      n = xs();
    ((gt !== t || nt !== e) && ((Mn = null), pa(t, e)), (e = !1));
    var i = zt;
    t: do
      try {
        if (st !== 0 && at !== null) {
          var c = at,
            d = fe;
          switch (st) {
            case 8:
              (Qf(), (i = 6));
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              ge.current === null && (e = !0);
              var E = st;
              if (((st = 0), (fe = null), ba(t, c, d, E), l && va)) {
                i = 0;
                break t;
              }
              break;
            default:
              ((E = st), (st = 0), (fe = null), ba(t, c, d, E));
          }
        }
        (Yh(), (i = zt));
        break;
      } catch (O) {
        Ds(t, O);
      }
    while (!0);
    return (
      e && t.shellSuspendCounter++,
      (qe = Nl = null),
      (ot = a),
      (M.H = u),
      (M.A = n),
      at === null && ((gt = null), (nt = 0), ku()),
      i
    );
  }
  function Yh() {
    for (; at !== null; ) Ns(at);
  }
  function Gh(t, e) {
    var l = ot;
    ot |= 2;
    var a = Us(),
      u = xs();
    gt !== t || nt !== e
      ? ((Mn = null), (On = Ae() + 500), pa(t, e))
      : (va = Da(t, e));
    t: do
      try {
        if (st !== 0 && at !== null) {
          e = at;
          var n = fe;
          e: switch (st) {
            case 1:
              ((st = 0), (fe = null), ba(t, e, n, 1));
              break;
            case 2:
            case 9:
              if (Zr(n)) {
                ((st = 0), (fe = null), Hs(e));
                break;
              }
              ((e = function () {
                ((st !== 2 && st !== 9) || gt !== t || (st = 7), _e(t));
              }),
                n.then(e, e));
              break t;
            case 3:
              st = 7;
              break t;
            case 4:
              st = 5;
              break t;
            case 7:
              Zr(n)
                ? ((st = 0), (fe = null), Hs(e))
                : ((st = 0), (fe = null), ba(t, e, n, 7));
              break;
            case 5:
              var i = null;
              switch (at.tag) {
                case 26:
                  i = at.memoizedState;
                case 5:
                case 27:
                  var c = at;
                  if (!i || m0(i)) {
                    ((st = 0), (fe = null));
                    var d = c.sibling;
                    if (d !== null) at = d;
                    else {
                      var E = c.return;
                      E !== null ? ((at = E), Dn(E)) : (at = null);
                    }
                    break e;
                  }
              }
              ((st = 0), (fe = null), ba(t, e, n, 5));
              break;
            case 6:
              ((st = 0), (fe = null), ba(t, e, n, 6));
              break;
            case 8:
              (Qf(), (zt = 6));
              break t;
            default:
              throw Error(r(462));
          }
        }
        Lh();
        break;
      } catch (O) {
        Ds(t, O);
      }
    while (!0);
    return (
      (qe = Nl = null),
      (M.H = a),
      (M.A = u),
      (ot = l),
      at !== null ? 0 : ((gt = null), (nt = 0), ku(), zt)
    );
  }
  function Lh() {
    for (; at !== null && !fd(); ) Ns(at);
  }
  function Ns(t) {
    var e = ns(t.alternate, t, we);
    ((t.memoizedProps = t.pendingProps), e === null ? Dn(t) : (at = e));
  }
  function Hs(t) {
    var e = t,
      l = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = Io(l, e, e.pendingProps, e.type, void 0, nt);
        break;
      case 11:
        e = Io(l, e, e.pendingProps, e.type.render, e.ref, nt);
        break;
      case 5:
        uf(e);
      default:
        (fs(l, e), (e = at = Hr(e, we)), (e = ns(l, e, we)));
    }
    ((t.memoizedProps = t.pendingProps), e === null ? Dn(t) : (at = e));
  }
  function ba(t, e, l, a) {
    ((qe = Nl = null), uf(e), (sa = null), (au = 0));
    var u = e.return;
    try {
      if (_h(t, u, e, l, nt)) {
        ((zt = 1), bn(t, he(l, t.current)), (at = null));
        return;
      }
    } catch (n) {
      if (u !== null) throw ((at = u), n);
      ((zt = 1), bn(t, he(l, t.current)), (at = null));
      return;
    }
    e.flags & 32768
      ? (rt || a === 1
          ? (t = !0)
          : va || (nt & 536870912) !== 0
            ? (t = !1)
            : ((rl = t = !0),
              (a === 2 || a === 9 || a === 3 || a === 6) &&
                ((a = ge.current),
                a !== null && a.tag === 13 && (a.flags |= 16384))),
        Cs(e, t))
      : Dn(e);
  }
  function Dn(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        Cs(e, rl);
        return;
      }
      t = e.return;
      var l = Uh(e.alternate, e, we);
      if (l !== null) {
        at = l;
        return;
      }
      if (((e = e.sibling), e !== null)) {
        at = e;
        return;
      }
      at = e = t;
    } while (e !== null);
    zt === 0 && (zt = 5);
  }
  function Cs(t, e) {
    do {
      var l = xh(t.alternate, t);
      if (l !== null) {
        ((l.flags &= 32767), (at = l));
        return;
      }
      if (
        ((l = t.return),
        l !== null &&
          ((l.flags |= 32768), (l.subtreeFlags = 0), (l.deletions = null)),
        !e && ((t = t.sibling), t !== null))
      ) {
        at = t;
        return;
      }
      at = t = l;
    } while (t !== null);
    ((zt = 6), (at = null));
  }
  function Bs(t, e, l, a, u, n, i, c, d) {
    t.cancelPendingCommit = null;
    do Un();
    while (Lt !== 0);
    if ((ot & 6) !== 0) throw Error(r(327));
    if (e !== null) {
      if (e === t.current) throw Error(r(177));
      if (
        ((n = e.lanes | e.childLanes),
        (n |= Hi),
        gd(t, l, n, i, c, d),
        t === gt && ((at = gt = null), (nt = 0)),
        (ga = e),
        (dl = t),
        (Sa = l),
        (Lf = n),
        (Xf = u),
        (zs = a),
        (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
          ? ((t.callbackNode = null),
            (t.callbackPriority = 0),
            Zh(Cu, function () {
              return (Xs(), null);
            }))
          : ((t.callbackNode = null), (t.callbackPriority = 0)),
        (a = (e.flags & 13878) !== 0),
        (e.subtreeFlags & 13878) !== 0 || a)
      ) {
        ((a = M.T), (M.T = null), (u = G.p), (G.p = 2), (i = ot), (ot |= 4));
        try {
          Nh(t, e, l);
        } finally {
          ((ot = i), (G.p = u), (M.T = a));
        }
      }
      ((Lt = 1), qs(), Ys(), Gs());
    }
  }
  function qs() {
    if (Lt === 1) {
      Lt = 0;
      var t = dl,
        e = ga,
        l = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || l) {
        ((l = M.T), (M.T = null));
        var a = G.p;
        G.p = 2;
        var u = ot;
        ot |= 4;
        try {
          Ss(e, t);
          var n = lc,
            i = Ar(t.containerInfo),
            c = n.focusedElem,
            d = n.selectionRange;
          if (
            i !== c &&
            c &&
            c.ownerDocument &&
            Tr(c.ownerDocument.documentElement, c)
          ) {
            if (d !== null && _i(c)) {
              var E = d.start,
                O = d.end;
              if ((O === void 0 && (O = E), "selectionStart" in c))
                ((c.selectionStart = E),
                  (c.selectionEnd = Math.min(O, c.value.length)));
              else {
                var D = c.ownerDocument || document,
                  T = (D && D.defaultView) || window;
                if (T.getSelection) {
                  var A = T.getSelection(),
                    W = c.textContent.length,
                    J = Math.min(d.start, W),
                    mt = d.end === void 0 ? J : Math.min(d.end, W);
                  !A.extend && J > mt && ((i = mt), (mt = J), (J = i));
                  var S = Er(c, J),
                    y = Er(c, mt);
                  if (
                    S &&
                    y &&
                    (A.rangeCount !== 1 ||
                      A.anchorNode !== S.node ||
                      A.anchorOffset !== S.offset ||
                      A.focusNode !== y.node ||
                      A.focusOffset !== y.offset)
                  ) {
                    var b = D.createRange();
                    (b.setStart(S.node, S.offset),
                      A.removeAllRanges(),
                      J > mt
                        ? (A.addRange(b), A.extend(y.node, y.offset))
                        : (b.setEnd(y.node, y.offset), A.addRange(b)));
                  }
                }
              }
            }
            for (D = [], A = c; (A = A.parentNode); )
              A.nodeType === 1 &&
                D.push({ element: A, left: A.scrollLeft, top: A.scrollTop });
            for (
              typeof c.focus == "function" && c.focus(), c = 0;
              c < D.length;
              c++
            ) {
              var _ = D[c];
              ((_.element.scrollLeft = _.left), (_.element.scrollTop = _.top));
            }
          }
          ((Qn = !!ec), (lc = ec = null));
        } finally {
          ((ot = u), (G.p = a), (M.T = l));
        }
      }
      ((t.current = e), (Lt = 2));
    }
  }
  function Ys() {
    if (Lt === 2) {
      Lt = 0;
      var t = dl,
        e = ga,
        l = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || l) {
        ((l = M.T), (M.T = null));
        var a = G.p;
        G.p = 2;
        var u = ot;
        ot |= 4;
        try {
          ms(t, e.alternate, e);
        } finally {
          ((ot = u), (G.p = a), (M.T = l));
        }
      }
      Lt = 3;
    }
  }
  function Gs() {
    if (Lt === 4 || Lt === 3) {
      ((Lt = 0), cd());
      var t = dl,
        e = ga,
        l = Sa,
        a = zs;
      (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
        ? (Lt = 5)
        : ((Lt = 0), (ga = dl = null), Ls(t, t.pendingLanes));
      var u = t.pendingLanes;
      if (
        (u === 0 && (sl = null),
        fi(l),
        (e = e.stateNode),
        ee && typeof ee.onCommitFiberRoot == "function")
      )
        try {
          ee.onCommitFiberRoot(_a, e, void 0, (e.current.flags & 128) === 128);
        } catch {}
      if (a !== null) {
        ((e = M.T), (u = G.p), (G.p = 2), (M.T = null));
        try {
          for (var n = t.onRecoverableError, i = 0; i < a.length; i++) {
            var c = a[i];
            n(c.value, { componentStack: c.stack });
          }
        } finally {
          ((M.T = e), (G.p = u));
        }
      }
      ((Sa & 3) !== 0 && Un(),
        _e(t),
        (u = t.pendingLanes),
        (l & 4194090) !== 0 && (u & 42) !== 0
          ? t === jf
            ? du++
            : ((du = 0), (jf = t))
          : (du = 0),
        hu(0));
    }
  }
  function Ls(t, e) {
    (t.pooledCacheLanes &= e) === 0 &&
      ((e = t.pooledCache), e != null && ((t.pooledCache = null), Ka(e)));
  }
  function Un(t) {
    return (qs(), Ys(), Gs(), Xs());
  }
  function Xs() {
    if (Lt !== 5) return !1;
    var t = dl,
      e = Lf;
    Lf = 0;
    var l = fi(Sa),
      a = M.T,
      u = G.p;
    try {
      ((G.p = 32 > l ? 32 : l), (M.T = null), (l = Xf), (Xf = null));
      var n = dl,
        i = Sa;
      if (((Lt = 0), (ga = dl = null), (Sa = 0), (ot & 6) !== 0))
        throw Error(r(331));
      var c = ot;
      if (
        ((ot |= 4),
        As(n.current),
        bs(n, n.current, i, l),
        (ot = c),
        hu(0, !1),
        ee && typeof ee.onPostCommitFiberRoot == "function")
      )
        try {
          ee.onPostCommitFiberRoot(_a, n);
        } catch {}
      return !0;
    } finally {
      ((G.p = u), (M.T = a), Ls(t, e));
    }
  }
  function js(t, e, l) {
    ((e = he(l, e)),
      (e = pf(t.stateNode, e, 2)),
      (t = ll(t, e, 2)),
      t !== null && (Ua(t, 2), _e(t)));
  }
  function yt(t, e, l) {
    if (t.tag === 3) js(t, t, l);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          js(e, t, l);
          break;
        } else if (e.tag === 1) {
          var a = e.stateNode;
          if (
            typeof e.type.getDerivedStateFromError == "function" ||
            (typeof a.componentDidCatch == "function" &&
              (sl === null || !sl.has(a)))
          ) {
            ((t = he(l, t)),
              (l = Vo(2)),
              (a = ll(e, l, 2)),
              a !== null && (Ko(l, a, e, t), Ua(a, 2), _e(a)));
            break;
          }
        }
        e = e.return;
      }
  }
  function Vf(t, e, l) {
    var a = t.pingCache;
    if (a === null) {
      a = t.pingCache = new Bh();
      var u = new Set();
      a.set(e, u);
    } else ((u = a.get(e)), u === void 0 && ((u = new Set()), a.set(e, u)));
    u.has(l) ||
      ((Bf = !0), u.add(l), (t = Xh.bind(null, t, e, l)), e.then(t, t));
  }
  function Xh(t, e, l) {
    var a = t.pingCache;
    (a !== null && a.delete(e),
      (t.pingedLanes |= t.suspendedLanes & l),
      (t.warmLanes &= ~l),
      gt === t &&
        (nt & l) === l &&
        (zt === 4 || (zt === 3 && (nt & 62914560) === nt && 300 > Ae() - Gf)
          ? (ot & 2) === 0 && pa(t, 0)
          : (qf |= l),
        ya === nt && (ya = 0)),
      _e(t));
  }
  function Qs(t, e) {
    (e === 0 && (e = Yc()), (t = ea(t, e)), t !== null && (Ua(t, e), _e(t)));
  }
  function jh(t) {
    var e = t.memoizedState,
      l = 0;
    (e !== null && (l = e.retryLane), Qs(t, l));
  }
  function Qh(t, e) {
    var l = 0;
    switch (t.tag) {
      case 13:
        var a = t.stateNode,
          u = t.memoizedState;
        u !== null && (l = u.retryLane);
        break;
      case 19:
        a = t.stateNode;
        break;
      case 22:
        a = t.stateNode._retryCache;
        break;
      default:
        throw Error(r(314));
    }
    (a !== null && a.delete(e), Qs(t, l));
  }
  function Zh(t, e) {
    return ai(t, e);
  }
  var xn = null,
    Ea = null,
    Kf = !1,
    Nn = !1,
    Jf = !1,
    Ll = 0;
  function _e(t) {
    (t !== Ea &&
      t.next === null &&
      (Ea === null ? (xn = Ea = t) : (Ea = Ea.next = t)),
      (Nn = !0),
      Kf || ((Kf = !0), Vh()));
  }
  function hu(t, e) {
    if (!Jf && Nn) {
      Jf = !0;
      do
        for (var l = !1, a = xn; a !== null; ) {
          if (t !== 0) {
            var u = a.pendingLanes;
            if (u === 0) var n = 0;
            else {
              var i = a.suspendedLanes,
                c = a.pingedLanes;
              ((n = (1 << (31 - le(42 | t) + 1)) - 1),
                (n &= u & ~(i & ~c)),
                (n = n & 201326741 ? (n & 201326741) | 1 : n ? n | 2 : 0));
            }
            n !== 0 && ((l = !0), Ks(a, n));
          } else
            ((n = nt),
              (n = Yu(
                a,
                a === gt ? n : 0,
                a.cancelPendingCommit !== null || a.timeoutHandle !== -1
              )),
              (n & 3) === 0 || Da(a, n) || ((l = !0), Ks(a, n)));
          a = a.next;
        }
      while (l);
      Jf = !1;
    }
  }
  function wh() {
    Zs();
  }
  function Zs() {
    Nn = Kf = !1;
    var t = 0;
    Ll !== 0 && (Ih() && (t = Ll), (Ll = 0));
    for (var e = Ae(), l = null, a = xn; a !== null; ) {
      var u = a.next,
        n = ws(a, e);
      (n === 0
        ? ((a.next = null),
          l === null ? (xn = u) : (l.next = u),
          u === null && (Ea = l))
        : ((l = a), (t !== 0 || (n & 3) !== 0) && (Nn = !0)),
        (a = u));
    }
    hu(t);
  }
  function ws(t, e) {
    for (
      var l = t.suspendedLanes,
        a = t.pingedLanes,
        u = t.expirationTimes,
        n = t.pendingLanes & -62914561;
      0 < n;
    ) {
      var i = 31 - le(n),
        c = 1 << i,
        d = u[i];
      (d === -1
        ? ((c & l) === 0 || (c & a) !== 0) && (u[i] = yd(c, e))
        : d <= e && (t.expiredLanes |= c),
        (n &= ~c));
    }
    if (
      ((e = gt),
      (l = nt),
      (l = Yu(
        t,
        t === e ? l : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1
      )),
      (a = t.callbackNode),
      l === 0 ||
        (t === e && (st === 2 || st === 9)) ||
        t.cancelPendingCommit !== null)
    )
      return (
        a !== null && a !== null && ui(a),
        (t.callbackNode = null),
        (t.callbackPriority = 0)
      );
    if ((l & 3) === 0 || Da(t, l)) {
      if (((e = l & -l), e === t.callbackPriority)) return e;
      switch ((a !== null && ui(a), fi(l))) {
        case 2:
        case 8:
          l = Cc;
          break;
        case 32:
          l = Cu;
          break;
        case 268435456:
          l = Bc;
          break;
        default:
          l = Cu;
      }
      return (
        (a = Vs.bind(null, t)),
        (l = ai(l, a)),
        (t.callbackPriority = e),
        (t.callbackNode = l),
        e
      );
    }
    return (
      a !== null && a !== null && ui(a),
      (t.callbackPriority = 2),
      (t.callbackNode = null),
      2
    );
  }
  function Vs(t, e) {
    if (Lt !== 0 && Lt !== 5)
      return ((t.callbackNode = null), (t.callbackPriority = 0), null);
    var l = t.callbackNode;
    if (Un() && t.callbackNode !== l) return null;
    var a = nt;
    return (
      (a = Yu(
        t,
        t === gt ? a : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1
      )),
      a === 0
        ? null
        : (Ms(t, a, e),
          ws(t, Ae()),
          t.callbackNode != null && t.callbackNode === l
            ? Vs.bind(null, t)
            : null)
    );
  }
  function Ks(t, e) {
    if (Un()) return null;
    Ms(t, e, !0);
  }
  function Vh() {
    em(function () {
      (ot & 6) !== 0 ? ai(Hc, wh) : Zs();
    });
  }
  function $f() {
    return (Ll === 0 && (Ll = qc()), Ll);
  }
  function Js(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean"
      ? null
      : typeof t == "function"
        ? t
        : Qu("" + t);
  }
  function $s(t, e) {
    var l = e.ownerDocument.createElement("input");
    return (
      (l.name = e.name),
      (l.value = e.value),
      t.id && l.setAttribute("form", t.id),
      e.parentNode.insertBefore(l, e),
      (t = new FormData(t)),
      l.parentNode.removeChild(l),
      t
    );
  }
  function Kh(t, e, l, a, u) {
    if (e === "submit" && l && l.stateNode === u) {
      var n = Js((u[kt] || null).action),
        i = a.submitter;
      i &&
        ((e = (e = i[kt] || null)
          ? Js(e.formAction)
          : i.getAttribute("formAction")),
        e !== null && ((n = e), (i = null)));
      var c = new Ku("action", "action", null, a, u);
      t.push({
        event: c,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (a.defaultPrevented) {
                if (Ll !== 0) {
                  var d = i ? $s(u, i) : new FormData(u);
                  mf(
                    l,
                    { pending: !0, data: d, method: u.method, action: n },
                    null,
                    d
                  );
                }
              } else
                typeof n == "function" &&
                  (c.preventDefault(),
                  (d = i ? $s(u, i) : new FormData(u)),
                  mf(
                    l,
                    { pending: !0, data: d, method: u.method, action: n },
                    n,
                    d
                  ));
            },
            currentTarget: u,
          },
        ],
      });
    }
  }
  for (var kf = 0; kf < Ni.length; kf++) {
    var Wf = Ni[kf],
      Jh = Wf.toLowerCase(),
      $h = Wf[0].toUpperCase() + Wf.slice(1);
    be(Jh, "on" + $h);
  }
  (be(Or, "onAnimationEnd"),
    be(Mr, "onAnimationIteration"),
    be(_r, "onAnimationStart"),
    be("dblclick", "onDoubleClick"),
    be("focusin", "onFocus"),
    be("focusout", "onBlur"),
    be(sh, "onTransitionRun"),
    be(dh, "onTransitionStart"),
    be(hh, "onTransitionCancel"),
    be(Dr, "onTransitionEnd"),
    Vl("onMouseEnter", ["mouseout", "mouseover"]),
    Vl("onMouseLeave", ["mouseout", "mouseover"]),
    Vl("onPointerEnter", ["pointerout", "pointerover"]),
    Vl("onPointerLeave", ["pointerout", "pointerover"]),
    Al(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    Al(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    Al("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Al(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    Al(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    Al(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    ));
  var mu =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    kh = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(mu)
    );
  function ks(t, e) {
    e = (e & 4) !== 0;
    for (var l = 0; l < t.length; l++) {
      var a = t[l],
        u = a.event;
      a = a.listeners;
      t: {
        var n = void 0;
        if (e)
          for (var i = a.length - 1; 0 <= i; i--) {
            var c = a[i],
              d = c.instance,
              E = c.currentTarget;
            if (((c = c.listener), d !== n && u.isPropagationStopped()))
              break t;
            ((n = c), (u.currentTarget = E));
            try {
              n(u);
            } catch (O) {
              pn(O);
            }
            ((u.currentTarget = null), (n = d));
          }
        else
          for (i = 0; i < a.length; i++) {
            if (
              ((c = a[i]),
              (d = c.instance),
              (E = c.currentTarget),
              (c = c.listener),
              d !== n && u.isPropagationStopped())
            )
              break t;
            ((n = c), (u.currentTarget = E));
            try {
              n(u);
            } catch (O) {
              pn(O);
            }
            ((u.currentTarget = null), (n = d));
          }
      }
    }
  }
  function ut(t, e) {
    var l = e[ci];
    l === void 0 && (l = e[ci] = new Set());
    var a = t + "__bubble";
    l.has(a) || (Ws(e, t, 2, !1), l.add(a));
  }
  function Ff(t, e, l) {
    var a = 0;
    (e && (a |= 4), Ws(l, t, a, e));
  }
  var Hn = "_reactListening" + Math.random().toString(36).slice(2);
  function Pf(t) {
    if (!t[Hn]) {
      ((t[Hn] = !0),
        Qc.forEach(function (l) {
          l !== "selectionchange" && (kh.has(l) || Ff(l, !1, t), Ff(l, !0, t));
        }));
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[Hn] || ((e[Hn] = !0), Ff("selectionchange", !1, e));
    }
  }
  function Ws(t, e, l, a) {
    switch (b0(e)) {
      case 2:
        var u = Tm;
        break;
      case 8:
        u = Am;
        break;
      default:
        u = dc;
    }
    ((l = u.bind(null, e, l, t)),
      (u = void 0),
      !pi ||
        (e !== "touchstart" && e !== "touchmove" && e !== "wheel") ||
        (u = !0),
      a
        ? u !== void 0
          ? t.addEventListener(e, l, { capture: !0, passive: u })
          : t.addEventListener(e, l, !0)
        : u !== void 0
          ? t.addEventListener(e, l, { passive: u })
          : t.addEventListener(e, l, !1));
  }
  function If(t, e, l, a, u) {
    var n = a;
    if ((e & 1) === 0 && (e & 2) === 0 && a !== null)
      t: for (;;) {
        if (a === null) return;
        var i = a.tag;
        if (i === 3 || i === 4) {
          var c = a.stateNode.containerInfo;
          if (c === u) break;
          if (i === 4)
            for (i = a.return; i !== null; ) {
              var d = i.tag;
              if ((d === 3 || d === 4) && i.stateNode.containerInfo === u)
                return;
              i = i.return;
            }
          for (; c !== null; ) {
            if (((i = Ql(c)), i === null)) return;
            if (((d = i.tag), d === 5 || d === 6 || d === 26 || d === 27)) {
              a = n = i;
              continue t;
            }
            c = c.parentNode;
          }
        }
        a = a.return;
      }
    lr(function () {
      var E = n,
        O = gi(l),
        D = [];
      t: {
        var T = Ur.get(t);
        if (T !== void 0) {
          var A = Ku,
            W = t;
          switch (t) {
            case "keypress":
              if (wu(l) === 0) break t;
            case "keydown":
            case "keyup":
              A = Zd;
              break;
            case "focusin":
              ((W = "focus"), (A = Ai));
              break;
            case "focusout":
              ((W = "blur"), (A = Ai));
              break;
            case "beforeblur":
            case "afterblur":
              A = Ai;
              break;
            case "click":
              if (l.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              A = nr;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              A = xd;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              A = Kd;
              break;
            case Or:
            case Mr:
            case _r:
              A = Cd;
              break;
            case Dr:
              A = $d;
              break;
            case "scroll":
            case "scrollend":
              A = Dd;
              break;
            case "wheel":
              A = Wd;
              break;
            case "copy":
            case "cut":
            case "paste":
              A = qd;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              A = fr;
              break;
            case "toggle":
            case "beforetoggle":
              A = Pd;
          }
          var J = (e & 4) !== 0,
            mt = !J && (t === "scroll" || t === "scrollend"),
            S = J ? (T !== null ? T + "Capture" : null) : T;
          J = [];
          for (var y = E, b; y !== null; ) {
            var _ = y;
            if (
              ((b = _.stateNode),
              (_ = _.tag),
              (_ !== 5 && _ !== 26 && _ !== 27) ||
                b === null ||
                S === null ||
                ((_ = Ha(y, S)), _ != null && J.push(vu(y, _, b))),
              mt)
            )
              break;
            y = y.return;
          }
          0 < J.length &&
            ((T = new A(T, W, null, l, O)), D.push({ event: T, listeners: J }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (
            ((T = t === "mouseover" || t === "pointerover"),
            (A = t === "mouseout" || t === "pointerout"),
            T &&
              l !== yi &&
              (W = l.relatedTarget || l.fromElement) &&
              (Ql(W) || W[jl]))
          )
            break t;
          if (
            (A || T) &&
            ((T =
              O.window === O
                ? O
                : (T = O.ownerDocument)
                  ? T.defaultView || T.parentWindow
                  : window),
            A
              ? ((W = l.relatedTarget || l.toElement),
                (A = E),
                (W = W ? Ql(W) : null),
                W !== null &&
                  ((mt = g(W)),
                  (J = W.tag),
                  W !== mt || (J !== 5 && J !== 27 && J !== 6)) &&
                  (W = null))
              : ((A = null), (W = E)),
            A !== W)
          ) {
            if (
              ((J = nr),
              (_ = "onMouseLeave"),
              (S = "onMouseEnter"),
              (y = "mouse"),
              (t === "pointerout" || t === "pointerover") &&
                ((J = fr),
                (_ = "onPointerLeave"),
                (S = "onPointerEnter"),
                (y = "pointer")),
              (mt = A == null ? T : Na(A)),
              (b = W == null ? T : Na(W)),
              (T = new J(_, y + "leave", A, l, O)),
              (T.target = mt),
              (T.relatedTarget = b),
              (_ = null),
              Ql(O) === E &&
                ((J = new J(S, y + "enter", W, l, O)),
                (J.target = b),
                (J.relatedTarget = mt),
                (_ = J)),
              (mt = _),
              A && W)
            )
              e: {
                for (J = A, S = W, y = 0, b = J; b; b = Ta(b)) y++;
                for (b = 0, _ = S; _; _ = Ta(_)) b++;
                for (; 0 < y - b; ) ((J = Ta(J)), y--);
                for (; 0 < b - y; ) ((S = Ta(S)), b--);
                for (; y--; ) {
                  if (J === S || (S !== null && J === S.alternate)) break e;
                  ((J = Ta(J)), (S = Ta(S)));
                }
                J = null;
              }
            else J = null;
            (A !== null && Fs(D, T, A, J, !1),
              W !== null && mt !== null && Fs(D, mt, W, J, !0));
          }
        }
        t: {
          if (
            ((T = E ? Na(E) : window),
            (A = T.nodeName && T.nodeName.toLowerCase()),
            A === "select" || (A === "input" && T.type === "file"))
          )
            var j = vr;
          else if (hr(T))
            if (yr) j = ch;
            else {
              j = ih;
              var lt = nh;
            }
          else
            ((A = T.nodeName),
              !A ||
              A.toLowerCase() !== "input" ||
              (T.type !== "checkbox" && T.type !== "radio")
                ? E && vi(E.elementType) && (j = vr)
                : (j = fh));
          if (j && (j = j(t, E))) {
            mr(D, j, l, O);
            break t;
          }
          (lt && lt(t, T, E),
            t === "focusout" &&
              E &&
              T.type === "number" &&
              E.memoizedProps.value != null &&
              mi(T, "number", T.value));
        }
        switch (((lt = E ? Na(E) : window), t)) {
          case "focusin":
            (hr(lt) || lt.contentEditable === "true") &&
              ((Pl = lt), (Di = E), (ja = null));
            break;
          case "focusout":
            ja = Di = Pl = null;
            break;
          case "mousedown":
            Ui = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((Ui = !1), Rr(D, l, O));
            break;
          case "selectionchange":
            if (oh) break;
          case "keydown":
          case "keyup":
            Rr(D, l, O);
        }
        var V;
        if (zi)
          t: {
            switch (t) {
              case "compositionstart":
                var $ = "onCompositionStart";
                break t;
              case "compositionend":
                $ = "onCompositionEnd";
                break t;
              case "compositionupdate":
                $ = "onCompositionUpdate";
                break t;
            }
            $ = void 0;
          }
        else
          Fl
            ? sr(t, l) && ($ = "onCompositionEnd")
            : t === "keydown" &&
              l.keyCode === 229 &&
              ($ = "onCompositionStart");
        ($ &&
          (cr &&
            l.locale !== "ko" &&
            (Fl || $ !== "onCompositionStart"
              ? $ === "onCompositionEnd" && Fl && (V = ar())
              : ((Pe = O),
                (bi = "value" in Pe ? Pe.value : Pe.textContent),
                (Fl = !0))),
          (lt = Cn(E, $)),
          0 < lt.length &&
            (($ = new ir($, t, null, l, O)),
            D.push({ event: $, listeners: lt }),
            V ? ($.data = V) : ((V = dr(l)), V !== null && ($.data = V)))),
          (V = th ? eh(t, l) : lh(t, l)) &&
            (($ = Cn(E, "onBeforeInput")),
            0 < $.length &&
              ((lt = new ir("onBeforeInput", "beforeinput", null, l, O)),
              D.push({ event: lt, listeners: $ }),
              (lt.data = V))),
          Kh(D, t, E, l, O));
      }
      ks(D, e);
    });
  }
  function vu(t, e, l) {
    return { instance: t, listener: e, currentTarget: l };
  }
  function Cn(t, e) {
    for (var l = e + "Capture", a = []; t !== null; ) {
      var u = t,
        n = u.stateNode;
      if (
        ((u = u.tag),
        (u !== 5 && u !== 26 && u !== 27) ||
          n === null ||
          ((u = Ha(t, l)),
          u != null && a.unshift(vu(t, u, n)),
          (u = Ha(t, e)),
          u != null && a.push(vu(t, u, n))),
        t.tag === 3)
      )
        return a;
      t = t.return;
    }
    return [];
  }
  function Ta(t) {
    if (t === null) return null;
    do t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function Fs(t, e, l, a, u) {
    for (var n = e._reactName, i = []; l !== null && l !== a; ) {
      var c = l,
        d = c.alternate,
        E = c.stateNode;
      if (((c = c.tag), d !== null && d === a)) break;
      ((c !== 5 && c !== 26 && c !== 27) ||
        E === null ||
        ((d = E),
        u
          ? ((E = Ha(l, n)), E != null && i.unshift(vu(l, E, d)))
          : u || ((E = Ha(l, n)), E != null && i.push(vu(l, E, d)))),
        (l = l.return));
    }
    i.length !== 0 && t.push({ event: e, listeners: i });
  }
  var Wh = /\r\n?/g,
    Fh = /\u0000|\uFFFD/g;
  function Ps(t) {
    return (typeof t == "string" ? t : "" + t)
      .replace(
        Wh,
        `
`
      )
      .replace(Fh, "");
  }
  function Is(t, e) {
    return ((e = Ps(e)), Ps(t) === e);
  }
  function Bn() {}
  function ht(t, e, l, a, u, n) {
    switch (l) {
      case "children":
        typeof a == "string"
          ? e === "body" || (e === "textarea" && a === "") || $l(t, a)
          : (typeof a == "number" || typeof a == "bigint") &&
            e !== "body" &&
            $l(t, "" + a);
        break;
      case "className":
        Lu(t, "class", a);
        break;
      case "tabIndex":
        Lu(t, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Lu(t, l, a);
        break;
      case "style":
        tr(t, a, n);
        break;
      case "data":
        if (e !== "object") {
          Lu(t, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (e !== "a" || l !== "href")) {
          t.removeAttribute(l);
          break;
        }
        if (
          a == null ||
          typeof a == "function" ||
          typeof a == "symbol" ||
          typeof a == "boolean"
        ) {
          t.removeAttribute(l);
          break;
        }
        ((a = Qu("" + a)), t.setAttribute(l, a));
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          t.setAttribute(
            l,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof n == "function" &&
            (l === "formAction"
              ? (e !== "input" && ht(t, e, "name", u.name, u, null),
                ht(t, e, "formEncType", u.formEncType, u, null),
                ht(t, e, "formMethod", u.formMethod, u, null),
                ht(t, e, "formTarget", u.formTarget, u, null))
              : (ht(t, e, "encType", u.encType, u, null),
                ht(t, e, "method", u.method, u, null),
                ht(t, e, "target", u.target, u, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          t.removeAttribute(l);
          break;
        }
        ((a = Qu("" + a)), t.setAttribute(l, a));
        break;
      case "onClick":
        a != null && (t.onclick = Bn);
        break;
      case "onScroll":
        a != null && ut("scroll", t);
        break;
      case "onScrollEnd":
        a != null && ut("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(r(61));
          if (((l = a.__html), l != null)) {
            if (u.children != null) throw Error(r(60));
            t.innerHTML = l;
          }
        }
        break;
      case "multiple":
        t.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        t.muted = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          a == null ||
          typeof a == "function" ||
          typeof a == "boolean" ||
          typeof a == "symbol"
        ) {
          t.removeAttribute("xlink:href");
          break;
        }
        ((l = Qu("" + a)),
          t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", l));
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        a != null && typeof a != "function" && typeof a != "symbol"
          ? t.setAttribute(l, "" + a)
          : t.removeAttribute(l);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        a && typeof a != "function" && typeof a != "symbol"
          ? t.setAttribute(l, "")
          : t.removeAttribute(l);
        break;
      case "capture":
      case "download":
        a === !0
          ? t.setAttribute(l, "")
          : a !== !1 &&
              a != null &&
              typeof a != "function" &&
              typeof a != "symbol"
            ? t.setAttribute(l, a)
            : t.removeAttribute(l);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null &&
        typeof a != "function" &&
        typeof a != "symbol" &&
        !isNaN(a) &&
        1 <= a
          ? t.setAttribute(l, a)
          : t.removeAttribute(l);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a)
          ? t.removeAttribute(l)
          : t.setAttribute(l, a);
        break;
      case "popover":
        (ut("beforetoggle", t), ut("toggle", t), Gu(t, "popover", a));
        break;
      case "xlinkActuate":
        xe(t, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
        break;
      case "xlinkArcrole":
        xe(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
        break;
      case "xlinkRole":
        xe(t, "http://www.w3.org/1999/xlink", "xlink:role", a);
        break;
      case "xlinkShow":
        xe(t, "http://www.w3.org/1999/xlink", "xlink:show", a);
        break;
      case "xlinkTitle":
        xe(t, "http://www.w3.org/1999/xlink", "xlink:title", a);
        break;
      case "xlinkType":
        xe(t, "http://www.w3.org/1999/xlink", "xlink:type", a);
        break;
      case "xmlBase":
        xe(t, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
        break;
      case "xmlLang":
        xe(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
        break;
      case "xmlSpace":
        xe(t, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
        break;
      case "is":
        Gu(t, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < l.length) ||
          (l[0] !== "o" && l[0] !== "O") ||
          (l[1] !== "n" && l[1] !== "N")) &&
          ((l = Md.get(l) || l), Gu(t, l, a));
    }
  }
  function tc(t, e, l, a, u, n) {
    switch (l) {
      case "style":
        tr(t, a, n);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(r(61));
          if (((l = a.__html), l != null)) {
            if (u.children != null) throw Error(r(60));
            t.innerHTML = l;
          }
        }
        break;
      case "children":
        typeof a == "string"
          ? $l(t, a)
          : (typeof a == "number" || typeof a == "bigint") && $l(t, "" + a);
        break;
      case "onScroll":
        a != null && ut("scroll", t);
        break;
      case "onScrollEnd":
        a != null && ut("scrollend", t);
        break;
      case "onClick":
        a != null && (t.onclick = Bn);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Zc.hasOwnProperty(l))
          t: {
            if (
              l[0] === "o" &&
              l[1] === "n" &&
              ((u = l.endsWith("Capture")),
              (e = l.slice(2, u ? l.length - 7 : void 0)),
              (n = t[kt] || null),
              (n = n != null ? n[l] : null),
              typeof n == "function" && t.removeEventListener(e, n, u),
              typeof a == "function")
            ) {
              (typeof n != "function" &&
                n !== null &&
                (l in t
                  ? (t[l] = null)
                  : t.hasAttribute(l) && t.removeAttribute(l)),
                t.addEventListener(e, a, u));
              break t;
            }
            l in t
              ? (t[l] = a)
              : a === !0
                ? t.setAttribute(l, "")
                : Gu(t, l, a);
          }
    }
  }
  function Xt(t, e, l) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        (ut("error", t), ut("load", t));
        var a = !1,
          u = !1,
          n;
        for (n in l)
          if (l.hasOwnProperty(n)) {
            var i = l[n];
            if (i != null)
              switch (n) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  u = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(r(137, e));
                default:
                  ht(t, e, n, i, l, null);
              }
          }
        (u && ht(t, e, "srcSet", l.srcSet, l, null),
          a && ht(t, e, "src", l.src, l, null));
        return;
      case "input":
        ut("invalid", t);
        var c = (n = i = u = null),
          d = null,
          E = null;
        for (a in l)
          if (l.hasOwnProperty(a)) {
            var O = l[a];
            if (O != null)
              switch (a) {
                case "name":
                  u = O;
                  break;
                case "type":
                  i = O;
                  break;
                case "checked":
                  d = O;
                  break;
                case "defaultChecked":
                  E = O;
                  break;
                case "value":
                  n = O;
                  break;
                case "defaultValue":
                  c = O;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (O != null) throw Error(r(137, e));
                  break;
                default:
                  ht(t, e, a, O, l, null);
              }
          }
        (Wc(t, n, c, d, E, i, u, !1), Xu(t));
        return;
      case "select":
        (ut("invalid", t), (a = i = n = null));
        for (u in l)
          if (l.hasOwnProperty(u) && ((c = l[u]), c != null))
            switch (u) {
              case "value":
                n = c;
                break;
              case "defaultValue":
                i = c;
                break;
              case "multiple":
                a = c;
              default:
                ht(t, e, u, c, l, null);
            }
        ((e = n),
          (l = i),
          (t.multiple = !!a),
          e != null ? Jl(t, !!a, e, !1) : l != null && Jl(t, !!a, l, !0));
        return;
      case "textarea":
        (ut("invalid", t), (n = u = a = null));
        for (i in l)
          if (l.hasOwnProperty(i) && ((c = l[i]), c != null))
            switch (i) {
              case "value":
                a = c;
                break;
              case "defaultValue":
                u = c;
                break;
              case "children":
                n = c;
                break;
              case "dangerouslySetInnerHTML":
                if (c != null) throw Error(r(91));
                break;
              default:
                ht(t, e, i, c, l, null);
            }
        (Pc(t, a, u, n), Xu(t));
        return;
      case "option":
        for (d in l)
          if (l.hasOwnProperty(d) && ((a = l[d]), a != null))
            switch (d) {
              case "selected":
                t.selected =
                  a && typeof a != "function" && typeof a != "symbol";
                break;
              default:
                ht(t, e, d, a, l, null);
            }
        return;
      case "dialog":
        (ut("beforetoggle", t),
          ut("toggle", t),
          ut("cancel", t),
          ut("close", t));
        break;
      case "iframe":
      case "object":
        ut("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < mu.length; a++) ut(mu[a], t);
        break;
      case "image":
        (ut("error", t), ut("load", t));
        break;
      case "details":
        ut("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        (ut("error", t), ut("load", t));
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (E in l)
          if (l.hasOwnProperty(E) && ((a = l[E]), a != null))
            switch (E) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(r(137, e));
              default:
                ht(t, e, E, a, l, null);
            }
        return;
      default:
        if (vi(e)) {
          for (O in l)
            l.hasOwnProperty(O) &&
              ((a = l[O]), a !== void 0 && tc(t, e, O, a, l, void 0));
          return;
        }
    }
    for (c in l)
      l.hasOwnProperty(c) && ((a = l[c]), a != null && ht(t, e, c, a, l, null));
  }
  function Ph(t, e, l, a) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var u = null,
          n = null,
          i = null,
          c = null,
          d = null,
          E = null,
          O = null;
        for (A in l) {
          var D = l[A];
          if (l.hasOwnProperty(A) && D != null)
            switch (A) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                d = D;
              default:
                a.hasOwnProperty(A) || ht(t, e, A, null, a, D);
            }
        }
        for (var T in a) {
          var A = a[T];
          if (((D = l[T]), a.hasOwnProperty(T) && (A != null || D != null)))
            switch (T) {
              case "type":
                n = A;
                break;
              case "name":
                u = A;
                break;
              case "checked":
                E = A;
                break;
              case "defaultChecked":
                O = A;
                break;
              case "value":
                i = A;
                break;
              case "defaultValue":
                c = A;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (A != null) throw Error(r(137, e));
                break;
              default:
                A !== D && ht(t, e, T, A, a, D);
            }
        }
        hi(t, i, c, d, E, O, n, u);
        return;
      case "select":
        A = i = c = T = null;
        for (n in l)
          if (((d = l[n]), l.hasOwnProperty(n) && d != null))
            switch (n) {
              case "value":
                break;
              case "multiple":
                A = d;
              default:
                a.hasOwnProperty(n) || ht(t, e, n, null, a, d);
            }
        for (u in a)
          if (
            ((n = a[u]),
            (d = l[u]),
            a.hasOwnProperty(u) && (n != null || d != null))
          )
            switch (u) {
              case "value":
                T = n;
                break;
              case "defaultValue":
                c = n;
                break;
              case "multiple":
                i = n;
              default:
                n !== d && ht(t, e, u, n, a, d);
            }
        ((e = c),
          (l = i),
          (a = A),
          T != null
            ? Jl(t, !!l, T, !1)
            : !!a != !!l &&
              (e != null ? Jl(t, !!l, e, !0) : Jl(t, !!l, l ? [] : "", !1)));
        return;
      case "textarea":
        A = T = null;
        for (c in l)
          if (
            ((u = l[c]),
            l.hasOwnProperty(c) && u != null && !a.hasOwnProperty(c))
          )
            switch (c) {
              case "value":
                break;
              case "children":
                break;
              default:
                ht(t, e, c, null, a, u);
            }
        for (i in a)
          if (
            ((u = a[i]),
            (n = l[i]),
            a.hasOwnProperty(i) && (u != null || n != null))
          )
            switch (i) {
              case "value":
                T = u;
                break;
              case "defaultValue":
                A = u;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (u != null) throw Error(r(91));
                break;
              default:
                u !== n && ht(t, e, i, u, a, n);
            }
        Fc(t, T, A);
        return;
      case "option":
        for (var W in l)
          if (
            ((T = l[W]),
            l.hasOwnProperty(W) && T != null && !a.hasOwnProperty(W))
          )
            switch (W) {
              case "selected":
                t.selected = !1;
                break;
              default:
                ht(t, e, W, null, a, T);
            }
        for (d in a)
          if (
            ((T = a[d]),
            (A = l[d]),
            a.hasOwnProperty(d) && T !== A && (T != null || A != null))
          )
            switch (d) {
              case "selected":
                t.selected =
                  T && typeof T != "function" && typeof T != "symbol";
                break;
              default:
                ht(t, e, d, T, a, A);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var J in l)
          ((T = l[J]),
            l.hasOwnProperty(J) &&
              T != null &&
              !a.hasOwnProperty(J) &&
              ht(t, e, J, null, a, T));
        for (E in a)
          if (
            ((T = a[E]),
            (A = l[E]),
            a.hasOwnProperty(E) && T !== A && (T != null || A != null))
          )
            switch (E) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (T != null) throw Error(r(137, e));
                break;
              default:
                ht(t, e, E, T, a, A);
            }
        return;
      default:
        if (vi(e)) {
          for (var mt in l)
            ((T = l[mt]),
              l.hasOwnProperty(mt) &&
                T !== void 0 &&
                !a.hasOwnProperty(mt) &&
                tc(t, e, mt, void 0, a, T));
          for (O in a)
            ((T = a[O]),
              (A = l[O]),
              !a.hasOwnProperty(O) ||
                T === A ||
                (T === void 0 && A === void 0) ||
                tc(t, e, O, T, a, A));
          return;
        }
    }
    for (var S in l)
      ((T = l[S]),
        l.hasOwnProperty(S) &&
          T != null &&
          !a.hasOwnProperty(S) &&
          ht(t, e, S, null, a, T));
    for (D in a)
      ((T = a[D]),
        (A = l[D]),
        !a.hasOwnProperty(D) ||
          T === A ||
          (T == null && A == null) ||
          ht(t, e, D, T, a, A));
  }
  var ec = null,
    lc = null;
  function qn(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function t0(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function e0(t, e) {
    if (t === 0)
      switch (e) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && e === "foreignObject" ? 0 : t;
  }
  function ac(t, e) {
    return (
      t === "textarea" ||
      t === "noscript" ||
      typeof e.children == "string" ||
      typeof e.children == "number" ||
      typeof e.children == "bigint" ||
      (typeof e.dangerouslySetInnerHTML == "object" &&
        e.dangerouslySetInnerHTML !== null &&
        e.dangerouslySetInnerHTML.__html != null)
    );
  }
  var uc = null;
  function Ih() {
    var t = window.event;
    return t && t.type === "popstate"
      ? t === uc
        ? !1
        : ((uc = t), !0)
      : ((uc = null), !1);
  }
  var l0 = typeof setTimeout == "function" ? setTimeout : void 0,
    tm = typeof clearTimeout == "function" ? clearTimeout : void 0,
    a0 = typeof Promise == "function" ? Promise : void 0,
    em =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof a0 < "u"
          ? function (t) {
              return a0.resolve(null).then(t).catch(lm);
            }
          : l0;
  function lm(t) {
    setTimeout(function () {
      throw t;
    });
  }
  function ml(t) {
    return t === "head";
  }
  function u0(t, e) {
    var l = e,
      a = 0,
      u = 0;
    do {
      var n = l.nextSibling;
      if ((t.removeChild(l), n && n.nodeType === 8))
        if (((l = n.data), l === "/$")) {
          if (0 < a && 8 > a) {
            l = a;
            var i = t.ownerDocument;
            if ((l & 1 && yu(i.documentElement), l & 2 && yu(i.body), l & 4))
              for (l = i.head, yu(l), i = l.firstChild; i; ) {
                var c = i.nextSibling,
                  d = i.nodeName;
                (i[xa] ||
                  d === "SCRIPT" ||
                  d === "STYLE" ||
                  (d === "LINK" && i.rel.toLowerCase() === "stylesheet") ||
                  l.removeChild(i),
                  (i = c));
              }
          }
          if (u === 0) {
            (t.removeChild(n), Ru(e));
            return;
          }
          u--;
        } else
          l === "$" || l === "$?" || l === "$!"
            ? u++
            : (a = l.charCodeAt(0) - 48);
      else a = 0;
      l = n;
    } while (l);
    Ru(e);
  }
  function nc(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var l = e;
      switch (((e = e.nextSibling), l.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          (nc(l), ri(l));
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (l.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(l);
    }
  }
  function am(t, e, l, a) {
    for (; t.nodeType === 1; ) {
      var u = l;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!a && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
      } else if (a) {
        if (!t[xa])
          switch (e) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (
                ((n = t.getAttribute("rel")),
                n === "stylesheet" && t.hasAttribute("data-precedence"))
              )
                break;
              if (
                n !== u.rel ||
                t.getAttribute("href") !==
                  (u.href == null || u.href === "" ? null : u.href) ||
                t.getAttribute("crossorigin") !==
                  (u.crossOrigin == null ? null : u.crossOrigin) ||
                t.getAttribute("title") !== (u.title == null ? null : u.title)
              )
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (
                ((n = t.getAttribute("src")),
                (n !== (u.src == null ? null : u.src) ||
                  t.getAttribute("type") !== (u.type == null ? null : u.type) ||
                  t.getAttribute("crossorigin") !==
                    (u.crossOrigin == null ? null : u.crossOrigin)) &&
                  n &&
                  t.hasAttribute("async") &&
                  !t.hasAttribute("itemprop"))
              )
                break;
              return t;
            default:
              return t;
          }
      } else if (e === "input" && t.type === "hidden") {
        var n = u.name == null ? null : "" + u.name;
        if (u.type === "hidden" && t.getAttribute("name") === n) return t;
      } else return t;
      if (((t = Te(t.nextSibling)), t === null)) break;
    }
    return null;
  }
  function um(t, e, l) {
    if (e === "") return null;
    for (; t.nodeType !== 3; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") &&
          !l) ||
        ((t = Te(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function ic(t) {
    return (
      t.data === "$!" ||
      (t.data === "$?" && t.ownerDocument.readyState === "complete")
    );
  }
  function nm(t, e) {
    var l = t.ownerDocument;
    if (t.data !== "$?" || l.readyState === "complete") e();
    else {
      var a = function () {
        (e(), l.removeEventListener("DOMContentLoaded", a));
      };
      (l.addEventListener("DOMContentLoaded", a), (t._reactRetry = a));
    }
  }
  function Te(t) {
    for (; t != null; t = t.nextSibling) {
      var e = t.nodeType;
      if (e === 1 || e === 3) break;
      if (e === 8) {
        if (
          ((e = t.data),
          e === "$" || e === "$!" || e === "$?" || e === "F!" || e === "F")
        )
          break;
        if (e === "/$") return null;
      }
    }
    return t;
  }
  var fc = null;
  function n0(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var l = t.data;
        if (l === "$" || l === "$!" || l === "$?") {
          if (e === 0) return t;
          e--;
        } else l === "/$" && e++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function i0(t, e, l) {
    switch (((e = qn(l)), t)) {
      case "html":
        if (((t = e.documentElement), !t)) throw Error(r(452));
        return t;
      case "head":
        if (((t = e.head), !t)) throw Error(r(453));
        return t;
      case "body":
        if (((t = e.body), !t)) throw Error(r(454));
        return t;
      default:
        throw Error(r(451));
    }
  }
  function yu(t) {
    for (var e = t.attributes; e.length; ) t.removeAttributeNode(e[0]);
    ri(t);
  }
  var pe = new Map(),
    f0 = new Set();
  function Yn(t) {
    return typeof t.getRootNode == "function"
      ? t.getRootNode()
      : t.nodeType === 9
        ? t
        : t.ownerDocument;
  }
  var Ve = G.d;
  G.d = { f: im, r: fm, D: cm, C: rm, L: om, m: sm, X: hm, S: dm, M: mm };
  function im() {
    var t = Ve.f(),
      e = _n();
    return t || e;
  }
  function fm(t) {
    var e = Zl(t);
    e !== null && e.tag === 5 && e.type === "form" ? Mo(e) : Ve.r(t);
  }
  var Aa = typeof document > "u" ? null : document;
  function c0(t, e, l) {
    var a = Aa;
    if (a && typeof e == "string" && e) {
      var u = de(e);
      ((u = 'link[rel="' + t + '"][href="' + u + '"]'),
        typeof l == "string" && (u += '[crossorigin="' + l + '"]'),
        f0.has(u) ||
          (f0.add(u),
          (t = { rel: t, crossOrigin: l, href: e }),
          a.querySelector(u) === null &&
            ((e = a.createElement("link")),
            Xt(e, "link", t),
            Ct(e),
            a.head.appendChild(e))));
    }
  }
  function cm(t) {
    (Ve.D(t), c0("dns-prefetch", t, null));
  }
  function rm(t, e) {
    (Ve.C(t, e), c0("preconnect", t, e));
  }
  function om(t, e, l) {
    Ve.L(t, e, l);
    var a = Aa;
    if (a && t && e) {
      var u = 'link[rel="preload"][as="' + de(e) + '"]';
      e === "image" && l && l.imageSrcSet
        ? ((u += '[imagesrcset="' + de(l.imageSrcSet) + '"]'),
          typeof l.imageSizes == "string" &&
            (u += '[imagesizes="' + de(l.imageSizes) + '"]'))
        : (u += '[href="' + de(t) + '"]');
      var n = u;
      switch (e) {
        case "style":
          n = Ra(t);
          break;
        case "script":
          n = za(t);
      }
      pe.has(n) ||
        ((t = z(
          {
            rel: "preload",
            href: e === "image" && l && l.imageSrcSet ? void 0 : t,
            as: e,
          },
          l
        )),
        pe.set(n, t),
        a.querySelector(u) !== null ||
          (e === "style" && a.querySelector(gu(n))) ||
          (e === "script" && a.querySelector(Su(n))) ||
          ((e = a.createElement("link")),
          Xt(e, "link", t),
          Ct(e),
          a.head.appendChild(e)));
    }
  }
  function sm(t, e) {
    Ve.m(t, e);
    var l = Aa;
    if (l && t) {
      var a = e && typeof e.as == "string" ? e.as : "script",
        u =
          'link[rel="modulepreload"][as="' + de(a) + '"][href="' + de(t) + '"]',
        n = u;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          n = za(t);
      }
      if (
        !pe.has(n) &&
        ((t = z({ rel: "modulepreload", href: t }, e)),
        pe.set(n, t),
        l.querySelector(u) === null)
      ) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (l.querySelector(Su(n))) return;
        }
        ((a = l.createElement("link")),
          Xt(a, "link", t),
          Ct(a),
          l.head.appendChild(a));
      }
    }
  }
  function dm(t, e, l) {
    Ve.S(t, e, l);
    var a = Aa;
    if (a && t) {
      var u = wl(a).hoistableStyles,
        n = Ra(t);
      e = e || "default";
      var i = u.get(n);
      if (!i) {
        var c = { loading: 0, preload: null };
        if ((i = a.querySelector(gu(n)))) c.loading = 5;
        else {
          ((t = z({ rel: "stylesheet", href: t, "data-precedence": e }, l)),
            (l = pe.get(n)) && cc(t, l));
          var d = (i = a.createElement("link"));
          (Ct(d),
            Xt(d, "link", t),
            (d._p = new Promise(function (E, O) {
              ((d.onload = E), (d.onerror = O));
            })),
            d.addEventListener("load", function () {
              c.loading |= 1;
            }),
            d.addEventListener("error", function () {
              c.loading |= 2;
            }),
            (c.loading |= 4),
            Gn(i, e, a));
        }
        ((i = { type: "stylesheet", instance: i, count: 1, state: c }),
          u.set(n, i));
      }
    }
  }
  function hm(t, e) {
    Ve.X(t, e);
    var l = Aa;
    if (l && t) {
      var a = wl(l).hoistableScripts,
        u = za(t),
        n = a.get(u);
      n ||
        ((n = l.querySelector(Su(u))),
        n ||
          ((t = z({ src: t, async: !0 }, e)),
          (e = pe.get(u)) && rc(t, e),
          (n = l.createElement("script")),
          Ct(n),
          Xt(n, "link", t),
          l.head.appendChild(n)),
        (n = { type: "script", instance: n, count: 1, state: null }),
        a.set(u, n));
    }
  }
  function mm(t, e) {
    Ve.M(t, e);
    var l = Aa;
    if (l && t) {
      var a = wl(l).hoistableScripts,
        u = za(t),
        n = a.get(u);
      n ||
        ((n = l.querySelector(Su(u))),
        n ||
          ((t = z({ src: t, async: !0, type: "module" }, e)),
          (e = pe.get(u)) && rc(t, e),
          (n = l.createElement("script")),
          Ct(n),
          Xt(n, "link", t),
          l.head.appendChild(n)),
        (n = { type: "script", instance: n, count: 1, state: null }),
        a.set(u, n));
    }
  }
  function r0(t, e, l, a) {
    var u = (u = I.current) ? Yn(u) : null;
    if (!u) throw Error(r(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof l.precedence == "string" && typeof l.href == "string"
          ? ((e = Ra(l.href)),
            (l = wl(u).hoistableStyles),
            (a = l.get(e)),
            a ||
              ((a = { type: "style", instance: null, count: 0, state: null }),
              l.set(e, a)),
            a)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          l.rel === "stylesheet" &&
          typeof l.href == "string" &&
          typeof l.precedence == "string"
        ) {
          t = Ra(l.href);
          var n = wl(u).hoistableStyles,
            i = n.get(t);
          if (
            (i ||
              ((u = u.ownerDocument || u),
              (i = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              n.set(t, i),
              (n = u.querySelector(gu(t))) &&
                !n._p &&
                ((i.instance = n), (i.state.loading = 5)),
              pe.has(t) ||
                ((l = {
                  rel: "preload",
                  as: "style",
                  href: l.href,
                  crossOrigin: l.crossOrigin,
                  integrity: l.integrity,
                  media: l.media,
                  hrefLang: l.hrefLang,
                  referrerPolicy: l.referrerPolicy,
                }),
                pe.set(t, l),
                n || vm(u, t, l, i.state))),
            e && a === null)
          )
            throw Error(r(528, ""));
          return i;
        }
        if (e && a !== null) throw Error(r(529, ""));
        return null;
      case "script":
        return (
          (e = l.async),
          (l = l.src),
          typeof l == "string" &&
          e &&
          typeof e != "function" &&
          typeof e != "symbol"
            ? ((e = za(l)),
              (l = wl(u).hoistableScripts),
              (a = l.get(e)),
              a ||
                ((a = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                l.set(e, a)),
              a)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(r(444, t));
    }
  }
  function Ra(t) {
    return 'href="' + de(t) + '"';
  }
  function gu(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function o0(t) {
    return z({}, t, { "data-precedence": t.precedence, precedence: null });
  }
  function vm(t, e, l, a) {
    t.querySelector('link[rel="preload"][as="style"][' + e + "]")
      ? (a.loading = 1)
      : ((e = t.createElement("link")),
        (a.preload = e),
        e.addEventListener("load", function () {
          return (a.loading |= 1);
        }),
        e.addEventListener("error", function () {
          return (a.loading |= 2);
        }),
        Xt(e, "link", l),
        Ct(e),
        t.head.appendChild(e));
  }
  function za(t) {
    return '[src="' + de(t) + '"]';
  }
  function Su(t) {
    return "script[async]" + t;
  }
  function s0(t, e, l) {
    if ((e.count++, e.instance === null))
      switch (e.type) {
        case "style":
          var a = t.querySelector('style[data-href~="' + de(l.href) + '"]');
          if (a) return ((e.instance = a), Ct(a), a);
          var u = z({}, l, {
            "data-href": l.href,
            "data-precedence": l.precedence,
            href: null,
            precedence: null,
          });
          return (
            (a = (t.ownerDocument || t).createElement("style")),
            Ct(a),
            Xt(a, "style", u),
            Gn(a, l.precedence, t),
            (e.instance = a)
          );
        case "stylesheet":
          u = Ra(l.href);
          var n = t.querySelector(gu(u));
          if (n) return ((e.state.loading |= 4), (e.instance = n), Ct(n), n);
          ((a = o0(l)),
            (u = pe.get(u)) && cc(a, u),
            (n = (t.ownerDocument || t).createElement("link")),
            Ct(n));
          var i = n;
          return (
            (i._p = new Promise(function (c, d) {
              ((i.onload = c), (i.onerror = d));
            })),
            Xt(n, "link", a),
            (e.state.loading |= 4),
            Gn(n, l.precedence, t),
            (e.instance = n)
          );
        case "script":
          return (
            (n = za(l.src)),
            (u = t.querySelector(Su(n)))
              ? ((e.instance = u), Ct(u), u)
              : ((a = l),
                (u = pe.get(n)) && ((a = z({}, l)), rc(a, u)),
                (t = t.ownerDocument || t),
                (u = t.createElement("script")),
                Ct(u),
                Xt(u, "link", a),
                t.head.appendChild(u),
                (e.instance = u))
          );
        case "void":
          return null;
        default:
          throw Error(r(443, e.type));
      }
    else
      e.type === "stylesheet" &&
        (e.state.loading & 4) === 0 &&
        ((a = e.instance), (e.state.loading |= 4), Gn(a, l.precedence, t));
    return e.instance;
  }
  function Gn(t, e, l) {
    for (
      var a = l.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]'
        ),
        u = a.length ? a[a.length - 1] : null,
        n = u,
        i = 0;
      i < a.length;
      i++
    ) {
      var c = a[i];
      if (c.dataset.precedence === e) n = c;
      else if (n !== u) break;
    }
    n
      ? n.parentNode.insertBefore(t, n.nextSibling)
      : ((e = l.nodeType === 9 ? l.head : l), e.insertBefore(t, e.firstChild));
  }
  function cc(t, e) {
    (t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.title == null && (t.title = e.title));
  }
  function rc(t, e) {
    (t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.integrity == null && (t.integrity = e.integrity));
  }
  var Ln = null;
  function d0(t, e, l) {
    if (Ln === null) {
      var a = new Map(),
        u = (Ln = new Map());
      u.set(l, a);
    } else ((u = Ln), (a = u.get(l)), a || ((a = new Map()), u.set(l, a)));
    if (a.has(t)) return a;
    for (
      a.set(t, null), l = l.getElementsByTagName(t), u = 0;
      u < l.length;
      u++
    ) {
      var n = l[u];
      if (
        !(
          n[xa] ||
          n[Zt] ||
          (t === "link" && n.getAttribute("rel") === "stylesheet")
        ) &&
        n.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var i = n.getAttribute(e) || "";
        i = t + i;
        var c = a.get(i);
        c ? c.push(n) : a.set(i, [n]);
      }
    }
    return a;
  }
  function h0(t, e, l) {
    ((t = t.ownerDocument || t),
      t.head.insertBefore(
        l,
        e === "title" ? t.querySelector("head > title") : null
      ));
  }
  function ym(t, e, l) {
    if (l === 1 || e.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof e.precedence != "string" ||
          typeof e.href != "string" ||
          e.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof e.rel != "string" ||
          typeof e.href != "string" ||
          e.href === "" ||
          e.onLoad ||
          e.onError
        )
          break;
        switch (e.rel) {
          case "stylesheet":
            return (
              (t = e.disabled),
              typeof e.precedence == "string" && t == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          e.async &&
          typeof e.async != "function" &&
          typeof e.async != "symbol" &&
          !e.onLoad &&
          !e.onError &&
          e.src &&
          typeof e.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function m0(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  var pu = null;
  function gm() {}
  function Sm(t, e, l) {
    if (pu === null) throw Error(r(475));
    var a = pu;
    if (
      e.type === "stylesheet" &&
      (typeof l.media != "string" || matchMedia(l.media).matches !== !1) &&
      (e.state.loading & 4) === 0
    ) {
      if (e.instance === null) {
        var u = Ra(l.href),
          n = t.querySelector(gu(u));
        if (n) {
          ((t = n._p),
            t !== null &&
              typeof t == "object" &&
              typeof t.then == "function" &&
              (a.count++, (a = Xn.bind(a)), t.then(a, a)),
            (e.state.loading |= 4),
            (e.instance = n),
            Ct(n));
          return;
        }
        ((n = t.ownerDocument || t),
          (l = o0(l)),
          (u = pe.get(u)) && cc(l, u),
          (n = n.createElement("link")),
          Ct(n));
        var i = n;
        ((i._p = new Promise(function (c, d) {
          ((i.onload = c), (i.onerror = d));
        })),
          Xt(n, "link", l),
          (e.instance = n));
      }
      (a.stylesheets === null && (a.stylesheets = new Map()),
        a.stylesheets.set(e, t),
        (t = e.state.preload) &&
          (e.state.loading & 3) === 0 &&
          (a.count++,
          (e = Xn.bind(a)),
          t.addEventListener("load", e),
          t.addEventListener("error", e)));
    }
  }
  function pm() {
    if (pu === null) throw Error(r(475));
    var t = pu;
    return (
      t.stylesheets && t.count === 0 && oc(t, t.stylesheets),
      0 < t.count
        ? function (e) {
            var l = setTimeout(function () {
              if ((t.stylesheets && oc(t, t.stylesheets), t.unsuspend)) {
                var a = t.unsuspend;
                ((t.unsuspend = null), a());
              }
            }, 6e4);
            return (
              (t.unsuspend = e),
              function () {
                ((t.unsuspend = null), clearTimeout(l));
              }
            );
          }
        : null
    );
  }
  function Xn() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) oc(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        ((this.unsuspend = null), t());
      }
    }
  }
  var jn = null;
  function oc(t, e) {
    ((t.stylesheets = null),
      t.unsuspend !== null &&
        (t.count++,
        (jn = new Map()),
        e.forEach(bm, t),
        (jn = null),
        Xn.call(t)));
  }
  function bm(t, e) {
    if (!(e.state.loading & 4)) {
      var l = jn.get(t);
      if (l) var a = l.get(null);
      else {
        ((l = new Map()), jn.set(t, l));
        for (
          var u = t.querySelectorAll(
              "link[data-precedence],style[data-precedence]"
            ),
            n = 0;
          n < u.length;
          n++
        ) {
          var i = u[n];
          (i.nodeName === "LINK" || i.getAttribute("media") !== "not all") &&
            (l.set(i.dataset.precedence, i), (a = i));
        }
        a && l.set(null, a);
      }
      ((u = e.instance),
        (i = u.getAttribute("data-precedence")),
        (n = l.get(i) || a),
        n === a && l.set(null, u),
        l.set(i, u),
        this.count++,
        (a = Xn.bind(this)),
        u.addEventListener("load", a),
        u.addEventListener("error", a),
        n
          ? n.parentNode.insertBefore(u, n.nextSibling)
          : ((t = t.nodeType === 9 ? t.head : t),
            t.insertBefore(u, t.firstChild)),
        (e.state.loading |= 4));
    }
  }
  var bu = {
    $$typeof: F,
    Provider: null,
    Consumer: null,
    _currentValue: k,
    _currentValue2: k,
    _threadCount: 0,
  };
  function Em(t, e, l, a, u, n, i, c) {
    ((this.tag = 1),
      (this.containerInfo = t),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = ni(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = ni(0)),
      (this.hiddenUpdates = ni(null)),
      (this.identifierPrefix = a),
      (this.onUncaughtError = u),
      (this.onCaughtError = n),
      (this.onRecoverableError = i),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = c),
      (this.incompleteTransitions = new Map()));
  }
  function v0(t, e, l, a, u, n, i, c, d, E, O, D) {
    return (
      (t = new Em(t, e, l, i, c, d, E, D)),
      (e = 1),
      n === !0 && (e |= 24),
      (n = ue(3, null, null, e)),
      (t.current = n),
      (n.stateNode = t),
      (e = wi()),
      e.refCount++,
      (t.pooledCache = e),
      e.refCount++,
      (n.memoizedState = { element: a, isDehydrated: l, cache: e }),
      $i(n),
      t
    );
  }
  function y0(t) {
    return t ? ((t = la), t) : la;
  }
  function g0(t, e, l, a, u, n) {
    ((u = y0(u)),
      a.context === null ? (a.context = u) : (a.pendingContext = u),
      (a = el(e)),
      (a.payload = { element: l }),
      (n = n === void 0 ? null : n),
      n !== null && (a.callback = n),
      (l = ll(t, a, e)),
      l !== null && (re(l, t, e), Wa(l, t, e)));
  }
  function S0(t, e) {
    if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
      var l = t.retryLane;
      t.retryLane = l !== 0 && l < e ? l : e;
    }
  }
  function sc(t, e) {
    (S0(t, e), (t = t.alternate) && S0(t, e));
  }
  function p0(t) {
    if (t.tag === 13) {
      var e = ea(t, 67108864);
      (e !== null && re(e, t, 67108864), sc(t, 67108864));
    }
  }
  var Qn = !0;
  function Tm(t, e, l, a) {
    var u = M.T;
    M.T = null;
    var n = G.p;
    try {
      ((G.p = 2), dc(t, e, l, a));
    } finally {
      ((G.p = n), (M.T = u));
    }
  }
  function Am(t, e, l, a) {
    var u = M.T;
    M.T = null;
    var n = G.p;
    try {
      ((G.p = 8), dc(t, e, l, a));
    } finally {
      ((G.p = n), (M.T = u));
    }
  }
  function dc(t, e, l, a) {
    if (Qn) {
      var u = hc(a);
      if (u === null) (If(t, e, a, Zn, l), E0(t, a));
      else if (zm(u, t, e, l, a)) a.stopPropagation();
      else if ((E0(t, a), e & 4 && -1 < Rm.indexOf(t))) {
        for (; u !== null; ) {
          var n = Zl(u);
          if (n !== null)
            switch (n.tag) {
              case 3:
                if (((n = n.stateNode), n.current.memoizedState.isDehydrated)) {
                  var i = Tl(n.pendingLanes);
                  if (i !== 0) {
                    var c = n;
                    for (c.pendingLanes |= 2, c.entangledLanes |= 2; i; ) {
                      var d = 1 << (31 - le(i));
                      ((c.entanglements[1] |= d), (i &= ~d));
                    }
                    (_e(n), (ot & 6) === 0 && ((On = Ae() + 500), hu(0)));
                  }
                }
                break;
              case 13:
                ((c = ea(n, 2)), c !== null && re(c, n, 2), _n(), sc(n, 2));
            }
          if (((n = hc(a)), n === null && If(t, e, a, Zn, l), n === u)) break;
          u = n;
        }
        u !== null && a.stopPropagation();
      } else If(t, e, a, null, l);
    }
  }
  function hc(t) {
    return ((t = gi(t)), mc(t));
  }
  var Zn = null;
  function mc(t) {
    if (((Zn = null), (t = Ql(t)), t !== null)) {
      var e = g(t);
      if (e === null) t = null;
      else {
        var l = e.tag;
        if (l === 13) {
          if (((t = R(e)), t !== null)) return t;
          t = null;
        } else if (l === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated)
            return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return ((Zn = t), null);
  }
  function b0(t) {
    switch (t) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (rd()) {
          case Hc:
            return 2;
          case Cc:
            return 8;
          case Cu:
          case od:
            return 32;
          case Bc:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var vc = !1,
    vl = null,
    yl = null,
    gl = null,
    Eu = new Map(),
    Tu = new Map(),
    Sl = [],
    Rm =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " "
      );
  function E0(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        vl = null;
        break;
      case "dragenter":
      case "dragleave":
        yl = null;
        break;
      case "mouseover":
      case "mouseout":
        gl = null;
        break;
      case "pointerover":
      case "pointerout":
        Eu.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Tu.delete(e.pointerId);
    }
  }
  function Au(t, e, l, a, u, n) {
    return t === null || t.nativeEvent !== n
      ? ((t = {
          blockedOn: e,
          domEventName: l,
          eventSystemFlags: a,
          nativeEvent: n,
          targetContainers: [u],
        }),
        e !== null && ((e = Zl(e)), e !== null && p0(e)),
        t)
      : ((t.eventSystemFlags |= a),
        (e = t.targetContainers),
        u !== null && e.indexOf(u) === -1 && e.push(u),
        t);
  }
  function zm(t, e, l, a, u) {
    switch (e) {
      case "focusin":
        return ((vl = Au(vl, t, e, l, a, u)), !0);
      case "dragenter":
        return ((yl = Au(yl, t, e, l, a, u)), !0);
      case "mouseover":
        return ((gl = Au(gl, t, e, l, a, u)), !0);
      case "pointerover":
        var n = u.pointerId;
        return (Eu.set(n, Au(Eu.get(n) || null, t, e, l, a, u)), !0);
      case "gotpointercapture":
        return (
          (n = u.pointerId),
          Tu.set(n, Au(Tu.get(n) || null, t, e, l, a, u)),
          !0
        );
    }
    return !1;
  }
  function T0(t) {
    var e = Ql(t.target);
    if (e !== null) {
      var l = g(e);
      if (l !== null) {
        if (((e = l.tag), e === 13)) {
          if (((e = R(l)), e !== null)) {
            ((t.blockedOn = e),
              Sd(t.priority, function () {
                if (l.tag === 13) {
                  var a = ce();
                  a = ii(a);
                  var u = ea(l, a);
                  (u !== null && re(u, l, a), sc(l, a));
                }
              }));
            return;
          }
        } else if (e === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function wn(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var l = hc(t.nativeEvent);
      if (l === null) {
        l = t.nativeEvent;
        var a = new l.constructor(l.type, l);
        ((yi = a), l.target.dispatchEvent(a), (yi = null));
      } else return ((e = Zl(l)), e !== null && p0(e), (t.blockedOn = l), !1);
      e.shift();
    }
    return !0;
  }
  function A0(t, e, l) {
    wn(t) && l.delete(e);
  }
  function Om() {
    ((vc = !1),
      vl !== null && wn(vl) && (vl = null),
      yl !== null && wn(yl) && (yl = null),
      gl !== null && wn(gl) && (gl = null),
      Eu.forEach(A0),
      Tu.forEach(A0));
  }
  function Vn(t, e) {
    t.blockedOn === e &&
      ((t.blockedOn = null),
      vc ||
        ((vc = !0),
        f.unstable_scheduleCallback(f.unstable_NormalPriority, Om)));
  }
  var Kn = null;
  function R0(t) {
    Kn !== t &&
      ((Kn = t),
      f.unstable_scheduleCallback(f.unstable_NormalPriority, function () {
        Kn === t && (Kn = null);
        for (var e = 0; e < t.length; e += 3) {
          var l = t[e],
            a = t[e + 1],
            u = t[e + 2];
          if (typeof a != "function") {
            if (mc(a || l) === null) continue;
            break;
          }
          var n = Zl(l);
          n !== null &&
            (t.splice(e, 3),
            (e -= 3),
            mf(n, { pending: !0, data: u, method: l.method, action: a }, a, u));
        }
      }));
  }
  function Ru(t) {
    function e(d) {
      return Vn(d, t);
    }
    (vl !== null && Vn(vl, t),
      yl !== null && Vn(yl, t),
      gl !== null && Vn(gl, t),
      Eu.forEach(e),
      Tu.forEach(e));
    for (var l = 0; l < Sl.length; l++) {
      var a = Sl[l];
      a.blockedOn === t && (a.blockedOn = null);
    }
    for (; 0 < Sl.length && ((l = Sl[0]), l.blockedOn === null); )
      (T0(l), l.blockedOn === null && Sl.shift());
    if (((l = (t.ownerDocument || t).$$reactFormReplay), l != null))
      for (a = 0; a < l.length; a += 3) {
        var u = l[a],
          n = l[a + 1],
          i = u[kt] || null;
        if (typeof n == "function") i || R0(l);
        else if (i) {
          var c = null;
          if (n && n.hasAttribute("formAction")) {
            if (((u = n), (i = n[kt] || null))) c = i.formAction;
            else if (mc(u) !== null) continue;
          } else c = i.action;
          (typeof c == "function" ? (l[a + 1] = c) : (l.splice(a, 3), (a -= 3)),
            R0(l));
        }
      }
  }
  function yc(t) {
    this._internalRoot = t;
  }
  ((Jn.prototype.render = yc.prototype.render =
    function (t) {
      var e = this._internalRoot;
      if (e === null) throw Error(r(409));
      var l = e.current,
        a = ce();
      g0(l, a, t, e, null, null);
    }),
    (Jn.prototype.unmount = yc.prototype.unmount =
      function () {
        var t = this._internalRoot;
        if (t !== null) {
          this._internalRoot = null;
          var e = t.containerInfo;
          (g0(t.current, 2, null, t, null, null), _n(), (e[jl] = null));
        }
      }));
  function Jn(t) {
    this._internalRoot = t;
  }
  Jn.prototype.unstable_scheduleHydration = function (t) {
    if (t) {
      var e = Xc();
      t = { blockedOn: null, target: t, priority: e };
      for (var l = 0; l < Sl.length && e !== 0 && e < Sl[l].priority; l++);
      (Sl.splice(l, 0, t), l === 0 && T0(t));
    }
  };
  var z0 = o.version;
  if (z0 !== "19.1.0") throw Error(r(527, z0, "19.1.0"));
  G.findDOMNode = function (t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function"
        ? Error(r(188))
        : ((t = Object.keys(t).join(",")), Error(r(268, t)));
    return (
      (t = p(e)),
      (t = t !== null ? m(t) : null),
      (t = t === null ? null : t.stateNode),
      t
    );
  };
  var Mm = {
    bundleType: 0,
    version: "19.1.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: M,
    reconcilerVersion: "19.1.0",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var $n = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!$n.isDisabled && $n.supportsFiber)
      try {
        ((_a = $n.inject(Mm)), (ee = $n));
      } catch {}
  }
  return (
    (Ou.createRoot = function (t, e) {
      if (!h(t)) throw Error(r(299));
      var l = !1,
        a = "",
        u = jo,
        n = Qo,
        i = Zo,
        c = null;
      return (
        e != null &&
          (e.unstable_strictMode === !0 && (l = !0),
          e.identifierPrefix !== void 0 && (a = e.identifierPrefix),
          e.onUncaughtError !== void 0 && (u = e.onUncaughtError),
          e.onCaughtError !== void 0 && (n = e.onCaughtError),
          e.onRecoverableError !== void 0 && (i = e.onRecoverableError),
          e.unstable_transitionCallbacks !== void 0 &&
            (c = e.unstable_transitionCallbacks)),
        (e = v0(t, 1, !1, null, null, l, a, u, n, i, c, null)),
        (t[jl] = e.current),
        Pf(t),
        new yc(e)
      );
    }),
    (Ou.hydrateRoot = function (t, e, l) {
      if (!h(t)) throw Error(r(299));
      var a = !1,
        u = "",
        n = jo,
        i = Qo,
        c = Zo,
        d = null,
        E = null;
      return (
        l != null &&
          (l.unstable_strictMode === !0 && (a = !0),
          l.identifierPrefix !== void 0 && (u = l.identifierPrefix),
          l.onUncaughtError !== void 0 && (n = l.onUncaughtError),
          l.onCaughtError !== void 0 && (i = l.onCaughtError),
          l.onRecoverableError !== void 0 && (c = l.onRecoverableError),
          l.unstable_transitionCallbacks !== void 0 &&
            (d = l.unstable_transitionCallbacks),
          l.formState !== void 0 && (E = l.formState)),
        (e = v0(t, 1, !0, e, l ?? null, a, u, n, i, c, d, E)),
        (e.context = y0(null)),
        (l = e.current),
        (a = ce()),
        (a = ii(a)),
        (u = el(a)),
        (u.callback = null),
        ll(l, u, a),
        (l = a),
        (e.current.lanes = l),
        Ua(e, l),
        _e(e),
        (t[jl] = e.current),
        Pf(t),
        new Jn(e)
      );
    }),
    (Ou.version = "19.1.0"),
    Ou
  );
}
var B0;
function Gm() {
  if (B0) return pc.exports;
  B0 = 1;
  function f() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f);
      } catch (o) {
        console.error(o);
      }
  }
  return (f(), (pc.exports = Ym()), pc.exports);
}
var Lm = Gm();
const Xm = Q0(Lm);
var Mu = {},
  q0;
function jm() {
  if (q0) return Mu;
  ((q0 = 1),
    Object.defineProperty(Mu, "__esModule", { value: !0 }),
    (Mu.parse = R),
    (Mu.serialize = m));
  const f = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/,
    o = /^[\u0021-\u003A\u003C-\u007E]*$/,
    s =
      /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,
    r = /^[\u0020-\u003A\u003D-\u007E]*$/,
    h = Object.prototype.toString,
    g = (() => {
      const N = function () {};
      return ((N.prototype = Object.create(null)), N);
    })();
  function R(N, Q) {
    const C = new g(),
      X = N.length;
    if (X < 2) return C;
    const w = (Q == null ? void 0 : Q.decode) || z;
    let q = 0;
    do {
      const Z = N.indexOf("=", q);
      if (Z === -1) break;
      const F = N.indexOf(";", q),
        it = F === -1 ? X : F;
      if (Z > it) {
        q = N.lastIndexOf(";", Z - 1) + 1;
        continue;
      }
      const P = U(N, q, Z),
        Dt = p(N, Z, P),
        At = N.slice(P, Dt);
      if (C[At] === void 0) {
        let Ot = U(N, Z + 1, it),
          St = p(N, it, Ot);
        const Jt = w(N.slice(Ot, St));
        C[At] = Jt;
      }
      q = it + 1;
    } while (q < X);
    return C;
  }
  function U(N, Q, C) {
    do {
      const X = N.charCodeAt(Q);
      if (X !== 32 && X !== 9) return Q;
    } while (++Q < C);
    return C;
  }
  function p(N, Q, C) {
    for (; Q > C; ) {
      const X = N.charCodeAt(--Q);
      if (X !== 32 && X !== 9) return Q + 1;
    }
    return C;
  }
  function m(N, Q, C) {
    const X = (C == null ? void 0 : C.encode) || encodeURIComponent;
    if (!f.test(N)) throw new TypeError(`argument name is invalid: ${N}`);
    const w = X(Q);
    if (!o.test(w)) throw new TypeError(`argument val is invalid: ${Q}`);
    let q = N + "=" + w;
    if (!C) return q;
    if (C.maxAge !== void 0) {
      if (!Number.isInteger(C.maxAge))
        throw new TypeError(`option maxAge is invalid: ${C.maxAge}`);
      q += "; Max-Age=" + C.maxAge;
    }
    if (C.domain) {
      if (!s.test(C.domain))
        throw new TypeError(`option domain is invalid: ${C.domain}`);
      q += "; Domain=" + C.domain;
    }
    if (C.path) {
      if (!r.test(C.path))
        throw new TypeError(`option path is invalid: ${C.path}`);
      q += "; Path=" + C.path;
    }
    if (C.expires) {
      if (!B(C.expires) || !Number.isFinite(C.expires.valueOf()))
        throw new TypeError(`option expires is invalid: ${C.expires}`);
      q += "; Expires=" + C.expires.toUTCString();
    }
    if (
      (C.httpOnly && (q += "; HttpOnly"),
      C.secure && (q += "; Secure"),
      C.partitioned && (q += "; Partitioned"),
      C.priority)
    )
      switch (
        typeof C.priority == "string" ? C.priority.toLowerCase() : void 0
      ) {
        case "low":
          q += "; Priority=Low";
          break;
        case "medium":
          q += "; Priority=Medium";
          break;
        case "high":
          q += "; Priority=High";
          break;
        default:
          throw new TypeError(`option priority is invalid: ${C.priority}`);
      }
    if (C.sameSite)
      switch (
        typeof C.sameSite == "string" ? C.sameSite.toLowerCase() : C.sameSite
      ) {
        case !0:
        case "strict":
          q += "; SameSite=Strict";
          break;
        case "lax":
          q += "; SameSite=Lax";
          break;
        case "none":
          q += "; SameSite=None";
          break;
        default:
          throw new TypeError(`option sameSite is invalid: ${C.sameSite}`);
      }
    return q;
  }
  function z(N) {
    if (N.indexOf("%") === -1) return N;
    try {
      return decodeURIComponent(N);
    } catch {
      return N;
    }
  }
  function B(N) {
    return h.call(N) === "[object Date]";
  }
  return Mu;
}
jm();
var Y0 = "popstate";
function Qm(f = {}) {
  function o(r, h) {
    let { pathname: g, search: R, hash: U } = r.location;
    return zc(
      "",
      { pathname: g, search: R, hash: U },
      (h.state && h.state.usr) || null,
      (h.state && h.state.key) || "default"
    );
  }
  function s(r, h) {
    return typeof h == "string" ? h : Du(h);
  }
  return wm(o, s, null, f);
}
function Tt(f, o) {
  if (f === !1 || f === null || typeof f > "u") throw new Error(o);
}
function De(f, o) {
  if (!f) {
    typeof console < "u" && console.warn(o);
    try {
      throw new Error(o);
    } catch {}
  }
}
function Zm() {
  return Math.random().toString(36).substring(2, 10);
}
function G0(f, o) {
  return { usr: f.state, key: f.key, idx: o };
}
function zc(f, o, s = null, r) {
  return {
    pathname: typeof f == "string" ? f : f.pathname,
    search: "",
    hash: "",
    ...(typeof o == "string" ? Oa(o) : o),
    state: s,
    key: (o && o.key) || r || Zm(),
  };
}
function Du({ pathname: f = "/", search: o = "", hash: s = "" }) {
  return (
    o && o !== "?" && (f += o.charAt(0) === "?" ? o : "?" + o),
    s && s !== "#" && (f += s.charAt(0) === "#" ? s : "#" + s),
    f
  );
}
function Oa(f) {
  let o = {};
  if (f) {
    let s = f.indexOf("#");
    s >= 0 && ((o.hash = f.substring(s)), (f = f.substring(0, s)));
    let r = f.indexOf("?");
    (r >= 0 && ((o.search = f.substring(r)), (f = f.substring(0, r))),
      f && (o.pathname = f));
  }
  return o;
}
function wm(f, o, s, r = {}) {
  let { window: h = document.defaultView, v5Compat: g = !1 } = r,
    R = h.history,
    U = "POP",
    p = null,
    m = z();
  m == null && ((m = 0), R.replaceState({ ...R.state, idx: m }, ""));
  function z() {
    return (R.state || { idx: null }).idx;
  }
  function B() {
    U = "POP";
    let w = z(),
      q = w == null ? null : w - m;
    ((m = w), p && p({ action: U, location: X.location, delta: q }));
  }
  function N(w, q) {
    U = "PUSH";
    let Z = zc(X.location, w, q);
    m = z() + 1;
    let F = G0(Z, m),
      it = X.createHref(Z);
    try {
      R.pushState(F, "", it);
    } catch (P) {
      if (P instanceof DOMException && P.name === "DataCloneError") throw P;
      h.location.assign(it);
    }
    g && p && p({ action: U, location: X.location, delta: 1 });
  }
  function Q(w, q) {
    U = "REPLACE";
    let Z = zc(X.location, w, q);
    m = z();
    let F = G0(Z, m),
      it = X.createHref(Z);
    (R.replaceState(F, "", it),
      g && p && p({ action: U, location: X.location, delta: 0 }));
  }
  function C(w) {
    return Vm(w);
  }
  let X = {
    get action() {
      return U;
    },
    get location() {
      return f(h, R);
    },
    listen(w) {
      if (p) throw new Error("A history only accepts one active listener");
      return (
        h.addEventListener(Y0, B),
        (p = w),
        () => {
          (h.removeEventListener(Y0, B), (p = null));
        }
      );
    },
    createHref(w) {
      return o(h, w);
    },
    createURL: C,
    encodeLocation(w) {
      let q = C(w);
      return { pathname: q.pathname, search: q.search, hash: q.hash };
    },
    push: N,
    replace: Q,
    go(w) {
      return R.go(w);
    },
  };
  return X;
}
function Vm(f, o = !1) {
  let s = "http://localhost";
  (typeof window < "u" &&
    (s =
      window.location.origin !== "null"
        ? window.location.origin
        : window.location.href),
    Tt(s, "No window.location.(origin|href) available to create URL"));
  let r = typeof f == "string" ? f : Du(f);
  return (
    (r = r.replace(/ $/, "%20")),
    !o && r.startsWith("//") && (r = s + r),
    new URL(r, s)
  );
}
function Z0(f, o, s = "/") {
  return Km(f, o, s, !1);
}
function Km(f, o, s, r) {
  let h = typeof o == "string" ? Oa(o) : o,
    g = Je(h.pathname || "/", s);
  if (g == null) return null;
  let R = w0(f);
  Jm(R);
  let U = null;
  for (let p = 0; U == null && p < R.length; ++p) {
    let m = uv(g);
    U = lv(R[p], m, r);
  }
  return U;
}
function w0(f, o = [], s = [], r = "") {
  let h = (g, R, U) => {
    let p = {
      relativePath: U === void 0 ? g.path || "" : U,
      caseSensitive: g.caseSensitive === !0,
      childrenIndex: R,
      route: g,
    };
    p.relativePath.startsWith("/") &&
      (Tt(
        p.relativePath.startsWith(r),
        `Absolute route path "${p.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ),
      (p.relativePath = p.relativePath.slice(r.length)));
    let m = Ke([r, p.relativePath]),
      z = s.concat(p);
    (g.children &&
      g.children.length > 0 &&
      (Tt(
        g.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${m}".`
      ),
      w0(g.children, o, z, m)),
      !(g.path == null && !g.index) &&
        o.push({ path: m, score: tv(m, g.index), routesMeta: z }));
  };
  return (
    f.forEach((g, R) => {
      var U;
      if (g.path === "" || !((U = g.path) != null && U.includes("?"))) h(g, R);
      else for (let p of V0(g.path)) h(g, R, p);
    }),
    o
  );
}
function V0(f) {
  let o = f.split("/");
  if (o.length === 0) return [];
  let [s, ...r] = o,
    h = s.endsWith("?"),
    g = s.replace(/\?$/, "");
  if (r.length === 0) return h ? [g, ""] : [g];
  let R = V0(r.join("/")),
    U = [];
  return (
    U.push(...R.map((p) => (p === "" ? g : [g, p].join("/")))),
    h && U.push(...R),
    U.map((p) => (f.startsWith("/") && p === "" ? "/" : p))
  );
}
function Jm(f) {
  f.sort((o, s) =>
    o.score !== s.score
      ? s.score - o.score
      : ev(
          o.routesMeta.map((r) => r.childrenIndex),
          s.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
var $m = /^:[\w-]+$/,
  km = 3,
  Wm = 2,
  Fm = 1,
  Pm = 10,
  Im = -2,
  L0 = (f) => f === "*";
function tv(f, o) {
  let s = f.split("/"),
    r = s.length;
  return (
    s.some(L0) && (r += Im),
    o && (r += Wm),
    s
      .filter((h) => !L0(h))
      .reduce((h, g) => h + ($m.test(g) ? km : g === "" ? Fm : Pm), r)
  );
}
function ev(f, o) {
  return f.length === o.length && f.slice(0, -1).every((r, h) => r === o[h])
    ? f[f.length - 1] - o[o.length - 1]
    : 0;
}
function lv(f, o, s = !1) {
  let { routesMeta: r } = f,
    h = {},
    g = "/",
    R = [];
  for (let U = 0; U < r.length; ++U) {
    let p = r[U],
      m = U === r.length - 1,
      z = g === "/" ? o : o.slice(g.length) || "/",
      B = Pn(
        { path: p.relativePath, caseSensitive: p.caseSensitive, end: m },
        z
      ),
      N = p.route;
    if (
      (!B &&
        m &&
        s &&
        !r[r.length - 1].route.index &&
        (B = Pn(
          { path: p.relativePath, caseSensitive: p.caseSensitive, end: !1 },
          z
        )),
      !B)
    )
      return null;
    (Object.assign(h, B.params),
      R.push({
        params: h,
        pathname: Ke([g, B.pathname]),
        pathnameBase: cv(Ke([g, B.pathnameBase])),
        route: N,
      }),
      B.pathnameBase !== "/" && (g = Ke([g, B.pathnameBase])));
  }
  return R;
}
function Pn(f, o) {
  typeof f == "string" && (f = { path: f, caseSensitive: !1, end: !0 });
  let [s, r] = av(f.path, f.caseSensitive, f.end),
    h = o.match(s);
  if (!h) return null;
  let g = h[0],
    R = g.replace(/(.)\/+$/, "$1"),
    U = h.slice(1);
  return {
    params: r.reduce((m, { paramName: z, isOptional: B }, N) => {
      if (z === "*") {
        let C = U[N] || "";
        R = g.slice(0, g.length - C.length).replace(/(.)\/+$/, "$1");
      }
      const Q = U[N];
      return (
        B && !Q ? (m[z] = void 0) : (m[z] = (Q || "").replace(/%2F/g, "/")),
        m
      );
    }, {}),
    pathname: g,
    pathnameBase: R,
    pattern: f,
  };
}
function av(f, o = !1, s = !0) {
  De(
    f === "*" || !f.endsWith("*") || f.endsWith("/*"),
    `Route path "${f}" will be treated as if it were "${f.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${f.replace(/\*$/, "/*")}".`
  );
  let r = [],
    h =
      "^" +
      f
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (R, U, p) => (
            r.push({ paramName: U, isOptional: p != null }),
            p ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    f.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (h += f === "*" || f === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : s
        ? (h += "\\/*$")
        : f !== "" && f !== "/" && (h += "(?:(?=\\/|$))"),
    [new RegExp(h, o ? void 0 : "i"), r]
  );
}
function uv(f) {
  try {
    return f
      .split("/")
      .map((o) => decodeURIComponent(o).replace(/\//g, "%2F"))
      .join("/");
  } catch (o) {
    return (
      De(
        !1,
        `The URL path "${f}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${o}).`
      ),
      f
    );
  }
}
function Je(f, o) {
  if (o === "/") return f;
  if (!f.toLowerCase().startsWith(o.toLowerCase())) return null;
  let s = o.endsWith("/") ? o.length - 1 : o.length,
    r = f.charAt(s);
  return r && r !== "/" ? null : f.slice(s) || "/";
}
function nv(f, o = "/") {
  let {
    pathname: s,
    search: r = "",
    hash: h = "",
  } = typeof f == "string" ? Oa(f) : f;
  return {
    pathname: s ? (s.startsWith("/") ? s : iv(s, o)) : o,
    search: rv(r),
    hash: ov(h),
  };
}
function iv(f, o) {
  let s = o.replace(/\/+$/, "").split("/");
  return (
    f.split("/").forEach((h) => {
      h === ".." ? s.length > 1 && s.pop() : h !== "." && s.push(h);
    }),
    s.length > 1 ? s.join("/") : "/"
  );
}
function Ac(f, o, s, r) {
  return `Cannot include a '${f}' character in a manually specified \`to.${o}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${s}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function fv(f) {
  return f.filter(
    (o, s) => s === 0 || (o.route.path && o.route.path.length > 0)
  );
}
function K0(f) {
  let o = fv(f);
  return o.map((s, r) => (r === o.length - 1 ? s.pathname : s.pathnameBase));
}
function J0(f, o, s, r = !1) {
  let h;
  typeof f == "string"
    ? (h = Oa(f))
    : ((h = { ...f }),
      Tt(
        !h.pathname || !h.pathname.includes("?"),
        Ac("?", "pathname", "search", h)
      ),
      Tt(
        !h.pathname || !h.pathname.includes("#"),
        Ac("#", "pathname", "hash", h)
      ),
      Tt(!h.search || !h.search.includes("#"), Ac("#", "search", "hash", h)));
  let g = f === "" || h.pathname === "",
    R = g ? "/" : h.pathname,
    U;
  if (R == null) U = s;
  else {
    let B = o.length - 1;
    if (!r && R.startsWith("..")) {
      let N = R.split("/");
      for (; N[0] === ".."; ) (N.shift(), (B -= 1));
      h.pathname = N.join("/");
    }
    U = B >= 0 ? o[B] : "/";
  }
  let p = nv(h, U),
    m = R && R !== "/" && R.endsWith("/"),
    z = (g || R === ".") && s.endsWith("/");
  return (!p.pathname.endsWith("/") && (m || z) && (p.pathname += "/"), p);
}
var Ke = (f) => f.join("/").replace(/\/\/+/g, "/"),
  cv = (f) => f.replace(/\/+$/, "").replace(/^\/*/, "/"),
  rv = (f) => (!f || f === "?" ? "" : f.startsWith("?") ? f : "?" + f),
  ov = (f) => (!f || f === "#" ? "" : f.startsWith("#") ? f : "#" + f);
function sv(f) {
  return (
    f != null &&
    typeof f.status == "number" &&
    typeof f.statusText == "string" &&
    typeof f.internal == "boolean" &&
    "data" in f
  );
}
var $0 = ["POST", "PUT", "PATCH", "DELETE"];
new Set($0);
var dv = ["GET", ...$0];
new Set(dv);
var Ma = x.createContext(null);
Ma.displayName = "DataRouter";
var In = x.createContext(null);
In.displayName = "DataRouterState";
var k0 = x.createContext({ isTransitioning: !1 });
k0.displayName = "ViewTransition";
var hv = x.createContext(new Map());
hv.displayName = "Fetchers";
var mv = x.createContext(null);
mv.displayName = "Await";
var Ue = x.createContext(null);
Ue.displayName = "Navigation";
var Uu = x.createContext(null);
Uu.displayName = "Location";
var $e = x.createContext({ outlet: null, matches: [], isDataRoute: !1 });
$e.displayName = "Route";
var _c = x.createContext(null);
_c.displayName = "RouteError";
function vv(f, { relative: o } = {}) {
  Tt(
    xu(),
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: s, navigator: r } = x.useContext(Ue),
    { hash: h, pathname: g, search: R } = Nu(f, { relative: o }),
    U = g;
  return (
    s !== "/" && (U = g === "/" ? s : Ke([s, g])),
    r.createHref({ pathname: U, search: R, hash: h })
  );
}
function xu() {
  return x.useContext(Uu) != null;
}
function Xl() {
  return (
    Tt(
      xu(),
      "useLocation() may be used only in the context of a <Router> component."
    ),
    x.useContext(Uu).location
  );
}
var W0 =
  "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function F0(f) {
  x.useContext(Ue).static || x.useLayoutEffect(f);
}
function yv() {
  let { isDataRoute: f } = x.useContext($e);
  return f ? Dv() : gv();
}
function gv() {
  Tt(
    xu(),
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let f = x.useContext(Ma),
    { basename: o, navigator: s } = x.useContext(Ue),
    { matches: r } = x.useContext($e),
    { pathname: h } = Xl(),
    g = JSON.stringify(K0(r)),
    R = x.useRef(!1);
  return (
    F0(() => {
      R.current = !0;
    }),
    x.useCallback(
      (p, m = {}) => {
        if ((De(R.current, W0), !R.current)) return;
        if (typeof p == "number") {
          s.go(p);
          return;
        }
        let z = J0(p, JSON.parse(g), h, m.relative === "path");
        (f == null &&
          o !== "/" &&
          (z.pathname = z.pathname === "/" ? o : Ke([o, z.pathname])),
          (m.replace ? s.replace : s.push)(z, m.state, m));
      },
      [o, s, g, h, f]
    )
  );
}
x.createContext(null);
function Nu(f, { relative: o } = {}) {
  let { matches: s } = x.useContext($e),
    { pathname: r } = Xl(),
    h = JSON.stringify(K0(s));
  return x.useMemo(() => J0(f, JSON.parse(h), r, o === "path"), [f, h, r, o]);
}
function Sv(f, o) {
  return P0(f, o);
}
function P0(f, o, s, r) {
  var q;
  Tt(
    xu(),
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: h } = x.useContext(Ue),
    { matches: g } = x.useContext($e),
    R = g[g.length - 1],
    U = R ? R.params : {},
    p = R ? R.pathname : "/",
    m = R ? R.pathnameBase : "/",
    z = R && R.route;
  {
    let Z = (z && z.path) || "";
    I0(
      p,
      !z || Z.endsWith("*") || Z.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${Z}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${Z}"> to <Route path="${Z === "/" ? "*" : `${Z}/*`}">.`
    );
  }
  let B = Xl(),
    N;
  if (o) {
    let Z = typeof o == "string" ? Oa(o) : o;
    (Tt(
      m === "/" || ((q = Z.pathname) == null ? void 0 : q.startsWith(m)),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${m}" but pathname "${Z.pathname}" was given in the \`location\` prop.`
    ),
      (N = Z));
  } else N = B;
  let Q = N.pathname || "/",
    C = Q;
  if (m !== "/") {
    let Z = m.replace(/^\//, "").split("/");
    C = "/" + Q.replace(/^\//, "").split("/").slice(Z.length).join("/");
  }
  let X = Z0(f, { pathname: C });
  (De(
    z || X != null,
    `No routes matched location "${N.pathname}${N.search}${N.hash}" `
  ),
    De(
      X == null ||
        X[X.length - 1].route.element !== void 0 ||
        X[X.length - 1].route.Component !== void 0 ||
        X[X.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${N.pathname}${N.search}${N.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
    ));
  let w = Av(
    X &&
      X.map((Z) =>
        Object.assign({}, Z, {
          params: Object.assign({}, U, Z.params),
          pathname: Ke([
            m,
            h.encodeLocation
              ? h.encodeLocation(Z.pathname).pathname
              : Z.pathname,
          ]),
          pathnameBase:
            Z.pathnameBase === "/"
              ? m
              : Ke([
                  m,
                  h.encodeLocation
                    ? h.encodeLocation(Z.pathnameBase).pathname
                    : Z.pathnameBase,
                ]),
        })
      ),
    g,
    s,
    r
  );
  return o && w
    ? x.createElement(
        Uu.Provider,
        {
          value: {
            location: {
              pathname: "/",
              search: "",
              hash: "",
              state: null,
              key: "default",
              ...N,
            },
            navigationType: "POP",
          },
        },
        w
      )
    : w;
}
function pv() {
  let f = _v(),
    o = sv(f)
      ? `${f.status} ${f.statusText}`
      : f instanceof Error
        ? f.message
        : JSON.stringify(f),
    s = f instanceof Error ? f.stack : null,
    r = "rgba(200,200,200, 0.5)",
    h = { padding: "0.5rem", backgroundColor: r },
    g = { padding: "2px 4px", backgroundColor: r },
    R = null;
  return (
    console.error("Error handled by React Router default ErrorBoundary:", f),
    (R = x.createElement(
      x.Fragment,
      null,
      x.createElement("p", null, "💿 Hey developer 👋"),
      x.createElement(
        "p",
        null,
        "You can provide a way better UX than this when your app throws errors by providing your own ",
        x.createElement("code", { style: g }, "ErrorBoundary"),
        " or",
        " ",
        x.createElement("code", { style: g }, "errorElement"),
        " prop on your route."
      )
    )),
    x.createElement(
      x.Fragment,
      null,
      x.createElement("h2", null, "Unexpected Application Error!"),
      x.createElement("h3", { style: { fontStyle: "italic" } }, o),
      s ? x.createElement("pre", { style: h }, s) : null,
      R
    )
  );
}
var bv = x.createElement(pv, null),
  Ev = class extends x.Component {
    constructor(f) {
      (super(f),
        (this.state = {
          location: f.location,
          revalidation: f.revalidation,
          error: f.error,
        }));
    }
    static getDerivedStateFromError(f) {
      return { error: f };
    }
    static getDerivedStateFromProps(f, o) {
      return o.location !== f.location ||
        (o.revalidation !== "idle" && f.revalidation === "idle")
        ? { error: f.error, location: f.location, revalidation: f.revalidation }
        : {
            error: f.error !== void 0 ? f.error : o.error,
            location: o.location,
            revalidation: f.revalidation || o.revalidation,
          };
    }
    componentDidCatch(f, o) {
      console.error(
        "React Router caught the following error during render",
        f,
        o
      );
    }
    render() {
      return this.state.error !== void 0
        ? x.createElement(
            $e.Provider,
            { value: this.props.routeContext },
            x.createElement(_c.Provider, {
              value: this.state.error,
              children: this.props.component,
            })
          )
        : this.props.children;
    }
  };
function Tv({ routeContext: f, match: o, children: s }) {
  let r = x.useContext(Ma);
  return (
    r &&
      r.static &&
      r.staticContext &&
      (o.route.errorElement || o.route.ErrorBoundary) &&
      (r.staticContext._deepestRenderedBoundaryId = o.route.id),
    x.createElement($e.Provider, { value: f }, s)
  );
}
function Av(f, o = [], s = null, r = null) {
  if (f == null) {
    if (!s) return null;
    if (s.errors) f = s.matches;
    else if (o.length === 0 && !s.initialized && s.matches.length > 0)
      f = s.matches;
    else return null;
  }
  let h = f,
    g = s == null ? void 0 : s.errors;
  if (g != null) {
    let p = h.findIndex(
      (m) => m.route.id && (g == null ? void 0 : g[m.route.id]) !== void 0
    );
    (Tt(
      p >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(g).join(",")}`
    ),
      (h = h.slice(0, Math.min(h.length, p + 1))));
  }
  let R = !1,
    U = -1;
  if (s)
    for (let p = 0; p < h.length; p++) {
      let m = h[p];
      if (
        ((m.route.HydrateFallback || m.route.hydrateFallbackElement) && (U = p),
        m.route.id)
      ) {
        let { loaderData: z, errors: B } = s,
          N =
            m.route.loader &&
            !z.hasOwnProperty(m.route.id) &&
            (!B || B[m.route.id] === void 0);
        if (m.route.lazy || N) {
          ((R = !0), U >= 0 ? (h = h.slice(0, U + 1)) : (h = [h[0]]));
          break;
        }
      }
    }
  return h.reduceRight((p, m, z) => {
    let B,
      N = !1,
      Q = null,
      C = null;
    s &&
      ((B = g && m.route.id ? g[m.route.id] : void 0),
      (Q = m.route.errorElement || bv),
      R &&
        (U < 0 && z === 0
          ? (I0(
              "route-fallback",
              !1,
              "No `HydrateFallback` element provided to render during initial hydration"
            ),
            (N = !0),
            (C = null))
          : U === z &&
            ((N = !0), (C = m.route.hydrateFallbackElement || null))));
    let X = o.concat(h.slice(0, z + 1)),
      w = () => {
        let q;
        return (
          B
            ? (q = Q)
            : N
              ? (q = C)
              : m.route.Component
                ? (q = x.createElement(m.route.Component, null))
                : m.route.element
                  ? (q = m.route.element)
                  : (q = p),
          x.createElement(Tv, {
            match: m,
            routeContext: { outlet: p, matches: X, isDataRoute: s != null },
            children: q,
          })
        );
      };
    return s && (m.route.ErrorBoundary || m.route.errorElement || z === 0)
      ? x.createElement(Ev, {
          location: s.location,
          revalidation: s.revalidation,
          component: Q,
          error: B,
          children: w(),
          routeContext: { outlet: null, matches: X, isDataRoute: !0 },
        })
      : w();
  }, null);
}
function Dc(f) {
  return `${f} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Rv(f) {
  let o = x.useContext(Ma);
  return (Tt(o, Dc(f)), o);
}
function zv(f) {
  let o = x.useContext(In);
  return (Tt(o, Dc(f)), o);
}
function Ov(f) {
  let o = x.useContext($e);
  return (Tt(o, Dc(f)), o);
}
function Uc(f) {
  let o = Ov(f),
    s = o.matches[o.matches.length - 1];
  return (
    Tt(
      s.route.id,
      `${f} can only be used on routes that contain a unique "id"`
    ),
    s.route.id
  );
}
function Mv() {
  return Uc("useRouteId");
}
function _v() {
  var r;
  let f = x.useContext(_c),
    o = zv("useRouteError"),
    s = Uc("useRouteError");
  return f !== void 0 ? f : (r = o.errors) == null ? void 0 : r[s];
}
function Dv() {
  let { router: f } = Rv("useNavigate"),
    o = Uc("useNavigate"),
    s = x.useRef(!1);
  return (
    F0(() => {
      s.current = !0;
    }),
    x.useCallback(
      async (h, g = {}) => {
        (De(s.current, W0),
          s.current &&
            (typeof h == "number"
              ? f.navigate(h)
              : await f.navigate(h, { fromRouteId: o, ...g })));
      },
      [f, o]
    )
  );
}
var X0 = {};
function I0(f, o, s) {
  !o && !X0[f] && ((X0[f] = !0), De(!1, s));
}
x.memo(Uv);
function Uv({ routes: f, future: o, state: s }) {
  return P0(f, void 0, s, o);
}
function td(f) {
  Tt(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>."
  );
}
function xv({
  basename: f = "/",
  children: o = null,
  location: s,
  navigationType: r = "POP",
  navigator: h,
  static: g = !1,
}) {
  Tt(
    !xu(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
  );
  let R = f.replace(/^\/*/, "/"),
    U = x.useMemo(
      () => ({ basename: R, navigator: h, static: g, future: {} }),
      [R, h, g]
    );
  typeof s == "string" && (s = Oa(s));
  let {
      pathname: p = "/",
      search: m = "",
      hash: z = "",
      state: B = null,
      key: N = "default",
    } = s,
    Q = x.useMemo(() => {
      let C = Je(p, R);
      return C == null
        ? null
        : {
            location: { pathname: C, search: m, hash: z, state: B, key: N },
            navigationType: r,
          };
    }, [R, p, m, z, B, N, r]);
  return (
    De(
      Q != null,
      `<Router basename="${R}"> is not able to match the URL "${p}${m}${z}" because it does not start with the basename, so the <Router> won't render anything.`
    ),
    Q == null
      ? null
      : x.createElement(
          Ue.Provider,
          { value: U },
          x.createElement(Uu.Provider, { children: o, value: Q })
        )
  );
}
function Nv({ children: f, location: o }) {
  return Sv(Oc(f), o);
}
function Oc(f, o = []) {
  let s = [];
  return (
    x.Children.forEach(f, (r, h) => {
      if (!x.isValidElement(r)) return;
      let g = [...o, h];
      if (r.type === x.Fragment) {
        s.push.apply(s, Oc(r.props.children, g));
        return;
      }
      (Tt(
        r.type === td,
        `[${typeof r.type == "string" ? r.type : r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
      ),
        Tt(
          !r.props.index || !r.props.children,
          "An index route cannot have child routes."
        ));
      let R = {
        id: r.props.id || g.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        hydrateFallbackElement: r.props.hydrateFallbackElement,
        HydrateFallback: r.props.HydrateFallback,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.hasErrorBoundary === !0 ||
          r.props.ErrorBoundary != null ||
          r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      (r.props.children && (R.children = Oc(r.props.children, g)), s.push(R));
    }),
    s
  );
}
var Wn = "get",
  Fn = "application/x-www-form-urlencoded";
function ti(f) {
  return f != null && typeof f.tagName == "string";
}
function Hv(f) {
  return ti(f) && f.tagName.toLowerCase() === "button";
}
function Cv(f) {
  return ti(f) && f.tagName.toLowerCase() === "form";
}
function Bv(f) {
  return ti(f) && f.tagName.toLowerCase() === "input";
}
function qv(f) {
  return !!(f.metaKey || f.altKey || f.ctrlKey || f.shiftKey);
}
function Yv(f, o) {
  return f.button === 0 && (!o || o === "_self") && !qv(f);
}
var kn = null;
function Gv() {
  if (kn === null)
    try {
      (new FormData(document.createElement("form"), 0), (kn = !1));
    } catch {
      kn = !0;
    }
  return kn;
}
var Lv = new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain",
]);
function Rc(f) {
  return f != null && !Lv.has(f)
    ? (De(
        !1,
        `"${f}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Fn}"`
      ),
      null)
    : f;
}
function Xv(f, o) {
  let s, r, h, g, R;
  if (Cv(f)) {
    let U = f.getAttribute("action");
    ((r = U ? Je(U, o) : null),
      (s = f.getAttribute("method") || Wn),
      (h = Rc(f.getAttribute("enctype")) || Fn),
      (g = new FormData(f)));
  } else if (Hv(f) || (Bv(f) && (f.type === "submit" || f.type === "image"))) {
    let U = f.form;
    if (U == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let p = f.getAttribute("formaction") || U.getAttribute("action");
    if (
      ((r = p ? Je(p, o) : null),
      (s = f.getAttribute("formmethod") || U.getAttribute("method") || Wn),
      (h =
        Rc(f.getAttribute("formenctype")) ||
        Rc(U.getAttribute("enctype")) ||
        Fn),
      (g = new FormData(U, f)),
      !Gv())
    ) {
      let { name: m, type: z, value: B } = f;
      if (z === "image") {
        let N = m ? `${m}.` : "";
        (g.append(`${N}x`, "0"), g.append(`${N}y`, "0"));
      } else m && g.append(m, B);
    }
  } else {
    if (ti(f))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    ((s = Wn), (r = null), (h = Fn), (R = f));
  }
  return (
    g && h === "text/plain" && ((R = g), (g = void 0)),
    { action: r, method: s.toLowerCase(), encType: h, formData: g, body: R }
  );
}
function xc(f, o) {
  if (f === !1 || f === null || typeof f > "u") throw new Error(o);
}
async function jv(f, o) {
  if (f.id in o) return o[f.id];
  try {
    let s = await import(f.module);
    return ((o[f.id] = s), s);
  } catch (s) {
    return (
      console.error(
        `Error loading route module \`${f.module}\`, reloading page...`
      ),
      console.error(s),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function Qv(f) {
  return f == null
    ? !1
    : f.href == null
      ? f.rel === "preload" &&
        typeof f.imageSrcSet == "string" &&
        typeof f.imageSizes == "string"
      : typeof f.rel == "string" && typeof f.href == "string";
}
async function Zv(f, o, s) {
  let r = await Promise.all(
    f.map(async (h) => {
      let g = o.routes[h.route.id];
      if (g) {
        let R = await jv(g, s);
        return R.links ? R.links() : [];
      }
      return [];
    })
  );
  return Jv(
    r
      .flat(1)
      .filter(Qv)
      .filter((h) => h.rel === "stylesheet" || h.rel === "preload")
      .map((h) =>
        h.rel === "stylesheet"
          ? { ...h, rel: "prefetch", as: "style" }
          : { ...h, rel: "prefetch" }
      )
  );
}
function j0(f, o, s, r, h, g) {
  let R = (p, m) => (s[m] ? p.route.id !== s[m].route.id : !0),
    U = (p, m) => {
      var z;
      return (
        s[m].pathname !== p.pathname ||
        (((z = s[m].route.path) == null ? void 0 : z.endsWith("*")) &&
          s[m].params["*"] !== p.params["*"])
      );
    };
  return g === "assets"
    ? o.filter((p, m) => R(p, m) || U(p, m))
    : g === "data"
      ? o.filter((p, m) => {
          var B;
          let z = r.routes[p.route.id];
          if (!z || !z.hasLoader) return !1;
          if (R(p, m) || U(p, m)) return !0;
          if (p.route.shouldRevalidate) {
            let N = p.route.shouldRevalidate({
              currentUrl: new URL(
                h.pathname + h.search + h.hash,
                window.origin
              ),
              currentParams: ((B = s[0]) == null ? void 0 : B.params) || {},
              nextUrl: new URL(f, window.origin),
              nextParams: p.params,
              defaultShouldRevalidate: !0,
            });
            if (typeof N == "boolean") return N;
          }
          return !0;
        })
      : [];
}
function wv(f, o, { includeHydrateFallback: s } = {}) {
  return Vv(
    f
      .map((r) => {
        let h = o.routes[r.route.id];
        if (!h) return [];
        let g = [h.module];
        return (
          h.clientActionModule && (g = g.concat(h.clientActionModule)),
          h.clientLoaderModule && (g = g.concat(h.clientLoaderModule)),
          s &&
            h.hydrateFallbackModule &&
            (g = g.concat(h.hydrateFallbackModule)),
          h.imports && (g = g.concat(h.imports)),
          g
        );
      })
      .flat(1)
  );
}
function Vv(f) {
  return [...new Set(f)];
}
function Kv(f) {
  let o = {},
    s = Object.keys(f).sort();
  for (let r of s) o[r] = f[r];
  return o;
}
function Jv(f, o) {
  let s = new Set();
  return (
    new Set(o),
    f.reduce((r, h) => {
      let g = JSON.stringify(Kv(h));
      return (s.has(g) || (s.add(g), r.push({ key: g, link: h })), r);
    }, [])
  );
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
var $v = new Set([100, 101, 204, 205]);
function kv(f, o) {
  let s =
    typeof f == "string"
      ? new URL(
          f,
          typeof window > "u" ? "server://singlefetch/" : window.location.origin
        )
      : f;
  return (
    s.pathname === "/"
      ? (s.pathname = "_root.data")
      : o && Je(s.pathname, o) === "/"
        ? (s.pathname = `${o.replace(/\/$/, "")}/_root.data`)
        : (s.pathname = `${s.pathname.replace(/\/$/, "")}.data`),
    s
  );
}
function ed() {
  let f = x.useContext(Ma);
  return (
    xc(
      f,
      "You must render this element inside a <DataRouterContext.Provider> element"
    ),
    f
  );
}
function Wv() {
  let f = x.useContext(In);
  return (
    xc(
      f,
      "You must render this element inside a <DataRouterStateContext.Provider> element"
    ),
    f
  );
}
var Nc = x.createContext(void 0);
Nc.displayName = "FrameworkContext";
function ld() {
  let f = x.useContext(Nc);
  return (
    xc(f, "You must render this element inside a <HydratedRouter> element"),
    f
  );
}
function Fv(f, o) {
  let s = x.useContext(Nc),
    [r, h] = x.useState(!1),
    [g, R] = x.useState(!1),
    {
      onFocus: U,
      onBlur: p,
      onMouseEnter: m,
      onMouseLeave: z,
      onTouchStart: B,
    } = o,
    N = x.useRef(null);
  (x.useEffect(() => {
    if ((f === "render" && R(!0), f === "viewport")) {
      let X = (q) => {
          q.forEach((Z) => {
            R(Z.isIntersecting);
          });
        },
        w = new IntersectionObserver(X, { threshold: 0.5 });
      return (
        N.current && w.observe(N.current),
        () => {
          w.disconnect();
        }
      );
    }
  }, [f]),
    x.useEffect(() => {
      if (r) {
        let X = setTimeout(() => {
          R(!0);
        }, 100);
        return () => {
          clearTimeout(X);
        };
      }
    }, [r]));
  let Q = () => {
      h(!0);
    },
    C = () => {
      (h(!1), R(!1));
    };
  return s
    ? f !== "intent"
      ? [g, N, {}]
      : [
          g,
          N,
          {
            onFocus: _u(U, Q),
            onBlur: _u(p, C),
            onMouseEnter: _u(m, Q),
            onMouseLeave: _u(z, C),
            onTouchStart: _u(B, Q),
          },
        ]
    : [!1, N, {}];
}
function _u(f, o) {
  return (s) => {
    (f && f(s), s.defaultPrevented || o(s));
  };
}
function Pv({ page: f, ...o }) {
  let { router: s } = ed(),
    r = x.useMemo(() => Z0(s.routes, f, s.basename), [s.routes, f, s.basename]);
  return r ? x.createElement(ty, { page: f, matches: r, ...o }) : null;
}
function Iv(f) {
  let { manifest: o, routeModules: s } = ld(),
    [r, h] = x.useState([]);
  return (
    x.useEffect(() => {
      let g = !1;
      return (
        Zv(f, o, s).then((R) => {
          g || h(R);
        }),
        () => {
          g = !0;
        }
      );
    }, [f, o, s]),
    r
  );
}
function ty({ page: f, matches: o, ...s }) {
  let r = Xl(),
    { manifest: h, routeModules: g } = ld(),
    { basename: R } = ed(),
    { loaderData: U, matches: p } = Wv(),
    m = x.useMemo(() => j0(f, o, p, h, r, "data"), [f, o, p, h, r]),
    z = x.useMemo(() => j0(f, o, p, h, r, "assets"), [f, o, p, h, r]),
    B = x.useMemo(() => {
      if (f === r.pathname + r.search + r.hash) return [];
      let C = new Set(),
        X = !1;
      if (
        (o.forEach((q) => {
          var F;
          let Z = h.routes[q.route.id];
          !Z ||
            !Z.hasLoader ||
            ((!m.some((it) => it.route.id === q.route.id) &&
              q.route.id in U &&
              (F = g[q.route.id]) != null &&
              F.shouldRevalidate) ||
            Z.hasClientLoader
              ? (X = !0)
              : C.add(q.route.id));
        }),
        C.size === 0)
      )
        return [];
      let w = kv(f, R);
      return (
        X &&
          C.size > 0 &&
          w.searchParams.set(
            "_routes",
            o
              .filter((q) => C.has(q.route.id))
              .map((q) => q.route.id)
              .join(",")
          ),
        [w.pathname + w.search]
      );
    }, [R, U, r, h, m, o, f, g]),
    N = x.useMemo(() => wv(z, h), [z, h]),
    Q = Iv(z);
  return x.createElement(
    x.Fragment,
    null,
    B.map((C) =>
      x.createElement("link", {
        key: C,
        rel: "prefetch",
        as: "fetch",
        href: C,
        ...s,
      })
    ),
    N.map((C) =>
      x.createElement("link", { key: C, rel: "modulepreload", href: C, ...s })
    ),
    Q.map(({ key: C, link: X }) => x.createElement("link", { key: C, ...X }))
  );
}
function ey(...f) {
  return (o) => {
    f.forEach((s) => {
      typeof s == "function" ? s(o) : s != null && (s.current = o);
    });
  };
}
var ad =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u";
try {
  ad && (window.__reactRouterVersion = "7.6.2");
} catch {}
function ly({ basename: f, children: o, window: s }) {
  let r = x.useRef();
  r.current == null && (r.current = Qm({ window: s, v5Compat: !0 }));
  let h = r.current,
    [g, R] = x.useState({ action: h.action, location: h.location }),
    U = x.useCallback(
      (p) => {
        x.startTransition(() => R(p));
      },
      [R]
    );
  return (
    x.useLayoutEffect(() => h.listen(U), [h, U]),
    x.createElement(xv, {
      basename: f,
      children: o,
      location: g.location,
      navigationType: g.action,
      navigator: h,
    })
  );
}
var ud = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  nd = x.forwardRef(function (
    {
      onClick: o,
      discover: s = "render",
      prefetch: r = "none",
      relative: h,
      reloadDocument: g,
      replace: R,
      state: U,
      target: p,
      to: m,
      preventScrollReset: z,
      viewTransition: B,
      ...N
    },
    Q
  ) {
    let { basename: C } = x.useContext(Ue),
      X = typeof m == "string" && ud.test(m),
      w,
      q = !1;
    if (typeof m == "string" && X && ((w = m), ad))
      try {
        let St = new URL(window.location.href),
          Jt = m.startsWith("//") ? new URL(St.protocol + m) : new URL(m),
          oe = Je(Jt.pathname, C);
        Jt.origin === St.origin && oe != null
          ? (m = oe + Jt.search + Jt.hash)
          : (q = !0);
      } catch {
        De(
          !1,
          `<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
        );
      }
    let Z = vv(m, { relative: h }),
      [F, it, P] = Fv(r, N),
      Dt = iy(m, {
        replace: R,
        state: U,
        target: p,
        preventScrollReset: z,
        relative: h,
        viewTransition: B,
      });
    function At(St) {
      (o && o(St), St.defaultPrevented || Dt(St));
    }
    let Ot = x.createElement("a", {
      ...N,
      ...P,
      href: w || Z,
      onClick: q || g ? o : At,
      ref: ey(Q, it),
      target: p,
      "data-discover": !X && s === "render" ? "true" : void 0,
    });
    return F && !X
      ? x.createElement(x.Fragment, null, Ot, x.createElement(Pv, { page: Z }))
      : Ot;
  });
nd.displayName = "Link";
var ay = x.forwardRef(function (
  {
    "aria-current": o = "page",
    caseSensitive: s = !1,
    className: r = "",
    end: h = !1,
    style: g,
    to: R,
    viewTransition: U,
    children: p,
    ...m
  },
  z
) {
  let B = Nu(R, { relative: m.relative }),
    N = Xl(),
    Q = x.useContext(In),
    { navigator: C, basename: X } = x.useContext(Ue),
    w = Q != null && sy(B) && U === !0,
    q = C.encodeLocation ? C.encodeLocation(B).pathname : B.pathname,
    Z = N.pathname,
    F =
      Q && Q.navigation && Q.navigation.location
        ? Q.navigation.location.pathname
        : null;
  (s ||
    ((Z = Z.toLowerCase()),
    (F = F ? F.toLowerCase() : null),
    (q = q.toLowerCase())),
    F && X && (F = Je(F, X) || F));
  const it = q !== "/" && q.endsWith("/") ? q.length - 1 : q.length;
  let P = Z === q || (!h && Z.startsWith(q) && Z.charAt(it) === "/"),
    Dt =
      F != null &&
      (F === q || (!h && F.startsWith(q) && F.charAt(q.length) === "/")),
    At = { isActive: P, isPending: Dt, isTransitioning: w },
    Ot = P ? o : void 0,
    St;
  typeof r == "function"
    ? (St = r(At))
    : (St = [
        r,
        P ? "active" : null,
        Dt ? "pending" : null,
        w ? "transitioning" : null,
      ]
        .filter(Boolean)
        .join(" "));
  let Jt = typeof g == "function" ? g(At) : g;
  return x.createElement(
    nd,
    {
      ...m,
      "aria-current": Ot,
      className: St,
      ref: z,
      style: Jt,
      to: R,
      viewTransition: U,
    },
    typeof p == "function" ? p(At) : p
  );
});
ay.displayName = "NavLink";
var uy = x.forwardRef(
  (
    {
      discover: f = "render",
      fetcherKey: o,
      navigate: s,
      reloadDocument: r,
      replace: h,
      state: g,
      method: R = Wn,
      action: U,
      onSubmit: p,
      relative: m,
      preventScrollReset: z,
      viewTransition: B,
      ...N
    },
    Q
  ) => {
    let C = ry(),
      X = oy(U, { relative: m }),
      w = R.toLowerCase() === "get" ? "get" : "post",
      q = typeof U == "string" && ud.test(U),
      Z = (F) => {
        if ((p && p(F), F.defaultPrevented)) return;
        F.preventDefault();
        let it = F.nativeEvent.submitter,
          P = (it == null ? void 0 : it.getAttribute("formmethod")) || R;
        C(it || F.currentTarget, {
          fetcherKey: o,
          method: P,
          navigate: s,
          replace: h,
          state: g,
          relative: m,
          preventScrollReset: z,
          viewTransition: B,
        });
      };
    return x.createElement("form", {
      ref: Q,
      method: w,
      action: X,
      onSubmit: r ? p : Z,
      ...N,
      "data-discover": !q && f === "render" ? "true" : void 0,
    });
  }
);
uy.displayName = "Form";
function ny(f) {
  return `${f} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function id(f) {
  let o = x.useContext(Ma);
  return (Tt(o, ny(f)), o);
}
function iy(
  f,
  {
    target: o,
    replace: s,
    state: r,
    preventScrollReset: h,
    relative: g,
    viewTransition: R,
  } = {}
) {
  let U = yv(),
    p = Xl(),
    m = Nu(f, { relative: g });
  return x.useCallback(
    (z) => {
      if (Yv(z, o)) {
        z.preventDefault();
        let B = s !== void 0 ? s : Du(p) === Du(m);
        U(f, {
          replace: B,
          state: r,
          preventScrollReset: h,
          relative: g,
          viewTransition: R,
        });
      }
    },
    [p, U, m, s, r, o, f, h, g, R]
  );
}
var fy = 0,
  cy = () => `__${String(++fy)}__`;
function ry() {
  let { router: f } = id("useSubmit"),
    { basename: o } = x.useContext(Ue),
    s = Mv();
  return x.useCallback(
    async (r, h = {}) => {
      let { action: g, method: R, encType: U, formData: p, body: m } = Xv(r, o);
      if (h.navigate === !1) {
        let z = h.fetcherKey || cy();
        await f.fetch(z, s, h.action || g, {
          preventScrollReset: h.preventScrollReset,
          formData: p,
          body: m,
          formMethod: h.method || R,
          formEncType: h.encType || U,
          flushSync: h.flushSync,
        });
      } else
        await f.navigate(h.action || g, {
          preventScrollReset: h.preventScrollReset,
          formData: p,
          body: m,
          formMethod: h.method || R,
          formEncType: h.encType || U,
          replace: h.replace,
          state: h.state,
          fromRouteId: s,
          flushSync: h.flushSync,
          viewTransition: h.viewTransition,
        });
    },
    [f, o, s]
  );
}
function oy(f, { relative: o } = {}) {
  let { basename: s } = x.useContext(Ue),
    r = x.useContext($e);
  Tt(r, "useFormAction must be used inside a RouteContext");
  let [h] = r.matches.slice(-1),
    g = { ...Nu(f || ".", { relative: o }) },
    R = Xl();
  if (f == null) {
    g.search = R.search;
    let U = new URLSearchParams(g.search),
      p = U.getAll("index");
    if (p.some((z) => z === "")) {
      (U.delete("index"),
        p.filter((B) => B).forEach((B) => U.append("index", B)));
      let z = U.toString();
      g.search = z ? `?${z}` : "";
    }
  }
  return (
    (!f || f === ".") &&
      h.route.index &&
      (g.search = g.search ? g.search.replace(/^\?/, "?index&") : "?index"),
    s !== "/" && (g.pathname = g.pathname === "/" ? s : Ke([s, g.pathname])),
    Du(g)
  );
}
function sy(f, o = {}) {
  let s = x.useContext(k0);
  Tt(
    s != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: r } = id("useViewTransitionState"),
    h = Nu(f, { relative: o.relative });
  if (!s.isTransitioning) return !1;
  let g = Je(s.currentLocation.pathname, r) || s.currentLocation.pathname,
    R = Je(s.nextLocation.pathname, r) || s.nextLocation.pathname;
  return Pn(h.pathname, R) != null || Pn(h.pathname, g) != null;
}
[...$v];
const dy = "/assets/background-CDLaCRqM.png",
  hy =
    "data:image/svg+xml,%3csvg%20width='98'%20height='96'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2098%2096'%20fill='currentColor'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M48.854%200C21.839%200%200%2022%200%2049.217c0%2021.756%2013.993%2040.172%2033.405%2046.69%202.427.49%203.316-1.059%203.316-2.362%200-1.141-.08-5.052-.08-9.127-13.59%202.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015%204.934.326%207.523%205.052%207.523%205.052%204.367%207.496%2011.404%205.378%2014.235%204.074.404-3.178%201.699-5.378%203.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283%200-5.378%201.94-9.778%205.014-13.2-.485-1.222-2.184-6.275.486-13.038%200%200%204.125-1.304%2013.426%205.052a46.97%2046.97%200%200%201%2012.214-1.63c4.125%200%208.33.571%2012.213%201.63%209.302-6.356%2013.427-5.052%2013.427-5.052%202.67%206.763.97%2011.816.485%2013.038%203.155%203.422%205.015%207.822%205.015%2013.2%200%2018.905-11.404%2023.06-22.324%2024.283%201.78%201.548%203.316%204.481%203.316%209.126%200%206.6-.08%2011.897-.08%2013.526%200%201.304.89%202.853%203.316%202.364%2019.412-6.52%2033.405-24.935%2033.405-46.691C97.707%2022%2075.788%200%2048.854%200z'/%3e%3c/svg%3e",
  my =
    "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20fill='%23000000'%20width='800px'%20height='800px'%20viewBox='0%200%2024%2024'%20role='img'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M11.996%200a1.119%201.119%200%200%200-.057.003.9.9%200%200%200-.236.05.907.907%200%200%200-.165.079L1.936%205.675a.889.889%200%200%200-.445.77v11.111a.889.889%200%200%200%20.47.784l9.598%205.541.054.029v.002a.857.857%200%200%200%20.083.035l.012.004c.028.01.056.018.085.024.01.001.011.003.016.004a.93.93%200%200%200%20.296.015.683.683%200%200%200%20.086-.015c.01%200%20.011-.002.016-.004a.94.94%200%200%200%20.085-.024l.012-.004a.882.882%200%200%200%20.083-.035v-.002a1.086%201.086%200%200%200%20.054-.029l9.599-5.541a.889.889%200%200%200%20.469-.784V6.48l-.001-.026v-.008a.889.889%200%200%200-.312-.676l-.029-.024c0-.002-.01-.005-.01-.007a.899.899%200%200%200-.107-.07L12.453.127A.887.887%200%200%200%2011.99%200zm.01%202.253c.072%200%20.144.019.209.056l6.537%203.774a.418.418%200%200%201%200%20.724l-6.537%203.774a.418.418%200%200%201-.418%200L5.26%206.807a.418.418%200%200%201%200-.724l6.537-3.774a.42.42%200%200%201%20.209-.056zm-8.08%206.458a.414.414%200%200%201%20.215.057l6.524%203.766a.417.417%200%200%201%20.208.361v7.533a.417.417%200%200%201-.626.361l-6.523-3.766a.417.417%200%200%201-.209-.362V9.13c0-.241.196-.414.41-.418zm16.16%200c.215.004.41.177.41.418v7.532a.42.42%200%200%201-.208.362l-6.524%203.766a.417.417%200%200%201-.626-.361v-7.533c0-.149.08-.286.209-.36l6.523-3.767a.415.415%200%200%201%20.216-.057z'/%3e%3c/svg%3e";
function vy() {
  return Kt.jsx("div", {
    className:
      "min-h-screen bg-cover bg-center flex items-center justify-center",
    style: { backgroundImage: `url(${dy})` },
    children: Kt.jsxs("div", {
      className:
        "bg-black bg-opacity-50 hover:bg-opacity-60 backdrop-blur-md rounded-2xl p-8 max-w-md w-full text-white shadow-lg transition duration-300 ease-in-out text-center",
      children: [
        Kt.jsx("h1", {
          className: "text-4xl font-bold mb-4",
          children: "siegecmd.net",
        }),
        Kt.jsxs("p", {
          className: "text-lg mb-6",
          children: [
            "sometimes I make things, most times I break things.",
            Kt.jsx("br", {}),
            "Security Engineer @ Cloudflare",
          ],
        }),
        Kt.jsxs("div", {
          className: "flex justify-center gap-8",
          children: [
            Kt.jsx("a", {
              href: "https://github.com/siegecmd",
              target: "_blank",
              rel: "noopener noreferrer",
              children: Kt.jsx(hy, {
                className:
                  "h-8 w-8 fill-white hover:scale-110 transition-transform",
              }),
            }),
            Kt.jsx("a", {
              href: "https://app.hackthebox.com/profile/769674",
              target: "_blank",
              rel: "noopener noreferrer",
              children: Kt.jsx(my, {
                className:
                  "h-8 w-8 fill-white hover:scale-110 transition-transform",
              }),
            }),
          ],
        }),
      ],
    }),
  });
}
function yy() {
  return Kt.jsx(ly, {
    children: Kt.jsx(Nv, {
      children: Kt.jsx(td, { path: "/", element: Kt.jsx(vy, {}) }),
    }),
  });
}
Xm.createRoot(document.getElementById("root")).render(
  Kt.jsx(Nm.StrictMode, { children: Kt.jsx(yy, {}) })
);
