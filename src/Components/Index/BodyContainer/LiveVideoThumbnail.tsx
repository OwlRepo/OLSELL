import { Flex, Text } from "@chakra-ui/react";
import React, { useContext } from "react";

import { LiveVideoContext } from "../../../Context/LiveVideoContext";
import { NextPage } from "next";

// interface Props {
//   albumId?: String;
//   id?: String;
//   title?: String;
//   url?: String;
//   thumbnailUrl?: String;
// }

const LiveVideoThumbnail = () => {
  const liveVideoContext = useContext(LiveVideoContext);
  return (
    <Flex
      direction="column"
      bg="white"
      boxShadow="md"
      h="80"
      w="xl"
      borderRadius="md"
      justify="center"
      align="center"
    >
      <Text>{}</Text>
    </Flex>
  );
};

export default LiveVideoThumbnail;

// LiveVideoThumbnail.getInitialProps = async (context) => {
//   const res = await fetch("http://localhost:3000/api/hello");
//   const parsedJson = res.json();
//   const stringifiedData = await parsedJson.then((value) => {
//     console.log(value.name);
//     return value.name;
//   });
//   console.log(res.status);
//   return {
//     id: JSON.stringify(stringifiedData.id),
//     albumId: stringifiedData.albumId,
//     thumbnailUrl: stringifiedData.thumbnailUrl,
//     title: JSON.stringify(stringifiedData.title),
//     url: stringifiedData.url,
//   };
// };
