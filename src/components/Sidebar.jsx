import { Box, Heading, VStack, Text } from "@chakra-ui/react";

const Sidebar = () => {
  return (
    <Box as="aside" w="full" maxW="xs" p={4} bg="gray.50" borderRadius="md" boxShadow="md">
      <Heading size="md" mb={4}>
        Recent Posts
      </Heading>
      <VStack align="start" spacing={2}>
        <Text>Post 1</Text>
        <Text>Post 2</Text>
        <Text>Post 3</Text>
      </VStack>
    </Box>
  );
};

export default Sidebar;