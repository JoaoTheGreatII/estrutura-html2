let firstnumber = document.querySelector('#enterone');
let secondnumber = document.querySelector('#entertwo');
let result = document.querySelector('#result');
let resulta = document.querySelector('#resultado');

function somar() {
    result.value = Number(firstnumber.value) + Number(secondnumber.value);
    resulta.innerHTML = Number(firstnumber.value) + Number(secondnumber.value);
}
function menos() {
    result.value = Number(firstnumber.value) - Number(secondnumber.value);
    resulta.innerHTML = Number(firstnumber.value) - Number(secondnumber.value);
}
function multiplicar() {
    result.value = Number(firstnumber.value) * Number(secondnumber.value);
    resulta.innerHTML = Number(firstnumber.value) * Number(secondnumber.value);
}
function dividir() {
    result.value = Number(firstnumber.value) / Number(secondnumber.value);
    resulta.innerHTML = Number(firstnumber.value) / Number(secondnumber.value);
}
function limpar() {
    firstnumber.value = "";
    secondnumber.value = "";
    result.value = "";
    resulta.value = "";
}


function IMC() {

    let altura = document.querySelector('#altura');
    let peso = document.querySelector('#peso');
    let IMC = Number(peso.value) / (Number(altura.value) * Number(altura.value));

    document.querySelector('#IMC').value = IMC.toFixed(2);
    let cons = document.querySelector('#cons');

    if (IMC < 18.5) {
        cons.textContent = 'abaixo do peso';
    } else if (IMC >= 18.5 && IMC <= 24.9) {
        cons.textContent = 'peso ideal';
    } else if (IMC >= 24.9 && IMC <= 29.9) {
        cons.textContent = 'levemente acima do peso';
    } else if (IMC >= 29.9 && IMC <= 34.9) {
        cons.textContent = 'obesidade';
    } else if (IMC >= 34.9 && IMC <= 39.9) {
        cons.textContent = 'obesidade severa';
    } else {
        cons.textContent = 'obesidade morbida';
    }

}