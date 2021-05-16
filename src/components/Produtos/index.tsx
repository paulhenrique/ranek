import React from 'react';
import { Link } from 'react-router-dom';
import Head from '../Head';
import style from './style.module.scss';

interface Produto {
  id: string;
  nome: string;
  fotos: [{ src: string; titulo: string; }];
}
function Produtos() {
  const [produtos, setProdutos] = React.useState([]);
  React.useEffect(() => {

    try {
      fetch('https://ranekapi.origamid.dev/json/api/produto').then((r) => r.json()).then((json) => setProdutos(json));
      fetch('https://ranekapi.origamid.dev/json/api/produto').then((r) => r.json()).then((json) => setProdutos(json));
    } catch (err) {
      console.log(err);
    }

  }, []);


  if (produtos === []) return null;

  return (
    <section className={style.produtos + 'animeLeft'}>
      <Head title="Produtos" description="Página de contato" />
      {produtos.map((p: Produto) => (
        <Link to={`produto/${p.id}`} key={p.id}>
          <img src={p.fotos[0].src} alt={p.fotos[0].titulo} />
          <h1>{p.nome}</h1>
        </Link>
      ))}
    </section>
  )
}

export default Produtos;
