function login() {

    const username = document.getElementById("username").value;

    const password = document.getElementById("password").value;

    fetch("http://localhost:8080/login", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            username: username,
            password: password
        })

    })

        .then(response => response.text())

        .then(data => {

            if (data === "Login Successful") {

                alert("Login Successful");

                window.location.href = "dashboard.html";

            } else {

                alert("Invalid Username or Password");
            }

        });

}

function loadTotalProducts() {

    fetch("http://localhost:8080/products/count")

        .then(response => response.json())

        .then(data => {

            document.getElementById("totalProducts").innerText =
                data.totalProducts;

        });

}

function loadLowStockProducts() {

    fetch("http://localhost:8080/products/low-stock")

        .then(response => response.json())

        .then(data => {

            document.getElementById("lowStockCount").innerText =
                data.length;

        });

}

function loadTotalValue() {

    fetch("http://localhost:8080/products/total-value")

        .then(response => response.json())

        .then(data => {

            document.getElementById("totalValue").innerText =
                data;

        });

}

function loadRecentProducts() {

    fetch("http://localhost:8080/products/recent")

        .then(response => response.json())

        .then(data => {

            document.getElementById("recentProducts").innerText =
                data.length;

        });

}

function addProduct() {

    const name = document.getElementById("name").value;

    const price = document.getElementById("price").value;

    const quantity = document.getElementById("quantity").value;

    fetch("http://localhost:8080/products", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({

            name: name,
            price: price,
            quantity: quantity

        })

    })

        .then(response => response.json())

        .then(data => {

            alert("Product Added Successfully");

            loadProducts();

        });

}

function loadProducts() {

    fetch("http://localhost:8080/products")

        .then(response => response.json())

        .then(data => {

            displayProducts(data);

        });

}

function displayProducts(products) {

    let output = "";

    document.getElementById("productCount").innerText =
        products.length;

    if (products.length === 0) {

        output = `

        <tr>

            <td colspan="5"
                class="text-center text-danger fw-bold">

                No Products Found

            </td>

        </tr>

        `;

    }

    products.forEach(product => {

        let quantityBadge = "";

        if (product.quantity < 3) {

            quantityBadge =
                `<span class="badge bg-danger">
                    ${product.quantity}
                 </span>`;

        } else if (product.quantity < 10) {

            quantityBadge =
                `<span class="badge bg-warning text-dark">
                    ${product.quantity}
                 </span>`;

        } else {

            quantityBadge =
                `<span class="badge bg-success">
                    ${product.quantity}
                 </span>`;
        }

        let rowClass =
            product.quantity < 3 ? "table-danger" : "";

        output += `

        <tr class="${rowClass}">

            <td>${product.id}</td>

            <td>📦 ${product.name}</td>

            <td>${product.price}</td>

            <td>${quantityBadge}</td>

            <td>

                <button class="btn btn-danger btn-sm me-2"
                        onclick="deleteProduct(${product.id})">

                    Delete

                </button>

                <button class="btn btn-primary btn-sm"
                        onclick="updateProduct(${product.id},
                                               '${product.name}',
                                               ${product.price},
                                               ${product.quantity})">

                    Edit

                </button>

            </td>

        </tr>

        `;

    });

    document.getElementById("productList").innerHTML = output;

}

function deleteProduct(id) {

    fetch(`http://localhost:8080/products/${id}`, {

        method: "DELETE"

    })

        .then(response => response.text())

        .then(data => {

            alert(data);

            loadProducts();

        });

}

function updateProduct(id, oldName, oldPrice, oldQuantity) {

    const name = prompt("Enter Product Name", oldName);

    const price = prompt("Enter Product Price", oldPrice);

    const quantity = prompt("Enter Product Quantity", oldQuantity);

    fetch(`http://localhost:8080/products/${id}`, {

        method: "PUT",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({

            name: name,
            price: price,
            quantity: quantity

        })

    })

        .then(response => response.json())

        .then(data => {

            alert("Product Updated Successfully");

            loadProducts();

        });

}

function logout() {

    window.location.href = "login.html";
}

function searchProducts() {

    const searchValue =
        document.getElementById("searchInput").value;

    fetch("http://localhost:8080/products/search?name=" + searchValue)

        .then(response => response.json())

        .then(data => {

            displayProducts(data);

        });

}