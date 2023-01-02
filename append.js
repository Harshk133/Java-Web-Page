console.log("script is loaded in the trial.html\n thank you!")
let styleSheet = document.createElement("link");
styleSheet.setAttribute("rel", "stylesheet");
styleSheet.setAttribute("href", "style.css");
let head = document.head;
head.appendChild(styleSheet);