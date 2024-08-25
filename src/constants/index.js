import { aiclub, iamneo, meta, ramanujan, shopify, starbucks, tesla, hacktoberfest } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    shopspy,
    avatar,
    shop,
    khojo,
    ai,
    recipe,
} from "../assets/icons";
import leetcode from '../assets/icons/leetcode.svg'
import samanvay from '../assets/images/main_dark.png';

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Java Full Stack Developer",
        company_name: "Iamneo",
        icon: iamneo,
        iconBg: "#accbe1",
        date: "August 2023 - December 2023",
        points: [
            "Spearheading the development and upkeep of robust web applications leveraging Java SpringBoot and associated technologies.",
            "Engaging in seamless collaboration with cross-functional teams, including designers and product managers, to deliver top-notch products.",
            "Implementing responsive design and Backend services, ensuring optimal cross-browser compatibility.",
            "Actively participating in code reviews, offering constructive feedback, and contributing to the continual enhancement of the development process.",
        ],
    },
    {
        title: "Open Source Contributor (Hacktoberfest 2023)",
        company_name: "Hacktoberfest",
        icon: hacktoberfest,
        iconBg: "#ff7f50",
        date: "Oct 2023",
        points: [
        "Contributed to various DSA and React.js projects, merging 7 pull requests during Hacktoberfest 2023.",
        "Collaborated with developers worldwide, enhancing project functionality and code quality.",
        "Engaged in code reviews, offering constructive feedback and fostering a collaborative community environment.",
        "Demonstrated commitment to open-source initiatives and continuous learning in software development.",
        ],        
    },
    {
        title: "Web Developer Team Member",
        company_name: "AI Club, VIT Bhopal",
        icon: aiclub,
        iconBg: "#fbc3bc",
        date: "Jan 2023 - Jan 2024",
        points: [
            "Actively engaged in the development and maintenance of web applications using React.js and related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implemented responsive design principles, ensuring seamless cross-browser compatibility.",
            "Played a key role in the team's 3D design model creation for the AI Conclave event.",
        ],
    },
    {
        title: "Technical Team Member",
        company_name: "Ramanujan Mathematica and SAP Club, VIT Bhopal",
        icon: ramanujan,
        iconBg: "#b7e4c7",
        date: "Jan 2023 - Jan 2024",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    }
    //template
    // {
    //     title: "Full stack Developer",
    //     company_name: "Meta",
    //     icon: meta,
    //     iconBg: "#a2d2ff",
    //     date: "Jan 2023 - Present",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/tanjul17',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/sarathetanjul/',
    },
    {
        name: 'Leetcode',
        iconUrl: leetcode,
        link: 'https://leetcode.com/tanjul_sarathe/',
    }
];

export const projects = [
    {
        iconUrl: samanvay,
        theme: 'btn-back-pink',
        name: 'Samanvay',
        description: 'Developed a Mental Health Support platform using advanced ML algorithms; implemented sentiment analysis with BERT NLP, resulting in personalized solutions with a 20% accuracy improvement.Deployed Clerk for authentication, enhancing security by 40%; engineered an SEO-friendly single-page application using Next.js, boosting page load speed by 50% and increasing user retention by 25%.',
        link: 'https://samanvay-v2.vercel.app/',
        live: 'https://samanvay-v2.vercel.app/'
    },
    {
        iconUrl: shop,
        theme: 'btn-back-red',
        name: 'ShopSpy',
        description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
        link: 'https://github.com/tanjul17/ShopSpy',
        live: 'https://new-shopspy.vercel.app/'
    },
    {
        iconUrl: avatar,
        theme: 'btn-back-green',
        name: '3-D Portfolio website',
        description: 'Explore my 3D portfolio with captivating animations and interactive models powered by Three.js technology. Step into a world where creativity meets innovation, unveiling boundless digital artistry possibilities.',
        link: 'https://github.com/tanjul17/3D-portfolio-website',
        live: 'https://tanjul-sarathe-3d-portfolio.netlify.app/'
    },
    {
        iconUrl: khojo,
        theme: 'btn-back-blue',
        name: 'Khojo',
        description: 'Designed and built a dynamic course search website using React.js, offering seamless navigation and responsive design. Empowering users to discover relevant courses efficiently, with intuitive filtering and sorting functionalities. Welcome to a user-centric platform, simplifying the pursuit of knowledge with cutting-edge technology.',
        link: 'https://github.com/tanjul17/KHOJO',
        live: 'https://khojo-v2.netlify.app/'
    },
    {
        iconUrl: ai,
        theme: 'btn-back-pink',
        name: 'AImagy',
        description: 'Developed by visionary minds, AImagy is your gateway to limitless creativity. Harnessing the power of AI, our platform seamlessly generates stunning images, inspiring imagination and innovation. Explore the future of digital artistry with AImagy, where every pixel tells a story.',
        link: 'https://github.com/tanjul17/AImagy',
        live: 'https://aimagy.netlify.app/'
    },
    {
        iconUrl: recipe,
        theme: 'btn-back-black',
        name: 'Take-A-Bite',
        description: 'Built with React.js and powered by Rapid API, our recipe search website revolutionizes culinary exploration. Uncover a world of flavors with ease, as you browse through diverse recipes tailored to your taste. Elevate your cooking game and embark on a delicious journey today!',
        link: 'https://github.com/tanjul17/Take-A-Bite',
        live: 'https://tanjul17.github.io/Take-A-Bite/'
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'SAARANSH - AI Summarizer Application',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link: 'https://github.com/tanjul17/Saranash-AI-Article-Summarizer',
        live: 'https://saranash-ai-article-summarizer.vercel.app/'
    }
];