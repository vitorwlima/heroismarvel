import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import styles from './Heroi.module.css';

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
    <div className={styles.heroi}>
      <Link to="/">Voltar à home</Link>
      Herói: {heroiEscolhido.data.results[0].name}
    </div>
  );
};

export default Heroi;
