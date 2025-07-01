import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Input } from '../../../components/ui/Input';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '../../../components/ui/select';
import { Eye, EyeOff } from 'lucide-react';
import countryList from 'country-list';
import { toast, Toaster } from "sonner";
import ErrorMessage from '../../../components/ErrorMessage';

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
  industry: z.string().min(1, 'Please select an industry'),
  companySize: z.string().min(1, 'Please select a company size'),
  country: z.string().min(1, 'Please select a country'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  confirmPassword: z.string().min(6, 'Confirm password must be at least 6 characters'),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

const CompanySignUpForm = () => {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { register, handleSubmit, control, formState: { errors }, reset } = useForm({
    resolver: zodResolver(schema),
    mode: 'onChange',
  });

  const onSubmit = (data) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Sign up successful! Welcome aboard.", { position: "top-center" });
      console.log('Company signup data:', data);
      reset();
    }, 1200);
  };

  return (
    <>
      <Toaster position="top-center" />
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-xl mx-auto">
        <div className="mb-4">
          <Input label="Company Name" placeholder="Company Name" {...register('companyName')} aria-invalid={!!errors.companyName} />
          <ErrorMessage message={errors.companyName?.message} />
        </div>
        <div className="flex gap-4">
          <div className="flex-1 mb-3">
            <Input label="First Name" placeholder="First Name" {...register('firstName')} aria-invalid={!!errors.firstName} />
            <ErrorMessage message={errors.firstName?.message} />
          </div>
          <div className="flex-1 mb-3">
            <Input label="Last Name" placeholder="Last Name" {...register('lastName')} aria-invalid={!!errors.lastName} />
            <ErrorMessage message={errors.lastName?.message} />
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex-1 mb-3">
            <Input label="Email" placeholder="Email" type="email" {...register('email')} aria-invalid={!!errors.email} />
            <ErrorMessage message={errors.email?.message} />
          </div>
          <div className="flex-1 mb-3">
            <Input label="Phone" placeholder="Phone" {...register('phone')} aria-invalid={!!errors.phone} />
            <ErrorMessage message={errors.phone?.message} />
          </div>
        </div>
        <div className="flex gap-4 mt-2 flex-col sm:flex-row">
          <div className="w-full mb-3">
            <label className="block mb-1 text-[16px] font-semibold text-primary">Industry</label>
            <Controller
              name="industry"
              control={control}
              render={({ field }) => (
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger className="w-full bg-[#F0F5EF]">
                    <SelectValue placeholder="Select industry" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Industry</SelectLabel>
                      {industries.map((option) => (
                        <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              )}
            />
            <ErrorMessage message={errors.industry?.message} />
          </div>
          <div className="w-full mb-3">
            <label className="block mb-1 text-[16px] font-semibold text-primary">Company Size</label>
            <Controller
              name="companySize"
              control={control}
              render={({ field }) => (
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger className="w-full bg-[#F0F5EF]">
                    <SelectValue placeholder="Select size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Company Size</SelectLabel>
                      {companySizes.map((option) => (
                        <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              )}
            />
            <ErrorMessage message={errors.companySize?.message} />
          </div>
        </div>
        <div className="mt-2 mb-3">
          <label className="block mb-1 text-[16px] font-semibold text-primary">Country</label>
          <Controller
            name="country"
            control={control}
            render={({ field }) => (
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger className="w-full bg-[#F0F5EF]">
                  <SelectValue placeholder="Select country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Country</SelectLabel>
                    {countries.map((option) => (
                      <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            )}
          />
          <ErrorMessage message={errors.country?.message} />
        </div>
        <div className="flex flex-col sm:flex-row gap-4 mb-3">
          <div className="flex-1 mb-3">
            <label className="block mb-1 text-[16px] font-semibold text-primary">Password</label>
            <div className="relative">
              <Input
                placeholder="Password"
                type={showPassword ? 'text' : 'password'}
                {...register('password')}
                aria-invalid={!!errors.password}
              />
              <button
                type="button"
                tabIndex={-1}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
                onClick={() => setShowPassword(v => !v)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            <ErrorMessage message={errors.password?.message} />
          </div>
          <div className="flex-1 mb-3">
            <label className="block mb-1 text-[16px] font-semibold text-primary">Confirm Password</label>
            <div className="relative">
              <Input
                placeholder="Confirm Password"
                type={showConfirmPassword ? 'text' : 'password'}
                {...register('confirmPassword')}
                aria-invalid={!!errors.confirmPassword}
              />
              <button
                type="button"
                tabIndex={-1}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
                onClick={() => setShowConfirmPassword(v => !v)}
              >
                {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            <ErrorMessage message={errors.confirmPassword?.message} />
          </div>
        </div>
        <div className="flex justify-end">
          <button type="submit" disabled={loading} className="mt-4 py-2 px-16 rounded-xl bg-main text-black font-semibold hover:bg-primary hover:text-white transition cursor-pointer flex items-center justify-center min-w-[120px]">
            {loading ? <span className="loader mr-2"></span> : null}
            {loading ? 'Signing up...' : 'Sign up'}
          </button>
        </div>
      </form>
    </>
  );
};

export default CompanySignUpForm; 