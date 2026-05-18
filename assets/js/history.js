/* ============================================================
   HISTORY PAGE — history.js
   Depends on: app.js (for MODELS data, toast, theme)
   ============================================================ */

/* ── Sample Data ─────────────────────────────────────────── */
const HIST_ITEMS = [
    {
        id: 1,
        name: "Market Research Analyst",
        model: "claude",
        category: "Market Analysis",
        icon: "ri-seo-line",
        description: "Analyze market trends, competitors, and opportunities with comprehensive insights.",
        usedAt: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
        variables: ["Market", "Industry", "Time Period"]
    },
    {
        id: 2,
        name: "Blog Post Writer",
        model: "chatgpt",
        category: "Content Creation",
        icon: "ri-file-edit-line",
        description: "Create engaging, SEO-optimized blog posts tailored to your target audience and brand voice.",
        usedAt: new Date(Date.now() - 4 * 60 * 60 * 1000),
        variables: ["Topic", "Tone", "Word Count"]
    },
    {
        id: 3,
        name: "Business Plan Generator",
        model: "claude",
        category: "Business Strategy",
        icon: "ri-file-text-fill",
        description: "Generate comprehensive business plans covering executive summary, market analysis, financial projections, and strategy.",
        usedAt: new Date(Date.now() - 6 * 60 * 60 * 1000),
        variables: ["Industry", "Budget", "Timeline"]
    },
    {
        id: 4,
        name: "Email Campaign",
        model: "chatgpt",
        category: "Marketing",
        icon: "ri-mail-line",
        description: "Design compelling email campaign sequences optimized for open rates, clicks, and conversions.",
        usedAt: new Date(Date.now() - 24 * 60 * 60 * 1000 - 1000),
        variables: ["Product", "Audience", "Goal"]
    },
    {
        id: 5,
        name: "Social Media Content",
        model: "gemini",
        category: "Social Media",
        icon: "ri-smartphone-line",
        description: "Generate platform-specific social media posts with captions, hashtags, and engagement hooks.",
        usedAt: new Date(Date.now() - 30 * 60 * 60 * 1000),
        variables: ["Platform", "Brand", "Campaign"]
    },
    {
        id: 6,
        name: "Competitor Analysis",
        model: "claude",
        category: "Competitive Research",
        icon: "ri-search-2-line",
        description: "Deep-dive competitive intelligence report covering positioning, pricing, features, and strategic opportunities.",
        usedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
        variables: ["Company", "Competitor A", "Competitor B"]
    },
    {
        id: 7,
        name: "Sales Pitch Deck",
        model: "chatgpt",
        category: "Business Strategy",
        icon: "ri-briefcase-4-line",
        description: "Create a persuasive sales presentation structure with key value propositions and objection handling.",
        usedAt: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000),
        variables: ["Product", "Target Client", "Pain Point"]
    },
    {
        id: 8,
        name: "Customer Persona Builder",
        model: "mistral",
        category: "Marketing",
        icon: "ri-group-line",
        description: "Build detailed customer personas with demographics, psychographics, goals, pain points, and buying triggers.",
        usedAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
        variables: ["Segment", "Region", "Age Range"]
    },
    {
        id: 9,
        name: "Data Analysis Report",
        model: "claude",
        category: "Data Analysis",
        icon: "ri-line-chart-line",
        description: "Structure and interpret complex data sets into clear, actionable business intelligence reports.",
        usedAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
        variables: ["Dataset", "Metric", "Time Period"]
    },
    {
        id: 10,
        name: "Product Launch Strategy",
        model: "gemini",
        category: "Business Strategy",
        icon: "ri-rocket-line",
        description: "Plan a comprehensive go-to-market strategy for your product launch including timeline, channels, and KPIs.",
        usedAt: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000),
        variables: ["Product", "Market", "Launch Date"]
    }
];

/* ── State ───────────────────────────────────────────────── */
let histState = {
    items: [...HIST_ITEMS],
    filtered: [...HIST_ITEMS],
    searchQuery: '',
    catFilter: '',
    modelFilter: '',
    sort: 'recent',
    viewMode: 'list', // 'list' | 'grid'
    activeId: null,
    pendingRemoveId: null
};

/* ── Helpers ─────────────────────────────────────────────── */
function histFormatTime(date) {
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 60) return diffMins <= 1 ? 'Just now' : `${diffMins} minutes ago`;
    if (diffHours < 24) return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
    if (diffDays === 1) return 'Yesterday';
    return `${diffDays} days ago`;
}

function histFormatFull(date) {
    return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) +
        ' at ' + date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
}

function histGetModelData(modelId) {
    return (typeof MODELS !== 'undefined' ? MODELS : []).find(m => m.id === modelId) || {
        name: modelId.charAt(0).toUpperCase() + modelId.slice(1),
        svg: ''
    };
}

function histGroupByDate(items) {
    const groups = {};
    items.forEach(item => {
        const now = new Date();
        const diff = now - item.usedAt;
        const days = Math.floor(diff / 86400000);
        let label;
        if (days === 0) label = 'Today';
        else if (days === 1) label = 'Yesterday';
        else if (days <= 7) label = 'This Week';
        else label = 'Earlier';

        if (!groups[label]) groups[label] = [];
        groups[label].push(item);
    });
    return groups;
}

function histModelIconHtml(modelId) {
    const m = histGetModelData(modelId);
    return m.svg ? `<div class="hist-item-model-ic">${m.svg}</div>` : '';
}

/* ── Filter / Sort ───────────────────────────────────────── */
function histApplyFilters() {
    let arr = [...histState.items];

    if (histState.searchQuery) {
        const q = histState.searchQuery.toLowerCase();
        arr = arr.filter(i =>
            i.name.toLowerCase().includes(q) ||
            i.category.toLowerCase().includes(q) ||
            i.description.toLowerCase().includes(q)
        );
    }
    if (histState.catFilter) arr = arr.filter(i => i.category === histState.catFilter);
    if (histState.modelFilter) arr = arr.filter(i => i.model === histState.modelFilter);

    if (histState.sort === 'recent') arr.sort((a, b) => b.usedAt - a.usedAt);
    else if (histState.sort === 'oldest') arr.sort((a, b) => a.usedAt - b.usedAt);
    else if (histState.sort === 'name') arr.sort((a, b) => a.name.localeCompare(b.name));

    histState.filtered = arr;
}

/* ── Render ──────────────────────────────────────────────── */
function histRender() {
    histApplyFilters();

    const list = document.getElementById('histList');
    const empty = document.getElementById('histEmpty');
    const resultBar = document.getElementById('histResultBar');
    const resultCount = document.getElementById('histResultCount');

    // Search result bar
    const isSearching = histState.searchQuery || histState.catFilter || histState.modelFilter;
    if (isSearching && histState.filtered.length !== histState.items.length) {
        resultBar.style.display = 'flex';
        resultCount.textContent = `${histState.filtered.length} result${histState.filtered.length !== 1 ? 's' : ''} found`;
    } else {
        resultBar.style.display = 'none';
    }

    if (!histState.filtered.length) {
        list.innerHTML = '';
        empty.style.display = 'flex';
        if (isSearching) {
            document.getElementById('histEmptyTitle').textContent = 'No results found';
            document.getElementById('histEmptyDesc').textContent = 'Try a different search term or filter.';
            document.getElementById('histEmptyBtn').style.display = 'none';
        } else {
            document.getElementById('histEmptyTitle').textContent = 'No history yet';
            document.getElementById('histEmptyDesc').textContent = 'Start using templates to see them here.';
            document.getElementById('histEmptyBtn').style.display = 'inline-flex';
        }
        return;
    }

    empty.style.display = 'none';

    if (histState.viewMode === 'grid') {
        histRenderGrid(list);
    } else {
        histRenderList(list);
    }
}

function histRenderList(list) {
    list.className = 'hist-list';
    const groups = histGroupByDate(histState.filtered);
    const order = ['Today', 'Yesterday', 'This Week', 'Earlier'];

    let html = '';
    order.forEach(label => {
        if (!groups[label]) return;
        html += `<div class="hist-group-label">${label}</div>`;
        groups[label].forEach(item => {
            html += histItemHtml(item);
        });
    });
    list.innerHTML = html;
    histBindItemEvents(list);
}

function histRenderGrid(list) {
    list.className = 'hist-list grid-view';
    const groups = histGroupByDate(histState.filtered);
    const order = ['Today', 'Yesterday', 'This Week', 'Earlier'];

    let html = '';
    order.forEach(label => {
        if (!groups[label]) return;
        html += `<div class="hist-group-label">${label}</div>`;
        groups[label].forEach(item => {
            html += histItemHtml(item);
        });
    });
    list.innerHTML = html;
    histBindItemEvents(list);
}

function histItemHtml(item) {
    const modelData = histGetModelData(item.model);
    const active = histState.activeId === item.id ? 'active' : '';
    return `
    <div class="hist-item ${active}" data-id="${item.id}">
      <div class="hist-item-icon"><i class="${item.icon}"></i></div>
      <div class="hist-item-body">
        <div class="hist-item-name">${item.name}</div>
        <div class="hist-item-meta">
          <div class="hist-item-model">
            ${modelData.svg ? `<div class="hist-item-model-ic">${modelData.svg}</div>` : ''}
            <span>${modelData.name}</span>
          </div>
          <div class="hist-item-dot"></div>
          <span class="hist-item-cat">${item.category}</span>
        </div>
      </div>
      <div class="hist-item-time">${histFormatTime(item.usedAt)}</div>
      <div class="hist-item-actions">
        <button class="hist-use-btn" data-id="${item.id}" title="Use Template">Use Template</button>
        <div style="position:relative">
          <button class="hist-more-btn" data-id="${item.id}" title="More options">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="5" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="12" cy="19" r="1"/>
            </svg>
          </button>
          <div class="hist-item-dd dd-menu" id="histDd-${item.id}">
            <div class="dd-item hist-view-detail-btn" data-id="${item.id}">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              View Details
            </div>
            <div class="dd-item hist-dd-use" data-id="${item.id}">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
              Use Template
            </div>
            <div class="dd-item danger hist-dd-remove" data-id="${item.id}">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg>
              Remove from History
            </div>
          </div>
        </div>
      </div>
    </div>`;
}

function histBindItemEvents(list) {
    // Row click → open detail
    list.querySelectorAll('.hist-item').forEach(el => {
        el.addEventListener('click', e => {
            if (e.target.closest('.hist-use-btn') || e.target.closest('.hist-more-btn') || e.target.closest('.hist-item-dd')) return;
            histOpenDetail(parseInt(el.dataset.id));
        });
    });

    // Use template button
    list.querySelectorAll('.hist-use-btn').forEach(btn => {
        btn.addEventListener('click', e => {
            e.stopPropagation();
            histUseTemplate(parseInt(btn.dataset.id));
        });
    });

    // More (⋮) button
    list.querySelectorAll('.hist-more-btn').forEach(btn => {
        btn.addEventListener('click', e => {
            e.stopPropagation();
            const dd = document.getElementById(`histDd-${btn.dataset.id}`);
            const isOpen = dd.classList.contains('open');
            // Close all
            document.querySelectorAll('.hist-item-dd.open').forEach(d => d.classList.remove('open'));
            if (!isOpen) dd.classList.add('open');
        });
    });

    // Dropdown: View Details
    list.querySelectorAll('.hist-view-detail-btn').forEach(el => {
        el.addEventListener('click', e => {
            e.stopPropagation();
            document.querySelectorAll('.hist-item-dd.open').forEach(d => d.classList.remove('open'));
            histOpenDetail(parseInt(el.dataset.id));
        });
    });

    // Dropdown: Use template
    list.querySelectorAll('.hist-dd-use').forEach(el => {
        el.addEventListener('click', e => {
            e.stopPropagation();
            document.querySelectorAll('.hist-item-dd.open').forEach(d => d.classList.remove('open'));
            histUseTemplate(parseInt(el.dataset.id));
        });
    });

    // Dropdown: Remove
    list.querySelectorAll('.hist-dd-remove').forEach(el => {
        el.addEventListener('click', e => {
            e.stopPropagation();
            document.querySelectorAll('.hist-item-dd.open').forEach(d => d.classList.remove('open'));
            histPromptRemove(parseInt(el.dataset.id));
        });
    });
}

/* ── Detail Panel ────────────────────────────────────────── */
function histOpenDetail(id) {
    const item = histState.items.find(i => i.id === id);
    if (!item) return;

    histState.activeId = id;
    histRender();

    const modelData = histGetModelData(item.model);
    document.querySelector('#histDpIcon i').className = item.icon;
    document.getElementById('histDpName').textContent = item.name;
    document.getElementById('histDpModel').textContent = modelData.name;
    document.getElementById('histDpCat').textContent = item.category;
    document.getElementById('histDpDesc').textContent = item.description;

    document.getElementById('histDpUsed').innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="12 8 12 12 14 14"/><circle cx="12" cy="12" r="10"/>
      </svg>
      ${histFormatFull(item.usedAt)}`;

    document.getElementById('histDpModelRow').innerHTML = `
      ${modelData.svg ? `<div class="hist-dp-model-ic">${modelData.svg}</div>` : ''}
      <span>${modelData.name}</span>`;

    document.getElementById('histDpVars').innerHTML = item.variables
        .map(v => `<span class="hist-var-chip">${v}</span>`).join('');

    // Footer buttons
    document.getElementById('histDpDelete').dataset.id = id;
    document.getElementById('histDpUse').dataset.id = id;

    document.getElementById('histDetailOv').classList.add('open');
}

function histCloseDetail() {
    document.getElementById('histDetailOv').classList.remove('open');
    histState.activeId = null;
    histRender();
}

/* ── Use Template ────────────────────────────────────────── */
function histUseTemplate(id) {
    const item = histState.items.find(i => i.id === id);
    if (!item) return;
    // In a real app: window.location = `index.html?template=${id}`;
    histShowToast(`Opening "${item.name}" in Builder…`, 'ok');
    setTimeout(() => window.location = 'index.html', 900);
}

/* ── Remove from history ─────────────────────────────────── */
function histPromptRemove(id) {
    const item = histState.items.find(i => i.id === id);
    if (!item) return;
    histState.pendingRemoveId = id;
    document.getElementById('histRemoveName').textContent = `"${item.name}"`;
    document.getElementById('histRemoveModal').classList.add('open');
}

function histConfirmRemove() {
    const id = histState.pendingRemoveId;
    if (!id) return;
    const item = histState.items.find(i => i.id === id);
    histState.items = histState.items.filter(i => i.id !== id);
    histState.pendingRemoveId = null;
    document.getElementById('histRemoveModal').classList.remove('open');
    if (histState.activeId === id) histCloseDetail();
    histRender();
    if (item) histShowToast(`"${item.name}" removed from history.`, 'ok');
}

/* ── Toast (delegates to app.js if available, else fallback) */
function histShowToast(msg, type) {
    if (typeof showToast === 'function') { showToast(msg, type); return; }
    const wrap = document.getElementById('toasts');
    if (!wrap) return;
    const t = document.createElement('div');
    t.className = `toast ${type || ''}`;
    t.textContent = msg;
    wrap.appendChild(t);
    setTimeout(() => t.remove(), 3000);
}


/* ── Init ────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
    

    // Initial render
    histRender();

    // Search
    const searchEl = document.getElementById('histSearch');
    const clearBtn = document.getElementById('histSearchClear');
    searchEl.addEventListener('input', () => {
        histState.searchQuery = searchEl.value.trim();
        clearBtn.style.display = histState.searchQuery ? 'flex' : 'none';
        histRender();
    });
    clearBtn.addEventListener('click', () => {
        searchEl.value = '';
        histState.searchQuery = '';
        clearBtn.style.display = 'none';
        histRender();
    });

    // Clear search from result bar
    document.getElementById('histClearSearch').addEventListener('click', () => {
        searchEl.value = '';
        histState.searchQuery = '';
        histState.catFilter = '';
        histState.modelFilter = '';
        clearBtn.style.display = 'none';
        document.getElementById('histCatFilter').value = '';
        document.getElementById('histModelFilter').value = '';
        histRender();
    });

    // Filters
    document.getElementById('histCatFilter').addEventListener('change', e => {
        histState.catFilter = e.target.value;
        histRender();
    });
    document.getElementById('histModelFilter').addEventListener('change', e => {
        histState.modelFilter = e.target.value;
        histRender();
    });
    document.getElementById('histSort').addEventListener('change', e => {
        histState.sort = e.target.value;
        histRender();
    });

    // View toggle
    document.getElementById('histListViewBtn').addEventListener('click', () => {
        histState.viewMode = 'list';
        document.getElementById('histListViewBtn').classList.add('active');
        document.getElementById('histGridViewBtn').classList.remove('active');
        histRender();
    });
    document.getElementById('histGridViewBtn').addEventListener('click', () => {
        histState.viewMode = 'grid';
        document.getElementById('histGridViewBtn').classList.add('active');
        document.getElementById('histListViewBtn').classList.remove('active');
        histRender();
    });

    // Close detail overlay
    document.getElementById('histDpClose').addEventListener('click', histCloseDetail);
    document.getElementById('histDetailOv').addEventListener('click', e => {
        if (e.target === document.getElementById('histDetailOv')) histCloseDetail();
    });

    // Detail: use template
    document.getElementById('histDpUse').addEventListener('click', e => {
        histUseTemplate(parseInt(e.currentTarget.dataset.id));
    });

    // Detail: delete
    document.getElementById('histDpDelete').addEventListener('click', e => {
        histPromptRemove(parseInt(e.currentTarget.dataset.id));
    });

    // Remove modal
    document.getElementById('histRemoveCancel').addEventListener('click', () => {
        histState.pendingRemoveId = null;
        document.getElementById('histRemoveModal').classList.remove('open');
    });
    document.getElementById('histRemoveConfirm').addEventListener('click', histConfirmRemove);

    // Close dropdowns on outside click
    document.addEventListener('click', () => {
        document.querySelectorAll('.hist-item-dd.open').forEach(d => d.classList.remove('open'));
    });
});
