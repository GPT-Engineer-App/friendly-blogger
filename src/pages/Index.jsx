import { Box, Container, Flex, VStack, Text } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

const Index = () => {
  return (
    <Box>
      <Navbar />
      <Container maxW="container.lg" py={8}>
        <Flex direction={{ base: "column", md: "row" }} spacing={8}>
          <Box flex="1" mr={{ md: 8 }}>
            <VStack spacing={4} align="start">
              <Text fontSize="2xl" fontWeight="bold">
                Welcome to MyBlog
              </Text>
              <Text>
                This is a personal blog where I share my thoughts and experiences.
              </Text>
            </VStack>
          </Box>
          <Sidebar />
        </Flex>
      </Container>
      <Footer />
    </Box>
  );
};

export default Index;