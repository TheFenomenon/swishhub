
export const site = {
  name: "SwishHub",
  legalName: "SwishHub Interactive Limited",

  tagline: "We build digital experiences that move business forward.",

  description:
    "SwishHub Interactive Limited helps businesses attract attention, build trust and drive action through strategic websites, content and digital creative services.",

  whatsappNumber: "2347040265312",

  whatsappDefaultMessage:
    "Hello SwishHub, I'd like to discuss a project.",

  get whatsappUrl() {
    const message = encodeURIComponent(this.whatsappDefaultMessage);
    return `https://wa.me/${this.whatsappNumber}?text=${message}`;
  },

  social: {
    // Add verified social profile URLs here when ready.
  },
};
