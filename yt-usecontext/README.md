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

- 

<blockquete>

</blockquete>