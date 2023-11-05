import { httpService } from './httpService'


async function getLandings() {
    return httpService.get('/launches', null, true) 
        .then(launches => launches)
        .catch(error => {
            console.error('Error fetching SpaceX launches:', error);
        });
}

async function getById(landingId) {
    return await httpService.get(`landing/getPopById/${landingId}`)
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


// function getEmptyPop() {
//     return {
//         title: "",
//         imageName: ""
//     }

// }



export const landingService = {
    getLandings,
    getById,
    // remove,
    // save,
    // getEmptyPop,

}