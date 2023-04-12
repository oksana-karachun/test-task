import React from 'react';
import QuestionCard from 'shared/ui/QuestionCard';

const Gender = () => {
  return (
    <QuestionCard
      question="Select your gender:"
      answers={['Female ', 'Male']}
    />
  );
};
export default Gender;
