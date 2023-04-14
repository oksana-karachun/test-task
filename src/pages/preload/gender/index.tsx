import React from 'react';
import { useNavigate } from 'react-router-dom';

import QuestionCard from 'entities/QuestionCard';
import { GENDER, LINKS } from 'shared/config';
import { useBehavior } from 'shared/lib';
import { Button } from 'shared/ui';

import { genderBehaviors } from './index.behavior';

const Gender = () => {
  const { setUserGender } = useBehavior(genderBehaviors);
  const navigate = useNavigate();

  const onClickHandler = (gender: string) => {
    setUserGender(gender);
    navigate(LINKS.BIRTH);
  };

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
