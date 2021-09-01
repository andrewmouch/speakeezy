import router from 'next/router';
import { useState } from 'react'
import { supabase } from '../utils/supabaseClient'

export default function Auth() {
  const [signingUp, setSigningUp] = useState(false);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (email) => {
    try {
      setLoading(true)
      if (signingUp) {
        const { user, error } = await supabase.auth.signUp({ email, password })
        if (error) throw error
        const { error: error_2 } = await supabase.from('profiles').insert([{
          id: user.id,
          email
        }])
        if (error_2) throw error_2
      } else {
        const { error } = await supabase.auth.signIn({ email, password })
        if (error) throw error
      }
      router.replace("/")
    } catch (error) {
      alert(error.error_description || error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className={'bg-secondary-black w-10/12 md:w-6/12 xl:w-4/12 mx-auto my-6 px-8 py-12'}>
      <h1 className={'font-bold text-5xl text-center'}> {signingUp ? 'Sign Up' : 'Log In'} </h1>
      <div className={'flex justify-center w-7/12 mx-auto mt-4'}>
        <div className={'w-full'}>
          <div>
            <input
              className={'text-primary-black rounded h-8 px-2 my-2 w-full'}
              type={"email"}
              placeholder={"Your email"}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <input
              className={'text-primary-black rounded h-8 px-2 my-2 w-full'}
              type="password"
              placeholder="Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <button
              className={'mt-1 flex justify-center p-1 text-secondary-pink rounded select-none hover:underline mx-auto'}
              onClick={() => {
                setSigningUp(!signingUp)
              }}
            >
              {signingUp ? 'Already have an account? Log in' : 'New to speakeezy? Sign Up'}
            </button>
          </div>
          <div>
            <button
              className={'bg-primary-pink mt-2 w-6/12 flex justify-center p-1 text-secondary-pink rounded select-none hover:text-opacity-70 mx-auto'}
              onClick={(e) => {
                e.preventDefault()
                handleLogin(email)
              }}
            >
              {signingUp ? 'Sign Up' : 'Log In'}
            </button>
          </div>
        </div>
      </div>
    </div >
  )
}