
---

# Comprehensive Deep Dive: Boris Churnney × Lenny's Podcast

---

## 🧬 Boris's Background & Career Arc

### Early Life & Origin Story
- Born in **Odessa, Ukraine**, emigrated to the US in **1988**
- **Self-taught engineer** — studied **economics** in school, not CS
- Started programming in **middle school** — first use case: programming answers into a **TI-83+ graphing calculator** to cheat on math tests
- Evolved that into writing an **algebra solver**, then distributed it to classmates via cable — until the teacher caught them
- Core philosophy from day one: *"Programming is a tool to build things — not an end in itself"*

### Career Before Anthropic
- Senior engineer at **Meta/Instagram** — one of the most productive engineers there; responsible for **code quality across Facebook, Instagram, WhatsApp**
- Spent time in **rural Japan** before joining Anthropic — biked to farmers markets, traded miso and pickles with neighbors, learned to think in "longtime skills" (white miso = 3 months, red miso = 2–4 years)
- Reading sci-fi + living slowly in Japan made him think about long time scales → felt compelled to contribute to AI going well → joined Anthropic

### The Cursor Detour
- Left Anthropic briefly to join **Cursor** — attracted by the team quality and product vision
- Realized within **2 weeks** what he missed: **Anthropic's mission**
- Key insight: *"Whatever the work might be, no matter how exciting, it's not a substitute for mission-driven work"*
- Returned to Anthropic — fastest job change he's ever made

---

## 🏗️ Claude Code: Full Origin & Build Story

### The Anthropic Labs Team
- Boris joined a team called **Anthropic Labs** — also where **Ben Man** and **Mike Krieger** worked
- Team built: Claude Code, MCP (Model Context Protocol), the Desktop App
- The team's work followed a deliberate progression: **coding → tool use → computer use**
- This wasn't accidental — it mirrors how Anthropic believes safe, capable AI should develop

### Month-by-Month Genesis
- **Month 1**: Pure prototyping — built "weird prototypes," most never shipped, just mapping the boundaries of what the model could do
- **Month 2**: Detoured into **post-training research** to understand the model layer — *"If you're working in AI, you have to understand the model to do good work"*
- **Month 3+**: Started building what became Claude Code

### The "What Music Am I Listening To?" Moment
- Boris gave the model a **bash tool** with no specific instructions
- Asked: *"What music am I listening to?"*
- The model **figured out on its own** how to use the bash tool to answer the question
- This was the spark — the model could reason about which tools to use without being told
- Internal announcement post got **2 likes** — almost no one understood what it was

### Why Terminal?
- Purely pragmatic: it was just Boris, terminal was the fastest way to build
- Stayed terminal because: the model was improving so fast that no GUI could keep pace
- *"The terminal was honestly just the only idea I had"* — and it worked
- Product lesson: **under-resourcing forces creative constraints** that lead to better decisions

### Growth Milestones
| Date | Event |
|---|---|
| Internal launch | DAU chart "went vertical pretty immediately" |
| February (Year 1) | External release — **not immediately a hit** |
| May (Year 1) | Boris's prediction at Code with Claude conference: "by end of year you might not need an IDE" — room audibly gasped |
| Opus 4 release | First major inflection point — growth went exponential |
| November (Year 1) | Boris personally crosses **100% AI-written code**; Claude Code hits mainstream |
| Past month | DAUs **doubled** |

---

## 💻 Boris's Workflow: Granular Detail

### Daily Coding Reality
- Ships **10–20–30 PRs every single day**
- **100% written by Claude Code** — has not edited a single line by hand since November
- Always has **~5 agents running simultaneously**
- Checks agents first thing in the morning from his phone (iOS app)
- Roughly ⅓ terminal / ⅓ desktop app / ⅓ iOS app

### How He Uses It for Product Management
- Points Claude at **internal Slack feedback channels** — Claude reads, synthesizes, opens PRs
- Single spreadsheet for whole team: Claude messages every engineer on Slack every Monday if they haven't filled out their weekly status
- All project management automated via Cowork
- Responds to Twitter bug reports by having Claude fix them **within minutes**

### Code Review Process
- Claude Code reviews **100% of PRs** at Anthropic automatically
- Human review layer still exists on top
- Exception: pure prototype code that won't run in production

### The Memory Leak Story (Mindset Trap)
- Boris was debugging a memory leak the traditional way: heap snapshots, special debugger, manual trace analysis
- A newer engineer simply asked Claude: *"It seems like there's a leak, can you figure it out?"*
- Claude took the heap snapshot, **wrote its own analysis tool on the fly** (just-in-time program), found the issue, and opened a PR — faster than Boris
- Lesson: experienced engineers get stuck in old mental models; new grads are often **more AI-native** because they have no habits to unlearn

---

## 🧠 Product Philosophy: Deep Expansion

### Latent Demand — Full Framework

**Traditional Definition:**
> Build a better version of what people are already hacking together

**Examples Boris gives:**
- **Facebook Marketplace**: 40% of Facebook group posts were buying/selling — people abusing groups for commerce → built Marketplace
- **Facebook Dating**: 60% of profile views were opposite-gender non-friends → people "creeping" → built Dating
- **Claude Cowork**: People using a developer terminal tool (Claude Code) for:
  - Growing tomato plants
  - Analyzing their genome
  - Recovering corrupted wedding photos
  - Reading MRI scans
  - SQL analysis (data scientist Brendan downloaded Node.js just to use it)

**Modern Extension — Model-Side Latent Demand:**
> *"Look at what the model is trying to do — and make that easier"*

- Old approach: put the model in a box, define exactly what it does, build scaffolding around it
- Claude Code approach: **the product IS the model** — minimal scaffolding, give it tools, let it decide
- Research term: being **"on distribution"** — don't constrain the model away from what it naturally wants to do
- This is why Claude Code works: it exposes the model rather than constraining it

### The Underfunding Principle
- Fewer engineers on a project → **forced to use Claude more aggressively**
- Intrinsic motivation (wanting to ship a good idea) + Claude = compounding productivity
- Boris's advice to CTOs:
  1. **Don't cost-cut early** — give engineers unlimited tokens first
  2. Let them find what works
  3. **Then optimize** (maybe Haiku instead of Opus, etc.)
  4. Token cost for an individual engineer is still low relative to salary
- Some Anthropic engineers spending **$100K+/month in tokens** — this is becoming a **hiring perk** at some companies

### Build for the Model 6 Months From Now
- Claude Code had poor product-market fit for its first several months — intentionally
- The bet: when the better model arrives, the product is already ready
- Boris's trajectory: Claude wrote ~20% of his code at launch, ~30% by May, 100% by November
- Advice: *"It'll be uncomfortable because PMF won't be good for 6 months — but when that model comes out, you'll hit the ground running"*
- What to bet on improving:
  - **Tool use and computer interaction** — will keep getting better
  - **Long autonomous runs** — Sonnet 3.5 ran ~15–30 seconds before going off-rails; Opus 4.6 runs **10–30 minutes unattended**, sometimes hours or days; some runs lasted **many weeks**

### The Bitter Lesson (Rich Sutton)
- Blog post from ~10 years ago: *"The more general model will always outperform the more specific model"*
- Corollaries Boris applies:
  - Don't fine-tune when you can use the general model
  - Don't build rigid workflows — scaffolding adds ~10–20% performance but gets wiped out by the next model
  - *"It's almost better to just wait for the next model"*
  - Always bet on the general model if you have flexibility

---

## 🔒 Safety: Three-Layer Architecture (Expanded)

### Layer 1: Mechanistic Interpretability
- Field **invented by Chris Olah** at Anthropic
- Analogy: studying animal neurons to understand the brain — model neurons behave similarly in many ways
- What they can now do:
  - Map specific neurons to specific concepts
  - Understand how concepts are encoded
  - Observe how the model **plans ahead** (evidence it's doing more than next-token prediction)
  - Detect **deception-related neuron activation**
- **Superposition**: as models get bigger, one neuron maps to a dozen concepts; activated together with other neurons, they represent more sophisticated concepts
- Much of this research is **open-sourced** to encourage other labs to do safety work

### Layer 2: Evals (Controlled Environment)
- Model in a "petri dish" — synthetic situations
- Test: is it aligned? Is it doing the right thing?
- Can look good here but fail in the real world

### Layer 3: Real-World Behavior
- The most important layer as models get more sophisticated
- Claude Code used **internally for 4–5 months** before external release — first major agent Anthropic had released
- Cowork: tested internally, then with select customers, then released as **"research preview"**
- "Race to the top": open-sourced a **sandbox** that works with any agent, not just Claude Code — to make safety infrastructure accessible to all

---

## 📊 The Productivity Numbers in Context

### What 200% Productivity Increase Actually Means
- Anthropic ~**4x'd engineering headcount** while productivity per engineer rose **200%**
- Boris's frame of reference: at Meta, with **hundreds of engineers** working for **a full year** on code quality, you'd see **a few percentage points** of productivity gain
- Seeing **hundreds of percentage points** is "absolutely insane" by any historical standard
- Measured in pull requests — a concrete, objective metric

### The Normalization Problem
> *"What's also insane is just how normalized this has all been"*

- These numbers are unprecedented in the history of software development
- Easy to become desensitized — Boris has to actively remind himself *"this is crazy"*
- The danger: getting stuck in old mental models because the pace of change is so fast

---

## 👥 The Future of Tech Roles: Detailed Analysis

### What's Already Happening on the Claude Code Team
- **Everyone codes**: PM, EM, designer, finance person, data scientist
- ~**50% overlap** in what different roles actually do day-to-day
- People have specialties but the boundaries are blurring
- Example: Boris codes more; the PM does more coordination/forecasting/stakeholder alignment

### Boris's Prediction for End of Year
- *"Software engineer"* title starts disappearing
- Replaced by **"builder"**
- Or: everyone becomes a product manager who also codes
- *"It's going to be painful for a lot of people"*

### Who Will Be Most Rewarded
Not just AI-native people, but those who are:
1. **Curious generalists** who cross disciplines
2. **Product + infrastructure** hybrids
3. **Engineering + design sense** hybrids
4. **Engineering + business acumen** hybrids
5. **Engineering + user empathy** hybrids

### The Designer Anomaly
- Boris's informal survey: 70% of engineers and PMs enjoy their jobs more with AI; only **55% of designers** do, with **20% enjoying it less**
- At Anthropic: designers largely code already, so they've benefited (can unblock themselves without asking engineers)
- Boris's hypothesis: designers who don't code may feel more displaced; those who do code feel liberated

---

## 🖨️ The Printing Press Analogy: Full Expansion

### Historical Facts Boris Cites
- Mid-1400s Europe: **sub-1% literacy** — scribes employed by lords and kings who were often illiterate themselves
- 50 years post-Gutenberg: more printed material created than in the **prior 1,000 years**
- Cost of printing: dropped **~100x** over 50 years
- Literacy: rose to **~70% globally** over the next 200 years (took time because education systems needed to develop)

### The Scribe Interview
- A historical document: interview with a scribe in the 1400s about the printing press
- The scribe was **excited** — the part they hated (copying between books) was being automated
- The parts they loved (illustration, bookbinding) were freed up
- Boris's parallel: the tedious parts of coding (git, dependencies, tooling minutia) are gone; the good parts (systems thinking, user research, big ideas) remain

### What This Unlocks
- The Renaissance required **knowledge spreading** — only possible because of the printing press
- *"We couldn't be talking today if the printing press hadn't been invented"*
- Boris imagines a world where **everyone can program** — and what that unlocks is simply unimaginable, just as a 1400s scribe couldn't have predicted the Renaissance

---

## ⚡ Pro Tips: Full Breakdown

### For Using Claude Code
1. **Most capable model always** (Opus 4.6 + max effort)
   - Less capable models take more tokens to do the same task due to more corrections
   - Often actually **cheaper** to use the best model
2. **Plan Mode** (Shift+Tab twice in terminal; button in desktop/web)
   - Injects one sentence: *"Please don't write any code yet"*
   - Go back and forth until the plan is right
   - Then auto-accept edits → near-perfect one-shot execution with Opus 4.6
3. **Try all interfaces** — terminal, desktop app, iOS/Android, Slack, GitHub
   - Same agent everywhere
   - Find what fits your workflow
4. **Multi-Claude / parallel sessions** — run as many as you want simultaneously

### For Building AI Products
1. **Don't box the model in** — give tools + goal, let it figure out the path
2. **The Bitter Lesson** — bet on the general model, avoid over-engineering scaffolding
3. **Build for the model 6 months from now** — accept early PMF pain
4. **Give engineers unlimited tokens early** — optimize later
5. **Release early** — you can't know what the model will do in the wild until it's in the wild
6. **Latent demand** — watch what people hack your product to do; that's your roadmap

---

## 📚 Book & Media Recommendations

| Title | Why Boris Recommends It |
|---|---|
| *Functional Programming in Scala* | Best technical book he's read; teaches elegance of type systems and functional thinking |
| *Accelerando* by Charles Stross | Captures the pace of this moment — starts at liftoff, ends with lobster consciousness orbiting Jupiter, spans decades |
| *Wandering Earth* by Liu Cixin | Short story collection; Chinese sci-fi has a fundamentally different perspective than Western sci-fi |
| *Three Body Problem* (Netflix) | Great rendition of the book series |
| *Acquired* Podcast | Business history brought alive; start with the Nintendo episode |
| *A Fire Upon the Deep* by Vernor Vinge | Lenny's rec — Boris has read it; highly relevant to AGI thinking |

---

## 🍜 Post-AGI Plan: The Miso Arc

- Boris lived in **rural Japan** before Anthropic — only engineer and only English speaker in the town
- Social life organized around **trading fermented foods** — miso, pickles
- Got "decently good" at making miso
- Miso teaches **long-time-scale thinking**: white miso = minimum 3 months; red miso = 2–4 years
- Complete opposite of SF/engineering pace — seasons, farmers markets, patience
- Post-AGI plan: *"I'd probably be making miso"*
- The irony: the person building the fastest-moving technology in history finds peace in the slowest fermentation processes

---

*The through-line of the entire conversation: we are simultaneously at the most transformative moment in the history of software — and still only 1% done.*