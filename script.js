let container = document.getElementById('container')
let currentColor = 'blue'
let rgbBtn = document.getElementById('rgb')
rgbBtn.addEventListener('click', e => 
{
if(currentColor == 'blue') {
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


rowAdder(13)

