import {Providers, Tests} from "./app/config";
import {Suite} from "./app/suite";

let TestSuite = new Suite(Providers, Tests);

TestSuite.run();

