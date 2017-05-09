class Pessoa {

    constructor(nome, cpf) {
        this.nome = nome;
        this.cpf = cpf;
    }

    getnome() {
        return this.nome;
    }
    getcpf() {
        return this.cpf;
    }
}

class Cliente extends Pessoa {
    constructor(nome, cpf, endereco) {
        super(nome, cpf);
        this.endereco = endereco;
    }
    
    getendereco(){
        return this.endereco;
    }

}

class Vendedor extends Pessoa {
    constructor(nome, cpf, endereco, nrCarteira) {
        super(nome, cpf);
        this.nrCarteira = nrCarteira;
        this.endereco = endereco;
    }
    
    getnrCarteira(){
        return this.nrCarteira;
    }
    getendereco(){
        return this.endereco;
    }
}

class Loja{
    construtor(endereco, cnpj){
        this.endereco = endereco;
        this.cnpj = cnpj;
    }
    
    getendereco(){
        return this.endereco;
    }
    
    getcnpj(){
        return this.cnpj;
    }
}

class Livro{
    constructor(nomeLivro, valor, tpMidia){
        this.nomeLivro = nomeLivro;
        this.valor = valor;
        this.tpMidia = tpMidia;
    }
    
    getnomeLivro(){
        return this.nomeLivro;
    }
    
      getvalor(){
        return this.valor;
    }
    
    gettpMidia(){
        return this.tpMidia;
    }
}

class Ebook extends Livro{
    constructor(nomeLivro, valor, tpMidia, tamanho){
        super(nomeLivro, valor, tpMidia); 
        this.tamanho = tamanho;
    }
    
    gettamanho(){
        return this.tamanho;
    }
  
}

class LivroImpresso extends Livro{
    constructor(nomeLivro, valor, tpMidia, tpCapa){
        super(nomeLivro, valor, tpMidia);
        this.tpCapa = tpCapa;
    }
    
    gettpCapa(){
        return this.tpCapa;
    }
}

class ItemVenda{
   
    setItem(item, qtd){
        this.item = item;
        this.qtd = qtd;
        
        this.itens = {
            item: this.item,
            qtd: this.qtd,
        };
    }
    
    getitens(){
       return this.itens;
    }
}

class Venda{
    constructor(cliente, vendedor, itens){
        this.cliente = cliente;
        this.vendedor = vendedor;
        this.itens = itens;
    }
    
    getcliente(){
        return this.cliente;
    }
    
    getvendedor(){
        return this.vendedor;
    }
    
    getitens(){
        return this.itens;
    }
}

let cliente = new Cliente("Guilherme", "0921112943", "Rua israel queiroz, 230");

let vendedor = new Vendedor("Matheus", "01234567890", "Av Brasil, 290", 123456);

let livroImpresso = new LivroImpresso("Inferno", 50, "Impresso", "Brochura");

let ebook = new Ebook("Cód da vinci", 15, "Ebook", "1Mb");

let itemVenda = new ItemVenda;

let itens = new Array();

itemVenda.setItem(livroImpresso, 3);
itens.push(itemVenda.getitens());
itemVenda.setItem(ebook, 2);
itens.push(itemVenda.getitens());



let venda = new Venda(cliente, vendedor, itens);

console.log(venda);