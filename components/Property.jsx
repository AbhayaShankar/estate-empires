import Link from "next/link";
import Image from "next/image";
import { Box, Flex, Text, Avatar } from "@chakra-ui/react";
import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import millify from "millify";

import defaultImage from "../assets/images/def_home.jpg";

const Property = ({ property }) => {
  const {
    title,
    coverPhoto,
    price,
    rentFrequency,
    rooms,
    baths,
    area,
    agency,
    isVerified,
    externalID,
  } = property;
  return (
    <Link href={`/property/${externalID}`} passHref>
      <Flex
        flexWrap="wrap"
        width={400}
        // height={300}
        p={5}
        paddingTop={0}
        justifyContent={"flex-start"}
      >
        <Box>
          <Image
            src={coverPhoto ? coverPhoto.url : defaultImage}
            width={400}
            height={260}
            alt={title}
            style={{ height: 260, borderRadius: 5 }}
          />
        </Box>
        <Box width={"full"}>
          <Flex
            paddingTop={"2"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Box>
              <Avatar size={"sm"} src={agency?.logo?.url} />
            </Box>
            <Flex alignItems={"center"}>
              <Box paddingRight={3} color={"green.300"}>
                {isVerified && <GoVerified />}
              </Box>
              <Text fontWeight={"semibold"} fontSize={"md"} color={"#747572"}>
                AED {millify(price)} {rentFrequency && `/ ${rentFrequency}`}{" "}
              </Text>
            </Flex>
          </Flex>
          <Flex
            alignItems={"center"}
            p={1}
            justifyContent={"space-between"}
            w={200}
            color={"blue.400"}
          >
            {rooms} <FaBed /> | {baths} <FaBath /> | {millify(area)} sq ft.
          </Flex>
        </Box>
      </Flex>
    </Link>
  );
};

export default Property;
