# express的demo

## 实现功能
1. 用户注册（账号、密码、头像）
2. 已有用户预览



## mongoDB认证

```text
1、下载好MongoDB后，配置好，
2、通过需要认证的方式启动，添加可以创建用户的账号
 db.createUser({  
    user: "root",  
    pwd: "password",  
    roles: [ { role: "userAdminAnyDatabase", db: "admin" } ]  
});
3、成功后，使用db.auth("root","password");认证一下，返回1表示认证成功，返回0表示失败
4、关闭后，使用需要认证的方式启动
mongod --auth --config E:\mongodb\mongoDB\mongo.conf
5、最后使用root账户添加用户，每个用户的权限需要与db(库)挂钩，然后登录的时候
use admin;db.auth("username","password")// 认证，成功后，在切换对应的拥有权限的地方使用
```

