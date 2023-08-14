const valor = document.querySelector('#valor')

function adicionar(){
    valor.innerHTML = `${parseInt(valor.innerHTML)+1}`;
}
function subtrair(){
    valor.innerHTML = `${parseInt(valor.innerHTML)-1}`;
}