import { combineReducers } from 'redux'
import base from './baseReducer'
import rates from './ratesReducer'

export default combineReducers({ base, rates })
