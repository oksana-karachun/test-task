import React from 'react';

import QuestionCard from 'shared/ui/QuestionCard';

const Status = () => {
  return (
    <QuestionCard
      question="So we can get to know you better, tell us about your relationship status."
      answers={['Single ', 'In a relationship']}
    />
  );
};
export default Status;
