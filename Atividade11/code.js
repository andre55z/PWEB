let aluno1 = new Object();
aluno1.ra = "00303473";
aluno1.nome = "Nicolas";
alert(`ra=${aluno1.ra} nome=${aluno1.nome}`);

let aluno2 = {}
aluno2.ra = "794321";
aluno2.nome = "Gabi";
alert(`ra=${aluno2.ra} e nome=${aluno2.nome}`)

let aluno3 = {
    ra: "123456",
    nome: "Ximenez"
}
alert(`ra=${aluno3.ra} e nome=${aluno3.nome}`)

function Aluno(ra, nome){
    this.ra = ra;
    this.nome = nome;
    this.Mostrar = function(){
        return "ra=" + this.ra + " nome= " + this.nome;
    }
}
var aluno4 = new Aluno("1234", "Paulo");
alert(aluno4.Mostrar());
alert(aluno4.nome);

function Aluno2(){
    var ra;
    var nome;
    this.setRa = function(value){
        this.ra = value;
    }

    this.getRa = function(){
        return this.ra;
    }

    this.setNome = function(value){
        this.nome = value;
    }

    this.getNome = function(){
        return this.nome;
    }


}

var aluno6 = new Aluno2();
aluno6.setNome("Jonesburgo");
aluno6.setRa("2893");
alert("ra=" + aluno6.getRa() + "nome=" + aluno6.getNome())


function AlunoADS(){
    var numlab;
    this.setnumLab = function(value){
        this.numlab = value;
    }

    this.getnumLab = function(){
        return this.numlab;
    }
}

AlunoADS.prototype = new Aluno2();
var aluno7 = new AlunoADS();
aluno7.setNome("Evelyn");
aluno7.setRa("123");
aluno7.setnumLab(5);
alert (aluno7.getNome() + " " + aluno7.getRa());

class Aluno1 {
    constructor(){
        this._ra;
        this._nome;
    }
    setNome(value){
        this._nome = value;
    }
    getNome(){
        return this._nome;
    }

    setRa(value){
        this._ra = value;
    }
    getRa(){
        return this._ra;
    }
}

var objAluno = new Aluno1();
objAluno.setNome("Fausto");
objAluno.setRa("132");

alert(`nome: ${objAluno.getNome()} ra: ${objAluno.getRa()}`)

class AlunoADS1 extends Aluno1{
    constructor(){
        super();
        this._numlab;
    }
    setNumLab(value){
        this._numlab = value;
    }
    getNumLab(){
        return this._numlab
    }
}

var objAlunoADS = new AlunoADS1();
objAlunoADS.setNome("Xuxa");
objAlunoADS.setRa("2344");
objAlunoADS.setNumLab(3);
alert(`nome: ${objAlunoADS.getNome()} ra: ${objAlunoADS.getRa()} numlab: ${objAlunoADS.getNumLab()}`)