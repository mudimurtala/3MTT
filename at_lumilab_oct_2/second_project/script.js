
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const paragraph = document.createElement("p");
paragraph.textContent = "Hey I'm red!";
// paragraph.style.color = "red";
paragraph.style.cssText = "color: red;";

container.appendChild(paragraph);

const header3 = document.createElement("h3");
header3.textContent = "I'm a blue h3!";
header3.style.cssText = "color: blue;";

container.appendChild(header3);

const myDiv = document.createElement("div");
myDiv.style.backgroundColor = "pink";
myDiv.style.border = "3px solid black";

const theH1 = document.createElement("h1");
theH1.textContent = "I'm in a div";
myDiv.appendChild(theH1);

const newPara = document.createElement("p");
newPara.textContent = "ME TOO!";
myDiv.appendChild(newPara);

container.appendChild(myDiv);