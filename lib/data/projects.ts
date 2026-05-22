import type { Locale } from '@/lib/i18n/config'

export type ProjectStatus = 'Live' | 'In Progress' | 'Planned' | 'Coming Soon'

export type Project = {
  slug: string
  title: string
  status: ProjectStatus
  statusLabel: string
  description: string
  businessValue: string
  features: string[]
  tech: string[]
  visual: 'ai-crm' | 'wechat' | 'resume' | 'portfolio' | 'weather' | 'taskflow' | 'commerce'
  links: {
    live?: string
    github?: string
    gitee?: string
  }
  caseStudy: {
    overview: string
    problem: string
    solution: string
    architecture: string
    aiWorkflow: string
    learning: string
    screenshots: string
  }
}

const baseTech = {
  portfolio: ['Next.js App Router', 'React', 'TypeScript', 'Tailwind CSS', 'shadcn/ui style components', 'Framer Motion', 'Vercel'],
  weather: ['Vue 3', 'TypeScript', 'Vite', 'Pinia', 'Axios', 'Element Plus', 'WeatherAPI', 'Vercel'],
  taskflow: ['Vue 3', 'TypeScript', 'Vite', 'Pinia', 'Element Plus', 'Tailwind CSS', 'VueUse', 'ECharts'],
  commerce: ['Vue 3', 'TypeScript', 'Vite', 'Pinia', 'Axios', 'Element Plus', 'Vant UI', 'Tailwind CSS'],
}

export function getProjects(locale: Locale): Project[] {
  const isZh = locale === 'zh'

  return [
    {
      slug: 'ai-customer-support-crm',
      title: isZh ? 'SupportPilot AI 客服智舱' : 'SupportPilot AI',
      status: 'Live',
      statusLabel: isZh ? '已上线' : 'Live',
      description: isZh
        ? '面向中小企业和中国市场团队的 AI 客服 / WeCom CRM 工作台，整合客户管理、会话收件箱、AI 回复建议、知识库、数据分析和演示登录。'
        : 'A production-style AI customer support and WeCom CRM dashboard with CRM, inbox, AI reply suggestions, knowledge base, analytics, templates, settings, and demo login.',
      businessValue: isZh
        ? '帮助客服团队更快整理客户信息、生成可审核的 AI 回复，并用数据了解支持效率。'
        : 'Helps support teams organize customers, respond faster with reviewed AI suggestions, and understand performance through analytics.',
      features: isZh
        ? ['演示登录', '客户 CRM', '三栏会话收件箱', 'AI 回复建议', '知识库', '数据图表', '模板管理', '设置页', '中英双语 UI']
        : ['Demo login', 'Customer CRM', 'Three-column inbox', 'AI reply suggestions', 'Knowledge base', 'Analytics charts', 'Templates', 'Settings', 'Chinese/English UI'],
      tech: ['Next.js', 'React', 'TypeScript', 'Ant Design', 'Tailwind CSS', 'Supabase', 'Prisma', 'Vercel AI SDK', 'DeepSeek/Qwen API', 'TanStack Query', 'Zustand'],
      visual: 'ai-crm',
      links: {
        live: 'https://supportpilot-ai-kappa.vercel.app',
      },
      caseStudy: {
        overview: isZh
          ? '这是一个已上线的作品集项目，用来展示我如何把 AI 能力放进真实客服工作流，而不是只做一个简单聊天机器人。'
          : 'This is a live portfolio project that shows how AI can be placed inside a real support workflow instead of a simple chatbot.',
        problem: isZh
          ? '很多小团队客服信息分散、回复慢，也没有统一的知识库和数据视图。'
          : 'Many small teams have scattered customer messages, slow replies, and no shared knowledge base or visibility into support performance.',
        solution: isZh
          ? '构建一个集成 CRM、会话收件箱、知识库、AI 回复建议、模板和分析图表的工作台。'
          : 'Build a single workspace that combines CRM, conversation inbox, knowledge base content, AI reply suggestions, templates, and analytics.',
        architecture: isZh
          ? 'Next.js App Router 负责页面和 API，Prisma schema 为 Supabase PostgreSQL 做准备，演示模式使用类型安全 mock 数据和 AI fallback。'
          : 'Next.js App Router handles pages and APIs, Prisma schema prepares for Supabase PostgreSQL, and demo mode uses typed mock data plus an AI fallback.',
        aiWorkflow: isZh
          ? 'AI 会根据客户消息、客户资料和知识库内容生成建议，但客服必须先审核、编辑，再手动发送。'
          : 'AI generates suggestions from customer messages, customer profiles, and knowledge base context, but the agent must review, edit, and send manually.',
        learning: isZh
          ? '重点学习企业级仪表盘信息架构、AI 安全边界、Ant Design 表格、双语体验和可维护数据结构。'
          : 'The main learning goals were enterprise dashboard architecture, AI safety boundaries, Ant Design tables, bilingual UX, and maintainable data structures.',
        screenshots: isZh ? '可以通过线上演示查看当前界面。' : 'Available through the live demo.',
      },
    },
    {
      slug: 'wechat-booking-ecommerce',
      title: isZh ? '微信小程序预约 / 电商系统' : 'WeChat Mini Program Booking / E-commerce System',
      status: 'Planned',
      statusLabel: isZh ? '计划中' : 'Planned',
      description: isZh
        ? '面向中国市场的服务预约或小型电商小程序，并配套 Web 管理后台。'
        : 'A China-focused mini program for service booking or mini e-commerce, with a web-based admin panel for managing products, orders, and users.',
      businessValue: isZh
        ? '展示我能构建面向中国市场的移动优先应用，并连接真实管理后台。'
        : 'Shows ability to build mobile-first China-market applications connected to a real management backend.',
      features: isZh
        ? ['商品/服务列表', '预约/下单流程', '购物车/收藏', '管理后台', '订单状态', '支付模拟', '移动优先 UI']
        : ['Product/service listing', 'Booking/order flow', 'Cart/favorites', 'Admin dashboard', 'Order status', 'Payment simulation', 'Mobile-first UI'],
      tech: ['Taro React', 'WeChat Mini Program', 'Next.js Admin Panel', 'TypeScript', 'Supabase', 'Prisma', 'Ant Design'],
      visual: 'wechat',
      links: {},
      caseStudy: {
        overview: isZh ? '这是一个计划中的中国市场项目。' : 'This is a planned China-market project.',
        problem: isZh ? '许多小商家需要简单的移动端预约和订单管理能力。' : 'Many small businesses need simple mobile booking and order management.',
        solution: isZh ? '用小程序做用户端，用 Next.js 后台做管理端。' : 'Use a mini program for customers and a Next.js admin panel for operations.',
        architecture: isZh ? 'Taro React 小程序连接 Supabase/Prisma 后端，后台负责商品、订单和用户管理。' : 'A Taro React mini program connects to a Supabase/Prisma backend, with an admin panel for product, order, and user management.',
        aiWorkflow: isZh ? 'AI 用于流程图、表结构、组件拆分和中英文文案。' : 'AI helps with flow diagrams, data models, component breakdown, and bilingual copy.',
        learning: isZh ? '重点学习微信生态、移动端交互和后台管理流程。' : 'The learning focus is WeChat ecosystem constraints, mobile UX, and admin workflows.',
        screenshots: isZh ? '设计稿将在项目启动后补充。' : 'Design previews will be added after the project starts.',
      },
    },
    {
      slug: 'ai-resume-job-matching',
      title: isZh ? 'AI 简历 / 岗位匹配平台' : 'AI Resume / Job Matching Platform',
      status: 'Planned',
      statusLabel: isZh ? '计划中' : 'Planned',
      description: isZh
        ? '帮助用户对比简历和岗位描述，生成匹配分数、技能差距和中英文优化建议。'
        : 'An AI-powered platform that helps users compare resumes with job descriptions, generate match scores, detect skill gaps, and receive improvement suggestions in English and Chinese.',
      businessValue: isZh
        ? '适合学生、求职者、HR 和招聘流程，提高求职材料优化效率。'
        : 'Useful for students, job seekers, HR teams, and recruitment workflows.',
      features: isZh
        ? ['简历上传', '岗位描述输入', 'AI 匹配分数', '技能差距分析', '优化建议', '历史记录', '双语输出']
        : ['Resume upload', 'Job description input', 'AI match score', 'Skill gap analysis', 'Improvement suggestions', 'Saved history', 'Bilingual output'],
      tech: ['Next.js', 'React', 'TypeScript', 'shadcn/ui', 'Supabase', 'Vercel AI SDK', 'DeepSeek/Qwen API', 'React Hook Form', 'Zod'],
      visual: 'resume',
      links: {},
      caseStudy: {
        overview: isZh ? '这是一个计划中的 AI 产品型项目。' : 'This is a planned AI product-style project.',
        problem: isZh ? '求职者很难快速判断自己的简历是否匹配岗位。' : 'Job seekers struggle to quickly judge whether their resume matches a role.',
        solution: isZh ? '让 AI 对比简历和 JD，输出分数、差距和改进建议。' : 'Let AI compare the resume and job description, then return a score, gaps, and improvement suggestions.',
        architecture: isZh ? 'Next.js 处理页面和 Server Actions，数据库保存分析历史，AI SDK 统一模型调用。' : 'Next.js handles UI and Server Actions, the database stores analysis history, and the AI SDK standardizes model calls.',
        aiWorkflow: isZh ? 'AI 用于提示词设计、结果结构化、双语输出和边界案例检查。' : 'AI helps with prompt design, structured output, bilingual responses, and edge-case testing.',
        learning: isZh ? '重点学习 AI 结果可信度、表单验证和用户隐私。' : 'The main learning goals are AI reliability, form validation, and user privacy.',
        screenshots: isZh ? '产品界面将在开发后加入。' : 'Product screens will be added after development.',
      },
    },
    {
      slug: 'portfolio-website',
      title: isZh ? '个人双语作品集网站' : 'This Portfolio Website',
      status: 'Live',
      statusLabel: isZh ? '已上线' : 'Live',
      description: isZh
        ? '用于展示技能、项目、开发流程和 AI 辅助编码方式的专业双语作品集网站。'
        : 'A bilingual personal portfolio website built to present my skills, projects, development workflow, and AI-assisted coding process in a professional way.',
      businessValue: isZh
        ? '让招聘方快速了解我的定位、技术栈、项目状态和学习方向。'
        : 'Helps recruiters quickly understand my positioning, stack, project status, and learning direction.',
      features: isZh
        ? ['中英双语内容', '响应式设计', '深色/浅色模式', '项目案例页', '流畅动画', 'SEO 优化', '快速部署']
        : ['Bilingual English/Chinese content', 'Responsive design', 'Dark/light mode', 'Project case studies', 'Smooth animations', 'SEO optimization', 'Fast performance'],
      tech: baseTech.portfolio,
      visual: 'portfolio',
      links: {
        live: 'https://jamiesec.dev',
        github: 'https://github.com/Shifu710/my-portfolio',
      },
      caseStudy: {
        overview: isZh ? '这是我的主网站，用来统一展示当前和未来项目。' : 'This is my main website for presenting current and future projects in one organized place.',
        problem: isZh ? '普通学生作品集容易显得模板化，且无法说明项目思考过程。' : 'Many student portfolios look generic and do not explain how the developer thinks through projects.',
        solution: isZh ? '用双语内容、项目状态、案例页和 AI 工作流展示更真实的能力。' : 'Use bilingual content, project status labels, case-study pages, and an AI workflow section to present skills honestly.',
        architecture: isZh ? 'Next.js App Router 管理路由和静态生成，项目数据集中在 lib/data 方便更新。' : 'Next.js App Router manages routes and static generation, while project content lives in lib/data for easy updates.',
        aiWorkflow: isZh ? '我用 AI 辅助设计结构、打磨双语文案、检查组件组织和优化可读性。' : 'I used AI to shape the structure, refine bilingual copy, check component organization, and improve readability.',
        learning: isZh ? '重点学习作品集叙事、国际化结构、视觉层级和部署流程。' : 'The main learning was portfolio storytelling, i18n structure, visual hierarchy, and deployment workflow.',
        screenshots: isZh ? '当前页面本身就是实时截图入口。' : 'The live site itself acts as the current visual reference.',
      },
    },
    {
      slug: 'vue-weather-dashboard',
      title: isZh ? 'Vue 天气仪表盘' : 'Vue Weather Dashboard',
      status: 'Live',
      statusLabel: isZh ? '已上线' : 'Live',
      description: isZh
        ? '一个响应式天气应用，集成 WeatherAPI、城市搜索、近期搜索和天气预报。'
        : 'A responsive weather app with WeatherAPI integration, city search, recent searches, and forecast views.',
      businessValue: isZh ? '展示 API 集成、状态管理和响应式 UI 能力。' : 'Shows API integration, state management, and responsive UI skills.',
      features: isZh ? ['城市搜索', '天气详情', '小时预报', '5 天预报', '近期搜索', '深浅色模式'] : ['City search', 'Weather details', 'Hourly forecast', '5-day forecast', 'Recent searches', 'Dark/light mode'],
      tech: baseTech.weather,
      visual: 'weather',
      links: {
        live: 'https://vue-weather-app-pied.vercel.app/',
        github: 'https://github.com/Shifu710/vue-weather-app',
      },
      caseStudy: {
        overview: isZh ? '一个已上线的 Vue 练习项目。' : 'A live Vue practice project.',
        problem: isZh ? '用户需要快速查看城市天气和预报。' : 'Users need a quick way to check city weather and forecasts.',
        solution: isZh ? '用卡片式仪表盘展示当前天气、指标和预报。' : 'Use a card-based dashboard for current weather, metrics, and forecasts.',
        architecture: isZh ? 'Vue 组件 + Pinia 状态 + Axios API 层。' : 'Vue components, Pinia state, and an Axios API layer.',
        aiWorkflow: isZh ? 'AI 辅助组件拆分、错误排查和 README 改进。' : 'AI assisted with component breakdown, debugging, and README improvements.',
        learning: isZh ? '学习 API 错误处理、环境变量和部署配置。' : 'Learned API error handling, environment variables, and deployment settings.',
        screenshots: isZh ? '可通过线上演示查看。' : 'Available through the live demo.',
      },
    },
    {
      slug: 'taskflow-manager',
      title: isZh ? 'TaskFlow 任务管理器' : 'TaskFlow Manager',
      status: 'Live',
      statusLabel: isZh ? '已上线' : 'Live',
      description: isZh
        ? '带有看板、筛选、图表和本地持久化的任务管理应用。'
        : 'A task management app with boards, filters, charts, and local persistence.',
      businessValue: isZh ? '展示仪表盘 UI、数据可视化和可交互任务流程。' : 'Shows dashboard UI, data visualization, and interactive task workflows.',
      features: isZh ? ['任务看板', '拖拽排序', '筛选搜索', '数据图表', '本地存储', '深色模式'] : ['Task boards', 'Drag sorting', 'Search filters', 'Charts', 'Local storage', 'Dark mode'],
      tech: baseTech.taskflow,
      visual: 'taskflow',
      links: {
        live: 'https://todo-task-manager-gilt.vercel.app/',
        github: 'https://github.com/Shifu710/todo-task-manager',
      },
      caseStudy: {
        overview: isZh ? '一个已上线的任务管理练习项目。' : 'A live task-management practice project.',
        problem: isZh ? '用户需要清楚管理不同分类的任务。' : 'Users need a clear way to manage tasks across categories.',
        solution: isZh ? '用仪表盘、看板和表格组织任务。' : 'Use a dashboard, boards, and a table to organize tasks.',
        architecture: isZh ? 'Vue + Pinia + VueUse localStorage + ECharts。' : 'Vue, Pinia, VueUse localStorage, and ECharts.',
        aiWorkflow: isZh ? 'AI 辅助交互规划、README 和构建检查。' : 'AI assisted with interaction planning, README writing, and build checks.',
        learning: isZh ? '学习复杂 UI 状态、拖拽和图表集成。' : 'Learned complex UI state, drag-and-drop, and chart integration.',
        screenshots: isZh ? '可通过线上演示查看。' : 'Available through the live demo.',
      },
    },
    {
      slug: 'meridian-market',
      title: isZh ? 'Meridian Market 电商页面' : 'Meridian Market',
      status: 'Live',
      statusLabel: isZh ? '已上线' : 'Live',
      description: isZh
        ? '一个响应式电商前端，包含商品筛选、详情页、购物车和收藏功能。'
        : 'A responsive e-commerce frontend with product filters, detail pages, cart, and wishlist.',
      businessValue: isZh ? '展示面向用户的产品浏览和购买流程设计。' : 'Shows user-facing product browsing and purchase-flow design.',
      features: isZh ? ['商品列表', '分类筛选', '详情页', '购物车', '收藏', '优惠码', '移动导航'] : ['Product listing', 'Category filters', 'Detail pages', 'Cart', 'Wishlist', 'Coupon flow', 'Mobile navigation'],
      tech: baseTech.commerce,
      visual: 'commerce',
      links: {
        live: 'https://e-commerce-product-page-nu-seven.vercel.app/',
        github: 'https://github.com/Shifu710/e-commerce-product-page',
      },
      caseStudy: {
        overview: isZh ? '一个已上线的电商前端练习项目。' : 'A live e-commerce frontend practice project.',
        problem: isZh ? '用户需要快速浏览、筛选并保存商品。' : 'Users need to browse, filter, and save products quickly.',
        solution: isZh ? '用响应式 storefront 展示商品、详情、购物车和收藏。' : 'Use a responsive storefront with product listing, details, cart, and wishlist.',
        architecture: isZh ? 'Vue + Pinia + API 服务层 + 本地状态持久化。' : 'Vue, Pinia, API service layer, and local state persistence.',
        aiWorkflow: isZh ? 'AI 辅助文案整理、组件检查和部署配置。' : 'AI assisted with copy cleanup, component review, and deployment config.',
        learning: isZh ? '学习商品状态、移动端导航和路由刷新配置。' : 'Learned product state, mobile navigation, and routing deployment configuration.',
        screenshots: isZh ? '可通过线上演示查看。' : 'Available through the live demo.',
      },
    },
  ]
}
