"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[98],{10098:function(n,e,o){o.r(e),o.d(e,{default:function(){return K}});var t,r,i,l,c,s,a,d,p,x,u,g=o(11087),h=o(57689),f=o(30168),b=o(16444),m=b.ZP.header(t||(t=(0,f.Z)(["\n  padding: 12px 16px;\n\n  display: flex;\n  justify-content: space-between;\n"]))),Z=o(81980),j=o(29439),k=o(72791),w=o(54164),v=b.ZP.div(r||(r=(0,f.Z)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  z-index: 100;\n  transform: translate(-50%, -50%);\n  color: #52555f;\n  background-color: #fff;\n  border-radius: 30px;\n  box-shadow: 10px 10px 30px rgba(82, 85, 95, 0.4);\n"]))),y=b.ZP.div(i||(i=(0,f.Z)(["\n  padding: 50px 20px 60px;\n  @media screen and (min-width: 768px) {\n    padding: 50px 58px 60px;\n  }\n"]))),C=b.ZP.p(l||(l=(0,f.Z)(["\n  margin-bottom: 20px;\n  text-align: center;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 1.14;\n  letter-spacing: 0.02em;\n"]))),P=b.ZP.div(c||(c=(0,f.Z)(["\n  display: flex;\n  gap: 15px;\n"]))),z=b.ZP.button(s||(s=(0,f.Z)(["\n  border: none;\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  background: transparent;\n  cursor: pointer;\n"]))),E=b.ZP.div(a||(a=(0,f.Z)(["\n  position: absolute;\n  top: 0;\n  z-index: 100;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background-color: rgba(0, 0, 0, 0.2);\n"]))),M=o(23853),F=o(20183),L=b.ZP.button(d||(d=(0,f.Z)(["\n  width: 125px;\n  height: 44px;\n  background: ",";\n  border-radius: 16px;\n  font-size: 12px;\n  line-height: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  letter-spacing: 0.02em;\n  text-transform: uppercase;\n  color: ",";\n  border: 2px solid #f6f7fc;\n  text-align: center;\n  transition: background 400ms ease-in-out, color 400ms ease-in-out;\n\n  &:not(:last-child) {\n    margin-right: 15px;\n  }\n\n  :hover,\n  :focus {\n    background: ",";\n    color: ",";\n  }\n"])),F.Z.whiteColor,F.Z.textColor,F.Z.activeColor,F.Z.whiteColor),_=o(80184),D=function(n){var e=n.children,o=n.dispatch,t=n.closeModal;return(0,_.jsx)(L,{onClick:function(){"Yes"===e&&(o(),t())},children:e})},I=function(n){var e=n.children,o=n.closeModal;return(0,_.jsx)(L,{onClick:o,children:e})},S=document.getElementById("modal-root"),q=document.querySelector("body"),A=function(n){var e=n.children,o=n.closeModal,t=n.dispatch;(0,k.useEffect)((function(){return window.addEventListener("keydown",r),function(){window.removeEventListener("keydown",r),q.classList.toggle("no-scroll")}}));var r=function(n){"Escape"===n.code&&o()};return(0,w.createPortal)((0,_.jsx)(E,{className:"modal-backdrop",onClick:function(n){n.target===n.currentTarget&&o()},children:(0,_.jsxs)(v,{children:[(0,_.jsx)(z,{onClick:o,children:(0,_.jsx)(M.q5L,{size:20})}),(0,_.jsxs)(y,{children:[(0,_.jsx)(C,{children:e}),(0,_.jsxs)(P,{children:[(0,_.jsx)(D,{type:"button",dispatch:t,closeModal:o,children:"Yes"}),(0,_.jsx)(I,{type:"button",closeModal:o,children:"No"})]})]})]})}),S)},B=o(40187),G=o(45455),N=o(59434),R=o(75822),T=b.ZP.div(p||(p=(0,f.Z)(["\n  display: flex;\n  align-items: center;\n"]))),Y=b.ZP.p(x||(x=(0,f.Z)(["\n  padding-right: 20px;\n  padding-left: 24px;\n  font-family: 'Roboto';\n  font-weight: 400;\n  font-size: 12px;\n  line-height: calc(14 / 12);\n  letter-spacing: 0.04;\n  border-right: 1px solid ",";\n  color: ",";\n"])),F.Z.borderColor,F.Z.textColor),U=b.ZP.button(u||(u=(0,f.Z)(["\n  margin-left: 20px;\n  text-decoration: underline;\n  font-family: 'Roboto';\n  font-weight: 400;\n  font-size: 12px;\n  line-height: calc(14 / 12);\n  letter-spacing: 0.04;\n  border: none;\n  background-color: transparent;\n  color: ",";\n  cursor: pointer;\n\n  :hover,\n  :focus {\n    color: ",";\n  }\n"])),F.Z.textColor,F.Z.activeColor),H=o(41213);function J(){var n=(0,Z.a)().userEmail,e=(0,k.useState)(!1),o=(0,j.Z)(e,2),t=o[0],r=o[1],i=(0,B.G)().isTabletAndDesktop,l=(0,N.I0)();return(0,_.jsxs)(T,{children:[(0,_.jsx)(G.ZP,{size:"32",color:"#F5F6FA",fgColor:"#52555F",round:!0,name:n}),i&&(0,_.jsx)(Y,{children:n}),(0,_.jsx)(U,{type:"button",onClick:function(){r(!0)},children:i?"Exit":(0,_.jsx)(H.pGv,{size:16,color:"#CBCCD0"})}),t&&(0,_.jsx)(A,{closeModal:function(){r(!1)},dispatch:function(){l((0,R.ni)())},children:"Do you really want to leave?"})]})}function K(){var n=(0,Z.a)().isLoggedIn;return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)(m,{children:[(0,_.jsx)(g.rU,{to:"/main",children:(0,_.jsxs)("picture",{children:[(0,_.jsx)("source",{srcSet:"/images/logo/logo.webp 1x",type:"image/webp"}),(0,_.jsx)("img",{src:"/images/logo/logo.png",alt:"logo"})]})}),n&&(0,_.jsx)(J,{})]}),(0,_.jsx)(h.j3,{})]})}}}]);
//# sourceMappingURL=98.29931d2b.chunk.js.map