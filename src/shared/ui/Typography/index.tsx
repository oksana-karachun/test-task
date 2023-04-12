import classNames from 'classnames';
import React from 'react';

import styles from './styles.module.scss';

interface PropTypes {
  title: string;
  className?: string;
  onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export const Typography: React.FC<PropTypes> = ({ title, className }) => {
  return <div className={classNames(styles.wrapper, className)}>{title}</div>;
};
export default Typography;
