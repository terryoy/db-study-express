import Logger from "./utils/log";

class Suite {

  constructor(providers, tests) {
    
    this.providers = providers;
    this.tests = tests;

    this.setup();
  }

  setup() {
    let dbnames = this._getListNames(this.providers).join(", ");
    let testNames = this._getListNames(this.tests).join(", ");

    Logger.console('[Suite] Test Suite initialize:');
    Logger.console('[Suite] DB providers:', dbnames);
    Logger.console('[Suite] Test suites: [' + testNames + "]");

  }

  _getListNames(obj) {
    let names = [];
    for (var name in obj) {
      names.push(name);
    }
    
    return names;
  }


  run() {


  }

}

export {Suite};
