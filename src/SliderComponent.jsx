import { Box, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/swiper.css';

const SliderComponent = () => {
  const slides = [
    {
      category: 'Food',
      title: 'Astonishing Health Benefits of Eating Chocolates',
      date: '5 days ago',
      imageUrl: 'https://mksdmcdn-9b59.kxcdn.com/voice/wp-content/uploads/2014/11/voice_18-1024x683.jpg.webp',
    },
    {
      category: 'Fashion',
      title: 'Cool Car: Add Style And Class To Your Vehicle',
      date: '5 days ago',
      imageUrl: 'https://mksdmcdn-9b59.kxcdn.com/voice/wp-content/uploads/2014/11/voice_1-1024x678.jpg.webp',
    },
    {
      category: 'Lifestyle',
      title: 'What Will Natural Beauty Be Like In 100 Years?',
      date: '5 days ago',
      imageUrl: 'https://mksdmcdn-9b59.kxcdn.com/voice/wp-content/uploads/2020/06/voice3_30-1024x678.jpg.webp',
    },
  ];

  return (
    <Swiper spaceBetween={30} slidesPerView={1} loop={true}>
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <Box
            position="relative"
            textAlign="center"
            overflow="hidden"
            borderRadius="lg"
            boxShadow="md"
            _hover={{ boxShadow: 'lg' }}
            transition="all 0.3s ease"
            height="300px" // Fixed height
          >
            <Image
              src={slide.imageUrl}
              alt={slide.title}
              width="100%"
              height="100%"
              objectFit="cover"
              borderRadius="lg"
            />
            <Box
              position="absolute"
              top="0"
              left="0"
              right="0"
              bottom="0"
              bg="rgba(0, 0, 0, 0.4)"
              display="flex"
              alignItems="center"
              justifyContent="center"
              borderRadius="lg"
              p={4}
              textAlign="center"
            >
              <Flex direction="column" color="white">
                <Text fontSize={{ base: 'md', md: 'lg' }} bg="green.400" px={3} py={1} borderRadius="md" mb={2}>
                  {slide.category}
                </Text>
                <Text fontSize={{ base: 'xl', md: '2xl' }} fontWeight="bold" mb={2}>
                  {slide.title}
                </Text>
                <Text fontSize={{ base: 'sm', md: 'md' }}>
                  {slide.date}
                </Text>
              </Flex>
            </Box>
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SliderComponent;
