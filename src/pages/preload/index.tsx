import React from 'react';
import Gender from './gender';

import styles from './index.module.scss';
import { Header } from '../../entities/header/Header';
import { Footer } from '../../entities/footer/Footer';

const Preload = () => (
  <div className={styles.wrapper}>
    <Header />
    <Gender />
    <Footer />
  </div>
);
export default Preload;
