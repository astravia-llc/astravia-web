export type CaseStudyChallenge = {
  title: string;
  description: string;
  approach: string;
};

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  kind: "Product" | "Client Project";
  gradient: string;
  imageSrc?: string;
  logoSrc?: string;
  href?: string;
  caseStudy: {
    summary: string;
    role: string;
    techStack: string[];
    challenges: CaseStudyChallenge[];
  };
};

export const PROJECTS: Project[] = [
  {
    slug: "calorichat",
    name: "Calorichat",
    tagline: "AI Calorie Tracker and Nutrition Coach",
    kind: "Product",
    gradient: "from-teal-500 to-orange-600",
    imageSrc: "/calorichat-3d-render.png",
    logoSrc: "/logo-calorichat.png",
    href: "https://calorichat.com",
    caseStudy: {
      summary:
        "Calorichat is an AI-powered nutrition tracking application that lets users log meals through natural language and receive personalized coaching. Built as an internal Astravia product, it showcases how conversational AI can simplify tedious health tracking workflows.",
      role: "Full-Stack Developer & Product Owner",
      techStack: [
        "Next.js",
        "React",
        "TypeScript",
        "OpenAI API",
        "WhatsApp Business API",
        "PostgreSQL",
        "Tailwind CSS",
      ],
      challenges: [
        {
          title: "Natural Language Meal Parsing",
          description:
            "Users needed to log meals in plain language (e.g. \"a bowl of rice with grilled chicken and a side salad\") and get accurate calorie breakdowns. The AI had to handle ambiguous quantities, regional food names, and compound dishes without frustrating the user with follow-up questions.",
          approach:
            "Designed a multi-pass parsing pipeline: the first pass extracts individual food items and inferred portions using an LLM prompt tuned with few-shot examples, and the second pass maps each item to a nutrition database for macronutrient values. A confidence score determines whether to auto-log or ask the user for clarification, keeping the interaction smooth for common cases.",
        },
        {
          title: "Streaming AI Coach Responses",
          description:
            "The nutrition coaching feature needed to feel conversational and responsive. Waiting for a full LLM response before displaying it made the experience feel sluggish, especially on slower connections.",
          approach:
            "Implemented server-sent events (SSE) to stream tokens from the AI model directly to the client as they are generated. On the frontend, a custom hook incrementally renders markdown content, giving users the impression of a real-time conversation while the full response is still being generated.",
        },
        {
          title: "Personalized Nutrition Goals",
          description:
            "Different users have vastly different caloric needs based on age, weight, activity level, and personal goals (weight loss, muscle gain, maintenance). The system had to adapt recommendations dynamically without requiring a complex onboarding flow.",
          approach:
            "Built a progressive profiling system that gathers user data over the first few interactions instead of requiring a long sign-up form. Nutritional targets are recalculated on each profile update using Mifflin-St Jeor equations and activity multipliers, and the AI coach prompt is dynamically injected with the user's current goals so responses stay contextually relevant.",
        },
        {
          title: "WhatsApp-First Architecture with User Context",
          description:
            "We wanted to make Calorichat accessible where users already spend their time — WhatsApp. This meant architecting a system where a specialized LLM could be reached through a simple chat message, while still maintaining full user context (meal history, goals, preferences) across conversations without a traditional app interface.",
          approach:
            "Built an integration layer on top of the WhatsApp Business API that receives incoming messages via webhooks, resolves the sender to an internal user profile, and assembles a context window with their recent meal logs, nutritional targets, and conversation history. This context is injected into the LLM system prompt on every request so the AI responds as a personalized coach — not a stateless chatbot. The architecture keeps the LLM specialized and lightweight while the context service handles all the user-state management separately.",
        },
        {
          title: "Paywall in the WhatsApp Interface",
          description:
            "Monetizing a product that lives entirely inside WhatsApp is a unique challenge. There is no app store, no native payment UI, and no way to gate content behind a login screen. We needed a frictionless way to enforce subscription limits and collect payments without breaking the conversational flow.",
          approach:
            "Implemented a usage-based gating system: free-tier users get a set number of AI interactions per month, tracked server-side against their phone number. When a user hits the limit, the bot responds with a personalized message and a secure, short-lived payment link that opens a Stripe checkout page pre-filled with their account info. Once payment is confirmed via Stripe webhooks, the subscription is activated instantly and the bot resumes responding — the user never leaves the WhatsApp thread for more than a few seconds.",
        },
        {
          title: "AI Tool Calls for Database Manipulation",
          description:
            "Users needed to create, edit, and delete meal records and profile data entirely through natural conversation. Telling the AI \"actually that was a small coffee, not a large\" or \"log a banana for yesterday's breakfast\" required the model to understand intent and translate it into precise database operations — without exposing raw CRUD endpoints to the user.",
          approach:
            "Leveraged the OpenAI function-calling (tool use) API to define a set of structured tools the LLM can invoke: create_meal_record, update_meal_record, delete_meal_record, and update_user_profile. Each tool has a strict JSON schema that the model must satisfy. When the model decides an action is needed, it emits a tool call with the structured parameters; the backend validates the payload, enforces ownership checks, executes the database operation, and returns the result to the model so it can confirm the change to the user in natural language. This keeps the AI in the driver's seat for UX while the backend retains full control over data integrity and authorization.",
        },
      ],
    },
  },
  {
    slug: "planperfect",
    name: "PlanPerfect",
    tagline: "Non‑profit Organization Plan Manager",
    kind: "Client Project",
    gradient: "from-indigo-500 to-cyan-500",
    imageSrc: "/planperfect-3d-render.png",
    logoSrc: "/logo-plan-perfect.png",
    href: "https://www.planperfect.co/",
    caseStudy: {
      summary:
        "PlanPerfect is a planning and calendar management tool built for non-profit organizations. It helps teams coordinate meetings, track milestones, and manage recurring events across distributed teams. This was a client project where I worked closely with the organization's leadership to deliver a solution tailored to their workflow.",
      role: "Lead Developer",
      techStack: [
        "React",
        "TypeScript",
        "Node.js",
        "PostgreSQL",
        "Tailwind CSS",
      ],
      challenges: [
        {
          title: "Recurring Meetings Module",
          description:
            "The client needed a robust recurring meetings feature — something I had not built before. Users had to create events that repeat daily, weekly, or monthly, see them on the calendar, and be able to edit or cancel individual occurrences without affecting the rest of the series.",
          approach:
            "Created a virtualized list approach for recurring events. Instead of generating infinite future instances, defined a 3-month rolling instance window: for the next 3 months on the calendar, recurring event instances are materialized as real records in the database. This makes individual edits and cancellations straightforward (just modify the instance row) while keeping storage bounded. A background job extends the window as time progresses, ensuring users always see upcoming occurrences without the system creating unbounded data.",
        },
        {
          title: "Calendar Performance with Large Event Sets",
          description:
            "Non-profits with many teams and projects could have hundreds of events visible in a single month view. Rendering all of them at once caused visible lag, especially on older devices the client's volunteers used.",
          approach:
            "Implemented viewport-based rendering so only events visible in the current scroll position are mounted in the DOM. Combined this with memoized event position calculations and a date-range query on the backend that only returns events for the currently viewed period plus a small buffer. The result was smooth scrolling even with 500+ events in a month.",
        },
        {
          title: "Multi-Timezone Team Coordination",
          description:
            "The non-profit had volunteers across multiple time zones. Meetings created in one timezone needed to display correctly for everyone, and daylight saving transitions caused edge cases where events would shift by an hour.",
          approach:
            "Stored all event times in UTC in the database and performed timezone conversion exclusively on the client side using the user's local timezone. For recurring events, the recurrence rule stores the original local time and timezone, and each instance is computed in that timezone before converting to UTC — ensuring that a \"9 AM every Monday\" meeting stays at 9 AM local time even across DST boundaries.",
        },
      ],
    },
  },
];
