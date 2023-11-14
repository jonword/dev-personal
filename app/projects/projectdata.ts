import drumshop from "../assets/images/projects/drumshop.png";
import reddit from "../assets/images/projects/reddit.jpg";
import lilium from "../assets/images/projects/lilium.png";

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
  {
    id: 3,
    title: "Lilium",
    image: lilium,
    alt: "Lilium project",
    techList: "Nextjs, React, TypeScript, Prisma, Supabase, Tailwind",
    description: "A web application for a local floral business.",
    live: "https://liliumflora.com",
    repo: "https://github.com/jonword/multistep-floral",
  },
];

export default projects;
