/**
 * @author tanxin
 * @date $
 * @Description: store
 */
import {createStore, compose} from 'redux'
import {combineReducers} from "redux";

import {user} from './user/reducer.js'
import {home} from './home/reducer.js'

// 添加redux-devTools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// 基于reducer闯将store
const store = createStore(
  combineReducers({user, home}),
  composeEnhancers()
);


export default store;
