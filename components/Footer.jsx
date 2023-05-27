import { Box } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box
      p={5}
      textAlign={"center"}
      color={"#94A187"}
      borderTop={1}
      borderColor={"#94A187"}
      fontWeight={"semibold"}
      letterSpacing={0.4}
      fontSize={15}
      fontFamily={"Montserrat , sans-serif"}
      style={{ borderTop: "1px solid #D0CDD7" }}
    >
      2023 © Estate Empires Inc.
    </Box>
  );
};

export default Footer;
