import React from 'react';
import Gender from './gender';

import { Header } from 'widgets/header/Header';
import { Footer } from 'widgets/footer/Footer';

import styles from './index.module.scss';

const Preload = () => (
  <div className={styles.wrapper}>
    <Header />
    <Gender />
    <Footer />
  </div>
);
export default Preload;
