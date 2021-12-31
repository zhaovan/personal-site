import Head from "next/head";

export default function Header({ title }) {
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/icon.ico" />
    </Head>
  );
}
