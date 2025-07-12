import React from 'react';

const ErrorMessage = ({ message, className = '' }) => {
  if (!message) return null;
  return (
    <span className={`text-xs text-red-500 mt-1 ${className}`}>{message}</span>
  );
};

export default ErrorMessage; 