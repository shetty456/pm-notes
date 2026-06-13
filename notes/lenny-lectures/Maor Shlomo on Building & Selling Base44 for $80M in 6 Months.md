# Deep Dive Notes: Maor Shlomo on Building & Selling Base44 for $80M in 6 Months
*Lenny's Podcast*

---

## 🎙️ Guest & Context
- **Maor Shlomo** — Founder of Base44, acquired by Wix for $80M+
- Previously: CEO of Explorium for 7 years (raised $130M, enterprise data company)
- Sole founder for most of the journey
- Based in Israel — built during active wartime
- Has severe ADHD (turned into a superpower with the right systems)
- Timeline: ~6 months from zero to $80M acquisition

---

## 📊 The Stats (The "Crazy" Summary)

| Metric | Number |
|---|---|
| Time to acquisition | ~6 months |
| Acquisition price | $80M+ (plus earnout) |
| Time to first $1M ARR | ~3 weeks |
| Total users at acquisition | ~400,000 |
| Marketing budget | ~$2,000 (influencer post that didn't work) |
| Money raised | $0 (bootstrapped) |
| Initial investment | A few tens of thousands of shekels (not even USD) |
| Time solo | ~4.5 months (first hire came 1.5 months before acquisition) |
| Lines of HTML/JS written in last 3 months | 0 |
| Profit by May | ~$200K |
| Goal set on plane | $1.5M ARR by end of 2025 — hit in 4 weeks |

---

## 🏗️ What Is Base44?

### The Product
- AI app building platform — describe what you want in natural language, AI codes it
- **"Batteries included" approach**: every app comes with built-in database, integrations, user management, analytics — no third-party services or API keys needed
- Differentiated from competitors (Lovable, Bolt, Replit, v0) by being **full-stack** rather than front-end + Supabase integration
- Engineered endpoints and SDKs specifically to work well with LLMs
- Result: builds very complex, functional, real-world applications

### The Category
- Crowded: competing against very well-funded companies
- Maor's angle: opinionated, full-stack, batteries-included approach
- *"I knew I'm always getting into a very crowded category. I also knew I had a different angle."*

---

## 💡 The Origin Story: Two Real Problems

### Problem 1: Girlfriend's Website
- Girlfriend is an artist with a small business, needed a website to capture leads
- Tried existing website builders — painful drag-and-drop, mobile issues, data management headaches
- *"I know models can write the code to do exactly what I'm trying to do right now"*
- Realized: models have the capability, they just don't have the right infrastructure

### Problem 2: The Scouts Organization
- Volunteering to help a large Israeli Scouts organization with software needs
- Tens of thousands of people, many software needs, no internal developers
- Agencies quoting them $1M for things that could be built easily
- Loved tools like Retool but they still required JavaScript knowledge
- *"I know LLMs can write that. We can really empower the organization to build all the different tools they want."*

### The Key Insight
> *"Build something that you would want to use or that you'll actually use."*

- Maor actually built the product for himself, his girlfriend, the scouts, and friends
- Not theoretical — solving real, immediate problems he personally experienced
- *"I was building the product and at the same time developing those two products for my girlfriend, for the scouts, and later on also for friends and family"*

---

## 🧠 The Mindset Shift: Not Trying to Build the Biggest Thing

### The Anti-Empire Approach
> *"Base44, for the first time in my life, was not trying to build the biggest thing ever."*

- Previous company (Explorium): obsessed with raising the most money in the least time
- Base44: *"I just want to go back to do what I really love, which is just building a product"*
- The goal on the plane: $1.5M ARR by end of 2025 → hit in 4 weeks
- *"It's the first time of saying, 'Let's not try and build the biggest thing. Let's just do something I really like.'"*

### Why This Mindset Works
- Easier to work very hard when doing something you love
- Less pressure → more creative thinking
- *"Some of the best stuff comes from not putting a bunch of pressure on yourself"*
- Once success came and he saw true positive impact on people → then decided to play in the big league

### The Bootstrapping Advantage
- **Default alive**: waking up profitable is a completely different mental state
- Less stressful than managing investor expectations even with great investors
- *"The weight of raising so much fund, even if your investors are great — being bootstrapped, no other money except yours in the business, I feel I can keep the energies up"*
- Better financial outcome in many cases: no dilution

---

## 👤 Solo Founder Lessons

### When Solo Founding Works (and When It Doesn't)
- **Works for**: products with viral potential, targeting the masses, where distribution doesn't require a sales team
- **Doesn't work for**: B2B enterprise companies that need salespeople, heavy marketing spend, credibility of a funded team
- *"If you're building something that has the potential to be viral or to target the masses, everything is better doing solo bootstrap"*

### The Real Challenges of Being Solo

**1. No one to share the burden**
- The brother's wedding story: friend calls saying someone hacked Base44 (turned out to be a Node.js package called "cryptography" — not actual crypto)
- Spent 2 terrifying hours at the wedding fixing it
- *"You are not able to share it with anyone. Share the burden even or the stress or put anyone on top of it."*
- With co-founders: even if one messes up, you have someone to run jokes with and just be there

**2. Brutal prioritization required**
- Daily ceremony: "What do I need to work on today?" vs. "What do I want to work on today?"
- Want to work on: always coding, improving the product
- Need to work on: often marketing, even when product is the bottleneck
- *"This context switching is hard"*

**3. No DevOps team, no on-call**
- Scaling databases, managing infrastructure — had to learn on the fly
- *"I had a few accidents that really, I'm joking about that, but shorten my life a bit with just the stress"*

**4. Time is the killer**
- *"Time is going to be the thing that kills your business if you're not managing it right"*
- Spent significant time optimizing setup, automating everything possible

### The AI Advantage for Solo Founders
> *"Even if you're solo, you are literally managing teams of AIs writing code."*

- Hasn't written a single line of HTML or JavaScript in 3 months
- *"It's not necessarily the team size, nor the funding, that will be able to win you a category"*
- 10X engineers become 100X engineers by managing LLMs effectively

---

## 🛠️ Productivity Stack for Solo Founders

### Managing ADHD and Deep Work
- **RescueTime** (or similar): blocks access to Twitter, LinkedIn during work hours
- Challenge: wanted to check engagement on build-in-public posts constantly
- Solution: strict blocks during deep work periods

### The Content Creation App (Built on Base44)
**The problem**: ChatGPT would spit out content that was too salesy, not his tone, required constant back-and-forth

**The solution**: Built a custom app on Base44 that:
1. Takes high-level content ideas written at start of week
2. Breaks them down into LinkedIn posts in his tone of voice
3. Saves previous posts he liked to learn his style
4. Converts LinkedIn posts to Twitter threads
5. Generates images for posts
6. Handles the entire workflow in one place

**How to build something similar:**
- Prompt: *"Hey, I want to build my own content generation AI-powered tool. Here's my process currently..."*
- Start vague — let it build the skeleton
- Iterate from there
- Key feature: **adaptive software** — as your process changes, update with 2 prompts

### The Broader Principle
> *"Vibe code your way into productivity tools that really fit what you want to do."*

- No one else would follow your exact process
- Custom tools for custom workflows = massive efficiency gains
- *"Adaptive software"* — software that evolves as your process evolves

---

## 📈 Growth: The Full Playbook

### Phase 1: First 3-10 Users (Friends & Family)
**The approach:**
- Started with 3 really close friends (2 were unemployed at the time — captive audience)
- Sat with them every other day around a table
- They'd try to build something → it would break → Maor would look at logs → fix it → push to production
- Essentially building it for them in real-time

**The key metric:**
> *"I'm not going to try and scale anything before I know that users enjoy it. The best metric to seeing them enjoying it is that they're starting to share it with someone."*

- Didn't invest in marketing until he saw organic sharing happen
- First sign of product-market fit: strangers (people he didn't know) started showing up

### Phase 2: First 50 Users (Product Hunt Launch #1)
- **Result**: ~15 new users — a "failed" launch
- **Lesson**: Don't treat launches as make-or-break. They're tools to get to your next 30-50 users.
- First paying customer: *"This was an insane feeling. Why would anyone pay for my product without meeting me?"*
- That customer churned in a few hours — product wasn't good enough yet
- But it validated the model

**What didn't work:**
- Influencer post (~$2,000 — brought nothing)
- Paid advertising (tried, didn't work)
- Cross-posting to Twitter (low ROI vs. LinkedIn)

### Phase 3: Build in Public (LinkedIn)
**The trigger**: A founder friend said, *"You're building it on your own and taking a very different approach than the usual VC-funded way. Why don't you share content about that?"*

**Why it worked for Base44:**
- Audience = builders → perfect alignment with build-in-public content
- *"If I was building a product for attorneys, this probably wouldn't have made a lot of sense"*
- Honest about the good, the bad, and the ugly — not polished metrics
- Shared everything: deep technical stack details AND feelings AND growth numbers
- People like charts and numbers — they get attached to the journey

**The process:**
1. Write high-level content ideas on paper at start of week
2. Run through the custom Base44 content app
3. Approve, adjust, publish
4. Ask friends beforehand: "Is this interesting? Do you see value?"

**Key insight:**
> *"Once you see something work, just double, triple down on that. Don't pray and spray."*

- LinkedIn was the channel → went all-in on LinkedIn
- Twitter was a waste of time for him (despite trying)
- Pick one channel, nail it

### Phase 4: The Credits Incentive (Viral Loop)
**The tactic**: If users share what they're building (the process or the app itself) on social media, they get extra credits to build more

**How it worked early on:**
- Users sent email with link to their post
- Maor manually gave credits (later automated)
- A friend asked: *"Dude, how much are you paying those people to write posts about Base44?"* — he wasn't paying anything

**The result:**
- Massive organic content creation
- Community members writing posts about Base44 unprompted
- *"People really like sharing what they're building on top of Base44"*

### Phase 5: The Hackathon (4Good)
**The concept**: Open hackathon for building apps that do good in the world

**The numbers:**
- Started with $5K prize (his own profits)
- Ended up with 3,000 teams — largest 4Good hackathon ever
- Sponsors: Amazon, Google, MongoDB, Deloitte (came to them after it went viral)
- Partners opened offices globally for teams to work from

**Why it worked:**
- Aligned with the community's values
- Generated massive organic content
- Showed the real-world impact of vibe coding (nonprofits, education, neglected domains)
- Example: person built a game to help her grandmother with Alzheimer's memorize family members

### Phase 6: Product Hunt Launch #2 (The Algorithm Incident)
- Community was so excited they all voted simultaneously
- Product Hunt algorithm thought it was bots → Base44 didn't appear in top 10 at noon
- Community member contacted Product Hunt support → they investigated → fixed it
- Result: Won #1 Product of the Day AND #1 Product of the Week
- Delta from second place: 500 upvotes

### The Velocity Growth Engine
> *"Velocity eventually is a growth engine."*

- Shipping features every other day → people get attached
- *"I remember people commenting on my posts saying, 'You know what? It's moving so fast, I have to try it now.'"*
- Every feature = a mini launch
- *"Most of my thoughts when running Base44 is how do we increase velocity? It's going to solve every product problem we have or most of them."*

---

## 🔧 Tech Stack

### Infrastructure
- **Render.com**: Everything infrastructure-related — platform, website, user applications
  - *"My previous company had large teams of DevOps building processes for us to push to production. Render.com is like... how is it called? Just a cloud."*
  - Easy to manage, easy to scale web apps
  - Handles the complex ecosystem: user applications isolated from platform isolated from website

### Database
- **MongoDB**: Ideal for vibe coding because schemas change constantly
  - LLMs don't always understand what users are trying to send → keep changing data schema
  - Flexible schema = right choice for this use case

### Frontend
- **JSX (not TypeScript)**: Controversial take
  - *"Don't use TypeScript, use plain JavaScript, use JSX. It's easier for models to write code this way."*
  - Models write JSX better → haven't written a single line of HTML/JS in 3 months

### Backend
- **Python**: Despite performance concerns, held up under heavy traffic and DDoS attempts
  - *"If you're building it the right way, Python is just a very great language to do that"*

### AI/LLM Architecture
- **Multi-model routing**: Different models for different tasks
  - **Claude 4**: Initial prompt, writing app from scratch, UI/design work
  - **Gemini**: Complex problems, algorithms, when Claude gets stuck in bug loops
  - **Flash / o4-mini (OpenAI)**: Smaller, faster models for implementing/patching code
- **The pipeline**: Analyze user prompt → route to right LLM → heavy model creates high-level solution → smaller model implements the patch

### The LLM Optimization Principle
> *"Try to get to a place where the LLM can implement the feature entirely without you writing code, but that the LLM writes as little code as possible."*

- Less code = fewer places to make mistakes
- Less code = less context needed for follow-up prompts
- Built high-level, opinionated infrastructure that handles CRUD, authentication, database automatically
- When LLM implements a new feature, it writes very little code because infrastructure handles the rest

### Repository Structure
- **Monorepo**: Keep frontend and backend in same repository
  - Easier to give AI context of both simultaneously
  - Separation of frontend/backend makes AI context management harder

### Coding Tools
- **Cursor**: Primary coding tool
- **Base44**: Frontend work and all internal business apps

---

## 🎯 Activation & Retention Insights

### The Aha Moment Lesson
**What he tried first**: Before generating code, show user flows (like a PRD) to confirm understanding → then generate app

**Why he ditched it**: 
- Conversion to aha moment was lower
- The key aha moment in vibe coding: *"Holy shit, it actually understood me"* — seeing the app appear
- Adding a middle stage made it less surprising, less magical

**The lesson:**
> *"Get your users as fast as possible to the aha moment. Sometimes there's a price to that — make sure it's not too big. But the attention span in B2C is so low."*

- Get to aha moment in 1-3 minutes
- Then ramp up features afterward

### The Physical Presence Principle
- Even at 20K, 50K, 100K users: still brought 20-30 people to a room every other week
- Almost like a focus group / small hackathon
- *"It was so much easier than any other thing"*
- Same approach as when he had 3 users — just scaled

### On MVPs
> *"I don't believe in MVPs. If you're building something that people will not be able to use or is not good enough, especially these days where it's so much easier to build software, the attention span for people to actually try out new software products is getting shorter and shorter."*

- Pick people who owe you something or have a reason to use it when it's bad
- Be there physically
- Build for them, not for a hypothetical user

---

## 🤝 The Acquisition Story

### How It Started
- Wix reached out — community members were posting "Wix should buy Base44"
- Natural fit: Israeli ecosystem + same customer base (people building websites)
- CEO Avishai's first words: *"Everybody's been saying that we should buy you. Maybe it's at least worth the talk and we're here to help."*

### The Relationship Building
- Multiple dinners eating steaks, just chatting about how to grow Base44
- Not immediately on an acquisition path — started as advice/mentorship
- *"I remember meeting him for a few nights of just eating some steaks and just chatting about how to grow Base44 and just literally just getting there to get advice"*

### Key Factors in the Deal

**1. Chemistry is crucial**
- Especially when buying a small team/solo founder
- *"It's going to be a lot of fun working together"* — this was actually on the table as a key reason
- Being a person people want to work with for the next few years is critical

**2. Negotiate from strength**
> *"The best position to negotiate such a deal is to be also very fine with the other path of not getting acquired."*

- Like dating: don't show too much interest early
- *"If it works out, it's going to be amazing. And if not, it's going to be amazing. It's going to be either way fun."*

**3. The earnout structure**
- $80M initial payment (published)
- Significant earnout component based on future performance
- *"A lot of my compensation and a lot of the upside is actually based on that other than the 80 mil"*
- Creates alignment: Maor has personal financial interest in making it as big as possible
- *"Better than just selling the business and wanting to disappear"*

**4. Why Wix specifically**
- Same DNA, same customer base
- Israeli ecosystem connection
- Great management team chemistry
- Platform to go global and win the category
- *"The best chances to do that is to partner up with Wix"*

### The Iran War Signing Story
- Agreed to sign Thursday night at 2 AM
- Lawyers said they needed to fix wording — decided to sleep and sign in the morning
- 4 AM: Iran-Israel war broke out
- *"I can't believe this is happening. It's such an insane turn of events."*
- Woke up, signed the papers anyway
- *"Definitely the least boring month that I had in my life"*

---

## 📋 The First Hire

### Who and When
- First person: 1.5 months before acquisition
- Name: Joav
- Role: Technical product person / jack of all trades

### What He Could Do
- Go into LLM logs and look at mistakes
- Write Python scripts to analyze things
- Implement analytics into the product
- Take on growth when needed (despite no prior growth experience)

### The Lesson
> *"You want to bring in someone that can do many different things."*

- Not a specialist — a generalist who can wear many hats
- Technical enough to understand the product deeply
- Willing to take on new challenges outside their comfort zone

---

## 🏷️ Why "Base44"?

The most honest naming story:
- Wanted "Base" in the name (the base where people start building software)
- Base.com wasn't available, couldn't afford a fancy domain
- Domain provider showed available options with numbers
- Birthday is February 2nd → Base22 was available
- *"Let's double it"* → Base44
- *"I like the sound of it. It's almost like Base64"*
- Base64 encodes data from one type to another → Base44 encodes natural language into software
- *"There's no real very sophisticated reason behind it"*

---

## 💡 Key Lessons & Advice

### On Finding Ideas
1. **Solve your own problem** — build something you actually use
2. **Solve someone else's real problem** — not theoretical, immediate and painful
3. **Enjoy what you're building** — energy is everything in a marathon (or sprint)

### On Solo Founding
1. Not right for every use case — especially B2B enterprise
2. Best for viral/consumer products where distribution doesn't require a sales team
3. Bootstrapping = less stress, better financial outcome if you can reach escape velocity
4. Brutal prioritization is non-negotiable
5. Automate everything possible — time is the killer

### On Growth
1. Don't invest in marketing until you see organic sharing
2. Failed launches are fine — they're tools to get to your next users
3. Pick one channel and go all-in (don't spray and pray)
4. Build in public works best when your audience = your users
5. Be honest — good, bad, and ugly — not polished metrics
6. Incentivize sharing with product credits
7. Velocity is a growth engine — ship constantly, make every feature a mini launch
8. Physical presence with users beats any other feedback method

### On Prioritization
> *"Make sure that at least 50% of your time you work on the parts of you that you really like and that you're really good at."*

- Stay in your zone of genius
- Everything else: delegate, automate, or deprioritize
- Showing up every day is the key — you can only do that if you love what you're doing

### On Competing Against Well-Funded Companies
> *"If you have an interesting angle and you're able to move fast, money and funding is not necessarily the factor to win a category."*

- This will become even more true as LLMs get better
- 10X engineers → 100X engineers by managing AI effectively
- Different angle + speed > funding

---

## ⚡ Key Quotes

- *"I'm not going to try and scale anything before I know that users enjoy it."*
- *"Velocity eventually is a growth engine."*
- *"Even if you're solo, you are literally managing teams of AIs writing code."*
- *"The best position to negotiate such a deal is to be also very fine with the other path."*
- *"Build something that you would want to use or that you'll actually use."*
- *"Time is going to be the thing that kills your business if you're not managing it right."*
- *"Get your users as fast as possible to the aha moment."*
- *"It's the best time to build. Just do something that you like."*

---

## 📚 Tools & Resources Mentioned
- **Base44.com** — the product
- **Render.com** — infrastructure/cloud hosting
- **MongoDB** — database
- **Cursor** — AI coding tool
- **RescueTime** — focus/deep work management
- **Claude 4** — primary LLM for UI/initial generation
- **Gemini** — complex problems/algorithms
- **Flash / o4-mini** — fast implementation models
- **WhatsApp** — early community management (later Discord, Reddit)
- **LinkedIn** — primary growth channel

---

*The through-line: the best companies often come from founders who stop trying to build the biggest thing and just start building something they love. The ambition comes later — after the product proves itself.*