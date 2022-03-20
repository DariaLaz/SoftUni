import * as api from './api.js'

export async function getAllEvents(){
    return api.get('/data/theaters?sortBy=_createdOn%20desc&distinct=title');
}

export async function getEventById(id){
    return api.get('/data/theaters/' + id);
}

export async function getMyEvents(userId){
    return api.get(`/data/theaters?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
}

export async function createEvent(event){
    return api.post('/data/theaters', event)
}

export async function deleteById(id){
    return api.del('/data/theaters/' + id);
}

export async function editEvent(id, event){
    return api.put('/data/theaters/' + id, event);
}

export async function likeEvent(id){
    return api.post('/data/likes', {id})
}

export async function getLikesOfEvent(id){
    return api.get(`/data/likes?where=theaterId%3D%22${id}%22&distinct=_ownerId&count`)
}

export async function userLikesOfEvent(theaterId, userId){
    return api.get(`:/data/likes?where=theaterId%3D%22${theaterId}%22%20and%20_ownerId%3D%22${userId}%22&count`)

}