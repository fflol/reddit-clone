import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { reducer } from '../reducers/reducers'

export const store = createStore(
	reducer,
	compose(
		applyMiddleware(thunk),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
)