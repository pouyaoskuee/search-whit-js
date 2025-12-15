// http://localhost:3000/



document.addEventListener('DOMContentLoaded', ()=>{
    axios.get("http://localhost:3000/items")
        .then(res => console.log(res.data))
        .catch(err => console.log(err));
})