import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import QuestionCard from 'entities/QuestionCard';
import { LINKS, STATUS } from 'shared/config';
import { useBehavior } from 'shared/lib';
import { Button } from 'shared/ui';

import { parentBehaviors } from './index.behavior';
import { familyUserStatusSelector } from './index.selector';

const Parent = () => {
  const { setFamilyInfo } = useBehavior(parentBehaviors);
  const familyUserStatus = useSelector(familyUserStatusSelector);
  const navigate = useNavigate();

  const onClickHandler = (parent: boolean) => {
    setFamilyInfo(parent);
    navigate(LINKS.PROBLEMS);
  };

  const isSingle = familyUserStatus === STATUS.SINGLE;

  return (
    <>
      {isSingle ? (
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
