import {ExpressTestCase} from "../utils/test";
import {Console} from "../utils/log";

export default class Root extends ExpressTestCase {
  
  getUrlMappings() {
    return [
      ['get', "/", this.test_root], 
      ['get', "/db", this.test_database],
      ['get', '/db/redis', this.test_redis],
      ['get', '/db/mysql', this.test_mysql],
      ['get', '/db/mongodb', this.test_mongodb],
    ]
  }

  test_root = (req, res) => {
    Console.success("You got root! '/'");
    //res.send('DB Study Express!');
    res.render('index');
  }

  test_database = (req, res) => {
    res.render('database', {
      providers: this.providers,
    });
  }

  test_redis = (req, res) => {
    const conn = this.getConnection('redis');
    const key = 'db-study-express';
    conn.set(key, 'I like to study some database.');
    conn.get(key, (err, value) => {
      res.render('test_redis', {
        key,
        message: value,
      });
    });
  }

  test_mysql = (req, res) => {
    const conn = this.getConnection('mysql');
    conn.query('show databases;', (error, result, fields) => {
      res.render('test_mysql', {
        error,
        result,
        fields,
      });
    });
  }

  test_mongodb = (req, res) => {
    res.send('Not implemented');
  }

};
