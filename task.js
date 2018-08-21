const Task = function(difficulty, urgency, reward, completed){
  this.difficulty = difficulty;
  this.urgency = urgency;
  this.reward = reward;
  this.completed = completed;
}

Task.prototype.markAsCompleted = function(){
  if (this.completed == false){
  return !this.completed;}
}

module.exports = Task;
