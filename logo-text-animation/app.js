let text = document.querySelector(".main");
let content = text.textContent;
let splitText = content.split("");
text.textContent = "";
for (let i = 0; i < splitText.length; i++) {
  text.innerHTML += "<span>" + splitText[i] + "</span>";
}

let char = 0;
let timer = setInterval(onTick, 50);

function onTick() {
  let span = document.querySelectorAll("span")[char];
  span.classList.add("fade");
  char++;
  if (char === splitText.length) {
    complate();
    return;
  }
}

function complate() {
  clearInterval(timer);
  timer = null;
}
