import{m as e}from"./media-C0fnUOdc.js";import{r as d,g as r}from"./index-D1XxWjPt.js";const o=({name:a})=>`
        <a href="${e[a]}" class="media">
            <img src="/images/icons/${a}.svg" alt="${a}" class="media__icon"/>
        </a>`,l=a=>`
        <footer class="footer">
            <div class="container">
                <div class="footer__inner">
                    <div class="footer__info">
                        <div class="footer__header">
                            <div class="logo">
                                <img src="/images/logo.svg" alt="logo" class="logo__img">
                                <div class="logo__name">Shafei</div>
                            </div>
                            <a class="footer__email" href="${e.email}">${e.emailRaw}</a>
                        </div>

                        <p class="footer__description">${a.description}</p>
                    </div>
                    <div class="footer__media">
                        <div class="footer__title">${a.media}</div>
                        <div class="footer__list">
                            ${["github","discord"].map(s=>o({name:s})).join("")}
                        </div>
                    </div>
                </div>
                <div class="footer__copyright">© ${a.copyright}</div>
            </div>

        </footer>
    `,c=["/","/works","/projects","/about-me"],n=a=>`
        <header class="header">
            <input class="hamburger" type="checkbox" aria-label="Menu" />

            <div class="media-header">
                <span class="media-header__line"></span>
                <div class="media-header__links">
                    ${["discord","github","email"].map(s=>o({name:s})).join("")}
                </div>
            </div>


            <div class="container">

                <div class="header__inner">
                    <a class="logo" href="/">
                        <img class="logo__img" src="/images/logo.svg" alt="Shafei logo">
                        <span class="logo__name">Shafei</span>
                    </a>
                    <div class="header__links">
                        ${c.map(s=>`
                                <a href="${s}" class="header__link ${window.location.pathname===s?"header__link_active":""}">${a[d[s].name]}</a>
                            `).join("")}
                    </div>
                    <div class="dropdown">
                        <span class="dropdown__label">en</span>

                        <div class="dropdown__list">
                            <div class="dropdown__option">en</div>
                        </div>
                    </div>

                </div>
            </div>
            

        </header>
    `,v=async(a,s)=>{const i=await r();return`
        ${n(i.header)}
        <div class="container content">
            ${a(i.pages[s.name],i)}
        </div>
        ${l(i.footer)}
    `};export{v as default};
