import React, { ReactElement } from 'react';

import { Typography } from 'shared/ui';

import styles from './index.module.scss';

interface PropTypes {
  question: string;
  buttons: ReactElement<any, any>;
  select?: ReactElement<any, any>;
}
export const Questionnaire: React.FC<PropTypes> = ({
  question,
  buttons,
  select,
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <Typography tag="h1" title={question} />
      </div>
      {select ? <div className={styles.select}>{select}</div> : null}
      <div className={styles.button}>{buttons}</div>
    </div>
  );
};
export default Questionnaire;
