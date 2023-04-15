import classNames from 'classnames';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { chevron, logo, white_chevron, white_logo } from 'app/icons';
import { LINKS } from 'shared/config';

import styles from './styles.module.scss';

export const Header = () => {
  const goBack = useNavigate();
  const navigate = useNavigate();
  const location = useLocation();
  const relationShipInfoPage = location.pathname === LINKS.RELATIONSHIP_INFO;
  const firstPage = location.pathname === '/';

  const handleGoBackClick = () => {
    goBack(-1);
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  const chevronSVG = relationShipInfoPage ? white_chevron : chevron;
  const logoSVG = relationShipInfoPage ? white_logo : logo;

  return (
    <header
      className={classNames(styles.wrapper, {
        [styles['first-page']]: firstPage,
      })}
    >
      {!firstPage && (
        <img
          src={chevronSVG}
          alt="logo"
          className={styles.icon}
          onClick={handleGoBackClick}
        />
      )}

      <img
        src={logoSVG}
        alt="logo"
        className={styles.icon}
        onClick={handleLogoClick}
      />
    </header>
  );
};
