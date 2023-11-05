import { Center, Button, Spinner, Flex, VStack, Select, Text } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { landingService } from '../services/landingService.js'
import Card from '../cmps/card.jsx'

export const Home = () => {
    const [allLandings, setAllLandings] = useState([])
    const [landings, setLandings] = useState([])
    const [page, setPage] = useState(0)
    const [loading, setLoading] = useState(false)
    const [filter, setFilter] = useState('all') // Added filter state
    const limit = 20

    useEffect(() => {
        loadAllLandings()
    }, [])

    useEffect(() => {
        const filteredLandings = allLandings.filter(landing => {
            if (filter === 'all') return true
            return filter === 'success' ? landing.success : !landing.success
        })

        const start = page * limit
        const end = start + limit
        setLandings(filteredLandings.slice(start, end))
    }, [page, allLandings, filter])

    const loadAllLandings = async () => {
        setLoading(true)
        try {
            const data = await landingService.getLandings()
            setAllLandings(data)
            setLandings(data.slice(0, limit))
        } catch (error) {
            console.error('Error loading landings:', error)
        } finally {
            setLoading(false)
        }
    }

    const handleFilterChange = (event) => {
        setFilter(event.target.value)
        setPage(0) // Reset to the first page
    }

    const handleNextPage = () => {
        const nextPage = page + 1
        setPage(nextPage)
    }

    const handlePrevPage = () => {
        setPage(page > 0 ? page - 1 : 0)
    }

    if (loading) return <Spinner thickness='4px' m='5' speed='0.65s' emptyColor='gray.200' color='blue.500' size='xl' />

    return (
        <VStack>
            <VStack fontSize={'24px'}  m={4} w={'50%'} h={'50px'}>

                <Text>Filter by success status</Text>
                <Select onChange={handleFilterChange}
                     size="lg" variant='filled' >
                    <option value="all">All Landings</option>
                    <option value="success">Successful Landings</option>
                    <option value="failed">Failed Landings</option>
                </Select>
            </VStack>

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
                <Button onClick={handleNextPage} disabled={(page + 1) * limit >= allLandings.filter(l => filter === 'all' || (filter === 'success' ? l.success : !l.success)).length}>Next</Button>
            </Flex>
        </VStack>
    )
}
