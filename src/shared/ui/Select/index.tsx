import React, { useState } from 'react';

import { arrow } from 'app/icons';

import styles from './styles.module.scss';

interface PropTypes {
  name: string;
  value: string;
  options: Array<any>;
  onChange?: (event: string) => void;
}
export const Select = ({ name, value, options, onChange }: PropTypes) => {
  const [currentValue, setCurrentValue] = useState(value || '');
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;

    setCurrentValue(value);
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <div className={styles.wrapper}>
      <img src={arrow} alt="arrow" className={styles.icon} />
      <select
        name={name}
        id={name}
        value={currentValue}
        onChange={handleSelectChange}
        className={styles.select}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.value}
          </option>
        ))}
      </select>
    </div>
  );
};
export default Select;
