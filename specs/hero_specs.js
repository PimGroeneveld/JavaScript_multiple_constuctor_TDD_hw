const assert = require("assert");
const Hero = require("../hero.js");
const Task = require("../task.js");
const Food = require("../food.js");

let hero;

const task1 = new Task("Medium", "Do soon", "Gold", true);
const task2 = new Task("My servant can do it", "Nah", "Low", false);

describe("Hero", function(){

  beforeEach(function(){
    hero = new Hero("Bean", 70, "Royal Banquet") //does food need to be added here? Not sure how to get the replenishValue of the food to add up to the health of the Hero
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

  it("hero should be able to eat food", function(){
    const actual = hero.eat();
    assert.strictEqual(actual, "Bean ate a Royal Banquet")
  });

  // it("Hero health should go up when eats something", function(){
  //   // hero.eat(favFood);
  //   const actual = hero.healthUp();
  //   assert.strictEqual(actual, 80)
  // }); //not working yet


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

    // it("tasks should be sortable", function(){
    //
    //
    // });
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
