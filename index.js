const metros=parseFloat(prompt("Digite o valor em metros:"));
const unidade=prompt("Escolha a unidade de medida:\na) mm\nb) cm\nc) dm\nd) dam\ne) hm\nf) km");
let resultado;

switch(unidade){
    case "a":
    resultado=metros*1000;
    break;
    case "b":
    resultado= metros*100;
    break;
    case "c":
    resultado=metros*10;
    break;
    case "d":
    resultado=metros/10;
    break;
    case "e":
    resultado=metros/100;
    break;
    case "f":
    resultado=metros/1000;
    break;
    default:
        alert("Opção invalida!");
}

alert("O resultado da conversão é: "+ resultado);
