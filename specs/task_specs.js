const assert = require("assert");
const Task = require("../task.js");

let task;

describe("Tasks", function(){

  beforeEach(function(){
    task = new Task("Epic", 90, "Love", false)
  });

  it("task should have difficulty level", function(){
    const actual = task.difficulty;
    assert.strictEqual(actual, "Epic")
  });

  it("task should have urgency level", function(){
    const actual = task.urgency;
    assert.strictEqual(actual, 90)
  });

  it("task should have reward", function(){
    const actual = task.reward;
    assert.strictEqual(actual, "Love")
  });

  it("task should start as uncompleted", function(){
    const actual = task.completed;
    assert.strictEqual(actual, false)
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
