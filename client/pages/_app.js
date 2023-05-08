import React from 'react';
import '../styles/globals.css';
import NoSSR from '../components/NoSSR';
import { Sarabun } from 'next/font/google';
import Head from 'next/head';

const montserrat = Sarabun({
      subsets: ['latin'],
      weight: ['100', '200', '300', '400', '500', '600', '700', '800']
})

export default function App({ Component, pageProps }) {
      return (
            <main className={montserrat.className}>
                  <Head>
                        <title>Clonify</title>
                  </Head>
                  <NoSSR>
                        <Component {...pageProps} />
                  </NoSSR>

            </main>

      );
}