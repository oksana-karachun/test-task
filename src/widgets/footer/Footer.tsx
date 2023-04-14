import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { Typography } from 'shared/ui';

import Policy from '../policy/Policy';

import styles from './styles.module.scss';

export const Footer = () => {
  const location = useLocation();

  const firstPage = location.pathname === '/';

  //TODO: move this function to hook  -> [TASK-??] create useView() hook

  const [screenSize, setScreenSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleScreenSize = () => {
      setScreenSize(window.innerWidth);
    };

    window.addEventListener('resize', handleScreenSize);

    return () => {
      window.removeEventListener('resize', handleScreenSize);
    };
  }, []);

  const isSimpleView = screenSize < 1024;

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
