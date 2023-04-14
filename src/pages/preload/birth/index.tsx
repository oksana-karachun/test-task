import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import QuestionCard from 'entities/QuestionCard';
import { LINKS, MONTH } from 'shared/config';
import { DAYS, YEARS } from 'shared/helpers';
import { useBehavior } from 'shared/lib';
import { Button, Select } from 'shared/ui';

import { birthBehaviors } from './index.behavior';

const Birth = () => {
  const { setUserBirth } = useBehavior(birthBehaviors);
  const navigate = useNavigate();
  const [data, setData] = useState({
    month: MONTH[0].value,
    day: DAYS[0].value,
    year: YEARS[0].value,
  });

  const onClickHandler = () => {
    setUserBirth(data);
    navigate(LINKS.STATUS);
  };
  const onMonthHandler = (value: string) => {
    setData({ ...data, month: value });
  };
  const onDayHandler = (value: string) => {
    setData({ ...data, day: value });
  };

  const onYearHandler = (value: string) => {
    setData({ ...data, year: value });
  };

  return (
    <QuestionCard
      question="What’s your date of birth?"
      select={
        <>
          <Select
            name={'month'}
            value={'month'}
            options={MONTH}
            onChange={onMonthHandler}
          />
          <Select
            name={'day'}
            value={'day'}
            options={DAYS}
            onChange={onDayHandler}
          />
          <Select
            name={'year'}
            value={'year'}
            options={YEARS}
            onChange={onYearHandler}
          />
        </>
      }
      buttons={
        <Button title={'Next'} fill={'secondary'} onClick={onClickHandler} />
      }
    />
  );
};
export default Birth;
