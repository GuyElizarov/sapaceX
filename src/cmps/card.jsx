'use client'

import { useState } from 'react'
import {
    Box,
    Heading,
    Text,
    Img,
    Flex,
    Center,
    useColorModeValue,
    HStack,
} from '@chakra-ui/react'
import { BsArrowUpRight } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

export default function PostWithLike({ id,imgUrl, launchName, landingSuccess, details }) {
const navigate = useNavigate()
const navigateToDetails = () => {
    navigate(`/details/${id}`);
  };
    return (
        <Center py={6}>
            <Box
                w="xs"
                rounded={'sm'}
                my={5}
                mx={[0, 5]}
                overflow={'hidden'}
                bg="white"
                border={'1px'}
                borderColor="black"
                boxShadow={useColorModeValue('6px 6px 0 black', '6px 6px 0 cyan')}>
                <Box h={'200px'} borderBottom={'1px'} borderColor="black" overflow="hidden" p={4} >
                    <Img
                        src={imgUrl}
                        alt={'Blog Image'}
                        objectFit="contain"
                        w="full"
                        h="full"
                        maxH="200px"

                    />
                </Box>
                <Box p={4}>
                    <Box bg="black" display={'inline-block'} px={2} py={1} color="white" mb={2}>
                        <Text fontSize={'xs'} fontWeight="medium">
                            {landingSuccess ? 'successful' : 'unsuccessful'}
                        </Text>
                    </Box>
                    <Heading color={'black'} fontSize={'2xl'} noOfLines={1}>
                        {launchName}
                    </Heading>
                    <Text color={'gray.500'} noOfLines={2}>
                        {details}
                    </Text>
                </Box>
                <HStack borderTop={'1px'} color="black" onClick={navigateToDetails}>
                    <Flex
                        p={4}
                        alignItems="center"
                        justifyContent={'space-between'}
                        roundedBottom={'sm'}
                        cursor={'pointer'}
                        w="full">
                        <Text fontSize={'md'} fontWeight={'semibold'}>
                            View more
                        </Text>
                        <BsArrowUpRight />
                    </Flex>
              
                </HStack>
            </Box>
        </Center>
    )
}