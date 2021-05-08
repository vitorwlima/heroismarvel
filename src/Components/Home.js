import React from 'react';
import FormApi from './FormApi';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div>
      <div className={styles.background}>
        <div className={styles.gradient}></div>
      </div>

      <FormApi />
    </div>
  );
};

export default Home;
