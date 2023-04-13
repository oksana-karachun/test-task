import React, { useState } from 'react';

interface PropTypes {
  value: string;
  options: Array<string>;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export const Select = ({ value, options, onChange }: PropTypes) => {
  const [currentValue, setCurrentValue] = useState(value || '');

  //TODO: This functionality will be added in the following tasks (TASK-6 create select component)
  const handleSelectChange = (event) => {
    const value = event.target.value;
    setSelectedValue(value);
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <select value={selectedValue} onChange={handleSelectChange}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};
export default Select;
