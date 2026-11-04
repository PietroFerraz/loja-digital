import React,{useEffect,useState} from "react";
import {createRoot} from "react-dom/client";
import {ShoppingBag,ArrowRight,ShieldCheck,Zap,Sparkles,Menu,X,ChevronDown,Check,Instagram,Mail} from "lucide-react";
import "./styles.css";

const products=[
 {id:1,title:"Pack Premium",tag:"MAIS VENDIDO",desc:"Kit completo para acelerar seu projeto digital.",price:29.90,old:59.90,icon:"✦",image:"https://images.unsplash.com/photo-1712555000742-84faee058b5e?auto=format&fit=crop&w=1200&q=85"},
 {id:2,title:"Método Pro",tag:"NOVO",desc:"Material estratégico para quem quer evoluir mais rápido.",price:49.90,old:89.90,icon:"⚡",image:"https://images.unsplash.com/photo-1701715098298-31f8e0a1c2b1?auto=format&fit=crop&w=1200&q=85"},
 {id:3,title:"Kit Elite",tag:"EXCLUSIVO",desc:"Coleção premium com recursos extras e bônus.",price:79.90,old:129.90,icon:"♛",image:"https://images.unsplash.com/photo-1721332153282-3be1d7e5c6f5?auto=format&fit=crop&w=1200&q=85"}
];
const money=n=>n.toLocaleString("pt-BR",{style:"currency",currency:"BRL"});

function App(){
 const [cart,setCart]=useState(()=>JSON.parse(localStorage.getItem("ld-cart")||"[]"));
 const [cartOpen,setCartOpen]=useState(false),[menu,setMenu]=useState(false),[checkout,setCheckout]=useState(false);
 useEffect(()=>localStorage.setItem("ld-cart",JSON.stringify(cart)),[cart]);
 const total=cart.reduce((s,p)=>s+p.price,0);
 const add=p=>{setCart(c=>[...c,p]);setCartOpen(true)};
 const remove=i=>setCart(c=>c.filter((_,x)=>x!==i));
 useEffect(()=>{const els=document.querySelectorAll(".reveal");const io=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&e.target.classList.add("show")),{threshold:.08});els.forEach(e=>io.observe(e));return()=>io.disconnect()},[]);
 return <div className="app">
  <div className="noise"/>
  <header className="header">
   <a className="brand" href="#"><span className="brand-mark">LD</span><span>LOJA<span className="pink">DIGITAL</span></span></a>
   <nav className={menu?"nav-mobile":""}><a href="#colecao">Coleção</a><a href="#manifesto">Manifesto</a><a href="#beneficios">Experiência</a><a href="#faq">FAQ</a></nav>
   <div className="header-actions"><button className="icon-btn cart" aria-label="Abrir carrinho" onClick={()=>setCartOpen(true)}><ShoppingBag size={18}/>{cart.length>0&&<b>{cart.length}</b>}</button><button className="menu-btn" onClick={()=>setMenu(!menu)}>{menu?<X/>:<Menu/>}</button></div>
  </header>

  <main>
   <section className="hero">
    <div className="hero-copy reveal">
      <div className="hero-kicker"><span>01</span> LOJA DIGITAL — EDIÇÃO 2026</div>
      <h1>IDEIAS QUE<br/><em>VIRAM</em><br/>PRODUTOS.</h1>
      <p>Produtos digitais escolhidos para quem quer criar melhor, aprender na prática e transformar conhecimento em movimento.</p>
      <div className="hero-buttons"><a href="#colecao" className="btn primary">EXPLORAR COLEÇÃO <ArrowRight size={16}/></a><a href="#manifesto" className="text-link">CONHEÇA A LOJA</a></div>
      <div className="hero-meta"><span>CURADORIA</span><span>ACESSO DIGITAL</span><span>COMPRA SEGURA</span></div>
    </div>
    <div className="hero-visual reveal">
      <div className="hero-image-main"><img src={products[0].image} alt="Coleção digital"/></div>
      <div className="hero-image-small"><img src={products[1].image} alt="Produto digital"/></div>
      <div className="hero-label">NEW<br/><strong>DROP</strong></div>
      <div className="hero-year">20<br/>26</div>
    </div>
   </section>

   <section className="ticker"><span>LOJA DIGITAL</span><i>✦</i><span>CREATE</span><i>✦</i><span>LEARN</span><i>✦</i><span>EVOLVE</span><i>✦</i><span>LOJA DIGITAL</span></section>

   <section id="colecao" className="products">
    <div className="section-title reveal"><div><span className="eyebrow">02 / COLEÇÃO</span><h2>FEITO PARA<br/><span>COMEÇAR.</span></h2></div><p>Uma seleção pequena e intencional. Cada produto existe para resolver um problema e colocar você em movimento.</p></div>
    <div className="product-grid">{products.map((p,i)=><article className="product reveal show" key={p.id}>
      <div className="cover" style={{backgroundImage:`linear-gradient(180deg,rgba(10,7,12,.05),rgba(10,7,12,.92)),url('${p.image}')`}}><span className="product-index">0{i+1}</span><span className="product-tag">{p.tag}</span><span className="cover-label">DIGITAL / 0{i+1}</span></div>
      <div className="product-info"><div className="product-category">PRODUTO DIGITAL</div><h3>{p.title}</h3><p>{p.desc}</p><div className="buy-row"><div><del>{money(p.old)}</del><strong>{money(p.price)}</strong></div><button className="btn small primary" onClick={()=>add(p)}>ADQUIRIR <ArrowRight size={14}/></button></div></div>
    </article>)}</div>
   </section>

   <section id="manifesto" className="manifesto reveal">
    <div className="manifesto-index">03</div>
    <div className="manifesto-copy"><span className="eyebrow">MANIFESTO</span><h2>MENOS<br/><em>RUÍDO.</em><br/>MAIS <span>CRIAÇÃO.</span></h2><p>A Loja Digital nasceu para tirar o excesso do caminho. Sem dezenas de opções, sem páginas confusas. Só produtos úteis, apresentados de forma simples e pensados para você começar.</p><a href="#beneficios" className="text-link">POR QUE COMPRAR AQUI →</a></div>
    <div className="manifesto-photo"><img src={products[2].image} alt="Produto da coleção"/><span>03 / EDITION</span></div>
   </section>

   <section id="beneficios" className="experience reveal">
    <div className="experience-head"><span className="eyebrow">04 / EXPERIÊNCIA</span><h2>UMA COMPRA.<br/><span>SEM COMPLICAÇÃO.</span></h2></div>
    <div className="experience-grid">
      <div><span>01</span><h3>ESCOLHA</h3><p>Encontre o produto que faz sentido para o seu momento.</p></div>
      <div><span>02</span><h3>COMPRE</h3><p>Finalize em poucos passos, com uma experiência objetiva.</p></div>
      <div><span>03</span><h3>COMECE</h3><p>Receba o acesso digital e coloque o conteúdo em prática.</p></div>
    </div>
   </section>

   <section className="quote reveal"><span>“</span><p>O melhor produto não é o que parece mais complexo. É aquele que faz você sair do lugar.</p><small>LOJA DIGITAL / 2026</small></section>

   <section className="big-cta reveal"><span className="eyebrow">05 / SEU PRÓXIMO PASSO</span><h2>PRONTO PARA<br/><em>COMEÇAR?</em></h2><p>Escolha sua próxima ferramenta.</p><a href="#colecao" className="btn primary">VER COLEÇÃO <ArrowRight/></a></section>

   <section id="faq" className="faq reveal"><div className="faq-title"><span className="eyebrow">06 / FAQ</span><h2>DÚVIDAS<br/><span>COMUNS.</span></h2></div>
    <div className="faq-list">{["Como recebo meu produto?","O pagamento é seguro?","Posso trocar os produtos e preços?","O checkout já aceita pagamentos reais?"].map((q,i)=><details key={q}><summary>{q}<ChevronDown size={16}/></summary><p>{i===0?"Após a confirmação, a entrega pode ser feita por e-mail, link ou área de membros, conforme o produto.":i===1?"A página foi preparada para uma experiência segura. Para pagamentos reais, é necessário conectar um gateway.":i===2?"Sim. Produtos e preços ficam centralizados no projeto para facilitar futuras alterações.":"O checkout atual é demonstrativo. Para cobrar de verdade, conecte Mercado Pago, Stripe ou outro gateway."}</p></details>)}</div>
   </section>
  </main>

  <footer><div className="footer-main"><a className="brand" href="#"><span className="brand-mark">LD</span><span>LOJA<span className="pink">DIGITAL</span></span></a><p>Produtos digitais para quem prefere fazer.</p><div className="socials"><a href="#" aria-label="Instagram"><Instagram/></a><a href="#" aria-label="E-mail"><Mail/></a></div></div><div className="footer-bottom"><span>© 2026 LOJA DIGITAL</span><span>CURADORIA DIGITAL / BRASIL</span></div></footer>

  {cartOpen&&<div className="overlay" onClick={e=>e.target===e.currentTarget&&setCartOpen(false)}><aside className="drawer"><div className="drawer-head"><h2>CARRINHO</h2><button onClick={()=>setCartOpen(false)}><X/></button></div>{cart.length?<>{cart.map((p,i)=><div className="cart-item" key={i}><div className="mini-cover" style={{backgroundImage:`url('${p.image}')`}}/><div><strong>{p.title}</strong><span>{money(p.price)}</span></div><button onClick={()=>remove(i)}>×</button></div>)}<div className="cart-total"><span>TOTAL</span><strong>{money(total)}</strong></div><button className="btn primary full" onClick={()=>{setCartOpen(false);setCheckout(true)}}>CONTINUAR <ArrowRight/></button></>:<div className="empty"><ShoppingBag size={36}/><h3>Seu carrinho está vazio.</h3><p>Escolha um produto da coleção.</p><button className="btn primary" onClick={()=>setCartOpen(false)}>VER COLEÇÃO</button></div>}</aside></div>}

  {checkout&&<div className="overlay" onClick={e=>e.target===e.currentTarget&&setCheckout(false)}><div className="checkout"><button className="close" onClick={()=>setCheckout(false)}><X/></button><span className="eyebrow">CHECKOUT / 07</span><h2>FINALIZAR.</h2><p>Seus dados para continuar.</p><form onSubmit={e=>{e.preventDefault();alert("Pedido criado! Conecte um gateway para processar pagamentos reais.");setCheckout(false);setCart([])}}><input required placeholder="Nome completo"/><input required type="email" placeholder="E-mail"/><input required placeholder="CPF"/><select required defaultValue=""><option value="" disabled>Forma de pagamento</option><option>PIX</option><option>Cartão de crédito</option></select><button className="btn primary full">FINALIZAR PEDIDO <ArrowRight/></button></form><small>Checkout demonstrativo. Conecte Mercado Pago ou Stripe para pagamentos reais.</small></div></div>}
 </div>
}
createRoot(document.getElementById("root")).render(<App/>);