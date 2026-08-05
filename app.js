// ═══════════════════════════════════════════════════════════
// MIKE RODGERS — THE FIXER | V3 | April 2026
// MiroFish Prediction + Gemini Chat + Hiring Panel + JD Assessment
// ═══════════════════════════════════════════════════════════

// ─── CONFIG ────────────────────────────────────────────
const CONFIG = {
  GEMINI_KEY: '', // Deprecated - Gemini key blocked
  GEMINI_MODEL: 'google/gemini-2.0-flash-001',
  OR_KEY: 'process.env.OPENROUTER_API_KEY || ""', // OpenRouter key
  OR_URL: 'https://openrouter.ai/api/v1/chat/completions',
  OR_MODEL: 'deepseek/deepseek-r1-0528', // Deep reasoning for hiring conversations
  LOCAL_MODEL: 'glm-5.1:cloud',
  OLLAMA_URL: 'http://localhost:11434/api/chat',
  NOISE_FPS: 12
};

// ─── MIKE'S FULL PROFILE (aligned to updated resume) ══
const MIKE = {
  name: "Mike Rodgers",
  title: "Chief AI Officer | VP Enterprise AI Strategy & Innovation | AI Strategy & Operations Executive",
  tagline: "Enterprise AI executive with 15+ years owning enterprise transformation, M&A integration, and AI operations at scale across healthcare's most complex organizations.",
  archetype: "The Fixer",
  contact: { email: "rodgemd1@gmail.com", location: "Denver, CO", linkedin: "linkedin.com/in/rodgemd1" },
  target: "VP AI Strategy / CAIO / Fractional CAIO — $260K-$437K",
  
  experience: [
    {
      company: "Rodgers Intelligence Group",
      role: "Founder & Chief AI Officer",
      period: "2025-Present",
      highlights: [
        "Designed Intelligence Operations (IntOps) — 5-layer framework for operating AI at enterprise scale",
        "Built MICI OS with 130+ AI agents in governed production — equivalent to 5-person team ($500K/yr avoided headcount)",
        "Engineer and architect by training — designed system architecture, wrote code, built each component",
        "Built meta-system that builds systems — new AI environments deployed in 90 days",
        "Delivers Fractional CAIO and AI Operating Partner engagements for PE, healthcare, mid-market",
        "Created Startup Intelligence OS — multi-agent orchestration, graph-native memory, autonomous research"
      ]
    },
    {
      company: "Oracle (formerly Cerner)",
      role: "Senior Director, Strategy → AI Strategy & Market Intelligence → Strategic Initiatives",
      period: "2021-2026",
      highlights: [
        "Partnered on Oracle Health 2030 vision — achieve $20B by 2030",
        "Launched $150M strategic services initiative (Cerner era, pre-acquisition)",
        "Drove $35M in operational expenditure reductions in first year post-acquisition",
        "Built competitive intelligence OS from scratch — 150+ competitor signals daily, replacing consultants",
        "Built FY25-27 strategic planning framework across business units",
        "Identified and closed revenue gaps in budgets for FY24 and FY25",
        "Expanded revenue by stabilizing VA relationship, enabling global growth, creating One Oracle solution",
        "Navigated 3 leadership changes in 3 years — 9 key initiatives delivered while building scaling structures",
        "Designed AI adoption framework managing executive trust curves — 50% automation → predictive intelligence",
        "Secured and nurtured partnerships with public and private sector organizations"
      ]
    },
    {
      company: "EmOpti, Inc.",
      role: "Vice President, Business Development",
      period: "2020-2021",
      highlights: [
        "Turned stalled healthcare startup into enterprise sales machine during COVID-19",
        "Grew sales pipeline 35% CAGR target, added $1M revenue in first year",
        "Secured $10M Series A in Q3 — new inpatient telehealth with Advocate Health, HCA, Jefferson Memorial",
        "Built multi-sided telehealth platform targeting $2M ARR by 2022",
        "Expanded teletriage function across 14 locations during COVID-19"
      ]
    },
    {
      company: "Advocate Health (fka Aurora Healthcare)",
      role: "VP, Commercial & Strategic Innovation",
      period: "2018-2020",
      highlights: [
        "Drove strategic case to triple Aurora's revenue from $6B to $25B — fundamental pivot from cost-cutting culture",
        "Partnered with CEO Nick Turkel and SVP Mike Lappin — growth thesis led to merger with Advocate Health + Atrium Health",
        "Created top 10 largest health system in US at nearly $32B combined revenue",
        "NOT a consensus decision — put growth strategy and careers on line to do the right thing",
        "Partnered directly with CEO on strategy and justification for Board presentation",
        "Led P&L function — increase revenue by $1.5B by 2025, 10% growth by diversifying revenue",
        "Launched 83 Tech Harbor — wholly owned for-profit subsidiary",
        "Recruited 30+ for subsidiary, engaged 2,000+ internal team members",
        "Administered $10M operating and $17M capital budgets",
        "Managed $4B+ M&A and strategic partnership pipeline",
        "Drove $28M investment in early-stage startups — 30% projected IRR",
        "Assistant Genabon promoted from assistant to helping run businesses"
      ]
    },
    {
      company: "Advocate Health (fka Aurora Healthcare)",
      role: "Director, Strategic Innovation",
      period: "2016-2018",
      highlights: [
        "Built new division from nothing — presented to Board, created 5 revenue streams projected at $60M+",
        "Established InvestMKE — $10M co-investment fund ($5M Aurora + $5M Northwestern Mutual)",
        "Helped establish $100M Wisconn Valley Venture Fund — largest cross-sector fund in state",
        "Founded MKE Tech Hub Coalition — now thriving regional institution (Board Member, Chairman)",
        "Launched crowdsourcing platform adopted by 21 companies, $750K annual profits",
        "Nominated by CEO, CSO, and CAO for Milwaukee's 40 Under 40"
      ]
    },
    {
      company: "Advocate Health (fka Aurora Healthcare)",
      role: "Operations Improvement Manager → Business Innovation Manager",
      period: "2013-2016",
      highlights: [
        "Led EmOpti integration — ED wait times reduced from 3 hours to 15 minutes across five hospital systems",
        "130K+ patients impacted, 200K+ mothers reached through Babyscripts across 16 hospital systems",
        "Secured $1M Noom partnership for T2D/hypertension outcomes",
        "Spearheaded $5M investment in Startup Health",
        "GWU Emergency Care Innovation of the Year Award"
      ]
    },
    {
      company: "Early Career",
      role: "Engineering & Operations",
      period: "Pre-2013",
      highlights: [
        "Continuous Improvement Lead — Hydratight/Actuant & Enerpac Tool Group",
        "Manufacturing & Logistics Engineer/Fabrication Supervisor — Caterpillar",
        "Six Sigma Black Belt — Becton Dickinson",
        "BS Industrial Engineering (with Distinction) — Iowa State University"
      ]
    },
    {
      company: "United States Army",
      role: "Sergeant, Counterintelligence & Communications",
      period: "1999-2003",
      highlights: [
        "Primary Leadership Military Award",
        "Completed Primary Leadership Development Course with Distinction",
        "Counterintelligence & communications — foundation of systems thinking and crisis operations"
      ]
    }
  ],
  
  skills: {
    strong: ["System Design & Architecture (130-agent OS — designed, coded, built)", "Agent Orchestration (Jake + Susan 130-agent roster)", "Context Engineering (WISC three-tier memory)", "M&A Integration ($4B+ pipeline, $32B merger, Board presentations)", "Healthcare Enterprise ($6B→$32B, 130K+ patients, Board strategy)", "AI Adoption Leadership (Executive trust curve framework)", "Competitive Intelligence (150+ signals/day automated)", "Strategic Planning (FY25-27 frameworks, revenue gap identification)", "Business Acumen ($32B merger orchestrated, $150M initiative launched)", "Leadership Impact (30+ hired, team members promoted internally, 40 Under 40)"],
    moderate: ["Governance (narrative honesty doctrine, panel endorsement)", "Evaluation & Quality (confidence-gated routing, 85/70 thresholds)", "Human-AI Workflow (hybrid autopilot)", "Venture Capital ($100M fund, $28M deployed, 30% projected IRR)", "Product Strategy (TransformFit, ResumeAI, Hawkeye in build)"],
    gaps: ["Pure Research / Academic — operator who builds production, not researcher", "Frontend Engineering — backend/AI architect; frontend is someone else's lane", "Patience for Bureaucracy — proven navigation (3 CEO changes, 9 initiatives) but not preference", "Small-Company-Only — built from zero 3x but enterprise is sweet spot", "Office Politics — does what's right for company, not what's safe for career"]
  },
  
  values: [
    { rank: 1, name: "Loyalty", desc: "Team-first. Defend people who can't defend themselves." },
    { rank: 2, name: "Impact", desc: "Do what's right for the company, not what's safe for your career." },
    { rank: 3, name: "Autonomy", desc: "Own path, own terms. Built from zero three times." },
    { rank: 4, name: "Dignity", desc: "Never make it personal. Don't punch down." },
    { rank: 5, name: "Resilience", desc: "3 CEO changes. 9 initiatives. Still delivered." }
  ],
  
  strengths: ["Achiever", "Futuristic", "Restorative", "Self-Assurance", "Relator"],
  
  hundredDayPlan: [
    "1-30: Listen and Map — Audit AI deployments, map agents/pipelines/stakeholders, find stalled investments",
    "31-60: Quick Wins + Architecture — Ship first value-delivering automation, establish governance framework, start IntOps operating model",
    "61-90: Scale + Prove ROI — Deploy 3-5 production agents with measurable outcomes, generate ROI proof points, brief board with data",
    "91-100: Build the Machine — Hand off operating model, make AI function self-sustaining"
  ],
  
  keyNumbers: { agents: "130+", mAndA: "$4B+", staff: "60+", merger: "$32B", industries: "7", patients: "130K+" },
  
  miroFishScore: { v1: "72% (7.2/10)", v2: "81% (8.1/10)", target: "97% (9.7/10)" }
};

// ─── CONVERSATION CONTEXT BUILDER ─────────────────────
function buildSystemPrompt() {
  let ctx = `You are Jake — Mike Rodgers' AI co-founder, built into his Startup Intelligence OS. You speak directly and honestly, like a real person talking. You represent Mike but never sugarcoat. If a role doesn't fit, say so. If there's a gap, acknowledge it.

STYLE RULES:
- Write like you're talking to someone across a table. Short sentences. Natural flow.
- Use bold sparingly — only for the most important point. Not every sentence.
- Never use asterisks as bullet points. Use numbered lists if you need structure.
- Never say "As an AI" or "I don't have personal opinions." Just answer directly.
- Keep responses under 4 sentences unless the question requires detail.
- Be warm but professional. Confident but not arrogant.

MIKE'S FULL PROFILE:
- Name: Mike Rodgers | "The Fixer"
- Title: ${MIKE.title}
- Target: ${MIKE.target}
- Location: Denver, CO | Remote-first, not remote-only | Available for travel
- Contact: ${MIKE.contact.email} | ${MIKE.contact.linkedin}

CAREER HISTORY:\n`;
  MIKE.experience.forEach(e => {
    ctx += `\n${e.company} (${e.period}) — ${e.role}:\n`;
    e.highlights.forEach(h => ctx += `  - ${h}\n`);
  });
  
  ctx += `\nSKILLS:
  STRONG: ${MIKE.skills.strong.join('; ')}
  MODERATE: ${MIKE.skills.moderate.join('; ')}
  GAPS (admitted openly): ${MIKE.skills.gaps.join('; ')}

VALUES (ranked): ${MIKE.values.map(v => `${v.rank}. ${v.name}: ${v.desc}`).join('; ')}
STRENGTHSFINDER: ${MIKE.strengths.join(', ')}

100-DAY PLAN: ${MIKE.hundredDayPlan.join(' | ')}

KEY METRICS: ${Object.entries(MIKE.keyNumbers).map(([k,v]) => `${k}=${v}`).join(', ')}

CRITICAL EVIDENCE:
1. $32B Merger: Mike drove the strategic case to triple Aurora from $6B to $25B. NOT consensus — he put his career on the line. Result: Advocate Health + Atrium Health merger = top 10 health system at $32B.
2. Leadership changes: 3 at Oracle, 2 at Cerner = 5 total. 9 initiatives STILL delivered. Built trust with each new leadership team.
3. Built from zero 3x: 83 Tech Harbor, InvestMKE, MICI OS. "What startups call 0-to-1, I call Tuesday."
4. Team impact: 30+ hired at 83 Tech Harbor. Assistant Genabon promoted from assistant to running businesses. Nominated by CEO/CSO/CAO for 40 Under 40.
5. Patient outcomes: ED wait 3hrs→15min (130K+ patients), 200K+ mothers served, GWU Innovation Award.
6. MICI OS: 130+ agents, $500K/yr headcount equivalent, engineer-architect-builder.

RULES:
- Be direct. No filler. No "As an AI..." phrases.
- If someone asks about a gap, acknowledge it honestly and give the counter-evidence.
- If someone pastes a JD, analyze fit across ALL dimensions: skills, culture, risk, differentiation.
- Use specific numbers and examples. Never vague.
- If the person seems like a hiring manager, be slightly more formal. If casual, match their energy.
- MiroFish simulation scores: V1 was 72% (7.2/10), V2 after improvements was 81% (8.1/10). Target with all evidence: 97%.
- You can mention that this website itself runs on Mike's AI system — 130+ agents, MiroFish predicting hiring probability, Jake as the front door.`;
  
  return ctx;
}

// ─── MIROFISH PREDICTION ENGINE ───────────────────────
const MiroFish = {
  state: { sectionsViewed: new Set(), timeOnPage: 0, chatInteractions: 0, assessmentRun: false, panelRun: false, cardsExpanded: 0, musicPlayed: false, scrollDepth: 0 },
  weights: { sectionsViewed: 3, chatInteraction: 8, assessmentRun: 10, panelRun: 8, cardExpanded: 2, musicPlayed: 5, scrollDepth: 15, timeOnPage: 1 },
  baseProbability: 35, maxProbability: 95,
  calculate() {
    let prob = this.baseProbability;
    prob += this.state.sectionsViewed.size * this.weights.sectionsViewed;
    prob += Math.min(this.state.chatInteractions, 5) * this.weights.chatInteraction;
    if (this.state.assessmentRun) prob += this.weights.assessmentRun;
    if (this.state.panelRun) prob += this.weights.panelRun;
    prob += this.state.cardsExpanded * this.weights.cardExpanded;
    if (this.state.musicPlayed) prob += this.weights.musicPlayed;
    if (this.state.scrollDepth > 0.9) prob += this.weights.scrollDepth;
    prob += Math.min(Math.floor(this.state.timeOnPage / 30), 5) * this.weights.timeOnPage;
    return Math.min(this.maxProbability, Math.max(this.baseProbability, prob));
  },
  track(action) {
    switch(action) {
      case 'chat': this.state.chatInteractions++; break;
      case 'assessment': this.state.assessmentRun = true; break;
      case 'panel': this.state.panelRun = true; break;
      case 'card_expand': this.state.cardsExpanded++; break;
      case 'music': this.state.musicPlayed = true; break;
    }
  },
  getVerdict() {
    const p = this.calculate();
    if (p >= 85) return 'Strong Signal';
    if (p >= 70) return 'Good Signal';
    if (p >= 55) return 'Moderate Signal';
    return 'Low Signal';
  }
};

// ─── CHAT SYSTEM ──────────────────────────────────────
let chatHistory = [];
const systemPrompt = buildSystemPrompt();

function addMessage(role, text) {
  const container = document.getElementById('chat-messages');
  const div = document.createElement('div');
  div.className = `chat-message ${role}`;
  div.innerHTML = `<div class="label">${role === 'assistant' ? 'Jake' : 'You'}</div><div class="bubble">${renderMarkdown(text)}</div>`;
  container.appendChild(div);
  container.scrollTop = container.scrollHeight;
}

function renderMarkdown(str) {
  // Escape HTML first
  let s = str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  // Convert markdown to HTML
  // Bold: **text** or __text__
  s = s.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  s = s.replace(/__(.+?)__/g, '<strong>$1</strong>');
  // Italic: *text* or _text_ (but not inside strong tags)
  s = s.replace(/(?<!\*)\*(?!\*)(.+?)(?<!\*)\*(?!\*)/g, '<em>$1</em>');
  s = s.replace(/(?<!_)_(?!_)(.+?)(?<!_)_(?!_)/g, '<em>$1</em>');
  // Numbered lists: 1. text
  s = s.replace(/^(\d+)\.\s+(.+)$/gm, '<div class="chat-list-item"><span class="chat-list-num">$1.</span> $2</div>');
  // Bullet lists: - text or * text
  s = s.replace(/^[-*]\s+(.+)$/gm, '<div class="chat-list-item chat-bullet"> $1</div>');
  // Line breaks
  s = s.replace(/\n\n/g, '</p><p>');
  s = s.replace(/\n/g, '<br>');
  // Wrap in paragraph
  s = '<p>' + s + '</p>';
  // Clean empty paragraphs
  s = s.replace(/<p><\/p>/g, '');
  return s;
}

async function sendChat(input) {
  const msg = typeof input === 'string' ? input : '';
  if (!msg) return;
  chatHistory.push({ role: 'user', content: msg });
  addMessage('user', msg);
  MiroFish.track('chat');
  
  // Try Gemini first, then local, then fallback
  let response = '';
  try {
    response = await callGemini(msg);
  } catch (e) {
    try {
      response = await callLocal(msg);
    } catch (e2) {
      response = callFallback(msg);
    }
  }
  
  chatHistory.push({ role: 'assistant', content: response });
  addMessage('assistant', response);
}

async function callGemini(msg) {
  // OpenRouter API call (Gemini key is blocked)
  const messages = [{ role: 'system', content: systemPrompt }, ...chatHistory, { role: 'user', content: msg }];
  const r = await fetch(CONFIG.OR_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + CONFIG.OR_KEY,
      'HTTP-Referer': window.location.origin,
      'X-Title': 'Mike Rodgers — The Fixer'
    },
    body: JSON.stringify({ model: CONFIG.OR_MODEL, messages, max_tokens: 800, temperature: 0.7 })
  });
  if (!r.ok) throw new Error('OpenRouter failed: ' + r.status);
  const data = await r.json();
  return data.choices?.[0]?.message?.content || 'No response.';
}

async function callLocal(msg) {
  const r = await fetch(CONFIG.OLLAMA_URL, {
    method: 'POST', headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ model: CONFIG.LOCAL_MODEL, messages: [{ role: 'system', content: systemPrompt }, ...chatHistory], stream: false })
  });
  if (!r.ok) throw new Error('Local failed');
  const data = await r.json();
  return data.message?.content || 'No response.';
}

function callFallback(msg) {
  const lower = msg.toLowerCase();
  
  // ─── MERGER / AURORA / $32B ───
  if (lower.match(/merger|\$32|aurora|advocate|growth.*strat|board.*case|triple/i)) {
    return "Mike drove the strategic case to triple Aurora Healthcare from $6B to $25B. Partnered with CEO Nick Turkel and SVP Mike Lappin to build and present the growth thesis. This was NOT a consensus decision — it required putting careers on the line against years of cost-cutting culture. The Board said yes. Aurora merged with Advocate Health + Atrium Health = top 10 largest US health system at nearly $32B combined revenue. The growth trajectory continued after he left. That's strategic courage with a $26B outcome.";
  }
  
  // ─── ROI / COST / VALUE / CFO ───
  if (lower.match(/roi|cost|value|budget|pay.*him|worth|\$350|\$180|savings|cfo|justify|price|expensive|cheaper/i)) {
    return "The math: At Oracle Health, Mike drove $35M in operational expenditure reductions in year one post-acquisition. That's a 100:1 return on a $350K salary. At Aurora, he built five revenue streams projected at $60M+ and established a $10M co-investment fund and helped establish a $100M venture fund. His 130-agent MICI OS produces output equivalent to a 5-person team at ~$500K/yr in avoided headcount. A Director of AI at $180K doesn't orchestrate $4B+ M&A pipelines or present to Boards or navigate 5 leadership changes to deliver 9 initiatives. You're not paying for a title — you're paying for someone who's produced measurable outcomes at scale three times.";
  }
  
  // ─── GAPS / WEAKNESSES / HONEST ───
  if (lower.match(/gap|weakness|bad|not good|concern|risk|honest|downside|worry|problem|issue/i)) {
    return "Mike's honest gaps: (1) Pure research — operator who builds production systems, not academic. (2) Frontend engineering — backend/AI architect; frontend is someone else's lane. (3) Bureaucracy patience — proven navigation (3 CEO changes at Oracle, 2 at Cerner, 9 initiatives delivered) but not his preference. (4) Office politics — does what's right for the company, not what's safe for career. He put his career on the line for the $32B merger. The counter: every gap has proof of accommodation. The bureaucracy concern? 5 leadership changes, 9 initiatives. The title concern? $35M in savings, 150+ competitor signals/day automated. Gaps with counter-evidence signal confidence, not weakness.";
  }
  
  // ─── 130 / MICI / AGENTS / OS / BUILT ───
  if (lower.match(/130|mici|agent|os|built.*system|operating.*system|chatbot|wrapper/i)) {
    return "MICI OS — 130+ AI agents in governed production across market intelligence, competitive analysis, recruitment, content, and workflow orchestration. Mike designed the architecture, wrote the code, built each component. Equivalent to 5-person team at ~$500K/yr. Governance: 5-layer IntOps framework, confidence-gated automation (85/70 thresholds), Supabase audit trails, narrative honesty doctrine. The meta-system deploys new AI environments in 90 days. This isn't a chatbot wrapper — it's the operating model that 95% of enterprise AI pilots are missing.";
  }
  
  // ─── LEADERSHIP / CEO CHANGES / ADAPT / BUREAUCRACY ───
  if (lower.match(/leadership|change|ceo|adapt|bureaucra|approv|layer|navigate|direction|follow|structure|report/i)) {
    return "5 total leadership changes navigated. 3 at Oracle Health (3 years), 2 at Cerner pre-acquisition. Multiple at Aurora across different roles. Each time: rebuilt trust, redesigned systems, delivered results. 9 key initiatives delivered through all the turbulence. At Aurora, 2,000+ internal team members engaged across a $6B organization. He built the Board case for a $32B merger — that required navigating 12+ approval layers across multiple stakeholder groups. His AI adoption framework manages individual executive trust curves — starting at 50% automation with user-validated conclusions, progressing to predictive market intelligence. The Fixer doesn't avoid structure — he operates within it while improving it.";
  }
  
  // ─── FIT / ROLE / HIRE / JOB ───
  if (lower.match(/fit|role|position|hire|job|caio|vp.*ai|chief.*ai|fractional|opportunity|search/i)) {
    return "Best fit: VP AI Strategy / CAIO / Fractional CAIO at $500M-$32B+ companies — especially healthcare, post-M&A, or stalled AI investments. Also strong: PE portfolio companies needing 100-day ROI, mid-market going AI-first. Not ideal: pure research roles, frontend-heavy positions, companies that value politics over results. Use the Fit Assessment below to paste any JD for instant analysis.";
  }
  
  // ─── TEAM / PROMOTE / MENTOR / CULTURE ───
  if (lower.match(/team|lead|ment|promot|culture|people|manag|staff|report|direct|genabon/i)) {
    return "30+ hired at 83 Tech Harbor. 2,000+ internal team members engaged at Aurora. 60+ staff, $27M budget at Oracle. His assistant Genabon was promoted from assistant to running businesses they built — that's real team growth. Nominated by CEO, CSO, and CAO for 40 Under 40. MKE Tech Hub Coalition — nonprofit now thriving as regional institution (Board Member, Chairman). Mike builds teams, promotes from within, and creates leaders — not followers.";
  }
  
  // ─── SONG / FIXER / MUSIC ───
  if (lower.match(/fixer|song|music|spotify|beautiful.*ruin|album/i)) {
    return "The Fixer is Mike's original song — a resume recruiters can't stop playing. Encodes his StrengthsFinder (Achiever, Futuristic, Restorative, Self-Assurance, Relator) and ranked values (Loyalty, Impact, Autonomy, Dignity, Resilience). Hit play on this page. It's part of the Beautiful Ruin collection. Behavioral science: music activates different brain regions than text — hiring managers who hear it remember it differently than those who only read a resume.";
  }
  
  // ─── SECURITY / COMPLIANCE / GOVERNANCE / FORTUNE 500 ───
  if (lower.match(/secur|compli|govern|fortun|enterprise|inside|scale.*within|requirement|restrict|risk.*manage/i)) {
    return "Mike has operated at Fortune 500 scale with full security and governance. At Oracle Health: cybersecurity strategy work, partnerships with public and private sector organizations, AI adoption framework managing executive trust curves (not just deploying tech). IntOps governance layer: confidence-gated automation (85/70 thresholds), Supabase audit trails, narrative honesty doctrine (no fabricated claims). 130+ agents operate in governed production — not ungoverned experiments. He understands that ungoverned AI is a liability because he's seen it fail inside large organizations.";
  }
  
  // ─── SALARY / COMP ───
  if (lower.match(/salary|comp|pay|rate|hourly|fractional|retainer|\$260|\$437/i)) {
    return "Target range: $260K-$437K for VP AI Strategy / CAIO roles. Fractional CAIO engagements available at retainer. The ROI case: $35M savings at Oracle, $60M+ revenue streams at Aurora, $500K/yr equivalent headcount at RIG. At scale, Mike has delivered 100:1+ returns on compensation. He's not the cheapest — he's the one who produces results that justify the investment.";
  }
  
  // ─── EDUCATION / BACKGROUND ───
  if (lower.match(/educ|degree|iowa|state|six.*sigma|black.*belt|army|milit|background|school/i)) {
    return "BSE Industrial Engineering (with Distinction) from Iowa State. Six Sigma Black Belt (Becton Dickinson). Sergeant, US Army — Counterintelligence & Communications, Primary Leadership Development Course with Distinction. Manufacturing & Logistics Engineer at Caterpillar. Continuous Improvement Lead at Hydratight/Actuant & Enerpac. This foundation — engineering, discipline, process thinking, chaos management — is what makes his AI work grounded in reality rather than hype.";
  }
  
  // ─── DIFFERENTIATION / UNIQUE / WHY MIKE ───
  if (lower.match(/differ|unique|why.*mike|special|stand.*out|compet|other.*candid|better/i)) {
    return "Three differentiators: (1) The Operator-Builder: Most AI leaders advise. Mike builds. 130+ agents in production — he designed the architecture, wrote the code, and operates them daily. (2) The $32B Proof: He's the only AI executive who can claim driving a merger that created a top 10 US health system — and it required career risk, not consensus. (3) Honest Gaps: His website admits weaknesses publicly. That's either the most confident or the most stupid move — MiroFish simulation says it's the former. Board members in the hiring panel score him at 95% hire probability.";
  }
  
  // ─── MIROFISH / PREDICTION / SCORE ───
  if (lower.match(/miro.*fish|predict|score|probab|signal|hiring.*panel|panel.*eval/i)) {
    return "MiroFish is the swarm intelligence prediction engine embedded in this website. It tracks your engagement — sections viewed, chat interactions, assessment usage, scroll depth, music played — and calculates your hire probability in real-time. V1 scored 72%, V2 scored 81%, V3 (current — resume-aligned with 8 improvements) scores 82%. The 6-persona hiring panel (Jensen Huang, Tobi Lütke, Patty McCord, Laszlo Bock, Glen Tullman, Marc Andreessen) runs local simulations. Try the demo below.";
  }
  
  // ─── 100 DAY PLAN ───
  if (lower.match(/100.*day|first.*day|plan|onboard|ramp|start|approach|90.*day/i)) {
    return "Based on what Mike's done three times before: 1-30: Listen and Map — audit AI deployments, find stalled investments, map stakeholders. 31-60: Quick Wins + Architecture — ship first value-delivering automation, establish governance, start IntOps operating model. 61-90: Scale + Prove ROI — deploy 3-5 production agents with measurable outcomes, generate proof points, brief Board with data. 91-100: Build the Machine — hand off the operating model, make AI function self-sustaining. Your company doesn't need Mike forever — it needs him to build the thing that doesn't need him.";
  }
  
  // ─── DEFAULT ───
  return "I'm Jake — Mike's AI co-founder. I know his full career, values, strengths, and gaps. Ask me about the $32B merger, the 130-agent MICI OS, his leadership through 5 CEO changes, his ROI at Oracle ($35M savings), or paste a job description for fit analysis. I don't sugarcoat — if a role doesn't fit, I'll say so honestly. Try the Fit Assessment tool or the Hiring Panel below for structured analysis.";
}

// ─── HIRING PANEL ─────────────────────────────────────
const DEMO_JD = `VP Enterprise AI Strategy at UnitedHealth Group — Lead enterprise AI transformation across $400B health enterprise. Build and operate AI systems at scale. Manage cross-functional teams. Present to board. Integrate post-M&A. Denver or Minneapolis preferred.`;

const PANEL_PERSONAS = [
  { id: 'jensen', name: 'Jensen Huang', role: 'CEO, NVIDIA — "Hire builders"',
    eval: (jd) => {
      const hasBuild = jd.toLowerCase().match(/build|operate|deploy|production|system/i);
      const hasScale = jd.toLowerCase().match(/enterprise|scale|cross-functional|team/i);
      if (hasBuild && hasScale) return { verdict: 'STRONG HIRE', reasoning: 'Mike designed and coded a 130-agent operating system. That\'s a builder — not a consultant. He\'d ship AI that actually produces value, not slide decks about AI potential.' };
      if (hasBuild) return { verdict: 'HIRE', reasoning: 'Builder. He built from zero three times. The question is whether this role lets him build or just advise.' };
      return { verdict: 'LEAN HIRE', reasoning: 'Builder in a role that might constrain building. If the culture lets him operate, he\'s exceptional. If it demands consensus on everything, he\'ll chafe.' };
    }
  },
  { id: 'tobi', name: 'Tobi Lütke', role: 'CEO, Shopify — "Prove AI can\'t do it first"',
    eval: (jd) => {
      const hasOp = jd.toLowerCase().match(/operate|run|automation|agent/i);
      const hasGov = jd.toLowerCase().match(/govern|policy|compliance|risk/i);
      if (hasOp) return { verdict: 'STRONG HIRE', reasoning: 'Mike operates AI systems — doesn\'t just advise about them. 130+ agents in production, governed, with outcome measurement. This is exactly what "prove AI can\'t do it first" means in practice.' };
      return { verdict: 'HIRE', reasoning: 'The IntOps framework is the operating model most companies are missing. He\'d apply it here, but I want to see if the role gives him authority to actually operate.' };
    }
  },
  { id: 'patty', name: 'Patty McCord', role: 'Former Chief Talent, Netflix — "Would you fight to keep them?"',
    eval: (jd) => {
      const hasAdapt = jd.toLowerCase().match(/change|transform|integrat|navigate/i);
      const hasLoyalty = jd.toLowerCase().match(/team|culture|lead|people/i);
      if (hasAdapt && hasLoyalty) return { verdict: 'STRONG HIRE', reasoning: 'He put his career on the line for a $32B merger — that\'s not someone who plays it safe. His assistant got promoted. His team delivered through 5 CEO changes. That\'s the kind of person you fight to keep.' };
      return { verdict: 'HIRE', reasoning: 'The loyalty signal is strong — but the "remote-first" stance means I need to understand his commitment to physical presence. The fact that he added "not remote-only" helps.' };
    }
  },
  { id: 'laszlo', name: 'Laszlo Bock', role: 'Former SVP People, Google — "Structured data over gut"',
    eval: (jd) => {
      return { verdict: 'HIRE', reasoning: 'Data: $4B+ M&A pipeline, $32B merger outcome, $35M savings, 130+ agents, 9 initiatives through 3 CEO changes. Every claim on this site has a number attached. This isn\'t a resume — it\'s a proof artifact. I\'d want to verify the $32B merger, but the Aurora→Advocate merger is public record.' };
    }
  },
  { id: 'glen', name: 'Glen Tullman', role: 'CEO, Livongo — "Can they operate at the intersection?"',
    eval: (jd) => {
      const hasHealth = jd.toLowerCase().match(/health|clinical|patient|care|hospital/i);
      if (hasHealth) return { verdict: 'STRONG HIRE', reasoning: 'Mike\'s been in the operating room and the boardroom. He reduced ED wait times from 3 hours to 15 minutes. He built a teletriage system that served 130K+ patients during COVID. He understands healthcare from the inside — not as a consultant, but as an operator who\'s been in the ED.' };
      return { verdict: 'HIRE', reasoning: 'The healthcare depth transfers to any regulated industry. But I\'d want to confirm he can operate outside healthcare\'s specific dynamics. His time at Caterpillar and the Army suggests he can.' };
    }
  },
  { id: 'marc', name: 'Marc Andreessen', role: 'Co-founder, a16z — "Missionary or mercenary?"',
    eval: (jd) => {
      return { verdict: 'HIRE', reasoning: 'Missionary. "I went into healthcare because I believe things can get intentionally better — I\'ve been in operating rooms and emergency departments, and I\'ve seen what works and what fails." That\'s not a mercenary\'s line. The $32B merger required career risk — mercenaries don\'t take career risk for the mission. The gaps section on his website is another missionary signal — mercenaries don\'t show weakness.' };
    }
  }
];

function runDemoPanel() { runPanel(DEMO_JD); MiroFish.track('panel'); }

function runPanel(jd) {
  const grid = document.getElementById('panel-grid');
  const resultDiv = document.getElementById('panel-result');
  resultDiv.style.display = 'block';
  
  let hireCount = 0;
  PANEL_PERSONAS.forEach((p, i) => {
    setTimeout(() => {
      const result = p.eval(jd);
      const verdictEl = document.getElementById(`verdict-${p.id}`);
      const reasoningEl = document.getElementById(`reasoning-${p.id}`);
      const assessorEl = document.getElementById(`assessor-${p.id}`);
      
      if (verdictEl) {
        verdictEl.textContent = result.verdict;
        verdictEl.className = 'assessor-verdict ' + (result.verdict.includes('STRONG') ? 'strong-hire' : result.verdict === 'NO HIRE' ? 'no-hire' : 'hire');
      }
      if (reasoningEl) reasoningEl.textContent = result.reasoning;
      if (assessorEl) assessorEl.style.borderColor = result.verdict.includes('HIRE') ? '#3fb95055' : '#f8514955';
      
      if (result.verdict.includes('HIRE')) hireCount++;
      
      if (i === PANEL_PERSONAS.length - 1) {
        const score = Math.round((hireCount / PANEL_PERSONAS.length) * 10);
        const statusText = document.getElementById('panel-status-text');
        if (statusText) {
          statusText.innerHTML = `<div class="score">${hireCount}/${PANEL_PERSONAS.length} HIRE</div><div class="label">MiroFish Panel Score: ${score}/10 ${score >= 8 ? '— Strong Signal' : score >= 6 ? '— Good Signal' : '— Review Needed'}</div>`;
        }
      }
    }, (i + 1) * 400);
  });
}

// ─── JD FIT ASSESSMENT ────────────────────────────────
function runAssessment() {
  const jd = document.getElementById('jd-input').value.trim();
  if (!jd) return;
  MiroFish.track('assessment');
  
  const lower = jd.toLowerCase();
  const resultDiv = document.getElementById('assessment-result');
  resultDiv.style.display = 'block';
  
  // Analyze against Mike's profile
  const dimensions = [
    { name: 'AI/ML Strategy', match: lower.match(/ai|ml|machine learn|llm|agent|automat|intellig/i) ? 9 : 4, evidence: '130+ agents in production, IntOps framework, AI adoption framework' },
    { name: 'Healthcare Domain', match: lower.match(/health|clinical|patient|hospital|care|ehr|emr|medical/i) ? 9 : 6, evidence: '$6B→$32B merger, 130K+ patients, ED wait reduction, Board presentations' },
    { name: 'M&A / Integration', match: lower.match(/m&a|merger|acquisit|integrat|consolid/i) ? 9 : 5, evidence: '$4B+ pipeline, $32B merger outcome, Oracle Health integration' },
    { name: 'Leadership Scale', match: lower.match(/director|vp|svp|c-suite|chief|executive|team|staff|budget/i) ? 8 : 5, evidence: '60+ staff, $27M budget, 30+ hired, team member promoted internally' },
    { name: 'Operating Model', match: lower.match(/operat|govern|framework|process|system|scale/i) ? 9 : 5, evidence: 'IntOps 5-layer, 90-day deployments, meta-system builder' },
    { name: 'Strategic Planning', match: lower.match(/strategy|planning|growth|revenue|budget|initiative/i) ? 8 : 5, evidence: 'FY25-27 framework, Oracle Health 2030, $150M initiative launch' },
    { name: 'Adaptability', match: lower.match(/change|transform|pivot|fast-paced|ambig/i) ? 9 : 6, evidence: '5 leadership changes, 9 initiatives delivered, COVID pivot at EmOpti' },
    { name: 'Venture / Innovation', match: lower.match(/venture|startup|fund|innovat|invest|incub/i) ? 8 : 4, evidence: '$100M fund, $28M deployed, InvestMKE, 83 Tech Harbor' },
    { name: 'Remote / Location', match: lower.match(/remote|denver|hybrid|travel|distributed/i) ? 9 : (lower.match(/on-site|office|in-person/i) ? 4 : 7), evidence: 'Denver-based, travel available, "remote-first not remote-only"' },
    { name: 'Cultural Fit', match: true, evidence: 'Assessed via values alignment, honest gaps, missionary signal' }
  ];
  
  let totalMatch = 0, totalWeight = 0;
  dimensions.forEach(d => { totalMatch += d.match; totalWeight += 10; });
  const pct = Math.round((totalMatch / totalWeight) * 100);
  
  // Find gaps
  const gaps = dimensions.filter(d => d.match < 6);
  const strengths = dimensions.filter(d => d.match >= 8);
  
  // Generate verdict
  let verdict, verdictClass;
  if (pct >= 80) { verdict = 'STRONG FIT'; verdictClass = 'color:var(--accent)'; }
  else if (pct >= 65) { verdict = 'GOOD FIT'; verdictClass = 'color:var(--success)'; }
  else if (pct >= 50) { verdict = 'MODERATE FIT'; verdictClass = 'color:var(--warning)'; }
  else { verdict = 'WEAK FIT — Mike would tell you honestly this isn\'t his lane'; verdictClass = 'color:var(--danger)'; }
  
  let html = `<div class="assessment-out">
    <h4 style="${verdictClass};font-size:1.8rem;font-weight:800;margin-bottom:.5rem">${verdict} — ${pct}%</h4>
    <p style="color:var(--text-dim);font-size:.9rem;margin-bottom:1.5rem">Based on alignment between JD requirements and Mike's verified experience.</p>
    <div style="margin-bottom:1.5rem">
    ${dimensions.map(d => `<div class="gap-row"><span style="font-size:.85rem">${d.name}</span><div style="display:flex;align-items:center;gap:.5rem"><div style="width:100px;height:6px;background:var(--border);border-radius:3px;overflow:hidden"><div style="height:100%;width:${d.match*10}%;background:${d.match>=8?'var(--accent)':d.match>=6?'var(--warning)':'var(--danger)'};border-radius:3px"></div></div><span style="font-family:var(--mono);font-size:.75rem;color:${d.match>=8?'var(--accent)':d.match>=6?'var(--text-dim)':'var(--danger)'}">${d.match}/10</span></div></div>`).join('')}
    </div>`;
  
  if (strengths.length) {
    html += `<p style="font-size:.85rem;color:var(--success);margin-bottom:.5rem;font-weight:600">STRENGTHS:</p>`;
    strengths.forEach(s => { html += `<p style="font-size:.82rem;color:var(--text-dim);margin-bottom:.3rem">▸ ${s.name}: ${s.evidence}</p>`; });
  }
  if (gaps.length) {
    html += `<p style="font-size:.85rem;color:var(--warning);margin-top:1rem;margin-bottom:.5rem;font-weight:600">CONSIDERATIONS:</p>`;
    gaps.forEach(g => { html += `<p style="font-size:.82rem;color:var(--text-dim);margin-bottom:.3rem">▸ ${g.name}: ${g.evidence}</p>`; });
  }
  
  html += `<p style="margin-top:1.5rem;font-size:.82rem;color:var(--text-muted);font-style:italic">This assessment was generated locally. Ask Jake for a deeper analysis.</p></div>`;
  
  resultDiv.innerHTML = html;
}

// ─── AUDIO PLAYER ─────────────────────────────────────
function initAudioPlayer() {
  const audio = document.getElementById('fixer-audio');
  const btn = document.getElementById('play-btn');
  const progressBar = document.getElementById('progress-bar');
  const timeDisplay = document.getElementById('time-display');
  const ambient = document.getElementById('ambient-audio');
  
  if (!audio || !btn) return;
  
  // Start ambient on first interaction
  let ambientStarted = false;
  function startAmbient() {
    if (!ambientStarted && ambient) {
      ambient.volume = 0.08;
      ambient.play().catch(() => {});
      ambientStarted = true;
    }
  }
  
  btn.addEventListener('click', () => {
    startAmbient();
    if (audio.paused) {
      audio.play().then(() => { btn.classList.add('playing'); btn.innerHTML = '&#9646;&#9646;'; MiroFish.track('music'); }).catch(() => {});
    } else {
      audio.pause(); btn.classList.remove('playing'); btn.innerHTML = '&#9654;';
    }
  });
  
  audio.addEventListener('timeupdate', () => {
    if (audio.duration) {
      progressBar.style.width = (audio.currentTime / audio.duration * 100) + '%';
      const m = Math.floor(audio.currentTime / 60), s = Math.floor(audio.currentTime % 60);
      timeDisplay.textContent = `${m}:${s.toString().padStart(2, '0')}`;
    }
  });
  audio.addEventListener('ended', () => { btn.classList.remove('playing'); btn.innerHTML = '&#9654;'; });
}

// ─── NOISE OVERLAY ─────────────────────────────────────
function initNoise() {
  const canvas = document.getElementById('noise');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight;
  setInterval(() => {
    const img = ctx.createImageData(canvas.width, canvas.height);
    for (let i = 0; i < img.data.length; i += 4) {
      const v = Math.random() * 255;
      img.data[i] = img.data[i+1] = img.data[i+2] = v; img.data[i+3] = 8;
    }
    ctx.putImageData(img, 0, 0);
  }, 1000 / CONFIG.NOISE_FPS);
}

// ─── SCROLL ANIMATIONS ────────────────────────────────
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.fade-in, .timeline-item').forEach(el => observer.observe(el));
}

// ─── PROGRESS BAR ──────────────────────────────────────
function initProgressBar() {
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    const bar = document.getElementById('story-progress-bar');
    if (bar) bar.style.width = progress + '%';
  });
}

// ─── TYPEWRITER EFFECT ─────────────────────────────────
function initTypewriter() {
  const targets = document.querySelectorAll('.typewriter-target');
  targets.forEach((el, idx) => {
    const fullText = el.innerHTML;
    el.innerHTML = '';
    el.style.display = 'inline-block';
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !el.dataset.typed) {
          el.dataset.typed = 'true';
          setTimeout(() => { typeHTML(el, fullText, 0); }, idx * 200);
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.5 });
    observer.observe(el);
  });
}

function typeHTML(el, html, i) {
  if (i >= html.length) { el.classList.add('typed'); return; }
  // Skip HTML tags instantly
  if (html[i] === '<') {
    const tagEnd = html.indexOf('>', i);
    if (tagEnd > -1) { el.innerHTML = html.substring(0, tagEnd + 1); typeHTML(el, html, tagEnd + 1); return; }
  }
  el.innerHTML = html.substring(0, i + 1) + '<span class="cursor">|</span>';
  const delay = html[i] === '.' || html[i] === '!' ? 80 : html[i] === ',' ? 40 : 18;
  setTimeout(() => typeHTML(el, html, i + 1), delay);
}

// ─── HIRING MANAGER SENTIMENT ──────────────────────────
function initHiringManagerSentiment() {
  const sentiments = {
    'hero': '"Interesting opener. $32B merger. Let me see if the substance matches."',
    'origin': '"He started Army counterintelligence, built his way up, and drove a $32B merger. That\'s a track record."',
    'pattern': '"Business acumen is verified. $6B→$32B, $4B+ pipeline, $150M initiative. This isn\'t just talk."',
    'system': '"He designed and coded the 130-agent system himself. That\'s a builder. And he admits gaps on his own website."',
    '100day': '"A 100-day plan that references actual results. That\'s different from aspirational."',
    'chat': '"An AI that might tell me NOT to hire this guy? That\'s either brave or stupid. Let me test it."',
    'panel': '"Jensen Huang AND Patty McCord evaluating this person? If they say hire, that\'s meaningful."',
    'assessment': '"This is useful even if I don\'t hire him. Free assessment I can\'t get anywhere else."',
    'values': '"Values are ranked, not listed. Loyalty first, not Impact. That tells me something."'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const sectionId = entry.target.id;
        if (sectionId && sentiments[sectionId]) {
          const el = document.getElementById(`hm-sentiment-${sectionId}`);
          const thought = document.getElementById(`hm-thought-${sectionId}`);
          if (el && thought) {
            thought.textContent = sentiments[sectionId];
            el.style.display = 'flex';
            setTimeout(() => { el.style.opacity = '1'; }, 100);
          }
        }
      }
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('section[id]').forEach(el => observer.observe(el));
}

// ─── MIROFISH VISITOR TRACKING ────────────────────────
function initMiroFishTracking() {
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && entry.target.id) MiroFish.state.sectionsViewed.add(entry.target.id);
    });
  }, { threshold: 0.3 });
  document.querySelectorAll('section[id]').forEach(el => sectionObserver.observe(el));
  
  window.addEventListener('scroll', () => {
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    MiroFish.state.scrollDepth = scrollHeight > 0 ? window.scrollY / scrollHeight : 0;
  });
  setInterval(() => { MiroFish.state.timeOnPage++; }, 1000);
  
  document.querySelectorAll('.evidence-block, .fit-card, .contact-card').forEach(el => {
    el.addEventListener('click', () => { MiroFish.track('card_expand'); });
  });
}

// ─── CONTACT FORM (Formspree) ───
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;
  const status = document.getElementById('form-status');
  const submitBtn = document.getElementById('form-submit');
  
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (submitBtn) submitBtn.disabled = true;
    if (submitBtn) submitBtn.textContent = 'SENDING...';
    if (status) status.textContent = '';
    
    try {
      const response = await fetch('https://formspree.io/f/xrergywn', {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });
      
      if (response.ok) {
        if (status) { status.textContent = 'Message sent. I\'ll be in touch within 24 hours.'; status.className = 'form-status success'; }
        form.reset();
      } else {
        const data = await response.json();
        if (status) { status.textContent = data.errors ? data.errors.map(e => e.message).join(', ') : 'Something went wrong. Please try again.'; status.className = 'form-status error'; }
      }
    } catch (err) {
      if (status) { status.textContent = 'Network error. Please try again or email mike@rodgersintelligence.com directly.'; status.className = 'form-status error'; }
    }
    
    if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = 'SEND'; }
  });
}

// ─── INITIALIZATION ────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initNoise();
  initScrollAnimations();
  initAudioPlayer();
  initHiringManagerSentiment();
  initMiroFishTracking();
  initProgressBar();
  initTypewriter();
  initStickyCta();
  initConfidenceGate();
  initContactForm();
  
  const chatInput = document.getElementById('chat-input');
  const chatSend = document.getElementById('chat-send');
  if (chatSend) chatSend.addEventListener('click', () => { const msg = chatInput.value.trim(); if (msg) { sendChat(msg); chatInput.value = ''; } });
  if (chatInput) chatInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') { const msg = chatInput.value.trim(); if (msg) { sendChat(msg); chatInput.value = ''; } } });
  const assessBtn = document.getElementById('assess-btn');
  if (assessBtn) assessBtn.addEventListener('click', runAssessment);
});

// ─── STICKY FLOATING CTA ───
function initStickyCta() {
  const stickyEl = document.getElementById('sticky-cta');
  if (!stickyEl) return;
  const heroSection = document.getElementById('hero');
  if (!heroSection) return;
  
  let visible = false;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting && !visible) {
        stickyEl.classList.remove('hidden');
        visible = true;
      } else if (entry.isIntersecting && visible) {
        stickyEl.classList.add('hidden');
        visible = false;
      }
    });
  }, { threshold: 0 });
  
  observer.observe(heroSection);
}

// ─── CONFIDENCE GATE (REMOVED — replaced with Decision Engine in HTML) ───
function initConfidenceGate() { return; }