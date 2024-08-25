import{A as k,S as h,N as T,a as q}from"./assets/vendor-tBkKSLTP.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function o(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(n){if(n.ep)return;n.ep=!0;const i=o(n);fetch(n.href,i)}})();document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".open-menu-btn"),t=document.querySelector(".modal-close-btn"),o=document.querySelector(".modal-mob-menu"),s=document.querySelector(".modal-menu"),n=document.querySelector(".nav-header"),i=document.querySelector(".header-menu-button"),r=document.querySelector(".menu-list"),w=document.querySelector(".header-order-btn"),C=document.querySelector(".modal-order-button"),A=document.querySelectorAll(".modal-list-item");function b(){window.innerWidth<768?(e.classList.remove("visually-hidden"),n.classList.add("visually-hidden"),w.classList.add("visually-hidden")):(e.classList.add("visually-hidden"),o.classList.add("visually-hidden"),n.classList.remove("visually-hidden"),s.classList.add("visually-hidden"),r.classList.add("visually-hidden"),w.classList.remove("visually-hidden"))}e.addEventListener("click",function(){o.classList.remove("visually-hidden"),s.classList.remove("visually-hidden")}),t.addEventListener("click",function(){o.classList.add("visually-hidden"),s.classList.add("visually-hidden")});function x(){o.classList.add("visually-hidden"),s.classList.add("visually-hidden")}A.forEach(M=>{M.addEventListener("click",x)}),C.addEventListener("click",x),i.addEventListener("click",function(){r.classList.toggle("visually-hidden")}),window.addEventListener("resize",b),b()});const $=[{followLink:"https://www.instagram.com/goitclub/",text:"IG"},{followLink:"https://www.facebook.com/goITclub/",text:"FB"},{followLink:"https://www.youtube.com/c/GoIT",text:"YT"},{followLink:"https://github.com/RamiiaHolomoza/light-summer-project",text:"GH"}],B=document.querySelector(".hero-list");function H(e){return e.map(({followLink:t,text:o})=>`<li class="hero-list-item"><a
          href="${t}"
          class="hero-list-link"
          target="_blank"
          >${o}</a
        ></li>`).join("")}B.insertAdjacentHTML("beforeend",H($));const l="/Portfolio/assets/icons-52vXHJ8M.svg";new k(".info-content-list",{duration:300,showMultiple:!0,openOnInit:[0]});const D=[{title:"ABOUT ME",content:'<p class="first-text">I am Lloyd Jefferson, a talented programmer with extensive expert in software development. I have an understanding of different programming languages ​​and technologies, always ready to improve my skills. I always follow the latest trends and look for unconventional, creative solutions to problems. I have a high level of analytical skills and am able to effectively solve even the most difficult tasks encountered on the way.</p><p  class="first-text">Able to work both independently and in a team. I can effectively cooperate with colleagues, exchanging ideas and finding optimal solutions. Professional maturity allows you to calmly cope with challenges and stressful situations, while maintaining a high quality of work. I am always looking for opportunities for self-improvement. I actively study new technologies and practices to stay abreast of the latest innovations. I have a strong understanding of various programming languages, frameworks and architectural concepts that allow me to create efficient and scalable software.</p>'},{title:"ROLE",content:`<p>'Frontend development"</p><p>"HeadlessCMS,Wordpress"</p><p>"Blender(enjoy)</p>`},{title:"EDUCATION",content:"<p>2018 - 2019 / Frontend Development Diploma, GoIT IT School, New York</p><p>2019 - 2020 / Advanced Web Development Certificate, GoIT IT School, New York</p><p>2020 - 2022 / Advanced Blender Animation Techniques, Udemy</p>"}],E=document.querySelector(".info-content-list");function O(e){return e.map(({title:t,content:o},s)=>`
        <li class="info-content-item ${s===0?"is-active":""}">
        <h3 class="accordion-header info-title-acc"><p>${t}</p><button type="button" class="acc-btn"><svg class="about-acc-icon" width="18" height="18">
            <use href="${l}#icon-Icon-${s===0?"top":"bottom"}"></use></button></h3>
        <div class="accordion-content info-text-acc">${o}</div>
        </li>
            `).join("")}E.insertAdjacentHTML("beforeend",O(D));E.addEventListener("click",R);const L=document.querySelector(".info-content-item.is-active .accordion-content");L.style.maxHeight=L.scrollHeight+"px";function R(e){const t=e.target.closest(".acc-btn"),o=t.querySelector(".about-acc-icon");if(t){const s=t.closest(".info-content-item"),n=s.querySelector(".accordion-content");s.classList.toggle("is-active"),s.classList.contains("is-active")?n.style.maxHeight=n.scrollHeight+"px":n.style.maxHeight=0}o.classList.toggle("rotate180")}const V=["HTML/CSS","JavaScript","React","Node.js","React Native"," Soft skills"],F=document.querySelector(".skills-content-list");V.forEach(e=>{const t=document.createElement("li");t.classList.add("swiper-slide","slide-item-ab"),t.innerHTML=`<p class="swiper-ab-text">${e}</p>`,F.appendChild(t)});const N=new h(".skilla-about-swiper",{slidesPerView:6,slidesPerGroup:1,spaceBetween:0,modules:[T],loop:!0,navigation:{nextEl:".swiper-button-next-ab"},breakpoints:{320:{slidesPerView:"auto"},768:{slidesPerView:"auto"},1440:{slidesPerView:"auto"}}});N.update();document.querySelector(".swiper-button-next-ab").addEventListener("click",()=>{if(1399<window.innerWidth){const t=document.querySelector(".swiper-slide-active");let o=t.nextElementSibling;o||(o=document.querySelector(".swiper-slide:first-child")),t.classList.remove("swiper-slide-active"),o.classList.add("swiper-slide-active")}});const W=[{svgroot:`${l}#icon-user-01`,topic:"Expertise",text:"As a highly experienced developer, I have deep knowledge of programming and website development."},{svgroot:`${l}#icon-message-chat-circle`,topic:"Communication",text:"Understanding your needs and wants is my priority and I am always open to discussions and corrections."},{svgroot:`${l}#icon-brush-01`,topic:"Art",text:"Thanks to my creative nature, I am ready to accept challenges and help you bring your ideas to life. "},{svgroot:`${l}#icon-hourglass-02`,topic:"Urgent execution",text:"I understand how important time is to you. Ready to work quickly and efficiently, without reducing the quality of work."}],I=document.querySelector(".benefits-list");function J(e){return e.map(({svgroot:t,topic:o,text:s})=>`<li class="benefits-list-item">
          <svg class="benefits-icon" width="24" height="24">
            <use href="${t}"></use>
          </svg>
          
            <h3 class="benefits-topic">${o}</h3>
            <p class="benefits-text">${s}</p>
          
        </li>`).join("")}I.insertAdjacentHTML("beforeend",J(W));function U(e){const t=e.target.closest(".benefits-list-item");if(t){const o=t.querySelector(".benefits-topic").textContent;alert(`You clicked on: ${o}`)}}I.addEventListener("click",U);new h(".swiper",{direction:"horizontal",pagination:{el:".swiper-pagination"},navigation:{nextEl:".custom-button-next",prevEl:".custom-button-prev"}});new k(".faq-container",{duration:400,ariaEnabled:!0,showMultiple:!1,collapse:!0});const z=[{svgroot:"#icon-Icon-bottom",topic:"What programming languages ​​are most often used in your project?",text:"In the field of web development, there are various technologies and programming languages. Typically, this includes a combination of frontend (client side) and backend (server side) languages."},{svgroot:"#icon-Icon-bottom",topic:"What are the deadlines for the project?",text:"The terms of project implementation depend to a large extent on a number of factors, such as the scope of the project, its complexity, and the availability of resources. Determining exact deadlines is a difficult task, and it usually occurs during the planning phase of the project."},{svgroot:"#icon-Icon-bottom",topic:"What payment methods do you accept?",text:"Payment through credit and debit cards such as Visa, MasterCard, specialized electronic payment systems such as PayPal, as well as payments in cryptocurrencies such as Bitcoin, Ethereum and others."},{svgroot:"#icon-Icon-bottom",topic:"How can I contact you?",text:"In the field of web development, there are various technologies and programming languages. Typically, this includes a combination of frontend (client side) and backend (server side) languages."},{svgroot:"#icon-Icon-bottom",topic:"Do you provide advice or support?",text:"The terms of project implementation depend to a large extent on a number of factors, such as the scope of the project, its complexity, and the availability of resources. Determining exact deadlines is a difficult task, and it usually occurs during the planning phase of the project."},{svgroot:"#icon-Icon-bottom",topic:"What does the process of developing a software<br >product look like from idea to implementation?",text:"Payment through credit and debit cards such as Visa, MasterCard, specialized electronic payment systems such as PayPal, as well as payments in cryptocurrencies such as Bitcoin, Ethereum and others."}],P=document.querySelector(".faq-container");function G(e){return e.map(({svgroot:t,topic:o,text:s},n)=>`
          <li class="faq ${n!==e.length-1,""}">
            <div class="faq-list-up">
               <h3 class="question">${o}</h3>
                 <p class="faq-icon">
                 <svg width="20" height="20">
                   <use href="${l}${t}" ></use>
                </svg>
                </p>
           </div>
          <p class="faq-text">${s}</p>
          </li>`).join("")}P.insertAdjacentHTML("beforeend",G(z));function Y(e){if(e.target.closest(".faq-icon")){const t=e.target.closest(".faq"),o=t.querySelector(".faq-text"),s=t.querySelector(".faq-icon");t.classList.toggle("active"),s.classList.toggle("rotate"),t.classList.contains("active")?o.style.maxHeight=o.scrollHeight+"px":o.style.maxHeight=0}}P.addEventListener("click",Y);const K=document.createElement("style");document.head.appendChild(K);const _="/Portfolio/assets/project1-Cbib0hD9.png",X="/Portfolio/assets/project1-retina-BAs70Dr0.png",Z="/Portfolio/assets/project2-DpBhBFKn.png",Q="/Portfolio/assets/project2-retina-DWCGAnhT.png",ee="/Portfolio/assets/project3--yCV3jkc.png",te="/Portfolio/assets/project3-retina-bY8755oF.png",oe="/Portfolio/assets/project4-DiUASzAJ.png",se="/Portfolio/assets/project4-retina-CdCB12qB.png",ne="/Portfolio/assets/project5-hvsr2kdC.png",ie="/Portfolio/assets/project5-retina-Bt8lI4pd.png",ae="/Portfolio/assets/project6-CWAd7ZRn.png",re="/Portfolio/assets/project6-retina-BFBJum69.png",ce="/Portfolio/assets/project7-Bne1n58h.png",le="/Portfolio/assets/project7-retina-CxMYKc5J.png",de="/Portfolio/assets/project8-Dlmo67XX.png",ue="/Portfolio/assets/project8-retina-bMgayeQJ.png",me="/Portfolio/assets/project9-C8yac7ZG.png",pe="/Portfolio/assets/project9-retina-Bk9Jppsn.png",fe="/Portfolio/assets/project10-CEe3KHo5.png",ge="/Portfolio/assets/project10-retina-C7UIuX8j.png",he=[{imagen1x:_,imagen2x:X},{imagen1x:Z,imagen2x:Q},{imagen1x:ee,imagen2x:te},{imagen1x:oe,imagen2x:se},{imagen1x:ne,imagen2x:ie},{imagen1x:ae,imagen2x:re},{imagen1x:ce,imagen2x:le},{imagen1x:de,imagen2x:ue},{imagen1x:me,imagen2x:pe},{imagen1x:fe,imagen2x:ge}];function ve(e,t){const o=[];for(;o.length<t;)o.push(...e);return o.slice(0,t)}const ye=ve(he,25);function we(e){return e.map(({imagen1x:t,imagen2x:o})=>`
<li class="covers-project">
  <picture>
    <source
      srcset="${t} 1x, ${o} 2x"
      media="(min-width: 320px)"
    />

    <img class="covers-img" src="${t}" alt="Covers" />
  </picture>
</li>
`).join("")}const be=document.querySelectorAll(".covers-list");be.forEach((e,t)=>{const o=t*3,s=o+5;e.innerHTML=we(ye.slice(o,s))});const xe=document.querySelector(".covers-content"),f=document.querySelectorAll(".covers-project"),Le=document.querySelector(".container-reviews");function Se(){for(let e=0;e<f.length;e++){const t=window.innerHeight,s=xe.getBoundingClientRect().top,i=Le.getBoundingClientRect().top;s<t*.9?f[e].classList.add("covers-animation"):f[e].classList.remove("covers-animation"),i<t*.5&&f[e].classList.remove("covers-animation")}}window.addEventListener("scroll",Se);let g=0,a=0;async function v(e=0,t=4){try{const s=(await q.get("https://portfolio-js.b.goit.study/api/reviews")).data;if(g=s.length,g===0)qe("Not found");else{const n=s.slice(e,e+t);ke(n),j(t)}}catch{const s=document.querySelector(".section-reviews");new IntersectionObserver(i=>{i.forEach(r=>{r.isIntersecting&&Ee("Failed to load reviews. Please try again.")})}).observe(s)}}function ke(e){const t=document.querySelector(".swiper-wrapper.swiper-rew");t.innerHTML="",e.forEach(o=>{const s=document.createElement("li");s.classList.add("swiper-slide","review-item"),s.innerHTML=`
      <div class="review-item-content">
        <img class="image-reviews" src="${o.avatar_url}" alt="${o.author}">
        <h3 class="name-reviews">${o.author}</h3>
        <p class="text-reviews">${o.review}</p>
      </div>`,t.appendChild(s)}),m.update()}function qe(e){const t=document.querySelector(".swiper-wrapper.swiper-rew"),o=document.createElement("li");o.classList.add("swiper-slide","review-item"),o.textContent=e,t.appendChild(o)}function Ee(e){const t=document.querySelector(".error-popup");t.textContent=e,t.classList.add("active"),setTimeout(()=>{t.classList.remove("active")},3e3)}function j(e){const t=document.querySelector(".swiper-button-prev"),o=document.querySelector(".swiper-button-next");a===0?t.classList.add("swiper-button-disabled"):t.classList.remove("swiper-button-disabled"),a+e>=g?o.classList.add("swiper-button-disabled"):o.classList.remove("swiper-button-disabled")}const m=new h(".reviews-slider",{slidesPerView:4,spaceBetween:16,navigation:!1,keyboard:{enabled:!0,onlyInViewport:!0},breakpoints:{320:{slidesPerView:1},768:{slidesPerView:2},1440:{slidesPerView:4}},on:{slideChange:()=>j(m.params.slidesPerView)}});document.querySelector(".swiper-button-next").addEventListener("click",()=>{const e=m.params.slidesPerView;a+e<g&&(a+=1,v(a,e))});document.querySelector(".swiper-button-prev").addEventListener("click",()=>{const e=m.params.slidesPerView;a>0&&(a-=1,v(a,e))});const Ie=m.params.slidesPerView;v(a,Ie);const p=document.querySelector(".footer-form"),d=document.getElementById("modal"),Pe=document.querySelector(".footer-close-button"),c=document.getElementById("email-message"),je="https://portfolio-js.b.goit.study/api/",y="feedback-form-state";let u={email:"",comment:""};He();p.addEventListener("input",Ce);p.addEventListener("submit",Ae);function Ce(e){const{value:t,name:o}=e.target;u[o]=t.trim(),localStorage.setItem(y,JSON.stringify(u)),o==="email"&&Te(e.target)}function Ae(e){e.preventDefault(),p.checkValidity()?Me(u):alert("Fill in all fields")}function Me(e){console.log("Sending data:",e),q.post(`${je}requests`,e).then(t=>{if(t.status===200||t.status===201)Be(),localStorage.removeItem(y),p.reset(),u={};else throw new Error("Unexpected response status")}).catch(t=>{alert("There was a problem with your submission. Please try again."),console.error(t)})}function Te(e){/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(e.value.trim())?(c.textContent="Success!",c.classList.add("success"),c.classList.remove("error")):(c.textContent="Invalid email, try again",c.classList.add("error"),c.classList.remove("success"))}function $e(){const e=document.querySelector(".form-comments"),t=e.getAttribute("maxlength");e.addEventListener("input",function(){e.value.length>=t&&(e.value=e.value.substring(0,t)+"..."),S(e)}),S(e)}function S(e){e.classList.toggle("impute-ellips",e.value.length>=e.getAttribute("maxlength"))}$e();function Be(){c.textContent=" ",d.classList.add("is-open")}Pe.addEventListener("click",function(){d.classList.remove("is-open")});d.addEventListener("click",function(e){e.target===d&&d.classList.remove("is-open")});window.addEventListener("keydown",e=>{e.key==="Escape"&&d.classList.remove("is-open")});function He(){const e=JSON.parse(localStorage.getItem(y));if(e)for(const t in e)e.hasOwnProperty(t)&&(p.elements[t].value=e[t],u[t]=e[t])}
//# sourceMappingURL=commonHelpers.js.map
