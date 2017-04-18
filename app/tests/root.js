import {ExpressTestCase} from "./utils/test";
import {Console} from "./utils/log";

export default class extends ExpressTestCase {
  
  /* initialize url mappings */ 
  addUrls(app) {
    this.getUrlMappings().forEach((route)=> {
      let [method, url, handler] = route;
      app[method](url, handler);
    });  
  }

  getUrlMappings() {
    return [
      ['get', "/", this.test_root], 
    ]
  }

  test_root=(request)=> {
    Console.success("You got root! '/'");
  }

});
