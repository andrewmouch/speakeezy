import { useState } from 'react'
import { useRouter } from 'next/router';

type MainCardProps = {
  wordData: Array<object>
}

// type AudioStatus = "PLAYING" | "PAUSED" | "STOPPED"

export const MainCard = (props: MainCardProps) => {
  // const [playing, setPlaying] = useState<AudioStatus>("STOPPED")
  const { wordData } = props

  const [firstText, setFirstText] = useState<string>("")
  const [secondText, setSecondText] = useState<string>("")
  const [thirdText, setThirdText] = useState<string>("")

  const [firstComplete, setFirstComplete] = useState<boolean>(false)
  const [secondComplete, setSecondComplete] = useState<boolean>(false)
  const [thirdComplete, setThirdComplete] = useState<boolean>(false)


  const router = useRouter();
  const refreshData = () => {
    router.replace(router.asPath);
    setFirstText("")
    setSecondText("")
    setThirdText("")
    setFirstComplete(false)
    setSecondComplete(false)
    setThirdComplete(false)
  }

  if (!wordData.length) { refreshData() }

  return (
    <div className={'bg-secondary-black w-10/12 mx-auto my-3 p-8'}>
      {wordData.length && wordData.map(word => {
        return (
          <>
            {/* @ts-ignore */}
            <h1 className={'font-bold text-5xl'}>{word.word}</h1>
            <div>
              {/* add the sound later */}
              {/* <button onClick={() => { setPlaying("PLAYING") }}>Yo</button> */}
              {/* <Sound
                  url="https://assets.coderrocketfuel.com/pomodoro-times-up.mp3"
                  playStatus={playing}
                /> */}
              {/* @ts-ignore */}
              <p className={'mb-3 text-xl'}>{word.phonetic}</p>
            </div>
            {/* @ts-ignore */}
            {word.meanings.map(meaning => {
              return (
                meaning.definitions.map(definition => {
                  return (
                    <div className={'my-6'}>
                      <p>{meaning.partOfSpeech}:</p>
                      <p className={'font-medium text-2xl'}>{definition.definition}</p>
                      {definition.example &&
                        <li className={'list-disc italic mb-2'}>{definition.example}</li>
                      }
                    </ div>
                  )
                })
              )
            })}
          </>
        )
      })}
      <hr />
      <div>
        <h2 className={'font-bold mt-4 text-3xl'}>Now go and use the word three times today!</h2>
        <div className={'flex'}>
          <input
            className='rounded w-10/12 h-8 px-2 my-2 text-primary-black'
            disabled={firstComplete}
            value={firstText}
            onChange={(e) => { setFirstText(e.target.value) }}
          />
          <div
            className={'ml-2 self-center bg-primary-pink w-24 h-8 flex justify-center p-1 text-secondary-pink rounded hover:text-opacity-70 select-none'}
            onClick={() => { setFirstComplete(!firstComplete) }}
          >
            {firstComplete ? "Edit" : "Done"}
          </div>
        </div>
        <div className={'flex'}>
          <input
            className='rounded w-10/12 h-8 px-2 my-2 text-primary-black'
            disabled={secondComplete}
            value={secondText}
            onChange={(e) => { setSecondText(e.target.value) }}
          />
          <div
            className={'ml-2 self-center bg-primary-pink w-24 h-8 flex justify-center p-1 text-secondary-pink rounded hover:text-opacity-70 select-none'}
            onClick={() => { setSecondComplete(!secondComplete) }}
          >
            {secondComplete ? "Edit" : "Done"}
          </div>
        </div>
        <div className={'flex'}>
          <input
            className='rounded w-10/12 h-8 px-2 my-2 text-primary-black'
            disabled={thirdComplete}
            onChange={(e) => { setThirdText(e.target.value) }}
            value={thirdText}
          />
          <div
            className={'ml-2 self-center bg-primary-pink w-24 h-8 flex justify-center p-1 text-secondary-pink rounded hover:text-opacity-70 select-none'}
            onClick={() => { setThirdComplete(!thirdComplete) }}
          >
            {thirdComplete ? "Edit" : "Done"}
          </div>
        </div>
      </div>
      <div className={'bg-primary-pink mt-8 w-24 flex justify-center p-1 text-secondary-pink rounded select-none hover:text-opacity-70'} onClick={() => { refreshData() }}>
        New word
      </div>
    </div>
  )
}
