/**
 * @module: Function Algorithm.
 * @input :hat takes two double command-line arguments t and v and prints the wind chill. Us
 * @logic :National Weather Service defines the effective temperature (the wind chill) to be:
 * @Formula :35.4 +0.6215t+(0.4275t -35.75)v16);
 * @condition :the formula is not valid if t is larger than 50 in absolute value or
 * if v is larger than 120 or less than 3
 * @author: Girish Sagar
 * @version:6.11.3
 * @since:14-Nov-2019
 */
const aceess = require('../Windchill/windchillBl');
let input = require("readline-sync");
let temp = input.questionFloat("Enter the temperature (in Fahrenheit)");
let speed = input.questionFloat("Enter the wind speed (Miles per hous) ");
aceess.windchil(temp, speed);
