/**
 *  Execution :Default cmd>node.js
 * @file :time.js
 * @purpose :Write a Stopwatch Program for measuring the time that elapses between the start and end clicks
 */
exports.stopwatch = (starttime, stopwatch, elapsedtime) => {
  var d = new Date();
  starttime = d.getMilliseconds();
  console.log(starttime);
  var x = new Date();
  stoptime = x.getMilliseconds();
  console.log(stoptime);
  elapsedtime = stoptime - starttime;
  console.log(elapsedtime);
  return elapsedtime;
};
