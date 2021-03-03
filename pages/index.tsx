import BodyContainer from "../src/Components/Index/BodyContainer";
import Colors from "../src/Constants/ColorTemplate";
import { Flex } from "@chakra-ui/react";
import Head from "next/head";
import LiveVideoThumbnailModel from "../src/Models/LiveVideoThumbnailModel";
import NavigationBar from "../src/Components/Index/NavigationBar";
import { NextPage } from "next";
import dynamic from "next/dynamic";

interface Props {
  resList: Array<Object>;
}

const Home: NextPage<Props> = (props: Props) => {
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
};

export default Home;

// Home.getInitialProps = async (context) => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/photos/1");
//   const parsedJson = res.json();
//   const stringifiedData = await parsedJson.then((value) => {
//     console.log(value);
//     return value;
//   });
//   return {
//     id: JSON.stringify(stringifiedData.id),
//     albumId: stringifiedData.albumId,
//     thumbnailUrl: stringifiedData.thumbnailUrl,
//     title: JSON.stringify(stringifiedData.title),
//     imgUrl: stringifiedData.url,
//   };
// };
