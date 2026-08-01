/* PAINTED UI — third-layer nodes.
   These hang off the "painted" sub-node from 70-concepts.js.
   Set parent to any sub id and kind to "leaf" to add a third level anywhere.

   Sourced from the painted-ui wiki (github.com/nealm682/painted-ui).
*/

NM.add([

{ id:"illusion", kind:"leaf", cat:"Concepts", label:"The Illusion", parent:"painted",
  kicker:"Painted UI · the core claim", title:"It decomposes into four things",
  body:"The feeling that a screen is being painted live by a model is not one thing. It's four — and none of the four requires generating pixels with a model.",
  more:"Fluid layout: content that reshapes continuously to the window rather than snapping between authored breakpoints. The animation is what upgrades 'responsive' to 'repainted'.\n\nLive motion: perpetual low-amplitude movement, the absence of the frozen-pixel tell that marks every traditional interface. The cheap path actually beats the expensive one here — 60fps on the user's GPU versus 24fps generated.\n\nUniversal interactivity: the collapse of the widget/decoration distinction, so the user stops being able to predict what's inert.\n\nProgressive arrival: things appearing as if drawn rather than appearing finished.\n\nIf the decomposition holds, generating video is an implementation detail rather than the product — which is the whole thesis.",
  foot:"wiki/concepts/the-illusion",
  links:[{label:"Read it on the wiki", url:"https://nealm682.github.io/painted-ui/"}],
  tags:["Thesis","Decomposition"] },

{ id:"compositing", kind:"leaf", cat:"Concepts", label:"Client Compositing", parent:"painted",
  kicker:"Painted UI · rendering", title:"The user's GPU does the work",
  body:"Rendering the motion layer on the visitor's own hardware is the reason marginal cost per user is close to zero.",
  more:"The motion vocabulary, roughly by cost: Ken Burns pans on imagery — the cheapest 'this is alive' signal. Cross-dissolves and morphs, so state changes blend instead of snapping. Spring-based layout resolve, so elements glide to new constraint solutions on resize. Ambient drift, which kills the static-page tell. Progressive reveal, elements stroking in as if being drawn. Breathing on idle affordances.\n\nAll of it runs at 60fps on integrated graphics and costs the operator nothing per user.\n\nOne rule came out of the experiments and is easy to get wrong: ambient motion must keep running through transitions. An image that drifts while it cross-dissolves reads as painted; one that freezes to transition reads as a slideshow.",
  foot:"wiki/concepts/client-side-compositing",
  links:[{label:"Read it on the wiki", url:"https://nealm682.github.io/painted-ui/"}],
  tags:["Canvas","60fps","Zero marginal cost"] },

{ id:"choreo", kind:"leaf", cat:"Concepts", label:"The Choreographer", parent:"painted",
  kicker:"Painted UI · architecture", title:"Who decides how things move",
  body:"A theatre metaphor: the director decides what exists, the choreographer decides how it moves, the painter executes at 60fps, and the stage is the shared node map.",
  more:"The choreographer exists because live runs showed two things. Model taste in choosing motion is variable, and every transition hint costs tokens — roughly 30–40% of scene output was transition detail.\n\nMoving the how-decision from the model into local policy converts tokens into code: money, latency, and variance become free, instant, and deterministic. Five forces pushed the same direction — taste variance, token cost, brand consistency, testability, and interruption handling, since retargeting has to happen in one frame rather than one round trip.\n\nThe enterprise-shaped answer is that the model emits semantic operations only, and the policy maps them to motion. Which makes the motion design system versioned code rather than a prompt.",
  foot:"wiki/concepts/choreographer",
  links:[{label:"Read it on the wiki", url:"https://nealm682.github.io/painted-ui/"}],
  tags:["Policy","Token cost","Design system"] },

{ id:"semantics", kind:"leaf", cat:"Concepts", label:"Semantic Hit-Testing", parent:"painted",
  kicker:"Painted UI · interactivity", title:"Identity beats inference",
  body:"In a pixels-only system, a click has to be inferred from the frame. With a scene graph, every node already carries identity — so hit-testing is exact, instant, and free.",
  more:"The comparison is lopsided. Inferred hit-testing costs a model round trip and can land on the wrong target. Geometric hit-testing against nodes that know what they are costs about zero milliseconds and cannot be wrong, because identity is explicit rather than guessed. Hover states are free instead of needing to be generated. Feedback latency is one frame instead of one generation.\n\nThe honest catch: pixel inference can make something interactive that nobody predicted — the model decides after the fact that a cloud in the illustration is clickable. To match that, the scene-graph approach needs the model to be able to promote any existing node to interactive with a cheap incremental patch, plus a fallback that sends the click position and the node under it to the model when nothing matches.",
  foot:"wiki/concepts/interactivity-from-semantics",
  links:[{label:"Read it on the wiki", url:"https://nealm682.github.io/painted-ui/"}],
  tags:["Scene graph","Hit-testing","Latency"] },

{ id:"cost", kind:"leaf", cat:"Concepts", label:"The Cost Model", parent:"painted",
  kicker:"Painted UI · economics", title:"Why the cheap path scales",
  body:"Video frames are perishable. Static assets are durable. That single distinction is why image generation amortizes and video generation never will.",
  more:"A generated video frame is conditioned on one user's live session state, which makes it worthless to anyone else — one dedicated GPU stream per user, for every second they're on screen. A scene graph costs tokens per interaction, bursts, then costs nothing between interactions, and the rendering is paid for by the user's own hardware.\n\nMeasured rather than assumed: a scene graph moved 1.25 KB once per scene, against roughly 15 MB per minute for a conservative 1080p24 stream — about a 12,000× bandwidth advantage per minute on screen, with server GPU-seconds near zero instead of one dedicated stream per viewer.\n\nA 20-operation, 18-second animated sequence streamed in about 2.4 KB total.",
  foot:"wiki/concepts/cost-model · measured in exp-01 and exp-02",
  links:[{label:"Read it on the wiki", url:"https://nealm682.github.io/painted-ui/"}],
  tags:["Economics","Measured","Bandwidth"] }

]);
