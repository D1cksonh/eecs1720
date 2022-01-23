/*
This codes that loads when you launch chrome, and it is anticipating for any events that is accociated with the acitivty of usisng chrome as a piece of software itself
So you can make something like "If you press a button on the chrome broswer, it will exicute the code"
*/

console.log('background running');

chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab) {
    let msg = {
        txt: "hello"
    }
    chrome.tabs.sendMessage(tab.id, msg);
}