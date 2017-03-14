import Logger from "../utils/log";

export default class Provider {

  constructor(options) {
    // set connection info here
    assert(options, "DB Provider constructor requires an option!");
  }

  init() {
    // optional initialiation and set this.loaded=true
  }

  isLoaded() {
    return this.loaded;
  }

  getConnection() {
    // return a workable connection here
  }

  destroy() {
    // release resources
  }

}
