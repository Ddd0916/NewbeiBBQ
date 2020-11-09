let carts = document.querySelectorAll('.add-cart');

let products = [
    {
        name: 'Grey Tshirt',
        tag: 'smallindex05',
        price: 15,
        inCart: 0
    },
    {
        name: 'Grey Hoddie',
        tag: 'smallindex09',
        price: 25,
        inCart: 0
    },
    {
        name: 'Black Tshirt',
        tag: 'smallindex10',
        price: 35,
        inCart: 0
    },
    {
        name: 'Black Hoddie',
        tag: 'blackhoddie',
        price: 99,
        inCart: 0
    },
]

for (let i = 0; i < carts.length; i++)
{
    carts[i].addEventListener('click', () =>
    {
        carNumbers(products[i]);
        totalCost(products[i]);
    })
}
function onLoadCartNumber()
{
    let productNumbers = localStorage.getItem('carNumbers');

    if (productNumbers)
    {
        document.querySelector('.navbar_E span').textContent = productNumbers;
    }
}


function carNumbers(product)
{
    
    let productNumbers = localStorage.getItem('carNumbers');
    productNumbers = parseInt(productNumbers);
    
    if (productNumbers)
    {
        localStorage.setItem('carNumbers', productNumbers + 1);
        document.querySelector('.navbar_E span').textContent = productNumbers + 1;
    } else
    {
        localStorage.setItem('carNumbers', 1);
        document.querySelector('.navbar_E span').textContent = 1;
    } 

    setItems(product);
}
function setItems(product)
{
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    
    
    if (cartItems != null)
    {
        if (cartItems[product.tag] == undefined)
        {
            cartItems = {
                ...cartItems,
                [product.tag]:product
            }
       }
        cartItems[product.tag].inCart += 1;
    } else
    {
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
    }
    }
   
    localStorage.setItem("productsInCart", JSON.stringify
        (cartItems));
}
function totalCost(product)
{
    // console.log(product.price);
    let cartCost = localStorage.getItem('totalCost');
    
    console.log("My cartCost is", cartCost);
    console.log(typeof cartCost);

    if (cartCost != null)
    {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost +
            product.price);
    } else
    {
        localStorage.setItem("totalCost", product.price);
    }
}
function displayCart()
{
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    console.log(cartItems)
    let productsInCart = document.querySelector
        (".products");
    let cartCost = localStorage.getItem("totalCost");
    
    console.log(cartItems);
    if (cartItems && productsInCart)
    {
        productsInCart.innerHTML = '';
        Object.values(cartItems).map(item =>
        {
            productsInCart.innerHTML += `
            <div class="product">
                <i class="fas fa-times" id="close"></i>
                
                <img src=".././images/shop-img/${item.tag}.jpg"></img>
                
                <span>${item.name}</span>
            </div>

            <div class="price">$${item.price},00</div>
            <div class="quantity">
            <i class="fas fa-chevron-circle-left" id="left"></i>
            <span>${item.inCart}</span>
            <i class="fas fa-chevron-circle-right"  id="right"></i>
            </div>
            <div class="total">
            ${item.inCart * item.price},00
            
            </div>
                `;
        });
        productsInCart.innerHTML +=  `
        <div class="basketTotalContainer"> 
            <h4 class="basketTotalTitle">
              Basket Total
            </h4>
            <h4 class="basketTotal">
              $${cartCost},00
            </h4>

        </div>
        `      
    }
    $("#close").click(function () {
        $(this).closest(".products").remove();
    })
    
}

onLoadCartNumber();
displayCart();