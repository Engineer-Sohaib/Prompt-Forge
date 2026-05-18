/* ============================================================
   TEMPLATES PAGE — templates.js
   Depends on: app.js (for MODELS data, toast, theme)
   All globals prefixed TPL_ / tpl to avoid collisions
   ============================================================ */

/* ── Template Data ──────────────────────────────────────── */
const TPL_ITEMS = [
  {
    id: 1,
    name: "Market Research Analyst",
    model: "claude",
    category: "business",
    icon: "ri-line-chart-line",
    iconBg: "linear-gradient(135deg,#ef4444,#dc2626)",
    iconColor: "#fff",
    description: "Analyze market trends, competitors, and opportunities with comprehensive insights and data-driven recommendations.",
    tags: ["Market Analysis", "Competitive Research", "Business Strategy"],
    includes: ["Market size and growth analysis", "Competitor analysis and positioning", "SWOT analysis", "Key opportunities and threats", "Strategic recommendations"],
    uses: 12400,
    rating: 4.8,
    favs: 2100,
    popular: true,
    preview: `You are a market research analyst. Using the provided documents and data, conduct a comprehensive market analysis.

Please provide:
1. Market Overview
2. Market Size and Growth Trends
3. Competitive Landscape
4. Key Opportunities
5. Potential Threats
6. Strategic Recommendations`,
  },
  {
    id: 2,
    name: "Blog Post Writer",
    model: "chatgpt",
    category: "content",
    icon: "ri-file-edit-line",
    iconBg: "linear-gradient(135deg,#10b981,#059669)",
    iconColor: "#fff",
    description: "Generate SEO-friendly blog posts with engaging content and clear structure for any topic.",
    tags: ["SEO Writing", "Content Marketing", "Blog"],
    includes: ["SEO-optimized headlines", "Engaging introduction", "Structured body sections", "Call-to-action conclusion", "Meta description"],
    uses: 8700,
    rating: 4.7,
    favs: 1540,
    popular: true,
    preview: `Write a comprehensive, SEO-friendly blog post about [TOPIC].

Requirements:
- Target keyword: [KEYWORD]
- Tone: [TONE]
- Word count: approximately [LENGTH] words
- Include relevant subheadings, examples, and a strong CTA.`,
  },
  {
    id: 3,
    name: "Business Plan Generator",
    model: "claude",
    category: "business",
    icon: "ri-file-text-fill",
    iconBg: "linear-gradient(135deg,#8b5cf6,#7c3aed)",
    iconColor: "#fff",
    description: "Create comprehensive business plans with market analysis and financial projections.",
    tags: ["Business Strategy", "Finance", "Planning"],
    includes: ["Executive summary", "Market analysis", "Operational plan", "Financial projections", "Risk assessment"],
    uses: 6200,
    rating: 4.6,
    favs: 980,
    popular: true,
    preview: `Create a detailed business plan for [BUSINESS NAME], a [INDUSTRY] company.

Business Overview: [DESCRIPTION]
Target Market: [TARGET MARKET]
Revenue Model: [REVENUE MODEL]

Please structure the plan with clear sections for each business domain.`,
  },
  {
    id: 4,
    name: "Social Media Content",
    model: "gemini",
    category: "marketing",
    icon: "ri-smartphone-line",
    iconBg: "linear-gradient(135deg,#3b82f6,#2563eb)",
    iconColor: "#fff",
    description: "Create engaging social media posts tailored to different platforms and audiences.",
    tags: ["Social Media", "Content Creation", "Engagement"],
    includes: ["Platform-specific formatting", "Hashtag suggestions", "Engagement hooks", "Call-to-action variants", "Character-count awareness"],
    uses: 5100,
    rating: 4.5,
    favs: 870,
    popular: true,
    preview: `Create [NUMBER] social media posts for [PLATFORM] about [TOPIC/PRODUCT].

Brand voice: [TONE]
Target audience: [AUDIENCE]
Goal: [AWARENESS/ENGAGEMENT/CONVERSION]

Include relevant hashtags and emojis where appropriate.`,
  },
  {
    id: 5,
    name: "Email Campaign",
    model: "chatgpt",
    category: "marketing",
    icon: "ri-mail-line",
    iconBg: "linear-gradient(135deg,#f59e0b,#d97706)",
    iconColor: "#fff",
    description: "Write persuasive email campaigns that convert with compelling copy and clear calls to action.",
    tags: ["Email Marketing", "Copywriting", "Conversion"],
    includes: ["Subject line variants", "Preview text", "Personalization hooks", "Body copy structure", "CTA optimization"],
    uses: 4800,
    rating: 4.6,
    favs: 760,
    popular: false,
    preview: `Write a compelling marketing email for [PRODUCT/SERVICE].

Campaign goal: [GOAL]
Audience segment: [SEGMENT]
Key offer/value prop: [OFFER]
Tone: [PROFESSIONAL/FRIENDLY/URGENT]

Include 3 subject line options and a clear CTA.`,
  },
  {
    id: 6,
    name: "Product Description",
    model: "claude",
    category: "content",
    icon: "ri-file-list-3-line",
    iconBg: "linear-gradient(135deg,#ec4899,#db2777)",
    iconColor: "#fff",
    description: "Create compelling product descriptions that highlight benefits and drive purchase decisions.",
    tags: ["E-commerce", "Copywriting", "Sales"],
    includes: ["Benefit-focused headline", "Feature-to-benefit mapping", "Target audience alignment", "SEO keywords integration", "Urgency/scarcity elements"],
    uses: 3900,
    rating: 4.4,
    favs: 620,
    popular: false,
    preview: `Write a persuasive product description for [PRODUCT NAME].

Key features: [FEATURES]
Target customer: [CUSTOMER PROFILE]
Price point: [PRICE]
Unique selling proposition: [USP]

Length: [SHORT/MEDIUM/LONG]. Tone: [BRAND VOICE].`,
  },
  {
    id: 7,
    name: "Content Summarizer",
    model: "gemini",
    category: "content",
    icon: "ri-file-list-2-line",
    iconBg: "linear-gradient(135deg,#14b8a6,#0d9488)",
    iconColor: "#fff",
    description: "Summarize long content into concise key points while preserving essential meaning.",
    tags: ["Research", "Productivity", "Writing"],
    includes: ["Executive summary", "Key takeaways", "Main argument extraction", "Actionable insights", "Source attribution"],
    uses: 3600,
    rating: 4.5,
    favs: 540,
    popular: false,
    preview: `Summarize the following content in a clear, concise way.

Summary format: [BULLETS/PARAGRAPHS/EXECUTIVE BRIEF]
Target length: [LENGTH]
Audience: [WHO WILL READ THIS]
Focus areas: [OPTIONAL SPECIFIC TOPICS]

[PASTE CONTENT HERE]`,
  },
  {
    id: 8,
    name: "Resume Reviewer",
    model: "claude",
    category: "business",
    icon: "ri-user-line",
    iconBg: "linear-gradient(135deg,#f97316,#ea580c)",
    iconColor: "#fff",
    description: "Review and improve resumes to maximize impact and better match job requirements.",
    tags: ["Career", "HR", "Writing"],
    includes: ["ATS optimization tips", "Impact verb suggestions", "Quantification guidance", "Format critique", "Keyword alignment"],
    uses: 2900,
    rating: 4.7,
    favs: 490,
    popular: false,
    preview: `Review this resume and provide actionable improvement suggestions.

Target role: [JOB TITLE]
Industry: [INDUSTRY]
Experience level: [JUNIOR/MID/SENIOR]

Focus on: clarity, impact, ATS compatibility, and keyword alignment with the target role.

[PASTE RESUME HERE]`,
  },
  {
    id: 9,
    name: "Lesson Plan Creator",
    model: "gemini",
    category: "education",
    icon: "ri-book-open-line",
    iconBg: "linear-gradient(135deg,#6366f1,#4f46e5)",
    iconColor: "#fff",
    description: "Create structured lesson plans for educators with clear objectives and activities.",
    tags: ["Education", "Teaching", "Curriculum"],
    includes: ["Learning objectives", "Materials list", "Step-by-step activities", "Assessment criteria", "Differentiation strategies"],
    uses: 2400,
    rating: 4.6,
    favs: 390,
    popular: false,
    preview: `Create a detailed lesson plan for [SUBJECT].

Grade level: [GRADE]
Duration: [MINUTES]
Topic: [TOPIC]
Learning objectives: [OBJECTIVES]

Include activities, discussion questions, and assessment methods.`,
  },
  {
    id: 10,
    name: "Code Explainer",
    model: "chatgpt",
    category: "coding",
    icon: "ri-code-s-slash-line",
    iconBg: "linear-gradient(135deg,#10b981,#059669)",
    iconColor: "#fff",
    description: "Explain code in simple terms with helpful examples suitable for any skill level.",
    tags: ["Coding", "Learning", "Documentation"],
    includes: ["Plain-language explanation", "Line-by-line breakdown", "Concept definitions", "Example use cases", "Common pitfalls"],
    uses: 2100,
    rating: 4.8,
    favs: 430,
    popular: false,
    preview: `Explain the following code in clear, simple terms.

Audience level: [BEGINNER/INTERMEDIATE/EXPERT]
Focus: [LOGIC/PERFORMANCE/SECURITY/STYLE]

[PASTE CODE HERE]

Provide a high-level summary, then explain key sections individually.`,
  },
  {
    id: 11,
    name: "Customer Support Reply",
    model: "claude",
    category: "customer-support",
    icon: "ri-customer-service-2-line",
    iconBg: "linear-gradient(135deg,#3b82f6,#1d4ed8)",
    iconColor: "#fff",
    description: "Generate helpful and professional customer support responses that resolve issues efficiently.",
    tags: ["Customer Service", "Support", "Communication"],
    includes: ["Empathetic opening", "Issue acknowledgment", "Clear resolution steps", "Policy-compliant language", "Follow-up offer"],
    uses: 1800,
    rating: 4.5,
    favs: 310,
    popular: false,
    preview: `Write a professional customer support response for the following issue.

Tone: [EMPATHETIC/FORMAL/FRIENDLY]
Issue type: [REFUND/TECHNICAL/BILLING/GENERAL]
Company policy: [RELEVANT POLICY IF ANY]

Customer message: [PASTE MESSAGE HERE]`,
  },
  {
    id: 12,
    name: "Interview Question Generator",
    model: "claude",
    category: "business",
    icon: "ri-question-answer-line",
    iconBg: "linear-gradient(135deg,#8b5cf6,#6d28d9)",
    iconColor: "#fff",
    description: "Generate targeted interview questions to evaluate candidates for any role effectively.",
    tags: ["HR", "Recruiting", "Assessment"],
    includes: ["Role-specific questions", "Behavioral questions", "Technical probes", "Culture-fit questions", "Scoring rubrics"],
    uses: 1600,
    rating: 4.4,
    favs: 270,
    popular: false,
    preview: `Generate a comprehensive set of interview questions for [JOB TITLE].

Industry: [INDUSTRY]
Seniority: [LEVEL]
Key skills to assess: [SKILLS]
Interview format: [STRUCTURED/CONVERSATIONAL]

Include a mix of behavioral, situational, and technical questions.`,
  },
];

/* ── State ─────────────────────────────────────────────── */
let tplState = {
  view: 'grid',          // 'grid' | 'list'
  activeCat: '',         // '' = all
  searchQuery: '',
  sortBy: 'popular',
  modelFilter: '',
  selectedId: null,
  favorites: new Set(JSON.parse(localStorage.getItem('tpl_favorites') || '[]')),
  showAll: false,        // whether to show full list or truncated
};

const TPL_POPULAR_SHOWN = 4;
const TPL_ALL_SHOWN = 8;

/* ── Helpers ───────────────────────────────────────────── */
function tplSaveFavs() {
  localStorage.setItem('tpl_favorites', JSON.stringify([...tplState.favorites]));
}

function tplFmtNum(n) {
  if (n >= 1000) return (n / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
  return String(n);
}

function tplGetModel(id) {
  return (typeof MODELS !== 'undefined' && MODELS.find(m => m.id === id)) || null;
}

function tplModelHtml(modelId, size = 14) {
  const m = tplGetModel(modelId);
  if (!m) return '';
  return `<span class="tpl-card-model">
    <span class="tpl-card-model-ic" style="width:${size}px;height:${size}px">${m.svg}</span>
    ${m.name}
  </span>`;
}

function tplCatLabel(cat) {
  const map = { marketing: 'Marketing', content: 'Content Creation', business: 'Business', education: 'Education', coding: 'Coding', 'customer-support': 'Customer Support' };
  return map[cat] || cat;
}

/* ── Filtering & sorting ───────────────────────────────── */
function tplFilteredItems() {
  let items = [...TPL_ITEMS];

  if (tplState.activeCat) {
    items = items.filter(t => t.category === tplState.activeCat);
  }
  if (tplState.modelFilter) {
    items = items.filter(t => t.model === tplState.modelFilter);
  }
  if (tplState.searchQuery) {
    const q = tplState.searchQuery.toLowerCase();
    items = items.filter(t =>
      t.name.toLowerCase().includes(q) ||
      t.description.toLowerCase().includes(q) ||
      t.tags.some(tag => tag.toLowerCase().includes(q)) ||
      tplCatLabel(t.category).toLowerCase().includes(q)
    );
  }

  switch (tplState.sortBy) {
    case 'popular': items.sort((a, b) => b.uses - a.uses); break;
    case 'newest': items.sort((a, b) => b.id - a.id); break;
    case 'name': items.sort((a, b) => a.name.localeCompare(b.name)); break;
    case 'uses': items.sort((a, b) => b.uses - a.uses); break;
  }
  return items;
}

/* ── Card rendering ─────────────────────────────────────── */
function tplCardHtml(t) {
  const isFav = tplState.favorites.has(t.id);
  const isSelected = tplState.selectedId === t.id;
  return `
  <div class="tpl-card${isSelected ? ' selected' : ''}" data-id="${t.id}">
    <div class="tpl-card-hd">
      <div class="tpl-card-icon" style="background:${t.iconBg}">
        <i class="${t.icon}" style="color:${t.iconColor};font-size:18px"></i>
      </div>
      <button class="tpl-star-btn${isFav ? ' active' : ''}" data-star="${t.id}" title="${isFav ? 'Remove from favorites' : 'Add to favorites'}">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
        </svg>
      </button>
    </div>
    <div class="tpl-card-name">${t.name}</div>
    <div class="tpl-card-desc">${t.description}</div>
    <div class="tpl-card-ft">
      ${tplModelHtml(t.model)}
    </div>
    <div class="tpl-card-ft" style="margin-top:-4px">
      <span class="tpl-card-uses">${tplFmtNum(t.uses)} uses</span>
      <button class="tpl-use-btn" data-use="${t.id}">Use Template</button>
    </div>
  </div>`;
}

function tplRowHtml(t) {
  const isFav = tplState.favorites.has(t.id);
  const isSelected = tplState.selectedId === t.id;
  const m = tplGetModel(t.model);
  return `
  <div class="tpl-row${isSelected ? ' selected' : ''}" data-id="${t.id}">
    <div class="tpl-row-icon" style="background:${t.iconBg}">
      <i class="${t.icon}" style="color:${t.iconColor};font-size:17px"></i>
    </div>
    <div class="tpl-row-body">
      <div class="tpl-row-name">${t.name}</div>
      <div class="tpl-row-meta">
        <span class="tpl-row-cat">${tplCatLabel(t.category)}</span>
        <span style="color:var(--t3);font-size:11px">·</span>
        <span class="tpl-row-desc">${t.description}</span>
      </div>
    </div>
    <span class="tpl-row-uses">${tplFmtNum(t.uses)} uses</span>
    <div class="tpl-row-actions">
      <button class="tpl-star-btn${isFav ? ' active' : ''}" data-star="${t.id}">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
        </svg>
      </button>
      <button class="tpl-use-btn" data-use="${t.id}">Use Template</button>
    </div>
  </div>`;
}

/* ── Render ─────────────────────────────────────────────── */
function tplRender() {
  const filtered = tplFilteredItems();
  const isSearching = !!tplState.searchQuery || !!tplState.modelFilter || !!tplState.activeCat;

  const popularSection = document.getElementById('tplPopularSection');
  const allSection = document.getElementById('tplAllSection');
  const tplEmpty = document.getElementById('tplEmpty');
  const resultBar = document.getElementById('tplResultBar');
  const resultCount = document.getElementById('tplResultCount');

  // Result bar
  if (tplState.searchQuery || tplState.modelFilter) {
    resultBar.style.display = 'flex';
    resultCount.textContent = `${filtered.length} result${filtered.length !== 1 ? 's' : ''} found`;
  } else {
    resultBar.style.display = 'none';
  }

  if (filtered.length === 0) {
    popularSection.style.display = 'none';
    allSection.style.display = 'none';
    tplEmpty.style.display = 'flex';
    return;
  }

  tplEmpty.style.display = 'none';

  if (tplState.view === 'grid') {
    // Popular section: show only when no active search/filter, or when filter matches
    const popularItems = isSearching
      ? filtered.filter(t => t.popular)
      : TPL_ITEMS.filter(t => t.popular).slice(0, TPL_POPULAR_SHOWN);

    if (!isSearching || popularItems.length > 0) {
      popularSection.style.display = '';
      const popularGrid = document.getElementById('tplPopularGrid');
      popularGrid.innerHTML = popularItems.map(t => tplCardHtml(t)).join('');
    } else {
      popularSection.style.display = 'none';
    }

    // All templates section
    allSection.style.display = '';
    document.getElementById('tplAllSectionTitle').textContent = isSearching ? 'Results' : 'All Templates';

    const allGrid = document.getElementById('tplAllGrid');
    const viewMoreCard = document.getElementById('tplViewMoreCard');
    const shownItems = tplState.showAll ? filtered : filtered.slice(0, TPL_ALL_SHOWN);
    allGrid.innerHTML = shownItems.map(t => tplCardHtml(t)).join('');

    viewMoreCard.style.display = (filtered.length > TPL_ALL_SHOWN && !tplState.showAll) ? '' : 'none';

  } else {
    // List view: hide popular, show flat list
    popularSection.style.display = 'none';
    allSection.style.display = '';
    document.getElementById('tplAllSectionTitle').textContent = isSearching ? 'Results' : 'All Templates';

    const allGrid = document.getElementById('tplAllGrid');
    allGrid.innerHTML = `<div class="tpl-list-view">${filtered.map(t => tplRowHtml(t)).join('')}</div>`;
    document.getElementById('tplViewMoreCard').style.display = 'none';
  }
}

/* ── Detail panel ───────────────────────────────────────── */
function tplOpenDetail(id) {
  const t = TPL_ITEMS.find(x => x.id === id);
  if (!t) return;
  tplState.selectedId = id;

  const panel = document.getElementById('tplDetail');
  panel.style.display = 'flex';
  panel.style.flexDirection = 'column';

  // Icon
  document.getElementById('tplDetailIcon').innerHTML = `<i class="${t.icon}" style="color:${t.iconColor};font-size:22px;background:${t.iconBg};width:44px;height:44px;border-radius:12px;display:flex;align-items:center;justify-content:center;"></i>`;

  document.getElementById('tplDetailName').textContent = t.name;

  // Star
  const starBtn = document.getElementById('tplDetailStar');
  const isFav = tplState.favorites.has(t.id);
  starBtn.className = `fav-star-btn${isFav ? ' active' : ''}`;
  starBtn.innerHTML = `<svg viewBox="0 0 24 24" fill="${isFav ? '#f59e0b' : 'none'}" stroke="${isFav ? '#f59e0b' : 'currentColor'}" stroke-width="2" stroke-linecap="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`;

  // Model row
  const m = tplGetModel(t.model);
  const modelColor = { claude: '#D77655', chatgpt: '#333', gemini: '#4285F4', deepseek: '#1A73E8' };
  document.getElementById('tplDetailModel').innerHTML = `
    <span class="tpl-detail-model-dot" style="background:${modelColor[t.model] || '#888'}"></span>
    ${m ? m.name : t.model}
  `;

  document.getElementById('tplDetailDesc').textContent = t.description;

  document.getElementById('tplDetailTags').innerHTML = t.tags.map(tag =>
    `<span class="tpl-detail-tag">${tag}</span>`
  ).join('');

  document.getElementById('tplDetailIncludes').innerHTML = t.includes.map(item =>
    `<li>${item}</li>`
  ).join('');

  document.getElementById('tplDetailUses').textContent = tplFmtNum(t.uses);
  document.getElementById('tplDetailRating').textContent = t.rating.toFixed(1);
  document.getElementById('tplDetailFavs').textContent = tplFmtNum(t.favs);

  document.getElementById('tplDetailPreview').textContent = t.preview;

  document.getElementById('tplDetailModelRow').innerHTML = m ? `
    <span class="tpl-detail-model-ic">${m.svg}</span>
    <span class="tpl-detail-model-name">${m.name}</span>
  ` : t.model;

  // Re-render grid to update selected state
  tplRender();
}

function tplCloseDetail() {
  tplState.selectedId = null;
  document.getElementById('tplDetail').style.display = 'none';
  tplRender();
}

/* ── Toast ──────────────────────────────────────────────── */
function tplToast(msg, type = 'success') {
  if (typeof showToast === 'function') {
    showToast(msg, type);
    return;
  }
  const wrap = document.getElementById('toasts');
  if (!wrap) return;
  const el = document.createElement('div');
  el.className = `toast toast-${type}`;
  el.textContent = msg;
  wrap.appendChild(el);
  setTimeout(() => el.remove(), 3000);
}

/* ── Modal helpers ──────────────────────────────────────── */
function tplOpenUseModal(id) {
  const t = TPL_ITEMS.find(x => x.id === id);
  if (!t) return;
  const m = tplGetModel(t.model);
  document.getElementById('tplUseCard').innerHTML = `
    <div class="fav-use-card-inner">
      <div class="tpl-card-icon" style="background:${t.iconBg};width:34px;height:34px;border-radius:8px;flex-shrink:0">
        <i class="${t.icon}" style="color:${t.iconColor};font-size:16px"></i>
      </div>
      <div>
        <div class="fav-use-card-name">${t.name}</div>
        <div class="fav-use-card-desc">${t.description}</div>
      </div>
    </div>`;
  document.getElementById('tplOptModelName').textContent = m ? m.name : t.model;
  document.getElementById('tplUseModal').classList.add('open');
  document.getElementById('tplUseContinue').onclick = () => {
    tplToast(`Template "${t.name}" applied!`, 'success');
    document.getElementById('tplUseModal').classList.remove('open');
    setTimeout(() => { window.location.href = 'index.html'; }, 600);
  };
}

function tplOpenCreateModal() {
  document.getElementById('tplCreateName').value = '';
  document.getElementById('tplCreateDesc').value = '';
  document.getElementById('tplCreateContent').value = '';
  document.getElementById('tplCreateModal').classList.add('open');
}
/* ── Event wiring ───────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {

  // Initial render
  tplRender();

  // Search
  const searchEl = document.getElementById('tplSearch');
  const searchClear = document.getElementById('tplSearchClear');
  searchEl.addEventListener('input', () => {
    tplState.searchQuery = searchEl.value.trim();
    searchClear.style.display = tplState.searchQuery ? '' : 'none';
    tplState.showAll = false;
    tplRender();
  });
  searchClear.addEventListener('click', () => {
    searchEl.value = '';
    tplState.searchQuery = '';
    searchClear.style.display = 'none';
    tplState.showAll = false;
    tplRender();
  });
  document.getElementById('tplClearSearch').addEventListener('click', () => {
    searchEl.value = '';
    tplState.searchQuery = '';
    searchClear.style.display = 'none';
    tplRender();
  });

  // Filters
  document.getElementById('tplCatFilter').addEventListener('change', e => {
    tplState.activeCat = e.target.value;
    // sync tab
    document.querySelectorAll('.tpl-cat-tab').forEach(btn => btn.classList.toggle('active', btn.dataset.cat === tplState.activeCat));
    tplRender();
  });
  document.getElementById('tplModelFilter').addEventListener('change', e => {
    tplState.modelFilter = e.target.value;
    tplRender();
  });
  document.getElementById('tplSort').addEventListener('change', e => {
    tplState.sortBy = e.target.value;
    tplRender();
  });

  // Category tabs
  document.getElementById('tplCatTabs').addEventListener('click', e => {
    const tab = e.target.closest('.tpl-cat-tab');
    if (!tab || tab.id === 'tplCatMore') return;
    tplState.activeCat = tab.dataset.cat;
    document.querySelectorAll('.tpl-cat-tab').forEach(b => b.classList.remove('active'));
    tab.classList.add('active');
    // sync select
    document.getElementById('tplCatFilter').value = tplState.activeCat;
    tplState.showAll = false;
    tplRender();
  });

  // View toggles
  document.getElementById('tplListViewBtn').addEventListener('click', () => {
    tplState.view = 'list';
    document.getElementById('tplListViewBtn').classList.add('active');
    document.getElementById('tplGridViewBtn').classList.remove('active');
    tplRender();
  });
  document.getElementById('tplGridViewBtn').addEventListener('click', () => {
    tplState.view = 'grid';
    document.getElementById('tplGridViewBtn').classList.add('active');
    document.getElementById('tplListViewBtn').classList.remove('active');
    tplRender();
  });

  // Create template button
  document.getElementById('tplCreateBtn').addEventListener('click', tplOpenCreateModal);

  // Browse all / View all
  document.getElementById('tplBrowseAllBtn').addEventListener('click', () => {
    tplState.showAll = true;
    tplRender();
  });
  document.getElementById('tplViewAllPopular').addEventListener('click', () => {
    tplState.activeCat = '';
    tplState.showAll = true;
    document.querySelectorAll('.tpl-cat-tab').forEach(b => b.classList.remove('active'));
    document.querySelector('.tpl-cat-tab[data-cat=""]').classList.add('active');
    tplRender();
  });

  // Empty state reset
  document.getElementById('tplEmptyResetBtn').addEventListener('click', () => {
    tplState.searchQuery = '';
    tplState.activeCat = '';
    tplState.modelFilter = '';
    document.getElementById('tplSearch').value = '';
    document.getElementById('tplCatFilter').value = '';
    document.getElementById('tplModelFilter').value = '';
    searchClear.style.display = 'none';
    document.querySelectorAll('.tpl-cat-tab').forEach(b => b.classList.remove('active'));
    document.querySelector('.tpl-cat-tab[data-cat=""]').classList.add('active');
    tplRender();
  });

  // Detail panel close
  document.getElementById('tplDetailClose').addEventListener('click', tplCloseDetail);

  // Detail panel star
  document.getElementById('tplDetailStar').addEventListener('click', () => {
    if (!tplState.selectedId) return;
    const id = tplState.selectedId;
    if (tplState.favorites.has(id)) {
      tplState.favorites.delete(id);
      tplToast('Removed from favorites');
    } else {
      tplState.favorites.add(id);
      tplToast('Added to favorites!');
    }
    tplSaveFavs();
    tplOpenDetail(id); // refresh panel star state
    tplRender();
  });

  // Detail panel use / customize
  document.getElementById('tplUseBtn').addEventListener('click', () => {
    if (tplState.selectedId) tplOpenUseModal(tplState.selectedId);
  });
  document.getElementById('tplCustomizeBtn').addEventListener('click', () => {
    if (tplState.selectedId) {
      tplToast('Opening template editor…');
      setTimeout(() => { window.location.href = 'index.html'; }, 700);
    }
  });
  document.getElementById('tplSeeFullBtn').addEventListener('click', () => {
    if (tplState.selectedId) {
      const t = TPL_ITEMS.find(x => x.id === tplState.selectedId);
      if (t) tplToast(`Viewing full preview of "${t.name}"`);
    }
  });

  // Grid/row event delegation
  document.addEventListener('click', e => {
    // Star button
    const starBtn = e.target.closest('[data-star]');
    if (starBtn) {
      e.stopPropagation();
      const id = Number(starBtn.dataset.star);
      if (tplState.favorites.has(id)) {
        tplState.favorites.delete(id);
        tplToast('Removed from favorites');
      } else {
        tplState.favorites.add(id);
        tplToast('Added to favorites!');
      }
      tplSaveFavs();
      if (tplState.selectedId === id) tplOpenDetail(id);
      else tplRender();
      return;
    }

    // Use template button
    const useBtn = e.target.closest('[data-use]');
    if (useBtn) {
      e.stopPropagation();
      tplOpenUseModal(Number(useBtn.dataset.use));
      return;
    }

    // Card click → open detail
    const card = e.target.closest('.tpl-card, .tpl-row');
    if (card && card.dataset.id) {
      tplOpenDetail(Number(card.dataset.id));
    }
  });

  // Use modal close / cancel
  document.getElementById('tplUseClose').addEventListener('click', () => {
    document.getElementById('tplUseModal').classList.remove('open');
  });
  document.getElementById('tplUseCancel').addEventListener('click', () => {
    document.getElementById('tplUseModal').classList.remove('open');
  });

  // Create modal close / cancel / save
  document.getElementById('tplCreateClose').addEventListener('click', () => {
    document.getElementById('tplCreateModal').classList.remove('open');
  });
  document.getElementById('tplCreateCancelBtn').addEventListener('click', () => {
    document.getElementById('tplCreateModal').classList.remove('open');
  });
  document.getElementById('tplCreateSaveBtn').addEventListener('click', () => {
    const name = document.getElementById('tplCreateName').value.trim();
    const content = document.getElementById('tplCreateContent').value.trim();
    if (!name) { tplToast('Please enter a template name.', 'error'); return; }
    if (!content) { tplToast('Please add template content.', 'error'); return; }
    tplToast(`Template "${name}" created!`, 'success');
    document.getElementById('tplCreateModal').classList.remove('open');
  });

  // Close modals on overlay click
  document.getElementById('tplUseModal').addEventListener('click', e => {
    if (e.target === document.getElementById('tplUseModal')) {
      document.getElementById('tplUseModal').classList.remove('open');
    }
  });
  document.getElementById('tplCreateModal').addEventListener('click', e => {
    if (e.target === document.getElementById('tplCreateModal')) {
      document.getElementById('tplCreateModal').classList.remove('open');
    }
  });

  // Update category counts in tabs
  const counts = { '': TPL_ITEMS.length };
  TPL_ITEMS.forEach(t => { counts[t.category] = (counts[t.category] || 0) + 1; });
  const countMap = {
    '': 'tabCountAll',
    marketing: 'tabCountMarketing',
    content: 'tabCountContent',
    business: 'tabCountBusiness',
    education: 'tabCountEducation',
    coding: 'tabCountCoding',
  };
  Object.entries(countMap).forEach(([cat, elId]) => {
    const el = document.getElementById(elId);
    if (el) el.textContent = counts[cat] || 0;
  });
});
