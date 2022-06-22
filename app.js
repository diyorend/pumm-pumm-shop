// NAV
const nav = document.querySelector(".nav-links");
const burger = document.querySelector(".burger");
const links = nav.querySelectorAll("a");

burger.addEventListener("click", () => {
  nav.classList.toggle("nav-open");
  burger.classList.toggle("toggle");
});

nav.addEventListener("click", (e) => {
  nav.classList.toggle("nav-open");
  burger.classList.toggle("toggle");

  if (e.target.parentElement.classList.contains("link")) {
    links.forEach((item) => {
      let li = item.parentElement;
      li.classList.remove("active");
    });
    let li = e.target.parentElement;
    li.classList.add("active");
  }
});

// Color Changer
// inputs
const colorInputs = document.querySelectorAll('input[name="sofa_color"]');
//images
const productImg1 = document.querySelector(".product-img1");
const productImg2 = document.querySelector(".product-img2");
const productImg3 = document.querySelector(".product-img3");
const productImg4 = document.querySelector(".product-img4");
const productImg5 = document.querySelector(".product-img5");

const changeStyle = () => {
  let selectedInput = document.querySelector(
    'input[name="sofa_color"]:checked'
  );
  colorInputs.forEach((input) => {
    input.parentElement.style.outline = "none";
  });
  selectedInput.parentElement.style.outline = "2px solid gray";
};

const changeColor = () => {
  let selected = document.querySelector(
    'input[name="sofa_color"]:checked'
  ).value;

  if (selected === "Dark blue") {
    productImg1.src = "./images/products/product-1Dblue.svg";
    productImg2.src = "./images/products/product-2Dblue.svg";
    productImg3.src = "./images/products/product-3Dblue.svg";
    productImg4.src = "./images/products/product-3Dblue.svg";
    productImg5.src = "./images/products/product-1Dblue.svg";
  } else if (selected === "Light blue") {
    productImg1.src = "./images/products/product-1Lblue.svg";
    productImg2.src = "./images/products/product-2Lblue.svg";
    productImg3.src = "./images/products/product-3Lblue.svg";
    productImg4.src = "./images/products/product-3Lblue.svg";
    productImg5.src = "./images/products/product-1Lblue.svg";
  } else if (selected === "Light gray") {
    productImg1.src = "./images/products/product-1gray.svg";
    productImg2.src = "./images/products/product-2gray.svg";
    productImg3.src = "./images/products/product-3gray.svg";
    productImg4.src = "./images/products/product-3gray.svg";
    productImg5.src = "./images/products/product-1gray.svg";
  } else if (selected === "Green forest") {
    productImg1.src = "./images/products/product-1green.svg";
    productImg2.src = "./images/products/product-2green.svg";
    productImg3.src = "./images/products/product-3green.svg";
    productImg4.src = "./images/products/product-3green.svg";
    productImg5.src = "./images/products/product-1green.svg";
  }

  changeStyle();
};

colorInputs.forEach((colorInput) => {
  colorInput.addEventListener("change", changeColor);
});

changeStyle();

// Footer
// const joinInput = document.querySelector(".join input");
// const joinBtn = document.querySelector(".join button");

// joinBtn.addEventListener("click", (e) => {
//   e.preventDefault();
//   joinInput.value = "";
// });
