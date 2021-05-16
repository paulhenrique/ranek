import React from 'react'
import style from './style.module.scss';
import { useParams } from 'react-router-dom';
import Head from '../Head';

interface ProdutoProps {
  id: string;
}

interface ProdutoProp {
  nome: string;
  preco: string;
  descricao: string;
  fotos: [{ src: string; titulo: string; }];
}

function Produto() {
  const { id }: ProdutoProps = useParams();
  const [produto, setProduto] = React.useState({ nome: '', preco: '', descricao: '', fotos: [{ src: '', titulo: 'string' }] });
  const [error, setError] = React.useState({ err: false, message: '' });
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    async function fetchProduto(url: string) {
      setLoading(true);
      try {
        const response = await fetch(url);
        const json: ProdutoProp = await response.json();
        setProduto(json);
      } catch (err) {
        setError({ err: true, message: err.message });
      } finally {
        setLoading(false);
      }
    }

    fetchProduto(`https://ranekapi.origamid.dev/json/api/produto/${id}`);

  }, [id]);
  if (loading) return (<div className="loading"></div>);
  if (error.err) return (<p>{error.message}</p>);
  if (produto.nome === '') return null;

  return (
    <div className={style.produto + ' animeLeft'}>
      <Head title={`Ranek | ${produto.nome}`} description={`${produto.descricao}`} />
      <div>
        {produto.fotos.map(foto => (
          <img src={foto.src} alt={foto.titulo} key={foto.src} />
        ))}
      </div>
      <div> <h1>{produto.nome}</h1>
        <span>R$ {produto.preco}</span>
        <p>{produto.descricao}</p></div>
    </div>
  )
}

export default Produto
