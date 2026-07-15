# Svelte 5 Migration Policy

## Decision

- `cclkit4svelte` 4.x requires Svelte 5 through `peerDependencies`.
- Svelte 4 is not part of the supported runtime or development matrix for 4.x.
- The major version boundary communicates this breaking peer dependency change.

## Component Syntax

New components must use Svelte 5 syntax:

- Declare props with `$props()`.
- Use `$state()`, `$derived()`, and `$effect()` for component reactivity.
- Use event attributes and callback props instead of adding new `on:` directives or component event dispatchers.
- Prefer snippets over adding new slot-based APIs.

Existing components may remain in Svelte legacy mode while they compile and behave correctly on Svelte 5. Legacy syntax does not imply Svelte 4 support. Migrate an existing component when its behavior is changed, provided that the migration preserves its public props, callbacks, bindings, and rendered behavior. Keep syntax-only migrations separate from unrelated feature work when the change would make review or regression analysis harder.

## Migration Work Packages

1. Foundation: require Svelte 5, inherit the generated SvelteKit TypeScript configuration, and document the coding contract.
2. Compatibility gate: run type checking, package compilation, and Storybook compilation against the supported Svelte 5 dependency set.
3. Incremental component migration: convert legacy components to runes in component-scoped changes with Storybook interaction coverage.
4. Legacy cleanup: remove compatibility patterns only after all public components have migrated and their public APIs have been verified.

At the start of this migration, most public components still use `export let`, `on:`, or slots. Converting all of them in one change is intentionally out of scope because it would combine many independent public API risks.

The initial Svelte 5 audit split the remaining type-checking work into these issues:

- [#111: Fix public component type errors in the Svelte 5 environment](https://github.com/reiji1020/ccl-component-kit4svelte/issues/111)
- [#112: Fix Storybook type errors in the Svelte 5 environment](https://github.com/reiji1020/ccl-component-kit4svelte/issues/112)
- [#113: Fix required-prop errors in the demo route](https://github.com/reiji1020/ccl-component-kit4svelte/issues/113)

## Initial Compatibility Audit

With Svelte 5.56.4 from the lockfile:

- `pnpm run package` succeeds.
- `pnpm build-storybook` succeeds with existing compiler and accessibility warnings.
- `pnpm check` correctly scopes diagnostics to source files after inheriting the generated SvelteKit configuration. It currently reports 84 errors and 11 warnings, tracked by the follow-up issues above.

## Verification

Run these checks for changes that affect the Svelte contract or public components:

```sh
pnpm install --frozen-lockfile
pnpm check
pnpm run package
pnpm build-storybook
```

Component changes must also include or update Storybook interaction tests that verify rendered behavior rather than only checking story args.

## References

- [Svelte 5 migration guide](https://svelte.dev/docs/svelte/v5-migration-guide)
- [Svelte legacy APIs](https://svelte.dev/docs/svelte/legacy-overview)
