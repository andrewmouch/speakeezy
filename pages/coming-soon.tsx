import { Session } from '@supabase/supabase-js';
import { Container } from '../components/Container';

type HomeProps = {
  wordData?: Array<object>
  session: Session
}

export default function ComingSoon(props: HomeProps) {
  const { wordData, session } = props;
  return (
    <div>
      <Container session={session}>
        <div className={'bg-secondary-black w-10/12 mx-auto my-3 p-8'}>
          <h1 className={'font-bold text-5xl'}>Coming Soon</h1>
          <p className={'mt-3 text-lg'}>
            Currently working on a bunch of new features for this application, including new games and challenges to hone your language skills,
            more word difficulties (subsets of easy, medium, advanced subsets to better accommodate those who are learning English),
            and overall better application feel/design as well as better data persistance.
          </p>
          <p className={'mt-3'}>
            Feel free to <a href="mailto:andrewmouchantaf@gmail.com" className={'underline'}>email</a> me any suggestions
          </p>
          <p className={'mt-3 text-xl font-bold'}>
            Stay tuned!!
          </p>
        </div>
      </Container>
    </div >
  )
}