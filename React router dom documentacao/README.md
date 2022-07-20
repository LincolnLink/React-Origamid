# Criando sistema de rotas 6.3.0 do zero

- fonte do estudo: https://reactrouter.com/docs/en/v6/getting-started/tutorial

### Arquivo App

- Nesse arquivo fica o menu, toda parte de navegação, aonde fica os link's de cada pagina.

- O component "< Outlet />" é usado para poder alinhar os layout, criando um sistema poderoso de navegação.


### Arquivo index ou main do React

- Aonde é declarado o component "BrowserRouter"

- Novas tag "Routes" e "Route" é usado para gerenciar cada rota.


### Rotas alinhadas

- Um "Route" dentro do outro, siginifica que um é pai, e o outro são os filhos, que são os layouts que fica dentro do layout pai.


### Lista de faturas

- Carregando uma lista de objetos, arquivo data.js mostra um exemplo.


### Adicionando rotas sem correspondente(tratamento de erro)

- O "*"tem um significado especial aqui. Ele corresponderá apenas quando nenhuma outra rota corresponder.

<blockquete>

        <Route
            path="*"
            element={
                <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
                </main>
            }
        />

</blockquete>


### Lendo parametro de URL

- Uma forma de pegar o id, é alinhando as rotas, exemplo:

<blockquete>

      <Route path="invoices" element={<Invoice />}>
          <Route path=":invoiceId" element={<Invoice />} />
      </Route>

</blockquete>

- no arquivo Invoice tem exemplo de como o layout trabalha com a capitura desse id, e como exibe dinamicamente.

- Observe que a chave do parâmetro no paramsobjeto é a mesma do segmento dinâmico no caminho da rota:

- :invoiceId -> params.invoiceId


### rotas de índice

- As rotas de índice são renderizadas quando o usuário ainda não clicou em um dos itens em uma lista de navegação.

<blockquete>

    <Route
        index
        element={
        <main style={{ padding: "1rem" }}>
            <p>Select an invoice</p>
        </main>
        }
    />

</blockquete>

### Links ativos

- É muito comum, especialmente em listas de navegação, exibir o link como o link ativo que o usuário está visualizando. Vamos adicionar este tratamento à nossa lista de faturas trocando Linkpor NavLink.

1-Trocamos Linkpor NavLink.

2-Mudamos o stylede um objeto simples para uma função que retorna um objeto.

3-Alteramos a cor do nosso link observando o isActivevalor que NavLinkpassou para nossa função de estilo.

- Você pode fazer a mesma coisa com classNameon NavLink:


<blockquete>

    // normal string
    <NavLink className="red" />

    // function
    <NavLink className={({ isActive }) => isActive ? "red" : "blue"} />

</blockquete>

### Parâmetros de pesquisa.

- Os parâmetros de pesquisa são como os parâmetros de URL, mas ficam em uma posição diferente na URL. Em vez de estar nos segmentos de URL normais separados por /, eles estão no final após um ?. Você os viu na web como "/login?success=1"ou "/shoes?brand=nike&sort=asc&sortby=price".

- O React Router facilita a leitura e manipulação dos parâmetros de pesquisa com useSearchParams. Funciona muito parecido React.useState(), mas armazena e define o estado nos parâmetros de pesquisa de URL em vez de na memória.

- setSearchParams()está colocando os ?filter=...parâmetros de pesquisa na URL e renderizando novamente o roteador.

- useSearchParamsagora está retornando a URLSearchParamswith "filter"como um de seus valores.

- Definimos o valor da entrada para o que estiver no parâmetro de pesquisa do filtro (é como useStatemas no URLSearchParams!)

- Filtramos nossa lista de faturas com base no parâmetro de pesquisa do filtro.

### metodo JS que retorna true caso a string tenha na string: startsWith

<blockquete>

        .filter((invoice) => {
            let filter = searchParams.get("filter");
            if (!filter) return true;
            let name = invoice.name.toLowerCase();
            return name.startsWith(filter.toLowerCase());
        })

</blockquete>

https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_startswith

### Comportamento personalizado
 
- Se você filtrar a lista e clicar em um link, notará que a lista não é mais filtrada e o parâmetro de pesquisa é limpo do <input>e do URL. Você pode querer isso, talvez não! Talvez você queira manter a lista filtrada e manter o parâmetro na URL.

- Podemos persistir a string de consulta quando clicamos em um link adicionando-a ao href do link. Faremos isso compondo NavLinke useLocationdo React Router para o nosso próprio QueryNavLink(talvez haja um nome melhor, mas é isso que vamos fazer hoje).

- Você pode colocar esse código em qualquer lugar que desejar em seu aplicativo e, NavLinkem seguida, substituir seu src/routes/invoices.jsxe QueryNavLinkpronto.

- Como useSearchParams, useLocationretorna um local que nos informa informações sobre a URL. Um local se parece com isso:

<blockquete>

        {
            pathname: "/invoices",
            search: "?filter=sa",
            hash: "",
            state: null,
            key: "ae4cz2j"
        }

</blockquete>

- Não entendi essa parte, testar novamente depois



### useLocation

- Este gancho retorna o locationobjeto atual. Isso pode ser útil se você quiser realizar algum efeito colateral sempre que a localização atual mudar.

<blockquete>

        import * as React from 'react';
        import { useLocation } from 'react-router-dom';

        function App() {

            let location = useLocation();

            React.useEffect(() => {
                ga('send', 'pageview');
            }, [location]);

            return (
                // ...
            );
        }

</blockquete>

### navigate

- Um <Navigate>elemento altera a localização atual quando é renderizado. É um wrapper de componente em torno useNavigatede , e aceita todos os mesmos argumentos que props.


### Navehando programaticamente

- 





###



<blockquete>

</blockquete>