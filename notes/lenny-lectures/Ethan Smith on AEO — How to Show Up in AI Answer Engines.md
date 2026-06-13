# Deep Dive Notes: Ethan Smith on AEO — How to Show Up in AI Answer Engines
*Lenny's Podcast*

---

## 🎙️ Guest & Context
- **Ethan Smith** — CEO of Graphite (graphite.io)
- 18 years in SEO (started 2007)
- Lenny's go-to SEO expert — second appearance on the podcast
- Background: started in programmatic SEO and commerce SEO (Nextag, Shopping.com, PriceGrabber)
- Also has academic research background (important for his experimental rigor)

---

## 📊 The Big Picture: How Significant Is This Change?

### Historical Context
- **Biggest change in SEO history**: Google's Panda algorithm (and similar) — went from mass auto-generated spam pages to quality content requirements
- **Second biggest change**: The rise of AI answer engines (AEO)
- *"A lot of people are seeing this as everything is different. Nothing we've done before is going to work."* — Ethan says this is the second biggest change, not the biggest

### The Lenny Data Point
- ChatGPT is driving more traffic to Lenny's newsletter than Twitter
- This started happening around **January** — when LLM answers became more clickable (maps, shopping carousels, clickable cards)

---

## 🔤 Defining the Terms

### AEO vs. GEO
- **AEO** = Answer Engine Optimization
- **GEO** = Generative Engine Optimization
- They refer to the same thing — how to show up in LLMs as an answer
- Ethan's preference: **AEO** — "answer" is more narrowly defined than "generative" (which could include images, videos, etc.)
- Bottom line: *"They're the same thing"*

### The Core Technical Architecture
- LLM + RAG (Retrieval Augmented Generation)
- **Core model**: Trained on billions of web pages (Common Crawl), predicts next word — e.g., "What's the capital of California?" → "Sacramento"
- **RAG**: Does a search, retrieves citations, summarizes them — this is where most AEO optimization happens
- *"Most of what I'm describing is about the RAG piece, not the core model piece"*
- Influencing the core model: extremely hard, impact seen a year later, not worth pursuing for most companies

---

## 🔑 Why AEO Is Different from SEO

### The Head Is Different
**In Google**: If your blue link shows up #1, you win
**In LLMs**: Even if your URL is the #1 citation, you don't necessarily win — because the LLM is **summarizing many citations**

> *"You need to get mentioned as many times as possible."*

- The answer that appears first is usually the one mentioned most in citations
- This fundamentally changes the game — it's about **share of voice**, not just ranking

### The Tail Is Larger
- Average query length in chat: **~25 words**
- Average query length in Google: **~6 words**
- People ask follow-up questions, have conversations
- There are questions being asked in chat that have **never been searched before** on Google
- The long tail is back — but bigger than ever

### Early-Stage Companies Can Win Immediately
**In Google**: Need domain authority first → takes months/years → only viable at Series A/B or later

**In AEO**: 
- Can get mentioned by a citation **tomorrow**
- A Reddit thread, YouTube video, blog mention can show up immediately
- *"A brand new YC company launches, everyone's talking about them. They could show up in an answer tomorrow."*
- This is a fundamental democratization of the channel

---

## 📈 The Business Impact

### Webflow Case Study
- **6x conversion rate** difference between LLM traffic and Google search traffic
- LLM traffic is significantly more qualified
- Why: Users have been having a multi-turn conversation, built up intent, narrowed in on what they want
- *"You're so primed because you're having a conversation with multiple follow-ups"*

### Channel Size
- Webflow gets **8% of their signups from LLMs**
- Not the #1 channel (paid is usually #1), but now a **top channel**
- Growing rapidly — and the conversion quality is dramatically higher

### Traffic Attribution Warning
- Many LLM-driven visits don't show up as LLM referrals
- Users open a new tab → type brand name → Google → click domain
- Shows up as **branded Google search** or **direct traffic**
- *"You will falsely think that it was direct traffic"*
- Need to ask "How did you hear about us?" post-conversion to truly measure impact

---

## 🗺️ The AEO Framework: How to Win

### The Three Core Concepts

**1. LLM + RAG**
- Understand that you're optimizing for search retrieval, not training data
- The RAG piece is what's controllable and impactful

**2. Topics (Not Keywords)**
- Each landing page targets hundreds/thousands/tens of thousands of questions
- Group questions into topics
- The more follow-up questions your page answers, the better you rank
- *"If you don't answer a question, you're probably not going to show up"*

**3. Question Research**
- No truth set from ChatGPT (unlike Google's Ads API for keyword volume)
- How to find questions:
  - Take your search terms → transform into questions (ChatGPT does this well)
  - Look at competitor paid search data → transform into questions
  - Mine sales calls, customer support tickets, Reddit threads
  - *"Probably those same questions are being asked in chat"*

---

## 📋 The Step-by-Step AEO Action Plan

### Step 1: Identify Questions to Rank For
- Take your paid search data (or competitors')
- Put keywords into ChatGPT: *"Make these into questions"*
- Also mine: sales calls, customer support, Reddit, Quora

### Step 2: Set Up Answer Tracking
- Like keyword tracking but for LLMs
- Key differences from keyword tracking:
  - Same question gives **different answers each time** (weighted random sample from a distribution)
  - **Question variance**: different phrasings of same question get different answers
  - **Different surfaces**: Perplexity, Gemini, ChatGPT, Meta all give different results
- Track: **share of voice** (% of time you show up) + average rank
- 60+ answer tracking tools available (Graphite has one; pick the cheapest that does what you need)
- *"Pick the cheapest one that does what you want — just like keyword tracking"*

### Step 3: Analyze Current Citations
- Who is showing up for your target questions?
- What types of pages are appearing? (listicles, category pages, articles, tool pages)
- Build a strategy for each citation group

### Step 4: Create On-Site Landing Pages
- Match the page type that's showing up in citations
- Answer ALL follow-up questions within the page
- Cover the long tail: very specific questions about features, integrations, use cases, languages
- *"The more of the questions that I answer, the better"*

### Step 5: Off-Site Citation Optimization
Break citations into groups and have specific strategies for each:

| Citation Type | Strategy | Difficulty |
|---|---|---|
| **Affiliates** (Dot Dash/Meredith, Forbes, etc.) | Pay to be mentioned | Easy if you have money |
| **YouTube/Vimeo** | Create videos for specific high-LTV keywords | Easy — no community to reject you |
| **Reddit** | Authentic participation (see below) | Medium — community can reject |
| **Quora/Kora** | Answer questions authentically | Medium |
| **Blogs** | Get mentioned/linked | Varies |
| **Your own site** | Traditional SEO + long tail | Ongoing |

### Step 6: Run Experiments
- Take 200 questions: 100 control (don't touch), 100 test (intervene)
- Track for a couple weeks before, couple weeks after
- Compare test vs. control
- **Reproducibility is critical** — do the study multiple times
- *"Most best practices, most blog posts are not correct. Do your own experiment."*

### Step 7: Build Your Team
- **SEO team**: Handle on-site optimization and traditional SEO
- **Community/marketing generalist**: Handle Reddit, YouTube, off-site citations
- These are different skill sets — most SEO people aren't great at Reddit strategy or YouTube

---

## 🔴 The Reddit Deep Dive

### Why Reddit Matters
- Hugely cited in LLMs — probably the #1 thing clients ask about
- Reddit is trusted by both Google and ChatGPT — they've **intentionally configured** their algorithms to use it
- *"There are actual people at ChatGPT who are intentionally configuring their algorithm to use Reddit because it's trusted"*

### The Wrong Strategy (What Doesn't Work)
- Creating hundreds of fake Reddit accounts
- Auto-posting comments and self-liking to build trust scores
- *"That doesn't work very well"* — accounts get banned, comments get deleted
- Reddit's community is very good at policing this

### The Right Strategy (What Works)
> *"Make an account, say who you are, say where you work, and give a useful answer."*

- Find threads that are part of citations you want to show up in
- Be transparent about your identity and employer
- Provide genuinely useful information
- You don't need 10,000 comments — even 5 great ones can be effective
- *"The whole purpose of Reddit is to post useful, high-quality, authentic comments from real people"*

### The Webflow Example
- A couple of Webflow employees go to Reddit comments
- They say: "This is my name. This is where I work. Here's a useful piece of information."
- Simple, authentic, effective

---

## 🏢 How Strategy Changes by Company Type

### B2B SaaS
- Citations are different: Tech Radar shows up a lot for B2B
- Answers are often **not clickable** — no cards to click
- Can't measure by last-touch referral traffic alone
- Must use: answer tracking + "How did you hear about us?" surveys
- Long sales cycle: 50+ touchpoints before purchase, so brand awareness matters enormously

### Commerce/E-commerce
- Now has **shoppable cards** (similar to Google Shopping)
- Multiple sellers shown — rich snippets and schema matter
- Number of reviews matters
- **Can** measure by last-touch referral traffic
- Citations: Glamour, Cosmopolitan, beauty/lifestyle publications

### Local/Restaurants/Hotels
- Similar to commerce — clickable cards
- Citations: Eater, Yelp, TripAdvisor

### Early-Stage Companies
- **Don't do traditional SEO** — no domain authority, can't win
- **Do AEO** — specifically citation optimization and long tail
- Skip the mid-tier SEO work
- *"Just get cited and answer really specific questions"*

---

## 🔍 The Citation Landscape

### Dot Dash Meredith
- Large media conglomerate: Good Housekeeping, All Recipes, Investopedia, Glamour
- *"Probably the most successful SEO company of all time"*
- Also probably the most cited in LLMs
- Getting mentioned here = significant AEO impact

### Surface Comparison (Ethan's Research)
- ChatGPT citation overlap with Google search results: **~35%** (not that similar)
- Perplexity citation overlap with Google: **~70%** (much more similar to Google)
- Google and Bing: not that similar either
- All use similar foundational algorithms but produce very different results

### Which Surfaces to Prioritize
- ChatGPT: likely heading toward 1 billion weekly active users
- But: we don't know who will win long-term (AOL vs. Google lesson)
- Probably **3 surfaces** will matter most — optimize for those
- Don't need to optimize for all 10+

---

## 🚫 The AI-Generated Content Problem

### Ethan's Study Findings
- Used Surfer SEO's AI detector (validated: ~8% false positive rate on pre-ChatGPT content)
- Analyzed thousands of Google search results and ChatGPT citations
- **Result**: ~10-12% of content in Google search and ChatGPT citations is AI-generated
- **90% is human-generated**
- Conclusion: **Pure AI-generated content does not work**

### What Does Work
- **AI-assisted content** (human in the loop): clearly the future, works well
- **100% AI-generated with no human**: does not work

### Why Pure AI Content Will Never Work (The Logical Argument)
1. If AI content worked → everyone would do it (just like 2007 scraping)
2. If everyone does it → almost all internet content becomes AI-generated
3. If that happens → Google becomes a search engine for ChatGPT responses
4. If that happens → no reason for Google to exist → just go to ChatGPT directly
5. Google would respond by going straight to the source (like they did with shopping comparison sites in 2007)

### The Model Collapse Problem
- **Core model**: Research paper shows feeding AI derivatives into training causes hallucinations and breakdown
- **RAG piece**: Ethan's study — infinite loop of derivatives → "wisdom of the crowd" collapses
- Instead of many diverse opinions → converges on **one opinion**
- *"If you ask what's the best flavor of ice cream, it will eventually say it's only vanilla"*
- Diversity of sources is essential for LLMs to function well

### The 2007 Parallel
- Ethan was there: scraped content, 100M auto-generated search pages, worked great → then Google killed the entire category
- *"I knew immediately that it wouldn't work. I knew that because I created spam in 2007."*

---

## 💡 The Help Center Opportunity (Hidden Gem)

### Why Help Centers Are Underrated for AEO
- People in chat ask follow-up questions: "Does your product do X? What integrations do you have? What languages do you support?"
- Help centers answer exactly these questions
- Usually ignored by SEO teams — but perfect for AEO long tail

### How to Optimize Your Help Center

**1. Move from subdomain to subdirectory**
- help.yoursite.com → yoursite.com/help
- Subdomains don't work as well as subdirectories for SEO/AEO

**2. Improve internal cross-linking**
- Link from help center page to help center page
- Most help centers have poor internal linking

**3. Fill in the tail**
- You probably have help content for the head (common questions)
- The tail (very specific use cases) is probably missing
- Example: "Which meeting transcription tool integrates with Looker?" — no one had a help article for this, but it's a real question

**4. Open to the community**
- Let users ask and answer questions
- Community fills in the long tail naturally
- You might be the **only citation** for obscure questions → automatic win

---

## ⚠️ Common Misinformation About AEO

### Myth 1: Google Is Dying
- *"Every 2 years there's news articles about how Google search is going to die"*
- Before AEO: TikTok search was going to kill Google
- Before that: Instagram, Facebook, YouTube
- Reality: Google's VP of search confirmed traffic to publishers is **up slightly**, not down
- *"Google's slice of the pie stays the same. The pie gets bigger."*
- New channels add on top — they don't replace

### Myth 2: AEO Tools Are Worth Huge Prices
- Seeing people spend enormous amounts on what are essentially commodity tasks
- Answer tracking is basically keyword tracking — shouldn't cost $50,000
- *"Pick the cheapest one that does what you need"*

### Myth 3: AEO and SEO Are Completely Different
- They're not that different
- Everything that works in SEO works in AEO
- AEO adds: citation optimization, different head dynamics, larger tail
- Core technology is pretty similar
- *"Part of that is because it sounds great to say there's this new channel and I'm an expert and I have a tool to sell you"*

### Myth 4: You Should Block LLMs from Indexing Your Content
- Not your choice whether to play the game
- If you block, competitors show up instead
- What you CAN do: block training bots but allow indexing bots
- Use robots.txt: training bot = not allowed, index bot = allowed
- *"Saying you can't index my site at all doesn't make sense to me"*

---

## 📊 The Information Gain Framework

### What Makes Content Actually Good (for Humans and Algorithms)
1. **Information gain**: Did you say something nobody else said?
2. **Typicality**: Are you so typical that you look like a rewritten version of someone else's content?
3. **Original research**: Did you do your own study?
4. **Domain expertise**: Are you actually an expert?

> *"Ideally, did you do original research and do you have some domain expertise?"*

### The Landing Page Efficiency Problem
- 1 out of 20 landing pages drives ~85% of all traffic
- 19 out of 20 landing pages drive little to no traffic
- The right strategy: identify the few pages that will work, invest heavily in those
- Current reality: companies pay non-experts to rewrite each other's articles because it's cheaper

---

## 🔮 The Future of Search and AEO

### Convergence
- LLMs and search are converging
- Google: adding AI overviews, AI mode
- LLMs: adding maps, shopping carousels, clickable cards
- *"I think it'll converge on a single experience"*

### Autonomous Agents
- Future: "Plan a trip to San Francisco" → AI makes all decisions without intervention
- Knows your preferences, remembers everything, has context
- *"You could be the only citation for this and then win that tale of questions"*
- Implications for AEO: need to optimize for agent-driven decisions, not just human queries

### The Growth Curve Shape
- Unusual pattern: spike at ChatGPT launch → died down → very little interest July-January → sudden skyrocket in January
- *"The slope of the curve is unusually steep and the shape of the curve is also very unusual"*
- This is not what you typically see with a new channel

---

## ⚡ Lightning Round Highlights

| Question | Answer |
|---|---|
| **Books** | *Emotional Intelligence* (foundational psychology research); *Influence* by Robert Cialdini (persuasion frameworks for growth); *How to Measure Anything* (measuring non-obvious things — e.g., standing ovations to measure conductor quality) |
| **TV/Film** | Two categories: extreme aggression (Last Dance, Lance Armstrong docs, UFC) AND zen climbing docs (Alex Honnold, Jimmy Chin) — mirrors his work approach: intense + zen craftsmanship |
| **Favorite product** | Sony mirrorless SLR camera + Shure microphone for video calls — *"Getting a mirrorless SLR with a wide angle lens really transforms your video calls"* |
| **Life motto** | Outliers-inspired: sufficiently smart + focused intentional practice + lots of practice = mastery. *"I'm going to be the most intentional about my practice and as intense as I possibly can be"* |
| **Proudest SEO win** | Ranking MasterClass for "butter lettuce" — competing against All Recipes and Martha Stewart with much less domain authority |

---

## 🔗 Key Quotes

- *"Anything can be optimized. You just need to understand the underlying systems and the rules of the game."*
- *"You need to get mentioned as many times as possible."*
- *"Early stage companies can win. They can win quickly."*
- *"Webflow saw a 6x conversion rate difference between LLM traffic and Google search traffic."*
- *"Google's slice of the pie stays the same. The pie gets bigger."*
- *"Most best practices, most blog posts are not correct. Do your own experiment."*
- *"It's not your choice whether to play the game. You are playing the game whether you want to or not."*
- *"Pure AI-generated content does not work. AI-assisted content is clearly the future."*

---

## 📚 Resources
- **Graphite**: graphite.io
- **Ethan's blog**: graphite.io/5% (5% of landing pages drive 85% of impact)
- **LinkedIn**: Follow Ethan Smith — publishes original research studies
- **Answer tracking tools**: Graphite has a page listing 60 different options
- **Previous episode**: Ethan's first appearance — "the definitive guide on how to win at SEO"

---

*The through-line: AEO is not a revolution — it's an evolution of SEO. Everything that works in SEO still works. But the head is different (share of voice vs. rank), the tail is larger (25-word queries vs. 6-word), and early-stage companies can win immediately through citations. The fundamentals of quality, authenticity, and answering real questions remain unchanged.*