let num = new Array(2);

for(let count=0; count<num.length; count++){
    let c = 0;
    num[count] = prompt("Insira o" + (count==0 ? " primeiro " :  " segundo " ) + "numero");
    num[count] = parseFloat(num[count]);
}

let soma = num[0] + num[1];
let subtracao = num[0] - num[1];
let prod = num[0] * num[1];
let div = num[0] / num[1];
let resto = num[0] % num[1];

alert("Soma: " + soma);
alert("Subtração: " + subtracao);
alert("Divisão: " + div);
alert("Produto: " + prod);
alert("Resto: " + resto);


