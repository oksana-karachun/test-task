import React from 'react';
import { useNavigate } from 'react-router-dom';

import QuestionCard from 'entities/QuestionCard';
import { GENDER } from 'shared/config';
import { useBehavior } from 'shared/lib';
import { Button } from 'shared/ui';

import { genderBehaviors } from './index.behavior';

const Gender = () => {
  const { setUserGender } = useBehavior(genderBehaviors);
  const navigate = useNavigate();

  const onClickHandler = (gender: string) => {
    setUserGender(gender);
    //TODO: will be done in this task: [TASK-8] create birth page
    navigate('/birth');
  };

  //TODO: create a function that saves in localStorage the information that this page is being displayed. TASK-9-add-logic-for-chevron-button

  return (
    <QuestionCard
      question="Select your gender:"
      buttons={
        <>
          <Button
            title={GENDER.FEMALE}
            onClick={() => onClickHandler(GENDER.FEMALE)}
          />
          <Button
            title={GENDER.MALE}
            onClick={() => onClickHandler(GENDER.MALE)}
          />
        </>
      }
    />
  );
};
export default Gender;
