import { Fragment, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Flex, Box, Text, Icon } from "@chakra-ui/react";
import { BsFilter } from "react-icons/bs";
import SearchFilters from "@/components/SearchFilters";
import Property from "@/components/Property";
import noresult from "../assets/images/noresult.png";
import { baseURL, fetchAPI } from "@/utils/fetchAPI";
import Head from "next/head";

const Search = ({ properties }) => {
  const [searchFilters, setSearchFilters] = useState(false);
  const router = useRouter();

  return (
    <Fragment>
      <Head>
        <title>Search your Dream Home</title>
        <meta
          name="description"
          content="Lets you search for the dream home you always wanted."
        />
      </Head>
      <Box>
        <Flex
          cursor={"pointer"}
          bg={"#f8f8f8"}
          p={2}
          fontSize={"lg"}
          justifyContent={"center"}
          alignItems={"center"}
          // borderBottomRadius={80}
          onClick={() => setSearchFilters(!searchFilters)}
        >
          <Text color={"#94A187"}>Search Properties by Filters</Text>
          <Icon paddingLeft={2} w={10} as={BsFilter} />
        </Flex>
        {searchFilters && <SearchFilters />}
        <Text
          textTransform={"capitalize"}
          fontSize={"lg"}
          p={4}
          fontWeight={600}
          color={"gray.500"}
        >
          Properties {router.query.purpose}
        </Text>
        <Flex flexWrap={"wrap"}>
          {properties.map((property) => (
            <Property property={property} key={property.id} />
          ))}
        </Flex>
        {properties.length === 0 && (
          <Flex
            justifyContent={"center"}
            alignItems={"center"}
            flexDirection={"column"}
            marginTop={5}
            marginBottom={5}
          >
            <Image width={80} alt="no-result" src={noresult} />
            <Text
              fontSize={"2xl"}
              fontWeight={600}
              marginTop={4}
              color={"#292929"}
            >
              No Results Found 😞
            </Text>
          </Flex>
        )}
      </Box>
    </Fragment>
  );
};

export async function getServerSideProps({ query }) {
  console.log(query);
  const purpose = query.purpose || "for-rent";
  const rentFrequency = query.rentFrequency || "yearly";
  const minPrice = query.minPrice || "0";
  const maxPrice = query.maxPrice || "1000000";
  const roomsMin = query.roomsMin || "0";
  const bathsMin = query.bathsMin || "0";
  const sort = query.sort || "price-desc";
  const areaMax = query.areaMax || "35000";
  const locationExternalIDs = query.locationExternalIDs || "5002";
  const categoryExternalID = query.categoryExternalID || "4";

  const data = await fetchAPI(
    `${baseURL}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`
  );

  return {
    props: {
      properties: data?.hits,
    },
  };
}

export default Search;
