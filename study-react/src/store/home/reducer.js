/**
 * @author tanxin
 * @date $
 * @Description: home模块的
 */
import {SET_HOME} from './action.js'

// 处理命令，并修改state
export function home(state = {}, action) {
  switch (action.type) {
    case SET_HOME:
      return Object.assign({}, state, action.info);
    default:
      return state;
  }
}
