import React, { useEffect, useState } from 'react';
import styles from './Produtos.module.css';
import Head from './Head';
import { Link } from 'react-router-dom';

const Produtos = () => {
  const [produtos, setProdutos] = useState(null);
  
  useEffect(() =>{
    fetch('https://ranekapi.origamid.dev/json/api/produto')
      .then((r) => r.json())
      .then((json) => setProdutos(json));
  },[]);

  // console.log(produtos);
  
  if(produtos === null) return null;
  return <>
    <Head title="Ranek" description="Lista de produtos"></Head>
    <section className={styles.produtos + ' animeLeft'}>
      {produtos.map((produto) => (
        <Link to={`produto/${produto.id}`} key={produto.id}>
          <img src={produto.fotos[0].src} alt={produto.fotos[0].titulo} />
          <h1 className={styles.nome}>{produto.nome}</h1>
        </Link>
      ))}
    </section>
  </>;
};

export default Produtos;
