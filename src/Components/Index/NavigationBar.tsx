import {
  Button,
  Flex,
  HStack,
  IconButton,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { FaHome, FaSearch } from "react-icons/fa";

import { AiFillSetting } from "react-icons/ai";
import Colors from "../../Constants/ColorTemplate";
import Image from "next/image";
import React from "react";

const NavButtons = [
  { ariaLabel: "Home", icon: <FaHome />, borderRadius: "full" },
  { ariaLabel: "Search", icon: <FaSearch />, borderRadius: "full" },
  { ariaLabel: "Settings", icon: <AiFillSetting />, borderRadius: "full" },
];

const NavigationBar = () => {
  return (
    <Flex {...styleProps.navigationContainer} position="fixed">
      <Image {...styleProps.appLogo} />

      <HStack {...styleProps.navButtonsContainer}>
        {NavButtons.map((btn, index) => {
          return (
            <Tooltip
              aria-label={btn.ariaLabel}
              label={btn.ariaLabel}
              key={index}
            >
              <IconButton
                aria-label={btn.ariaLabel}
                icon={btn.icon}
                borderRadius={btn.borderRadius}
              />
            </Tooltip>
          );
        })}
      </HStack>

      <HStack {...styleProps.navButtonsContainer}>
        <Button variant="ghost">
          <Text color={Colors.defaultBlack}>LOGIN</Text>
        </Button>
        <Button bg={Colors.defaultRed} colorScheme="red">
          <Text color="white">SIGN UP</Text>
        </Button>
      </HStack>
    </Flex>
  );
};

const styleProps = {
  navigationContainer: {
    bg: "white",
    align: "center",
    justify: "space-between",
    boxShadow: "sm",
    p: "5",
    right: "0%",
    left: "0%",
  },
  appLogo: {
    src: "/olsell_logo.png",
    alt: "src",
    width: "200",
    height: "50",
  },
  navButtonsContainer: {
    spacing: 10,
  },
};

export default NavigationBar;
