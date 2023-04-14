import classNames from 'classnames';
import React from 'react';
import { useLocation } from 'react-router-dom';

import { useView } from 'shared/lib';
import { Typography } from 'shared/ui';

import Policy from '../policy/Policy';

import styles from './styles.module.scss';

export const Footer = () => {
  const location = useLocation();
  const isSimpleView = useView();

  const firstPage = location.pathname === '/';

  return (
    <>
      {firstPage ? (
        <div
          className={classNames(styles.wrapper, {
            [styles['simple-view']]: isSimpleView,
          })}
        >
          <Policy className={styles.policy} />
          <Typography
            title="Obrio Limited, Athalassas, 62, MEZZANINE, Strovolos, 2012, Nicosia, Cyprus"
            className={styles.text}
          />
        </div>
      ) : (
        <Typography title="Nicosia, Cyprus" className={styles.text} />
      )}
    </>
  );
};
