/* ============================================================
   MY PROMPTS PAGE — my-prompts.js
   Depends on: app.js (for MODELS data, toast, theme)
   ============================================================ */

/* ── Sample Data ─────────────────────────────────────────── */
const MP_PROMPTS = [
    {
        id: 1, name: "Market Research Analysis", model: "claude",
        tags: ["research", "analysis"], files: [
            { name: "market_report.pdf", size: "1.2 MB", type: "pdf" },
            { name: "competitors.docx", size: "890 KB", type: "docx" },
            { name: "chart_analysis.png", size: "2.4 MB", type: "img" },
            { name: "data_export.csv", size: "540 KB", type: "txt" }
        ],
        date: "May 20, 2024", time: "10:30 AM",
        favorite: true, usedThisMonth: true,
        icon: "ri-seo-line", iconBg: "var(--s2)",
        description: "Comprehensive market research analysis using uploaded documents and images to identify trends, opportunities, and competitive landscape.",
        preview: "You are a market research analyst. Using the provided documents and images, conduct a comprehensive analysis of the market landscape.\n\nPlease include:\n• Market size and growth trends\n• Key competitors analysis\n• Opportunities and threats\n• Strategic recommendations\n…",
        exports: 4
    },
    {
        id: 2, name: "Product Strategy Development", model: "chatgpt",
        tags: ["strategy", "product"], files: [
            { name: "roadmap.pdf", size: "2.1 MB", type: "pdf" },
            { name: "user_research.docx", size: "1.3 MB", type: "docx" },
            { name: "metrics.xlsx", size: "400 KB", type: "txt" }
        ],
        date: "May 19, 2024", time: "04:15 PM",
        favorite: false, usedThisMonth: true,
        icon: "ri-rocket-line", iconBg: "var(--s2)",
        description: "Develop a comprehensive product strategy document based on user research and current market conditions.",
        preview: "Act as a senior product strategist. Analyze the provided research materials and create a structured product strategy including vision, goals, and key initiatives…",
        exports: 2
    },
    {
        id: 3, name: "Content Creation Assistant", model: "gemini",
        tags: ["content", "writing"], files: [
            { name: "brand_guide.pdf", size: "3.5 MB", type: "pdf" },
            { name: "tone_examples.docx", size: "760 KB", type: "docx" }
        ],
        date: "May 18, 2024", time: "11:20 AM",
        favorite: true, usedThisMonth: true,
        icon: "ri-file-edit-line", iconBg: "var(--s2)",
        description: "Create on-brand content following the brand guidelines and tone of voice examples provided.",
        preview: "You are a creative content writer working for this brand. Using the brand guidelines, create compelling content that resonates with our target audience…",
        exports: 7
    },
    {
        id: 4, name: "Competitive Analysis Report", model: "llama",
        tags: ["analysis", "competitive"], files: [
            { name: "comp_a.pdf", size: "1.8 MB", type: "pdf" },
            { name: "comp_b.pdf", size: "2.2 MB", type: "pdf" },
            { name: "industry_report.pdf", size: "4.1 MB", type: "pdf" },
            { name: "pricing.docx", size: "340 KB", type: "docx" },
            { name: "features_matrix.xlsx", size: "210 KB", type: "txt" }
        ],
        date: "May 17, 2024", time: "02:45 PM",
        favorite: false, usedThisMonth: false,
        icon: "ri-search-2-line", iconBg: "var(--s2)",
        description: "In-depth competitive analysis report covering pricing, features, positioning, and market share across key competitors.",
        preview: "Analyze these competitor documents and produce a structured competitive analysis covering: pricing strategy, core features, positioning, strengths and weaknesses…",
        exports: 3
    },
    {
        id: 5, name: "Customer Persona Builder", model: "mistral",
        tags: ["marketing", "persona"], files: [
            { name: "survey_results.pdf", size: "890 KB", type: "pdf" }
        ],
        date: "May 16, 2024", time: "09:10 AM",
        favorite: true, usedThisMonth: true,
        icon: "ri-group-line", iconBg: "var(--s2)",
        description: "Build detailed customer personas based on survey data, behavioral patterns, and demographic information.",
        preview: "Using the provided survey results, create 3–5 detailed customer personas. For each persona include: demographics, goals, pain points, preferred channels, and buying triggers…",
        exports: 5
    },
    {
        id: 6, name: "Document Summarization", model: "claude",
        tags: ["summary", "documents"], files: [
            { name: "annual_report.pdf", size: "5.6 MB", type: "pdf" },
            { name: "financials.docx", size: "1.1 MB", type: "docx" }
        ],
        date: "May 15, 2024", time: "03:30 PM",
        favorite: false, usedThisMonth: true,
        icon: "ri-file-text-line", iconBg: "var(--s2)",
        description: "Efficiently summarize lengthy documents, extracting key insights, action items, and critical information.",
        preview: "Please provide a comprehensive summary of the attached documents. Structure your response with: Executive Summary, Key Findings, Important Numbers, and Recommended Actions…",
        exports: 9
    },
    {
        id: 7, name: "Email Campaign Generator", model: "chatgpt",
        tags: ["email", "marketing"], files: [
            { name: "product_brief.pdf", size: "670 KB", type: "pdf" }
        ],
        date: "May 14, 2024", time: "01:05 PM",
        favorite: false, usedThisMonth: false,
        icon: "ri-mail-line", iconBg: "var(--s2)",
        description: "Generate a multi-step email campaign sequence optimized for engagement and conversion.",
        preview: "Create a 5-email drip campaign for the product described in the attached brief. Each email should have: Subject line, Preview text, Body copy, and CTA…",
        exports: 1
    },
    {
        id: 8, name: "Data Analysis & Insights", model: "gemini",
        tags: ["data", "insights"], files: [
            { name: "sales_q1.csv", size: "1.8 MB", type: "txt" },
            { name: "sales_q2.csv", size: "2.1 MB", type: "txt" },
            { name: "targets.xlsx", size: "320 KB", type: "txt" }
        ],
        date: "May 13, 2024", time: "10:50 AM",
        favorite: true, usedThisMonth: true,
        icon: "ri-line-chart-line",iconBg: "var(--s2)",
        description: "Analyze sales data across quarters to identify performance trends, anomalies, and opportunities.",
        preview: "Analyze the provided CSV data files and generate a comprehensive data report. Include: trend analysis, period-over-period comparisons, outlier identification, and forward projections…",
        exports: 6
    },
    {
        id: 9, name: "Legal Document Review", model: "claude",
        tags: ["legal", "review"], files: [
            { name: "contract_draft.pdf", size: "2.3 MB", type: "pdf" },
            { name: "amendments.docx", size: "450 KB", type: "docx" }
        ],
        date: "May 12, 2024", time: "08:00 AM",
        favorite: false, usedThisMonth: false,
        icon: "ri-scales-3-line", iconBg: "var(--s2)",
        description: "Review legal documents for key clauses, risks, and compliance issues.",
        preview: "Review the attached contract and provide: key obligations summary, potential risk clauses, missing standard protections, and recommended changes…",
        exports: 0
    },
    {
        id: 10, name: "Social Media Strategy", model: "mistral",
        tags: ["marketing", "strategy"], files: [
            { name: "brand_assets.pdf", size: "8.2 MB", type: "pdf" }
        ],
        date: "May 11, 2024", time: "12:15 PM",
        favorite: true, usedThisMonth: false,
        icon: "ri-smartphone-line", iconBg: "var(--s2)",
        description: "Develop a 90-day social media content strategy aligned with brand guidelines.",
        preview: "Create a 90-day social media strategy for the brand. Include: platform-specific content calendars, post templates, hashtag strategy, and engagement tactics…",
        exports: 3
    },
    {
        id: 11, name: "Interview Question Generator", model: "chatgpt",
        tags: ["hr", "hiring"], files: [],
        date: "May 10, 2024", time: "03:00 PM",
        favorite: false, usedThisMonth: true,
        icon: "ri-shake-hands-line", iconBg: "var(--s2)",
        description: "Generate role-specific interview questions covering technical skills and cultural fit.",
        preview: "Generate a comprehensive interview question bank for the following role. Include: technical screening questions, behavioral questions (STAR format), and culture-fit questions…",
        exports: 2
    },
    {
        id: 12, name: "UX Research Synthesis", model: "claude",
        tags: ["research", "ux"], files: [
            { name: "user_interviews.docx", size: "1.4 MB", type: "docx" },
            { name: "usability_report.pdf", size: "3.1 MB", type: "pdf" }
        ],
        date: "May 09, 2024", time: "10:00 AM",
        favorite: true, usedThisMonth: true,
        icon: "ri-palette-line", iconBg: "var(--s2)",
        description: "Synthesize UX research findings into actionable design recommendations.",
        preview: "Analyze the user research documents and synthesize key findings. Provide: main user pain points, mental model insights, design opportunities, and prioritized recommendations…",
        exports: 4
    }
];

/* ── Model icon helper (reuses MODELS from app.js) ───────── */
function mpModelIcon(modelId) {
    const m = (typeof MODELS !== 'undefined') ? MODELS.find(x => x.id === modelId) : null;
    return m ? m.svg : `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/></svg>`;
}
function mpModelName(modelId) {
    const map = { claude: 'Claude 3.5 Sonnet', chatgpt: 'ChatGPT-4o', gemini: 'Gemini 1.5 Pro', llama: 'Llama 3.1 70B', mistral: 'Mistral Large 2', deepseek: 'Deepseek V3' };
    return map[modelId] || modelId;
}

/* ── State ──────────────────────────────────────────────── */
let mpState = {
    tab: 'all',        // 'all' | 'favorites' | 'recent'
    search: '',
    modelFilter: '',
    tagFilter: '',
    sort: 'newest',
    view: 'list',      // 'list' | 'grid'
    page: 1,
    perPage: 8,
    selectedId: null,
    deleteTargetId: null
};

/* ── Computed filtered list ─────────────────────────────── */
function mpFiltered() {
    let list = [...MP_PROMPTS];
    if (mpState.tab === 'favorites') list = list.filter(p => p.favorite);
    if (mpState.tab === 'recent') list = list.filter(p => p.usedThisMonth);
    if (mpState.search) {
        const q = mpState.search.toLowerCase();
        list = list.filter(p =>
            p.name.toLowerCase().includes(q) ||
            mpModelName(p.model).toLowerCase().includes(q) ||
            p.tags.some(t => t.toLowerCase().includes(q))
        );
    }
    if (mpState.modelFilter) list = list.filter(p => p.model === mpState.modelFilter);
    if (mpState.tagFilter) list = list.filter(p => p.tags.includes(mpState.tagFilter));
    if (mpState.sort === 'name') list.sort((a, b) => a.name.localeCompare(b.name));
    else if (mpState.sort === 'oldest') list.sort((a, b) => a.id - b.id);
    else if (mpState.sort === 'used') list.sort((a, b) => b.exports - a.exports);
    else list.sort((a, b) => b.id - a.id); // newest
    return list;
}

/* ── Render list ─────────────────────────────────────────── */
function renderList() {
    const list = mpFiltered();
    const total = list.length;
    const start = (mpState.page - 1) * mpState.perPage;
    const page = list.slice(start, start + mpState.perPage);
    const el = document.getElementById('mpList');

    if (page.length === 0) {
        el.innerHTML = `<div style="padding:40px;text-align:center;color:var(--t3);font-size:13px;">No prompts found. Try adjusting your filters.</div>`;
    } else {
        el.innerHTML = page.map(p => mpItemHTML(p)).join('');
        el.querySelectorAll('.mp-item').forEach(row => {
            row.addEventListener('click', e => {
                if (e.target.classList.contains('mp-item-cb') || e.target.closest('.mp-item-more')) return;
                mpSelectPrompt(+row.dataset.id);
            });
            row.querySelector('.mp-item-more')?.addEventListener('click', e => {
                e.stopPropagation();
                mpShowItemMenu(+row.dataset.id, row.querySelector('.mp-item-more'));
            });
        });
    }

    // Update tab counts
    document.getElementById('tabAllCount').textContent = MP_PROMPTS.length;
    document.getElementById('tabFavCount').textContent = MP_PROMPTS.filter(p => p.favorite).length;
    document.getElementById('tabRecentCount').textContent = MP_PROMPTS.filter(p => p.usedThisMonth).length;

    // Stats
    document.getElementById('statTotal').textContent = MP_PROMPTS.length;
    document.getElementById('statFav').textContent = MP_PROMPTS.filter(p => p.favorite).length;
    document.getElementById('statUsed').textContent = MP_PROMPTS.filter(p => p.usedThisMonth).length;
    document.getElementById('statExports').textContent = MP_PROMPTS.reduce((s, p) => s + p.exports, 0);

    // Pagination
    const pages = Math.ceil(total / mpState.perPage);
    document.getElementById('mpPageInfo').textContent =
        `Showing ${total === 0 ? 0 : start + 1} to ${Math.min(start + mpState.perPage, total)} of ${total} prompts`;

    const pb = document.getElementById('mpPageBtns');
    pb.innerHTML = '';
    // Prev
    const prev = document.createElement('button');
    prev.className = 'mp-page-btn';
    prev.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="12" height="12"><polyline points="15 18 9 12 15 6"/></svg>`;
    prev.disabled = mpState.page <= 1;
    prev.addEventListener('click', () => { mpState.page--; renderList(); });
    pb.appendChild(prev);

    for (let i = 1; i <= pages; i++) {
        const btn = document.createElement('button');
        btn.className = 'mp-page-btn' + (i === mpState.page ? ' active' : '');
        btn.textContent = i;
        btn.addEventListener('click', () => { mpState.page = i; renderList(); });
        pb.appendChild(btn);
    }

    const next = document.createElement('button');
    next.className = 'mp-page-btn';
    next.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="12" height="12"><polyline points="9 18 15 12 9 6"/></svg>`;
    next.disabled = mpState.page >= pages;
    next.addEventListener('click', () => { mpState.page++; renderList(); });
    pb.appendChild(next);

    // Grid/list class
    if (mpState.view === 'grid') el.classList.add('grid-view');
    else el.classList.remove('grid-view');

    // Re-highlight selection
    if (mpState.selectedId) {
        el.querySelector(`[data-id="${mpState.selectedId}"]`)?.classList.add('active');
    }
}

function mpItemHTML(p) {
    const icon = mpModelIcon(p.model);
    const favHtml = p.favorite ? `<span class="mp-fav-star"><svg viewBox="0 0 24 24" fill="#f59e0b" stroke="#f59e0b" stroke-width="1.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></span>` : '';
    const tagsHtml = p.tags.map(t => `<span class="mp-tag">${t}</span>`).join('');
    const filesHtml = p.files.length > 0
        ? `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/></svg>${p.files.length} file${p.files.length !== 1 ? 's' : ''}`
        : `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/></svg>No files`;

    return `
    <div class="mp-item" data-id="${p.id}">
        <input type="checkbox" class="mp-item-cb" onclick="event.stopPropagation()">
        <div class="mp-item-icon" style="background:${p.iconBg}"><i class="${p.icon}"></i></div>
        <div class="mp-item-info">
            <div class="mp-item-name">${p.name}${favHtml}</div>
            <div class="mp-item-model">
                <div class="mp-item-model-ic">${icon}</div>
                ${mpModelName(p.model)}
            </div>
        </div>
        <div class="mp-item-tags">${tagsHtml}</div>
        <div class="mp-item-files">${filesHtml}</div>
        <div class="mp-item-date">${p.date}<br>${p.time}</div>
        <button class="mp-item-more" title="More options">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="5" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="12" cy="19" r="1"/>
            </svg>
        </button>
    </div>`;
}

/* ── Item context menu ───────────────────────────────────── */
let mpMenuEl = null;
function mpShowItemMenu(id, anchor) {
    mpCloseMenu();
    const p = MP_PROMPTS.find(x => x.id === id);
    const favLabel = p.favorite ? 'Remove from Favorites' : 'Add to Favorites';
    const menu = document.createElement('div');
    menu.className = 'dd-menu open';
    menu.style.cssText = 'position:fixed;z-index:500;min-width:160px;';
    menu.innerHTML = `
        <div class="dd-item" data-action="use"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"/></svg>Use Prompt</div>
        <div class="dd-item" data-action="edit"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>Edit</div>
        <div class="dd-item" data-action="fav"><svg width="13" height="13" viewBox="0 0 24 24" fill="${p.favorite ? '#f59e0b' : 'none'}" stroke="#f59e0b" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>${favLabel}</div>
        <div class="dd-item" data-action="dup"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>Duplicate</div>
        <div class="dd-item" data-action="exp"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>Export</div>
        <div class="dd-item danger" data-action="del"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg>Delete</div>`;

    document.body.appendChild(menu);
    mpMenuEl = menu;

    const rect = anchor.getBoundingClientRect();
    menu.style.top = (rect.bottom + 4) + 'px';
    menu.style.left = (rect.right - menu.offsetWidth - 4) + 'px';

    menu.querySelectorAll('.dd-item').forEach(item => {
        item.addEventListener('click', e => {
            e.stopPropagation();
            mpMenuAction(item.dataset.action, id);
            mpCloseMenu();
        });
    });

    setTimeout(() => document.addEventListener('click', mpCloseMenu, { once: true }), 10);
}
function mpCloseMenu() {
    if (mpMenuEl) { mpMenuEl.remove(); mpMenuEl = null; }
}
function mpMenuAction(action, id) {
    const p = MP_PROMPTS.find(x => x.id === id);
    if (!p) return;
    if (action === 'use') { mpShowToast('ok', 'Using Prompt', `"${p.name}" loaded to builder.`); }
    else if (action === 'edit') { mpShowToast('in', 'Edit Mode', `Editing "${p.name}".`); }
    else if (action === 'fav') {
        p.favorite = !p.favorite;
        renderList();
        if (mpState.selectedId === id) renderDetail(p);
        mpShowToast('ok', p.favorite ? 'Added to Favorites' : 'Removed from Favorites', p.name);
    }
    else if (action === 'dup') {
        const dup = { ...p, id: Date.now(), name: p.name + ' (Copy)', favorite: false };
        MP_PROMPTS.unshift(dup);
        renderList();
        mpShowToast('ok', 'Duplicated', `"${p.name} (Copy)" created.`);
    }
    else if (action === 'exp') { mpShowToast('in', 'Exported', `"${p.name}" downloaded as TXT.`); }
    else if (action === 'del') {
        mpState.deleteTargetId = id;
        document.getElementById('mpDeleteName').textContent = `"${p.name}"`;
        document.getElementById('mpDeleteModal').classList.add('open');
    }
}

/* ── Select & render detail ─────────────────────────────── */
function mpSelectPrompt(id) {
    mpState.selectedId = id;
    document.querySelectorAll('.mp-item').forEach(el => {
        el.classList.toggle('active', +el.dataset.id === id);
    });
    const p = MP_PROMPTS.find(x => x.id === id);
    if (p) renderDetail(p);
}

function renderDetail(p) {
    document.getElementById('mpDetailEmpty').style.display = 'none';
    const dc = document.getElementById('mpDetailContent');
    dc.style.display = 'block';

    const icon = mpModelIcon(p.model);
    const favFill = p.favorite ? '#f59e0b' : 'none';
    const favStroke = p.favorite ? '#f59e0b' : 'currentColor';

    const filesThumb = p.files.slice(0, 3).map(f => `
        <div class="mp-file-thumb">
            <div class="mp-file-thumb-ic ${f.type}">${f.type.toUpperCase()}</div>
            <div class="mp-file-thumb-name">${f.name}</div>
            <div class="mp-file-thumb-size">${f.size}</div>
        </div>`).join('');

    const moreFilesHtml = p.files.length > 3
        ? `<div class="mp-files-more">+${p.files.length - 3} more</div>` : '';

    const tagsHtml = p.tags.map(t => `<span class="mp-tag" style="background:var(--s2)">${t}</span>`).join('');

    dc.innerHTML = `
        <!-- Header -->
        <div class="mp-dh">
            <div class="mp-dh-icon" style="background:${p.iconBg}"><i class="${p.icon}"></i></div>
            <div class="mp-dh-info">
                <div class="mp-dh-name">
                    ${p.name}
                    <span class="mp-fav-star" style="cursor:pointer" title="Toggle favorite" onclick="mpToggleFav(${p.id})">
                        <svg viewBox="0 0 24 24" fill="${favFill}" stroke="${favStroke}" stroke-width="1.5" width="15" height="15">
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                        </svg>
                    </span>
                </div>
                <div class="mp-dh-meta">
                    <div class="mp-dh-meta-ic">${icon}</div>
                    ${mpModelName(p.model)} &bull; Created ${p.date} at ${p.time}
                </div>
            </div>
            <div class="mp-dh-actions">
                <button class="mp-dh-btn-lbl" onclick="mpMenuAction('edit',${p.id})">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                    Edit
                </button>
                <button class="mp-dh-btn" title="More" onclick="mpShowItemMenu(${p.id}, this)">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="5" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="12" cy="19" r="1"/>
                    </svg>
                </button>
                <button class="mp-dh-close" title="Close" onclick="mpCloseDetail()">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                    </svg>
                </button>
            </div>
        </div>

        <!-- Description -->
        <div class="mp-dsec">
            <div class="mp-dsec-lbl">Description</div>
            <p class="mp-desc-text">${p.description}</p>
            <button class="mp-show-more">Show more <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="11" height="11"><polyline points="6 9 12 15 18 9"/></svg></button>
        </div>

        <!-- Attached Files -->
        ${p.files.length > 0 ? `
        <div class="mp-dsec">
            <div class="mp-files-hd">
                <div class="mp-dsec-lbl" style="margin-bottom:0">Attached Files (${p.files.length})</div>
                <button class="mp-view-all">View all</button>
            </div>
            <div class="mp-files-grid">
                ${filesThumb}
                ${moreFilesHtml}
            </div>
        </div>` : ''}

        <!-- Tags -->
        <div class="mp-dsec">
            <div class="mp-dsec-lbl">Tags</div>
            <div class="mp-tags-wrap">
                ${tagsHtml}
                <button class="mp-tag-add" title="Add tag">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                </button>
            </div>
        </div>

        <!-- Preview -->
        <div class="mp-dsec">
            <div class="mp-files-hd">
                <div class="mp-dsec-lbl" style="margin-bottom:0">Prompt Preview</div>
                <button class="mp-view-all" onclick="mpShowToast('ok','Copied','Prompt copied to clipboard.')">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="12" height="12" style="margin-right:3px"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                    Copy
                </button>
            </div>
            <div class="mp-preview-box">${p.preview.replace(/\n/g, '<br>')}</div>
        </div>

        <!-- Footer Actions -->
        <div class="mp-dfoot">
            <button class="btn btn-pri" onclick="mpShowToast('ok','Prompt Loaded','Opening in Builder…')">Use Prompt</button>
            <div class="mp-export-wrap">
                <button class="btn btn-sec" id="mpExportBtn" onclick="mpToggleExportDd()">
                    Export
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="11" height="11"><polyline points="6 9 12 15 18 9"/></svg>
                </button>
                <div class="mp-export-dd" id="mpExportDd">
                    <div class="dd-item" onclick="mpShowToast('in','Exported','Downloaded as TXT.')">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/></svg>
                        Export as TXT
                    </div>
                    <div class="dd-item" onclick="mpShowToast('in','Exported','Downloaded as Markdown.')">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/></svg>
                        Export as MD
                    </div>
                    <div class="dd-item" onclick="mpShowToast('in','Exported','Downloaded as JSON.')">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/></svg>
                        Export as JSON
                    </div>
                </div>
            </div>
            <button class="btn btn-sec" onclick="mpMenuAction('dup',${p.id})">Duplicate</button>
            <button class="btn btn-red" onclick="mpMenuAction('del',${p.id})">Delete</button>
        </div>`;
}

function mpCloseDetail() {
    mpState.selectedId = null;
    document.querySelectorAll('.mp-item').forEach(el => el.classList.remove('active'));
    document.getElementById('mpDetailEmpty').style.display = '';
    document.getElementById('mpDetailContent').style.display = 'none';
}

function mpToggleFav(id) {
    const p = MP_PROMPTS.find(x => x.id === id);
    if (!p) return;
    p.favorite = !p.favorite;
    renderList();
    renderDetail(p);
    mpShowToast('ok', p.favorite ? 'Added to Favorites' : 'Removed from Favorites', p.name);
}

function mpToggleExportDd() {
    document.getElementById('mpExportDd')?.classList.toggle('open');
}

/* ── Toast helper ────────────────────────────────────────── */
function mpShowToast(type, title, desc) {
    // Use app.js toast() if available (builder page), otherwise use standalone fallback
    if (typeof toast === 'function') { toast(type, title, desc); return; }
    // fallback simple toast
    const wrap = document.getElementById('toasts');
    if (!wrap) return;
    const icons = {
        ok: `<svg class="t-ic" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>`,
        er: `<svg class="t-ic" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>`,
        in: `<svg class="t-ic" viewBox="0 0 24 24" fill="none" stroke="#5bd45b" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`
    };
    const t = document.createElement('div');
    t.className = `toast ${type}`;
    t.innerHTML = `${icons[type] || icons.in}<div class="t-body"><div class="t-title">${title}</div><div class="t-desc">${desc}</div></div>
        <svg class="t-x" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`;
    t.querySelector('.t-x').addEventListener('click', () => t.remove());
    wrap.appendChild(t);
    setTimeout(() => { t.style.animation = 'toastOut 300ms ease forwards'; setTimeout(() => t.remove(), 300); }, 3500);
}

/* ── Event wiring ─────────────────────────────────────────── */
document.getElementById('mpSearch').addEventListener('input', e => {
    mpState.search = e.target.value;
    mpState.page = 1;
    renderList();
});
document.getElementById('mpModelFilter').addEventListener('change', e => {
    mpState.modelFilter = e.target.value;
    mpState.page = 1;
    renderList();
});
document.getElementById('mpTagFilter').addEventListener('change', e => {
    mpState.tagFilter = e.target.value;
    mpState.page = 1;
    renderList();
});
document.getElementById('mpSort').addEventListener('change', e => {
    mpState.sort = e.target.value;
    mpState.page = 1;
    renderList();
});
document.getElementById('mpPerPage').addEventListener('change', e => {
    mpState.perPage = +e.target.value;
    mpState.page = 1;
    renderList();
});
document.querySelectorAll('.mp-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('.mp-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        mpState.tab = tab.dataset.tab;
        mpState.page = 1;
        renderList();
    });
});
document.getElementById('mpListViewBtn').addEventListener('click', () => {
    mpState.view = 'list';
    document.getElementById('mpListViewBtn').classList.add('active');
    document.getElementById('mpGridViewBtn').classList.remove('active');
    renderList();
});
document.getElementById('mpGridViewBtn').addEventListener('click', () => {
    mpState.view = 'grid';
    document.getElementById('mpGridViewBtn').classList.add('active');
    document.getElementById('mpListViewBtn').classList.remove('active');
    renderList();
});
document.getElementById('mpNewBtn').addEventListener('click', () => {
    window.location.href = 'index.html';
});

// Sidebar Favorites link shortcut
document.getElementById('mpFavNavBtn')?.addEventListener('click', () => {
    document.querySelectorAll('.mp-tab').forEach(t => t.classList.remove('active'));
    document.querySelector('.mp-tab[data-tab="favorites"]')?.classList.add('active');
    mpState.tab = 'favorites';
    mpState.page = 1;
    renderList();
});

// Delete modal
document.getElementById('mpDeleteCancel').addEventListener('click', () => {
    document.getElementById('mpDeleteModal').classList.remove('open');
});
document.getElementById('mpDeleteConfirm').addEventListener('click', () => {
    const id = mpState.deleteTargetId;
    const idx = MP_PROMPTS.findIndex(x => x.id === id);
    if (idx !== -1) {
        const name = MP_PROMPTS[idx].name;
        MP_PROMPTS.splice(idx, 1);
        if (mpState.selectedId === id) mpCloseDetail();
        renderList();
        mpShowToast('ok', 'Deleted', `"${name}" has been removed.`);
    }
    document.getElementById('mpDeleteModal').classList.remove('open');
});


// Close export dd on outside click
document.addEventListener('click', e => {
    const dd = document.getElementById('mpExportDd');
    if (dd && !e.target.closest('#mpExportBtn') && !e.target.closest('#mpExportDd')) {
        dd.classList.remove('open');
    }
});

/* ── Boot ─────────────────────────────────────────────────── */
renderList();