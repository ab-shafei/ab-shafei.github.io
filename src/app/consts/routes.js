/**
 * @type {import("../../types/Routes").Routes}
 */
export default {
  "/": {
    name: "home",
    element: "Home",
  },
  "/projects": {
    name: "projects",
    element: "Projects",
  },
  "/certificates": {
    name: "certificates",
    element: "Certificates",
  },
  "/about-me": {
    name: "about",
    element: "About",
  },
  "/404": {
    name: "404",
    element: "PageNotFound",
  },

  // "/contacts": {
  //     name: "contacts",
  //     element: "Contacts",
  // },
};
