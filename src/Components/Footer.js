import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.footer}>
        Data provided by Marvel. © 2021 MARVEL
      </div>
    </div>
  );
};

export default Footer;
