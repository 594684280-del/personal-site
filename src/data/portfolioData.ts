export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  stars: number;
  forks?: number;
  language: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  category: 'all' | 'mobile' | 'web' | 'fullstack';
  highlights: string[];
  architecture?: string;
}

export interface Article {
  id: string;
  title: string;
  titleEn: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  views: number;
  content: string;
}

export interface TimelineItem {
  year: string;
  role: string;
  company: string;
  description: string;
  achievements: string[];
}

export const PROFILE_DATA = {
  name: "朔冰",
  fullName: "朔冰",
  chineseTitle: "实施项目经理 · CRM / ERP 数字化交付",
  englishTitle: "Implementation Project Manager | CRM & ERP Delivery",
  subtitle: "专注中大型企业 CRM / ERP 系统的实施与上线交付，正在深入探索 AI Agent 与大模型应用，向 Agent 产品经理方向持续成长。",
  location: "中国（城市待补充）",
  repositoriesCount: "个人网站 & AI 实验项目",
  experienceYears: "多年企业数字化交付经验",
  email: "待补充",
  github: "待补充",
  linkedin: "待补充",
  twitter: "待补充",
  bio: "本科计算机专业出身，具备 C# 与 Python 开发基础。现任实施项目经理，负责中大型企业 CRM / ERP 项目的实施与上线。擅长运用 LangChain、Agent 应用开发等 AI 技术，坚信「懂业务 + 懂技术 + 懂 AI」是数字化交付人的下一个竞争力。",
};

export const WHAT_I_DO_SERVICES = [
  {
    id: "crm-erp",
    title: "CRM / ERP Implementation",
    titleZh: "CRM / ERP 项目实施",
    icon: "zap",
    description: "End-to-end delivery of CRM & ERP projects for mid-to-large enterprises",
    descriptionZh: "负责中大型企业 CRM / ERP 系统从蓝图设计、配置开发、数据迁移到上线切换的全周期交付管理。",
    features: ["项目蓝图与实施方案设计", "关键用户培训与变革管理", "上线切换与运维保障"],
    highlighted: true,
  },
  {
    id: "business-analysis",
    title: "Business Analysis",
    titleZh: "需求分析与流程梳理",
    icon: "globe",
    description: "Bridging business requirements and technical solutions",
    descriptionZh: "深入客户业务场景，把模糊的管理诉求翻译成清晰的需求清单与系统方案，弥合业务与技术的鸿沟。",
    features: ["业务流程调研与诊断", "需求文档与原型设计", "跨部门沟通与干系人管理"],
    highlighted: false,
  },
  {
    id: "ai-agent",
    title: "AI & Agent Exploration",
    titleZh: "AI 与 Agent 探索",
    icon: "sparkles",
    description: "Learning LangChain and Agent development to empower enterprise delivery",
    descriptionZh: "系统学习 LangChain 与 Agent 开发，探索 AI 在企业实施交付中的应用：智能问答、文档处理、数据分析助手等。",
    features: ["LangChain 与 RAG 实践", "AI Agent 工作流编排", "AI 赋能实施交付场景探索"],
    highlighted: false,
  },
];

export const TECH_SKILLS = [
  { name: "C#", category: "开发" },
  { name: "Python", category: "开发" },
  { name: "SQL / 数据库", category: "开发" },
  { name: "LangChain", category: "AI" },
  { name: "AI Agent", category: "AI" },
  { name: "Prompt 工程", category: "AI" },
  { name: "CRM 系统", category: "业务" },
  { name: "ERP 系统", category: "业务" },
  { name: "需求分析", category: "管理" },
  { name: "项目管理", category: "管理" },
  { name: "数据迁移", category: "交付" },
  { name: "上线切换", category: "交付" },
];

export const FEATURED_PROJECTS: Project[] = [
  {
    id: "personal-site",
    title: "个人网站",
    tagline: "我的第一个从设计到上线的个人站点",
    description: "本站点即我的作品之一：四个板块（首页、关于我、文章、作品），React + TypeScript + Tailwind 构建。",
    stars: 0,
    forks: 0,
    language: "TypeScript",
    tags: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    githubUrl: "#",
    liveUrl: "#",
    featured: true,
    category: "web",
    highlights: [
      "从需求澄清、结构策划到视觉与开发独立完成",
      "响应式布局，桌面与移动端均可良好访问",
      "后续计划接入文章发布与作品展示的更多能力",
    ],
    architecture: "React 19 + TypeScript + Tailwind CSS 4 + Vite",
  },
  {
    id: "crm-project",
    title: "中大型企业 CRM 实施项目",
    tagline: "从蓝图到上线的完整交付（案例详情待补充）",
    description: "案例详情待补充：请提供项目名称、客户行业、系统模块、你的角色与量化成果。",
    stars: 0,
    forks: 0,
    language: "C#",
    tags: ["CRM", "实施交付", "项目管理", "C#"],
    githubUrl: "#",
    liveUrl: "#",
    featured: true,
    category: "fullstack",
    highlights: [
      "担任实施项目经理，负责整体交付计划与里程碑管控",
      "主导业务蓝图设计与关键用户培训",
      "完成历史数据迁移与上线切换（细节待补充）",
    ],
    architecture: "CRM 平台（具体产品待补充）",
  },
  {
    id: "erp-project",
    title: "ERP 系统上线项目",
    tagline: "多部门协同的 ERP 交付（案例详情待补充）",
    description: "案例详情待补充：请提供项目名称、客户行业、系统模块、你的角色与量化成果。",
    stars: 0,
    forks: 0,
    language: "Python",
    tags: ["ERP", "实施交付", "数据迁移", "Python"],
    githubUrl: "#",
    liveUrl: "#",
    featured: true,
    category: "fullstack",
    highlights: [
      "负责跨部门需求调研与流程再造（细节待补充）",
      "编写数据处理脚本辅助数据清洗与校验",
      "组织 UAT 测试与上线保障（细节待补充）",
    ],
    architecture: "ERP 平台（具体产品待补充）",
  },
  {
    id: "agent-lab",
    title: "AI Agent 学习实验",
    tagline: "基于 LangChain 的 Agent 开发练习",
    description: "学习 LangChain 与 Agent 开发课程过程中的实践项目：智能问答、工具调用与工作流编排的实验记录。",
    stars: 0,
    forks: 0,
    language: "Python",
    tags: ["Python", "LangChain", "AI Agent", "RAG"],
    githubUrl: "#",
    liveUrl: "#",
    featured: true,
    category: "web",
    highlights: [
      "基于 LangChain 构建简单的工具调用 Agent",
      "实践 RAG 知识库问答流程",
      "探索 AI 在企业实施场景（会议纪要、需求整理）中的落地",
    ],
    architecture: "Python + LangChain + 向量数据库",
  },
];

export const ARTICLES: Article[] = [
  {
    id: "erp-implementation-notes",
    title: "一个实施项目经理的 ERP 上线手记（写作中）",
    titleEn: "Implementation PM Notes: An ERP Go-Live Story (Draft)",
    excerpt: "记录一次 ERP 项目从蓝图、数据迁移到上线切换的真实历程与踩坑复盘。",
    date: "2026-10-01",
    readTime: "撰写中",
    category: "实施交付",
    tags: ["ERP", "实施交付", "项目管理"],
    views: 0,
    content: `
### 写在前面

这篇文章正在撰写中，将记录我作为实施项目经理操盘 ERP 上线的完整过程：

#### 计划覆盖的内容

1. 项目蓝图阶段：如何把客户模糊的诉求变成可落地的方案；
2. 数据迁移：数据清洗、映射与多轮试迁的经验；
3. 上线切换：切换演练、应急预案与保障机制；
4. 踩坑与复盘：那些教科书上不会告诉你的细节。

> 内容待补充：待项目信息脱敏后完成撰写。
    `,
  },
  {
    id: "langchain-learning",
    title: "LangChain 与 Agent 应用开发实践心得",
    titleEn: "My Journey Learning LangChain and Agent Development",
    excerpt: "一名实施项目经理跨界学习 AI Agent 开发的路径、资料与方法总结。",
    date: "2026-09-10",
    readTime: "撰写中",
    category: "AI 学习",
    tags: ["LangChain", "AI Agent", "Python", "学习笔记"],
    views: 0,
    content: `
### 为什么要学 AI Agent

作为长期在客户现场的实施项目经理，我见过太多「系统上线了但没人用」的困境。AI Agent 带来的交互方式变革，可能正是破解企业软件易用性难题的钥匙。

#### 我的学习路径

1. Python 基础巩固（有 C# 功底迁移成本不高）；
2. LangChain 核心概念：Chain、Agent、Tool、Memory；
3. RAG 知识库问答的完整实践；
4. 用真实实施场景做练手项目（如会议纪要自动整理）。

> 内容待补充：细节与代码示例整理中。
    `,
  },
  {
    id: "crm-change-management",
    title: "CRM 项目里的变革管理：让业务团队真正用起来",
    titleEn: "Change Management in CRM Projects: Making It Actually Used",
    excerpt: "系统上线只是开始，让一线团队愿意用、用得好，才是实施的价值所在。",
    date: "2026-08-20",
    readTime: "撰写中",
    category: "实施交付",
    tags: ["CRM", "变革管理", "实施交付"],
    views: 0,
    content: `
### 上线不等于成功

CRM 项目最大的失败风险不在技术，而在人。这篇文章计划探讨：

1. 关键用户的选择与培养策略；
2. 如何用数据说服管理层持续推动；
3. 激励机制与制度配套设计；
4. 从「要我用」到「我要用」的转变路径。

> 内容待补充：结合实际项目案例整理中。
    `,
  },
];

export const CAREER_TIMELINE: TimelineItem[] = [
  {
    year: "至今",
    role: "实施项目经理",
    company: "公司名称待补充",
    description: "负责中大型企业 CRM / ERP 项目的实施与上线，统筹项目计划、资源协调与交付质量。",
    achievements: [
      "主导多个中大型企业 CRM / ERP 项目的完整交付（项目名称待补充）",
      "统筹需求调研、蓝图设计、数据迁移与上线切换全流程",
      "负责关键用户培训与跨部门干系人管理",
    ],
  },
  {
    year: "早年经历（待补充）",
    role: "技术相关岗位（待补充）",
    company: "待补充",
    description: "计算机专业本科出身，具备 C# 与 Python 开发基础，从技术岗位起步逐步转向项目管理。",
    achievements: [
      "计算机专业本科（院校待补充）",
      "擅长运用 LangChain 与 Agent 开发，向 AI 方向持续拓展",
    ],
  },
];
