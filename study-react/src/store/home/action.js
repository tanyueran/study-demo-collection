/**
 * @author tanxin
 * @date $
 * @Description: home模块的
 */
// 常量
export const SET_HOME = 'SET_HOME';

// 包装的action ，相当于命令
export function setHomeInfo(info) {
  return {
    type: SET_HOME,
    info,
  }
}
