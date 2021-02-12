const productData = [
    {
      id: 'High heels-1',
      name: 'High heels - rose',
      price: '€30.99',
      image: 'images/highHeels-1-main.jpg',
      extraInfo: `
      Shoe tip: Round <br>
      Heel type: Funnel heel, platform toe <br>
      Detail: Elasticated<br>
      Shoe fastener: Buckle/bow<br>
      Pattern: Plain<br>
      Heel height: 3.5 inch (Size 4)<br>
      Platform height: 0.5 inch (Size 4)<br>`
    },
    {
    id: 'High heels-2',
    name: 'High heels - Black',
    price: '€23.99',
    image: 'images/highHeels-2-main.jpg',
    extraInfo: `
    Shoe tip: Pointed<br>
    Heel type: Block heel<br>
    Shoe fastener: Buckle/bow<br>
    Pattern: Plain<br>
    Details: Elasticated<br>
    Heel height: 3.0 " (Size 4)<br>`
    },
    {
    id: 'Espadrilles-1',
    name: 'Espadrilles - black',
    price: '€44.99',
    image: 'images/sandal-1-main.jpg',
    extraInfo: `
    Shoe tip: Open<br>
    Heel type: Wedge<br>
    Fastening: Buckle/bow<br>
    Pattern: Plain<br>
    Details: Elasticated<br>
    Heel height: 3.0 " (Size 4)<br>`
    },
    {
    id: 'Espadrilles-2',
    name: 'Espadrilles - light pink',
    price: '€23.99',
    image: 'images/sandal-2-main.jpg',
    extraInfo: `
    Shoe tip: Round<br>
    Heel type: Wedge, platform toe<br>
    Fastening: Laces<br>
    Pattern: Marl<br>
    Heel height: 3.5 " (Size 4)<br>
    Platform height: 1.0 " (Size 4)<br> `
    },
    {
    id: 'Trainer-1',
    name: 'Trainer - pale mauve',
    price: '€69.99',
    image: 'images/trainers-1-main.jpg',
    extraInfo: `
    Shoe tip: Round<br>
    Heel type: Flat<br>
    Fastening: Laces<br>
    Pattern: Plain<br>`
    },
    {
    id: 'Trainer-2',
    name: 'Trainer - black',
    price: '€64.99',
    image: 'images/trainers-2-main.jpg',
    extraInfo: `
    Shoe tip: Round<br>
    Heel type: Flat<br>
    Detail: Decorative seams<br>
    Shoe fastener: Laces<br>`
    },
    {
    id: 'Lace-ups-1',
    name: 'Lace-ups - black',
    price: '€25.99',
    image: 'images/laceup-1-main.jpg',
    extraInfo: `
    Shoe tip: Round<br>
    Heel type: Flat<br>
    Fastening: Laces<br>
    Shoe fastener: Laces<br>
    Pattern: Polka dot<br>
    Details: Broguing<br>`
    },
    {
    id: 'Lace-ups-2',
    name: 'Lace-ups - light blue',
    price: '€43.99',
    image: 'images/laceup-2-main.jpg',
    extraInfo: `
    Shoe tip: Round<br>
    Heel type: Flat<br>
    Fastening: Laces<br>
    Shoe fastener: Laces<br>
    Pattern: Plain<br>`
    },
    {
    id: 'Slip-ons-1',
    name: 'Slip-ons - beige',
    price: '€10.99',
    image: 'images/slipon-1-main.jpg',
    extraInfo: `
    Shoe tip: Round<br>
    Heel type: Flat<br>
    Fastening: Slip on<br>
    Pattern: Marl<br>
    Details: Elasticated<br>`
    },
    {
    id: 'Slip-ons-2',
    name: 'Slip-ons - yellow/sherry',
    price: '€43.99',
    image: 'images/slipon-2-main.jpg',
    extraInfo: `
    Shoe tip: Round<br>
    Heel type: Flat<br>
    Fastening: Slip on<br>
    Pattern: Plain<br>
    Details: Cut-outs, elasticated<br>`
    },
]


/* ....product details.... */

function createProductItem(product) {
 
    return `
        <div class="product-detailsView">
            <img class="product-image" src="${product.image}"  width="30%/>
            <h4 class="product-name">${product.name}</h4>
            <p class="product-price">${product.price}</p>
            <h3>Produst Details:</h3>
            <p class="product-extraInfo">${product.extraInfo}</p>
        </div>
        <button  class="back-button" onclick="goBack()">Back</button>`;
}


function showProductDetails(id) {
    const product = productData.find(productElement => productElement.id === id);
    const body = document.querySelector('body');
    body.innerHTML = createProductItem(product)
}


function goBack() {
    window.history.go();
}






/* ....cart... */

if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    let removeCartItemButtons = document.getElementsByClassName('btn-danger')
    for (let i = 0; i < removeCartItemButtons.length; i++) {
        let button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }

    let quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (let i = 0; i < quantityInputs.length; i++) {
        let input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

    let addToCartButtons = document.getElementsByClassName('shop-item-button')
    for (let i = 0; i < addToCartButtons.length; i++) {
        let button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }

    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
}

function purchaseClicked() {
    alert('Thank you for your purchase')
    let cartItems = document.getElementsByClassName('cart-items')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
}

function removeCartItem(event) {
    let buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

function quantityChanged(event) {
    let input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}

function addToCartClicked(event) {
    let button = event.target
    let shopItem = button.parentElement.parentElement
    let title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
    let price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
    let imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
    addItemToCart(title, price, imageSrc)
    updateCartTotal()
}

function addItemToCart(title, price, imageSrc) {
    let cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    let cartItems = document.getElementsByClassName('cart-items')[0]
    let cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    for (let i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('This item is already added to the cart')
            return
        }
    }
    let cartRowContents = `
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger" type="button">REMOVE</button>
        </div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}

function updateCartTotal() {
    let cartItemContainer = document.getElementsByClassName('cart-items')[0]
    let cartRows = cartItemContainer.getElementsByClassName('cart-row')
    let total = 0
    for (let i = 0; i < cartRows.length; i++) {
        let cartRow = cartRows[i]
        let priceElement = cartRow.getElementsByClassName('cart-price')[0]
        let quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        let price = parseFloat(priceElement.innerText.replace('€', ''))
        let quantity = quantityElement.value
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = '€' + total
}