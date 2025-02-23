import{E as i,k as o,ac as d}from"./geFSAwWZ.js";import{u as c,r as g}from"./DXutHP6I.js";const n=c(),{response:r}=g(),m=i("auth",{state:()=>({user:{phone:"",country_code:"",accountType:null},token:null,isLoggedIn:!1,newPhone:null,notificationToken:null,test:"test key",currentemail:null,currentPasword:null,hasTwoAccount:null,newemail:null}),actions:{async signInHandler(e){if(e.statusCode===200&&e.key==="success"){this.user=e.data,this.token=e.data.token,this.isLoggedIn=!0;const s=c();return s.defaults.headers.Authorization=`Bearer ${this.token}`,{status:"success",msg:e.message}}else return{status:"error",msg:e.message}},async signUpHandler(e){const s=await n.post("sign-up",e);return r(s)=="success"?(this.user=s.data.data,o("/Auth/activateAccount"),{status:"success",msg:s.data.msg}):{status:"error",msg:s.data.msg}},async verificationHandler(e){const s=await n.post("activate?_method=patch",e);return r(s)=="success"?(this.token=s.data.data.token,this.isLoggedIn=!0,o("/"),{status:"success",msg:s.data.msg}):{status:"error",msg:s.data.msg}},async profileHandler(e){const s={headers:{Authorization:`Bearer ${this.token}`}},t=await n.post("update-profile",e,s);return r(t)=="success"?(this.user=t.data.data,{status:"success",msg:t.data.msg}):{status:"error",msg:t.data.msg}},async phoneHandler(e,s){const t={headers:{Authorization:`Bearer ${this.token}`}},a=await n.post("change-phone-send-code",e,t);return r(a)=="success"?(this.newPhone=s,o("/mobileActivateCode"),{status:"success",msg:a.data.msg}):{status:"error",msg:a.data.msg}},async logoutHandler(){var s,t;const e={headers:{Authorization:`Bearer ${this.token}`}};try{const{data:a}=await n.post("Logout",{},e);return a.key==="success"?(this.token=null,this.user={phone:"",country_code:""},this.isLoggedIn=!1,o("/Auth/login"),{status:"success",msg:a.message}):{status:"error",msg:a.message}}catch(a){return{status:"error",msg:((t=(s=a.response)==null?void 0:s.data)==null?void 0:t.message)||"An error occurred"}}},async deleteAccountHandler(){const e={headers:{Authorization:`Bearer ${this.token}`}},s=await n.post("delete-account","",e);return r(s)=="success"||r(s)=="blocked"||r(s)=="unauthenticated"?(this.token=null,this.user={phone:"",country_code:"",image:null,email:null,name:null},this.isLoggedIn=!1,{status:"success",msg:s.data.msg}):{status:"error",msg:s.data.msg}},async changeMailHandler(e,s,t){const a={headers:{Authorization:`Bearer ${this.token}`}},u=await n.post("change-email-send-code",e,a);return r(u)=="success"?(this.currentemail=s,this.currentPasword=t,o("/emailActivateCode"),{status:"success",msg:u.data.msg}):{status:"error",msg:u.data.msg}}},persist:{storage:d.cookiesWithOptions({sameSite:"strict"})}});export{m as u};
