
const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')
const sidebar = document.querySelector('.sidebar')
const mainSlide = document.querySelector('.main-slide')
const container = document.querySelector('.container')
const slidesCount = mainSlide.querySelectorAll('div').length

let activeIndexSlide = 0



// арефмитические выражения встовлять или переменную`${}`
sidebar.style.top = `${(slidesCount - 1) * 100}vh`;

upBtn.addEventListener('click', ()=>{
    changeSlide('up')
})


downBtn.addEventListener('click', ()=>{
    changeSlide('down')
    })



function changeSlide(direction){
    
}