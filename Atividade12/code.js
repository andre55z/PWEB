function Retangulo(x, y){
    this.altura = x;
    this.base = y;


    this.calcArea= ()=>{
        return (this.altura * this.base);
    }
}

let idp = document.getElementById("idp");
function calculoArea(){
    let base = document.getElementById("txtbase").value;
    let altura = document.getElementById("txtalt").value;

    let objRetangulo = new Retangulo(base, altura);
    idp.innerHTML = `<p>A área do retangulo é ${objRetangulo.calcArea()}</p>`
}



class Conta{
    constructor(){
        this._nomeCorrentista;
        this._banco;
        this._numeroDaConta;
        this._saldo;
    }

    setNomeCorrentista(value){
        this._nomeCorrentista = value;
    }
    getNomeCorrentista(){
        return this._nomeCorrentista;
    }

    setBanco(value){
        this._banco = value;
    }
    getBanco(){
        return this._banco;
    }

    setNumeroDaConta(value){
        this._numeroDaConta = value;
    }
    getNumeroDaConta(){
        return this._numeroDaConta;
    }

    setSaldo(value){
        this._saldo = value;
    }
    getSaldo(){
        return this._saldo;
    }
    

}

class Corrente extends Conta{
    constructor(){
        super();
        this._saldoEspec;
    }

    setSaldoEspec(value){
        this._saldoEspec = value;
    }
    getSaldoEspec(){
        return this._saldoEspec
    }
}

class Poupanca extends Conta{
    constructor(){
        super();
        this._juros;
        this._dtVenc;
    }

    setJuros(value){
        this._juros = value;
    }
    getJuros(){
        return this._juros
    }

    setDtVenc(value){
        this._dtVenc = value;
    }
    getDtVenc(){
        return this._dtVenc
    }
}


function enviar(){
    let nomeC = document.getElementById("txtnc").value;
    let banco = document.getElementById("txtbc").value;
    let numC = document.getElementById("txtncnt").value;
    let saldo = document.getElementById("txtsal").value;
    let saldoEsp = document.getElementById("txtsales").value;
    let juros = document.getElementById("txtjur").value;
    let dtV = document.getElementById("txtdtv").value;


    let objCorrente = new Corrente();
    objCorrente.setSaldoEspec(saldoEsp)
    
    objCorrente.setNomeCorrentista(nomeC);
    objCorrente.setBanco(banco);
    objCorrente.setNumeroDaConta(numC);
    objCorrente.setSaldo(saldo);


    let objPoup = new Poupanca();
    objPoup.setNomeCorrentista(nomeC);
    objPoup.setBanco(banco);
    objPoup.setNumeroDaConta(numC);
    objPoup.setSaldo(saldo);
    objPoup.setDtVenc(dtV);
    objPoup.setJuros(juros);

    let pd = document.getElementById("pdois");
    let pt = document.getElementById("ptres");

    pd.innerHTML = `<p>nome do correntista: ${objCorrente.getNomeCorrentista()}</p><p>Banco: ${objCorrente.getBanco()}</p><p>Numero da conta: ${objCorrente.getNumeroDaConta()}</p><p>Saldo: ${objCorrente.getSaldo()}</p><p>Saldo Especial: ${objCorrente.getSaldoEspec()}</p>`
    pt.innerHTML = `<p>nome do correntista: ${objPoup.getNomeCorrentista()}</p><p>Banco: ${objPoup.getBanco()}</p><p>Numero da conta: ${objPoup.getNumeroDaConta()}</p><p>Saldo: ${objPoup.getSaldo()}</p><p>Juros: ${objPoup.getJuros()}</p><p>Data do vencimento: ${dtV}</p>`
    
}
