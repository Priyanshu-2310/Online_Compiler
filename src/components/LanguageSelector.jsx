import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { LANGUAGE_VERSIONS } from "../Constants.js";
import { span } from "framer-motion/client";

const languages = Object.entries(LANGUAGE_VERSIONS);

const LanguageSelector = ({ language, onSelect }) => {
    const ACTIVE_COLOR = 'red.700'
  return (
    <Box ml={2} mb={4}>
      {/* Text component is now just for the title or text, not wrapping the Menu */}
      <Text mb={3} fontSize={"lg"}>
        Select Language:
      </Text>

      <Menu isLazy>
        <MenuButton as={Button}>{language}</MenuButton>
        <MenuList bg={"grey.900"}>
          {languages.map(([lang, version]) => {
            return (
              <MenuItem
                key={lang}
                onClick={() => onSelect(lang)}
               bg={'white'}
              >
                {lang}
                <Text
                  position={"absolute"}
                  right={5}
                  as={span}
                  color={"gray.600"}
                  fontSize={"sm"}
                >
                  {version}
                </Text>
              </MenuItem>
            );
          })}
        </MenuList>
      </Menu>
    </Box>
  );
};

export default LanguageSelector;
