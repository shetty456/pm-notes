# Deep Dive Notes: Ronni Kohavi on A/B Testing, Experimentation & Building a Data-Driven Culture
*Lenny's Podcast*

---

## 🎙️ Guest & Context
- **Ronni Kohavi** — Widely considered the world's leading expert on A/B testing and experimentation
- Career: Amazon (Director of Data Mining and Personalization) → Microsoft (Corporate VP, led experimentation platform) → Airbnb (Technical Fellow, led search experience)
- Author of **Trustworthy Online Controlled Experiments** (all proceeds donated to charity)
- Teaches a live cohort-based course on Maven
- At Microsoft, scaled to 20,000-25,000 experiments per year (~100 new treatments every working day)

---

## 🎯 The Most Surprising A/B Test Result

### The Bing Ad Title Story
- Someone proposed moving the second line of an ad up to the first line (making the title larger)
- Had been sitting in the backlog for months, rated lower priority than many other ideas
- An engineer spent a couple of days implementing it and launched the experiment
- **Result**: Revenue increased by ~12% — worth $100 million at the time
- First reaction: "This is too good to be true, let's find the bug"
- Replicated multiple times — no bug found
- **Key lesson**: This was the biggest revenue-generating idea in Bing's entire history, and nobody gave it appropriate priority

### The "Open in New Tab" Pattern
- Discovered at Microsoft around 2008 (predates Airbnb)
- Heavily debated: "Why would you open something in a new tab? Users didn't ask for it"
- First done in the UK for opening Hotmail, then moved to MSN for search
- Highly beneficial results every time
- Later reintroduced at Airbnb by Ronni — again showed big improvements
- **Lesson on institutional memory**: Winners get forgotten; make sure to document and remember them

---

## 📊 The Reality of Experiment Success Rates

### The Humbling Numbers
| Company/Context | Failure Rate |
|---|---|
| Microsoft overall | ~66% (two-thirds fail) |
| Bing (highly optimized) | ~85% |
| Airbnb search | ~92% |
| Booking, Google Ads, others | 80-90% |

> *"Every group that starts to run experiments always starts off by thinking that somehow they're different and their success rate is going to be much much higher. And they're all humbled."*

### Important Nuance
- These are failure rates of **experiments**, not ideas
- 10% of experiments are aborted on the first day (usually implementation issues, not bad ideas)
- You may iterate 2-4 times before a successful launch
- The 92% at Airbnb search: out of 250 experiments, only 8% moved the key metric — but those added up to a **6% improvement in revenue**

---

## 🏆 The "Inch by Inch" Reality

### How Real Progress Happens
- Bing relevance team: goal of 2% improvement per year
- Achieved through: 0.1% here, 0.15% there, 0.2% there
- At Airbnb search: 250 experiments, 92% failed, but the 8% that worked added up to 6% revenue improvement
- *"Most results are inch by inch. You improve small amounts, lots of them."*

### The Portfolio Approach
- Need a mix of:
  - **Incremental experiments**: High probability of small wins, steady progress
  - **High-risk, high-reward experiments**: Most likely to fail, but if they win, it's a home run
- Typical allocation: ~80% incremental, ~20% big bets
- Be ready for 80% failure rate on big bets

---

## 🧠 The Overall Evaluation Criterion (OEC)

### Why It Matters
- The most common mistake: optimizing for the wrong metric
- Easy to increase revenue by doing things that hurt users (more ads, worse experience)
- The OEC must be **causally predictive of lifetime value**

### The Right Framework
- Don't just optimize for revenue — add countervailing metrics
- Example from search: Revenue + user experience metrics (time to successful click, % of successful sessions)
- Example from Airbnb: Not just conversion rate, but predicted satisfaction rating at time of stay
- Example from Amazon email team:
  - Initial metric: revenue from email clicks → led to spam
  - Fixed: incorporated cost of unsubscribes → discovered more than half of campaigns were negative
  - Led to new feature: "unsubscribe from this campaign type" instead of all emails

### The Constraint Optimization Approach
- Give a fixed "budget" (e.g., vertical pixels for ads)
- Within that budget, maximize revenue
- This prevents gaming while still allowing optimization

### The Microsoft.com Warning
- Team said their OEC was "time on site"
- Problem: For a support site, is more time good or bad?
- Half the room thought more time = better; half thought more time = worse
- **Lesson**: If you can't agree on the direction of your OEC, you don't have one

---

## ⚠️ Signs Your Experiments May Be Invalid

### Sample Ratio Mismatch (SRM) — Most Common Issue
- If you design for 50/50 split and get 50.2/49.8, that's a red flag
- With 1 million users, 50.2 vs 49.8 should happen by chance only 1 in 500,000 experiments
- At Microsoft: ~8% of experiments suffered from SRM
- **Common causes**:
  - Bots hitting control and treatment in different proportions
  - Data pipeline issues
  - Campaigns pushing traffic to one variant
  - Removing bad traffic in a skewed way

### The SRM Detection Story
- First added a banner: "You have a sample ratio mismatch, do not trust these results"
- People ignored it and presented results anyway
- Blanked out the scorecard with a red warning and "click OK to expose"
- People still clicked OK and presented results
- Final solution: **Every number in the scorecard highlighted with a red line** — so anyone seeing a screenshot could tell it was invalid

### Twyman's Law
> *"Any figure that looks interesting or different is usually wrong."*

- If your normal movement is under 1% and you suddenly see 10%, investigate before celebrating
- 9 out of 10 times when Twyman's Law is invoked, a flaw is found
- The Bing ad title example was the exception — replicated multiple times and confirmed

---

## 📉 The Redesign Problem

### Why Full Redesigns Almost Always Fail
- Ronni has published examples of large redesigns that dramatically failed
- The sunk cost fallacy: "We invested 6 months, we have to launch even if it's bad"
- When you do 17 changes together, most of them will fail — and you can't tell which ones

### The Right Approach
- Do redesigns in steps, testing on the way
- "One factor at a time" (OFAT): test one change, learn from it, adjust
- Of 17 proposed changes, maybe 4 are actually good — those are the ones that should launch
- If you must do a big redesign: **be ready to fail 80% of the time**

### The Bing Social Integration Failure
- Spent 100 person-years integrating Twitter firehose and Facebook
- Hundreds of experiments, all negative to flat
- Took too long to decide it was a failure
- **Lesson**: Have the data to know when to abort; don't let sunk costs drive decisions

---

## 🔬 Understanding P-Values (The Right Way)

### The Most Common Misconception
- People think: p-value of 0.02 means 98% probability treatment is better than control
- **This is wrong**

### What P-Value Actually Means
- P-value is a conditional probability assuming the null hypothesis is true
- To get what you actually want (probability that treatment is better), you need Bayes' Rule
- You need the **prior probability** of success (historical failure rate)

### The False Positive Risk
- At Airbnb search (8% success rate): if you get p < 0.05, there's a **26% chance it's a false positive**
- Not 5% — 26%
- **Practical implication**: If p < 0.05 but > 0.01, replicate the experiment
- Combine two experiments using Fisher's method or Stouffer's method
- The joint p-value will be much lower, giving you much more confidence

---

## 📚 Institutional Memory and Learning

### The Quarterly Meeting Approach
- Hold quarterly meetings of the most **interesting** (not just successful) experiments
- Surprising = estimated result beforehand differs significantly from actual result
- Focus on:
  - Expected to be small, turned out huge (positive or negative)
  - Expected to be big, turned out flat
  - "No-brainer" ideas that were surprisingly negative

### The Windows Indexer Example
- Team showed offline tests proving better indexing and higher relevance
- Ran the experiment — relevance was indeed higher
- Surprising result: **killed battery life** (consuming much more CPU on laptops)
- Documented and remembered: now take battery impact into account in future designs

### Searchable Experiment History
- At Microsoft: 20,000+ experiments per year
- Need ability to search by keywords: "Has anyone done an experiment on X?"
- Platform should support this search capability

---

## 🚀 When to Start Running Experiments

### The Rule of Thumb
- **Tens of thousands of users**: Start building culture and platform; can only detect large effects
- **200,000 users**: The magic starts happening; can test everything and detect meaningful changes
- Below that: Statistics don't work out for most metrics you care about

### The Practical Math
- Retail site with some conversion rate
- Trying to detect changes of at least 5% (what startups should focus on, not 1%)
- Need approximately 200,000 users

### What to Do Before You Hit 200K
- Start building the culture
- Start building the platform
- Start integrating so that as you scale, you're ready

---

## 🏗️ Building an Experiment Platform

### Build vs. Buy
- When Ronni started at Amazon and Microsoft: had to build because nothing existed
- Today: enough good vendors that buying is a reasonable option
- Usually not zero-one: build some, buy some
- For most companies starting out: third-party products are good enough

### The Goal: Marginal Cost → Zero
- At Microsoft: after a while, the cost of running experiments was so low that nobody questioned whether everything should be experimented with
- At Airbnb: platform was less mature, required many more analysts to interpret results
- **The trade-off**: Invest in the platform → more automation → less need for data scientists per experiment

### The Six Axes Framework (Crawl → Walk → Run → Fly)
- Published paper with a matrix of six axes for experimentation maturity
- Use this to assess where you are and what to build next

### Variance Reduction Techniques (Run Experiments Faster)
1. **Capping metrics**: If revenue is very skewed, cap at a reasonable maximum (e.g., 30 days of bookings)
2. **CUPED**: Uses pre-experiment data to adjust results — same unbiased result with lower variance, requires fewer users
3. **Good platform**: Scorecard available within a day of experiment ending, not a week later

---

## 🌱 Building an Experiment Culture

### The Beachhead Strategy
- Find a team where experimentation is easy to run (launches frequently, weekly or more)
- Don't start with teams that launch every 6 months
- Make sure the OEC is clear for that team
- Once successful, share surprising results broadly
- Cross-pollination: people from experiment-driven teams move to other groups and spread the culture

### The Microsoft Story
- Initial resistance: "We have better PMs here" (denial that 50% of ideas could fail)
- Bing was the beachhead
- Once Bing showed surprising results, other groups became amenable
- Office eventually started running experiments and realized many ideas were failing

### The Amazon Narrative Approach
- Jeff Bezos: "No more PowerPoint, write a narrative"
- Structured document that answers required questions for your idea
- Review as a team with comments in the document
- **Impact**: Honest feedback that stays after the meeting; much better than slides

---

## 📊 Goodui.org — The Patterns Resource

- Site by Jacob Linovsky
- People submit experiment results; patterns are derived
- ~140 patterns with data on: how many times it worked, how many times it didn't, by how much
- Each pattern shows: "worked 3 out of 5 times, with this magnitude"
- The "open in new window" pattern is in there
- **Use case**: Before running an experiment, check if someone has already learned this

---

## 🔗 Key Quotes

- *"We are often humbled by how bad we are at predicting the outcome of experiments."*
- *"If you believe in the statistics that I published, then doing 17 changes together is more likely to be negative."*
- *"When something looks too good to be true, investigate. Hold the celebratory dinner."*
- *"If you're not running an experiment, 70% of stuff you're shipping is hurting your business."*
- *"Don't ship on flat — unless it's a legal requirement."*
- *"The OEC must be causally predictive of the lifetime value of the user."*
- *"Institutional memory: when you have winners, make sure to address them and remember them."*

---

## ⚡ Lightning Round Highlights

| Question | Answer |
|---|---|
| **Books** | *Calling Bullshit* (embodies Twyman's Law); *Hard Facts, Dangerous Half-Truths and Total Nonsense* (Stanford GSB); *Mistakes Were Made (But Not by Me)* (cognitive biases) |
| **TV/Film** | *Chernobyl* (HBO miniseries) — "amazingly well done; the woman in the movie was actually 30 scientists presenting data to leadership" |
| **Interview question** | "Tell me what the static qualifier does in C++" — more than 50% of engineering candidates get it wrong |
| **Favorite product** | Blink cameras — battery-powered, lasts 6 months, solved a skunk mystery |
| **Biggest culture change** | Amazon-style structured narratives instead of PowerPoint — forces clear thinking, enables honest feedback that persists |

---

## 📚 Resources Mentioned
- **Book**: *Trustworthy Online Controlled Experiments* by Ronni Kohavi et al. (all proceeds to charity)
- **Site**: goodui.org — patterns from real experiments
- **Paper**: "Rules of Thumb" — patterns extracted from thousands of Microsoft experiments
- **Paper**: Sample Ratio Mismatch detection and diagnosis
- **Paper**: CUPED — variance reduction technique
- **Paper**: False Positive Risk calculation
- **LinkedIn**: Ronni Kohavi — posts on failed redesigns, practical defaults talk
- **Course**: Maven cohort-based course on experimentation (discount code in show notes)

---

*The through-line: Experimentation is fundamentally about humility — accepting that most ideas fail, that surprising results (good and bad) are where the real learning happens, and that trust in your platform is more important than speed. The goal isn't to run more experiments; it's to run trustworthy experiments that actually tell you the truth about what's working.*