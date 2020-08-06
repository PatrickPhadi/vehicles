import { combineReducers } from 'redux'
import * as create from './appReducers'

export default combineReducers({
    list: create.list({ moduleName: 'vehicles', cancelRequest: true }),
    cart: create.cart
})