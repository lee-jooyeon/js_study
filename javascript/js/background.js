const images = ["01.png", "02.png", "03.png"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage); // 자바스크립트에서 만든 태그를 html에 넣을 때