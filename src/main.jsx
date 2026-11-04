import React,{useEffect,useState} from "react";
import {createRoot} from "react-dom/client";
import {ShoppingBag,ArrowRight,ShieldCheck,Zap,Sparkles,Menu,X,ChevronDown,Check,Instagram,Mail} from "lucide-react";
import "./styles.css";

const products=[
 {id:1,title:"Pack Premium",tag:"MAIS VENDIDO",desc:"Kit completo para acelerar seu projeto digital.",price:29.90,old:59.90,icon:"✦"},
 {id:2,title:"Método Pro",tag:"NOVO",desc:"Material estratégico para quem quer evoluir mais rápido.",price:49.90,old:89.90,icon:"⚡"},
 {id:3,title:"Kit Elite",tag:"EXCLUSIVO",desc:"Coleção premium com recursos extras e bônus.",price:79.90,old:129.90,icon:"♛"}
];
const money=n=>n.toLocaleString("pt-BR",{style:"currency",currency:"BRL"});

function App(){
 const [cart,setCart]=useState(()=>JSON.parse(localStorage.getItem("ld-cart")||"[]"));
 const [cartOpen,setCartOpen]=useState(false),[menu,setMenu]=useState(false),[checkout,setCheckout]=useState(false);
 useEffect(()=>localStorage.setItem("ld-cart",JSON.stringify(cart)),[cart]);
 const total=cart.reduce((s,p)=>s+p.price,0);
 const add=p=>{setCart(c=>[...c,p]);setCartOpen(true)};
 const remove=i=>setCart(c=>c.filter((_,x)=>x!==i));
 useEffect(()=>{const els=document.querySelectorAll(".reveal");const io=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&e.target.classList.add("show")),{threshold:.1});els.forEach(e=>io.observe(e));return()=>io.disconnect()},[]);
 return <div className="app">
  <div className="noise"/>
  <header className="header">
   <a className="brand" href="#"><span className="brand-mark">LD</span><span>LOJA<span className="pink">DIGITAL</span></span></a>
   <nav className={menu?"nav-mobile":""}><a href="#produtos">Produtos</a><a href="#beneficios">Benefícios</a><a href="#sobre">Sobre</a><a href="#faq">FAQ</a></nav>
   <div className="header-actions"><button className="icon-btn cart" onClick={()=>setCartOpen(true)}><ShoppingBag size={19}/>{cart.length>0&&<b>{cart.length}</b>}</button><button className="menu-btn" onClick={()=>setMenu(!menu)}>{menu?<X/>:<Menu/>}</button></div>
  </header>

  <main>
   <section className="hero">
    <div className="hero-copy reveal">
      <div className="eyebrow"><span className="pulse"/> ACESSO IMEDIATO • 100% DIGITAL</div>
      <h1>Transforme seu <span>potencial</span> em resultado.</h1>
      <p>Produtos digitais premium para quem quer aprender, criar e evoluir sem perder tempo.</p>
      <div className="hero-buttons"><a href="#produtos" className="btn primary magnetic">Quero começar <ArrowRight size={18}/></a><a href="#beneficios" className="btn secondary">Conhecer a loja</a></div>
      <div className="proof"><div className="avatars"><i>✓</i><i>★</i><i>+</i></div><div><strong>Compra simples e segura</strong><span>Entrega digital após a confirmação</span></div></div>
    </div>
    <div className="hero-visual reveal">
      <div className="glow"/>
      <div className="float-card one"><Zap size={15}/><span>ACESSO RÁPIDO</span></div>
      <div className="float-card two"><Sparkles size={15}/><span>QUALIDADE PREMIUM</span></div>
      <div className="visual-card">
        <div className="visual-top"><span>LOJA DIGITAL</span><span>2026</span></div>
        <div className="visual-center"><div className="ring"><div>LD</div></div><small>COLEÇÃO</small><strong>PREMIUM</strong><em>Eleve o seu nível.</em></div>
        <div className="visual-bottom"><span>STARTING AT</span><strong>R$ 29,90</strong></div>
      </div>
    </div>
   </section>

   <section id="beneficios" className="benefits reveal">
    <div><div className="benefit-icon"><Zap/></div><div><h3>Acesso imediato</h3><p>Receba seu produto digital de forma rápida após a compra.</p></div></div>
    <div><div className="benefit-icon"><ShieldCheck/></div><div><h3>Compra segura</h3><p>Experiência de checkout pensada para facilitar sua decisão.</p></div></div>
    <div><div className="benefit-icon"><Sparkles/></div><div><h3>Conteúdo premium</h3><p>Materiais organizados para você aplicar de verdade.</p></div></div>
   </section>

   <section id="produtos" className="products">
    <div className="section-title reveal"><div><span className="eyebrow">ESCOLHA O SEU</span><h2>Produtos em destaque.</h2></div><p>Comece agora com uma coleção criada para quem quer sair do básico.</p></div>
    <div className="product-grid">{products.map(p=><article className="product reveal show" key={p.id}>
      <div className="cover"><span className="product-tag">{p.tag}</span><div className="cover-icon">{p.icon}</div><span className="cover-label">LOJA DIGITAL / {String(p.id).padStart(2,"0")}</span></div>
      <div className="product-info"><h3>{p.title}</h3><p>{p.desc}</p><div className="rating">★★★★★ <span>avaliação dos clientes</span></div><div className="buy-row"><div><del>{money(p.old)}</del><strong>{money(p.price)}</strong></div><button className="btn small primary" onClick={()=>add(p)}>Comprar <ArrowRight size={15}/></button></div></div>
    </article>)}</div>
   </section>

   <section id="sobre" className="story reveal"><div className="story-box"><div className="story-number">01</div><div><span className="eyebrow">POR QUE A LOJA DIGITAL?</span><h2>Menos enrolação.<br/><span>Mais evolução.</span></h2><p>A ideia é simples: reunir produtos digitais úteis em uma experiência rápida, bonita e objetiva. Você escolhe, compra e começa.</p><div className="checks"><span><Check/> Curadoria de produtos</span><span><Check/> Experiência premium</span><span><Check/> Foco em resultado</span></div></div></div></section>

   <section className="big-cta reveal"><div className="cta-glow"/><span className="eyebrow">SEU PRÓXIMO PASSO</span><h2>Você pode continuar adiando.<br/><span>Ou começar agora.</span></h2><p>Escolha um produto e dê o primeiro passo.</p><a href="#produtos" className="btn primary magnetic">Ver produtos <ArrowRight/></a></section>

   <section id="faq" className="faq reveal"><div className="faq-title"><span className="eyebrow">AINDA TEM DÚVIDAS?</span><h2>Perguntas frequentes</h2></div>
    <div className="faq-list">{["Como recebo meu produto?","O pagamento é seguro?","Posso trocar os produtos e preços?","O checkout já aceita pagamentos reais?"].map((q,i)=><details key={q}><summary>{q}<ChevronDown size={18}/></summary><p>{i===0?"Após a confirmação, a entrega pode ser feita por e-mail, link ou área de membros, conforme o produto.":i===1?"Sim. A página foi preparada com uma experiência de compra segura. Para pagamentos reais, conecte um gateway.":i===2?"Sim. Os produtos e preços ficam centralizados no código para facilitar a gestão.":"O checkout atual é uma demonstração. Para cobrar de verdade, conecte Mercado Pago, Stripe ou outro gateway."}</p></details>)}</div>
   </section>
  </main>

  <footer><div className="footer-main"><a className="brand" href="#"><span className="brand-mark">LD</span><span>LOJA<span className="pink">DIGITAL</span></span></a><p>Produtos digitais para quem quer evoluir.</p><div className="socials"><a href="#"><Instagram/></a><a href="#"><Mail/></a></div></div><div className="footer-bottom"><span>© 2026 Loja Digital. Todos os direitos reservados.</span><span>Feito para vender com propósito.</span></div></footer>

  {cartOpen&&<div className="overlay" onClick={e=>e.target===e.currentTarget&&setCartOpen(false)}><aside className="drawer"><div className="drawer-head"><h2>Seu carrinho</h2><button onClick={()=>setCartOpen(false)}><X/></button></div>{cart.length?<>{cart.map((p,i)=><div className="cart-item" key={i}><div className="mini-cover">{p.icon}</div><div><strong>{p.title}</strong><span>{money(p.price)}</span></div><button onClick={()=>remove(i)}>×</button></div>)}<div className="cart-total"><span>Total</span><strong>{money(total)}</strong></div><button className="btn primary full" onClick={()=>{setCartOpen(false);setCheckout(true)}}>Continuar para checkout <ArrowRight/></button></>:<div className="empty"><ShoppingBag size={40}/><h3>Carrinho vazio</h3><p>Adicione um produto para começar.</p><button className="btn primary" onClick={()=>setCartOpen(false)}>Ver produtos</button></div>}</aside></div>}

  {checkout&&<div className="overlay" onClick={e=>e.target===e.currentTarget&&setCheckout(false)}><div className="checkout"><button className="close" onClick={()=>setCheckout(false)}><X/></button><span className="eyebrow">CHECKOUT</span><h2>Finalizar compra.</h2><p>Preencha seus dados para continuar.</p><form onSubmit={e=>{e.preventDefault();alert("Pedido criado! Conecte um gateway para processar pagamentos reais.");setCheckout(false);setCart([])}}><input required placeholder="Nome completo"/><input required type="email" placeholder="Seu melhor e-mail"/><input required placeholder="CPF"/><select required defaultValue=""><option value="" disabled>Forma de pagamento</option><option>PIX</option><option>Cartão de crédito</option></select><button className="btn primary full">Finalizar pedido <ArrowRight/></button></form><small>🔒 Checkout demonstrativo — conecte Mercado Pago ou Stripe para pagamentos reais.</small></div></div>}
 </div>
}
createRoot(document.getElementById("root")).render(<App/>);