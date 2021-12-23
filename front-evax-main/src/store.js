//import { applyMiddleware } from 'redux'
import {createStore} from 'redux'
import listManager from './reducers/list-manager'
import AuthReducer from './reducers/Auth-Reducer'


const Store = createStore(
    //listManager,
    AuthReducer
    //applyMiddleware
)

export default Store