import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Input } from '../../components/ui/Input';
import { Eye, EyeOff } from 'lucide-react';
import { toast, Toaster } from "sonner";
import ErrorMessage from '../../components/ErrorMessage';
import { useTranslation } from 'react-i18next';
import SettingsLayout from './components/SettingsLayout';

const createSchema = (t) => z.object({
  currentPassword: z.string().min(1, t('userSettings.changePassword.errors.currentPasswordRequired')),
  newPassword: z.string()
    .min(8, t('userSettings.changePassword.errors.newPasswordMin'))
    .regex(/[0-9]/, t('userSettings.changePassword.errors.newPasswordNumber'))
    .regex(/[!@#$%^&*(),.?":{}|<>]/, t('userSettings.changePassword.errors.newPasswordSpecial'))
    .regex(/[a-z]/, t('userSettings.changePassword.errors.newPasswordLowercase'))
    .regex(/[A-Z]/, t('userSettings.changePassword.errors.newPasswordUppercase')),
  confirmPassword: z.string().min(1, t('userSettings.changePassword.errors.confirmPasswordRequired')),
}).refine((data) => data.newPassword === data.confirmPassword, {
  message: t('userSettings.changePassword.errors.passwordsDoNotMatch'),
  path: ["confirmPassword"],
});

const ChangePassword = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language || 'en';
  const isRTL = lang === 'ar';
  const [loading, setLoading] = useState(false);
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  const schema = createSchema(t);

  const { register, handleSubmit, formState: { errors }, reset, watch } = useForm({
    resolver: zodResolver(schema),
    mode: 'onChange',
  });

  const newPassword = watch('newPassword', '');

  // Password validation checks
  const validationChecks = [
    {
      text: t('userSettings.changePassword.requirements.minLength'),
      isValid: newPassword.length >= 8
    },
    {
      text: t('userSettings.changePassword.requirements.oneNumber'),
      isValid: /[0-9]/.test(newPassword)
    },
    {
      text: t('userSettings.changePassword.requirements.oneSpecial'),
      isValid: /[!@#$%^&*(),.?":{}|<>]/.test(newPassword)
    },
    {
      text: t('userSettings.changePassword.requirements.oneLowercase'),
      isValid: /[a-z]/.test(newPassword)
    },
    {
      text: t('userSettings.changePassword.requirements.oneUppercase'),
      isValid: /[A-Z]/.test(newPassword)
    },
  ];

  const onSubmit = (data) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success(t('userSettings.changePassword.successMessage'), { position: "top-center" });
      console.log('Password change data:', data);
      reset();
    }, 1200);
  };

  return (
    <>
      <Toaster position="top-center" />
      <SettingsLayout title={t('userSettings.changePassword.title')} backTo="/dashboard">
        <div className="mb-4">
          <form onSubmit={handleSubmit(onSubmit)} className="w-full">

            {/* Current Password */}
            <div className="mb-4">
              <label className="block mb-1 text-[16px] font-semibold text-primary">{t('userSettings.changePassword.currentPassword')}</label>
              <div className="relative">
                <Input
                  placeholder="••••••••"
                  type={showCurrentPassword ? 'text' : 'password'}
                  {...register('currentPassword')}
                  aria-invalid={!!errors.currentPassword}
                />
                <button
                  type="button"
                  tabIndex={-1}
                  className={`absolute ${isRTL ? 'left-3' : 'right-3'} top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer`}
                  onClick={() => setShowCurrentPassword(v => !v)}
                >
                  {showCurrentPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              <ErrorMessage message={errors.currentPassword?.message} />
            </div>

            {/* New Password */}
            <div className="mb-4">
              <label className="block mb-1 text-[16px] font-semibold text-primary">{t('userSettings.changePassword.newPassword')}</label>
              <div className="relative">
                <Input
                  placeholder="••••••••"
                  type={showNewPassword ? 'text' : 'password'}
                  {...register('newPassword')}
                  aria-invalid={!!errors.newPassword}
                />
                <button
                  type="button"
                  tabIndex={-1}
                  className={`absolute ${isRTL ? 'left-3' : 'right-3'} top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer`}
                  onClick={() => setShowNewPassword(v => !v)}
                >
                  {showNewPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              <ErrorMessage message={errors.newPassword?.message} />
            </div>

            {/* Confirm New Password */}
            <div className="mb-4">
              <label className="block mb-1 text-[16px] font-semibold text-primary">{t('userSettings.changePassword.confirmPassword')}</label>
              <div className="relative">
                <Input
                  placeholder="••••••••"
                  type={showConfirmPassword ? 'text' : 'password'}
                  {...register('confirmPassword')}
                  aria-invalid={!!errors.confirmPassword}
                />
                <button
                  type="button"
                  tabIndex={-1}
                  className={`absolute ${isRTL ? 'left-3' : 'right-3'} top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer`}
                  onClick={() => setShowConfirmPassword(v => !v)}
                >
                  {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              <ErrorMessage message={errors.confirmPassword?.message} />
            </div>

            {/* Password Requirements */}
            <div className="mb-6">
              <div className="grid grid-cols-2 gap-2 text-sm">
                {validationChecks.map((check, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${check.isValid ? 'bg-green-500' : 'bg-gray-300'}`} />
                    <span className={check.isValid ? 'text-green-600' : 'text-gray-500'}>
                      {check.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex justify-center">
              <button
                type="submit"
                disabled={loading}
                className="py-2 px-16 rounded-xl bg-main text-black font-semibold hover:bg-primary hover:text-white transition cursor-pointer flex items-center justify-center min-w-[120px]"
              >
                {loading ? <span className="loader mr-2"></span> : null}
                {loading ? t('userSettings.changePassword.saving') : t('userSettings.changePassword.saveChanges')}
              </button>
            </div>
          </form>
        </div>
      </SettingsLayout>
    </>
  );
};

export default ChangePassword;
