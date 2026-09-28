/* ============================================================================
   All editable site content lives here. index.html renders it via js/app.js.

   - projects[]: set `published: false` to hide an entry (used for local
     projects that are not on GitHub yet). Flip it to true when you are ready.
   - writing[]:  same `published` flag. `href` points to a page in /writing.
   - Descriptions may contain simple inline HTML (<em>, <a>). Titles may not.
   ============================================================================ */
window.SITE = {
  categories: {
    data: "Data & DWH",
    ml: "ML & AI",
    apps: "Apps & Web",
    hardware: "Hardware & Edge",
    games: "Games & Simulation"
  },

  experience: [
    {
      role: "DWH Consultant",
      org: "Komtaş",
      url: "https://www.komtas.com",
      period: "Sep 2026 — Present",
      location: "Istanbul",
      bullets: [
        "Design and deliver datamarts and slowly-changing-dimension (SCD) pipelines for a Turkish bank's enterprise data warehouse on SQL Server: T-SQL stored procedures, SSIS packages, lookup and history tables, from source mapping to go-live.",
        "Built and operate the <a href=\"#projects\">EDW Agent Framework</a> I work in: AI agents (Claude, Codex, Cursor) propose one verifiable step at a time, every <em>verified</em> claim carries an evidence reference, and the bank's systems stay human-operated.",
        "Own the release discipline: code-review standards, parallel-run validation against production, impact analysis and go-live checklists. Lessons written up in two public field reports."
      ],
      tags: ["SQL Server", "T-SQL", "SSIS", "Dimensional modeling", "SCD", "Datamarts"]
    },
    {
      role: "Machine Learning Engineer Intern",
      org: "Odeabank",
      period: "Oct 2025 — Jan 2026",
      location: "Istanbul",
      bullets: [
        "Built an LLM-based document automation system with Ollama (LLaMA, Mistral) that replaced a manual review process and cut processing time by about 60%.",
        "Designed the end-to-end ML pipeline architecture and worked with data engineers to optimize inference latency for production deployment."
      ],
      tags: ["Ollama", "LLaMA", "Mistral", "Python", "ML pipelines"]
    },
    {
      role: "Data Engineer Intern",
      org: "Yapı Kredi Teknoloji",
      period: "Jul 2024 — Jun 2025",
      location: "Istanbul",
      bullets: [
        "Developed a Python GUI tool for Oracle database comparison, cutting data-validation time from two hours to fifteen minutes per dataset.",
        "Built more than twenty Informatica mappings for ETL pipelines serving downstream analytics teams."
      ],
      tags: ["Oracle", "Informatica", "Python", "ETL"]
    },
    {
      role: "Data Warehouse & BI Developer",
      org: "Digitallency",
      period: "Jul — Sep 2023",
      location: "Istanbul",
      bullets: [
        "Migrated more than fifteen stored procedures from MSSQL to Oracle, enabling cross-platform data warehouse integration."
      ],
      tags: ["MSSQL", "Oracle", "PL/SQL", "BI"]
    }
  ],

  projects: [
    /* ---------- Featured ---------- */
    {
      title: "EDW Agent Framework — Evidence-Driven Copilot for DWH Work",
      category: "data", year: "2026", featured: true, status: "Public README",
      repo: "https://github.com/derinege/edw-agent-framework",
      metric: "4 invariants · phase state machine · evidence IDs · multi-agent channel protocol",
      description: "The operating framework behind my data-warehouse work: a copilot state machine for running EDW tasks with AI agents where no agent touches the corporate systems. A human operates SSMS, SSIS and version control, brings back evidence, and the agent produces exactly one next instruction. Four hard invariants (one human action per turn; nothing is <em>verified</em> without an evidence reference; no code generation without a mapping; external systems stay human-operated), a channel protocol for Claude, Codex and Cursor working on the same task, and a context-reset procedure so work survives a fresh session. Client identifiers are masked.",
      tags: ["DWH", "SQL Server", "SSIS", "Multi-agent", "Claude Code · Codex · Cursor", "Methodology"]
    },
    {
      title: "GymBud — AI Fitness Coach",
      category: "ml", year: "2025", featured: true,
      repo: "https://github.com/derinege/Elec_491_Final",
      metric: "Best Capstone Project, Koç University · 95%+ rep accuracy at 33 ms",
      description: "Real-time exercise tracking and form coaching: MediaPipe pose estimation at about 33 ms latency, a three-layer scoring ensemble (rules, FAISS similarity and gradient boosting, R² 0.81), custom BLE wearables, a native iOS app and a React Native app with WebSocket multiplayer.",
      tags: ["Python", "FastAPI", "MediaPipe", "FAISS", "Swift", "React Native", "BLE"]
    },
    {
      title: "AutoOntology — Enterprise Ontology Platform",
      category: "data", year: "2026", featured: true,
      repo: "https://github.com/derinege/autoontology",
      metric: "Documents in · OWL/RDF and Neo4j knowledge graph out",
      description: "Turns company documents (PDF, DOCX, XLSX, HTML, public URLs) into standardized OWL/RDF ontologies and Neo4j graphs. The LLM only proposes structure; validation and design rules make the final generation deterministic. Ships a FAISS + SQLite knowledge index and Markdown, LaTeX and PDF reports.",
      tags: ["Python", "LLM", "OWL/RDF", "Neo4j", "FAISS", "GraphRAG"]
    },
    {
      title: "Job Shop Scheduling with GNNs and RL",
      category: "ml", year: "2026", featured: true,
      repo: "https://github.com/derinege/jobshop-ml",
      metric: "4.67% optimality gap · 190× faster than the MIP solver",
      description: "A graph neural network trained on Gurobi MIP solutions that generalizes to larger instances (0.23 s versus 45 s per schedule), plus a custom reinforcement-learning environment with a multi-objective reward for makespan and idle time.",
      tags: ["PyTorch", "Gurobi", "GNN", "Reinforcement learning"]
    },
    {
      title: "BIST-100 Correlation Network",
      category: "data", year: "2026", featured: true,
      repo: "https://github.com/derinege/bist100-correlation-network",
      metric: "30 stocks · 30,345 correlation dislocations flagged",
      description: "Statistical correlation, minimum-spanning-tree network analysis, hierarchical clustering and rolling-window anomaly detection for Turkish equities, served through a seven-tab Streamlit dashboard with CSV export.",
      tags: ["Python", "NetworkX", "Streamlit", "pandas", "Quant finance"]
    },

    /* ---------- Local projects without a public repo (status pill instead of links) ---------- */
    {
      title: "Tiny Armies — The Four Crowns",
      category: "games", year: "2026", status: "In development",
      metric: "v0.8.0 · ten-chapter campaign · up to 17,000 soldiers",
      description: "A Minecraft NeoForge mod with a branching ten-chapter campaign, four kingdoms with distinct unit profiles and doctrines, siege artillery with predictive targeting, an atlas and an in-game chronicle. After each battle a local Gemma 3 4B model (through Ollama) narrates the story offline, with AI illustrations and original music.",
      tags: ["Java", "NeoForge", "Ollama", "Gemma 3", "Game design"]
    },
    {
      title: "AI Interview Assistant",
      category: "ml", year: "2026", status: "Code on request",
      metric: "RAG with fact-checking · a citation for every claim",
      description: "Gives interviewers evidence-backed answers about a candidate: facts grounded in a PostgreSQL schema, context enriched with pgvector embeddings, a fact-checking step against hallucination and a source for every claim. FastAPI backend, React chat UI with streaming, OpenAI or Anthropic as the generator.",
      tags: ["FastAPI", "PostgreSQL", "pgvector", "RAG", "React", "LLM"]
    },
    {
      title: "Trading Lab",
      category: "data", year: "2026", status: "In development",
      metric: "Backtest → paper trade → review · live trading disabled by default",
      description: "A small-budget, risk-controlled algorithmic trading research platform: a reproducible backtest, paper-trade and review loop with strict risk limits, a full audit trail and gated promotion between phases. The frozen v1 strategy is a long-only EMA trend filter with an ATR stop on BTC/USDT 4h. Research and engineering, not financial advice.",
      tags: ["Python", "Backtesting", "Risk management", "SQL"]
    },
    {
      title: "ForgeOS",
      category: "ml", year: "2026", status: "Experimental · v0.1",
      metric: "Deterministic orchestration for autonomous software teams",
      description: "An experimental operating system for autonomous software organizations: a deterministic orchestration kernel (single-thread tick, seeded RNG, append-only event store), org-as-config YAML for roles and gate policy, a git worktree per task, real gates (test, lint, typecheck, build, merge), organizational memory and a single human inbox. Worker-agnostic, with simulated and real Cursor CLI workers.",
      tags: ["Python", "Multi-agent", "Orchestration", "FastAPI", "Git"]
    },
    {
      title: "Player Simulation — Football Career Simulator",
      category: "games", year: "2026", status: "In development",
      description: "Football career simulation with a FastAPI backend, a React (Vite, TypeScript, Tailwind) frontend and a Süper Lig player-data pipeline into SQLite. An LLM pipeline proposes a starting eleven and tactics from a squad, using either a local GGUF model through llama.cpp or the OpenAI Responses API.",
      tags: ["FastAPI", "React", "TypeScript", "SQLite", "llama.cpp", "Docker"]
    },
    {
      title: "Meditera İlaç — B2B Pharmaceutical Platform",
      category: "apps", year: "2026", status: "Demo",
      description: "A corporate B2B supply platform for a fictional pharmaceutical company: public corporate pages, a product catalogue, authentication and a quote/order-request flow open only to approved institutions. No consumer checkout and no prices anywhere in the data model; tiered visibility is enforced server-side. Next.js App Router, React 19, Tailwind v4, Prisma on PostgreSQL.",
      tags: ["Next.js", "React", "TypeScript", "Prisma", "PostgreSQL", "Tailwind"]
    },

    /* ---------- Smaller public repos ---------- */
    {
      title: "Real-Time Speech Translation",
      category: "hardware", year: "2026",
      repo: "https://github.com/derinege/alternative-project",
      metric: "Fully offline · under 500 ms end-to-end",
      description: "Privacy-first speech-to-speech translation from a lapel or phone microphone: Whisper for recognition, a local LLaMA 3.2 through Ollama for translation, a live dB meter and a web UI. No cloud dependency at all.",
      tags: ["Whisper", "Ollama", "LLaMA 3.2", "FastAPI", "Edge AI"]
    },
    {
      title: "Polyp Segmentation on Kvasir-SEG",
      category: "ml", year: "2025",
      repo: "https://github.com/derinege/448_project",
      description: "Deep-learning pipeline for colonoscopy images: U-Net, Attention U-Net and DeepLabV3+ (ResNet-50) trained with a combined Dice + BCE loss and compared on the 1,000-image Kvasir-SEG dataset.",
      tags: ["PyTorch", "U-Net", "Medical imaging"]
    },
    {
      title: "style — Enterprise Data Platform Reference Architecture",
      category: "data", year: "2026",
      repo: "https://github.com/derinege/style",
      description: "A reference architecture for an enterprise data platform, with an interactive app for exploring the layers and their responsibilities.",
      tags: ["Data architecture", "JavaScript"]
    },
    {
      title: "EMG Data Collection over Web Serial",
      category: "hardware", year: "2026",
      repo: "https://github.com/derinege/elec_491_bugra",
      description: "Browser-based EMG capture from an Arduino via Web Serial (raw ADC and envelope), with optional FastAPI recording in a pipeline-compatible CSV format for downstream machine learning.",
      tags: ["Web Serial", "Arduino", "FastAPI", "TypeScript"]
    },
    {
      title: "Extraction Shooter Dedicated Server",
      category: "games", year: "2026",
      repo: "https://github.com/derinege/extraction-dedicated-server",
      description: "Headless Windows dedicated-server host with a registry and admin panel for a co-op extraction shooter; remote play over Tailscale instead of port forwarding.",
      tags: ["PowerShell", "Tailscale", "Game server"]
    },
    {
      title: "NeRF-HuGS Reproduction (COMP 423)",
      category: "ml", year: "2025",
      repo: "https://github.com/derinege/Comp423_Project",
      description: "Course project reproducing NeRF-HuGS (CVPR 2024) for neural radiance fields in non-static scenes, with heuristics-guided segmentation of transient distractors.",
      tags: ["PyTorch", "NeRF", "3D vision"]
    },
    {
      title: "Code2Work SQL & Data Science Projects",
      category: "data", year: "2025",
      repo: "https://github.com/derinege/Code2work_projects",
      description: "A series of five SQL and Python data-science projects completed in the Code2Work program, each with automated tests.",
      tags: ["SQL", "Python", "pandas"]
    },

    /* ---------- Kept out of the site on purpose (published: false) ---------- */
    { title: "Job Shop Scheduling Optimizer (Tabu Search + MILP)", category: "ml", year: "2026", published: false,
      description: "INDR 491 senior design: hybrid tabu search + MILP for flexible job shop scheduling with weighted tardiness (10 projects, 767 operations).", tags: ["Python", "Optimization"] },
    { title: "Insider League Simulation", category: "games", year: "2025", published: false, description: "Go league simulation with a REST API.", tags: ["Go"] },
    { title: "AI Debate Pipeline", category: "ml", year: "2026", published: false, description: "Two LLMs debate over a shared context.", tags: ["Python", "LLM"] },
    { title: "AI Code Humanizer", category: "apps", year: "2025", published: false, description: "Streamlit code-rewriting tool.", tags: ["Python"] },
    { title: "Course Evaluator", category: "ml", year: "2026", published: false, description: "CLI course evaluation tool.", tags: ["Python"] },
    { title: "Codeway Case — Microservice Configuration Management", category: "apps", year: "2026", published: false, description: "Hiring case study.", tags: ["TypeScript"] },
    { title: "Chaos in Nonlinear Coupled Oscillators", category: "ml", year: "2025", published: false, description: "PHYS 201 term project.", tags: ["Python"] },
    { title: "HUGS — Urban Scene Analysis (COMP 423)", category: "ml", year: "2025", published: false, description: "Course reproduction.", tags: ["PyTorch"] },
    { title: "Ottoman Turkish Text Translation App", category: "apps", year: "2026", published: false, description: "Transkribus API wrapper.", tags: ["Python"] }
  ],

  writing: [
    {
      title: "GPT-6 Astra vs Claude Fable 5: Beyond the Benchmark",
      date: "2026-09", dateLabel: "Sep 2026", lang: "EN",
      type: "Field report", length: "14 min read",
      summary: "What actually helped, what broke, and what I learned from a multi-agent data-warehouse workflow: one implementer, one reviewer, one human owner, and the evidence discipline that kept all three honest.",
      href: "writing/astra-vs-fable-beyond-the-benchmark.html"
    },
    {
      title: "Beyond “Write Me SQL”: An Evidence-Driven AI Workflow for Data Warehousing",
      date: "2026-09", dateLabel: "Sep 2026", lang: "EN",
      type: "Field guide", length: "16 pages · 17 min read",
      summary: "For data practitioners moving from isolated prompts to a repeatable way of working. Three questions structure it: what must be true (context), who owns the change (responsibility), and what did we actually prove (evidence).",
      href: "writing/beyond-write-me-sql.html"
    },
    {
      title: "Cursor vs Claude Code: Mod ve Özellik Karşılaştırması",
      date: "2026-06", dateLabel: "Jun 2026", lang: "TR",
      type: "Whitepaper", length: "59 pages",
      summary: "Plan, Ask, Agent, Debug ve Multi-Agent yeteneklerinin resmi dokümantasyon temelinde kapsamlı teknik analizi: karşılaştırma matrisi, boşluk analizi, pratik iş akışları, karar ağacı ve fiyat-performans skor kartı.",
      href: "writing/cursor-vs-claude-code.html"
    },

    /* ---------- Drafts from work notes (hidden; review for confidentiality first) ---------- */
    {
      title: "Datamart Yazarken Dikkat Edilecek Kurallar",
      date: "2026-08", dateLabel: "Aug 2026", lang: "TR", type: "Guide", length: "2,700 words",
      summary: "Code review'dan geçen bir datamart için kritik kurallar, SQL standartları ve kontrol listeleri.",
      href: "#", published: false
    },
    {
      title: "EDW Bilinen Tuzaklar",
      date: "2026-09", dateLabel: "Sep 2026", lang: "TR", type: "Notes", length: "2,900 words",
      summary: "Sentinel vs IS NULL, as-of semantiği, ara tablo mimarisi ve diğer kanıtlı EDW tuzakları.",
      href: "#", published: false
    }
  ],

  skills: [
    { group: "Data warehousing", items: ["SQL Server / T-SQL", "SSIS", "Oracle / PL/SQL", "Informatica PowerCenter", "Dimensional modeling", "SCD & as-of history", "Datamart design", "Parallel-run validation"] },
    { group: "Machine learning", items: ["PyTorch", "TensorFlow", "scikit-learn", "XGBoost", "Hugging Face", "Graph neural networks", "Reinforcement learning", "U-Net / attention"] },
    { group: "LLMs & edge AI", items: ["Ollama", "LLaMA", "Mistral", "Whisper", "FAISS", "On-device inference", "Multi-agent workflows", "Claude Code · Codex · Cursor"] },
    { group: "Computer vision", items: ["MediaPipe", "OpenCV", "Pose estimation", "Medical image segmentation", "NeRF / Gaussian splatting"] },
    { group: "Optimization & graphs", items: ["Gurobi MIP", "NetworkX", "Tabu search", "Neo4j", "OWL / RDF"] },
    { group: "Software & apps", items: ["Python", "FastAPI", "TypeScript / React", "React Native", "Swift / iOS", "WebSocket", "Docker", "Git", "Linux"] },
    { group: "Languages", items: ["Turkish (native)", "English (C2)", "German (A2)"] }
  ],

  education: [
    {
      role: "B.Sc. Electrical & Electronics Engineering",
      org: "Koç University",
      url: "https://www.ku.edu.tr",
      period: "2021 — 2025",
      location: "Istanbul",
      bullets: [
        "Data Analytics and Artificial Intelligence track.",
        "Best Capstone Project award for GymBud, selected from more than fifty projects."
      ],
      tags: []
    },
    {
      role: "High School Diploma",
      org: "Kadıköy Anadolu Lisesi",
      url: "https://kadikoyanadolu.meb.k12.tr",
      period: "2016 — 2021",
      location: "Istanbul",
      bullets: [
        "One of Istanbul's oldest selective public high schools, founded in 1955 as Kadıköy Maarif Koleji."
      ],
      tags: []
    }
  ]
};
