import Path from "../components/Path.js";
import CertificateList from "../components/CertificateList.js";

import "styles/pages/certificates.sass";

export default (t, t2) => {
  return /*html*/ `
        ${Path({ description: t.description })}
        ${CertificateList({ title: t.udacity, filter: (p) => p.platform === "udacity" }, t2.certificates)}
        ${CertificateList({ title: t.coursera, filter: (p) => p.platform === "coursera" }, t2.certificates)}
    `;
};
