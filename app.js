require("dotenv").config();
var keys = require("./keys.js");
var schedule = require('node-schedule');
var later = require("later");

const accountSid = keys.apikeys.accountSid;
const authToken = keys.apikeys.authToken;



// require the Twilio module and create a REST client
const client = require('twilio')(accountSid, authToken);

function sendText(randomText) {

	client.messages
  .create({
    to: '+17145880860',
    from: '+14807711460',
    body: randomText
  })
  .then(message => console.log(message.sid));

}


// sendText("Hey it's Eric");


var textOne = new schedule.RecurrenceRule();
textOne.dayOfWeek = [0, new schedule.Range(1, 6)];
textOne.hour = 22;
textOne.minute =04;


var a = schedule.scheduleJob(textOne, function(){
  console.log('Today is recognized by Rebecca Black!');
  sendText("Hey how are you");
});


var textTwo = new schedule.RecurrenceRule();
textTwo.dayOfWeek = [0, new schedule.Range(1, 6)];
textTwo.hour = 22;
textTwo.minute =05;


var b = schedule.scheduleJob(textTwo, function(){
  console.log('Today is recognized by Rebecca Black!');
  sendText("I'm Ok");
});











