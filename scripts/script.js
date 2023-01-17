const proj = document.querySelector('#projects')
const btn = document.querySelector('.reveal');
const topLink = document.querySelector(".top-link");

const sliderContainer = document.querySelector(".experience-list")
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

let rightClickCount = 1 
let leftClickCount = 1
let leftOverflow = 0
let rightOverflow = 2
function rightSlider(){
    if (rightOverflow < 3 && rightOverflow > 0){
        let value = rightClickCount * 33
        sliderContainer.style.marginLeft = `-${value}vw` ;
        console.log(value)
        rightClickCount++
        leftClickCount > 0 ? leftClickCount-- : leftClickCount
        rightOverflow--
        leftOverflow++
    }

    console.log(`Right Click Count : ${rightClickCount} | LeftClickCount : ${leftClickCount} |  RightOverflow : ${rightOverflow} | LeftOverflow : ${leftOverflow}`)
    
}


function leftSlider(){
    if (leftOverflow>=1){
        let value = leftOverflow == 2 ? -33 : 0 
        sliderContainer.style.marginLeft  = `${value}vw` ;
        console.log(value)
        leftClickCount++
        rightClickCount--
        leftOverflow--
        rightOverflow++
    }
    
    console.log(`Right Click Count : ${rightClickCount} | LeftClickCount : ${leftClickCount} |  RightOverflow : ${rightOverflow} | LeftOverflow : ${leftOverflow}`)
}