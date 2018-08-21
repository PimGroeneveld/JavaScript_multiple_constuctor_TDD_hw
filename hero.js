const Hero = function(name, health, favFood, food){
  this.name = name;
  this.health = health;
  this.favFood = favFood;
  this.food = food;
  this.tasks = [];
}

Hero.prototype.sayName = function(){
  return `Hi my name is ${this.name}`;
}

Hero.prototype.eat = function(){
  return `${this.name} ate a ${this.favFood}`;
}

Hero.prototype.healthUp = function(food){
  Hero.prototype.eat(food);
  return this.health += this.food;
}  //not working



module.exports = Hero;
