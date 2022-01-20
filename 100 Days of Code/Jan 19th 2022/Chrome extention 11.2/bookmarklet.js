(function() {
    console.log("bookmarklet starting");
    let paragraphs = document.getElementsByTagName('p');
    for(let i = 0; i < paragraphs.length; i++) {
        paragraphs[i].innerHTML = 'kitten';
    }
})();


/*
javascript:(function(){alert('Hello')})()
javascript:(function(){let script = document.createElement('script');script.src = 'bookmarklet.js';document.body.appendChild(script);})();
javascript:(function(){let script = document.createElement('script');script.src = 'http://localhost:8000/bookmarklet.js';document.body.appendChild(script);})();
*/