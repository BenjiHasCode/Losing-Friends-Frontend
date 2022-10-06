import httpService from "./httpService"
import jwtDecode from 'jwt-decode';

const authUrl = '/auth/';
const tokenKey = 'token';
httpService.setJwtHeaders(getJwt());

function getJwt() {
    if (localStorage.getItem(tokenKey) === 'undefined') {
        return null;
    }

    return localStorage.getItem(tokenKey);
}

// returns true if user was able to log in
// TODO PLACEHOLDER CONNECT TO BACKEND
async function login(credentials) {
 //   const data = await httpService.post(authUrl, {email: credentials.email, password: credentials.password}); TODO reimplement
    localStorage.setItem(tokenKey, "data"); // save jwt to localstorage for future logins
    return true;
}

function loginWithJwt(jwt) { // TODO 
    localStorage.setItem(tokenKey, jwt);
}

function logout() { // TODODOOTOTODOTODOTODO
    localStorage.removeItem(tokenKey);
}

function getCurrentUser() {
    const jwt = localStorage.getItem(tokenKey);

    if (jwt === 'undefined')
        return null;

    // return jwt ? jwtDecode(jwt) : null; todo reimplement
    return {name: "Steve Jobs"}
}



const auth = {
    login,
    loginWithJwt,
    logout,
    getCurrentUser

}

export default auth;