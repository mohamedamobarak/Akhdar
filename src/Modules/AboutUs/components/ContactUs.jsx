// import React from 'react'
// import { useForm } from 'react-hook-form'
// import { zodResolver } from '@hookform/resolvers/zod'
// import { z } from 'zod'
// import { Input } from "../../../components/ui/input" 
// import { Textarea } from "../../../components/ui/textarea"
// import { Button } from "../../../components/ui/button"
// import { RadioGroup, RadioGroupItem } from "../../../components/ui/radio-group"

// const schema = z.object({
//   firstName: z.string().min(1, 'First name is required'),
//   lastName: z.string().min(1, 'Last name is required'),
//   email: z.string().email('Invalid email'),
//   company: z.string().optional(),
//   interest: z.string().min(1, 'Please select an interest'),
//   message: z.string().optional(),
// })

// const interests = [
//   'Buying Carbon Offsets now',
//   'ESG consultation',
//   'Sell Carbon Offsets',
//   'Measure your businesses Carbon Footprint',
//   'Other',
// ]

// const ContactUs = () => {
//   const { register, handleSubmit, formState: { errors }, reset, setValue, watch } = useForm({
//     resolver: zodResolver(schema),
//     defaultValues: {
//       firstName: '',
//       lastName: '',
//       email: '',
//       company: '',
//       interest: '',
//       message: '',
//     }
//   })

//   const onSubmit = () => {
//     // handle form submission
//     alert('Form submitted!')
//     reset()
//   }

//   return (
//     <section className="flex justify-center items-center min-h-screen bg-[#F6FCF7] py-8">
//       <form onSubmit={handleSubmit(onSubmit)} className="p-8 space-y-6 w-full max-w-3xl bg-white rounded-2xl shadow-lg">
//         <h2 className="mb-4 text-3xl font-bold text-center text-primary">Contact Us</h2>
//         <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
//           <div>
//             <label className="block mb-1 font-medium text-primary">First Name:</label>
//             <Input placeholder="John" {...register('firstName')} />
//             {errors.firstName && <span className="text-xs text-red-500">{errors.firstName.message}</span>}
//           </div>
//           <div>
//             <label className="block mb-1 font-medium text-primary">Last Name:</label>
//             <Input placeholder="Blake" {...register('lastName')} />
//             {errors.lastName && <span className="text-xs text-red-500">{errors.lastName.message}</span>}
//           </div>
//           <div>
//             <label className="block mb-1 font-medium text-primary">E-Mail</label>
//             <Input placeholder="Johnblake@gmail.com" {...register('email')} />
//             {errors.email && <span className="text-xs text-red-500">{errors.email.message}</span>}
//           </div>
//           <div>
//             <label className="block mb-1 font-medium text-primary">Company</label>
//             <Input placeholder="X Company" {...register('company')} />
//           </div>
//         </div>
//         <div>
//           <label className="block mb-2 font-medium text-primary">I am Interested in:</label>
//           <RadioGroup
//             className="flex flex-wrap gap-4"
//             value={watch('interest')}
//             onValueChange={val => setValue('interest', val)}
//           >
//             {interests.map((interest) => (
//               <div key={interest} className="flex items-center space-x-2">
//                 <RadioGroupItem value={interest} id={interest} />
//                 <label htmlFor={interest} className="text-sm cursor-pointer text-primary">{interest}</label>
//               </div>
//             ))}
//           </RadioGroup>
//           {errors.interest && <span className="text-xs text-red-500">{errors.interest.message}</span>}
//         </div>
//         <div>
//           <Textarea placeholder="Write here" {...register('message')} className="min-h-[80px]" />
//         </div>
//         <div className="flex justify-center">
//           <Button type="submit" className="px-12 py-2 text-lg text-white rounded-xl bg-primary">Submit</Button>
//         </div>
//       </form>
//     </section>
//   )
// }

// export default ContactUs
