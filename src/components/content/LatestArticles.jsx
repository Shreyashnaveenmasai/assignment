import {
    Box,
    Grid,
    GridItem,
    Heading,
    HStack,
    Icon,
    Image,
    Spacer,
    Text,
    Tooltip,
    useColorModeValue
} from "@chakra-ui/react";
import { FaCommentDots } from "react-icons/fa";
  
  const LatestArticles = () => {
    const cardBg = useColorModeValue("gray.100", "gray.800");
    const cardHoverBg = useColorModeValue("gray.200", "gray.700");
  
    const articles = [
      {
        title: "Solar Energy for Mother Earth and Everyday Smiles",
        category: "Environment",
        imageUrl:
          "https://mksdmcdn-9b59.kxcdn.com/voice/wp-content/uploads/2020/06/voice3_41-375x195.jpg",
        date: "5 days ago",
        comments: 1,
      },
      {
        title: "What Is the Definition of an Entrepreneur Lifestyle?",
        category: "Lifestyle",
        imageUrl:
          "https://mksdmcdn-9b59.kxcdn.com/voice/wp-content/uploads/2020/06/voice3_38-375x195.jpg.webp",
        date: "5 days ago",
        comments: 3,
      },
      {
        title: "Hipster Yoga at the End of the World",
        category: "Fashion",
        imageUrl:
          "https://mksdmcdn-9b59.kxcdn.com/voice/wp-content/uploads/2020/06/voice3_2-375x195.jpg.webp",
        date: "5 days ago",
        comments: 0,
      },
    ];
  
    return (
      <Box p={5}>
        <Heading size="lg" mb={5}>
          LATEST ARTICLES
        </Heading>
        <Grid templateColumns="repeat(4, 1fr)" gap={5}>
          {articles.map((article, index) => (
            <GridItem key={index} colSpan={[1, 2, 3, 4]}>
              <Box
                p={5}
                mb={5}
                bg={cardBg}
                rounded="md"
                shadow="md"
                _hover={{
                  bg: cardHoverBg,
                  transform: "scale(1.05)",
                }}
                transition="all 0.2s ease-in-out"
              >
                <Image
                  src={article.imageUrl}
                  alt={article.title}
                  borderRadius="md"
                  h={200}
                  objectFit="cover"
                />
                <Box p={4}>
                  <Text fontSize="sm" color="gray.500" mb={2}>
                    {article.category}
                  </Text>
                  <Heading size="md" mb={2} fontWeight="bold">
                    {article.title}
                  </Heading>
                  <HStack spacing={2} fontSize="sm">
                    <Text>{article.date}</Text>
                    <Spacer />
                    <Tooltip label="Add Comment">
                      <Icon as={FaCommentDots} />
                    </Tooltip>
                  </HStack>
                </Box>
              </Box>
            </GridItem>
          ))}
        </Grid>
      </Box>
    );
  };
  
  export default LatestArticles;