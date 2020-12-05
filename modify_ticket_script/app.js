var fs = require('fs');
var axios = require("axios")
let terminalLink = require("terminal-link")

let modTicket = async function () {
    let ticket_script_request = await axios.get("https://www.supremenewyork.com/ticket.js")
    let ticket_script = ticket_script_request.data

    fs.writeFile("original_ticket.js", ticket_script, function (err) {
        if (err) {
            return console.log(err);
        } 

        fs.readFile("original_ticket.js", 'utf8', function (err,data) {
            if (err) {
              return console.log(err);
            }
            var result = data.replace("debugger", "/*debugger*/");
          
            fs.writeFile("ticket.js", result, 'utf8', function (err) {
               if (err) return console.log(err);
            });

            const link = terminalLink('Twitter: @casualhyped', 'https://twitter.com/casualhyped');
            console.log('\x1b[32m%s\x1b[0m', "Done! You can now upload ticket.js to any server you want and use it with the extension.");
            console.log('\x1b[36m%s\x1b[0m', link);
          });
    });
}

modTicket ()