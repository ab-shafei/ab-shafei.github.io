import{w as i,m}from"./media-C0fnUOdc.js";import{t as p}from"./techs-B9srv6pb.js";const r=[];function h(s){function e(t){let c="https://"+(t==="live"?"":i[t])+s[t];t==="figma"&&(c=`https://figma.com/community/file/${s[t]}`),t==="github"&&s[t].startsWith("/")&&(c=m.github+s[t]);const a=t==="cached"?"button__secondary":"",o=`${t[0].toUpperCase()}${t.slice(1)}`;return`<a href="${c}" class="button ${a}">${o} =></a>`}return Object.keys(s).map(e).join("")}const n=({id:s},e)=>{const{hasImage:t,techs:c,links:a}=r.find(o=>o.id===s);return`
        <div class="project">
            ${t?`<img src="/images/projects/${s}.webp" alt="${e[s].name}" class="project__image">`:""}
            
            <ul class="project__techs">
                ${c.map(o=>`<li class="project__tech">${p[o]}</li>`).join("")}
            </ul> 

            <div class="project__content">
                <div class="project__name">${e[s].name}</div>
                <div class="project__description">${e[s].description}</div>
                <div class="project__links">${h(a)}</div>
            </div>
        </div> 
    `},d=({title:s,filter:e=()=>!0,limit:t=r.length},c)=>`
            ${s?`<div> <h2 class="h2">${s}</h2>`:""}
            <div class="project-list">
                ${r.filter(e).slice(0,t).sort((a,o)=>a.hasImage-o.hasImage).map(({id:a})=>n({id:a},c)).join("")}
            </div>
        ${s?"</div>":""}
    `;export{d as P};
