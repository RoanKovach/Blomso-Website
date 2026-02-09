# Logo assets & placement guide

## Available variants

| File | Description |
| ---- | ----------- |
| `mark-color.svg` | Full-color three-leaf mark (no wordmark). For light backgrounds. |
| `lockup-color.svg` | Mark + "blomso" wordmark, full color. For light backgrounds. |
| `lockup-white.svg` | Mark + "blomso" wordmark, all white. For dark backgrounds. |
| `mark-white.svg` | White mark only. For dark or brand-green backgrounds. |
| `favicon.svg` | Simplified single-leaf mark optimized for 16 × 16 / 32 × 32. |
| `social.png` | 1200 × 630 OG-image with mark, wordmark, and tagline. |

## Where each variant goes

### Navbar

- **Desktop:** `lockup-color.svg` — mark + wordmark at max-height 32 px, left-aligned.
- **Mobile:** `mark-color.svg` — mark only at 32 × 32 px to conserve horizontal space.
- **Dark/inverted nav:** swap to `lockup-white.svg` or `mark-white.svg`.

### Footer

- `lockup-white.svg` on the dark footer background.
- Sized at max-height 28 px.
- Vertically aligned with the first line of footer text.

### Favicon / browser tab

- `favicon.svg` for modern browsers (via `<link rel="icon" type="image/svg+xml">`).
- Generate `favicon.ico` (16 + 32 px) from `favicon.svg` for legacy browsers.
- Use `apple-touch-icon.png` (180 × 180) generated from the full-color mark for iOS.

### Social / Open Graph

- `social.png` (1200 × 630) as the default `og:image` and `twitter:image`.
- Keep key content within the center 1080 × 560 safe area to avoid platform cropping.
- Background should use `neutral.950` with the white lockup centered.

### App / PWA icon

- Full-color mark on a `green.100` background, 512 × 512, exported as PNG.
- Also provide 192 × 192 for the web manifest.

## Adding new assets

Place all logo files in this directory (`src/brand/logo/`). Name files with the pattern:

```
<variant>-<color-mode>.<ext>
```

Examples: `mark-color.svg`, `lockup-white.svg`, `favicon.svg`.
