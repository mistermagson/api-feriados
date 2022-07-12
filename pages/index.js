import Head from 'next/head';
import Image from 'next/image';

import { Header } from '../components/Header';

import styles from '../styles/home.module.scss';

export default function Index() {
  return (
    <>
      <Head>
        <title>JFMS API</title>

       <link rel="canonical" href="http://localhost:3000" />
        <meta
          name="keywords"
          content="trf3, jfms, jfsp, feriados"
        />
        <meta
          name="description"
          content="API para consultar os feriados do TRF3"
        />

        <meta
          property="og:description"
          content="API gratuita para consultar as mais diversas informações, desde CEP até tabela FIPE!"
        />
        <meta property="og:type" content="website" />

      </Head>
      <Header />

      <main className={styles.mainContainer}>
        <section className={styles.sectionHeader}>
          <div className={styles.content}>
            <h2>Transformando o TRF3 em uma API</h2>
            <p>
              Este projeto experimental tem como objetivo centralizar e
              disponibilizar endpoints modernos com baixíssima latência
              independente de sua fonte.
            </p>
            <a
              href="/docs"
              className={styles.buttonStartNow}
            >
              Começar agora
            </a>
          </div>
          <Image
            src="/images/logo-sjms-lateral.jpg"
            className={styles.schemaDesk}
            alt="SJMS"
            width="286"
            height="93"
          />
        </section>
        <section className={styles.motivation}>
          <h2>Motivo</h2>
          <p>
            Acesso programático de informações é algo fundamental na comunicação
            entre sistemas. Uma API fornece um acesso a dados padronizados
            que podem ser intercambiaveis entre os diversos sistemas da Terceira Região.
          </p>

        </section>
      </main>
    </>
  );
}
