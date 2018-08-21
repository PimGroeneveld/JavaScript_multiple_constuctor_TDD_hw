const assert = require("assert");
const Hero = require("../hero.js");
const Task = require("../task.js");
const Food = require("../food.js");

let hero;

describe("Hero", function(){

  beforeEach(function(){
    hero = new Hero("Bean", 70, "Royal Banquet")
  });

  it("should have a name", function(){
    const actual = hero.name;
    assert.strictEqual(actual, 'Bean');
  });

  it("should have health", function(){
    const actual = hero.health;
    assert.strictEqual(actual, 70);
  });

  it("should have favourite food", function(){
    const actual = hero.favFood;
    assert.strictEqual(actual, 'Royal Banquet');
  });

  it("should be able to say it's name", function(){
    //arrange
    //act
    const actual = hero.sayName();
    //assert
    assert.strictEqual(actual, "Hi my name is Bean")
  });

  describe("Tasks", function(){

    beforeEach(function(){
      task = new Task("Epic", "High", "Love", false)
    });

    it("hero should have tasks", function(){
      const actual = hero.tasks;
      assert.deepStrictEqual(actual, [])
    });

    it("task should have difficulty level", function(){
      const actual = task.difficulty;
      assert.strictEqual(actual, "Epic")
    });

    it("task should have urgency level", function(){
      const actual = task.urgency;
      assert.strictEqual(actual, "High")
    });

    it("task should have reward", function(){
      const actual = task.reward;
      assert.strictEqual(actual, "Love")
    });

    it("task should be able to be marked as completed", function(){
      const actual = task.markAsCompleted();
      assert.strictEqual(actual, true)
    });
  });

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

})
