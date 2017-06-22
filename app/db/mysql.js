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
    this.conn.on('error', this.handleMysqlError);
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
      this.setKeepConnection();
    });
  }

  setKeepConnection() {
    this.keepInterval = setInterval(() => {
      this.conn.query('select 1');
    }, 5000);
  }
  
  clearKeepConnection() {
    this.keepInterval && clearInterval(this.keepInterval);
  }

  getConnection() {
    if (!this.connected) { // retry connection
      Logger.log('[MysqlProvider] not connected. try to connect...');
      this.connect();
    }
    return this.conn;
  }

  destroy() {
    this.clearKeepConnection();
    this.conn && this.conn.end();
  }


  handleMysqlError = (err) => {
    Logger.error('db error', err);
    if(err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually
      this.connected = false;
      this.clearKeepConnection();
      this.init();                // lost due to either server restart, or a
    }
  }
}
