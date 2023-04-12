import React from 'react';
import classNames from 'classnames';

import styles from './styles.module.scss';

interface PropTypes {
  title: string;
  fill?: string;
  onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export const Button = ({ title, fill = 'primary', onClick }: PropTypes) => {
  //TODO: This functionality will be added in the following tasks
  const onClickHandle = () => {
    // onClick();
  };

  return (
    <div
      className={classNames(styles.wrapper, styles[fill])}
      onClick={onClickHandle}
    >
      {title}
    </div>
  );
};
export default Button;
