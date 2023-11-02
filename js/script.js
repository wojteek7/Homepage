console.log("cześć!")

let buttonTheme = document.querySelector(".js-button__theme");
let body = document.querySelector(".body");
let themeName = document.querySelector(".js-themeName")
let buttonDescription = document.querySelector(".js-button__description")
let toggleDescription = document.querySelector(".js-toggleDescription")
let section = document.querySelector(".section")

buttonTheme.addEventListener("click", () => {
    body.classList.toggle("dark");
    themeName.innerText = body.classList.contains("dark") ? "jasny" : "ciemny";
});

buttonDescription.addEventListener("click", () => {
   section.hidden = !section.hidden;
   toggleDescription.innerText = section.classList.toggle("toggleDescription") ? "Pokaż" : "Ukryj";
   
});