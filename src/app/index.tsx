import classNames from 'classnames';
import React from 'react';
import { useLocation } from 'react-router-dom';

import Preload from '../pages/preload';

import styles from './index.module.scss';

function App() {
  const location = useLocation();
  const isPurple = location.pathname === '/relationship-info';

  return (
    <div className={classNames(styles.wrapper, { [styles.result]: isPurple })}>
      <Preload />
    </div>
  );
}
export default App;
