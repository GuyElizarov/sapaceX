'use client'

import {
    Box,
    Heading,
    Image,
    Text,
    Divider,
    HStack,
    Tag,
    Wrap,
    WrapItem,

    useColorModeValue,
    Container,
    VStack,
    Link,
} from '@chakra-ui/react'
import { YouTubeVideo } from './YouTubeVideo'


const BlogTags = (props) => {
    const { marginTop = 0, tags } = props

    return (
        <HStack spacing={2} marginTop={marginTop}>
            {tags.map((tag) => {
                return (
                    <Tag size={'md'} variant="solid"  key={tag}>
                        {tag}
                    </Tag>
                )
            })}
        </HStack>
    )
}





const ArticleList = ({ landing }) => {
    return (
        <Container maxW={'7xl'} p="12">
            <Heading as="h1">{landing.name}</Heading>
            <Box
                marginTop={{ base: '1', sm: '5' }}
                display="flex"
                flexDirection={{ base: 'column', sm: 'row' }}
                justifyContent="space-between">
                <Box
                    display="flex"
                    flex="1"
                    marginRight="3"
                    position="relative"
                    alignItems="center">
                    <Box
                        width={{ base: '100%', sm: '85%' }}
                        zIndex="2"
                        marginLeft={{ base: '0', sm: '5%' }}
                        marginTop="5%">
                        <Box textDecoration="none" _hover={{ textDecoration: 'none' }}>
                            <Image
                                borderRadius="lg"
                                src={landing.links?.patch?.small}
                                alt="some good alt text"
                                objectFit="contain"
                            />
                        </Box>
                    </Box>
                    <Box zIndex="1" width="100%" position="absolute" height="100%">
                        <Box
                            bgGradient={useColorModeValue(
                                'radial(orange.600 1px, transparent 1px)',
                                'radial(orange.300 1px, transparent 1px)',
                            )}
                            backgroundSize="20px 20px"
                            opacity="0.4"
                            height="100%"
                        />
                    </Box>
                </Box>
                <Box
                    display="flex"
                    flex="1"
                    flexDirection="column"
                    // justifyContent="center"
                    marginTop={{ base: '3', sm: '0' }}>
                    <HStack spacing={4} variant='solid'  size={'lg'}>

                        <Link href={landing.links.article} isExternal > <Tag >Article</Tag></Link>
                        <Link href={landing.links.wikipedia} isExternal > <Tag>Wikipedia</Tag></Link>
                    </HStack>
                    <Heading marginTop="1">
                        <Text textDecoration="none" _hover={{ textDecoration: 'none' }}>
                        Details
                        </Text>
                    </Heading>
                    <Text
                        as="p"
                        marginTop="2"
                        color={useColorModeValue('gray.700', 'gray.200')}
                        fontSize="lg">
                        {landing.details}
                    </Text>
                </Box>
            </Box>

            <Divider marginTop="5" />
            <YouTubeVideo youtubeId={landing.links.youtube_id} />

            {/* <VStack paddingTop="40px" spacing="2" alignItems="flex-start">
                <Heading as="h2">What we write about</Heading>
                <Text as="p" fontSize="lg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum quam
                    arcu, eu tempus tortor molestie at. Vestibulum pretium condimentum dignissim.
                    Vestibulum ultrices vitae nisi sed imperdiet. Mauris quis erat consequat,
                    commodo massa quis, feugiat sapien. Suspendisse placerat vulputate posuere.
                    Curabitur neque tortor, mattis nec lacus non, placerat congue elit.
                </Text>
                <Text as="p" fontSize="lg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum quam
                    arcu, eu tempus tortor molestie at. Vestibulum pretium condimentum dignissim.
                    Vestibulum ultrices vitae nisi sed imperdiet. Mauris quis erat consequat,
                    commodo massa quis, feugiat sapien. Suspendisse placerat vulputate posuere.
                    Curabitur neque tortor, mattis nec lacus non, placerat congue elit.
                </Text>
                <Text as="p" fontSize="lg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum quam
                    arcu, eu tempus tortor molestie at. Vestibulum pretium condimentum dignissim.
                    Vestibulum ultrices vitae nisi sed imperdiet. Mauris quis erat consequat,
                    commodo massa quis, feugiat sapien. Suspendisse placerat vulputate posuere.
                    Curabitur neque tortor, mattis nec lacus non, placerat congue elit.
                </Text>
            </VStack> */}
        </Container>
    )
}

export default ArticleList