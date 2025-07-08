import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useTranslation } from 'react-i18next';
import { toast, Toaster } from "sonner";
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import axios from 'axios';
import { useMutation } from '@tanstack/react-query';

const sendContactUs = async (payload) => {
    const response = await axios.post(
        'https://ha858aeok8.execute-api.eu-north-1.amazonaws.com/DEV/SendContactUsWithInterestReply',
        payload
    );
    return response;
};

const ContactUs = () => {
    const { t, i18n } = useTranslation();
    const lang = i18n.language || 'en';
    const isRTL = lang === 'ar';
    const dir = isRTL ? 'rtl' : 'ltr'

    const schema = z.object({
        firstName: z.string().min(1, t('aboutus.contact.errors.firstNameRequired')),
        lastName: z.string().min(1, t('aboutus.contact.errors.lastNameRequired')),
        email: z.string().email(t('aboutus.contact.errors.invalidEmail')),
        company: z.string().optional(),
        interest: z.string().min(1, t('aboutus.contact.errors.interestRequired')),
        message: z.string().optional(),
    })

    // English interest keys and their translations
    const interestOptions = [
        { key: 'buyingCarbon', en: 'Buying Carbon Offsets now', value: t('aboutus.contact.inputs.buyingCarbon') },
        { key: 'esgConsultation', en: 'ESG consultation', value: t('aboutus.contact.inputs.esgConsultation') },
        { key: 'sellCarbon', en: 'Sell Carbon Offsets', value: t('aboutus.contact.inputs.sellCarbon') },
        { key: 'measureFootprint', en: 'Measure your businesses Carbon Footprint', value: t('aboutus.contact.inputs.measureFootprint') },
        { key: 'other', en: 'Other', value: t('aboutus.contact.inputs.other') },
    ];
    const interests = interestOptions.map(opt => opt.value);

    const { register, handleSubmit, formState: { errors }, reset, setValue, watch } = useForm({
        resolver: zodResolver(schema),
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            company: '',
            interest: '',
            message: '',
        }
    })

    const mutation = useMutation({
        mutationFn: sendContactUs,
        onSuccess: (response) => {
            if (response.status === 200 && response.data?.Success) {
                // Get both the API message and the email subject
                const apiMessage = response.data.message;
                const emailSubject = response.data.EmailDetails?.subject;
                toast.success(
                    <div>
                        <div>{apiMessage}</div>
                        {emailSubject && <div className="mt-1 font-semibold">{emailSubject}</div>}
                    </div>,
                    { position: 'top-center' }
                );
                reset();
            } else {
                toast.error(t('aboutus.contact.error') || 'Something went wrong. Please try again.', { position: 'top-center' });
            }
        },
        onError: (error) => {
            // Try to extract a detailed error message from Axios error
            let errorMsg = t('aboutus.contact.error') || 'Something went wrong. Please try again.';
            if (error?.response?.data?.error) {
                errorMsg = error.response.data.error;
            } else if (error?.message) {
                errorMsg = error.message;
            }
            toast.error(errorMsg, { position: 'top-center' });
            console.error('Contact form submission error:', error);
        }
    });

    const onSubmit = (data) => {
        // Map the selected interest (translated) back to English
        const selectedInterest = interestOptions.find(opt => opt.value === data.interest)?.en || data.interest;
        const payload = {
            firstName: data.firstName,
            lastName: data.lastName,
            company: data.company,
            email: data.email,
            interest: selectedInterest,
            message: data.message
        };
        mutation.mutate(payload);
    }

    return (
        <>
            <Toaster position="top-center" />
            <form dir={dir} onSubmit={handleSubmit(onSubmit)} className="bg-white my-12 rounded-3xl shadow-lg p-8 w-full max-w-4xl mx-auto">
                <h2 className={`text-2xl font-bold text-center mb-8  text-primary`}>{t('aboutus.contact.title')}</h2>
                <div className="flex flex-col md:flex-row gap-4 mb-4">
                    <div className="flex-1 mb-3">
                        <Label className={`block  font-semibold mb-2 text-primary`}>{t('aboutus.contact.inputs.firstName')}</Label>
                        <Input
                            placeholder={t('aboutus.contact.inputs.firstNamePlaceholder')}
                            {...register('firstName')}
                            aria-invalid={!!errors.firstName}
                        />
                        {errors.firstName && <span className="text-xs text-red-500 mt-1">{errors.firstName.message}</span>}
                    </div>
                    <div className="flex-1 mb-3">
                        <Label className={`block  font-semibold mb-2 text-primary`}>{t('aboutus.contact.inputs.lastName')}</Label>
                        <Input
                            placeholder={t('aboutus.contact.inputs.lastNamePlaceholder')}
                            {...register('lastName')}
                            aria-invalid={!!errors.lastName}
                        />
                        {errors.lastName && <span className="text-xs text-red-500 mt-1">{errors.lastName.message}</span>}
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-4 mb-4">
                    <div className="flex-1 mb-3">
                        <Label className={`block  font-semibold mb-2 text-primary`}>{t('aboutus.contact.inputs.email')}</Label>
                        <Input
                            placeholder={t('aboutus.contact.inputs.emailPlaceholder')}
                            {...register('email')}
                            aria-invalid={!!errors.email}
                        />
                        {errors.email && <span className="text-xs text-red-500 mt-1">{errors.email.message}</span>}
                    </div>
                    <div className="flex-1 mb-3">
                        <Label className={`block  font-semibold mb-2 text-primary`}>{t('aboutus.contact.inputs.company')}</Label>
                        <Input
                            placeholder={t('aboutus.contact.inputs.companyPlaceholder')}
                            {...register('company')}
                        />
                    </div>
                </div>
                <div className="mb-4">
                    <Label className={`block mb-2 font-semibold text-primary`}>{t('aboutus.contact.inputs.interest')}</Label>
                    <div className="flex flex-row flex-wrap gap-x-2 gap-y-2  items-center">
                        {interests.map((interest) => (
                            <label key={interest} className="flex text-primary items-center gap-2 mb-2 text-sm">
                                <input
                                    type="radio"
                                    value={interest}
                                    {...register('interest')}
                                    checked={watch('interest') === interest}
                                    onChange={() => setValue('interest', interest)}
                                />
                                {interest}
                            </label>
                        ))}
                    </div>
                    {errors.interest && <span className="text-xs text-red-500 mt-1 block">{errors.interest.message}</span>}
                </div>
                <div className="mb-6">
                    <textarea
                        className="w-full bg-[#F0F5EF] rounded-md px-4 py-2 min-h-[100px]"
                        rows={4}
                        placeholder={t('aboutus.contact.inputs.messagePlaceholder')}
                        {...register('message')}
                    />
                </div>
                <div className="flex justify-center">
                    <Button 
                        type="submit" 
                        className="bg-green-900 cursor-pointer text-white px-24 py-3 rounded-xl text-md font-semibold hover:bg-green-700 transition"
                        disabled={mutation.isLoading}
                    >
                        {mutation.isLoading ? (
                            <>
                                <span className="loader mr-2"></span>
                                {t('aboutus.contact.inputs.submitting') || 'Submitting...'}
                            </>
                        ) : t('aboutus.contact.inputs.submitButton')}
                    </Button>
                </div>
            </form>
        </>
    )
}

export default ContactUs
