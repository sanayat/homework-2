const gmailInput =document.querySelector('#gmail_input')
const gmailButton =document.querySelector('#gmail_button')
const gmailSpan =document.querySelector('#gmail_result')

const regExp = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

gmailButton.onclick = () => {
    if (regExp.test(gmailInput.value)){
        gmailSpan.innerHTML = "OK"
        gmailSpan.style.color = "green"
    }else {
        gmailSpan.innerHTML = "NOT OK"
        gmailSpan.style.color = "red"
    }

}

const parentBlock = document.querySelector('.parent_block');
const childBlock = document.querySelector('.child_block');

let positionX = 0;
let positionY = 0;

const offsetWidth = parentBlock.offsetWidth - childBlock.offsetWidth;
const offsetHeight = parentBlock.offsetHeight - childBlock.offsetHeight;

childBlock.style.left = `${positionX}px`;
childBlock.style.top = `${positionY}px`;

const moveBlock = () => {
        if (positionX < offsetWidth && positionY === 0) {
        positionX++;
        childBlock.style.left = `${positionX}px`;
    }else if (positionX >= offsetWidth && positionY < offsetHeight) {
        positionY++;
        childBlock.style.top = `${positionY}px`;
    }else if (positionX > 0 && positionY >= offsetHeight) {
        positionX--;
        childBlock.style.left = `${positionX}px`;
    }else if (positionX === 0 && positionY > 0) {
        positionY--;
        childBlock.style.top = `${positionY}px`;
    }
    requestAnimationFrame(moveBlock);
};
moveBlock();


const reset = document.querySelector('#reset')
const start = document.querySelector('#start')
const stopBtn = document.querySelector('#stop')
const seconds = document.querySelector('#seconds')
let stopper = false
let num = 0

start.addEventListener('click', ()=>{
    if(!stopper){
        const interval = setInterval(() => {
            num++
            seconds.innerHTML = num
        }, 1000);
        stopper = true
        stopBtn.addEventListener('click', ()=>{
            clearInterval(interval)
            stopper = false
        })
    
        reset.addEventListener('click', ()=>{
            clearInterval(interval)
            num=0
            seconds.innerHTML = num
            stopper = false
        })
    }

})









