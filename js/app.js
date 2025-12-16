// http://localhost:3000/
// npx json-server db.json

let allproducts = []
let filter_arry=[]
let category_arry = []
const filter = {
    searchitem: ''
}

const search = document.getElementById('search')
const display = document.querySelector('.products__container')
const category_btns = document.querySelectorAll('.filter__btn')








class PRODUCTS{
    async getProduct() {
        await axios.get("http://localhost:3000/items").then(res => {
            allproducts = res.data
        })
            .catch(err => console.log(err));
    }
    filterProducts(_products , _filter) {
        filter_arry = _products.filter((item) => {
            return item.title.toLowerCase().includes(_filter.searchitem.toLowerCase());
        });
    }

    categoryProducts(_products , category) {
        category_arry = _products.filter((item) => {
            return item.class.toLowerCase().includes(category.toLowerCase());
        })
    }
}



class UI{
    display_products(product){
        let result = ''
        product.forEach((item) => {
            result += `<div class="products__item">
            <img src="${item.image}" alt="">
            <div class="products__info">
                <p class="product__name">
                    ${item.title}
                </p>
                <p class="product__price">
                    ${item.price}
                </p>
            </div>
        </div>`

        })
        display.innerHTML = result;
    }


}


const getproduct = new PRODUCTS();
const ui = new UI();


document.addEventListener('DOMContentLoaded',async ()=>{
    await getproduct.getProduct();
    ui.display_products(allproducts);
})

search.addEventListener('input', (e)=>{
    filter.searchitem = e.target.value
    getproduct.filterProducts(allproducts , filter);
    ui.display_products(filter_arry)

})

category_btns.forEach(category => {
    category.addEventListener('click', (e)=>{
        e.preventDefault()
        data_category = e.target.dataset.category;
        getproduct.categoryProducts(allproducts , data_category );
        ui.display_products(category_arry);

    })
})





