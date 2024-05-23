// Definindo um objeto chamado "pessoa"
const pessoa = {
    // Propriedades do objeto
    nome: "João",
    idade: 30,
    profissao: "Desenvolvedor",

    // Método do objeto
    saudacao: function() {
        console.log(`Olá, meu nome é ${this.nome} e eu sou um ${this.profissao}.`);
    }
};

// Acessando propriedades do objeto
console.log(pessoa.nome); // Saída: João
console.log(pessoa.idade); // Saída: 30

// Chamando o método do objeto
pessoa.saudacao(); // Saída: Olá, meu nome é João e eu sou um Desenvolvedor.

// Adicionando uma nova propriedade
pessoa.cidade = "São Paulo";

// Modificando uma propriedade existente
pessoa.idade = 31;

console.log(pessoa.cidade); // Saída: São Paulo
console.log(pessoa.idade);  // Saída: 31

// Removendo uma propriedade
delete pessoa.profissao;

console.log(pessoa.profissao); // Saída: undefined
