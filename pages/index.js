import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Date from "../components/date";
import styles from "../styles/Home.module.css";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Navegante digital</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Navegante digital</h1>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>Blog</h2>
          <ul className={utilStyles.list}>
            {allPostsData.map(({ id, date, title }) => (
              <li className={utilStyles.listItem} key={id}>
                <Link href={id}>
                  <a>{title}</a>
                </Link>

                <br />
                <Date dateString={date} />
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}
