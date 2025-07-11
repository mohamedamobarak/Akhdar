import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Toaster, toast } from 'sonner'

const schema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email'),
  region: z.string().min(1, 'Region is required'),
  notes: z.string().optional(),
})

const ContactSalesForm = () => {
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
    toast.success('Submitted successfully!')
    reset()
  }

  return (
    <>
      <Toaster position="top-center" />
      <div className='bg-[#F6F7F6] px-1 pt-1 pb-8'>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="relative bg-white shadow-md rounded-2xl p-8  max-w-xs sm:max-w-lg lg:max-w-2xl mx-auto mt-16"
      >
        <h2 className="text-xl font-semibold text-center text-green-800 mb-6">
          Contact Sales to become a partner
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <Label className="block mb-1 text-sm font-medium text-green-800">First Name</Label>
            <Input {...register('firstName')} placeholder="First Name" />
            {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName.message}</p>}
          </div>

          <div>
            <Label className="block mb-1 text-sm font-medium text-green-800">Last Name</Label>
            <Input {...register('lastName')} placeholder="Last Name" />
            {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName.message}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <Label className="block mb-1 text-sm font-medium text-green-800">Work Email</Label>
            <Input {...register('email')} placeholder="you@example.com" />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
          </div>

          <div>
            <Label className="block mb-1 text-sm font-medium text-green-800">What region is the project located in?</Label>
            <Input {...register('region')} placeholder="Region" />
            {errors.region && <p className="text-red-500 text-xs mt-1">{errors.region.message}</p>}
          </div>
        </div>

        <div className="mb-6">
          <Label className="block mb-1 text-sm font-medium text-green-800">Additional Notes</Label>
          <textarea
            {...register('notes')}
            placeholder="Add any notes here..."
            className="w-full min-h-[100px] rounded-md bg-[#F0F5EF] p-3 max-h-[200px]"
          />
        </div>

        <div className="flex justify-center">
          <Button
            type="submit"
            className="absolute cursor-pointer transform translate-y-1/3 bg-green-400 hover:bg-green-500 text-white px-10 py-2 rounded-lg font-medium transition"
          >
            Submit
          </Button>
        </div>
      </form>
      </div>
    </>
  )
}

export default ContactSalesForm
