
---

# Building Leverage as a PM: Senior Practitioner Notes

---

## The Core Mental Model: Leverage, Not Effort

The central thesis is deceptively simple: **great PMs don't work harder — they architect better lever systems.** The output gap between good and great PMs isn't effort; it's the quality of the system directing that effort.

This maps to a well-established principle in decision science. Lovallo & Sibony's McKinsey research across 1,048 major business decisions found that **rigorous process beats rigorous analysis by a factor of 6x** in producing quality outcomes. Most PMs over-invest in execution (the spreadsheet) and under-invest in the architecture of how work gets chosen and decisions get made.

> **Head of Product implication:** Your job is not to be the best executor in the room. It's to design the system that makes your team's execution consistently high-quality.

---

## The 5 Types of Leverage

### 1. Needle-Moving Work
- **The trap:** Bi-weekly sprints + OKR pressure + RICE scoring all create a structural bias toward safe, incremental wins. RICE in particular punishes big bets (low confidence scores, long timelines).
- **The shift:** Carve out explicit space for longer-horizon initiatives. The question isn't "what can we ship this sprint?" but "what initiative, if it works, changes the trajectory of the product?"
- **Signal you're in the trap:** Your roadmap is full, your team is busy, but your metrics aren't moving meaningfully.

### 2. Team Empowerment
- **The trap:** PM as decision bottleneck — bug triage, tactical design calls, micro-scope decisions all flowing through one person.
- **The shift:** Move from **Bottleneck PM → Architect PM**. Your job is to set context and principles so the team can decide without you.
- **Practical mechanism:** Empowering specs (see below) are the primary tool. Context-heavy, implementation-light.

### 3. Leadership Buy-In
- **The reality:** Time and resources are rationed by leadership. If they don't see your initiative as a priority, it doesn't get funded — regardless of how good it is.
- **The action:** Socialize goals early. Adapt your selling style per leader (some want data, some want narrative, some want competitive framing). Don't present the roadmap cold.
- **Head of Product note:** This is where the **Vision Narrative** (1-2 page written doc) earns its keep — it forces crisp articulation and gives leaders something concrete to react to before the room.

### 4. Product Intuition
- **Definition:** The instinct to make good product decisions with incomplete information — pattern recognition built from thousands of customer data points.
- **How it's built:** Not innate. Built through systematic, repeated exposure to what customers are saying. Reforge's AI-native teams research reinforces this: the teams building the best intuition are those with the tightest, most continuous customer feedback loops.
- **Head of Product implication:** Intuition is an organizational asset, not just a personal one. Build feedback systems that distribute signal across the team, not just to the PM.

### 5. Focused Effort
- **The trap:** Unclear which levers yield returns → diluted effort across too many initiatives.
- **The shift:** OKRs and roadmaps structured around specific, measurable product levers — not feature lists.

---

## The 8 Deliverables (The PM's Scope, Defined)

Because the PM role is nebulous, defining it as **8 distinct outputs** creates accountability and clarity:

| # | Deliverable | Purpose |
|---|---|---|
| 1 | Product Strategy | How the product wins the market |
| 2 | Vision Narrative | 1-2 page scope vision |
| 3 | Customer Insights | Continuous discovery |
| 4 | Metrics Dashboards | Product health signal |
| 5 | Product Roadmaps | What gets built and when |
| 6 | Team OKRs | Focus and alignment |
| 7 | Product Specs | Guiding what and how |
| 8 | Decision Alignment | Multi-stakeholder facilitation |

**Key structural insight:** Product Strategy is the foundation. Roadmap priorities flow into OKRs. Decision Alignment is the thread running through all 8. If any one is weak, the others degrade.

---

## The 6 Dimensions of Product Strategy

### Dimension 1: Target Audience — The Bullseye Framework
- Start with the **Total Addressable Audience**, filter to a **Narrow Hypothesis**, validate to a **Confirmed Target**.
- Filtering attributes: Use Case, Role, Demographics, Firmographics, Psychographics.
- **The cascade effect (Slack case study):** Changing target audience from "workplace teams" to "online communities" cascades into completely different value props, differentiation, acquisition, and monetization. Same product. Entirely different strategy.
- **Validation criteria:** Segment Size, Resonance, Willingness to Pay, Delivered Value (NPS/retention), Channel Fit, Strategic Fit.
- **The cost of shallow targeting:** Building for "all salespeople" solves neither Hunters (new contracts) nor Farmers (account maintenance). You end up with a product that's mediocre for everyone.

### Dimension 2: Problem You're Solving — The Motivation Gap
- **Surface framing:** "What challenge am I building for?" → leads to feature-based, incremental solutions.
- **Deep framing:** "What is the final outcome the user truly wants?" → leads to needle-moving solutions.
- **The reframe (Ford):** "Faster horse" → "Get from A to B quickly" → the automobile. The reframe happens at the outcome level, not the feature level.
- **Swiggy case study:** "Deliver food faster" → optimize routes (race to the bottom). "Remove friction from eating" → platform expansion (Instamart, Genie, Dineout).
- **Framework — The Motivation Gap:**
  1. What is the end benefit?
  2. Why do they want it?
  3. What gaps exist in current solutions?
  → Refined Problem Statement

### Dimension 3: Value Proposition — Sub-Benefits Framework
- **The trap:** A single high-level statement is like compressing an HD photo to a thumbnail. Insiders fill gaps with assumptions; outsiders misinterpret.
- **The doom loop:** Vague statement → internal disagreement → unfocused delivery → weak differentiation → no needle-moving outcomes.
- **The fix:** Break the value prop into **3-5 distinct sub-benefits** — each independently measurable, each reducing room for misinterpretation.
- **Substack example:** (1) Get paid to do what you love, (2) You're in charge (audience ownership), (3) Start your writing journey (upfront programs), (4) Everything you need to make a living (legal, healthcare).
- **Practical test — The Homepage Rule:** If you can't build a clear homepage (tagline + 3-5 feature/benefit grid), your strategy isn't clear enough.

### Dimension 4: Strategic Differentiation — Full Field of Competition
- **Value Prop vs. Differentiation:**
  - Value Prop = what you offer users (why choose us?)
  - Differentiation = why competitors can't replicate it (why can't they catch up?)
- **The #1 mistake:** Only mapping direct competitors. You must map all three:
  - **Direct Competitors** — closest value prop (Substack vs. WordPress)
  - **Indirect Alternatives** — different category, viable substitute (Substack vs. Patreon)
  - **Adjacent Markets** — don't compete today, but will (Substack vs. NYT)
- **Finding hidden competition:**
  - Method 1: "How do users solve this problem outside direct competition?"
  - Method 2: Map the user journey — what comes before and after your product? Those are your adjacent competitors.
- **Unique attributes aren't just features:** LinkedIn's moat is data accuracy (live ecosystem competitors can't replicate). Substack's moat is infrastructure (legal defense, healthcare — competitors won't offer).

### Dimension 5: Channel Strategy — Product-Channel Fit
- **The four acquisition loops** (not funnels — they compound):
  - **Viral:** Users invite users (Slack)
  - **Content:** Users/partners create content → SEO/social distribution (Pinterest)
  - **Paid:** Ads → revenue → reinvest in ads (Supercell/Clash Royale)
  - **Sales:** Reps convert leads → revenue → hire more reps (HubSpot)
- **Surface vs. Deep optimization:**
  - Surface: Optimize conversion variables (button placement, page speed)
  - Deep: **Product-Channel Fit** — mold the product to fundamentally fit the channel
- **PCF by channel:**
  - Viral → build network effects into core value (Slack: collaboration requires inviting teammates)
  - Content → make creation effortless and rewarding (Pinterest browser extension; Tripadvisor gamification)
  - Paid → streamline onboarding for low-intent users (Clash Royale: teaches 2 mechanics, 3-min matches)
  - Sales → serve two masters: buyer (CIO needs compliance) and end user (employee needs workflows)
- **Reforge's Four Fits framework** extends this: Product-Channel Fit must also align with Channel-Model Fit (e.g., a $10/month freemium product cannot support enterprise sales economics).

### Dimension 6: Monetization Strategy — Product-Model Fit
- **Surface understanding:** Know the mechanics (Scale, What, Amount, When). Table stakes.
- **Deep understanding:** Know how to build the product to fit the model. Competitive advantage.
- **The $100M Framework (Chris Janz, Point9 Capital):**

| Type | ARPPU | Customers Needed | PMF Strategy |
|---|---|---|---|
| Mass Market | $10 | 10M | Network effects + content creation |
| Prosumer | $100 | 1M | Casual contact virality (Superhuman, Dropbox) |
| SMB | $1K | 100K | High NPS, self-serve, free trial |
| Mid-Market | $10K | 10K | Self-serve + customizability |
| Enterprise | $100K | 1K | Deep customization, full workflow fit |

> **Head of Product implication:** Your product-model fit strategy should be derived from your ARPPU target, not bolted on afterward. The monetization model shapes what you build, not just how you charge.

---

## The 8 PM Tools

### Tool 1: Product Strategy Map
Move from surface awareness (feature misalignment) to deep strategic mapping (identifying the "why" and "how" behind each dimension). The Evernote case is instructive: iOS app (deep alignment with hardware-accelerated capture) → hyper-growth. Evernote Hello (surface-only, required manual entry) → shut down 2015.

### Tool 2: Vision Narratives
- 1-2 page written narrative: "In X years, how will your scope make the world better for users?"
- Forces aspiration, detail, and leadership buy-in simultaneously.

### Tool 3: Feedback Management Systems
- Automate collection and processing of customer feedback.
- Goal: build product intuition at scale, not just for the PM.

### Tool 4: Lever Dashboards
- **The trap:** 50+ metric "data dumps" where no one investigates when numbers shift.
- **The fix:** Strict hierarchy — **Outcome → Inputs → Single KPI** (the most leveraged input).
- **Correlation discipline:** Use Excel CORREL. Above 0.7 absolute = strong signal. Below = you haven't found the real KPI yet.
- **Three traps:** All weak signals (widen input list), no clear KPI (extend time horizon), correlation ≠ causation (run isolation testing).
- **The Malwarebytes proof:** PMs assumed system scans drove day-90 retention. Correlation proved license key activation was the true signal. Gut was wrong.
- **Weekly habit:** Investigate sharp dips, slow multi-week drifts, and cohort anomalies. Check product changes, mix shifts, seasonality, and infrastructure failures first.

### Tool 5: 4D Roadmapping
- **The problem with RICE:** Incrementalism bias, no top-down KPI constraints, safe-bet psychology, weak leadership narrative.
- **The 4 lenses:**
  - **Strategy** — deepens competitive edge (long-term, needle-moving)
  - **Vision** — builds toward 5-year north star (transformational)
  - **Customer** — explicitly requested (short-term, trust-building)
  - **Business** — moves input KPIs fastest (incremental, metric-driven)
- **Every lens has a blind spot.** Over-indexing on Strategy → users feel ignored. Over-indexing on Customer → power user bloat. Balance is the job.
- **Process:** Lock target KPIs → 4D constrained brainstorm → prioritize (objective-level multi-lens wins first, then RICE filters).

### Tool 6: OKR Loops
- **OKRs work in 4 ways:** Focused Effort, Team Empowerment, Product Intuition (institutional learning), Leadership Buy-in.
- **Output KRs vs. Outcome KRs:** "Launch feature by July 31" (output) vs. "Reduce order-related support tickets 25% via tracking" (outcome). Strongest OKRs mix both — essential outputs tied to forecasted outcomes.
- **OKRs as a loop, not a checkbox:** Postmortem → feeds next cycle's draft OKRs → socialize & align → launch → review. Compounding learning lives in the transitions.
- **Scoring:** Green (100%+), Yellow (70-99%), Red (<70%). Red = ambitious. Red = learning. Never link scores to compensation.
- **Socialization artifacts:** Share Objectives, Key Results, and Initiatives list — vertically (leadership sanity-check) and horizontally (dependencies, shared KRs with Sales/Marketing).

### Tool 7: Empowering Product Specs
- **The PM as director, not manager.** Set the outcome; let specialists own the solution.
- **Two failure modes:**
  - Too prescriptive (35%): Every edge case dictated. Team disempowered. Implements exactly what you said — no more, no less.
  - Too high-level (30%): Just a requirements list. Team starved of context.
- **The empowering spec = heavy context, light implementation.**
- **Structure:**
  - **Context (5 sections):** Opportunity (which 4D lens?), Target Audience (sub-segment), Customer Insights (counterintuitive + material themes with quotes), Competitive Insights (how we differentiate), Success Metrics (prioritized + guardrails + explicitly deprioritized).
  - **Implementation (5 sections + FAQ):** Scope (Now/Next/Later), Experience (wireframes, not prose — design owns it), Implementation Details (only tech choices that shape UX), Launch Plan (A/B, beta, soft launch with user % and timing), Investigative Metrics (instrument questions you'll ask later).
  - **FAQ:** Log every contentious decision + rationale. Saves dozens of repeat explanations.

### Tool 8: Decision Architecture
- **The false choice:** Slow + broad input (consensus) vs. Fast + minimal input (unilateral). You can be both fast and high-quality with the right architecture.
- **Process > IQ:** Lovallo & Sibony's research — great analysis + bad process = wasted effort. Mediocre analysis + rigorous process = consistent wins.
- **The 2×2 framework:**

| | Irreversible | Reversible |
|---|---|---|
| **High Impact** | Invest heavily. Slow & deliberate. (Pricing, Vision, Sunset) | Move fast. Learn fast. (Roadmap, OKRs, Strategy) |
| **Low Impact** | Use proven best practice. (Early infra, API design) | Delegate or decide in a minute. (Bug triage, minor scope) |

> Most PMs over-invest in bottom-right (low impact, reversible) and under-invest in bottom-left (low impact, irreversible — technical decisions that quietly constrain future options).

- **Three circles (not RACI):**
  - **Inclusion (3-6 people):** Debate, commit, disagree-and-commit.
  - **Alignment (6-15 people):** Input gathered; not every voice satisfied.
  - **Awareness:** Everyone touched by the call.
  - *Who sits in which circle changes per decision.*
- **After the decision:** Document (public + private journal) → Define revisit criteria (when does the door reopen?) → Communicate broadly → Learn (shadow others' decisions). A decision journal compounds over years.

---

## The Interconnected System

```
Product Strategy (foundation)
    ↓
Vision Narrative + Customer Insights (context layer)
    ↓
Roadmap (4D) → OKRs (loop) → Specs (empowering)
    ↓
Lever Dashboards (feedback)
    ↑
Decision Architecture (runs through everything)
```

**The key insight for senior leaders:** These aren't independent tools. A weak product strategy produces a misaligned roadmap, which produces unfocused OKRs, which produces specs that optimize for the wrong outcomes. The system is only as strong as its foundation.

---

## Senior Practitioner Takeaways

1. **Your leverage multiplier is your system, not your output.** Audit which of the 5 leverage types you're currently weakest on — that's your highest-ROI investment.
2. **Depth of strategy understanding is a competitive moat.** Surface-level strategy produces feature misalignment (Evernote Hello). Deep strategy produces compounding wins (Evernote iOS).
3. **The motivation gap is where most roadmaps fail.** Reframe every problem from feature-level to outcome-level before prioritizing.
4. **Product-Channel Fit and Product-Model Fit are underrated.** Most PMs can name their channel and model. Few have structurally molded their product to fit them.
5. **Decision quality is a process problem, not an IQ problem.** Invest in decision architecture — the 2×2, the three circles, the decision journal — before the next big call.
6. **OKRs are a learning loop, not a reporting mechanism.** The postmortem feeding the next cycle is where institutional product intuition compounds.