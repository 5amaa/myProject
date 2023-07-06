// ----------------------------cart---------------
const cartIcon =document.querySelector("#cart-icon")
const cart =document.querySelector(".cart")
const closeCart =document.querySelector("#cart-close")

cartIcon.addEventListener("click", ()=>{
    cart.classList.add("active");
})

closeCart.addEventListener("click", ()=>{
    cart.classList.remove ("active");
})

if(document.readyState =="loading"){
    document.addEventListener('DOMContentLoaded',star);
}else{
    start();
}

function star(){
addEvents();

}

function update(){
    addEvents();
    updateTotal();

}


function addEvents(){
    let cartRemove_btn =document.querySelectorAll('.cart-remove');
    console.log(cartRemove_btn);
    cartRemove_btn.forEach((btn) =>{
        btn.addEventListener("click",handle_removeCartItem);
    });
    
    let cartQuantity_inputs = document.querySelectorAll('.cart-quantity');
    cartQuantity_inputs.forEach(input => {
        input.addEventListener("change", handle_changeItemQuantity);
    });

    let addCart_btns = document.querySelectorAll(".add-cart");
    addCart_btns.forEach((btn)=>{
        btn.addEventListener("click",handle_addCartItem);
    });
   
    const buy_btn = document.querySelector(".btn-buy");
    buy_btn.addEventListener("click", handle_buyOrder);

}





let itemAdded = []

function handle_addCartItem(){
    let product = this.parentElement;
    let title = product.querySelector(".product-title").innerHTML;
    let price = product.querySelector(".product-price").innerHTML;
    let imgSrc = product.querySelector(".slider-img").src;
    console.log( title , price, imgSrc );

    let newToAdd ={
        title , price, imgSrc,
    };

    if(itemAdded.find((el) => el.title == newToAdd.title)){
        alert("this Item Already Exist");
        return;
    }else{
        itemAdded.push(newToAdd);
    }




    let cartBoxElement = cartBoxComponent(title , price, imgSrc);
    let newNode = document.createElement("div");
    newNode.innerHTML = cartBoxElement;
    const cartContent = cart.querySelector(".cart-content");
    cartContent.appendChild(newNode);

    update();
}




function handle_removeCartItem(){
    this.parentElement.remove();
    itemAdded = itemAdded.filter(el=> el.title != this.parentElement.querySelector('.cart-product-title').innerHTML);


    update();
}

function handle_changeItemQuantity(){
    if(isNaN(this.value) || this.value < 1){
        this.value =1;
    } 
    this.value = Math.floor(this.value); 
    update();
}

function handle_buyOrder(){
    if (itemAdded.length <= 0){
        alert("There is no items in the cart");
        return;
    }
    const cartContent = cart.querySelector(".cart-content");
    cartContent.innerHTML = "";
    alert("your order placed successfully ");
    itemAdded = [];
    update();
}




function updateTotal(){
    let catBoxes = document.querySelectorAll(".cart-box");
    const totalElement = cart.querySelector(".total-price");
    let total = 0;
    catBoxes.forEach((cartBox) =>{
        let priceElement = cartBox.querySelector(".cart-price");
        let price = parseFloat(priceElement.innerHTML.replace("$", ""));
        let quantity = cartBox.querySelector(".cart-quantity").value;
        total += price * quantity;

    });
     
    total = total.toFixed(2);

    totalElement.innerHTML = "$" + total;
}

function cartBoxComponent(title , price, imgSrc){
    return `
    <div class="cart-box">
        <img src=${imgSrc} alt="" class="cart-img">
        <div class="detail-box">
            <div class="cart-product-title">${title}</div>
            <div class="cart-price">${price}</div>
            <input type="number" value="1" class="cart-quantity">
        </div>
        <i class="fa-solid fa-trash-can cart-remove"></i>
    
    </div>`

}


















// ---------------SliderShow-----------------


var slideIndex = 1;
showSlides(slideIndex);

function plusSlide(n){
    showSlides(slideIndex += n);
}

function currentSlide(n){
    showSlides(slideIndex = n );
}

function showSlides(n){
    var i;
    var slides= document.getElementsByClassName("mySlide");
    
    if (n > slides.length){slideIndex = 1}
    if( n < 1){slideIndex = slides.length}
    for( i = 0; i< slides.length; i++){
        slides[i].style.display = "none";
    }
   
    slides[slideIndex - 1].style.display = "block";
   
}


var slideIndex2 =0;
showSlidess();
function showSlidess(){
    var i;
    var slidess = document.getElementsByClassName("mySlide");
    for(i =0; i < slidess.length; i++){
        slidess[i].style.display= "none";
    }
    slideIndex2 ++;
    if(slideIndex2 > slidess.length){
        slideIndex2 = 1;
    }
    slidess[slideIndex2 - 1].style.display= "block";
    setTimeout(showSlidess,3000);
}


// -----------------Filter------------------

window.onload= function(){
    showClothes();
}

function showClothes(){
   
    var cloThes = document.getElementsByClassName("clothes")[0];
    var bAgs = document.getElementsByClassName("bags")[0];
    var shOes = document.getElementsByClassName("shoes")[0];
    var hAts = document.getElementsByClassName("hats")[0];
    
    cloThes.style.display = "flex";
    bAgs.style.display="none";
    shOes.style.display="none";
    hAts.style.display="none";
}

function showBags(){
   
    var cloThes = document.getElementsByClassName("clothes")[0];
    var bAgs = document.getElementsByClassName("bags")[0];
    var shOes = document.getElementsByClassName("shoes")[0];
    var hAts = document.getElementsByClassName("hats")[0];
    
    bAgs.style.display = "flex";
    cloThes.style.display="none";
    shOes.style.display="none";
    hAts.style.display="none";

}

function showShoes(){
   
    var cloThes = document.getElementsByClassName("clothes")[0];
    var bAgs = document.getElementsByClassName("bags")[0];
    var shOes = document.getElementsByClassName("shoes")[0];
    var hAts = document.getElementsByClassName("hats")[0];
    
    shOes.style.display = "flex";
    cloThes.style.display="none";
    bAgs.style.display="none";
    hAts.style.display="none";

}

function showHats(){
   
    var cloThes = document.getElementsByClassName("clothes")[0];
    var bAgs = document.getElementsByClassName("bags")[0];
    var shOes = document.getElementsByClassName("shoes")[0];
    var hAts = document.getElementsByClassName("hats")[0];
    
    hAts.style.display = "flex";
    cloThes.style.display="none";
    shOes.style.display="none";
    bAgs.style.display="none";

}


// --------------------------------------------------

// @media (max-width : 1080px){
//     .nav{padding: 15px;}
// }
