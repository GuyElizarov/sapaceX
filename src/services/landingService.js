import { httpService } from './httpService'


async function getLandings() {
    return httpService.get('/launches', null, true) 
        .then(launches => launches)
        .catch(error => {
            console.error('Error fetching SpaceX launches:', error);
        });
}

async function getById(landingId) {
    return httpService.get(`/launches/${landingId}`, null, true)
        .then(launch => launch)
        .catch(error => {
            console.error(`Error fetching SpaceX launch with ID ${landingId}:`, error);
        });
}

// async function remove(landingId) {
//     return httpService.delete(`landing/${landingId}`)
// }

// async function save(landing) {
//     var savedPop
//     if (landing._id) {
//         savedPop = await httpService.put('landing', landing)
//     } else {
//         savedPop = await httpService.post('landing', landing)
//     }
//     return savedPop
// }



export const landingService = {
    getLandings,
    getById,
    // remove,
    // save,
}