const container = document.getElementById("container");
const navBar = document.getElementById("nav");




const navigateTo = (url) =>{
    history.pushState({}, "", url);
    loadPage();
}

const route = (event) =>{
    event - event || window.event;
    event.preventDefault();

    if(event.target.parentNode.id == "cart"){
        navigateTo(event.target.parentNode.parentNode.href);
    }
    if(event.target.parentNode.id == "cart-route"){
        navigateTo(event.target.parentNode.href)
    }
    else{
        navigateTo(event.target.href);
    }
}

const generateNavbarHTML = () =>{   return `
    <div id="nav">
        <div class="container flex shadow-md">
            <a href="/" data-link >Shopping Cart</a>
            <a href="/cart" data-link id="cart-route" onclick="route()">
                <div id="cart">
                    <i class="fa-solid fa-cart-shopping"></i>
                    <span class="cartItem" id="nav-cart-item"> 0 </span>
                </div>
            </a>
        </div>
    </div>
    `;
}

window.route = route;

const loadNavbar = () =>{
    container.innerHTML = generateNavbarHTML();
}
const loadPage = () =>{
    loadNavbar();
}

window.onpopstate = loadPage;

document.addEventListener("DOMContentLoaded", ()=>{
    document.body.addEventListener('click',(e)=>{
        e.preventDefault();
        navigateTo(e.target.href);
    })
    
    loadPage();
})

