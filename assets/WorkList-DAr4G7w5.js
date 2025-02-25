import{t as c}from"./techs-B9srv6pb.js";import"./media-iZHN6AWF.js";const a=[{id:"rikaz",link:"https://rikaz.tech/",techs:["react","next","express","mySql","sequelize","redux"],hasImage:!0},{id:"treesal",link:"https://treesal.com/",techs:["vue","vuetify","pinia"],hasImage:!0}],l=({id:s},e)=>{const{hasImage:o,techs:t,link:r}=a.find(i=>i.id===s);return console.log(a),console.log(e),`
        <div class="work">
            ${o?`<img src="/images/works/${s}.jpeg" alt="${e[s].name}" class="work__image">`:""}
            
            <ul class="work__techs">
                ${t.map(i=>(console.log(i),`<li class="work__tech">${c[i]}</li>`)).join("")}
            </ul> 

            <div class="work__content">
                <div class="work__name">${e[s].name}</div>
                <div class="work__description">${e[s].description}</div>
                <div class="work__link">
                    <a href="${r}" class="button">visit =></a>
                </div>
            </div>
        </div> 
    `},h=({title:s,filter:e=()=>!0,limit:o=a.length},t)=>`
            ${s?`<div> <h2 class="h2">${s}</h2>`:""}
            <div class="work-list">
                ${a.filter(e).slice(0,o).sort((r,i)=>r.hasImage-i.hasImage).map(({id:r})=>l({id:r},t)).join("")}
            </div>
        ${s?"</div>":""}
    `;export{h as W};
