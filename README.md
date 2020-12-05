# modify-ticket
 A very simple script / Chrome extension that helps you to bypass Supreme's debug protection.
1. Cd into the the modify_ticket_script folder and run "node app.js". Make sure to npm i before that.
2. You should now see 2 files. Grab the ticket.js file and upload it to a webserver of your choice. I just used Discord.
3. Copy the link and head into modify_ticket_extension folder and open the "background.js" file.
4. Replace "MODIFIED TICKET HERE" with the link you copied in step 3. I didn't hardcode the modified script to make sure you can also do this for updated versions of ticket.
5. You are ready to go! Head over to chrome://extensions/ in your Chrome browser and drag and drop the modify_ticket_extension folder in there.
Note: It might be a little bit buggy and throw errors in the console (I did this within like 5min lol) but you can ignore them. 
