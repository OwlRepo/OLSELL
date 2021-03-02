import Head from "next/head";
import dynamic from "next/dynamic";

const NavigationBar = dynamic(
  () => import("../src/Components/Index/NavigationBar"),
  { ssr: false }
);

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavigationBar />
    </>
  );
}
