const Hero = function(name, health, favFood){
  this.name = name;
  this.health = health;
  this.favFood = favFood;
  this.tasks = [];
}

Hero.prototype.sayName = function(){
  return `Hi my name is ${this.name}`;
}

Hero.prototype.eatFood = function(food){
  if (this.favFood == food.name){
    this.health += food.replenishValue * 1.5;
  } else {
    this.health += food.replenishValue;
  }
}

Hero.prototype.addTask = function(task){
  this.tasks.push(task)
}

Hero.prototype.sortTasks = function(property){
  this.tasks.sort(function(a, b){
    return a[property] - b[property];  //switch to b[prop] - a[prop] for descending order
  });
}

Hero.prototype.getCompleteTasks = function(){  //use filter function
  return this.tasks.filter(task => !task.completed)  // !task. for switch around
}

module.exports = Hero;
