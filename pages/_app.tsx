import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { supabase } from '../utils/supabaseClient'
import { useEffect, useState } from 'react'
import { Session } from '@supabase/supabase-js'
import { Maybe } from 'graphql/jsutils/Maybe'

function MyApp({ Component, pageProps }: AppProps) {
  const [session, setSession] = useState<Session | null>(null)

  useEffect(() => {
    setSession(supabase.auth.session())

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  return <Component session={session} {...pageProps} />
}
export default MyApp
