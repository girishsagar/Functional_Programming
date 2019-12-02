/**
 * @Filename :time.js
 * @module: Function Algorithm
 * @input :Start the Stopwatch and End the Stopwatch
 * @logic : Measure the elapsed time between start and end Time
 * @author: Girish Sagar
 * @version:6.11.3
 * @since:15-Nov-2019
 */
const access = require("../Stopwatch/stopwatchBl");
const input = require("readline-sync");
var starttime = input.question("Enter one to start");
var stoptime = input.question("Enter two to stop time ");
access.stopwatch(starttime, stoptime);
