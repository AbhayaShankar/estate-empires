import Link from "next/link";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Box,
  Flex,
  Spacer,
  IconButton,
} from "@chakra-ui/react";

import { FcMenu, FcHome, FcAbout } from "react-icons/fc";
import { BsSearch } from "react-icons/bs";
import { FiKey } from "react-icons/fi";

const Navbar = () => {
  return (
    <Flex
      p={2}
      // paddingX={50}
      paddingTop={4}
      borderBottom={1}
      borderColor={"gray.200"}
      style={{ borderBottom: "1px solid #D0CDD7" }}
      paddingX={{ base: 5, md: 50 }}
    >
      <Box
        // fontSize={"3xl"}
        color={"#94A187"}
        // #6d8c53
        fontWeight={"bold"}
        fontFamily={"Montserrat , sans-serif"}
        fontSize={{ base: "20px", md: "31px" }}
        display={"flex"}
        alignItems={"center"}
      >
        <Link href={"/"} paddingLeft={"2"}>
          Estate Empire
        </Link>
      </Box>
      <Spacer />
      <Box style={{ zIndex: 100 }}>
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<FcMenu />}
            variant="outline"

            // color={"#94A187"}
            // backgroundColor="#94A1874d"
          />
          <MenuList>
            <Link href={"/"} passHref>
              <MenuItem icon={<FcHome />}>Home</MenuItem>
            </Link>
            <Link href={"/search"} passHref>
              <MenuItem icon={<BsSearch />}>Search</MenuItem>
            </Link>
            <Link href={"/search?purpose=for-sale"} passHref>
              <MenuItem icon={<FcAbout />}>Buy a Property</MenuItem>
            </Link>
            <Link href={"/search?purpose=for-rent"} passHref>
              <MenuItem icon={<FcHome />}>Rent a Property</MenuItem>
            </Link>
          </MenuList>
        </Menu>
      </Box>
    </Flex>
  );
};

export default Navbar;
