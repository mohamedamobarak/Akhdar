import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Input } from '../../../components/ui/Input';
import { Eye, EyeOff } from 'lucide-react';
import { toast, Toaster } from "sonner";
import ErrorMessage from '../../../components/ErrorMessage';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const createSchema = (t) => z.object({
    email: z.string().min(1, t('Login.emailRequired')).email(t('Login.emailInvalid')),
    password: z.string().min(1, t('Login.passwordRequired')),
    rememberMe: z.boolean().optional(),
});

const LoginForm = () => {
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const { t, i18n } = useTranslation();
    const lang = i18n.language || 'en';
    const isRTL = lang === 'ar';

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: zodResolver(createSchema(t)),
        mode: 'onChange',
    });
    const onSubmit = (data) => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            toast.success("Login successful! Welcome back.", { position: "top-center" });
            console.log('Login data:', data);
            reset();
        }, 1200);
    };

    return (
        <>
            <Toaster position="top-center" />
            <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md mx-auto">
                {/* Email Field */}
                <div className="mb-4">
                    <Input
                        label={t('Login.email')}
                        placeholder={t('Login.email')}
                        type="email"
                        {...register('email')}
                        aria-invalid={!!errors.email}
                        className={"h-12 border-0 rounded-2xl"}
                    />
                    <ErrorMessage message={errors.email?.message} />
                </div>

                {/* Password Field */}
                <div className="mb-4">
                    <label className="block mb-1 text-[16px] font-semibold text-primary">{t('Login.password')}</label>
                    <div className="relative">
                        <Input
                            placeholder={t('Login.password')}
                            type={showPassword ? 'text' : 'password'}
                            {...register('password')}
                            aria-invalid={!!errors.password}
                            className={"h-12 border-0 rounded-2xl"}
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

                {/* Remember Me and Forgot Password */}
                <div className={`flex ${isRTL ? 'flex-row-reverse' : 'flex-row'} justify-between items-center mb-6`}>
                    <div className={`flex ${isRTL ? 'flex-row-reverse' : 'flex-row'} items-center`}>
                        <input
                            type="checkbox"
                            id="rememberMe"
                            {...register('rememberMe')}
                            className="mr-2 ml-2"
                        />
                        <label htmlFor="rememberMe" className="text-sm text-primary font-medium">
                            {t('Login.rememberMe')}
                        </label>
                    </div>
                    <Link href="#" className="text-sm text-primary font-bold hover:underline">
                        {t('Login.forgotPassword')}
                    </Link>
                </div>

                {/* Login Button */}
                <div className="flex justify-center">
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-3 px-6 rounded-xl bg-main text-black font-semibold hover:bg-heading hover:text-white transition cursor-pointer flex items-center justify-center"
                    >
                        {loading ? <span className="loader mr-2"></span> : null}
                        {loading ? t('Login.loggingIn') : t('Login.loginButton')}
                    </button>
                </div>
            </form>
        </>
    );
};

export default LoginForm; 