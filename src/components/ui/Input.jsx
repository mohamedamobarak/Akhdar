import React from 'react';

const Input = ({ label, error, className = '', ...props }) => {
  return (
    <div className="flex flex-col w-full mb-4">
      {label && <label className="mb-1 text-sm font-medium text-gray-700">{label}</label>}
      <input
        className={`px-4 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-main)] bg-[#F2F8F3] text-[var(--color-text-hero)] ${error ? 'border-red-500' : ''} ${className}`}
        {...props}
      />
      {error && <span className="text-xs text-red-500 mt-1">{error}</span>}
    </div>
  );
};

export default Input; 