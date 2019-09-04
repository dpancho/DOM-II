// Your code goes here
//events 1-4
const imgScaleUp = document.querySelectorAll('img');
imgScaleUp.forEach(item => {
    item.addEventListener('mouseenter', e => {
        item.style.transform = 'scale(1.1)'
        item.style.transition = 'transform 0.5s';
    });
    item.addEventListener('mouseleave', e => {
        item.style.transform = 'scale(1)'
        item.style.transition = 'transform 0.5s';
    });
    item.addEventListener('dblclick', e => {
        item.style.height = '50%';
        item.style.width = '50%';
    });
    item.addEventListener('drag', e => {
        item.style.display = 'none';
    });
});

//5
const colorChangingPee = document.querySelectorAll('p');
colorChangingPee.forEach(item =>{
    item.addEventListener('wheel', e => {
        item.style.color = 'dodgerBlue';
    });
});

//6
const intro = document.querySelector('body');
intro.addEventListener('keydown',  e => {
    intro.style.backgroundColor = 'black';
});

//7
intro.addEventListener('keyup', e =>  {
    intro.style.backgroundColor = 'white';
});

//8
const butt = document.querySelectorAll('.btn');
butt.forEach(item => {
    item.addEventListener('click' , e => {
        alert("HOPE YOU'RE READY FOR THE GREAT OUTDOORS!");
    });
});

//9
const flippyFloppy = document.querySelector('.content-pick');
flippyFloppy.addEventListener('copy', e => {
    flippyFloppy.style.flexDirection = 'row-reverse';
    flippyFloppy.style.color = 'pink';
});

//10
const navFocus = document.querySelectorAll('.nav a');
navFocus.forEach(item => {
    item.addEventListener('focus', e => {
        item.style.color = 'red';
    });
});

//prevent default
const navStop = document.querySelector('nav');
navStop.addEventListener('click', e =>{
  e.preventDefault();
  alert(`No No No....Not today`);
})
