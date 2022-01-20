//The code exicutes after a webpage loaads, it can effect and manipulate the contents of the webpage of a website

console.log("Chrome exntention go");

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse){
    console.log(message.txt);
    
    if(message.txt == "hello") { // if button extention is pressed, all of the paragraphs turn to purple 
        let paragraphs = document.getElementsByTagName('p');
        
        for (elt of paragraphs) {
        elt.style['background-color'] = '#FF00FF';
        }
    }
}