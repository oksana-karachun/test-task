import React, { forwardRef } from 'react';

import Typography from '../Typography';

import styles from './styles.module.scss';

interface PropTypes {
  name: string;
  label: string;
  placeholder?: string;
  type: string;
}
export const Input = forwardRef<HTMLInputElement, PropTypes>(
  ({ label, name, type, placeholder }, ref) => {
    return (
      <div className={styles.wrapper}>
        <label htmlFor={name}>
          <Typography title={label} className={styles.label} />
        </label>
        <input
          id={name}
          type={type}
          className={styles.input}
          placeholder={placeholder}
          ref={ref}
        />
      </div>
    );
  },
);
export default Input;
