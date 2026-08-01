/* PROJECTS
   Edit freely. Each file calls NM.add([...]) and the graph picks it up.
   Node shape: id, kind, cat, parent, label, kicker, title, body, more, foot, tags
*/

NM.add([

{ id:"edgar", kind:"sub", cat:"Projects", label:"SEC EDGAR Analysis", parent:"prj",
  kicker:"Projects · In development", title:"Buffett-style analysis platform",
  body:"XBRL parsing straight from SEC filings into a nine-category scoring model.",
  more:"Pulls financial data directly from SEC EDGAR filings, parses the XBRL, and scores companies across nine categories in a value-investing frame.\n\nThe hard part isn't the scoring model — it's that filing structure varies wildly between companies and across years. Two firms reporting the same concept will tag it differently, and a parser that works perfectly on one filer will silently produce garbage on the next.\n\nWhich makes it a good exercise in the thing I care about generally: knowing when your pipeline is confidently wrong.",
  foot:"Python · XBRL · in development",
  links:[{label:"GitHub", url:"https://github.com/nealm682"}],
  tags:["Python","XBRL","SaaS"] },

{ id:"fs", kind:"sub", cat:"Projects", label:"Full Semester", parent:"prj",
  kicker:"Projects · 2025", title:"Full Semester",
  body:"AI edtech tool: syllabus in, colour-coded semester calendar out. Founder.",
  more:"Extracts every date and deliverable from unstructured course syllabi and writes them into Google Calendar, colour-coded by class, as a single chronological master list.\n\nThe insight was that students lose points to logistics rather than difficulty — the assignment they forgot, not the one they couldn't do. The extraction problem is genuinely hard, because a syllabus is a document format with no format.\n\nFounded and built it; it didn't reach sustainable traction. Worth including precisely because it didn't.",
  foot:"Python · React · Google Calendar API",
  tags:["Python","React","EdTech"] },

{ id:"pt", kind:"sub", cat:"Projects", label:"Premium Tracker", parent:"prj",
  kicker:"Projects · Live", title:"Premium Tracker",
  body:"Google Workspace Marketplace add-on for options traders. Taken through full marketplace approval.",
  more:"A Workspace add-on that tracks options premium for traders, live at getpremiumtracker.com.\n\nThe build was the easy half. The other half — OAuth scopes, verification, privacy policy, security assessment, and Marketplace review — is the part that turns a working script into something a stranger can install. It is tedious, it is where most side projects die, and doing it once end-to-end is worth more than three more prototypes.",
  foot:"Google Workspace · OAuth · live",
  links:[{label:"getpremiumtracker.com", url:"https://getpremiumtracker.com"}],
  tags:["Workspace","OAuth","Fintech"] },


]);
