# Dev workflow — Claude Code hooks

## What the hooks do

Two automated checks run during Claude Code sessions to catch problems
before they land in commits:

| Hook event | Trigger | What it runs | Blocking? |
| ---------- | ------- | ------------ | --------- |
| **PostToolUse** (Edit/Write) | Every time a `.ts`, `.tsx`, `.js`, `.jsx`, or `.mjs` file is created or edited | `eslint --max-warnings 0` on the changed file, then `tsc --noEmit` on the whole project | Yes — Claude must fix errors before continuing |
| **Stop** | When Claude finishes responding | `npm run build` (production build) | Yes — a failed build re-opens the conversation for fixes |

## Where the config lives

```
.claude/
├── settings.json          # hook declarations (event → script mapping)
└── hooks/
    ├── lint-and-typecheck.sh   # PostToolUse script
    └── production-build.sh     # Stop script
```

## Enabling hooks

Hooks are active by default when Claude Code runs in this repository.
No extra setup is needed — the `.claude/settings.json` file is read
automatically.

## Disabling hooks

### Temporarily (single session)

Delete or rename `.claude/settings.json` before starting the session,
or remove the specific hook entry from the JSON:

```jsonc
// Comment out or delete the "PostToolUse" or "Stop" array to skip that hook
{
  "hooks": {
    // "PostToolUse": [ ... ],   ← disabled
    "Stop": [ ... ]
  }
}
```

### Permanently

Remove the `.claude/hooks/` directory and clear the `"hooks"` key in
`.claude/settings.json`:

```json
{
  "hooks": {}
}
```

## Running checks manually

Outside of Claude Code, you can run the same checks yourself:

```bash
# Lint a single file
npx eslint --max-warnings 0 src/app/page.tsx

# Typecheck the whole project
npx tsc --noEmit

# Production build
npm run build
```

## Troubleshooting

- **Hook times out**: The default timeout is 60 s for lint/typecheck and
  300 s for the build. If your machine is slow, increase `"timeout"` in
  `.claude/settings.json`.
- **Hook blocks unexpectedly**: Read the `reason` field in the blocking
  JSON. Fix the reported errors, then let Claude continue.
- **jq not found**: The lint hook uses `jq` to parse stdin. Install it
  with `apt-get install jq` or `brew install jq`.
