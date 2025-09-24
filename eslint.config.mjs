import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import importPlugin from "eslint-plugin-import";
import tseslint from "typescript-eslint";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  eslintPluginPrettierRecommended,
  {
    plugins: {
      import: importPlugin,
    },
    rules: {
      ...importPlugin.configs.recommended.rules,
      "import/no-named-as-default": "off",
      "import/no-absolute-path": "error",
      "import/no-relative-packages": "error",
      "import/order": "error",
      "@typescript-eslint/strict-boolean-expressions": [
        "error", { allowAny: true, allowNullableBoolean: true }
      ],
    },
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    ignores: ["**/*.bc.js", "**/*.res.mjs", "**/*.shim.ts", "**/*.gen.tsx"],
  },
];

export default eslintConfig;
