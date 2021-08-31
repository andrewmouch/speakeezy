import Head from 'next/head';
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import { Header } from './Header';

// import Footer from './Footer';

type ContainerProps = {
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
    <>
      <Head>
        <title>{meta.title}</title>
        <meta content={meta.description} name="description" />
      </Head>
      <Header />
      {children}
    </>


  );
}
