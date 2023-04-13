import React from 'react';
import { useNavigate } from 'react-router-dom';

import QuestionCard from 'entities/QuestionCard';
import { STATUS } from 'shared/config';
import { useBehavior } from 'shared/lib';
import { Button } from 'shared/ui';

import { statusBehaviors } from './index.behavior';

const Status = () => {
  const { setUserStatus } = useBehavior(statusBehaviors);
  const navigate = useNavigate();

  const onClickHandler = (parent: string) => {
    setUserStatus(parent);
    navigate('/parent');
  };

  return (
    <QuestionCard
      question="So we can get to know you better, tell us about your relationship status."
      buttons={
        <>
          <Button
            title={STATUS.SINGLE}
            onClick={() => onClickHandler(STATUS.SINGLE)}
          />
          <Button
            title={STATUS.IN_A_RELATIONSHIP}
            onClick={() => onClickHandler(STATUS.IN_A_RELATIONSHIP)}
          />
        </>
      }
    />
  );
};
export default Status;
