import{P as l}from"./Path-DB8mngQN.js";import{s as a,S as c}from"./SkillBlock-C1q9Rpcw.js";import"./techs-B9srv6pb.js";const o=s=>`
        <section class="about">
            <div class="about__illustrations">
                <img src="/images/about-me.png" alt="" class="about__image">
            </div>
            <div class="about__text">
                ${s.description.map(t=>`
                    <p class="about__description">${t}</p>
                `).join("")}
            </div>
        </section>
    `,n=(s,t)=>`
        <section class="skills">
            <h2 class="h2">${s.title}</h2>
            <div class="skills__content">
                ${Object.keys(a).map(i=>c({id:i},t)).join("")}
            </div>
        </section>
    `,e=s=>`
        <section class="facts">
            <h2 class="h2">${s.title}</h2>
            <div class="facts__content">
                <ul class="facts__list">
                    ${s.list.map(t=>`
                        <li class="fact">${t}</li>
                    `).join("")}
                </ul>
                <div class="facts__illustrations">
                    
                </div>
            </div>

        </section>
    `,d=(s,t)=>`
        ${l({description:s.description})}
        ${o(s.about)}
        ${n(s.skills,t.skills)}
        ${e(s.facts)}
    `;export{d as default};
