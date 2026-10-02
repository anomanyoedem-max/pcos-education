
document.addEventListener("DOMContentLoaded",()=>{
 const toggle=document.querySelector(".menu-toggle"),links=document.querySelector(".nav-links");
 if(toggle&&links){toggle.addEventListener("click",()=>{links.classList.toggle("show");toggle.setAttribute("aria-expanded",links.classList.contains("show"));});links.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>links.classList.remove("show")));}
 document.querySelectorAll(".faq-question").forEach(b=>b.addEventListener("click",()=>{let item=b.parentElement,open=item.classList.toggle("open");b.setAttribute("aria-expanded",open)}));
 document.querySelectorAll(".year").forEach(e=>e.textContent=new Date().getFullYear());
 let current=location.pathname.split("/").pop()||"index.html";document.querySelectorAll(".nav-links a").forEach(a=>{if(a.getAttribute("href")===current)a.classList.add("active")});
});
