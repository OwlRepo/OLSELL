import { Flex } from "@chakra-ui/react";
import React from "react";

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
