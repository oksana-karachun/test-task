import React from 'react';

import QuestionCard from 'shared/ui/QuestionCard';

const Problems = () => {
  const single = true;
  const info = {
    gender: 'male',
    age: 25,
    children: 1,
  };
  const { gender, age, children } = info;

  return (
    <>
      {single ? (
        <QuestionCard
          question={`Single ${gender} ${age} ${children} need a slightly different approach to find their perfect partner. But first, how did you feel in your last relationship?`}
          answers={[
            'I was unhappy with low things were going in my relationship ',
            'I was unhappy with parts of my relationship, but some thing were working',
            'I was generally happy with my relationship',
            'I’ve never been in a relationship',
          ]}
        />
      ) : (
        <QuestionCard
          question={`${gender} ${age} ${children} need a slightly different approach to improve their relationship. Which statement best describes you?`}
          answers={[
            'I’m very unhappy with how things are going in my relationship ',
            'I’m unhappy with parts of my relationship, but some things are working well',
            'I’m generally happy in my relationship',
          ]}
        />
      )}{' '}
    </>
  );
};
export default Problems;
