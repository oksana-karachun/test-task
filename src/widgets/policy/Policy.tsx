import classNames from 'classnames';
import React from 'react';

import { Typography } from 'shared/ui';

import styles from './styles.module.scss';

export const Policy = () => {
  return (
    <div className={styles.wrapper}>
      <Typography
        title="By continuing I agree with"
        className={classNames(styles.text, styles.policy)}
      />{' '}
      <Typography
        title="Privacy policy"
        className={classNames(styles.text, styles.policy, styles.link)}
      />{' '}
      <Typography
        title="and"
        className={classNames(styles.text, styles.policy)}
      />{' '}
      <Typography
        title="Terms of use."
        className={classNames(styles.text, styles.policy)}
      />
    </div>
  );
};

export default Policy;
