import React from 'react';

interface InputProps {
  placeholder?: string;
  type?: 'text' | 'password' | 'email' | 'number';
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
}

const Input: React.FC<InputProps> = ({ 
  placeholder, 
  type = 'text', 
  onChange,
  value 
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
};

export default Input;
