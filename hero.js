const Hero = function(name, health, favFood){
  this.name = name;
  this.health = health;
  this.favFood = favFood;
  this.tasks = [];
}

Hero.prototype.sayName = function(){
  return `Hi my name is ${this.name}`;
}



module.exports = Hero;
