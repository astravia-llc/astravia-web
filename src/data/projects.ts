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
