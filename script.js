gsap.registerPlugin(ScrollTrigger);

const topicData = [
  {
    title: "AI / ML",
    description:
      "Start with data, features, training, evaluation, and the difference between prediction and reasoning.",
    tags: ["supervised learning", "metrics", "pipelines"],
  },
  {
    title: "Deep Learning",
    description:
      "Move into neural networks, backpropagation, optimization, and why scale changes model behavior.",
    tags: ["NNs", "loss", "optimizers"],
  },
  {
    title: "GenAI",
    description:
      "Learn how models generate text, images, and code with prompts, context, and structured outputs.",
    tags: ["prompting", "generation", "multimodal"],
  },
  {
    title: "LLMs",
    description:
      "Understand tokenization, context windows, fine-tuning, RAG, and safe deployment patterns.",
    tags: ["tokens", "RAG", "fine-tuning"],
  },
  {
    title: "NLP",
    description:
      "Work with language tasks such as classification, summarization, extraction, and question answering.",
    tags: ["text", "embeddings", "retrieval"],
  },
  {
    title: "Computer Vision",
    description:
      "Use images and video for classification, detection, segmentation, and visual understanding.",
    tags: ["CNNs", "detection", "segmentation"],
  },
  {
    title: "Agentic AI",
    description:
      "Connect models with tools, memory, planning, and feedback loops to create autonomous workflows.",
    tags: ["tools", "memory", "planning"],
  },
];

const roadmapData = [
  {
    title: "Build foundations",
    description:
      "Learn core Python, data handling, probability, evaluation, and the vocabulary used across ML projects.",
  },
  {
    title: "Practice deep learning",
    description:
      "Train small neural networks, inspect loss curves, and understand how architecture changes accuracy.",
  },
  {
    title: "Add language workflows",
    description:
      "Work with prompt design, embeddings, retrieval, and chat interfaces for LLM-powered products.",
  },
  {
    title: "Prototype vision and agents",
    description:
      "Combine image understanding, tool use, and planning to create complete end-to-end demos.",
  },
];

const exampleData = [
  {
    title: "Image classification",
    description: "Predict categories for images with preprocessing, augmentation, and a simple training loop.",
    stack: ["CNN", "augmentation", "metrics"],
  },
  {
    title: "Text generation",
    description: "Generate short essays, summaries, or answers with prompt templates and controlled outputs.",
    stack: ["LLM", "prompting", "temperature"],
  },
  {
    title: "Chat assistant",
    description: "Build a friendly interface that keeps context, shows responses, and supports follow-up questions.",
    stack: ["UI", "memory", "streaming"],
  },
  {
    title: "Object detection",
    description: "Locate multiple objects in an image and return boxes, labels, and confidence scores.",
    stack: ["CV", "boxes", "post-processing"],
  },
  {
    title: "Simple agent workflow",
    description: "Let a model plan steps, call tools, inspect results, and continue until the task is done.",
    stack: ["tools", "planner", "loop"],
  },
];

const demoData = [
  {
    title: "Navigation drawer demo",
    description: "A GSAP slide-out menu with staggered menu items.",
    href: "NevBar/index.html",
  },
  {
    title: "Custom cursor demo",
    description: "A cursor interaction showcase for hover-based UI feedback.",
    href: "courser/index.html",
  },
  {
    title: "Scroll marquee demo",
    description: "A horizontal scroll animation with wheel direction control.",
    href: "scrollTextAnimation/index.html",
  },
  {
    title: "SVG path demo",
    description: "A mouse-driven SVG curve animation with GSAP easing.",
    href: "SVG/index.html",
  },
  {
    title: "Text animation demo",
    description: "A split-letter reveal animation built with GSAP timelines.",
    href: "textAnimations/index.html",
  },
];

function renderCards() {
  const topicGrid = document.querySelector("#topicGrid");
  const roadmapList = document.querySelector("#roadmapList");
  const examplesGrid = document.querySelector("#examplesGrid");
  const demosGrid = document.querySelector("#demosGrid");

  topicGrid.innerHTML = topicData
    .map(
      (item) => `
        <article class="topic-card" data-reveal>
          <p class="eyebrow">${item.title}</p>
          <h3>What to learn</h3>
          <p>${item.description}</p>
          <ul>
            ${item.tags.map((tag) => `<li>${tag}</li>`).join("")}
          </ul>
        </article>
      `
    )
    .join("");

  roadmapList.innerHTML = roadmapData
    .map(
      (item, index) => `
        <article class="roadmap-card" data-reveal>
          <div class="step">0${index + 1}</div>
          <div>
            <h3>${item.title}</h3>
            <p>${item.description}</p>
          </div>
        </article>
      `
    )
    .join("");

  examplesGrid.innerHTML = exampleData
    .map(
      (item) => `
        <article class="example-card" data-reveal>
          <h3>${item.title}</h3>
          <p>${item.description}</p>
          <ul>
            ${item.stack.map((tag) => `<li>${tag}</li>`).join("")}
          </ul>
        </article>
      `
    )
    .join("");

  demosGrid.innerHTML = demoData
    .map(
      (item) => `
        <article class="demo-card" data-reveal>
          <h3>${item.title}</h3>
          <p>${item.description}</p>
          <a href="${item.href}">Open demo <span aria-hidden="true">↗</span></a>
        </article>
      `
    )
    .join("");
}

renderCards();

gsap.from(".hero-copy > *", {
  y: 28,
  opacity: 0,
  duration: 0.8,
  stagger: 0.12,
  ease: "power3.out",
});

gsap.from(".hero-panel", {
  x: 40,
  opacity: 0,
  duration: 1,
  ease: "power3.out",
});

ScrollTrigger.batch("[data-reveal]", {
  start: "top 82%",
  onEnter: (batch) =>
    gsap.from(batch, {
      y: 24,
      opacity: 0,
      duration: 0.7,
      stagger: 0.12,
      ease: "power3.out",
      overwrite: true,
    }),
});

document.querySelectorAll(".topic-card, .example-card, .demo-card, .stat-card").forEach((card) => {
  card.addEventListener("mouseenter", () => {
    gsap.to(card, {
      y: -6,
      duration: 0.2,
      ease: "power2.out",
    });
  });

  card.addEventListener("mouseleave", () => {
    gsap.to(card, {
      y: 0,
      duration: 0.25,
      ease: "power2.out",
    });
  });
});

gsap.to(".orb-one", {
  y: 24,
  x: -14,
  duration: 5,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut",
});

gsap.to(".orb-two", {
  y: -20,
  x: 16,
  duration: 6,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut",
});
