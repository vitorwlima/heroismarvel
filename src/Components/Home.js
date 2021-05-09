import React from 'react';
import FormApi from './FormApi';
import Head from './Head';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div>
      <Head title="Heróis Marvel | Home" />
      <div className={styles.background}>
        <div className={styles.gradient}></div>
      </div>

      <FormApi />
    </div>
  );
};

export default Home;
