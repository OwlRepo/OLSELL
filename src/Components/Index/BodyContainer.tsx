import { Divider, Flex, HStack, Heading, Text } from "@chakra-ui/react";

import AdsBanners from "./BodyContainer/AdsBanners";
import Categories from "./BodyContainer/Categories";
import Colors from "../../../src/Constants/ColorTemplate";
import LiveVideoThumbnail from "./BodyContainer/LiveVideoThumbnail";
import MostViews from "./BodyContainer/MostViews";
import React from "react";

const BodyContainer = () => {
  return (
    <Flex
      direction="column"
      bg={Colors.defaultAppBGColor}
      align="center"
      pt="10"
      pb="10"
    >
      <Flex direction="row" justify="center" mt="28">
        <HStack spacing={5}>
          <Categories />
          <AdsBanners />
          <MostViews />
        </HStack>
      </Flex>
      <Heading mt="5" mb="5">
        <Text>LIVE NOW</Text>
      </Heading>
      <Flex direction="row" justify="center">
        <HStack spacing={5}>
          <LiveVideoThumbnail />
        </HStack>
      </Flex>
    </Flex>
  );
};

export default BodyContainer;
