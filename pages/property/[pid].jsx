import Link from "next/link";
import Image from "next/image";
import { Box, Flex, Text, Avatar } from "@chakra-ui/react";
import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import millify from "millify";

import { baseURL, fetchAPI } from "@/utils/fetchAPI";
import ImageScrollbar from "@/components/ImageScrollbar";

import starfull from "../../assets/SVGs/star-full.svg";
import starhalf from "../../assets/SVGs/star-half.svg";

export const StarFull = () => (
  <Image
    className="star-full"
    src={starfull}
    alt="star-full"
    width={26}
    height={26}
  />
);

export const StarHalf = () => (
  <Image
    className="star-half"
    src={starhalf}
    alt="star-half"
    width={30}
    height={30}
  />
);

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
    category,
  },
}) => {
  const starScore = score / 20;

  const IntegerStarScore = Math.floor(starScore);
  const DecimalStarScore = starScore - IntegerStarScore;

  console.log(IntegerStarScore, DecimalStarScore);

  const stars = [];
  for (let i = 0; i < IntegerStarScore; i++) {
    stars.push(<StarFull key={i} />);
  }

  if (DecimalStarScore > 0) {
    stars.push(<StarHalf key={IntegerStarScore} />);
  }

  return (
    <Box
      maxWidth={"1000px"}
      margin={"auto"}
      p={2}
      fontFamily={"Poppins , sans-serif"}
      //   maxWidth={{ base: "fit-content", md: "1000px" }}
    >
      {photos && <ImageScrollbar data={photos} />}
      <Flex
        zIndex={100}
        position={"relative"}
        left={3}
        top={-14}
        mt={2}
        mb={1}
        // padding={2}
        px={2}
        py={1}
        backgroundColor={"#fcfcfc30"}
        width={"fit-content"}
        borderRadius={5}
        alignItems={"center"}
        backdropFilter="blur(8px)"
        _hover={{ backdropFilter: "blur(4px)" }}
        gap={"6px"}
      >
        {stars}
      </Flex>
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
          //   alignItems={"center"}
          mt={3}
          display={{ base: "flex", md: "flex" }}
          flexDirection={{ base: "column", md: "row" }}
          gap={{ base: "4", md: "12" }}
          alignItems={{ base: "flex-start", md: "center" }}
        >
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
          <Flex alignItems={"center"}>
            {category.length && (
              <Flex gap={5}>
                {category.map((cat) => (
                  <Text
                    key={cat.id}
                    fontSize={15}
                    bgColor={"#fcfcfc30"}
                    color={"#000"}
                    px={2}
                    py={1}
                    borderRadius={6}
                    letterSpacing={0.35}
                    boxShadow={"inset #d8d8da 0 0 0 1px"}
                    backdropFilter="blur(8px)"
                    _hover={{ backdropFilter: "blur(4px)" }}
                  >
                    {cat.name}
                  </Text>
                ))}
              </Flex>
            )}
          </Flex>
        </Flex>
        <Box marginTop={"3"}>
          <Text
            fontSize={"lg"}
            fontWeight={"semibold"}
            letterSpacing={"0.3px"}
            marginBottom={"2"}
            textTransform={"uppercase"}
          >
            {title}
          </Text>
          <Text lineHeight={"2"} color={"#747572"}>
            {description}
          </Text>
        </Box>

        <Flex
          flexWrap="wrap"
          textTransform="uppercase"
          justifyContent="space-between"
        >
          <Flex
            justifyContent="space-between"
            w="400px"
            borderBottom="1px"
            borderColor="gray.100"
            p="3"
          >
            <Text>Type</Text>
            <Text fontWeight="bold">{type}</Text>
          </Flex>
          <Flex
            justifyContent="space-between"
            w="400px"
            borderBottom="1px"
            borderColor="gray.100"
            p="3"
          >
            <Text>Purpose</Text>
            <Text fontWeight="bold">{purpose}</Text>
          </Flex>
          {furnishingStatus && (
            <Flex
              justifyContent="space-between"
              w="400px"
              borderBottom="1px"
              borderColor="gray.100"
              p="3"
            >
              <Text>Furnishing Status</Text>
              <Text fontWeight="bold">{furnishingStatus}</Text>
            </Flex>
          )}
        </Flex>
        <Box>
          {
            <Text
              fontSize="2xl"
              fontWeight="black"
              marginBottom={2}
              marginTop="5"
            >
              Facilites:
            </Text>
          }

          <Flex flexWrap="wrap" marginBottom={2}>
            {amenities.length === 0 && (
              <Text
                key={1}
                fontWeight="bold"
                color="#6F8F4E"
                fontSize="l"
                p="2"
                bg="#C9E7BD"
                m="1"
                mx={"6px"}
                borderRadius="5"
              >
                None
              </Text>
            )}
          </Flex>

          <Flex flexWrap="wrap" marginBottom={2}>
            {amenities.length !== 0 &&
              amenities?.map((item) =>
                item?.amenities?.map((amenity) => (
                  <Text
                    key={amenity.text}
                    fontWeight="semibold"
                    color="#6F8F4E"
                    fontSize="15px"
                    p="2"
                    bg="#C9E7BD"
                    m="1"
                    mx={"6px"}
                    borderRadius="5"
                  >
                    {amenity.text}
                  </Text>
                ))
              )}
          </Flex>
        </Box>
      </Box>
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
