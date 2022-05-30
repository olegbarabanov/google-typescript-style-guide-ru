import "./style.css";

const menu = document.querySelector("nav.selectmenu-list");
const headers = document
  .querySelector(".markdown-body")
  .querySelectorAll("h1, h2, h3, h4");

// building a menu
menu.innerHTML = Array.from(headers)
  .map((element) => {
    const url = element.querySelector("a").href;
    return `<a class="selectmenu-item linked-${element.tagName}" href="${url}">
              <span>${element.textContent.trim()}</span>
            </a>`;
  })
  .join("");

// set the same link in the header as "h1"
document.querySelector('.title-link').href = document.querySelector(".markdown-body h1 a").href;