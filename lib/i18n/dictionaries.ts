import type { Locale } from './config'

const dictionaries = {
  en: {
    nav: {
      name: 'Mohamed Gamal',
      items: [
        ['Home', 'home'],
        ['About', 'about'],
        ['Skills', 'skills'],
        ['Projects', 'projects'],
        ['Process', 'process'],
        ['Why Me', 'why-me'],
        ['Contact', 'contact'],
      ],
      language: '中文',
      menu: 'Menu',
    },
    hero: {
      badgeOne: 'Open to Remote / Internship Roles',
      badgeTwo: 'React • Next.js • TypeScript • AI-Assisted Development',
      headline: 'AI-Assisted Full-Stack Developer Building Practical Web Applications',
      subtitle:
        'I am a Computer Science student in Malaysia, originally from Egypt, fluent in English and Chinese. I build modern web applications using React, Next.js, TypeScript, and AI-assisted development tools such as Codex, ChatGPT, Cursor, Claude, DeepSeek, and Qwen. My focus is creating practical, scalable, and user-friendly applications for real business needs.',
      primaryCta: 'View My Projects',
      secondaryCta: 'Contact Me',
      availability: [
        ['Remote', 'Available'],
        ['Internship', 'Available'],
        ['Languages', 'English / Chinese'],
        ['Location', 'Malaysia'],
      ],
      scroll: 'Scroll',
    },
    about: {
      eyebrow: 'About Me',
      title: 'A practical path into AI-assisted full-stack development',
      body: [
        'I am a Computer Science student in Malaysia, originally from Egypt, building my career in software development. I speak English and Chinese, which helps me communicate with both international and Chinese teams.',
        'My background in English customer support taught me how to understand user needs, communicate clearly, and solve problems patiently. Now I am applying that mindset to software development by building practical full-stack applications using React, Next.js, TypeScript, and AI-assisted development tools.',
        'I am especially interested in front-end development, full-stack web applications, AI-powered products, and China-focused technology such as WeChat Mini Programs and Chinese AI models.',
      ],
      highlights: [
        ['Computer Science Student', 'Building a long-term foundation in software engineering.'],
        ['English + Chinese Communication', 'Able to work with international and Chinese teams.'],
        ['AI-Assisted Full-Stack Development', 'Using AI tools to build faster while still reviewing and testing carefully.'],
      ],
    },
    skills: {
      eyebrow: 'Skills',
      title: 'A focused stack for modern product development',
      groups: [
        ['Frontend Development', ['React', 'Next.js App Router', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'Ant Design', 'Framer Motion', 'Responsive UI']],
        ['Backend & Database', ['Next.js API Routes / Server Actions', 'Supabase', 'PostgreSQL', 'Prisma', 'Authentication', 'REST APIs', 'Basic Node.js']],
        ['AI-Assisted Development', ['Codex', 'ChatGPT', 'Cursor', 'Claude', 'DeepSeek', 'Qwen', 'Prompt Engineering', 'AI API Integration']],
        ['Tools & Workflow', ['Git', 'GitHub', 'Gitee', 'Vercel', 'GitHub Actions', 'Basic Docker', 'README Documentation', 'Deployment Workflow']],
      ],
    },
    projects: {
      eyebrow: 'Featured Projects',
      title: 'Honest project roadmap with live work and future case studies',
      description:
        'I show project status clearly so recruiters can see what is live, what is in progress, and what is planned next.',
      businessValue: 'Business value',
      keyFeatures: 'Key features',
      liveDemo: 'Live Demo',
      github: 'GitHub',
      gitee: 'Gitee',
      caseStudy: 'Case Study',
      comingSoon: 'Coming Soon',
      backToProjects: 'Back to projects',
      actions: 'Project links',
    },
    process: {
      eyebrow: 'How I Build',
      title: 'A clear workflow from idea to deployed product',
      steps: [
        ['Understand Requirements', 'I clarify the user problem, business goal, and core features before writing code.'],
        ['Plan the Architecture', 'I define the pages, components, database structure, API flow, and deployment plan.'],
        ['Prototype with AI Tools', 'I use Codex, ChatGPT, Cursor, and Claude to speed up UI prototyping, code generation, refactoring, and debugging.'],
        ['Build with React / Next.js', 'I develop the application using TypeScript, reusable components, responsive UI, and clean project structure.'],
        ['Integrate Backend & AI', 'I connect authentication, database, APIs, and AI features such as smart suggestions, AI replies, and bilingual outputs.'],
        ['Test, Optimize & Deploy', 'I review the code, test important flows, optimize performance, write documentation, and deploy to Vercel.'],
      ],
    },
    whyMe: {
      eyebrow: 'Why Hire Me',
      title: 'Professional, honest, and ready to grow inside a real team',
      items: [
        'AI-assisted development skills that help me build and learn faster',
        'Bilingual communication in English and Chinese',
        'Computer Science student with strong long-term learning direction',
        'Full-stack mindset: frontend, backend, database, AI integration',
        'Practical project focus instead of only tutorial projects',
        'Customer-oriented mindset from previous support experience',
        'Familiar with China-focused tools such as WeChat Mini Programs, Gitee, Qwen, and DeepSeek',
        'Hardworking, reliable, and open to internship, remote work, and test tasks',
      ],
    },
    aiWorkflow: {
      eyebrow: 'How I Use AI Professionally',
      title: 'AI is my accelerator, not a replacement for understanding',
      points: [
        'I use AI to brainstorm product ideas and user flows',
        'I use AI to generate first UI drafts and improve layouts',
        'I use AI to debug errors and explain unfamiliar code',
        'I use AI to refactor components and improve readability',
        'I use AI to write documentation and bilingual content',
        'I manually review, test, and adjust the final code',
      ],
      quote:
        'AI helps me move faster, but I am responsible for reviewing, testing, and improving the final product.',
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Let’s Build Something Practical Together',
      subtitle:
        'I am open to remote internships, junior front-end roles, full-stack project opportunities, and AI-assisted web development work.',
      sendEmail: 'Send Email',
      viewGithub: 'View GitHub',
      downloadResume: 'Download Resume',
      placeholder: 'Add link',
    },
    footer: {
      text: 'Built with Next.js, TypeScript, Tailwind CSS, and AI-assisted development.',
    },
  },
  zh: {
    nav: {
      name: 'Mohamed Gamal',
      items: [
        ['首页', 'home'],
        ['关于我', 'about'],
        ['技能', 'skills'],
        ['项目', 'projects'],
        ['流程', 'process'],
        ['为什么选择我', 'why-me'],
        ['联系我', 'contact'],
      ],
      language: 'EN',
      menu: '菜单',
    },
    hero: {
      badgeOne: '开放远程 / 实习机会',
      badgeTwo: 'React • Next.js • TypeScript • AI 辅助开发',
      headline: '用 AI 辅助开发构建实用型 Web 应用',
      subtitle:
        '我是一名在马来西亚学习的计算机科学学生，来自埃及，能够使用英文和中文沟通。我使用 React、Next.js、TypeScript，以及 Codex、ChatGPT、Cursor、Claude、DeepSeek、Qwen 等 AI 工具构建现代 Web 应用，重点关注真实业务需求、可扩展性和良好的用户体验。',
      primaryCta: '查看项目',
      secondaryCta: '联系我',
      availability: [
        ['远程', '可沟通'],
        ['实习', '可沟通'],
        ['语言', '英文 / 中文'],
        ['地点', '马来西亚'],
      ],
      scroll: '继续浏览',
    },
    about: {
      eyebrow: '关于我',
      title: '从用户沟通到 AI 辅助全栈开发的实践路线',
      body: [
        '我是一名在马来西亚学习的计算机科学学生，来自埃及，正在认真建立自己的软件开发职业方向。英文和中文沟通能力让我能够更好地与国际团队和中国团队协作。',
        '过去的英文客服经历让我学会了理解用户需求、清晰沟通和耐心解决问题。现在我把这种用户意识带入软件开发，通过 React、Next.js、TypeScript 和 AI 辅助开发工具构建实用型全栈应用。',
        '我特别关注前端开发、全栈 Web 应用、AI 产品，以及面向中国市场的技术方向，例如微信小程序、Gitee、Qwen 和 DeepSeek。',
      ],
      highlights: [
        ['计算机科学学生', '持续建立软件工程和产品开发基础。'],
        ['英文 + 中文沟通', '能够与国际团队和中文团队协作。'],
        ['AI 辅助全栈开发', '使用 AI 工具提升开发效率，同时保持人工审查和测试。'],
      ],
    },
    skills: {
      eyebrow: '技能',
      title: '面向现代产品开发的技术栈',
      groups: [
        ['前端开发', ['React', 'Next.js App Router', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'Ant Design', 'Framer Motion', '响应式 UI']],
        ['后端与数据库', ['Next.js API Routes / Server Actions', 'Supabase', 'PostgreSQL', 'Prisma', '认证登录', 'REST APIs', '基础 Node.js']],
        ['AI 辅助开发', ['Codex', 'ChatGPT', 'Cursor', 'Claude', 'DeepSeek', 'Qwen', '提示词工程', 'AI API 集成']],
        ['工具与流程', ['Git', 'GitHub', 'Gitee', 'Vercel', 'GitHub Actions', '基础 Docker', 'README 文档', '部署流程']],
      ],
    },
    projects: {
      eyebrow: '精选项目',
      title: '清楚展示已上线项目、进行中项目和未来规划',
      description: '我会明确标注项目状态，不把未完成项目伪装成已完成项目。',
      businessValue: '业务价值',
      keyFeatures: '核心功能',
      liveDemo: '线上演示',
      github: 'GitHub',
      gitee: 'Gitee',
      caseStudy: '案例分析',
      comingSoon: '即将补充',
      backToProjects: '返回项目',
      actions: '项目链接',
    },
    process: {
      eyebrow: '开发流程',
      title: '从需求到上线的清晰工作方式',
      steps: [
        ['理解需求', '先明确用户问题、业务目标和核心功能，再开始写代码。'],
        ['规划架构', '规划页面、组件、数据库结构、API 流程和部署方案。'],
        ['用 AI 快速原型', '使用 Codex、ChatGPT、Cursor、Claude 辅助 UI 原型、代码生成、重构和调试。'],
        ['使用 React / Next.js 开发', '用 TypeScript、可复用组件、响应式 UI 和清晰结构开发应用。'],
        ['集成后端与 AI', '连接认证、数据库、API，以及智能建议、AI 回复和双语输出等 AI 功能。'],
        ['测试、优化与部署', '审查代码、测试关键流程、优化性能、编写文档并部署到 Vercel。'],
      ],
    },
    whyMe: {
      eyebrow: '为什么选择我',
      title: '诚实、可靠，并且愿意在真实团队中快速成长',
      items: [
        '具备 AI 辅助开发能力，可以更快学习和交付',
        '能够使用英文和中文沟通',
        '计算机科学学生，有长期学习方向',
        '具备全栈思维：前端、后端、数据库、AI 集成',
        '关注实用项目，而不是只做教程项目',
        '有客服背景，更理解用户需求和沟通',
        '熟悉微信小程序、Gitee、Qwen、DeepSeek 等中国相关工具',
        '认真可靠，开放实习、远程工作和测试任务',
      ],
    },
    aiWorkflow: {
      eyebrow: '我如何专业地使用 AI',
      title: 'AI 是开发加速器，不是理解能力的替代品',
      points: [
        '用 AI 梳理产品想法和用户流程',
        '用 AI 生成初版 UI 并优化布局',
        '用 AI 调试错误和解释陌生代码',
        '用 AI 重构组件并提升可读性',
        '用 AI 编写文档和双语内容',
        '最终代码由我人工审查、测试和调整',
      ],
      quote: 'AI 帮我更快推进，但最终产品的审查、测试和质量改进由我负责。',
    },
    contact: {
      eyebrow: '联系我',
      title: '让我们一起构建实用的产品',
      subtitle: '我开放远程实习、初级前端岗位、全栈项目机会，以及 AI 辅助 Web 开发工作。',
      sendEmail: '发送邮件',
      viewGithub: '查看 GitHub',
      downloadResume: '下载简历',
      placeholder: '待补充链接',
    },
    footer: {
      text: '使用 Next.js、TypeScript、Tailwind CSS 和 AI 辅助开发构建。',
    },
  },
} as const

export function getDictionary(locale: Locale) {
  return dictionaries[locale]
}

export type Dictionary = ReturnType<typeof getDictionary>
