import { GetServerSideProps, GetStaticProps, NextPage } from "next";
import {
  LiveVideoContext,
  LiveVideoContextProvider,
} from "../src/Context/LiveVideoContext";
import React, { useContext, useEffect } from "react";

import BodyContainer from "../src/Components/Index/BodyContainer";
import Colors from "../src/Constants/ColorTemplate";
import { Flex } from "@chakra-ui/react";
import Head from "next/head";
import LiveVideoThumbnailModel from "../src/Models/LiveVideoThumbnailModel";
import NavigationBar from "../src/Components/Index/NavigationBar";

interface Props {
  arrayOfData: [];
}

const Home: NextPage<Props> = (props: Props) => {
  // const liveVideoContext = useContext(LiveVideoContext);

  // useEffect(() => {
  //   liveVideoContext.concat(props.dataList);
  //   console.log("started");
  // }, []);

  return (
    <Flex direction="column">
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavigationBar />
      <LiveVideoContextProvider arrayOfData={props.arrayOfData}>
        <BodyContainer />
      </LiveVideoContextProvider>
    </Flex>
  );
};

export default Home;

// Home.getInitialProps = async (_) => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/photos/");
//   const json = res.json();
//   const parsedJson = await json.then((value) => {
//     return value;
//   });
//   return { arrayOfData: parsedJson };
// };

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/photos/");
  const json = res.json();
  const parsedJson = await json.then((value) => {
    return value;
  });
  return { props: { arrayOfData: parsedJson } };
};
