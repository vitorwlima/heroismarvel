import React from 'react';
import FormApi from './FormApi';
import Head from './Head';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.wrapper}>
      <Head title="Heróis Marvel | Home" />
      <div className={styles.background}>
        <div className={styles.gradient}></div>
      </div>
      <FormApi />
      <div className={styles.footer}>
        Data provided by Marvel. © 2021 MARVEL
      </div>
    </div>
  );
};

export default Home;
