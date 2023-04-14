import React from 'react';
import { useNavigate } from 'react-router-dom';

import QuestionCard from 'entities/QuestionCard';
import { DECISION_TYPE, LINKS } from 'shared/config';
import { useBehavior } from 'shared/lib';
import { Button } from 'shared/ui';

import { decisionsBehaviors } from './index.behavior';

const Decisions = () => {
  const { setUserDecisions } = useBehavior(decisionsBehaviors);
  const navigate = useNavigate();

  const onClickHandler = (decision: string) => {
    setUserDecisions(decision);
    navigate(LINKS.RELATIONSHIP_INFO);
  };

  return (
    <QuestionCard
      question="Do you make decisions with your head or your heart?"
      buttons={
        <>
          <Button
            title={DECISION_TYPE.HEART}
            onClick={() => onClickHandler(DECISION_TYPE.HEART)}
          />
          <Button
            title={DECISION_TYPE.HEAD}
            onClick={() => onClickHandler(DECISION_TYPE.HEAD)}
          />
          <Button
            title={DECISION_TYPE.BOTH}
            onClick={() => onClickHandler(DECISION_TYPE.BOTH)}
          />
        </>
      }
    />
  );
};
export default Decisions;
