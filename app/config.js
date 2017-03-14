import MysqlProvider from "./db/mysql";
import RedisProvider from "./db/redis";



let DBInfo = {
  mysql: {
    // reference: https://github.com/mysqljs/mysql#connection-options
    host: "localhost",
    port: "13306",
    user: "expressjs",
    password: "welcome1",
    database: "expressjs",
  },
  redis: {
    // reference: https://github.com/NodeRedis/node_redis#rediscreateclient
    url: "//localhost:16379/0",
  } 
}


let Providers = {
  mysql: new MysqlProvider(DBInfo.mysql),
  redis: new RedisProvider(DBInfo.redis),
}


let Tests = {

}

export {DBInfo, Providers, Tests};
