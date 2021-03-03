import {
  AutoSizer,
  CellMeasurer,
  CellMeasurerCache,
  List,
} from "react-virtualized";
import { Divider, Flex, HStack, Heading, Text } from "@chakra-ui/react";
import React, { useContext, useRef } from "react";

import AdsBanners from "./BodyContainer/AdsBanners";
import Categories from "./BodyContainer/Categories";
import Colors from "../../../src/Constants/ColorTemplate";
import { LiveVideoContext } from "../../Context/LiveVideoContext";
import LiveVideoThumbnail from "./BodyContainer/LiveVideoThumbnail";
import MostViews from "./BodyContainer/MostViews";

const BodyContainer = () => {
  const liveFeedContext = useContext(LiveVideoContext);

  const liveFeedListCache = useRef(
    new CellMeasurerCache({
      fixedWidth: true,
      defaultHeight: 100,
    })
  );

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
        <Text>LIVE FEED</Text>
      </Heading>

      <Flex
        direction="column"
        h="2xl"
        style={{ width: "100%", overflow: "hidden" }}
      >
        <AutoSizer>
          {({ height, width }) => {
            return (
              <List
                style={{
                  overflowY: "scroll",
                  paddingRight: 20,
                  boxSizing: "content-box",
                }}
                width={width}
                height={height}
                rowHeight={liveFeedListCache.current.rowHeight}
                deferredMeasurementCache={liveFeedListCache.current}
                rowCount={liveFeedContext.length}
                rowRenderer={({ key, index, style, parent }) => {
                  return (
                    <CellMeasurer
                      key={key}
                      cache={liveFeedListCache.current}
                      parent={parent}
                      columnIndex={0}
                      rowIndex={index}
                    >
                      <Flex direction="row" justify="center" style={style}>
                        <HStack spacing={5}>
                          <LiveVideoThumbnail
                            index={index}
                            imgUrl={liveFeedContext[index].url}
                          />
                        </HStack>
                      </Flex>
                    </CellMeasurer>
                  );
                }}
              />
            );
          }}
        </AutoSizer>
      </Flex>
    </Flex>
  );
};

export default BodyContainer;
