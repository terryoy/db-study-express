import {ExpressTestCase} from "../utils/test";
import {Console} from "../utils/log";

export default class Root extends ExpressTestCase {
  
  getUrlMappings() {
    return [
      ['get', "/", this.test_root], 
    ]
  }

  test_root=(req, res)=> {
    Console.success("You got root! '/'");
    res.send('DB Study Express!');
  }

};
