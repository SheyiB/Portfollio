const proj = document.querySelector('#projects')
const btn = document.querySelector('.reveal');
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", () => {
    const scrollHeight = window.pageYOffset;
    
    if (scrollHeight > 400){
        topLink.classList.add("show-link")
    } else {
        topLink.classList.remove("show-link")
    }
})


function adjust(){

    if ( btn.innerHTML == 'See More') {
        btn.innerHTML = 'See Less';
        proj.style.height = '150vh';
        proj.style.gridTemplateRows = '10% 80%';


    }
    else{
        btn.innerHTML = 'See More';
        proj.style.height = '80vh';
        proj.style.gridTemplateRows = '15% 45% 15%';

    }

}

