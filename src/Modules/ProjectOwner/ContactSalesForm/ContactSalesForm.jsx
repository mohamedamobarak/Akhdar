import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useTranslation } from 'react-i18next'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Toaster, toast } from 'sonner'

const ContactSalesForm = () => {
  const { t } = useTranslation()

  const schema = z.object({
    firstName: z.string().min(1, t('contactSales.errors.firstName')),
    lastName: z.string().min(1, t('contactSales.errors.lastName')),
    email: z.string().email(t('contactSales.errors.email')),
    region: z.string().min(1, t('contactSales.errors.region')),
    notes: z.string().optional(),
  })

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      region: '',
      notes: '',
    },
  })

  const onSubmit = () => {
    try {
      // Send form data to server
      toast.success(t('contactSales.success'))
      reset()
    } catch (error) {
      console.error(error)
      toast.error(t('contactSales.error'))
      return
    }

  }

  return (
    <>
      <Toaster position="top-center" />
      <div className='bg-[#F6F7F6] px-1 pt-1 pb-8'>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="relative bg-white shadow-md rounded-2xl p-8 max-w-xs sm:max-w-lg lg:max-w-2xl mx-auto mt-16"
        >
          <h2 className="text-xl font-semibold text-center text-green-800 mb-6">
            {t('contactSales.title')}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <Label className="block mb-1 text-sm font-medium text-green-800">{t('contactSales.firstName')}</Label>
              <Input {...register('firstName')} placeholder={t('contactSales.firstNamePlaceholder')} />
              {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName.message}</p>}
            </div>

            <div>
              <Label className="block mb-1 text-sm font-medium text-green-800">{t('contactSales.lastName')}</Label>
              <Input {...register('lastName')} placeholder={t('contactSales.lastNamePlaceholder')} />
              {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName.message}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <Label className="block mb-1 text-sm font-medium text-green-800">{t('contactSales.email')}</Label>
              <Input {...register('email')} placeholder={t('contactSales.emailPlaceholder')} />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
            </div>

            <div>
              <Label className="block mb-1 text-sm font-medium text-green-800">{t('contactSales.region')}</Label>
              <Input {...register('region')} placeholder={t('contactSales.regionPlaceholder')} />
              {errors.region && <p className="text-red-500 text-xs mt-1">{errors.region.message}</p>}
            </div>
          </div>

          <div className="mb-6">
            <Label className="block mb-1 text-sm font-medium text-green-800">{t('contactSales.notes')}</Label>
            <textarea
              {...register('notes')}
              placeholder={t('contactSales.notesPlaceholder')}
              className="w-full min-h-[100px] rounded-md bg-[#F0F5EF] p-3 max-h-[200px]"
            />
          </div>

          <div className="flex justify-center">
            <Button
              type="submit"
              className="absolute cursor-pointer transform translate-y-1/3 bg-green-400 hover:bg-green-500 text-white px-10 py-2 rounded-lg font-medium transition"
            >
              {t('contactSales.submit')}
            </Button>
          </div>
        </form>
      </div>
    </>
  )
}

export default ContactSalesForm
