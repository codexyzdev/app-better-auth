# Agent Skills

This project uses [Agent Skills](https://agentskills.io) to give the AI agent specialized knowledge and workflows.

## Skills directory

Skills are located in `.agents/skills/`. Each skill is a directory with a `SKILL.md` file.

```
.agents/skills/
├── better-auth-best-practices/       # Better Auth server/client config, sessions, plugins
├── better-auth-security-best-practices/  # Rate limiting, CSRF, cookies, secrets
├── create-auth-skill/                # Scaffold full auth flows (login, register, OAuth)
├── email-and-password-best-practices/    # Email verification, password reset, hashing
├── organization-best-practices/      # Teams/orgs plugin setup
└── two-factor-authentication-best-practices/  # 2FA with TOTP/OTP
```

## Available skills

| Skill | Description |
|-------|-------------|
| `better-auth-best-practices` | Configure Better Auth server and client, set up database adapters, manage sessions, add plugins, and handle environment variables. |
| `better-auth-security-best-practices` | Configure rate limiting, CSRF protection, trusted origins, secure cookies, and audit logging. |
| `create-auth-skill` | Scaffold and implement full authentication flows using Better Auth — login, register, OAuth, UI pages. |
| `email-and-password-best-practices` | Email verification, password reset flows, password policies, and custom hashing algorithms. |
| `organization-best-practices` | Set up the Better Auth organizations/teams plugin. |
| `two-factor-authentication-best-practices` | Add 2FA with TOTP or OTP using the Better Auth twoFactor plugin. |

## How skills are used

When the agent detects a task related to a skill's domain (e.g. "add login", "set up 2FA", "configure rate limiting"), it reads the relevant `SKILL.md` for up-to-date guidance before writing any code.

Skills follow the [Agent Skills open specification](https://agentskills.io/specification.md):
- `name` — kebab-case identifier
- `description` — what the skill does and when to activate it
- Body — step-by-step instructions, examples, and gotchas

## Project stack

- **Framework:** Next.js 16 (App Router)
- **Auth:** Better Auth v1.5
- **Database:** PostgreSQL via `pg` driver
- **Styles:** Tailwind CSS v4
- **Language:** TypeScript

## Key files

| File | Purpose |
|------|---------|
| `lib/auth.ts` | Better Auth server config |
| `lib/auth-client.ts` | Better Auth React client |
| `app/api/auth/[...all]/route.ts` | Auth route handler |
| `app/(auth)/login/page.tsx` | Login page |
| `app/(auth)/register/page.tsx` | Register page |
| `app/dashboard/layout.tsx` | Dashboard layout with sidebar nav |
| `app/dashboard/page.tsx` | Dashboard home |
| `app/dashboard/profile/page.tsx` | User profile |
| `app/dashboard/settings/page.tsx` | Account settings |

## Environment variables

```env
BETTER_AUTH_SECRET=        # 32+ char secret (openssl rand -base64 32)
BETTER_AUTH_URL=           # e.g. http://localhost:3000
NEXT_PUBLIC_BETTER_AUTH_URL=  # same as above, exposed to client
DB_NAME=
DB_USER=
DB_PASSWORD=
DB_HOST=
DB_PORT=
```

## Useful commands

```bash
# Run migrations (creates user, session, account, verification tables)
pnpx @better-auth/cli@latest migrate

# Dev server
pnpm run dev
```
