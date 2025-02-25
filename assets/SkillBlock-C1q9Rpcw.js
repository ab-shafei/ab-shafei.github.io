import{t as i}from"./techs-B9srv6pb.js";const a={language:["js","ts","python","rust"],database:["postgreSql","mySql","sqlite","mongo"],orm:["prisma","drizzle","sequelize"],other:["html","css","tailwindCss","shadcn","vuetify","redux","pinia","reactQuery"],tool:["vscode","cursor","git","docker","cicd","supabase","firebase","vercel","netlify"],framework:["react","next","vue","express","flask","hono"]},t=({id:l},e)=>`
        <div class="skill-block">
            <div class="skill-block__name">${e[l]}</div>
            <ul class="skill-block__list">
                ${a[l].map(s=>i[s]).map(s=>`<li class="skill-block__skill">${s}</li>`).join("")}
            </ul>
        </div>
    `;export{t as S,a as s};
