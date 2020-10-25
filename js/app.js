require("./navigation");
import { Bicycle } from "./utilis/products/Bicycle";
import { imgUrl1, imgUrl2, imgUrl3 } from "./utilis/imgs";
import { desc1, desc2 } from "./utilis/desc";


const newBicycle = new Bicycle({ name: "Kross", model: "Batavus", price: 1100, desc: desc1, imgUrl: imgUrl1 });
const newBicycle2 = new Bicycle({ name: "Merida", model: "Mierda", price: 2300, desc: desc2, imgUrl: imgUrl2 });
const newBicycle3 = new Bicycle({ name: "Romet", model: "m400", price: 3600, desc: desc1, imgUrl: imgUrl3 });

const store = [newBicycle, newBicycle2, newBicycle3]

const productList = document.querySelector("#list-products");
//Dom_Elements
const priceDown = document.querySelector(".price-down");
const priceUp = document.querySelector(".price-up");
const form = document.querySelector(".form");
const msgUser = document.querySelector(".notification");
// Getting value of two inputs price
let lowestNum = document.querySelector(".lowVal");
let highestNum = document.querySelector(".highVal");
//Helper function to clean Dom
function cleanProductList(list) {
    list.innerHTML = ""
}


const msgBox = () => {
    console.log("function is works");
    msgUser.classList.remove("is-invisible");
    setTimeout(() => { msgUser.classList.add("is-invisible") }, 2500);
}
// Load cards to dom
Bicycle.prototype.renderCardToDom(store);


priceDown.addEventListener("click", (e) => {
    cleanProductList(productList)
    Bicycle.prototype.renderCardToDom(Bicycle.prototype.filterPriceDown(store, Number(lowestNum.value), Number(highestNum.value)));
});

priceUp.addEventListener("click", (e) => {
    cleanProductList(productList)
    Bicycle.prototype.renderCardToDom(Bicycle.prototype.filterPriceUp(store, Number(lowestNum.value), Number(highestNum.value)));
})

form.addEventListener("submit", (e) => {
    e.preventDefault()

    cleanProductList(productList)
    Bicycle.prototype.renderCardToDom(Bicycle.prototype.filterBetweenPrice(store, Number(lowestNum.value), Number(highestNum.value), msgBox));
})




const modalImg = document.querySelector(".modal");
const modalImgSrc = document.querySelector("#modal-img");
const modalClose = document.querySelector(".modal-close");
const bgClose = document.querySelector(".modal-background");

modalClose.addEventListener("click", () =>
    modalImg.classList.remove("is-active")
);
bgClose.addEventListener("click", () =>
    modalImg.classList.remove("is-active")
);

productList.addEventListener("click", (e) => {
    if (e.target.className === "imgX") {
        console.log(`"${e.target.src}"`);
        modalImg.classList.add("is-active");
        document.querySelector(".modal-img").src = e.target.src;
    }

});

export { productList }