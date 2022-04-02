export function setUserDetails(data){
    sessionStorage.setItem('userData', JSON.stringify(data));
}

export function getUserDetails(){
    return JSON.parse(sessionStorage.getItem('userData'));
}

export function clearUserDetails(){
    sessionStorage.removeItem('userData');
}