export interface Experience {
  company: string
  role: string
  location: string
  period: string
  bullets: string[]
  logo?: string
}

export interface Certification {
  name: string
  issuer?: string
  link?: string
  date?: string
}

export interface SkillCategory {
  name: string
  items: string[]
}

export const experiences: Experience[] = [
  {
    company: 'Capgemini - Financial Services',
    role: 'Software Engineer Intern',
    location: 'Malvern, PA',
    period: 'June 2025 - October 2025',
    logo: '/logos/CapGeminiLogo.png',
    bullets: [
      'Built and deployed a production AI-powered contact center platform using AWS (Amazon Connect, Lex V2, Lambda, Bedrock, S3, CloudWatch), supporting 24/7 customer service and reducing average customer wait times by 60–80%.',
      'Developed Retrieval-Augmented Generation (RAG) pipelines integrating vector search and enterprise knowledge bases, improving response accuracy and reducing hallucinations using Claude, Amazon Titan, and LLM validation layers.',
      'Designed and implemented backend services and REST APIs for call routing, conversation state management, analytics ingestion, and model orchestration using Python and AWS Lambda.',
      'Implemented system observability and monitoring using AWS CloudWatch, Glue, Athena, and QuickSight, enabling real-time performance tracking and analytics dashboards.',
      'Automated infrastructure provisioning using Infrastructure-as-Code (AWS CloudFormation) and implemented CI/CD pipelines for deployment validation and rollback safety.',
      'Collaborated cross-functionally with product managers, ML engineers, and DevOps teams to deliver scalable cloud-native architecture supporting high concurrency workloads.',
      'Authored technical architecture documentation and presented system design and business impact analysis to senior engineering leadership and stakeholders.',
    ],
  },
  {
    company: 'Proton Software Service (IONIX AI)',
    role: 'Software Engineer Intern (Cloud & AI Systems)',
    location: 'Chester Springs, PA',
    period: 'May 2024 – June 2025',
    logo: '/logos/IonixLogo.png',
    bullets: [
      'Designed, deployed, and maintained cloud-native backend infrastructure on AWS (EC2, IAM, VPC, Route 53, S3, ECS), supporting AI-powered production systems with high availability, scalability, and security.',
      'Built and optimized backend services using Java (Spring MVC) and Python, implementing data validation, business logic, and microservice-based workflows to support real-time and batch inference pipelines.',
      'Developed and maintained REST APIs for internal tooling, analytics ingestion, and model orchestration across distributed services.',
      'Implemented CI/CD deployment workflows and container-based deployments using AWS ECS and Docker to reduce release time and improve system reliability.',
      'Designed and deployed a relational database system to replace Confluence-based workflows, reducing data retrieval times by 60% and improving operational efficiency across engineering teams.',
      'Built full-stack internal dashboards using JavaScript, HTML, Tailwind CSS, Node.js, and React, improving access to critical resources and increasing team productivity by 30%.',
      'Developed Python-based batch processing pipelines for large-scale datasets using numerical optimization techniques (Black–Scholes modeling and Newton–Raphson method) to improve predictive accuracy and computational performance.',
      'Automated ETL workflows to normalize and process large CSV and Excel datasets, improving data consistency and reducing manual processing overhead.',
      'Collaborated with AI researchers, backend engineers, and DevOps teams to deliver scalable AI infrastructure supporting multi-tenant workloads.',
    ],
  },
]

export const certifications: Certification[] = [
  {
    name: 'AWS Solutions Architect - Associate',
    issuer: 'Amazon Web Services',
    link: 'https://www.credly.com/badges/d4c6eed7-568f-4e2c-89c1-3b848e4bd1b9/public_url',
  },
]

export const skills: SkillCategory[] = [
  {
    name: 'Cloud & Infrastructure',
    items: [
      'AWS (EC2, Lambda, S3, CloudWatch, ECS, IAM, VPC, Route 53, Amazon Connect, Lex V2, Bedrock, Glue, Athena, QuickSight, CloudFormation)',
      'Docker',
      'CI/CD',
      'Infrastructure-as-Code',
    ],
  },
  {
    name: 'Languages',
    items: ['Python', 'Java', 'JavaScript', 'TypeScript', 'SQL'],
  },
  {
    name: 'Frameworks & Libraries',
    items: ['React', 'Next.js', 'Node.js', 'Spring MVC', 'Tailwind CSS'],
  },
  {
    name: 'AI/ML',
    items: [
      'RAG (Retrieval-Augmented Generation)',
      'Vector Search',
      'LLM Integration (Claude, Amazon Titan)',
      'Batch Processing',
      'Numerical Optimization',
    ],
  },
  {
    name: 'Tools & Technologies',
    items: [
      'REST APIs',
      'Microservices',
      'ETL Pipelines',
      'Database Design',
      'System Observability',
      'Analytics Dashboards',
    ],
  },
]

export const education = {
  degree: 'B.S. in Information Science & Technology',
  university: 'Temple University',
  graduationDate: 'May 2026',
  coursework: [
    'Data Science',
    'Data Structures & Algorithms',
    'Database Management Systems',
    'Distributed Systems',
    'Server-Side Web Development',
    'Client-Side Web Development',
    'Operating Systems',
    'Cloud Computing',
  ],
}
