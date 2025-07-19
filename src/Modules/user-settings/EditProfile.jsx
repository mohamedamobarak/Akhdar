import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Input } from '../../components/ui/Input';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '../../components/ui/select';
import { Eye, EyeOff } from 'lucide-react';
import countryList from 'country-list';
import { toast, Toaster } from "sonner";
import ErrorMessage from '../../components/ErrorMessage';
import { useTranslation } from 'react-i18next';
import SettingsLayout from './components/SettingsLayout';

// Industry options (reused from CompanySignUpForm)
const industries = [
  { value: 'technology', label: 'Technology' },
  { value: 'finance', label: 'Finance' },
  { value: 'healthcare', label: 'Healthcare' },
  { value: 'education', label: 'Education' },
  { value: 'retail', label: 'Retail' },
  { value: 'manufacturing', label: 'Manufacturing' },
  { value: 'consulting', label: 'Consulting' },
  { value: 'other', label: 'Other' },
];

// Company size options (reused from CompanySignUpForm)
const companySizes = [
  { value: '1-10', label: '1-10 employees' },
  { value: '11-50', label: '11-50 employees' },
  { value: '51-200', label: '51-200 employees' },
  { value: '201-500', label: '201-500 employees' },
  { value: '501-1000', label: '501-1000 employees' },
  { value: '1000+', label: '1000+ employees' },
];

// Countries (reused from CompanySignUpForm)
const countries = countryList.getData().map(country => ({
  value: country.code,
  label: country.name,
}));

// Create schemas with translation function
const createSchemas = (t) => {
  const companySchema = z.object({
    companyName: z.string().min(2, t('userSettings.editProfile.errors.companyNameMin')).max(100, t('userSettings.editProfile.errors.companyNameMax')),
    firstName: z.string().min(2, t('userSettings.editProfile.errors.firstNameMin')).max(50, t('userSettings.editProfile.errors.firstNameMax')),
    lastName: z.string().min(2, t('userSettings.editProfile.errors.lastNameMin')).max(50, t('userSettings.editProfile.errors.lastNameMax')),
    email: z.string().email(t('userSettings.editProfile.errors.emailInvalid')),
    password: z.string().min(6, t('userSettings.editProfile.errors.passwordMin')),
    industry: z.string().min(1, t('userSettings.editProfile.errors.industryRequired')),
    companySize: z.string().min(1, t('userSettings.editProfile.errors.companySizeRequired')),
    country: z.string().min(1, t('userSettings.editProfile.errors.countryRequired')),
  });

  const individualSchema = z.object({
    firstName: z.string().min(2, t('userSettings.editProfile.errors.firstNameMin')).max(50, t('userSettings.editProfile.errors.firstNameMax')),
    lastName: z.string().min(2, t('userSettings.editProfile.errors.lastNameMin')).max(50, t('userSettings.editProfile.errors.lastNameMax')),
    email: z.string().email(t('userSettings.editProfile.errors.emailInvalid')),
    phone: z.string().min(8, t('userSettings.editProfile.errors.phoneMin')),
  });

  return { companySchema, individualSchema };
};

const EditProfile = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language || 'en';
  const isRTL = lang === 'ar';
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const userType = 'company'; // 'company' or 'individual'
  const isCompany = userType === 'company';

  // Get schemas with translations
  const { companySchema, individualSchema } = createSchemas(t);

  // Choose schema based on user type
  const schema = isCompany ? companySchema : individualSchema;

  // Default values based on user type
  const getDefaultValues = () => {
    if (isCompany) {
      return {
        companyName: 'Akhdar',
        firstName: 'Yasser',
        lastName: 'Mohamed',
        email: 'Yasser_mohamed@gmail.com',
        password: '********',
        industry: 'technology',
        companySize: '11-50',
        country: 'EG',
      };
    } else {
      return {
        firstName: 'Yasser',
        lastName: 'Mohamed',
        email: 'Yasser_mohamed@gmail.com',
        phone: '+966501234567',
      };
    }
  };

  const { register, handleSubmit, control, formState: { errors }, reset } = useForm({
    resolver: zodResolver(schema),
    mode: 'onChange',
    defaultValues: getDefaultValues(),
  });

  const onSubmit = (data) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success(t('userSettings.editProfile.successMessage'), { position: "top-center" });
      console.log('Profile update data:', data);
    }, 1200);
  };

  return (
    <>
      <Toaster position="top-center" />
      <SettingsLayout title={t('userSettings.editProfile.title')} backTo="/dashboard">
        <div className="mb-4">
          <h2 className="text-lg font-bold mb-6 text-primary text-center">{t('userSettings.editProfile.formTitle')}</h2>
          
          <form onSubmit={handleSubmit(onSubmit)} className="w-full">
            {/* Company Name - Only for company users */}
            {isCompany && (
              <div className="mb-4">
                <Input
                  label={t('userSettings.editProfile.companyName')}
                  placeholder={t('userSettings.editProfile.companyName')}
                  {...register('companyName')}
                  aria-invalid={!!errors.companyName}
                />
                <ErrorMessage message={errors.companyName?.message} />
              </div>
            )}

            {/* First Name and Last Name - For both user types */}
            <div className="flex gap-4">
              <div className="flex-1 mb-3">
                <Input
                  label={t('userSettings.editProfile.firstName')}
                  placeholder={t('userSettings.editProfile.firstName')}
                  {...register('firstName')}
                  aria-invalid={!!errors.firstName}
                />
                <ErrorMessage message={errors.firstName?.message} />
              </div>
              <div className="flex-1 mb-3">
                <Input
                  label={t('userSettings.editProfile.lastName')}
                  placeholder={t('userSettings.editProfile.lastName')}
                  {...register('lastName')}
                  aria-invalid={!!errors.lastName}
                />
                <ErrorMessage message={errors.lastName?.message} />
              </div>
            </div>

            {/* Email - For both user types */}
            <div className="mb-3">
              <Input
                label={t('userSettings.editProfile.email')}
                placeholder={t('userSettings.editProfile.email')}
                type="email"
                {...register('email')}
                aria-invalid={!!errors.email}
              />
              <ErrorMessage message={errors.email?.message} />
            </div>

            {/* Phone - Only for individual users */}
            {!isCompany && (
              <div className="mb-3">
                <Input
                  label={t('userSettings.editProfile.phone')}
                  placeholder={t('userSettings.editProfile.phone')}
                  {...register('phone')}
                  aria-invalid={!!errors.phone}
                />
                <ErrorMessage message={errors.phone?.message} />
              </div>
            )}

            {/* Password - Only for company users */}
            {isCompany && (
              <div className="mb-3">
                <label className="block mb-1 text-[16px] font-semibold text-primary">{t('userSettings.editProfile.password')}</label>
                <div className="relative">
                  <Input
                    placeholder={t('userSettings.editProfile.password')}
                    type={showPassword ? 'text' : 'password'}
                    {...register('password')}
                    aria-invalid={!!errors.password}
                  />
                  <button
                    type="button"
                    tabIndex={-1}
                    className={`absolute ${isRTL ? 'left-3' : 'right-3'} top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer`}
                    onClick={() => setShowPassword(v => !v)}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
                <ErrorMessage message={errors.password?.message} />
              </div>
            )}

            {/* Industry, Company Size, and Country - Only for company users */}
            {isCompany && (
              <>
                <div className="flex gap-4 mt-2 flex-col sm:flex-row">
                  <div className="w-full mb-3">
                    <label className="block mb-1 text-[16px] font-semibold text-primary">{t('userSettings.editProfile.industry')}</label>
                    <Controller
                      name="industry"
                      control={control}
                      render={({ field }) => (
                        <Select value={field.value} onValueChange={field.onChange}>
                          <SelectTrigger className="w-full bg-[#F0F5EF]">
                            <SelectValue placeholder={t('userSettings.editProfile.selectIndustry')} />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>{t('userSettings.editProfile.industry')}</SelectLabel>
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
                    <label className="block mb-1 text-[16px] font-semibold text-primary">{t('userSettings.editProfile.companySize')}</label>
                    <Controller
                      name="companySize"
                      control={control}
                      render={({ field }) => (
                        <Select value={field.value} onValueChange={field.onChange}>
                          <SelectTrigger className="w-full bg-[#F0F5EF]">
                            <SelectValue placeholder={t('userSettings.editProfile.selectSize')} />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>{t('userSettings.editProfile.companySize')}</SelectLabel>
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
                  <label className="block mb-1 text-[16px] font-semibold text-primary">{t('userSettings.editProfile.country')}</label>
                  <Controller
                    name="country"
                control={control}
                render={({ field }) => (
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger className="w-full bg-[#F0F5EF]">
                      <SelectValue placeholder={t('userSettings.editProfile.selectCountry')} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>{t('userSettings.editProfile.country')}</SelectLabel>
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
              </>
            )}

            <div className="flex justify-center mt-6">
              <button
                type="submit"
                disabled={loading}
                className="py-2 px-16 rounded-xl bg-main text-black font-semibold hover:bg-primary hover:text-white transition cursor-pointer flex items-center justify-center min-w-[120px]"
              >
                {loading ? <span className="loader mr-2"></span> : null}
                {loading ? t('userSettings.editProfile.saving') : t('userSettings.editProfile.saveChanges')}
              </button>
            </div>
          </form>
        </div>
      </SettingsLayout>
    </>
  );
};

export default EditProfile;
