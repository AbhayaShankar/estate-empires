import Image from "next/image";
import { useContext } from "react";
import { Box, Icon, Flex } from "@chakra-ui/react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Flex alignItems={"center"} justifyContent={"center"} marginRight={1}>
      <Icon
        as={FaArrowAltCircleLeft}
        onClick={() => scrollPrev()}
        fontSize={"20px"}
        cursor={"pointer"}
      />
    </Flex>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Flex alignItems={"center"} justifyContent={"center"} marginRight={1}>
      <Icon
        as={FaArrowAltCircleRight}
        onClick={() => scrollNext()}
        fontSize={"20px"}
        cursor={"pointer"}
      />
    </Flex>
  );
};

const ImageScrollbar = ({ data }) => (
  <ScrollMenu
    LeftArrow={LeftArrow}
    RightArrow={RightArrow}
    style={{ overflow: "hidden" }}
  >
    {data.map((item) => (
      <Box
        key={item.id}
        width={"910px"}
        itemID={item.id}
        overflow={"hidden"}
        paddingRight={1}
      >
        <Image
          alt="Property Image"
          placeholder="blur"
          blurDataURL={item.url}
          src={item.url}
          width={1000}
          height={500}
          sizes="(max-width:500px) 100px , (max-width: 1024px) 400px, 1000px"
        />
      </Box>
    ))}
  </ScrollMenu>
);

export default ImageScrollbar;
