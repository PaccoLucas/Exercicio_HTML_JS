const form = document.getElementById('form-comparacao');
let formEValido = false;

form.addEventListener('submit', function(e){
    e.preventDefault();

const numeroA = parseFloat (document.getElementById('numero-a').value);
const numeroB = parseFloat (document.getElementById('numero-b').value);
const mensagemSucesso = `Sucesso o numero B é maior que o numero A`;
const mensagemErro = `Erro o numero A tem que ser menor que o numero B`;

function comparaNumero(numeroA, numeroB){
    return numeroB > numeroA;
}

formEValido = comparaNumero(numeroA, numeroB);
if (formEValido) {
const containerMensagemSucesso = document.querySelector('.success-message');
containerMensagemSucesso.innerHTML = mensagemSucesso;
containerMensagemSucesso.style.display = 'block';

} else {
    const containerMensagemErro = document.querySelector('.error-message');
    containerMensagemErro.innerHTML = mensagemErro;
    containerMensagemErro.style.display = 'block';
}
});



