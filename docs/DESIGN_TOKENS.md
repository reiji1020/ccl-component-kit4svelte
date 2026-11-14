# Component dimensions

The package entry point loads the default CSS custom properties. To use the properties separately, import `cclkit4svelte/style.css`.

| Scope | Token suffixes and defaults |
| --- | --- |
| `--ccl-field-*` | `gap` 8px, `label-font-size` 14px, `padding-block` 10px, `padding-inline` 15px, `radius` 8px, `font-size` 16px |
| `--ccl-input-*` | `error-font-size` 12px |
| `--ccl-button-*` | `padding-block` 15px, `padding-inline` 45px, `radius` 50px, `font-size` 18px |

Use `--ccl-<role>-<property>` for dimensions. Input and Select share the field role. Button has its own role so form density can change independently.

Override the properties on an ancestor to adjust a specific form:

```css
.compact-form {
  --ccl-field-padding-block: 6px;
  --ccl-field-gap: 4px;
}
```

For future components, reuse a role when its dimensions should change together with the existing components. Preserve the current defaults when adopting tokens and check the default and overridden styles in Storybook.
