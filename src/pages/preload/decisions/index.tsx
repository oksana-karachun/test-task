import React from 'react';

import QuestionCard from 'shared/ui/QuestionCard';

const Decisions = () => {
  return (
    <QuestionCard
      question="Do you make decisions with your head or your heart?"
      answers={['Heart ', 'Head', 'Both']}
    />
  );
};
export default Decisions;
