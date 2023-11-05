import { Button, Center, Flex, Heading } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"
import { Outlet } from "react-router-dom"

export const MainLayout = () => {
    const navigate = useNavigate()

    return <Flex flexDir={'column'} minHeight={'100vh'} >

        <Flex className="header" h={'120px'} boxShadow={'0 4px 2px -2px #333'} alignItems={'center'} width={'100%'} p={'35px'}>
            <Flex className="btns" gap={'35px'} >
                <Button colorScheme='green' onClick={() => navigate('/')}>Home</Button>
                <Button colorScheme='green' onClick={() => navigate('/about')}>About</Button>
                <Button colorScheme='green' onClick={() => navigate('/login')} >Login</Button>
            </Flex>
            <Flex margin={"auto"} >
                <Heading >SpaceX</Heading>
            </Flex>
        </Flex>

        <Flex flexGrow={'1'} >
            <Outlet />
        </Flex>

        {/* <Center className="footer" h={'120px'} boxShadow={'0 -5px 5px -5px #333'} w={'100%'}>
            <Heading>footer</Heading>
        </Center> */}


    </Flex>
}