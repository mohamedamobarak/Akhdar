import React from 'react';
import bgImage from '../../assets/ESGbackground/ESGbackground.png';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const EGSFormSchema = z.object({
  companyName: z.string().min(1, 'Company Name is required'),
  firstName: z.string().min(1, 'First Name is required'),
  lastName: z.string().min(1, 'Last Name is required'),
  phone: z.string().min(1, 'Phone is required'),
  email: z.string().email('Invalid email address').min(1, 'Email is required'),
  industry: z.string().min(1, 'Industry is required'),
  companySize: z.string().min(1, 'Company Size is required'),
  country: z.string().min(1, 'Country is required'),
  trackingEmissions: z.enum(['yes', 'no'], { required_error: 'Tracking emissions is required' }),
  emissionScopes: z.array(z.string()).min(1, 'Select at least one scope'),
  lca: z.enum(['yes', 'no'], { required_error: 'LCA is required' }),
  procurement: z.enum(['yes', 'no'], { required_error: 'Procurement is required' }),
  decarbonization: z.enum(['yes', 'no'], { required_error: 'Decarbonization is required' }),
  privacyConsent: z.literal(true, { errorMap: () => ({ message: 'Consent is required' }) }),
});

export default function EGSInteractiveForm() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';
  const { register, handleSubmit, formState: { errors }, setValue, watch } = useForm({
    resolver: zodResolver(EGSFormSchema),
    defaultValues: {
      companyName: '',
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      industry: '',
      companySize: '',
      country: '',
      trackingEmissions: '',
      emissionScopes: [],
      lca: '',
      procurement: '',
      decarbonization: '',
      privacyConsent: false,
    }
  });

  const onSubmit = (data) => {
    console.log('Form submitted:', data);
  };

  const emissionScopes = watch('emissionScopes');

  return (
    <div
      dir={isArabic ? 'rtl' : 'ltr'}
      className="relative min-h-screen w-full flex items-center justify-center font-inter"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/60 z-0" />
      <div className="relative z-10 flex flex-col md:flex-row w-full h-full min-h-screen">
        {/* Language Switcher */}
        <button onClick={() => i18n.changeLanguage(isArabic ? 'en' : 'ar')} className="absolute top-4 left-4 bg-main text-white px-4 py-2 rounded-full z-50">
          {isArabic ? 'English' : 'العربية'}
        </button>
        {/* Left Section */}
        <div className={`flex-1 flex flex-col ${isArabic ? 'items-start text-right' : 'items-start text-left'} px-8 md:pl-20 md:py-8 pt-12 pb-4 max-w-xl`}>
          <div className="mb-8">
            <button className="w-14 h-14 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition">
              <FontAwesomeIcon icon={isArabic ? faArrowRight : faArrowLeft} className="text-green-300 text-3xl" />
            </button>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-main">
            {t('startSustainability')}
          </h1>
          <p className="text-lg text-white/80 max-w-md">
            {t('formSubtitle')}
          </p>
        </div>
        {/* Right Section (Form Card) */}
        <div className="flex-1 flex items-center justify-center py-12 px-4 md:px-0">
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 w-full max-w-lg">
            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
              {/* 1. Company Information */}
              <div>
                <h2 className={`text-lg font-bold mb-4 text-primary ${isArabic ? 'text-right' : 'text-left'}`}>{t('companyInfo')}</h2>
                {/* Company Name full width */}
                <div className="flex flex-col mb-4">
                  <label className={`block mb-1 text-l text-primary ${isArabic ? 'text-right' : 'text-left'}`}>{t('companyName')}</label>
                  <input
                    type="text"
                    {...register('companyName')}
                    placeholder={t('companyName')}
                    className={`input input-bordered w-full border border-gray-300 rounded-lg px-3 py-2 block ${isArabic ? 'text-right' : 'text-left'}`}
                  />
                  {errors.companyName && <span className="text-red-500 text-xs">{errors.companyName.message}</span>}
                </div>
                {/* First Name, Last Name, Email, Phone in grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="flex flex-col mb-2">
                    <label className={`block mb-1 text-sm text-primary ${isArabic ? 'text-right' : 'text-left'}`}>{t('firstName')}</label>
                    <input
                      type="text"
                      {...register('firstName')}
                      placeholder={t('firstName')}
                      className={`input input-bordered w-full border border-gray-300 rounded-lg px-3 py-2 block ${isArabic ? 'text-right' : 'text-left'}`}
                    />
                    {errors.firstName && <span className="text-red-500 text-xs">{errors.firstName.message}</span>}
                  </div>
                  <div className="flex flex-col mb-2">
                    <label className={`block mb-1 text-sm text-primary ${isArabic ? 'text-right' : 'text-left'}`}>{t('lastName')}</label>
                    <input
                      type="text"
                      {...register('lastName')}
                      placeholder={t('lastName')}
                      className={`input input-bordered w-full border border-gray-300 rounded-lg px-3 py-2 block ${isArabic ? 'text-right' : 'text-left'}`}
                    />
                    {errors.lastName && <span className="text-red-500 text-xs">{errors.lastName.message}</span>}
                  </div>
                  <div className="flex flex-col mb-2">
                    <label className={`block mb-1 text-sm text-primary ${isArabic ? 'text-right' : 'text-left'}`}>{t('email')}</label>
                    <input
                      type="email"
                      {...register('email')}
                      placeholder={t('email')}
                      className={`input input-bordered w-full border border-gray-300 rounded-lg px-3 py-2 block ${isArabic ? 'text-right' : 'text-left'}`}
                    />
                    {errors.email && <span className="text-red-500 text-xs">{errors.email.message}</span>}
                  </div>
                  <div className="flex flex-col mb-2">
                    <label className={`block mb-1 text-sm text-primary ${isArabic ? 'text-right' : 'text-left'}`}>{t('phone')}</label>
                    <input
                      type="text"
                      {...register('phone')}
                      placeholder={t('phone')}
                      className={`input input-bordered w-full border border-gray-300 rounded-lg px-3 py-2 block ${isArabic ? 'text-right' : 'text-left'}`}
                    />
                    {errors.phone && <span className="text-red-500 text-xs">{errors.phone.message}</span>}
                  </div>
                </div>
                {/* Industry, Company Size, Country selects styled and below */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  {/* Industry */}
                  <div className="relative">
                    <label className={`block mb-2 font-bold text-primary text-lg ${isArabic ? 'text-right' : 'text-left'}`}>{t('industry')}</label>
                    <select
                      {...register('industry')}
                      className={`w-full bg-[#F2F7F2] rounded-xl py-3 pl-4 pr-12 text-primary font-semibold appearance-none focus:outline-none ${isArabic ? 'text-right' : 'text-left'}`}
                    >
                      <option value="">{t('selectIndustry')}</option>
                      <option value="option1">{t('option1')}</option>
                      <option value="option2">{t('option2')}</option>
                      <option value="option3">{t('option3')}</option>
                    </select>
                    <span className={`pointer-events-none absolute inset-y-0 ${isArabic ? 'right-4' : 'left-4'} flex items-center`}>
                      <FontAwesomeIcon
                        icon={isArabic ? faArrowRight : faArrowLeft}
                        className="text-[#7CE495] text-xl"
                      />
                    </span>
                    {errors.industry && <span className="text-red-500 text-xs">{errors.industry.message}</span>}
                  </div>
                  {/* Company Size */}
                  <div className="relative">
                    <label className={`block mb-2 font-bold text-primary text-lg ${isArabic ? 'text-right' : 'text-left'}`}>{t('companySize')}</label>
                    <select
                      {...register('companySize')}
                      className={`w-full bg-[#F2F7F2] rounded-xl py-3 pl-4 pr-12 text-primary font-semibold appearance-none focus:outline-none ${isArabic ? 'text-right' : 'text-left'}`}
                    >
                      <option value="">{t('selectSize')}</option>
                      <option value="small">{t('small')}</option>
                      <option value="medium">{t('medium')}</option>
                      <option value="large">{t('large')}</option>
                    </select>
                    <span className={`pointer-events-none absolute inset-y-0 ${isArabic ? 'right-4' : 'left-4'} flex items-center`}>
                      <FontAwesomeIcon
                        icon={isArabic ? faArrowRight : faArrowLeft}
                        className="text-[#7CE495] text-xl"
                      />
                    </span>
                    {errors.companySize && <span className="text-red-500 text-xs">{errors.companySize.message}</span>}
                  </div>
                </div>
                {/* Country */}
                <div className="mb-4 relative">
                  <label className={`block mb-2 font-bold text-primary text-lg ${isArabic ? 'text-right' : 'text-left'}`}>{t('country')}</label>
                  <select
                    {...register('country')}
                    className={`w-full bg-[#F2F7F2] rounded-xl py-3 pl-4 pr-12 text-primary font-semibold appearance-none focus:outline-none ${isArabic ? 'text-right' : 'text-left'}`}
                  >
                    <option value="">{t('selectCountry')}</option>
                    <option value="country1">{t('saudi')}</option>
                    <option value="country2">{t('egypt')}</option>
                    <option value="country3">{t('uae')}</option>
                  </select>
                  <span className={`pointer-events-none absolute inset-y-0 ${isArabic ? 'right-4' : 'left-4'} flex items-center`}>
                    <FontAwesomeIcon
                      icon={isArabic ? faArrowRight : faArrowLeft}
                      className="text-[#7CE495] text-xl"
                    />
                  </span>
                  {errors.country && <span className="text-red-500 text-xs">{errors.country.message}</span>}
                </div>
              </div>
              {/* Emission Reporting */}
              <div>
                <h3 className="font-bold text-primary mb-2">{t('emissionReporting')}</h3>
                <h4 className="text-gray-500 mb-2">{t('trackingEmissions')}</h4>
                <div className="flex flex-row gap-2 mb-4">
                  <label className="flex items-center gap-2">
                    <input 
                      type="radio" 
                      value="yes"
                      {...register('trackingEmissions')}
                      className="accent-green-500"
                    /> {t('yes')}
                  </label>
                  <label className="flex items-center gap-2">
                    <input 
                      type="radio" 
                      value="no"
                      {...register('trackingEmissions')}
                      className="accent-green-500"
                    /> {t('no')}
                  </label>
                </div>
                {errors.trackingEmissions && <span className="text-red-500 text-xs">{errors.trackingEmissions.message}</span>}
                <h4 className="text-gray-500 mb-2">{t('emissionScopes')}</h4>
                <div className="flex flex-row gap-2">
                  <label className="flex items-center gap-2">
                    <input 
                      type="checkbox" 
                      value="scope1"
                      {...register('emissionScopes')}
                      checked={emissionScopes?.includes('scope1')}
                      onChange={e => {
                        const checked = e.target.checked;
                        setValue('emissionScopes', checked
                          ? [...(emissionScopes || []), 'scope1']
                          : (emissionScopes || []).filter(v => v !== 'scope1')
                        );
                      }}
                      className="accent-green-500"
                    /> {t('scope1')}
                  </label>
                  <label className="flex items-center gap-2">
                    <input 
                      type="checkbox" 
                      value="scope2"
                      {...register('emissionScopes')}
                      checked={emissionScopes?.includes('scope2')}
                      onChange={e => {
                        const checked = e.target.checked;
                        setValue('emissionScopes', checked
                          ? [...(emissionScopes || []), 'scope2']
                          : (emissionScopes || []).filter(v => v !== 'scope2')
                        );
                      }}
                      className="accent-green-500"
                    /> {t('scope2')}
                  </label>
                  <label className="flex items-center gap-2">
                    <input 
                      type="checkbox" 
                      value="scope3"
                      {...register('emissionScopes')}
                      checked={emissionScopes?.includes('scope3')}
                      onChange={e => {
                        const checked = e.target.checked;
                        setValue('emissionScopes', checked
                          ? [...(emissionScopes || []), 'scope3']
                          : (emissionScopes || []).filter(v => v !== 'scope3')
                        );
                      }}
                      className="accent-green-500"
                    /> {t('scope3')}
                  </label>
                </div>
                {errors.emissionScopes && <span className="text-red-500 text-xs">{errors.emissionScopes.message}</span>}
              </div>
              {/* Life Cycle Analysis (LCA) */}
              <div>
                <h3 className="font-bold text-primary mb-2">{t('lcaTitle')}</h3>
                <h4 className="text-gray-500 mb-2">{t('lcaQuestion')}</h4>
                <div className="flex flex-row gap-2">
                  <label className="flex items-center gap-2">
                    <input 
                      type="radio" 
                      value="yes"
                      {...register('lca')}
                      className="accent-green-500"
                    /> {t('yes')}
                  </label>
                  <label className="flex items-center gap-2">
                    <input 
                      type="radio" 
                      value="no"
                      {...register('lca')}
                      className="accent-green-500"
                    /> {t('no')}
                  </label>
                </div>
                {errors.lca && <span className="text-red-500 text-xs">{errors.lca.message}</span>}
              </div>
              {/* Sustainable Procurement */}
              <div>
                <h3 className="font-bold text-primary mb-2">{t('procurement')}</h3>
                <div className="flex flex-row gap-2">
                  <label className="flex items-center gap-2">
                    <input 
                      type="radio" 
                      value="yes"
                      {...register('procurement')}
                      className="accent-green-500"
                    /> {t('yes')}
                  </label>
                  <label className="flex items-center gap-2">
                    <input 
                      type="radio" 
                      value="no"
                      {...register('procurement')}
                      className="accent-green-500"
                    /> {t('no')}
                  </label>
                </div>
                {errors.procurement && <span className="text-red-500 text-xs">{errors.procurement.message}</span>}
              </div>
              {/* Decarbonization Strategy */}
              <div>
                <h3 className="font-bold text-primary mb-2">{t('decarbonization')}</h3>
                <div className="flex flex-row gap-2">
                  <label className="flex items-center gap-2">
                    <input 
                      type="radio" 
                      value="yes"
                      {...register('decarbonization')}
                      className="accent-green-500"
                    /> {t('yes')}
                  </label>
                  <label className="flex items-center gap-2">
                    <input 
                      type="radio" 
                      value="no"
                      {...register('decarbonization')}
                      className="accent-green-500"
                    /> {t('no')}
                  </label>
                </div>
                {errors.decarbonization && <span className="text-red-500 text-xs">{errors.decarbonization.message}</span>}
              </div>
              {/* Consent */}
              <div className="flex items-center gap-2 mb-4">
                <input
                  type="checkbox"
                  {...register('privacyConsent')}
                  className="accent-green-500"
                />
                <span>{t('agreePrivacy')}</span>
              </div>
              {errors.privacyConsent && <span className="text-red-500 text-xs">{errors.privacyConsent.message}</span>}
              {/* Submit Button */}
              <button type="submit" className="w-full bg-main text-white py-3 rounded-xl font-bold text-lg hover:bg-green-700 transition">
                {t('submit')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}