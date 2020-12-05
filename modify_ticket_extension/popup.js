document.addEventListener('DOMContentLoaded', function () {
    var link = document.getElementById("link");
    link.addEventListener("click",function () {
        chrome.tabs.create({active: true, url: "https://twitter.com/casualhyped"});
    },false)
});