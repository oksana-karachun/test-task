import React from 'react';
import Gender from './gender';
import Parent from './parent';
import Status from './status';
import Problems from './problems';
import Email from './signUp';

import { Header } from 'widgets/header/Header';
import { Footer } from 'widgets/footer/Footer';

import styles from './index.module.scss';
import { Route, Routes } from 'react-router-dom';

const Preload = () => (
  <div className={styles.wrapper}>
    <Header />
    <Routes>
      <Route path={'/'} element={<Gender />} />
      <Route path={'/status'} element={<Status />} />
      <Route path={'/parent'} element={<Parent />} />
      <Route path={'/problems'} element={<Problems />} />
      <Route path={'/email'} element={<Email />} />
    </Routes>
    <Footer />
  </div>
);
export default Preload;
