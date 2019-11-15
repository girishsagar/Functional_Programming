/**
 * @module: Function Algorithm
 * @file :distance.js
 * @Fomulae :The formulae to calculate distance = sqrt(x*x + y*y). Use Math.power function.
 * @author: Girish Sagar
 * @version:6.11.3
 * @since:13-Nov-2019
 */

const access = require("../Distance/Distancebl");
let input = require("readline-sync");
let x = input.questionFloat("Enter the distance of x ");
let y = input.questionFloat("enter the diatance of y ");
access.distance(x, y);
