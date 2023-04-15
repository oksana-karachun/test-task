import React, { forwardRef } from 'react';
import { Control, Controller } from 'react-hook-form';

import Typography from '../Typography';

import styles from './styles.module.scss';

interface PropTypes {
  name: string;
  label: string;
  placeholder?: string;
  defaultValue?: string;
  control: Control;
  type?: 'text' | 'password' | 'email' | 'tel' | 'number';
}
export const Input = forwardRef<HTMLInputElement, PropTypes>(
  ({ label, name, control, placeholder, defaultValue, type = 'text' }) => {
    return (
      <div className={styles.wrapper}>
        <Controller
          name={name}
          control={control}
          defaultValue={defaultValue}
          rules={{
            required: 'Field cannot be empty',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address',
            },
          }}
          render={({
            field: { onChange, onBlur, value, ref },
            fieldState: { error },
          }) => (
            <>
              <label htmlFor={name}>
                <Typography tag="h1" title={label} className={styles.label} />
              </label>
              <input
                type={type}
                value={value}
                onBlur={onBlur}
                onChange={onChange}
                placeholder={placeholder}
                ref={ref}
                className={styles.input}
              />
              {error && <span className={styles.error}>{error.message}</span>}
            </>
          )}
        />
      </div>
    );
  },
);
export default Input;
