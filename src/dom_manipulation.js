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

