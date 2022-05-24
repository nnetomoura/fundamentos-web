/*
Case sensitive! Reconhece letras maíusculas e minúsculas
O acesso a variáveis pode ser feito por:
tags, sendo getElementByTagName()
por ID: getElementById()
por nome: getElementByName();
por classe: getElementsByClass() (busca mais de um elemento)
pelo seletor: querySelector()
*/

let nome = window.document.getElementById ("nome") //como a busca está sendo feita pelo NOME, não é necessário o uso da #.
let email = document.querySelector ("#email") //poderia ser input#email ou até mesmo .email.
let assunto = document.querySelector("#assunto")
let nomeOk = false
let emailOk = false
let assuntoOk = false
nome.style.width = "100%"
email.style.width = "100%"

//agora vamos criar uma função! (Lembra que o JS é uma linguagem voltada a funções? Pois bem...)
//também é possível criar funções sem nome, mas por boas práticas vamos nomear! nesse caso o validador de nomes!

function validaNome () {
    let txtNome = document.querySelector("#txtNome")
    if (nome.value.length < 3 ){   
        txtNome.innerHTML = "O campo deve ser preenchido com pelo menos três caracteres."
        txtNome.style.color = "red"
    } else {
        txtNome.innerHTML = "Nome válido"
        txtNome.style.color = "green"
        nomeOk = true
    }
    
}

function validaEmail () {
    let txtEmail = document.querySelector("#txtEmail")
    
    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = "E-mail inválido"
        txtEmail.style.color = "red"
    } else {
        txtEmail.innerHTML = "E-mail válido"
        txtEmail.style.color = "green"
        emailOk = true
    }
}

function validaAssunto () {
    let txtAssunto = document.querySelector("#txtAssunto")
    if (assunto.value.length >=100) {
        txtAssunto.innerHTML = "Texto muito grande. Escreva o máximo 100 caracteres."
        txtAssunto.style.color = "white"
        txtAssunto.style.backgroundColor = "red"
        txtAssunto.style.display = "block"
    } else {
        txtAssunto.style.display = "none"
        assuntoOk = true
    } 
}

function enviar () {
    if (nomeOk == true && emailOk == true && assuntoOk == true) {
        alert ("MENSAGEM ENVIADA COM SUCESSO!")
    } else {
        alert ("Dados inválidos. Preencha os campos corretamente antes de enviar a mensagem!")
    }
}

