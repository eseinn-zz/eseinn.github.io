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
          '\n  text-align: center;\n  font-size: 40px;\n  color: #d5d3da;\n  font-weight: bold;\n  @media only screen and (max-width: 500px) {\n    font-size: 32px;\n  }\n',
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
        p = t(5);
      function x() {
        var n = Object(u.a)(['\n  width: 100%;\n']);
        return (
          (x = function () {
            return n;
          }),
          n
        );
      }
      var j = s.a.div(x()),
        l = function (n) {
          var e = h(n),
            t = Object(p.a)(e, 3),
            a = t[0],
            c = t[1];
          return t[2] ? Object(r.jsx)('a', { href: c, children: a || c }) : a;
        },
        h = function (n) {
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
        v = function (n) {
          var e = n.day;
          return Object(r.jsx)(j, { children: l(e) });
        };
      function w() {
        var n = Object(u.a)([
          '\n  color: unset;\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  font-size: 14px;\n  overflow-wrap: anywhere;\n',
        ]);
        return (
          (w = function () {
            return n;
          }),
          n
        );
      }
      function g() {
        var n = Object(u.a)(['\n  font-size: 18px;\n  font-weight: bold;\n']);
        return (
          (g = function () {
            return n;
          }),
          n
        );
      }
      function O() {
        var n = Object(u.a)([
          '\n  min-height: 100px;\n  border: 1px solid;\n  display: flex;\n  padding: 8px;\n  min-width: 100px;\n  margin: 4px;\n  justify-content: center;\n  flex-direction: column;\n  justify-content: start;\n  flex: 0 0 10%;\n  cursor: ',
          ';\n  background: ',
          ";\n  border-radius: 8px;\n  opacity: 0.8;\n  box-shadow: '0 0 40px 40px none inset, 0 0 0 0 none';\n  transition: 'all 150ms ease-in-out';\n  :hover {\n    opacity: 1;\n    box-shadow: ",
          ';\n    outline: 0;\n  }\n  :focus {\n    outline: 0;\n  }\n  :hover > span {\n    color: #d5d3da;\n  }\n',
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
            return n.isTodayHidden ? 'pointer' : '';
          },
          function (n) {
            return n.isToday ? '#0b601c' : '#b31315';
          },
          function (n) {
            return n.isToday
              ? '0 0 10px 0 #0b601c inset, 0 0 10px 4px #0b601c'
              : '0 0 10px 0 #b31315 inset, 0 0 10px 4px #b31315';
          },
        ),
        y = s.a.span(g()),
        z = s.a.div(w()),
        D = function (n) {
          var e = n.day,
            t = c.a.useState(!1),
            a = Object(p.a)(t, 2),
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
                Object(r.jsx)(z, { children: Object(r.jsx)(v, { day: e }) }),
            ],
          });
        };
      function H() {
        var n = Object(u.a)([
          '\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  flex-direction: row;\n',
        ]);
        return (
          (H = function () {
            return n;
          }),
          n
        );
      }
      function P() {
        var n = Object(u.a)(['\n  margin: 8px 0;\n  padding: 4px;\n']);
        return (
          (P = function () {
            return n;
          }),
          n
        );
      }
      var T = s.a.div(P()),
        C = s.a.div(H()),
        E = function () {
          for (var n = [], e = 1; e < 25; e++)
            n.push(Object(r.jsx)(D, { day: e }));
          return n;
        },
        J = function () {
          return Object(r.jsx)(T, {
            children: Object(r.jsx)(C, { children: E() }),
          });
        },
        q = t.p + 'public/static/media/background.ea493d5d.jpg';
      function A() {
        var n = Object(u.a)([
          '\n  text-align: center;\n  font-size: 18px;\n  margin-bottom: 16px;\n  color: #d5d3da;\n  font-weight: bold;\n',
        ]);
        return (
          (A = function () {
            return n;
          }),
          n
        );
      }
      function B() {
        var n = Object(u.a)([
          '\n  margin-top: 16px;\n  text-align: center;\n  font-size: 18px;\n  color: #d5d3da;\n  font-weight: bold;\n',
        ]);
        return (
          (B = function () {
            return n;
          }),
          n
        );
      }
      function G() {
        var n = Object(u.a)(['\n  margin: 8px;\n']);
        return (
          (G = function () {
            return n;
          }),
          n
        );
      }
      function I() {
        var n = Object(u.a)([
          '\n  position: fixed;\n  top: 0;\n  z-index: -1;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: ',
          ';\n  will-change: transform;\n  z-index: -1;\n  -webkit-background-size: cover;\n  -ms-background-size: cover;\n  -moz-background-size: cover;\n  -o-background-size: cover;\n  background-size: cover;\n  background-position: center center;\n  background-repeat: no-repeat;\n',
        ]);
        return (
          (I = function () {
            return n;
          }),
          n
        );
      }
      var K = s.a.div(I(), function (n) {
          return 'url('.concat(n.src, ')');
        }),
        L = s.a.div(G()),
        Z = s.a.div(B()),
        F = s.a.div(A()),
        M = new Date(),
        R = M.getDate(),
        S = function () {
          return Object(r.jsxs)(L, {
            children: [
              Object(r.jsxs)(Z, {
                children: [
                  '\xcd dag er ',
                  R + '.' + (M.getMonth() + 1) + '.2020',
                ],
              }),
              Object(r.jsxs)(F, {
                children: ['og \xfea\xf0 eru ', 24 - R, ' dagar til j\xf3la!'],
              }),
              Object(r.jsx)(J, {}),
              Object(r.jsx)(K, { src: q }),
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
            Object(r.jsx)(S, {}),
            Object(r.jsx)(_, {}),
          ],
        });
      };
      o.a.render(
        Object(r.jsx)(c.a.StrictMode, { children: Object(r.jsx)(X, {}) }),
        document.getElementById('root'),
      );
    },
  },
  [[22, 1, 2]],
]);
//# sourceMappingURL=main.c313feab.chunk.js.map
