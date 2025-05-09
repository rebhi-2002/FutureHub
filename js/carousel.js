// Import categorizedItems (uncomment if using ES modules)
// import { categorizedItems } from './categorizedItems.js';

const categorizedItems = {
  "UI Components": [
    // الكل من UI Components (8 عناصر)
    {
      title: "DaisyUI",
      url: "https://daisyui.com",
      category: "UI Components",
      description: "A popular Tailwind CSS plugin offering themeable, pre-styled components with semantic class names for rapid prototyping.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=DaisyUI",
      tags: ["Tailwind", "Themes", "Components"],
      progress: 85,
      lastUpdated: "2025-03-06",
      rating: 4.7,
      stats: { views: 150000, duration: "3h", stars: 15000, components: "50+" }
    },
    {
      title: "Flowbite",
      url: "https://flowbite.com",
      category: "UI Components",
      description: "A comprehensive library with over 600 interactive components, ideal for dashboards and enterprise applications.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=Flowbite",
      tags: ["Tailwind", "Interactive", "Figma"],
      progress: 90,
      lastUpdated: "2024-11-25",
      rating: 4.5,
      stats: { views: 28000, duration: "5h", stars: 2800, components: "600+" }
    },
    {
      title: "HyperUI",
      url: "https://hyperui.dev",
      category: "UI Components",
      description: "A collection of copy-paste components for e-commerce and marketing sites, with a focus on simplicity and aesthetics.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=HyperUI",
      tags: ["E-commerce", "Tailwind", "Marketing"],
      progress: 80,
      lastUpdated: "2024-01-18",
      rating: 4.3,
      stats: { views: 10000, duration: "2h", stars: 1000, components: "42+" }
    },
    {
      title: "Preline UI",
      url: "https://preline.co",
      category: "UI Components",
      description: "Offers over 300 components and 160 starter pages, focusing on accessibility and interactivity for complex applications.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=Preline+UI",
      tags: ["Tailwind", "Accessibility", "Multi-framework"],
      progress: 82,
      lastUpdated: "2024-10-15",
      rating: 4.4,
      stats: { views: 18000, duration: "5h", stars: 1800, components: "300+" }
    },
    {
      title: "Kitwind",
      url: "https://kitwind.io",
      category: "UI Components",
      description: "A lightweight library with basic, customizable components like buttons and headers, ideal for beginners.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=Kitwind",
      tags: ["Tailwind", "Beginner", "Lightweight"],
      progress: 70,
      lastUpdated: "2023-12-10",
      rating: 4.0,
      stats: { views: 5000, duration: "1h", stars: 500, components: "20+" }
    },
    {
      title: "Headless UI",
      url: "https://headlessui.dev",
      category: "UI Components",
      description: "Unstyled, accessible components from Tailwind Labs, offering full customization for complex, bespoke UIs.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=Headless+UI",
      tags: ["Tailwind", "Accessibility", "Custom"],
      progress: 88,
      lastUpdated: "2025-02-14",
      rating: 4.6,
      stats: { views: 120000, duration: "3h", stars: 12000, components: "10+" }
    },
    {
      title: "Mamba UI",
      url: "https://mambaui.com",
      category: "UI Components",
      description: "Modern, lightweight components for landing pages, blogs, and SaaS apps with clean, customizable designs.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=Mamba+UI",
      tags: ["Tailwind", "SaaS", "Minimal"],
      progress: 75,
      lastUpdated: "2024-09-22",
      rating: 4.2,
      stats: { views: 8000, duration: "2h", stars: 800, components: "25+" }
    },
    {
      title: "Universe IO Forms",
      url: "https://uiverse.io/forms",
      category: "UI Components",
      description: "A collection of customizable, open-source form components designed for seamless integration into web projects.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=Universe+IO+Forms",
      tags: ["Forms", "UI", "Open Source"],
      progress: 82,
      lastUpdated: "2025-02-20",
      rating: 4.6,
      stats: { views: 25000, duration: "2h", stars: 2500, components: "20+" }
    },
    // من React Components (1 عنصر)
    {
      title: "ShadCN/UI",
      url: "https://ui.shadcn.com",
      category: "UI Components",
      description: "Highly customizable React components built with Tailwind and Radix UI, perfect for modern, scalable applications.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=ShadCN/UI",
      tags: ["React", "Tailwind", "Radix"],
      progress: 95,
      lastUpdated: "2025-04-20",
      rating: 4.8,
      stats: { views: 310000, duration: "4h", stars: 31000, components: "30+" }
    }
  ],
  "Animations": [
    {
      title: "Hero UI",
      url: "https://heroui.dev",
      category: "Animations",
      description: "Provides smooth, pre-built animations like transitions and hover effects to enhance Tailwind-based UIs.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=Hero+UI",
      tags: ["Tailwind", "Animations", "Transitions"],
      progress: 78,
      lastUpdated: "2024-07-30",
      rating: 4.1,
      stats: { views: 6000, duration: "2h", stars: 600, components: "15+" }
    },
    {
      title: "Framer Motion",
      url: "https://framer.com/motion",
      category: "Animations",
      description: "A powerful library for complex, smooth animations in React, seamlessly integrated with Tailwind CSS.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=Framer+Motion",
      tags: ["React", "Animations", "Tailwind"],
      progress: 92,
      lastUpdated: "2025-01-10",
      rating: 4.9,
      stats: { views: 220000, duration: "6h", stars: 22000, components: "N/A" }
    },
    {
      title: "Motion One",
      url: "https://motion.dev",
      category: "Animations",
      description: "Lightweight, high-performance animations using the Web Animations API, perfect for Tailwind projects.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=Motion+One",
      tags: ["CSS", "JavaScript", "Animations"],
      progress: 80,
      lastUpdated: "2024-12-05",
      rating: 4.3,
      stats: { views: 15000, duration: "3h", stars: 1500, components: "N/A" }
    },
    {
      title: "FormKit AutoAnimate",
      url: "https://auto-animate.formkit.com/",
      category: "Animations",
      description: "A zero-config library for adding smooth animations to web elements, enhancing user interfaces with minimal setup.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=FormKit+AutoAnimate",
      tags: ["Animations", "JavaScript", "UI"],
      progress: 80,
      lastUpdated: "2025-03-10",
      rating: 4.4,
      stats: { views: 15000, duration: "1h", stars: 1500, components: "N/A" }
    }
  ],
  "CSS Tools": [
    {
      title: "Flexbox Labs",
      url: "https://flexboxlabs.netlify.app",
      category: "CSS Tools",
      description: "An interactive learning platform for mastering CSS Flexbox with hands-on exercises and visual examples.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=Flexbox+Labs",
      tags: ["CSS", "Flexbox", "Learning"],
      progress: 85,
      lastUpdated: "2024-10-20",
      rating: 4.5,
      stats: { views: 20000, duration: "2h", stars: 2000, components: "N/A" }
    },
    {
      title: "Animated CSS Background Generator",
      url: "https://wweb.dev/resources/animated-css-background-generator",
      category: "CSS Tools",
      description: "A tool for generating customizable animated CSS backgrounds, perfect for adding dynamic visuals to websites.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=CSS+Background+Generator",
      tags: ["CSS", "Animations", "Web Design"],
      progress: 75,
      lastUpdated: "2024-12-15",
      rating: 4.3,
      stats: { views: 10000, duration: "1h", stars: 1000, components: "N/A" }
    }
  ],
  "Web Design": [
    {
      title: "Webflow",
      url: "https://webflow.com",
      category: "Web Design",
      description: "A no-code platform for designing, building, and launching responsive websites with a visual drag-and-drop interface.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=Webflow",
      tags: ["No-Code", "Web Design", "Responsive"],
      progress: 90,
      lastUpdated: "2025-04-10",
      rating: 4.8,
      stats: { views: 500000, duration: "5h", stars: 50000, components: "N/A" }
    },
    {
      title: "Framer",
      url: "https://www.framer.com",
      category: "Web Design",
      description: "A prototyping and design tool for creating interactive, high-fidelity web and mobile app prototypes.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=Framer",
      tags: ["Prototyping", "Web Design", "Animations"],
      progress: 88,
      lastUpdated: "2025-03-25",
      rating: 4.7,
      stats: { views: 300000, duration: "4h", stars: 30000, components: "N/A" }
    },
    // من WordPress Themes (1 عنصر)
    {
      title: "SolaceWP",
      url: "https://solacewp.com/",
      category: "Web Design",
      description: "A premium WordPress theme offering modern, customizable designs for blogs, portfolios, and business sites.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=SolaceWP",
      tags: ["WordPress", "Themes", "Customizable"],
      progress: 78,
      lastUpdated: "2024-11-30",
      rating: 4.4,
      stats: { views: 12000, duration: "2h", stars: 1200, components: "N/A" }
    },
		{
      title: "Learn Framer in 2025 - Crash Course for Framer Beginners",
      url: "https://www.youtube.com/watch?v=IL2aQ3aWGZk",
      category: "Web Design",
      description: "A crash course on Framer, a no/low-code website builder, converting a Figma design into a responsive, interactive website.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=Framer+Course",
      tags: ["Framer", "No-Code", "Web Design"],
      progress: 75,
      lastUpdated: "2025-01-28",
      rating: 4.3,
      stats: { views: 10749, duration: "N/A", stars: 427, components: "N/A" }
    }
  ],
  "Tutorials": [
    // الكل من Tutorials (13 عنصر)
    {
      title: "Realtime Responsive Chat App with React, Node.js, Socket.io and MongoDB with Group Chats",
      url: "https://www.youtube.com/watch?v=W3sOezpkGWI",
      category: "Tutorials",
      description: "A step-by-step tutorial to build a full-stack, responsive chat app with real-time messaging, group chats, and file uploads using MERN stack and Socket.io.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=Chat+App+Tutorial",
      tags: ["MERN", "Socket.io", "React", "Node.js"],
      progress: 85,
      lastUpdated: "2024-07-09",
      rating: 4.5,
      stats: { views: 220053, duration: "8h", stars: 5000, components: "N/A" }
    },
    {
      title: "Next.js E-Commerce App Tutorial | Build with React, OneEntry CMS & Tailwind CSS",
      url: "https://www.youtube.com/watch?v=cSweAnEQhMU",
      category: "Tutorials",
      description: "A comprehensive guide to building a full-stack e-commerce website with Next.js 14, OneEntry CMS, and Tailwind CSS, covering authentication, payments, and cart management.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=E-Commerce+Tutorial",
      tags: ["Next.js", "E-Commerce", "Tailwind CSS"],
      progress: 80,
      lastUpdated: "2024-09-28",
      rating: 4.3,
      stats: { views: 19306, duration: "N/A", stars: 1000, components: "N/A" }
    },
    {
      title: "MERN Stack Realtime Chat App Tutorial - React.js & Socket.io",
      url: "https://www.youtube.com/watch?v=ntKkVrQqBYY",
      category: "Tutorials",
      description: "A beginner-friendly tutorial to create a real-time chat app using MERN stack, Socket.io, Tailwind CSS, and Daisy UI, with JWT authentication and free deployment.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=MERN+Chat+Tutorial",
      tags: ["MERN", "Socket.io", "React"],
      progress: 87,
      lastUpdated: "2024-11-19",
      rating: 4.6,
      stats: { views: 381342, duration: "N/A", stars: 8000, components: "N/A" }
    },
    {
      title: "Neetcode 150 Course",
      url: "https://www.youtube.com/watch?v=T0u5nwSA0w0",
      category: "Tutorials",
      description: "A comprehensive course covering 150 essential LeetCode problems, focusing on algorithmic patterns for coding interviews.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=Neetcode+150",
      tags: ["LeetCode", "Algorithms", "Coding Interview"],
      progress: 88,
      lastUpdated: "2025-01-20",
      rating: 4.7,
      stats: { views: 241839, duration: "38h", stars: 10000, components: "N/A" }
    },
    {
      title: "Dynamic Programming Course",
      url: "https://www.youtube.com/watch?v=oBt53YbR9Kk",
      category: "Tutorials",
      description: "A beginner-friendly course on dynamic programming, covering memoization and tabulation techniques for solving algorithmic problems.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=Dynamic+Programming",
      tags: ["Dynamic Programming", "Algorithms", "Coding"],
      progress: 85,
      lastUpdated: "2020-12-03",
      rating: 4.6,
      stats: { views: 4478927, duration: "5h", stars: 50000, components: "N/A" }
    },
    {
      title: "10 Common Coding Interview Problems",
      url: "https://www.youtube.com/watch?v=Peq4GCPNC5c",
      category: "Tutorials",
      description: "A tutorial solving 10 common coding interview problems to improve problem-solving skills for competitive programming.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=Coding+Interview",
      tags: ["Coding Interview", "Algorithms", "Programming"],
      progress: 80,
      lastUpdated: "2022-01-11",
      rating: 4.4,
      stats: { views: 617030, duration: "2h", stars: 10000, components: "N/A" }
    },
    {
      title: "Inside Code YouTube Channel",
      url: "https://www.youtube.com/channel/UCvLEP7Hu6SHd5a2CWeQXalg",
      category: "Tutorials",
      description: "A YouTube channel offering coding tutorials and problem-solving videos, focusing on algorithms and data structures.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=Inside+Code",
      tags: ["Coding", "Algorithms", "Tutorials"],
      progress: 75,
      lastUpdated: "2024-12-01",
      rating: 4.3,
      stats: { views: 39300, duration: "Varies", stars: 2000, components: "N/A" }
    },
    {
      title: "70 LeetCode Problems Tutorial",
      url: "https://www.youtube.com/watch?v=lvO88XxNAzs",
      category: "Tutorials",
      description: "A 5+ hour tutorial covering 70 LeetCode problems across various data structures, designed for tech interview preparation.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=70+LeetCode",
      tags: ["LeetCode", "Algorithms", "Data Structures"],
      progress: 85,
      lastUpdated: "2024-08-31",
      rating: 4.5,
      stats: { views: 761491, duration: "5h", stars: 15000, components: "N/A" }
    },
    {
      title: "8 LeetCode Patterns with Templates",
      url: "https://youtu.be/RYT08CaYq6A?si=2LaMkTn6_TBcDbni",
      category: "Tutorials",
      description: "A tutorial explaining 8 essential LeetCode patterns with code templates for solving algorithmic problems efficiently.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=LeetCode+Patterns",
      tags: ["LeetCode", "Algorithms", "Coding Interview"],
      progress: 80,
      lastUpdated: "2024-10-03",
      rating: 4.4,
      stats: { views: 313398, duration: "20m", stars: 5000, components: "N/A" }
    },
    {
      title: "Patient Management System with Next.js",
      url: "https://youtu.be/lEflo_sc82g?feature=shared",
      category: "Tutorials",
      description: "An advanced tutorial to build a healthcare platform with Next.js, Twilio, TypeScript, and Tailwind CSS, focusing on patient registration and SMS notifications.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=Patient+Management",
      tags: ["Next.js", "TypeScript", "Tailwind CSS"],
      progress: 85,
      lastUpdated: "2024-07-05",
      rating: 4.6,
      stats: { views: 525099, duration: "5h", stars: 10000, components: "N/A" }
    },
    {
      title: "Realtime Next.js App with LiveDocs",
      url: "https://youtu.be/y5vE8y_f_OM?feature=shared",
      category: "Tutorials",
      description: "A tutorial to build a real-time collaborative app like Google Docs using Next.js, TypeScript, and Tailwind CSS with permissions and notifications.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=LiveDocs+Tutorial",
      tags: ["Next.js", "TypeScript", "Real-time"],
      progress: 83,
      lastUpdated: "2024-07-19",
      rating: 4.5,
      stats: { views: 409737, duration: "3h", stars: 8000, components: "N/A" }
    },
    {
      title: "Real-Time Slack Clone with Next.js",
      url: "https://youtu.be/lXITA5MZIiI?feature=shared",
      category: "Tutorials",
      description: "A 15-hour tutorial to build a full-stack, real-time Slack clone with Next.js, React, Tailwind CSS, and Auth.js, including channels and reactions.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=Slack+Clone",
      tags: ["Next.js", "React", "Real-time"],
      progress: 88,
      lastUpdated: "2024-12-01",
      rating: 4.7,
      stats: { views: 100000, duration: "15h", stars: 5000, components: "N/A" }
    },
    {
      title: "Destination FAANG YouTube Channel",
      url: "https://www.youtube.com/@DestinationFAANG",
      category: "Tutorials",
      description: "A YouTube channel offering coding tutorials and interview preparation resources for landing jobs at top tech companies.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=Destination+FAANG",
      tags: ["Coding", "Interview Prep", "Tutorials"],
      progress: 70,
      lastUpdated: "2024-12-01",
      rating: 4.2,
      stats: { views: 10000, duration: "Varies", stars: 1000, components: "N/A" }
    },
    // من Live Streaming (1 عنصر)
    {
      title: "Twitch - MaxedApps",
      url: "https://www.twitch.tv/maxedapps",
      category: "Tutorials",
      description: "A Twitch channel offering live coding streams, tutorials, and tips for web development, focusing on modern JavaScript frameworks and tools.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=Twitch+MaxedApps",
      tags: ["Live Coding", "Web Development", "Tutorials"],
      progress: 70,
      lastUpdated: "2025-04-15",
      rating: 4.2,
      stats: { views: 5000, duration: "Varies", stars: 500, components: "N/A" }
    },
		// New Added
		{
			title: "Build and Deploy a Multi-Vendor E-Commerce Platform",
			url: "https://www.youtube.com/watch?v=6fXNWBFPfRM",
			category: "Tutorials",
			description: "A 20-hour tutorial to build a Gumroad-style platform with Next.js 15, Payload, and Stripe Connect, covering subdomains, product reviews, and more.",
			image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=E-Commerce+Platform",
			tags: ["Next.js", "E-Commerce", "Stripe"],
			progress: 90,
			lastUpdated: "2025-04-15",
			rating: 4.6,
			stats: { views: 50846, duration: "20h", stars: 2500, components: "N/A" }
		},
		{
			title: "Build Next.js Inventory Management Dashboard & Deploy on AWS",
			url: "https://www.youtube.com/watch?v=ddKQ8sZo_v8",
			category: "Tutorials",
			description: "A step-by-step guide to build a full-stack inventory management dashboard with Next.js, Node.js, and AWS deployment using EC2, RDS, and S3.",
			image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=Inventory+Dashboard",
			tags: ["Next.js", "AWS", "Node.js"],
			progress: 85,
			lastUpdated: "2024-07-29",
			rating: 4.7,
			stats: { views: 357915, duration: "7h", stars: 10000, components: "N/A" }
		},
		{
			title: "Build and Deploy a Full Stack AI SaaS with Next.js 15",
			url: "https://www.youtube.com/watch?v=ewxUC_zweBg",
			category: "Tutorials",
			description: "A 9-hour course to build an AI SaaS app with Next.js 15, React, Stripe, and Tailwind, transforming PDFs into visual summaries.",
			image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=AI+SaaS",
			tags: ["Next.js", "AI", "Stripe"],
			progress: 88,
			lastUpdated: "2025-03-11",
			rating: 4.5,
			stats: { views: 55754, duration: "9h", stars: 2400, components: "N/A" }
		},
		{
			title: "React Native Course for Beginners in 2025",
			url: "https://www.youtube.com/watch?v=f8Z9JyB2EIE",
			category: "Tutorials",
			description: "A crash course to build a mobile movie app with React Native and Expo, covering routing, API integration, and optimization.",
			image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=React+Native+App",
			tags: ["React Native", "Expo", "Mobile"],
			progress: 80,
			lastUpdated: "2025-03-07",
			rating: 4.8,
			stats: { views: 570642, duration: "3h", stars: 8200, components: "N/A" }
		},
		{
			title: "Build a Real-Time Slack Clone With Next.js",
			url: "https://www.youtube.com/watch?v=lXITA5MZIiI",
			category: "Tutorials",
			description: "A 15-hour tutorial to build a full-stack Slack clone with Next.js, React, Tailwind, and Auth.js, featuring real-time messaging and roles.",
			image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=Slack+Clone",
			tags: ["Next.js", "React", "Real-time"],
			progress: 90,
			lastUpdated: "2024-08-25",
			rating: 4.9,
			stats: { views: 1233719, duration: "15h", stars: 11000, components: "N/A" }
		},
		{
			title: "Build and Deploy a Realtime Next.js App with Permissions",
			url: "https://www.youtube.com/watch?v=y5vE8y_f_OM",
			category: "Tutorials",
			description: "A tutorial to build a real-time app like Google Docs with Next.js, TypeScript, and Tailwind, including permissions and notifications.",
			image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=Realtime+Next.js",
			tags: ["Next.js", "TypeScript", "Real-time"],
			progress: 83,
			lastUpdated: "2024-07-19",
			rating: 4.6,
			stats: { views: 410304, duration: "3h", stars: 7800, components: "N/A" }
		},
		{
			title: "Build and Deploy a Patient Management System with Next.js",
			url: "https://www.youtube.com/watch?v=lEflo_sc82g",
			category: "Tutorials",
			description: "A tutorial to build a healthcare platform with Next.js, Twilio, TypeScript, and Tailwind, focusing on patient registration and SMS notifications.",
			image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=Patient+Management",
			tags: ["Next.js", "TypeScript", "Healthcare"],
			progress: 85,
			lastUpdated: "2024-07-05",
			rating: "4.7",
			stats: { views: 526260, duration: "5h", stars: 15000, components: "N/A" }
		},
		{
			title: "Build a Students Management System with React",
			url: "https://www.youtube.com/watch?v=pm60lVcAMEw",
			category: "Tutorials",
			description: "A no-talking tutorial to build a CRUD app for student management with React, TypeScript, Redux Toolkit, and React-Bootstrap.",
			image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=Students+Management",
			tags: ["React", "TypeScript", "CRUD"],
			progress: 70,
			lastUpdated: "2025-02-11",
			rating: 4.0,
			stats: { views: 712, duration: "N/A", stars: 27, components: "N/A" }
		},
  ],
  "Project Playlists": [
    {
      title: "Awesome ReactJS Projects",
      url: "https://www.youtube.com/playlist?list=PLNEhktk_WNzpC3JnwmksayfVEK3qhFc6S",
      category: "Project Playlists",
      description: "A curated playlist of 12 videos showcasing full-stack ReactJS project tutorials to enhance your web development skills.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=ReactJS+Projects",
      tags: ["React", "Projects", "Web Development"],
      progress: 75,
      lastUpdated: "2024-12-01",
      rating: 4.4,
      stats: { views: 50842, duration: "Varies", stars: 2000, components: "N/A" }
    },
    {
      title: "Awesome NextJS Projects",
      url: "https://www.youtube.com/playlist?list=PLNEhktk_WNzrE71OoJhwUDIAKdpIfLXm-",
      category: "Project Playlists",
      description: "A collection of 9 video tutorials for building full-stack projects with Next.js, focusing on modern web development techniques.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=NextJS+Projects",
      tags: ["Next.js", "Projects", "Web Development"],
      progress: 70,
      lastUpdated: "2024-12-01",
      rating: 4.2,
      stats: { views: 6940, duration: "Varies", stars: 500, components: "N/A" }
    },
    {
      title: "LeetCode Problems in JavaScript",
      url: "https://youtube.com/playlist?list=PLrClazTqVpJlyey7Szwe_XX9 52 coding interview questions.",
      category: "Project Playlists",
      description: "A playlist of 94 videos solving LeetCode problems in JavaScript, ideal for interview preparation.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=LeetCode+JS",
      tags: ["LeetCode", "JavaScript", "Coding Interview"],
      progress: 78,
      lastUpdated: "2024-12-01",
      rating: 4.3,
      stats: { views: 147725, duration: "Varies", stars: 3000, components: "N/A" }
    },
    {
      title: "LeetCode Solutions by Knowledge Center",
      url: "https://youtube.com/playlist?list=PL1w8k37X_6L86f3PUUVFoGYXvZiZHde1S&si=W1VNAWNJD4EghXAZ",
      category: "Project Playlists",
      description: "A collection of 263 videos providing solutions to key LeetCode interview questions.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=LeetCode+Solutions",
      tags: ["LeetCode", "Coding Interview", "Algorithms"],
      progress: 82,
      lastUpdated: "2024-12-01",
      rating: 4.5,
      stats: { views: 626632, duration: "Varies", stars: 10000, components: "N/A" }
    },
    {
      title: "LeetCode Solutions in Java",
      url: "https://www.youtube.com/playlist?list=PL_6klLfS1WqF1n0GbPCqk0rPDFAu1dzXC",
      category: "Project Playlists",
      description: "A playlist of 38 videos solving important LeetCode problems in Java for interview preparation.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=LeetCode+Java",
      tags: ["LeetCode", "Java", "Coding Interview"],
      progress: 76,
      lastUpdated: "2024-12-01",
      rating: 4.2,
      stats: { views: 106111, duration: "Varies", stars: 2000, components: "N/A" }
    },
		{
		  title: "SaaS Next.js Project Playlist",
		  url: "https://youtube.com/playlist?list=PL70PvoZSQSAZ5fuL3BmcYECMcQGWFtt15&feature=shared",
		  category: "Project Playlists",
		  description: "A playlist of 8 videos guiding you through building a SaaS application with Next.js.",
		  image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=SaaS+Next.js",
		  tags: ["Next.js", "SaaS", "Web Development"],
		  progress: 70,
		  lastUpdated: "2024-12-01",
		  rating: 4.1,
		  stats: { views: 39650, duration: "Varies", stars: 1000, components: "N/A" }
		}
    ],
  "Online Courses": [
    // الكل من Online Courses (13 عنصر)
    {
      title: "CS50 Tutorial in Arabic",
      url: "https://www.youtube.com/playlist?list=PLknwEmKsW8OvMsFbU9zo8oJCprAsgc4LO",
      category: "Online Courses",
      description: "A complete Arabic translation of Harvard's CS50 course, covering programming fundamentals with Scratch, Python, C, AI, and cybersecurity.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=CS50+Arabic",
      tags: ["CS50", "Programming", "Arabic"],
      progress: 95,
      lastUpdated: "2024-12-01",
      rating: 4.9,
      stats: { views: 6242505, duration: "26h", stars: 50000, components: "N/A" }
    },
    {
      title: "CS50 Arabic by Ghareeb Elshaikh",
      url: "https://youtube.com/playlist?list=PLvGNfY-tFUN_1D3D0WAMlWULl3qnEKHEA&si=SRT_gQKM-XLFVGx3",
      category: "Online Courses",
      description: "An Arabic-translated CS50 course with 12 lessons, teaching programming basics using Scratch, Python, and C, updated for 2024.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=CS50+Ghareeb",
      tags: ["CS50", "Programming", "Arabic"],
      progress: 90,
      lastUpdated: "2025-02-01",
      rating: 4.7,
      stats: { views: 10000, duration: "26h", stars: 1000, components: "N/A" }
    },
    {
      title: "CS50x 2025 Lectures",
      url: "https://www.youtube.com/playlist?list=PLhQjrBD2T383q7Vn8QnTsVgSvyLpsqL_R",
      category: "Online Courses",
      description: "Harvard's CS50 2025 course lectures, introducing computer science and programming with C, Python, SQL, HTML, CSS, and JavaScript.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=CS50x+2025",
      tags: ["CS50", "Programming", "Computer Science"],
      progress: 92,
      lastUpdated: "2025-01-27",
      rating: 4.8,
      stats: { views: 50000, duration: "26h", stars: 5000, components: "N/A" }
    },
    {
      title: "50+ Hours React.js 19 Monster Class",
      url: "https://youtu.be/M9O5AjEFzKw?si=7BERsJnWPcIIKC5w",
      category: "Online Courses",
      description: "An extensive 50+ hour course covering React.js 19, TypeScript, Framer Motion, Zustand, Redux, and full-stack project development.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=React+Monster+Class",
      tags: ["React", "TypeScript", "Full-stack"],
      progress: 90,
      lastUpdated: "2025-01-20",
      rating: 4.8,
      stats: { views: 403985, duration: "50h", stars: 15000, components: "N/A" }
    },
    {
      title: "Free Git & GitHub Bootcamp",
      url: "https://youtube.com/playlist?list=PL6Mbwnna00j281iF7eHqU_EMXZxEA9G1P&si=N3S1K4xNj8iqG4XK",
      category: "Online Courses",
      description: "A free 5-video bootcamp teaching Git and GitHub essentials for version control and collaboration.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=Git+Bootcamp",
      tags: ["Git", "GitHub", "Version Control"],
      progress: 70,
      lastUpdated: "2024-12-01",
      rating: 4.0,
      stats: { views: 666, duration: "Varies", stars: 100, components: "N/A" }
    },
    {
      title: "MERN Stack Course in Arabic",
      url: "https://www.udemy.com/course/yehiatech-react-nodejs-express-mongodb-in-arabic/",
      category: "Online Courses",
      description: "A comprehensive Arabic course on building full-stack web applications with React, Node.js, Express, and MongoDB, including an e-commerce project.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=MERN+Arabic",
      tags: ["MERN", "React", "Node.js", "Arabic"],
      progress: 85,
      lastUpdated: "2024-06-01",
      rating: 4.5,
      stats: { views: 10000, duration: "8h", stars: 1000, components: "N/A" }
    },
    {
      title: "Pro Frontend Engineer ReactJS Course",
      url: "https://www.udemy.com/course/pro-frontend-engineer-reactjs-typescript-redux-nextjs-api-tailwindcss/",
      category: "Online Courses",
      description: "An advanced 62-hour Arabic course on React.js, TypeScript, and Redux, focusing on building modern web applications with best practices.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=React+Pro+Course",
      tags: ["React", "TypeScript", "Redux", "Arabic"],
      progress: 90,
      lastUpdated: "2024-06-04",
      rating: 4.6,
      stats: { views: 15000, duration: "62h", stars: 2000, components: "N/A" }
    },
    {
      title: "Node.js, Nest.js, PostgreSQL, GraphQL, and Security Course in Arabic ⭐",
      url: "https://www.udemy.com/course/mastering-nodejs-ts-mongodb-mvc-apis-graphql-arabic/",
      category: "Online Courses",
      description: "A 39-hour Arabic course mastering Node.js, TypeScript, PostgreSQL, MCV, Express, Nest.js, and GraphQL for building robust server-side applications.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=Node.js+Course",
      tags: ["Node.js", "GraphQL", "TypeScript", "Arabic"],
      progress: 88,
      lastUpdated: "2024-06-01",
      rating: 4.3,
      stats: { views: 12000, duration: "39h", stars: 1500, components: "N/A" }
    },
    {
      title: "WordPress Real Estate Marketing Course",
      url: "https://www.mediafire.com/file/42p8d2rihj8iv5u/%D8%AA%D8%B5%D9%85%D9%8A%D9%85+%D9%85%D9%88%D9%82%D8%B9+%D8%AA%D8%B3%D9%88%D9%8A%D9%82+%D8%B9%D9%82%D8%A7%D8%B1%D9%89.rar/file",
      category: "Online Courses",
      description: "An Arabic course on designing a complete real estate marketing website using WordPress, covering templates, payments, and user experience. `The password for extraction is: @WinDroidPremium.`",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=Real+Estate+WP",
      tags: ["WordPress", "Real Estate", "Arabic"],
      progress: 80,
      lastUpdated: "2024-12-01",
      rating: 4.2,
      stats: { views: 5000, duration: "N/A", stars: 500, components: "N/A" }
    },
    {
      title: "AI-Powered Cartoon Animation Course",
      url: "https://www.mediafire.com/file/3k8enjnaqgh8xhm/CartoonAI.rar/file",
      category: "Online Courses",
      description: "An Arabic course on creating high-quality cartoon films using AI tools, from idea generation to professional execution. `The password for extraction is: @WinDroidPremium.`",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=Cartoon+AI",
      tags: ["AI", "Animation", "Arabic"],
      progress: 75,
      lastUpdated: "2024-12-01",
      rating: 4.1,
      stats: { views: 3000, duration: "N/A", stars: 300, components: "N/A" }
    },
    {
      title: "SEO Step by Step Course",
      url: "https://t.me/+PNLmRGjCtlBkMWY8",
      category: "Online Courses",
      description: "A comprehensive Arabic SEO course by Ahmed Khattab, covering keyword analysis, content optimization, technical SEO, and link-building strategies. `The password for extraction is: @WinDroidPremium.`",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=SEO+Course",
      tags: ["SEO", "Digital Marketing", "Arabic"],
      progress: 85,
      lastUpdated: "2024-12-01",
      rating: 4.4,
      stats: { views: 8000, duration: "12h", stars: 1000, components: "N/A" }
    },
    {
      title: "AI Media Buying Course",
      url: "https://youtube.com/playlist?list=PLxe78bIBB8nVGSQbYw6MLKfWuNQmnjKdh&si=7Aj42ycu-fYwMgg6",
      category: "Online Courses",
      description: "A comprehensive Arabic playlist of 23 videos teaching AI-powered digital marketing and media buying strategies, led by Bassem Magdy.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=AI+Media+Buying",
      tags: ["Digital Marketing", "AI", "Media Buying", "Arabic"],
      progress: 80,
      lastUpdated: "2024-12-01",
      rating: 4.3,
      stats: { views: 68687, duration: "Varies", stars: 1500, components: "N/A" }
    },
    {
      title: "Flux Academy 6 Figure Freelancer",
      url: "https://mega.nz/folder/wbkwCLQQ#vbJVAr30LQHgeYDV_1b7Cg",
      category: "Online Courses",
      description: "A 12-week course by Flux Academy on becoming a successful freelancer, covering business strategies and client management.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=Flux+Freelancer",
      tags: ["Freelancing", "Business", "Career"],
      progress: 80,
      lastUpdated: "2024-12-01",
      rating: 4.3,
      stats: { views: 10000, duration: "12 weeks", stars: 1000, components: "N/A" }
    },
    // من Career Resources (1 عنصر)
    {
      title: "Remote Job Platforms",
      url: "https://www.stjegypt.com/article/3519?key=Ngoz9#google_vignette",
      category: "Online Courses",
      description: "A guide to 17 trusted platforms for finding remote part-time or full-time jobs.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=Remote+Jobs",
      tags: ["Remote Work", "Career", "Job Search"],
      progress: 65,
      lastUpdated: "2024-12-01",
      rating: 4.0,
      stats: { views: 5000, duration: "N/A", stars: 500, components: "N/A" }
    },
	  {
	    title: "Complete Web Development and Programming Guide: From Beginner to Advanced",
	    url: "https://1drv.ms/f/c/f78e4411ca8bad66/EloCM0D1JDpBnLlcJDqKuSQB6CNzf4sMOT8YCYwbQgHM6A",
	    category: "programming",
	    description: "A comprehensive guide covering HTML, CSS, JavaScript, Bootstrap, Tailwind, jQuery, Git, UI/UX, SEO, Clean Code, Java Programming Patterns, Algorithms & Data Structures (LinkedList), LinkedCode Collection, and Productivity Shortcuts.",
	    image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg",
	    // tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "Tailwind", "jQuery", "Git", "UI/UX", "SEO", "Clean Code", "Java Program", "Data Structures", "Shortcuts", "LinkedCode Collection"],
			tags: ["Web Development", "Programming Practices", "Design & Optimization", "Productivity"],
	    progress: 90,
	    lastUpdated: "2025-04-01",
	    rating: 4.8,
	    stats: { "views": 1500000, "duration": "50h", "stars": 30000, "components": "+14 topics" }
	  },
		// New Added
		{
			title: "Next.js 15 Animations Masterclass",
			url: "https://www.youtube.com/watch?v=OkWWAgLSGkc",
			category: "Online Courses",
			description: "A masterclass on animations with Next.js 15 and Motion.dev, covering transformations, keyframes, gestures, and scroll animations.",
			image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=Animations+Masterclass",
			tags: ["Next.js", "Animations", "Motion.dev"],
			progress: 85,
			lastUpdated: "2025-04-09",
			rating: 4.3,
			stats: { views: 13115, duration: "5h", stars: 1000, components: "N/A" }
		},
		{
			title: "Complete React Native Tutorial #1 - Introduction & Setup",
			url: "https://www.youtube.com/watch?v=J2j1yk-34OY",
			category: "Online Courses",
			description: "The first part of a series on React Native and Expo, covering native components, routing, navigation, and authentication.",
			image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=React+Native+Course",
			tags: ["React Native", "Expo", "Mobile"],
			progress: 70,
			lastUpdated: "2025-04-09",
			rating: 4.2,
			stats: { views: 22027, duration: "N/A", stars: 768, components: "N/A" }
		},
		{
			title: "Best Way to Create a WordPress Site for Beginners",
			url: "https://www.youtube.com/watch?v=zd5_MN-6kqs",
			category: "Online Courses",
			description: "A beginner-friendly guide to create a WordPress site using a free theme and plugins, with hosting setup.",
			image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=WordPress+Beginners",
			tags: ["WordPress", "Beginner", "Web Design"],
			progress: 75,
			lastUpdated: "2024-08-21",
			rating: 4.6,
			stats: { views: 251950, duration: "30m", stars: 4300, components: "N/A" }
		},
		{
			title: "How to Create a Website – WordPress Tutorial for Beginners 2025",
			url: "https://www.youtube.com/watch?v=R4v_7hh4Yys",
			category: "Online Courses",
			description: "A beginner's course on creating a WordPress website, covering domain, hosting, themes, plugins, and customization with Elementor.",
			image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=WordPress+Tutorial",
			tags: ["WordPress", "Beginner", "Web Design"],
			progress: 80,
			lastUpdated: "2025-01-21",
			rating: 4.5,
			stats: { views: 110232, duration: "1h", stars: 3000, components: "N/A" }
		},
		{
			title: "Create a Professional E-Commerce Store with WordPress and WooCommerce",
			url: "https://www.youtube.com/watch?v=OSHrVp17syE",
			category: "Online Courses",
			description: "A comprehensive guide to building a professional e-commerce store with WordPress and WooCommerce, covering products, payments, and shipping.",
			image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=E-Commerce+Store",
			tags: ["WordPress", "WooCommerce", "E-Commerce"],
			progress: 82,
			lastUpdated: "2024-07-10",
			rating: 4.4,
			stats: { views: 12827, duration: "N/A", stars: 424, components: "N/A" }
		},
		{
			title: "Detailed Guide to Create an E-Commerce Store with WordPress",
			url: "https://www.youtube.com/watch?v=sgZtrdcm5eI",
			category: "Online Courses",
			description: "A detailed tutorial on creating an e-commerce store with WordPress using the Flatsome theme, covering products, payments, and customization.",
			image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=E-Commerce+Guide",
			tags: ["WordPress", "E-Commerce", "Flatsome"],
			progress: 85,
			lastUpdated: "2023-04-24",
			rating: 4.5,
			stats: { views: 99643, duration: "2h", stars: 1800, components: "N/A" }
		},
		{
			title: "WordPress Course: Introduction to WordPress",
			url: "https://www.youtube.com/watch?v=ctEAYHFcbHk",
			category: "Online Courses",
			description: "An introductory course on WordPress, explaining its history, usage, and benefits for web development.",
			image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=WordPress+Intro",
			tags: ["WordPress", "Beginner", "Web Development"],
			progress: 70,
			lastUpdated: "2016-10-21",
			rating: 4.8,
			stats: { views: 619274, duration: "N/A", stars: 11000, components: "N/A" }
		},
		{
			title: "Create an E-Commerce Site with WordPress and WooCommerce 2025",
			url: "https://www.youtube.com/watch?v=tZwseQRmlSI",
			category: "Online Courses",
			description: "A 2025 guide to creating a free e-commerce site with WordPress, Elementor, and WooCommerce, including product creation and customization.",
			image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=E-Commerce+2025",
			tags: ["WordPress", "WooCommerce", "Elementor"],
			progress: 80,
			lastUpdated: "2024-07-29",
			rating: 4.4,
			stats: { views: 60158, duration: "4h", stars: 1200, components: "N/A" }
		},
		{
			title: "Complete WordPress E-Commerce Course with Payments and Shipping",
			url: "https://www.youtube.com/watch?v=ijUPpN9hwB0",
			category: "Online Courses",
			description: "A complete course on creating a professional WordPress e-commerce store with automated payments and shipping using the XStore theme.",
			image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=WordPress+E-Commerce",
			tags: ["WordPress", "E-Commerce", "XStore"],
			progress: 83,
			lastUpdated: "2024-12-05",
			rating: 4.3,
			stats: { views: 23580, duration: "1h", stars: 1000, components: "N/A" }
		},
		{
			title: "Tailwind CSS v4 Full Course 2025",
			url: "https://www.youtube.com/watch?v=6biMWgD6_JY",
			category: "Online Courses",
			description: "A 1-hour course on Tailwind CSS v4, covering utility classes, responsive design, dark mode, and a fitness project.",
			image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=Tailwind+CSS",
			tags: ["Tailwind CSS", "CSS", "Web Design"],
			progress: 78,
			lastUpdated: "2025-02-21",
			rating: 4.7,
			stats: { views: 782508, duration: "1h", stars: 10000, components: "N/A" }
		},
		{
			title: "Alpine.js Crash Course #11 - Alpine Lifecycle",
			url: "https://www.youtube.com/watch?v=kALOM4xfdnA",
			category: "Online Courses",
			description: "A part of an Alpine.js series, focusing on the lifecycle of Alpine.js for creating dynamic, reactive user interfaces.",
			image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=Alpine.js",
			tags: ["Alpine.js", "JavaScript", "UI"],
			progress: 65,
			lastUpdated: "2025-02-25",
			rating: 4.0,
			stats: { views: 2692, duration: "N/A", stars: 102, components: "N/A" }
		},
		{
			title: "Ten Habits to Become a Successful Programmer",
			url: "https://www.youtube.com/watch?v=n85WQcehd7E",
			category: "Online Courses",
			description: "A video outlining ten habits to become a successful programmer, with practical tips for career growth.",
			image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=Programming+Habits",
			tags: ["Programming", "Career", "Tips"],
			progress: 70,
			lastUpdated: "2025-02-19",
			rating: 4.5,
			stats: { views: 68287, duration: "N/A", stars: 5800, components: "N/A" }
		},
		{
			title: "The Biggest React.js Course on the Internet (Part 1)",
			url: "https://www.youtube.com/watch?v=qnwFpjIqsrA",
			category: "Online Courses",
			description: "A comprehensive React.js course covering components, JSX, hooks, state management, and TypeScript with beginner projects.",
			image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=React.js+Course",
			tags: ["React", "TypeScript", "Hooks"],
			progress: 90,
			lastUpdated: "2024-10-03",
			rating: 4.8,
			stats: { views: 378055, duration: "12h", stars: 16000, components: "N/A" }
		},
		{
			title: "50+ Hours React.js 19 Monster Class",
			url: "https://www.youtube.com/watch?v=M9O5AjEFzKw",
			category: "Online Courses",
			description: "A 50+ hour course on React.js 19, covering hooks, TypeScript, Framer Motion, Redux, and full-stack projects.",
			image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=React+Monster+Class",
			tags: ["React", "TypeScript", "Full-stack"],
			progress: 92,
			lastUpdated: "2025-01-20",
			rating: 4.9,
			stats: { views: 410226, duration: "50h", stars: 20000, components: "N/A" }
		},
		{
			title: "From Zero to Full Stack: Master JavaScript",
			url: "https://www.youtube.com/watch?v=H3XIJYEPdus",
			category: "Online Courses",
			description: "A complete course on JavaScript, covering basics, React, Node.js, Express, MongoDB, GSAP animations, and 100+ projects.",
			image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=Full+Stack+JS",
			tags: ["JavaScript", "React", "Node.js"],
			progress: 95,
			lastUpdated: "2023-08-11",
			rating: 4.9,
			stats: { views: 905479, duration: "15h", stars: 35000, components: "N/A" }
		},
		{
			title: "Node.js Tutorial for Beginners 2025",
			url: "https://www.youtube.com/watch?v=yGl3f0xTl_0",
			category: "Online Courses",
			description: "A step-by-step Node.js tutorial covering server creation, routing, middleware, events, and error handling.",
			image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=Node.js+Tutorial",
			tags: ["Node.js", "Backend", "JavaScript"],
			progress: 80,
			lastUpdated: "2025-01-13",
			rating: 4.4,
			stats: { views: 30369, duration: "N/A", stars: 958, components: "N/A" }
		},
  ],
  "Charting Libraries": [
    {
      title: "Chart.js",
      url: "https://www.chartjs.org/",
      category: "Charting Libraries",
      description: "A simple and flexible open-source library for creating interactive 2D charts using HTML5 Canvas. It supports 8 chart types like bar, line, and pie, with seamless animations and responsive design.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=Chart.js",
      tags: ["Charting", "HTML5 Canvas", "Responsive"],
      progress: 80,
      lastUpdated: "2025-03-01",
      rating: 4.8,
      stats: { views: 5000000, duration: "2h", stars: 63000, components: "8 chart types" }
    },
    {
      title: "D3.js",
      url: "https://d3js.org/",
      category: "Charting Libraries",
      description: "A powerful JavaScript library for creating bespoke, interactive data visualizations. It manipulates SVG and HTML to render complex charts, treemaps, and force-directed graphs, but has a steep learning curve.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=D3.js",
      tags: ["Data Visualization", "SVG", "Interactive"],
      progress: 90,
      lastUpdated: "2025-01-15",
      rating: 4.9,
      stats: { views: 7000000, duration: "10h", stars: 105000, components: "100+ layouts" }
    },
    {
      title: "Recharts",
      url: "https://recharts.org/",
      category: "Charting Libraries",
      description: "A React-specific library built on D3.js, offering a simple API for creating responsive and customizable charts like line, bar, and pie. Ideal for React developers seeking seamless integration.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=Recharts",
      tags: ["React", "Charting", "SVG"],
      progress: 85,
      lastUpdated: "2025-02-20",
      rating: 4.7,
      stats: { views: 2000000, duration: "3h", stars: 21000, components: "15+ chart types" }
    },
    {
      title: "LightningChart JS",
      url: "https://lightningchart.com/",
      category: "Charting Libraries",
      description: "A high-performance charting library using WebGL, capable of rendering over 500 million data points. It supports 100+ chart types, including heatmaps and 3D charts, ideal for scientific and financial applications.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=LightningChart+JS",
      tags: ["High Performance", "WebGL", "Scientific"],
      progress: 95,
      lastUpdated: "2025-04-09",
      rating: 4.6,
      stats: { views: 500000, duration: "5h", stars: 5000, components: "100+ chart types" }
    },
    {
      title: "FusionCharts",
      url: "https://www.fusioncharts.com/",
      category: "Charting Libraries",
      description: "A feature-rich library offering over 100 chart types, including 3D charts and real-time updates. It’s perfect for business dashboards with extensive customization and cross-platform support.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=FusionCharts",
      tags: ["Charting", "Real-time", "Business"],
      progress: 88,
      lastUpdated: "2025-01-18",
      rating: 4.5,
      stats: { views: 1000000, duration: "4h", stars: 8000, components: "100+ chart types" }
    },
    {
      title: "ApexCharts",
      url: "https://apexcharts.com/",
      category: "Charting Libraries",
      description: "A modern, open-source library known for its ease of use, responsive design, and interactive features. It supports chart types like bar, line, and area, with excellent documentation and live examples.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=ApexCharts",
      tags: ["Charting", "Responsive", "Interactive"],
      progress: 82,
      lastUpdated: "2025-03-07",
      rating: 4.7,
      stats: { views: 1500000, duration: "2h", stars: 14000, components: "20+ chart types" }
    },
    {
      title: "Highcharts",
      url: "https://www.highcharts.com/",
      category: "Charting Libraries",
      description: "A paid library with advanced features like 3D charts, annotations, and event-driven callbacks. It’s highly configurable and ideal for professional applications requiring bullet, funnel, and Gantt charts.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=Highcharts",
      tags: ["Charting", "Professional", "3D"],
      progress: 87,
      lastUpdated: "2025-02-01",
      rating: 4.8,
      stats: { views: 2000000, duration: "3h", stars: 10000, components: "50+ chart types" }
    },
    {
      title: "ECharts",
      url: "https://echarts.apache.org/",
      category: "Charting Libraries",
      description: "An open-source library by Apache, offering rich chart types including 3D visualizations. It supports large datasets, internationalization, and progressive rendering for real-time updates.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=ECharts",
      tags: ["Charting", "3D", "Apache"],
      progress: 90,
      lastUpdated: "2025-02-24",
      rating: 4.6,
      stats: { views: 3000000, duration: "4h", stars: 58000, components: "70+ chart types" }
    }
  ],
  "Mapping Libraries": [
    {
      title: "Leaflet.js",
      url: "https://leafletjs.com/",
      category: "Mapping Libraries",
      description: "A lightweight, open-source library for creating simple, interactive maps. It’s mobile-friendly and supports plugins for features like heatmaps and geocoding.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=Leaflet.js",
      tags: ["Mapping", "Lightweight", "Interactive"],
      progress: 80,
      lastUpdated: "2025-01-10",
      rating: 4.8,
      stats: { views: 4000000, duration: "2h", stars: 40000, components: "N/A" }
    },
    {
      title: "Mapbox GL JS",
      url: "https://www.mapbox.com/mapbox-gljs",
      category: "Mapping Libraries",
      description: "A WebGL-based library for creating highly customizable maps with 3D rendering, vector tiles, and smooth animations. It’s ideal for modern, stylish mapping applications.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=Mapbox+GL+JS",
      tags: ["Mapping", "WebGL", "3D"],
      progress: 90,
      lastUpdated: "2025-03-15",
      rating: 4.7,
      stats: { views: 2500000, duration: "4h", stars: 7000, components: "N/A" }
    },
    {
      title: "Google Maps JavaScript API",
      url: "https://developers.google.com/maps/documentation/javascript",
      category: "Mapping Libraries",
      description: "A comprehensive mapping solution integrated with Google services like Street View, Directions, and Places. It offers robust features for location-based applications.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=Google+Maps+API",
      tags: ["Mapping", "Google", "Location"],
      progress: 85,
      lastUpdated: "2025-02-01",
      rating: 4.9,
      stats: { views: 10000000, duration: "3h", stars: 15000, components: "N/A" }
    },
    {
      title: "OpenLayers",
      url: "https://openlayers.org/",
      category: "Mapping Libraries",
      description: "A powerful library for creating maps with vector and raster layers. It supports advanced features like projections, GeoJSON, and Web Map Services (WMS).",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=OpenLayers",
      tags: ["Mapping", "Vector", "Advanced"],
      progress: 88,
      lastUpdated: "2025-01-20",
      rating: 4.6,
      stats: { views: 1500000, duration: "5h", stars: 10000, components: "N/A" }
    },
    {
      title: "Deck.gl",
      url: "https://deck.gl/",
      category: "Mapping Libraries",
      description: "A high-performance library for visualizing large-scale 2D and 3D geographic data. Built on WebGL, it’s perfect for rendering complex spatial datasets with animations.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=Deck.gl",
      tags: ["Mapping", "3D", "WebGL"],
      progress: 92,
      lastUpdated: "2025-03-01",
      rating: 4.5,
      stats: { views: 800000, duration: "6h", stars: 11000, components: "N/A" }
    },
    {
      title: "MapLibre GL JS",
      url: "https://maplibre.org/",
      category: "Mapping Libraries",
      description: "An open-source fork of Mapbox GL JS, offering customizable maps with WebGL rendering. It’s community-driven and ideal for projects needing free, flexible mapping solutions.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=MapLibre+GL+JS",
      tags: ["Mapping", "WebGL", "Open Source"],
      progress: 87,
      lastUpdated: "2025-04-01",
      rating: 4.4,
      stats: { views: 500000, duration: "4h", stars: 4000, components: "N/A" }
    },
    {
      title: "CesiumJS",
      url: "https://cesium.com/cesiumjs/",
      category: "Mapping Libraries",
      description: "A library for creating 3D globes and maps with advanced geospatial visualization. It supports terrain rendering, 3D tiles, and time-dynamic data for immersive experiences.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=CesiumJS",
      tags: ["Mapping", "3D", "Geospatial"],
      progress: 93,
      lastUpdated: "2025-02-15",
      rating: 4.7,
      stats: { views: 600000, duration: "6h", stars: 9000, components: "N/A" }
    }
  ],
  "3D Visualization Libraries": [
    {
      title: "Three.js",
      url: "https://threejs.org/",
      category: "3D Visualization Libraries",
      description: "The most popular library for 3D rendering in the browser using WebGL. It supports GPU-accelerated animations, lighting, and shaders for creating stunning 3D scenes.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=Three.js",
      tags: ["3D", "WebGL", "Rendering"],
      progress: 95,
      lastUpdated: "2025-03-10",
      rating: 4.9,
      stats: { views: 8000000, duration: "8h", stars: 98000, components: "N/A" }
    },
    {
      title: "Babylon.js",
      url: "https://www.babylonjs.com/",
      category: "3D Visualization Libraries",
      description: "An advanced game engine and 3D rendering library with WebGL. It offers features like particle systems, physics, and VR support, as seen in recent demos on X for Xbox controllers and chatbots.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=Babylon.js",
      tags: ["3D", "Game Engine", "WebGL"],
      progress: 92,
      lastUpdated: "2025-04-26",
      rating: 4.8,
      stats: { views: 3000000, duration: "7h", stars: 22000, components: "N/A" }
    },
    {
      title: "A-Frame",
      url: "https://aframe.io/",
      category: "3D Visualization Libraries",
      description: "A framework for creating 3D and VR experiences using simple HTML syntax. Built on Three.js, it’s ideal for beginners wanting to create immersive web experiences.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=A-Frame",
      tags: ["3D", "VR", "HTML"],
      progress: 80,
      lastUpdated: "2025-01-05",
      rating: 4.5,
      stats: { views: 1000000, duration: "3h", stars: 15000, components: "N/A" }
    },
    {
      title: "X3DOM",
      url: "https://www.x3dom.org/",
      category: "3D Visualization Libraries",
      description: "A library for integrating 3D content into web pages using declarative X3D syntax. It enables seamless 3D rendering without plugins, compatible with modern browsers.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=X3DOM",
      tags: ["3D", "Web Integration", "Declarative"],
      progress: 78,
      lastUpdated: "2024-12-01",
      rating: 4.2,
      stats: { views: 300000, duration: "4h", stars: 2000, components: "N/A" }
    },
    {
      title: "PlayCanvas",
      url: "https://playcanvas.com/",
      category: "3D Visualization Libraries",
      description: "A WebGL-based engine for creating interactive 3D content, including games and visualizations. It offers a cloud-based editor and real-time collaboration features.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=PlayCanvas",
      tags: ["3D", "WebGL", "Interactive"],
      progress: 85,
      lastUpdated: "2025-02-10",
      rating: 4.6,
      stats: { views: 800000, duration: "5h", stars: 9000, components: "N/A" }
    },
    {
      title: "Ammo.js",
      url: "https://github.com/kripken/ammo.js/",
      category: "3D Visualization Libraries",
      description: "A physics engine ported to JavaScript, often used with Three.js to add realistic physics simulations like gravity and collisions to 3D scenes.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=Ammo.js",
      tags: ["3D", "Physics", "WebGL"],
      progress: 88,
      lastUpdated: "2024-11-15",
      rating: 4.4,
      stats: { views: 500000, duration: "4h", stars: 6000, components: "N/A" }
    },
    {
      title: "Zdog",
      url: "https://zzz.dog/",
      category: "3D Visualization Libraries",
      description: "A lightweight library for creating pseudo-3D visualizations with a minimalistic, flat design. It’s perfect for simple 3D illustrations and animations.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=Zdog",
      tags: ["3D", "Lightweight", "Illustration"],
      progress: 75,
      lastUpdated: "2024-10-01",
      rating: 4.3,
      stats: { views: 400000, duration: "2h", stars: 10000, components: "N/A" }
    }
  ],
  "Graph & Network Visualization Libraries": [
    {
      title: "Cytoscape.js",
      url: "https://js.cytoscape.org/",
      category: "Graph & Network Visualization Libraries",
      description: "A lightweight library for visualizing large networks and graphs. It supports advanced layouts, styling, and interactions for biological and social network analysis.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=Cytoscape.js",
      tags: ["Graph", "Network", "Lightweight"],
      progress: 82,
      lastUpdated: "2025-01-25",
      rating: 4.7,
      stats: { views: 1000000, duration: "3h", stars: 9500, components: "N/A" }
    },
    {
      title: "Sigma.js",
      url: "https://www.sigmajs.org/",
      category: "Graph & Network Visualization Libraries",
      description: "A library for rendering graphs, timelines, and hierarchical data using Canvas. It’s optimized for large networks with smooth interactions and custom layouts.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=Sigma.js",
      tags: ["Graph", "Network", "Canvas"],
      progress: 80,
      lastUpdated: "2024-12-15",
      rating: 4.4,
      stats: { views: 500000, duration: "3h", stars: 3000, components: "N/A" }
    },
    {
      title: "Vis.js",
      url: "https://visjs.org/",
      category: "Graph & Network Visualization Libraries",
      description: "A versatile library for network visualization, timelines, and 3D graphs. It supports dynamic data and interactive features like zooming and dragging.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=Vis.js",
      tags: ["Graph", "Network", "Interactive"],
      progress: 85,
      lastUpdated: "2024-11-01",
      rating: 4.5,
      stats: { views: 800000, duration: "4h", stars: 14000, components: "N/A" }
    },
    {
      title: "Algebra.js",
      url: "https://algebra.js.org/",
      category: "Graph & Network Visualization Libraries",
      description: "A library focused on mathematical graph structures, offering tools to manipulate and visualize algebraic graphs, equations, and expressions.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=Algebra.js",
      tags: ["Graph", "Mathematics", "Algebra"],
      progress: 70,
      lastUpdated: "2024-09-01",
      rating: 4.0,
      stats: { views: 200000, duration: "2h", stars: 1000, components: "N/A" }
    },
    {
      title: "Nivo",
      url: "https://nivo.rocks/",
      category: "Graph & Network Visualization Libraries",
      description: "A React-based library for graph and network visualizations, offering responsive components like sankey diagrams and chord charts with a focus on simplicity.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=Nivo",
      tags: ["Graph", "React", "Responsive"],
      progress: 83,
      lastUpdated: "2025-03-01",
      rating: 4.6,
      stats: { views: 1200000, duration: "3h", stars: 12000, components: "20+ chart types" }
    },
    {
      title: "G6",
      url: "https://g6.antv.vision/",
      category: "Graph & Network Visualization Libraries",
      description: "A graph visualization library by AntV, designed for complex network analysis. It supports advanced layouts, animations, and interactions for large-scale graphs.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=G6",
      tags: ["Graph", "Network", "Analysis"],
      progress: 88,
      lastUpdated: "2025-02-01",
      rating: 4.5,
      stats: { views: 600000, duration: "5h", stars: 9000, components: "N/A" }
    }
  ],
  "CSS & Web Design Resources": [
    {
      title: "CSS Portal",
      url: "https://www.cssportal.com/",
      category: "CSS & Web Design Resources",
      description: "A comprehensive resource for CSS tools, generators, and HTML/CSS examples to enhance website design. It offers practical solutions for styling and layout creation.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=CSS+Portal",
      tags: ["CSS", "Web Design", "Generators"],
      progress: 80,
      lastUpdated: "2022-04-15",
      rating: 4.5,
      stats: { views: 1000000, duration: "N/A", stars: 5000, components: "50+ tools" }
    },
    {
      title: "Quackit",
      url: "https://www.quackit.com/",
      category: "CSS & Web Design Resources",
      description: "A tutorial platform offering HTML, CSS, and web design guides with practical examples, ideal for beginners and intermediate developers.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=Quackit",
      tags: ["CSS", "HTML", "Tutorials"],
      progress: 78,
      lastUpdated: "2024-08-01",
      rating: 4.4,
      stats: { views: 448300, duration: "N/A", stars: 3000, components: "N/A" }
    },
    {
      title: "Dynamic Drive",
      url: "https://www.dynamicdrive.com/",
      category: "CSS & Web Design Resources",
      description: "A resource for CSS scripts, layouts, and web design tools, providing reusable code snippets for dynamic website effects.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=Dynamic+Drive",
      tags: ["CSS", "Scripts", "Web Design"],
      progress: 75,
      lastUpdated: "2024-08-01",
      rating: 4.2,
      stats: { views: 20800, duration: "N/A", stars: 1000, components: "100+ scripts" }
    },
    {
      title: "CSS Templates for Free",
      url: "https://www.csstemplatesforfree.com/",
      category: "CSS & Web Design Resources",
      description: "A collection of free CSS templates for web design, offering pre-designed layouts for quick website prototyping.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=CSS+Templates+Free",
      tags: ["CSS", "Templates", "Web Design"],
      progress: 70,
      lastUpdated: "2024-04-01",
      rating: 4.0,
      stats: { views: 534, duration: "N/A", stars: 500, components: "20+ templates" }
    },
    {
      title: "CSS Drive",
      url: "https://www.cssdrive.com/",
      category: "CSS & Web Design Resources",
      description: "A gallery and resource for CSS-based web designs, showcasing examples and providing code snippets for inspiration.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=CSS+Drive",
      tags: ["CSS", "Gallery", "Web Design"],
      progress: 72,
      lastUpdated: "2024-08-01",
      rating: 4.1,
      stats: { views: 11600, duration: "N/A", stars: 800, components: "N/A" }
    },
    {
      title: "W3Schools",
      url: "https://www.w3schools.com/",
      category: "CSS & Web Design Resources",
      description: "A widely-used platform for learning CSS, HTML, and web development with interactive tutorials, examples, and references.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=W3Schools",
      tags: ["CSS", "HTML", "Tutorials"],
      progress: 90,
      lastUpdated: "2025-01-01",
      rating: 4.9,
      stats: { views: 50000000, duration: "N/A", stars: 100000, components: "N/A" }
    },
    {
      title: "CSS-Tricks",
      url: "https://css-tricks.com/",
      category: "CSS & Web Design Resources",
      description: "A popular blog offering CSS tutorials, tips, and tricks, along with in-depth articles on web design and development trends.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=CSS-Tricks",
      tags: ["CSS", "Blog", "Web Design"],
      progress: 88,
      lastUpdated: "2025-03-01",
      rating: 4.8,
      stats: { views: 3000000, duration: "N/A", stars: 25000, components: "N/A" }
    }
  ],
  "Software Design & Refactoring": [
    {
      title: "Refactoring Guru",
      url: "https://refactoring.guru/",
      category: "Software Design & Refactoring",
      description: "A detailed resource for learning refactoring, design patterns, and SOLID principles, with tutorials and code examples in Java, C++, C#, PHP, and Delphi.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=Refactoring+Guru",
      tags: ["Refactoring", "Design Patterns", "SOLID"],
      progress: 92,
      lastUpdated: "2025-04-01",
      rating: 4.9,
      stats: { views: 1100000, duration: "N/A", stars: 20000, components: "N/A" }
    },
    {
      title: "SourceMaking",
      url: "https://sourcemaking.com/",
      category: "Software Design & Refactoring",
      description: "A guide to software architecture with articles on design patterns and refactoring, including video tutorials and code examples in multiple languages.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=SourceMaking",
      tags: ["Design Patterns", "Refactoring", "Tutorials"],
      progress: 88,
      lastUpdated: "2024-11-01",
      rating: 4.6,
      stats: { views: 87800, duration: "N/A", stars: 5000, components: "N/A" }
    },
    {
      title: "DotNetFiddle",
      url: "https://dotnetfiddle.net/",
      category: "Software Design & Refactoring",
      description: "An online .NET sandbox for testing and sharing code, with tutorials on .NET technologies and design patterns.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=DotNetFiddle",
      tags: [".NET", "Code Sandbox", "Tutorials"],
      progress: 80,
      lastUpdated: "2024-09-01",
      rating: 4.4,
      stats: { views: 315000, duration: "N/A", stars: 3000, components: "N/A" }
    },
    {
      title: "Code Maze",
      url: "https://code-maze.com/",
      category: "Software Design & Refactoring",
      description: "A tutorial site for C#, .NET, and web development, covering design patterns, SOLID principles, and best practices.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=Code+Maze",
      tags: [".NET", "Design Patterns", "Tutorials"],
      progress: 85,
      lastUpdated: "2024-12-01",
      rating: 4.5,
      stats: { views: 334300, duration: "N/A", stars: 4000, components: "N/A" }
    },
    {
      title: "Dot Net Tutorials",
      url: "https://dotnettutorials.net/",
      category: "Software Design & Refactoring",
      description: "A learning platform for .NET technologies like ASP.NET MVC, Web API, and design patterns, with a focus on SOLID principles.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=Dot+Net+Tutorials",
      tags: [".NET", "Design Patterns", "SOLID"],
      progress: 87,
      lastUpdated: "2024-12-01",
      rating: 4.6,
      stats: { views: 493800, duration: "N/A", stars: 6000, components: "N/A" }
    },
    {
      title: "DoFactory",
      url: "https://www.dofactory.com/",
      category: "Software Design & Refactoring",
      description: "A resource for design patterns with practical examples in C#, Java, and other languages, focusing on real-world applications.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=DoFactory",
      tags: ["Design Patterns", "Code Examples", "Tutorials"],
      progress: 83,
      lastUpdated: "2024-11-01",
      rating: 4.4,
      stats: { views: 148900, duration: "N/A", stars: 2000, components: "N/A" }
    },
    {
      title: "Patterns.dev",
      url: "https://patterns.dev/",
      category: "Software Design & Refactoring",
      description: "A modern guide to design patterns in JavaScript and web development, offering insights into modular and scalable code practices.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=Patterns.dev",
      tags: ["Design Patterns", "JavaScript", "Web Development"],
      progress: 85,
      lastUpdated: "2025-02-01",
      rating: 4.7,
      stats: { views: 500000, duration: "N/A", stars: 8000, components: "N/A" }
    },
    {
      title: "Martin Fowler",
      url: "https://martinfowler.com/",
      category: "Software Design & Refactoring",
      description: "A renowned site by Martin Fowler, offering in-depth articles on refactoring, design patterns, and software architecture principles.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=Martin+Fowler",
      tags: ["Refactoring", "Design Patterns", "Architecture"],
      progress: 90,
      lastUpdated: "2025-03-01",
      rating: 4.9,
      stats: { views: 2000000, duration: "N/A", stars: 15000, components: "N/A" }
    }
  ],
};

window.categorizedItems = categorizedItems;

/**
 * Initializes the hero section with animations and stats.
 */
function initHeroSection() {
  const heroBox = document.querySelector('.hero-box');
  if (!heroBox) return;

  // Animate hero content
  gsap.from('.hero-content h2', { opacity: 0, y: 50, duration: 1, ease: 'power2.out' });
  gsap.from('.hero-content p', { opacity: 0, y: 50, duration: 1, delay: 0.2, ease: 'power2.out' });
  gsap.from('.hero-stats', { opacity: 0, scale: 0.8, duration: 1, delay: 0.4, ease: 'power2.out' });

  // Update stats
  updateHeroStats();

  // Initialize particles.js
  particlesJS('particles-js', {
    particles: {
      number: { value: 50, density: { enable: true, value_area: 800 } },
      color: { value: '#007bff' },
      shape: { type: 'circle' },
      opacity: { value: 0.5, random: true },
      size: { value: 3, random: true },
      line_linked: { enable: true, distance: 150, color: '#007bff', opacity: 0.4, width: 1 },
      move: { enable: true, speed: 2, direction: 'none', random: true }
    },
    interactivity: {
      detect_on: 'canvas',
      events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' } },
      modes: { repulse: { distance: 100, duration: 0.4 }, push: { particles_nb: 4 } }
    },
    retina_detect: true
  });
}

/**
 * Updates hero section stats with card and tag counts.
 * @param {Array<Object>} items - The items to calculate stats for.
 */
function updateHeroStats(items = Object.values(categorizedItems).flat()) {
  const cardCount = items.length;
  const tagCount = [...new Set(items.flatMap(item => item.tags))].length;
  document.querySelector('.card-count').textContent = cardCount;
  document.querySelector('.tag-count').textContent = tagCount;
}

/**
 * Generates HTML for star rating based on a numeric value.
 * @param {number} rating - The rating value (0-5).
 * @returns {string} HTML string of star icons.
 */
function generateStars(rating) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5 ? 1 : 0;
  let stars = '';
  for (let i = 0; i < fullStars; i++) stars += '<i class="fas fa-star"></i>';
  if (halfStar) stars += '<i class="fas fa-star-half-alt"></i>';
  for (let i = fullStars + halfStar; i < 5; i++) stars += '<i class="far fa-star"></i>';
  return stars;
}

/**
 * Creates a card element for the carousel.
 * @param {Object} item - The item data.
 * @param {number} index - The index of the item.
 * @returns {HTMLElement} The card element.
 */
function createCardElement(item, index) {
  const card = document.createElement('div');
  card.className = 'carousel-card';
  card.dataset.id = index;
  card.innerHTML = `
    <div class="card-image"><img class="card-image" src="${item.image}" loading="lazy" alt="${item.title}"></div>
    <div class="card-content">
      <h3>${item.title}</h3>
      <p class="category">Category: ${item.category}</p>
      <p class="description">${item.description}</p>
      <div class="tags">
        ${item.tags.map(tag => `<span class="tag" data-tag="${tag}"><i class="fas fa-tag"></i> ${tag}</span>`).join('')}
      </div>
      <div class="progress-bar">
        <div class="progress" style="width: ${item.progress}%"></div>
      </div>
      <div class="card-meta">
        <span class="last-updated">Updated: ${item.lastUpdated}</span>
        <div class="rating" title="Rating: ${item.rating}/5">
          ${generateStars(item.rating)}
        </div>
      </div>
      <div class="quick-stats flex gap-4 text-sm text-gray-600 dark:text-gray-300" title="Views: ${item.stats.views}, Duration: ${item.stats.duration}, Stars: ${item.stats.stars}, Components: ${item.stats.components}">
        <span class="flex items-center gap-1"><i class="fas fa-eye"></i> ${item.stats.views}</span>
        <span class="flex items-center gap-1"><i class="fas fa-clock"></i> ${item.stats.duration}</span>
        <span class="flex items-center gap-1"><i class="fas fa-star"></i> ${item.stats.stars}</span>
        <span class="flex items-center gap-1"><i class="fas fa-cubes"></i> ${item.stats.components === 'N/A' ? 'Not Available' : item.stats.components}</span>
      </div>
      <div class="card-actions">
        <a href="${item.url}" target="_blank" class="explore-btn">Explore</a>
        <button class="share-btn" title="Share"><i class="fas fa-share"></i></button>
        <!-- <button class="bookmark-btn" title="Bookmark"><i class="fas fa-bookmark"></i></button> -->
      </div>
    </div>
  `;
  return card;
}

/**
 * Renders carousel cards with optional sorting.
 * @param {Array<Object>} items - The items to render.
 * @param {number} cardCount - The number of cards.
 */
function renderCarouselCards(items, cardCount) {
  const sortSelect = document.querySelector('.sort-select');
  let sortedItems = [...items];
  if (sortSelect && sortSelect.value !== 'default') {
    sortedItems.sort((a, b) => {
      if (sortSelect.value === 'rating') return b.rating - a.rating;
      if (sortSelect.value === 'views') return b.stats.views - a.stats.views;
      if (sortSelect.value === 'updated') return new Date(b.lastUpdated) - new Date(a.lastUpdated);
      return 0;
    });
  }
  const carousel = document.querySelector('.carousel');
  carousel.innerHTML = '';
  sortedItems.forEach((item, index) => {
    carousel.appendChild(createCardElement(item, index % cardCount));
  });
  setupCarouselNavigation(cardCount);
  setupShareFunctionality();
  setupTagFiltering();
  // setupBookmarkFunctionality();
}

/**
 * Initializes the carousel with categorized items.
 */
function initCarousel() {
	try {
	const carousel = document.querySelector('.carousel');
	if (!carousel) {
	 	console.error('Carousel container not found');
	 	return;
	}

	const allItems = Object.values(categorizedItems).flat();
	if (!allItems.length) {
	 	console.warn('No resources to display');
	 	carousel.innerHTML = '<p style="margin: auto;">No content available.</p>';
	 	return;
	}

	// Initialize hero section
	initHeroSection();

	// Add sort and search container
	const sortSearchContainer = document.createElement('div');
	sortSearchContainer.className = 'sort-search-container';

	// Add search input
	const searchInput = document.createElement('input');
	searchInput.type = 'text';
	searchInput.className = 'search-input';
	searchInput.placeholder = 'Search resources...';
	sortSearchContainer.appendChild(searchInput);

	// Add sort dropdown
	const sortSelect = document.createElement('select');
	sortSelect.className = 'sort-select';
	sortSelect.innerHTML = `
		<option value="default">Default</option>
	 	<option value="rating">Sort by Rating</option>
	 	<option value="views">Sort by Views</option>
	 	<option value="updated">Sort by Last Updated</option>
	`;
	sortSearchContainer.appendChild(sortSelect);

	carousel.parentElement.insertBefore(sortSearchContainer, carousel);

	// Add category navigation
	const categoryNav = document.createElement('div');
	categoryNav.className = 'category-nav';
	categoryNav.innerHTML = '<button class="category-btn active" data-category="all">All</button>';
	Object.keys(categorizedItems).forEach(category => {
	 	const btn = document.createElement('button');
	 	btn.className = 'category-btn';
	 	btn.dataset.category = category;
	 	btn.textContent = category;
	 	categoryNav.appendChild(btn);
	});
	carousel.parentElement.insertBefore(categoryNav, sortSearchContainer);

	// Add reset filter button
	const resetButton = document.createElement('button');
	resetButton.className = 'reset-filter-btn';
	resetButton.textContent = 'Reset Filter';
	resetButton.style.display = 'none';
	carousel.parentElement.insertBefore(resetButton, categoryNav);

	// Render initial cards (all items)
	renderCarouselCards(allItems, allItems.length);

	// Add click event for category buttons
	document.querySelectorAll('.category-btn').forEach(btn => {
	 	btn.addEventListener('click', () => {
	   	const category = btn.dataset.category;
	   	document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
	   	btn.classList.add('active');
	   	searchInput.value = ''; // Clear search on category change
	   	let itemsToRender = category === 'all' ? allItems : categorizedItems[category];
	   	if (!itemsToRender || !itemsToRender.length) {
	     	carousel.innerHTML = '<p style="margin: auto;">No items available for this category.</p>';
	     	resetButton.style.display = 'block';
	     	updateHeroStats([]);
	     	return;
	   }
	  	renderCarouselCards(itemsToRender, itemsToRender.length);
	   	resetButton.style.display = 'none';
	   	updateHeroStats(itemsToRender);
	 });
	});

	// Setup additional functionalities
	setupSearchFunctionality();
	setupSortFunctionality();
	setupOfflineDetection();
	} catch (error) {
		console.error('Carousel initialization error:', error);
	}
}

/**
 * Sets up carousel navigation and animations.
 * @param {number} cardCount - The number of cards.
 */
function setupCarouselNavigation(cardCount) {
  const carousel = document.querySelector('.carousel');
  const prevBtn = document.querySelector('.carousel-arrow.prev');
  const nextBtn = document.querySelector('.carousel-arrow.next');
  const cards = carousel.querySelectorAll('.carousel-card');

  if (!carousel || !prevBtn || !nextBtn || !cards.length) {
    console.error('Carousel or navigation elements not found');
    return;
  }

  let currentIndex = 0;
  const cardWidth = cards[0].offsetWidth + 20; // 20px gap
  const visibleCards = Math.min(4, cardCount);

  function updateCarousel(animate = true) {
    const offset = -currentIndex * cardWidth;
    if (animate) {
      gsap.to(carousel, {
        x: offset,
        duration: 0.5,
        ease: 'power2.out',
        onComplete: () => {
          if (currentIndex >= cardCount) {
            currentIndex -= cardCount;
            carousel.style.transition = 'none';
            carousel.style.transform = `translateX(${-currentIndex * cardWidth}px)`;
            carousel.offsetHeight; // Trigger reflow
            carousel.style.transition = 'transform 0.5s ease';
          } else if (currentIndex < 0) {
            currentIndex += cardCount;
            carousel.style.transition = 'none';
            carousel.style.transform = `translateX(${-currentIndex * cardWidth}px)`;
            carousel.offsetHeight; // Trigger reflow
            carousel.style.transition = 'transform 0.5s ease';
          }
        }
      });
    } else {
      carousel.style.transform = `translateX(${offset}px)`;
    }
  }

  prevBtn.addEventListener('click', () => {
    currentIndex--;
    updateCarousel();
  });

  nextBtn.addEventListener('click', () => {
    currentIndex++;
    updateCarousel();
  });

  // Hover animation for cards
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      gsap.to(card, {
        rotationY: 360,
        duration: 1,
        ease: 'power2.out',
        onStart: () => {
          card.classList.add('gold-hover');
          addSparkleEffect(card);
        },
        onComplete: () => {
          card.style.transform = 'rotateY(0deg)';
        }
      });
    });
    card.addEventListener('mouseleave', () => {
      card.classList.remove('gold-hover');
    });
  });

  // Initial positioning
  updateCarousel(false);

  // Update on resize
  window.addEventListener('resize', () => updateCarousel(false));
}

/**
 * Adds sparkle effect to a card on hover.
 * @param {HTMLElement} card - The card element.
 */
function addSparkleEffect(card) {
  const sparkles = 5;
  for (let i = 0; i < sparkles; i++) {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    card.appendChild(sparkle);
    gsap.to(sparkle, {
      x: Math.random() * 100 - 50,
      y: Math.random() * 100 - 50,
      scale: Math.random() * 0.5 + 0.5,
      opacity: 0,
      duration: 0.5,
      delay: Math.random() * 0.3,
      onComplete: () => sparkle.remove()
    });
  }
}

/**
 * Sets up share functionality for cards.
 */
function setupShareFunctionality() {
  const shareButtons = document.querySelectorAll('.share-btn');
  shareButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.carousel-card');
      if (!card) return;
      const id = parseInt(card.dataset.id, 10);
      const allItems = Object.values(categorizedItems).flat();
      const item = allItems[id];

      if (navigator.share) {
        navigator.share({
          title: item.title,
          text: item.description,
          url: item.url
        })
          .then(() => {
            btn.innerHTML = '<i class="fas fa-check"></i>';
            setTimeout(() => {
              btn.innerHTML = '<i class="fas fa-share"></i>';
            }, 2000);
          })
          .catch(err => {
            console.error('Web Share failed:', err);
            fallbackToWhatsApp(item, btn);
          });
      } else {
        fallbackToWhatsApp(item, btn);
      }
    });
  });
}

/**
 * Fallback to WhatsApp sharing.
 * @param {Object} item - The item to share.
 * @param {HTMLElement} btn - The share button.
 */
function fallbackToWhatsApp(item, btn) {
  const encodedUrl = encodeURIComponent(item.url);
  const encodedText = encodeURIComponent(`${item.title}: ${item.description}`);
  const whatsappUrl = `https://api.whatsapp.com/send?text=${encodedText}%20${encodedUrl}`;
  window.open(whatsappUrl, '_blank');
}

/**
 * Sets up bookmark functionality for cards.
 */
function setupBookmarkFunctionality() {
  const bookmarkButtons = document.querySelectorAll('.bookmark-btn');
  bookmarkButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.carousel-card');
      if (!card) return;
      const id = parseInt(card.dataset.id, 10);
      const allItems = Object.values(categorizedItems).flat();
      const item = allItems[id];
      let bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]');
      const isBookmarked = bookmarks.some(b => b.url === item.url);
      if (isBookmarked) {
        bookmarks = bookmarks.filter(b => b.url !== item.url);
        btn.innerHTML = '<i class="fas fa-bookmark"></i>';
      } else {
        bookmarks.push(item);
        btn.innerHTML = '<i class="fas fa-bookmark" style="color: gold;"></i>';
      }
      localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
      const modal = document.createElement('div');
      modal.className = 'modal success';
      modal.innerHTML = `<p>${isBookmarked ? 'Removed from' : 'Added to'} bookmarks</p>`;
      document.body.appendChild(modal);
      modal.style.display = 'block';
      setTimeout(() => modal.remove(), 2000);
    });
  });
}

/**
 * Sets up search functionality for filtering cards.
 */
function setupSearchFunctionality() {
  const searchInput = document.querySelector('.search-input');
  if (!searchInput) return;
  searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase().trim();
    const activeCategoryBtn = document.querySelector('.category-btn.active');
    const activeCategory = activeCategoryBtn ? activeCategoryBtn.dataset.category : 'all';
    const baseItems = activeCategory === 'all' ? Object.values(categorizedItems).flat() : categorizedItems[activeCategory];
    const filteredItems = query
      ? baseItems.filter(item =>
          item.title.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query) ||
          item.tags.some(tag => tag.toLowerCase().includes(query))
        )
      : baseItems;
    const carousel = document.querySelector('.carousel');
    if (!filteredItems.length) {
      carousel.innerHTML = '<p style="margin: auto;">No items found for this search.</p>';
      updateHeroStats([]);
      return;
    }
    renderCarouselCards(filteredItems, filteredItems.length);
    updateHeroStats(filteredItems);
  });
}

/**
 * Sets up sort functionality for cards.
 */
function setupSortFunctionality() {
  const sortSelect = document.querySelector('.sort-select');
  if (!sortSelect) return;
  sortSelect.addEventListener('change', () => {
    const activeCategoryBtn = document.querySelector('.category-btn.active');
    const activeCategory = activeCategoryBtn ? activeCategoryBtn.dataset.category : 'all';
    const itemsToRender = activeCategory === 'all' ? Object.values(categorizedItems).flat() : categorizedItems[activeCategory];
    renderCarouselCards(itemsToRender, itemsToRender.length);
  });
}

/**
 * Sets up offline detection and redirection.
 */
function setupOfflineDetection() {
  window.addEventListener('offline', () => {
    const modal = document.createElement('div');
    modal.className = 'modal error';
    modal.innerHTML = '<p>No internet connection. Redirecting to offline page...</p>';
    document.body.appendChild(modal);
    modal.style.display = 'block';
    setTimeout(() => {
      window.location.href = 'offline.html';
    }, 3000);
  });
  window.addEventListener('online', () => {
    const modal = document.createElement('div');
    modal.className = 'modal success';
    modal.innerHTML = '<p>Internet connection restored!</p>';
    document.body.appendChild(modal);
    modal.style.display = 'block';
    setTimeout(() => modal.remove(), 2000);
  });
}

/**
 * Sets up tag filtering for carousel cards.
 */
function setupTagFiltering() {
  const tags = document.querySelectorAll('.tag');
  tags.forEach(tag => {
    tag.addEventListener('click', () => {
      const tagValue = tag.dataset.tag;
      filterCarouselByTag(tagValue);
    });
  });
}

/**
 * Filters carousel by a specific tag.
 * @param {string} tag - The tag to filter by.
 */
function filterCarouselByTag(tag) {
  const carousel = document.querySelector('.carousel');
  const resetButton = document.querySelector('.reset-filter-btn');
  const activeCategoryBtn = document.querySelector('.category-btn.active');
  const activeCategory = activeCategoryBtn ? activeCategoryBtn.dataset.category : 'all';

  const baseItems = activeCategory === 'all' ? Object.values(categorizedItems).flat() : categorizedItems[activeCategory];
  const filteredItems = baseItems.filter(item => item.tags.includes(tag));

  if (!filteredItems.length) {
    carousel.innerHTML = '<p style="margin: auto;">No items found for this tag.</p>';
    resetButton.style.display = 'block';
    updateHeroStats([]);
    return;
  }

  renderCarouselCards(filteredItems, filteredItems.length);

  document.querySelectorAll('.tag').forEach(t => t.classList.toggle('active', t.dataset.tag === tag));

  const modal = document.createElement('div');
  modal.className = 'modal success';
  modal.innerHTML = `<p>Filtered by "${tag}"</p>`;
  document.body.appendChild(modal);
  modal.style.display = 'block';
  setTimeout(() => modal.remove(), 2000);

  resetButton.style.display = 'block';
  updateHeroStats(filteredItems);
}

/**
 * Resets the carousel to show items of the active category.
 */
function resetCarousel() {
  const carousel = document.querySelector('.carousel');
  const resetButton = document.querySelector('.reset-filter-btn');
  const activeCategoryBtn = document.querySelector('.category-btn.active');
  const activeCategory = activeCategoryBtn ? activeCategoryBtn.dataset.category : 'all';

  const itemsToRender = activeCategory === 'all' ? Object.values(categorizedItems).flat() : categorizedItems[activeCategory];
  renderCarouselCards(itemsToRender, itemsToRender.length);

  document.querySelectorAll('.tag').forEach(t => t.classList.remove('active'));

  resetButton.style.display = 'none';
  updateHeroStats(itemsToRender);
}

// Initialize carousel on DOM load
document.addEventListener('DOMContentLoaded', () => {
  initCarousel();
  const resetButton = document.querySelector('.reset-filter-btn');
  if (resetButton) {
    resetButton.addEventListener('click', resetCarousel);
  }
});
