import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { reducer } from '../reducers/reducers'

export const store = createStore(reducer, applyMiddleware(thunk))