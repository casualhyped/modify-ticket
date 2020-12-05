
/*chrome.webRequest.onBeforeRequest.addListener(
  function() { return {cancel: true}; },
  {
    urls: ["<all_urls>"], // Change this to a more specific pattern
    types: ["script"]
  },
  ["blocking"]
);*/

chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
      if( details.url == "https://www.supremenewyork.com/ticket.js" )
          return {redirectUrl: "https://cdn.discordapp.com/attachments/609199027669696535/784829613763067915/ticket.js" };
  },
  {urls: ["*://www.supremenewyork.com/*.js"]},
  ["blocking"]);