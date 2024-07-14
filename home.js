async function fetchProducts() {
    let cardContainer = document.querySelector('.card_container');
    let url = 'https://fakestoreapi.com/products';

    try {
        let response = await fetch(url);
        let products = await response.json();
        
        let productCards = products.map((product) => {
            return `
                <div class="card">
                    <div class="card_img">
                        <a href="#">
                            <img src="${product.image}">
                        </a>
                        <div class="wish_icon">
                            <i class="lar la-heart"></i>
                        </div>
                        <div class="cart_icon">
                            <i class="las la-cart-plus"></i>
                        </div>
                    </div>
                    <div class="card_details">
                        <div class="name_card">
                            <a href="#">${product.title}</a>
                        </div>
                        <div class="price_card">
                            <p>$ ${product.price} <span class="mrp">MRP: $${product.price*20}</span></p>
                        </div>
                    </div>
                </div>`;
        }).join('');

        cardContainer.innerHTML = productCards;
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}

// Call the async function to fetch and display the products
fetchProducts();


const exploreSlide = document.querySelector('.explore_slide');
const cards = document.querySelectorAll('.explore_card');
const leftArrow = document.querySelector('.left_arrow');
const rightArrow = document.querySelector('.right_arrow');

let currentIndex = 0;

function updateArrows() {
    if (currentIndex === 0) {
        leftArrow.classList.add('disabled');
        leftArrow.style.display = 'none';
    } else {
        leftArrow.classList.remove('disabled');
        leftArrow.style.display = 'block';
    }

    if (currentIndex >= cards.length - 3) {
        rightArrow.classList.add('disabled');
        rightArrow.style.display = 'none';
    } else {
        rightArrow.classList.remove('disabled');
        rightArrow.style.display = 'block';
    }
}

rightArrow.addEventListener('click', () => {
    if (currentIndex < cards.length - 3) {
        currentIndex++;
        exploreSlide.style.transform = `translateX(-${currentIndex * (cards[0].clientWidth + 20)}px)`;
        updateArrows();
    }
});

leftArrow.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        exploreSlide.style.transform = `translateX(-${currentIndex * (cards[0].clientWidth + 20)}px)`;
        updateArrows();
    }
});

updateArrows();


// menu bar on small screen
const menu = document.querySelector('#menu_icon')
const menu_btn = document.querySelector('.menu-button')
const sidebar = document.querySelector('.small-display')
    menu_btn.addEventListener('mouseover',function(){
        sidebar.style.display = 'flex';
    });
    menu.addEventListener('mouseover',function(){
        sidebar.style.display = 'flex';
    });
menu_btn.addEventListener('mouseleave',function(){
    sidebar.style.display = 'none';
});
menu.addEventListener('mouseleave',function(){
    sidebar.style.display = 'none';
});



function closeMenu(){
    const sidebar = document.querySelector('.small-display')
    sidebar.style.display = 'none'
}
