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
  visual:
    | 'smartdocs'
    | 'agentops'
    | 'ai-crm'
    | 'credits'
    | 'wechat'
    | 'resume'
    | 'portfolio'
    | 'weather'
    | 'taskflow'
    | 'commerce'
  image?: {
    src: string
    alt: string
  }
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
      slug: 'smartdocs-ai',
      title: 'SmartDocs AI',
      status: 'Live',
      statusLabel: isZh ? 'Live' : 'Live',
      description: isZh
        ? 'Enterprise RAG SaaS platform for secure document intelligence, with a public product page, one-click guest demo, document upload, retrieval, citations, tenant isolation, credits, usage logs, and technical review flow.'
        : 'Enterprise RAG SaaS platform for secure document intelligence, with a public product page, one-click guest demo, document upload, retrieval, citations, tenant isolation, credits, usage logs, and technical review flow.',
      businessValue: isZh
        ? 'Shows an AI-native SaaS product beyond a chatbot: workspace RBAC, document processing, RAG answers with sources, billing discipline, and recruiter-friendly guest demo access.'
        : 'Shows an AI-native SaaS product beyond a chatbot: workspace RBAC, document processing, RAG answers with sources, billing discipline, and recruiter-friendly guest demo access.',
      features: [
        'Public product landing page',
        'Guest demo login',
        'Read-only reviewer mode',
        'Multi-tenant workspace RBAC',
        'PDF/DOCX/TXT/MD upload',
        'Celery document indexing',
        'Hybrid retrieval with RRF',
        'Streaming RAG answers',
        'Source citations',
        'Retrieval Debug Panel',
        'Atomic credit billing',
        'Usage logs',
        'Expanded technical review page',
      ],
      tech: ['Next.js App Router', 'TypeScript', 'FastAPI', 'SQLAlchemy', 'PostgreSQL/pgvector', 'Redis/Celery', 'LangGraph', 'DeepSeek/Qwen-ready', 'Docker', 'Vercel'],
      visual: 'smartdocs',
      links: {
        live: 'https://smartdocs-ai-three.vercel.app',
        github: 'https://github.com/Shifu710/smartdocs-ai',
      },
      caseStudy: {
        overview: isZh
          ? 'SmartDocs AI is the flagship enterprise RAG SaaS project, built to demonstrate a complete document intelligence workflow from landing page to guest demo, citations, credits, usage logs, and technical review.'
          : 'SmartDocs AI is the flagship enterprise RAG SaaS project, built to demonstrate a complete document intelligence workflow from landing page to guest demo, citations, credits, usage logs, and technical review.',
        problem: isZh
          ? 'Enterprise AI demos often stop at a chatbot and do not show tenant isolation, document processing, observability, billing, or source-grounded answers.'
          : 'Enterprise AI demos often stop at a chatbot and do not show tenant isolation, document processing, observability, billing, or source-grounded answers.',
        solution: isZh
          ? 'Build a production-style SaaS flow with a real public entry point, one-click guest routing, workspace auth, document upload, indexing, retrieval, streamed answers, source citations, debug visibility, and credit-safe usage logging.'
          : 'Build a production-style SaaS flow with a real public entry point, one-click guest routing, workspace auth, document upload, indexing, retrieval, streamed answers, source citations, debug visibility, and credit-safe usage logging.',
        architecture: isZh
          ? 'Next.js handles the app UI, FastAPI exposes layered routers and services, PostgreSQL/pgvector stores workspaces and chunks, Redis/Celery processes documents, and the RAG service streams answer events.'
          : 'Next.js handles the app UI, FastAPI exposes layered routers and services, PostgreSQL/pgvector stores workspaces and chunks, Redis/Celery processes documents, and the RAG service streams answer events.',
        aiWorkflow: isZh
          ? 'The demo path is clearly labeled demo-local until real DeepSeek or Qwen keys are configured, so reviewers can test the product loop without fake provider claims.'
          : 'The demo path is clearly labeled demo-local until real DeepSeek or Qwen keys are configured, so reviewers can test the product loop without fake provider claims.',
        learning: isZh
          ? 'The key learning was connecting RAG architecture to product constraints: RBAC, workspace isolation, source citations, atomic credit deduction, failure-safe logging, and deployment reality.'
          : 'The key learning was connecting RAG architecture to product constraints: RBAC, workspace isolation, source citations, atomic credit deduction, failure-safe logging, and deployment reality.',
        screenshots: isZh ? 'Screenshots are planned for README and portfolio polish.' : 'Screenshots are planned for README and portfolio polish.',
      },
    },
    {
      slug: 'taskflow-ai',
      title: 'TaskFlow AI',
      status: 'In Progress',
      statusLabel: isZh ? 'Flagship-level MVP' : 'Flagship-level MVP',
      description: isZh
        ? 'An AI Agent workflow automation platform MVP with real LangGraph-controlled execution, executable tool calls, human approval pause/resume, SSE live trace, usage logs, credits, replay, and an AgentOps dashboard.'
        : 'An AI Agent workflow automation platform MVP with real LangGraph-controlled execution, executable tool calls, human approval pause/resume, SSE live trace, usage logs, credits, replay, and an AgentOps dashboard.',
      businessValue: isZh
        ? 'Shows a higher-value agent engineering skill set beyond chatbots and RAG: stateful workflow execution, tool routing, approval gates, reliability limits, audit logs, and an honest demo-local fallback.'
        : 'Shows a higher-value agent engineering skill set beyond chatbots and RAG: stateful workflow execution, tool routing, approval gates, reliability limits, audit logs, and an honest demo-local fallback.',
      features: [
        'Guest demo login',
        'Real LangGraph runtime',
        'Stateful agent runs',
        'MCP-style internal tool gateway',
        'Executable demo tools',
        'Human approval pause/resume',
        'SSE live run trace',
        'Retry and error handling',
        'Max step and cost limits',
        'Usage logs and credits',
        'Run replay endpoint',
        'AgentOps dashboard',
        'Technical review page',
      ],
      tech: ['Next.js App Router', 'TypeScript', 'FastAPI', 'Python', 'LangGraph', 'SQLAlchemy', 'Pydantic', 'React Flow', 'Recharts', 'Tailwind CSS', 'Docker Compose'],
      visual: 'agentops',
      links: {
        github: 'https://github.com/Shifu710/taskflow-ai',
      },
      caseStudy: {
        overview: isZh
          ? 'TaskFlow AI is Project 2 in the portfolio: a flagship-level MVP focused on AI Agent workflow automation instead of another support dashboard or document RAG app.'
          : 'TaskFlow AI is Project 2 in the portfolio: a flagship-level MVP focused on AI Agent workflow automation instead of another support dashboard or document RAG app.',
        problem: isZh
          ? 'Many agent demos show a nice UI but hide the runtime. They do not prove stateful execution, tool calls, approval checkpoints, retries, cost controls, or run-level observability.'
          : 'Many agent demos show a nice UI but hide the runtime. They do not prove stateful execution, tool calls, approval checkpoints, retries, cost controls, or run-level observability.',
        solution: isZh
          ? 'Refactor the runtime so LangGraph controls the workflow path through load, permission validation, initialization, planner, tool router, tool execution, approval gate, agent execution, reviewer, finalize, and error handling nodes.'
          : 'Refactor the runtime so LangGraph controls the workflow path through load, permission validation, initialization, planner, tool router, tool execution, approval gate, agent execution, reviewer, finalize, and error handling nodes.',
        architecture: isZh
          ? 'Next.js provides the product UI and live run pages. FastAPI exposes workflow, run, approval, replay, usage, and gateway routes. SQLAlchemy persists workspaces, runs, run steps, tool calls, approvals, usage logs, credits, and replayable outputs.'
          : 'Next.js provides the product UI and live run pages. FastAPI exposes workflow, run, approval, replay, usage, and gateway routes. SQLAlchemy persists workspaces, runs, run steps, tool calls, approvals, usage logs, credits, and replayable outputs.',
        aiWorkflow: isZh
          ? 'The guest demo uses demo-local model behavior and seeded demo search so reviewers can run it without private API keys. External write tools are clearly simulated in demo mode, while internal tool execution and approval flow are real.'
          : 'The guest demo uses demo-local model behavior and seeded demo search so reviewers can run it without private API keys. External write tools are clearly simulated in demo mode, while internal tool execution and approval flow are real.',
        learning: isZh
          ? 'The main learning was making the agent runtime reviewable: graph nodes mutate state, persist transitions, pause for approval from inside the graph, resume the same run, and keep usage and cost records honest.'
          : 'The main learning was making the agent runtime reviewable: graph nodes mutate state, persist transitions, pause for approval from inside the graph, resume the same run, and keep usage and cost records honest.',
        screenshots: isZh
          ? 'The GitHub repository is available now. A public hosted demo is the next deployment step after Vercel/backend hosting configuration.'
          : 'The GitHub repository is available now. A public hosted demo is the next deployment step after Vercel/backend hosting configuration.',
      },
    },
    {
      slug: 'ai-workstation-credits-mvp',
      title: 'AI Workstation Credits MVP',
      status: 'Live',
      statusLabel: isZh ? 'Live' : 'Live',
      description: isZh
        ? 'A full-stack AI SaaS billing-loop demo with auth, user credits, backend-only AI calls, usage logs, admin recharge, and secure role checks.'
        : 'A full-stack AI SaaS billing-loop demo with auth, user credits, backend-only AI calls, usage logs, admin recharge, and secure role checks.',
      businessValue: isZh
        ? 'Shows senior-review-ready product thinking: failed AI calls do not deduct credits, successful calls deduct atomically, and admins can recharge users safely.'
        : 'Shows senior-review-ready product thinking: failed AI calls do not deduct credits, successful calls deduct atomically, and admins can recharge users safely.',
      features: [
        'Supabase auth',
        '1000 default credits',
        'Backend AI route',
        'Atomic credit spend',
        'Usage logs',
        'Admin recharge',
        'RLS security',
        'Vercel deployment',
      ],
      tech: ['Next.js App Router', 'TypeScript', 'Tailwind CSS', 'Supabase', 'PostgreSQL RLS', 'OpenAI SDK', 'DeepSeek API', 'Zod', 'Vercel'],
      visual: 'credits',
      image: {
        src: '/project-previews/ai-workstation-credits-mvp.png',
        alt: 'AI Workstation Credits MVP live app screenshot',
      },
      links: {
        live: 'https://ai-workstation-credits-mvp.vercel.app',
        github: 'https://github.com/Shifu710/ai-workstation-credits-mvp',
      },
      caseStudy: {
        overview: 'This MVP demonstrates the core business loop behind a real AI SaaS product rather than only a chat UI.',
        problem: 'AI SaaS products need to protect provider keys, control credit balances, avoid charging failed requests, and keep a reliable audit trail.',
        solution: 'The app routes all AI calls through a backend API, checks balance before provider calls, deducts credits only after a successful response, logs every completed attempt, and gives admins a protected recharge workflow.',
        architecture: 'Next.js App Router handles pages and route handlers. Supabase Auth manages users. PostgreSQL tables store profiles, usage logs, and immutable credit transactions. Service-role APIs perform trusted cross-user operations.',
        aiWorkflow: 'The AI provider is called only from the server through the OpenAI-compatible SDK. DeepSeek is configured by environment variables, so the provider can be changed without application code changes.',
        learning: 'The key learning was designing the secure billing boundary: RLS for user reads, service-role APIs for trusted writes, database functions for concurrency-safe credit changes, and clear documentation for technical review.',
        screenshots: 'Available through the live demo.',
      },
    },
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
      image: {
        src: '/project-previews/supportpilot-ai.png',
        alt: 'SupportPilot AI live app screenshot',
      },
      links: {
        live: 'https://supportpilot-ai-kappa.vercel.app',
        github: 'https://github.com/Shifu710/supportpilot-ai',
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
      title: isZh ? 'MiniShop Pro 小店智选' : 'MiniShop Pro',
      status: 'Live',
      statusLabel: isZh ? '已上线' : 'Live',
      description: isZh
        ? '面向中国市场的小型电商与预约系统，包含 H5 小程序预览、商品/分类/订单/预约管理、客户数据、促销和分析后台。'
        : 'A China-focused mini-commerce and booking system with an H5 mini-program preview, product/catalog management, orders, bookings, customers, promotions, and analytics.',
      businessValue: isZh
        ? '帮助小商家快速验证移动端购买、预约和后台运营流程，同时展示我能把中国市场产品思维落到可演示的系统中。'
        : 'Helps small businesses validate mobile shopping, booking, and admin workflows while showing that I can turn China-market product ideas into a working demo.',
      features: isZh
        ? ['H5 小程序预览', '商品/服务目录', '预约/订单流程', '演示登录', '管理后台', '客户管理', '促销管理', '数据分析', '支付模拟']
        : ['H5 mini-program preview', 'Product/service catalog', 'Booking/order flows', 'Demo login', 'Admin dashboard', 'Customer management', 'Promotions', 'Analytics', 'Payment simulation'],
      tech: ['Next.js', 'React', 'TypeScript', 'Ant Design', 'Tailwind CSS', 'Prisma', 'Supabase-ready schema', 'Taro React scaffold', 'Vercel'],
      visual: 'wechat',
      image: {
        src: '/project-previews/minishop-pro.png',
        alt: 'MiniShop Pro live app screenshot',
      },
      links: {
        live: 'https://minishop-pro.vercel.app',
        github: 'https://github.com/Shifu710/minishop-pro',
      },
      caseStudy: {
        overview: isZh ? 'MiniShop Pro 是一个已上线的作品集项目，用来展示小程序风格的用户端体验和完整 Web 管理后台。' : 'MiniShop Pro is a live portfolio project showing a mini-program-style customer experience plus a complete web admin dashboard.',
        problem: isZh ? '很多小商家需要同时处理商品、预约、订单和客户，但早期阶段不适合马上投入复杂系统。' : 'Many small businesses need to manage products, bookings, orders, and customers, but early-stage teams need a practical demo before investing in a complex system.',
        solution: isZh ? '构建一个 Next.js 演示系统：公开页面介绍业务价值，H5 预览模拟小程序体验，后台负责运营管理和数据分析。' : 'Build a Next.js demo system: a public landing page explains the value, an H5 preview simulates the mini-program experience, and the dashboard handles operations and analytics.',
        architecture: isZh ? 'Next.js App Router 管理公开页面、后台页面和 mock API；Prisma schema 为 Supabase/PostgreSQL 做准备；Taro 源码脚手架放在 apps/mini-program 方便后续接入微信开发工具。' : 'Next.js App Router manages public pages, dashboard pages, and mock APIs; the Prisma schema prepares for Supabase/PostgreSQL; and a Taro source scaffold lives in apps/mini-program for future WeChat Developer Tools work.',
        aiWorkflow: isZh ? 'AI 用于拆解需求、生成 mock 数据、规划后台信息架构、润色中英文业务文案，并辅助检查 TypeScript、构建和部署问题。' : 'AI helped break down requirements, generate mock data, plan the dashboard information architecture, refine bilingual business copy, and debug TypeScript, build, and deployment issues.',
        learning: isZh ? '重点学习小程序式移动端流程、Ant Design 管理后台、演示登录、Vercel 部署、项目文档和诚实展示项目边界。' : 'The main learning areas were mini-program-style mobile flows, Ant Design admin UI, demo authentication, Vercel deployment, project documentation, and honest project scoping.',
        screenshots: isZh ? '可以通过线上演示查看首页、H5 预览、案例页和后台演示。' : 'The live demo includes the landing page, H5 preview, case study, and dashboard demo.',
      },
    },
    {
      slug: 'jobfit-ai',
      title: 'JobFit AI',
      status: 'Live',
      statusLabel: isZh ? '已上线' : 'Live',
      description: isZh
        ? '一个 AI 求职匹配和简历优化工具，可对比简历与岗位描述，生成匹配分数、技能差距、简历改写建议和面试问题。'
        : 'An AI resume matching and career-improvement assistant that compares resumes with job descriptions, scores fit, finds gaps, rewrites bullets, and prepares interview questions.',
      businessValue: isZh
        ? '展示了完整的产品思维：公开落地页、登录入口、仪表盘、分析流程、分享结果、隐私提示、OpenAI 服务端调用和无密钥演示 fallback。'
        : 'Shows complete product thinking: landing page, auth-style entry, dashboard workflow, shareable result, privacy guardrails, server-side OpenAI calls, and demo fallback when no API key is configured.',
      features: isZh
        ? ['简历/JD 匹配评分', '技能差距分析', '简历要点改写', '面试题生成', '关键词提取', '双语界面', '分享结果页', 'Mock 演示模式']
        : ['Resume/JD match scoring', 'Skill gap analysis', 'Resume bullet rewrites', 'Interview question prep', 'Keyword extraction', 'Bilingual UI', 'Shareable results', 'Mock demo mode'],
      tech: ['Next.js 16 App Router', 'React 19', 'TypeScript', 'Tailwind CSS', 'OpenAI SDK', 'Zod', 'Prisma schema', 'Vercel'],
      visual: 'resume',
      image: {
        src: '/project-previews/jobfit-ai.png',
        alt: 'JobFit AI live analyzer screenshot',
      },
      links: {
        live: 'https://jobfit-ai-gamma.vercel.app',
        github: 'https://github.com/Shifu710/jobfit-ai',
      },
      caseStudy: {
        overview: isZh ? 'JobFit AI 是根据产品 brief 做出的完整 MVP，用来展示 AI 求职工具从需求到可部署产品的实现能力。' : 'JobFit AI is a complete MVP built from a product brief to show how an AI career tool can move from requirements to a deployable product.',
        problem: isZh ? '求职者很难快速判断简历是否匹配目标岗位，也容易收到泛泛而谈、不可验证的 AI 建议。' : 'Job seekers struggle to quickly judge whether a resume fits a role, and generic AI advice can be hard to verify or apply safely.',
        solution: isZh ? '产品用四步分析流程输出匹配分数、差距、改写建议、关键词和面试问题，并把隐私提示和诚实改写原则放进核心体验。' : 'The product uses a four-step analysis flow to return scores, gaps, rewrites, keywords, and interview prep while keeping privacy notices and honest rewrite rules in the core experience.',
        architecture: isZh ? 'Next.js App Router 负责公开页面、仪表盘和 API route。AI 调用只在服务端进行，Zod 校验输入，Prisma schema 为后续数据库阶段预留结构。' : 'Next.js App Router handles public pages, dashboard screens, and API routes. AI calls run only on the server, Zod validates inputs, and the Prisma schema prepares the next database phase.',
        aiWorkflow: isZh ? '默认使用 OpenAI 兼容 SDK 和服务端环境变量；没有配置 API key 时，生产演示会返回结构化 mock 分析，避免在线 demo 失效。' : 'The app uses the OpenAI-compatible SDK with server-side environment variables; when no API key is configured, the production demo returns structured mock analysis so the live demo stays usable.',
        learning: isZh ? '重点学习把 AI 能力放入真实产品边界：输入校验、结构化输出、隐私提示、可分享结果、fallback 策略和上线验证。' : 'The main learning was placing AI inside real product boundaries: validation, structured output, privacy guidance, shareable results, fallback strategy, and deployment verification.',
        screenshots: isZh ? '作品集卡片使用了线上分析页的真实截图。' : 'The portfolio card uses a real screenshot from the live analyzer page.',
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
      image: {
        src: '/project-previews/portfolio-website.png',
        alt: 'Portfolio website screenshot',
      },
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
      image: {
        src: '/project-previews/vue-weather-dashboard.png',
        alt: 'Vue Weather Dashboard live app screenshot',
      },
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
      image: {
        src: '/project-previews/taskflow-manager.png',
        alt: 'TaskFlow Manager live app screenshot',
      },
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
      image: {
        src: '/project-previews/meridian-market.png',
        alt: 'Meridian Market live app screenshot',
      },
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
