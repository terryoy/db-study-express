import colors from "colors/safe";

const Logger = {
  log: function() {
    var args = Array.prototype.slice.call(arguments);
    console.log.apply(console, args);
  },
  warn: function() {
    var args = Array.prototype.slice.call(arguments);
    console.warn.apply(console, args);
  },
  error: function() {
    var args = Array.prototype.slice.call(arguments);
    console.error.apply(console, args);
  },
  console: (...props) => {
    console.log(...props);
  }
}

export const Console = new class {

  constructor() {
    this.setTheme();
  }

  setTheme() {
    colors.setTheme({
      silly: "rainbow",
      log: "grey",
      highlight: "white",
      warn: "yellow",
      error: "red",
      success: "green",
    });
  }

  log(...args) {
    console.log(colors.log(...args));
  }

  success(...args) {
    console.log(colors.success(...args));
  }

  warn(...args) {
    console.log(colors.warn(...args));
  }

  error(...args) {
    console.log(colors.error(...args));
  }
  
  highlight(...args) {
    console.log(colors.highlight(...args));
  }  

  silly(...args) {
    console.log(colors.silly(...args));
  }
 
};


export default Logger;
