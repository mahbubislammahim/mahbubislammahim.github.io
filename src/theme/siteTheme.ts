/**
 * Site accent theme — change `primary` to recolor accents (nav, icons, highlights).
 * Link colors stay on `link` / `linkHover` (dark blue) and are not tied to `primary`.
 *
 * After editing `primary`:
 * 1. Update `primaryRgb` to match.
 * 2. Tune derived primary shades if needed.
 * 3. Set `theme_color` in `public/manifest.json` to match `primary`.
 * 4. Update gradient stops in `public/logo.svg` if desired.
 */
export const siteTheme = {
  primary: "#c98e0e",
  primaryDark: "#9a6d0b",
  primaryLight: "#e0a832",
  primaryDeep: "#6d5008",
  primaryMuted: "#e8c56a",
  primaryRgb: "201, 142, 14",

  /** Body / inline hyperlinks — kept separate from accent color */
  link: "#2e48a3",
  linkHover: "#4d94c4",
  linkRgb: "46, 72, 163",
} as const;

export type SiteTheme = typeof siteTheme;

/** CSS custom properties injected on `:root` (used by `.module.css` files). */
export function getThemeCssVariables(): string {
  return `:root {
  --theme-primary: ${siteTheme.primary};
  --theme-primary-dark: ${siteTheme.primaryDark};
  --theme-primary-light: ${siteTheme.primaryLight};
  --theme-primary-deep: ${siteTheme.primaryDeep};
  --theme-primary-muted: ${siteTheme.primaryMuted};
  --theme-primary-rgb: ${siteTheme.primaryRgb};
  --theme-link: ${siteTheme.link};
  --theme-link-hover: ${siteTheme.linkHover};
  --theme-link-rgb: ${siteTheme.linkRgb};
}`;
}

/** For MUI `sx` and inline styles (accent color). */
export function primaryAlpha(alpha: number): string {
  return `rgba(${siteTheme.primaryRgb}, ${alpha})`;
}

/** For link-tinted backgrounds. */
export function linkAlpha(alpha: number): string {
  return `rgba(${siteTheme.linkRgb}, ${alpha})`;
}
