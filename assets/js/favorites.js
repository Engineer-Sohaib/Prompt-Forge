/* ============================================================
   FAVORITES PAGE — favorites.js
   Depends on: app.js (for MODELS data, toast, theme)
   All globals prefixed FAV_ / fav to avoid collisions
   ============================================================ */

/* ── Sample Data ─────────────────────────────────────────── */
const FAV_ITEMS = [
    {
        id: 1,
        name: "Market Research Analyst",
        model: "claude",
        category: "Market Analysis",
        icon: "ri-line-chart-line",
        iconBg: "var(--s2)",
        description: "Analyze market trends, competitors, and opportunities with comprehensive insights.",
        uses: 12400,
        savedAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000)
    },
    {
        id: 2,
        name: "Blog Post Writer",
        model: "chatgpt",
        category: "Content Creation",
        icon: "ri-file-edit-line",
        iconBg: "var(--s2)",
        description: "Generate SEO-friendly blog posts with engaging content and clear structure.",
        uses: 8700,
        savedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000)
    },
    {
        id: 3,
        name: "Business Plan Generator",
        model: "claude",
        category: "Business Strategy",
        icon: "ri-file-text-fill",
        iconBg: "var(--s2)",
        description: "Create comprehensive business plans with market analysis and financials.",
        uses: 6200,
        savedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000)
    },
    {
        id: 4,
        name: "Social Media Content",
        model: "gemini",
        category: "Social Media",
        icon: "ri-smartphone-line",
        iconBg: "var(--s2)",
        description: "Create engaging social media posts tailored to different platforms.",
        uses: 5100,
        savedAt: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000)
    },
    {
        id: 5,
        name: "Email Campaign",
        model: "chatgpt",
        category: "Marketing",
        icon: "ri-mail-line",
       iconBg: "var(--s2)",
        description: "Write persuasive email campaigns that convert.",
        uses: 4600,
        savedAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000)
    },
    {
        id: 6,
        name: "Product Description",
        model: "claude",
        category: "Content Creation",
        icon: "ri-file-list-3-line",
        iconBg: "var(--s2)",
        description: "Create compelling product descriptions that sell.",
        uses: 3700,
        savedAt: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000)
    },
    {
        id: 7,
        name: "Content Summarizer",
        model: "gemini",
        category: "Content Creation",
        icon: "ri-file-list-2-line",
        iconBg: "var(--s2)",
        description: "Summarize long content into key points and insights.",
        uses: 3400,
        savedAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
    },
    {
        id: 8,
        name: "Resume Reviewer",
        model: "claude",
        category: "HR & Recruiting",
        icon: "ri-file-pdf-line",
        iconBg: "var(--s2)",
        description: "Review and improve resumes for better job prospects.",
        uses: 2900,
        savedAt: new Date(Date.now() - 8 * 24 * 60 * 60 * 1000)
    }
];


/* ── State ───────────────────────────────────────────────── */
const favState = {
    items: [...FAV_ITEMS],
    filtered: [...FAV_ITEMS],
    searchQuery: '',
    catFilter: '',
    modelFilter: '',
    sort: 'recent',
    viewMode: 'grid',       // 'grid' | 'list'
    pendingRemoveId: null,
    pendingUseId: null
};

/* ── Helpers ─────────────────────────────────────────────── */
function favFormatUses(n) {
    if (n >= 1000) return (n / 1000).toFixed(1).replace(/\.0$/, '') + 'K uses';
    return n + ' uses';
}

function favGetModel(modelId) {
    const list = (typeof MODELS !== 'undefined') ? MODELS : [];
    return list.find(m => m.id === modelId) || {
        name: modelId.charAt(0).toUpperCase() + modelId.slice(1),
        svg: ''
    };
}

function favModelBadgeHtml(modelId) {
    const m = favGetModel(modelId);
    return `<span class="fav-model-badge">
        ${m.svg ? `<span class="fav-model-ic">${m.svg}</span>` : ''}
        <span>${m.name}</span>
    </span>`;
}

/* ── Filter / Sort ───────────────────────────────────────── */
function favApplyFilters() {
    let arr = [...favState.items];

    if (favState.searchQuery) {
        const q = favState.searchQuery.toLowerCase();
        arr = arr.filter(i =>
            i.name.toLowerCase().includes(q) ||
            i.category.toLowerCase().includes(q) ||
            i.description.toLowerCase().includes(q)
        );
    }
    if (favState.catFilter) arr = arr.filter(i => i.category === favState.catFilter);
    if (favState.modelFilter) arr = arr.filter(i => i.model === favState.modelFilter);

    if (favState.sort === 'recent') arr.sort((a, b) => b.savedAt - a.savedAt);
    else if (favState.sort === 'oldest') arr.sort((a, b) => a.savedAt - b.savedAt);
    else if (favState.sort === 'name') arr.sort((a, b) => a.name.localeCompare(b.name));
    else if (favState.sort === 'uses') arr.sort((a, b) => b.uses - a.uses);

    favState.filtered = arr;
}

/* ── Render ──────────────────────────────────────────────── */
function favRender() {
    favApplyFilters();

    const grid = document.getElementById('favGrid');
    const empty = document.getElementById('favEmpty');
    const resultBar = document.getElementById('favResultBar');
    const resultCount = document.getElementById('favResultCount');

    // Result bar
    const isFiltering = favState.searchQuery || favState.catFilter || favState.modelFilter;
    if (isFiltering) {
        resultBar.style.display = 'flex';
        resultCount.textContent = `${favState.filtered.length} result${favState.filtered.length !== 1 ? 's' : ''} found`;
    } else {
        resultBar.style.display = 'none';
    }

    if (!favState.filtered.length) {
        grid.innerHTML = '';
        grid.style.display = 'none';
        empty.style.display = 'flex';
        if (isFiltering) {
            document.getElementById('favEmptyTitle').textContent = 'No results found';
            document.getElementById('favEmptyDesc').textContent = 'Try a different search term or filter.';
            document.getElementById('favEmptyBtn').style.display = 'none';
        } else {
            document.getElementById('favEmptyTitle').textContent = 'No favorites yet';
            document.getElementById('favEmptyDesc').textContent = 'Star your favorite templates to access them quickly.';
            document.getElementById('favEmptyBtn').style.display = 'inline-flex';
        }
        return;
    }

    empty.style.display = 'none';
    grid.style.display = '';

    if (favState.viewMode === 'list') {
        favRenderList(grid);
    } else {
        favRenderGrid(grid);
    }
}

/* ── Grid cards (default view matching design) ───────────── */
function favRenderGrid(container) {
    container.className = 'fav-grid';
    container.innerHTML = favState.filtered.map(item => favCardHtml(item)).join('');
    favBindCardEvents(container);
}

function favCardHtml(item) {
    const m = favGetModel(item.model);
    return `
    <div class="fav-card" data-id="${item.id}">
        <div class="fav-card-hd">
            <div class="fav-card-icon" style="background:${item.iconBg || 'var(--bd)'}"><i class="${item.icon}"></i></div>
            <button class="fav-star-btn active" data-id="${item.id}" title="Remove from favorites">
                <svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
            </button>
        </div>
        <div class="fav-card-name">${item.name}</div>
        <div class="fav-card-desc">${item.description}</div>
        <div class="fav-card-ft">
            ${favModelBadgeHtml(item.model)}
        </div>
        <div class="fav-card-actions">
            <span class="fav-uses-count">${favFormatUses(item.uses)}</span>
            <button class="fav-use-btn" data-id="${item.id}">Use Template</button>
        </div>
    </div>`;
}

/* ── List view rows ──────────────────────────────────────── */
function favRenderList(container) {
    container.className = 'fav-list-view';
    container.innerHTML = favState.filtered.map(item => favRowHtml(item)).join('');
    favBindCardEvents(container);
}

function favRowHtml(item) {
    const m = favGetModel(item.model);
    return `
    <div class="fav-row" data-id="${item.id}">
        <div class="fav-row-icon" style="background:${item.iconBg || 'var(--bd)'}"><i class="${item.icon}"></i></div>
        <div class="fav-row-body">
            <div class="fav-row-name">${item.name}</div>
            <div class="fav-row-meta">
                ${favModelBadgeHtml(item.model)}
                <span class="hist-item-dot"></span>
                <span class="fav-row-cat">${item.category}</span>
            </div>
            <div class="fav-row-desc">${item.description}</div>
        </div>
        <div class="fav-row-uses">${favFormatUses(item.uses)}</div>
        <div class="fav-row-actions">
            <button class="fav-use-btn" data-id="${item.id}">Use Template</button>
            <button class="fav-star-btn active" data-id="${item.id}" title="Remove from favorites">
                <svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1.5">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
            </button>
        </div>
    </div>`;
}

/* ── Bind events after render ────────────────────────────── */
function favBindCardEvents(container) {
    // Star button → remove from favorites
    container.querySelectorAll('.fav-star-btn').forEach(btn => {
        btn.addEventListener('click', e => {
            e.stopPropagation();
            favPromptRemove(parseInt(btn.dataset.id));
        });
    });

    // Use Template button → open use modal
    container.querySelectorAll('.fav-use-btn').forEach(btn => {
        btn.addEventListener('click', e => {
            e.stopPropagation();
            favOpenUseModal(parseInt(btn.dataset.id));
        });
    });
}

/* ── Use Template Modal ──────────────────────────────────── */
function favOpenUseModal(id) {
    const item = favState.items.find(i => i.id === id);
    if (!item) return;
    favState.pendingUseId = id;

    const m = favGetModel(item.model);

    // Fill mini card
    document.getElementById('favUseCard').innerHTML = `
        <div class="fav-use-card-inner">
            <div class="fav-card-icon" style="background:${item.iconBg || 'var(--bd)'}; width:32px; height:32px; font-size:16px; border-radius:8px;"><i class="${item.icon}"></i></div>
            <div>
                <div class="fav-use-card-name">${item.name}</div>
                <div class="fav-use-card-desc">${item.description}</div>
            </div>
        </div>`;

    document.getElementById('favOptModelName').textContent = m.name === 'Claude' ? 'Claude 3.5 Sonnet' : m.name;

    // Reset radio
    document.querySelector('input[name="favUseMode"][value="recommended"]').checked = true;

    document.getElementById('favUseModal').classList.add('open');
}

function favCloseUseModal() {
    document.getElementById('favUseModal').classList.remove('open');
    favState.pendingUseId = null;
}

/* ── Remove Modal ────────────────────────────────────────── */
function favPromptRemove(id) {
    const item = favState.items.find(i => i.id === id);
    if (!item) return;
    favState.pendingRemoveId = id;
    document.getElementById('favRemoveName').textContent = `"${item.name}"`;
    document.getElementById('favRemoveModal').classList.add('open');
}

function favConfirmRemove() {
    const id = favState.pendingRemoveId;
    if (!id) return;
    const item = favState.items.find(i => i.id === id);
    favState.items = favState.items.filter(i => i.id !== id);
    favState.pendingRemoveId = null;
    document.getElementById('favRemoveModal').classList.remove('open');
    favRender();
    if (item) favShowToast(`"${item.name}" removed from favorites.`, 'ok');
}

/* ── Toast helper ────────────────────────────────────────── */
function favShowToast(msg, type) {
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
   
    favRender();

    /* Search */
    const searchEl = document.getElementById('favSearch');
    const clearBtn = document.getElementById('favSearchClear');
    searchEl.addEventListener('input', () => {
        favState.searchQuery = searchEl.value.trim();
        clearBtn.style.display = favState.searchQuery ? 'flex' : 'none';
        favRender();
    });
    clearBtn.addEventListener('click', () => {
        searchEl.value = '';
        favState.searchQuery = '';
        clearBtn.style.display = 'none';
        favRender();
    });

    /* Clear from result bar */
    document.getElementById('favClearSearch').addEventListener('click', () => {
        searchEl.value = '';
        favState.searchQuery = '';
        favState.catFilter = '';
        favState.modelFilter = '';
        clearBtn.style.display = 'none';
        document.getElementById('favCatFilter').value = '';
        document.getElementById('favModelFilter').value = '';
        favRender();
    });

    /* Filters */
    document.getElementById('favCatFilter').addEventListener('change', e => {
        favState.catFilter = e.target.value;
        favRender();
    });
    document.getElementById('favModelFilter').addEventListener('change', e => {
        favState.modelFilter = e.target.value;
        favRender();
    });
    document.getElementById('favSort').addEventListener('change', e => {
        favState.sort = e.target.value;
        favRender();
    });

    /* View toggle */
    document.getElementById('favListViewBtn').addEventListener('click', () => {
        favState.viewMode = 'list';
        document.getElementById('favListViewBtn').classList.add('active');
        document.getElementById('favGridViewBtn').classList.remove('active');
        favRender();
    });
    document.getElementById('favGridViewBtn').addEventListener('click', () => {
        favState.viewMode = 'grid';
        document.getElementById('favGridViewBtn').classList.add('active');
        document.getElementById('favListViewBtn').classList.remove('active');
        favRender();
    });

    /* Use modal */
    document.getElementById('favUseClose').addEventListener('click', favCloseUseModal);
    document.getElementById('favUseCancel').addEventListener('click', favCloseUseModal);
    document.getElementById('favUseModal').addEventListener('click', e => {
        if (e.target === document.getElementById('favUseModal')) favCloseUseModal();
    });
    document.getElementById('favUseContinue').addEventListener('click', () => {
        const mode = document.querySelector('input[name="favUseMode"]:checked').value;
        favCloseUseModal();
        favShowToast('Opening template in Builder…', 'ok');
        setTimeout(() => window.location = 'index.html', 800);
    });

    /* Remove modal */
    document.getElementById('favRemoveCancel').addEventListener('click', () => {
        favState.pendingRemoveId = null;
        document.getElementById('favRemoveModal').classList.remove('open');
    });
    document.getElementById('favRemoveConfirm').addEventListener('click', favConfirmRemove);
});
