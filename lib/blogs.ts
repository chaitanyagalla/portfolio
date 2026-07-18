export type BlogPost = {
  slug: string;
  date: string;
  title: string;
  excerpt: string;
  tag: string;
  readTime: string;
  mdx: string;
  relatedProjectSlug: string;
  relatedProjectLabel: string;
};

export const blogs: BlogPost[] = [
  {
    slug: "agentic-loop",
    date: "Jul 2026",
    title: "The Agentic Loop",
    excerpt:
      "A useful agent is not a chat box with tools. It is a small loop that can observe, choose, act, and check its own work.",
    tag: "AI Systems",
    readTime: "4 min read",
    relatedProjectSlug: "job-scout-agent",
    relatedProjectLabel: "See the Job Scout Agent architecture",
    mdx: `## Start With The Loop

An agentic system is easiest to understand as a loop. It observes the current state, decides what should happen next, uses a tool, reads the result, and repeats until the task is done or the system needs a human decision.

That sounds simple, but most weak agent demos fail because the loop is vague. The model is asked to do too much in one step. It guesses at missing state, calls tools without enough structure, and returns an answer that looks confident but is hard to verify.

## Keep The State Small

The loop gets better when the state is small and explicit. The agent should know the user goal, the current inputs, the tools it can use, and the last result. Everything else should be fetched or derived when needed.

This keeps the system easier to debug. If a run fails, you can inspect the state and see whether the problem came from the input, the decision, the tool result, or the final response.

## Tools Should Be Boring

Good tools are boring. They take clear arguments, return predictable data, and fail in a way the agent can understand. A search tool should return search results. A parser should return parsed fields. A database tool should return records or a useful error.

The more a tool hides, the harder the loop becomes to trust. The agent should not need to guess whether a tool worked. The result should make that obvious.

## The Model Is The Planner

The model is strongest when it is used as the planner inside the loop. It can decide which tool to call, compare results, notice missing information, and explain the next step. It should not be treated as the database, the validator, or the entire backend.

This is the difference between adding AI to a product and letting AI swallow the product. The system around the model still matters.

## Stop Conditions Matter

Every loop needs a clean stopping point. The agent should know when it has enough information, when it should ask the user, and when it should stop because the task cannot be completed safely.

Without stop conditions, the system keeps calling tools, repeats itself, or invents an ending. A reliable agent is not one that keeps going forever. It is one that knows when the work is complete.

## What I Build Toward

When I build agent workflows, I try to make each step inspectable. Inputs should be visible. Tool calls should be clear. Outputs should be validated. The final answer should be connected to the work the system actually did.

That is the agentic loop I care about: not theatrical, not mysterious, just a practical system that can move through a task and leave enough evidence behind to trust it.`,
  },
  {
    slug: "explainable-job-matching",
    date: "Jul 2026",
    title: "A Job Match Score Should Explain Itself",
    excerpt:
      "Ranking jobs is easy to demo and hard to trust. The useful version shows its signals, exposes hard blockers, and keeps the model out of the arithmetic.",
    tag: "Agent Engineering",
    readTime: "3 min read",
    relatedProjectSlug: "job-scout-agent",
    relatedProjectLabel: "See the explainable matching implementation",
    mdx: `## Ranking Is Not The Same As Matching

A list sorted by an AI model can look convincing even when the ordering is arbitrary. For a job search agent, that is not good enough. A candidate needs to know why one role ranked above another and whether the system missed something important.

I treat matching as a small scoring system inside the larger agent workflow. The model helps interpret messy text and coordinate tools, but it does not get the final word on the score.

## Make The Signals Visible

The Job Scout Agent uses four signals: skill coverage, title alignment, experience gap, and keyword overlap. Together they produce a score from 0 to 100.

Each signal answers a different question. Does the candidate have the required tools? Is the role close to the work they want? Is the requested experience realistic? Does the posting contain important terms that also appear in the candidate profile?

Keeping those signals separate makes the result inspectable. If a score feels wrong, I can see which part pulled it up or down instead of asking a model to explain a number it invented.

## Hard Blockers Need Their Own Path

Some requirements should not disappear inside an average. A role that requires a location, certification, or level of experience the candidate cannot meet may still receive a decent score from its other signals.

That is why hard blockers are flags, not just negative points. The system can still show the role, but it has to say what prevents it from being a clean match. This is more useful than hiding the listing or presenting it with false confidence.

## Parse First, Score Second

Scoring only works when the candidate profile is structured. Resumes arrive as clean PDFs, unusual layouts, or scanned pages, so the parser uses a fallback chain: local text extraction first, an LLM-backed parser when structure is unclear, and vision only when the document needs it.

The output is validated before matching begins. A missing field stays missing rather than becoming a guessed skill or invented year of experience.

## The Explanation Is Part Of The Product

The final recommendation should include the score, the strongest matching signals, the gaps, and any hard blocker. That explanation is not decoration added after the ranking. It is part of the result.

Agents earn trust when users can follow the path from input to recommendation. A useful score does not ask to be believed. It shows its work.`,
  },
  {
    slug: "search-speed-is-a-product-feature",
    date: "Jul 2026",
    title: "Search Speed Is a Product Feature",
    excerpt:
      "A faster CRM search came from treating the browser, cache, query, and index as one path instead of optimizing each layer in isolation.",
    tag: "Product Engineering",
    readTime: "3 min read",
    relatedProjectSlug: "skillhigh-crm",
    relatedProjectLabel: "See the CRM performance case study",
    mdx: `## Slow Search Changes How People Work

In a CRM, search is not a secondary utility. It is how a sales team moves through the product. When every filter change produces a pause, people search less, trust the results less, and build workarounds outside the system.

The useful performance question was not simply, "How do we make PostgreSQL faster?" It was, "What happens from the moment someone types to the moment useful rows appear?"

## Start Before The Request

The first improvement happened in the browser. Debouncing prevented the interface from sending a request on every keystroke. That removed work the server never needed to perform and made the search behavior feel calmer.

Debouncing alone is not a backend optimization, but it changes backend load. Product performance often starts at the point where demand is created.

## Index The Queries People Actually Use

The next step was to look at common search paths and add PostgreSQL indexes around those access patterns. An index is only valuable when it supports a real query; adding them without looking at filters and sort order can create write overhead without improving the experience.

This work reduced common search response time from about 800 milliseconds to 240 milliseconds. The number mattered, but the more important result was that repeated searches stopped interrupting the user's flow.

## Cache Repeated Work

Redis handled frequently requested data that did not need a fresh database query every time. Cache keys and invalidation rules were kept close to the underlying query so it was clear what a cached result represented and when it should expire.

Combined with the query changes, caching lowered repeated query load by 60 percent. It also gave the database more room for requests that genuinely needed current data.

## Measure The Whole Path

Browser timing, API work, cache behavior, and database execution all contributed to the result. Looking at only one layer would have left obvious waste elsewhere.

That is the lesson I kept from the project: speed is not a final polish pass. In workflow software, it changes how confidently people use the product. That makes it a product feature, not just a backend metric.`,
  },
];

export function getBlogBySlug(slug: string) {
  return blogs.find((blog) => blog.slug === slug);
}
