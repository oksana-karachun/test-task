import React from 'react';
import { useNavigate } from 'react-router-dom';

import QuestionCard from 'entities/QuestionCard';
import { useBehavior } from 'shared/lib';
import { Button } from 'shared/ui';

import { parentBehaviors } from './index.behavior';

const Parent = () => {
  const { setFamilyInfo } = useBehavior(parentBehaviors);
  const navigate = useNavigate();

  const onClickHandler = (parent: boolean) => {
    setFamilyInfo(parent);
    navigate('/problems');
  };

  const single = true;

  return (
    <>
      {single ? (
        <QuestionCard
          question="Are you a single parent?"
          buttons={
            <>
              <Button title={'Yes'} onClick={() => onClickHandler(true)} />
              <Button title={'No'} onClick={() => onClickHandler(false)} />
            </>
          }
        />
      ) : (
        <QuestionCard
          question="Are you a parent?"
          buttons={
            <>
              <Button title={'Yes'} onClick={() => onClickHandler(true)} />
              <Button title={'No'} onClick={() => onClickHandler(false)} />
            </>
          }
        />
      )}{' '}
    </>
  );
};
export default Parent;
