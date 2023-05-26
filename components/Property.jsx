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
        w={"420px"}
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
          />
        </Box>
      </Flex>
    </Link>
  );
};

export default Property;
