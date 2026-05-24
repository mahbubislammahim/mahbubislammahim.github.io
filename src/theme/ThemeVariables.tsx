import { getThemeCssVariables } from "./siteTheme";

export default function ThemeVariables() {
  return (
    <style
      data-theme-variables
      dangerouslySetInnerHTML={{ __html: getThemeCssVariables() }}
    />
  );
}
