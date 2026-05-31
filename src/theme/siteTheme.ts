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
  /** Page / section background (News section gray) */
  surface: "#f9fafb",

  /** Body copy and muted text (Bootstrap / academic-homepage baseline) */
  text: "#000000",
  textMuted: "#6c757d",

  /** Main content column width */
  layoutWidth: "78%",
  layoutMaxWidth: "1200px",

  /** Shared card corner radius */
  cardRadius: "6px",

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
  --theme-surface: ${siteTheme.surface};
  --theme-text: ${siteTheme.text};
  --theme-text-muted: ${siteTheme.textMuted};
  --layout-width: ${siteTheme.layoutWidth};
  --layout-max-width: ${siteTheme.layoutMaxWidth};
  --card-radius: ${siteTheme.cardRadius};
  --font-size-base: 1rem;
  --font-size-body: 0.9375rem;
  --font-size-sm: 0.875rem;
  --font-size-section: 1rem;
  --font-size-subtitle: 1.0625rem;
  --font-size-name: 2rem;
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
