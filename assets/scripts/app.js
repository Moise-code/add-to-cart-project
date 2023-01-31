// we are going to create class to hold the reusable object codes

class Product {
  title;// we started with default since it will keep on changing
  imageUrl;
  price;
  description;

  
  // constructor method it can accept argument to be used in the instance call

  constructor (title, image,desc,price) {
    this.title = title;
    this.imageUrl = image;
    this.description = desc;
    this.price = price
  }
}



class ProductList {
  // here we are going to create a class holding the down products
  products = [

    // for eample lets use our class here and we are going to assign variables to values to the arguments in the constructor
   new Product('this is a pillow','https://www.google.com/search?q=image&tbm=isch&ved=2ahUKEwjrn8OLqe_8AhUDa6QEHWnJCVIQ2-cCegQIABAA&oq=image&gs_lcp=CgNpbWcQAzIECAAQQzIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDoECCMQJzoICAAQgAQQsQM6BggAEAUQHlDZD1jpJWCaKGgDcAB4AIAB1gWIAe8akgEJMy00LjMuMC4xmAEAoAEBqgELZ3dzLXdpei1pbWfAAQE&sclient=img&ei=i7vXY6uuDIPWkdUP6ZKnkAU&bih=746&biw=1536&rlz=1C1GCEJ_enRW1039RW1039#imgrc=JoR7JNzGko0S6M', 'this is the original pillow case', 99),
   // so now that we just recalled our class and assigned the values, we are going then to delete static objects
   new Product('this is a bed-cover','https://www.google.com/search?q=image&tbm=isch&ved=2ahUKEwjrn8OLqe_8AhUDa6QEHWnJCVIQ2-cCegQIABAA&oq=image&gs_lcp=CgNpbWcQAzIECAAQQzIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDoECCMQJzoICAAQgAQQsQM6BggAEAUQHlDZD1jpJWCaKGgDcAB4AIAB1gWIAe8akgEJMy00LjMuMC4xmAEAoAEBqgELZ3dzLXdpei1pbWfAAQE&sclient=img&ei=i7vXY6uuDIPWkdUP6ZKnkAU&bih=746&biw=1536&rlz=1C1GCEJ_enRW1039RW1039#imgrc=JoR7JNzGko0S6M', 'This is among the best bed-covers of all time', 120)
  
    
  ];
  constructor () {} 

  // we are going to add the render object then here.
  render(){
    const prodList = document.createElement('ul');
    prodList.className = 'product-list';
    for(const prod of this.products){
      const productItem = new ProductItem(prod);
      const prodElement = productItem.renderProduct();
      
      prodList.append(prodElement);
      
    }
    return prodList;
  }
}

// now lets create a class to store one item

class ProductItem {
  constructor(product){
   this.product = product;
  }
  
  // add to cart method
  addToCart (){
   App.addProductToCart(this.product);
   
  }
  
  // add render method to render one single product logic
  
  renderProduct (){
    const prodElement = document.createElement('li')
    prodElement.className = 'product-item';
    prodElement.innerHTML = `
    
    <div>
    <img src = "${this.product.imageUrl}" alt = "${this.product.title}>
    <div class = "product-item__content">
    <h2>${this.product.title}</h2>
    <h3>\$ ${this.product.price}</h3>
    <p>${this.product.description}</p>
    <button>Add to Cart</button>
    </div>
    </div>
    
    `;
    // accessing the button
    const addCartButton = prodElement.querySelector('button');
    addCartButton.addEventListener('click', this.addToCart.bind(this));
    return prodElement
  } 
}

class Component {
  createRootElement(tag, cssClasses,attributes){
    
  }
}

// now lets create class for the cart items to the screen

class ShoppingCart {
  items = [];

  set cartItems(value) {
    this.items = value;
    this.totalOutput.innerHTML = `<h2> Total: \$ ${this.totalAmount.toFixed(2)}</h2>`
  }

  get totalAmount() {
    const sum = this.items.reduce((prevValue, curItem)=>{

      return prevValue +  curItem.price;
    }, 0)
    return sum;
  }
  // here lets create addproduct method to add a product in the UI

  addProduct(product) {
    const updatedItems = [...this.items]
    updatedItems.push(product);
    this.cartItems = updatedItems;
  }

  // render method to update the ui
  render(){
    const cartEl = document.createElement('section');
    cartEl.innerHTML = `
    <h2> Total: \$ ${0}</h2>
    <button>Order Now</button>
    `;
    cartEl.className = 'cart';
    // now we are gouing to target the h2 tag by adding a new property to the class
    this.totalOutput = cartEl.querySelector('h2')
    // we are returning it so that whenever we call we append the cartEl to the dom element.
    return cartEl;
  }
}
// now we are going instantiate our productList class


class Shop {
  render () {
    const renderBook = document.querySelector('#app');
    this.cart = new ShoppingCart();
    const cartEl = this.cart.render();
    // lets add a new class called
    const productList = new ProductList();
    const prodListEl = productList.render();
    renderBook.append(cartEl)
    renderBook.append(prodListEl)
  }
}

// creating class holding the whole application

class App {
static init (){
  const shop = new Shop();  
  shop.render();
  this.cart = shop.cart;

}  
static addProductToCart (product){
  this.cart.addProduct(product)
}
}
App.init();
const shop = new Shop();