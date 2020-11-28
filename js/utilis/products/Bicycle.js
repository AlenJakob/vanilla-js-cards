import { Product } from "../Product"


// import { productList } from "../../app";
const productList = document.querySelector("#list-products");


export class Bicycle extends Product {
    constructor({ name, model, price, desc, imgUrl }) {
        super(name, model, price);
        this.desc = desc;
        this.imgUrl = imgUrl;
    }
    messageBox(domEl, msg) {
        domEl.innerHTML += msg;
    }
    filterPriceDown(store, a, b, msgBox) {
        const filterFromLowestPrice = store.filter(item => Number(a) <= item.price && item.price <= Number(b)).sort((a, b) => a.price - b.price)
        if (filterFromLowestPrice <= 0) {
            msgBox();
            return store;
        } else {
            return filterFromLowestPrice;
        }
    }
    filterPriceUp(store, a, b, msgBox) {

        const filterFromHighestPrice = store.filter(item => Number(a) <= item.price && item.price <= Number(b)).sort((a, b) => b.price - a.price);
        if (filterFromHighestPrice <= 0) {
            msgBox()
            return store;
        } else {
            return filterFromHighestPrice;
        }
    }
    filterBetweenPrice(store, a, b, msgBox) {
        const filteredStore = store.filter(item => Number(a) <= item.price && item.price <= Number(b))

        if (filteredStore.length <= 0) {
            console.log(filteredStore)
            msgBox()
            return store
        } else {
            return filteredStore
        }
    }
    renderCardToDom(store) {
        for (let bicycle of store) {
            const Link = `<a class="has-text-primary" href="#price">Ask for Price</a>`;
            const html = `
    <div class="column list-products is-one-quarter- is-mobile">
    <div class="card">
        <div class="card-image">
            <figure class="image is-4by2">
                <img class="imgX" src=${bicycle.imgUrl} alt="Placeholder image">
            </figure>
        </div>
        <div class="card-content">
            <div class="media">
                <div class="media-left">
                    <figure class="image is-48x48">
                        <img src=${bicycle.imgUrl} alt="Placeholder image">
                    </figure>
                </div>
                <div class="media-content">
                    <p class="title is-4">${bicycle.name}</p>
                    <p class="subtitle is-6">${bicycle.model ? bicycle.model : "no model"} </p>
                </div>
            </div>
            <div class="content">${bicycle.desc.substring(0, 60)}...
           <div class="has-text-right mt-5 mb-5">
          <a >read more</a>
           </div>
            </div>
            <div>
            <b class="box has-text-right has-text-danger">${bicycle.price ? bicycle.price + " €" : Link
                }</b> <div class="mt-5 has-text-right">
              <button class="button is-danger">Add To Cart</button>
          </div>
            </div>
        </div>
    </div>
</div>
`;
            productList.innerHTML += html;
        }


    }
}





