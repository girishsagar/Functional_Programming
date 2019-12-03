/**
 * Execution default cmd>node.js
 * @descriptionCreate a JSON file having Inventory Details for Rice,Pulses
 * and Wheats with properties name, weight, price per kg.
 */
/**
 * Object oriented logic
 * @class:Entity
 * @description:defining an 3 private varible of an products through
 * @constructor:name,weight and price
 */
class Entity {
  constructor(name, weight, price) {
    this.name = name;
    this.weight = weight;
    this.price = price;
  }
  /**
   * @function:total()
   * @description:totaling all the details of an product price and quantity
   */
  total = () => {
    return this.weight * this.price;
  };
}
/**
 * @class:Rice
 * @description:extending the property from the parent class Entity through "Super" (Hierarchical) inheritance
 */
class Rice extends Entity {
  constructor(name, weight, price) {
    super(name, weight, price);
  }
}
/**
 * @class:Pulse
 * @description:extending the property from the parent class Entity through "Super" (Hierarchical) inheritance
 */
class Pulses extends Entity {
  constructor(name, weight, price) {
    super(name, weight, price);
  }
}
/**
 * @class:Wheats
 * @description:extending the property from the parent class Entity through "Super" (Hierarchical) inheritance
 */
class Wheats extends Entity {
  constructor(name, weight, price) {
    super(name, weight, price);
  }
}
(module.exports = Rice), Pulses, Wheats;
