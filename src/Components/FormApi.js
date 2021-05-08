import React from 'react';
import { Link } from 'react-router-dom';
import styles from './FormApi.module.css';

const FormApi = () => {
  const [inputHeroi, setInputHeroi] = React.useState('');
  const [dadosHerois, setDadosHerois] = React.useState(null);

  const md5 = require('md5');
  const timeStamp = new Date().getTime();
  const apiPrivKey = '815ff3955b1a4a4a2a2e3b537df4f2891a065a74';
  const apiPublicKey = '9577a922c53e29cd435dc1a4c081020e';
  const md5Var = md5(`${timeStamp}${apiPrivKey}${apiPublicKey}`);
  const url = `http://gateway.marvel.com/v1/public/characters?nameStartsWith=${inputHeroi}&ts=${timeStamp}&apikey=${apiPublicKey}&hash=${md5Var}`;

  React.useEffect(() => {
    if (inputHeroi !== '') {
      function fetchApi() {
        fetch(url)
          .then((res) => res.json())
          .then((json) => setDadosHerois(json));
      }
      fetchApi(url);
    } else if (inputHeroi === '') setDadosHerois(null);
  }, [inputHeroi]);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(e);
  }

  return (
    <form className={styles.FormApi} onSubmit={handleSubmit}>
      <label htmlFor="heroi">icone-lupa</label>
      <input
        className={styles.input}
        type="text"
        id="heroi"
        name="heroi"
        value={inputHeroi}
        onChange={(e) => setInputHeroi(e.target.value)}
      />
      <p>{inputHeroi}</p>
      <button>Pesquisar</button>
      {dadosHerois &&
        dadosHerois.data &&
        dadosHerois.data.results.map((heroi) => {
          return (
            <Link to={`heroi/${heroi.id}`} key={heroi.id}>
              <div>{heroi.name}</div>
            </Link>
          );
        })}
    </form>
  );
};

export default FormApi;
