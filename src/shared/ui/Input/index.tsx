import React, { forwardRef } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

import Typography from '../Typography';

import styles from './styles.module.scss';

interface PropTypes {
  name: string;
  label: string;
  placeholder?: string;
  type: 'text' | 'password' | 'email' | 'tel' | 'number';
  inputRef?: UseFormRegisterReturn;
}
export const Input = forwardRef<HTMLInputElement, PropTypes>(
  ({ label, name, type, placeholder, inputRef }) => {
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
          ref={inputRef}
        />
      </div>
    );
  },
);
export default Input;
