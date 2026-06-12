# Deep Dive Notes: Cat Woo on Building AI-Native Products at Anthropic
*Lenny's Podcast*

---

## 🎙️ Guest & Context
- **Cat Woo** — Head of Product for Claude Code and Cowork at Anthropic
- Engineering background → VC briefly → Anthropic
- Works directly alongside Boris (Claude Code creator/tech lead)
- Almost all PMs on her team have engineering backgrounds or ship code on Claude Code
- Designers on the team have also been front-end engineers

---

## 👥 Cat's Role: How She Works with Boris

### The Division of Labor
- **Boris**: Tech lead, product visionary, sets the "AGI-pilled" vision 3–6 months out — *"This is what the product needs to be"*
- **Cat**: Figures out the path from today to that vision; owns cross-functional execution
- Responsibilities: marketing, sales, finance, capacity, ensuring no blockers to shipping

### The 80/20 Mind-Meld
- *"We're like 80% mind-meld"*
- 20% where Cat cares more → she drives those
- 20% where Boris cares more → he drives those
- *"It is actually a remarkably blurry line"*

---

## 🚀 The New PM Skillset: What Most Candidates Get Wrong

### The Old World vs. New World

| Old World | New World |
|---|---|
| 6–12 month planning horizons | Features ship in weeks, days, sometimes hours |
| Heavy emphasis on multi-quarter roadmap alignment | Emphasis on speed to user hands |
| Code was expensive → coordinate carefully | Code is cheap → move fast, iterate |
| Quarterly releases | Research preview → ship in a week or two |

### What Cat Sees in PM Interviews
> *"The PMs who do the best on AI-native products are the ones who can figure out how to shorten the time from having this idea to actually getting the product in the hands of users."*

- Most candidates still approaching it with old-world thinking
- Too much emphasis on aligning multi-quarter roadmaps with partner teams
- Not enough emphasis on: how do we get this out the door this week?

### The Three Things a Great AI-Native PM Does

**1. Set Clear Goals**
- LLMs are so general they create massive ambiguity about who you're building for
- Great PM says: *"Our key user is professional developers. The main problem is too many permission prompts causing fatigue. The use case is getting enterprises to safely reach zero permission prompts."*
- This rules out many approaches and gives the team a concrete target
- *"It sets a pretty clear goal because it rules out a lot of potential approaches"*

**2. Create a Repeatable Shipping Process**
- Claude Code ships almost all features as **Research Preview**
- Clear branding: *"This is an early product. We're getting feedback. This might not be supported forever."*
- Reduces commitment → can get something out in a week or two
- Lowers the psychological barrier to shipping

**3. Define the Cross-Functional Framework**
- Engineers shouldn't have to figure out when to pull in marketing, docs, DevRel
- Claude Code's process: engineer posts in **evergreen launch room** when feature is dog-fooded internally
- Sarah (docs), Alex (PMM), Tar and Lydia (DevRel) jump in and turn around marketing announcement **the very next day**
- *"Because we have this really tight process, it lowers the friction for any engineer to ship something — and PM is the role that should be setting this up"*

---

## 📋 PRDs in the AI-Native World

### What They Actually Do
- **Weekly metrics readouts** with the entire team — everyone deeply understands the business, key goals, trends, drivers
- **Team principles document** — who the key users are and why, what they're willing to trade off
- Goal: everyone can make decisions independently without being blocked on PM

### When PRDs Still Make Sense
- Particularly ambiguous features → one-pager on goals, delightful use cases, failure modes to fix
- Projects requiring heavy infrastructure that take many months
- *"We do write PRDs still"* — but they're the exception, not the rule

---

## ⚡ How Anthropic Ships So Fast

### The Real Drivers (Not Just the Models)
- Cat clarifies: Mythos/frontier models help a little, but don't explain the bulk of the speed
- *"A lot of it is the process and the expectation on the team"*

### The Core Philosophy
> *"We want to remove every single barrier to shipping things. We want to make sure every single person on the team feels empowered to take their idea from just an idea to out in the world in less than a week, sometimes even in a day."*

- Very low process
- Every person empowered end-to-end
- Many engineers can go from seeing user feedback on Twitter → ship a product by end of week with almost no PM involvement

---

## 🏗️ Anthropic's PM Organization (~30–40 PMs)

| Team | Responsibility |
|---|---|
| **Research PM** (Diane leads) | Understands customer feedback on models, feeds to research team, shepherds model launches |
| **Claude Developer Platform** | Maintains APIs Claude Code is built on; releases managed agents |
| **Claude Code** | Claude Code + Cowork core products |
| **Enterprise** | Cost controls, RBAC, security controls, enterprise adoption |
| **Growth** | Growing across entire product suite (Claude Code, Cowork, CDP) |

---

## 🔮 The Future of the PM Role

### Cat's View: Roles Are Merging
- PMs doing some engineering work
- Engineers doing PM work
- Designers PMing and landing code
- *"I think engineer and PM are kind of overlapping"*

### Anthropic's Hiring Philosophy
- Focused on **engineers with great product taste** over hiring more PMs
- Reduces overhead for shipping any product
- *"Product taste is still a very rare skill to have — we'll pretty much hire anyone who we feel has demonstrated this strongly"*

### The Most Important Skill: Product Taste
> *"As code becomes much cheaper to write, the thing that becomes more valuable is deciding what to write."*

- What is the right UX for this feature?
- What is the most delightful user experience?
- Which of tens of thousands of GitHub issues is worth building?
- This skill can come from any background

### Why Engineering Background Helps (For Now)
- Better sense for how hard something is to build
- Helps with prioritization: if something is easy, just do it; if it's hard, weigh it more carefully
- *"I think the valued skill sets change quite frequently — it's hard to predict more than a few months out"*
- Large shifts in what's valuable happen every few months as coding capability increases

### The Amorphous Work Future
> *"The work is becoming more amorphous, which means a great PM is able to understand what all the gaps are, figure out what the highest priority ones are, and then figure out how to learn that skill set or apply what they have."*

- Values people who can wear many hats, swap them, and are low-ego about what work they do
- First principles thinking: understand how the tech landscape is changing, what the team needs, jump in and fill that hole

---

## 🧠 Where Human Brains Stay Valuable

### Cat's Answer
1. **Common sense** — models don't always have a great sense of who all stakeholders are, how they relate, what their preferences are, right venues to communicate
2. **EQ and tacit knowledge** — knowing how to keep stakeholders on board, navigating organizational dynamics
3. **Prioritization and taste** — picking what to work on, knowing if what you've built is good
4. **Stakeholder management** — *"A thousand moving pieces to any product launch, some very small, but there's always a lot that could go wrong"*

---

## 💔 What Gets Sacrificed in the Fast-Shipping World

### Product Consistency
- Historically: carefully plan every product, how they relate, one product per use case
- Now: sometimes features overlap because you're testing two form factors simultaneously
- *"We want the external audience to tell us which one is better"*

### User Overwhelm
- New users don't know the best path to accomplish X
- More education needed on core features and best practices
- Users feel like they need to check Twitter every day to keep up
- *"People feel this need to be on this ever-increasingly fast treadmill"*

### The PowerUp Response
- Originally: *"The product should be intuitive enough that you don't need a tutorial"*
- Evolved: *"There are just so many features and so much demand for built-in onboarding"*
- `/powerup` command: here are the 10 features out of 100 that you absolutely need to use
- *"We diverged a bit from our original principle"* — pragmatic response to user needs

---

## 🔑 The "Right Amount of AGI-Pilled" Problem

### The Core Tension
> *"It is very hard to be the right amount of AGI-pilled. It's very easy to build the product for the super AGI strong model. The hard thing is figuring out for the current model, how do you elicit the maximum capability?"*

### The Easy (Wrong) Approach
- Build for the future super-intelligent model
- Just have a text box where you tell it what you want
- It's so smart it can add any tool or integration it needs
- *"Kind of very easy to build the product for the super AGI strong model"*

### The Hard (Right) Approach
- For the **current model**: how do you elicit maximum capability?
- How do you help users get onto the golden path?
- How do you guide users to interact with the model's strengths and patch its weaknesses?
- *"This skill is pretty rare"*

### How to Build This Skill
1. **Spend a ton of time using the model** — understand its behaviors deeply
2. **Ask the model to introspect** — when it does something unexpected, ask it why
   - *"Sometimes they'll say there was something confusing in the system prompt, or I didn't realize front-end verification was part of this task"*
   - Understanding what misled the model shows you how to fix the harness
3. **Find your 5 trusted evaluators** — people who are much better than others at articulating what makes a model/harness combination good
4. **Build evals** — even 10 great evals helps the team quantify goals and measure progress
   - *"Evals are an underappreciated thing that more PMs and engineers should be working on"*

---

## 🔄 How New Models Change the Product

### The Model Eats the Harness
> *"We can remove a lot of prompting interventions every time the model gets smarter."*

### The To-Do List Example
- Early Claude Code: asked to do large refactors → would change 5 of 20 call sites and stop
- Solution: added a to-do list tool (inspired by VS Code's call site list)
- Early models: had to keep reminding it *"Did you finish everything on the to-do list?"*
- Opus 4+: naturally uses the to-do list without prompting
- Now: to-do list is nice-to-have for users to see progress, but not necessary for thoroughness

### The Process for Each New Model
1. Read through the entire system prompt
2. For each section: does the model still need this reminder?
3. If not → remove it
4. Look for features that were built as crutches → can they be removed?

### What New Models Unlock
- Features that were tested but accuracy wasn't high enough to launch
- **Code review example**: tried multiple times, launched simpler versions
- Only with Opus 4.5/4.6 and Sonnet 4.6: *"This code review is so good that our engineering team relies on it to pass before we merge PRs"*
- Now: multiple code review agents run simultaneously, traverse entire codebase, synthesize real issues

### The Build-Ahead Strategy
> *"It's pretty important to build products that don't necessarily work yet so that you know what is missing — and then with the newest model you can just swap it in to the prototype you've already made."*

---

## 🌟 Why Anthropic Has Succeeded (Coming From Behind)

### Two Core Ingredients

**1. Unifying Mission**
> *"We hire people who care most about bringing safe AGI to all of humanity."*

- Referenced frequently in decisions about what to ship
- Enables very fast decisions that cut across the entire org
- *"Because we put this mission above any individual product line, we're able to make very fast decisions and execute on them in a unified way"*
- When two priorities compete: which is more important for Anthropic's mission? → everyone stands behind the decision
- Explains why Anthropic hasn't launched social networks, feeds, etc. — not aligned to mission

**2. Focus**
- Mission = teams willing to make sacrifices that hurt their own goals in service of Anthropic's goals
- *"If Claude Code failed but Anthropic succeeded, I would be extremely happy"*
- *"The whole team is very willing to make decisions that follow that chain of thought"*

### The OpenClaw Decision Through This Lens
- Growing the number of users Anthropic can reach is core to the mission
- First-party products (Claude subscriptions) are the primary vehicle
- Had to prioritize first-party products and API over third-party products
- *"This is a decision that resulted from that"*

---

## 🛠️ When to Use Which Tool: The Full Guide

### Claude Code CLI (Terminal)
- Best for: kicking off one-off coding tasks, want all the latest features
- CLI is the initial product surface — features land here first
- Most powerful of all the tools
- Good for: handful of tasks at a time

### Claude Code Desktop
- Best for: front-end work (preview pane shows web app in real time as you chat)
- Great for: non-technical users who find terminal unfamiliar
- Control plane: see all CLI sessions, desktop sessions, web and mobile sessions in one place
- *"One-stop control plane where you can see all of your tasks"*

### Claude Code Web/Mobile
- Best for: kicking things off on the go without a laptop
- Addresses the "tethered to laptop" problem
- *"I can't count the number of people I've seen holding their laptop open tethered to their phone while outside"*

### Cowork
- Best for: any output that isn't code
- Slack zero, inbox zero, slide decks, docs, launch plans, customer meeting prep
- *"If the output is code → Claude Code. If the output is anything not code → Cowork"*

---

## 📊 Cowork in Practice: Real PM Use Cases

### The Slide Deck Example (Step-by-Step)
**Context**: Preparing a talk for Code with Claude conference about Claude Code's transition from assistant to agent

**Setup**: Connected Google Calendar, Slack, Gmail, Google Drive

**Prompt**: *"Make me a slide deck for the Code with Claude conference. This is what our PMM suggested it should cover. This is the current draft I made that I don't like. Can you start by creating a proposed outline with details? Also make sure it doesn't overlap too much with the keynote talk."*

**What Cowork did**:
1. Read all the links provided
2. Walked through Twitter to see what was launched
3. Looked through the evergreen launch room
4. Looked in the Claude Code announce channel (team demos)
5. Synthesized everything into a 20-page deck

**Result**: Woke up to a pretty good deck. Needed tweaks (too wordy — Cat likes minimal words). But far faster than manual creation. Visually polished because Cowork had access to Anthropic's design system.

**Cat's role**: Decided the outline — progression from local tasks → every PR green → helping engineers land more PRs, plus which demos would be most compelling

### The Design System Integration
- Gave Claude access to standardized deck template used across external engagements
- Claude can see colors, fonts, ~20 example slide formats
- Can also connect to Figma MCP if slide formats are saved there

### Applied AI Team Use Case
- 5–10 customer engagements per day on high days
- Night before: ask Cowork to summarize all customer meetings coming up next day
- Cowork creates a dossier: what each customer asked for, what's top of mind, action items from past meetings
- Can also research answers: *"When is feature X going to launch?"* → Cowork searches Slack for latest ETA, adds to notes
- *"During the customer call, the person has the absolute latest"*

---

## 🏗️ The Custom App Revolution at Anthropic

### What Claude Code Has Unlocked Internally
> *"Claude Code really lowers the barrier to making any custom app that you want. We've seen this surge in personalized work software that people are building for custom use cases."*

### The Sales Deck Customization App
- Sales person was making repetitive customer decks over and over
- Built a web app with core Claude Code deck templates (101, 201, Mastering Claude Code)
- Inputs: customer context from Salesforce, Gong, other notes
- Automatically customizes:
  - Which features are available (based on whether customer uses Bedrock, Claude for Enterprise, Console)
  - Customer's specific concerns (e.g., code review stage of SDLC)
  - Compliance requirements (HIPAA, security controls)
  - Removes slides for features not available to that customer
- Manual time: 20–30 minutes → with app: a few seconds

---

## 📈 The Vision: Claude Code and Cowork Long-Term

### The Building Blocks Framework

**Level 1: Individual Task Success**
- Can it consistently produce acceptable output from a clear prompt?
- Output you can merge or share with colleagues

**Level 2: Multiple Simultaneous Tasks**
- Multi-coding (big trend end of 2025, still growing)
- 6 tasks at a time → next: 50 or hundreds of Claudes at a time

**Level 3: Remote Infrastructure**
- Can't run hundreds of Claudes locally (not enough RAM)
- Need interface to know which tasks need human attention
- Agent fully verifies work → human can quickly trust it's done to spec

**Level 4: Self-Improving Process**
- When you see a task not done to your liking → give feedback
- Model incorporates feedback for every future run
- *"Never makes that mistake again"*

---

## 🧘 Staying Sane Inside the Tornado

### The Anthropic Culture of Calm
- *"Our team is full of people who lean into the chaos"*
- Face every challenge with a smile — if you get too stressed, you'll burn out
- Look for people who see a hard challenge and think *"that's going to be hard but I'm excited to tackle it"*
- Hire people who have been in the industry long enough to know their energy patterns

### Cat's Personal Framework
- P0 on Sunday → P0 on Monday → P0000 by Monday afternoon
- *"You just have to acknowledge there's only so much you can do"*
- Sleep well to make good decisions the next day
- Brutally prioritize where you spend time
- Be okay letting things go
- *"Launching a feature that is buggy is the kind of thing that would have kept me up at night. But it is something I am now able to live with knowing we're going to get quick feedback and fix it in the next release."*

---

## 💡 Advice for Thriving in the AI Transition

### The Core Framework
1. **Identify repetitive manual tasks** → automate them with Claude Code/Cowork
2. **Iterate until 100% success rate** — 95% is not an automation
3. **Use the freed time** for creative work, pet projects, things the company hasn't had bandwidth for

### The 95% Trap
> *"If an automation doesn't work 100% of the time, it's not really an automation. And that last 5–10% does take more time."*

- Cat's own example: trying to get Cowork to achieve Gmail inbox zero — still not there
- Lenny's example: email categorization workflow that's 95% great but occasionally misses important emails
- Advice: put in the elbow grease to get to 100%, teach it your preferences, give feedback

### Two Failure Modes to Avoid
1. **Never customizing** — leaving leverage on the table
2. **Over-customizing** — obsessing over MCPs, skills, workflow improvements to the point of distraction
   - *"I think the simple setups actually work better"*
   - Some people spend so much time customizing they're not sleeping and not doing the core task

### The Most Important Push
> *"Build apps that you're actually using every single day. Only through that usage are you actually getting the value."*

- Building a prototype you never come back to = not learning, not getting leverage
- The 2024 generation: chat-based products
- The Claude Code generation: **action-based** products
- *"The big aha moment is when Claude can just do things on your behalf. The agent can actually just do it itself."*

---

## 🔍 Evaluating Claude's Character

### Why Claude's Personality Matters
- People bring up Claude's character as one of the things they love most
- Lighthearted and fun + extremely competent = rare combination
- Low ego: *"Oh shoot, thanks for telling me. Let me fix it. Let's work together."*
- Positive and action-oriented: *"It's okay. Here are the steps. Do you want me to get started?"*
- Gives earnest feedback — doesn't just agree with everything

### Amanda's Role
- Molds Claude's character — *"Such a hard role because the task is so ambiguous"*
- Coding is easier because you can verify success; crafting character requires strong conviction
- *"An incredible ability to not only mold the character but also to articulate what the goals are, what's successful and what's not"*

### Team Lunch Model Evaluations
- When a new model is being tested: go around the table at team lunch
- *"What is your vibe on the model?"*
- Feedback examples: *"This model isn't fully explaining its thinking — too abrupt"* / *"Loves writing a ton of memories but we're not sure if they're high quality"* / *"This model loves to test itself"*
- This informs what data to look at to verify if it's a larger pattern
- *"The feedback from this group helps us form hypotheses we want to test"*

---

## ⚡ Lightning Round Highlights

| Question | Answer |
|---|---|
| **Books** | *How Asia Works* (economic development policies); *The Technology Trap* (past tech revolutions and workers — lessons for AI transition); *Paper Menagerie* (short stories about coming of age, AI, self-discovery) |
| **TV/Film** | *Drive to Survive* (F1 — *"something very satisfying about people being so obsessed with a singular engineering goal"*); *Free Solo* (*"the more you know about rock climbing, the more blown away you are — the moves he does I don't think I'll ever be able to do in a gym with a rope"*) |
| **Favorite product** | **Waymo** — uses it twice a day; doesn't feel bad if it's waiting; can take work calls without worrying about being rude; *"This has given me back 30 minutes every day"*; happy to pay 2x premium over Uber/Lyft |
| **Life motto** | **"Just do things"** — *"Jobs are fake. If you understand the constraints, you can figure out what you can do and then just try to do it quickly, learn from mistakes and apologize or fix them if you did something wrong."* |
| **Favorite thinking word** | **"Manifesting"** — also the sticker on her laptop |
| **Post-AGI plan** | Help bring the world along during diffusion period; then move to Fontainebleau (boulder field in France) and rock climb; read 1–2 books per week (currently at 0.5); learn physics, robotics, aerospace, hardware |

---

## 🔗 Key Quotes

- *"As code becomes much cheaper to write, the thing that becomes more valuable is deciding what to write."*
- *"It is very hard to be the right amount of AGI-pilled."*
- *"The 2024 generation of products were chat-based. The Claude Code generation is action-based."*
- *"If an automation doesn't work 100% of the time, it's not really an automation."*
- *"Build apps that you're actually using every single day."*
- *"Just do things."*
- *"The simple setups actually work better."*
- *"Product taste is still a very rare skill to have."*

---

*The through-line: the PM role isn't disappearing — it's becoming more about taste, judgment, and speed than coordination and documentation. The winners will be people who can figure out what to build, get it out fast, and iterate relentlessly.*