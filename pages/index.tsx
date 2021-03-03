import BodyContainer from "../src/Components/Index/BodyContainer";
import Colors from "../src/Constants/ColorTemplate";
import { Flex } from "@chakra-ui/react";
import Head from "next/head";
import { LiveVideoContext } from "../src/Context/LiveVideoContext";
import LiveVideoThumbnailModel from "../src/Models/LiveVideoThumbnailModel";
import NavigationBar from "../src/Components/Index/NavigationBar";
import { NextPage } from "next";

interface Props {
  dataList: [];
}

const Home: NextPage<Props> = (props: Props) => {
  return (
    <Flex direction="column">
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavigationBar />
      <LiveVideoContext.Provider value={props.dataList}>
        <BodyContainer />
      </LiveVideoContext.Provider>
    </Flex>
  );
};

export default Home;

Home.getInitialProps = async (_) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/photos/");
  const json = res.json();
  const stringifiedData = await json.then((value) => {
    return value;
  });
  return { dataList: stringifiedData };
};
