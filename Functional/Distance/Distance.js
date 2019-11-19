/**
 * @module: Function Algorithm
 * @file :distance.js
 * @Fomulae :The formulae to calculate distance = sqrt(x*x + y*y). Use Math.power function.
 * @author: Girish Sagar
 * @version:6.11.3
 * @since:13-Nov-2019
 */

const access = require("../Distance/Distancebl");
const input = require("readline-sync");
let xaxis = input.questionFloat("Enter the distance of origin x-axis ");
let yaxis = input.questionFloat("enter the diatance of origin y-axis ");
access.distance(xaxis, yaxis);
