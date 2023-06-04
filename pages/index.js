import Link from "next/link";
import Image from "next/image";
import { Flex, Button, Text, Box } from "@chakra-ui/react";
import { baseURL, fetchAPI } from "../utils/fetchAPI";
import Property from "@/components/Property";
import { Fragment } from "react";
import Head from "next/head";

const Banner = ({
  purpose,
  title1,
  title2,
  desc1,
  desc2,
  linkName,
  buttonText,
  imageURL,
}) => (
  <Fragment>
    <Head>
      <title>The Estate Empire - You think We Provide</title>
      <meta
        name="description"
        content="Estate empire lets you grab the opportunity to rent or buy your dream home with the best features possible - The featured section."
      />
    </Head>
    <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
      <Image
        src={imageURL}
        width={500}
        height={400}
        alt="banner_img"
        style={{ borderRadius: "8px" }}
      />
      <Box p="5">
        <Text color="gray.500" fontSize="md" fontWeight="medium">
          {purpose}
        </Text>
        <Text fontSize="20px" fontWeight="semibold">
          {title1} <br /> {title2}
        </Text>
        <Text fontSize="lg" paddingBottom={3} paddingTop={3} color={"gray.700"}>
          {desc1} <br /> {desc2}
        </Text>

        <Button
          paddingX={4}
          paddingY={4}
          fontSize="18px"
          bgColor={"gray.300"}
          color={"gray.700"}
        >
          <Link href={linkName}>{buttonText}</Link>
        </Button>
      </Box>
    </Flex>
  </Fragment>
);

export default function Home({ propertiesForSale, propertiesForRent }) {
  return (
    <Box fontFamily={"Poppins , sans-serif"}>
      <Banner
        purpose={"RENT A HOME"}
        title1="Rental Homes for"
        title2="Everyone"
        desc1="Explore Apartments, Villas, Flats"
        desc2="and more..."
        buttonText="Expore Renting"
        linkName={"/search?purpose=for-rent"}
        imageURL={
          "https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
        }
      />
      <Flex
        flexWrap={"wrap"}
        alignItems={"center"}
        justifyContent={"center"}
        rowGap={5}
      >
        {/* Fetch the properties for "RENT A H
        OME" from API */}
        {propertiesForRent.map((property) => (
          <Property property={property} key={property.id} />
        ))}
      </Flex>
      <Banner
        purpose="BUY A HOME"
        title1="Find, Buy and Own Your"
        title2="Dream Home"
        desc1="Explore Apartments, Villas, Flats"
        desc2="and more..."
        buttonText="Expore Buying"
        linkName="/search?purpose=for-sale"
        imageURL={"/dreamHome.jpg"}
      />
      <Flex
        flexWrap={"wrap"}
        alignItems={"center"}
        justifyContent={"center"}
        rowGap={5}
      >
        {/* Fetch the properties for "BUY A HOME" from API */}
        {propertiesForSale.map((property) => (
          <Property property={property} key={property.id} />
        ))}
      </Flex>
    </Box>
  );
}

export async function getStaticProps() {
  const propertyForSale = await fetchAPI(
    `${baseURL}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=9`
  );
  const propertyForRent = await fetchAPI(
    `${baseURL}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=9`
  );

  return {
    props: {
      propertiesForSale: propertyForSale?.hits,
      propertiesForRent: propertyForRent?.hits,
    },
  };
}
