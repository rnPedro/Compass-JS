// Array vazio
let arr1 = [];

// Array com elementos
let arr2 = [1, 2, 3, 4, 5];

// Array com diferentes tipos de dados
let arr3 = ["texto", 42, true, { nome: "João" }, [1, 2, 3]];

let primeiroElemento = arr2[0]; // Saída: 1
let terceiroElemento = arr2[2]; // Saída: 3

arr2[1] = 20; // Agora arr2 é [1, 20, 3, 4, 5]

// Adicionar no final
arr2.push(6); // Agora arr2 é [1, 20, 3, 4, 5, 6]

// Adicionar no início
arr2.unshift(0); // Agora arr2 é [0, 1, 20, 3, 4, 5, 6]

// Remover do final
let ultimoElemento = arr2.pop(); // Remove 6, arr2 é [0, 1, 20, 3, 4, 5]

// Remover do início
let primeiroElementoRemovido = arr2.shift(); // Remove 0, arr2 é [1, 20, 3, 4, 5]

// Remover 2 elementos a partir do índice 1
let removidos = arr2.splice(1, 2); // arr2 é [1, 4, 5], removidos é [20, 3]

// Adicionar elementos em um índice específico
arr2.splice(1, 0, 20, 3); // arr2 é [1, 20, 3, 4, 5]

for (let i = 0; i < arr2.length; i++) {
    console.log(arr2[i]);
}

for (let elemento of arr2) {
    console.log(elemento);
}

arr2.forEach((elemento, indice) => {
    console.log(`Elemento no índice ${indice}: ${elemento}`);
});

let arrQuadrados = arr2.map(num => num * num); // arrQuadrados é [1, 400, 9, 16, 25]

let arrPares = arr2.filter(num => num % 2 === 0); // arrPares é [20, 4]

let soma = arr2.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0); // soma é 33

let primeiroMaiorQue10 = arr2.find(num => num > 10); // primeiroMaiorQue10 é 20

let indicePrimeiroMaiorQue10 = arr2.findIndex(num => num > 10); // indicePrimeiroMaiorQue10 é 1

let algumMaiorQue30 = arr2.some(num => num > 30); // algumMaiorQue30 é false

let todosPositivos = arr2.every(num => num > 0); // todosPositivos é true

//Join, junta todos os elementos de um array em uma string
let str = arr2.join(', '); // str é "1, 20, 3, 4, 5"

//Split divide uma string em um array de substrings
let str2 = "a,b,c,d,e";
let arr = str2.split(','); // arr é ["a", "b", "c", "d", "e"]

//Exemplo de tudo em uma função
const usuarios = [
    { id: 1, nome: "João", idade: 30, ativo: true },
    { id: 2, nome: "Maria", idade: 25, ativo: false },
    { id: 3, nome: "Ana", idade: 22, ativo: true },
    { id: 4, nome: "Pedro", idade: 28, ativo: false }
];

// Filtrar usuários ativos
const usuariosAtivos = usuarios.filter(usuario => usuario.ativo);
console.log("Usuários ativos:", usuariosAtivos);

// Mapear para extrair nomes
const nomesUsuarios = usuarios.map(usuario => usuario.nome);
console.log("Nomes dos usuários:", nomesUsuarios);

// Encontrar o primeiro usuário com idade maior que 25
const usuarioMaiorQue25 = usuarios.find(usuario => usuario.idade > 25);
console.log("Primeiro usuário com idade maior que 25:", usuarioMaiorQue25);

// Reduzir para calcular a idade total dos usuários
const idadeTotal = usuarios.reduce((total, usuario) => total + usuario.idade, 0);
console.log("Idade total dos usuários:", idadeTotal);

// Verificar se todos os usuários são ativos
const todosAtivos = usuarios.every(usuario => usuario.ativo);
console.log("Todos os usuários são ativos?", todosAtivos);

// Verificar se há algum usuário ativo
const algumAtivo = usuarios.some(usuario => usuario.ativo);
console.log("Algum usuário é ativo?", algumAtivo);

// Adicionar um novo usuário
usuarios.push({ id: 5, nome: "Carlos", idade: 32, ativo: true });
console.log("Usuários após adicionar Carlos:", usuarios);

// Remover o primeiro usuário
usuarios.shift();
console.log("Usuários após remover o primeiro:", usuarios);
