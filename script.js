const products=[
{id:1,name:"Pack Premium",desc:"Kit completo para acelerar seu projeto digital.",price:29.90,emoji:"✦"},
{id:2,name:"Método Pro",desc:"Material estratégico para quem quer evoluir mais rápido.",price:49.90,emoji:"⚡"},
{id:3,name:"Kit Elite",desc:"Coleção premium com recursos extras e bônus.",price:79.90,emoji:"♛"}
];
let cart=JSON.parse(localStorage.getItem("ld-cart")||"[]");
const money=v=>v.toLocaleString("pt-BR",{style:"currency",currency:"BRL"});
const grid=document.getElementById("productGrid");
grid.innerHTML=products.map(p=>`<article class="product reveal visible"><div class="product-cover">${p.emoji} ${p.name}</div><h3>${p.name}</h3><p>${p.desc}</p><div class="product-bottom"><span class="product-price">${money(p.price)}</span><button class="btn primary add" onclick="addToCart(${p.id})">Comprar</button></div></article>`).join("");
function save(){localStorage.setItem("ld-cart",JSON.stringify(cart));renderCart()}
function addToCart(id){const p=products.find(x=>x.id===id);cart.push(p);save();openModal("cartModal")}
function renderCart(){document.getElementById("cartCount").textContent=cart.length;const box=document.getElementById("cartItems");box.innerHTML=cart.length?cart.map((p,i)=>`<div class="cart-row"><span>${p.name}<br><small>${money(p.price)}</small></span><button onclick="removeItem(${i})">remover</button></div>`).join(""):"<p class='muted'>Seu carrinho está vazio.</p>";document.getElementById("cartTotal").textContent=money(cart.reduce((s,p)=>s+p.price,0))}
function removeItem(i){cart.splice(i,1);save()}
function openModal(id){document.getElementById(id).classList.add("open")}
function closeModals(){document.querySelectorAll(".modal").forEach(m=>m.classList.remove("open"))}
document.getElementById("openCart").onclick=()=>{renderCart();openModal("cartModal")};
document.querySelectorAll("[data-close]").forEach(b=>b.onclick=closeModals);
document.querySelectorAll(".modal").forEach(m=>m.addEventListener("click",e=>{if(e.target===m)closeModals()}));
document.getElementById("checkoutBtn").onclick=()=>{if(!cart.length)return alert("Adicione um produto ao carrinho.");closeModals();openModal("checkoutModal")};
document.getElementById("checkoutForm").onsubmit=e=>{e.preventDefault();alert("Pedido criado!\n\nEste é um checkout demonstrativo. Para receber pagamentos reais, conecte um gateway como Mercado Pago ou Stripe.");cart=[];save();closeModals()};
const io=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&e.target.classList.add("visible")),{threshold:.12});
document.querySelectorAll(".reveal").forEach(e=>io.observe(e));
document.querySelectorAll(".magnetic").forEach(btn=>btn.addEventListener("mousemove",e=>{const r=btn.getBoundingClientRect();btn.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.08}px,${(e.clientY-r.top-r.height/2)*.08-3}px)`}),btn.addEventListener("mouseleave",()=>btn.style.transform=""));
renderCart();