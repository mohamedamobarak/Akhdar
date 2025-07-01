import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useTranslation } from 'react-i18next'
import { toast, Toaster } from 'sonner'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'

const ContactUs = () => {
  const { t } = useTranslation()

  const schema = z.object({
    firstName: z.string().min(1, t('contact.errors.firstNameRequired')),
    lastName: z.string().min(1, t('contact.errors.lastNameRequired')),
    email: z.string().email(t('contact.errors.invalidEmail')),
    company: z.string().optional(),
    interest: z.string().min(1, t('contact.errors.interestRequired')),
    message: z.string().optional(),
  })

  const interests = [
    t('contact.inputs.buyingCarbon'),
    t('contact.inputs.esgConsultation'),
    t('contact.inputs.sellCarbon'),
    t('contact.inputs.measureFootprint'),
    t('contact.inputs.other'),
  ]

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

  const onSubmit = () => {
    toast.success(t('contact.success'), { position: 'top-center' })
    reset()
  }

  return (
    <>
      <Toaster position="top-center" />
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-3xl shadow-lg p-10 w-full max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8">{t('contact.title')}</h2>
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <div className="flex-1 mb-3">
            <Label className="block mb-1 font-semibold">{t('contact.inputs.firstName')}</Label>
            <Input
              placeholder={t('contact.inputs.firstNamePlaceholder')}
              {...register('firstName')}
              aria-invalid={!!errors.firstName}
            />
            {errors.firstName && <span className="text-xs text-red-500 mt-1">{errors.firstName.message}</span>}
          </div>
          <div className="flex-1 mb-3">
            <Label className="block mb-1 font-semibold">{t('contact.inputs.lastName')}</Label>
            <Input
              placeholder={t('contact.inputs.lastNamePlaceholder')}
              {...register('lastName')}
              aria-invalid={!!errors.lastName}
            />
            {errors.lastName && <span className="text-xs text-red-500 mt-1">{errors.lastName.message}</span>}
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <div className="flex-1 mb-3">
            <Label className="block mb-1 font-semibold">{t('contact.inputs.email')}</Label>
            <Input
              placeholder={t('contact.inputs.emailPlaceholder')}
              {...register('email')}
              aria-invalid={!!errors.email}
            />
            {errors.email && <span className="text-xs text-red-500 mt-1">{errors.email.message}</span>}
          </div>
          <div className="flex-1 mb-3">
            <Label className="block mb-1 font-semibold">{t('contact.inputs.company')}</Label>
            <Input
              placeholder={t('contact.inputs.companyPlaceholder')}
              {...register('company')}
            />
          </div>
        </div>
        <div className="mb-4">
          <Label className="block mb-1 font-semibold">{t('contact.inputs.interest')}</Label>
          <div className="flex flex-wrap gap-4">
            {interests.map((interest) => (
              <label key={interest} className="flex items-center gap-2">
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
          <Input
            as="textarea"
            className="w-full bg-[#F0F5EF] rounded-md px-4 py-2"
            rows={4}
            placeholder={t('contact.inputs.messagePlaceholder')}
            {...register('message')}
          />
        </div>
        <div className="flex justify-center">
          <Button type="submit" className="bg-green-900 text-white px-12 py-3 rounded-xl text-lg font-semibold hover:bg-green-700 transition">
            {t('contact.inputs.submitButton')}
          </Button>
        </div>
      </form>
    </>
  )
}

export default ContactUs
