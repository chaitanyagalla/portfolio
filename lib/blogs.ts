export type BlogPost = {
  slug: string;
  date: string;
  title: string;
  excerpt: string;
  tag: string;
  readTime: string;
  mdx: string;
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
];

export function getBlogBySlug(slug: string) {
  return blogs.find((blog) => blog.slug === slug);
}
