export const API_CALL_REQUEST = "API_CALL_REQUEST";  //Escuchadas por el Watcher
export const API_CALL_SUCCESS = "API_CALL_SUCCESS";  //Despachada por el Worker saga
export const API_CALL_FAILURE = "API_CALL_FAILURE";  //Despachada por el Worker saga


export const login = (email, password) => {

    return {
        type: API_CALL_REQUEST,

        /** en el payload le enviamos lo que tiene que hacer: el method, la configuración de AXIOS, y además lo que tiene que hacer,
es decir, si todo ha ido bien o si todo ha ido mal */
        payload: {
            request: {
                method: 'post',
                url: 'https://reqres.in/api/login',
                data: {
                    email: email,
                    password: password
                },

            },
            okAction: API_CALL_SUCCESS,
            failureAction: API_CALL_FAILURE
        }
    }

}

/**
 * Generic hhtpRequest Acction dispatcher
 */

export const httpRequest = (method, url, data) => {
    return {
        type: API_CALL_REQUEST,

        payload: {
            request: {
                method: method,
                url: url,
                data: data,

            },
            okAction: API_CALL_SUCCESS,
            failureAction: API_CALL_FAILURE
        }
    }

}
