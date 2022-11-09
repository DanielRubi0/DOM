let container_products = document.getElementById("container_products");

let productos = [
    {
        id: "1",
        name: "pro_1",
        price: "10",
        store_name: "store1",
    },
    {
        id: "2",
        name: "pro_2",
        price: "20",
        store_name: "store2",
    },
    {
        id: "3",
        name: "pro_3",
        price: "30",
        store_name: "store3",
    },
    {
        id: "4",
        name: "pro_4",
        price: "40",
        store_name: "store4",
    },
];

productos.forEach((data) => {
    let product = document.createElement("div");
    container_products.appendChild(product);

    product.innerHTML = `
        <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="..." alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">${data.name}</h5>
                        <p class="card-text">${data.store_name}
                        </p>
                        <a href="#" class="btn btn-primary">${data.price}</a>
                </div>
        </div>
    `;
});
