const productsEl = document.querySelector('.products');
const cartItems = document.querySelector('.cart-items');
const subtotal = document.querySelector('.subtotal');
const totalItems = document.querySelector('.total-items-in-car');

const renderProducts = () => {
    products.forEach((product) => { 
		  productsEl.innerHTML += `
			<div class="item">
          <div class="item-container">
            <div class="item-img">
              <img src="${product.imgSrc}" alt="${product.name}" />
            </div>
            <div class="desc">
              <h2>${product.name}</h2>
              <h2><small>$</small>${product.price}</h2>
              <p>
                ${product.description}
              </p>
            </div>
            <div class="add-to-wishlist">
              <img src="./icons/heart.png" alt="add to wish list" />
            </div>
            <div class="add-to-cart">
              <img src="./icons/bag-plus.png" alt="add to cart" />
            </div>
          </div>
        </div>`
	}) 
}

renderProducts();

/* Cart Array: 
=> La variable cart nos deja extraer de la memoria local del browser cierta info para consultar después
=> localStorage:
=> Lleva un or con el objetivo vacío o llenado previamente 
método @method getItem()
*/
let cart = JSON.parse(localStorage.getItem('CART')) || []; 
updateCart(); // Llama a la función updateCart, creada más abajo 

/*Función para agregar elementos al carrito
@function addToCart
@param Tiene id como parámetro que viene del template del producto, le envía el id al momento del click
*/

function addToCart(){
  // Primero revisa si el producto ya está en el carrito 
  if (cart.some((item) => item.id == id)){
    changeNumberOfUnits('plus', id) // Si ya existe le suma 1
  } else {
    // Si todavía no existe agrega un nuevo objeto al arreglo de cart 
    const item = products.find((product) => product.id === id);
    cart.push({
      ...item, 
      numberOfUnits:1
    });
    updateCart();
  }
}

// Update Car
function updateCart(){
  renderCartItems(); // Llama a la función render cart al momento de re actualizar
  renderSubtotal(); // Revisa el subtotal 
  /* Guarda el carrito en local storage
  guarda el elemento en memoria 
  set del item y get del item 
  JSON.stringify lo pasa a texto para poder guardarlo
  */
  localStorage.setItem('CART', JSON.stringify(cart))
}

/* Calcular y render del subtotal 
=> @function renderSubtotal 
Dos variables para almacenar el total y el subtotal 
*/
function renderSubtotal(){
  let totalPrice = 0; 
  let totalItems =0; 
  // Loop sobre el arreglo llenado previamente con el push del addToCart()
  cart.forEach((item) => {
    totalPrice += item.price * item.numberOfUnits;
    totalItems += item.numberOfUnits
  });
  subtotalEl.innerHTML = `Subtotal (${totalItems} items): ${totalPrice.toFixed(2)}`;
  totalItemsInCartEl.innerHTML = totalItems;
}

/* render cart items
@function renderCartItems
@params no lleva ningún parámetro
*/
function renderCartItems(){
  // mismo render que se le aplicó al HTML de productos
  cartItems.innerHTML = ''; // Clear cart element 
  // Nuevo template por cada elemento que llena el espacio de la lista del carrito 
  cart.forEach((item) => {
    `<div class="cart-item">
      <div class="item-info"  onclick="removeItemFromCart(${item.id})">
        <img src="${item.imgSrc}" alt="${item.name}" />
        <h4>${item.name}</h4>
      </div>
      <div class="unit-price">
        <small>$</small>${item.price}
      </div>
    <div class="units">
      <div class="btn minus" onclick="changeNumberOfUnits('minus', ${item.id})>-</div>
      <div class="number">${item.numberOfUnits}</div>
      <div class="btn plus" onclick="changeNumberOfUnits('plus', ${item.id})>+</div>
    </div>
    </div>`;
  });
}

// remove item from cart
function removeItemFromCart(id){
  // Para remover del arreglo llenado previamente 
  cart = cart.filter((item) => item.id !== id);
  // Se actualiza 
  updateCart();
}

/* Change number of units for an item 
=> @function changeNumberOfUnits 
=> @(action) suma o resta 
=> @param id del producto 
 */

function changeNumberOfUnits(action, id){
  // Copia del arreglo que ya se tiene 
  cart = cart.map((item ) => {
    let numberOfUnits =  item.numberOfUnits;
    // Validación si es igual al id  que llega del que se está iterando 
    if (item.id === id){
      // Se disminuye o se aumentan las unidades 
      if (action === 'minus' && numberOfUnits > 1){
        numberOfUnits -=1
      } else if (action === 'plus' && numberOfUnits  < item.instock){
        numberOfUnits +=1;
      }
    }
    return {
      ...item, 
      numberOfUnits
    };
  });
  // Update del cart para modificarlo de nuevo 
  updateCart();
}