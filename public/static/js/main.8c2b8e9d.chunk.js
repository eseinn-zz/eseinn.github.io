(this.webpackJsonpjoladagatal = this.webpackJsonpjoladagatal || []).push([
  [0],
  {
    18: function (n, e, t) {},
    19: function (n, e, t) {},
    22: function (n, e, t) {
      'use strict';
      t.r(e);
      var r = t(0),
        a = t(1),
        c = t.n(a),
        i = t(9),
        o = t.n(i),
        u = (t(18), t(2)),
        s = (t(19), t(3));
      function b() {
        var n = Object(u.a)([
          '\n  text-align: center;\n  font-size: 40px;\n  color: #d5d3da;\n  font-weight: bold;\n',
        ]);
        return (
          (b = function () {
            return n;
          }),
          n
        );
      }
      var d = s.a.h1(b()),
        f = function () {
          return Object(r.jsx)(d, { children: 'J\xf3la\xe6fingadagatali\xf0' });
        },
        l = t(5);
      function p() {
        var n = Object(u.a)(['']);
        return (
          (p = function () {
            return n;
          }),
          n
        );
      }
      var j = s.a.div(p()),
        x = function (n) {
          var e = v(n),
            t = Object(l.a)(e, 3),
            a = t[0],
            c = t[1];
          return t[2] ? Object(r.jsx)('a', { href: c, children: a || c }) : a;
        },
        v = function (n) {
          var e = null,
            t = null,
            r = !1;
          switch (n) {
            case 1:
              e = '50 burpees (brj\xf3ta upp \xed vi\xf0r\xe1\xf0anleg sett)';
              break;
            case 2:
              e = '5 m\xedn. wall squat (t.d. 1 min x5)';
              break;
            case 3:
              (e = '100x bakfettur'),
                (t = 'https://www.youtube.com/watch?v=DDJtB8Zgyow'),
                (r = !0);
              break;
            case 4:
              (t = 'https://www.youtube.com/watch?v=9DqQ5GfZth4'), (r = !0);
              break;
            case 5:
              (t = ' https://www.youtube.com/watch?v=oAPCPjnU1wA'), (r = !0);
              break;
            case 6:
              e = 'H\xe1lft\xedma g\xf6ngut\xfar';
              break;
            case 7:
              e = '50 armbeygjur';
              break;
            case 8:
              (t = 'https://www.youtube.com/watch?v=E6IrIPnzsKE'), (r = !0);
              break;
            case 9:
              (t = 'https://www.youtube.com/watch?v=GfUpbhaCK7Y'), (r = !0);
              break;
            case 10:
              (e =
                'Veldu 10 teygjur og ger\xf0u hverja \xed a.m.k. m\xedn\xfatu'),
                (t =
                  'https://www.youtube.com/watch?v=RCFF0Ogkqfw&list=PL0mpr8-xOflAKZwOcG4_vLsLHyYEhBDRx&index=14'),
                (r = !0);
              break;
            case 11:
              e = '10 burpees';
              break;
            case 12:
              e = '20 burpees';
              break;
            case 13:
              e = '10 burpees';
              break;
            case 14:
              e = '20 burpees';
              break;
            case 15:
              e = '10 burpees';
              break;
            case 16:
              e = '20 burpees';
              break;
            case 17:
              e = '10 burpees';
              break;
            case 18:
              e = '20 burpees';
              break;
            case 19:
              e = '10 burpees';
              break;
            case 20:
              e = '20 burpees';
              break;
            case 21:
              e = '10 burpees';
              break;
            case 22:
            case 23:
            case 24:
              e = '20 burpees';
          }
          return [e, t, r];
        },
        g = function (n) {
          var e = n.day;
          return Object(r.jsx)(j, { children: x(e) });
        };
      function h() {
        var n = Object(u.a)([
          '\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 12px;\n  overflow-wrap: anywhere;\n',
        ]);
        return (
          (h = function () {
            return n;
          }),
          n
        );
      }
      function w() {
        var n = Object(u.a)([
          '\n  font-size: 14px;\n  position: absolute;\n  font-weight: bold;\n',
        ]);
        return (
          (w = function () {
            return n;
          }),
          n
        );
      }
      function O() {
        var n = Object(u.a)([
          '\n  height: 100px;\n  border: 1px solid;\n  display: flex;\n  padding: 8px;\n  min-width: 100px;\n  margin: 4px;\n  justify-content: center;\n  flex-direction: column;\n  justify-content: start;\n  flex: 0 0 10%;\n  cursor: ',
          ';\n  background: ',
          ';\n  border-radius: 8px;\n  opacity: 0.9;\n  box-shadow: 0 0 40px 40px none inset, 0 0 0 0 none;\n  -webkit-transition: ',
          '\n  transition:  ',
          '\n  :hover {\n    box-shadow: ',
          ';\n    color: #d5d3da;\n    outline: 0;\n  }\n  :focus {\n    color: #d5d3da;\n    outline: 0;\n  }\n',
        ]);
        return (
          (O = function () {
            return n;
          }),
          n
        );
      }
      var k = new Date().getDate(),
        m = s.a.div(
          O(),
          function (n) {
            return n.isTodayHidden && 'pointer';
          },
          function (n) {
            return n.isToday ? '#0b601c' : '#b31315';
          },
          function (n) {
            return n.isToday && 'all 150ms ease-in-out';
          },
          function (n) {
            return n.isToday && 'all 150ms ease-in-out;';
          },
          function (n) {
            return (
              n.isToday && '0 0 10px 0 #0b601c inset, 0 0 10px 4px #0b601c'
            );
          },
        ),
        y = s.a.div(w()),
        z = s.a.div(h()),
        D = function (n) {
          var e = n.day,
            t = c.a.useState(!1),
            a = Object(l.a)(t, 2),
            i = a[0],
            o = a[1],
            u = e === k,
            s = e < k;
          return Object(r.jsxs)(m, {
            isToday: u,
            dayHasPast: s,
            isTodayHidden: u && !i,
            onClick: function () {
              return u ? o(!0) : null;
            },
            children: [
              Object(r.jsx)(y, { children: e }),
              (i || s) &&
                Object(r.jsx)(z, { children: Object(r.jsx)(g, { day: e }) }),
            ],
          });
        };
      function T() {
        var n = Object(u.a)([
          '\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  flex-direction: row;\n',
        ]);
        return (
          (T = function () {
            return n;
          }),
          n
        );
      }
      function C() {
        var n = Object(u.a)(['\n  margin: 8px 0;\n  padding: 4px;\n']);
        return (
          (C = function () {
            return n;
          }),
          n
        );
      }
      var P = s.a.div(C()),
        F = s.a.div(T()),
        H = function () {
          for (var n = [], e = 1; e < 25; e++)
            n.push(Object(r.jsx)(D, { day: e }));
          return n;
        },
        L = function () {
          return Object(r.jsx)(P, {
            children: Object(r.jsx)(F, { children: H() }),
          });
        },
        B = t.p + 'static/media/background.ea493d5d.jpg';
      function E() {
        var n = Object(u.a)([
          '\n  text-align: center;\n  font-size: 24px;\n  margin-bottom: 16px;\n  color: #d5d3da;\n  font-weight: bold;\n',
        ]);
        return (
          (E = function () {
            return n;
          }),
          n
        );
      }
      function I() {
        var n = Object(u.a)([
          '\n  margin-top: 16px;\n  text-align: center;\n  font-size: 24px;\n  color: #d5d3da;\n  font-weight: bold;\n',
        ]);
        return (
          (I = function () {
            return n;
          }),
          n
        );
      }
      function J() {
        var n = Object(u.a)(['\n  margin: 8px;\n']);
        return (
          (J = function () {
            return n;
          }),
          n
        );
      }
      function q() {
        var n = Object(u.a)([
          '\n  position: fixed;\n  top: 0;\n  z-index: -1;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: ',
          ';\n  will-change: transform;\n  z-index: -1;\n  -webkit-background-size: cover;\n  -ms-background-size: cover;\n  -moz-background-size: cover;\n  -o-background-size: cover;\n  background-size: cover;\n  background-position: center center;\n  background-repeat: no-repeat;\n',
        ]);
        return (
          (q = function () {
            return n;
          }),
          n
        );
      }
      var A = s.a.div(q(), function (n) {
          return 'url('.concat(n.src, ')');
        }),
        G = s.a.div(J()),
        K = s.a.div(I()),
        S = s.a.div(E()),
        Z = new Date(),
        M = Z.getDate(),
        R = function () {
          return Object(r.jsxs)(G, {
            children: [
              Object(r.jsxs)(K, {
                children: [
                  '\xcd dag er ',
                  M + '.' + (Z.getMonth() + 1) + '.2020',
                ],
              }),
              Object(r.jsxs)(S, {
                children: ['og \xfea\xf0 eru ', 24 - M, ' dagar til j\xf3la!'],
              }),
              Object(r.jsx)(L, {}),
              Object(r.jsx)(A, { src: B }),
            ],
          });
        };
      function U() {
        var n = Object(u.a)(['']);
        return (
          (U = function () {
            return n;
          }),
          n
        );
      }
      function Y() {
        var n = Object(u.a)([
          '\n  text-align: center;\n  position: fixed;\n  bottom: 0px;\n  width: 100%;\n  margin-bottom: 8px;\n  font-size: 10px;\n  display: flex;\n',
        ]);
        return (
          (Y = function () {
            return n;
          }),
          n
        );
      }
      var Q = s.a.div(Y()),
        V = s.a.div(U()),
        _ = function () {
          return Object(r.jsx)(Q, { children: Object(r.jsx)(V, {}) });
        };
      function N() {
        var n = Object(u.a)(['\n  padding: 8px;\n']);
        return (
          (N = function () {
            return n;
          }),
          n
        );
      }
      var W = s.a.div(N());
      var X = function () {
          return Object(r.jsxs)(W, {
            children: [
              Object(r.jsx)(f, {}),
              Object(r.jsx)(R, {}),
              Object(r.jsx)(_, {}),
            ],
          });
        },
        $ = function (n) {
          n &&
            n instanceof Function &&
            t
              .e(3)
              .then(t.bind(null, 23))
              .then(function (e) {
                var t = e.getCLS,
                  r = e.getFID,
                  a = e.getFCP,
                  c = e.getLCP,
                  i = e.getTTFB;
                t(n), r(n), a(n), c(n), i(n);
              });
        };
      o.a.render(
        Object(r.jsx)(c.a.StrictMode, { children: Object(r.jsx)(X, {}) }),
        document.getElementById('root'),
      ),
        $();
    },
  },
  [[22, 1, 2]],
]);
//# sourceMappingURL=main.8c2b8e9d.chunk.js.map
