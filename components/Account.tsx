import router from 'next/router'
import { useState, useEffect } from 'react'
import { supabase } from '../utils/supabaseClient'

type AccountProps = {
  session: any;
}

export default function Account(props: AccountProps) {
  const { session } = props;
  const [userWords, setUserWords] = useState<any>(null)

  useEffect(() => {
    async function fetchMyAPI() {
      if (session) {
        const { data, error } = await supabase
          .from('user_words')
          .select('*')
        if (!error) {
          setUserWords(data)
        }
      }
    }

    fetchMyAPI()
  }, [])

  console.log(userWords)

  if (!session) {
    return (
      <div className={'bg-secondary-black w-10/12 md:w-6/12 xl:w-4/12 mx-auto my-6 px-8 py-12'}>
        <h1 className={'font-bold text-5xl text-center'}> Loading... </h1>
      </div>
    )
  }

  return (
    <div className={'bg-secondary-black w-10/12 mx-auto my-6 px-8 py-12'}>
      <div className={'flex'}>
        <h1 className={'font-bold text-3xl'}> {`Hey there, ${session.user.email}`} </h1>
        <div
          className={'bg-primary-pink ml-3 w-24 mx-2 flex justify-center p-1 text-secondary-pink rounded select-none cursor-pointer hover:text-opacity-70'}
          onClick={() => {
            router.replace('/')
            supabase.auth.signOut()
          }}
        >
          Sign Out
        </div>
      </div>
      {userWords && userWords.length &&
        <h2 className={'font-bold text-2xl mt-3'}> Your completed words: </h2>
      }
      {userWords && userWords.map(userWord => {
        return (
          <div className={'my-2 ml-3'}>
            <h2 className={'text-xl mt-3'}> {userWord.word}</h2>
            <ul className={'list-disc ml-5'}>
              <li> {userWord.response_1} </li>
              <li> {userWord.response_2} </li>
              <li> {userWord.response_3} </li>
            </ul>
          </div>
        )
      })}
    </div>
  )
}