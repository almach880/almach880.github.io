/* HUBS — the five primary branches
   Edit freely. Each file calls NM.add([...]) and the graph picks it up.
   Node shape: id, kind, cat, parent, label, kicker, title, body, more, foot, tags
*/

NM.add([

{ id:"exp", kind:"hub", cat:"Experience", label:"Experience",
  kicker:"Experience", title:"Enterprise AI, 2020 → now",
  body:"Conversational and agentic AI across insurance, financial services, and now HR technology. Started in conversational UX, moved into intent modeling, then into building the agents themselves.",
  more:"The career has two arcs that turned out to converge.\n\nThe first ran 2004–2019: employer benefits strategy, operations leadership, ecommerce direction, and C-suite strategy with P&L ownership. Revenue growth, team building, and a lot of time in rooms with non-technical decision makers.\n\nThe second started in 2020 with a contract role designing conversational UX, and got progressively more technical — intent modeling, then production chatbot engineering, then agent architecture.\n\nMost AI engineers can't run a stakeholder meeting. Most operators can't ship an agent. The overlap is small, and it is the entire reason I get pulled into ambiguous problems where nobody has written the requirements yet.",
  foot:"ADP · Aetna · Lincoln Financial · Digitel · ABC Water",
  tags:["ADP","Aetna","Lincoln Financial"] },

{ id:"skl", kind:"hub", cat:"Skills", label:"Skills",
  kicker:"Skills", title:"What I actually do",
  body:"Deep conversational-AI expertise plus modern agent tooling. Production systems, not demos — the things I've built serve tens of millions of users monthly.",
  more:"The older half is conversational AI: intent design, dialog state, fallback strategy, and the unglamorous accuracy work that decides whether any of it survives contact with real users. Ten-plus years across Watson, Dialogflow, and TypeScript flows.\n\nThe newer half is agent architecture and context engineering. Looping LLM systems with tool calls, structured output enforcement, and permission gating — and the curated context layers that make them accurate rather than merely fluent.\n\nLanguages: TypeScript, Node, Python on the backend; Stencil, React, and Dart/Flutter on the front. MongoDB. I move across the stack fluidly, which is much easier now than it was three years ago.\n\nThe skill I'd actually lead with isn't on any of these lists: I can tell when an AI system is confidently wrong, and I know how to find out why.",
  foot:"Expert: conversational AI · Advanced: agents, prompt eng., delivery",
  tags:["Conversational AI","Agents","Context engineering"] },

{ id:"prj", kind:"hub", cat:"Projects", label:"Projects",
  kicker:"Projects", title:"Built on my own time",
  body:"Enterprise agents in production during the day; self-built SaaS at night across fintech, edtech, and health. Full lifecycle — including one through Google Workspace Marketplace approval.",
  more:"The side projects are where I learn the parts of the stack my day job doesn't touch — frontend, database design, auth, billing, deployment, and the tedious compliance work that separates a demo from a product.\n\nPremium Tracker went all the way through Google Workspace Marketplace review, which is most of the work nobody sees. Full Semester was a founder attempt at edtech. The EDGAR platform is an ongoing exercise in parsing filings that refuse to be consistent.\n\nNone of these made me rich. All of them made me faster at the day job, which was the actual return.",
  foot:"github.com/nealm682",
  tags:["SaaS","Fintech","EdTech"] },

{ id:"app", kind:"hub", cat:"Approach", label:"Approach",
  kicker:"Approach", title:"Six things, and they compound",
  body:"Most people using AI to code are prompting. I'm running a system — six elements, each covering a failure mode of the others.",
  more:"If you asked why I'm measurably better at this than I was a year ago, it isn't one technique. It's six that reinforce each other:\n\n<strong>1 · The harness.</strong> An agent with real filesystem access, connected to the systems the work actually lives in.\n\n<strong>2 · The wiki.</strong> Ground truth and rules, maintained deliberately, so agents start with compounding context.\n\n<strong>3 · Skills.</strong> Repetitive work explained once and executed the same way every time.\n\n<strong>4 · Hooks.</strong> Guarantees that fire whether or not the model cooperates.\n\n<strong>5 · Spec-driven development.</strong> Most of the thinking happens before implementation, in markdown.\n\n<strong>6 · HTML explainers.</strong> Visual artifacts that teach me the material — and prove the agent understood it.\n\nEach one covers something the others miss. The harness fixes the model not seeing the real system. The wiki fixes it starting cold. Skills fix the same task being done differently every time. Hooks fix instructions being ignored. Specs fix ambiguity getting resolved by improvisation. Explainers fix misunderstanding staying invisible until it ships.\n\nProject managers started asking how I produce this much detail. That was the signal it was worth naming rather than just doing.",
  foot:"Harness · wiki · skills · hooks · specs · explainers",
  tags:["Claude Code","Spec-driven","Context engineering"] },

{ id:"cpt", kind:"hub", cat:"Concepts", label:"Concepts",
  kicker:"Concepts", title:"Ideas I'm working out in public",
  body:"The things I'm actively thinking about, written up as I go. Some are load-bearing in production work; some are side-project research that hasn't found its application yet.",
  more:"This branch is the one I expect to grow fastest.\n\nWriting a concept down is how I find out whether I actually understand it. Most of these started as something I built, hit friction with, and only understood properly on the third attempt — which is why the notes include what didn't work rather than just the conclusion.\n\nThe painted-UI research is a genuine side obsession: reproducing the feeling that a screen is being painted live by a model, at near-zero marginal cost per user. This page is a working instance of it.\n\nClick into any of these for the long version.",
  foot:"Expand this branch — each node is a note in progress",
  links:[{label:"painted-ui", url:"https://nealm682.github.io/painted-ui/"}],
  tags:["Research","Notes","Painted UI"] },


]);
