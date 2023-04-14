import classNames from 'classnames';
import React from 'react';
import { useLocation } from 'react-router-dom';

import { LINKS } from 'shared/config';

import Preload from '../pages/preload';

import styles from './index.module.scss';

function App() {
  const location = useLocation();
  const isPurple = location.pathname === LINKS.RELATIONSHIP_INFO;

  return (
    <div className={classNames(styles.wrapper, { [styles.result]: isPurple })}>
      <Preload />
    </div>
  );
}
export default App;
