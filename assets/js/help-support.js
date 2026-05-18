/* ============================================================
   HELP & SUPPORT PAGE — help-support.js
   All logic namespaced with "hs" prefix to avoid conflicts
   Dark mode uses global dark / applyTheme from app.js
   ============================================================ */

/* ── Data ────────────────────────────────────────────────────── */
const HS_ARTICLES = [
  {
    id: 'a1',
    title: 'Getting started with PromptBuilder',
    desc: 'Learn the basics and get up and running quickly.',
    category: 'Getting Started',
    updated: 'May 28, 2024',
    toc: ['1. Create your account', '2. Build your first prompt', '3. Choose the right template', '4. Add key details', '5. Review and refine', '6. Example prompt'],
    content: [
      { heading: '1. Create your account', body: 'Sign up with your email address to get started. After verifying your email, you will be taken to the PromptBuilder dashboard where you can immediately begin creating prompts.' },
      { heading: '2. Build your first prompt', body: 'Click the "Builder" option in the left sidebar. You will see a multi-step form that guides you through creating your first AI prompt. Follow the steps from Model Selection to the final prompt preview.' },
      { heading: '3. Choose the right template', body: 'Use our pre-built templates to get started quickly. Navigate to Templates in the sidebar and filter by category to find the template that best fits your use case.' },
      { heading: '4. Add key details', body: 'Be specific about the topic, audience, and insights you are looking for. The more context you provide, the more useful and targeted your prompt will be.' },
      { heading: '5. Review and refine', body: 'Once your prompt is generated, review it in the preview panel. You can edit any section, copy it to your clipboard, or export it as a text file.' },
      { heading: '6. Example prompt', body: 'Here is an example of a well-crafted market research prompt: "Act as an expert market research analyst. Analyze the competitive landscape for [product] in the [industry] sector, focusing on [target audience]. Provide insights on market trends, key competitors, and strategic opportunities."' },
    ],
    template: { name: 'Market Research Analyst', sub: 'Analyze market trends, competition, and opportunities.' },
  },
  {
    id: 'a2',
    title: 'How to create your first prompt',
    desc: 'Step-by-step guide to building your first AI prompt.',
    category: 'Getting Started',
    updated: 'May 25, 2024',
    toc: ['1. Open the Builder', '2. Select your AI model', '3. Fill in prompt details', '4. Preview and export'],
    content: [
      { heading: '1. Open the Builder', body: 'Navigate to the Builder from the sidebar. This opens the multi-step prompt creation interface.' },
      { heading: '2. Select your AI model', body: 'Choose from Claude, ChatGPT, Gemini, Deepseek, and other models. Each model has specific strengths — hover over each for a description.' },
      { heading: '3. Fill in prompt details', body: 'Work through each step: define your goal, specify the audience, set the tone, and add context. Each field provides placeholder text to guide you.' },
      { heading: '4. Preview and export', body: 'The live preview updates as you type. When satisfied, click Copy or Export to save your prompt.' },
    ],
    template: null,
  },
  {
    id: 'a3',
    title: 'Using templates effectively',
    desc: 'Maximize your productivity with PromptBuilder templates.',
    category: 'Templates',
    updated: 'May 22, 2024',
    toc: ['1. Browse templates', '2. Filter by category', '3. Customize a template', '4. Save to favorites'],
    content: [
      { heading: '1. Browse templates', body: 'Go to Templates in the sidebar to see all available templates. They are grouped by use case including Marketing, Research, Coding, Writing, and more.' },
      { heading: '2. Filter by category', body: 'Use the category tabs at the top of the Templates page to narrow down your search. You can also use the search bar to find templates by keyword.' },
      { heading: '3. Customize a template', body: 'Click "Use Template" to load it into the Builder. You can then modify any field to tailor the prompt to your specific needs.' },
      { heading: '4. Save to favorites', body: 'Click the heart icon on any template card to save it to your Favorites page for quick access in the future.' },
    ],
    template: { name: 'Content Creator Suite', sub: 'Create engaging content for any platform.' },
  },
  {
    id: 'a4',
    title: 'Managing your account settings',
    desc: 'Learn how to update your profile, password, and preferences.',
    category: 'Account',
    updated: 'May 20, 2024',
    toc: ['1. Profile settings', '2. Change password', '3. Notification preferences', '4. Data management'],
    content: [
      { heading: '1. Profile settings', body: 'Go to Settings from the sidebar. Click "Profile Information" to update your name, email, and avatar photo. Changes are saved immediately.' },
      { heading: '2. Change password', body: 'In Settings, select "Password &amp; Security". Enter your current password, then your new password twice to confirm. Use a strong password with at least 8 characters.' },
      { heading: '3. Notification preferences', body: 'Under "Notification Settings" you can toggle email notifications for product updates, weekly digests, and prompt completions.' },
      { heading: '4. Data management', body: 'Use "Data Management" to export a copy of all your prompts and settings, or to permanently delete your account if needed.' },
    ],
    template: null,
  },
  {
    id: 'a5',
    title: 'Billing and subscription FAQs',
    desc: 'Everything you need to know about plans and billing.',
    category: 'Billing',
    updated: 'May 18, 2024',
    toc: ['1. Available plans', '2. Upgrade to Pro', '3. Cancel subscription', '4. Refund policy'],
    content: [
      { heading: '1. Available plans', body: 'PromptBuilder offers a free tier with access to core features, and a Pro plan that unlocks premium templates, unlimited history, and advanced AI model options.' },
      { heading: '2. Upgrade to Pro', body: 'Click the "Upgrade Now" button in the sidebar or visit your account settings. Payment is processed securely through Stripe and you will be charged monthly or annually.' },
      { heading: '3. Cancel subscription', body: 'You can cancel your Pro subscription at any time from Settings under Billing. Your access continues until the end of your current billing period.' },
      { heading: '4. Refund policy', body: 'We offer a 7-day refund for new Pro subscribers if you are not satisfied. Contact our support team with your request and we will process it within 3 business days.' },
    ],
    template: null,
  },
  {
    id: 'a6',
    title: 'How to create a market research prompt',
    desc: 'Learn how to build effective market research prompts using best practices.',
    category: 'Best Practices',
    updated: 'May 28, 2024',
    toc: ['1. Define your objective', '2. Identify your audience', '3. Choose the right template', '4. Add key details', '5. Review and refine', '6. Example prompt'],
    content: [
      { heading: '1. Define your objective', body: 'Start by clearly defining what you want to learn from your market research. A clear objective leads to focused, actionable prompts.' },
      { heading: '2. Identify your audience', body: 'Be specific about your target audience to get more accurate insights. Include demographics, behaviors, and relevant market segments.' },
      { heading: '3. Choose the right template', body: 'Use our pre-built templates to get started quickly. The Market Research Analyst template is a great starting point.' },
      { heading: '4. Add key details', body: 'Be specific about the market, audience, and insights you are looking for. Include timeframes, geographies, and competitor names if relevant.' },
      { heading: '5. Review and refine', body: 'Review your prompt before using it. Adjust the language and scope until it precisely captures what you need.' },
      { heading: '6. Example prompt', body: '"Analyze the competitive landscape for [product] in the [industry] sector targeting [audience]. Cover: market size, top 3 competitors, key differentiators, pricing strategies, and 3 growth opportunities."' },
    ],
    template: { name: 'Market Research Analyst', sub: 'Analyze market trends, competition, and opportunities.' },
  },
];

const HS_TICKETS = [
  { id: 'PB-45892', subject: 'Unable to generate market research prompt', date: 'May 20, 2024', status: 'open' },
  { id: 'PB-45811', subject: 'Billing and subscription question', date: 'May 18, 2024', status: 'in-progress' },
  { id: 'PB-45721', subject: 'Feature request: Export to Word', date: 'May 13, 2024', status: 'resolved' },
  { id: 'PB-45567', subject: 'Account login issue', date: 'May 12, 2024', status: 'closed' },
];

/* ── State ────────────────────────────────────────────────────── */
const HS = {
  currentView: 'home',
  currentArticleId: null,
  previousView: 'home',
  previousTab: null,
  tickets: [...HS_TICKETS],
  attachments: [],
};

/* ── View navigation ─────────────────────────────────────────── */
function hsNavigate(view, opts = {}) {
  HS.previousView = HS.currentView;

  document.querySelectorAll('.hs-view').forEach(v => v.classList.remove('hs-view--active'));

  const viewMap = {
    home:        'hsViewHome',
    search:      'hsViewSearch',
    article:     'hsViewArticle',
    helpcenter:  'hsViewHelpCenter',
    contact:     'hsViewHelpCenter',
    tickets:     'hsViewHelpCenter',
    submitted:   'hsViewSubmitted',
  };

  const titleMap = {
    home:        { title: 'Help & Support',   sub: 'How can we help you today?' },
    search:      { title: 'Help & Support',   sub: 'Search results' },
    article:     { title: 'Help & Support',   sub: 'Article' },
    helpcenter:  { title: 'Help & Support',   sub: 'Browse help articles and get support.' },
    contact:     { title: 'Help & Support',   sub: 'Contact our support team.' },
    tickets:     { title: 'Help & Support',   sub: 'View your submitted support tickets.' },
    submitted:   { title: 'Help & Support',   sub: 'Ticket submitted successfully.' },
  };

  const elId = viewMap[view] || 'hsViewHome';
  const el = document.getElementById(elId);
  if (el) el.classList.add('hs-view--active');

  const info = titleMap[view] || titleMap.home;
  document.getElementById('hsPageTitle').textContent = info.title;
  document.getElementById('hsPageSubtitle').textContent = info.sub;

  const backBtn = document.getElementById('hsBackBtn');
  backBtn.style.display = (view === 'home') ? 'none' : '';

  HS.currentView = view;

  // Sync tabs if going to helpcenter
  if (['helpcenter', 'contact', 'tickets'].includes(view)) {
    hsSetTab(view === 'helpcenter' ? 'helpcenter' : view);
  }
}

function hsGoHome() {
  hsClearSearch();
  hsNavigate('home');
}

function hsGoBack() {
  if (HS.previousView === 'search') {
    hsNavigate('search');
  } else {
    hsNavigate('helpcenter');
    hsSetTab('helpcenter');
  }
}

/* ── Tab system ──────────────────────────────────────────────── */
function hsSetTab(tab) {
  ['helpcenter', 'contact', 'tickets'].forEach(t => {
    const btn = document.getElementById('hsTab' + t.charAt(0).toUpperCase() + t.slice(1));
    const panel = document.getElementById('hsPanel' + t.charAt(0).toUpperCase() + t.slice(1));
    if (btn) btn.classList.toggle('active', t === tab);
    if (panel) panel.classList.toggle('hs-tab-panel--active', t === tab);
  });
  HS.previousTab = tab;
}

/* ── Articles ────────────────────────────────────────────────── */
function hsRenderArticleList(articles, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  if (!articles.length) {
    container.innerHTML = `<div class="hs-empty"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="32" height="32"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg><p>No articles found</p></div>`;
    return;
  }
  container.innerHTML = articles.map(a => `
    <button class="hs-article-item" onclick="hsOpenArticle('${a.id}')">
      <div class="hs-article-item-ic">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>
        </svg>
      </div>
      <div class="hs-article-item-body">
        <div class="hs-article-item-title">${a.title}</div>
        <div class="hs-article-item-desc">${a.desc}</div>
      </div>
      <svg class="hs-article-item-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="9 18 15 12 9 6"/>
      </svg>
    </button>
  `).join('');
}

function hsOpenArticle(id) {
  const article = HS_ARTICLES.find(a => a.id === id);
  if (!article) return;

  HS.currentArticleId = id;

  // Title, desc, meta
  document.getElementById('hsArticleTitle').textContent = article.title;
  document.getElementById('hsArticleDesc').textContent = article.desc;
  document.getElementById('hsArticleMeta').textContent = `Last updated: ${article.updated}`;

  // TOC
  const toc = document.getElementById('hsArticleToc');
  toc.innerHTML = `
    <div class="hs-toc-title">On this page</div>
    <ul class="hs-toc-list">
      ${article.toc.map((item, i) => `<li><a href="#hs-section-${i}" class="hs-toc-link" onclick="hsScrollToSection(${i}); return false;">${item}</a></li>`).join('')}
    </ul>
  `;

  // Content
  const content = document.getElementById('hsArticleContent');
  content.innerHTML = article.content.map((s, i) => `
    <div class="hs-section" id="hs-section-${i}">
      <h3 class="hs-section-title">${s.heading}</h3>
      <p class="hs-section-body">${s.body}</p>
    </div>
  `).join('');

  // Recommended template
  const recEl = document.getElementById('hsRecTemplate');
  if (article.template) {
    document.getElementById('hsRecTemplateName').textContent = article.template.name;
    document.getElementById('hsRecTemplateSub').textContent = article.template.sub;
    recEl.style.display = '';
  } else {
    recEl.style.display = 'none';
  }

  // Prev/Next
  const idx = HS_ARTICLES.findIndex(a => a.id === id);
  const prevBtn = document.getElementById('hsArticlePrev');
  const nextBtn = document.getElementById('hsArticleNext');
  prevBtn.disabled = idx === 0;
  nextBtn.disabled = idx === HS_ARTICLES.length - 1;
  prevBtn.style.opacity = idx === 0 ? '0.35' : '';
  nextBtn.style.opacity = idx === HS_ARTICLES.length - 1 ? '0.35' : '';

  if (HS.currentView !== 'search') HS.previousView = HS.currentView;
  hsNavigate('article');
}

function hsArticleNav(dir) {
  const idx = HS_ARTICLES.findIndex(a => a.id === HS.currentArticleId);
  const newIdx = dir === 'prev' ? idx - 1 : idx + 1;
  if (newIdx >= 0 && newIdx < HS_ARTICLES.length) {
    hsOpenArticle(HS_ARTICLES[newIdx].id);
  }
}

function hsScrollToSection(i) {
  const el = document.getElementById(`hs-section-${i}`);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function hsUseTemplate() {
  hsToast('Template loaded in Builder!', 'ok');
  setTimeout(() => { window.location.href = 'index.html'; }, 800);
}

/* ── Search ──────────────────────────────────────────────────── */
function hsHandleSearch(val) {
  const clearBtn = document.getElementById('hsSearchClear');
  clearBtn.style.display = val ? '' : 'none';

  if (!val.trim()) {
    if (HS.currentView === 'search') hsNavigate('home');
    return;
  }

  const query = val.toLowerCase();
  const results = HS_ARTICLES.filter(a =>
    a.title.toLowerCase().includes(query) ||
    a.desc.toLowerCase().includes(query) ||
    a.category.toLowerCase().includes(query)
  );

  const title = document.getElementById('hsSearchResultsTitle');
  const sub = document.getElementById('hsSearchResultsSub');
  title.textContent = `Search results`;
  sub.textContent = `${results.length} result${results.length !== 1 ? 's' : ''} found for "${val}"`;

  hsRenderArticleList(results, 'hsSearchResultsList');
  hsNavigate('search');
}

function hsSearchKeydown(e) {
  if (e.key === 'Escape') hsClearSearch();
}

function hsClearSearch() {
  const input = document.getElementById('hsSearchInput');
  input.value = '';
  document.getElementById('hsSearchClear').style.display = 'none';
  hsNavigate('home');
}

/* ── Contact Form ────────────────────────────────────────────── */
function hsHandleFiles(files) {
  Array.from(files).forEach(file => {
    if (file.size > 10 * 1024 * 1024) {
      hsToast(`${file.name} exceeds 10MB limit.`, 'er');
      return;
    }
    HS.attachments.push(file);
  });
  hsRenderFileList();
}

function hsRenderFileList() {
  const container = document.getElementById('hsFileList');
  if (!container) return;
  container.innerHTML = HS.attachments.map((f, i) => `
    <div class="hs-file-item">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="14" height="14">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>
      </svg>
      <span class="hs-file-name">${f.name}</span>
      <span class="hs-file-size">${(f.size / 1024).toFixed(0)} KB</span>
      <button class="hs-file-remove" onclick="hsRemoveFile(${i})">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
          <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>
    </div>
  `).join('');
}

function hsRemoveFile(i) {
  HS.attachments.splice(i, 1);
  hsRenderFileList();
}

function hsSubmitTicket() {
  const category = document.getElementById('hsContactCategory').value;
  const subject = document.getElementById('hsContactSubject').value.trim();
  const desc = document.getElementById('hsContactDesc').value.trim();

  if (!category) { hsToast('Please choose a category.', 'er'); return; }
  if (!subject) { hsToast('Please enter a subject.', 'er'); return; }
  if (!desc) { hsToast('Please enter a description.', 'er'); return; }

  // Generate ticket ID
  const ticketId = '#PB-' + Math.floor(40000 + Math.random() * 9999);
  document.getElementById('hsNewTicketId').textContent = ticketId;

  // Add to tickets list
  HS.tickets.unshift({
    id: ticketId.replace('#', ''),
    subject,
    date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
    status: 'open',
  });

  // Reset form
  document.getElementById('hsContactCategory').value = '';
  document.getElementById('hsContactSubject').value = '';
  document.getElementById('hsContactDesc').value = '';
  HS.attachments = [];
  hsRenderFileList();

  hsNavigate('submitted');
}

/* ── Tickets ─────────────────────────────────────────────────── */
function hsRenderTickets(tickets) {
  const container = document.getElementById('hsTicketList');
  if (!container) return;

  if (!tickets.length) {
    container.innerHTML = `<div class="hs-empty"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="32" height="32"><path d="M15 5H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9l-4-4z"/><polyline points="15 5 15 9 19 9"/></svg><p>No tickets found</p></div>`;
    return;
  }

  const statusLabels = { open: 'Open', 'in-progress': 'In Progress', resolved: 'Resolved', closed: 'Closed' };
  const statusClasses = { open: 'hs-badge-open', 'in-progress': 'hs-badge-progress', resolved: 'hs-badge-resolved', closed: 'hs-badge-closed' };

  container.innerHTML = tickets.map(t => `
    <div class="hs-ticket-item">
      <div class="hs-ticket-info">
        <div class="hs-ticket-id">${t.id}</div>
        <div class="hs-ticket-subject">${t.subject}</div>
        <div class="hs-ticket-date">${t.date}</div>
      </div>
      <span class="hs-badge ${statusClasses[t.status] || ''}">${statusLabels[t.status] || t.status}</span>
    </div>
  `).join('');
}

function hsFilterTickets(query) {
  const q = query.toLowerCase();
  const filtered = HS.tickets.filter(t =>
    t.subject.toLowerCase().includes(q) || t.id.toLowerCase().includes(q)
  );
  hsRenderTickets(filtered);
}

function hsFilterTicketStatus(status) {
  const filtered = status ? HS.tickets.filter(t => t.status === status) : HS.tickets;
  hsRenderTickets(filtered);
}

/* ── Misc helpers ────────────────────────────────────────────── */
function hsOpenVideoTutorials() {
  hsToast('Video tutorials coming soon!', 'in');
}

function hsOpenFeatureRequest() {
  hsNavigate('helpcenter');
  hsSetTab('contact');
  setTimeout(() => {
    const cat = document.getElementById('hsContactCategory');
    if (cat) cat.value = 'feature';
  }, 100);
}

/* ── Toast (mirrors app.js pattern) ─────────────────────────── */
function hsToast(msg, type = 'ok') {
  if (typeof showToast === 'function') {
    showToast(msg, type);
    return;
  }
  const wrap = document.getElementById('toasts');
  if (!wrap) return;
  const icons = {
    ok: `<svg class="t-ic" viewBox="0 0 24 24" fill="none" stroke="var(--ok)" stroke-width="2.5" stroke-linecap="round"><polyline points="20 6 9 17 4 12"/></svg>`,
    er: `<svg class="t-ic" viewBox="0 0 24 24" fill="none" stroke="var(--err)" stroke-width="2.5" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`,
    in: `<svg class="t-ic" viewBox="0 0 24 24" fill="none" stroke="var(--pri)" stroke-width="2.5" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/></svg>`,
  };
  const t = document.createElement('div');
  t.className = `toast ${type}`;
  t.innerHTML = `${icons[type] || icons.in}<div class="t-body"><p class="t-title">${msg}</p></div>
    <svg class="t-x" onclick="this.parentElement.remove()" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`;
  wrap.appendChild(t);
  setTimeout(() => {
    t.style.animation = 'toastOut 240ms ease forwards';
    setTimeout(() => t.remove(), 240);
  }, 3200);
}

/* ── Init ────────────────────────────────────────────────────── */
(function hsInit() {
  // Populate popular articles (first 5)
  hsRenderArticleList(HS_ARTICLES.slice(0, 5), 'hsPopularList');
  // Populate all articles
  hsRenderArticleList(HS_ARTICLES, 'hsAllArticlesList');
  // Populate tickets
  hsRenderTickets(HS.tickets);
  // Restore avatar
  const savedName = localStorage.getItem('stg_name');
  if (savedName) {
    const initials = savedName.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();
    const av = document.getElementById('hsAvatar');
    if (av) av.textContent = initials;
  }
  // Start on home
  hsNavigate('home');
})();
