import CallToActionImg from '../assets/img/callToAction.jpeg';
import {
    Button,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    useBreakpointValue,
  } from '@chakra-ui/react';
  
  export default function CallToAction() {
    return (
      <Stack minH={'50vh'} direction={{ base: 'column', md: 'row' }} className="flex bg-lime-900 p-10" bgImage={CallToActionImg} bgSize={'cover'} bgPosition={'center'}>
        <Flex p={8} flex={1} align={'center'} justify={'end'}>
          <Stack spacing={6} w={'full'} maxW={'lg'}>
            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>

              <Text color={'yellow.400'} as={'span'} className="text-5xl font-bold ">
              Little Lemon
              </Text>{' '}
            </Heading>
            <Text fontSize={{ base: 'md', lg: 'lg' }} color={'yellow.100'}>
            We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist
            </Text>
            <Stack direction={{ base: 'column', md: 'row'}} spacing={4}>
              <Button rounded={'full'} bgColor={'green.500'}>Start Booking</Button>
            </Stack>
          </Stack>
        </Flex>
      </Stack>
    );
  }