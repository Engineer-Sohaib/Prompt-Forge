/* ============================================================
   UPGRADE NOW PAGE  — upgrade-now.js
   Depends on: app.js  (dark / applyTheme, toast)
   All globals prefixed upn_ to avoid collisions.
   ============================================================ */

/* ── Pricing data ─────────────────────────────────────────── */
const UPN_PRICES = {
  pro:  { monthly: { display: '$12', billed: '' },
          yearly:  { display: '$9.6', billed: 'Billed annually $115.20' } },
  team: { monthly: { display: '$29', billed: '' },
          yearly:  { display: '$23.2', billed: 'Billed annually $278.40' } }
};

/* ── State ────────────────────────────────────────────────── */
let upn_yearly      = true;   // default: yearly toggle ON
let upn_selectedPlan = 'pro'; // which plan was clicked

/* ── DOM helpers ──────────────────────────────────────────── */
function upn_$(id) { return document.getElementById(id); }

/* ============================================================
   BILLING TOGGLE  (page level)
   ============================================================ */
function upn_updatePrices() {
  const period = upn_yearly ? 'yearly' : 'monthly';

  /* Page cards */
  const pro  = UPN_PRICES.pro[period];
  const team = UPN_PRICES.team[period];
  upn_$('upnProPrice').textContent    = pro.display;
  upn_$('upnProBilled').textContent   = pro.billed  || '\u00a0';
  upn_$('upnTeamPrice').textContent   = team.display;
  upn_$('upnTeamBilled').textContent  = team.billed || '\u00a0';

  /* Modal cards */
  upn_$('upnMProPrice').textContent   = pro.display;
  upn_$('upnMProBilled').textContent  = pro.billed  || '\u00a0';
  upn_$('upnMTeamPrice').textContent  = team.display;
  upn_$('upnMTeamBilled').textContent = team.billed || '\u00a0';

  /* Toggle buttons aria-pressed */
  const pressed = upn_yearly ? 'true' : 'false';
  upn_$('upnBillingToggle').setAttribute('aria-pressed', pressed);
  upn_$('upnModalBillingToggle').setAttribute('aria-pressed', pressed);
}

function upn_toggleBilling() {
  upn_yearly = !upn_yearly;
  upn_updatePrices();
}

upn_$('upnBillingToggle').addEventListener('click', upn_toggleBilling);
upn_$('upnModalBillingToggle').addEventListener('click', upn_toggleBilling);

/* ── Initialise prices on load ─────────────────────────────── */
upn_updatePrices();

/* ============================================================
   MODAL  — open / close / navigation
   ============================================================ */
function upn_showModal() {
  upn_$('upnModalOverlay').classList.add('upn-open');
  upn_showStep('upnStep2');
  document.body.style.overflow = 'hidden';
}

function upn_closeModal() {
  upn_$('upnModalOverlay').classList.remove('upn-open');
  document.body.style.overflow = '';
}

function upn_showStep(stepId) {
  ['upnStep2','upnStep4','upnStep5','upnStep6'].forEach(id => {
    const el = upn_$(id);
    if (el) el.style.display = id === stepId ? '' : 'none';
  });
}

/* Close on overlay click */
upn_$('upnModalOverlay').addEventListener('click', e => {
  if (e.target === upn_$('upnModalOverlay')) upn_closeModal();
});

/* Close button (step 2) */
upn_$('upnModalClose').addEventListener('click', upn_closeModal);

/* Back button (step 4 → step 2) */
upn_$('upnBillingBack').addEventListener('click', () => upn_showStep('upnStep2'));

/* Success close */
upn_$('upnSuccessClose').addEventListener('click', upn_closeModal);

/* ── Keyboard: Escape ──────────────────────────────────────── */
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') upn_closeModal();
});

/* ============================================================
   PLAN SELECTION  (page cards → open modal)
   ============================================================ */
function upn_selectPlan(plan) {
  upn_selectedPlan = plan;
  upn_showModal();
}

/* ============================================================
   BILLING STEP  (modal → step 4)
   ============================================================ */
function upn_goToBilling(plan) {
  upn_selectedPlan = plan;
  const period     = upn_yearly ? 'yearly' : 'monthly';
  const isYearly   = upn_yearly;
  const planLabel  = plan === 'pro' ? 'Pro Plan' : 'Team Plan';
  const periodLabel = isYearly ? '(Yearly)' : '(Monthly)';

  let totalAmt, subLine, payAmt;
  if (plan === 'pro') {
    totalAmt = isYearly ? '$115.20 / year' : '$12.00 / month';
    subLine  = isYearly ? 'Billed annually • save 20%' : 'Billed monthly';
    payAmt   = isYearly ? '$115.20' : '$12.00';
  } else {
    totalAmt = isYearly ? '$278.40 / year' : '$29.00 / month';
    subLine  = isYearly ? 'Billed annually • save 20%' : 'Billed monthly';
    payAmt   = isYearly ? '$278.40' : '$29.00';
  }

  upn_$('upnBillingPlanName').textContent  = `${planLabel} ${periodLabel}`;
  upn_$('upnBillingPlanSub').textContent   = subLine;
  upn_$('upnBillingPlanPrice').textContent = totalAmt;
  upn_$('upnPayBtnAmt').textContent        = payAmt;

  upn_showStep('upnStep4');
}

/* ============================================================
   PAYMENT METHOD  toggle
   ============================================================ */
document.querySelectorAll('.upn-pay-opt').forEach(label => {
  label.addEventListener('click', () => {
    document.querySelectorAll('.upn-pay-opt').forEach(l => l.classList.remove('upn-pay-opt--active'));
    label.classList.add('upn-pay-opt--active');
    const val = label.querySelector('input').value;
    upn_$('upnCardFields').style.display = val === 'card' ? '' : 'none';
  });
});

/* ── Card number formatting ───────────────────────────────── */
upn_$('upnCardNum').addEventListener('input', function() {
  let v = this.value.replace(/\D/g, '').slice(0, 16);
  this.value = v.replace(/(.{4})/g, '$1 ').trim();
});

/* ── Expiry formatting ────────────────────────────────────── */
upn_$('upnCardExp').addEventListener('input', function() {
  let v = this.value.replace(/\D/g, '').slice(0, 4);
  if (v.length > 2) v = v.slice(0, 2) + ' / ' + v.slice(2);
  this.value = v;
});

/* ============================================================
   PAY BUTTON  → processing → success
   ============================================================ */
upn_$('upnPayBtn').addEventListener('click', () => {
  /* Basic validation */
  const method = document.querySelector('.upn-pay-opt--active input')?.value;
  if (method === 'card') {
    const num  = upn_$('upnCardNum').value.replace(/\s/g,'');
    const exp  = upn_$('upnCardExp').value;
    const cvc  = upn_$('upnCardCvc').value;
    const name = upn_$('upnCardName').value.trim();
    if (num.length < 16 || !exp.includes('/') || cvc.length < 3 || !name) {
      upn_shake(upn_$('upnPayBtn'));
      return;
    }
  }

  /* Go to processing */
  upn_showStep('upnStep5');
  upn_animateProgress();
});

function upn_animateProgress() {
  const fill = upn_$('upnProgressFill');
  let pct = 0;
  const iv = setInterval(() => {
    pct += Math.random() * 18 + 5;
    if (pct >= 100) {
      pct = 100;
      clearInterval(iv);
      setTimeout(() => {
        upn_showStep('upnStep6');
        upn_launchConfetti();
      }, 400);
    }
    fill.style.width = pct + '%';
  }, 220);
}

/* ── Shake animation for invalid form ─────────────────────── */
function upn_shake(el) {
  el.style.animation = 'none';
  el.offsetHeight; // reflow
  el.style.animation = 'upn-shake 0.35s ease';
  el.addEventListener('animationend', () => el.style.animation = '', { once: true });
}

/* Inject shake keyframes once */
(function() {
  if (document.getElementById('upnShakeStyle')) return;
  const s = document.createElement('style');
  s.id = 'upnShakeStyle';
  s.textContent = `@keyframes upn-shake {
    0%,100%{transform:translateX(0)}
    20%{transform:translateX(-6px)}
    40%{transform:translateX(6px)}
    60%{transform:translateX(-4px)}
    80%{transform:translateX(4px)}
  }`;
  document.head.appendChild(s);
})();

/* ============================================================
   CONFETTI
   ============================================================ */
function upn_launchConfetti() {
  const container = upn_$('upnConfetti');
  container.innerHTML = '';
  const colors = ['#5bd45b','#40b850','#a78bfa','#60a5fa','#f59e0b','#f472b6','#34d399'];
  for (let i = 0; i < 38; i++) {
    const dot = document.createElement('div');
    dot.className = 'upn-confetti-dot';
    const size = Math.random() * 8 + 5;
    dot.style.cssText = `
      width:${size}px; height:${size}px;
      background:${colors[Math.floor(Math.random()*colors.length)]};
      left:${Math.random()*100}%;
      top:${Math.random()*30}%;
      animation-delay:${Math.random()*0.5}s;
      animation-duration:${1.2 + Math.random()*0.8}s;
    `;
    container.appendChild(dot);
  }
}
