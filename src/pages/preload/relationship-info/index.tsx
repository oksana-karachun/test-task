import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { decision_1, decision_2, decision_3 } from 'app/icons';
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
      <>
        {isHeart && (
          <div className={styles.pictures}>
            <img src={decision_1} alt="circle" />
          </div>
        )}
        {isHead && (
          <div className={styles.pictures}>
            <img src={decision_2} alt="decision_2" />
          </div>
        )}
        {isBoth && (
          <div className={styles.pictures}>
            <img src={decision_3} alt="decision_3" />
          </div>
        )}
      </>

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
