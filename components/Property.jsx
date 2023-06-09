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
    title_l2,
  } = property;
  return (
    <Link href={`/property/${externalID}`} passHref>
      <Flex
        flexWrap="wrap"
        width={400}
        p={5}
        paddingTop={0}
        justifyContent={"flex-start"}
        fontFamily={"Poppins , sans-serif"}
      >
        <Box>
          <Image
            src={coverPhoto ? coverPhoto.url : defaultImage}
            width={400}
            height={260}
            alt="Image"
            style={{ height: 260, borderRadius: 5 }}
          />
        </Box>
        <Box width={"full"}>
          <Flex
            paddingTop={"2"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Image
              size={"sm"}
              width={100}
              height={100}
              src={agency?.logo?.url}
              alt={agency?.logo}
              style={{
                borderRadius: "50%",
                objectFit: "contain",
                height: 40,
                width: 40,
              }}
            />
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
            w={220}
            color={"blue.400"}
          >
            {rooms} <FaBed /> | {baths} <FaBath /> | {millify(area)} sq ft.{" "}
            <BsGridFill />
          </Flex>
          <Text fontSize={"lg"}>
            {title?.length > 30 ? `${title?.substring(0, 30)}...` : title}
          </Text>
          <Text color={"#747572"} fontSize={"xs"}>
            {title_l2?.length > 60
              ? `${title_l2?.substring(0, 50)}...`
              : title_l2}
          </Text>
        </Box>
      </Flex>
    </Link>
  );
};

export default Property;
