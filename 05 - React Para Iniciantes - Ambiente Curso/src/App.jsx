import React from 'react';


//Não deu tempo de usar uma lib de data, mas criei a logica mesmo assim.
let lista = [

  {
    valor: 500.00,
    dia: 1,
    ano: 2023
    //data:"Fri Jul 21 2023 19:11:59 GMT-0300 (Horário Padrão de Brasília)" 
  },
  {
    valor: 200.00,
    dia: 2,
    ano: 2023
  },
  {
    valor: 250.00,
    dia: 3,
    ano: 2023
  },
  {
    valor: 100.00,
    dia: 4,
    ano: 2023
  }
]


const App = () => {

  // let date = new Date();
  // let date2 = new Date();
  // date2.setDate(date.getDate() + 3 );
  //let teste = new Date(lista[0].data).getDay();
  let listaValores = []
  for (let index = 0; index < lista.length; index++) {    
    listaValores.push(lista[index].valor);
  }

  let soma = 0;
  for (let i = 0; i < listaValores.length; i++) {
    soma += listaValores[i];
  }
  let media = soma / listaValores.length;

  let numDiasSuperiorMedia = 0;
  for (let i = 0; i < listaValores.length; i++) {

    if(listaValores[i] > media){
      numDiasSuperiorMedia = numDiasSuperiorMedia + 1;
    }   
  }

  let maiorValor = Math.max(...listaValores)
  let menorValor = Math.min(...listaValores)  

  return <>  
    Maior valor: {maiorValor}
    <br></br>
    Menor valor: {menorValor}
    <br></br>
    Numero de dias superior a media: {numDiasSuperiorMedia}
    <br></br>
    Média: {media}
  </>;
};

export default App;
