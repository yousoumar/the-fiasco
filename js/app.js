window.onscroll = ()=>{
    if(window.pageYOffset >= 10 ){
        document.querySelector('header .topbar-container').classList.add('scrolled');
      
    }else{
        document.querySelector('header .topbar-container').classList.remove('scrolled');
    }
}

document.querySelector('.hamburger-button').addEventListener('click', (e) =>{
    e.currentTarget.parentNode.parentNode.parentNode.classList.toggle('clicked');
});


document.querySelectorAll('header .topbar a').forEach((item)=>{
    item.addEventListener('click',()=>{
        document.querySelector('.topbar-container').classList.remove('clicked');
    })
}) 