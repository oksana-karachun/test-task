import React from 'react';
import QuestionCard from 'shared/ui/QuestionCard';

const Parent = () => {
  const single = true;

  return (
    <>
      {single ? (
        <QuestionCard
          question="Are you a single parent?"
          answers={['Yes ', 'No']}
        />
      ) : (
        <QuestionCard question="Are you a parent?" answers={['Yes ', 'No']} />
      )}{' '}
    </>
  );
};
export default Parent;
