let container = document.getElementById('container')
let currentColor = 'black'

// let input = document.getElementById('input')
let rgbBtn = document.getElementById('rgb')
let toogle = false
rgbBtn.addEventListener('click', e => 
{
toogle = !toogle
if(currentColor == 'black') { toogle = true}    
else { currentColor = 'black'}

})

let rowAdder = (numPara) => 
{
    for (let index = 0; index < numPara; index++) {


        for (let index = 0; index < numPara; index++) {
            let div = document.createElement('div')
            div.addEventListener('mouseover', e =>
            { 
                if(toogle) { currentColor = Math.floor(Math.random()*16777215).toString(16)   }
                e.target.style.backgroundColor = currentColor})
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




rowAdder(13)

