# MongoDB学习记录

## 1. 安装

1. 在官方下载zip包，解压，经bin目录配置与系统环境变量中

2. 创建日志（log/mong.log）、数据目录(data)

3. 创建配置文件

   ```
   # 数据库的位置
   dbpath=E:\mongodb\db
   # 日志的位置
   logpath=E:\mongodb\log\db.log
   # 开启认证
   auth=false
   # 端口
   port=27017
   ```

4. 启动MongoDB(此时不需要认证)

   ```text
   mongod --config=./mongo.conf
   ```

5. 创建用户管理员账户

   ```
   1、进入cmd，启动用户“mongo”命令进入MongoDB的客户端。
   2、use admin;// 进入用户库
   3、创建可以创建用户的账号
   db.createUser({  
       user: "root",  
       pwd: "password",  
       roles: [ { role: "userAdminAnyDatabase", db: "admin" } ]  
   });
   4、创建成功后，使用命令：db.auth("root","password") 验证下，返回1则表示ok
   ```

6. 关闭MongoDB服务，然后将config文件中auth = false改为true，重新启动MongoDB

7. 重新进入mongo客户端

   ```
   1、mongo
   2、use admin
   3、dh.auth("root","password");返回1表示认证成功
   4、创建用户 ,username:账号，dbName即是数据名称，MongoDB中的账号权限是跟数据库挂钩的。
   db.createUser({  
       user: "username",  
       pwd: "password",  
       roles: [ { role: "readWrite", db: "dbName" } ]  
   });
   5、创建成功后，切到dbName库中  use dbName 在执行一次
   db.createUser({  
       user: "username",  
       pwd: "password",  
       roles: [ { role: "readWrite", db: "dbName" } ]  
   });
   // 因为如果在dbName中没有账号信息，每次认证的时候都需要在admin库中去认证。
   此时可以直接在dbName库中认证了。
   ```

   

## 2. bin文件内容介绍

| **mongo**        | **客户端程序，连接MongoDB**          |
| :--------------- | :----------------------------------- |
| **mongod**       | **服务端程序，启动MongoDB**          |
| **mongodump**    | **备份程序**                         |
| **mongoexport**  | **数据导出程序**                     |
| **mongofiles**   | **GridFS工具，内建的分布式文件系统** |
| **mongoimport**  | **数据导入程序**                     |
| **mongorestore** | **数据恢复程序**                     |
| **mongos**       | **数据分片程序，支持数据的横向扩展** |
| **mongostat**    | **监视程序**                         |

### **数据备份命令**

```
mongodump -h localhost:27017 -d mydb -o E:\mongodb\beifen -u user -p password
-h 地址：端口
-d 需要备份的数据名称
-o 输出的地址
-u 账号
-p 密码
```

### **数据恢复命令**

```
mongorestore -h localhost:27017 -u user -p password -d mydb E:\mongodb\beifen\mydb\user.bson
```



## **GridFS工具**

**未完待续。。。。**



