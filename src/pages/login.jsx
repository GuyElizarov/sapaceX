import { Button, Flex } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"

export const Login = () => {
    const navigate = useNavigate()

    return <Flex>
        <Button margin={'35px'} colorScheme='blue' onClick={() => navigate('/')}>Main</Button>
    </Flex>
}