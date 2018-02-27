require("dotenv").config();
var keys = require("./keys.js");

// console.log(keys);
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
textOne.hour = 18;
textOne.minute =45;


var a = schedule.scheduleJob(textOne, function(){  
  sendText(recipientNumber, twilioNumber, "Test 1");
});


var textTwo = new schedule.RecurrenceRule();
textTwo.dayOfWeek = [0, new schedule.Range(1, 6)];
textTwo.hour = 19;
textTwo.minute =35;


var b = schedule.scheduleJob(textTwo, function(){
  sendText(recipientNumber, twilioNumber, "Test 2");
});


var textThree = new schedule.RecurrenceRule();
textThree.dayOfWeek = [0, new schedule.Range(1, 6)];
textThree.hour = 20;
textThree.minute =05;


var c = schedule.scheduleJob(textThree, function(){
  sendText(recipientNumber, twilioNumber,"Test 3");
});


sendText(recipientNumber, twilioNumber, "Initial Test");

// 










