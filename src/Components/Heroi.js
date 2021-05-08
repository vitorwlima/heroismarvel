import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import styles from './Heroi.module.css';
import SearchIcon from '@material-ui/icons/Search';

const Heroi = () => {
  const { id } = useParams();
  const [heroiEscolhido, setHeroiEscolhido] = React.useState(null);

  const md5 = require('md5');
  const timeStamp = new Date().getTime();
  const apiPrivKey = '815ff3955b1a4a4a2a2e3b537df4f2891a065a74';
  const apiPublicKey = '9577a922c53e29cd435dc1a4c081020e';
  const md5Var = md5(`${timeStamp}${apiPrivKey}${apiPublicKey}`);
  const url = `http://gateway.marvel.com/v1/public/characters/${id}?ts=${timeStamp}&apikey=${apiPublicKey}&hash=${md5Var}`;

  React.useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setHeroiEscolhido(json));
  }, [id]);

  if (heroiEscolhido === null) return null;
  return (
    <div className={styles.geral}>
      <Link to="/" className={styles.btnhome}>
        <SearchIcon className={styles.lupa} />
        <span to="/" className={styles.btnlink}>
          Voltar à pesquisa
        </span>
      </Link>
      <section className={styles.heroisection}>
        <img
          className={styles.image}
          src={`${heroiEscolhido.data.results[0].thumbnail.path}/standard_large.${heroiEscolhido.data.results[0].thumbnail.extension}`}
          alt={heroiEscolhido.data.results[0].name}
        />
        <h1 className={styles.nome}>{heroiEscolhido.data.results[0].name}</h1>
        <p className={styles.descricao}>
          {heroiEscolhido.data.results[0].description}
        </p>
      </section>
    </div>
  );
};

export default Heroi;
