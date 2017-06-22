import path from "path";
import MysqlProvider from "./db/mysql";
import RedisProvider from "./db/redis";
import {loadTests} from "./utils/test";
import Logger from "./utils/log";

let DBInfo = {
  mysql: {
    // reference: https://github.com/mysqljs/mysql#connection-options
    host: "localhost",
    port: "12306", //"13306",
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


let Tests = loadTests(path.dirname(module.filename) + "/tests");


let Site = {
  port: 10001,
  views: './app/views',
}

export {DBInfo, Providers, Tests, Site};
