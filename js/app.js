// http://localhost:3000/

let allproducts = []
const filter = {
    searchitem: ''
}
let filter_arry=[]

const search = document.getElementById('search')
const display = document.querySelector('.products__container')
// const search_btn = document.getElementById('search-btn')








class PRODUCTS{
    async getProduct() {
        await axios.get("http://localhost:3000/items").then(res => {
            allproducts = res.data
        })
            .catch(err => console.log(err));
        console.log(allproducts)
    }
    filterProducts(_products , _filter) {
        filter_arry = _products.filter((item) => {
            return item.title.toLowerCase().includes(_filter.searchitem.toLowerCase());
        });
        console.log(filter_arry);
    }


}



class UI{
    display_products(product){
        let result = ''
        product.forEach((item) => {
            result += `<div class="products__item">
            <img src="assets/images/q.jpg" alt="">
            <div class="products__info">
                <p class="product__name">
                    iphone 13 promax
                </p>
                <p class="product__price">
                    120000000
                </p>
            </div>
        </div>`

        })
        display.innerHTML = result;
    }

}

class LOCALSTORAGE{

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


// search_btn.addEventListener('click', (e)=>{
//     const getproduct = new PRODUCTS();
//     getproduct.getProduct();
//     getproduct.filterProducts(allproducts , filter);
// })




