const burgerEl = document.querySelector(".burger");
const menuEl = document.querySelector(".menu");
const bodyEl = document.querySelector("body")
const autoEl = document.querySelector(".auto")
const words = ['Software Engineer', 'Frontend Developer'];

burgerEl.addEventListener("click", ()=> {
    if (menuEl.style.display === "block") {
        menuEl.style.display = "none";
    } else {
        menuEl.style.display = "block"
    }
})

bodyEl.addEventListener("click", ()=> {
    const id = event.target.href
    if (id) {
        menuEl.style.display = "none";
    }
})

let wordsIndex = 0;
let characterIndex = 0;
console.log(characterIndex)
updateText()

function updateText() {
    autoEl.innerText = `${words[wordsIndex].slice(0, characterIndex)}`;
    autoEl.style.color = "var(--demo)";
    characterIndex++;
    if (characterIndex === words[wordsIndex].length + 1) {
        wordsIndex++;
        characterIndex = 0;
    }
    if (wordsIndex === words.length) {
        wordsIndex = 0;
    }
    setTimeout(updateText, 400);
}