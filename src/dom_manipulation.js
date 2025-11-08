console.log("We'll work on DOM here!");

function accessElementById() {
    const title = document.getElementById("mainTitle");
    console.log(title.textContent);
    title.style.color = "green";
}

accessElementById();

function accessElementsByClass() {
    const items = document.getElementsByClassName("menuItem");
    console.log(items);
    for (let item of items){
        // item.style.fontWeight = "bold";
        // item.style.color = "blue";
        item.style.cssText = "color:blue; font-weight:bold;"
    }
}

accessElementsByClass();

function accessElementsByTag() {
    const divs = document.getElementsByTagName('div');
    console.log(divs.length);
    divs[1].style.background = "yellow";
}

accessElementsByTag();

function accessElementsByQuerySelector() {
    // Get by ID
    const ann = document.querySelector("#announcement");

    // Get by Class Name
    const info = document.querySelector(".info");

    // Get by tag and class name
    const specialInfo = document.querySelector("p.special");

    console.log(specialInfo);
}

accessElementsByQuerySelector();

function accessElementsByQuerySelectorAll(){
    menuItems = document.querySelectorAll(".menuItem");

    menuItems.forEach(item => {
        item.style.textTransform = "uppercase";
    });
}

accessElementsByQuerySelectorAll();

function changeUsingTextContent(){
    // Get that element
    let msg = document.getElementById("message");

    // Get the text
    console.log(msg.textContent);
    // Change the text
    msg.textContent = "Value changed from JS!!!";
    console.log(msg.textContent);
}

changeUsingTextContent();

function changeUsingInnerHTML(){
    // Get that element
    let out = document.getElementById("output");

    // Change it
    out.innerHTML = "<i>Score:</i>";
}

// Commented because it clashes with the function below: changeInputValue
// changeUsingInnerHTML();


function changeInputValue(){
    // Get the element
    let score = document.getElementById('score');

    console.log(score.value);

    // Change the value
    score.value = "90";

    document.getElementById('result').textContent = "Your score: " + score.value;
    // Avoid any possibility of XSS (Cross-Site Scripting) 
    // document.getElementById('result').innerHTML = "<script>alert('hello');</script>";
}

changeInputValue();

function usingClassList(){
    // Get that element
    let headline = document.getElementById("headline");

    // Add class to the element
    headline.classList.add('featured');

    // To remove a class
    let desc = document.getElementById('desc');
    desc.classList.remove('faded');

    // To check if a class exists
    console.log(headline.classList.contains('bigTitle'));

    // Toggle
    headline.classList.toggle('bigTitle');

    // To check if a class exists
    console.log(headline.classList.contains('bigTitle'));
}

usingClassList();