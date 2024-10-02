
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