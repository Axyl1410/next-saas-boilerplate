export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Next.js SaaS Boilerplate",
  description:
    "A starter kit designed to help you launch your SaaS application in record time.",
  navItems: [
    {
      href: "/",
      label: "Home",
    },
    {
      href: "/dashboard",
      label: "Dashboard",
    },
  ],
  navMenuItems: [],
  links: {
    github: "https://github.com/Axyl1410/next-saas-boilerplate",
    sponsor: "https://github.com/sponsors/Axyl1410",
  },
};
