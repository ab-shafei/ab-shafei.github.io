import CertificateList from "@/components/CertificateList";

export default (t, t2) => {
  return /*html*/ `
        <section class="certificates">
            <div class="certificates__header">
                <h2 class="h2">${t.title}</h2>
                <a class="certificates__link" href="/certificates">${t.button} ~~></a>
            </div>
            ${CertificateList({ limit: 3 }, t2)}
        </section>
    `;
};
