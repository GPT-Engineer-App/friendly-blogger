import { Box, Flex, Link, Text } from "@chakra-ui/react";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <Box bg="brand.900" color="white" py={4} mt={8}>
      <Flex direction="column" align="center" maxW="container.lg" mx="auto">
        <Text mb={2}>Follow us on</Text>
        <Flex>
          <Link href="https://twitter.com" isExternal mx={2}>
            <FaTwitter />
          </Link>
          <Link href="https://facebook.com" isExternal mx={2}>
            <FaFacebook />
          </Link>
          <Link href="https://instagram.com" isExternal mx={2}>
            <FaInstagram />
          </Link>
        </Flex>
        <Text mt={2}>© 2023 MyBlog. All rights reserved.</Text>
      </Flex>
    </Box>
  );
};

export default Footer;