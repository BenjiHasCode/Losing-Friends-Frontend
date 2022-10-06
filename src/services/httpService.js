function setJwtHeaders(jwt) {   //TODO CLEAN UP OR RENAME OR SOMETHING
    if (jwt) {
    // axios.defaults.headers.common['x-auth-token'] = jwt;
    }
}

const httpService = {   // placeholders until I connect it with backend
    get: null, //axios.get,
    post: null, //axios.post
    put: null, //axios.put
    delete: null, //axios.delete
    setJwtHeaders,
}

export default httpService;