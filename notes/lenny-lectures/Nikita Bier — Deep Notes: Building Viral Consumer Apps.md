Here are significantly more detailed notes from the transcript:

---

# Nikita Bier — Deep Notes: Building Viral Consumer Apps (Lenny's Podcast)

---

## 👤 Who Is Nikita Bier?
- Built, launched, and helped more apps reach the top of the App Store than arguably any other individual
- Sold **tbh** to Facebook for **$30M+**
- Sold **Gas** to Discord for **multi-millions**
- Both achieved with tiny teams and minimal funding
- Advisor/investor to: **Flow, Citizen, BeReal, LOCKit, Wealthsimple, Saturn, Dupe** and many more
- Currently spends time advising on viral growth, design feedback, and product development process
- Available to book at **intro.co/nikitabier**
- Most requested guest on Lenny's podcast

---

## 🎓 Origin Story — Politify & Outline

### Politify (College Project)
- Built in his **last year of college**
- Motivated by observing American voters voting against their own financial self-interest (e.g., wealthy New Yorkers voting for higher taxes, low-income Kansas voters voting for lower taxes)
- Built a **web app** that:
  - Calculated the financial impact of presidential tax proposals
  - Factored in government benefits proposed by each candidate
  - Users entered: number of kids, age, basic personal info
  - Output: dollar impact on the individual
  - Also simulated policies against **tax returns of every zip code** so users could see community-level impact
- Result: **4 million users** during that election season
- Went super viral — very few people had thought about politics through a purely financial lens

### Outline (The Pivot to B2G)
- Multiple governments reached out asking: *"Can you build this for our budget?"*
- Governor of Massachusetts reached out — Nikita flew out to meet them
- Raised grant money, won a government contract, joined **Techstars accelerator**
- Got a contract in the pipeline with the **Obama administration**
- Mid-build: **government shutdown** happened → one contract canceled
- Realization: *"I actually really don't like selling software to governments"*
- Core competency was always making things go viral on the internet — not policy simulation
- Went to investors, offered to **give the money back**, said they were pivoting to consumer apps
- None of the investors took the money back
- Lesson: you can pivot, you can tell investors you want to work on something else

---

## 🧪 Midnight Labs — The Consumer App Studio (4–5 Years)

### The Learning Phase
- Spent **4–5 years** building every type of consumer app imaginable:
  - Mapping apps
  - Chat apps
  - Event meetup apps
  - To-do lists
  - Personality apps
  - Apps for college students, post-college adults
- Built **15 apps total** — 14 were essentially duds
- First mobile app took ~**1 year** to build; last one took ~**2 weeks**
- Got very good at **testing apps rapidly**

### Five Labs (Notable Early Success)
- Ingested Facebook posts and determined personality based on language used
- Used the **exact same model as Cambridge Analytica**
- Went viral in **3 days**
- Tens of millions of profiles created
- Raised more money based on this success
- Led to a sharper focus on mobile

### The Shift to Teens
- Tried building for every audience — always very difficult to get flywheel spinning for anyone **over ~22 years old**
- Key observations that led to teen focus:

#### Why Teens?
1. **Malleable habits** — as people get older, they get fixed into using certain communication products and don't adopt new ones
2. **Adults don't invite people to new apps** — invitation rate declines almost exponentially with age
   - Exact stat: **invitations drop ~20% for every additional year of age from 13 to 18**
   - *"If you build for adults, expect to acquire every user with ads"*
3. **They see each other every day** — critical for social apps; serendipitous physical proximity drives usage
4. **Network effects urgency** — teens are on the upward curve of adding connections to their social graph; urgency to communicate is highest

#### Supporting Academic Research
- Spanish academics studied how many people you text per year of your life:
  - Grows rapidly from age 14 to 18
  - **Peaks around age 21**
  - Then collapses sharply
  - Comes back up at end of life (retirement homes, grandparenting)
- Once you exit college → fewer daily contacts
- Once married → even fewer
- Implication: if building a communication product with network effects, target the cohort on the **upward curve of adding connections**

#### The Adult Acquisition Problem
- Targeting adults = must raise huge amounts of VC to finance user acquisition
- Extraordinarily expensive
- As a seed-stage app, basically impossible to grow to density needed for network effects
- *"Most likely, you'll never get network effects"*

### The Testing Process
- Developed a **reproducible testing process** — this influences probability of success more than anything
- Consumer product success is unpredictable; process reduces risk more than any single idea
- Figured out ways to **seed apps into schools** and **affinity groups** (hobbyists, etc.)
- Key principle: eliminate confounding variables so you know immediately whether something is working
  - Don't want to walk away from a test saying *"maybe the execution was bad"*
  - Get enough people on the app at once so you can say with conviction whether it has legs
- **Live chat customer support 24/7 in the app:**
  - Sounds counterintuitive for a tech product
  - Gives users a white-glove experience
  - Eliminates another confounding variable (did they feel their problems were solved?)
  - **Best vehicle for user research** — users literally tell you the problem they're having
  - Michael Gutierrez ran this for all of Nikita's companies — would paste interesting feedback into Slack
  - Led directly to feature ideas
  - Makes users feel great → they promote the app positively to peers

---

## 📱 tbh — Full Deep Dive

### The State of the Company Before Launch
- App #15 — team was exhausted, some wanted to leave
- A key team member put in their **two weeks' notice the day before launch**
- Getting low on money
- Nikita called his lawyer to ask **how to dissolve a company**
- Messaged mentors asking for steps to wind down
- Had a conversation with the departing team member:
  - Nikita: *"What if the app actually starts charting on the App Store?"*
  - Team member: *"What are the chances of that? You know that's not going to happen."*

### The Insight — How tbh Was Conceived
- A senior in high school (one of their lingering feedback users) told Nikita about a **Snapchat trend called "TBH"**:
  - Kids would post an image of a bunch of emojis on their story
  - Caption: *"I like you. You're smart. Your style is great."*
  - Followers would reply to the story with the emoji of what they felt
  - Nikita's read: *"Teens are looking for a vehicle for disclosure"*
- Simultaneously, Nikita looked at the App Store and found **Sarahah** was the #1 app in the US:
  - An anonymous messaging app where you add a link to your Snapchat story
  - **The entire app was in Arabic**
  - *"The strongest signal you could ever have that people want something"*
  - This is the **latent demand** framework in action

### The Latent Demand Framework
- People are trying to obtain a particular value but going through a **very distortive process** to get it
- If you can crystallize what their motivation actually is and build a product around it → **intense adoption**
- How to search for product ideas: look for this pattern of distorted behavior

### The Key Product Insight
- Sarahah was generating lots of **negative/bullying messages** — kids were receiving awful content
- Nikita had always known anonymous apps go viral but lead to awful news stories (kids self-harming, suicide)
- Had a personal rule: *"I'll never build anything like that"*
- New mechanic: **what if you could only say positive things, through polls?**
  - Instead of typing what you wanted to say, users just answered polls
  - Nikita's team **authored the polls** to ensure everything was always positive
  - Examples: *"Who has the best smile?"*, *"Who's most likely to be president?"*
  - You receive the result anonymously but your name is selected
- Results of this mechanic:
  - Made users feel a lot better
  - Actually solved what they were trying to do
  - Users sent a **much higher volume of messages**
  - One school sent **450,000 messages in the first 7 days**
  - Day-one message volume on a typical messaging app: 3–4 per user; tbh was sending **60**

### Launch & Growth
- Seeded into **one school in Georgia** — chosen because it had the **earliest school start date in the US** (urgency given company's financial state)
- **40% of the school downloaded it in the first 24 hours**
- Rapidly spread to neighboring schools
- Servers started crashing immediately

### The Seeding / Testing Strategy (The "BuzzFeed Memo")
- A memo about this strategy was **leaked to BuzzFeed** while Nikita was at Facebook
- Core insight: to be convinced to download an app, you need to **see the marketing message ~3 times**
- Strategy: **saturate an area** with every kind of marketing simultaneously
  - Ran **targeted ads** at a specific school when seeding/testing
  - Created a **dedicated Instagram account** for that school
  - High schoolers identify their school in their bio (e.g., "RHS")
  - Followed those accounts → accepted followbacks
  - Goal: get the **entire school to adopt synchronously**
- **Critical nuance:** This is how they **tested** apps, NOT how they grew them
  - Many founders DM'd saying "I tried this at 15 schools and it's not working" — missing the point
  - The app should grow by itself after the initial seeding
  - The seeding just eliminates the confounding variable of *"did enough people get on it to experience the network effect?"*
  - Once you have enough people, you can say with conviction whether the product has legs

### The Funding Crisis & Sale
- AWS bill: **$120,000**
- Bank account: **$150,000**
- *"These two numbers don't really..."*
- Quickly put together an emergency funding round
- Told team: *"Can you guys just pause for two months and focus on this?"*
- Turned into a **competitive bidding process**
- One acquirer in LA told him to fly down that day — Nikita went to the airport **without a ticket**
- That morning, they launched California (geo-fenced state-by-state rollout)
- At the meeting, the acquirer said: *"You guys are like number four or something?"*
- Nikita: *"No, we're actually number one in the United States"*
- CTO **Erik Hazzard** (published author in mapping) had built a **real-time install dashboard on a map**
- Around 4:00 PM, school had just let out — Nikita zoomed into the block they were meeting on
- **The entire block was lit up with installs**
- *"A really cinematic moment of showing something you created that literally just took over the entire neighborhood around you"*
- Sold to Facebook **9 weeks after launch** for **$30M+**

### What It Takes to Hit #1 in the App Store
- Used to be: **80,000–100,000 installs/day**
- Now (due to Threads, Temu, heavy ad spenders): up to **300,000/day**
- At peak of tbh: **360,000 installs/day**

### Product-Market Fit — How to Know
- Quote from friend Roger Dickey: *"If your product's working, you'll know. If there's any uncertainty, it's not working."*
- It's **binary** for consumer products
- People will be fighting to get in
- You'll find new metrics you've never heard of — tbh used **hourly actives per day** (not DAU)
- *"You'll know it when you see it"*

### Lessons from tbh's Breakout
- **Everything breaks** at scale — every system needs to be replaced approximately every 3 days
  - Customer support system broke after 3 days → replaced → broke 7 days later → replaced again
  - This applies to every dimension of the company
- Must be **ruthless with prioritization** — put out the largest fires first
- Geofencing the app (intentionally limiting growth) was controversial internally but gave them slack to keep it online
- First-time founders don't understand how draining breakout success is — you get spread incredibly thin

---

## 🏢 Facebook — 4 Years Deep Dive

### Joining
- Facebook assigned **80 people to the acquisition deal**; Nikita had just himself
- *"They were like the SWAT team of M&A"*
- Facebook came to their Oakland office — **$1,800/month rent**
- The whole company: **2 engineers, 1 designer, Nikita**
- Facebook reps: *"This is the whole company? This is the number one app in the United States?"*
- Joined the **Youth team** (~150 people for one division)
- Given the title of Product Manager — *"I don't know exactly what that is, but yeah, I guess that's what I do"*

### The Academic Environment
- Facebook felt like *"the Harvard of social networks"*
- People posting studies: *"If we change that, here's the impact to retention and DAU"*
- A whole science behind things Nikita had learned from first principles
- Impressive to see intuitions turned into systems and processes

### The PM Problem at Big Tech
- PMs are **not involved in the product** the way Nikita assumed
- Completely detached from the design process — there's a separate design vertical org
- PMs are mainly:
  - Writing documents
  - Being the **team secretary**
  - Running around getting approvals from cross-functional teams (legal, privacy, etc.)
  - Parsing reports from data scientists (not actually looking at data themselves)
- *"Products live and die in the pixels — that's on you"*
- Nikita considers himself a **designer** at core, not a PM
  - *"I'm great at growing things, looking at Mixpanel, and then designing the things that make it grow"*
  - But those two things are separated inside a large tech company
- His skills **atrophied** over 4 years due to disconnection from design process

### Snapchat/Apple Model vs. Google/Facebook Model
- Snapchat and Apple: **designers run the show** → leads to more novel products
- Google/Facebook: PMs as team secretaries → not optimal
- Neither is a silver bullet — rolling out a product inside a large org requires sheer force of will, project management, regulatory scrutiny, scaling

### Why Big Companies Struggle with Zero-to-One
- Hard to **verbalize** what motivates people to download apps in a corporate setting
  - Example: *"We're building an app for teens to flirt"* — doesn't land well in a VP meeting with McKinsey consultants
  - Hard to be intellectually honest about what you're building
  - When the team isn't honest about it, hard to iterate toward the right thing
- **Incentive problem:** people focused on yearly bonuses and performance reviews
  - Hard to present something based on a hunch with no market signals
  - You need to walk in saying *"Here's the number one app in the US and we don't own it"* — that's defensible if you fail
  - Vague abstract ideas are not defensible if they fail
- Result: **the only path is to copy existing products** to get momentum inside a large org
- Large companies take **12–24 months** to respond to competitive threats:
  - App charts → PM makes a post → market research team does a study → framing deck → VP reviews → team assembled → 6–12 months development

### The Tim Cook Painting
- Bought a pop art painting of Tim Cook on the street for their Oakland office
- Symbolic: *"Who actually controls our destiny is Apple"*
- Carried it between orgs at Facebook
- When relocated near Zuckerberg's desk, put it up on the wall — **giant Tim Cook overlooking Zuck**
- An EA eventually asked him to take it home

### New Product Experimentation (NPE) Group
- Nikita's favorite org at Facebook
- Worked with other founders and Silicon Valley legends
- Building **zero-to-one standalone apps**
- Built approximately **8 apps** while at Facebook
- Much harder to build apps at a large company:
  - Insights can't always be put in writing for VP meetings
  - Hard to align the organization around completely new concepts

---

## 📱 Gas — Full Deep Dive

### The Motivation to Rebuild
- After leaving Facebook, started tweeting about working on a new app
- Others started memeing it: *"I just tried Nikita's app, it saved my marriage"*, *"I just quit drinking"* — became a massive viral meme
- Didn't even have an app at the time — was just exploring ideas
- Market crashed (end of ZIRP era, Fed hiking rates) → portfolio down ~30%
- *"Maybe I should think about how to make money today"*
- Key question lingering from tbh: **what if we had monetized it?**
  - #1 support message from tbh users: *"Can I pay to reveal who sent me polls?"*
  - Would monetization have made more than the acquisition?
- Decided to rebuild — estimated 1–2 months; ended up much longer

### The New Team & Early Testing
- One engineer from a company called Paparazzi: **Zay Turner**
- Built it in Nikita's house
- First test: **same Georgia school, same day, exactly 5 years later**
- People sent a lot of messages but it wasn't growing → had to figure out why

### The Regulatory Problem
- tbh grew in 2017 partly through **Twilio SMS invites** — tap a contact name → hit Invite → Twilio sends a text
- Regulatory environment changed significantly over 5 years:
  - **Can't send texts from a server anymore** — must be sent from the user's device
  - Many tbh clones got this wrong and thought tbh sent texts when users voted — Nikita: *"That's egregiously illegal and unethical"*
- New flow: users had to pop the Compose window and manually hit Send → dramatically fewer invites sent
- Had to **completely reinvent all growth systems**

### The 9 Launches & Rebrands
- Went through **9 launches** including multiple rebrands
- Names tried: **Crush, Melt, Gas** (and others)
- **The Crush Problem:**
  - Got a great domain, thought it would be the name
  - Tested it → invitations dropped significantly
  - Discovery: boys invite boys, girls invite girls to apps
  - Boys didn't want to invite friends to an app called **Crush with a pink icon**
  - Data also showed the app indexed **60–65% women** (same was true for tbh)
  - Solution: make the app more masculine → **black icon with a flame, renamed Gas**
  - Invite rate jumped immediately
  - Lesson: **a name matters enormously** at the exact moment of sending an invite

### Sequential Validation Framework
Each of these was a distinct, challenging problem to solve:
1. Will people use the core flow?
2. Will it spread **within** a school/peer group?
3. Will it **hop** peer groups/schools?
4. Will people **pay** for it?

- Execute at **100%** for the one thing you're currently validating
- Half-ass everything else — reduces scope creep and gives clean signal
- *"If this is true, then what next needs to be true for this thing to work out?"*
- Condense to **~4 things that must be true** for the product to work — more layers = higher risk

### The Human Trafficking Hoax — Full Story
**How it started:**
- First signal: a support message with a screenshot of a Snapchat story saying *"Do not download the Gas app. It's for human trafficking"*
- Screenshot had been screenshotted ~40 times (visible usernames stacked)
- Nikita immediately recognized the pattern: *"This will be 10 times bigger tomorrow"*
- Team dismissed it: *"It's just one message"*
- 4 hours later: another message
- Next day: **entire App Store page covered in reviews** saying the app was for human trafficking

**Why this hoax spreads:**
- Saying an app is dangerous gets you attention as a teenager
- *"If you say 'this app is dangerous,' you get a bunch of followers — and who doesn't love followers?"*
- It's a **highly viral piece of content** to post
- This hoax has plagued many viral apps — founders Nikita spoke to said they had to shut down because of it

**The relaunch attempt:**
- Rebranded and relaunched on the other side of the country
- Started going viral again
- Then: one user was friends with someone in another state, got an invitation, told them *"Oh, that was in my state — it's actually for human trafficking"*
- The hoax **re-emerged completely** → too late to relaunch again
- Decision: *"We just have to fight this thing"*

**The fight — every vector:**
- Met with journalists and reporters
- Insisted that **The Washington Post** headline be: *"Gas app is NOT for human trafficking"* → became the #1 Google result for "Gas app human trafficking"
- Schools and police stations had posted warnings → Nikita **personally called superintendents and police chiefs** → got public retractions
- Got **App Store review bombs removed** by Apple
- Girlfriend made a **TikTok video** debunking the hoax → shown to any user who tried to delete their account
- Networked all the way to the **CEO of TikTok** → got false TikTok videos deleted
- Investors wanted meetings → Nikita: *"If you can't get a celebrity to post that this isn't true, we're not interested"*

**The metrics:**
- At peak: **3% of users deleting accounts per day** (catastrophic)
- Got it down to **0.1%** through relentless effort
- Key insight: *"Make sure the hoax is less viral than your app"* — at several points the hoax had a higher K-factor than the app itself

**The positive impact of Gas:**
- Received a message **every single day** from a user saying they reconsidered suicide or self-harm
- Built a system to ensure **everyone got voted for** — put your name in polls at higher frequency if you hadn't been voted on recently
- *"We wanted to spread the love in every way possible"*
- Instagram can make you feel jealousy; Gas was entirely focused on making teens feel better

### Results & Sale
- **$11M in revenue**, **10M downloads** — grew bigger than tbh
- Ran almost entirely on **startup credits** (AWS, Mixpanel) — no investors, pure cashflow
- Three companies wanted to buy it
- Sold to **Discord**
- Nikita's Twitter posts about it captured the zeitgeist → created the acquisition opportunity

---

## 🔑 Frameworks & Advice — Expanded

### Why People Download Apps (Nikita's Core Framework)
1. **Make or save money** — e.g., WhatsApp (free texting)
2. **Find a mate** — e.g., Tinder, Snapchat
3. **Unplug from reality** — e.g., Netflix, Fortnite
4. **Utilitarian movement** — e.g., Uber
5. **Utilitarian shelter** — e.g., Airbnb

- Hard to verbalize these motivations in a corporate framing document
- Particularly the nuanced reason why people will adopt — difficult to present to seasoned professionals who care about how it reflects on them personally

### Latent Demand — How to Find Product Ideas
- People are trying to obtain a value but going through a **distortive process** to get it
- Crystallize their motivation → build a product around it → intense adoption
- Example: Sarahah (#1 US app, entirely in Arabic) = people desperately want anonymous feedback but the best available tool is in a foreign language
- Example: TBH Snapchat trend = teens want positive disclosure but are doing it manually with emoji grids

### Time to Value — The 3-Second Rule
- In 2024, people's attention spans are approximately **3 seconds**
- Spread thin through notifications, products, everything
- If you can't demonstrate value in the first 3 seconds → it's over
- Also ties to contact sync: users need to see all their friends on the app on the **first night** or they'll churn
- **Invert the onboarding** so the aha moment is the first experience

### The Dupe.com Case Study — Full Detail

**The Product Discovery**
- Dupe was a shopping app with many features; one stood out: **Deal Hop**
  - Put in a product page URL → finds the cheapest version of it online
  - Something Nikita already did through duct-taped methods: Google Image Search, Google Lens
  - *"I was like, that should be a whole company"*
- Key questions Nikita asked:
  - How are we going to **teach users to do it?**
  - How do we expose them to the **aha moment as fast as possible** in a memorable, iconic way?

**The URL Trick Insight**
- Nikita had previously built a product where you just **type the domain in front of an existing URL**
- Told the Dupe team: *"You should try this — it's very marketable, but you need a very short domain that matches what you're doing"*
- The founder went out and bought **Dupe.com**
- Nikita's reaction: *"If this doesn't work, I'm going to feel terrible — but if it does work, it's going to be a blowout success"*
- The mechanic: type **dupe.com/** in front of any product URL → instantly find the cheapest version
- This is the **time to value** principle in action:
  - The aha moment happens in literally seconds
  - No onboarding, no sign-up friction, no explanation needed
  - The action itself IS the demonstration of value
  - Users remembered exactly what to do because the mechanic was so simple and iconic

**The Results**
- Put out a couple of videos about it → went viral immediately
- Users remembered to do it — type dupe.com in front of a URL
- Making **millions in ARR** in under **60 days** of launching
- Nikita: *"That was a blowout success"*
- Of all the companies Nikita works with:
  - **~50% of the time** they hit that level of success
  - **~50% of the time** it's outright failure — *"consumer is so random"*

---

## ⏱️ Time to Value — Full Framework

**The Core Principle**
- In 2024, people's attention spans are approximately **3 seconds**
- *"It's really sad, but we are spread thin through so many notifications, products, everything"*
- If you can't demonstrate value in the first 3 seconds → it's over
- This also ties directly back to the contact sync problem:
  - You sign up → first night you need to see all your friends on the app and experience it
  - Otherwise you will churn
  - The first session is everything

**Inverting the Onboarding**
- Traditional onboarding: sign up → tutorial → find friends → eventually experience value
- Nikita's approach: **invert it** so the user experience IS the aha moment within seconds
- Requires being extraordinarily creative with how you use available tools to activate a user
- *"Extraordinary product people are deeply aware of every possible API and how it can be used in non-traditional ways"*
- The URL trick for Dupe was non-traditional — people adopted it very quickly
- Nikita has a whole laundry list of iOS mechanisms that people use in a certain way today but could be inverted

**Contact Sync as an Example of Inverting**
- Traditional use: sync contacts → find friends already on the app
- Inverted use: sync contacts → **rank people who are NOT on the app yet but have a bunch of friends on it** → one-tap expose a ton of value
- *"There's a bunch of ways that you can one-tap expose a ton of value to users that founders often neglect"*
- Common founder mistake: *"Oh, they can just exchange usernames and that's how they can add each other"*
  - Nikita: *"That is the most unrealistic thing ever"*
  - To get a 50-person friend list by exchanging usernames = approximately **10,000 taps**
  - Contact sync = **1 tap**
  - That's the difference between activation and churn

---

## 📱 iOS 18 Contact Permissions — Full Detail

**The Old Flow**
- Average **65% approval rate** across all apps for contact permissions
- Higher for teens, lower for adults
- Once approved → app accesses full contact list → finds friends → flywheel starts spinning

**The New iOS 18 Flow**
- After granting permission, users now see an **alphabetical list** and must manually select which contacts to allow the app to access
- Problem 1: Nikita has **550 contacts** — the first 10 are punctuation symbols from dirty entries made while driving
- Problem 2: Must scroll down and find each specific person manually
- Problem 3: If those contacts aren't app users, the connection never happens anyway
- Example: *"I have to find Lenny. I have to add you. And what if you're not an app user? So I just added you or three others — assuming users are willing to even do that — and you and the three others never sign up"*
- Result: dramatically fewer meaningful connections made through contact sync

**The Implications**
- *"It's going to be very difficult to find friends on apps going forward"*
- Founders will need to **completely rethink** how they do friend-finding and invitations
- Nikita's prediction: **most apps will not have social graphs going forward**
- This will **entrench incumbents even more** — they already have the graphs
- Nikita's criticism of Apple: *"I don't think Apple acknowledged that. I think the person that designed the feature probably has never built an app or done contact sync before"*
  - The flow is *"egregiously bad"*
  - Doesn't actually benefit user privacy — it just eliminates the feature altogether

**What Founders Should Do**
- If you're betting on contact sync as a growth mechanism right now: **start thinking about Plan B immediately**
- Nikita and the companies he works with through intro are actively looking at ways to reinvent what contact sync is or what purpose it served
- *"It's not promising, but we have some good leads"*
- Prediction: *"We'll have a whole new set of apps emerging as a consequence"*
- Opportunity: whoever cracks a new friend-finding mechanic will have a **huge advantage**

---

## 🔑 Advising Approach — Full Detail

**First Steps When Engaging a New Company**
- Ask them to **show the analytics** immediately
- Look at how people are distributing the app today
- Identify: what is the **milestone a user must hit to become activated?**
- Identify: what is **getting in the way** of that milestone?
- Take a very deep look at **every funnel** users come through

**The Unified Funnel Philosophy**
- A lot of founders **separate marketing and product growth** — top of funnel from in-app growth mechanisms
- Nikita's view: *"They're both the same — they should both be treated as the same"*
- Full alignment required:
  - If targeting a community → build marketing that shows imagery of that community
  - When users get in the app → they must be able to join that community
  - When they invite people from the app → that community must be mentioned
  - *"You need to actually cover everything from the ads to the in-app experience — all of that needs to be aligned for a user acquisition flywheel to spin"*
- *"A lot of people really screw that up"*

**The Two-Track Approach**
1. **Table stakes growth fixes** — get all the basics right immediately
2. **Two to three step-function changes** — higher scope, fundamental changes to the product that could change the growth trajectory entirely
- Explain which direction he believes they should go → have a conversation → once they settle on a direction → **get into Figma**
- Does **live Figma sessions** with the team
- *"I identify: oh, that's going to convert at this percent"*
- Gets into the pixels directly — not just high-level advice

**Who He Works With**
- Works across the gamut — mostly **consumer mobile** companies, some web
- Works with companies across all stages
- Recommends only **venture-backed companies** book him due to cost
- Has invested in approximately **10% of companies** that seek his advice
- Generally post-Series A, some seed stage
- *"It's kept my mind sharp on where the market is headed"*

**The Growth Hacks**
- Over years of building all these apps, has accrued **growth hacks that still nobody knows about**
- Shares them when relevant for the specific company he's working with
- Dupe was one example
- Saturn Friend Finder rebuild was another

---

## 🏗️ On Building Durable Consumer Apps — Full Detail

**Why Durability Is So Hard**
- The fundamental tools for communicating with friends — messaging or broadcasting one-to-many (stories) — incumbents have built **very large moats** in terms of network effects
- To provide a truly order-of-magnitude better experience is non-trivial:
  - Incumbents have been improving these products significantly over the years
  - There aren't that many entry points left
- *"Finding durability for a communication or social product — that's a black swan event"*
- Retention for consumer social involves a **tremendous amount of randomness**
- *"There's one every decade"*
- *"If it was simple, I would just be printing $1 trillion companies — I'd be printing Facebooks every time I sat down"*
- A lot of it is **pure randomness**

**What IS Possible**
- Growing a product can be a **science**
- *"With certainty, if you're good at your job, you can make an app grow and go viral"*
- Snapchat showed there was a style of messaging people wanted that incumbents weren't serving
- There are edges you can go after with a much higher probability of success
- But those edges might not be durable necessarily

**Why Nikita Hasn't Tried to Build Something Durable**
- His favorite part of product development: making something through the night and watching it take over the internet
- *"That is the most thrilling drug I think you could ever experience"*
- Watching it spread all over the country — dropping an app in Georgia and seeing 40% of a high school in Los Angeles download it one week later
- *"It's crazy to have that sort of impact as a three-person team — and I live for that"*
- At Facebook, his peers were looking up to VPs wanting to run large organizations
- The VPs were actually **jealous of Nikita** — his quality of life was better:
  - Built something high impact
  - Made teens feel better about themselves
  - Made a decent amount of money
  - Wasn't stuck being a people manager running a large organization for many years
- *"I don't think running a large corporation is necessarily what I describe as fun"*

**On Venture Scale**
- *"I think one day I will run maybe a venture scale business"*
- But: *"Do I want to sign up for 10 years?"*
- The actual proceeds many founders get after an IPO — after 7 rounds of dilution — are often **comparable to what Nikita gets from his apps for 90 days of work**
- If he ever did it: would do it under a **very specific set of operating principles** — not turn it into a big tech company
- Would keep the team **lean** — most iconic example: Elon Musk's teams are actually pretty thin and he's in the weeds doing product development
- tbh was venture backed — but that was a specific situation

---

## ⚡ Rapid-Fire Quotes — Expanded Context

> *"Products live and die in the pixels — that's on you."*
- Said in context of zero-to-one product development inside large companies and startups alike — the PM or founder must own the design

> *"With certainty, if you're good at your job, you can make an app grow and go viral."*
- Growing is a science; durability is a black swan — these are two very different things

> *"If there's any uncertainty about product-market fit, it's not working."*
- From Roger Dickey — it's binary for consumer products; you will know

> *"The internet will come back and defend itself if you do wrong by users."*
- The Gaia Hypothesis applied to the internet — always operate above board with growth systems

> *"Every tap on a mobile app is a miracle."*
- Users switch apps constantly; every single tap is scarce and should be optimized

> *"If you build for adults, expect to acquire every user with ads."*
- Invitations drop 20% per year of age from 13–18; adults simply don't invite people to new apps

> *"I'll never build anything like that."*
- Said about anonymous apps that lead to bullying — his personal rule that led directly to the positive-only poll mechanic of tbh and Gas

> *"Make sure the hoax is less viral than your app."*
- The K-factor of a hoax is a real metric you have to manage when you go viral

---