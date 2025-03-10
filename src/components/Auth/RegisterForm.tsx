import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { signUp } from '@/lib/firebase/auth'

type RegisterFormInputs = {
  email: string
  password: string
  confirmPassword: string
}

const RegisterForm = () => {
  const router = useRouter()
  const {
    register, handleSubmit, formState: { errors }, setError, 
  } = useForm<RegisterFormInputs>()

  const handleRegister = async (data: RegisterFormInputs) => {
    if (data.password !== data.confirmPassword) {
      setError('confirmPassword', { type: 'manual', message: 'Passwords do not match' })
      return
    }

    try {
      await signUp({ email: data.email, password: data.password })
      router.push('/')
    }
    catch (err) {
      console.error(err)
      setError('email', { type: 'manual', message: 'Error creating account' })
    }
  }

  return (
    <div className="mx-auto max-w-md space-y-4 rounded-xl bg-white p-6 shadow-md">
      <h2 className="text-xl font-semibold">Register</h2>
      
      {errors.email && <p className="text-red-500">{errors.email.message}</p>}

      <form onSubmit={handleSubmit(handleRegister)} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full rounded border p-2"
          {...register('email', { required: 'Email is required' })}
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}

        <input
          type="password"
          placeholder="Password"
          className="w-full rounded border p-2"
          {...register('password', {
            required: 'Password is required',
            minLength: { value: 6, message: 'Password must be at least 6 characters' },
          })}
        />
        {errors.password && <p className="text-red-500">{errors.password.message}</p>}

        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full rounded border p-2"
          {...register('confirmPassword', { required: 'Please confirm your password' })}
        />
        {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword.message}</p>}

        <button type="submit" className="w-full rounded bg-green-500 p-2 text-white">
          Register
        </button>
      </form>
    </div>
  )
}

export default RegisterForm
