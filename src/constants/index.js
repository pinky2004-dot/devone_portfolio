const navLinks = [
  {
    name: "About",
    link: "#about",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Projects",
    link: "#projects",
  },
  {
    name: "Research",
    link: "#research",
  },
  {
    name: "Contact",
    link: "#contact",
  },
];

const words = [
  { text: "Analytics", imgPath: "/images/designs.svg" },
  { text: "Research", imgPath: "/images/code.svg" },
  { text: "Algorithms", imgPath: "/images/ideas.svg" },
  { text: "Code", imgPath: "/images/concepts.svg" },
  { text: "Analytics", imgPath: "/images/designs.svg" },
  { text: "Research", imgPath: "/images/code.svg" },
  { text: "Algorithms", imgPath: "/images/ideas.svg" },
  { text: "Code", imgPath: "/images/concepts.svg" },
];

const counterItems = [
  { value: 1, suffix: "+", label: "Years of Research" },
  { value: 30, suffix: "+", label: "Students Mentored" },
  { value: 5, suffix: "+", label: "AI/ML Projects" },
  { value: 2, suffix: "+", label: "Certifications" },
];


const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];



const expCards = [
  {
    // imgPath: "/images/exp1.png",
    title: "AI4ALL - Artificial Intelligence Instructor",
    date: "May 2025 - Present",
    responsibilities: [
      "Achieved a 15% boost in project completion rates by leading cross-functional student teams through Agile sprints and milestone tracking.",
      "Delivered technical workshops on machine learning fundamentals that enabled 30+ students to develop portfolio-ready AI/ML projects.",
      "Mentored early-career developers to accelerate collaboration using Git, Jupyter, and Google Colab.",
    ],
  },
  {
    // imgPath: "/images/exp2.png",
    title: "HyperAnalytics - Data Science & AI Intern",
    date: "October 2024 - Present",
    responsibilities: [
      "Engineered a full-stack, cloud-based analytics platform to modernize high-volume transaction tracking, owning the project end-to-end from design to deployment.",
      "Designed scalable solutions and automated reporting pipelines using Python and Linux, improving processing speed and data accuracy.",
      "Implemented a time series anomaly detection system with neural networks and ARIMA models to flag volatility spikes.",
    ],
  },
  {
    // imgPath: "/images/exp3.png",
    title: "IDXExchange - Data Science Intern",
    date: "June 2025 - August 2025",
    responsibilities: [
      "Collaborated with a 5-person team to develop predictive models for California housing closing prices using MLS data from January 2024 to June 2025.",
      "Built a neural network that achieved an 88% R² on test data and performed missing data analysis by evaluating multiple imputation techniques.",
      "Evaluated multiple imputation techniques against mean and median substitution to maximize accuracy.",
    ],
  },
];



const projects = [
  {
    title: "Pet Health AI - Intelligent Pet Health Assistant",
    description: "Developed an AI-powered full-stack web application to classify pet health queries as emergency or non-emergency using a Retrieval-Augmented Generation (RAG) pipeline and AWS.",
    technologies: ["Flask", "Langchain", "OpenAI GPT-4.1", "Pinecone", "AWS"],
    githubLink: "https://github.com/pinky2004-dot/pet-health-ai",
    image: "/images/project1.png",
    features: [
      "RAG pipeline for context-based response generation",
      "AWS cloud integration for scalability",
      "Emergency classification with high accuracy",
      "User-friendly web interface"
    ]
  },
  {
    title: "Bank Churn Forecast - Lead Developer",
    description: "Engineered robust data pipelines and built a neural network-based churn prediction model using TensorFlow/Keras, improving recall to 85.8%.",
    technologies: ["Python", "TensorFlow/Keras", "Pandas", "NumPy", "React"],
    githubLink: "https://github.com/pinky2004-dot/Churn-Forecast-NN",
    image: "/images/project2.png",
    features: [
      "Neural network with 85.8% recall rate",
      "Robust data preprocessing pipelines",
      "Statistical analysis and insights",
      "Responsive React frontend"
    ]
  },
  {
    title: "Housing Price Prediction Model",
    description: "Collaborated with a 5-person team to develop predictive models for California housing closing prices using MLS data, achieving 88% R² accuracy.",
    technologies: ["Python", "Neural Networks", "MLS Data", "Statistical Analysis"],
    githubLink: "https://github.com/pinky2004-dot/california_property_closing_prices",
    image: "/images/project3.png",
    features: [
      "88% R² accuracy on test data",
      "Missing data analysis and imputation",
      "Multiple model evaluation techniques",
      "Real estate market insights"
    ]
  }
];

const researchAreas = [
  {
    title: "Taxonomy Construction Algorithms",
    description: "Designing and evaluating taxonomy construction algorithms using embedding quantization and large language models (LLMs) in the I.D.E.A Lab.",
    lab: "Intelligent Data Engineering and Analytics Lab (I.D.E.A Lab)",
    duration: "August 2024 - Present",
    technologies: ["LLMs", "Embedding Quantization", "Taxonomy Construction", "Machine Learning"]
  },
  {
    title: "Time Series Anomaly Detection",
    description: "Implemented neural networks and ARIMA models for detecting volatility spikes in high-volume transaction data.",
    lab: "HyperAnalytics",
    duration: "October 2024 - Present",
    technologies: ["Neural Networks", "ARIMA", "Time Series Analysis", "Anomaly Detection"]
  }
];


export {
  words,
  abilities,
  counterItems,
  expCards,
  navLinks,
  projects,
  researchAreas,
};
