import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { signInWithEmail, signInWithGoogle } from '@/lib/firebase/auth'

type LoginFormInputs = {
  email: string
  password: string
}

const LoginForm = () => {
  const router = useRouter()
  const {
    register, handleSubmit, formState: { errors }, setError, 
  } = useForm<LoginFormInputs>()

  const handleLogin = async (data: LoginFormInputs) => {
    try {
      await signInWithEmail(data)
      router.push('/')
    }
    catch (error) {
      console.error(error)
      setError('email', { type: 'manual', message: 'Invalid email or password' })
    }
  }

  const handleLoginWithGoogle = async () => {
    try {
      await signInWithGoogle()
      router.push('/')
    }
    catch (error) {
      console.error(error)
      setError('email', { type: 'manual', message: 'Google sign-in failed' })
    }
  }

  return (
    <div className="mx-auto max-w-md space-y-4 rounded-xl bg-white p-6 shadow-md">
      <h2 className="text-xl font-semibold">Login</h2>
      
      {errors.email && <p className="text-red-500">{errors.email.message}</p>}

      <form onSubmit={handleSubmit(handleLogin)} className="space-y-4">
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
          {...register('password', { required: 'Password is required', minLength: { value: 6, message: 'Password must be at least 6 characters' }})}
        />
        {errors.password && <p className="text-red-500">{errors.password.message}</p>}

        <button type="submit" className="w-full rounded bg-blue-500 p-2 text-white">
          Login
        </button>
      </form>

      <button
        onClick={handleLoginWithGoogle}
        className="w-full rounded bg-red-500 p-2 text-white"
      >
        Sign in with Google
      </button>
    </div>
  )
}

export default LoginForm
