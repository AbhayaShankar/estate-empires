import Link from "next/link";
import Image from "next/image";
import { Flex, Button, Text, Box } from "@chakra-ui/react";

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
  <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
    <Image src={imageURL} width={500} height={400} alt="banner_img" />
    <Box p="5">
      <Text color="gray.500" fontSize="md" fontWeight="medium">
        {purpose}
      </Text>
      <Text fontSize="30px" fontWeight="bold">
        {title1} <br /> {title2}
      </Text>
      <Text fontSize="lg" paddingBottom={3} paddingTop={3} color={"gray.700"}>
        {desc1} <br /> {desc2}
      </Text>

      <Button fontSize="20px">
        <Link href={linkName}>{buttonText}</Link>
      </Button>
    </Box>
  </Flex>
);

export default function Home() {
  return (
    <>
      <h3>Abhaya</h3>
      <Banner
        purpose="RENT A HOME"
        title1="Rental Homes for"
        title2="Everyone"
        desc1="Explore Apartments, Villas, Flats"
        desc2="and more..."
        buttonText="Expore Renting"
        linkName="/search?purpose=for-rent"
        imageURL={
          "https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
        }
      />
      <Banner
        purpose="BUY A HOME"
        title1="Find, Buy and Own Your"
        title2="Dream Home"
        desc1="Explore Apartments, Villas, Flats"
        desc2="and more..."
        buttonText="Expore Buying"
        linkName="/search?purpose=for-sale"
        imageURL={
          "https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
        }
      />
    </>
  );
}
