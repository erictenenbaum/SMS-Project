# SMS-Project

This is a cron based SMS app that will send pre-written text messages to the intended recipient at predetermined times.

This was built leveraging the Twilio API and Scheduler NPM package. 

In order to run this, you need Twilio API keyes, a Twilio phone number, and a recipient number that has been verified by Twilio

Lastly, this app was deployed to Heroku, however, because Heroku goes to sleep after a certain amount of time, the cron scheduler doesn't stay active. So I would need to find a paid hosting site to really utilize this app. 