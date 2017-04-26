import fs from "fs";
import glob from "glob";
import path from "path";
import assert from "assert";
import Logger, {Console} from "../utils/log";

export class ExpressTestCase {

  /* initialize url mappings */
  addUrls(app) {
    assert(this.getUrlMappings && typeof this.getUrlMappings === 'function', 'getUrlMapping is not defined! ' + this);

    this.getUrlMappings().forEach((route)=> {
      let [method, url, handler] = route;
      app[method](url, handler);
    });
  }


}


// iterate and load all the test files under the path
export function loadTests(testPath) {
  
  let tests = []; 
  glob.sync( testPath + '/**/*.js' ).forEach( function( file ) {
    let Test = require( path.resolve( file ) ).default;
    tests.push(new Test());
  });

  return tests;
}
