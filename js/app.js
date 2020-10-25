import { Bicycle, store } from "./utilis/products/Bicycle";


const productList = document.querySelector("#list-products");

const priceDown = document.querySelector(".price-down");
const priceUp = document.querySelector(".price-up");

// Bicycle.prototype.renderCardToDom(Bicycle.prototype.filterByPrice(store));
// Bicycle.prototype.renderCardToDom(store);
function cleanProductList(list){
    list.innerHTML = ""
}

Bicycle.prototype.renderCardToDom(store);

priceDown.addEventListener("click", (e)=>{
    cleanProductList(productList)
    Bicycle.prototype.renderCardToDom(Bicycle.prototype.filterPriceDown(store));
});

priceUp.addEventListener("click", (e)=>{
    cleanProductList(productList)
    Bicycle.prototype.renderCardToDom(Bicycle.prototype.filterPriceUp(store));
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