import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Button, Typography } from 'shared/ui';

import styles from './inde.module.scss';
import { getZodiacSelector } from './index.selector';

const RelationshipInfo = () => {
  const getZodiac = useSelector(getZodiacSelector);
  const navigate = useNavigate();
  const goBack = useNavigate();

  const onClickGoNextHandler = () => {
    navigate('/email');
  };

  const onClickGoBackHandler = () => {
    goBack(-1);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.pictures}></div>
      <div className={styles.text}>
        <Typography
          title={`Based on our data, 49% of ${getZodiac} people also make decisions with their heart. But don't worry, we'll consider that while creating your guidance plan.`}
        />
      </div>
      <div className={styles.buttons}>
        <Button
          title={'Back'}
          fill={'transparent'}
          onClick={onClickGoBackHandler}
        />
        <Button title={'Next'} fill={'white'} onClick={onClickGoNextHandler} />
      </div>
    </div>
  );
};
export default RelationshipInfo;
