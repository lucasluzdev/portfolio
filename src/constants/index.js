import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  reactNative,
  postgres,
  mysql,
  nextjs,
  vuejs,
  jquery,
  golang,
  python,
  php,
  laravel,
  java,
  spring,
  kotlin,
  bootstrap,
  jest,
  vitest,
  cypress,
  selenium,
  elasticsearch,
  redis,
  kubernetes,
  jenkins,
  grafana,
  prometheus,
  aws,
  gcp,
  terraform,
  rabbitmq,
  linux,
  uol,
  senac,
  digitalk,
  cinpal,
  tecnovisio,
  buddy,
  dolly,
  etec,
  gpt,
  omnistack,
  play,
  tuxmotion,
  wordpress,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend, to fit your needs",
    icon: web,
    description:
      "I can develop beautiful and responsive interfaces for your projects with performance, usability and accessibility for your customers. My knowledge on modern tech stacks can help your projects to improve in size, reliability and efficiency.",
  },
  {
    title: "Backend to solve your problems",
    icon: backend,
    description:
      "I can build APIs, microservices and integrations with external services, aiming for security, performance, effectiveness and response time for your services. My knowledge on modern tech stacks can help your projects to improve in size, reliability and efficiency.",
  },
  {
    title: "Mobile, to access in the palm of your hand",
    icon: mobile,
    description:
      "I can develop mobile applications with great usability, so your users can access your services when, and where he want with ease.",
  },
  {
    title: "Two's company, three's a Fullstack!",
    icon: creator,
    description:
      "Imagine a jack of all trades working for/with you. Don't need to imagine anymore, you've found him!",
  },
  {
    title: "Don't forget to store your data",
    icon: web,
    description:
      "Data is one of the most important things to have. So it's good to make sure your data is stored in a safe, structured and organized way. I can help create and maintain SQL/NoSQL databases, so your company understands your customers' needs.",
  },
  {
    title: "DevOps, so you can be online 24/7",
    icon: backend,
    description:
      "In nowdays, it's nice to automate as much processes as you can. I can help you to develop and mantain provisioning and pipelines so all your workflow won't need as much human hands as it should have.",
  },
  {
    title: "Scalability, while saving every penny",
    icon: mobile,
    description:
      "Hosting and scalability are difficult or costy? Not anymore! Believe me! It's possible to have your services in cloud, with ease, integrating with a ecosystem of cloud services, while whitin your budget! Show your project to the whole world, and conquer more customers!",
  },
  {
    title: "Less Artificial and more Intelligence",
    icon: creator,
    description:
      "Have you ever thought about implementing artificial intelligence in your products and services? Did you know it's easier than you think? Using third-party services, and techniques like Machine Learning and Deep Learning, we can build products with super powers!",
  },
  {
    title: "It's faster to grow with mentorship",
    icon: web,
    description:
      "Everyone has a beginning, but not everyone has to go through difficult steps. With mentoring, it becomes easier to achieve your goals more quickly and effectively, design and implement projects and follow the most appropriate paths for your career.",
  },
  {
    title: "Need a speaker? You've found him!",
    icon: backend,
    description:
      "It's always good to discover new things. And lectures are a great way to obtain information in a quick and didactic way, to be up to date with the latest developments in the world of technology, careers and professional relationships.",
  },
];

const mainTechnologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "React Native",
    icon: reactNative,
  },
  {
    name: "Postgres",
    icon: postgres,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Redis",
    icon: redis,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Kubernetes",
    icon: kubernetes,
  },
  {
    name: "Jenkins",
    icon: jenkins,
  },
  {
    name: "AWS",
    icon: aws,
  },
];

const otherTechnologies = [
  {
    name: "Terraform",
    icon: terraform,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "NextJS",
    icon: nextjs,
  },
  {
    name: "VueJS",
    icon: vuejs,
  },
  {
    name: "Redux",
    icon: redux,
  },
  {
    name: "JQuery",
    icon: jquery,
  },
  {
    name: "Golang",
    icon: golang,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "PHP",
    icon: php,
  },
  {
    name: "Laravel",
    icon: laravel,
  },
  {
    name: "Wordpress",
    icon: wordpress,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Spring",
    icon: spring,
  },
  {
    name: "Kotlin",
    icon: kotlin,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "RabbitMQ",
    icon: rabbitmq,
  },
  {
    name: "Jest",
    icon: jest,
  },
  {
    name: "Vitest",
    icon: vitest,
  },
  {
    name: "Cypress",
    icon: cypress,
  },
  {
    name: "Selenium",
    icon: selenium,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Linux",
    icon: linux,
  },
  {
    name: "Elastic Search",
    icon: elasticsearch,
  },
  {
    name: "Grafana",
    icon: grafana,
  },
  {
    name: "Prometheus",
    icon: prometheus,
  },
  {
    name: "GCP",
    icon: gcp,
  },
];

const experiences = [
  {
    title: "Fullstack Software Engineer",
    company_name: "UOL - Online Universe",
    icon: uol,
    iconBg: "#FFD580",
    date: "May 2021 - Current",
    points: [
      "Using <strong>NodeJS, Typescript, MongoDB, Git, Docker, Kubernetes, AWS and OpenAI</strong>, I developed the <strong>first plugin for ChatGPT to disseminate news with content in Portuguese</strong>, increasing the reach of content produced by the company, using innovative technologies, with the <strong>adoption of use by hundreds of thousands of users in the first days in production</strong>.",
      "Developed products implementing <strong>OpenAI's ChatGPT API</strong> using <strong>Python, VueJS, MongoDB, RabbitMQ, Redis, Git, Docker,Jenkins, Kubernetes and AWS</strong>, to automate tasks and processes at UOL's newsroom and social media, <strong>improvingproductivity in the production of journalistic articles and social media content by 20%</strong>.",
      "Developed projects for the 2022 elections, which served <strong>tens of millions of users</strong> between September and November 2022, and served around <strong>3 million simultaneous users throughout Brazil</strong> on the days of the 1st and 2nd round ofvoting, generating the <strong>highest audience and number of accesses in the history of the company</strong>, using <strong>ReactJS,React Native, Nodejs, MongoDB, RabbitMQ, Redis, Git, Docker, Jenkins, Kubernetes, AWS, Grafana and Prometheus</strong>.",
      "Developed projects with <strong>ReactJS, React Native, Nodejs, MongoDB, RabbitMQ, Redis, Git, Docker, Jenkins,Kubernetes, AWS, Grafana and Prometheus</strong> to automate the creation of content and publication of articles, weatherforecast, stocks and newsletter, <strong>improving audience in 24% and providing free and useful information availableto users throughout Brazil</strong>.",
      "Developed plugins with <strong>VueJS, Nodejs, MongoDB, RabbitMQ, Redis, Git, Docker, Jenkins, Kubernetes, AWS, Grafanaand Prometheus</strong>, to automate the management of newsletter and subscribers base, to optimize tasks related to thisproduct, providing an <strong>increase in agility, availability and quality of the content and its delivery by 30%</strong> innewsletter workflow, <strong>increasing the number of new subscribers by 26%</strong>, generating an increase in the company's revenue.",
    ],
  },
  {
    title: "Programming Teacher",
    company_name: "Senac - National Commercial Apprenticeship Service",
    icon: senac,
    iconBg: "#FFFFFF",
    date: "March 2022 - May 2022 | March 2023 - June 2023",
    points: [
      "Taught classes on mobile development, frontend, backend, desktop, database and software testing for technical training of dozens of students.",
      "Evaluated course completion projects developed by students under my guidance, obtaining satisfactory results, resulting in the formation of new qualified professionals for the market.",
    ],
  },
  {
    title: "Fullstack Software Engineer",
    company_name: "Digitalk SmartFlow - 360º Omnichannel CRM",
    icon: digitalk,
    iconBg: "#FFFFFF",
    date: "January 2020 - May 2021",
    points: [
      "Developed chatbots connected to <strong>IBM Watson's AI</strong> using <strong>ReactJS, Nodejs, MongoDB, PostgreSQL, Redis, Git, Docker,Jenkins, Kubernetes and AWS</strong>, making the products available to several clients, facilitating the service processbetween companies and clients and improving their customer service, <strong>increasing conversion rates in up to 40% forboth Digitalk and their clients</strong>.",
      "Implemented <strong>automated tests, queues, caching, gitflow and CI/CD</strong> in the team's workflow, promoting greateragility andefficiency in the approval and delivery of new features and products, <strong>increasing productivity andreducing the occurrence of bugs and conflict issues in code and deploys</strong>.",
      "<strong>Digitalk Mobile</strong>: Rewrited the web interface into a hybrid mobile application using <strong>React Native, Redux,TailwindCSS and Git</strong>, making it accessible and performant on mobile devices, <strong>increasing customer conversion</strong> andfacilitating the user experience through a native mobile application for iOS and Android.",
    ],
  },
  {
    title: "Fullstack Software Developer",
    company_name: "Cinpal - Industrial Automobile Parts Company",
    icon: cinpal,
    iconBg: "#FFFFFF",
    date: "July 2019 - December 2019",
    points: [
      "Created and implemented microservices in <strong>PHP, Laravel, PostgreSQL, Javascript, JQuery, BootstrapCSS and Git</strong>, toimprove the creation of new software projects and boilerplates for internal use by the development team,<strong>optimizing creation time for new projects and features in up to 60%</strong>.",
      "Refactored legacy software written in VB6, using <strong>PHP, PostgreSQL, Javascript, JQuery, BootstrapCSS and Git</strong>,getting the benefits of using current resources to <strong>improve performance, security and availability of products,and ease of obtaining new employees</strong>.",
      "Creation of <strong>routines and procedures in SQL databases with hundreds of millions of records</strong>, using <strong>MySQL,PostgreSQL, Oracle Database and IBM DB2</strong>, to extract business information necessary to identify points to beimproved, providing <strong>better decision making information for new products and strategies</strong>, increasing company’s<strong>revenue, performance and efficiency</strong>.",
    ],
  },
  {
    title: "Co-founder and Fullstack Software Developer",
    company_name: "TecnoVisio",
    icon: tecnovisio,
    iconBg: "#FFFFFF",
    date: "February 2018 - December 2019",
    points: [
      "Developed websites, e-commerces and landing pages for our customers, using <strong>PHP, JQuery, Bootstrap, Laravel,Wordpress, PostgreSQL and Git</strong>, resulting in high performance products, with availability for tens of millions ofusers throughout Brazil, <strong>improving their revenue and market share in up to 60%</strong>.",
      "Developed a white label system for franchising dental offices using <strong>PHP, JQuery, Bootstrap, Laravel, PostgreSQLand Git</strong>, which digitized the entire process of scheduling and monitoring procedures, making the service moreaccessible to customers and <strong>increasing company's revenue in up to 32% and new customers by 20%</strong>.",
    ],
  },
];

const projects = [
  {
    name: "The first ChatGPT plugin with news and content in portuguese",
    description:
      "I helped to develop the first plugin for ChatGPT to disseminate news with content in Portuguese, increasing the reach of content produced by the company, using innovative technologies, with the adoption of use by hundreds of thousands of users in the first days in production.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Fast API",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "OpenAI API",
        color: "pink-text-gradient",
      },
      {
        name: "ChatGPT",
        color: "pink-text-gradient",
      },
    ],
    image: gpt,
    source_code_link:
      "https://economia.uol.com.br/noticias/redacao/2023/10/16/ia-uol-cria-plugin-no-chatgpt-para-busca-de-noticias-do-brasil.htm",
  },
  {
    name: "Etec de Embu's website",
    description:
      "The Etec de Embu website was developed to facilitate registration for entrance exams, and to access information about the institution, courses offered and teaching staff. The website has all the features to facilitate contact between the academic institution and people interested in taking the courses offered. It has a CMS made by scratch, to allow users to publish new content when necessary.",
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "JQuery",
        color: "pink-text-gradient",
      },
      {
        name: "PHP",
        color: "pink-text-gradient",
      },
      {
        name: "Codeigniter",
        color: "pink-text-gradient",
      },
      {
        name: "MySQL",
        color: "pink-text-gradient",
      },
    ],
    image: etec,
    source_code_link: "https://www.etecdeembu.com.br/",
  },
  {
    name: "DOLL-Y",
    description:
      "DOLL-Y is a clone of Open AI's DALL-E. This project makes use of artificial intelligence services from OpenAI, to generate customized images through prompts provided by the user.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: dolly,
    source_code_link: "https://github.com/lucasluzdev/DOLL-Y-frontend",
  },
  {
    name: "Omnistack",
    description:
      "Omnistack is an AirBnB clone. This project has a frontend, backend and mobile connected via a websocket, and it is possible to register users and rent properties.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "reactnative",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "socket.io",
        color: "pink-text-gradient",
      },
    ],
    image: omnistack,
    source_code_link: "https://github.com/lucasluzdev/omnistack9-frontend",
  },
  {
    name: "Tuxmotion (WIP)",
    description:
      "Tuxmotion will be a FOSS alternative to genymotion. It will be software for emulating Android devices, to assist in application development and for general use. This project will make use of the most advanced features of current operating systems, to provide a better user and development experience.",
    tags: [
      {
        name: "rust",
        color: "blue-text-gradient",
      },
      {
        name: "virtualization",
        color: "green-text-gradient",
      },
      {
        name: "android",
        color: "pink-text-gradient",
      },
    ],
    image: tuxmotion,
    source_code_link: "#",
  },
  {
    name: "Financial Buddy (WIP)",
    description:
      "Financial Buddy will be a finance and investment control ecosystem to help users control their costs and investments. It will be a project aimed at usability and ease so that people can more easily control their finances and control their investments.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "reactnative",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "postgresql",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
    image: buddy,
    source_code_link: "#",
  },
  {
    name: "MixList (WIP)",
    description:
      "MixList is a project to centralize the creation and modification of your playlists. For people who listen to music and podcasts on different platforms and want to standardize their playlists, the project will have integration with the main audio and video streaming platforms.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "reactnative",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: play,
    source_code_link: "#",
  },
];

export { services, mainTechnologies, otherTechnologies, experiences, projects };
