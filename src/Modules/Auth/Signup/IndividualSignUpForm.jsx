import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Input } from '../../../components/ui/Input';
import { Eye, EyeOff } from 'lucide-react';
import { toast, Toaster } from "sonner";
import ErrorMessage from '../../../components/ErrorMessage';
import { useTranslation } from 'react-i18next';

const schema = z.object({
  firstName: z.string().min(2, 'Please enter your first name (at least 2 characters)').max(50, 'First name is too long'),
  lastName: z.string().min(2, 'Please enter your last name (at least 2 characters)').max(50, 'Last name is too long'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(8, 'Please enter a valid phone number (at least 8 digits)'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  confirmPassword: z.string().min(6, 'Confirm password must be at least 6 characters'),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

const IndividualSignUpForm = () => {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: zodResolver(schema),
    mode: 'onChange',
  });
  const { t ,i18n} = useTranslation();
  const lang = i18n.language || 'en';
  const isRTL = lang === 'ar';
  const onSubmit = (data) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Sign up successful! Welcome aboard.", { position: "top-center" });
      console.log('Individual signup data:', data);
      reset();
    }, 1200);
  };

  return (
    <>
      <Toaster position="top-center" />
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md mx-auto">
        <div className="flex flex-col sm:flex-row gap-4 mb-3">
          <div className="flex-1 mb-3">
            <Input label={t('signup.inputs.firstName')} placeholder={t('signup.inputs.firstName')} {...register('firstName')} aria-invalid={!!errors.firstName} />
            <ErrorMessage message={errors.firstName?.message} />
          </div>
          <div className="flex-1 mb-3">
            <Input label={t('signup.inputs.lastName')} placeholder={t('signup.inputs.lastName')} {...register('lastName')} aria-invalid={!!errors.lastName} />
            <ErrorMessage message={errors.lastName?.message} />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 mb-3">
          <div className="flex-1 mb-3">
            <Input label={t('signup.inputs.email')} placeholder={t('signup.inputs.email')} type="email" {...register('email')} aria-invalid={!!errors.email} />
            <ErrorMessage message={errors.email?.message} />
          </div>
          <div className="flex-1 mb-3">
            <Input label={t('signup.inputs.phone')} placeholder={t('signup.inputs.phone')} {...register('phone')} aria-invalid={!!errors.phone} />
            <ErrorMessage message={errors.phone?.message} />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 mb-3">
          <div className="flex-1 mb-3">
            <label className="block mb-1 text-[16px] font-semibold text-primary">{t('signup.inputs.password')}</label>
            <div className="relative">
              <Input
                placeholder={t('signup.inputs.password')}
                type={showPassword ? 'text' : 'password'}
                {...register('password')}
                aria-invalid={!!errors.password}
              />
              <button
                type="button"
                tabIndex={-1}
                className={`absolute ${isRTL ?'left-3' : 'right-3'}  top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer`}
                onClick={() => setShowPassword(v => !v)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            <ErrorMessage message={errors.password?.message} />
          </div>
          <div className="flex-1 mb-3">
            <label className="block mb-1 text-[16px] font-semibold text-primary">{t('signup.inputs.confirmPassword')}</label>
            <div className="relative">
              <Input
                placeholder={t('signup.inputs.confirmPassword')}
                type={showConfirmPassword ? 'text' : 'password'}
                {...register('confirmPassword')}
                aria-invalid={!!errors.confirmPassword}
              />
              <button
                type="button"
                tabIndex={-1}
                className={`absolute ${isRTL ?'left-3' : 'right-3'} top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer`}
                onClick={() => setShowConfirmPassword(v => !v)}
              >
                {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            <ErrorMessage message={errors.confirmPassword?.message} />
          </div>
        </div>
        <div className="flex justify-end">
          <button type="submit" disabled={loading} className="mt-4 py-2 px-16 rounded-xl bg-main text-black font-semibold hover:bg-heading hover:text-white transition cursor-pointer flex items-center justify-center min-w-[120px]">
            {loading ? <span className="loader mr-2"></span> : null}
            {loading ? t('signup.inputs.signUpButton') : t('signup.inputs.signUpButton')}
          </button>
        </div>
      </form>
    </>
  );
};

export default IndividualSignUpForm; 