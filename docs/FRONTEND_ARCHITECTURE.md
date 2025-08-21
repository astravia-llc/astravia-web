# Frontend Architecture Style Guide

## Core Principle: Closest Responsibility + Route-Based Features

**If something is only used for that route/feature, it should only live in that route/feature folder.** Only move to global folders when used across multiple features. In Next.js App Router, **each route is its own feature**.

## Next.js App Router Feature Structure

Each route should follow this structure, where `page.tsx` serves only as an **entry point** and delegates to a dedicated feature page component:

```
app/(dashboard)/[feature-name]/
├── page.tsx                        # Entry point only - delegates to feature.page.tsx
├── feature.page.tsx                # Main UI component for this route
├── actions/                        # Server actions specific to this route
│   └── [feature-name].actions.ts
├── components/                     # Route-specific components
│   ├── component-a.tsx
│   ├── component-b.tsx
│   └── index.ts                    # Barrel exports
├── hooks/                          # Route-specific hooks
│   └── use-[feature-name].ts
├── types/                          # Route-specific types
│   └── index.ts
├── constants/                      # Route-specific constants
│   └── index.ts
└── utils/                          # Route-specific utilities
    └── [feature-name]-utils.ts
```

### Entry Point Pattern (`page.tsx`)

The `page.tsx` file should be minimal and only handle:
- Server-side data fetching
- Authentication checks
- Redirects
- Passing data to the feature page component

```typescript
// app/(dashboard)/settings/page.tsx
export const dynamic = "force-dynamic";

import { redirect } from "next/navigation";
import { getCurrentProfile } from "@/app/actions/profile-actions";
import { SettingsFeaturePage } from "./settings.feature.page";

export default async function SettingsPage() {
  // Authentication
  const { success, profile } = await getCurrentProfile();
  if (!success || !profile) {
    redirect("/login");
  }

  // Server-side data fetching
  const billingResult = await getBillingDashboardData();

  // Delegate to feature component
  return (
    <SettingsFeaturePage 
      profile={profile}
      billingData={billingResult?.data}
    />
  );
}
```

### Feature Page Component (`feature.page.tsx`)

The feature page component contains all the UI logic and client-side behavior:

```typescript
// app/(dashboard)/settings/settings.feature.page.tsx
'use client';

import { useState } from 'react';
import { AccountSettings, BuilderSettings } from './components';
import { useSettingsData } from './hooks/use-settings-data';

interface SettingsFeaturePageProps {
  profile: Profile;
  billingData?: BillingData;
}

export function SettingsFeaturePage({ profile, billingData }: SettingsFeaturePageProps) {
  const [activeTab, setActiveTab] = useState('account');
  const { updateSettings } = useSettingsData();

  return (
    <div className="container mx-auto p-6 space-y-6">
      {/* Feature UI implementation */}
    </div>
  );
}
```

## Next.js-Specific Patterns

### Server Actions Structure

Each route should have its own `actions/` folder containing server actions specific to that feature:

```
app/(dashboard)/assistants/[id]/
├── actions/
│   ├── assistant-crud.actions.ts    # CRUD operations
│   ├── file-upload.actions.ts       # File handling
│   └── preview.actions.ts           # Preview functionality
```

```typescript
// app/(dashboard)/assistants/[id]/actions/assistant-crud.actions.ts
'use server';

import { revalidatePath } from 'next/cache';
import { prismaExec } from '@/lib/prisma';

export async function updateAssistant(id: string, data: AssistantUpdateData) {
  const [result, error] = await prismaExec(
    () => prisma.assistantDefinition.update({
      where: { id },
      data,
    }),
    'Failed to update assistant'
  );

  if (error) {
    return { success: false, error };
  }

  revalidatePath('/admin/assistants');
  return { success: true, assistant: result };
}
```

### API Routes Organization

API routes should mirror the feature structure and handle external integrations:

```
app/api/
├── stripe/
│   ├── webhook/
│   │   ├── route.ts
│   │   └── utils/
│   │       ├── handle-subscription-update.ts
│   │       └── handle-payment-success.ts
│   └── checkout-session/
│       └── route.ts
├── assistants/
│   └── [id]/
│       └── chat/
│           └── route.ts
└── groups/
    └── [id]/
        └── billing/
            └── route.ts
```

### Dynamic Routes and Params

For dynamic routes, always use the async params pattern:

```typescript
// app/(dashboard)/assistants/[id]/page.tsx
interface PageProps {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function AssistantPage({ params, searchParams }: PageProps) {
  const { id } = await params;
  const { tab = 'basic' } = await searchParams;
  
  // Server logic
  return <AssistantFeaturePage assistantId={id} defaultTab={tab} />;
}
```

## Data Management Architecture

### Server Actions Over API Routes

Prefer server actions for form submissions and data mutations. Reserve API routes for:
- External webhooks
- Third-party integrations
- Public endpoints
- Complex streaming responses

```typescript
// ✅ Good - Use server actions for forms
'use server';

export async function createAssistant(data: AssistantFormData) {
  // Server-side logic with automatic revalidation
}

// ❌ Avoid - Don't use API routes for simple CRUD
// app/api/assistants/route.ts - unnecessary for internal forms
```

### Database Operations

Use the established Prisma patterns from the existing codebase:

```typescript
import { prismaExec, serializePrismaData } from '@/lib/prisma';

export async function getAssistantDetails(id: string) {
  const [result, error] = await prismaExec(
    () => prisma.assistantDefinition.findUnique({
      where: { id },
      include: {
        files: true,
        group: true,
      },
    }),
    'Failed to fetch assistant details'
  );

  if (error) {
    return { success: false, error };
  }

  return { 
    success: true, 
    data: serializePrismaData(result) 
  };
}
```

### Multi-Tenant Data Access

Always respect the multi-tenant architecture and RLS policies:

```typescript
// app/(dashboard)/builder/[subdomain]/actions/subdomain.actions.ts
'use server';

import { getGroupContext } from '@/lib/group';
import { getCurrentProfile } from '@/app/actions/profile-actions';

export async function updateSubdomainSettings(data: SubdomainSettings) {
  // Verify tenant context
  const groupContext = await getGroupContext();
  if (groupContext.isRoot) {
    throw new Error('Invalid context for subdomain operation');
  }

  // Verify user permissions
  const { profile } = await getCurrentProfile();
  if (!profile) {
    throw new Error('Authentication required');
  }

  // RLS policies will automatically filter data
  // ...
}
```

## Component Architecture

### Feature Component Organization

Components should be organized by the route they serve:

```
app/(dashboard)/admin/assistants/[id]/components/
├── basic-information-card.tsx
├── configuration-card.tsx
├── ai-instructions-card.tsx
├── preview-chat.tsx
└── index.ts                        # Barrel exports for clean imports
```

```typescript
// app/(dashboard)/admin/assistants/[id]/components/index.ts
export { BasicInformationCard } from './basic-information-card';
export { ConfigurationCard } from './configuration-card';
export { AIInstructionsCard } from './ai-instructions-card';
export { PreviewChat } from './preview-chat';
```

### Shared Components

Only move components to the global `components/` folder when used across multiple features:

```
components/
├── ui/                            # shadcn/ui components
├── chat/                          # Reusable chat components
├── dashboard/                     # Shared dashboard layouts
├── branding/                      # Multi-tenant theming
├── auth/                          # Authentication wrappers
└── paywall/                       # Subscription enforcement
```

### Client vs Server Components

Follow Next.js 15 patterns for component boundaries:

```typescript
// Server Component - handles data fetching
export default async function AssistantPage({ params }: PageProps) {
  const { id } = await params;
  const assistantData = await getAssistantDetails(id);
  
  return <AssistantFeaturePage {...assistantData} />;
}

// Client Component - handles interactivity
'use client';

export function AssistantFeaturePage({ assistantData }: Props) {
  const [editing, setEditing] = useState(false);
  // Client-side logic
}
```

## Styling and UI Guidelines

### Tailwind CSS Standards

- Use Tailwind classes exclusively
- Leverage the design system from `components/ui/`
- Follow responsive design patterns
- Respect the multi-tenant theming system

```typescript
// ✅ Good - Responsive, semantic classes
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
  <Card className="h-fit">
    <CardHeader>
      <CardTitle className="text-xl font-semibold">Settings</CardTitle>
    </CardHeader>
  </Card>
</div>

// ❌ Avoid - Custom CSS or arbitrary values without design system approval
<div style={{ display: 'grid' }} className="custom-grid">
```

### shadcn/ui Component Usage

Leverage the existing component library consistently:

```typescript
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Form, FormField, FormItem } from '@/components/ui/form';
import { useToast } from '@/components/ui/use-toast';
```

## Code Style Guidelines

### Export Patterns

- **Use named exports instead of default exports** for components and utilities
- Reserve default exports only for Next.js pages and route handlers

```typescript
// ✅ Good - Named exports
export const AssistantCard = ({ assistant }: AssistantCardProps) => {
  return <Card>{/* ... */}</Card>;
};

export const useAssistantData = () => {
  // hook logic
};

// ✅ Good - Default export only for pages
export default function AssistantPage() {
  return <AssistantFeaturePage />;
}
```

### React Patterns

#### Component Size and Organization

- **Keep components focused and small** - break large components into smaller, reusable pieces
- **Extract business logic** into utility functions or custom hooks when components grow complex
- **Single responsibility principle** - each component should have one clear purpose and be easy to test
- **Prefer `function` keyword over `const`** for function declarations

#### Minimal State Management

- Derive state from props when possible  
- **Avoid unnecessary `useCallback` and `useMemo`** - only use when actually needed for performance optimization
- Use server state (server actions + revalidation) over client state

```typescript
// ✅ Good - Derive from props
export const AssistantList = ({ assistants, filter }: Props) => {
  const filteredAssistants = assistants.filter(a => a.status === filter);
  return <div>{/* render */}</div>;
};

// ❌ Avoid - Unnecessary client state
const [filteredAssistants, setFilteredAssistants] = useState([]);
useEffect(() => {
  setFilteredAssistants(assistants.filter(a => a.status === filter));
}, [assistants, filter]);
```

#### Server Actions for Forms

Use React Hook Form with server actions:

```typescript
'use client';

import { useForm } from 'react-hook-form';
import { useTransition } from 'react';
import { updateAssistant } from './actions/assistant-crud.actions';

export function AssistantForm({ assistant }: Props) {
  const [isPending, startTransition] = useTransition();
  const form = useForm<AssistantFormData>();

  const onSubmit = (data: AssistantFormData) => {
    startTransition(async () => {
      await updateAssistant(assistant.id, data);
      // Next.js automatically revalidates and updates UI
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        {/* form fields */}
        <Button type="submit" disabled={isPending}>
          {isPending ? 'Saving...' : 'Save'}
        </Button>
      </form>
    </Form>
  );
}
```

## Type Management

### Feature-Level Types First

Define types at the route level initially, promote to global only when shared:

```typescript
// app/(dashboard)/assistants/[id]/types/index.ts
export interface AssistantFormData {
  title: string;
  description: string;
  instructions: string;
  // ...
}

export interface AssistantPageProps {
  assistantData: AssistantFormData;
  files: FileData[];
}
```

### Database Type Flow

1. **Generated Types**: `@prisma/client` generates base types
2. **Global Types**: `types/index.ts` for shared, transformed types
3. **Route Types**: Route-specific extensions and compositions

```typescript
// types/index.ts - Global transformed types
import type { AssistantDefinition, Group } from '@prisma/client';

export type AssistantWithGroup = AssistantDefinition & {
  group: Group | null;
  files: FileData[];
};

// app/(dashboard)/assistants/[id]/types/index.ts - Route-specific types
export interface AssistantFormValues extends Pick<AssistantDefinition, 'title' | 'description'> {
  // Route-specific extensions
  isDraft: boolean;
}
```

## Technology Stack Integration

### Authentication (Supabase)

Always check authentication at the page level:

```typescript
// page.tsx - Server component
export default async function Page() {
  const { success, profile } = await getCurrentProfile();
  if (!success || !profile) {
    redirect('/login');
  }
  
  return <FeaturePage profile={profile} />;
}
```

### Database (Prisma + Supabase)

Use the established patterns with RLS:

```typescript
// Server actions automatically respect RLS policies
'use server';

export async function getUserAssistants() {
  const [result, error] = await prismaExec(
    () => prisma.assistantDefinition.findMany({
      // RLS automatically filters by user/tenant
      include: { group: true }
    }),
    'Failed to fetch assistants'
  );
  
  return { success: !error, data: result, error };
}
```

### Payments (Stripe + Stripe Connect)

Handle billing at the route level with proper tenant isolation:

```typescript
// app/(dashboard)/billing/actions/billing.actions.ts
'use server';

import { getGroupContext } from '@/lib/group';
import Stripe from 'stripe';

export async function createCheckoutSession(priceId: string) {
  const groupContext = await getGroupContext();
  
  // Use Connect account for tenant billing
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
  
  const session = await stripe.checkout.sessions.create({
    // ...
  }, {
    stripeAccount: groupContext.group?.stripeConnectAccountId
  });
  
  return { success: true, url: session.url };
}
```

## File Organization Examples

### Complex Feature Structure

```
app/(dashboard)/admin/assistants/[id]/
├── page.tsx                        # Entry point
├── assistant-detail.feature.page.tsx # Main UI
├── actions/
│   ├── assistant-crud.actions.ts
│   ├── file-upload.actions.ts
│   └── preview.actions.ts
├── components/
│   ├── basic-information-card.tsx
│   ├── configuration-card.tsx
│   ├── ai-instructions-card.tsx
│   ├── file-upload-zone.tsx
│   ├── preview-chat.tsx
│   └── index.ts
├── hooks/
│   ├── use-assistant-data.ts
│   └── use-file-operations.ts
├── types/
│   └── index.ts
├── constants/
│   └── index.ts
└── utils/
    └── assistant-utils.ts
```

### Simple Feature Structure

```
app/(dashboard)/settings/
├── page.tsx                        # Entry point
├── settings.feature.page.tsx       # Main UI
├── actions/
│   └── settings.actions.ts
├── components/
│   ├── account-settings.tsx
│   ├── billing-settings.tsx
│   └── index.ts
└── types/
    └── index.ts
```

## Migration Strategy

When refactoring existing code to follow this architecture:

1. **Extract feature page components** from existing `page.tsx` files
2. **Move route-specific components** from global `components/` to route folders
3. **Create dedicated `actions/` folders** for each route
4. **Consolidate route-specific types** into route `types/` folders
5. **Update imports** to use barrel exports from route components
6. **Apply Next.js 15 patterns** (async params, improved server actions)

## Benefits

- **Route-Based Organization**: Everything for a route lives together
- **Clear Separation**: Entry points vs. UI components vs. business logic
- **Next.js Optimization**: Proper server/client boundaries
- **Scalable**: Features can be developed independently
- **Maintainable**: Easy to find and modify route-specific code
- **Type Safety**: Route-specific types prevent cross-feature pollution
- **Performance**: Server actions reduce client-side JavaScript

## Important Notes

- **This document should be referenced for all new routes and refactoring**
- Always use server actions for data mutations when possible
- Respect the multi-tenant architecture and RLS policies
- Follow the established Prisma patterns for database operations
- Keep `page.tsx` files minimal - they should only handle server-side concerns
- Use `feature.page.tsx` for all UI logic and client-side behavior
- Organize by route first, promote to global only when truly shared