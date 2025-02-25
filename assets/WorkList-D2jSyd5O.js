import{t as o}from"./techs-B9srv6pb.js";import"./media-iZHN6AWF.js";const c=[{id:"rikaz",link:"https://rikaz.tech/",techs:["react","next","express","mySql","sequelize","redux"],hasImage:!0},{id:"treesal",link:"https://treesal.com/",techs:["vue","vuetify","pinia"],hasImage:!0}],l=({id:s},e)=>{const{hasImage:a,techs:t,link:i}=c.find(r=>r.id===s);return`
        <div class="work">
            ${a?`<img src="/images/works/${s}.jpeg" alt="${e[s].name}" class="work__image">`:""}
            
            <ul class="work__techs">
                ${t.map(r=>`<li class="work__tech">${o[r]}</li>`).join("")}
            </ul> 

            <div class="work__content">
                <div class="work__name">${e[s].name}</div>
                <div class="work__description">${e[s].description}</div>
                <div class="work__link">
                    <a href="${i}" class="button">visit =></a>
                </div>
            </div>
        </div> 
    `},k=({title:s,filter:e=()=>!0,limit:a=c.length},t)=>`
            ${s?`<div> <h2 class="h2">${s}</h2>`:""}
            <div class="work-list">
                ${c.filter(e).slice(0,a).sort((i,r)=>i.hasImage-r.hasImage).map(({id:i})=>l({id:i},t)).join("")}
            </div>
        ${s?"</div>":""}
    `;export{k as W};
