import Auth from "../components/Auth";
import { Container } from "../components/Container";

export default function AuthPage({ session }) {
  return (
    <Container session={session}>
      <Auth />
    </Container>
  )
}
