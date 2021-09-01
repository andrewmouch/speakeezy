import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";
import Account from "../components/Account";
import { Container } from "../components/Container";
import { supabase } from "../utils/supabaseClient";

export default function ProfilePage({ session, user_words }) {

  return (
    <Container session={session}>
      <Account session={session} />
    </Container>
  )
}