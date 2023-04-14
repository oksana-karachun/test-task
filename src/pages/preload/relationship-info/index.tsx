import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { circle, head, heart, line, stars } from 'app/icons';
import { DECISION_TYPE } from 'shared/config';
import { Button, Typography } from 'shared/ui';

import styles from './inde.module.scss';
import { relationshipInfoSelector } from './index.selector';

const RelationshipInfo = () => {
  const { zodiac, userDecision } = useSelector(relationshipInfoSelector);
  const navigate = useNavigate();
  const goBack = useNavigate();

  const isHeart = userDecision === DECISION_TYPE.HEART;
  const isHead = userDecision === DECISION_TYPE.HEAD;
  const isBoth = userDecision === DECISION_TYPE.BOTH;
  const onClickGoNextHandler = () => {
    navigate('/email');
  };

  const onClickGoBackHandler = () => {
    goBack(-1);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.pictures}>
        <img src={circle} alt="circle" className={styles.circle} />
        <img src={line} alt="line" className={styles.line} />
        <img src={head} alt="head" className={styles.head} />
        <img src={heart} alt="heart" className={styles.heart} />
        <img src={stars} alt="stars" className={styles.stars} />
      </div>
      <div className={styles.text}>
        {isHeart && (
          <Typography
            className={styles.info}
            title={`Based on our data, 49% of ${zodiac} people also make decisions with their heart. But don't worry, we'll consider that while creating your guidance plan.`}
          />
        )}
        {isHead && (
          <Typography
            className={styles.info}
            title={`Based on our data, 39% of ${zodiac} people also make decisions with their head. But don't worry, we'll consider that while creating your guidance plan.`}
          />
        )}
        {isBoth && (
          <Typography
            className={styles.info}
            title={`Wonderful! Based on our data, only the top 17% of ${zodiac} people make decisions with their heart and head. Using both in equal measure is the key to feeling harmonious in your relationships.`}
          />
        )}
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
