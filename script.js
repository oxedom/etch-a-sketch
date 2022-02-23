let container = document.getElementById('container')
let currentColor = 'green'

let input = document.getElementById('input')
let rgbBtn = document.getElementById('rgb')
rgbBtn.addEventListener('click', e => 
{
if(currentColor == 'blue') 
{

    currentColor = "red"}    
else { currentColor ='blue'}



})

let rowAdder = (numPara) => 
{
    for (let index = 0; index < numPara; index++) {


        for (let index = 0; index < 13; index++) {
            let div = document.createElement('div')
            div.addEventListener('mouseover', e =>
            { e.target.style.backgroundColor = currentColor})
        container.appendChild(div)
            
        }
       
    }
}


let reset = document.getElementById('reset')
reset.addEventListener('click', e => 
{

for (let index = 0; index < container.children.length; index++) {
    container.children[index].style.backgroundColor = 'white'
    
}    
})


input.addEventListener('keyup', 
e => 
{



})


rowAdder(13)

