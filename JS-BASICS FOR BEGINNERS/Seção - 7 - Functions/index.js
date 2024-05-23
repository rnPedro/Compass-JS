// Definições Básicas de Funções

// Declaração de Função
function cumprimentar(nome) {
    return `Olá, ${nome}!`;
}

console.log(cumprimentar("Alice")); // Saída: Olá, Alice!

// Expressão de Função
const cumprimentar = function(nome) {
    return `Olá, ${nome}!`;
};

console.log(cumprimentar("Bob")); // Saída: Olá, Bob!

// Função Arrow (Função de Seta)
const cumprimentar = (nome) => {
    return `Olá, ${nome}!`;
};

// Versão mais curta para funções de linha única
const cumprimentar = nome => `Olá, ${nome}!`;

console.log(cumprimentar("Charlie")); // Saída: Olá, Charlie!

// Parâmetros e Argumentos

// Parâmetros Padrão
function cumprimentar(nome = "Visitante") {
    return `Olá, ${nome}!`;
}

console.log(cumprimentar()); // Saída: Olá, Visitante!
console.log(cumprimentar("Alice")); // Saída: Olá, Alice!

// Parâmetros Rest
function somar(...numeros) {
    return numeros.reduce((total, num) => total + num, 0);
}

console.log(somar(1, 2, 3, 4)); // Saída: 10

// Operador Spread
function somar(a, b, c) {
    return a + b + c;
}

const numeros = [1, 2, 3];
console.log(somar(...numeros)); // Saída: 6

// Escopo de Funções e Closures

// Escopo de Função
function externa() {
    let variavelExterna = 'Estou fora!';

    function interna() {
        let variavelInterna = 'Estou dentro!';
        console.log(variavelExterna); // Pode acessar variavelExterna
    }

    interna();
    console.log(variavelInterna); // Erro: variavelInterna não está definida
}

externa();

// Closures
function criarContador() {
    let contagem = 0;
    return function() {
        contagem++;
        return contagem;
    };
}

const contador = criarContador();
console.log(contador()); // Saída: 1
console.log(contador()); // Saída: 2
console.log(contador()); // Saída: 3

// Conceitos Avançados de Funções

// Immediately Invoked Function Expression (IIFE)
(function() {
    console.log('Esta função é executada imediatamente!');
})();

// Funções de Callback
function buscarDados(callback) {
    setTimeout(() => {
        const dados = { nome: "Alice" };
        callback(dados);
    }, 1000);
}

function manipularDados(dados) {
    console.log("Dados recebidos:", dados);
}

buscarDados(manipularDados); // Saída após 1 segundo: Dados recebidos: { nome: "Alice" }

// Funções de Ordem Superior
function multiplicarPor(fator) {
    return function(numero) {
        return numero * fator;
    };
}

const dobrar = multiplicarPor(2);
const triplicar = multiplicarPor(3);

console.log(dobrar(5)); // Saída: 10
console.log(triplicar(5)); // Saída: 15

// Métodos de Função (call, apply, bind)
function cumprimentar(saudaçao, pontuaçao) {
    return `${saudaçao}, ${this.nome}${pontuaçao}`;
}

const pessoa = { nome: "Alice" };

// Usando call
console.log(cumprimentar.call(pessoa, "Olá", "!")); // Saída: Olá, Alice!

// Usando apply
console.log(cumprimentar.apply(pessoa, ["Oi", "!!"])); // Saída: Oi, Alice!!

// Usando bind
const cumprimentarAlice = cumprimentar.bind(pessoa);
console.log(cumprimentarAlice("Ei", "!!!")); // Saída: Ei, Alice!!!

// Funções Recursivas

// Exemplo de Fatorial
function fatorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * fatorial(n - 1);
}

console.log(fatorial(5)); // Saída: 120

// Funções Assíncronas

// Promises
function buscarDados() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dados = { nome: "Alice" };
            resolve(dados);
        }, 1000);
    });
}

buscarDados()
    .then(dados => {
        console.log("Dados recebidos:", dados); // Saída após 1 segundo: Dados recebidos: { nome: "Alice" }
    })
    .catch(erro => {
        console.error("Erro:", erro);
    });

// Async/Await
async function buscarDados() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dados = { nome: "Alice" };
            resolve(dados);
        }, 1000);
    });
}

async function manipularDados() {
    try {
        const dados = await buscarDados();
        console.log("Dados recebidos:", dados); // Saída após 1 segundo: Dados recebidos: { nome: "Alice" }
    } catch (erro) {
        console.error("Erro:", erro);
    }
}

manipularDados();

// Função como Objeto

function dizerOla() {
    console.log("Olá!");
}

// Adicionando uma propriedade à função
dizerOla.saudacao = "Oi lá!";

console.log(dizerOla.saudacao); // Saída: Oi lá!

// Adicionando um método à função
dizerOla.dizerAdeus = function() {
    console.log("Adeus!");
};

dizerOla.dizerAdeus(); // Saída: Adeus!

// Exemplo Completo de Aplicação de Funções

// Gerenciamento de Lista de Tarefas
const tarefas = [];

// Função para adicionar uma tarefa
function adicionarTarefa(nome) {
    tarefas.push({ nome, concluida: false });
}

// Função para remover uma tarefa pelo nome
function removerTarefa(nome) {
    const indice = tarefas.findIndex(tarefa => tarefa.nome === nome);
    if (indice !== -1) {
        tarefas.splice(indice, 1);
    }
}

// Função para marcar uma tarefa como concluída
function concluirTarefa(nome) {
    const tarefa = tarefas.find(tarefa => tarefa.nome === nome);
    if (tarefa) {
        tarefa.concluida = true;
    }
}

// Função para listar todas as tarefas
function listarTarefas() {
    console.log("Tarefas:");
    tarefas.forEach(tarefa => {
        console.log(`${tarefa.nome} - ${tarefa.concluida ? "Concluída" : "Pendente"}`);
    });
}

// Função para listar tarefas pendentes usando filter e forEach
function listarTarefasPendentes() {
    const tarefasPendentes = tarefas.filter(tarefa => !tarefa.concluida);
    console.log("Tarefas Pendentes:");
    tarefasPendentes.forEach(tarefa => {
        console.log(tarefa.nome);
    });
}

// Adicionando tarefas
adicionarTarefa("Comprar mantimentos");
adicionarTarefa("Lavar o carro");
adicionarTarefa("Pagar contas");

// Concluindo uma tarefa
concluirTarefa("Comprar mantimentos");

// Listando tarefas
listarTarefas();

// Listando tarefas pendentes
listarTarefasPendentes();

// Removendo uma tarefa
removerTarefa("Lavar o carro");

// Listando tarefas novamente para ver as mudanças
listarTarefas();
