import React from 'react';

import { chevron, logo_black } from 'app/icons';

import styles from './styles.module.scss';

export const Header = () => {
  return (
    <header className={styles.wrapper}>
      <img src={chevron} alt="logo" className={styles.icon} />
      <img src={logo_black} alt="logo" className={styles.icon} />
    </header>
  );
};
