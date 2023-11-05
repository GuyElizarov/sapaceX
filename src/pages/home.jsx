import { Center, Flex, Box} from '@chakra-ui/react'
import { landingService } from '../services/landingService.js'
import { useEffect, useState } from 'react'
import { Spinner } from '@chakra-ui/react'
import Card from '../cmps/card.jsx'
export const Home = () => {
    const [landings, setLandings] = useState([]);
    console.log('Home  landings:', landings)

    useEffect(() => {
        loadLandings();
    }, [])

    const loadLandings = async () => {
        try {
            const data = await landingService.getLandings();
            setLandings(data);
        } catch (error) {
            console.error('Error loading landings:', error);

        }
    }
    if (!landings) return <Spinner thickness='4px' m='5'
        speed='0.65s' emptyColor='gray.200' color='blue.500' size='xl' />

    return (
        <Center flexWrap={'wrap'}>

            {landings.map(landing => (
                <Card key={landing.id} imgUrl={landing.links?.patch?.small} launchName={landing.name} landingSuccess={landing.success} details={landing.details}/>
            ))}
        </Center >
    );
};
