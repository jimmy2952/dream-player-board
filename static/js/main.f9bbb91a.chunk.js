(this["webpackJsonpdream-player-board"]=this["webpackJsonpdream-player-board"]||[]).push([[0],{27:function(n,e,t){},33:function(n,e,t){},34:function(n,e,t){"use strict";t.r(e);var r=t(1),c=t(0),i=t.n(c),a=t(17),o=t.n(a),u=(t(27),t(21)),d=t(5),s=t(3),b=t(4),l=t(11),f=t(14);function j(){var n=Object(s.a)(["\n  background-color: #ffffff;\n  border: none;\n"]);return j=function(){return n},n}function x(){var n=Object(s.a)(["\n  width: 95%;\n  border-radius: 8px;\n  font-size: 24px;\n  border: 0.5px solid #dddddd;\n"]);return x=function(){return n},n}function p(){var n=Object(s.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 1rem;\n"]);return p=function(){return n},n}function O(){var n=Object(s.a)(["\n  width: 20%;\n  height: 6vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: flex-end;\n"]);return O=function(){return n},n}function h(){var n=Object(s.a)(["\n  width: 80%;\n  font-size: 24px;\n  color: #4a4a4a;\n  margin: 0;\n"]);return h=function(){return n},n}function v(){var n=Object(s.a)(["\n  display: flex;\n  justify-content: space-between;\n"]);return v=function(){return n},n}function g(){var n=Object(s.a)(["\n  box-sizing: border-box;\n  background-color: #dddddd;\n  border-radius: 8px;\n  padding: 16px;\n  margin-bottom: 2rem;\n"]);return g=function(){return n},n}var m=b.a.div(g()),w=b.a.div(v()),y=b.a.p(h()),z=b.a.div(O()),k=b.a.div(p()),C=b.a.input(x()),S=b.a.hr(j()),F=function(n){var e=Object(c.useState)(),t=Object(d.a)(e,2),i=t[0],a=t[1],o=Object(c.useState)(""),u=Object(d.a)(o,2),s=u[0],b=u[1];return Object(r.jsxs)(m,{children:[Object(r.jsxs)(w,{children:[Object(r.jsx)("div",{style:{display:"flex",alignItems:"flex-start"},children:Object(r.jsx)(y,{children:n.confirmedMessage})}),Object(r.jsxs)(z,{children:[Object(r.jsx)(l.a,{icon:f.b,style:{cursor:"pointer"},onClick:n.deleteMessageHandler}),Object(r.jsx)("span",{style:{color:"white"},children:"\u56de\u8986"})]})]}),!s&&Object(r.jsxs)(k,{children:[Object(r.jsx)(C,{placeholder:"\u8acb\u8f38\u5165\u7559\u8a00...",onChange:function(n,e){a(n.target.value)},value:i}),Object(r.jsx)(l.a,{icon:f.a,onClick:function(){b(i)},style:{cursor:"pointer"}})]}),s&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(S,{size:"5"}),Object(r.jsx)("div",{style:{display:"flex",alignItems:"flex-start"},children:Object(r.jsx)(y,{children:s})})]})]})};t(33);function M(){var n=Object(s.a)(["\n  text-align: center;\n  font-size: 24px;\n  color: #4a4a4a;\n  font-weight: 700;\n"]);return M=function(){return n},n}function I(){var n=Object(s.a)(["\n  background-color: #4a4a4a;\n"]);return I=function(){return n},n}function B(){var n=Object(s.a)([""]);return B=function(){return n},n}function D(){var n=Object(s.a)(["\n  background-color: #4a4a4a;\n  color: white;\n  border-radius: 5px;\n  width: 10rem;\n  font-size: 24px;\n  cursor: pointer;\n"]);return D=function(){return n},n}function H(){var n=Object(s.a)(["\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 0.5rem;\n  margin-bottom: 1.5rem;\n"]);return H=function(){return n},n}function J(){var n=Object(s.a)(["\n  width: 100%;\n  border: 2px solid #dddddd;\n  border-radius: 8px;\n  font-size: 24px;\n  box-sizing: border-box;\n"]);return J=function(){return n},n}function L(){var n=Object(s.a)(["\n  width: 100vw;\n  padding: 8px;\n  border: 1px solid #4a4a4a;\n  @media (min-width: 768px) {\n    width: 60vw;\n    padding: 16px;\n  }\n"]);return L=function(){return n},n}var P=b.a.div(L()),T=b.a.textarea(J()),E=b.a.div(H()),q=b.a.button(D()),A=b.a.div(B()),G=b.a.hr(I()),K=b.a.p(M()),N=function(){var n=Object(c.useState)(""),e=Object(d.a)(n,2),t=e[0],i=e[1],a=Object(c.useState)([]),o=Object(d.a)(a,2),s=o[0],b=o[1];return Object(r.jsx)(P,{children:Object(r.jsxs)("form",{onSubmit:function(n){n.preventDefault(),console.log(s),b((function(n){var e=Object(u.a)(n);return e.push(t),e})),i("")},children:[Object(r.jsx)(T,{rows:"5",placeholder:"\u8acb\u8f38\u5165\u7559\u8a00...",value:t,onChange:function(n){i(n.target.value)}}),Object(r.jsx)(E,{children:Object(r.jsx)(q,{type:"submit",children:"\u7559\u8a00"})}),!s[0]&&Object(r.jsxs)(A,{children:[Object(r.jsx)(G,{size:"5"}),Object(r.jsx)(K,{children:"\u76ee\u524d\u6c92\u6709\u8a0a\u606f"})]}),s&&s.map((function(n,e){return Object(r.jsx)(F,{confirmedMessage:n,deleteMessageHandler:function(){return function(n){b((function(e){return e.filter((function(e,t){return t!==n}))}))}(e)}},e)}))]})})},Q=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,35)).then((function(e){var t=e.getCLS,r=e.getFID,c=e.getFCP,i=e.getLCP,a=e.getTTFB;t(n),r(n),c(n),i(n),a(n)}))};o.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(N,{})}),document.getElementById("root")),Q()}},[[34,1,2]]]);
//# sourceMappingURL=main.f9bbb91a.chunk.js.map