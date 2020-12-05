
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
          return {redirectUrl: "MODIFIED TICKET HERE" };
  },
  {urls: ["*://www.supremenewyork.com/*.js"]},
  ["blocking"]);
