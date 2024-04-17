import { useState } from "react";
import { Box, Button, Container, Heading, Input, Stack, Text, Image, useToast } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

const Index = () => {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [showData, setShowData] = useState(null);
  const toast = useToast();

  const handleSearch = async () => {
    if (!input) {
      toast({
        title: "Error",
        description: "Please enter a show or movie name",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    setLoading(true);
    try {
      // Simulate an API call
      setTimeout(() => {
        setShowData({
          name: input,
          description: "A captivating show about the complexities of time travel.",
          imageUrl: "https://images.unsplash.com/photo-1502067294280-729dc7fea201?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0diUyMHNob3clMjB0aW1lJTIwdHJhdmVsfGVufDB8fHx8MTcxMzM3MDc4OXww&ixlib=rb-4.0.3&q=80&w=1080",
        });
        setLoading(false);
      }, 2000);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to fetch data",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      setLoading(false);
    }
  };

  return (
    <Container maxW="container.md" py={10}>
      <Stack spacing={4} as={Box} textAlign="center">
        <Heading fontSize="2xl">Discover Movies and TV Shows</Heading>
        <Text fontSize="lg" color={"gray.600"}>
          Enter the name of a movie or TV show to find out more about it.
        </Text>
      </Stack>

      <Stack spacing={4} mt={10}>
        <Input placeholder="Type here..." value={input} onChange={(e) => setInput(e.target.value)} />
        <Button leftIcon={<FaSearch />} colorScheme="teal" variant="solid" onClick={handleSearch} isLoading={loading}>
          Search
        </Button>
      </Stack>

      {showData && (
        <Box mt={10} textAlign="center">
          <Heading fontSize="xl">{showData.name}</Heading>
          <Text mt={2}>{showData.description}</Text>
          <Image src={showData.imageUrl} alt={showData.name} mt={4} />
        </Box>
      )}
    </Container>
  );
};

export default Index;
