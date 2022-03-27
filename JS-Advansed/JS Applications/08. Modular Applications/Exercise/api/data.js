import * as api from './api.js'

const endpoints = {
    'teams': '/data/teams',
    // 'create': '/data/catalog',
    // 'getById': '/data/catalog/'
}

export async function getAllTeams(){
    return api.get(endpoints.teams);
}

// export async function createTeam(team){
//     return api.post(endpoints.create, team);
// }

// export async function getFurnitureDetailsById(id){
//     return api.get(endpoints.getById + id);
// }

// export async function updateFurnitureDetailsById(id, furniture){
//     return api.put(endpoints.getById + id, furniture);
// }

// export async function deleteById(id){
//     return api.delete(endpoints.getById + id);
// }

// export async function getMyFurnitures(userId){
//     return api.get(`/data/catalog?where=_ownerId%3D%22${userId}%22`)
// }