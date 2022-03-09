let about = document.querySelector("#about");
let cov1 = document.querySelector(".aboutcov");
let ex = document.querySelector(".fa-times");
about.addEventListener("click", function () {
  cov1.style.transform = "translate(0)";
});
ex.addEventListener("click", function () {
  cov1.style.transform = "translate(-100%)";
});
