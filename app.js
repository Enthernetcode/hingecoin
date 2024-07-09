document.addEventListener("DOMContentLoaded", function() {
  const topnav = document.getElementById("top-nav");
const loaderCont = document.getElementById("loadCont");
const initializeUser = () => {
  let me = JSON.parse(localStorage.getItem("hcuser"));
  if(!me){
      me = {
        token: 500,
        guage: 5000,
      }
      const meString = JSON.stringify(me);
      localStorage.setItem('hcuser', meString);    
  }
  console.log("me initialized");
};

initializeUser();


window.addEventListener('scroll', function() {
  if (window.scrollY > 10) {
    topnav.style.backgroundColor="#143033";
  }else{
    topnav.style.backgroundColor="transparent";
  }
});


setTimeout(()=>{
  loaderCont.innerHTML = "";
},2000);


});


