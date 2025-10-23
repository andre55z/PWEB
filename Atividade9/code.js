


let maior;

function qualMaior(){
    let maior;
    let a = parseFloat(document.getElementById("n1").value);
    let b = parseFloat(document.getElementById("n2").value);
    let c = parseFloat(document.getElementById("n3").value);
    if(a > b && a > c){
        maior = a;
    }
    else{
        if(b > a && b > c){
            maior = b;
        }
        else{
            if(c > b && c > a){
                maior = c
            }
            else{
                alert("Erro!");
            }
        }
    }

    return alert(maior);
}

function ordem(){
    let a = parseFloat(document.getElementById("n4").value);
    let b = parseFloat(document.getElementById("n5").value);
    let d = parseFloat(document.getElementById("n6").value);
    let arrayNum = [a, b, d];
    let aux;

    for (let i = 0; i < arrayNum.length - 1; i++) {
        for (let j = 0; j < arrayNum.length - 1 - i; j++) {
            if (arrayNum[j] > arrayNum[j + 1]) {
                aux = arrayNum[j];
                arrayNum[j] = arrayNum[j + 1];
                arrayNum[j + 1] = aux;
            }
        }
    }

    return alert(arrayNum);

}

function palindromo(){

    palavra = document.getElementById('n7').value
    if(palavra == palavra.split('').reverse().join('')){
        return alert("É palindromo");
    }else{
        return alert("Não é palindromo");
    }
}

function triangulo(){

    let l1 = parseFloat(document.getElementById('l1').value)
    let l2 = parseFloat(document.getElementById('l2').value)
    let l3 = parseFloat(document.getElementById('l3').value)

    if(l1 == l2 && l1 == l3){
        return alert("Triangulo equilatero");
    }
    else{
        if(l1 != l2 && l1 != l3 && l2 != l3){
            alert("Triangulo escaleno");
        }
        else{
            alert("Triangulo isoceles");
        }
    }
}




