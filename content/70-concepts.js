/* CONCEPTS — ideas worked out in public. Leaf nodes live in 71-.js
   Edit freely. Each file calls NM.add([...]) and the graph picks it up.
   Node shape: id, kind, cat, parent, label, kicker, title, body, more, foot, tags
*/

NM.add([

{ id:"loops", kind:"leaf", cat:"Concepts", label:"The Four Loops", parent:"painted",
  kicker:"Concepts", title:"Four processes at four speeds",
  body:"The architecture under this page: four loops running at different rates against one shared node map, joined by a single rule.",
  more:"Conversation runs once per interaction. Network reads deliver arbitrary text fragments 20–60 times a second with no boundary guarantees. A parser scans for complete objects and emits one patch each. The renderer redraws at display refresh, 60–144 times a second.\n\nThe rule that joins them: loops one through three <strong>mutate</strong> state; loop four <strong>samples</strong> it. A node that arrives mid-stream simply starts existing, and its entrance animation is a function of time-since-arrival. The overlap between still-arriving and already-animating is the painted-live effect.\n\nThis is the canonical game-loop pattern — simulation decoupled from rendering — with two extra producer loops on top, and one deliberate inversion: the rate mismatch between producer and consumer is treated as visible choreography rather than hidden behind a loading state.",
  foot:"Lineage: Nystrom's game loop · Fiedler's accumulator",
  tags:["Architecture","Game loop","Streaming"] },

{ id:"springs", kind:"leaf", cat:"Concepts", label:"Analytic Springs", parent:"painted",
  kicker:"Concepts", title:"Springs without integration",
  body:"Every animated value on this page is a damped harmonic oscillator solved in closed form — which is why it can be interrupted mid-flight.",
  more:"A duration-based tween is a scripted path from A to B. Change your mind halfway and you get a discontinuity you have to hide. A spring has a destination and no opinion about the route, so it can be retargeted at any moment.\n\nThe objection is that springs normally integrate per frame, which gives up frame-rate independence. They don't have to. A damped oscillator has an exact analytic solution: store (u₀, v₀, t₀) and evaluate at elapsed time. Same sampler shape, no accumulated error.\n\nRetargeting is then four lines — read current displacement and velocity, set a new target, carry the velocity through. The animation never stops, never snaps, and never queues.\n\nOne rule does most of the perceptual work: <strong>spatial</strong> properties overshoot, <strong>effects</strong> properties never do. Overshooting position reads as mass. Overshooting opacity reads as a flicker.",
  foot:"Verified against RK4 integration · six tokens, not forty knobs",
  tags:["Motion","Physics","M3 Expressive"] },

{ id:"painted", kind:"sub", cat:"Concepts", label:"Painted UI", parent:"cpt",
  kicker:"Concepts · Research", title:"Cheap painted UI",
  body:"Reproducing the illusion that a screen is being painted live by a model — at near-zero marginal cost per user.",
  more:"Generating actual video of an interface is spectacular and economically impossible at scale. The research question is how much of that feeling can be recovered with a small semantic stream and a client-side compositor doing the rest.\n\nThe answer so far is: most of it. The model emits semantic patches — what exists, what it means, how important it is. A choreographer turns intent into motion parameters locally, with no tokens spent on animation. The compositor paints. Cost per user approaches the cost of the text stream alone.\n\nWhat this buys that video generation cannot: interruption. You can change your mind mid-animation and the interface responds continuously, because the motion is being computed rather than played back.\n\nThis page is a working instance of the whole argument.",
  foot:"Side research · github.com/nealm682/painted-ui",
  links:[{label:"The painted-ui wiki", url:"https://nealm682.github.io/painted-ui/"}],
  tags:["Research","Generative UI","Canvas"] },

{ id:"quiesce", kind:"leaf", cat:"Concepts", label:"Quiescence", parent:"painted",
  kicker:"Concepts", title:"Knowing when to stop",
  body:"Ambient motion is a budgeted choice, not a default. After idle, this page stops the render loop completely.",
  more:"There's a real tension in expressive interfaces. Material's guidance is restraint — motion without meaning is clutter, and hero moments should be rare. Painted UI's instinct is the opposite: the painter never stops, because stopping breaks the illusion.\n\nHardware settles the argument. Variable-refresh displays drop to as low as 10 Hz when content is static, and that's where the battery saving lives. Continuous ambient motion pins the panel at its maximum rate indefinitely.\n\nSo: ambient drift is on by default, but it's budgeted. After idle with every spring settled, the loop genuinely stops — the HUD will read <strong>quiesced · 0 fps</strong>. Any input wakes it. The Live/Still toggle makes the budget explicit, and reduced-motion preferences remove bounce rather than removing motion.",
  foot:"Watch the HUD — leave the page alone for a few seconds",
  tags:["Performance","Accessibility","Battery"] },

{ id:"spec", kind:"sub", cat:"Concepts", label:"Spec-Driven", parent:"cpt",
  kicker:"Concepts", title:"Specs that steer",
  body:"A specification is not documentation written afterward. It's the instrument that aims the work before any code exists.",
  more:"The difference between a spec that steers an agent and one it wanders away from is mostly about decisions.\n\nA weak spec describes intent. A strong one records what was decided, what was rejected and why, and what remains open — so that when the agent hits an ambiguity, the answer is already written down instead of being invented plausibly.\n\nThe practical test: hand the spec to someone with no context and see whether they'd build the same thing. If two reasonable readers would diverge, the spec has a hole, and that hole is exactly where an agent will improvise.\n\nWriting them has changed my daily practice more than any tool. Most of the thinking now happens before implementation rather than during it.",
  foot:"Note in progress",
  tags:["Method","Planning","Agents"] }

]);
