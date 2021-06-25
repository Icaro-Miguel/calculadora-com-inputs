function adicao(){

let num1 = document.querySelector('#numero1')
let num2 = document.querySelector("#numero2")
let botao = document.querySelector("#soma")
let textonovo = document.createTextNode(`o resultado de ${num1.value} mais ${num2.value} foi de ${parseInt(num1.value) + parseInt(num2.value)} `)

botao.addEventListener("click", adicao)

let h1 = document.createElement("h1")

h1.appendChild(textonovo)
document.body.appendChild(h1)

}


function subtracao(){

let num1 = document.querySelector('#numero1')
let num2 = document.querySelector("#numero2")
let botao = document.querySelector("#menos")
let textonovo = document.createTextNode(`o resultado de ${num1.value} menos ${num2.value} foi de ${parseInt(num1.value) - parseInt(num2.value)} `)

botao.addEventListener("click", subtracao)

let h1 = document.createElement("h1")

h1.appendChild(textonovo)
document.body.appendChild(h1)
}

function multiplicacao(){
let num1 = document.querySelector('#numero1')
let num2 = document.querySelector("#numero2")
let botao = document.querySelector("#vezes")
let textonovo = document.createTextNode(`o resultado de ${num1.value} x ${num2.value} foi de ${parseInt(num1.value) * parseInt(num2.value)}`)

botao.addEventListener("click", multiplicacao)

let h1 = document.createElement("h1")

h1.appendChild(textonovo)
document.body.appendChild(h1)
}

function divisao(){
    
let num1 = document.querySelector('#numero1')
let num2 = document.querySelector("#numero2")
let botao = document.querySelector("#divisao")
let textonovo = document.createTextNode(`o resultado de ${num1.value} dividido por ${num2.value} foi de ${parseInt(num1.value) / parseInt(num2.value)} `)

botao.addEventListener("click", divisao)

let h1 = document.createElement("h1")

h1.appendChild(textonovo)
document.body.appendChild(h1)
}



//finalmente :')