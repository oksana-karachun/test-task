import React from 'react';
import { Button } from 'shared/ui/Button';
import { Typography } from 'shared/ui/Typography';

import styles from './styles.module.scss';

interface PropTypes {
  question: string;
  answers: Array<string>;
}
export const QuestionCard: React.FC<PropTypes> = ({ question, answers }) => {
  const buttons = () =>
    answers.map((answer) => <Button key={answer} title={answer} />);

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <Typography title={question} />
      </div>
      <div className={styles.button}>{buttons()}</div>
    </div>
  );
};
export default QuestionCard;
