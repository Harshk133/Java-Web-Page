console.log("script is loaded in the page.html\n thank you!");
const codePlayground = document.getElementById("appendedContent");
const changeRequire = document.querySelector(".jsAppendedcontent");
const container = document.querySelector(".container");
let frame = document.getElementsByTagName("iframe");

// 
let styleCursor = "cursor: pointer;";
let stylePadding = "padding: 10px 0;";

document.getElementById("home").addEventListener("click", (e)=>{
    e.preventDefault();
    // location.href = 'trial.html';
    // if(changeRequire.style.background != 'yellow'){
    //     changeRequire.style.background = 'yellow';
    // }
    // else{
    //     changeRequire.style.background = 'white';
    // }
    homeHTML = `
        <div class="container" style="
        max-width: 65%;
        margin: auto;
        color: black;
        background-color: rgb(228, 203, 228);
        display: flex;
        ">
            <div class="tray" style="
            height: 90vh;
            width: 30%;
            border: 1px solid red;
            ">
                <ol style="
                box-sizing: border-box;
                padding: 40px;
                overflow-y: auto;
                ">
                    <li style="${stylePadding} ${styleCursor}"><a href="trial.html">Introduction</a></li>
                    <li style="${stylePadding} ${styleCursor}">Why Java programming Language</li>
                </ol>
            </div>
            <article>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique laudantium facilis repellendus praesentium nobis eligendi corporis quia illum explicabo, omnis aliquam reiciendis. Debitis exercitationem, dolorum animi sequi iusto quos rerum.</p>
            </article>
        </div>
    `;
    changeRequire.innerHTML = homeHTML;
})

document.getElementById("documentation").addEventListener("click", (e)=>{
    e.preventDefault();
    documentationHTML = `
        <h1 style="
        margin: auto;
        width: 40%;
        color: blue;
        ">
            This is Documentation page!
        </h1>`;
    // changeRequire.append(html);
    changeRequire.innerHTML = documentationHTML;

})
