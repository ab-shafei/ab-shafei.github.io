import{P as s}from"./Path-DB8mngQN.js";import{P as i}from"./ProjectList-DS8yYLd7.js";import"./media-iZHN6AWF.js";import"./techs-B9srv6pb.js";const c=(r,e)=>`
        ${s({description:r.description})}
        ${i({title:r.decent,filter:t=>!t.isSmall},e.projects)}
        ${i({title:r.small,filter:t=>t.isSmall&&!t.isInProgress},e.projects)}
    `;export{c as default};
