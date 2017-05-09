/*
 3. Criar:
 3.1. Diagrama de Classes (UML) de uma loja online de livros, com as classes:
 Loja-
 Livro-
 Livro Impresso-
 Ebook-
 Venda
 Pessoa-
 Vendedor-
 Cliente-
 3.2. Implementação em Javascript das classes (com métodos e atributos) do diagrama UML.
 3.3. Exemplo de uso das classes
 Instanciar, fazer a chamada dos métodos para realizar uma venda.
 */

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
    constructor(nomeLivro, valor, tpMidia, qtdMinutos){
        super(nomeLivro, valor, tpMidia); 
        this.qtdMinutos = qtdMinutos;
    }
    
    getqtdMinutos(){
        return this.qtdMinutos;
    }
  
}

class LivroImpresso extends Livro{
    constructor(nomeLivro, valor, tpMidia, qtdPagina){
        super(nomeLivro, valor, tpMidia);
        this.qtdPagina = qtdPagina;
    }
    
    getqtdPagina(){
        return this.qtdPagina;
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

let livroImpresso = new LivroImpresso("Inferno", 50, "Impresso", 234);

let ebook = new Ebook("C�d da vinci", 15, "Ebook", "00:53");

let itemVenda = new ItemVenda;

let itens = new Array();

itemVenda.setItem(livroImpresso, 3);
itens.push(itemVenda.getitens());
itemVenda.setItem(ebook, 2);
itens.push(itemVenda.getitens());



let venda = new Venda(cliente, vendedor, itens);

console.log(venda);