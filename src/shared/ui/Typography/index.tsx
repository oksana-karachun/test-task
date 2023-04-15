import classNames from 'classnames';
import React from 'react';

import styles from './styles.module.scss';

interface PropTypes {
  title: string;
  className?: string;
  href?: string;
  tag?: keyof JSX.IntrinsicElements;
  onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export const Typography: React.FC<PropTypes> = ({
  title,
  className,
  href,
  tag: Tag = 'p',
}) => {
  return (
    <Tag className={classNames(styles.wrapper, className)} href={href}>
      {title}
    </Tag>
  );
};
export default Typography;
