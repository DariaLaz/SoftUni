import * as api from './api.js'

const endpoints = {
    'furnitures': '/data/ideas?select=_id%2Ctitle%2Cimg&sortBy=_createdOn%20desc',
    'create': '/data/catalog',
    'getById': '/data/catalog/'
}

export async function createFurniture(furniture){
    return api.post(endpoints.create, furniture);
}

export async function getAllFurniture(){
    return api.get(endpoints.create);
}

export async function getFurnitureDetailsById(id){
    return api.get(endpoints.getById + id);
}

export async function updateFurnitureDetailsById(id, furniture){
    return api.put(endpoints.getById + id, furniture);
}

export async function deleteById(id){
    return api.delete(endpoints.getById + id);
}

export async function getMyFurnitures(userId){
    return api.get(`/data/catalog?where=_ownerId%3D%22${userId}%22`)
}
