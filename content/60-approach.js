/* APPROACH — how the work gets done
   Edit freely. Each file calls NM.add([...]) and the graph picks it up.
   Node shape: id, kind, cat, parent, label, kicker, title, body, more, foot, tags
*/

NM.add([

{ id:"wiki", kind:"sub", cat:"Approach", label:"Wiki-Grounded", parent:"app",
  kicker:"Approach", title:"Wiki-grounded delivery",
  body:"A persistent, self-updating engineering wiki giving agents compounding context on repos, components, and stakeholders.",
  more:"A knowledge base that knows my primary repos and directories, documented component by component — and where my own understanding is thin, mapped collaboratively with agents exploring the code alongside me.\n\nIt holds more than code structure. It knows the stakeholders, the communication standards, and how to articulate a complex change to an audience that won't read a technical document.\n\nThe maintenance is the work. It gets reviewed, expanded where thin, and trimmed where distracting — and a stale wiki is worse than no wiki, for exactly the same reason a stale policy document is.",
  foot:"Karpathy LLM-wiki pattern · brownfield onboarding",
  tags:["Context eng.","Brownfield"] },

{ id:"sim", kind:"sub", cat:"Approach", label:"Pre-Merge Simulation", parent:"app",
  kicker:"Approach", title:"Pre-merge simulation",
  body:"Simulating events, logic, and UI at the component level to validate a change before it merges.",
  more:"In specific directories I can simulate events, exercise logic, and preview how a component renders without merging first.\n\nThe value isn't speed, it's confidence. The normal loop — write, merge, wait for an environment, discover you were wrong — has a feedback delay long enough that you stop testing hypotheses and start guessing. Compressing that loop changes what you're willing to try.\n\nIt also means the change I hand over has already been wrong several times in private.",
  foot:"Component-level simulation · no merge required",
  tags:["QA","Validation"] },

{ id:"audit", kind:"sub", cat:"Approach", label:"Agentic Audit", parent:"app",
  kicker:"Approach", title:"Agent teams that audit me",
  body:"Independent agent teams re-check my own research against the repo before I implement.",
  more:"After I've researched how a component works, a separate agent team audits that conclusion against the actual repository — independently, without my reasoning in its context.\n\nThe reason this works is the same reason code review works: the failure mode isn't ignorance, it's confidence. A conclusion I reached an hour ago feels settled to me and looks like an untested claim to a fresh reader.\n\nIt catches a meaningful number of confident-but-wrong conclusions that would otherwise have shipped.",
  foot:"Independent verification pass · catches confident errors",
  tags:["Agents","Verification"] },


]);
