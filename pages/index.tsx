import { Container } from '../components/Container';
import { MainCard } from '../components/MainCard';
import { words } from '../words'
import React, { useEffect, useState } from 'react';

import Auth from '../components/Auth';
import Account from '../components/Account';
import { Session } from '@supabase/supabase-js';

type HomeProps = {
  session: Session
  wordData?: Array<object>
}

export default function Home(props: HomeProps) {
  const { wordData, session } = props;

  return (
    <Container session={session}>
      <MainCard
        session={session}
        wordData={wordData}
      />
    </Container>
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
