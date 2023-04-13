import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import QuestionCard from 'entities/QuestionCard';
import { PROBLEMS_TYPE, STATUS } from 'shared/config';
import { useBehavior } from 'shared/lib';
import { Button } from 'shared/ui';

import { familyUserStatusSelector } from '../parent/index.selector';

import { problemsBehaviors } from './index.behavior';
import { dataSelector } from './index.selector';

const Problems = () => {
  const { setUserProblems } = useBehavior(problemsBehaviors);
  const familyUserStatus = useSelector(familyUserStatusSelector);
  const data = useSelector(dataSelector);
  const navigate = useNavigate();
  const isSingle = familyUserStatus === STATUS.SINGLE;
  const onClickHandler = (problems: string) => {
    setUserProblems(problems);
    navigate('/decisions');
  };
  const { gender, age, children } = data;

  return (
    <>
      {isSingle ? (
        <QuestionCard
          question={`Single ${gender} ${age} ${
            children ? 'who have children' : ''
          } need a slightly different approach to find their perfect partner. But first, how did you feel in your last relationship?`}
          buttons={
            <>
              <Button
                title={PROBLEMS_TYPE.A}
                onClick={() => onClickHandler(PROBLEMS_TYPE.A)}
              />
              <Button
                title={PROBLEMS_TYPE.B}
                onClick={() => onClickHandler(PROBLEMS_TYPE.B)}
              />
              <Button
                title={PROBLEMS_TYPE.C}
                onClick={() => onClickHandler(PROBLEMS_TYPE.C)}
              />
              <Button
                title={PROBLEMS_TYPE.D}
                onClick={() => onClickHandler(PROBLEMS_TYPE.D)}
              />
            </>
          }
        />
      ) : (
        <QuestionCard
          question={`${gender} ${age} ${
            children ? 'who have children' : ''
          } need a slightly different approach to improve their relationship. Which statement best describes you?`}
          buttons={
            <>
              <Button
                title={PROBLEMS_TYPE.E}
                onClick={() => onClickHandler(PROBLEMS_TYPE.E)}
              />
              <Button
                title={PROBLEMS_TYPE.F}
                onClick={() => onClickHandler(PROBLEMS_TYPE.F)}
              />
              <Button
                title={PROBLEMS_TYPE.G}
                onClick={() => onClickHandler(PROBLEMS_TYPE.G)}
              />
            </>
          }
        />
      )}
    </>
  );
};
export default Problems;
