import Link from "next/link";
import Image from "next/image";
import { Box, Flex, Text, Avatar } from "@chakra-ui/react";
import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import millify from "millify";

import { baseURL, fetchAPI } from "@/utils/fetchAPI";
import ImageScrollbar from "@/components/ImageScrollbar";

const PropertyDetail = ({
  propertyDetails: {
    price,
    rentFrequency,
    rooms,
    title,
    baths,
    area,
    agency,
    isVerified,
    description,
    type,
    purpose,
    furnishingStatus,
    amenities,
    photos,
    score,
    product,
    logo,
    coverPhoto,
    category,
  },
}) => {
  return (
    <Box maxWidth={"1000px"} margin={"auto"} p={2}>
      {photos && <ImageScrollbar data={photos} />}
    </Box>
  );
};

export async function getServerSideProps({ params: { pid } }) {
  const data = await fetchAPI(`${baseURL}/properties/detail?externalID=${pid}`);

  return {
    props: {
      propertyDetails: data,
    },
  };
}

export default PropertyDetail;
