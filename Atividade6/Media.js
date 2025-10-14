let nome = prompt("Olá", "Digite seu nome:");
let notas = new Array(4);

for(let count=0; count < notas.length; count++){
    notas[count] = prompt("Digite a nota " + (count+1));
}

let soma = 0;

for(let count2=0; count2 <notas.length; count2++){
    soma += parseFloat(notas[count2]);
}

let media = soma/notas.length;

alert("A média é " + media);