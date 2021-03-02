import BodyContainer from "../src/Components/Index/BodyContainer";
import Colors from "../src/Constants/ColorTemplate";
import { Flex } from "@chakra-ui/react";
import Head from "next/head";
import NavigationBar from "../src/Components/Index/NavigationBar";
import dynamic from "next/dynamic";

export default function Home() {
  return (
    <Flex direction="column">
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavigationBar />
      <BodyContainer />
    </Flex>
  );
}
