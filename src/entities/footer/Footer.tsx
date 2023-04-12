import React from 'react';
import { Typography } from 'shared/ui';
import styles from './styles.module.scss';

export const Footer = () => {
  const firstPage = true;
  return (
    <div>
      {firstPage ? (
        <div className={styles.wrapper}>
          <Typography
            title="By continuing I agree with Privacy policy and Terms of use."
            className={styles.text}
          />
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
