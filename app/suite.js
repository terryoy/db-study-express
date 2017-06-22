import express from "express";
import Logger from "./utils/log";

class Suite {

  constructor(providers, tests, site) {
    
    this.providers = providers;
    this.tests = tests;
    this.site = site;
    this.app = express();

    this.setup();
  }

  setup() {
    let dbnames = this._getPropNames(this.providers).join(", ");
    let testNames = this.tests.map(t=>t.constructor.name).join(", ");

    Logger.console('[Suite] Test Suite initialize:');
    Logger.console('[Suite] DB providers:', dbnames);
    Logger.console('[Suite] Test suites: [' + testNames + "]");

    this.app.set('views', this.site.views);
    this.app.set('view engine', 'pug');

    Object.values(this.providers).forEach((p) => {
      p.init();
    });
  }

  _getPropNames(obj) {
    let names = [];
    for (var name in obj) {
      names.push(name);
    }
    
    return names;
  }


  run() {
    this.tests.forEach((test)=> {
      test.setProviders(this.providers);
      test.addUrls(this.app);
    });

    this.app.listen(this.site.port, ()=> {
      Logger.console('[Suite] server listening at port:', this.site.port);
      Logger.console('[Suite] Press Ctrl+C to stop server.');
    });
  }

}

export {Suite};
