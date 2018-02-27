var schedule = require('node-schedule');
var text = require("./app.js");

var rule = new schedule.RecurrenceRule();
rule.dayOfWeek = [0, new schedule.Range(1, 6)];
rule.hour = 18;
rule.minute =14;
 
var j = schedule.scheduleJob(rule, function(){ 
  sendText("Hey how are you");
});




var textOne = new schedule.RecurrenceRule();
textOne.dayOfWeek = [0, new schedule.Range(1, 6)];
textOne.hour = 22;
textOne.minute =01;


var a = schedule.scheduleJob(textOne, function(){  
  sendText("Hey how are you");
});


var textTwo = new schedule.RecurrenceRule();
textTwo.dayOfWeek = [0, new schedule.Range(1, 6)];
textTwo.hour = 22;
textTwo.minute =02;


var b = schedule.scheduleJob(textTwo, function(){ 
  sendText("I'm Ok");
});


// This is comment
