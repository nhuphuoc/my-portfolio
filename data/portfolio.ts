export const personalInfo = {
  name: "Phuoc Bui",
  tagline: "Software Engineer building robust backend systems and modern web products for real business needs.",
  intro:
    "Full-stack developer focused on solid backend architecture, modern web delivery, and practical product execution with Next.js and Spring Boot.",
  about:
    "I am a software engineer with a problem-solving mindset and a strong focus on building technology that is clean, effective, and useful in real business contexts. My strengths span backend engineering with Java and Spring Boot, full-stack product development, and modern frontend implementation with React and Next.js. I care about architecture, maintainability, performance, and user experience because strong software should not only work reliably, it should also create measurable value for the people using it.",
  email: "nhuphuoc.bui@gmail.com",
  phone: "0362 103 314",
  phoneRaw: "+84362103314",
  location: "Ho Chi Minh City, Vietnam",
  cvHref: "#"
};

export const highlights = [
  { value: "GPA 8.57", label: "Graduated with distinction in Software Engineering from UIT" },
  { value: "7 semesters", label: "Received scholarships and outstanding student recognition consecutively" },
  { value: "Top 4", label: "Won fourth prize at the National Science and Engineering Fair" }
];

export const contactLinks = [
  { label: "GitHub", value: "github.com/nhuphuoc", href: "https://github.com/nhuphuoc" },
  { label: "LinkedIn", value: "linkedin.com/in/phuocbn", href: "https://www.linkedin.com/in/phuocbn/" },
  { label: "Instagram", value: "@phuocbuilds", href: "https://instagram.com/phuocbuilds" },
  { label: "Email", value: "nhuphuoc.bui@gmail.com", href: "mailto:nhuphuoc.bui@gmail.com" }
];

export const services = [
  {
    index: "01",
    title: "Backend Systems & APIs",
    description:
      "Designing and building robust backend services with Java, Spring Boot, Spring Data JPA, and scalable architecture principles."
  },
  {
    index: "02",
    title: "Modern Web Applications",
    description:
      "Developing responsive web apps and product interfaces with Next.js, React, Tailwind CSS, shadcn/ui, animation libraries, and modern frontend patterns."
  },
  {
    index: "03",
    title: "Deployment, Performance & SEO",
    description:
      "Shipping production-ready solutions with attention to optimization, maintainability, search visibility, and efficient delivery workflows."
  }
];

export const skillGroups = [
  {
    title: "Backend",
    items: ["Java 8/11", "Spring Boot", "Spring Data JPA", "Microservices", "RESTful APIs"]
  },
  {
    title: "Frontend",
    items: ["ReactJS", "Next.js", "Tailwind CSS", "shadcn/ui", "Responsive UI development"]
  },
  {
    title: "Platform & Delivery",
    items: ["Supabase", "PostgreSQL", "Redis", "Docker", "Git"]
  },
  {
    title: "Modern React Ecosystem",
    items: ["Framer Motion", "GSAP", "TanStack Query", "React Hook Form", "Zod"]
  },
  {
    title: "Media & Product Features",
    items: ["Bunny.net video streaming", "Supabase Auth", "Supabase Realtime", "Role-based access", "Image optimization"]
  },
  {
    title: "Professional Edge",
    items: ["Performance optimization", "SEO on-page", "System thinking", "Business problem solving", "Professional English"]
  }
];

export const experience = [
  {
    period: "Professional experience",
    title: "Software Engineer",
    company: "NAB Innovation Centre • Renesas • KMS Solutions",
    summary:
      "Contributed to software engineering initiatives in reputable organizations, with experience spanning backend systems, full-stack delivery, maintainable product development, and collaborative engineering practices."
  },
  {
    period: "Freelance projects",
    title: "Full-stack Developer",
    company: "Business, studio, product, e-learning, and health platforms",
    summary:
      "Delivered practical digital solutions including conversion-focused landing pages, creative portfolio platforms, real-time connection apps, and expert-connecting products in e-learning and health domains."
  }
];

export const projects = [
  {
    category: "Interactive connection app",
    name: "Pair Psychology",
    description:
      "Contributed to a user connection platform built around recommendation logic and real-time interaction, with a strong focus on safe data handling and personalized user experience.",
    role: "Next.js product development, auth flows, realtime data, profile systems",
    result:
      "Built secure sign-in flows, handled complex user and clinician profile management, and supported smooth real-time data interactions with Supabase and PostgreSQL.",
    stack: ["Next.js", "Supabase Auth", "Supabase Database", "Supabase Realtime"],
    demo: "https://www.pairpsychology.com/",
    github: "https://github.com/example/pair-app",
    visual: "linear-gradient(135deg, #141a23 0%, #31506b 40%, #c97c52 100%)",
    screenshots: [
      {
        title: "Desktop hero experience",
        device: "desktop",
        summary: "Calm brand presentation with therapist matching CTA and trust-building visual tone."
      },
      {
        title: "Mobile directory flow",
        device: "mobile",
        summary: "Search and filter interface for discovering clinicians on smaller screens."
      }
    ]
  },
  {
    category: "Creative portfolio platform",
    name: "Xoi Studio",
    description:
      "Built a high-end portfolio and studio showcase platform for a creative brand, centered on premium visual presentation and flexible content management for image-heavy collections.",
    role: "Next.js implementation, media-heavy UX, content and storage workflows",
    result:
      "Delivered smooth high-quality image presentation and fast static asset delivery through Supabase Storage and Next.js image optimization.",
    stack: ["Next.js", "Supabase Storage", "Supabase Database", "Tailwind CSS", "shadcn/ui"],
    demo: "https://xoai-studio-demo.vercel.app/",
    github: "https://github.com/example/xoi-studio",
    visual: "linear-gradient(135deg, #1a2330 0%, #33465c 40%, #dac8ab 100%)",
    screenshots: [
      {
        title: "Homepage hero",
        device: "desktop",
        summary: "Dark visual-first landing page with strong positioning and primary CTAs."
      },
      {
        title: "Models marketplace",
        device: "desktop",
        summary: "Catalog browsing flow with search, category chips, and promo slider."
      },
      {
        title: "Course listing",
        device: "mobile",
        summary: "Responsive learning product cards and enrollment actions."
      },
      {
        title: "Course detail page",
        device: "desktop",
        summary: "Detailed curriculum page with learning outcomes and sticky purchase panel."
      }
    ]
  },
  {
    category: "Taxi service landing page",
    name: "Landing Page & Brand Presence for Taxi Service",
    description:
      "Designed and developed a conversion-oriented landing page for a passenger transport service, focused on making it easier for local customers to discover the business and book directly online.",
    role: "Next.js landing page implementation, SEO, responsive UI",
    result:
      "Used Next.js server rendering to improve SEO, loading performance, and local reach for a conversion-focused landing page.",
    stack: ["Next.js", "Tailwind CSS", "shadcn/ui"],
    demo: "https://chauduc-taxi.vercel.app/",
    github: "https://github.com/example/taxi-service",
    visual: "linear-gradient(135deg, #b66b2f 0%, #e2b15f 42%, #21384d 100%)",
    screenshots: [
      {
        title: "Desktop landing hero",
        device: "desktop",
        summary: "Headline, CTA phone block, and service benefits above the fold."
      },
      {
        title: "Mobile landing page",
        device: "mobile",
        summary: "Responsive CTA-focused hero optimized for direct call actions."
      },
      {
        title: "Coverage & trust section",
        device: "desktop",
        summary: "Service area grid and repeated conversion prompt for local users."
      }
    ]
  },
  {
    category: "E-learning & health platforms",
    name: "Psychologic & Fitness Solutions",
    description:
      "Worked on digital solutions that connect users with experts in education and health-related services, emphasizing usability, trust, and streamlined interaction flows.",
    role: "Next.js product implementation, user roles, learning progress systems",
    result:
      "Implemented streamlined course progress tracking and role-based access for User, Admin, and Creator workflows while reducing backend setup overhead with Supabase.",
    stack: ["Next.js", "Supabase", "Tailwind CSS", "shadcn/ui"],
    demo: "https://example.com",
    github: "https://github.com/example/health-elearning",
    visual: "linear-gradient(135deg, #1b3442 0%, #3b7a78 38%, #d3b089 100%)",
    screenshots: [
      {
        title: "Platform overview",
        device: "desktop",
        summary: "Space reserved for product homepage or main expert-connection flow."
      },
      {
        title: "User workflow detail",
        device: "mobile",
        summary: "Space reserved for consultation, booking, or learning journey screenshots."
      }
    ]
  }
];

export const faqs = [
  {
    question: "Can project metrics and screenshots be added later?",
    answer:
      "Yes. This structure is ready for adding real screenshots, demo links, GitHub links, and stronger metrics such as lead growth, load speed, or retention improvements."
  },
  {
    question: "Is this setup ready for Vercel deployment?",
    answer:
      "Yes. The project uses a standard Next.js structure, production build script, and App Router configuration that works well with Vercel."
  },
  {
    question: "Can we add bilingual content, blog pages, or a real contact form later?",
    answer:
      "Absolutely. The current structure leaves room for extra routes, CMS integration, server actions, or third-party form providers in the next iteration."
  }
];
