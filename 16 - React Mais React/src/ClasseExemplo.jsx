import React from 'react';

// Essa forma não é usada nos projetos novos!

// const ClasseExemplo = (props) => {    
//   return (<></>);
// };
// export default ClasseExemplo;

class Produtos extends React.Component{

    //roda apenas uma vez
    constructor(props){
        super(props);

        // Propriedade statica, não é reativa.
        this.teste = 'teste1'

        // Propriedade reativa.
        this.state ={
            contar: 0,
        }

        // configurando o this do metodo handleClick
        this.handleClick = this.handleClick.bind(this);
    }

    // Não pode fazer this em um callback, ele vai fazer referencia ao um botão.
    // Deve fazer a configuração primeiro no metodo construtor, para pegar o
    // this do metodo.
    handleClick(){
        this.setState((state) => ({contar: state.contar + 1 }))
    }

    // Executa quando o componet é montado.
    componentDidMount(){
        console.log('Montou agora')
        // bom para usar um fetch!
    }

    // Muda toda vez que atualizar.
    componentDidUpdate(){
     document.title = this.state.contar;   
    }

    // Executa quando o component vai desmontar, antes do component sair da tela.
    componentWillUnmount(){
        console.log('Saiu da tela');
    }

    render(){
        //roda sempre que atualizar
        return(
            <div>
                <h1>Componente de Classe</h1>
                <div>{this.props.titulo}</div>
                <div>{this.state.contar}</div>
                <div>
                    <button onClick={this.handleClick}>
                        Adicionar
                    </button>
                </div>
            </div>
        );
    }
}

export default Produtos;