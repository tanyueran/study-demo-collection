/**
 * @author tanxin
 * @date $
 * @Description: user模块的
 */
import {SET_USER} from './action.js'

// 处理命令，并修改state
export function user(state = {
  username: 'XXX',
  password: '---',
}, action) {
  switch (action.type) {
    case SET_USER:
      return Object.assign({}, state, action.user);
    default:
      return state;
  }
}
