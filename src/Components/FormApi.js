import React from 'react';
import { Link } from 'react-router-dom';
import styles from './FormApi.module.css';
import SearchIcon from '@material-ui/icons/Search';

const FormApi = () => {
  const [inputHeroi, setInputHeroi] = React.useState('');
  const [dadosHerois, setDadosHerois] = React.useState(null);
  const [error, setError] = React.useState(null);

  const md5 = require('md5');
  const timeStamp = new Date().getTime();
  const apiPrivKey = '815ff3955b1a4a4a2a2e3b537df4f2891a065a74';
  const apiPublicKey = '9577a922c53e29cd435dc1a4c081020e';
  const md5Var = md5(`${timeStamp}${apiPrivKey}${apiPublicKey}`);
  const url = `https://gateway.marvel.com/v1/public/characters?nameStartsWith=${inputHeroi}&ts=${timeStamp}&apikey=${apiPublicKey}&hash=${md5Var}`;

  React.useEffect(() => {
    if (inputHeroi !== '') {
      function fetchApi() {
        try {
          fetch(url)
            .then((res) => res.json())
            .then((json) => setDadosHerois(json));
        } catch (erro) {
          setError('Um erro ocorreu');
        }
      }

      fetchApi();
    } else if (inputHeroi === '') setDadosHerois(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputHeroi]);

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h1 className={styles.titulo}>My Superhero</h1>
      <div className={styles.divinput}>
        <label htmlFor="heroi">
          <SearchIcon className={styles.lupa} />
        </label>
        <input
          className={styles.input}
          type="text"
          id="heroi"
          name="heroi"
          placeholder="Search for a superhero"
          value={inputHeroi.replace(' ', '-')}
          onChange={(e) => setInputHeroi(e.target.value)}
        />
      </div>
      {error && <div>{error}</div>}
      <div className={styles.cardwrapper}>
        {dadosHerois &&
          dadosHerois.data &&
          dadosHerois.data.results.map((heroi) => {
            return (
              <Link
                to={`heroi/${heroi.id}`}
                key={heroi.id}
                className={styles.link}
              >
                <div className={styles.heroicard}>
                  <img
                    className={styles.imgheroi}
                    src={`${heroi.thumbnail.path}/standard_medium.${heroi.thumbnail.extension}`}
                    alt={heroi.name}
                  />
                  <span className={styles.heroiname}>{heroi.name}</span>
                  <span className={styles.heroidesc}>
                    {heroi.description.length
                      ? heroi.description.substring(0, 30) + '...'
                      : 'This hero has no available description'}
                  </span>
                </div>
              </Link>
            );
          })}
      </div>
    </form>
  );
};

export default FormApi;
