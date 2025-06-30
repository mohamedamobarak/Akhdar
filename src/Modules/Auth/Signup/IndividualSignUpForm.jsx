import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Input from '../../../components/ui/Input';

const schema = z.object({
  firstName: z.string().min(2, 'Please enter your first name (at least 2 characters)').max(50, 'First name is too long'),
  lastName: z.string().min(2, 'Please enter your last name (at least 2 characters)').max(50, 'Last name is too long'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(8, 'Please enter a valid phone number (at least 8 digits)'),
});

const IndividualSignUpForm = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: zodResolver(schema),
    mode: 'onChange',
  });

  const onSubmit = (data) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      console.log('Individual signup data:', data);
      reset();
      setTimeout(() => setSuccess(false), 3000);
    }, 1200);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md mx-auto">
      <div className="flex flex-col sm:flex-row gap-4">
        <Input label="First Name" {...register('firstName')} error={errors.firstName?.message} className="flex-1" />
        <Input label="Last Name" {...register('lastName')} error={errors.lastName?.message} className="flex-1" />
      </div>
      <div className="flex flex-col sm:flex-row gap-4">
        <Input label="Email" type="email" {...register('email')} error={errors.email?.message} className="flex-1" />
        <Input label="Phone" {...register('phone')} error={errors.phone?.message} className="flex-1" />
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

export default IndividualSignUpForm; 