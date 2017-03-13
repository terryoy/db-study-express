

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


export default Logger;
