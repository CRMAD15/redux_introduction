/**
 * 'takeLatest' para que el watcher escuche solo última acción que se haya emitido
 * 'take', coger una concreta.
 * 'takeEvery', para coger todas.
 * 'takeLeading', para coger la primera.
 * 'takeMaybe' que coge una u otra dependiendo.
 * 'call' para llamar desde un watcher  de saga a un worker de saga.
 * 'put'  para emitir acciones.
 */
import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";
import { API_CALL_REQUEST } from "../actions/asyncActions";

//Watcher Saga
//Listens the API_CALL_REQUEST actions
//Las funciones con * son funciones generadoras nosotros vamos a parar la funcion y las ejecutara en paralelo con 'yield', sirve para para y ejectar algo 
//que no está dentro de esta funcion de forma asíncrona.
export function* watcherSaga() {
    //Listens the action and starts a Worker SAGA
    yield takeLatest(API_CALL_REQUEST, workerSaga)  //workerSaga puede ser cualquier nombre

}

//WORKER SAGA
// Es llamado por un watcher saga, hace login y despacha una action.

export function* workerSaga(action) {
    try {
        const response = yield call(fetchHttp(action.payload.request))
        //Obtenemos el token de la response
        const token = response.data.token;
        //El put lo que pide son acciones, aquí le estamos diciendo que lance una action cuando llegue aquí
        yield put({
            type: action.payload.okAction, //API_CALL_SUCCESS
            payload: {
                token: token
            }
        });

    } catch (error) {
        //Aquí le estamos diciendo que lance una action cuando haya un error

        yield put({
            type: action.payload.failAction, //API_CALL_FAILURE
            payload: {
                error: error
            }
        })
    }
}

function fetchHttp(request) {
    return function () {
        return (axios(request))
    }
}
