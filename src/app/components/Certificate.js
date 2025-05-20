import certificates from "@/consts/certificates";
import websites from "@/consts/websites";

function mapLink({ platform, linkId }) {
  const href = `https://${websites[platform]}${linkId}`;
  const name = platform[0].toUpperCase() + platform.slice(1);

  return /*html*/ `<a href="${href}" target="_blank" class="button">${name} =></a>`;
}

export default ({ id }, t) => {
  const certificate = certificates.find((certificate) => certificate.id === id);
  if (!certificate) return "";

  const { hasImage } = certificate;

  return /*html*/ `
    <div class="certificate">
      ${
        hasImage
          ? `<img src="/images/certificates/${id}.png" alt="${t[id].name}" class="certificate__image">`
          : ""
      }
      <div class="certificate__content">
        <div class="certificate__name">${t[id].name}</div>
        <div class="certificate__links">${mapLink(certificate)}</div>
      </div>
    </div>
  `;
};
