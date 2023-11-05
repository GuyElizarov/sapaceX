import { Center, Button, Spinner, Flex, VStack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { landingService } from '../services/landingService.js';
import Card from '../cmps/card.jsx';

export const Home = () => {
    const [allLandings, setAllLandings] = useState([]);
    const [landings, setLandings] = useState([]);
    const [page, setPage] = useState(0);
    const [loading, setLoading] = useState(false);
    const limit = 20; // Number of items per page

    useEffect(() => {
        loadAllLandings();
    }, []);

    useEffect(() => {
        // Compute and set the landings for the current page
        const start = page * limit;
        const end = start + limit;
        setLandings(allLandings.slice(start, end));
    }, [page, allLandings]);

    const loadAllLandings = async () => {
        setLoading(true); // Set loading to true while fetching data
        try {
            const data = await landingService.getLandings();
            setAllLandings(data); // Store all landings
            setLandings(data.slice(0, limit)); // Set initial page
        } catch (error) {
            console.error('Error loading landings:', error);
        } finally {
            setLoading(false); // Set loading to false after fetching data
        }
    };

    const handleNextPage = () => {
        const nextPage = page + 1;
        const start = nextPage * limit;
        if (start < allLandings.length) {
            setPage(nextPage);
        }
    };

    const handlePrevPage = () => {
        setPage(page > 0 ? page - 1 : 0);
    };

    if (loading) return <Spinner thickness='4px' m='5' speed='0.65s' emptyColor='gray.200' color='blue.500' size='xl' />

    return (
        <VStack>

            <Center flexWrap={'wrap'}>
                {landings.map(landing => (
                    <Card
                        key={landing.id}
                        imgUrl={landing.links?.patch?.small}
                        launchName={landing.name}
                        landingSuccess={landing.success}
                        details={landing.details}
                        id={landing.id}
                    />
                ))}
            </Center>
            <Flex direction="row" justify="center" align="center" m={8} gap={'5'}>
                <Button onClick={handlePrevPage} disabled={page === 0}>Previous</Button>
                <Button onClick={handleNextPage} disabled={page * limit + limit >= allLandings.length}>Next</Button>
            </Flex>
        </VStack>
    );
};
