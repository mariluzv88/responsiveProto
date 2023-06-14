const boxToCircle = ()=>{
    // target box
    let square = document.querySelector('.box')
    square.classList.toggle('circle')
}

const boxToBio=()=>{
    let square = document.querySelector('.box')
    square.classList.toggle('bio')
}
const showBio = ()=>{
    boxToBio()
    let newBox = document.querySelector('.bio')
    newBox.innerhtml="This represents my bio info"
}
const hideImage = ()=>{
    let target = document.querySelector('.jordan')
    target.classList.toggle('disappear')
    let btn = document.querySelector('.hidden')
    btn.innerHTML="show me"
}

const rockNroll = ()=>{
    let change = document.querySelector('.rock')
    change.classList.toggle('roll')
}

const age = ()=>{
    let grow = document.querySelector('.baby')
    grow.classList.toggle('old')
}
const circleToBox=()=>{
    let cat = document.querySelector(".circle")
    cat.classList.toggle('box')
}

function theColor() {
    let myBox = document.querySelector(".box")
    myBox.classList.toggle('dog')
}

const startRun = () => {
    let girl = document.querySelector('.runner')
    girl.classList.toggle('running')
}
const goingUp = ()=>{
    let mario = document.querySelector('.powerUp')
    mario.classList.toggle('jumping')
}
