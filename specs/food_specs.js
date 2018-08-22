const assert = require("assert");
const Food = require("../food.js");

let food; 

describe("Food", function(){

  beforeEach(function(){
    food = new Food("Royal Banquet", 10)
  });

  it("food should have name", function(){
    const actual = food.name;
    assert.strictEqual(actual, "Royal Banquet")
  });

  it("food should have replenishment value", function(){
    const actual = food.replenishValue;
    assert.strictEqual(actual, 10)
  });


});
