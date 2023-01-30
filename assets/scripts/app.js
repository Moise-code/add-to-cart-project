// we are going to create class to hold the reusable object codes

class Product {
  title = 'Default';// we started with default since it will keep on changing
  imageUrl;
  price;
  description;

  // method 
  
}



const productList = {
  products : [

    // for eample lets use our class here
   new Product()
     
    {
    title : 'this is a pillow',
    imageUrl : 'https://www.google.com/search?q=image&tbm=isch&ved=2ahUKEwjrn8OLqe_8AhUDa6QEHWnJCVIQ2-cCegQIABAA&oq=image&gs_lcp=CgNpbWcQAzIECAAQQzIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDoECCMQJzoICAAQgAQQsQM6BggAEAUQHlDZD1jpJWCaKGgDcAB4AIAB1gWIAe8akgEJMy00LjMuMC4xmAEAoAEBqgELZ3dzLXdpei1pbWfAAQE&sclient=img&ei=i7vXY6uuDIPWkdUP6ZKnkAU&bih=746&biw=1536&rlz=1C1GCEJ_enRW1039RW1039#imgrc=JoR7JNzGko0S6M',
      price: 20,
    description : 'this is the original pillow case'
    },
    {
    title : 'this is a rayban',
    imageUrl : 'https://www.google.com/search?q=image&tbm=isch&ved=2ahUKEwjrn8OLqe_8AhUDa6QEHWnJCVIQ2-cCegQIABAA&oq=image&gs_lcp=CgNpbWcQAzIECAAQQzIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDoECCMQJzoICAAQgAQQsQM6BggAEAUQHlDZD1jpJWCaKGgDcAB4AIAB1gWIAe8akgEJMy00LjMuMC4xmAEAoAEBqgELZ3dzLXdpei1pbWfAAQE&sclient=img&ei=i7vXY6uuDIPWkdUP6ZKnkAU&bih=746&biw=1536&rlz=1C1GCEJ_enRW1039RW1039#imgrc=JoR7JNzGko0S6M',
      price: 20,
    description : 'This is the original sunglasses'
    }
    
  ],
  
    render(){
     const renderBook = document.querySelector('#app');
     const prodList = document.createElement('ul');
     prodList.className = 'product-list';
     for(const prod of this.products){
      const prodElement = document.createElement('li')
      prodElement.className = 'product-item';
      prodElement.innerHTML = `
      
      <div>
      <img src = "${prod.imageUrl}" alt = "${prod.title}>
      <div class = "product-item__content">
      <h2>${prod.title}</h2>
      <h3>\$ ${prod.price}</h3>
      <p>${prod.description}</p>
      <button>Add to Cart</button>
      </div>
      </div>
      
      `
      prodList.append(prodElement);
      
     }
     renderBook.append(prodList)
    }
}
productList.render();