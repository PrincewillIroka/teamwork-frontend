(this["webpackJsonpteamwork-frontend"]=this["webpackJsonpteamwork-frontend"]||[]).push([[0],{47:function(e,n,t){e.exports=t.p+"static/media/undraw_interaction_design_odgc.dbc96d1a.svg"},48:function(e,n,t){e.exports=t.p+"static/media/logo.3680027d.png"},54:function(e,n,t){e.exports=t(90)},88:function(e,n,t){},90:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(22),o=t.n(i),s=t(18),c=t(17),l=t(45);function u(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?u(t,!0).forEach((function(n){Object(l.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var p={userData:JSON.parse(localStorage.getItem("userData"))||{},isLoggedIn:!1},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"POPULATE_USER_DATA":return d({},e,{userData:n.payload,isLoggedIn:!e.isLoggedIn});default:return e}},f=Object(c.b)({userReducer:m}),g=function(e,n){return f(e,n)},h=Object(c.c)(g),b=t(27),v=t(13),O=t(23),y=t(29),x=t.n(y),w=t(46),j=t(6),E=t(7),S=t(9),k=t(8),D=t(10),L=t(30),I=t.n(L),P=t(24),N=t(47),C=t.n(N),A=t(48),_=t.n(A),J="https://teamwork-a.herokuapp.com";function z(){var e=Object(O.a)(["\n.spinner-layout{\n  display: flex;\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n\n  .loader {\n    border-radius: 50%;\n    animation: spin 2s linear infinite;\n  }\n\n  @keyframes spin {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n}\n"]);return z=function(){return e},e}var T=function(e){function n(e){var t;return Object(j.a)(this,n),(t=Object(S.a)(this,Object(k.a)(n).call(this,e))).layoutSize=function(){return{height:t.props.spinnerHeight,width:t.props.spinnerWidth,border:"".concat(t.props.border,"px solid #f3f3f3"),borderTop:"".concat(t.props.border,"px solid #3892e9")}},t}return Object(D.a)(n,e),Object(E.a)(n,[{key:"render",value:function(){return r.a.createElement(R,null,r.a.createElement("div",{className:"spinner-layout"},r.a.createElement("div",{className:"loader",style:this.layoutSize()})))}}]),n}(a.Component),R=P.a.div(z());function U(){var e=Object(O.a)(["\n    .login-container{\n        display:flex;\n        height:100vh;\n\n        .f-div{\n            width: 30%;\n            background-color:#294ba1;\n            display: flex;\n            flex-direction:column;\n            align-items: center;\n\n            .appLogo{\n                width: 80px;\n                height: 80px;\n                border-radius: 50%;\n                margin: 50px 0 100px;\n            }\n\n            .form-container{\n                display: flex;\n                flex-direction:column;\n                align-items: center;\n                >span:nth-child(1){\n                    color: #fff;\n                    font-size: 18px;\n                    font-family: Arial;\n                    margin-bottom: 50px;\n                }\n\n                >form{\n                    display: flex;\n                    flex-direction:column;\n                    width: 100%;\n\n                    .message-div{\n                        display:block;\n                        color: #f44336;\n                        text-align:center;\n                        font-size: 14px;\n                        margin-bottom: 3px;\n                    }\n\n                    >div{\n                        display: flex;\n                        background-color: #fff;\n                        border:1px solid #ccc;\n                        border-radius:3px;\n                        padding: 3px;\n                        margin-bottom:20px;\n\n                            input{\n                            border:none;\n                            outline:none;\n                            padding: 5px 7px;\n                            font-size: 16px;\n                        }\n\n                    }\n\n                    >button{\n                        margin-top: 30px;\n                        padding: 7px 0;\n                        font-weight: bold;\n                        font-size: 16px;\n                        color:#294ba1;\n                        background-color: #fff;\n                        outline:none;\n                        border:1px solid transparent;\n                        border-radius:3px;\n                        &:hover{\n                            background-color:#294ba1;\n                            color: #fff;\n                            border: 1px solid #fff;\n                        }\n                    }\n\n                    .disabled-btn{\n                        pointer-events: none;\n                    }\n\n                    \n                }\n            }\n        }\n\n        .s-div{\n            width: 60%;\n            display:flex;\n            align-items:center;\n            justify-content:center;\n            .bgImage{\n                height: 50%;\n                width:50%;\n            }\n        }\n\n    }\n\n    @media(max-width: 840px){\n        .f-div{\n            width: 50% !important;\n        }\n\n        .s-div{\n            width: 50% !important;\n\n        }\n    }\n\n    @media(max-width: 520px){\n        .f-div{\n            width: 100% !important;\n        }\n\n        .s-div{\n            display:none !important;\n        }\n    }\n"]);return U=function(){return e},e}var B=function(e){function n(e){var t;return Object(j.a)(this,n),(t=Object(S.a)(this,Object(k.a)(n).call(this,e))).handleChange=function(e,n){"email"===e?t.setState({message:"",email:n.target.value}):"password"===e&&t.setState({message:"",password:n.target.value})},t.handleLogin=function(e){if(e.preventDefault(),t.state.email)if(t.state.password)if(t.isValidEmail(t.state.email)){t.setState({isLoading:!0});var n=J+"/api/v1/auth/signin",a=t.state.email,r=t.state.password;fetch(n,{method:"POST",body:JSON.stringify({email:a,password:r})}).then((function(e){return e.json()})).then(function(){var e=Object(w.a)(x.a.mark((function e(n){var a,r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.hasOwnProperty("status")){e.next=11;break}if(a=n.status,r=n.data,"success"!==a){e.next=8;break}return e.next=5,sessionStorage.setItem("userData",JSON.stringify(r));case 5:window.location.replace("/"),e.next=9;break;case 8:t.setState({message:"Invalid login",isLoading:!1});case 9:e.next=12;break;case 11:t.setState({message:"Invalid login",isLoading:!1});case 12:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()).catch((function(e){return console.log(e)}))}else t.setState({message:"Please enter a valid email address"});else t.setState({message:"Password cannot be empty"});else t.setState({message:"Email cannot be empty"})},t.isValidEmail=function(e){return/\S+@\S+\.\S+/.test(e)},t.state={message:"",email:"",password:"",userData:JSON.parse(sessionStorage.getItem("userData")),isLoading:!1},t}return Object(D.a)(n,e),Object(E.a)(n,[{key:"componentDidMount",value:function(){this.state.userData&&window.location.replace("/")}},{key:"render",value:function(){var e=this;return r.a.createElement(M,null,r.a.createElement("div",{className:"login-container"},r.a.createElement("div",{className:"f-div"},r.a.createElement("img",{src:_.a,alt:"App Logo",className:"appLogo"}),r.a.createElement("div",{className:"form-container"},r.a.createElement("span",null,"Sign In"),r.a.createElement("form",null,r.a.createElement("span",{className:"message-div"},this.state.message),r.a.createElement("div",null,r.a.createElement(I.a,{icon:"person"}),r.a.createElement("input",{type:"email",placeholder:"Email",value:this.state.email,onChange:function(n){return e.handleChange("email",n)}})),r.a.createElement("div",null,r.a.createElement(I.a,{icon:"vpn_key"}),r.a.createElement("input",{type:"password",placeholder:"Password",value:this.state.password,onChange:function(n){return e.handleChange("password",n)}})),r.a.createElement("button",{className:"".concat(this.state.isLoading?"disabled-btn":""),onClick:function(n){return e.handleLogin(n)}},this.state.isLoading?r.a.createElement(T,{spinnerHeight:10,spinnerWidth:10,border:7}):r.a.createElement("div",{className:"sign-in-text"},"Sign In"))))),r.a.createElement("div",{className:"s-div"},r.a.createElement("img",{src:C.a,alt:"Background Image",className:"bgImage"}))))}}]),n}(a.Component),H=Object(s.b)((function(e){return{isLoggedIn:e.userReducer.isLoggedIn}}),(function(e){return{populateUserData:function(n){e({type:"POPULATE_USER_DATA",payload:n})}}}))(B),M=P.a.div(U()),V=function(e){function n(e){var t;return Object(j.a)(this,n),(t=Object(S.a)(this,Object(k.a)(n).call(this,e))).state={},t}return Object(D.a)(n,e),Object(E.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,"AdminDashboard")}}]),n}(a.Component),W=function(e){function n(e){var t;return Object(j.a)(this,n),(t=Object(S.a)(this,Object(k.a)(n).call(this,e))).state={},t}return Object(D.a)(n,e),Object(E.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,"EmployeeDashboard")}}]),n}(a.Component),F=function(e){function n(e){var t;return Object(j.a)(this,n),(t=Object(S.a)(this,Object(k.a)(n).call(this,e))).state={userData:JSON.parse(sessionStorage.getItem("userData"))},t}return Object(D.a)(n,e),Object(E.a)(n,[{key:"componentDidMount",value:function(){this.state.userData||window.location.replace("/login")}},{key:"render",value:function(){return r.a.createElement(a.Fragment,null,this.state.userData&&"admin"===this.state.userData.accessLevel?r.a.createElement(V,null):this.state.userData&&"employee"===this.state.userData.accessLevel?r.a.createElement(W,null):null)}}]),n}(a.Component),q=Object(s.b)((function(e){return{userData:e.userReducer.userData}}),(function(e){return{}}))(F);t(88);var G=function(){return r.a.createElement(b.a,null,r.a.createElement(v.c,null,r.a.createElement(v.a,{path:"/login",component:H}),r.a.createElement(v.a,{path:"/",component:q})))};o.a.render(r.a.createElement(s.a,{store:h},r.a.createElement(G,null)),document.getElementById("root"))}},[[54,1,2]]]);
//# sourceMappingURL=main.7c63c6dd.chunk.js.map