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
  onClick = Function.prototype,
}) => {
  return (
    <button
      className={classNames(styles.wrapper, styles[fill])}
      onClick={() => onClick()}
      type={type}
    >
      {title}
    </button>
  );
};
export default Button;
