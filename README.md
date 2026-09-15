# Trailase — property handovers, without the paperwork

This repository contains the public Trailase product showcase and its interactive
property-inspection example. This README is the single authoritative local
development, architecture, demo, and Railway deployment runbook.

Trailase demonstrates how a professional property operator can create a guided
inspection, share a browser link with a tenant, and receive structured condition
evidence. The tenant needs no account and installs no application.

The primary local command is:

```sh
npm run dev
```

No `.env` file, external platform, authentication provider, database, or payment
service is required. The application uses local process memory. Inspection data
resets when the Node.js service restarts.

The end-to-end product path represented by this repository is:

1. open the multilingual Trailase product page;
2. enter the operator inspection example;
3. create a Room 4B inspection;
4. copy or open the generated tenant link;
5. record condition, photographs, notes, and a signature;
6. submit the inspection;
7. return to the operator queue and see the completed record;
8. delete a demonstration record when it is no longer needed.

Trailase gathers evidence. It does not assign blame, determine liability, or
calculate a deposit deduction.

## Repository layout

```text
PersonalBrand/
├── src/
│   ├── app/                       Next.js pages, API routes, metadata, health
│   ├── models/
│   │   └── inspections/           entities, schemas, repository, service
│   ├── controllers/
│   │   └── inspections/           HTTP and browser interaction controllers
│   ├── views/
│   │   ├── inspections/           operator and tenant presentation
│   │   └── marketing/             product page and scroll story
│   ├── components/                shared navigation and UI primitives
│   └── lib/                       localization, security, brand, utilities
├── public/                        Trailase logo and property photography
├── scripts/railway-start.mjs     Railway standalone launcher
├── Dockerfile                    reproducible Railway image
├── next.config.ts                Next.js and response-header configuration
├── proxy.ts                      per-request Content Security Policy
├── package.json                  public development commands
└── CODEX_RESUME.md               repository-specific continuation notes
```

Source files stay below 300 lines. Large screens are assembled from focused
sections, steps, and state components rather than one long render file.

## 1. Requirements

Install:

- Node.js 20.18.1 or newer;
- npm;
- Git.

Docker is only required when reproducing the Railway container locally.

## 2. Install and run locally

From the repository root:

```sh
npm ci
npm run dev
```

Open:

- `http://localhost:3000` for the product showcase;
- `http://localhost:3000/operator/inspections` for the operator example.

The development server reloads when source files change. Stop it with
`Ctrl+C`.

## 3. Run the product demonstration

On the operator page, select **Create inspection**. Trailase creates a temporary
Room 4B record and displays its inspection link. The operator queue is scoped to
an anonymous HTTP-only browser-session cookie, so unrelated visitors do not see
one another's records.

Open the inspection link in a new tab or another device. Its unguessable token
acts as the tenant's temporary capability. Complete the condition steps, capture
or simulate a photograph, add notes, sign, confirm consent, and submit.

Return to the operator page and refresh the queue. The record is now completed.
The queue shows three records per page.

## 4. CRUD interface

The Next.js route handlers expose one small inspection resource:

| Operation | Method and path | Scope |
| --- | --- | --- |
| Create | `POST /api/operator/inspections` | current operator session |
| Read queue | `GET /api/operator/inspections` | current operator session |
| Read inspection | `GET /api/tenant/inspections?token=…` | tenant capability link |
| Update inspection | `PATCH /api/tenant/inspections?token=…` | tenant capability link |
| Delete | `DELETE /api/operator/inspections?id=…` | owning operator session |

Requests and responses are validated by the shared Zod schemas in
`src/models/inspections/schema.ts`.

## 5. MVC and SOLID boundaries

The project is organized by top-level MVC responsibility:

- models own entities, validation, repository contracts, and business rules;
- controllers coordinate HTTP requests and browser interactions;
- views render controller state and forward user intent;
- Next.js files under `src/app` are thin framework entry points.

The model layer imports neither React nor Next.js. `InspectionService` depends
on the `InspectionRepository` interface instead of a concrete storage class.
The process-local repository is injected by the controller composition root.
A persistent repository can therefore replace it without rewriting the service,
route handlers, or views.

Operator and tenant screens use one shared API client. Feedback and translation
functions are passed into browser controllers, keeping those controllers
independent from concrete toast and language-provider implementations.

## 6. Languages and themes

The interface supports:

- English;
- Spanish;
- French;
- Dutch.

Locale catalogs live under `src/lib/i18n/`. Add visible product copy to every
catalog rather than hardcoding it in a view. The language selector stores the
active locale in the `trailase_locale` cookie.

Light and dark themes use the same semantic color tokens. The Trailase logo,
status states, dialog text, and inspection controls must remain readable in both
themes.

## 7. Validate a change

Run all repository checks before deployment:

```sh
npm run typecheck
npm run lint
npm run build
```

`npm run build` uses the stable Next.js webpack production builder and produces
the standalone server consumed by the Docker image.

## 8. Deploy to Railway

Create one Railway service from `Rodolfo9898/PersonalBrand` and select this
repository root as the source.

Railway detects the root `Dockerfile`. Do not add separate build or start
commands. Configure:

```text
Healthcheck path: /health
```

Generate a Railway public domain. No Railway variables are required. At runtime,
`scripts/railway-start.mjs` reads `RAILWAY_PUBLIC_DOMAIN` and uses it for tenant
inspection links and canonical application URLs.

For a custom domain, optionally set:

```text
NEXT_PUBLIC_APP_URL=https://your-domain.example
```

## 9. Runtime and privacy limits

This is an interactive product example, not the complete production platform.

- inspection records live in process memory;
- a restart removes all records;
- operator queues use anonymous session isolation;
- tenant links remain usable across devices;
- photographs and signatures are demonstration evidence;
- there is no login, database, payment system, or external messaging service.

Do not use this deployment for real tenant records or legally significant
evidence.

## 10. Troubleshooting

If `npm ci` reports a package-lock mismatch, do not bypass it with
`--legacy-peer-deps`. Regenerate the lockfile from `package.json` with:

```sh
npm install
npm ci
```

If generated Next.js types reference an old route, remove only generated build
output and rebuild:

```sh
rm -rf .next
npm run build
```

If a tenant link uses `localhost` after deployment, confirm Railway has generated
a public domain. For a custom domain, set `NEXT_PUBLIC_APP_URL` to its complete
HTTPS origin and redeploy.

If the camera is unavailable, grant browser camera permission or use the
included demonstration camera capture. Camera access requires HTTPS outside
localhost.
