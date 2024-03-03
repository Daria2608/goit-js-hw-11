import{S,i as q}from"./assets/vendor-7659544d.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const l=document.querySelector(".loader-span");l.style.display="none";const p="42597996-b1dc9edd2aa87e1c7d2b2d72b",u="https://pixabay.com/api/",d="photo",y="horizontal",m="true";let b="",c=`${u}?key=${p}&q=${b}&image_type=${d}&orientation=${y}&safesearch=${m}`;function E(s){return c=`${u}?key=${p}&q=${s}&image_type=${d}&orientation=${y}&safesearch=${m}`,c}function f(){return l.style.display="block",fetch(c).then(s=>{if(!s.ok)throw new Error(`Error! Status: ${s.status}`);return s.json()}).catch(s=>{alert("Error")}).finally(()=>{l.style.display="none"})}const L=new S(".gallery-link",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"});document.querySelector("button");document.querySelector("input");document.querySelector("form");let v=document.querySelector(".images");const O=document.querySelector(".loader-span");O.style.display="none";function P(){f().then(s=>{if(s.hits.length===0)q.error({timeout:3e3,position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});else{const r=s.hits;v.innerHTML=r.map(({webformatURL:a,largeImageURL:o,tags:e,likes:t,views:n,comments:h,downloads:$})=>`<div class="items">
        <a class="gallery-link" href="${o}">
        <img src="${a}" alt="${e}">
        </a>
        <div class="info-gallery">
        <p class="gallery-description">
        <span class="gallery-description-span">Likes: 
        <span class="span">${t}</span>
        </span>
        </p>
        <p class="gallery-description">
        <span class="gallery-description-span">Views: <span class="span">${n}</span>
        </span>    
        </p>
        <p class="gallery-description">
        <span class="gallery-description-span">Comments: <span class="span">${h}</span>
        </span>    
        </p>
        <p class="gallery-description">
        <span class="gallery-description-span">Downloads: <span class="span">${$}</span>
        </span>    
        </p></div></div>`).join("")}L.refresh()})}let i="";document.querySelector("button");const R=document.querySelector("input"),g=document.querySelector("form");let k=document.querySelector(".images");const w=document.querySelector(".loader-span");w.style.display="none";g.addEventListener("submit",A);function A(s){k.innerHTML="",s.preventDefault(),i=R.value.trim(),i!==""&&(E(i),f(),P()),g.reset()}
//# sourceMappingURL=commonHelpers.js.map
