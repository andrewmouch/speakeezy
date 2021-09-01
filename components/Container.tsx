import Head from 'next/head';
import { Header } from './Header';
import { Session } from '@supabase/supabase-js';
import { Footer } from './Footer';

type ContainerProps = {
  session: Session | null;
  title?: string,
  description?: string
  children?: React.ReactNode
}

export const Container = (props: ContainerProps) => {
  const { children, title, description } = props;
  const meta = {
    title: title || 'Sound better',
    description: description || `Your home for expanding your vocabulary`,
  };

  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta content={meta.description} name="description" />
      </Head>
      <Header session={props.session} />
      <div className={'flex flex-col justify-between'} style={{ minHeight: '90vh' }}>
        <div className={''}>
          {children}
        </div >
        <Footer />
      </div>
    </ div>
  );
}
