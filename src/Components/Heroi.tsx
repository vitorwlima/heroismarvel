import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import styles from './Heroi.module.css';
import SearchIcon from '@material-ui/icons/Search';
import Head from './Head';
import {RootObject} from './JsonTSHeroi'

const Heroi = () => {
  const { id } = useParams();
  const [heroiEscolhido, setHeroiEscolhido] = React.useState<RootObject | null>(null);
  const [error, setError] = React.useState<string | null>(null);

  const md5 = require('md5');
  const timeStamp: number = new Date().getTime();
  const apiPrivKey: string = '815ff3955b1a4a4a2a2e3b537df4f2891a065a74';
  const apiPublicKey: string = '9577a922c53e29cd435dc1a4c081020e';
  const md5Var: string = md5(`${timeStamp}${apiPrivKey}${apiPublicKey}`);
  const url: string = `https://gateway.marvel.com/v1/public/characters/${id}?ts=${timeStamp}&apikey=${apiPublicKey}&hash=${md5Var}`;

  React.useEffect(() => {
    try {
      fetch(url)
        .then((response) => response.json())
        .then((json) => setHeroiEscolhido(json));
    } catch (erro) {
      setError('Um erro ocorreu');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  if (heroiEscolhido === null) return null;
  return (
    <div className={styles.geral}>
      <Head title="Heróis Marvel | Herói" />
      <Link to="/" className={styles.btnhome}>
        <SearchIcon className={styles.lupa} />
        <span className={styles.btnlink}>
          Voltar à pesquisa
        </span>
      </Link>
      {error && <div>{error}</div>}
      <section className={styles.heroisection}>
        <img
          className={styles.image}
          src={`${heroiEscolhido.data.results[0].thumbnail.path}/standard_large.${heroiEscolhido.data.results[0].thumbnail.extension}`}
          alt={heroiEscolhido.data.results[0].name}
        />
        <h1 className={styles.nome}>{heroiEscolhido.data.results[0].name}</h1>
        <p className={styles.descricao}>
          {heroiEscolhido.data.results[0].description.length
            ? heroiEscolhido.data.results[0].description
            : 'This hero has no available description.'}
        </p>
      </section>
      <div className={styles.footer}>
        Data provided by Marvel. © 2021 MARVEL
      </div>
    </div>
  );
};

export default Heroi;
