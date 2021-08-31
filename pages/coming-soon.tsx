import { Container } from '../components/Container';

type HomeProps = {
  wordData?: Array<object>
}

export default function ComingSoon(props: HomeProps) {
  const { wordData } = props;
  return (
    <div>
      <Container>
        <div className={'bg-secondary-black w-10/12 mx-auto my-3 p-8'}>
          <h1 className={'font-bold text-5xl'}>Coming Soon</h1>
          <p className={'mt-3 text-lg'}>
            Currently developing an API for this application (using next.js, prisma, and graphql).
            Rolling out with this API will be authentication features to keep track of your results, word difficulties
            (subsets of easy, medium, advanced subsets to better accommodate those who are learning English), searching functionality,
            and some fun games and challenges to hone your language skills.
          </p>
          <p className={'mt-3 text-xl font-bold'}>
            Stay tuned!!
          </p>
        </div>
      </Container>
    </div >
  )
}