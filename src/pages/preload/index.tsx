import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { LINKS } from 'shared/config';
import { Footer } from 'widgets/footer';
import { Header } from 'widgets/header';

import Birth from './birth';
import Decisions from './decisions';
import Gender from './gender';
import styles from './index.module.scss';
import Parent from './parent';
import Problems from './problems';
import RelationshipInfo from './relationship-info';
import Email from './signUp';
import Status from './status';

const Preload = () => (
  <div className={styles.wrapper}>
    <Header />
    <Routes>
      <Route path={'/'} element={<Gender />} />
      <Route path={LINKS.BIRTH} element={<Birth />} />
      <Route path={LINKS.STATUS} element={<Status />} />
      <Route path={LINKS.PARENT} element={<Parent />} />
      <Route path={LINKS.PROBLEMS} element={<Problems />} />
      <Route path={LINKS.DECISIONS} element={<Decisions />} />
      <Route path={LINKS.RELATIONSHIP_INFO} element={<RelationshipInfo />} />
      <Route path={LINKS.EMAIL} element={<Email />} />
    </Routes>
    <Footer />
  </div>
);
export default Preload;
