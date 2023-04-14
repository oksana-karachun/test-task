import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { chevron, logo, white_chevron, white_logo } from 'app/icons';

import styles from './styles.module.scss';

export const Header = () => {
  const goBack = useNavigate();
  const navigate = useNavigate();
  const location = useLocation();
  const relationShipInfoPage = location.pathname === '/relationship-info';

  const handleGoBackClick = () => {
    goBack(-1);
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  const chevronSVG = relationShipInfoPage ? white_chevron : chevron;
  const logoSVG = relationShipInfoPage ? white_logo : logo;

  return (
    <header className={styles.wrapper}>
      <img
        src={chevronSVG}
        alt="logo"
        className={styles.icon}
        onClick={handleGoBackClick}
      />
      <img
        src={logoSVG}
        alt="logo"
        className={styles.icon}
        onClick={handleLogoClick}
      />
    </header>
  );
};
