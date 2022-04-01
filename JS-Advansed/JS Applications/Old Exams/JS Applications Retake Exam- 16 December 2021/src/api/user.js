import * as api from './apiRequest.js'

export const loginUser = api.login;
export const registerUser = api.register;
export const logoutUser = api.logout;

export async function getAllTheaters(){
    return api.get('/data/theaters?sortBy=_createdOn%20desc&distinct=title');
}
export async function getUserTheaters(userId){
    return api.get(`/data/theaters?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
}

export async function createTheater(theater){
    return api.post('/data/theaters', theater);
}

export async function getTheaterById(id){
    return api.get('/data/theaters/' + id);
}

export async function editTheater(id, theater){
    return api.put('/data/theaters/' + id, theater);
}

export async function deleteTheater(id){
    return api.del('/data/theaters/' + id);
}

export async function likeEvent(theaterId){
    return api.post(`/data/likes`, {theaterId});
}

export async function getLikes(theaterId){
    return api.get(`/data/likes?where=theaterId%3D%22${theaterId}%22&distinct=_ownerId&count`);
}

export async function getLikesFromUser(theaterId, userId){
    return api.get(`/data/likes?where=theaterId%3D%22${theaterId}%22%20and%20_ownerId%3D%22${userId}%22&count`);
}