import drumshop from "../assets/images/projects/drumshop.png";
import reddit from "../assets/images/projects/reddit.jpg";

const projects = [
  {
    id: 1,
    title: "Reddit App",
    image: reddit,
    alt: "Reddit App project",
    techList: "React, Nextjs, Tailwind, Redux,",
    description: "A light version of the Reddit app.",
    live: "https://redditapp-jonword.vercel.app",
    repo: "https://https://github.com/jonword/redditapp",
  },

  {
    id: 2,
    title: "Drumshop",
    image: drumshop,
    alt: "Drumshop project",
    techList: "Nextjs, React, TypeScript, Prisma, Supabase, Tailwind",
    description: "A responsive e-commerce web application.",
    live: "https://drumshop.vercel.app",
    repo: "https://github.com/jonword/next-ecommerce-ds",
  },
];

export default projects;
