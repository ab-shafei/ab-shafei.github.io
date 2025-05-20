import Certificate from "@/components/Certificate";
import certificates from "@/consts/certificates";

export default (
  { title, filter = () => true, limit = certificates.length },
  t
) => {
  return /*html*/ `
            ${title ? `<div> <h2 class="h2">${title}</h2>` : ""}
            <div class="certificate-list">
                ${certificates
                  .filter(filter)
                  .slice(0, limit)
                  .sort((a, b) => a.hasImage - b.hasImage)
                  .map(({ id }) => Certificate({ id }, t))
                  .join("")}
            </div>
        ${title ? "</div>" : ""}
    `;
};
