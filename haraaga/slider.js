let hiddenBoxes = document.querySelectorAll('.hidden-boxes');
let showBoxes = document.querySelectorAll('.visible-boxes')
let leftSlider = document.querySelector('.left-slider')
let rightSlider = document.querySelector('.right-slider')

rightSlider.addEventListener('click',() =>{
    for(let i=0; i<hiddenBoxes.length; i++){
        hiddenBoxes[i].style.display = 'grid';
        showBoxes[i].style.display = 'none';
        rightSlider.canceled = true
    }
})