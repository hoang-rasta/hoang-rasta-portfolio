export type SkillIconName = 'code' | 'server' | 'database' | 'cloud' | 'project' | 'users'

export interface Profile {
  name: string
  photoUrl: string
  role: string
  location: string
  email: string
  phone: string
  linkedinUrl: string
  githubUrl: string
  cvUrl: string
}

export interface Education {
  school: string
  degree: string
  period: string
}

export interface Skill {
  icon: SkillIconName
  name: string
}

export interface SkillTool {
  name: string
  iconUrl: string
}

export interface Experience {
  title: string
  company: string
  period: string
  items: readonly string[]
}

export const profile: Profile = {
  name: 'PHAM HOANG ANH',
  photoUrl: '/assets/profile/hoang-rasta.jpg',
  role: 'Software Engineer',
  location: 'Ha Noi, Viet Nam',
  email: 'hoanganhpham.rasta@gmail.com',
  phone: '(+84) 966 166 821',
  linkedinUrl: 'https://www.linkedin.com/in/hoang-rasta/',
  githubUrl: 'https://github.com/hoang-rasta',
  cvUrl: '/assets/profile/hoang-rasta-resume.pdf',
}

export const summaryPoints: readonly string[] = [
  'Software Engineer with 4+ years of experience developing enterprise applications across Healthcare and Logistics domains.',
  'Experienced in designing and developing full-stack solutions using C#, .NET Core, ASP.NET, Angular, SQL Server, and Microsoft Azure.',
  'Skilled in RESTful API development, database optimization, cloud-based solutions, and application maintenance throughout the software development lifecycle.',
]

export const skills: Skill[] = [
  { icon: 'code', name: 'C#, .NET, ASP.NET API, ASP.NET MVC' },
  { icon: 'server', name: 'Angular, AngularJS, Svelte JS' },
  { icon: 'database', name: 'SQL Server, PostgreSQL, Database Design' },
  { icon: 'cloud', name: 'Azure Functions, Logic Apps, Service Bus' },
  { icon: 'project', name: 'RESTful APIs, GraphQL, Hasura' },
  { icon: 'users', name: 'Git, Docker, Postman, Jira, Confluence' },
]

export const education: Education = {
  school: 'Military Technical Academy',
  degree: 'Bachelor of Engineering, Software Engineering',
  period: 'Sep 2017 - Sep 2022',
}

export const experiences: readonly Experience[] = [
  {
    title: 'Full-stack Developer',
    company: 'FPT Software',
    period: 'Mar 2025 - Present',
    items: [
      'Developed and enhanced warehouse management modules supporting inventory control, stock adjustment, shipment tracking, and operational reporting using .NET 8 and Angular.',
      'Migrated workflow automation processes from Azure Logic Apps to Azure Function Apps, improving maintainability and deployment flexibility.',
      'Refactored cloud integration workflows by replacing Azure Event Grid communication with direct Azure Service Bus integrations, simplifying message processing and system maintenance.',
      'Optimized SQL Server queries, indexing strategies, and data access logic to improve application responsiveness for warehouse operations.',
      'Investigated and resolved production issues across backend services, databases, and frontend applications to ensure system stability.',
      'Designed and implemented new business features, APIs, and Angular frontend components based on operational requirements.',
      'Collaborated with Business Analysts, QA engineers, and stakeholders to clarify requirements and deliver software solutions within Agile development cycles.',
    ],
  },
  {
    title: 'Full-stack Developer',
    company: 'FPT Software',
    period: 'Jun 2024 - Mar 2025',
    items: [
      'Contributed to the modernization of an enterprise healthcare platform by supporting the migration from legacy ASP.NET-based modules to a newer Golang and Svelte JS technology stack.',
      'Analyzed legacy application code, reporting frameworks, and healthcare operational workflows to ensure feature consistency during modernization efforts.',
      'Designed and developed configurable report templates supporting hospital operational monitoring and business reporting requirements.',
      'Collaborated closely with Business Analysts and domain experts to understand legacy business rules and ensure accurate implementation within the new platform architecture.',
      'Supported onboarding activities by providing technical guidance and knowledge transfer to new project members.',
    ],
  },
  {
    title: 'Full-stack Developer',
    company: 'FPT Software',
    period: 'Aug 2023 - May 2024',
    items: [
      'Developed and maintained enterprise healthcare management modules supporting operational monitoring, patient workflows, and hospital resource management.',
      'Designed and implemented backend services using ASP.NET, ADO.NET, and SignalR to facilitate real-time operational monitoring and inter-system communication.',
      'Developed and enhanced ASP.NET MVC screens aligned with healthcare operational requirements.',
      'Created and maintained reporting functionalities supporting real-time and historical healthcare operational analytics.',
      'Optimized SQL Server queries and data access logic, improving reporting performance and system responsiveness.',
      'Collaborated with business stakeholders to analyze healthcare workflows and translate business requirements into technical solutions.',
      'Participated in production support, troubleshooting, and application enhancement activities across multiple hospital operation modules.',
    ],
  },
  {
    title: 'Full-stack Developer',
    company: 'FPT Software',
    period: 'Jan 2023 - Jul 2023',
    items: [
      "Designed and developed backend services and business logic using C#, .NET Framework, and ADO.NET, following the project's layered architecture.",
      'Built and maintained web pages using HTML, CSS, and JavaScript to support publishing workflow features.',
      'Implemented and integrated web services to connect system components and enhance functionality.',
      'Collaborated with QA and Business Analysts to clarify requirements, fix bugs, and support on-time release delivery.',
    ],
  },
  {
    title: '.NET Developer',
    company: 'FPT Software',
    period: 'May 2022 - Dec 2022',
    items: [
      "Developed backend functionalities and RESTful APIs using .NET Core, following the project's layered architecture.",
      'Built and maintained front-end pages using HTML, CSS, and JavaScript to support key application workflows.',
      'Performed bug fixing and functional testing to support on-time delivery of project modules.',
    ],
  },
  {
    title: '.NET Fresher Program',
    company: 'FPT Software Academy',
    period: 'Feb 2022 - Apr 2022',
    items: [
      'Completed intensive training in ASP.NET Core, Entity Framework Core, SQL Server, RESTful APIs, and software engineering fundamentals.',
      'Developed web-based applications using ASP.NET Core MVC and SQL Server following layered architecture principles.',
      'Participated in team-based development exercises, code reviews, and Agile development practices.',
      'Strengthened knowledge of software design principles, database design, and enterprise application development.',
    ],
  },
  {
    title: '.NET Developer Intern',
    company: 'Novaon Martech',
    period: 'Sep 2021 - Feb 2022',
    items: [
      'Contributed to the development and maintenance of a Business Growth and Marketing Automation platform supporting campaign management and reporting workflows.',
      'Implemented backend functionalities using ASP.NET and Entity Framework to support data processing and reporting features.',
      'Participated in designing and maintaining SQL Server databases, including data analysis and statistical reporting functions.',
      'Collaborated with senior engineers to apply Repository-Service design patterns and software development best practices.',
      'Resolved application defects and enhanced existing modules to improve usability and system stability.',
    ],
  },
]

export const skillsAndTools: readonly SkillTool[] = [
  { name: 'C#', iconUrl: '/assets/icons/csharp.svg' },
  { name: '.NET', iconUrl: '/assets/icons/dotnet.svg' },
  { name: 'ASP.NET API', iconUrl: '/assets/icons/aspnet.svg' },
  { name: 'ASP.NET MVC', iconUrl: '/assets/icons/aspnet.svg' },
  { name: 'Angular', iconUrl: '/assets/icons/angular.svg' },
  { name: 'AngularJS', iconUrl: '/assets/icons/angular.svg' },
  { name: 'Svelte JS', iconUrl: '/assets/icons/svelte.svg' },
  { name: 'SQL Server', iconUrl: '/assets/icons/sql-server.svg' },
  { name: 'PostgreSQL', iconUrl: '/assets/icons/postgresql.svg' },
  { name: 'Database Design', iconUrl: '/assets/icons/database.svg' },
  { name: 'Azure Functions', iconUrl: '/assets/icons/azure.svg' },
  { name: 'Azure Logic Apps', iconUrl: '/assets/icons/azure.svg' },
  { name: 'Azure Service Bus', iconUrl: '/assets/icons/azure.svg' },
  { name: 'RESTful APIs', iconUrl: '/assets/icons/openapi.svg' },
  { name: 'GraphQL', iconUrl: '/assets/icons/graphql.svg' },
  { name: 'Hasura', iconUrl: '/assets/icons/hasura.svg' },
  { name: 'Git', iconUrl: '/assets/icons/git.svg' },
  { name: 'Docker', iconUrl: '/assets/icons/docker.svg' },
  { name: 'Postman', iconUrl: '/assets/icons/postman.svg' },
  { name: 'Jira', iconUrl: '/assets/icons/jira.svg' },
  { name: 'Confluence', iconUrl: '/assets/icons/confluence.svg' },
]