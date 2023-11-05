

import { Flex } from '@chakra-ui/react'
import { landingService } from '../services/landingService.js'
import { useEffect } from 'react'
export const Home = () => {

useEffect(()=>{
    loadLandings()
})

   const loadLandings = async () => {
        await landingService.getLandings()
    }
    return <>


    </>
}