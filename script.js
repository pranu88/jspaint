// Queries
const body = document.querySelector('body')
// FUNCTIONS

// create title
const title = document.createElement('h1')
title.textContent = 'JS PAINT'

// create paintbrush and input box
const paintbrush = document.createElement('div')
paintbrush.style.width = '100px'
paintbrush.style.height = '100px'
paintbrush.style.border = '1px solid black'
paintbrush.style.margin = '0 auto'

// create input boxand button
const input = document.createElement('input')
const colorBtn = document.createElement('button')
colorBtn.style.marginTop = '10px'
colorBtn.innerText = 'Submit'

// Creating our drawing board
const board = document.createElement('div')

// loop and creating drawing board
for(let i =0; i < 5000 ; i++){
    const box = document.createElement('div')
    // box.style.border = '1px solid black'
    box.style.width = '5px'
    box.style.height = '5px'
    box.className = 'box'
    board.appendChild(box)
}
board.style.border = '1px solid black'
board.style.marginTop = "10px";
board.style.display = 'flex'
board.style.flexWrap = 'wrap'
 // Body properties
    body.style.textAlign = 'center'

// Append Elements
body.appendChild(title)
body.appendChild(paintbrush)
body.appendChild(input)
body.appendChild(colorBtn)
body.appendChild(board)




 


// Event Listeners
colorBtn.addEventListener('click', () => {
    console.log(input.value)
    paintbrush.style.backgroundColor = input.value
    input.value = ''
})

board.addEventListener('mouseover', (e) => {
    // console.log('clicked on board', e.target)
    // console.log(paintbrush.style.backgroundColor)
    if(e.target.className === 'box') {
        e.target.style.backgroundColor = paintbrush.style.backgroundColor
    }
})