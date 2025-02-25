import{W as h}from"./WorkList-DAr4G7w5.js";import{P as m}from"./ProjectList-DS8yYLd7.js";import{s as $,S as v}from"./SkillBlock-C1q9Rpcw.js";import{m as a}from"./media-iZHN6AWF.js";import"./techs-B9srv6pb.js";const o=4,i=16,e=({width:s=5,height:t=5}={})=>{const c=(o*2+i)*s-i,l=(o*2+i)*t-i;return`
        <svg width="100%" class="dots" viewBox="0 0 ${c} ${l}">
            ${new Array(s).fill(new Array(t).fill("")).map((n,r)=>n.map((q,_)=>{const d=o+r*(o*2+i),u=o+_*(o*2+i);return`<circle cx="${d}" cy="${u}" r="${o}" />`}).join("")).join("")}
        </svg>
    `},g=s=>`
        <section class="hero">
            <div class="hero__content">
                <h1 class="hero__title">${s.title}</h1>
                <div class="hero__description">${s.description}</div>
                <a class="button button__primary" href="#contacts">${s.button} =></a>
            </div>
            <div class="hero__illustrations">
                <img src="/images/logo-outline.svg" alt="" class="hero__logo">
                <img src="/images/hero.png" alt="Shafei" class="hero__image">
                <div class="hero__status">${s.status}</div>
                ${e({})}
            </div>
        </section>
    `,p=s=>`
        <figure class="quote">
            <blockquote class="quote__text">${s.text}</blockquote>
            <figcaption class="quote__author">${s.author}</figcaption>
        </figure>
    `,k=(s,t)=>`
        <section class="works">
            <div class="works__header">
                <h2 class="h2">${s.title}</h2>
                <a class="works__link" href="/works">${s.button} ~~></a>
            </div>
            ${h({limit:3},t)}
        </section>
    `,b=(s,t)=>`
        <section class="projects">
            <div class="projects__header">
                <h2 class="h2">${s.title}</h2>
                <a class="projects__link" href="/projects">${s.button} ~~></a>
            </div>
            ${m({limit:3},t)}
        </section>
    `,f=(s,t)=>`
        <sections class="skills">
            <h2 class="h2">${s.title}</h2>
            <div class="skills__content">
                <div class="skills__illustrations illustrations">
                    <img src="/images/logo-outline.svg" alt="" class="illustrations__logo">
                    ${e({width:4,height:4})}
                    ${e({width:6,height:6})}
                </div>
                <div class="skills__list">
                    ${Object.keys($).filter(c=>c!=="tool").map(c=>v({id:c},t)).join("")}
                </div>

            </div>

        </sections>
    `,j=s=>`
        <section class="about">
            <div class="about__content">
                <h2 class="h2">${s.title}</h2>
                <div class="about__text">
                    ${s.description.map(t=>`<p class="about__description">${t}</p>`).join("")}
                </div>

                <a href="/about-me" class="button">${s.button} -></a>
            </div>
            <img src="/images/about-me.png" alt="" class="about__image">
        </section>
    `,w=[{name:"discord",text:a.discordTag},{name:"email",text:a.emailRaw}],x=s=>`
        <sections class="contacts" id="contacts">
            <h2 class="h2">${s.title}</h2>
            <div class="contacts__content">
                <p class="contacts__description">${s.text}</p>
                <div class="contacts__media">
                    <h3 class="contacts__title">${s.media}</h3>
                    <div class="contacts__list">
                        ${w.map(t=>`
                            <a class="contact" href="${a[t.name]}">
                                <img src="/images/icons/${t.name}.svg" alt="">
                                <div class="contact__name">${t.text}</div>
                            </a>
                        `).join("")}
                    </div>
                </div>
            </div>

        </sections>
    `,P=(s,t)=>`
        ${g(s.hero)}
        ${p(s.quote)}
        ${k(s.works,t.works)}
        ${b(s.projects,t.projects)}
        ${f(s.skills,t.skills)}
        ${j(s.about)}
        ${x(s.contacts)}
    `;export{P as default};
