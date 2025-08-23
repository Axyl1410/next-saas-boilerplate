export const socialButtons = [
  {
    icon: "flat-color-icons:google",
    text: "Continue with Google",
    variant: "flat" as const,
  },
  {
    icon: "fe:github",
    text: "Continue with Github",
    variant: "flat" as const,
  },
  {
    icon: "cib:discord",
    text: "Continue with Discord",
    variant: "flat" as const,
  },
];

export const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.2,
    },
  },
};

export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
    },
  },
};
