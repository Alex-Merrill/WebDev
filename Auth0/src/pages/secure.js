import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useSession } from 'next-auth/client';
import { useState, useEffect } from 'react';

export default function SecurePage() {
  const [session, loading] = useSession();
  const [secret, setSecret] = useState();

  if(loading) {
    return null;
  } else if (!loading && !session) {
    return <h1>Access Denied</h1>;
  }

  useEffect(() => {
    const getSecret = async () => {
      const response = await fetch('api/secret');
      if(response.ok) {
        const data = await response.json();
        setSecret(data.message);
      }
    };
    if(session) {
      getSecret();
    }
  }, [session]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Auth test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Authentication test site</h1>
        <p>{secret}</p>
      </main>
    </div>
  );
}
