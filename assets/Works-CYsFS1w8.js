import{P as o}from"./Path-DB8mngQN.js";import{W as t}from"./WorkList-BfyxaFXp.js";import"./techs-B9srv6pb.js";import"./media-C0fnUOdc.js";const n=(i,s)=>`
        ${o({description:i.description})}
        ${t({title:i.decent,filter:r=>!r.isSmall},s.works)}
        ${t({title:i.small,filter:r=>r.isSmall&&!r.isInProgress},s.works)}
    `;export{n as default};
