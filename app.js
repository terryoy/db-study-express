import {Providers, Tests, Site} from "./app/config";
import {Suite} from "./app/suite";

let TestSuite = new Suite(Providers, Tests, Site);

TestSuite.run();

