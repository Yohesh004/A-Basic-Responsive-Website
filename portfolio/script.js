
const btn=document.getElementsByClassName('.btn')[0];
const sideNav=document.getElementsByClassName('.sidenav')[0];
    
btn.addEventListner('click',()=>{
    sideNav.classList.toggle('.active');
    }); 