import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Footer } from 'widgets/footer/Footer';
import { Header } from 'widgets/header/Header';

import Birth from './birth';
import Decisions from './decisions';
import Gender from './gender';
import styles from './index.module.scss';
import Parent from './parent';
import Problems from './problems';
import Email from './signUp';
import Status from './status';

const Preload = () => (
  <div className={styles.wrapper}>
    <Header />
    <Routes>
      <Route path={'/'} element={<Gender />} />
      <Route path={'/birth'} element={<Birth />} />
      <Route path={'/status'} element={<Status />} />
      <Route path={'/parent'} element={<Parent />} />
      <Route path={'/problems'} element={<Problems />} />
      <Route path={'/decisions'} element={<Decisions />} />
      <Route path={'/email'} element={<Email />} />
    </Routes>
    <Footer />
  </div>
);
export default Preload;
