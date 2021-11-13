import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Layout from "../components/layout";
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
    <Layout home>
      <Head>
        <title>Navegante digital</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`blog/${id}`}>
                <a className="post-title">{title}</a>
              </Link>
              <Date dateString={date} />
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
