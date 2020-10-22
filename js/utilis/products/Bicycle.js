
import { Product } from "../Product"
import { imgUrl1, imgUrl2, imgUrl3 } from "../imgs";
import { desc1, desc2 } from "../desc";



export class Bicycle extends Product {
    constructor({ name, model, price, desc, imgUrl }) {
        super(name, model, price);
        this.desc = desc;
        this.imgUrl = imgUrl;
    }
    renderCardToDom() {
        for (let bicycle of store) {
            let item = store.sort((a, b) => a.price - b.price);
            const productList = document.querySelector("#list-products");
            const html = `
    <div class="column list-products is-one-quarter- is-mobile">
    <div class="card">
        <div class="card-image">
            <figure class="image is-4by3">
                <img src=${bicycle.imgUrl} alt="Placeholder image">
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
            <div class="content">${bicycle.desc}</div>
            <div>
                <b class="box has-text-danger">${bicycle.price ? bicycle.price : "Out of Stock"} €</b>
            </div>

            <div class="mt-5">
                <button class="button is-danger">Add To Cart</button>
            </div>
        </div>
    </div>
</div>
`;
            productList.innerHTML += html;
        }


    }
}

const newBicycle = new Bicycle({ name: "Kross", model: "Batavus", price: 1500, desc: desc1, imgUrl: imgUrl1 });
const newBicycle2 = new Bicycle({ name: "Merida", model: "Mierda", price: 1200, desc: desc1, imgUrl: imgUrl2 });
const newBicycle3 = new Bicycle({ name: "Romet", model: "m400", price: 1000, desc: desc1, imgUrl: imgUrl3 });

const store = [newBicycle, newBicycle2, newBicycle3];

