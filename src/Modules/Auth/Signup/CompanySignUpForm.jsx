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
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

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
  const [success, setSuccess] = useState(false);
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
      setSuccess(true);
      console.log('Company signup data:', data);
      reset();
      setTimeout(() => setSuccess(false), 3000);
    }, 1200);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-xl mx-auto">
      <div className="mb-4">
        <Input label="Company Name" placeholder="Company Name" {...register('companyName')} aria-invalid={!!errors.companyName} />
        {errors.companyName && <span className="text-xs text-red-500 mt-1">{errors.companyName.message}</span>}
      </div>
      <div className="flex gap-4">
        <div className="flex-1 mb-3">
          <Input label="First Name" placeholder="First Name" {...register('firstName')} aria-invalid={!!errors.firstName} />
          {errors.firstName && <span className="text-xs text-red-500 mt-1">{errors.firstName.message}</span>}
        </div>
        <div className="flex-1 mb-3">
          <Input label="Last Name" placeholder="Last Name" {...register('lastName')} aria-invalid={!!errors.lastName} />
          {errors.lastName && <span className="text-xs text-red-500 mt-1">{errors.lastName.message}</span>}
        </div>
      </div>
      <div className="flex gap-4">
        <div className="flex-1 mb-3">
          <Input label="Email" placeholder="Email" type="email" {...register('email')} aria-invalid={!!errors.email} />
          {errors.email && <span className="text-xs text-red-500 mt-1">{errors.email.message}</span>}
        </div>
        <div className="flex-1 mb-3">
          <Input label="Phone" placeholder="Phone" {...register('phone')} aria-invalid={!!errors.phone} />
          {errors.phone && <span className="text-xs text-red-500 mt-1">{errors.phone.message}</span>}
        </div>
      </div>
      <div className="flex gap-4 mt-2 flex-col sm:flex-row">
        <div className="w-full mb-3">
          <label className="block mb-1 text-[16px] font-semibold text-[var(--color-heading)]">Industry</label>
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
          {errors.industry && <span className="text-xs text-red-500 mt-1">{errors.industry.message}</span>}
        </div>
        <div className="w-full mb-3">
          <label className="block mb-1 text-[16px] font-semibold text-[var(--color-heading)]">Company Size</label>
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
          {errors.companySize && <span className="text-xs text-red-500 mt-1">{errors.companySize.message}</span>}
        </div>
      </div>
      <div className="mt-2 mb-3">
        <label className="block mb-1 text-[16px] font-semibold text-[var(--color-heading)]">Country</label>
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
        {errors.country && <span className="text-xs text-red-500 mt-1">{errors.country.message}</span>}
      </div>
      <div className="flex flex-col sm:flex-row gap-4 mb-3">
        <div className="flex-1 relative mb-3">
          <Input
            label="Password"
            placeholder="Password"
            type={showPassword ? 'text' : 'password'}
            {...register('password')}
            aria-invalid={!!errors.password}
          />
          <button type="button" tabIndex={-1} className="absolute right-3 top-8 text-gray-400 cursor-pointer" onClick={() => setShowPassword(v => !v)}>
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
          {errors.password && <span className="text-xs text-red-500 mt-1">{errors.password.message}</span>}
        </div>
        <div className="flex-1 relative mb-3">
          <Input
            label="Confirm Password"
            placeholder="Confirm Password"
            type={showConfirmPassword ? 'text' : 'password'}
            {...register('confirmPassword')}
            aria-invalid={!!errors.confirmPassword}
          />
          <button type="button" tabIndex={-1} className="absolute right-3 top-8 text-gray-400 cursor-pointer" onClick={() => setShowConfirmPassword(v => !v)}>
            {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
          {errors.confirmPassword && <span className="text-xs text-red-500 mt-1">{errors.confirmPassword.message}</span>}
        </div>
      </div>
      <div className="flex justify-end">
        <button type="submit" disabled={loading} className="mt-4 py-2 px-16 rounded-xl bg-[var(--color-main)] text-black font-semibold hover:bg-[var(--color-heading)] hover:text-white transition cursor-pointer flex items-center justify-center min-w-[120px]">
          {loading ? <span className="loader mr-2"></span> : null}
          {loading ? 'Signing up...' : 'Sign up'}
        </button>
      </div>
      {success && (
        <Alert className="mt-4" variant="default">
          <AlertTitle>Sign up successful!</AlertTitle>
          <AlertDescription>Welcome aboard.</AlertDescription>
        </Alert>
      )}
    </form>
  );
};

export default CompanySignUpForm; 