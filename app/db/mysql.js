import Provider from "./provider";
import mysql from "mysql";
import Logger from "../utils/log";

export default class MysqlProvider extends Provider {

  constructor(options) {
    super(options);

    this.options = options;
    this.connected = false;
  }

  init() {
    this.conn = mysql.createConnection(this.options);
    this.connect();
    this.loaded = true;
  }

  connect() {
    this.conn.connect((err) => {
      if (err) {
        Logger.error("[MysqlProvider]", err);     
        this.connected = false;
      };

      Logger.log('[MysqlProvider] connected.');
      this.connected = true;
    });
  }

  getConnection() {
    if (!this.connected) { // retry connection
      Logger.log('[MysqlProvider] not connected. try to connect...');
      this.connect();
    }
    return this.conn;
  }

  destroy() {
    this.conn && this.conn.end();
  }

}
