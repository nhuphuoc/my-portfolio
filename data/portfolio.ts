export type Lang = "en" | "vi";

interface PortfolioTranslation {
  personalInfo: {
    name: string;
    tagline: string;
    intro: string;
    about: string;
    email: string;
    phone: string;
    phoneRaw: string;
    location: string;
    cvHref: string;
  };
  highlights: { value: string; label: string }[];
  contactLinks: { label: string; value: string; href: string }[];
  services: { index: string; title: string; description: string }[];
  skillGroups: { title: string; items: string[] }[];
  experience: { period: string; title: string; company: string; summary: string }[];
  projects: {
    category: string;
    name: string;
    description: string;
    role: string;
    result: string;
    stack: string[];
    demo: string;
    github: string;
    visual: string;
    screenshots: { title: string; device: string; summary: string }[];
  }[];
  faqs: { question: string; answer: string }[];
  ui: {
    nav: {
      items: { label: string; href: string }[];
      cta: string;
      exploreCta: string;
      downloadCv: string;
      liveDemo: string;
      sourceCode: string;
      callMe: string;
    };
    hero: {
      badge: string;
      basedIn: string;
      since: string;
      currentFocusLabel: string;
      currentFocusText: string;
    };
    about: { label: string; heading: string };
    services: { label: string; heading: string; subheading: string };
    projects: { label: string; heading: string; subheading: string };
    contact: { label: string; heading: string; subheading: string };
    footer: string;
  };
}

export const translations: Record<Lang, PortfolioTranslation> = {
  en: {
    personalInfo: {
      name: "Phuoc Bui",
      tagline:
        "Software Engineer building robust backend systems and modern web products for real business needs.",
      intro:
        "Full-stack developer focused on solid backend architecture, modern web delivery, and practical product execution with Next.js and Spring Boot.",
      about:
        "I am a software engineer with a problem-solving mindset and a strong focus on building technology that is clean, effective, and useful in real business contexts. My strengths span backend engineering with Java and Spring Boot, full-stack product development, and modern frontend implementation with React and Next.js. I care about architecture, maintainability, performance, and user experience because strong software should not only work reliably, it should also create measurable value for the people using it.",
      email: "nhuphuoc.bui@gmail.com",
      phone: "0362 103 314",
      phoneRaw: "+84362103314",
      location: "Ho Chi Minh City, Vietnam",
      cvHref: "#"
    },
    highlights: [
      { value: "4+ years", label: "Hands-on experience across backend systems and modern web products" },
      { value: "Top 4th", label: "Won fourth prize at the National Science and Engineering Fair" },
      { value: "10+ projects", label: "Participated in and successfully delivered software and web product projects" }
    ],
    contactLinks: [
      { label: "GitHub", value: "github.com/nhuphuoc", href: "https://github.com/nhuphuoc" },
      { label: "LinkedIn", value: "linkedin.com/in/phuocbn", href: "https://www.linkedin.com/in/phuocbn/" },
      { label: "Instagram", value: "@phuocbuilds", href: "https://instagram.com/phuocbuilds" },
      { label: "Email", value: "nhuphuoc.bui@gmail.com", href: "mailto:nhuphuoc.bui@gmail.com" }
    ],
    services: [
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
    ],
    skillGroups: [
      {
        title: "Backend",
        items: ["Java", "Spring Boot", "Spring Data JPA", "Microservices", "RESTful APIs"]
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
    ],
    experience: [
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
    ],
    projects: [
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
    ],
    faqs: [
      {
        question: "How long does it take to build a web application?",
        answer:
          "The timeline depends on the project's complexity. A landing page or portfolio typically takes 1 to 2 weeks. For larger web applications with custom features, it usually takes 1 to 3 months. By leveraging modern frameworks like Next.js and Supabase, I can speed up development without compromising on quality or performance."
      },
      {
        question: "Can you handle both the frontend and the backend of my project?",
        answer:
          "Yes. I am a Full-stack Software Engineer. I build fast, responsive user interfaces using Next.js, React, and Tailwind CSS. For the backend, I adapt to your specific needs, using Supabase for rapid development and real-time features, or Java with Spring Boot for more complex, enterprise-grade business logic."
      },
      {
        question: "Do you provide support and maintenance after the project is finished?",
        answer:
          "Absolutely. I provide a standard post-launch support period, usually 1 to 3 months depending on the project scope, to make sure the system runs smoothly and remains bug-free. I also deliver clear documentation so you can manage the application confidently after handoff."
      }
    ],
    ui: {
      nav: {
        items: [
          { label: "About", href: "#about" },
          { label: "Services", href: "#services" },
          { label: "Projects", href: "#projects" },
          { label: "Contact", href: "#contact" }
        ],
        cta: "Let's talk",
        exploreCta: "Explore projects",
        downloadCv: "Download CV",
        liveDemo: "Live demo",
        sourceCode: "Source code",
        callMe: "Call me"
      },
      hero: {
        badge: "Available for freelance collaborations",
        basedIn: "Based in",
        since: "Since 2020",
        currentFocusLabel: "Current focus",
        currentFocusText:
          "My goal is to build websites quickly and smoothly using the latest, most powerful tools, ultimately providing convenience and boosting your operational efficiency."
      },
      about: {
        label: "About",
        heading: "Building digital experiences that feel editorial, fast, and unmistakably modern."
      },
      services: {
        label: "Skills & Services",
        heading: "Strategy-minded execution from concept to launch.",
        subheading:
          "A balanced mix of interface craft, technical depth, and product thinking for founders, agencies, and growing teams."
      },
      projects: {
        label: "Featured Projects",
        heading: "Selected work with strong visual systems and measurable outcomes.",
        subheading:
          "Each case study is structured to communicate taste, problem-solving, and the ability to turn business goals into polished digital experiences."
      },
      contact: {
        label: "Contact",
        heading: "Let's make something that feels premium from the first scroll.",
        subheading:
          "I'm open to freelance product websites, landing pages, portfolio revamps, and design-forward frontend collaborations."
      },
      footer: "© 2026. Built with Next.js, TypeScript, and Tailwind CSS."
    }
  },

  vi: {
    personalInfo: {
      name: "Phuoc Bui",
      tagline:
        "Kỹ sư phần mềm chuyên xây dựng hệ thống backend vững chắc và các sản phẩm web hiện đại đáp ứng nhu cầu kinh doanh thực tế.",
      intro:
        "Lập trình viên Full-stack tập trung vào kiến trúc backend cốt lõi, phát triển sản phẩm web hiện đại và thực thi thực tế với Next.js và Spring Boot.",
      about:
        "Tôi là một kỹ sư phần mềm với tư duy giải quyết vấn đề, tập trung vào việc tạo ra các công nghệ sạch, hiệu quả và có tính ứng dụng cao trong kinh doanh. Thế mạnh của tôi bao gồm phát triển backend với Java và Spring Boot, xây dựng sản phẩm full-stack, và lập trình frontend hiện đại bằng React và Next.js. Tôi luôn chú trọng đến kiến trúc hệ thống, khả năng bảo trì, hiệu năng và trải nghiệm người dùng, vì một phần mềm tốt không chỉ cần chạy ổn định mà còn phải mang lại giá trị thực tế cho người sử dụng.",
      email: "nhuphuoc.bui@gmail.com",
      phone: "0362 103 314",
      phoneRaw: "+84362103314",
      location: "TP. Hồ Chí Minh, Việt Nam",
      cvHref: "#"
    },
    highlights: [
      { value: "4+ năm", label: "Kinh nghiệm thực tế trên các hệ thống backend và sản phẩm web hiện đại" },
      { value: "Top 4", label: "Đạt giải Tư tại Hội thi Khoa học Kỹ thuật Quốc gia" },
      { value: "10+ dự án", label: "Tham gia và hoàn thành thành công các dự án phần mềm và sản phẩm web" }
    ],
    contactLinks: [
      { label: "GitHub", value: "github.com/nhuphuoc", href: "https://github.com/nhuphuoc" },
      { label: "LinkedIn", value: "linkedin.com/in/phuocbn", href: "https://www.linkedin.com/in/phuocbn/" },
      { label: "Instagram", value: "@phuocbuilds", href: "https://instagram.com/phuocbuilds" },
      { label: "Email", value: "nhuphuoc.bui@gmail.com", href: "mailto:nhuphuoc.bui@gmail.com" }
    ],
    services: [
      {
        index: "01",
        title: "Hệ thống Backend & API",
        description:
          "Thiết kế và xây dựng các dịch vụ backend mạnh mẽ với Java, Spring Boot, Spring Data JPA, và các nguyên tắc kiến trúc mở rộng."
      },
      {
        index: "02",
        title: "Ứng dụng Web Hiện đại",
        description:
          "Phát triển ứng dụng web responsive và giao diện sản phẩm bằng Next.js, React, Tailwind CSS, shadcn/ui, các thư viện animation và các pattern frontend hiện đại."
      },
      {
        index: "03",
        title: "Triển khai, Hiệu năng & SEO",
        description:
          "Đưa sản phẩm lên môi trường thực tế (production) với sự chú trọng vào tối ưu hóa, khả năng bảo trì, SEO và quy trình triển khai hiệu quả."
      }
    ],
    skillGroups: [
      {
        title: "Backend",
        items: ["Java", "Spring Boot", "Spring Data JPA", "Microservices", "RESTful APIs"]
      },
      {
        title: "Frontend",
        items: ["ReactJS", "Next.js", "Tailwind CSS", "shadcn/ui", "Phát triển UI responsive"]
      },
      {
        title: "Nền tảng & Triển khai",
        items: ["Supabase", "PostgreSQL", "Redis", "Docker", "Git"]
      },
      {
        title: "Hệ sinh thái React hiện đại",
        items: ["Framer Motion", "GSAP", "TanStack Query", "React Hook Form", "Zod"]
      },
      {
        title: "Tính năng Media & Sản phẩm",
        items: ["Bunny.net video streaming", "Supabase Auth", "Supabase Realtime", "Phân quyền theo vai trò", "Tối ưu hình ảnh"]
      },
      {
        title: "Lợi thế chuyên môn",
        items: ["Tối ưu hiệu năng", "SEO on-page", "Tư duy hệ thống", "Giải quyết vấn đề kinh doanh", "Tiếng Anh chuyên nghiệp"]
      }
    ],
    experience: [
      {
        period: "Kinh nghiệm làm việc",
        title: "Kỹ sư Phần mềm",
        company: "NAB Innovation Centre • Renesas • KMS Solutions",
        summary:
          "Đóng góp vào các dự án phần mềm tại các tổ chức uy tín, với kinh nghiệm làm việc trên các hệ thống backend, phát triển full-stack, xây dựng sản phẩm dễ bảo trì và quy trình làm việc nhóm hiệu quả."
      },
      {
        period: "Dự án Freelance",
        title: "Lập trình viên Full-stack",
        company: "Các nền tảng kinh doanh, studio, sản phẩm, e-learning và sức khỏe",
        summary:
          "Xây dựng các giải pháp số thực tế bao gồm landing page tập trung vào chuyển đổi, nền tảng portfolio sáng tạo, ứng dụng kết nối thời gian thực và các sản phẩm kết nối chuyên gia trong lĩnh vực e-learning và sức khỏe."
      }
    ],
    projects: [
      {
        category: "Ứng dụng kết nối tương tác",
        name: "Pair Psychology",
        description:
          "Tham gia phát triển nền tảng kết nối người dùng dựa trên logic gợi ý và tương tác thời gian thực, tập trung mạnh vào bảo mật dữ liệu và trải nghiệm cá nhân hóa.",
        role: "Phát triển sản phẩm Next.js, luồng xác thực, dữ liệu realtime, hệ thống hồ sơ",
        result:
          "Xây dựng luồng đăng nhập bảo mật, quản lý hồ sơ người dùng và chuyên gia phức tạp, hỗ trợ tương tác dữ liệu thời gian thực mượt mà với Supabase và PostgreSQL.",
        stack: ["Next.js", "Supabase Auth", "Supabase Database", "Supabase Realtime"],
        demo: "https://www.pairpsychology.com/",
        github: "https://github.com/example/pair-app",
        visual: "linear-gradient(135deg, #141a23 0%, #31506b 40%, #c97c52 100%)",
        screenshots: [
          {
            title: "Trải nghiệm hero trên desktop",
            device: "desktop",
            summary: "Giao diện thương hiệu mang cảm giác nhẹ nhàng với nút gọi hành động ghép cặp chuyên gia trị liệu và tông màu tạo sự tin tưởng."
          },
          {
            title: "Luồng danh mục trên mobile",
            device: "mobile",
            summary: "Giao diện tìm kiếm và lọc để tìm chuyên gia trên màn hình nhỏ."
          }
        ]
      },
      {
        category: "Nền tảng portfolio sáng tạo",
        name: "Xoi Studio",
        description:
          "Xây dựng nền tảng trưng bày portfolio và studio cao cấp cho một thương hiệu sáng tạo, tập trung vào hình ảnh chất lượng cao và khả năng quản lý nội dung linh hoạt cho các bộ sưu tập nhiều ảnh.",
        role: "Triển khai Next.js, UX nặng về media, quy trình nội dung và lưu trữ",
        result:
          "Cung cấp trình bày hình ảnh chất lượng cao mượt mà và phân phối tài sản tĩnh nhanh qua Supabase Storage và tối ưu hình ảnh Next.js.",
        stack: ["Next.js", "Supabase Storage", "Supabase Database", "Tailwind CSS", "shadcn/ui"],
        demo: "https://xoai-studio-demo.vercel.app/",
        github: "https://github.com/example/xoi-studio",
        visual: "linear-gradient(135deg, #1a2330 0%, #33465c 40%, #dac8ab 100%)",
        screenshots: [
          {
            title: "Hero trang chủ",
            device: "desktop",
            summary: "Landing page giao diện tối ưu tiên hình ảnh với định vị thương hiệu rõ ràng và các nút CTA chính."
          },
          {
            title: "Marketplace người mẫu",
            device: "desktop",
            summary: "Luồng xem danh mục với tính năng tìm kiếm, phân loại và slider khuyến mãi."
          },
          {
            title: "Danh sách khóa học",
            device: "mobile",
            summary: "Các thẻ sản phẩm khóa học hiển thị tốt trên mọi thiết bị kèm nút đăng ký."
          },
          {
            title: "Trang chi tiết khóa học",
            device: "desktop",
            summary: "Trang nội dung khóa học chi tiết với kết quả đạt được và thanh công cụ mua hàng luôn hiển thị (sticky)."
          }
        ]
      },
      {
        category: "Landing page dịch vụ taxi",
        name: "Landing Page & Nhận diện thương hiệu Dịch vụ Taxi",
        description:
          "Thiết kế và phát triển landing page tập trung vào chuyển đổi cho dịch vụ vận tải hành khách, giúp khách hàng địa phương dễ dàng tìm thấy doanh nghiệp và đặt xe trực tiếp trên web.",
        role: "Triển khai landing page Next.js, SEO, UI responsive",
        result:
          "Sử dụng server rendering của Next.js để cải thiện SEO, hiệu năng tải trang và độ phủ địa phương cho landing page hướng chuyển đổi.",
        stack: ["Next.js", "Tailwind CSS", "shadcn/ui"],
        demo: "https://chauduc-taxi.vercel.app/",
        github: "https://github.com/example/taxi-service",
        visual: "linear-gradient(135deg, #b66b2f 0%, #e2b15f 42%, #21384d 100%)",
        screenshots: [
          {
            title: "Hero landing page trên desktop",
            device: "desktop",
            summary: "Tiêu đề, khối số điện thoại gọi ngay và các lợi ích dịch vụ nằm ở phần đầu trang."
          },
          {
            title: "Landing page trên mobile",
            device: "mobile",
            summary: "Khu vực hero hiển thị tốt trên di động, tối ưu cho thao tác gọi điện trực tiếp."
          },
          {
            title: "Khu vực dịch vụ & độ tin cậy",
            device: "desktop",
            summary: "Lưới hiển thị khu vực hoạt động và các lời kêu gọi đặt xe lặp lại hướng tới khách hàng địa phương."
          }
        ]
      },
      {
        category: "Nền tảng e-learning & sức khỏe",
        name: "Giải pháp Tâm lý & Thể dục",
        description:
          "Xây dựng các giải pháp số kết nối người dùng với chuyên gia trong lĩnh vực giáo dục và sức khỏe, chú trọng vào tính dễ sử dụng, độ tin cậy và tối ưu hóa các luồng tương tác.",
        role: "Triển khai sản phẩm Next.js, vai trò người dùng, hệ thống theo dõi tiến trình học",
        result:
          "Triển khai theo dõi tiến trình khóa học được tối giản và phân quyền theo vai trò cho luồng Người dùng, Admin và Người tạo trong khi giảm chi phí thiết lập backend với Supabase.",
        stack: ["Next.js", "Supabase", "Tailwind CSS", "shadcn/ui"],
        demo: "https://example.com",
        github: "https://github.com/example/health-elearning",
        visual: "linear-gradient(135deg, #1b3442 0%, #3b7a78 38%, #d3b089 100%)",
        screenshots: [
          {
            title: "Tổng quan nền tảng",
            device: "desktop",
            summary: "Không gian dành cho trang chủ sản phẩm hoặc luồng kết nối chuyên gia chính."
          },
          {
            title: "Chi tiết luồng người dùng",
            device: "mobile",
            summary: "Không gian dành cho các ảnh chụp màn hình về quá trình tư vấn, đặt lịch hoặc lộ trình học tập."
          }
        ]
      }
    ],
    faqs: [
      {
        question: "Mất bao lâu để hoàn thành một ứng dụng web?",
        answer:
          "Thời gian hoàn thành phụ thuộc vào độ phức tạp của dự án. Một landing page hoặc portfolio thường mất từ 1 đến 2 tuần. Với các ứng dụng web lớn có tính năng tùy chỉnh, thời gian thường từ 1 đến 3 tháng. Nhờ sử dụng các framework hiện đại như Next.js và Supabase, tôi có thể đẩy nhanh tiến độ phát triển mà không làm giảm chất lượng hay hiệu năng."
      },
      {
        question: "Bạn có thể đảm nhận cả frontend và backend cho dự án của tôi không?",
        answer:
          "Có. Tôi là Kỹ sư Phần mềm Full-stack. Tôi xây dựng giao diện người dùng nhanh và tương thích mọi thiết bị bằng Next.js, React và Tailwind CSS. Về phần backend, tôi linh hoạt theo nhu cầu của bạn, sử dụng Supabase để phát triển nhanh các tính năng realtime, hoặc dùng Java (Spring Boot) cho các logic kinh doanh phức tạp ở cấp độ doanh nghiệp."
      },
      {
        question: "Bạn có hỗ trợ và bảo trì sau khi dự án hoàn thành không?",
        answer:
          "Chắc chắn rồi. Tôi luôn có thời gian hỗ trợ tiêu chuẩn sau khi ra mắt, thường từ 1 đến 3 tháng tùy theo quy mô dự án, để đảm bảo hệ thống chạy mượt mà và không có lỗi. Tôi cũng cung cấp tài liệu rõ ràng để bạn có thể tự tin quản lý ứng dụng sau khi bàn giao."
      }
    ],
    ui: {
      nav: {
        items: [
          { label: "Giới thiệu", href: "#about" },
          { label: "Dịch vụ", href: "#services" },
          { label: "Dự án", href: "#projects" },
          { label: "Liên hệ", href: "#contact" }
        ],
        cta: "Liên hệ ngay",
        exploreCta: "Xem các dự án",
        downloadCv: "Tải CV",
        liveDemo: "Xem Demo",
        sourceCode: "Mã nguồn",
        callMe: "Gọi cho tôi"
      },
      hero: {
        badge: "Sẵn sàng nhận dự án freelance",
        basedIn: "Làm việc tại",
        since: "Từ năm 2020",
        currentFocusLabel: "Trọng tâm hiện tại",
        currentFocusText:
          "Mục tiêu của tôi là xây dựng website nhanh chóng và mượt mà bằng các công cụ hiện đại và mạnh mẽ nhất, mang lại sự tiện lợi và nâng cao hiệu quả vận hành cho bạn."
      },
      about: {
        label: "Giới thiệu",
        heading: "Xây dựng các trải nghiệm số chỉn chu, tốc độ nhanh và mang đậm tính hiện đại."
      },
      services: {
        label: "Kỹ năng & Dịch vụ",
        heading: "Thực thi có chiến lược từ lúc lên ý tưởng đến khi ra mắt.",
        subheading:
          "Sự kết hợp hài hòa giữa thiết kế giao diện, chuyên môn kỹ thuật và tư duy sản phẩm dành cho các founder, agency và đội ngũ đang phát triển."
      },
      projects: {
        label: "Dự án Nổi bật",
        heading: "Các dự án chọn lọc với giao diện ấn tượng và kết quả đo lường được.",
        subheading:
          "Mỗi case study được trình bày để thể hiện gu thẩm mỹ, kỹ năng giải quyết vấn đề và khả năng biến mục tiêu kinh doanh thành các trải nghiệm số hoàn thiện."
      },
      contact: {
        label: "Liên hệ",
        heading: "Hãy cùng tạo ra một sản phẩm mang lại cảm giác cao cấp ngay từ lần cuộn chuột đầu tiên.",
        subheading:
          "Tôi đang nhận các dự án freelance về website sản phẩm, landing page, làm mới portfolio và các dự án frontend chú trọng vào thiết kế."
      },
      footer: "© 2026. Xây dựng bằng Next.js, TypeScript và Tailwind CSS."
    }
  }
};
