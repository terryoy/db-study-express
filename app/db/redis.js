import Provider from "./provider";
import redis from "redis";
import Logger from "../utils/log";


export default class RedisProvider extends Provider {

  constructor(options) {
    super(options);

    this.options = options;
    this.connected = false;
  } 

  init() {
    this.connect();
    this.loaded = true; 
  }

  connect() {
    let params = this.options.options ? [this.options.options] : [];

    if (this.options.url) {
      params.unshift(this.options.url);
    }
    else if (this.options.socket) {
      params.unshift(this.options.socket);
    }
    else if (this.options.port && this.options.host) {
      params.unshift(this.options.host);
      params.unshift(this.options.port);
    }

    this.conn = redis.createClient(...params);
    this.conn.on('ready', this.handleReady);
    this.conn.on('error', this.handleError);
    this.conn.on('connect', this.handleConnect);
    this.conn.on('end', this.handleEnd);
    this.conn.on('reconnecting', this.handleReconnecting);
    
  }

  getConnection() {
    return this.conn;
  }


  destroy() {
    this.conn && this.conn.quit();
  }


  handleReady = (err) => {
    console.log('[RedisProvider] redis is ready.');
    this.connected = true;
  }

  handleError = (err) => {
    console.error('[RedisProvider] error:', err);
  }
  
  handleConnect = (err) => {
    console.log('[RedisProvider] redis is connected.');
  }

  handleEnd = (err) => {
    console.log('[RedisProvider] redis is endded.');
  }

  handleReconnecting = (err) => {
    console.log('[RedisProvider] redis is reconnecting.');
  }

}
