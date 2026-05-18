/* ============================================================
   SETTINGS PAGE — settings.js
   All logic is namespaced to avoid conflicts with app.js
   ============================================================ */

/* ── State ─────────────────────────────────────────────────── */
const STG = {
  currentView: 'home',
  selectedModel: localStorage.getItem('stg_defaultModel') || 'claude',
};

/* ── View navigation ────────────────────────────────────────── */
const STG_VIEWS = {
  home:          { id: 'stgViewHome',          title: 'Settings',                   sub: 'Manage your preferences and account settings.' },
  profile:       { id: 'stgViewProfile',       title: 'Profile Information',        sub: 'Update your personal information and profile details.' },
  password:      { id: 'stgViewPassword',      title: 'Change Password',            sub: 'Update your password to keep your account secure.' },
  general:       { id: 'stgViewGeneral',       title: 'General Preferences',        sub: 'Customize your language, time zone, and theme.' },
  model:         { id: 'stgViewModel',         title: 'Default Model',              sub: 'Choose the default AI model for prompt generation.' },
  notifications: { id: 'stgViewNotifications', title: 'Notification Settings',      sub: 'Choose how you want to be notified.' },
  data:          { id: 'stgViewData',          title: 'Data Management',            sub: 'Manage your data and download or delete it.' },
  privacy:       { id: 'stgViewPrivacy',       title: 'Privacy Policy',             sub: 'Our privacy policy and terms of service.' },
};

function stgNavigate(key) {
  // Hide all views
  document.querySelectorAll('.stg-view').forEach(v => v.classList.remove('stg-view--active'));

  const cfg = STG_VIEWS[key];
  if (!cfg) return;

  const el = document.getElementById(cfg.id);
  if (el) el.classList.add('stg-view--active');

  // Update header
  document.getElementById('stgPageTitle').textContent = cfg.title;
  document.getElementById('stgPageSubtitle').textContent = cfg.sub;

  // Show/hide back button
  const backBtn = document.getElementById('stgBackBtn');
  backBtn.style.display = key === 'home' ? 'none' : '';

  STG.currentView = key;

  // Per-view init
  if (key === 'model') stgRenderModels();
}

function stgGoHome() {
  stgNavigate('home');
}

/* ── Profile ────────────────────────────────────────────────── */
function stgHandlePhoto(input) {
  const file = input.files[0];
  if (!file) return;
  if (file.size > 2 * 1024 * 1024) {
    stgToast('File too large. Max 2MB.', 'er');
    return;
  }
  const reader = new FileReader();
  reader.onload = e => {
    const preview = document.getElementById('stgProfileAvatarPreview');
    preview.innerHTML = `<img src="${e.target.result}" alt="Avatar">`;
    // Update small header avatar initials to a dot indicator
    document.getElementById('stgAvatar').style.background = 'var(--pri-dk)';
  };
  reader.readAsDataURL(file);
}

function stgSaveProfile() {
  const name = document.getElementById('stgFullName').value.trim();
  const email = document.getElementById('stgEmail').value.trim();
  if (!name) { stgToast('Full name is required.', 'er'); return; }
  if (!email || !email.includes('@')) { stgToast('Enter a valid email address.', 'er'); return; }

  // Update avatar initials
  const initials = name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();
  document.getElementById('stgAvatar').textContent = initials;

  // Persist to localStorage (demo)
  localStorage.setItem('stg_name', name);
  localStorage.setItem('stg_email', email);

  stgToast('Profile updated successfully.', 'ok');
  stgGoHome();
}

/* ── Password ───────────────────────────────────────────────── */
function stgTogglePw(inputId, btn) {
  const inp = document.getElementById(inputId);
  const showing = inp.type === 'text';
  inp.type = showing ? 'password' : 'text';
  btn.style.opacity = showing ? '1' : '0.5';
}

function stgCheckStrength(val) {
  const fill  = document.getElementById('stgStrengthFill');
  const lbl   = document.getElementById('stgStrengthLbl');
  const reqs  = {
    len:     val.length >= 8,
    upper:   /[A-Z]/.test(val),
    num:     /[0-9]/.test(val),
    special: /[^A-Za-z0-9]/.test(val),
  };

  // Update req badges
  stgSetReq('req-len',     reqs.len);
  stgSetReq('req-upper',   reqs.upper);
  stgSetReq('req-num',     reqs.num);
  stgSetReq('req-special', reqs.special);

  const score = Object.values(reqs).filter(Boolean).length;
  const pct = (score / 4) * 100;
  const colors = ['', '#ef4444', '#f59e0b', '#3b82f6', '#10b910'];
  const labels = ['', 'Weak', 'Fair', 'Good', 'Strong'];
  const labelColors = ['', 'var(--err)', 'var(--warn)', '#3b82f6', 'var(--ok)'];

  fill.style.width   = val.length ? pct + '%' : '0%';
  fill.style.background = colors[score] || '';
  lbl.textContent    = val.length ? labels[score] : '';
  lbl.style.color    = labelColors[score] || '';
}

function stgSetReq(id, met) {
  const el = document.getElementById(id);
  if (!el) return;
  el.classList.toggle('met', met);
}

function stgSavePassword() {
  const cur  = document.getElementById('stgCurPw').value;
  const nw   = document.getElementById('stgNewPw').value;
  const conf = document.getElementById('stgConfPw').value;

  if (!cur)  { stgToast('Enter your current password.', 'er'); return; }
  if (!nw)   { stgToast('Enter a new password.', 'er'); return; }
  if (nw !== conf) { stgToast('Passwords do not match.', 'er'); return; }
  if (nw.length < 8) { stgToast('Password must be at least 8 characters.', 'er'); return; }

  // Clear fields
  document.getElementById('stgCurPw').value  = '';
  document.getElementById('stgNewPw').value  = '';
  document.getElementById('stgConfPw').value = '';
  document.getElementById('stgStrengthFill').style.width = '0';
  document.getElementById('stgStrengthLbl').textContent  = '';
  ['req-len','req-upper','req-num','req-special'].forEach(id => stgSetReq(id, false));

  stgToast('Password updated successfully.', 'ok');
  stgGoHome();
}

function stgSavePreferences() {
  localStorage.setItem('stg_language',    document.getElementById('stgLanguage').value);
  localStorage.setItem('stg_timezone',    document.getElementById('stgTimezone').value);
  localStorage.setItem('stg_dateformat',  document.getElementById('stgDateFormat').value);
  localStorage.setItem('stg_promptview',  document.getElementById('stgPromptView').value);
  stgToast('Preferences saved.', 'ok');
  stgGoHome();
}

/* ── Default Model ──────────────────────────────────────────── */
function stgRenderModels() {
  const list = document.getElementById('stgModelList');
  if (!list) return;

  // Use MODELS from app.js (already loaded)
  const models = typeof MODELS !== 'undefined' ? MODELS : [];
  list.innerHTML = models.map(m => `
    <div class="stg-model-opt ${STG.selectedModel === m.id ? 'selected' : ''}"
         onclick="stgSelectModel('${m.id}')">
      <div class="micon ${m.cls}">${m.svg}</div>
      <div class="stg-model-info">
        <div class="stg-model-name">${m.name}</div>
        <div class="stg-model-desc">${m.desc}</div>
      </div>
      <div class="stg-model-check">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="20 6 9 17 4 12"/>
        </svg>
      </div>
    </div>
  `).join('');
}

function stgSelectModel(id) {
  STG.selectedModel = id;
  document.querySelectorAll('.stg-model-opt').forEach(el => el.classList.remove('selected'));
  document.querySelectorAll('.stg-model-opt').forEach(el => {
    if (el.getAttribute('onclick') === `stgSelectModel('${id}')`) {
      el.classList.add('selected');
    }
  });
}

function stgSaveModel() {
  localStorage.setItem('stg_defaultModel', STG.selectedModel);
  stgToast('Default model updated.', 'ok');
  stgGoHome();
}

/* ── Notifications ──────────────────────────────────────────── */
function stgSaveNotifications() {
  const prefs = {
    prodUpdates: document.getElementById('notifProdUpdates').checked,
    features:    document.getElementById('notifFeatures').checked,
    weekly:      document.getElementById('notifWeekly').checked,
    marketing:   document.getElementById('notifMarketing').checked,
    promptDone:  document.getElementById('notifPromptDone').checked,
    tplRec:      document.getElementById('notifTplRec').checked,
    mentions:    document.getElementById('notifMentions').checked,
    freq:        document.querySelector('input[name="notifFreq"]:checked')?.value || 'instant',
  };
  localStorage.setItem('stg_notifications', JSON.stringify(prefs));
  stgToast('Notification settings saved.', 'ok');
  stgGoHome();
}

/* ── Data Management ────────────────────────────────────────── */
function stgExportData() {
  const data = {
    exportedAt:    new Date().toISOString(),
    profile:       { name: localStorage.getItem('stg_name') || 'Emma Johnson', email: localStorage.getItem('stg_email') || 'emma.johnson@example.com' },
    defaultModel:  localStorage.getItem('stg_defaultModel') || 'claude',
    preferences:   {
      language:   localStorage.getItem('stg_language') || 'en',
      timezone:   localStorage.getItem('stg_timezone') || 'UTC+5:30',
      dateFormat: localStorage.getItem('stg_dateformat') || 'dd-mmm-yyyy',
      promptView: localStorage.getItem('stg_promptview') || 'cards',
    },
    notifications: JSON.parse(localStorage.getItem('stg_notifications') || '{}'),
  };

  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href     = url;
  a.download = 'promptbuilder-data.json';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);

  stgToast('Data exported successfully.', 'ok');
}

/* ── Delete Account Modal ───────────────────────────────────── */
function stgOpenDeleteModal() {
  document.getElementById('stgDeleteConfirm').value = '';
  document.getElementById('stgDeleteBtn').disabled = true;
  document.getElementById('stgDeleteModal').classList.add('open');
}
function stgCloseDeleteModal() {
  document.getElementById('stgDeleteModal').classList.remove('open');
}
function stgCheckDeleteConfirm() {
  const val = document.getElementById('stgDeleteConfirm').value;
  document.getElementById('stgDeleteBtn').disabled = val !== 'DELETE';
}
function stgConfirmDelete() {
  stgCloseDeleteModal();
  localStorage.clear();
  stgToast('Account deleted. Redirecting…', 'ok');
  setTimeout(() => { window.location.href = 'index.html'; }, 2000);
}

/* ── Toast helper (mirrors app.js showToast) ─────────────────── */
function stgToast(msg, type = 'ok') {
  // Use app.js's showToast if available
  if (typeof showToast === 'function') {
    showToast(msg, type);
    return;
  }
  // Fallback
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

/* ── Restore saved preferences on load ──────────────────────── */
(function stgInit() {
  // Restore avatar name
  const savedName = localStorage.getItem('stg_name');
  if (savedName) {
    const initials = savedName.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();
    const av = document.getElementById('stgAvatar');
    if (av) av.textContent = initials;
    const nameEl = document.getElementById('stgFullName');
    if (nameEl) nameEl.value = savedName;
  }
  const savedEmail = localStorage.getItem('stg_email');
  if (savedEmail) {
    const emailEl = document.getElementById('stgEmail');
    if (emailEl) emailEl.value = savedEmail;
  }

  // Restore language
  const lang = localStorage.getItem('stg_language');
  if (lang) { const el = document.getElementById('stgLanguage'); if (el) el.value = lang; }

  // Restore timezone
  const tz = localStorage.getItem('stg_timezone');
  if (tz) { const el = document.getElementById('stgTimezone'); if (el) el.value = tz; }

  // Restore theme radio
  const theme = localStorage.getItem('stg_theme') || 'light';
  const themeRadio = document.querySelector(`input[name="stgTheme"][value="${theme}"]`);
  if (themeRadio) themeRadio.checked = true;

  // Restore notifications
  const notifRaw = localStorage.getItem('stg_notifications');
  if (notifRaw) {
    try {
      const n = JSON.parse(notifRaw);
      const map = {
        prodUpdates: 'notifProdUpdates', features: 'notifFeatures',
        weekly: 'notifWeekly', marketing: 'notifMarketing',
        promptDone: 'notifPromptDone', tplRec: 'notifTplRec', mentions: 'notifMentions',
      };
      Object.entries(map).forEach(([k, id]) => {
        const el = document.getElementById(id);
        if (el && n[k] !== undefined) el.checked = n[k];
      });
      if (n.freq) {
        const freqEl = document.querySelector(`input[name="notifFreq"][value="${n.freq}"]`);
        if (freqEl) freqEl.checked = true;
      }
    } catch (_) {}
  }

  // Start on home view
  stgNavigate('home');
})();
