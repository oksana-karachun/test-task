import React, { ReactElement } from 'react';

import { Typography } from 'shared/ui';

import styles from './styles.module.scss';

interface PropTypes {
  question: string;
  buttons: ReactElement<any, any>;
}
export const QuestionCard: React.FC<PropTypes> = ({ question, buttons }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <Typography title={question} />
      </div>
      <div className={styles.button}>{buttons}</div>
    </div>
  );
};
export default QuestionCard;
