class Carro {
    constructor(modelo, placa, cor, quilometragem, valorDiario, ps){
        this.modelo = modelo;
        this.palca = placa;
        this.cor = cor;
        this.quilometragem = quilometragem;
        this.valorDiario = valorDiario;
        this.ps = ps;
    }
}
class Esportivo extends Carro {
    constructor (modelo, placa, cor, quilometragem, valorDiario, ps, temp, melhorias) {
        super(modelo, placa, cor, quilometragem, valorDiario, ps);
        this.temp = temp;
        this.melhorias = melhorias;
    }
}
class Utilitario extends Carro {
    constructor(modelo, placa, cor, quilometragem, valorDiario, ps, quantidadeDePassageiros, tamanhoDoPortaMalas, kmPorLitro) {
        super(modelo, placa, cor, quilometragem, valorDiario, ps);
        this.quantidadeDePassageiros = quantidadeDePassageiros;
        this.tamanhoDoPortaMalas = tamanhoDoPortaMalas;
        this.kmPorLitro = kmPorLitro;
    }
}
class Aluguel {
    constructor(infoClient, uso, dtdecontratação, terminoContratação) {
        this.infoClient = infoClient;
        this.uso = uso;
        this.dtdecontratação = dtdecontratação;
        this.terminoContratação = terminoContratação;
    }
}
class Pessoafis {
    constructor(nome, id, email, contato) {
        this.nome = nome;
        this.id = id;
        this.email = email;
        this.contato = contato;
    }
}
class Colaborador extends Pessoafis {
    constructor(nome, id, email, contato, idade, salario, qtDeAlugueis = 0, flag = false) {
        super(nome, id, email, contato)
        this.idade = idade;
        this.salario = salario;
        this.qtDeAlugueis = qtDeAlugueis;
        this.flag = uso;
    }
}
class Clientes extends Pessoafis {
    constructor (nome, id, email, contato, comprovDeRes, cnh, fotoCnh){
    super(nome, id, email, contato,);
    this.comprovDeRes = comprovDeRes;
    this.cnh = cnh;
    this.fotoCnh = fotoCnh;
    }
}
class Promo{
    constructor(nomePromo, tipoPromo, vigencia) {
        this.nomePromo = nomePromo;
        this.tipoPromo = tipoPromo;
        this.vigencia = vigencia;
    }
}

