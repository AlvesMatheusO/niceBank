import isCPF from './valida-cpf.js';
import isMaior from './valida-idade.js';


const camposDoForm = document.querySelectorAll("[required]");

camposDoForm.forEach((campo) => {
    campo.addEventListener("blur", () => verificaCampo(campo));
});

function verificaCampo(campo) {
    
    if (campo.name == "cpf" && campo.value.length >= 11) {
        isCPF(campo);
    }
    if (campo.name == "aniversario" && campo.value != "") {
        isMaior(campo);
    }
}

function validaNumerosRepetidos(cpf) {
    
    const numerosRepetidos = [
    '00000000000',
    '11111111111',
    '22222222222',
    '33333333333',
    '44444444444',
    '55555555555',
    '66666666666',
    '77777777777',
    '88888888888',
    '99999999999' ]

   return numerosRepetidos.includes(cpf);
}

