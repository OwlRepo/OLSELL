import { AutoSizer, List } from "react-virtualized";
import { Flex, Text, VStack } from "@chakra-ui/react";
import React, { useContext } from "react";

import { LiveVideoContext } from "../../../Context/LiveVideoContext";

interface Props {
  index: number;
  imgUrl: string;
}

const LiveVideoThumbnail = (props: Props) => {
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
      mt="10"
      mb="10"
      // style={style}
    >
      <img
        src={props.imgUrl}
        alt="Thumbnail Loading..."
        height={200}
        width={200}
      />
    </Flex>
  );
};

export default LiveVideoThumbnail;
// {liveVideoContext.map((value) => {
//   return (
// <Flex
//   key={value.id}
//   direction="column"
//   bg="white"
//   boxShadow="md"
//   h="80"
//   w="xl"
//   borderRadius="md"
//   justify="center"
//   align="center"
// >
//   <img src={value.url} alt="thumbnail" height={200} width={200} />
// </Flex>
//   );
// })}
