# Deep Dive Notes: Jason Lemkin on AI Agents Replacing Sales Teams
*Lenny's Podcast*

---

## 🎙️ Guest & Context
- **Jason Lemkin** — Founder and CEO of SaaStr, the world's largest community for B2B founders
- SaaStr: 10,000-person annual conference, 8-figure revenue, ~100 sponsors, ~400K people in database
- Has invested ~$200M into founders from the community (~10x returns)
- Two-time founder (sold previous startup to Adobe)
- Currently running SaaStr with **1.2 humans and 20 AI agents** — same output as previous team of 8-10 humans

---

## 🤖 The SaaStr Sales Team Transformation

### What Happened
- Had 2-3 SDRs and up to 5 AEs (8-9 people total in go-to-market)
- At their 10,000-person annual event, 2 salespeople quit on-site
- Turned to Amelia (Chief AI Officer) and declared: *"We're done with hiring humans in sales. We're done."*
- The catalyst: a general AI agent (Deli) had already closed a $70K sponsorship on its own — without being trained for sales

### Current State
- **1.2 humans**: 1 full-time AE + Amelia spending 20% of her time managing/orchestrating agents
- **20 AI agents**: handling outbound, inbound qualification, reactivation, support, and more
- **Result**: Same business performance as with 8-10 humans
- Desks in the SaaStr office are now labeled with agent names: Reply (Replit), Quali (Qualified), Arty (Artisan), etc.

### What They Sell (Context for the Agents)
- **Sponsorships**: Average $70-80K each (higher-touch sales cycle)
- **Tickets**: $200 to $2,000 (higher volume, more self-serve)
- Different agents for each product type and different agents for lapsed customers

---

## 📊 The State of Go-to-Market in the AI Age

### The Bifurcated Market
> *"It's wildly bifurcated. You've got the low end, which is all about price increases and forcing things onto the base. And at the high end, we have something we've never seen since 2020 — everyone in the market at once."*

**Traditional B2B SaaS (struggling):**
- Growth has decelerated
- Demand has evaporated
- Plays still work, but ROI is insufficient
- Not enough budget for old-school SaaS from 2021

**AI-native companies (exploding):**
- So much demand they're picking which prospects to respond to
- Bolt closed a 7-figure deal stolen from Lovable because Lovable didn't call the prospect back
- 11 Labs: 50% of sales now through enterprise
- Replit: went to $10M+ with no traditional sales team, now adding salespeople

### The "Everyone in Market" Phenomenon
- Traditional metric: 3-5% of prospects in market in any given year
- Many AI categories: **north of 50% in market**
- This changes everything about how you run GTM
- *"It's not one law firm looking at Harvey. It's everyone."*
- This window will close — people will get exhausted from implementing so many agents

### The Plays vs. Playbooks Distinction
> *"All the plays work. It's the playbooks that are kind of broken in the age of AI."*

- Outbound still works
- Webinars still work
- Podcasts still work
- Events still work
- The old playbooks (specific sequences, cadences, processes) are outdated

---

## 💀 The Death of Certain Sales Roles

### What's Already Gone or Going
**Email-based SDRs (cadence-based outbound):**
> *"The classic SDR junior kid that is hired out of college to send emails — we don't need them. They should be mostly extinct within 12 months."*

**BDRs/Inbound Qualifiers:**
> *"Folks that qualify leads coming in — the 'contact me' that we see — we have no need for them today. They should be extinct next year."*

- Being qualified by a human doesn't feel good for customers
- AI can qualify 24/7 without the customer knowing they're being qualified
- Just sets up the meeting with the salesperson

### What's Safer (For Now)
- **AEs**: 70% of jobs safe by end of next year, declining to 40-50% after
- **Field sales/door-to-door**: AI doesn't know how to replace this yet
- **Enterprise reps**: Companies like OpenAI can't hire enough of them
- **Senior GTM leadership**: Still needed to manage humans or orchestrate agents

### The Mediocre Middle Is Most at Risk
> *"AI is replacing the jobs people don't want to do today and it is displacing the midpack and the mediocre."*

- The best humans get superpowers from AI
- The mediocre become more mediocre
- *"Being a people person is not enough anymore"*

---

## 🛠️ The Agent Stack: What SaaStr Built and How

### Agent 1: Deli (Digital Jason — General Agent)
- Built on Deli (digital clone platform)
- Ingested 12 years of content
- Started as a general assistant, organically became support + sales
- Closed a $70K sponsorship on its own (the proof of concept)
- Lesson: Start with support — it's the lowest-hanging fruit

### Agent 2: Artisan (Outbound SDR)
- Chose Artisan because they were a sponsor and offered the most help
- Sent ~60,000 emails with high open rates
- Key selection criterion: **who will help you train it, not who has the best features**

### Agent 3: Qualified (Inbound Qualification)
- Founded by ex-CMO of Salesforce
- Immediately worked: someone at 11 PM on Saturday wanted to sponsor → they sponsored
- Sits on the website as a chat bubble, qualifies prospects without them knowing
- Sets up meetings with the AE automatically

### Agent 4: Agentforce (Salesforce's Agent)
- Used for reactivating leads sales had abandoned
- Targeted people who had reached out but reps didn't follow up (not worth their commission)
- **70% response rate** on these "abandoned" leads
- *"These are people that were dying to interact with us"*

### Agent 5: Momentum / Attention (RevOps)
- Automatically tracks everything a human does in the CRM in real time
- When they rolled it out, one rep quit that day — he hadn't done anything in 30 days
- *"The gig was up"*

---

## 🔑 How to Actually Build and Deploy Agents

### The Critical Mistake Everyone Makes
> *"A public B2B company worth over $10 billion — we asked them, 'Have you done it yourself?' And it was just crickets on this call of 20 people."*

- Companies think they can buy an untrained agent and hand it to junior SDRs
- It doesn't work that way
- You must train it yourself

### The Training Process (Demystified)
1. **Ingestion**: Give it URLs of your website, wiki, training docs; upload your prospectus and key documents
2. **Training**: Answer questions the agent generates; the more you answer, the better it gets
3. **QA/Iteration**: Every day for 30 days, spend 1-2 hours reviewing outputs and correcting mistakes
4. **Result**: By day 30, it's pretty good

> *"Training is just answering questions and getting better and better."*

### The Most Important Selection Criterion
> *"The world's best software with no help training you is not what 99% of people should buy."*

- Add a column to your vendor evaluation: **who is going to help me?**
- Get on the phone with the forward deployed engineer (FDE) before signing
- If they won't help you deploy, don't buy — even if their software is better
- The best vendors turn away business if they don't think they can make you successful

### The Cheat Code
- Take your best salesperson's best email
- Use that as the template/prompt for the agent
- Let the agent AB test variants from that baseline
- *"Train it on your best and it'll be pretty good"*

### Why AI Emails Aren't as Bad as You Think
- The bar for "good enough" is lower than people assume
- Most human SDR emails are terrible
- *"The AI can do better than the person that literally knows nothing about your product"*
- People don't care if it's AI as long as it adds value and they get an instant response
- SaaStr tested both disclosing and not disclosing — it doesn't matter

---

## 👤 The Chief AI Officer Role (Amelia)

### What This Role Actually Does
- Spends 10-15 hours/week reviewing agent outputs
- Segments the database so agents don't conflict with each other
- Routes data between agents
- Iterates and corrects agent mistakes daily
- *"Agents work all night and they work weekends and they work on Christmas"*

### Who Should Be This Person
- NOT someone from traditional sales
- Must be a "nerd" who loves data
- Could come from: product, marketing, RevOps, B2C marketing
- Must have done it themselves — not just read about it
- *"Odds they come out of regular sales approach zero"*

### The Orchestration Challenge
- With 20 agents, someone must segment the base to prevent conflicts
- No "master agent managing agents" yet — that's still coming
- This is a new skill set that must be grown internally
- *"If you're waiting for an agency to do it, I think you're going to be out of a job"*

---

## 💡 Advice for Different Audiences

### For Sales Leaders / VPs (Worried About Obsolescence)
> *"Pick a tool, an agent, an agentic tool to solve one of your problems. Pick one. Pick a leading vendor. Train the agent. Ingest the data. Do the iterations. Understand how this damn thing works."*

- Do it yourself — don't delegate it
- Spend 50-60 hours over a month getting one agent live
- Once you've done one, the second is much easier
- *"If you can go do this, you're hyper employable"*

### For Junior Sales People (SDRs, BDRs)
- Embrace whatever tools your organization is using
- Become the best person at working with the agent
- Don't fight the extra meetings the agent sets up for you
- *"If you can work with those tools, you become more valuable. If you fight it, there's a tool tracking everything you do."*

### For Founders / Startups
- Don't build your own GTM agents — buy them
- The pace of innovation is too fast to maintain internally
- Exception: if you have a dedicated engineer chomping at the bit to build it
- Be the forward deployed engineer for your customers — this is your competitive advantage over incumbents

### For Anyone Skeptical
**The Incognito Mode Test:**
> *"Go to your app and do everything with a fresh Gmail address. Try support. Try to contact sales. Sign up for the newsletter. Do everything. Your heart is going to cry about some of the things you've seen."*

- Pick the thing that makes you cry the most
- Go buy that agent and fix it
- Do this quarterly

---

## 📈 The Future of the Sales Profession

### The $250K SDR Vision
> *"We should have $250,000 a year SDRs, but they'd be like at Vercel — they'd be managing 10 agents, not 10 people."*

- The profession doesn't disappear — it transforms
- Owner.com targeting $3-5M revenue per rep (vs. $300-500K previously)
- Net-net: more sales professionals needed because AI winners are growing so fast
- But: the entry-level roles are gone; the mediocre are at risk

### What Changes vs. What Stays the Same

**Changing/Gone:**
- Email-based SDR cadences (90%+ displaced within 12 months)
- Human inbound qualification (mostly extinct next year)
- Mediocre AEs who don't know their product

**Staying:**
- Field sales / door-to-door
- Enterprise relationship selling
- Senior GTM leadership
- The best humans (with AI superpowers)

**Unknown:**
- Phone/SMS automation (regulatory issues, startups bending rules)
- In-person sales
- How AI handles complex enterprise negotiations

### The Hive Mind Future
- When agents can share data with each other across all GTM touchpoints — that's when humans are truly at risk
- Salesforce CRM becoming the hub for AI GTM agents (all plug in)
- *"When all these agents can talk with each other for real and share all their GTM data — no human"*

---

## 🔧 Tools Mentioned

| Tool | Use Case |
|---|---|
| **Deli** | Digital clone / general agent |
| **Artisan** | Outbound SDR emails |
| **Qualified** | Inbound lead qualification |
| **Agentforce (Salesforce)** | Lead reactivation |
| **Momentum / Attention** | RevOps — automatic CRM tracking |
| **Clay** | Data enrichment (starts at ~$100K/year) |
| **Replit** | Building internal tools (Jason is top 1% user) |
| **Reve (formerly Revar)** | AI image generation for marketing |
| **Glean** | Secure document/dashboard access for AI agents |

---

## ⚠️ Key Warnings and Pitfalls

1. **Don't build your own GTM agents** — buy them (unless you're Vercel)
2. **Don't hire an agency** to deploy agents — they don't know how either
3. **Don't turn on an untrained agent** and expect results
4. **Don't wait for someone else** on your team to do it — do it yourself
5. **Don't ignore the orchestration challenge** — agents will conflict without proper segmentation
6. **Don't think you need massive scale** — even 31K people in HubSpot is enough to start
7. **Beware of agent exhaustion** — customers are getting overwhelmed with new tools; the window may close

---

## 🔗 Key Quotes

- *"We're done with hiring humans in sales. We're done."*
- *"AI is replacing the jobs people don't want to do today and it is displacing the midpack and the mediocre."*
- *"All the plays work. It's the playbooks that are kind of broken."*
- *"If you can close on a text message, AI can close it."*
- *"The best startup you're ever going to have is probably the one you're working at today."*
- *"Being a people person is not enough anymore."*
- *"Agents work all night and they work weekends and they work on Christmas."*
- *"If you can go do this, you're hyper employable."*

---

## 📚 Resources
- **SaaStr.ai**: All the tools Jason built (valuation calculator, pitch deck reviewer, AI VC, etc.)
- **saster.ai/agents**: Full list of all agents SaaStr has built
- **Recommended talk**: "Everything That Breaks on the Way to One Billion" with Ben Chestnut (Mailchimp)
- **Recommended talk**: "Rippling Secrets to Hypergrowth" with Matt Plank and Sam Blond

---

*The through-line: The sales profession isn't dying — it's bifurcating. The best humans get superpowers. The mediocre get displaced. The entry-level roles are gone. The key to surviving and thriving is to stop waiting for someone else to deploy these agents and go do it yourself — train it, iterate on it, and become the person in your organization who actually understands how this works.*