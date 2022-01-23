//The code exicutes after a webpage loaads, it can effect and manipulate the contents of the webpage of a website

console.log("Chrome exntention on");

let filenames = [
    "Cactus.jpg", // image from https://unsplash.com/s/photos/cactus-plant
    "cow.jpg", // image from https://unsplash.com/images/animals/cow
    "Rock.jpg",// image from https://www.amazon.ca/Outdoor-Essentials-Faux-Rock-Small/dp/B00NOP1MVO
    "Tree.jpg",// image from https://pixabay.com/vectors/search/tree/
  ];
  
let imgs = document.getElementsByTagName('img');

for (imgElt of imgs) {
    let r = Math.floor(Math.random() * filenames.length);
    let file = 'photos/' + filenames[r];
    let url = chrome.extension.getURL(file);
    imgElt.src = url;
    console.log(url);
}