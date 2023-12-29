var count = 1;

function showSlide1() {
  if (count < 6) {
    count++;
    img1.setAttribute("src", `images/${count}.jpg`);
  } else {
    count = 1;
    img1.setAttribute("src", `images/${count}.jpg`);
  }
}

function showSlide2() {
  if (count > 1) {
    count--;
    img1.setAttribute("src", `images/${count}.jpg`);
  } else {
    count = 6;
    img1.setAttribute("src", `images/${count}.jpg`);
  }
}
var myInterval;

function play() {
  myInterval = setInterval(function () {
    showSlide1();
  }, 1000);
}
function stop() {
  clearInterval(myInterval);
}

var acc = document.getElementById("acc");
var per = document.getElementById("Perfume");
var all = document.getElementById("all");
function showfokka() {
  per.classList.remove("hidden");
  acc.classList.remove("hidden");
  all.classList.remove("hidden");
}
function showall() {
  per.classList.remove("hidden");
  acc.classList.remove("hidden");
  all.classList.add("hidden");
}

function showperfume() {
  per.classList.remove("hidden");
  acc.classList.add("hidden");
  all.classList.add("hidden");
}

function showacc() {
  acc.classList.remove("hidden");
  per.classList.add("hidden");
  all.classList.add("hidden");
}
