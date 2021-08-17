//1° conceito: Tudo em js é objeto.
console.log('1° Conceito: Tudo em js é objeto.');
const menu = {
  seletor: '.principal',
};
// executando:
console.log(menu.seletor);
console.log(menu.seletor.toUpperCase());

/*___________________________________*/

//2° conceito: formas de criar função
console.log('');
console.log('2° Conceito: formas de criar função.');

function upperName(name) {
  return name.toUpperCase();
}

//arrow function.
const lowerName = () => {};

// expressão: uma função anonima que é jogada em uma variavel.
const upperName2 = function (name) {
  return name.toUpperCase();
};

// expressão + arrow function
const upperName3 = (name) => {
  return name.toUpperCase();
};
// outra sintax.
const upperName3_1 = (name) => name.toUpperCase();

// executando:
console.log(upperName('Lincoln'));
console.log(upperName2('Lincoln'));
console.log(upperName3('Lincoln'));
console.log(upperName3_1('Lincoln'));

// Pesquisar sobre o "This" na arrow function, que manter o pai.

/*___________________________________*/

//desestruturação: exemplo complexo.
function handleMouse(event) {
  const x = event.clientX;
  const y = event.clientY;
  console.log(x, y);
}
// ativa um evento quando clicka em todo o documento.
//document.addEventListener('click', handleMouse);

// A forma mais simples com desestruturação de objeto.
// Tira as propriedade do objeto event que deseja.
function handleMouse2(event) {
  const { clientX, clientY } = event;
  console.log(clientX, clientY);
}
// ativa um evento quando clicka em todo o documento.
//document.addEventListener('click', handleMouse2);

// Desestruturando  direto no parametro, sem informar o objeto.
function handleMouse3({ clientX, clientY }) {
  console.log(clientX, clientY);
}
// ativa um evento quando clicka em todo o documento.
document.addEventListener('click', handleMouse3);

//Desestruturando array.
const frutas = ['Banana', 'Uva'];
const [fruta1] = frutas;
//console.log(fruta1);

//Desestruturando array 2° exemplo
const frutas_exemplo2 = ['Banana', 'Uva'];
const [fruta1ex1, fruta2ex2] = frutas_exemplo2;
console.log(fruta2ex2);

//OBS: react usa uma função nova chamada "React hooks"
// Ele tem um retorno que retorna o valor e uma função
// que atualiza o valor.

// Desestruturando estilo Hooks

const useQuadrado = [
  4,
  function (lado) {
    return 4 * lado;
  },
];

const [lados, perimetro] = useQuadrado;
console.log(lados);
console.log(perimetro(10));

/*___________________________________*/

//Rest: tira a necessidade de passar um array!
function showList(empresa, clientes) {
  clientes.forEach((cliente) => {
    console.log(cliente, empresa);
  });
}

function showList2(empresa, ...clientes) {
  clientes.forEach((cliente) => {
    console.log(cliente, empresa);
  });
}
console.log('');
console.log('3° Conceito: Rest e Spread');
console.log('__________Sem Rest___________');
showList('Google', ['Andre', 'Rafael', 'Lincoln', 'Leticia']);

console.log('__________Com Rest___________');
showList2('Google', 'Andre', 'Rafael', 'Lincoln', 'Leticia');

/*___________________________________*/

console.log('');
console.log('__________Spread___________');
//Spread: Transforma o Array em numeros espalhados.

// A função aceita apenas numeros, e não array;
const numeros = [10, 5, 25];

//Vai da erro
//const maior = Math.max(numeros);

const maior = Math.max(10, 5, 20);
console.log('sem Spread: ', maior);

// o Spread espalha os numeros.

const maior2 = Math.max(...numeros);
console.log('com Spread: ', maior2);

console.log('');
console.log('Outro exemplo de Spread');

const numeros2 = [13, ...numeros, 24, 32, 33];
console.log('Clonando array e espalhando outro dentro: ');
console.log(numeros2);

console.log('');
console.log(
  'Spread com objetos, adicionando valor ao objeto sem modificar o original',
);

const carro = {
  cor: 'Azul',
  portas: 4,
};

const carroAno = { ...carro, ano: 2008 };
console.log(carro);
console.log(carroAno);

/*___________________________________*/
console.log('');
console.log('4° Conceito: Modulos');
console.log('');
// No HTML tipa o script do JS como "module".

console.log('métodos exportados de outros arquivos js');

// exemplo simples.
//import { areaQuadrado, perimetroQuadrado } from './quadrado.js';
//console.log(areaQuadrado(4));
//console.log(perimetroQuadrado(5));

// export default
import numeroAleatorio from './numeroAleatorio.js';
console.log(numeroAleatorio());

// importando tudo dentro de um objeto
import quadrado from './quadrado.js';
console.log(quadrado.areaQuadrado(4));
console.log(quadrado.perimetroQuadrado(5));

console.log('');
console.log('5° Conceito: Fetch');
console.log('');

// Fetch é uma promese, deve usar o then() e dentro dele uma
// função de callBack, que transforma em callback.
// e depois usa outro then() para poder mostrar no log.
/*
fetch('https://ranekapi.origamid.dev/json/api/produto')
  .then((response) => response.json())
  .then((json) => {
    console.log('promise tratada: ', json);
  });*/

// Pode resolver essa promessa usando async,
// e tudo que for promessa, tem que ter uma awat.
// a ideia é a mesma só que com uma sintax mais limpa.

async function fetchProdutos(url) {
  //quarda uma promise
  const response = await fetch(url);
  const json = await response.json();

  console.log('nova refatoração: ', json);
  //retorna uma promise
  //return response;
  return json;
}

const produtos = fetchProdutos(
  'https://ranekapi.origamid.dev/json/api/produto',
);
