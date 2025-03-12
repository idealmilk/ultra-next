import React from 'react'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import type { TCreateFormData } from '@/interfaces/form'

const CreateForm = () => {
  const router = useRouter()
  const {
    register,
    handleSubmit,
  } = useForm<TCreateFormData>()

  const onSubmit = (data: TCreateFormData) => {
    console.log(data)
    router.push('/race-plan/2?create=true')
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label>Date of Birth:</label>
        <input {...register('dob')} className="w-full border p-2" />
      </div>
      
      <div>
        <label>Health Concerns:</label>
        <input {...register('healthConcerns')} className="w-full border p-2" />
      </div>
      
      <div>
        <label>Dietary Requirements:</label>
        <input {...register('dietaryRequirements')} className="w-full border p-2" />
      </div>
      
      <div>
        <label>Place of Residence:</label>
        <input {...register('placeOfResidence')} className="w-full border p-2" />
      </div>
      
      <div>
        <label>Gym Access:</label>
        <input {...register('gymAccess')} className="w-full border p-2" />
      </div>
      
      <button type="submit" className="rounded bg-black p-2 text-white">
        Submit
      </button>
    </form>
  )
}

export default CreateForm
