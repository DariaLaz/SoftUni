import * as api from './api.js'


export const login = api.login;
export const register = api.register;
export const logout = api.logout;

export async function getAllMovies(){
    return api.get('/data/movies');
}

export async function getMovieById(id){
    return api.get('/data/movies/' + id);
}

export async function createMovie(movie){
    return api.post('/data/movies', movie);
}

export async function getLikes(movieId){
    return api.get(`/data/likes?where=movieId%3D%22${movieId}%22&distinct=_ownerId&count`);
}

export async function likeMovie(movieId){
    return api.post(`/data/likes`, movieId);
}

export async function editMovie(id, movie){
    return api.put('/data/movies/' + id, movie);
}

export async function deleteMovie(id){
    return api.del('/data/movies/' + id);
}

// export async function likeBook(bookId){
//     return api.post('/data/likes', {bookId});
// }

// export async function getLikesByBookId(bookId){
//     return api.get(`/data/likes?where=bookId%3D%22${bookId}%22&distinct=_ownerId&count`);
// }

// export async function getMyLikeByBookId(bookId, userId){
//     return api.get(`/data/likes?where=bookId%3D%22${bookId}%22%20and%20_ownerId%3D%22${userId}%22&count`);
// }