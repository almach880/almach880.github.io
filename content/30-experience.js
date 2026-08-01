/* EXPERIENCE — one node per role
   Edit freely. Each file calls NM.add([...]) and the graph picks it up.
   Node shape: id, kind, cat, parent, label, kicker, title, body, more, foot, tags
*/

NM.add([

{ id:"adp25", kind:"sub", cat:"Experience", label:"Sr Lead · ADP", parent:"exp",
  kicker:"Experience · 2025 → present", title:"Senior Lead App Developer, AI Assistant",
  body:"Builds semi-autonomous LLM agents that call tools across thousands of API endpoints to make multi-step decisions.",
  more:"Promoted into the senior lead role in April 2025 after three years on the chatbot team.\n\nThe work is agent architecture: looping LLM systems that resolve intent, check permissions, call tools through MCP, and decide what to do next — rather than the single request/response pattern the platform used before. A representative example: an employee profile agent that resolves which field the user means, asks a clarifying question when the intent is ambiguous, retrieves the on-file data through a tool call, and returns it with an edit path.\n\nThe hard part is almost never the model. It's deciding what the agent is allowed to do, what it should refuse, and how it behaves when a tool call fails halfway through a multi-step plan.",
  foot:"LangGraph · MCP · AWS Strands · TypeScript",
  tags:["LangGraph","MCP","Agents"] },

{ id:"adp22", kind:"sub", cat:"Experience", label:"Chatbot · ADP", parent:"exp",
  kicker:"Experience · 2022 – 2025", title:"Senior App Developer, Chatbot",
  body:"Led a Watson-to-TypeScript migration covering 65 agents across HR domains. Audited RAG prompts for accuracy using BLEU and ROUGE scoring.",
  more:"Started as a contractor, converted to full-time.\n\nThe migration moved 65 conversational agents off Watson and onto TypeScript flows, spanning benefits, payroll, time off, absence management, hiring, personal profile, and pay. Every one of them had accumulated edge cases that existed only in the old platform's behaviour, so the work was as much archaeology as engineering.\n\nThe other half was RAG accuracy auditing — reading what the system actually returned, scoring it with BLEU and ROUGE, and tracing wrong answers back to their cause. Worth being precise about scope: I was the prompt engineer and accuracy auditor on that system, not the person who built the embedding or retrieval infrastructure.",
  foot:"65 agents migrated · BLEU + ROUGE scoring",
  tags:["Watson","TypeScript","RAG audit"] },

{ id:"aetna", kind:"sub", cat:"Experience", label:"AI Modeler · Aetna", parent:"exp",
  kicker:"Experience · 2021 – 2022", title:"A.I. Modeler / Sr. App Developer",
  body:"NLU intent modeling on Watson that drove measurable cost-per-call savings.",
  more:"Intent classification, entity extraction, annotation, and ground truth creation for a member-facing conversational system in health insurance.\n\nThe measurable outcome was cost per call: every interaction the assistant resolved was one that didn't reach a human agent, and the savings were tracked per deflected call.\n\nGround truth creation is the least glamorous and most decisive part of NLU work. The model is only ever as good as the labelled examples underneath it, and most accuracy problems that look like model problems are labelling problems.",
  foot:"Watson NLU · ground truth · intent design",
  tags:["NLU","Watson","Cost per call"] },

{ id:"lincoln", kind:"sub", cat:"Experience", label:"UX · Lincoln", parent:"exp",
  kicker:"Experience · 2020 – 2021", title:"Conversational AI UX Designer",
  body:"Conversational and voice UX design on Dialogflow. Where the enterprise AI arc started.",
  more:"A contract role designing conversational and voice interactions for financial services — the transition point between the business career and the technical one.\n\nDesigning the interaction before learning to build it turned out to be the right order. Voice UI in particular teaches you things text interfaces let you avoid: there is no screen to fall back on, no scrollback, and no way to show three options at once. Every ambiguity has to be resolved in dialogue.\n\nA lot of what I now do in agent design — clarification paths, graceful failure, confirming before acting — comes directly from voice work.",
  foot:"Dialogflow · VUI · conversational design",
  tags:["Dialogflow","VUI"] },


]);
