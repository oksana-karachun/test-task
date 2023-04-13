import classNames from 'classnames';
import React from 'react';

import styles from './styles.module.scss';

interface PropTypes {
  title: string;
  type?: string;
  fill?: string;
  onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export const Button: React.FC<PropTypes> = ({
  title,
  fill = 'primary',
  type = 'button',
  onClick,
}) => {
  //TODO: This functionality will be added in the following tasks
  const onClickHandle = () => {
    // onClick();
  };

  return (
    <button
      className={classNames(styles.wrapper, styles[fill])}
      onClick={onClickHandle}
      type={type}
    >
      {title}
    </button>
  );
};
export default Button;
