import React from 'react';

import { chevron, logo_black } from 'app/icons';
import { useNavigate } from 'react-router-dom';

import styles from './styles.module.scss';

export const Header = () => {
  const goBack = useNavigate();
  const handleGoBackClick = () => {
    goBack(-1);
  };

  return (
    <header className={styles.wrapper}>
      <img
        src={chevron}
        alt="logo"
        className={styles.icon}
        onClick={handleGoBackClick}
      />
      <img src={logo_black} alt="logo" className={styles.icon} />
    </header>
  );
};
