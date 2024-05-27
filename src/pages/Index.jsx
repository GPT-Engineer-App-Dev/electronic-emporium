import { Box, Container, VStack, Text, Heading, Image, SimpleGrid, Link, Flex, Spacer, HStack, IconButton } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Navigation Bar */}
      <Box as="nav" bg="blue.800" color="white" p={4}>
        <Flex maxW="container.lg" mx="auto" align="center">
          <Heading size="md">ElectroShop</Heading>
          <Spacer />
          <HStack spacing={4}>
            <Link href="#">Home</Link>
            <Link href="#">Products</Link>
            <Link href="#">About Us</Link>
            <Link href="#">Contact Us</Link>
          </HStack>
        </Flex>
      </Box>

      {/* Hero Section */}
      <Box as="section" bg="gray.100" py={20} textAlign="center">
        <Container maxW="container.lg">
          <Heading size="2xl" mb={4}>Welcome to ElectroShop</Heading>
          <Text fontSize="lg" mb={6}>Your one-stop shop for all electronic gadgets and accessories</Text>
          <Image src="/images/hero-banner.jpg" alt="Promotional Banner" borderRadius="md" />
        </Container>
      </Box>

      {/* Product Listing Section */}
      <Box as="section" py={20}>
        <Container maxW="container.lg">
          <Heading size="xl" mb={10} textAlign="center">Featured Products</Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="/images/product1.jpg" alt="Product 1" />
              <Box p={6}>
                <Heading size="md" mb={2}>Product 1</Heading>
                <Text>$299.99</Text>
              </Box>
            </Box>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="/images/product2.jpg" alt="Product 2" />
              <Box p={6}>
                <Heading size="md" mb={2}>Product 2</Heading>
                <Text>$399.99</Text>
              </Box>
            </Box>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="/images/product3.jpg" alt="Product 3" />
              <Box p={6}>
                <Heading size="md" mb={2}>Product 3</Heading>
                <Text>$499.99</Text>
              </Box>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="blue.800" color="white" py={10}>
        <Container maxW="container.lg">
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            <Box>
              <Heading size="md" mb={4}>ElectroShop</Heading>
              <Text>© 2023 ElectroShop. All rights reserved.</Text>
            </Box>
            <Box>
              <Heading size="md" mb={4}>Follow Us</Heading>
              <HStack spacing={4}>
                <IconButton as="a" href="#" aria-label="Facebook" icon={<FaFacebook />} />
                <IconButton as="a" href="#" aria-label="Twitter" icon={<FaTwitter />} />
                <IconButton as="a" href="#" aria-label="Instagram" icon={<FaInstagram />} />
              </HStack>
            </Box>
            <Box>
              <Heading size="md" mb={4}>Legal</Heading>
              <Link href="#">Privacy Policy</Link>
              <br />
              <Link href="#">Terms of Service</Link>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;