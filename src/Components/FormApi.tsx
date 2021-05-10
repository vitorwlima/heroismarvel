import React from 'react';
import { Link } from 'react-router-dom';
import styles from './FormApi.module.css';
import SearchIcon from '@material-ui/icons/Search';
import {RootObject} from './JsonTS'

const FormApi: React.FC = () => {
  const [inputHeroi, setInputHeroi] = React.useState('');
  const [dadosHerois, setDadosHerois] = React.useState<RootObject | null>(null);
  const [error, setError] = React.useState<string | null>(null);


  const md5 = require('md5');
  const timeStamp: number = new Date().getTime();
  const apiPrivKey: string = '815ff3955b1a4a4a2a2e3b537df4f2891a065a74';
  const apiPublicKey: string = '9577a922c53e29cd435dc1a4c081020e';
  const md5Var: string = md5(`${timeStamp}${apiPrivKey}${apiPublicKey}`);
  const url: string = `https://gateway.marvel.com/v1/public/characters?nameStartsWith=${inputHeroi}&ts=${timeStamp}&apikey=${apiPublicKey}&hash=${md5Var}`;

  React.useEffect(() => {
    if (inputHeroi !== '') {
      const fetchApi = () => {
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

  // function handleSubmit(event) {
  //   event.preventDefault();
  // }

  return (
    <form onSubmit={(event) => event.preventDefault()} className={styles.form}>
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
          value={inputHeroi}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputHeroi(e.target.value)}
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
