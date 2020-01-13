/**
 * @author tanxin
 * @date $
 * @Description: 测试redux的单独使用，redux是一个单独的状态管理解决方案，可以将一些数据从视图中解耦出来，使用redux管理
 */
const createStore = require('redux').createStore;

const SET_USER = 'SET_USER';

// action
function setUser(type, user) {
  return {
    type: 'SET_USER',
    user,
  }
}

// reducer
function set_user(state = {username: 'username', password: 'password'}, action) {
  switch (action.type) {
    case SET_USER:
      return Object.assign({}, state, action.user);
    default:
      return state;
  }
}

// store
const store = createStore(set_user);

// 订阅消息
store.subscribe(() => {
  console.log("====");
  console.log(get_user_info());
});

// 从store中获取state
function get_user_info() {
  return store.getState();
}

((() => {
  console.log(get_user_info());
})());


setTimeout(() => {
  store.dispatch(setUser(SET_USER, {
    username: '大王',
    password: 'password123'
  }))
}, 1000);
