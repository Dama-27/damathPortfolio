import type {
  NavLink,
  JourneyEvent,
  SkillCategory,
  Experience,
  Project,
  Offer,
  Certification,
  ContactInfo,
  OwnerInfo,
} from '../types';

/* ── Owner Info ── */
export const ownerInfo: OwnerInfo = {
  name: 'Damath De Silva',
  role: 'Cloud & Software Engineer · AWS · DevOps · AI/ML',
  tagline: 'Building scalable cloud-native systems — one Lambda at a time.',
  current: 'Software Engineering Intern at WealthOS (AWS serverless)',
  education:
    'BSc Engineering (Hons) Computer Engineering, University of Jaffna (Apr 2022 – Present), GPA 3.41',
  bio: "I'm a final-year Computer Engineering undergraduate at the University of Jaffna, passionate about building intelligent, scalable systems. My work spans AWS serverless architectures, full-stack web development, embedded systems, and AI/ML research. I enjoy solving real-world problems by integrating smart software with cloud-native infrastructure.",
  pullQuote:
    "I don't just write code — I architect systems that scale, learn, and last.",
  interestTags: [
    'AWS',
    'Serverless',
    'DevOps',
    'Full-Stack',
    'Embedded Systems',
    'AI Agents',
    'Edge AI',
  ],
  contactBlurb:
    'Open to internship extensions, full-time roles, collaborations, and research opportunities. Based in Negombo, Sri Lanka.',
};

/* ── Nav Links ── */
export const navLinks: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Journey', href: '#journey' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

/* ── Hero Roles (typewriter) ── */
export const heroRoles: string[] = [
  'Cloud & Software Engineer',
  'AWS Serverless Builder',
  'DevOps Enthusiast',
  'AI/ML Explorer',
  'Final Year @ UoJ',
];

/* ── Journey Events ── */
export const journeyEvents: JourneyEvent[] = [
  {
    year: '2014–2016',
    title: "O/L at Maris Stella College",
    description: 'Foundation in sciences and mathematics',
  },
  {
    year: '2018–2020',
    title: 'A/L Physical Science',
    description:
      'Combined Maths B, Physics B, Chemistry B, English A',
  },
  {
    year: '2021',
    title: 'University Entrance Exam',
    description: 'Qualified for Engineering Faculty, University of Jaffna',
  },
  {
    year: 'Apr 2022',
    title: 'Started BSc Computer Engineering',
    description:
      'Began the journey into software, hardware, and everything in between',
  },
  {
    year: '2023',
    title: 'IEEE RAS Secretary',
    description: 'Took on leadership in robotics and automation society',
  },
  {
    year: 'Jan 2025',
    title: 'Final Year Research Begins',
    description:
      'Edge AI optimisation on resource-constrained microcontrollers',
  },
  {
    year: 'Present',
    title: 'Software Engineering Intern @ WealthOS',
    description: 'Building AWS serverless architectures in production',
  },
];

/* ── Skills ── */
export const skillCategories: SkillCategory[] = [
  {
    title: 'Cloud & DevOps',
    icon: 'RiCloudLine',
    skills: [
      'AWS Lambda',
      'API Gateway',
      'DynamoDB',
      'S3',
      'IAM',
      'CloudFormation',
      'Infrastructure as Code',
      'CI/CD',
    ],
  },
  {
    title: 'Languages',
    icon: 'RiCodeSSlashLine',
    skills: ['Python', 'Java', 'C/C++', 'JavaScript', 'TypeScript', 'PHP'],
  },
  {
    title: 'Web & Backend',
    icon: 'RiGlobalLine',
    skills: [
      'React.js',
      'Node.js',
      'Express.js',
      'Spring Boot',
      'REST APIs',
      'JWT',
      'Tailwind CSS',
    ],
  },
  {
    title: 'Databases',
    icon: 'RiDatabase2Line',
    skills: ['MySQL', 'MongoDB', 'Firebase'],
  },
  {
    title: 'AI / ML & Research',
    icon: 'RiBrainLine',
    skills: [
      'TensorFlow',
      'Scikit-learn',
      'OpenCV',
      'Edge AI',
      'Agentic Systems',
      'Multimodal Inference',
    ],
  },
  {
    title: 'Tools & Others',
    icon: 'RiToolsLine',
    skills: [
      'Git',
      'GitHub',
      'Jira',
      'Figma',
      'Postman',
      'Arduino',
      'ESP32',
    ],
  },
];

/* ── Experience ── */
export const experiences: Experience[] = [
  {
    title: 'Software Engineering Intern',
    company: 'WealthOS',
    companyUrl: 'https://www.wealthos.com',
    period: 'Present (2025)',
    type: 'Full-time Internship',
    bullets: [
      {
        text: 'Building and maintaining AWS serverless architectures (Lambda, API Gateway, DynamoDB)',
      },
      {
        text: 'Deploying infrastructure as code and improving cloud-native ecosystems',
      },
      {
        text: 'Contributing to real-world scalable backend engineering solutions',
      },
    ],
    tags: ['AWS Lambda', 'DynamoDB', 'API Gateway', 'Serverless', 'IaC'],
  },
];

/* ── Projects ── */
export const projects: Project[] = [
  {
    title: 'ShoplaLane',
    subtitle: 'E-commerce Platform',
    status: 'In Progress',
    tech: [
      'MongoDB',
      'Express.js',
      'React.js',
      'Node.js',
      'JWT',
      'Tailwind CSS',
    ],
    description:
      'Modern full-stack e-commerce platform with secure JWT authentication, role-based access, and robust REST APIs.',
    tags: ['MERN', 'JWT', 'Tailwind'],
    categories: ['Web'],
    githubUrl: 'https://github.com/Dama-27',
  },
  {
    title: 'Smart Water',
    subtitle: 'IoT Water Management System',
    status: 'Completed',
    statusDate: 'Jan–May 2025',
    tech: ['ESP32', 'C', 'React', 'Firebase'],
    description:
      'ESP32-based household water monitoring system tracking inflow, outflow, water level, and TDS quality with real-time Firebase sync.',
    tags: ['ESP32', 'Firebase', 'C', 'IoT'],
    categories: ['IoT/Embedded'],
  },
  {
    title: 'Bookify',
    subtitle: 'Booking & Management Platform',
    status: 'Completed',
    statusDate: 'Jan–May 2025',
    tech: ['Spring Boot', 'React.js', 'MySQL', 'JWT'],
    role: 'Project Manager & Backend Developer',
    description:
      'Web platform for one-time and recurring bookings with automated reminders, client profiles, feedback, and analytics.',
    tags: ['Spring Boot', 'MySQL', 'React', 'Jira'],
    categories: ['Web'],
  },
  {
    title: 'Student Attendance System',
    subtitle: 'Attendance Management',
    status: 'Completed',
    statusDate: 'Mar–Oct 2024',
    tech: ['HTML', 'CSS', 'JS', 'PHP', 'MySQL'],
    description:
      'Role-based attendance system for lecturers and students with enrollment management and lecturer approval workflow.',
    tags: ['PHP', 'MySQL', 'Role-based Auth'],
    categories: ['Web'],
  },
  {
    title: 'Edge AI Research',
    subtitle: 'Final Year Project',
    status: 'In Progress',
    statusDate: 'Jan 2025–Present',
    tech: ['TensorFlow', 'Python', 'Microcontrollers'],
    description:
      'Agent-based Edge AI system for dynamic selection and optimisation of pretrained models on resource-constrained microcontrollers. Supports multimodal inference (image, audio, text, sensor).',
    tags: ['Edge AI', 'TensorFlow', 'Agentic', 'Research'],
    categories: ['AI/ML', 'Research'],
    featured: true,
  },
];

/* ── What I Offer ── */
export const offers: Offer[] = [
  {
    icon: 'RiServerLine',
    title: 'Serverless Backend Engineering',
    description:
      'Design and deploy AWS Lambda-based architectures with API Gateway, DynamoDB, and IaC. Production-proven at WealthOS.',
  },
  {
    icon: 'RiCodeBoxLine',
    title: 'Full-Stack Web Development',
    description:
      'End-to-end web apps using MERN stack or Spring Boot + React, with clean REST APIs and responsive UIs.',
  },
  {
    icon: 'RiCpuLine',
    title: 'Embedded & IoT Systems',
    description:
      'Firmware development on ESP32/Arduino with cloud integration (Firebase, MQTT). Real-time sensor data pipelines.',
  },
  {
    icon: 'RiBrainLine',
    title: 'AI/ML Integration',
    description:
      'Scikit-learn, TensorFlow, OpenCV pipelines. Edge AI deployment on microcontrollers for resource-constrained environments.',
  },
  {
    icon: 'RiGitBranchLine',
    title: 'DevOps & CI/CD',
    description:
      'Git workflows, infrastructure as code, cloud-native deployment pipelines on AWS.',
  },
  {
    icon: 'RiFileTextLine',
    title: 'Research & Documentation',
    description:
      'Academic research experience in Edge AI. Clear technical writing and system documentation.',
  },
];

/* ── Certifications ── */
export const certifications: Certification[] = [
  {
    title: 'AWS Solutions Architect – Associate',
    issuer: 'Amazon Web Services',
    expectedCompletion: 'mid-2025',
    progress: 65,
    note: 'Formalising serverless architecture knowledge from WealthOS internship',
    tags: ['Lambda', 'IAM', 'VPC', 'S3', 'CloudFormation'],
    status: 'in-progress',
  },
  {
    title: 'Machine Learning Specialization',
    issuer: 'Coursera / DeepLearning.AI',
    year: '2024',
    tags: ['Supervised Learning', 'Neural Networks', 'Python'],
    status: 'completed',
  },
  {
    title: 'Python for Everybody',
    issuer: 'Coursera / University of Michigan',
    year: '2023',
    tags: ['Python', 'Data Structures', 'APIs'],
    status: 'completed',
  },
];

/* ── Contact Info ── */
export const contactInfo: ContactInfo = {
  email: 'damathdesilva@gmail.com',
  phone: '+94773419799',
  location: 'Negombo, Sri Lanka',
  github: 'https://github.com/Dama-27',
  linkedin: 'https://www.linkedin.com/in/damath-de-silva-1799a22b5',
  portfolioUrl: 'https://damathwork.vercel.app/',
};
