import React from 'react';
import { useNavigate } from 'react-router-dom';

import { chevron, logo_black } from 'app/icons';

import styles from './styles.module.scss';

export const Header = () => {
  const goBack = useNavigate();
  const navigate = useNavigate();

  const handleGoBackClick = () => {
    goBack(-1);
  };
  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <header className={styles.wrapper}>
      <img
        src={chevron}
        alt="logo"
        className={styles.icon}
        onClick={handleGoBackClick}
      />
      <img
        src={logo_black}
        alt="logo"
        className={styles.icon}
        onClick={handleLogoClick}
      />
    </header>
  );
};
