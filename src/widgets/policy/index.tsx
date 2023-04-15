import classNames from 'classnames';
import React from 'react';

import { Typography } from 'shared/ui';

import styles from './styles.module.scss';

interface PropTypes {
  className?: string;
}
export const Policy: React.FC<PropTypes> = ({ className }) => {
  return (
    <div className={classNames(styles.wrapper, className)}>
      <Typography
        title="By continuing I agree with"
        className={classNames(styles.text, styles.policy)}
      />{' '}
      <Typography
        tag="a"
        href={'/#'}
        title="Privacy policy"
        className={classNames(styles.text, styles.policy, styles.link)}
      />{' '}
      <Typography
        title="and"
        className={classNames(styles.text, styles.policy)}
      />{' '}
      <Typography
        tag="a"
        href={'/#'}
        title="Terms of use."
        className={classNames(styles.text, styles.policy, styles.link)}
      />
    </div>
  );
};

export default Policy;
