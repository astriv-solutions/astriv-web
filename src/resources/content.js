import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Astriv",
  lastName: "Solutions",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Tech Startup",
  avatar: "/images/avatar.png",
  email: "info@astrivsolutions.com",
  location: "Asia/Colombo", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Sinhala"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      Stay in the loop as we build the future of tech in Sri Lanka. 
      Subscribe to our newsletter for exclusive updates on Astriv Solutions, 
      behind the scenes looks at the development of Flaire, 
      and insights from our founders.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/astrivsolutions",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/astrivsolutions",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/astrivsolutions/",
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing our work as a ${person.role}`,
  headline: <>Crafting the future of Sri Lankan tech.</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">Flaire</strong></>,
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      Founded in January 2025 by three visionaries, 
      Astriv Solutions was born from a shared belief that technology should be a 
      force for positive change. Our journey began with a single powerful idea, 
      which quickly evolved into our flagship product: Flaire. We're dedicated to 
      building solutions that revolutionize the software space in Sri Lanka.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About Us",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        We are three co-founders with a shared passion for innovation and a 
        commitment to making a tangible impact. We are united by a common goal: 
        to build a company that not only creates groundbreaking products but also 
        inspires a new generation of local tech entrepreneurs.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Our Products",
    experiences: [
      {
        company: "Flaire",
        timeframe: "2025 - Present",
        role: "Brand-Creator collaboration platform",
        achievements: [
          <>
            User centric design: Our software is built with the user in mind, 
            offering an intuitive experience that simplifies complex tasks.
          </>,
          <>
            Local innovation, global standard: Flaire is a testament to the fact 
            that Sri Lankan talent can create world-class products that compete on 
            a global stage.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "About Founders",
    institutions: [
      {
        name: "Ravindu Liyanage",
        description: <>CEO</>,
      },
      {
        name: "Methira Fernando",
        description: <>COO</>,
      },
      {
        name: "Quinn Winston",
        description: <>CMO</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Our Vision",
    skills: [
      {
        title: "A Better Sri Lanka",
        description: <>To be the catalyst for a new era of technology in Sri Lanka, 
        building innovative software that empowers individuals and businesses to 
        thrive on a global scale. We envision a future where Sri Lanka is recognized 
        as a hub of world-class software innovation, and Astriv Solutions is at the 
        forefront of that transformation.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Get an exclusive look at our journey and insights into the future of tech in Sri Lanka.",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Technology",
  title: `Projects – ${person.name}`,
  description: `The Technology behind it by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Design",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
