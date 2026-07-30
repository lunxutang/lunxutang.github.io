const map = document.getElementById("time-map");
const des = document.getElementById("time-des");

const ancient = document.getElementById("ancient");

ancient.addEventListener("click", function () {
  map.src = "../Images/Picture1.jpg";
  des.textContent = "This is the First des";
});

const current = document.getElementById("current");

current.addEventListener("click", function () {
  map.src = "../Images/Picture2.jpg";
  des.textContent = "This is a des";
});
