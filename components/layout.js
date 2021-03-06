import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

export const siteTitle = "Navegante digital";

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Blog" />
        <meta property="og:image" content="/images/main-bg.jpg" />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <div className={utilStyles.heroHeader}></div>
            <h1 className={utilStyles.heading2Xl}>{siteTitle}</h1>
          </>
        ) : (
          <div className={utilStyles.heroHeader}></div>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Volver al inicio</a>
          </Link>
        </div>
      )}
    </div>
  );
}
