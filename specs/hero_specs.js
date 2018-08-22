const assert = require("assert");
const Hero = require("../hero.js");
const Task = require("../task.js");
const Food = require("../food.js");

let hero;  // makes Hero available for the full describe

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

  it("hero should have tasks", function(){
    const actual = hero.tasks;
    assert.deepStrictEqual(actual, [])
  });

  it("should be able to say it's name", function(){
    //arrange
    //act
    const actual = hero.sayName();
    //assert
    assert.strictEqual(actual, "Hi my name is Bean")
  });

  it("should be able to sort task by difficulty", function(){
    let task1 = new Task(50, 80, "Gold", true);
    let task2 = new Task(20, 10, "None", false);
    let task3 = new Task(10, 30, "Gold coins", false);
    hero.addTask(task1);
    hero.addTask(task2);
    hero.addTask(task3);
    hero.sortTasks("difficulty");
    assert.deepStrictEqual(hero.tasks, [task3, task2, task1]);
  });

  it("should be able to sort by urgency", function(){
    let task1 = new Task(50, 80, "Gold", true);
    let task2 = new Task(20, 10, "None", false);
    let task3 = new Task(10, 30, "Gold coins", false);
    hero.addTask(task1);
    hero.addTask(task2);
    hero.addTask(task3);
    hero.sortTasks("urgency");
    assert.deepStrictEqual(hero.tasks, [task2, task3, task1]);
  });

  it("should be able to view complete tasks", function(){
    let task1 = new Task(50, 80, "Gold", true);
    let task2 = new Task(20, 10, "None", false);
    let task3 = new Task(10, 30, "Gold coins", false);
    hero.addTask(task1);
    hero.addTask(task2);
    hero.addTask(task3);
    task3.markAsCompleted();
    const actual = hero.getCompleteTasks();
    assert.deepStrictEqual(actual, [task2, task3]);
  });

  xit("should be able to view incomplete tasks", function(){
    //same but switched

  });

  describe("Hero and food", function(){

    it("hero should be able to eat food and increase health by consuming food", function(){
      const food = new Food("Banana", 5)
      hero.eatFood(food);   // because passed in here, hero.js has access to food.replenishValue
      const actual = hero.health;
      assert.strictEqual(actual, 75)
    });

    it("should increase health by 1,5 times when fav food", function(){
      const food = new Food("Royal Banquet", 10)
      hero.eatFood(food);
      const actual = hero.health;
      assert.strictEqual(actual, 85)
    });


  });
})
