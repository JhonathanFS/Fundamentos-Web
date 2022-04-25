let nome = document.querySelector('#nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')

// Pseudo validação para Backend

let nomeOK = false
let emailOk = false
let assuntoOK = false

// Funções de validação

function validaNome() {
    let txtNome = document.querySelector('#txtNome')
    if (nome.value.length < 3) {
        txtNome.innerHTML = 'Nome Inválido'
        txtNome.style.color = 'red'
    } else {
        txtNome.innerHTML = 'Nome Válido'
        txtNome.style.color = 'green'
        let nomeOK = true
    }
}

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')
    if (email.value.indexOf('@')== -1 && email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = 'Email Inválido'
        txtEmail.style.color = 'red'
    } else {
        txtEmail.innerHTML = 'Email Válido'
        txtEmail.style.color = 'green'
        let emailOk = true
    }
}

function validaAssunto() {
    let txtAssunto = document.querySelector('#txtAssunto')
    if (assunto.value.length >= 100) {
        txtAssunto.innerHTML = 'Texto é muito grande, digite até 100 caracteres'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'
    } else {
        txtAssunto.style.display = 'none'
        let assuntoOK = true
    }
}

//Função da Pseudo Validação

function enviar() {
    if (nomeOK == true && emailOk == true && assuntoOK == true) {
        alert ('Formulário enviado com sucesso!')
    } else {
        alert ('Preencha os formulário corretamente...')
    }
}