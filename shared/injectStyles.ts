import { createGenerator } from "@unocss/core";
import presetWind3 from "@unocss/preset-wind3";

export const unoGenerator = await createGenerator({
  presets: [presetWind3()],
});

export async function injectStyles(code: string, shadowRoot: ShadowRoot) {
  const { css } = await unoGenerator.generate(code, { minify: false });
  let style = shadowRoot.getElementById("uno-styles");
  if (!style) {
    style = document.createElement("style");
    style.id = "uno-styles";
    shadowRoot.appendChild(style);
  }
  style.textContent = css;
}
