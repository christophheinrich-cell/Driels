export type Project = {
  slug: string;
  title: string;
  category: string;
  overview: string;
  problem: string;
  process: string;
  outcome: string;
  images: string[];
};

export const projects: Project[] = [
  {
    slug: "bells-and-basil",
    title: "Bells and Basil",
    category: "Editorial Design",
    overview:
      "Between Bells and Basil is an editorial design project that celebrates the rich culinary heritage of Italy. Combining traditional recipes, cultural storytelling and expressive food photography, the cookbook takes readers on a journey through Italian history, identity and gastronomy.",
    problem:
      "The challenge was to design a cookbook that stands out from conventional recipe books while capturing the authentic character of Italian cuisine. The design needed to balance cultural information, practical recipes and visual creativity without compromising readability.",
    process:
      "We created a distinctive editorial identity through bold typography, a vibrant red colour palette, geometric shapes and immersive food photography. Combining experimental compositions with structured recipe layouts allowed us to express Italian culture through a contemporary and cohesive visual language.",
    outcome:
      "The result is a visually striking cookbook that transforms traditional recipes into an engaging editorial experience. Its distinctive cover, expressive layouts and carefully selected imagery create a strong visual identity that celebrates Italian cuisine while showcasing our creative approach to graphic and editorial design.",
    images: [
      "/assets/Project 1/1-Image-P1.jpeg",
      "/assets/Project 1/2-Image-P1.jpeg",
      "/assets/Project 1/3-Image-P1.jpeg",
    ],
  },
  {
    slug: "nova-coffee",
    title: "Nova Coffee",
    category: "Webdevelopment and Branding",
    overview:
      "NOVA Coffee is a fictional specialty coffee brand designed to make quality coffee accessible for everyday life. The project focused on creating a modern, welcoming website that reflects the brand's identity and allows customers to easily discover its products.",
    problem:
      "Specialty coffee websites can feel complicated and overwhelming to everyday customers. NOVA needed a clear digital experience that presents its products in an approachable way while establishing a strong brand identity.",
    process:
      "I designed a responsive website using warm colours, minimalist layouts, clean typography and coffee-focused photography. The website combines intuitive navigation with dedicated product pages, a coffee catalogue and a contact page.",
    outcome:
      "The final result is a cohesive, user-friendly website that communicates NOVA's brand identity, simplifies product discovery and provides a consistent experience across desktop and mobile devices.",
    images: [
      "/assets/Project 2/1-Image-P2.jpeg",
      "/assets/Project 2/2-Image-P2.jpeg",
      "/assets/Project 2/3-Image-P2.jpeg",
    ],
  },
  {
    slug: "studio-engraff",
    title: "Studio Engraff",
    category: "Webdevelopment and Branding",
    overview:
      "Enngraff is a fictional engraving studio working in the Cyber Sigilism style: fine, branching sigil lines burned into metal, glass, wood and everyday devices. The project covered the full path from brand concept to live website. I defined the brand (naming, value proposition, audience, tone, palette and typography), built a design system in Figma, and handed it over to Figma Make, an agentic AI tool, which built a four-page website (Home, Services, Detail and Contact) from my tokens and written specifications alone.",
    problem:
      "Figma Make never sees the design. It only receives text: tokens, component specs and a single prompt for the Home page. The brand made this harder. Cyber Sigilism lives on detailed ornament, blackletter type and glowing effects, which are almost impossible to describe precisely in words. At the same time, the original design still had gaps that would have carried straight into the build: hardcoded colours, variables named by appearance instead of role, missing component states, and placeholder text.",
    process:
      "I separated what an AI can rebuild from text from what it can’t. The layout stayed clean and structural, while the ornamental parts became assets: the 13-point star CTA was exported as an SVG with a currentColor fill, and its glow became its own effect token. I restructured the Figma file into a role-based system with nine colour variables, a seven-step spacing scale, six text styles on Google Fonts, and seven components with declared variants. All of it was compiled into a Token Sheet and cleaned JSON specs. Those became the only material Figma Make received, followed by one precise prompt for the Home.",
    outcome:
      "The result is a live multi-page website with working navigation, responsive layouts for desktop and mobile, and a contact form with visible states. The Home was generated in a single prompt and refined afterwards only by hand, through Point and Edit and the code editor. The remaining pages were built across documented correction rounds. The project also produced a reusable brand and token system that carries forward into Eval 03, and a clear lesson about agentic workflows: the output is only as good as the structure and language you hand over.\nOnce your site is finished, I’d make the Result section more concrete with your actual outcomes, such as how closely the one-shot Home matched your Figma design, how many correction rounds you needed, and what you fixed by hand. Those specifics will make it much stronger. I can also set the four sections as a 1920×1080 slide in the same style as your other sheets.",
    images: [
      "/assets/Project-3/1-Image-P3.jpg",
      "/assets/Project-3/2-Image-P3.jpg",
      "/assets/Project-3/3-Image-P3.jpg",
    ],
  },
];

export const services = [
  {
    title: "WebDevelopment",
    description:
      "We design and develop modern, responsive websites that combine strong visual identities with seamless user experiences. By combining creative design, functionality and intuitive navigation, we build digital experiences that are both engaging and effective.",
    icon: "/assets/Icons/DRIELS-Web-Development.png",
    folder: "Web-Development",
    prefix: "Web-Development",
  },
  {
    title: "Branding",
    description:
      "We create distinctive brand identities that reflect who you are and what you stand for. From logo design and typography to colour palettes and visual guidelines, we build consistent identities that connect with your audience and make your brand stand out.",
    icon: "/assets/Icons/DRIELS-Branding.png",
    folder: "Branding",
    prefix: "Branding",
  },
  {
    title: "Photographie",
    description:
      "We capture authentic and visually compelling images that bring your brand to life. From product photography and portraits to lifestyle content, we focus on composition, atmosphere and detail to create imagery that tells your story.",
    icon: "/assets/Icons/DRIELS-Photography.png",
    folder: "Photography",
    prefix: "Photography",
  },
  {
    title: "Videographie",
    description:
      "We translate ideas into engaging visual stories through creative video production. From concept development and filming to editing and post-production, we create dynamic content that captures attention, communicates your message and brings your brand into motion.",
    icon: "/assets/Icons/DRIELS-Videography.png",
    folder: "Videography",
    prefix: "Videography",
  },
];
