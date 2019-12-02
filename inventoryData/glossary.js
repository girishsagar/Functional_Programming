/**
 * Execution default cmd>node.js
 * @descriptionCreate a JSON file having Inventory Details for Rice,Pulses
 * and Wheats with properties name, weight, price per kg.
 */
//Object oriented logic//
class Entity {
  constructor(name, weight, price) {
      this.name = name;
      this.weight = weight;
      this.price = price;
  }
  total() {
      return this.weight * this.price;
  }
}
class Rice extends Entity {
  constructor(name, weight, price) {        
      super(name, weight, price)
  }
}
class Pulses extends Entity {
  constructor(name, weight, price) {
      super(name, weight, price)
  }
}
class Wheats extends Entity {
  constructor(name, weight, price) {
      super(name, weight, price)
  }
}
module.exports=Rice, Pulses, Wheats;