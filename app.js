require("dotenv").config();
var keys = require("./keys.js");
var schedule = require('node-schedule');
var later = require("later");

const accountSid = keys.apikeys.accountSid;
const authToken = keys.apikeys.authToken;

var twilioNumber = keys.apikeys.TWILIO_PHONE_NUMBER;
var recipientNumber = keys.apikeys.recipientNumber;


// require the Twilio module and create a REST client
const client = require('twilio')(accountSid, authToken);

function sendText(recipient, tNumber, randomText) {

	client.messages
  .create({
    to: recipient,
    from: tNumber,
    body: randomText
  })
  .then(message => console.log(message.sid));
  	// console.log("success");
}


// sendText("Hey it's Eric");


var textOne = new schedule.RecurrenceRule();
textOne.dayOfWeek = [0, new schedule.Range(1, 6)];
textOne.hour = 11;
textOne.minute =04;


var a = schedule.scheduleJob(textOne, function(){
  console.log('Today is recognized by Rebecca Black!');
  sendText(recipientNumber, twilioNumber, "Hey how are you");
});


var textTwo = new schedule.RecurrenceRule();
textTwo.dayOfWeek = [0, new schedule.Range(1, 6)];
textTwo.hour = 13;
textTwo.minute =35;


var b = schedule.scheduleJob(textTwo, function(){
  console.log('Today is recognized by Rebecca Black!');
  sendText(recipientNumber, twilioNumber, "I'm Ok");
});


var textThree = new schedule.RecurrenceRule();
textThree.dayOfWeek = [0, new schedule.Range(1, 6)];
textThree.hour = 16;
textThree.minute =05;


var c = schedule.scheduleJob(textThree, function(){
  console.log('Today is recognized by Rebecca Black!');
  sendText(recipientNumber, twilioNumber,"I'm Ok");
});


// sendText(recipientNumber, twilioNumber, "Please tell me this finally works");

// console.log(typeof twilioNumber)










