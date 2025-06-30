import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Input from '../../../components/ui/Input';
import Select from 'react-select';
import countryList from 'country-list';

const industries = [
  { value: 'tech', label: 'Tech' },
  { value: 'finance', label: 'Finance' },
  { value: 'manufacturing', label: 'Manufacturing' },
  { value: 'other', label: 'Other' },
];
const companySizes = [
  { value: '1-10', label: '1-10' },
  { value: '11-50', label: '11-50' },
  { value: '51-200', label: '51-200' },
  { value: '201+', label: '201+' },
];
const countries = countryList.getData().map(c => ({ value: c.code, label: c.name }));

const schema = z.object({
  companyName: z.string().min(2, 'Please enter your company name (at least 2 characters)').max(100, 'Company name is too long'),
  firstName: z.string().min(2, 'Please enter your first name (at least 2 characters)').max(50, 'First name is too long'),
  lastName: z.string().min(2, 'Please enter your last name (at least 2 characters)').max(50, 'Last name is too long'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(8, 'Please enter a valid phone number (at least 8 digits)'),
  industry: z.object({ value: z.string(), label: z.string() }),
  companySize: z.object({ value: z.string(), label: z.string() }),
  country: z.object({ value: z.string(), label: z.string() }),
});

const selectStyles = {
  control: (provided, state) => ({
    ...provided,
    backgroundColor: '#F2F8F3',
    borderColor: state.isFocused ? 'var(--color-main)' : '#e5e7eb',
    boxShadow: state.isFocused ? '0 0 0 2px var(--color-main)' : undefined,
    '&:hover': {
      borderColor: 'var(--color-main)',
    },
    minHeight: '42px',
  }),
  menu: (provided) => ({
    ...provided,
    zIndex: 10,
  }),
};

const CompanySignUpForm = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const { register, handleSubmit, control, formState: { errors }, reset } = useForm({
    resolver: zodResolver(schema),
    mode: 'onChange',
  });

  const onSubmit = (data) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      console.log('Company signup data:', data);
      reset();
      setTimeout(() => setSuccess(false), 3000);
    }, 1200);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-xl mx-auto">
      <Input label="Company Name" {...register('companyName')} error={errors.companyName?.message} />
      <div className="flex gap-4">
        <Input label="First Name" {...register('firstName')} error={errors.firstName?.message} />
        <Input label="Last Name" {...register('lastName')} error={errors.lastName?.message} />
      </div>
      <div className="flex gap-4">
        <Input label="Email" type="email" {...register('email')} error={errors.email?.message} />
        <Input label="Phone" {...register('phone')} error={errors.phone?.message} />
      </div>
      <div className="flex gap-4">
        <div className="w-1/2">
          <label className="mb-1 text-sm font-medium text-gray-700">Industry</label>
          <Controller
            name="industry"
            control={control}
            render={({ field }) => (
              <Select {...field} options={industries} classNamePrefix="react-select" styles={selectStyles} />
            )}
          />
          {errors.industry && <span className="text-xs text-red-500 mt-1">{errors.industry.message}</span>}
        </div>
        <div className="w-1/2">
          <label className="mb-1 text-sm font-medium text-gray-700">Company Size</label>
          <Controller
            name="companySize"
            control={control}
            render={({ field }) => (
              <Select {...field} options={companySizes} classNamePrefix="react-select" styles={selectStyles} />
            )}
          />
          {errors.companySize && <span className="text-xs text-red-500 mt-1">{errors.companySize.message}</span>}
        </div>
      </div>
      <div className="mt-2">
        <label className="mb-1 text-sm font-medium text-gray-700">Country</label>
        <Controller
          name="country"
          control={control}
          render={({ field }) => (
            <Select {...field} options={countries} classNamePrefix="react-select" styles={selectStyles} />
          )}
        />
        {errors.country && <span className="text-xs text-red-500 mt-1">{errors.country.message}</span>}
      </div>
      <div className="flex justify-end">
        <button type="submit" disabled={loading} className="mt-4 py-2 px-16 rounded-xl bg-[var(--color-main)] text-black font-semibold hover:bg-[var(--color-heading)] hover:text-white transition cursor-pointer flex items-center justify-center min-w-[120px]">
          {loading ? <span className="loader mr-2"></span> : null}
          {loading ? 'Signing up...' : 'Sign up'}
        </button>
      </div>
      {success && <div className="text-green-600 text-center mt-4">Sign up successful! Welcome aboard.</div>}
    </form>
  );
};

export default CompanySignUpForm; 