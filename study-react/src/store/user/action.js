/**
 * @author tanxin
 * @date $
 * @Description: user模块的
 */
// 常量
export const SET_USER = 'SET_USER';

// 包装的action ，相当于命令
export function setUserInfo(user) {
  return {
    type: SET_USER,
    user,
  }
}
