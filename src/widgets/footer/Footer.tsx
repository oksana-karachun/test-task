import React from 'react';

import { Typography } from 'shared/ui';

import Policy from '../policy/Policy';

import styles from './styles.module.scss';
import { useLocation } from 'react-router-dom';

export const Footer = () => {
  const location = useLocation();
  const firstPage = location.pathname === '/';

  return (
    <div>
      {firstPage ? (
        <div className={styles.wrapper}>
          <Policy />
          <Typography
            title="Obrio Limited, Athalassas, 62, MEZZANINE, Strovolos, 2012, Nicosia, Cyprus"
            className={styles.text}
          />
        </div>
      ) : (
        <Typography title="Nicosia, Cyprus" className={styles.text} />
      )}
    </div>
  );
};
