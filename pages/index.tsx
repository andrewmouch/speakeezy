import { Container } from '../components/Container';
import { MainCard } from '../components/MainCard';
import { words } from '../words'
type HomeProps = {
  wordData?: Array<object>
}

export default function Home(props: HomeProps) {
  const { wordData } = props;
  return (
    <div>
      <Container>
        <MainCard
          wordData={wordData}
        />
      </Container>
    </div >
  )
}

export const getServerSideProps = async () => {
  const randomWord = words[Math.floor(Math.random() * words.length)];

  const res = await fetch(`${process.env.DICTIONARY_BASE_URL}/${randomWord}`);
  const data = await res.json()

  return {
    props: {
      wordData: data
    }
  }
}
